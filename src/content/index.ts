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
import { module13 } from './module-13'
import { module14 } from './module-14'
import { module15 } from './module-15'
import { module16 } from './module-16'
import { module17 } from './module-17'
import { module18 } from './module-18'
import { module19 } from './module-19'
import { module20 } from './module-20'
import { module21 } from './module-21'
import { module22 } from './module-22'
import { module23 } from './module-23'
import { module24 } from './module-24'
import { module25 } from './module-25'
import { module26 } from './module-26'
import { module27 } from './module-27'
import { module28 } from './module-28'
import { module29 } from './module-29'
import { module30 } from './module-30'
// Season 1 bonus modules — path-curated (nonprofit 101-107, autonomous 201-207).
// They carry `bonus: true` + `paths` + `insertAfter`; the winding path filters
// and interleaves them per the learner's chosen path (see content/paths.ts).
import { module101 } from './module-101'
import { module102 } from './module-102'
import { module103 } from './module-103'
import { module104 } from './module-104'
import { module105 } from './module-105'
import { module106 } from './module-106'
import { module107 } from './module-107'
import { module201 } from './module-201'
import { module202 } from './module-202'
import { module203 } from './module-203'
import { module204 } from './module-204'
import { module205 } from './module-205'
import { module206 } from './module-206'
import { module207 } from './module-207'

// The full course. Season 1 (Foundations, M0-M12) builds a simulated company;
// Season 2 (Building for Real, M13-M30) guides the learner's actual startup.
// Adding a module = author its content object under src/content/ and register
// it here in dependency order.
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
  // Season 2 — "Building for Real"
  module13,
  module14,
  module15,
  module16,
  module17,
  module18,
  module19,
  module20,
  module21,
  module22,
  module23,
  module24,
  module25,
  module26,
  module27,
  module28,
  module29,
  module30,
  // Season 1 bonus modules (path-curated). Order here doesn't matter — the
  // path route sorts by id and splices each in after its `insertAfter` anchor.
  module101,
  module102,
  module103,
  module104,
  module105,
  module106,
  module107,
  module201,
  module202,
  module203,
  module204,
  module205,
  module206,
  module207,
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
