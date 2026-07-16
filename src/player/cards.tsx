import { useState } from 'react'
import { Markdown } from '../lesson/Markdown'
import { UnitEconomicsArtifact } from '../lesson/artifacts/UnitEconomicsArtifact'
import { gradeFreeResponse, hasKey } from '../ai/client'
import { useStartup, type WritableSlot } from '../store/useStartup'
import type { FormField } from '../lesson/types'
import type { Step } from './steps'

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
