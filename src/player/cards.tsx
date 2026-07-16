import { useState } from 'react'
import { Markdown } from '../lesson/Markdown'
import { UnitEconomicsArtifact } from '../lesson/artifacts/UnitEconomicsArtifact'
import { gradeFreeResponse, hasKey } from '../ai/client'
import { useStartup, type WritableSlot } from '../store/useStartup'
import type { FormField } from '../lesson/types'
import { gradeStep, type Step, type Answer } from './steps'

// Presentational single-focus cards. The player owns navigation and the
// primary CHECK/CONTINUE button; these render content and (for choices) surface
// selection state.

export function InfoCard({ step }: { step: Extract<Step, { kind: 'info' }> }) {
  return (
    <div>
      {step.eyebrow && <div className="text-xs font-mono uppercase tracking-wide text-accent mb-2">{step.eyebrow}</div>}
      <h2 className="text-xl font-bold mb-3">{step.title}</h2>
      <Markdown>{step.body}</Markdown>
    </div>
  )
}

export function ReframeCard({ step }: { step: Extract<Step, { kind: 'reframe' }> }) {
  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-wide text-accent mb-2">The engineering reframe</div>
      <div className="rounded-2xl border border-accent/40 bg-accent/5 p-4">
        <Markdown>{step.analogy}</Markdown>
      </div>
      <div className="mt-4 rounded-2xl border border-warn/40 bg-warn/5 p-4">
        <div className="text-xs uppercase tracking-wide text-warn mb-1">⚠ Where the analogy breaks</div>
        <Markdown>{step.breaks}</Markdown>
      </div>
    </div>
  )
}

export function DividerCard({ step }: { step: Extract<Step, { kind: 'divider' }> }) {
  return (
    <div className="text-center py-8">
      <div className="text-5xl mb-4">{step.emoji}</div>
      <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
      <p className="text-muted max-w-sm mx-auto">{step.body}</p>
    </div>
  )
}

