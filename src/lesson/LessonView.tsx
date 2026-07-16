import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Lesson, Branch, QuizQuestion, TutorHook } from './types'
import { Markdown } from './Markdown'
import { ARTIFACTS } from './artifacts/registry'
import { useStartup } from '../store/useStartup'
import { askTutor, gradeFreeResponse, harderExample, hasKey, type Msg } from '../ai/client'

// ---------------------------------------------------------------------------
// Renders one lesson as the fixed 8-slot template. Every lesson looks the
// same; only the content differs. Predictable shape = lower cognitive load.
// ---------------------------------------------------------------------------

function Slot({ n, title, subtitle, children }: { n: number; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="bg-panel border border-line rounded-xl p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-ink bg-accent rounded px-1.5 py-0.5">{n}</span>
        <h2 className="font-semibold text-fg">{title}</h2>
      </div>
      {subtitle && <p className="text-sm text-muted -mt-2 mb-3">{subtitle}</p>}
      {children}
    </section>
  )
}

function NoKeyNote() {
  return (
    <div className="text-sm text-muted border border-dashed border-line rounded-lg p-3">
      AI features are off. Add your Anthropic API key in{' '}
      <Link to="/settings" className="text-accent underline">
        Settings
      </Link>{' '}
      to enable the live tutor and grading. Everything else works without it.
    </div>
  )
}

