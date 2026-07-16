import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 0 — Bootstrapping: the business stack for engineers
//
// The trust-builder and onboarding module. Deliberately a little shorter and
// sharper per-lesson than the reference (M5). Its job: install the mental
// compiler. You are going to compile a company. Each module is a build stage;
// startup.json is your binary; by module 12 it links and runs. Only the last
// lesson (0.4) has an artifact — it commits startup.thesis, the first field
// written to the accumulating binary.
// ===========================================================================

export const module0: Module = {
  id: 0,
  title: 'Bootstrapping: the business stack for engineers',
  goal: 'Install the mental compiler — map the business canon onto a system architecture you already hold.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '0.1',
      module: 0,
      title: 'The company as a system',
      estMinutes: 12,
      prerequisites: [],
      artifactSlot: null,
      concept: `A company is a system. Same primitives you already reason about: **inputs → transform → outputs → feedback**.

- **Inputs**: capital, labor, attention (leads).
- **Transform**: the machine that turns a dollar of input into more than a dollar of output — product plus the go-to-market around it.
- **Outputs**: revenue, and a changed customer.
- **Feedback**: the outputs loop back as inputs. Revenue funds more acquisition; a happy customer refers another; a churned one raises the cost of the next.

Three top-level signals summarize the whole machine:

$$\\text{revenue} - \\text{cost} = \\text{margin}$$

**Revenue** is throughput (dollars/period). **Cost** is what the transform draws to run. **Margin** is the net — the only signal that tells you whether the system is a generator or a load.

The engineer's error is optimizing the transform (the product) in isolation while the loops are broken — shipping features into a funnel that leaks faster than it fills. Systems thinking says the loop dominates the component. A mediocre product inside a tight acquisition-retention loop beats a beautiful product bleeding customers. This course reads the whole graph, not just the box in the middle.`,
      reframe: {
        analogy: `A company is a **dataflow graph with feedback edges** — think a streaming pipeline, or a control system. Inputs are source nodes (capital, leads); the product is the transform stage; revenue is the sink. The edges that matter most are the **feedback loops**: revenue → acquisition spend, satisfaction → referral, churn → replacement cost. Margin is the loop's **gain**: greater than 1 and the system self-amplifies; less than 1 and every pass through the loop attenuates until it dies. You already debug systems by tracing signal around the loop, not by staring at one stage. Same move here.`,
        breaks: `A dataflow graph has stable, known transfer functions; a company's edges are **noisy, laggy, and adversarial**. Competitors mutate your gain without warning, feedback arrives months late (this quarter's churn was seeded two quarters back), and humans in the loop respond to incentives, not spec. So trace the loops for *intuition about direction and sign*, but never trust the graph as a deterministic simulator — the constants drift under you.`,
      },
      workedExample: `**Meridian** — a B2B developer-tooling startup selling CI insights to small engineering teams — as a system:

- **Inputs**: $2,000/mo acquisition spend, one founder's labor, inbound attention from content.
- **Transform**: the product (CI insight dashboards) plus the sales/onboarding motion that converts a trial into a paying seat.
- **Outputs**: $40/seat/month revenue; a team that now trusts its pipeline.
- **Feedback**: the $2,000 buys ~8 customers/month; retained customers refer peers (cheaper future inputs); churned ones must be replaced (more expensive inputs).

Top-level signals for one seat: revenue $40, variable cost $9, margin $31 (78%). The margin is healthy — but margin per unit says nothing yet about whether the *loops* close: whether $2,000 in reliably returns more than $2,000 of lifetime margin out. That question — the gain around the acquisition loop — is what Modules 5 and 9 make precise. Module 0 just teaches you to see it as a loop at all.`,
      branch: {
        scenario: `Meridian's founder spends every hour polishing the product — faster dashboards, more integrations — and is proud that the app is objectively excellent. Yet revenue is flat: they acquire ~8 customers a month and lose ~8. As their systems-minded advisor, where do you point first?`,
        choices: [
          {
            label: 'Keep improving the product; a great enough product eventually sells itself.',
            correct: false,
            consequence: `**Instructive miss.** You're optimizing one transform stage while a feedback edge is broken. Acquiring 8 and losing 8 is a **retention loop with gain ≈ 1** — the tank fills and drains at the same rate, so throughput never grows no matter how good the box in the middle gets. Product quality that customers never stay long enough to feel is wasted signal.`,
          },
          {
            label: 'Trace the loop: why is churn matching acquisition? Fix the leaking feedback edge before adding more input.',
            correct: true,
            consequence: `**Correct.** The signal isn't in the transform, it's in the loop. Flat revenue with equal in/out flow is a **conserved-quantity problem**: find why retention offsets acquisition (onboarding cliff? wrong customer? unfelt value?). Close that edge and the *same* product suddenly compounds, because now every acquired customer is a lasting node instead of a passing one.`,
          },
          {
            label: 'Pour more money into acquisition to overwhelm the churn.',
            correct: false,
            consequence: `**Instructive miss.** Feeding more input into a leaking loop just moves more water through a system with gain ≈ 1 — you pay more to acquire while the same fraction drains out the back. You can rent temporary growth this way, but the moment spend stops, so does growth. Fix the loop's gain first; *then* input becomes fuel instead of a treadmill.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Draw my company as a system', kind: 'ask', question: 'For my domain and product idea, sketch the inputs, transform, outputs, and the two or three feedback loops that will most determine whether it grows. Flag which loop is riskiest.' },
        { label: 'Critique my systems view', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A company acquires 100 customers a month and loses 100 a month while shipping constant product improvements. The single best description of the situation is:',
          options: [
            'A growing business that just needs more time',
            'A feedback loop with gain near 1 — throughput is capped until retention is fixed',
            'A pricing problem that a discount would solve',
            'A product-quality problem the improvements will resolve',
          ],
          answer: 1,
          explain: 'Equal inflow and outflow is a conserved quantity: the customer base is flat regardless of how good the product gets. The binding constraint is the retention feedback edge (loop gain ≈ 1), not the transform stage.',
        },
        {
          kind: 'mcq',
          prompt: 'In the inputs → transform → outputs → feedback framing, "margin" is best understood as:',
          options: [
            'The size of the transform stage',
            'The loop gain — whether outputs returning as inputs amplify or attenuate the system',
            'The total revenue for the period',
            'A synonym for the acquisition budget',
          ],
          answer: 1,
          explain: 'Margin is the net that loops back. Positive margin funds more input (amplification); negative margin drains the system on every pass (attenuation). It is the gain of the whole machine, not the size of any one stage.',
        },
        {
          kind: 'free',
          prompt: 'Describe YOUR company idea as inputs → transform → outputs → feedback. Name at least two feedback loops and say which one you think is most likely to be broken or weak, and why.',
          rubric: 'Strong answer: (1) identifies concrete inputs (capital, labor, leads) and a specific transform; (2) names revenue AND a non-monetary output (a changed customer); (3) names at least two real feedback loops (e.g. revenue→acquisition, satisfaction→referral, churn→replacement cost); (4) reasons about which loop is weakest for THEIR domain rather than defaulting to "the product needs work."',
        },
      ],
      commitSummary: 'concept only — you commit your thesis in lesson 0.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '0.2',
      module: 0,
      title: 'The business glossary as an API reference',
      estMinutes: 13,
      prerequisites: ['0.1'],
      artifactSlot: null,
      concept: `Business vocabulary isn't mystical — it's an **API reference**. Each term is a function with a signature, units, and a contract. Learn the types and the jargon collapses into a small, composable interface.

- **revenue** \`: (period) -> USD\` — gross dollars in per period. Throughput. Not profit.
- **grossMargin** \`: () -> ratio ∈ [0,1]\` — $\\frac{\\text{revenue} - \\text{COGS}}{\\text{revenue}}$. Fraction of each dollar left after the direct cost of delivery. Units: dimensionless.
- **CAC** \`: () -> USD/customer\` — customer acquisition cost = acquisition spend ÷ customers acquired.
- **LTV** \`: () -> USD/customer\` — lifetime value = contribution margin per period × expected lifetime.
- **churn** \`: () -> ratio/period\` — fraction of customers (or revenue) lost per period. Units: 1/time.
- **runway** \`: () -> months\` — cash ÷ burn. How long until the balance hits zero at current spend.
- **burn** \`: () -> USD/month\` — net cash consumed per month (spend − revenue when negative). Units: USD/time.

Two contracts that catch beginners: watch the **units** (churn is a rate, per period; LTV is dollars, total), and never confuse **revenue with margin** — a term named for the money coming in tells you nothing about the money kept. Every later module composes these calls: LTV depends on churn and margin; runway depends on burn; the financial model in Module 9 just wires them together.`,
      reframe: {
        analogy: `Treat the glossary exactly like reading an unfamiliar library's **API docs**. You don't memorize prose; you learn each function's **type signature and units**, then compose. \`runway = cash / burn\` type-checks (USD ÷ USD/month = months). \`LTV = margin_per_period * lifetime\` type-checks (USD/month × months = USD). If your arithmetic produces the wrong units, you called the API wrong — same discipline as catching a bug where you passed milliseconds to a function expecting seconds. Dimensional analysis is your type checker.`,
        breaks: `Unlike a real API, these signatures have **no enforced implementation** — definitions drift between companies and investors. One firm's "churn" is logo churn (customers), another's is revenue churn (dollars net of expansion); "CAC" may or may not be fully loaded with salaries. So the *type* is stable but the *semantics* are negotiable — always confirm which definition a given number was computed under before you compose with it, or you'll link against the wrong ABI.`,
      },
      workedExample: `Reading **Meridian** through the API:

- \`revenue(month)\` at 100 seats = 100 × $40 = **$4,000/mo**.
- \`grossMargin()\` with $9 variable cost/seat ≈ (40 − 9)/40 = **78%**.
- \`CAC()\` = $2,000 ÷ 8 = **$250/customer**.
- \`LTV()\` = $31/mo × 13.6 mo ≈ **$422/customer**.
- \`churn()\` ≈ a monthly rate implying ~13.6-month average lifetime.
- \`burn()\`: fixed costs are founder salary $6,000/mo + base cluster $800/mo = $6,800/mo; against $4,000 revenue at 100 seats, net **burn ≈ $2,800/mo** (before acquisition spend).
- \`runway()\` with, say, $30,000 in the bank ≈ 30,000 / 2,800 ≈ **10.7 months**.

Notice the composition: \`runway\` called \`burn\`, which called \`revenue\`; \`LTV\` called margin and lifetime. None of these terms is deep on its own. The skill is knowing each signature cold so you can read any pitch, dashboard, or investor question as a sequence of typed calls — and immediately smell it when someone quotes a number whose units don't line up.`,
      branch: {
        scenario: `A founder tells you: "We're crushing it — $50k in revenue this month and a 90% margin, so we're basically printing $45k in profit." What does an engineer reading the API reference say?`,
        choices: [
          {
            label: 'Great — $45k/month profit is a strong business.',
            correct: false,
            consequence: `**Instructive miss.** You composed the calls wrong. \`grossMargin\` is *gross* — revenue minus **COGS only**. It excludes salaries, sales, rent, and acquisition (the operating costs). "Revenue × gross margin" is not profit; it's gross profit, which still has the entire fixed-cost base subtracted from it. The 90% could sit on top of a business burning cash every month.`,
          },
          {
            label: 'Gross margin is not profit — ask for operating costs and burn before believing "profit."',
            correct: true,
            consequence: `**Correct.** You caught a type error. \`grossMargin\` answers "how much of each revenue dollar survives the direct cost of delivery," not "how much do we keep overall." To get to profit you subtract fixed/operating costs; to know survival you check \`burn\` and \`runway\`. A 90% gross margin business can and often does burn cash. Always ask which line the number sits above.`,
          },
          {
            label: 'The margin must be wrong — 90% is impossible.',
            correct: false,
            consequence: `**Instructive miss.** 90% gross margin is entirely normal for software — COGS is tiny relative to price. The error isn't the margin figure; it's treating gross margin as if it were net profit. The number is plausible; the *composition* into "$45k profit" is what's invalid.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Type-check a metric in my domain', kind: 'ask', question: 'Give me a realistic dashboard line for my domain and walk me through its type signature and units. Then show me one common way founders miscompose it.' },
        { label: 'Harder: compose the metrics', kind: 'harder', concept: 'deriving runway from burn, revenue, and churn as chained typed calls' },
        { label: 'Critique my definitions', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which pair of "type signatures" is correct?',
          options: [
            'churn : USD/customer  and  LTV : ratio',
            'runway : months  and  churn : ratio per period',
            'CAC : ratio  and  burn : USD (one-time)',
            'grossMargin : USD  and  revenue : ratio',
          ],
          answer: 1,
          explain: 'runway is a duration (cash ÷ burn = months), and churn is a rate (fraction lost per period, units 1/time). The other options swap dollars, ratios, and rates — the units do not type-check.',
        },
        {
          kind: 'mcq',
          prompt: 'A company reports 80% gross margin and $200k monthly revenue. What can you conclude about its monthly profit?',
          options: [
            'Profit is $160k',
            'Profit is $40k',
            'Nothing — gross margin excludes operating and fixed costs, so profit is undetermined',
            'The company is definitely profitable',
          ],
          answer: 2,
          explain: 'Gross margin only nets out COGS (the direct cost of delivery). Salaries, sales, rent, and acquisition are still unaccounted for. Without operating costs you cannot infer profit — the business could be burning cash.',
        },
        {
          kind: 'free',
          prompt: 'Pick any three terms from the glossary (revenue, gross margin, CAC, LTV, churn, runway, burn) and write each as a one-line "API signature" with its units, then give a plausible value for YOUR planned company.',
          rubric: 'Strong answer: (1) writes correct signatures with UNITS for three terms (e.g. runway : months, churn : ratio/period, LTV : USD/customer); (2) values are dimensionally consistent; (3) at least one composition is shown or implied (e.g. LTV depends on margin and lifetime); (4) values are plausible for the learner\'s stated domain rather than copied from Meridian.',
        },
      ],
      commitSummary: 'concept only — you commit your thesis in lesson 0.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '0.3',
      module: 0,
      title: "Why 'soft skills' are just undocumented protocols",
      estMinutes: 13,
      prerequisites: ['0.1', '0.2'],
      artifactSlot: null,
      concept: `"Soft skills" is a misnomer that makes engineers dismiss half of what runs a company. Negotiation, sales, and hiring aren't mystical talents — they're **protocols**: stateful exchanges with a handshake, defined states, transitions, timeouts, and failure modes. They feel soft only because the spec is **undocumented**, learned by apprenticeship rather than RFC.

Model each as a state machine:

- **Sales** — a handshake that establishes trust and fit before payload transfer. States: \`lead → qualified → evaluating → negotiating → closed | lost\`. Failure modes: pitching payload before the handshake completes (talking price to an unqualified lead), or no timeout (a "maybe" that never resolves and blocks the connection forever).
- **Negotiation** — a protocol for reaching a mutually acceptable state given each party's constraints (its **BATNA** = best alternative to a negotiated agreement, effectively each side's reservation value). Failure modes: revealing your reservation value early, or negotiating against yourself when the peer goes silent.
- **Hiring** — a two-way capability handshake under uncertainty and cost. Both sides probe fit; both can defect after "closed" (a bad hire, a rescinded offer). Failure modes: optimizing for handshake performance (interview polish) over the actual capability you need in production.

The reframe pays off twice: you stop fearing these interactions, and you start **debugging** them — "which state are we in? whose move is it? what's the timeout? what failure mode am I in?" — instead of treating a bad outcome as a personality verdict.`,
      reframe: {
        analogy: `Every one of these is a **network protocol** you'd recognize from a wire diagram. Sales is a TCP-style handshake: you don't blast payload before the connection is established (SYN/ACK = trust and qualification), or the peer drops it. Negotiation is two nodes converging on shared parameters within each side's constraints — a version/cipher negotiation where revealing your minimum acceptable value early is like advertising you'll accept the weakest cipher. Hiring is a mutual capability negotiation with a costly, hard-to-reverse commit. Debug them the way you debug any protocol: identify the current state, whose turn it is, what the timeout is, and which failure mode you're in.`,
        breaks: `Network protocols have a **written spec and honest endpoints**; human protocols have neither. The other party can lie, change the rules mid-exchange, act on emotion, or hold state you can't inspect — there's no ground-truth packet capture of what they actually want. And the "correct" move is often relational, not optimal-in-isolation: winning a single negotiation hardest can poison every future exchange with that peer (protocols here are **long-lived and repeated**, not one-shot). Use the state-machine framing to stay oriented, not to pretend humans execute deterministic code.`,
      },
      workedExample: `**Meridian's** founder, an engineer, hates sales — until they model it as a protocol.

Old approach: on every call, immediately demo the product and quote $40/seat. Result: qualified buyers and tire-kickers alike get the same payload, most calls stall in an unresolved "let me think about it" with no timeout, and the pipeline clogs.

Reframed as a state machine:

- \`lead → qualified\`: first ask "how big is your team, what breaks in your CI today?" — a handshake to confirm fit **before** any payload. A 3-person team with no CI pain is *lost* early and cheaply, freeing the connection.
- \`qualified → evaluating\`: only now demo, and only the feature that maps to their stated pain.
- \`evaluating → negotiating\`: discuss price. The founder holds their reservation value (they know CM is $31, so anything above $9/seat is technically viable, but list is $40) and lets the buyer move first on objections.
- Every state gets a **timeout**: "I'll follow up Thursday; if the timing's wrong, tell me and I'll close this out" — no more zombie deals holding open connections.

Same founder, same product, far higher close rate — because they stopped treating a protocol as a personality contest. The skill was never charisma; it was **state management**.`,
      branch: {
        scenario: `Meridian's founder is negotiating an annual contract with a 20-dev team. Early in the call the buyer asks, "What's the lowest you can possibly go?" The founder knows variable cost is $9/seat and list is $40/seat. What's the protocol-correct move?`,
        choices: [
          {
            label: 'Answer honestly with the true floor near $9/seat — transparency builds trust.',
            correct: false,
            consequence: `**Instructive miss.** You just advertised your reservation value on the first exchange. In a negotiation protocol, your BATNA/floor is private state — revealing it collapses the entire bargaining range to your worst acceptable outcome. Honesty about *whether* the product fits is trust-building; broadcasting your minimum price is just handing away every dollar between $9 and what they'd gladly have paid.`,
          },
          {
            label: 'Hold the reservation value; anchor near list, tie any discount to something you get in return (term, seats, case study).',
            correct: true,
            consequence: `**Correct.** Keep your floor as private state and let price move only in exchange for value flowing back — a longer term, more seats, a reference. That's a protocol converging on a mutually acceptable state, not a giveaway. You also reset the frame: the question isn't "how low can you go" but "what are we trading," which is the negotiation actually being in the right state.`,
          },
          {
            label: 'Refuse to discuss price at all until they sign something.',
            correct: false,
            consequence: `**Instructive miss.** That's a timeout/deadlock in the other direction — you stall the protocol in a state the buyer can't advance from, and a serious buyer reads it as evasive. The goal isn't to hide that price exists; it's to keep your *floor* private while still moving the exchange forward on value traded. Refusing to engage just drops the connection.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Diagram a protocol I dread', kind: 'ask', question: 'Take an interaction I find hard (a sales call, a salary negotiation, a tough hire) and lay it out as a state machine: states, transitions, timeouts, and the failure mode I am probably hitting.' },
        { label: 'Harder: multi-party protocol', kind: 'harder', concept: 'negotiation with more than two parties and asymmetric BATNAs' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In the "sales as a handshake" model, quoting price and demoing full payload to an unqualified lead corresponds to which protocol error?',
          options: [
            'A timeout that fires too early',
            'Sending payload before the handshake (trust/qualification) completes',
            'Advertising your reservation value',
            'A deadlock between two nodes',
          ],
          answer: 1,
          explain: 'Qualification is the handshake that establishes fit and trust. Demoing and pricing before it completes is transmitting payload on an unestablished connection — the common reason early sales calls stall and pipelines clog.',
        },
        {
          kind: 'mcq',
          prompt: 'Your BATNA in a negotiation is best described as:',
          options: [
            'The price you hope to get',
            'Your best alternative if this deal fails — effectively your reservation value and source of leverage',
            'The other party\'s maximum budget',
            'A required legal clause in any contract',
          ],
          answer: 1,
          explain: 'BATNA is your best alternative to a negotiated agreement. It sets your walk-away point (reservation value): a strong BATNA is leverage, and a weak one is exposure. It is private state you generally protect, not something you broadcast.',
        },
        {
          kind: 'free',
          prompt: 'Pick one of sales, negotiation, or hiring and write it as a state machine for YOUR company: list the states, the transitions, at least one timeout, and the failure mode you personally are most likely to hit.',
          rubric: 'Strong answer: (1) lists concrete states and transitions for the chosen protocol; (2) specifies at least one explicit timeout/exit condition; (3) names a specific, honest failure mode tied to the learner (e.g. sending payload before handshake, revealing reservation value); (4) treats the interaction as debuggable state, not innate talent.',
        },
      ],
      commitSummary: 'concept only — you commit your thesis in lesson 0.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '0.4',
      module: 0,
      title: 'Your learning contract & the accumulating artifact',
      estMinutes: 14,
      prerequisites: ['0.1', '0.2', '0.3'],
      artifactSlot: 'thesis',
      concept: `Here is the contract for this course, stated as a build.

**You are going to compile a company.** Each module is a **build stage**. \`startup.json\` is your **binary** — a single accumulating artifact that every lesson writes one more field into. By Module 12 it **links and runs**: a coherent, internally consistent company model where the pricing you set in one module is read by the financial model in another, and nothing contradicts.

The mechanics:

- Each module emits an object into a **slot** of \`startup.json\` (thesis, unit economics, pricing, financial model, …).
- Later modules **read earlier slots** as inputs. Set your contribution margin wrong in Module 5 and the Module 9 forecast inherits the error — exactly like a bad value propagating through a build.
- The artifact is **yours and concrete**: you pick a real domain you actually know and build a real company in it across all twelve modules. Generic answers compile to a generic, useless binary.

This lesson writes the **first field**: \`startup.thesis\` — the seed the rest of the build depends on. A thesis is not a mission statement. It's a typed stub: **who** (a specific customer) plus **what** (the specific thing you do for them). Keep it concrete and small. "AI for business" doesn't compile; "CI insights for small engineering teams" does. You can refine it later — but you can't build on nothing, so you commit a stub now and let the later stages resolve it.`,
      reframe: {
        analogy: `\`startup.json\` is a **binary you link incrementally**, and this course is the build pipeline. Your thesis is the **entry point** — declare it wrong or leave it undefined and every later stage has nothing to link against. Each module is a compilation unit that both **reads earlier symbols** (your pricing, your margin, your ICP) and **exports new ones** for the modules downstream. A course that just handed you disconnected essays would be like reading a language spec with no compiler: you'd "understand" everything and be able to build nothing. The accumulating artifact is what turns knowledge into a linked, runnable object.`,
        breaks: `A real binary is deterministic — same source, same output. Your company thesis lives in a **changing world**: the market moves, you learn, and the "correct" thesis at Module 12 may not be the one you committed at Module 0. So treat \`startup.thesis\` as a **stub you're allowed to refactor**, not a frozen constant. The value isn't that your first guess is right; it's that committing *something* concrete lets every later module do real work on real inputs instead of hedging in the abstract. A refactored thesis with twelve modules of reasoning behind it beats a "perfect" one you never committed.`,
      },
      workedExample: `**Meridian** is the worked thesis this course carries as its running example, and it shows exactly what a good stub looks like:

- **domain**: B2B developer tooling.
- **oneLiner**: "CI insights for small engineering teams."

Notice what makes it compile:

- **Who** is specific: small engineering teams (the course later sharpens this to an ICP of teams ~5–30 developers) — not "developers," not "companies."
- **What** is specific and singular: CI insights — one job, not a platform for everything.
- It's **falsifiable and buildable**: you can price it ($40/seat/mo), estimate its margin ($31, 78%), and model its acquisition (CAC $250). Every downstream slot has something real to attach to.

Contrast a non-compiling thesis: "a platform that uses AI to help businesses be more efficient." Who? What, exactly? You can't price it, can't estimate margin, can't name a customer to sell to — so Modules 5, 6, and 9 would have nothing to read and you'd spend the course hedging. Your job below is to write *your* Meridian: a stub in a domain you genuinely know, concrete enough that the next eleven modules can compute on it.`,
      artifact: {
        componentKey: 'form',
        prompt: `Commit your starting thesis. Pick a domain you actually know — you'll build a real company in it across the course. Keep the one-liner concrete (who + what), not grand.`,
        fields: [
          { key: 'domain', label: 'Your domain / industry', type: 'text', placeholder: 'e.g. B2B developer tooling' },
          { key: 'oneLiner', label: 'One-line thesis (who + what)', type: 'text', placeholder: 'e.g. CI insights for small eng teams' },
        ],
      },
      tutorHooks: [
        { label: 'Pressure-test my thesis', kind: 'critique' },
        { label: 'Make my one-liner more concrete', kind: 'ask', question: 'Here is my thesis. Is the "who" and the "what" specific enough to price and build on? Rewrite it two ways: one sharper, one for a narrower niche, and tell me the trade-off.' },
        { label: 'Harder: stress the thesis downstream', kind: 'harder', concept: 'how a vague ICP breaks unit-economics and financial-model assumptions two modules later' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which of these is a thesis stub that can actually be built on in later modules?',
          options: [
            'A platform that leverages AI to help businesses grow',
            'Automated invoice reconciliation for independent bookkeepers',
            'The best developer experience in the world',
            'Reinventing how people work together',
          ],
          answer: 1,
          explain: 'Only "automated invoice reconciliation for independent bookkeepers" names a specific who (independent bookkeepers) and a specific what (invoice reconciliation). It can be priced, its margin estimated, and its customer named — so later slots have real inputs. The others are mission slogans with no attachable who/what.',
        },
        {
          kind: 'mcq',
          prompt: 'Why does the course have each module write into a single accumulating startup.json instead of standalone exercises?',
          options: [
            'To make the app feel more interactive',
            'So earlier decisions become typed inputs that later modules read, forcing internal consistency across the whole model',
            'Because JSON is required for business planning',
            'To prevent learners from changing their answers',
          ],
          answer: 1,
          explain: 'The accumulating artifact is a linked binary: pricing set early is read by the financial model later, so errors and inconsistencies propagate visibly. That composition — not the interactivity — is what turns disconnected concepts into one coherent company model.',
        },
        {
          kind: 'free',
          prompt: 'Write your thesis stub: your domain, and a one-line "who + what." Then argue in two sentences why it is concrete enough to price and build on, or name the one part you most need to sharpen.',
          rubric: 'Strong answer: (1) states a specific domain the learner plausibly knows; (2) a one-liner with an identifiable WHO (a specific customer segment) and WHAT (a single job); (3) self-assesses concreteness — either defends that it can be priced/margined or honestly flags the vaguest element; (4) avoids mission-statement abstraction ("AI for business," "the best X").',
        },
      ],
      commitSummary: 'your starting thesis — domain and one-line who+what — written to **startup.thesis**, the seed that every later module reads and builds on.',
    },
  ],
}
