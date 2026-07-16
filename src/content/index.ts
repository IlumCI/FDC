import type { Module, Lesson } from '../lesson/types'
import { module0 } from './module-00'
import { module1 } from './module-01'
import { module2 } from './module-02'
import { module3 } from './module-03'
import { module4 } from './module-04'
import { module5 } from './module-05'
import { module6 } from './module-06'
import { module7 } from './module-07'
import { module8 } from './module-08'
import { module9 } from './module-09'
import { module10 } from './module-10'
import { module11 } from './module-11'
import { module12 } from './module-12'

// The full course, in dependency order (M0 → M12). Adding a module = author its
// content object under src/content/ and register it here.
export const MODULES: Module[] = [
  module0,
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
  module8,
  module9,
  module10,
  module11,
  module12,
]

export function moduleSeason(m: Module): number {
  return m.season ?? 1
}

export function modulesBySeason(season: number): Module[] {
  return MODULES.filter((m) => moduleSeason(m) === season)
}

export function getModule(id: number): Module | undefined {
  return MODULES.find((m) => m.id === id)
}

export function getLesson(id: string): { lesson: Lesson; module: Module } | undefined {
  for (const m of MODULES) {
    const lesson = m.lessons.find((l) => l.id === id)
    if (lesson) return { lesson, module: m }
  }
  return undefined
}

export function allLessons(): Lesson[] {
  return MODULES.flatMap((m) => m.lessons)
}
