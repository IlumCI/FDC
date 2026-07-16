// Local calendar-day helpers for the streak. Uses the device's local date so a
// "day" matches the learner's wall clock, not UTC.

export function localDay(d = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function prevDay(day: string): string {
  const [y, m, d] = day.split('-').map(Number)
  const dt = new Date(y, m - 1, d)
  dt.setDate(dt.getDate() - 1)
  return localDay(dt)
}

/** Streak that should be *displayed*: the stored count is only live if the last
 * active day was today or yesterday; otherwise the streak has lapsed to 0. */
export function displayedStreak(streakCount: number, lastActiveDay: string): number {
  if (!lastActiveDay) return 0
  const today = localDay()
  if (lastActiveDay === today || lastActiveDay === prevDay(today)) return streakCount
  return 0
}
