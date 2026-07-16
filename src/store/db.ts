import { openDB, type DBSchema, type IDBPDatabase } from 'idb'
import { Startup } from './schema'

// Local-first persistence. The learner's company lives in IndexedDB and never
// leaves the device unless they explicitly export it. No backend, no accounts.

interface FDCDB extends DBSchema {
  kv: {
    key: string
    value: unknown
  }
}

const DB_NAME = 'fdc'
const STORE = 'kv'
const STARTUP_KEY = 'startup'

let dbPromise: Promise<IDBPDatabase<FDCDB>> | null = null

function db() {
  if (!dbPromise) {
    dbPromise = openDB<FDCDB>(DB_NAME, 1, {
      upgrade(d) {
        if (!d.objectStoreNames.contains(STORE)) d.createObjectStore(STORE)
      },
    })
  }
  return dbPromise
}

export async function loadStartup(): Promise<Startup | null> {
  const raw = await (await db()).get(STORE, STARTUP_KEY)
  if (!raw) return null
  const parsed = Startup.safeParse(raw)
  if (!parsed.success) {
    // Corrupt/old shape — surface via console; caller will re-seed.
    console.warn('startup.json failed validation on load; re-seeding.', parsed.error)
    return null
  }
  return parsed.data
}

export async function saveStartup(s: Startup): Promise<void> {
  // Validate on every write — engineers trust a typed document.
  const valid = Startup.parse(s)
  await (await db()).put(STORE, valid, STARTUP_KEY)
}

export async function clearStartup(): Promise<void> {
  await (await db()).delete(STORE, STARTUP_KEY)
}
