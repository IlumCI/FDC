import { create } from 'zustand'
import { Startup, seededStartup, SCHEMA_VERSION } from './schema'
import { loadStartup, saveStartup, clearStartup } from './db'
import { localDay, prevDay } from '../lib/day'
import {
  XP_LESSON_BASE,
  XP_PER_CORRECT,
  XP_FLAWLESS_BONUS,
} from '../game/achievements'
import { getModule } from '../content'

// Slots a lesson can write to (keeps writes honest and typed).
export type WritableSlot =
  | 'thesis'
  | 'pricing'
  | 'unitEconomics'
  | 'market'
  | 'problem'
  | 'positioning'
  | 'gtm'
  | 'sales'
  | 'financials'
  | 'capital'
  | 'legal'
  | 'strategy'

interface StartupState {
  startup: Startup | null
  loaded: boolean

  init: () => Promise<void>
  /** Replace a slot's value and append an event-log entry. Persists. */
  writeSlot: <K extends WritableSlot>(
    slot: K,
    value: Startup[K],
    meta: { lesson: string; summary: string }
  ) => Promise<void>
  markLessonComplete: (lessonId: string) => Promise<void>
  setQuizResult: (lessonId: string, score: number) => Promise<void>
  /** Merge structured fields into a slot (used by the reusable form artifact).
   * Merges rather than replaces so two modules writing the same slot (e.g. M1
   * and M3 both write `market`) accumulate instead of clobbering. */
  saveFields: (
    slot: WritableSlot,
    fields: Record<string, unknown>,
    meta: { lesson: string; summary: string }
  ) => Promise<void>
  // --- Season 2: real venture actions ---
  setCompanyName: (name: string) => Promise<void>
  completeTask: (
    id: string,
    patch: { done?: boolean; proof?: string; link?: string; label?: string }
  ) => Promise<void>
  saveDocumentStatus: (
    key: string,
    patch: { status?: 'todo' | 'in-progress' | 'done'; link?: string; label?: string }
  ) => Promise<void>
  setMilestone: (id: string, patch: { done?: boolean; note?: string; label?: string }) => Promise<void>
  /** Finalize a played lesson: award XP, update streak & achievements, and
   * persist the carry-over review queue. Returns what to celebrate. */
  finishLesson: (r: FinishLessonInput) => Promise<FinishLessonResult>
  exportJSON: () => string
  importJSON: (text: string) => Promise<{ ok: true } | { ok: false; error: string }>
  reset: () => Promise<void>
}

export interface FinishLessonInput {
  lessonId: string
  correctCount: number // graded questions answered right on first try
  heartsLost: number
  /** This lesson's question step-ids still wrong after its retry round. */
  unresolved: string[]
  /** Resolution of the previous lesson's carried-over review, if any played. */
  warmup?: { prevLessonId: string; stillWrong: string[] }
}

export interface FinishLessonResult {
  xpEarned: number
  newAchievements: string[]
  streak: number
  level: number
  totalXp: number
}

async function persist(s: Startup): Promise<Startup> {
  s.meta.updatedAt = Date.now()
  await saveStartup(s)
  return s
}

