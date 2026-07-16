import { useState } from 'react'
import { askTutor, type Msg } from '../ai/client'
import { useStartup } from '../store/useStartup'

// Slide-up tutor drawer, reachable from the HUD during any lesson. Scoped to
// the lesson and the learner's startup.json. Only shown when a key is set.
export function TutorDrawer({ lessonTitle, onClose }: { lessonTitle: string; onClose: () => void }) {
  const startup = useStartup((s) => s.startup)
  const [log, setLog] = useState<{ q: string; a: string }[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)

  const ask = async () => {
    const q = input.trim()
    if (!q || busy) return
    setInput('')
    setBusy(true)
    setLog((l) => [...l, { q, a: '…' }])
    const history: Msg[] = log.flatMap((e) => [
      { role: 'user' as const, content: e.q },
      { role: 'assistant' as const, content: e.a },
    ])
    try {
      const a = await askTutor({ question: q, lessonTitle, startup, history })
      setLog((l) => l.map((e, i) => (i === l.length - 1 ? { ...e, a } : e)))
    } catch {
      setLog((l) => l.map((e, i) => (i === l.length - 1 ? { ...e, a: 'Tutor unreachable — check your key in Settings.' } : e)))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center" role="dialog">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full sm:max-w-lg bg-panel border-t sm:border border-line sm:rounded-2xl max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-3 border-b border-line">
          <div className="font-semibold text-sm">💬 Tutor · {lessonTitle}</div>
          <button onClick={onClose} className="text-muted hover:text-fg">
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[120px]">
          {log.length === 0 && <div className="text-sm text-muted">Ask anything about this lesson. The tutor sees your startup.json numbers.</div>}
          {log.map((e, i) => (
            <div key={i}>
              <div className="text-sm text-accent font-medium">▸ {e.q}</div>
              <div className="text-sm whitespace-pre-wrap mt-1">{e.a}</div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-line flex gap-2">
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && ask()}
            placeholder="Ask the tutor…"
            className="flex-1 bg-panel2 border border-line rounded-lg px-3 py-2 text-sm"
          />
          <button onClick={ask} disabled={busy} className="bg-accent text-ink font-semibold px-4 rounded-lg disabled:opacity-50">
            Ask
          </button>
        </div>
      </div>
    </div>
  )
}
