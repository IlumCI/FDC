import { z } from 'zod'

// ---------------------------------------------------------------------------
// startup.json — the learner's accumulating company.
//
// A single, typed, schema-validated document. Every module writes to a known
// slot; later modules READ earlier slots (e.g. M9's financial model reads
// `pricing` + `unitEconomics`). Append-mostly: `meta.history` is an event log
// of writes so the learner can watch the company evolve. All slots are
// optional with sane defaults so a brand-new document validates cleanly.
// ---------------------------------------------------------------------------

export const SCHEMA_VERSION = 1

export const HistoryEntry = z.object({
  ts: z.number(), // epoch ms
  lesson: z.string(), // e.g. "5.1"
  slot: z.string(), // e.g. "unitEconomics"
  summary: z.string(),
})
export type HistoryEntry = z.infer<typeof HistoryEntry>

// Gamification state (Duolingo/Sololearn feel). Persisted inside startup.json
// so it exports/imports with everything else.
export const Game = z.object({
  xp: z.number().default(0),
  streakCount: z.number().default(0),
  lastActiveDay: z.string().default(''), // local YYYY-MM-DD of last completed lesson
  achievements: z.array(z.string()).default([]),
})
export type Game = z.infer<typeof Game>

export const Meta = z.object({
  createdAt: z.number(),
  updatedAt: z.number(),
  schemaVersion: z.number().default(SCHEMA_VERSION),
  currentModule: z.number().default(0),
  completedLessons: z.array(z.string()).default([]),
  quizResults: z.record(z.string(), z.number()).default({}), // lessonId -> score 0..1
  history: z.array(HistoryEntry).default([]),
  game: Game.default({ xp: 0, streakCount: 0, lastActiveDay: '', achievements: [] }),
  // lessonId -> question step-ids still missed after the retry round; replayed
  // as warm-up review at the start of the next lesson.
  reviewQueue: z.record(z.string(), z.array(z.string())).default({}),
  // Season 1 path chosen at lesson 0.1; curates which modules appear.
  path: z.enum(['venture', 'nonprofit', 'autonomous']).default('venture'),
  pathChosen: z.boolean().default(false),
})

export const Thesis = z.object({
  domain: z.string().default(''),
  oneLiner: z.string().default(''),
})

export const RetentionPoint = z.object({
  month: z.number(),
  pct: z.number(), // % of the cohort still active
})
export type RetentionPoint = z.infer<typeof RetentionPoint>

// M5 — the deep first module. This is the load-bearing slot for the first build.
export const UnitEconomics = z.object({
  // Inputs the learner controls
  pricePerUnit: z.number().default(0), // monthly revenue per customer
  variableCostPerUnit: z.number().default(0), // COGS / support / infra per customer
  monthlyAdSpend: z.number().default(0),
  newCustomersPerMonth: z.number().default(0),
  retentionCurve: z.array(RetentionPoint).default([]),
  // Derived (computed + persisted so later modules can read without recompute)
  contributionMargin: z.number().default(0),
  contributionMarginPct: z.number().default(0),
  cac: z.number().default(0),
  avgLifetimeMonths: z.number().default(0),
  ltv: z.number().default(0),
  ltvCacRatio: z.number().default(0),
  paybackMonths: z.number().nullable().default(null),
  computedAt: z.number().nullable().default(null),
})
export type UnitEconomics = z.infer<typeof UnitEconomics>

export const PricingTier = z.object({
  name: z.string(),
  price: z.number(),
  features: z.array(z.string()).default([]),
})

export const Pricing = z.object({
  metric: z.enum(['per-seat', 'usage', 'flat', 'unset']).default('unset'),
  tiers: z.array(PricingTier).default([]),
  // A single headline price M5 can consume before M6 exists.
  headlinePrice: z.number().default(0),
})

// The remaining slots are scaffolded now (typed, defaulted) so the schema is
// complete and later modules have a place to write. They are intentionally
// light until their modules are authored.
const OpenSlot = z.record(z.string(), z.unknown()).default({})

// --- Season 2: the learner's REAL venture (not the simulated toy) ---
// Tracks real-world actions: platform tasks done (with proof), documents
// produced, and milestones hit. Distinct from the simulated slots above.
export const RealTask = z.object({
  label: z.string().default(''),
  done: z.boolean().default(false),
  proof: z.string().default(''), // URL / text / number the learner logs
  link: z.string().default(''),
  at: z.number().nullable().default(null),
})
export const RealDoc = z.object({
  label: z.string().default(''),
  status: z.enum(['todo', 'in-progress', 'done']).default('todo'),
  link: z.string().default(''), // learner's filled copy
  at: z.number().nullable().default(null),
})
export const RealMilestone = z.object({
  label: z.string().default(''),
  done: z.boolean().default(false),
  note: z.string().default(''),
  at: z.number().nullable().default(null),
})
export const RealProject = z.object({
  companyName: z.string().default(''),
  startedAt: z.number().nullable().default(null),
  tasks: z.record(z.string(), RealTask).default({}),
  documents: z.record(z.string(), RealDoc).default({}),
  milestones: z.record(z.string(), RealMilestone).default({}),
})
export type RealProject = z.infer<typeof RealProject>

export const Startup = z.object({
  meta: Meta,
  thesis: Thesis.default({ domain: '', oneLiner: '' }),
  pricing: Pricing.default({ metric: 'unset', tiers: [], headlinePrice: 0 }),
  unitEconomics: UnitEconomics.default({}),
  market: OpenSlot, // M1 / M3
  problem: OpenSlot, // M2
  positioning: OpenSlot, // M4
  gtm: OpenSlot, // M7
  sales: OpenSlot, // M8
  financials: OpenSlot, // M9
  capital: OpenSlot, // M10
  legal: OpenSlot, // M11
  strategy: OpenSlot, // M12
  realProject: RealProject.default({}), // Season 2 — the real venture
})
export type Startup = z.infer<typeof Startup>

/** A fresh document. `now` is injected so the store owns time (testable). */
export function emptyStartup(now: number): Startup {
  return Startup.parse({
    meta: {
      createdAt: now,
      updatedAt: now,
      schemaVersion: SCHEMA_VERSION,
      currentModule: 5,
      completedLessons: [],
      quizResults: {},
      history: [],
    },
  })
}

/**
 * Seed used on first run so Module 5 has upstream data to read even before
 * M0/M2/M6 exist. Meridian-adjacent defaults for a solo B2B dev-tool.
 */
export function seededStartup(now: number): Startup {
  const s = emptyStartup(now)
  s.thesis = { domain: 'B2B developer tooling', oneLiner: 'CI insights for small eng teams' }
  s.pricing = {
    metric: 'per-seat',
    headlinePrice: 40,
    tiers: [{ name: 'Team', price: 40, features: ['Up to 10 seats', 'Core insights'] }],
  }
  s.unitEconomics = UnitEconomics.parse({
    pricePerUnit: 40,
    variableCostPerUnit: 9,
    monthlyAdSpend: 2000,
    newCustomersPerMonth: 8,
    retentionCurve: [
      { month: 0, pct: 100 },
      { month: 1, pct: 88 },
      { month: 3, pct: 74 },
      { month: 6, pct: 63 },
      { month: 12, pct: 52 },
      { month: 24, pct: 41 },
    ],
  })
  return s
}
