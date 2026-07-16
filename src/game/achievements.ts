// XP / levels and achievement definitions.

export const XP_LESSON_BASE = 10
export const XP_PER_CORRECT = 5
export const XP_FLAWLESS_BONUS = 15
export const XP_PER_LEVEL = 100

export function levelFromXp(xp: number): number {
  return Math.floor(xp / XP_PER_LEVEL) + 1
}

/** Progress within the current level, for the XP bar. */
export function levelProgress(xp: number): { inLevel: number; pct: number } {
  const inLevel = xp % XP_PER_LEVEL
  return { inLevel, pct: inLevel / XP_PER_LEVEL }
}

export interface Achievement {
  id: string
  emoji: string
  title: string
  blurb: string
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first-lesson', emoji: '🚀', title: 'Compiled', blurb: 'Finished your first lesson.' },
  { id: 'flawless', emoji: '💠', title: 'Flawless build', blurb: 'Cleared a lesson without losing a heart.' },
  { id: 'knows-cac', emoji: '📊', title: 'Knows their CAC', blurb: 'Saved your unit economics to startup.json.' },
  { id: 'streak-3', emoji: '🔥', title: 'On a roll', blurb: 'Reached a 3-day streak.' },
  { id: 'streak-7', emoji: '⚡', title: 'Compounding', blurb: 'Reached a 7-day streak.' },
  { id: 'module-5', emoji: '🏗️', title: 'Unit economics, shipped', blurb: 'Completed all of Module 5.' },
]

export const ACH_BY_ID: Record<string, Achievement> = Object.fromEntries(
  ACHIEVEMENTS.map((a) => [a.id, a])
)