export function ChoiceCard({
  step,
  selected,
  checked,
  onSelect,
}: {
  step: Extract<Step, { kind: 'choice' }>
  selected: number | null
  checked: boolean
  onSelect: (i: number) => void
}) {
  const chosenCorrect = selected != null && step.options[selected].correct
  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-wide text-muted mb-2">
        {step.instructive ? 'Decision' : 'Check your understanding'}
      </div>
      <div className="mb-4">
        <Markdown>{step.prompt}</Markdown>
      </div>
      <div className="space-y-2.5">
        {step.options.map((o, i) => {
          const isSel = selected === i
          let cls = 'border-line bg-panel hover:border-accent/50'
          if (checked) {
            if (o.correct) cls = 'border-accent bg-accent/10'
            else if (isSel) cls = 'border-danger bg-danger/10'
            else cls = 'border-line opacity-60'
          } else if (isSel) {
            cls = 'border-accent bg-panel2'
          }
          return (
            <button
              key={i}
              disabled={checked}
              onClick={() => onSelect(i)}
              className={`w-full text-left px-4 py-3 rounded-xl border transition ${cls}`}
            >
              <span className="font-mono text-xs text-muted mr-2">{String.fromCharCode(65 + i)}</span>
              {o.label}
            </button>
          )
        })}
      </div>
      {checked && selected != null && (
        <div
          className={`mt-4 rounded-xl p-3 border ${
            chosenCorrect ? 'border-accent/50 bg-accent/5' : 'border-warn/50 bg-warn/5'
          }`}
        >
          <div className={`text-sm font-semibold mb-1 ${chosenCorrect ? 'text-accent' : 'text-warn'}`}>
            {chosenCorrect ? (step.instructive ? '✓ Strong choice' : '✓ Correct') : step.instructive ? '✗ Instructive miss' : '✗ Not quite'}
          </div>
          <div className="text-sm">
            <Markdown>{step.options[selected].explain}</Markdown>
          </div>
          {!chosenCorrect && (
            <div className="text-sm mt-2 border-t border-line pt-2">
              <span className="text-accent font-medium">The strong answer: </span>
              {step.options.find((o) => o.correct)?.label}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function ArtifactCard({ step, lessonId }: { step: Extract<Step, { kind: 'artifact' }>; lessonId: string }) {
  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-wide text-accent mb-2">Build your artifact</div>
      <div className="mb-4">
        <Markdown>{step.prompt}</Markdown>
      </div>
      {step.componentKey === 'unit-economics' ? (
        <UnitEconomicsArtifact lessonId={lessonId} />
      ) : (
        <FormArtifact lessonId={lessonId} slot={step.slot} fields={step.fields ?? []} />
      )}
    </div>
  )
}

// Reusable structured-field artifact. Every module except M5 uses this to write
// its startup.json slot: typed inputs (not a blank box), merged into the slot on
// save so later modules can read it.
function FormArtifact({
  lessonId,
  slot,
  fields,
}: {
  lessonId: string
  slot: WritableSlot | null
  fields: FormField[]
}) {
  const startup = useStartup((s) => s.startup)
  const saveFields = useStartup((s) => s.saveFields)
  const current = (slot ? (startup?.[slot] as Record<string, unknown>) : undefined) ?? {}
  const [vals, setVals] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {}
    for (const f of fields) init[f.key] = current[f.key] != null ? String(current[f.key]) : ''
    return init
  })
  const [saved, setSaved] = useState(false)

  if (!slot) return null

  const set = (k: string, v: string) => {
    setVals((p) => ({ ...p, [k]: v }))
    setSaved(false)
  }

  const save = async () => {
    const out: Record<string, unknown> = {}
    for (const f of fields) {
      const raw = vals[f.key] ?? ''
      out[f.key] = f.type === 'number' ? Number(raw) || 0 : raw
    }
    const filled = fields.filter((f) => (vals[f.key] ?? '').toString().trim()).length
    await saveFields(slot, out, { lesson: lessonId, summary: `${slot}: ${filled}/${fields.length} fields` })
    setSaved(true)
  }

  return (
    <div className="space-y-3">
      {fields.map((f) => (
        <label key={f.key} className="block">
          <span className="text-sm font-medium">{f.label}</span>
          {f.help && <span className="block text-xs text-muted mb-1">{f.help}</span>}
          {f.type === 'textarea' ? (
            <textarea
              value={vals[f.key] ?? ''}
              onChange={(e) => set(f.key, e.target.value)}
              rows={3}
              placeholder={f.placeholder}
              className="w-full mt-1 bg-panel2 border border-line rounded-lg px-3 py-2 text-sm"
            />
          ) : f.type === 'select' ? (
            <select
              value={vals[f.key] ?? ''}
              onChange={(e) => set(f.key, e.target.value)}
              className="w-full mt-1 bg-panel2 border border-line rounded-lg px-3 py-2 text-sm"
            >
              <option value="">—</option>
              {(f.options ?? []).map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={f.type === 'number' ? 'number' : 'text'}
              value={vals[f.key] ?? ''}
              onChange={(e) => set(f.key, e.target.value)}
              placeholder={f.placeholder}
              className="w-full mt-1 bg-panel2 border border-line rounded-lg px-3 py-2 text-sm font-mono"
            />
          )}
        </label>
      ))}
      <button onClick={save} className="bg-accent text-ink font-semibold px-4 py-2 rounded-lg hover:brightness-110">
        {saved ? '✓ Saved to my company' : 'Save to startup.json'}
      </button>
    </div>
  )
}

export function FreeCard({ step }: { step: Extract<Step, { kind: 'free' }> }) {
  const startup = useStartup((s) => s.startup)
  const [text, setText] = useState('')
  const [grade, setGrade] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-wide text-muted mb-2">Reflect</div>
      <div className="mb-3">
        <Markdown>{step.prompt}</Markdown>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        className="w-full bg-panel border border-line rounded-xl px-3 py-2 text-sm"
        placeholder="Your answer… (optional — this one won't cost you a heart)"
      />
      {hasKey() ? (
        <button
          onClick={async () => {
            setBusy(true)
            try {
              setGrade(await gradeFreeResponse({ question: step.prompt, rubric: step.rubric, answer: text, startup }))
            } catch {
              setGrade('Grader unreachable — check your key in Settings.')
            } finally {
              setBusy(false)
            }
          }}
          disabled={busy || !text.trim()}
          className="mt-2 text-sm border border-line rounded-lg px-3 py-1.5 hover:bg-panel2 disabled:opacity-50"
        >
          {busy ? 'Grading…' : 'Grade my answer'}
        </button>
      ) : (
        <div className="text-xs text-muted mt-2">Add an Anthropic key in Settings to have this graded against your numbers.</div>
      )}
      {grade && <div className="mt-3 bg-panel border border-accent/40 rounded-xl p-3 text-sm whitespace-pre-wrap">{grade}</div>}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Season 2 graded formats (controlled by the player: answer + setAnswer + checked)
// ---------------------------------------------------------------------------

function Verdict({ correct, children }: { correct: boolean; children: React.ReactNode }) {
  return (
    <div className={`mt-4 rounded-xl p-3 border ${correct ? 'border-accent/50 bg-accent/5' : 'border-warn/50 bg-warn/5'}`}>
      <div className={`text-sm font-semibold mb-1 ${correct ? 'text-accent' : 'text-warn'}`}>{correct ? '✓ Correct' : '✗ Not quite'}</div>
      <div className="text-sm">{children}</div>
    </div>
  )
}

export function NumericCard({
  step,
  answer,
  setAnswer,
  checked,
}: {
  step: Extract<Step, { kind: 'numeric' }>
  answer: Answer
  setAnswer: (a: Answer) => void
  checked: boolean
}) {
  const correct = checked && gradeStep(step, answer)
  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-wide text-muted mb-2">Compute</div>
      <div className="mb-3">
        <Markdown>{step.prompt}</Markdown>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          disabled={checked}
          value={answer as string}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your number"
          className="w-40 bg-panel2 border border-line rounded-lg px-3 py-2 font-mono text-sm"
        />
        {step.unit && <span className="text-sm text-muted">{step.unit}</span>}
      </div>
      {checked && (
        <Verdict correct={!!correct}>
          {!correct && (
            <div className="mb-1">
              <span className="text-accent font-medium">Answer: </span>
              {step.answer}
              {step.unit ? ` ${step.unit}` : ''}
            </div>
          )}
          <Markdown>{step.explain}</Markdown>
        </Verdict>
      )}
    </div>
  )
}

export function RankCard({
  step,
  answer,
  setAnswer,
  checked,
}: {
  step: Extract<Step, { kind: 'rank' }>
  answer: Answer
  setAnswer: (a: Answer) => void
  checked: boolean
}) {
  const order = (answer as number[]) ?? []
  const correct = checked && gradeStep(step, answer)
  const move = (pos: number, dir: -1 | 1) => {
    const next = [...order]
    const to = pos + dir
    if (to < 0 || to >= next.length) return
    ;[next[pos], next[to]] = [next[to], next[pos]]
    setAnswer(next)
  }
  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-wide text-muted mb-2">Put in order</div>
      <div className="mb-3">
        <Markdown>{step.prompt}</Markdown>
      </div>
      <div className="space-y-2">
        {order.map((itemId, pos) => {
          const placed = checked && step.items[itemId].correctIndex === pos
          return (
            <div
              key={itemId}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 ${
                checked ? (placed ? 'border-accent/50 bg-accent/5' : 'border-warn/50 bg-warn/5') : 'border-line bg-panel'
              }`}
            >
              <span className="font-mono text-xs text-muted w-5">{pos + 1}</span>
              <span className="flex-1 text-sm">{step.items[itemId].text}</span>
              {!checked && (
                <div className="flex flex-col">
                  <button onClick={() => move(pos, -1)} className="text-muted hover:text-fg leading-none" aria-label="up">▲</button>
                  <button onClick={() => move(pos, 1)} className="text-muted hover:text-fg leading-none" aria-label="down">▼</button>
                </div>
              )}
            </div>
          )
        })}
      </div>
      {checked && (
        <Verdict correct={!!correct}>
          {!correct && (
            <div className="mb-1 text-sm">
              <span className="text-accent font-medium">Correct order: </span>
              {[...step.items].sort((a, b) => a.correctIndex - b.correctIndex).map((it) => it.text).join(' → ')}
            </div>
          )}
          <Markdown>{step.explain}</Markdown>
        </Verdict>
      )}
    </div>
  )
}

export function CategorizeCard({
  step,
  answer,
  setAnswer,
  checked,
}: {
  step: Extract<Step, { kind: 'categorize' }>
  answer: Answer
  setAnswer: (a: Answer) => void
  checked: boolean
}) {
  const map = (answer as Record<number, string>) ?? {}
  const correct = checked && gradeStep(step, answer)
  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-wide text-muted mb-2">Categorize</div>
      <div className="mb-3">
        <Markdown>{step.prompt}</Markdown>
      </div>
      <div className="space-y-2">
        {step.items.map((it, i) => {
          const ok = checked && map[i] === it.bucket
          return (
            <div
              key={i}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 ${
                checked ? (ok ? 'border-accent/50 bg-accent/5' : 'border-warn/50 bg-warn/5') : 'border-line bg-panel'
              }`}
            >
              <span className="flex-1 text-sm">{it.text}</span>
              <select
                disabled={checked}
                value={map[i] ?? ''}
                onChange={(e) => setAnswer({ ...map, [i]: e.target.value })}
                className="bg-panel2 border border-line rounded-lg px-2 py-1 text-sm"
              >
                <option value="">—</option>
                {step.buckets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          )
        })}
      </div>
      {checked && (
        <Verdict correct={!!correct}>
          {!correct && (
            <div className="mb-1 text-sm">
              {step.items.map((it, i) => (
                <div key={i}>
                  <span className="text-muted">{it.text}: </span>
                  <span className="text-accent">{it.bucket}</span>
                </div>
              ))}
            </div>
          )}
          <Markdown>{step.explain}</Markdown>
        </Verdict>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Season 2 real-world formats (self-contained; write the venture workspace)
// ---------------------------------------------------------------------------

export function ResourceCard({ step }: { step: Extract<Step, { kind: 'resource' }> }) {
  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-wide text-accent mb-2">Real sources</div>
      <h2 className="text-lg font-bold mb-3">{step.title}</h2>
      <div className="space-y-2">
        {step.items.map((it, i) => (
          <a
            key={i}
            href={it.url}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border border-line bg-panel px-3 py-2 hover:border-accent/50"
          >
            <div className="text-sm text-accent underline break-all">{it.label} ↗</div>
            {it.note && <div className="text-xs text-muted mt-0.5">{it.note}</div>}
          </a>
        ))}
      </div>
    </div>
  )
}

export function PlatformTaskCard({ step }: { step: Extract<Step, { kind: 'platformTask' }> }) {
  const startup = useStartup((s) => s.startup)
  const completeTask = useStartup((s) => s.completeTask)
  const setMilestone = useStartup((s) => s.setMilestone)
  const existing = startup?.realProject.tasks[step.taskKey]
  const [proof, setProof] = useState(existing?.proof ?? '')
  const done = existing?.done ?? false

  const save = async () => {
    await completeTask(step.taskKey, { done: true, proof, label: step.title })
    if (step.milestone) await setMilestone(step.taskKey, { done: true, label: step.title })
  }

  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-wide text-accent mb-2">🛠 Do it for real</div>
      <h2 className="text-lg font-bold mb-2">{step.title}</h2>
      <div className="mb-3">
        <Markdown>{step.body}</Markdown>
      </div>
      {step.links.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {step.links.map((l, i) => (
            <a key={i} href={l.url} target="_blank" rel="noreferrer" className="text-sm border border-line rounded-lg px-3 py-1.5 hover:bg-panel2 text-accent">
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
      {step.steps && step.steps.length > 0 && (
        <ol className="list-decimal pl-5 text-sm text-muted space-y-1 mb-3">
          {step.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      )}
      <label className="block">
        <span className="text-sm font-medium">{step.proofLabel}</span>
        <input
          type={step.proofKind === 'number' ? 'number' : step.proofKind === 'url' ? 'url' : 'text'}
          value={proof}
          onChange={(e) => setProof(e.target.value)}
          placeholder={step.proofKind === 'url' ? 'https://…' : 'Your proof'}
          className="w-full mt-1 bg-panel2 border border-line rounded-lg px-3 py-2 text-sm"
        />
      </label>
      <button onClick={save} className="mt-3 bg-accent text-ink font-semibold px-4 py-2 rounded-lg hover:brightness-110">
        {done ? '✓ Logged to my venture' : 'Mark done & log proof'}
      </button>
      <p className="text-[11px] text-muted mt-2">This is optional and never blocks the lesson — but doing it for real is the whole point.</p>
    </div>
  )
}

export function DocumentCard({ step }: { step: Extract<Step, { kind: 'document' }> }) {
  const startup = useStartup((s) => s.startup)
  const saveDoc = useStartup((s) => s.saveDocumentStatus)
  const existing = startup?.realProject.documents[step.docKey]
  const [link, setLink] = useState(existing?.link ?? '')
  const status = existing?.status ?? 'todo'

  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-wide text-accent mb-2">📄 Real document</div>
      <h2 className="text-lg font-bold mb-2">{step.title}</h2>
      <div className="mb-3">
        <Markdown>{step.body}</Markdown>
      </div>
      <a href={step.templateHref} download className="inline-block text-sm bg-panel2 border border-line rounded-lg px-3 py-2 hover:border-accent/50 text-accent">
        ⬇ Download template — {step.docLabel}
      </a>
      <p className="text-[11px] text-muted mt-2">Educational template — not legal, tax, or financial advice. Adapt it and have a professional review anything binding.</p>
      <label className="block mt-3">
        <span className="text-sm font-medium">Link to your filled copy (optional)</span>
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="https://… (Google Doc, Notion, etc.)"
          className="w-full mt-1 bg-panel2 border border-line rounded-lg px-3 py-2 text-sm"
        />
      </label>
      <div className="flex gap-2 mt-3">
        <button onClick={() => saveDoc(step.docKey, { status: 'in-progress', link, label: step.docLabel })} className="text-sm border border-line rounded-lg px-3 py-1.5 hover:bg-panel2">
          {status === 'in-progress' ? '● In progress' : 'Mark in progress'}
        </button>
        <button onClick={() => saveDoc(step.docKey, { status: 'done', link, label: step.docLabel })} className="text-sm bg-accent text-ink font-semibold rounded-lg px-3 py-1.5">
          {status === 'done' ? '✓ Done' : 'Mark done'}
        </button>
      </div>
    </div>
  )
}
