import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Lesson } from '../lesson/types'
import { buildSteps, gradedStepsById, isGraded, type Step } from './steps'
import { InfoCard, ReframeCard, ChoiceCard, ArtifactCard, FreeCard, DividerCard } from './cards'
import { HUD } from './HUD'
import { Celebration } from './Celebration'
import { TutorDrawer } from './Tutor'
import { useStartup, type FinishLessonResult } from '../store/useStartup'
import { hasKey } from '../ai/client'
import { allLessons } from '../content'

const START_HEARTS = 5

interface Answer {
  firstCorrect: boolean // first-attempt correctness → drives XP
  latestCorrect: boolean // most recent attempt → drives unresolved/warm-up
}

// Full-screen, one-card-at-a-time lesson player. State machine over a dynamic
// step queue: [warm-up review from previous lesson] + this lesson's cards, then
// a retry round for anything missed. Soft hearts (never blocks). On finish,
// awards XP/streak/achievements and shows the celebration.
export function LessonPlayer({ lesson }: { lesson: Lesson }) {
  const navigate = useNavigate()
  const startup = useStartup((s) => s.startup)
  const finishLesson = useStartup((s) => s.finishLesson)

  // Previous lesson's carried-over misses (warm-up review). Snapshot at mount.
  const { warmupSteps, prevLessonId, prevReviewIds } = useMemo(() => {
    const all = allLessons()
    const idx = all.findIndex((l) => l.id === lesson.id)
    const prev = idx > 0 ? all[idx - 1] : null
    const ids = prev ? startup?.meta.reviewQueue[prev.id] ?? [] : []
    return {
      warmupSteps: prev && ids.length ? gradedStepsById(prev, ids) : [],
      prevLessonId: prev?.id ?? null,
      prevReviewIds: ids,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.id])

  const mainSteps = useMemo(() => buildSteps(lesson), [lesson])
  const mainGradedIds = useMemo(() => mainSteps.filter(isGraded).map((s) => s.id), [mainSteps])

  const [queue, setQueue] = useState<Step[]>(() =>
    warmupSteps.length
      ? [
          {
            kind: 'divider',
            id: `${lesson.id}#warmup-intro`,
            emoji: '📌',
            title: 'Quick review from last time',
            body: 'You slipped on these last lesson. Nail them now and they’re cleared.',
          },
          ...warmupSteps,
          ...mainSteps,
        ]
      : mainSteps
  )

  const [index, setIndex] = useState(0)
  const [hearts, setHearts] = useState(START_HEARTS)
  const [heartsLost, setHeartsLost] = useState(0)
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const [retryStarted, setRetryStarted] = useState(false)
  const [result, setResult] = useState<FinishLessonResult | null>(null)
  const [showTutor, setShowTutor] = useState(false)

  // Per-card interaction state, reset when the card changes.
  const [selected, setSelected] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setSelected(null)
    setChecked(false)
  }, [index])

  const step = queue[index]
  const isChoice = step.kind === 'choice'

  const onCheck = () => {
    if (step.kind !== 'choice' || selected == null) return
    const correct = step.options[selected].correct
    const seen = answers[step.id]
    if (!correct && !seen) {
      setHearts((h) => Math.max(0, h - 1))
      setHeartsLost((n) => n + 1)
    }
    setAnswers((a) => {
      const prev = a[step.id]
      return { ...a, [step.id]: { firstCorrect: prev ? prev.firstCorrect : correct, latestCorrect: correct } }
    })
    setChecked(true)
  }

  const finalize = async (finalAnswers: Record<string, Answer>) => {
    const correctCount = mainGradedIds.filter((id) => finalAnswers[id]?.firstCorrect).length
    const unresolved = mainGradedIds.filter((id) => finalAnswers[id] && !finalAnswers[id].latestCorrect)
    const warmup =
      prevLessonId && prevReviewIds.length
        ? { prevLessonId, stillWrong: prevReviewIds.filter((id) => !finalAnswers[id]?.latestCorrect) }
        : undefined
    setResult(await finishLesson({ lessonId: lesson.id, correctCount, heartsLost, unresolved, warmup }))
  }

  const advance = async () => {
    if (index < queue.length - 1) {
      setIndex((i) => i + 1)
      return
    }
    // End of the current pass. Inject a retry round once, if anything's wrong.
    const wrong = mainGradedIds.filter((id) => answers[id] && !answers[id].latestCorrect)
    if (!retryStarted && wrong.length) {
      setRetryStarted(true)
      setQueue((q) => [
        ...q,
        {
          kind: 'divider',
          id: `${lesson.id}#retry-intro`,
          emoji: '🔁',
          title: 'Practice your slip-ups',
          body: 'One more pass at what tripped you. No hearts at stake here.',
        },
        ...gradedStepsById(lesson, wrong),
      ])
      setIndex((i) => i + 1)
      return
    }
    await finalize(answers)
  }

  if (result) {
    const all = allLessons()
    const idx = all.findIndex((l) => l.id === lesson.id)
    const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null
    return (
      <Celebration
        result={result}
        nextLabel={next ? `Continue → ${next.title}` : 'Back to the path'}
        onContinue={() => navigate(next ? `/lesson/${next.id}` : '/')}
      />
    )
  }

  const atEnd = index >= queue.length - 1
  const pendingRetry = !retryStarted && mainGradedIds.some((id) => answers[id] && !answers[id].latestCorrect)
  const continueLabel = atEnd && !pendingRetry ? 'FINISH' : 'CONTINUE'
  const primaryLabel = isChoice && !checked ? 'CHECK' : continueLabel
  const primaryDisabled = isChoice && !checked && selected == null
  const primaryAction = isChoice && !checked ? onCheck : advance
  const progress = (index + (checked || !isChoice ? 1 : 0)) / queue.length

  return (
    <div className="fixed inset-0 z-10 bg-ink flex flex-col">
      <HUD
        progress={progress}
        hearts={hearts}
        onClose={() => navigate('/')}
        onTutor={() => setShowTutor(true)}
        tutorEnabled={hasKey()}
      />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-6" key={step.id}>
          {step.kind === 'info' && <InfoCard step={step} />}
          {step.kind === 'reframe' && <ReframeCard step={step} />}
          {step.kind === 'divider' && <DividerCard step={step} />}
          {step.kind === 'choice' && (
            <ChoiceCard step={step} selected={selected} checked={checked} onSelect={setSelected} />
          )}
          {step.kind === 'artifact' && <ArtifactCard step={step} lessonId={lesson.id} />}
          {step.kind === 'free' && <FreeCard step={step} />}
        </div>
      </div>

      <div className="border-t border-line bg-ink">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <button
            onClick={primaryAction}
            disabled={primaryDisabled}
            className="w-full bg-accent text-ink font-bold py-3 rounded-xl hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            {primaryLabel}
          </button>
        </div>
      </div>

      {showTutor && <TutorDrawer lessonTitle={lesson.title} onClose={() => setShowTutor(false)} />}
    </div>
  )
}
