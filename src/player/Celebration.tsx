import { ACH_BY_ID } from '../game/achievements'
import type { FinishLessonResult } from '../store/useStartup'

// End-of-lesson celebration. Big, rewarding, one clear button out.
export function Celebration({
  result,
  onContinue,
  nextLabel,
}: {
  result: FinishLessonResult
  onContinue: () => void
  nextLabel: string
}) {
  return (
    <div className="fixed inset-0 z-30 bg-ink flex flex-col items-center justify-center px-6 text-center overflow-y-auto">
      <div className="animate-[pop_0.4s_ease-out]">
        <div className="text-6xl mb-2">🎉</div>
        <h1 className="text-2xl font-bold">Lesson complete</h1>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 w-full max-w-xs">
        <div className="bg-panel border border-accent/40 rounded-xl p-3">
          <div className="text-xs text-muted">XP earned</div>
          <div className="font-mono text-2xl text-accent">+{result.xpEarned}</div>
        </div>
        <div className="bg-panel border border-warn/40 rounded-xl p-3">
          <div className="text-xs text-muted">Streak</div>
          <div className="font-mono text-2xl text-warn">🔥 {result.streak}</div>
        </div>
      </div>
      <div className="mt-2 text-xs text-muted">
        Level {result.level} · {result.totalXp} XP total
      </div>

      {result.newAchievements.length > 0 && (
        <div className="mt-6 w-full max-w-xs space-y-2">
          <div className="text-xs uppercase tracking-wide text-muted">Unlocked</div>
          {result.newAchievements.map((id) => {
            const a = ACH_BY_ID[id]
            if (!a) return null
            return (
              <div key={id} className="flex items-center gap-3 bg-panel border border-line rounded-xl p-3 animate-[pop_0.4s_ease-out]">
                <div className="text-3xl">{a.emoji}</div>
                <div className="text-left">
                  <div className="font-semibold text-sm">{a.title}</div>
                  <div className="text-xs text-muted">{a.blurb}</div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <button
        onClick={onContinue}
        className="mt-8 bg-accent text-ink font-bold px-8 py-3 rounded-xl hover:brightness-110 w-full max-w-xs"
      >
        {nextLabel}
      </button>
    </div>
  )
}
