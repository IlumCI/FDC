// AI settings live in localStorage only. The key never leaves the browser
// except in the direct request to Anthropic that the learner initiates.

export interface AISettings {
  apiKey: string
  tutorModel: string
  graderModel: string
}

const KEY = 'fdc.ai.settings'

// Sensible defaults: a cheap model tutors, a stronger model grades.
export const DEFAULT_SETTINGS: AISettings = {
  apiKey: '',
  tutorModel: 'claude-haiku-4-5-20251001',
  graderModel: 'claude-sonnet-5',
}

export const MODEL_OPTIONS = [
  { id: 'claude-haiku-4-5-20251001', label: 'Haiku 4.5 — fast & cheap' },
  { id: 'claude-sonnet-5', label: 'Sonnet 5 — balanced' },
  { id: 'claude-opus-4-8', label: 'Opus 4.8 — most capable' },
]

export function getSettings(): AISettings {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { ...DEFAULT_SETTINGS }
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) }
  } catch {
    return { ...DEFAULT_SETTINGS }
  }
}

export function saveSettings(s: AISettings): void {
  localStorage.setItem(KEY, JSON.stringify(s))
}

export function hasKey(): boolean {
  return getSettings().apiKey.trim().length > 0
}
