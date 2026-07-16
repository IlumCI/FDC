import type { RetentionPoint, UnitEconomics } from '../store/schema'

// ---------------------------------------------------------------------------
// The cost function of a business, as pure functions.
//
// These are deliberately dependency-free and side-effect-free so they can be
// unit-tested, reused by M9's financial model, and reasoned about like any
// other function. The M5 lesson teaches exactly this math.
// ---------------------------------------------------------------------------

export interface UEInputs {
  pricePerUnit: number
  variableCostPerUnit: number
  monthlyAdSpend: number
  newCustomersPerMonth: number
  retentionCurve: RetentionPoint[]
}

/**
 * Expected customer lifetime in months = area under the retention curve.
 *
 * Retention is a decay curve; the integral of "fraction still active" over
 * time is the expected number of months a customer stays. We trapezoidally
 * integrate the (month, pct) points the learner provides. Engineering reframe:
 * this is the same integral you'd take to get expected time-to-live from a
 * survival curve.
 */
export function avgLifetimeMonths(curve: RetentionPoint[]): number {
  const pts = [...curve].sort((a, b) => a.month - b.month)
  if (pts.length === 0) return 0
  if (pts[0].month !== 0) pts.unshift({ month: 0, pct: 100 })
  let area = 0
  for (let i = 1; i < pts.length; i++) {
    const dt = pts[i].month - pts[i - 1].month
    const avg = (pts[i].pct + pts[i - 1].pct) / 2 / 100 // fraction
    area += dt * avg
  }
  return area
}

export function computeUnitEconomics(inp: UEInputs): Omit<
  UnitEconomics,
  keyof UEInputs
> & { computedAt: number | null } {
  const contributionMargin = inp.pricePerUnit - inp.variableCostPerUnit
  const contributionMarginPct =
    inp.pricePerUnit > 0 ? contributionMargin / inp.pricePerUnit : 0
  const cac =
    inp.newCustomersPerMonth > 0 ? inp.monthlyAdSpend / inp.newCustomersPerMonth : 0
  const life = avgLifetimeMonths(inp.retentionCurve)
  const ltv = contributionMargin * life
  const ltvCacRatio = cac > 0 ? ltv / cac : 0
  const paybackMonths =
    contributionMargin > 0 ? cac / contributionMargin : null
  return {
    contributionMargin,
    contributionMarginPct,
    cac,
    avgLifetimeMonths: life,
    ltv,
    ltvCacRatio,
    paybackMonths,
    computedAt: null,
  }
}

/** Health verdict for the LTV:CAC ratio — the "cache hit ratio must clear a threshold". */
export function ltvCacVerdict(ratio: number): {
  label: string
  tone: 'good' | 'ok' | 'bad'
  note: string
} {
  if (ratio <= 0)
    return {
      label: 'undefined',
      tone: 'bad',
      note: 'No positive margin or no acquisition data yet.',
    }
  if (ratio < 1)
    return {
      label: 'burning',
      tone: 'bad',
      note: 'You lose money on every customer. Growth makes this worse, not better.',
    }
  if (ratio < 3)
    return {
      label: 'thin',
      tone: 'ok',
      note: 'Positive but below the ~3× rule of thumb. Fragile to CAC increases.',
    }
  if (ratio > 5)
    return {
      label: 'under-investing?',
      tone: 'ok',
      note: 'Very high — often means you could spend more to acquire faster.',
    }
  return {
    label: 'healthy',
    tone: 'good',
    note: 'In the classic 3–5× band. Each acquisition dollar returns several.',
  }
}

export function fmtMoney(n: number): string {
  if (!isFinite(n)) return '—'
  const abs = Math.abs(n)
  const s = abs >= 1000 ? n.toLocaleString('en-US', { maximumFractionDigits: 0 }) : n.toFixed(2)
  return `$${s}`
}

export function fmtNum(n: number, digits = 1): string {
  if (!isFinite(n)) return '—'
  return n.toFixed(digits)
}
