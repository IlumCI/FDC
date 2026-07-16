import { Link } from 'react-router-dom'
import { ROADMAP } from '../content/course'
import { getModule } from '../content'
import { useStartup } from '../store/useStartup'
import { hasKey } from '../ai/client'

export function Home() {
  const startup = useStartup((s) => s.startup)
  const completed = new Set(startup?.meta.completedLessons ?? [])

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold">You are going to compile a company.</h1>
        <p className="text-muted mt-2 max-w-2xl">
          University-level business &amp; economics, written for engineers — no condescension, no fluff. Each
          module is a build stage. Your <code className="text-accent">startup.json</code> is the binary. Every
          lesson writes one real artifact into it. By Module 12 it links and runs.
        </p>
        {!hasKey() && (
          <div className="mt-3 text-sm text-muted border border-dashed border-line rounded-lg p-3 inline-block">
            Optional: add your Anthropic API key in{' '}
            <Link to="/settings" className="text-accent underline">
              Settings
            </Link>{' '}
            to turn on the live tutor and grading. The course works fully without it.
          </div>
        )}
      </section>

      <section>
        <h2 className="text-sm font-mono uppercase tracking-wide text-muted mb-3">The build pipeline · 12 stages</h2>
        <ol className="space-y-2">
          {ROADMAP.map((m) => {
            const mod = getModule(m.id)
            const authored = m.status === 'authored' && mod
            const doneCount = mod ? mod.lessons.filter((l) => completed.has(l.id)).length : 0
            return (
              <li
                key={m.id}
                className={`rounded-xl border p-4 ${
                  authored ? 'border-line bg-panel' : 'border-line/60 bg-panel/40'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`font-mono text-sm rounded px-2 py-0.5 mt-0.5 ${
                      authored ? 'bg-accent text-ink' : 'bg-panel2 text-muted'
                    }`}
                  >
                    {String(m.id).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <div className={authored ? 'font-semibold' : 'text-muted'}>{m.title}</div>
                    <div className="text-xs text-muted mt-0.5">→ {m.artifact}</div>

                    {authored && mod && (
                      <div className="mt-3 space-y-1.5">
                        {mod.lessons.map((l) => (
                          <Link
                            key={l.id}
                            to={`/lesson/${l.id}`}
                            className="flex items-center gap-2 text-sm px-2 py-1.5 rounded-lg hover:bg-panel2"
                          >
                            <span className={completed.has(l.id) ? 'text-accent' : 'text-line'}>
                              {completed.has(l.id) ? '●' : '○'}
                            </span>
                            <span className="font-mono text-xs text-muted">{l.id}</span>
                            <span>{l.title}</span>
                            <span className="ml-auto text-xs text-muted">~{l.estMinutes}m</span>
                          </Link>
                        ))}
                        <div className="text-xs text-muted pt-1">
                          {doneCount}/{mod.lessons.length} lessons complete
                        </div>
                      </div>
                    )}
                    {!authored && <div className="text-xs text-muted mt-1 italic">Planned — authored after the Module 5 template proves out.</div>}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </section>
    </div>
  )
}
