import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { SEASONS } from '../content/course'
import { modulesBySeason } from '../content'
import { PATHS, orderedModulesForPath } from '../content/paths'
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
  const setPath = useStartup((s) => s.setPath)
  const completed = new Set(startup?.meta.completedLessons ?? [])
  const [season, setSeason] = useState<1 | 2>(1)
  const path = startup?.meta.path ?? 'venture'

  const modules = season === 1 ? orderedModulesForPath(path) : modulesBySeason(2)
  const seasonMeta = SEASONS.find((s) => s.id === season)!

  return (
    <div className="space-y-6 pb-10">
      <section>
        <h1 className="text-xl font-bold">Compile a company.</h1>
        <p className="text-muted text-sm mt-1">
          Business &amp; economics for engineers — from your first principles to a real, running startup.
        </p>
      </section>

      <StatsBar />

      {/* Season switcher */}
      <div className="flex gap-2">
        {SEASONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setSeason(s.id)}
            className={`flex-1 rounded-xl border px-3 py-2 text-left transition ${
              season === s.id ? 'border-accent bg-accent/10' : 'border-line bg-panel hover:border-accent/40'
            }`}
          >
            <div className={`text-sm font-semibold ${season === s.id ? 'text-accent' : 'text-fg'}`}>{s.title}</div>
          </button>
        ))}
      </div>
      <p className="text-xs text-muted -mt-3">{seasonMeta.subtitle}</p>

      {season === 1 && (
        <>
          <div>
            <div className="text-xs font-mono uppercase tracking-wide text-muted mb-2">Your path</div>
            <div className="grid grid-cols-3 gap-2">
              {PATHS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPath(p.id)}
                  className={`rounded-xl border px-2 py-2 text-center transition ${
                    path === p.id ? 'border-accent bg-accent/10' : 'border-line bg-panel hover:border-accent/40'
                  }`}
                  title={p.blurb}
                >
                  <div className="text-xl">{p.emoji}</div>
                  <div className={`text-[11px] mt-0.5 leading-tight ${path === p.id ? 'text-accent font-semibold' : 'text-muted'}`}>
                    {p.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted -mt-3">
            Builds a simulated {path === 'nonprofit' ? 'non-profit' : path === 'autonomous' ? 'autonomous company' : 'company'} —{' '}
            <Link to="/startup" className="text-accent underline">
              view startup.json
            </Link>
            .
          </p>
        </>
      )}

      {season === 2 && (
        <div className="text-xs text-muted border border-dashed border-accent/40 rounded-lg p-3">
          Season 2 tracks your <strong>real</strong> venture. Progress and deliverables live in{' '}
          <Link to="/venture" className="text-accent underline">
            My venture
          </Link>
          . (Educational content — not legal, tax, or financial advice.)
        </div>
      )}

      {!hasKey() && (
        <div className="text-xs text-muted border border-dashed border-line rounded-lg p-3">
          Optional: add your Anthropic key in{' '}
          <Link to="/settings" className="text-accent underline">
            Settings
          </Link>{' '}
          for the live tutor &amp; grading. The course works fully without it.
        </div>
      )}

      {modules.length === 0 ? (
        <div className="text-center text-muted py-12 border border-dashed border-line rounded-xl">
          <div className="text-3xl mb-2">🚧</div>
          This season is being authored — check back soon.
        </div>
      ) : (
        modules.map((mod) => {
          const currentIdx = mod.lessons.findIndex((l) => !completed.has(l.id))
          return (
            <section key={mod.id}>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span
                  className={`font-mono text-xs rounded px-2 py-0.5 ${
                    mod.bonus ? 'bg-warn text-ink' : 'bg-accent text-ink'
                  }`}
                >
                  {mod.bonus ? 'BONUS' : String(mod.id).padStart(2, '0')}
                </span>
                <h2 className="font-semibold">{mod.title}</h2>
              </div>
              <p className="text-xs text-muted mb-4 ml-9">{mod.goal}</p>
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
        })
      )}
    </div>
  )
}
