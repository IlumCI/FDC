import { useRef, useState } from 'react'
import { useStartup } from '../store/useStartup'
import { fmtMoney, fmtNum } from '../lib/unitEconomics'
import { ACHIEVEMENTS, levelFromXp } from '../game/achievements'
import { displayedStreak } from '../lib/day'

export function StartupDoc() {
  const startup = useStartup((s) => s.startup)
  const exportJSON = useStartup((s) => s.exportJSON)
  const importJSON = useStartup((s) => s.importJSON)
  const reset = useStartup((s) => s.reset)
  const fileRef = useRef<HTMLInputElement>(null)
  const [msg, setMsg] = useState<string | null>(null)

  if (!startup) return null
  const ue = startup.unitEconomics

  const doExport = () => {
    const blob = new Blob([exportJSON()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'startup.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const doImport = async (file: File) => {
    const text = await file.text()
    const res = await importJSON(text)
    setMsg(res.ok ? '✓ Imported and validated.' : `✗ ${res.error}`)
    setTimeout(() => setMsg(null), 3000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold">My company</h1>
          <p className="text-muted text-sm">
            {startup.thesis.oneLiner || 'Your accumulating startup.json'} · {startup.meta.completedLessons.length}{' '}
            lessons committed
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={doExport} className="text-sm border border-line rounded-lg px-3 py-2 hover:bg-panel2">
            Export JSON
          </button>
          <button onClick={() => fileRef.current?.click()} className="text-sm border border-line rounded-lg px-3 py-2 hover:bg-panel2">
            Import
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && doImport(e.target.files[0])}
          />
          <button
            onClick={() => {
              if (confirm('Reset your company to the seeded starting state? This cannot be undone.')) reset()
            }}
            className="text-sm border border-danger/40 text-danger rounded-lg px-3 py-2 hover:bg-danger/10"
          >
            Reset
          </button>
        </div>
      </div>

      {msg && <div className="text-sm text-accent">{msg}</div>}

      {/* Progress & achievements */}
      <section className="bg-panel border border-line rounded-xl p-4">
        <div className="flex items-center gap-4 mb-4">
          <Kv k="Level" v={String(levelFromXp(startup.meta.game.xp))} />
          <Kv k="XP" v={String(startup.meta.game.xp)} />
          <Kv k="Streak" v={`🔥 ${displayedStreak(startup.meta.game.streakCount, startup.meta.game.lastActiveDay)}`} />
        </div>
        <h2 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted">Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {ACHIEVEMENTS.map((a) => {
            const got = startup.meta.game.achievements.includes(a.id)
            return (
              <div
                key={a.id}
                className={`flex items-center gap-2 rounded-lg border p-2 ${
                  got ? 'border-accent/40 bg-accent/5' : 'border-line opacity-50'
                }`}
                title={a.blurb}
              >
                <div className="text-2xl grayscale-0" style={{ filter: got ? 'none' : 'grayscale(1)' }}>
                  {a.emoji}
                </div>
                <div>
                  <div className="text-xs font-medium">{a.title}</div>
                  <div className="text-[10px] text-muted leading-tight">{got ? a.blurb : 'Locked'}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Unit economics summary — the one artifact filled so far */}
      <section className="bg-panel border border-line rounded-xl p-4">
        <h2 className="font-semibold mb-3">Unit economics {ue.computedAt ? '' : <span className="text-warn text-sm font-normal">· not yet saved</span>}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          <Kv k="Price / mo" v={fmtMoney(ue.pricePerUnit)} />
          <Kv k="Variable cost" v={fmtMoney(ue.variableCostPerUnit)} />
          <Kv k="Contribution margin" v={fmtMoney(ue.contributionMargin)} />
          <Kv k="CAC" v={fmtMoney(ue.cac)} />
          <Kv k="LTV" v={fmtMoney(ue.ltv)} />
          <Kv k="LTV : CAC" v={`${fmtNum(ue.ltvCacRatio)}×`} />
          <Kv k="Avg lifetime" v={`${fmtNum(ue.avgLifetimeMonths)} mo`} />
          <Kv k="Payback" v={ue.paybackMonths == null ? '∞' : `${fmtNum(ue.paybackMonths)} mo`} />
        </div>
      </section>

      {/* Event log — the company evolving */}
      <section className="bg-panel border border-line rounded-xl p-4">
        <h2 className="font-semibold mb-3">Build log</h2>
        {startup.meta.history.length === 0 ? (
          <p className="text-sm text-muted">No commits yet. Finish a lesson's artifact to write your first entry.</p>
        ) : (
          <ul className="space-y-1.5 text-sm">
            {[...startup.meta.history].reverse().map((h, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-mono text-xs text-muted whitespace-nowrap">{h.lesson}</span>
                <span className="font-mono text-xs text-accent">{h.slot}</span>
                <span className="text-muted">{h.summary}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Raw document */}
      <section className="bg-panel border border-line rounded-xl p-4">
        <h2 className="font-semibold mb-3">startup.json</h2>
        <pre className="text-xs font-mono overflow-x-auto bg-ink border border-line rounded-lg p-3 max-h-96">
          {exportJSON()}
        </pre>
      </section>
    </div>
  )
}

function Kv({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-panel2 border border-line rounded-lg p-2">
      <div className="text-xs text-muted">{k}</div>
      <div className="font-mono">{v}</div>
    </div>
  )
}
