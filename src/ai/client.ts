import Anthropic from '@anthropic-ai/sdk'
import { getSettings, hasKey } from './settings'
import type { Startup } from '../store/schema'

// ---------------------------------------------------------------------------
// Thin, browser-direct Anthropic wrapper.
//
// AI is an OPTIONAL layer. The app is fully usable with no key; these calls
// simply refuse when unconfigured. When a key is present we call Anthropic
// directly from the browser (BYO-key) — no proxy, no server. Responses are
// cached per (model + prompt) so repeat interactions are free and offline-safe.
// ---------------------------------------------------------------------------

export { hasKey }

function client(): Anthropic {
  const { apiKey } = getSettings()
  return new Anthropic({
    apiKey,
    // The learner supplies their own key; this is the intended browser use.
    dangerouslyAllowBrowser: true,
    defaultHeaders: { 'anthropic-dangerous-direct-browser-access': 'true' },
  })
}

// --- tiny stable hash for the response cache ---
function hash(s: string): string {
  let h = 5381
  for (let i = 0; i < s.length; i++) h = (h * 33) ^ s.charCodeAt(i)
  return (h >>> 0).toString(36)
}

const CACHE_PREFIX = 'fdc.ai.cache.'
function cacheGet(k: string): string | null {
  try {
    return localStorage.getItem(CACHE_PREFIX + k)
  } catch {
    return null
  }
}
function cacheSet(k: string, v: string): void {
  try {
    localStorage.setItem(CACHE_PREFIX + k, v)
  } catch {
    // storage full — non-fatal, just skip caching
  }
}

export interface Msg {
  role: 'user' | 'assistant'
  content: string
}

export class NoKeyError extends Error {
  constructor() {
    super('No Anthropic API key configured.')
    this.name = 'NoKeyError'
  }
}

/**
 * Compact, structured view of the learner's company passed as context. We send
 * the STATE, not free prose, so the model reasons about their real numbers.
 */
export function startupContext(s: Startup | null): string {
  if (!s) return '{}'
  const view = {
    thesis: s.thesis,
    pricing: s.pricing,
    unitEconomics: s.unitEconomics,
  }
  return JSON.stringify(view, null, 2)
}

interface CompleteOpts {
  system: string
  messages: Msg[]
  model: string
  maxTokens?: number
  /** When false, bypass the cache (used for free-form multi-turn chat). */
  cache?: boolean
}

async function complete(opts: CompleteOpts): Promise<string> {
  if (!hasKey()) throw new NoKeyError()
  const cacheKey = hash(opts.model + '::' + opts.system + '::' + JSON.stringify(opts.messages))
  if (opts.cache !== false) {
    const hit = cacheGet(cacheKey)
    if (hit) return hit
  }
  const resp = await client().messages.create({
    model: opts.model,
    max_tokens: opts.maxTokens ?? 1024,
    system: opts.system,
    messages: opts.messages.map((m) => ({ role: m.role, content: m.content })),
  })
  const text = resp.content
    .filter((b): b is Anthropic.TextBlock => b.type === 'text')
    .map((b) => b.text)
    .join('')
    .trim()
  if (opts.cache !== false) cacheSet(cacheKey, text)
  return text
}

const FDC_VOICE =
  'You are the FDC tutor: a business/economics mentor for SENIOR SOFTWARE ENGINEERS. ' +
  'Never condescend. Assume fluency in systems, math, and code. Prefer precise, terse answers. ' +
  'When useful, explain business concepts via engineering analogies, and NAME where the analogy ' +
  'breaks. Be concrete and use the learner’s own numbers when they are provided.'

/** Live tutor Q&A, scoped to a lesson and the learner's startup state. */
export async function askTutor(args: {
  question: string
  lessonTitle: string
  history?: Msg[]
  startup: Startup | null
}): Promise<string> {
  const { tutorModel } = getSettings()
  const system =
    FDC_VOICE +
    `\n\nCurrent lesson: "${args.lessonTitle}".` +
    `\n\nThe learner's company (startup.json excerpt):\n${startupContext(args.startup)}`
  const messages: Msg[] = [...(args.history ?? []), { role: 'user', content: args.question }]
  return complete({ system, messages, model: tutorModel, maxTokens: 900, cache: false })
}

/** Grade a free-response answer AGAINST the learner's own artifact. */
export async function gradeFreeResponse(args: {
  question: string
  rubric: string
  answer: string
  startup: Startup | null
}): Promise<string> {
  const { graderModel } = getSettings()
  const system =
    FDC_VOICE +
    '\n\nYou are grading a self-check answer. Be honest and specific. Structure your reply as:' +
    '\n**Verdict:** (correct / partially correct / off-track)' +
    '\n**Why:** 2-4 sentences referencing the rubric AND the learner’s actual numbers.' +
    '\n**Fix:** one concrete next step.' +
    `\n\nRubric (what a strong answer contains):\n${args.rubric}` +
    `\n\nThe learner's company (startup.json excerpt):\n${startupContext(args.startup)}`
  const messages: Msg[] = [
    { role: 'user', content: `Question: ${args.question}\n\nMy answer: ${args.answer}` },
  ]
  return complete({ system, messages, model: graderModel, maxTokens: 700 })
}

/** Critique the learner's unit-economics artifact as a "code review". */
export async function critiqueArtifact(args: {
  artifactName: string
  startup: Startup | null
}): Promise<string> {
  const { graderModel } = getSettings()
  const system =
    FDC_VOICE +
    `\n\nReview the learner's ${args.artifactName} like a rigorous code review. Identify the ` +
    'single most fragile assumption, any internal contradiction (e.g. LTV:CAC that the retention ' +
    'curve does not support), and one concrete improvement. Keep it under 180 words. Reference ' +
    'their actual numbers.' +
    `\n\nThe learner's company (startup.json excerpt):\n${startupContext(args.startup)}`
  const messages: Msg[] = [{ role: 'user', content: 'Review my unit economics.' }]
  return complete({ system, messages, model: graderModel, maxTokens: 500 })
}

/** Generate a harder worked example in the learner's own domain. */
export async function harderExample(args: {
  concept: string
  startup: Startup | null
}): Promise<string> {
  const { tutorModel } = getSettings()
  const domain = args.startup?.thesis.domain || 'a software business'
  const system =
    FDC_VOICE +
    `\n\nProduce ONE fully-numeric worked example of "${args.concept}" set in the domain: ${domain}. ` +
    'Show every number and the arithmetic. End with the single insight it illustrates.'
  const messages: Msg[] = [{ role: 'user', content: `Give me a harder example of ${args.concept}.` }]
  return complete({ system, messages, model: tutorModel, maxTokens: 700 })
}
