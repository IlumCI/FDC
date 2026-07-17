import type { Module, Lesson, Path } from '../lesson/types'
import { MODULES, moduleSeason } from './index'

// ---------------------------------------------------------------------------
// Season 1 paths. The learner picks one at lesson 0.1; it curates which Season
// 1 modules appear and in what order. Bonus modules (tagged `bonus` + `paths`)
// are interleaved into the default route by `insertAfter`; a few defaults are
// substituted out on a path where they don't fit.
// ---------------------------------------------------------------------------

export interface PathMeta {
  id: Path
  label: string
  emoji: string
  blurb: string
}

export const PATHS: PathMeta[] = [
  { id: 'venture', label: 'Venture startup', emoji: '🚀', blurb: 'Build a for-profit company. The default path.' },
  { id: 'nonprofit', label: 'Non-profit', emoji: '🤝', blurb: 'Build a mission-driven organization: impact, funders, and governance.' },
  { id: 'autonomous', label: 'Autonomous corporation', emoji: '🤖', blurb: 'Build a company run by AI agents and software, with you as director.' },
]

export function pathMeta(p: Path): PathMeta {
  return PATHS.find((x) => x.id === p) ?? PATHS[0]
}

// Default Season 1 module ids to HIDE on a path (a bonus module covers the gap).
export const SUBSTITUTIONS: Record<Path, number[]> = {
  venture: [],
  // Fundraising & capital (cap tables, SAFEs, VC) doesn't apply to a 501(c)(3);
  // the "Grants, donors & development" bonus replaces it.
  nonprofit: [10],
  autonomous: [],
}

const byId = (a: Module, b: Module) => a.id - b.id

/** The ordered Season 1 module route for a path: visible defaults with bonus
 * modules interleaved at their insert points. */
export function orderedModulesForPath(path: Path): Module[] {
  const s1 = MODULES.filter((m) => moduleSeason(m) === 1)
  const hidden = SUBSTITUTIONS[path]
  const defaults = s1.filter((m) => !m.bonus && !hidden.includes(m.id)).sort(byId)
  const bonuses = s1.filter((m) => m.bonus && (m.paths?.includes(path) ?? false)).sort(byId)

  const result: Module[] = []
  const placed = new Set<number>()
  for (const d of defaults) {
    result.push(d)
    for (const b of bonuses.filter((b) => b.insertAfter === d.id)) {
      result.push(b)
      placed.add(b.id)
    }
  }
  // Fallback: any bonus whose insertAfter points at a hidden/unknown module —
  // place it after the last visible default with a smaller id, else at the end.
  for (const b of bonuses) {
    if (placed.has(b.id)) continue
    const target = b.insertAfter ?? -1
    let idx = result.length
    for (let i = result.length - 1; i >= 0; i--) {
      if (!result[i].bonus && result[i].id <= target) {
        idx = i + 1
        break
      }
    }
    result.splice(idx, 0, b)
    placed.add(b.id)
  }
  return result
}

/** Season 2 modules (path-independent), in registration order. */
export function season2Modules(): Module[] {
  return MODULES.filter((m) => moduleSeason(m) === 2)
}

/** Full ordered lesson list the learner actually progresses through on a path:
 * Season 1 (curated for the path) followed by Season 2. Used by the player for
 * prev/next navigation and warm-up carry-over. */
export function activeLessons(path: Path): Lesson[] {
  return [...orderedModulesForPath(path), ...season2Modules()].flatMap((m) => m.lessons)
}
