import { create } from 'zustand'
import { Startup, seededStartup, SCHEMA_VERSION } from './schema'
import { loadStartup, saveStartup, clearStartup } from './db'

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
  exportJSON: () => string
  importJSON: (text: string) => Promise<{ ok: true } | { ok: false; error: string }>
  reset: () => Promise<void>
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
