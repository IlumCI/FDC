import type { Lesson, ArtifactKey } from '../lesson/types'

// A lesson's 8 slots, flattened into an ordered list of single-focus CARDS for
// the full-screen player. Graded cards (kind 'choice') carry STABLE ids so the
// review queue can reference and replay them across lessons.

export interface ChoiceOption {
  label: string
  correct: boolean
  explain: string
}

export type Step =
  | { kind: 'info'; id: string; eyebrow?: string; title: string; body: string }
  | { kind: 'reframe'; id: string; analogy: string; breaks: string }
  | { kind: 'choice'; id: string; prompt: string; options: ChoiceOption[]; instructive: boolean }
  | { kind: 'artifact'; id: string; prompt: string; componentKey: ArtifactKey }
  | { kind: 'free'; id: string; prompt: string; rubric: string }
  | { kind: 'divider'; id: string; emoji: string; title: string; body: string }

export function isGraded(s: Step): s is Extract<Step, { kind: 'choice' }> {
  return s.kind === 'choice'
}

/** Flatten a lesson into its ordered card list. */
export function buildSteps(l: Lesson): Step[] {
  const steps: Step[] = []
  steps.push({ kind: 'info', id: `${l.id}#concept`, eyebrow: 'Concept', title: l.title, body: l.concept })
  steps.push({ kind: 'reframe', id: `${l.id}#reframe`, analogy: l.reframe.analogy, breaks: l.reframe.breaks })
  steps.push({ kind: 'info', id: `${l.id}#example`, eyebrow: 'Worked example · Meridian', title: 'Worked example', body: l.workedExample })
  if (l.branch)
    steps.push({
      kind: 'choice',
      id: `${l.id}#branch`,
      prompt: l.branch.scenario,
      instructive: true,
      options: l.branch.choices.map((c) => ({ label: c.label, correct: !!c.correct, explain: c.consequence })),
    })
  if (l.artifact)
    steps.push({ kind: 'artifact', id: `${l.id}#artifact`, prompt: l.artifact.prompt, componentKey: l.artifact.componentKey })
  l.quiz.forEach((q, i) => {
    if (q.kind === 'mcq')
      steps.push({
        kind: 'choice',
        id: `${l.id}#q${i}`,
        prompt: q.prompt,
        instructive: false,
        options: q.options.map((o, oi) => ({ label: o, correct: oi === q.answer, explain: q.explain })),
      })
    else steps.push({ kind: 'free', id: `${l.id}#q${i}`, prompt: q.prompt, rubric: q.rubric })
  })
  return steps
}

/** Reconstruct specific graded cards from a lesson, by id — used to replay a
 * previous lesson's still-missed questions as warm-up review. */
export function gradedStepsById(l: Lesson, ids: string[]): Step[] {
  return buildSteps(l).filter((s) => isGraded(s) && ids.includes(s.id))
}
