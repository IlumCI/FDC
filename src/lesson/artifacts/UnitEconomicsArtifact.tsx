import { useMemo, useState } from 'react'
import { useStartup } from '../../store/useStartup'
import { UnitEconomics } from '../../store/schema'
import {
  computeUnitEconomics,
  ltvCacVerdict,
  fmtMoney,
  fmtNum,
  type UEInputs,
} from '../../lib/unitEconomics'
import { critiqueArtifact, hasKey } from '../../ai/client'

// The computational artifact: live inputs → live outputs, written to
// startup.unitEconomics. This is the demanding case (a calculator that writes
// typed fields), designed first so the artifact system fits it from day one.

function Field(props: {
  label: string
  value: number
  onChange: (n: number) => void
  min: number
  max: number
  step: number
  prefix?: string
  suffix?: string
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className="text-sm text-muted">{props.label}</span>
        <span className="font-mono text-sm text-fg">
          {props.prefix}
          {props.value}
          {props.suffix}
        </span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <input
          type="range"
          className="flex-1 accent-accent"
          min={props.min}
          max={props.max}
          step={props.step}
          value={props.value}
          onChange={(e) => props.onChange(Number(e.target.value))}
        />
        <input
          type="number"
          className="w-20 bg-panel2 border border-line rounded px-2 py-1 font-mono text-sm"
          value={props.value}
          min={props.min}
          step={props.step}
          onChange={(e) => props.onChange(Number(e.target.value))}
        />
      </div>
    </label>
  )
}