export const useStartup = create<StartupState>((set, get) => ({
  startup: null,
  loaded: false,

  async init() {
    const existing = await loadStartup()
    const startup = existing ?? (await persist(seededStartup(Date.now())))
    set({ startup, loaded: true })
  },

  async writeSlot(slot, value, meta) {
    const cur = get().startup
    if (!cur) return
    const next: Startup = structuredClone(cur)
    next[slot] = value as never
    next.meta.history = [
      ...next.meta.history,
      { ts: Date.now(), lesson: meta.lesson, slot, summary: meta.summary },
    ].slice(-500) // cap the log
    await persist(next)
    set({ startup: next })
  },

  async markLessonComplete(lessonId) {
    const cur = get().startup
    if (!cur) return
    if (cur.meta.completedLessons.includes(lessonId)) return
    const next: Startup = structuredClone(cur)
    next.meta.completedLessons = [...next.meta.completedLessons, lessonId]
    await persist(next)
    set({ startup: next })
  },

  async setQuizResult(lessonId, score) {
    const cur = get().startup
    if (!cur) return
    const next: Startup = structuredClone(cur)
    next.meta.quizResults = { ...next.meta.quizResults, [lessonId]: score }
    await persist(next)
    set({ startup: next })
  },

  async saveFields(slot, fields, meta) {
    const cur = get().startup
    if (!cur) return
    const next: Startup = structuredClone(cur)
    const existing = (next[slot] as Record<string, unknown>) ?? {}
    next[slot] = { ...existing, ...fields, _savedAt: Date.now() } as never
    next.meta.history = [
      ...next.meta.history,
      { ts: Date.now(), lesson: meta.lesson, slot, summary: meta.summary },
    ].slice(-500)
    await persist(next)
    set({ startup: next })
  },

  async setCompanyName(name) {
    const cur = get().startup
    if (!cur) return
    const next: Startup = structuredClone(cur)
    next.realProject.companyName = name
    if (!next.realProject.startedAt) next.realProject.startedAt = Date.now()
    await persist(next)
    set({ startup: next })
  },

  async completeTask(id, patch) {
    const cur = get().startup
    if (!cur) return
    const next: Startup = structuredClone(cur)
    const t = next.realProject.tasks[id] ?? { label: '', done: false, proof: '', link: '', at: null }
    next.realProject.tasks[id] = {
      label: patch.label ?? t.label,
      done: patch.done ?? t.done,
      proof: patch.proof ?? t.proof,
      link: patch.link ?? t.link,
      at: (patch.done ?? t.done) ? Date.now() : t.at,
    }
    await persist(next)
    set({ startup: next })
  },

  async saveDocumentStatus(key, patch) {
    const cur = get().startup
    if (!cur) return
    const next: Startup = structuredClone(cur)
    const d = next.realProject.documents[key] ?? { label: '', status: 'todo' as const, link: '', at: null }
    next.realProject.documents[key] = {
      label: patch.label ?? d.label,
      status: patch.status ?? d.status,
      link: patch.link ?? d.link,
      at: (patch.status ?? d.status) === 'done' ? Date.now() : d.at,
    }
    await persist(next)
    set({ startup: next })
  },

  async setMilestone(id, patch) {
    const cur = get().startup
    if (!cur) return
    const next: Startup = structuredClone(cur)
    const m = next.realProject.milestones[id] ?? { label: '', done: false, note: '', at: null }
    next.realProject.milestones[id] = {
      label: patch.label ?? m.label,
      done: patch.done ?? m.done,
      note: patch.note ?? m.note,
      at: (patch.done ?? m.done) ? Date.now() : m.at,
    }
    await persist(next)
    set({ startup: next })
  },

  async finishLesson(r) {
    const cur = get().startup
    if (!cur)
      return { xpEarned: 0, newAchievements: [], streak: 0, level: 1, totalXp: 0 }
    const next: Startup = structuredClone(cur)
    const g = next.meta.game

    // --- XP ---
    const xpEarned =
      XP_LESSON_BASE + r.correctCount * XP_PER_CORRECT + (r.heartsLost === 0 ? XP_FLAWLESS_BONUS : 0)
    g.xp += xpEarned

    // --- streak (counts a completed lesson as activity for the day) ---
    const today = localDay()
    if (g.lastActiveDay !== today) {
      g.streakCount = g.lastActiveDay === prevDay(today) ? g.streakCount + 1 : 1
      g.lastActiveDay = today
    }

    // --- completion + carry-over review queue ---
    if (!next.meta.completedLessons.includes(r.lessonId))
      next.meta.completedLessons = [...next.meta.completedLessons, r.lessonId]
    if (r.unresolved.length) next.meta.reviewQueue[r.lessonId] = r.unresolved
    else delete next.meta.reviewQueue[r.lessonId]
    if (r.warmup) {
      if (r.warmup.stillWrong.length) next.meta.reviewQueue[r.warmup.prevLessonId] = r.warmup.stillWrong
      else delete next.meta.reviewQueue[r.warmup.prevLessonId]
    }

    // --- achievements ---
    const newAchievements: string[] = []
    const unlock = (id: string, cond: boolean) => {
      if (cond && !g.achievements.includes(id)) {
        g.achievements.push(id)
        newAchievements.push(id)
      }
    }
    unlock('first-lesson', next.meta.completedLessons.length >= 1)
    unlock('flawless', r.heartsLost === 0)
    unlock('knows-cac', next.unitEconomics.computedAt != null)
    unlock('streak-3', g.streakCount >= 3)
    unlock('streak-7', g.streakCount >= 7)
    const m5 = getModule(5)
    unlock('module-5', !!m5 && m5.lessons.every((l) => next.meta.completedLessons.includes(l.id)))

    await persist(next)
    set({ startup: next })
    return {
      xpEarned,
      newAchievements,
      streak: g.streakCount,
      level: Math.floor(g.xp / 100) + 1,
      totalXp: g.xp,
    }
  },

  exportJSON() {
    const s = get().startup
    return JSON.stringify(s, null, 2)
  },

  async importJSON(text) {
    let obj: unknown
    try {
      obj = JSON.parse(text)
    } catch {
      return { ok: false, error: 'Not valid JSON.' }
    }
    const parsed = Startup.safeParse(obj)
    if (!parsed.success) {
      return { ok: false, error: 'JSON does not match the startup schema.' }
    }
    if (parsed.data.meta.schemaVersion !== SCHEMA_VERSION) {
      // Non-fatal: we accept but note it. Migration would live here.
      console.warn('Imported a different schema version.')
    }
    await persist(parsed.data)
    set({ startup: parsed.data })
    return { ok: true }
  },

  async reset() {
    await clearStartup()
    const fresh = await persist(seededStartup(Date.now()))
    set({ startup: fresh })
  },
}))