function BranchSlot({ branch }: { branch: Branch }) {
  const [picked, setPicked] = useState<number | null>(null)
  return (
    <div>
      <Markdown>{branch.scenario}</Markdown>
      <div className="space-y-2 mt-3">
        {branch.choices.map((c, i) => {
          const isPicked = picked === i
          return (
            <div key={i}>
              <button
                onClick={() => setPicked(i)}
                className={`w-full text-left px-3 py-2 rounded-lg border transition ${
                  isPicked ? 'border-accent bg-panel2' : 'border-line hover:border-accent/50'
                }`}
              >
                <span className="font-mono text-xs text-muted mr-2">{String.fromCharCode(65 + i)}</span>
                {c.label}
                {isPicked && (
                  <span className={`ml-2 text-xs ${c.correct ? 'text-accent' : 'text-warn'}`}>
                    {c.correct ? '✓ strong choice' : '✗ instructive miss'}
                  </span>
                )}
              </button>
              {isPicked && (
                <div className="mt-1 ml-1 border-l-2 border-accent/40 pl-3">
                  <Markdown>{c.consequence}</Markdown>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function TutorSlot({ lesson }: { lesson: Lesson }) {
  const startup = useStartup((s) => s.startup)
  const [log, setLog] = useState<{ q: string; a: string }[]>([])
  const [busy, setBusy] = useState(false)
  const [input, setInput] = useState('')

  if (!hasKey()) return <NoKeyNote />

  const run = async (label: string, fn: () => Promise<string>) => {
    setBusy(true)
    setLog((l) => [...l, { q: label, a: '…' }])
    try {
      const a = await fn()
      setLog((l) => l.map((e, i) => (i === l.length - 1 ? { ...e, a } : e)))
    } catch {
      setLog((l) => l.map((e, i) => (i === l.length - 1 ? { ...e, a: 'Tutor unreachable — check your key in Settings.' } : e)))
    } finally {
      setBusy(false)
    }
  }

  const runHook = (h: TutorHook) => {
    if (h.kind === 'ask') return run(h.label, () => askTutor({ question: h.question, lessonTitle: lesson.title, startup }))
    if (h.kind === 'harder') return run(h.label, () => harderExample({ concept: h.concept, startup }))
    return run(h.label, () =>
      askTutor({ question: 'Critique the reasoning in this lesson as it applies to my company.', lessonTitle: lesson.title, startup })
    )
  }

  const askFree = () => {
    if (!input.trim()) return
    const history: Msg[] = log.flatMap((e) => [
      { role: 'user' as const, content: e.q },
      { role: 'assistant' as const, content: e.a },
    ])
    const q = input.trim()
    setInput('')
    run(q, () => askTutor({ question: q, lessonTitle: lesson.title, startup, history }))
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {lesson.tutorHooks.map((h, i) => (
          <button key={i} onClick={() => runHook(h)} disabled={busy} className="text-sm border border-line rounded-lg px-3 py-1.5 hover:bg-panel2 disabled:opacity-50">
            {h.label}
          </button>
        ))}
      </div>
      {log.length > 0 && (
        <div className="space-y-3">
          {log.map((e, i) => (
            <div key={i}>
              <div className="text-sm text-accent font-medium">▸ {e.q}</div>
              <div className="text-sm text-fg whitespace-pre-wrap mt-1">{e.a}</div>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && askFree()}
          placeholder="Ask the tutor anything about this lesson…"
          className="flex-1 bg-panel2 border border-line rounded-lg px-3 py-2 text-sm"
        />
        <button onClick={askFree} disabled={busy} className="bg-accent text-ink font-semibold px-4 rounded-lg disabled:opacity-50">
          Ask
        </button>
      </div>
    </div>
  )
}

function QuizSlot({ lesson }: { lesson: Lesson }) {
  const startup = useStartup((s) => s.startup)
  const setQuizResult = useStartup((s) => s.setQuizResult)
  const mcqs = lesson.quiz.filter((q): q is Extract<QuizQuestion, { kind: 'mcq' }> => q.kind === 'mcq')
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [grades, setGrades] = useState<Record<number, string>>({})
  const [busy, setBusy] = useState<number | null>(null)
  const [freeText, setFreeText] = useState<Record<number, string>>({})

  const recordScore = (next: Record<number, number>) => {
    const total = mcqs.length
    if (!total) return
    let correct = 0
    lesson.quiz.forEach((q, i) => {
      if (q.kind === 'mcq' && next[i] === q.answer) correct++
    })
    setQuizResult(lesson.id, correct / total)
  }

  return (
    <div className="space-y-5">
      {lesson.quiz.map((q, i) => {
        if (q.kind === 'mcq') {
          const chosen = answers[i]
          return (
            <div key={i}>
              <div className="font-medium mb-2">{q.prompt}</div>
              <div className="space-y-1.5">
                {q.options.map((opt, oi) => {
                  const isChosen = chosen === oi
                  const reveal = chosen != null
                  const correct = oi === q.answer
                  return (
                    <button
                      key={oi}
                      onClick={() => {
                        const next = { ...answers, [i]: oi }
                        setAnswers(next)
                        recordScore(next)
                      }}
                      className={`block w-full text-left px-3 py-1.5 rounded-lg border text-sm ${
                        reveal && correct
                          ? 'border-accent bg-accent/10'
                          : isChosen
                          ? 'border-danger bg-danger/10'
                          : 'border-line hover:border-accent/50'
                      }`}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
              {chosen != null && (
                <div className="text-sm text-muted mt-2 border-l-2 border-line pl-3">
                  <Markdown>{q.explain}</Markdown>
                </div>
              )}
            </div>
          )
        }
        // free-response
        return (
          <div key={i}>
            <div className="font-medium mb-2">{q.prompt}</div>
            <textarea
              value={freeText[i] ?? ''}
              onChange={(e) => setFreeText({ ...freeText, [i]: e.target.value })}
              rows={3}
              className="w-full bg-panel2 border border-line rounded-lg px-3 py-2 text-sm"
              placeholder="Your answer…"
            />
            {hasKey() ? (
              <button
                onClick={async () => {
                  setBusy(i)
                  try {
                    const g = await gradeFreeResponse({ question: q.prompt, rubric: q.rubric, answer: freeText[i] ?? '', startup })
                    setGrades({ ...grades, [i]: g })
                  } catch {
                    setGrades({ ...grades, [i]: 'Grader unreachable — check your key in Settings.' })
                  } finally {
                    setBusy(null)
                  }
                }}
                disabled={busy === i || !(freeText[i] ?? '').trim()}
                className="mt-2 text-sm border border-line rounded-lg px-3 py-1.5 hover:bg-panel2 disabled:opacity-50"
              >
                {busy === i ? 'Grading…' : 'Grade my answer'}
              </button>
            ) : (
              <div className="mt-2">
                <NoKeyNote />
              </div>
            )}
            {grades[i] && (
              <div className="mt-2 bg-panel border border-accent/40 rounded-lg p-3 text-sm whitespace-pre-wrap">{grades[i]}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function CommitSlot({ lesson }: { lesson: Lesson }) {
  const startup = useStartup((s) => s.startup)
  const markComplete = useStartup((s) => s.markLessonComplete)
  const done = startup?.meta.completedLessons.includes(lesson.id) ?? false

  // Soft gate: if the lesson has an artifact, prefer it be saved. But never
  // dead-end a stuck learner — offer a draft/skip path.
  const artifactFilled = useMemo(() => {
    if (!lesson.artifactSlot) return true
    if (lesson.artifactSlot === 'unitEconomics') return startup?.unitEconomics.computedAt != null
    const slot = startup?.[lesson.artifactSlot]
    return !!slot && Object.keys(slot as object).length > 0
  }, [lesson.artifactSlot, startup])

  return (
    <div className="space-y-3">
      <Markdown>{`**This lesson commits:** ${lesson.commitSummary}`}</Markdown>
      {lesson.artifactSlot && (
        <div className="text-sm">
          Artifact <code>{lesson.artifactSlot}</code>:{' '}
          {artifactFilled ? <span className="text-accent">✓ written to startup.json</span> : <span className="text-warn">not saved yet</span>}
        </div>
      )}
      {done ? (
        <div className="text-accent font-medium">✓ Lesson complete.</div>
      ) : (
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => markComplete(lesson.id)}
            disabled={!artifactFilled}
            className="bg-accent text-ink font-semibold px-4 py-2 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Mark lesson complete
          </button>
          {!artifactFilled && (
            <button onClick={() => markComplete(lesson.id)} className="text-sm text-muted underline hover:text-fg">
              Skip artifact & mark as draft
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export function LessonView({ lesson }: { lesson: Lesson }) {
  const Artifact = lesson.artifact ? ARTIFACTS[lesson.artifact.componentKey] : null
  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      {/* Slot 0 — Header */}
      <header className="border-b border-line pb-4">
        <div className="text-xs font-mono text-muted">
          Module {lesson.module} · Lesson {lesson.id} · ~{lesson.estMinutes} min
          {lesson.prerequisites.length > 0 && <> · needs {lesson.prerequisites.join(', ')}</>}
        </div>
        <h1 className="text-2xl font-bold mt-1">{lesson.title}</h1>
        {lesson.artifactSlot && (
          <div className="text-xs text-muted mt-1">
            Writes to <code className="text-accent">startup.{lesson.artifactSlot}</code>
          </div>
        )}
      </header>

      <Slot n={1} title="Concept">
        <Markdown>{lesson.concept}</Markdown>
      </Slot>

      <Slot n={2} title="The engineering reframe">
        <Markdown>{lesson.reframe.analogy}</Markdown>
        <div className="mt-3 border-l-2 border-warn/60 pl-3">
          <div className="text-xs uppercase tracking-wide text-warn mb-1">Where the analogy breaks</div>
          <Markdown>{lesson.reframe.breaks}</Markdown>
        </div>
      </Slot>

      <Slot n={3} title="Worked example" subtitle="Meridian — a fictional B2B dev-tool carried through every module.">
        <Markdown>{lesson.workedExample}</Markdown>
      </Slot>

      {lesson.branch && (
        <Slot n={4} title="Interactive decision">
          <BranchSlot branch={lesson.branch} />
        </Slot>
      )}

      {Artifact && lesson.artifact && (
        <Slot n={5} title="Build your artifact" subtitle="Now do it for YOUR company.">
          <Markdown>{lesson.artifact.prompt}</Markdown>
          <div className="mt-3">
            <Artifact lessonId={lesson.id} />
          </div>
        </Slot>
      )}

      <Slot n={6} title="Ask the tutor" subtitle="Scoped to this lesson and your startup.json.">
        <TutorSlot lesson={lesson} />
      </Slot>

      <Slot n={7} title="Self-check">
        <QuizSlot lesson={lesson} />
      </Slot>

      <Slot n={8} title="Commit">
        <CommitSlot lesson={lesson} />
      </Slot>
    </div>
  )
}