function RetentionChart({ curve }: { curve: { month: number; pct: number }[] }) {
  const pts = [...curve].sort((a, b) => a.month - b.month)
  const maxM = Math.max(1, ...pts.map((p) => p.month))
  const W = 260
  const H = 90
  const x = (m: number) => (m / maxM) * (W - 8) + 4
  const y = (p: number) => H - 6 - (p / 100) * (H - 12)
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(p.month).toFixed(1)},${y(p.pct).toFixed(1)}`).join(' ')
  return (
    <svg width={W} height={H} className="w-full" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Retention decay curve">
      <line x1="4" y1={H - 6} x2={W - 4} y2={H - 6} stroke="#26314f" />
      <line x1="4" y1="6" x2="4" y2={H - 6} stroke="#26314f" />
      <path d={d} fill="none" stroke="#5eead4" strokeWidth="2" />
      {pts.map((p, i) => (
        <circle key={i} cx={x(p.month)} cy={y(p.pct)} r="2.5" fill="#2dd4bf" />
      ))}
    </svg>
  )
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: 'good' | 'ok' | 'bad' }) {
  const color =
    tone === 'good' ? 'text-accent' : tone === 'bad' ? 'text-danger' : tone === 'ok' ? 'text-warn' : 'text-fg'
  return (
    <div className="bg-panel2 border border-line rounded-lg p-3">
      <div className="text-xs text-muted">{label}</div>
      <div className={`font-mono text-lg ${color}`}>{value}</div>
    </div>
  )
}

export function UnitEconomicsArtifact({ lessonId }: { lessonId: string }) {
  const startup = useStartup((s) => s.startup)
  const writeSlot = useStartup((s) => s.writeSlot)

  const initial = startup?.unitEconomics
  const [inp, setInp] = useState<UEInputs>({
    pricePerUnit: initial?.pricePerUnit ?? 40,
    variableCostPerUnit: initial?.variableCostPerUnit ?? 9,
    monthlyAdSpend: initial?.monthlyAdSpend ?? 2000,
    newCustomersPerMonth: initial?.newCustomersPerMonth ?? 8,
    retentionCurve:
      initial?.retentionCurve && initial.retentionCurve.length
        ? initial.retentionCurve
        : [
            { month: 0, pct: 100 },
            { month: 1, pct: 88 },
            { month: 3, pct: 74 },
            { month: 6, pct: 63 },
            { month: 12, pct: 52 },
            { month: 24, pct: 41 },
          ],
  })
  const [saved, setSaved] = useState(false)
  const [critique, setCritique] = useState<string | null>(null)
  const [loadingCritique, setLoadingCritique] = useState(false)

  const derived = useMemo(() => computeUnitEconomics(inp), [inp])
  const verdict = ltvCacVerdict(derived.ltvCacRatio)

  const set = (patch: Partial<UEInputs>) => {
    setInp((prev) => ({ ...prev, ...patch }))
    setSaved(false)
  }
  const setRetention = (i: number, pct: number) => {
    const curve = inp.retentionCurve.map((p, idx) => (idx === i ? { ...p, pct } : p))
    set({ retentionCurve: curve })
  }

  const save = async () => {
    const value = UnitEconomics.parse({
      ...inp,
      ...derived,
      computedAt: Date.now(),
    })
    await writeSlot('unitEconomics', value, {
      lesson: lessonId,
      summary: `Unit economics: LTV ${fmtMoney(derived.ltv)}, CAC ${fmtMoney(
        derived.cac
      )}, ratio ${fmtNum(derived.ltvCacRatio)}×`,
    })
    setSaved(true)
  }

  const runCritique = async () => {
    setLoadingCritique(true)
    setCritique(null)
    try {
      await save()
      const text = await critiqueArtifact({ artifactName: 'unit economics model', startup: useStartup.getState().startup })
      setCritique(text)
    } catch (e) {
      setCritique('Could not reach the tutor. Check your API key in Settings.')
    } finally {
      setLoadingCritique(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-3">
          <Field label="Price / customer / mo" value={inp.pricePerUnit} onChange={(v) => set({ pricePerUnit: v })} min={0} max={500} step={1} prefix="$" />
          <Field label="Variable cost / customer / mo" value={inp.variableCostPerUnit} onChange={(v) => set({ variableCostPerUnit: v })} min={0} max={500} step={1} prefix="$" />
          <Field label="Monthly ad / acquisition spend" value={inp.monthlyAdSpend} onChange={(v) => set({ monthlyAdSpend: v })} min={0} max={50000} step={100} prefix="$" />
          <Field label="New customers / month" value={inp.newCustomersPerMonth} onChange={(v) => set({ newCustomersPerMonth: v })} min={0} max={1000} step={1} />
        </div>
        <div className="space-y-2">
          <div className="text-sm text-muted">Retention curve (% of cohort still active)</div>
          <div className="bg-panel2 border border-line rounded-lg p-2">
            <RetentionChart curve={inp.retentionCurve} />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {inp.retentionCurve.map((p, i) => (
              <label key={i} className="text-xs">
                <span className="text-muted">m{p.month}</span>
                <input
                  type="number"
                  className="w-full bg-panel2 border border-line rounded px-1 py-0.5 font-mono"
                  value={p.pct}
                  min={0}
                  max={100}
                  onChange={(e) => setRetention(i, Number(e.target.value))}
                />
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Stat label="Contribution margin / mo" value={fmtMoney(derived.contributionMargin)} tone={derived.contributionMargin > 0 ? 'good' : 'bad'} />
        <Stat label="Margin %" value={`${(derived.contributionMarginPct * 100).toFixed(0)}%`} />
        <Stat label="CAC" value={fmtMoney(derived.cac)} />
        <Stat label="Avg lifetime" value={`${fmtNum(derived.avgLifetimeMonths)} mo`} />
        <Stat label="LTV" value={fmtMoney(derived.ltv)} />
        <Stat label="Payback" value={derived.paybackMonths == null ? '∞' : `${fmtNum(derived.paybackMonths)} mo`} tone={derived.paybackMonths == null ? 'bad' : undefined} />
      </div>

      <div className="bg-panel2 border border-line rounded-lg p-3 flex items-center justify-between gap-3 flex-wrap">
        <div>
          <div className="text-xs text-muted">LTV : CAC — the ratio your acquisition "cache" must clear</div>
          <div className="font-mono text-2xl">
            {fmtNum(derived.ltvCacRatio)}× <span className={`text-sm ${verdict.tone === 'good' ? 'text-accent' : verdict.tone === 'bad' ? 'text-danger' : 'text-warn'}`}>({verdict.label})</span>
          </div>
        </div>
        <div className="text-sm text-muted max-w-xs">{verdict.note}</div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <button onClick={save} className="bg-accent text-ink font-semibold px-4 py-2 rounded-lg hover:brightness-110">
          {saved ? '✓ Saved to my company' : 'Save to startup.json'}
        </button>
        {hasKey() && (
          <button onClick={runCritique} disabled={loadingCritique} className="border border-line px-4 py-2 rounded-lg hover:bg-panel2 disabled:opacity-50">
            {loadingCritique ? 'Reviewing…' : 'AI code-review this artifact'}
          </button>
        )}
      </div>

      {critique && (
        <div className="bg-panel border border-accent/40 rounded-lg p-3">
          <div className="text-xs uppercase tracking-wide text-accent mb-1">AI review</div>
          <div className="text-sm whitespace-pre-wrap text-fg">{critique}</div>
        </div>
      )}
    </div>
  )
}
