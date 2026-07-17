import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 12 — Strategy & synthesis: linking the binary
//
// The capstone. Every earlier module compiled one object file: thesis (M0),
// market (M1/M3), problem + ICP (M2), positioning (M4), unit economics (M5),
// pricing (M6), GTM (M7), sales (M8), financials (M9), capital (M10), legal
// (M11). This module is the LINKER: it resolves those symbols into a single
// coherent, load-bearing strategy, stress-tests it adversarially, and ships
// the pitch. The final artifact writes startup.strategy — the last slot — and
// the dossier is complete. Nothing here may contradict Meridian canon; it
// synthesizes it.
// ===========================================================================

export const module12: Module = {
  id: 12,
  title: 'Strategy & synthesis: linking the binary',
  goal: 'Assemble everything into a coherent strategy and a defensible narrative; stress-test it, then ship the pitch.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '12.1',
      module: 12,
      title: 'Strategy as choosing constraints; moats as invariants',
      estMinutes: 16,
      prerequisites: [],
      artifactSlot: null,
      concept: `Most founders think strategy is a list of things they will *do*. It is the opposite. **Strategy is the set of things you will deliberately NOT do** — the constraints you accept so that the things you do keep, in return, become sharp instead of blurry.

A company that will serve everyone, price every way, and win on every axis has made no choices, and a plan with no choices is not a strategy — it's a wish. Real strategy shows up as **coherent trade-offs**: because we said no to enterprise, our onboarding can be self-serve; because we said no to self-serve, our sales motion can be high-touch. The "no" is what makes the "yes" affordable.

The second half of strategy is the **moat** — the reason your advantage *persists* after competitors notice you and attack. A moat is not a feature (features get copied in a quarter). A moat is a structural **invariant**: a property of your business that stays true even under adversarial pressure, because breaking it would cost an attacker more than the market is worth. Classic invariants: network effects (value rises with users, so a late entrant faces a cold-start they can't fund), switching costs (leaving destroys the customer's accumulated state), proprietary data flywheels, and economies of scale that a subscale rival simply cannot match.

The discipline for the rest of this module: a strategy is only real if it *names its constraints* and *names the one invariant* that has to hold for the whole structure to stand.`,
      reframe: {
        analogy: `Strategy is a **type system**. A type is a constraint — it forbids a universe of programs so that the ones that remain are provably well-formed. Saying \`x: number\` is saying "x will NOT be a string, an object, a function." You lose expressiveness on purpose, and in exchange the compiler can reason about your code and reject whole classes of error before runtime. Strategic constraints do the same for a company: by forbidding the enterprise deal, the second market, the third pricing model, you let every remaining decision type-check against a small, coherent set of commitments.

A moat, in the same frame, is an **invariant the type system guarantees under all inputs** — a property that holds no matter what an adversary feeds the system, the way a well-typed program can't segfault regardless of user input.`,
        breaks: `Types are enforced by a compiler; strategic constraints are enforced only by the founder's willpower, and there is no build error when you violate one — the "no" you promised to enterprise is silently broken the day a big logo waves a check, and nothing rejects the commit. Worse, types are static while markets move: the constraint that was correct at seed stage ($40 self-serve only) may need to be *relaxed* at Series B, and knowing *when* to loosen a type has no analogue in a real type system, which never wants you to widen \`number\` to \`any\`. Treat the analogy as intuition for why constraints create coherence — not as a promise that anything enforces them for you.`,
      },
      workedExample: `**Meridian** (B2B CI insights for small eng teams, $40/seat/mo) writes its strategy as constraints, each paying for a downstream "yes":

- **We will NOT sell to 500-engineer enterprises.** → Because we said no, onboarding stays self-serve, CAC stays at $250 instead of ballooning into six-month sales cycles, and the product can stay opinionated instead of configurable-to-death.
- **We will NOT compete on being a full observability suite.** → Because we said no, we can be *ten minutes to value* on the one job (CI insight for small teams) that incumbents treat as a checkbox.
- **We will NOT discount below $31 CM.** → Because we said no, every seat we sell is unit-positive; we never buy logos with negative-margin deals.

Then the **moat as invariant**: Meridian's candidate is a *data flywheel* — every team's CI runs sharpen the benchmarks ("your build is slower than 80% of teams your size"), and that comparative signal is only credible with scale a new entrant lacks. State it as an invariant: *"For any competitor C entering today, C's benchmark quality < Meridian's, because benchmark quality is a function of cumulative runs, and C's cumulative runs start at zero."* That property holds under adversarial pressure — a well-funded clone can copy the UI in a sprint but cannot copy three years of runs. **That** is a moat; the dashboard is not.`,
      branch: {
        scenario: `Meridian's founder is handed a signed LOI: a 400-seat enterprise wants the product, but only with SSO, an on-prem option, a dedicated CSM, and a custom SLA. It's worth roughly 40% of next year's revenue in one deal. Taking it violates the explicit constraint "we will NOT sell to large enterprises." What's the strategically sound response?`,
        choices: [
          {
            label: 'Take it — 40% of ARR in one signature is too big to leave on the table; constraints are guidelines.',
            correct: false,
            consequence: `**The classic constraint-erosion trap.** The deal doesn't just add revenue — it re-types the whole company. Now you owe on-prem, a custom SLA, and a CSM motion, which drags CAC up, forces the roadmap toward enterprise config, and quietly breaks the self-serve invariant that made your other "yes" decisions affordable. One 40% customer also owns your roadmap. A constraint you abandon the first time it's expensive was never a strategy; it was a preference.`,
          },
          {
            label: 'Decline, but treat it as a signal: log the demand and decide deliberately whether to change the strategy — not this deal, the strategy.',
            correct: true,
            consequence: `**Correct.** The move is to separate the *deal* from the *strategy*. Declining protects coherence today. But repeated enterprise LOIs are real evidence your constraint may be wrong, and strategy is allowed to change — *deliberately, as a re-typing of the whole company*, with new economics, new CAC assumptions, and a new moat, not as a one-off exception smuggled in under deadline pressure. The discipline is: constraints change by decision, never by erosion.`,
          },
          {
            label: 'Take it but wall it off — a separate "enterprise SKU" so the core product stays pure.',
            correct: false,
            consequence: `**Seductive and often fatal for a small team.** "We'll just run two motions" doubles your surface area — two sales processes, two support tiers, two roadmaps — on a team that barely covers one. For a well-resourced company this can be right; for a small eng team at 1.69× unit economics it fractures focus precisely when focus is the only moat you actually have yet. If you do it, do it as a *funded strategic bet*, not a way to avoid saying no.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Draft my three strategic constraints', kind: 'ask', question: 'Based on my saved thesis, ICP, positioning, and unit economics, propose three specific "we will NOT" constraints and, for each, name the downstream "yes" it pays for.' },
        { label: 'Pressure-test my moat', kind: 'ask', question: 'State my proposed moat as an invariant of the form "for any competitor C, property P holds." Then attack it: what would an adversary do to break P, and does it survive?' },
        { label: 'Harder: moats in my domain', kind: 'harder', concept: 'distinguishing durable structural invariants (network effects, switching costs, data flywheels, scale) from copyable features' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which of the following is best described as a strategic moat rather than a feature?',
          options: [
            'A polished dashboard UI that users love',
            'A data flywheel where product quality strictly increases with cumulative usage a new entrant cannot replicate',
            'A lower price than every competitor this quarter',
            'A longer feature list than the nearest rival',
          ],
          answer: 1,
          explain: 'A moat is a structural **invariant** that persists under adversarial pressure. A flywheel whose quality is a function of cumulative usage means any late entrant starts at zero and cannot catch up by spending — that property holds under attack. A UI, a temporary price, and a feature list are all copyable in a quarter.',
        },
        {
          kind: 'mcq',
          prompt: 'A founder says "our strategy is to win developers, enterprises, and consumers, on both price and premium features." The core problem is:',
          options: [
            'The ambition is too small',
            'It names no constraints, so it makes no real trade-offs and cannot be a strategy',
            'It should also add a services business',
            'Nothing — broad coverage is strictly safer',
          ],
          answer: 1,
          explain: 'Strategy IS the set of things you will not do. A plan that refuses no market, no segment, and no pricing axis has made no choices — every downstream decision has to satisfy contradictory masters, so nothing gets sharp. Coverage without constraint is a wish, not a strategy.',
        },
        {
          kind: 'free',
          prompt: 'Write ONE strategic constraint for your company in the form "We will NOT ___," then name the specific downstream capability that constraint buys you, and finally state your primary moat as an invariant ("for any competitor C, ___ holds because ___").',
          rubric: 'Strong answer: (1) states a concrete, costly "we will NOT" constraint (not a platitude) grounded in the learner\'s actual ICP/positioning; (2) names a specific downstream "yes" the constraint pays for (lower CAC, self-serve, sharper product, etc.); (3) expresses the moat as a genuine invariant tied to structure (network effects, switching cost, data flywheel, scale) rather than a copyable feature; (4) the "because" clause explains why the property survives an adversary with money.',
        },
      ],
      commitSummary: 'concept only — you commit your strategic constraints and moat in lesson 12.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '12.2',
      module: 12,
      title: 'The business model canvas as an architecture diagram',
      estMinutes: 15,
      prerequisites: ['12.1'],
      artifactSlot: null,
      concept: `The **Business Model Canvas** is nine boxes on one page: customer segments, value propositions, channels, customer relationships, revenue streams, key resources, key activities, key partnerships, and cost structure. Founders often meet it as a fill-in-the-blanks worksheet. That framing wastes it. The canvas is really a **one-page architecture diagram of your company** — and like any architecture diagram, its value is not the boxes but whether the **arrows between them resolve**.

You have already built every box across this course. Customer segments is your ICP (Module 2). Value proposition is your positioning (Module 4). Channels and relationships are your GTM and sales motions (Modules 7–8). Revenue streams are your pricing (Module 6). Cost structure and the whole right-versus-left balance is your unit economics and financial model (Modules 5, 9). The canvas doesn't ask you to invent anything new; it asks you to **link the modules and check that they compile together**.

The real test is **coherence across boxes**. A high-touch enterprise relationship box wired to a $40 self-serve revenue box is a type error — the CAC that relationship implies will dwarf that price's contribution margin. A "developers who hate sales calls" segment wired to an outbound-SDR channel is a mismatch. The canvas is where you catch the incoherences that each module, viewed alone, could hide. Assembling it is a linking step: unresolved symbols (a value prop with no matching segment, a cost with no revenue to cover it) are exactly the errors it surfaces.`,
      reframe: {
        analogy: `The canvas is a **system architecture diagram**, and its nine boxes are services. Individually each service can pass its own unit tests — pricing looks fine, GTM looks fine — yet the *system* fails at the **interfaces**. The canvas is an **integration test**: it forces every box to talk to its neighbors and checks that the contracts match. A value proposition is a service whose callers are customer segments; if no segment actually calls it, it's dead code. A cost-structure line with no revenue stream feeding it is a resource leak. Assembling the canvas is exactly the moment you run the whole thing end-to-end and watch which arrows throw.`,
        breaks: `An architecture diagram is descriptive — it maps a system that already runs. Your canvas is mostly **speculative**: the boxes are hypotheses, and a canvas that "links cleanly" on paper can still be entirely wrong because every box rests on unvalidated assumptions. A clean integration test on mocked services proves the wiring, not that the services do anything real. So a coherent canvas is necessary but nowhere near sufficient — it proves internal consistency, not truth. The next lesson (the pre-mortem) exists precisely because passing this integration test still leaves your riskiest assumptions untouched.`,
      },
      workedExample: `**Meridian's** canvas, assembled from the dossier, then checked at the seams:

- **Segments:** small eng teams (3–30 devs) running CI they don't have time to babysit.
- **Value prop:** ten-minutes-to-value CI insight — "know why your builds are slow and flaky without hiring a platform team."
- **Channels:** content + developer communities, self-serve signup (from GTM).
- **Relationships:** self-serve, low-touch, in-product; no CSM.
- **Revenue:** $40/seat/mo, expand by seats as the team grows.
- **Key resources:** the benchmark dataset (the moat from 12.1) and the ingestion pipeline.
- **Key activities:** ingest CI runs, compute comparative insight, keep time-to-value low.
- **Partnerships:** CI providers (GitHub Actions, CircleCI) as integration surface.
- **Cost structure:** $9/seat variable (infra, support, fees) → CM $31; fixed founder + base cluster.

**Now check the arrows.** Self-serve relationship ↔ $40 revenue ↔ $250 CAC: these resolve — a low-touch motion is the *only* one that keeps CAC survivable against a $31 CM. Segment "teams with no platform engineer" ↔ value prop "no platform team needed": resolves cleanly. But one seam is tense: **key resource = benchmark dataset**, which only becomes valuable at scale, while **revenue** depends on *early* customers who arrive before the dataset is rich. That's not a contradiction — it's the **cold-start dependency** the moat has to survive, and the canvas is what makes it visible. Flagging it here is what sets up the pre-mortem.`,
      branch: {
        scenario: `Filling in Meridian's canvas, the founder writes "customer relationships: dedicated onboarding calls and a named account manager for every team" because it sounds premium and caring. Every other box is unchanged: $40/seat revenue, $250 CAC, CM $31, self-serve channel. What does the canvas tell you?`,
        choices: [
          {
            label: 'Great — high-touch relationships increase retention, which lifts LTV. Keep it.',
            correct: false,
            consequence: `**Instructive miss.** The box in isolation sounds good, but the canvas is an integration test and this arrow throws. A named account manager per team at $40/seat is economically impossible — one CSM's fully-loaded cost, spread across low-seat accounts, blows through the $31 CM and CAC assumptions instantly. Retention might rise, but you'd be spending far more to get it than the margin can bear. The box passes its own unit test and fails the system test.`,
          },
          {
            label: 'It\'s an incoherence: the relationship box contradicts the revenue and unit-economics boxes; fix it to low-touch/self-serve or change the whole model.',
            correct: true,
            consequence: `**Correct.** This is exactly what the canvas is for. A per-account CSM only types-checks against enterprise pricing (hundreds of dollars per seat, or large contracts). At $40 self-serve, the coherent relationship box is low-touch, in-product, community-supported. Either fix this box to match the rest — or, if you truly believe high-touch is right, you must re-derive pricing, CAC, and CM together. You cannot bolt a premium relationship onto a self-serve economic engine.`,
          },
          {
            label: 'Doesn\'t matter — the canvas is just a brainstorming worksheet, boxes don\'t have to agree.',
            correct: false,
            consequence: `**This is the misconception the lesson attacks.** If the boxes don't have to agree, the canvas is decoration. Its entire value is that the arrows between boxes must resolve — the relationship box is *coupled* to revenue and cost structure, and a mismatch there is a real, expensive defect you want to catch on paper, not after you've hired three CSMs.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Assemble my canvas from my dossier', kind: 'ask', question: 'Using my saved thesis, ICP, positioning, pricing, unit economics, GTM, and sales slots, draft all nine canvas boxes for me, pulling directly from what I already committed.' },
        { label: 'Find my incoherent seams', kind: 'critique' },
        { label: 'Harder: coherence across boxes', kind: 'harder', concept: 'detecting integration errors between canvas boxes (relationship-vs-pricing, segment-vs-channel, cost-vs-revenue) rather than filling boxes in isolation' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What is the single most important thing a completed business model canvas verifies?',
          options: [
            'That all nine boxes are filled in with impressive-sounding content',
            'That the boxes are mutually coherent — the arrows between them resolve, e.g. relationships match pricing and channels match segments',
            'That the company has more revenue streams than competitors',
            'That the cost structure box is empty',
          ],
          answer: 1,
          explain: 'The canvas is an architecture/integration diagram. Its value is cross-box coherence: a value prop needs a segment that calls it, a relationship must be affordable at the revenue level, a cost must have revenue covering it. Full boxes that contradict each other are worse than empty ones.',
        },
        {
          kind: 'mcq',
          prompt: 'A canvas that "links cleanly" on paper still might be completely wrong because:',
          options: [
            'The boxes are validated facts, so it cannot be wrong',
            'Every box is an unvalidated hypothesis; internal coherence proves consistency, not truth',
            'Canvases are always correct once all nine boxes agree',
            'Revenue streams automatically guarantee product-market fit',
          ],
          answer: 1,
          explain: 'A clean integration test over mocked services proves the wiring, not that the services do anything real. The canvas checks internal consistency; the assumptions inside each box can still be false. That gap is exactly why the pre-mortem in the next lesson is necessary.',
        },
        {
          kind: 'free',
          prompt: 'Name one pair of boxes in YOUR canvas that must agree with each other, state whether they currently resolve, and if there is tension, describe the type error and how you would fix it.',
          rubric: 'Strong answer: (1) picks a genuinely coupled pair (relationship↔pricing, segment↔channel, cost↔revenue, key-resource↔value-prop) rather than two unrelated boxes; (2) checks the actual contract using the learner\'s committed numbers/slots; (3) if coherent, explains WHY the arrow resolves; if not, names the specific mismatch and a concrete fix that keeps the rest of the model consistent (not a hand-wave).',
        },
      ],
      commitSummary: 'concept only — the canvas is a checkpoint; you commit strategy in lesson 12.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '12.3',
      module: 12,
      title: 'Red-teaming your own company (pre-mortem as chaos engineering)',
      estMinutes: 18,
      prerequisites: ['12.1', '12.2'],
      artifactSlot: null,
      concept: `A **pre-mortem** inverts the usual planning question. Instead of "how do we succeed?", you assume the failure has already happened: *it is two years from now and the company is dead — write the post-mortem.* Then you enumerate, concretely, every reason it died. The inversion matters because "how do we succeed" invites optimism and confirmation bias, while "we already failed, explain why" gives your brain permission to voice the risks it was politely suppressing. The same people who couldn't find a flaw in the plan will, when told the plan already failed, produce a dozen.

This is **red-teaming**: you deliberately play the adversary against your own strategy. And the sharpest version borrows from **chaos engineering** — you don't wait for failures, you *inject* them and watch what breaks. Kill your best channel: does GTM survive? Double your CAC: do the unit economics still clear payback before runway? Assume a well-funded incumbent ships your feature next quarter: does the moat hold, or was it a wish? Assume your riskiest assumption is false: does anything remain?

The goal of the whole exercise is to find the **single most fragile assumption** — the load-bearing belief that, if wrong, takes down everything above it. Every startup has one. Usually it's not a competitor or the market size; it's a quiet assumption in the middle of the canvas ("developers will connect their CI to a third party," "teams will pay before the benchmark is rich") that everything else silently depends on. Naming it is the point. You then either de-risk it cheaply now, or you accept it consciously as the bet you're making — which is very different from not knowing you made it.`,
      reframe: {
        analogy: `A pre-mortem is **chaos engineering for a company**. Chaos engineering doesn't wait for the region to fail in production at 3am; it runs Chaos Monkey in a controlled window, kills instances on purpose, and observes which dependencies were secretly load-bearing. The pre-mortem injects the same controlled faults into your *business*: terminate the top acquisition channel, spike CAC, fail the key partnership (GitHub changes its API terms), and watch which part of the model falls over. The assumption whose failure cascades into everything else is your **single point of failure** — and, exactly as in distributed systems, the whole exercise exists to surface SPOFs while the blast radius is still a whiteboard, not a bankruptcy.`,
        breaks: `Chaos engineering has a running system emitting real metrics; you can *measure* what broke and roll back in minutes. A pre-mortem runs on a **model of a company that doesn't exist yet**, so your fault-injection results are only as good as your imagination and honesty — you can fail to inject the fault that actually kills you because you never thought of it, and there's no telemetry to correct you. Chaos engineering also has a blameless, bounded blast radius; a founder red-teaming their own baby fights a real psychological pull to flinch away from the fatal answer. The technique surfaces the failures you're willing to imagine — which is why an outside red-teamer (or an adversarial tutor) is worth more here than in almost any other exercise.`,
      },
      workedExample: `**Meridian's** pre-mortem. It's 2028; Meridian is dead. The team injects faults and reads the blast radius:

- **Inject: kill the content/community channel.** CAC was already thin at $250 against a $31 CM (1.69×). Without the cheap channel, CAC climbs and the ratio slips under 1× — *painful, survivable if caught early.* Not the fatal one.
- **Inject: GitHub Actions changes its API terms** so third-party ingestion needs a partnership Meridian can't get. Ingestion is a **key resource**; without it there is no product. *Severe, but arguably diversifiable across CI providers.*
- **Inject: the benchmark data flywheel never reaches critical mass** — teams won't pay $40/seat for "insight" until the comparative benchmarks are rich, but the benchmarks only get rich once many teams pay. **Everything above depends on this.** The moat (12.1), the key-resource box (12.2), and the revenue all rest on it.

The single most fragile assumption is the **cold-start of the flywheel**: *"early teams will pay full price for insight that is weak precisely because they are early."* If false, no channel fix or partnership matters — the value prop never ignites. That's the SPOF. Meridian's response isn't to pretend it's solved; it's to **de-risk it cheaply now**: seed benchmarks from public open-source CI data so day-one insight doesn't depend on paying customers, and price the early cohort lower until the flywheel spins. The pre-mortem converted a silent, fatal assumption into a named, funded bet.`,
      branch: {
        scenario: `You run a pre-mortem and surface three failure modes: (A) a competitor copies your dashboard UI; (B) your CAC rises 30%; (C) your core assumption — that your ICP will even adopt the product's workflow — turns out false. You have time to seriously de-risk only ONE this quarter. Which, and why?`,
        choices: [
          {
            label: 'A — get ahead of the competitor by shipping more UI features so they can\'t catch up.',
            correct: false,
            consequence: `**Chasing the least fatal fault.** A copyable UI was never your moat (see 12.1) — racing on features is exactly the game you can't win and don't need to. Worse, it spends your scarce quarter defending the *shallowest* risk while the load-bearing assumption (C) sits untested. You'd be hardening a non-SPOF.`,
          },
          {
            label: 'C — cheaply test whether the ICP actually adopts the workflow, because everything else is worthless if that\'s false.',
            correct: true,
            consequence: `**Correct.** C is the single point of failure: if the ICP won't adopt the core workflow, then CAC, competitors, and UI polish are all moot — you're optimizing a product nobody uses. Chaos engineering says harden the dependency whose failure cascades furthest. And adoption is usually the *cheapest* thing to test (a dozen real onboarding attempts) relative to how fatal it is. De-risk the SPOF first; the rest are tuning.`,
          },
          {
            label: 'B — lock in cheaper acquisition now, since CAC is already thin at 1.69×.',
            correct: false,
            consequence: `**Reasonable-sounding, still wrong order.** CAC pressure is real and worth watching, but a 30% CAC rise degrades a *working* model — it's a tuning problem. If assumption C is false, there is no working model to tune, and a lower CAC just buys you more users who don't adopt. Fix the existential dependency before the efficiency one.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Run a pre-mortem on my company', kind: 'ask', question: 'Assume my company is dead in two years. Using my committed dossier, enumerate the most likely causes of death, then rank them by blast radius and tell me which is my single point of failure.' },
        { label: 'Inject a specific failure', kind: 'ask', question: 'Inject one chaos fault into my model — kill my main channel, double my CAC, or fail my key partnership — and walk me through exactly which parts of my canvas fall over and whether I survive.' },
        { label: 'Critique how honest my pre-mortem is', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why does a pre-mortem ("assume we already failed — why?") surface more real risks than asking "how do we succeed?"',
          options: [
            'It is mathematically equivalent, just phrased differently',
            'Assuming failure already happened defeats optimism/confirmation bias and licenses people to voice suppressed risks',
            'It guarantees you will find every possible failure',
            'Because it replaces judgment with a formula',
          ],
          answer: 1,
          explain: 'The inversion is psychological, not mathematical. "How do we win?" invites motivated reasoning; "we already lost, explain the corpse" gives the team permission to name the doubts they were suppressing. It does not guarantee completeness — you can still miss a fault you never imagined.',
        },
        {
          kind: 'mcq',
          prompt: 'In the chaos-engineering framing of a pre-mortem, the "single point of failure" you are hunting for is:',
          options: [
            'The competitor with the most funding',
            'The assumption whose failure cascades into and invalidates everything else in the model',
            'The line item with the highest cost',
            'Whichever risk is easiest to fix',
          ],
          answer: 1,
          explain: 'A SPOF is the load-bearing dependency: the assumption that, if false, takes down the moat, the value prop, and the revenue at once. It is often a quiet mid-canvas belief, not a competitor or a cost line — and it is precisely what fault injection is designed to reveal.',
        },
        {
          kind: 'free',
          prompt: 'Run a mini pre-mortem on YOUR company: state the single most fragile assumption everything else depends on, show why its failure cascades, and describe one cheap experiment to de-risk it this quarter (or argue why you consciously accept it as your core bet).',
          rubric: 'Strong answer: (1) identifies a genuine load-bearing assumption specific to the learner\'s model, not a generic risk like "a competitor appears"; (2) traces the cascade — which canvas boxes / moat / revenue collapse if it\'s false; (3) proposes a CHEAP, concrete test to de-risk it now, OR explicitly and consciously accepts it as the central bet with reasoning; (4) distinguishes this SPOF from lesser, survivable/tuning risks.',
        },
      ],
      commitSummary: 'concept only — the pre-mortem sharpens the strategy you commit next, in lesson 12.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '12.4',
      module: 12,
      title: 'The final pitch: presenting the complete startup',
      estMinutes: 20,
      prerequisites: ['12.1', '12.2', '12.3'],
      artifactSlot: 'strategy',
      concept: `Everything you built now compresses into one artifact a stranger can evaluate in five minutes: the **pitch**. The dossier — thesis, problem, ICP, positioning, pricing, unit economics, GTM, sales, financials, capital, legal, and now strategy — is the source tree. The pitch is the **compiled, runnable binary**: small, fast, and it either executes in the listener's head or it segfaults.

A complete pitch answers, in order, a short sequence of questions with no gaps: **What's the problem, and for whom?** (problem + ICP) → **What's your answer, and why is it different?** (positioning) → **How does it make money per customer?** (pricing + unit economics: your $31 CM, $250 CAC, 1.69× ratio) → **How do you reach customers?** (GTM + sales) → **Where does this go?** (financials + strategy + moat). If any link is missing, the listener's mental execution halts there — an unresolved symbol.

The distilled core is the **one-line pitch**: a single sentence that names who it's for, what it does, and why it wins. Not a slogan — a *claim*. "Meridian gives small engineering teams enterprise-grade CI insight in ten minutes, and gets sharper with every team that joins." That one line carries the ICP, the value prop, and the moat.

The final discipline is **coherence under questioning**. A pitch isn't a monologue; it's an interface that must return consistent answers when probed in any order. "What's your CAC?" "Why won't Google crush you?" "Who exactly is the buyer?" A dossier that was assembled honestly answers all of them without contradiction — because the numbers were derived once and reused everywhere. That consistency, more than polish, is what a sharp listener is actually testing.`,
      reframe: {
        analogy: `The pitch is **linking and shipping a binary**. All course-long you compiled object files — each module produced one \`.o\`: unit-economics.o, positioning.o, gtm.o. Alone, none runs. The pitch is the **linker invocation** that resolves every symbol across them into a single executable a listener can run in their head. The **one-line pitch** is the program's entry point — \`main()\` — the one function everything else exists to support. And fielding investor questions is **fuzzing your interface**: they throw inputs in unpredictable order ("CAC?" then "moat?" then "why now?") and watch whether the binary returns consistent values or crashes. A dossier built coherently is a well-linked binary: no undefined references, no two modules disagreeing about the same number.`,
        breaks: `A linked binary is deterministic — same input, same output, forever. A pitch runs on **humans**, who are not deterministic evaluators: the same words land differently depending on the listener's priors, the market's mood, and whether you sound like you believe it. A perfectly coherent dossier can still fail to raise, and an incoherent one can still get funded on hype in a frothy market — the "runtime" here has biases, timing, and narrative pull that no compiler models. So treat coherence as *necessary and controllable* — the part you can engineer — while accepting that shipping to human runtimes involves forces (conviction, timing, story) that linking a binary never does.`,
      },
      workedExample: `**Meridian's** dossier links into a pitch that runs end to end, every number tracing back to an earlier module:

*"Small engineering teams — three to thirty developers — run CI they don't have time to babysit, and they can't justify a platform engineer to fix it (**problem + ICP, M2**). Meridian gives them enterprise-grade CI insight in ten minutes: why builds are slow, which tests are flaky, how they compare to similar teams (**positioning, M4**). It's $40 a seat a month, expanding by seats as the team grows; each seat costs us $9 to serve, so we keep $31 of contribution margin (**pricing + unit economics, M5–M6**). We acquire through developer content and community at about $250 per customer — a 1.69× LTV:CAC today, and we've named the two levers that take it past 3× (**GTM + unit economics, M5, M7**). Our moat is a benchmark flywheel: every team's runs make the comparison sharper, and a new entrant starts at zero runs (**strategy + moat, M12.1**). We will not chase enterprise or become an observability suite — that focus is what keeps our CAC survivable (**strategy constraints, M12.1**)."*

**One-line pitch:** *"Meridian gives small engineering teams enterprise-grade CI insight in ten minutes — and gets sharper with every team that joins."*

Now **fuzz it**. *"CAC?"* → $250, thin but improving. *"Why won't a giant crush you?"* → they treat this as a checkbox for a segment they don't serve; our flywheel needs runs they don't have in *this* niche. *"Riskiest assumption?"* → cold-start of the flywheel; here's how we seed it from open-source CI data (**pre-mortem, M12.3**). Every probe returns a consistent answer, because every number was derived once and reused. That is a linked binary.`,
      branch: {
        scenario: `You've delivered your pitch. An investor probes: "Your deck says CAC is $250, but the growth section implies you'll acquire thousands of customers next year on a marketing budget that works out to more like $600 per customer. Which is it?" What does this moment actually test, and what's the right response?`,
        choices: [
          {
            label: 'Pick whichever number sounds better in the moment and move on confidently — investors respect decisiveness.',
            correct: false,
            consequence: `**The trap that ends the meeting.** The investor didn't ask because they care about $250 versus $600 — they're fuzzing your binary for **internal consistency**, and they just found two modules returning different values for the same symbol. Bluffing past it confirms the dossier isn't coherent: if these two numbers disagree, what else does? A confident wrong answer is worse than an honest "let me reconcile that," because it reveals you either don't know or will paper over gaps.`,
          },
          {
            label: 'Recognize it as a linker error — two parts of your dossier disagree — and reconcile them transparently, showing which assumption changes and why.',
            correct: true,
            consequence: `**Correct.** This is an undefined-reference error surfaced by fuzzing: your unit-economics module and your growth module disagree about CAC. The right move is to reconcile out loud — "the $250 is our proven channel at current volume; scaling to thousands blends in more expensive channels, so blended CAC rises to ~$600, which is exactly why we're fixing the ratio before we scale (12.1, M5's scaling trap)." That answer turns a caught inconsistency into a demonstration that you understand your own model. Coherence under questioning is the whole test.`,
          },
          {
            label: 'Insist both numbers are fine and it\'s too detailed to matter at this stage.',
            correct: false,
            consequence: `**Dismissing the probe fails it.** "Too detailed to matter" tells a sharp listener you haven't linked your own numbers — and unit economics is never too detailed at any stage; it's the core question of whether the business works. Waving off the inconsistency reads as either not understanding it or hoping they won't. Either way the binary just crashed on a routine input.`,
          },
        ],
      },
      artifact: {
        componentKey: 'form',
        prompt: `Link the binary. Commit your strategic constraints (what you will NOT do), your primary moat, and your final one-paragraph pitch. This is the last artifact — your company is compiled.`,
        fields: [
          { key: 'constraints', label: 'What you will deliberately NOT do', type: 'textarea' },
          { key: 'moat', label: 'Your primary moat (the invariant competitors can\'t break)', type: 'textarea' },
          { key: 'finalPitch', label: 'Final one-paragraph pitch', type: 'textarea' },
        ],
      },
      tutorHooks: [
        { label: 'Assemble my pitch from my dossier', kind: 'ask', question: 'Using every slot I have committed — thesis, problem, ICP, positioning, pricing, unit economics, GTM, sales, financials, capital, legal, strategy — draft my full pitch and my one-line pitch, with each claim tracing to the module it came from.' },
        { label: 'Fuzz my pitch with hard questions', kind: 'ask', question: 'Act as a skeptical investor. Probe my pitch in unpredictable order — CAC, moat, buyer, why-now, riskiest assumption — and flag any place where two of my committed numbers or claims contradict each other.' },
        { label: 'Critique my one-line pitch', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'When an investor probes your pitch with rapid-fire questions in unpredictable order, what are they primarily testing?',
          options: [
            'How fast you can talk',
            'Whether your dossier returns consistent answers under questioning — internal coherence with no contradicting numbers',
            'Whether your slide design is polished',
            'How many features your product has',
          ],
          answer: 1,
          explain: 'Questioning is fuzzing your interface: they feed inputs in random order and watch whether the binary returns consistent values or crashes. A coherently built dossier — every number derived once and reused — answers "CAC?", "moat?", "buyer?" without contradiction. That consistency, not polish, is the real test.',
        },
        {
          kind: 'mcq',
          prompt: 'What is the role of the one-line pitch relative to the full dossier?',
          options: [
            'It is a decorative slogan unrelated to the substance',
            'It is the entry point — like main() — a single claim carrying who it\'s for, what it does, and why it wins, that the whole dossier exists to support',
            'It replaces the need for any underlying numbers',
            'It should list every feature the product has',
          ],
          answer: 1,
          explain: 'The one-line pitch is the program\'s entry point: a single testable claim naming the ICP, the value proposition, and the moat. It doesn\'t replace the dossier — it compresses it into the one sentence everything else supports, the way main() is backed by every module it calls.',
        },
        {
          kind: 'free',
          prompt: 'Write your one-line pitch (who it\'s for, what it does, why it wins) and then answer three fuzzing questions a skeptic would ask, showing that your answers are consistent with each other and with your committed numbers.',
          rubric: 'Strong answer: (1) one-line pitch names the ICP, the value proposition, AND the differentiator/moat in a single testable claim (not a vague slogan); (2) picks three genuinely probing questions (CAC/economics, moat durability, buyer identity, why-now, riskiest assumption); (3) answers each using the learner\'s actual committed dossier numbers; (4) crucially, the three answers do not contradict each other — demonstrating the coherence-under-questioning the lesson demands.',
        },
      ],
      commitSummary: 'your strategic constraints, primary moat, and final pitch written to **startup.strategy** — the last slot. Your company links and runs: every module, from thesis to strategy, now resolves into one coherent, defensible whole. The binary is compiled. Ship it.',
    },
  ],
}
