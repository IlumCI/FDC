import { useNavigate, Link } from 'react-router-dom'
import { ROADMAP } from '../content/course'
import { getModule } from '../content'
import { useStartup } from '../store/useStartup'
import { hasKey } from '../ai/client'
import { levelFromXp, levelProgress } from '../game/achievements'
import { displayedStreak } from '../lib/day'
import type { Lesson } from '../lesson/types'

// Gentle S-curve horizontal offsets for the winding path (px).
const WAVE = [0, 52, 74, 52, 0, -52, -74, -52]

function StatsBar() {
  const startup = useStartup((s) => s.startup)
  const g = startup?.meta.game
  const xp = g?.xp ?? 0
  const level = levelFromXp(xp)
  const { inLevel, pct } = levelProgress(xp)
  const streak = displayedStreak(g?.streakCount ?? 0, g?.lastActiveDay ?? '')
  const achievements = g?.achievements.length ?? 0

  return (
    <div className="flex items-center gap-4 bg-panel border border-line rounded-2xl px-4 py-3">
      <div className="text-center">
        <div className="text-2xl">🔥</div>
        <div className="font-mono text-sm">{streak}</div>
      </div>
      <div className="flex-1">
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-semibold">Level {level}</span>
          <span className="text-xs text-muted font-mono">{inLevel}/100 XP</span>
        </div>
        <div className="h-2.5 bg-panel2 rounded-full overflow-hidden mt-1">
          <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${Math.round(pct * 100)}%` }} />
        </div>
      </div>
      <Link to="/startup" className="text-center hover:opacity-80" title="Achievements & your company">
        <div className="text-2xl">🏆</div>
        <div className="font-mono text-sm">{achievements}</div>
      </Link>
    </div>
  )
}

function PathNode({
  lesson,
  state,
  offset,
  onClick,
}: {
  lesson: Lesson
  state: 'done' | 'current' | 'available'
  offset: number
  onClick: () => void
}) {
  const base = 'w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition active:scale-95'
  const cls =
    state === 'done'
      ? 'bg-accent text-ink'
      : state === 'current'
      ? 'bg-accent/20 text-accent border-2 border-accent animate-pulse'
      : 'bg-panel2 text-muted border border-line'
  return (
    <div className="flex flex-col items-center" style={{ transform: `translateX(${offset}px)` }}>
      <button onClick={onClick} className={`${base} ${cls}`} aria-label={lesson.title}>
        {state === 'done' ? '✓' : lesson.id.split('.')[1]}
      </button>
      <div
        className={`mt-2 text-xs max-w-[9rem] text-center ${
          state === 'current' ? 'text-fg font-medium' : 'text-muted'
        }`}
      >
        {state === 'current' && <div className="text-[10px] uppercase tracking-wide text-accent">Start here</div>}
        {lesson.title}
      </div>
    </div>
  )
}

export function Home() {
  const navigate = useNavigate()
  const startup = useStartup((s) => s.startup)
  const completed = new Set(startup?.meta.completedLessons ?? [])

  return (
    <div className="space-y-6 pb-10">
      <section>
        <h1 className="text-xl font-bold">Compile a company.</h1>
        <p className="text-muted text-sm mt-1">
          Business &amp; economics for engineers. Each lesson writes one real artifact into your{' '}
          <code className="text-accent">startup.json</code>.
        </p>
      </section>

      <StatsBar />

      {!hasKey() && (
        <div className="text-xs text-muted border border-dashed border-line rounded-lg p-3">
          Optional: add your Anthropic key in{' '}
          <Link to="/settings" className="text-accent underline">
            Settings
          </Link>{' '}
          for the live tutor &amp; grading. The course works fully without it.
        </div>
      )}

      {ROADMAP.map((m) => {
        const mod = getModule(m.id)
        const authored = m.status === 'authored' && mod
        if (authored && mod) {
          // Find the current node: first lesson not yet completed.
          const currentIdx = mod.lessons.findIndex((l) => !completed.has(l.id))
          return (
            <section key={m.id}>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs bg-accent text-ink rounded px-2 py-0.5">{String(m.id).padStart(2, '0')}</span>
                <h2 className="font-semibold">{m.title}</h2>
              </div>
              <div className="space-y-6 py-2">
                {mod.lessons.map((l, i) => {
                  const done = completed.has(l.id)
                  const state = done ? 'done' : i === currentIdx ? 'current' : 'available'
                  return (
                    <PathNode
                      key={l.id}
                      lesson={l}
                      state={state}
                      offset={WAVE[i % WAVE.length]}
                      onClick={() => navigate(`/lesson/${l.id}`)}
                    />
                  )
                })}
              </div>
            </section>
          )
        }
        // Planned (locked) module — a teaser row.
        return (
          <div key={m.id} className="flex items-center gap-3 rounded-xl border border-line/60 bg-panel/40 p-3 opacity-70">
            <span className="w-10 h-10 rounded-full bg-panel2 border border-line flex items-center justify-center text-muted">🔒</span>
            <div>
              <div className="text-sm text-muted">
                <span className="font-mono text-xs mr-1">{String(m.id).padStart(2, '0')}</span>
                {m.title}
              </div>
              <div className="text-xs text-muted/70">→ {m.artifact}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
