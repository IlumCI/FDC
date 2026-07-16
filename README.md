# FDC — Five Degrees Celsius

**University-level business & economics, written for engineers.** No condescension, no
fluff. FDC is an installable, offline-capable PWA that teaches the business/economics canon
to technical people — and along the way you *compile a company*: every lesson writes one real
artifact into your `startup.json`, and by the end of the course it links into a complete startup.

> The gap this fills: "build a business with AI" content assumes you can't code and talks down
> to you. FDC assumes you're a competent engineer and teaches business as a **refactor of mental
> models you already trust** — CAC:LTV as a cache hit-ratio, retention as a decay curve,
> positioning as an API contract, scaling as a gain stage, the three financial statements as
> three projections of one event log.

## Status

First build ships **Module 5 — Unit Economics** deep, as the reusable template for all future
modules, plus the whole platform it needs. The other 11 modules are mapped on the home screen
and authored next against this template.

## How it works

- **Fully client-side.** No backend, no accounts. Your company lives in your browser (IndexedDB)
  and never leaves the device unless you export it.
- **Offline-first PWA.** Installs to an Android home screen; authored lessons work with no network.
- **The 8-slot lesson.** Every lesson has the same shape: concept → engineering reframe (with an
  explicit "where the analogy breaks") → worked example (on *Meridian*, a fictional dev-tool
  carried through the course) → interactive decision → artifact-building exercise → AI tutor →
  self-check → commit.
- **Optional AI, bring-your-own-key.** Add an Anthropic API key in Settings to turn on the live
  Socratic tutor and grading that reasons about *your* numbers. Calls go directly from the browser
  to Anthropic; the key is stored only on this device. Everything works without it.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # tsc, no emit
npm run build      # tsc -b && vite build  → dist/ (with service worker)
npm run preview    # serve the production build
```

## Architecture

| Path | Responsibility |
|------|----------------|
| `src/store/schema.ts` | Zod schema for `startup.json` — the accumulating company |
| `src/store/db.ts` | IndexedDB persistence (validated on every write) |
| `src/store/useStartup.ts` | Zustand store: slot writes, event log, export/import |
| `src/lib/unitEconomics.ts` | Pure unit-economics math (reused later by M9) |
| `src/lesson/types.ts` | Typed lesson definition (the 8-slot shape) |
| `src/lesson/LessonView.tsx` | Renders any lesson; interactive branch, tutor, quiz |
| `src/lesson/artifacts/` | Interactive artifacts (the live unit-economics calculator) |
| `src/ai/` | Browser-direct Anthropic client + settings (BYO key) |
| `src/content/module-05/` | Authored Module 5 lessons |
| `src/pages/` | Course home, lesson view, Settings, My-company viewer |

Adding a module = author its content object under `src/content/` and register it in
`src/content/index.ts`. New interactive artifacts register in `src/lesson/artifacts/registry.tsx`.
