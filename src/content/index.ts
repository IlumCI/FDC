import type { Module, Lesson } from '../lesson/types'
import { module5 } from './module-05'

// The full course. Only Module 5 is authored deep for the first build; the
// remaining modules are listed in the roadmap (see course.ts) but not yet
// authored. Adding a module = author its content object and register it here.
export const MODULES: Module[] = [module5]

export function getModule(id: number): Module | undefined {
  return MODULES.find((m) => m.id === id)
}

export function getLesson(id: string): { lesson: Lesson; module: Module } | undefined {
  for (const m of MODULES) {
    const lesson = m.lessons.find((l) => l.id === id)
    if (lesson) return { lesson, module: m }
  }
  return undefined
}

export function allLessons(): Lesson[] {
  return MODULES.flatMap((m) => m.lessons)
}
