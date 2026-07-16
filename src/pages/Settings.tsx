import { useState } from 'react'
import { getSettings, saveSettings, MODEL_OPTIONS, type AISettings } from '../ai/settings'

export function Settings() {
  const [s, setS] = useState<AISettings>(getSettings())
  const [saved, setSaved] = useState(false)
  const [show, setShow] = useState(false)

  const save = () => {
    saveSettings(s)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted mt-1 text-sm">
          FDC has no backend and no accounts. The AI tutor calls Anthropic directly from this browser using
          <em> your</em> API key, stored only in this device's localStorage. Everything works without a key — the
          key just turns on the live tutor and grading.
        </p>
      </div>

      <section className="bg-panel border border-line rounded-xl p-4 space-y-4">
        <label className="block">
          <span className="text-sm font-medium">Anthropic API key</span>
          <div className="flex gap-2 mt-1">
            <input
              type={show ? 'text' : 'password'}
              value={s.apiKey}
              onChange={(e) => setS({ ...s, apiKey: e.target.value })}
              placeholder="sk-ant-…"
              className="flex-1 bg-panel2 border border-line rounded-lg px-3 py-2 font-mono text-sm"
              autoComplete="off"
              spellCheck={false}
            />
            <button onClick={() => setShow((v) => !v)} className="text-sm border border-line rounded-lg px-3 hover:bg-panel2">
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
          <span className="text-xs text-muted mt-1 block">
            Get a key at console.anthropic.com. It never leaves this device except in requests you initiate to
            Anthropic.
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-medium">Tutor model (fast, cheap — used for chat)</span>
          <select
            value={s.tutorModel}
            onChange={(e) => setS({ ...s, tutorModel: e.target.value })}
            className="w-full mt-1 bg-panel2 border border-line rounded-lg px-3 py-2 text-sm"
          >
            {MODEL_OPTIONS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium">Grader model (stronger — used for grading &amp; critique)</span>
          <select
            value={s.graderModel}
            onChange={(e) => setS({ ...s, graderModel: e.target.value })}
            className="w-full mt-1 bg-panel2 border border-line rounded-lg px-3 py-2 text-sm"
          >
            {MODEL_OPTIONS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </label>

        <button onClick={save} className="bg-accent text-ink font-semibold px-4 py-2 rounded-lg hover:brightness-110">
          {saved ? '✓ Saved' : 'Save settings'}
        </button>
      </section>
    </div>
  )
}
