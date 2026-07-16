import type { WritableSlot } from '../store/useStartup'

// The typed lesson definition. Authored content is DATA, not prose files, so
// it is type-checked and the engine can render every lesson identically. The
// 8-slot shape is fixed — consistency is a feature for this audience.

export interface Reframe {
  /** The engineering analogy (markdown, LaTeX allowed via $…$). */
  analogy: string
  /** Explicit "where the analogy breaks" — mandatory; builds trust. */
  breaks: string
}

export interface BranchChoice {
  label: string
  correct?: boolean
  /** Shown after the learner picks. Wrong answers must be instructive. */
  consequence: string
}

export interface Branch {
  scenario: string
  choices: BranchChoice[]
}

export interface QuizMCQ {
  kind: 'mcq'
  prompt: string
  options: string[]
  answer: number
  explain: string
}

export interface QuizFree {
  kind: 'free'
  prompt: string
  /** Rubric handed to the AI grader (never shown verbatim to the learner). */
  rubric: string
}

export type QuizQuestion = QuizMCQ | QuizFree

export type TutorHook =
  | { label: string; kind: 'ask'; question: string }
  | { label: string; kind: 'harder'; concept: string }
  | { label: string; kind: 'critique' }

/** Key into the artifact-component registry (see lesson/artifacts). */
export type ArtifactKey = 'unit-economics'

export interface Lesson {
  id: string // e.g. "5.1"
  module: number
  title: string
  estMinutes: number
  prerequisites: string[]
  /** The startup.json slot this lesson contributes to (null = prose-only). */
  artifactSlot: WritableSlot | null

  concept: string // markdown
  reframe: Reframe
  workedExample: string // markdown
  branch?: Branch
  artifact?: { componentKey: ArtifactKey; prompt: string }
  tutorHooks: TutorHook[]
  quiz: QuizQuestion[]
  commitSummary: string
}

export interface Module {
  id: number
  title: string
  goal: string
  lessons: Lesson[]
}
