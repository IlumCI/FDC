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

/** Which interactive artifact a lesson renders. `unit-economics` is the bespoke
 * M5 calculator; `form` is the reusable structured-field artifact every other
 * module uses to write its slot. */
export type ArtifactKey = 'unit-economics' | 'form'

/** A single input in the reusable `form` artifact. */
export interface FormField {
  key: string
  label: string
  type: 'text' | 'textarea' | 'number' | 'select'
  options?: string[] // for type 'select'
  placeholder?: string
  help?: string
}

// --- Season 2: richer, harder, more diverse interactive blocks ---
// Authored on a lesson's optional `blocks` array; the player flattens them into
// cards after the artifact and before the quiz. Graded blocks (numeric, rank,
// categorize, and each scenario decision) join hearts/retry like MCQs.
export type LessonBlock =
  | { kind: 'numeric'; prompt: string; answer: number; tolerance?: number; unit?: string; explain: string }
  // `items` are given in the CORRECT order; the player scrambles them to solve.
  | { kind: 'rank'; prompt: string; items: string[]; explain: string }
  | {
      kind: 'categorize'
      prompt: string
      buckets: string[]
      items: { text: string; bucket: string }[]
      explain: string
    }
  | {
      kind: 'scenario'
      title: string
      intro: string
      decisions: { situation: string; options: { label: string; correct?: boolean; outcome: string }[] }[]
    }
  // Real-world hands-on task (writes the venture workspace, not graded).
  | {
      kind: 'platformTask'
      title: string
      body: string
      links: { label: string; url: string }[]
      steps?: string[]
      taskKey: string
      proofLabel: string
      proofKind: 'url' | 'text' | 'number'
      milestone?: boolean
    }
  | { kind: 'resource'; title: string; items: { label: string; url: string; note?: string }[] }
  | { kind: 'document'; title: string; body: string; templateHref: string; docKey: string; docLabel: string }

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
  /** For `form`, provide `fields`; for `unit-economics`, omit them. */
  artifact?: { componentKey: ArtifactKey; prompt: string; fields?: FormField[] }
  /** Season 2: extra interactive blocks inserted before the quiz. */
  blocks?: LessonBlock[]
  tutorHooks: TutorHook[]
  quiz: QuizQuestion[]
  commitSummary: string
}

/** Season 1 sub-path the learner chooses at lesson 0.1. */
export type Path = 'venture' | 'nonprofit' | 'autonomous'

export interface Module {
  id: number
  title: string
  goal: string
  lessons: Lesson[]
  /** 1 = Foundations (simulated), 2 = Building for Real. Defaults to 1. */
  season?: 1 | 2
  /** A curated bonus module for a specific Season 1 path (shows a BONUS tag). */
  bonus?: boolean
  /** Paths this module appears on. Undefined = shared across all paths. */
  paths?: Path[]
  /** For a bonus module: the default module id it slots in after, in the path route. */
  insertAfter?: number
}
