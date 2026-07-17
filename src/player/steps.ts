import type { Lesson, ArtifactKey, FormField } from '../lesson/types'
import type { WritableSlot } from '../store/useStartup'

// A lesson, flattened into an ordered list of single-focus CARDS for the
// full-screen player. Graded cards carry STABLE ids so the review queue can
// reference and replay them across lessons.

export interface ChoiceOption {
  label: string
  correct: boolean
  explain: string
}

export interface RankItem {
  text: string
  correctIndex: number
}

export type Step =
  | { kind: 'info'; id: string; eyebrow?: string; title: string; body: string }
  | { kind: 'reframe'; id: string; analogy: string; breaks: string }
  | { kind: 'choice'; id: string; prompt: string; options: ChoiceOption[]; instructive: boolean }
  | {
      kind: 'artifact'
      id: string
      prompt: string
      componentKey: ArtifactKey
      slot: WritableSlot | null
      fields?: FormField[]
    }
  | { kind: 'free'; id: string; prompt: string; rubric: string }
  | { kind: 'divider'; id: string; emoji: string; title: string; body: string }
  // --- Season 2 graded formats ---
  | { kind: 'numeric'; id: string; prompt: string; answer: number; tolerance: number; unit?: string; explain: string }
  | { kind: 'rank'; id: string; prompt: string; items: RankItem[]; explain: string }
  | {
      kind: 'categorize'
      id: string
      prompt: string
      buckets: string[]
      items: { text: string; bucket: string }[]
      explain: string
    }
  // --- Season 2 real-world / info formats (not graded) ---
  | {
      kind: 'platformTask'
      id: string
      title: string
      body: string
      links: { label: string; url: string }[]
      steps?: string[]
      taskKey: string
      proofLabel: string
      proofKind: 'url' | 'text' | 'number'
      milestone?: boolean
    }
  | { kind: 'resource'; id: string; title: string; items: { label: string; url: string; note?: string }[] }
  | { kind: 'document'; id: string; title: string; body: string; templateHref: string; docKey: string; docLabel: string }
  // The very first card of the very first lesson: pick your Season 1 path.
  | { kind: 'pathpicker'; id: string }

export type GradedStep = Extract<Step, { kind: 'choice' | 'numeric' | 'rank' | 'categorize' }>

export function isGraded(s: Step): s is GradedStep {
  return s.kind === 'choice' || s.kind === 'numeric' || s.kind === 'rank' || s.kind === 'categorize'
}

// --- answer model shared with the player ---
// choice: number|null (index) · numeric: string · rank: number[] (item ids in
// current order) · categorize: Record<itemIndex, bucket>
export type Answer = number | null | string | number[] | Record<number, string>

export function initialAnswer(s: Step): Answer {
  if (s.kind === 'choice') return null
  if (s.kind === 'numeric') return ''
  if (s.kind === 'rank') return s.items.map((_, i) => i).reverse() // scrambled start
  if (s.kind === 'categorize') return {}
  return null
}

export function isAnswerReady(s: Step, a: Answer): boolean {
  if (s.kind === 'choice') return a != null
  if (s.kind === 'numeric') return typeof a === 'string' && a.trim() !== '' && !Number.isNaN(Number(a))
  if (s.kind === 'rank') return Array.isArray(a) && a.length === s.items.length
  if (s.kind === 'categorize') {
    const map = a as Record<number, string>
    return !!map && typeof map === 'object' && s.items.every((_, i) => !!map[i])
  }
  return true
}

export function gradeStep(s: Step, a: Answer): boolean {
  if (s.kind === 'choice') return typeof a === 'number' && !!s.options[a]?.correct
  if (s.kind === 'numeric') return Math.abs(Number(a) - s.answer) <= s.tolerance
  if (s.kind === 'rank') {
    if (!Array.isArray(a)) return false
    // items[i].correctIndex gives the item's target position; correct when the
    // learner's order places each item at its target.
    return (a as number[]).every((itemId, pos) => s.items[itemId]?.correctIndex === pos)
  }
  if (s.kind === 'categorize') {
    const map = a as Record<number, string>
    if (!map || typeof map !== 'object') return false
    return s.items.every((it, i) => map[i] === it.bucket)
  }
  return false
}

/** Flatten a lesson into its ordered card list. */
export function buildSteps(l: Lesson): Step[] {
  const steps: Step[] = []
  // The very first lesson opens with the path chooser.
  if (l.id === '0.1') steps.push({ kind: 'pathpicker', id: `${l.id}#path` })
  steps.push({ kind: 'info', id: `${l.id}#concept`, eyebrow: 'Concept', title: l.title, body: l.concept })
  steps.push({ kind: 'reframe', id: `${l.id}#reframe`, analogy: l.reframe.analogy, breaks: l.reframe.breaks })
  steps.push({ kind: 'info', id: `${l.id}#example`, eyebrow: 'Worked example', title: 'Worked example', body: l.workedExample })
  if (l.branch)
    steps.push({
      kind: 'choice',
      id: `${l.id}#branch`,
      prompt: l.branch.scenario,
      instructive: true,
      options: l.branch.choices.map((c) => ({ label: c.label, correct: !!c.correct, explain: c.consequence })),
    })
  if (l.artifact)
    steps.push({
      kind: 'artifact',
      id: `${l.id}#artifact`,
      prompt: l.artifact.prompt,
      componentKey: l.artifact.componentKey,
      slot: l.artifactSlot,
      fields: l.artifact.fields,
    })

  // Season 2 blocks (after the artifact, before the quiz).
  ;(l.blocks ?? []).forEach((b, i) => {
    const bid = `${l.id}#blk${i}`
    switch (b.kind) {
      case 'numeric':
        steps.push({ kind: 'numeric', id: bid, prompt: b.prompt, answer: b.answer, tolerance: b.tolerance ?? 0, unit: b.unit, explain: b.explain })
        break
      case 'rank':
        steps.push({
          kind: 'rank',
          id: bid,
          prompt: b.prompt,
          items: b.items.map((text, idx) => ({ text, correctIndex: idx })),
          explain: b.explain,
        })
        break
      case 'categorize':
        steps.push({ kind: 'categorize', id: bid, prompt: b.prompt, buckets: b.buckets, items: b.items, explain: b.explain })
        break
      case 'scenario': {
        steps.push({ kind: 'divider', id: `${bid}#intro`, emoji: '🎭', title: b.title, body: b.intro })
        b.decisions.forEach((d, j) => {
          steps.push({
            kind: 'choice',
            id: `${bid}s${j}`,
            prompt: d.situation,
            instructive: true,
            options: d.options.map((o) => ({ label: o.label, correct: !!o.correct, explain: o.outcome })),
          })
        })
        break
      }
      case 'platformTask':
        steps.push({
          kind: 'platformTask',
          id: bid,
          title: b.title,
          body: b.body,
          links: b.links,
          steps: b.steps,
          taskKey: b.taskKey,
          proofLabel: b.proofLabel,
          proofKind: b.proofKind,
          milestone: b.milestone,
        })
        break
      case 'resource':
        steps.push({ kind: 'resource', id: bid, title: b.title, items: b.items })
        break
      case 'document':
        steps.push({ kind: 'document', id: bid, title: b.title, body: b.body, templateHref: b.templateHref, docKey: b.docKey, docLabel: b.docLabel })
        break
    }
  })

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
