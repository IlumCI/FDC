import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStartup } from '../store/useStartup'

// Season 2's real-venture workspace: the learner's ACTUAL company. Shows the
// real deliverables they produce across Season 2 — platform tasks (with proof),
// documents, and milestones — none of it simulated.
export function Venture() {
  const startup = useStartup((s) => s.startup)
  const setCompanyName = useStartup((s) => s.setCompanyName)
  const [name, setName] = useState(startup?.realProject.companyName ?? '')

  if (!startup) return null
  const rp = startup.realProject
  const tasks = Object.entries(rp.tasks)
  const docs = Object.entries(rp.documents)
  const miles = Object.entries(rp.milestones)

  const done = (n: number, d: number) => (d === 0 ? 0 : Math.round((n / d) * 100))
  const tasksDone = tasks.filter(([, t]) => t.done).length
  const docsDone = docs.filter(([, d]) => d.status === 'done').length
  const milesDone = miles.filter(([, m]) => m.done).length
  const totalItems = tasks.length + docs.length + miles.length
  const totalDone = tasksDone + docsDone + milesDone
  const pct = done(totalDone, totalItems)

  const empty = totalItems === 0

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">My venture</h1>
        <p className="text-muted text-sm">
          Your real company — the deliverables you actually build in Season 2. Educational content, not legal,
          tax, or financial advice.
        </p>
      </div>

      <section className="bg-panel border border-line rounded-xl p-4 space-y-3">
        <label className="block">
          <span className="text-sm font-medium">Company / project name</span>
          <div className="flex gap-2 mt-1">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name your real venture"
              className="flex-1 bg-panel2 border border-line rounded-lg px-3 py-2 text-sm"
            />
            <button onClick={() => setCompanyName(name)} className="bg-accent text-ink font-semibold px-4 rounded-lg">
              Save
            </button>
          </div>
        </label>
        {!empty && (
          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium">Real-world progress</span>
              <span className="font-mono text-sm text-muted">
                {totalDone}/{totalItems}
              </span>
            </div>
            <div className="h-3 bg-panel2 rounded-full overflow-hidden mt-1">
              <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${pct}%` }} />
            </div>
          </div>
        )}
      </section>

      {empty ? (
        <div className="text-center text-muted py-10 border border-dashed border-line rounded-xl">
          <div className="text-3xl mb-2">🏗️</div>
          Nothing here yet. Start{' '}
          <Link to="/" className="text-accent underline">
            Semester 2
          </Link>{' '}
          and your real tasks, documents, and milestones will land here as you complete them.
        </div>
      ) : (
        <>
          <Group title="Milestones" doneN={milesDone} total={miles.length}>
            {miles.map(([id, m]) => (
              <Row key={id} label={m.label || id} done={m.done} sub={m.note} />
            ))}
          </Group>
          <Group title="Platform tasks" doneN={tasksDone} total={tasks.length}>
            {tasks.map(([id, t]) => (
              <Row key={id} label={t.label || id} done={t.done} sub={t.proof || t.link} />
            ))}
          </Group>
          <Group title="Documents" doneN={docsDone} total={docs.length}>
            {docs.map(([key, d]) => (
              <Row key={key} label={d.label || key} done={d.status === 'done'} sub={`${d.status}${d.link ? ' · ' + d.link : ''}`} />
            ))}
          </Group>
        </>
      )}
    </div>
  )
}

function Group({ title, doneN, total, children }: { title: string; doneN: number; total: number; children: React.ReactNode }) {
  if (total === 0) return null
  return (
    <section className="bg-panel border border-line rounded-xl p-4">
      <h2 className="font-semibold mb-3">
        {title} <span className="text-muted text-sm font-normal">· {doneN}/{total}</span>
      </h2>
      <div className="space-y-1.5">{children}</div>
    </section>
  )
}

function Row({ label, done, sub }: { label: string; done: boolean; sub?: string }) {
  return (
    <div className="flex items-start gap-2 text-sm">
      <span className={done ? 'text-accent' : 'text-line'}>{done ? '✓' : '○'}</span>
      <div className="flex-1">
        <div className={done ? 'text-fg' : 'text-muted'}>{label}</div>
        {sub && <div className="text-xs text-muted/70 break-all">{sub}</div>}
      </div>
    </div>
  )
}
