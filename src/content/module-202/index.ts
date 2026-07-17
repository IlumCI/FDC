import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 202 — BONUS (Autonomous path): Designing the agentic org
//
// A Season-1 bonus module for the AUTONOMOUS-CORPORATION path: a company whose
// business functions are run by AI agents and workflows rather than headcount.
// It slots in after module 4 on the autonomous route. The through-line is an
// engineering reframe: treat the company as a system of cooperating services
// (microservices), decide what to automate with a decision matrix, connect the
// services with clean API-style contracts, and migrate incrementally with the
// strangler-fig pattern instead of a big-bang rewrite. Every lesson is honest
// about where today's agents are unreliable — that honesty IS the curriculum.
// ===========================================================================

export const module202: Module = {
  id: 202,
  season: 1,
  bonus: true,
  paths: ['autonomous'],
  insertAfter: 4,
  title: 'Designing the agentic org: functions as agents',
  goal: 'Draw the org chart of an AI-run company: map each business function to an agent or workflow, and decide what to automate now vs keep human.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '202.1',
      module: 202,
      title: 'The org chart of agents',
      estMinutes: 14,
      prerequisites: [],
      artifactSlot: null,
      concept: `A traditional company is drawn as boxes of people: support, sales, marketing, operations, finance, research. An **autonomous company** keeps the *functions* but changes what fills each box. Each function becomes a **role** that an agent or a workflow can occupy.

Two shapes fill those boxes, and the difference matters:

- A **workflow** is a fixed pipeline of steps you wrote in advance — "fetch the invoice, extract totals, post to the ledger." Deterministic, cheap, auditable. Most of a company is this.
- An **agent** is a component that decides its own next step against a goal, calling tools in a loop until it is done — "resolve this ambiguous refund." Flexible, but non-deterministic and harder to bound.

The org chart of an AI-run company is therefore a **system diagram**: a set of specialized services, each owning one function, cooperating to produce the company's output. Support consumes tickets and emits resolutions. Finance consumes transactions and emits reconciled books. Marketing consumes a brief and emits drafts.

The founder's job shifts from *managing people* to **designing the system**: deciding which functions exist, whether each is a workflow or an agent, and how they hand work to one another. You are drawing an architecture, not filling seats.`,
      reframe: {
        analogy: `Think of the company as a **microservices architecture**. Each business function is a service with one clear responsibility — support, billing, outreach — exposing a defined interface and hiding its internals. You don't care *how* the billing service reconciles as long as it honors its contract, exactly as you don't care whether support is answered by a workflow or an agent as long as it returns a correct resolution.

Just like microservices, this buys you **independent deployability**: you can swap the support service's implementation (rules today, agent tomorrow) without rewiring finance, because they only meet at the interface.`,
        breaks: `Microservices are deterministic given their inputs; an **agent service is not**. The same ticket can produce different actions on two runs, so "the billing service returns X" is a distribution, not a guarantee. Real agents also **hallucinate**, mis-call tools, and fail silently in ways a plain service does not — a REST endpoint that can't do the job returns a clean error, whereas an agent may confidently do the *wrong* thing. So the boxes look like services, but each agentic box needs verification, guardrails, and a human escape hatch that a normal microservice never requires.`,
      },
      workedExample: `**Klarna** is a widely-cited real attempt at staffing a function with an agent. In February 2024 the company reported that its OpenAI-powered assistant was handling about two-thirds of its customer-service chats in its first month — on the order of 2.3 million conversations, which it framed as the work of roughly 700 full-time agents (per Klarna's own press release, so read the framing as a vendor claim, not an audit).

In the org-chart-of-agents view, that is the **support service** being re-implemented: same interface (a customer asks, a resolution comes back), new internals (an agent instead of a queue of humans).

The honest coda matters. By 2025, coverage reported that Klarna's leadership acknowledged leaning *too* hard on automation had cost them on quality, and they moved to make a **human option** available again for customers who wanted it. The lesson is not "don't automate support" — it is that a function filled by an agent is a service with a **reliability budget**, and when you exceed it, quality is the bill. Draw the box, but draw the human fallback next to it.`,
      branch: {
        scenario: `You are sketching your autonomous company's org chart. Someone proposes a single "**do-everything** super-agent" that handles support, finance, and marketing in one prompt, arguing it's simpler than many small services. What's the sound architectural call?`,
        choices: [
          {
            label: 'One super-agent — fewer moving parts is always simpler and cheaper.',
            correct: false,
            consequence: `**Instructive miss.** A monolith agent couples unrelated failure modes: a bad marketing decision and a mis-posted ledger entry now share one context window and one blast radius. You lose independent verification, per-function guardrails, and the ability to swap one implementation without risking the others — the same reasons teams break monoliths into services.`,
          },
          {
            label: 'Separate services per function, each with a narrow responsibility and its own guardrails.',
            correct: true,
            consequence: `**Correct.** One function per box gives you bounded scope, function-specific checks (finance gets strict validation; marketing gets a review step), and independent evolution. You can start finance as a deterministic workflow and support as an agent, and change either without touching the other — the whole point of drawing it as a system of services.`,
          },
          {
            label: 'Skip the org chart entirely — just let the agent figure out the structure at runtime.',
            correct: false,
            consequence: `**Instructive miss.** "Let it self-organize" hides the architecture instead of removing it, and gives you nothing to test, audit, or bound. You still have functions and handoffs — you've just made them implicit and unobservable, which is where cascading failures breed.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Each item below is one way to fill a function box. Sort each into whether it is better modeled as a deterministic WORKFLOW or a goal-seeking AGENT.',
          buckets: ['Workflow (fixed steps)', 'Agent (decides its own steps)'],
          items: [
            { text: 'Extract totals from an invoice PDF and post them to the ledger', bucket: 'Workflow (fixed steps)' },
            { text: 'Send the weekly metrics email every Monday at 9am', bucket: 'Workflow (fixed steps)' },
            { text: 'Resolve an ambiguous refund request that cites a policy edge case', bucket: 'Agent (decides its own steps)' },
            { text: 'Convert a signed contract into three fixed onboarding tasks', bucket: 'Workflow (fixed steps)' },
            { text: 'Triage an angry support ticket and decide whether to escalate', bucket: 'Agent (decides its own steps)' },
          ],
          explain: 'If the steps are known in advance and identical every time, it is a workflow — cheaper, deterministic, auditable. Reach for an agent only when the path genuinely varies with the input (ambiguity, judgement, open-ended tool use). Most function boxes are mostly workflow with a thin agentic layer where judgement is unavoidable.',
        },
      ],
      tutorHooks: [
        { label: 'Draw my org chart of agents', kind: 'ask', question: 'For my company idea, list the core business functions and, for each, say whether it should start as a deterministic workflow or an agent, and why.' },
        { label: 'Harder: agent vs workflow edge cases', kind: 'harder', concept: 'deciding workflow vs agent for functions that are mostly deterministic but have rare ambiguous cases' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In the "functions as services" model, the founder\'s primary job shifts to:',
          options: [
            'Writing every prompt by hand each morning',
            'Designing the system — which functions exist, workflow vs agent, and how they hand off',
            'Hiring one human manager per agent',
            'Making a single agent as large as possible',
          ],
          answer: 1,
          explain: 'The org chart becomes an architecture. The founder designs the set of services, chooses each implementation (workflow or agent), and defines the handoffs — rather than managing people or hand-operating each function.',
        },
        {
          kind: 'mcq',
          prompt: 'Why is "the support service returns a correct resolution" weaker for an agent than for an ordinary microservice?',
          options: [
            'Agents are always slower than services',
            'An agent\'s output is non-deterministic and can be confidently wrong, so it is a distribution needing verification, not a guarantee',
            'Microservices never fail',
            'Agents cannot call tools',
          ],
          answer: 1,
          explain: 'A plain service is deterministic given its inputs and errors cleanly when it cannot comply. An agent can produce different actions across runs and can hallucinate a wrong action confidently, so each agentic box needs verification and a human escape hatch.',
        },
        {
          kind: 'free',
          prompt: 'Pick ONE function of your company (support, sales, marketing, ops, finance, or research). Describe its interface as a service: what does it consume, what does it emit, and would you start it as a workflow or an agent? Justify the choice.',
          rubric: 'Strong answer: (1) names a specific function; (2) states a clear input and output (a real interface), not a vague description; (3) chooses workflow vs agent and ties the choice to whether the path varies with the input; (4) shows awareness that an agentic box needs verification or a human fallback.',
        },
      ],
      commitSummary: 'concept only — you build the automate-vs-keep-human map in the next lesson.',
    },

    // -----------------------------------------------------------------------
    {
      id: '202.2',
      module: 202,
      title: 'Automate-now vs keep-human',
      estMinutes: 15,
      prerequisites: ['202.1'],
      artifactSlot: null,
      concept: `Not every box should be an agent *today*. You need a rule for what to automate now versus keep human, and "it feels automatable" is not a rule. Score each function on three axes:

- **Frequency** — how often the task runs. High frequency means automation pays back its build cost fast; a once-a-quarter task rarely justifies an agent.
- **Cost of error** — what one wrong action costs. A mis-tagged support macro is cheap to undo; a wrong wire transfer or a defamatory public post is not.
- **Ambiguity** — how much judgement, missing context, or genuine novelty the task carries. Low-ambiguity tasks have a knowable right answer; high-ambiguity ones need taste or accountability.

The heuristic writes itself. **Automate now** the top-left quadrant: high frequency, low cost-of-error, low ambiguity — the repetitive, reversible, well-specified work. **Keep human** (or human-in-the-loop) the high-stakes or high-ambiguity work, regardless of how often it runs.

A useful in-between: many functions are automate-now for the *common* path and keep-human for the *tail*. Let the agent handle the 80% of clear cases and **escalate** the ambiguous or expensive 20%. That is not a failure of automation — it is the design. The goal is leverage with a bounded downside, not a headcount trophy.`,
      reframe: {
        analogy: `This is a **decision matrix** — the same tool an engineer uses to triage what to build, buy, or defer. You are scoring candidates on a few weighted axes and reading the quadrant instead of arguing from enthusiasm. "High frequency, low blast radius, low ambiguity" is the automate quadrant the way "high impact, low effort" is the do-it-first quadrant of a prioritization matrix.

It also mirrors **fault-tolerance design**: you automate aggressively where failures are cheap and reversible, and you demand human sign-off where a single fault is catastrophic — exactly how you'd gate a risky deploy behind manual approval while letting safe changes ship continuously.`,
        breaks: `The axes aren't truly independent or static. Cost-of-error and frequency **interact**: a low per-error cost times enormous volume can still be a large aggregate loss, so "low stakes" at scale isn't low stakes. And the boundary **moves** — as models improve and as you add verification, tasks that were too ambiguous last quarter become automatable this one. Worse, ambiguity is often **hidden**: a task looks well-specified until an edge case reveals the context the agent never had. So treat the matrix as a living triage, re-scored as reliability and volume change, not a one-time sort.`,
      },
      workedExample: `**Front-line support triage** is the textbook automate-now case, and vendors publish numbers on it. Intercom's "Fin" agent, for instance, has been marketed around automatically **resolving a large share of common support conversations** — the company has publicized resolution rates in the (roughly) 50%-and-up range on suitable inboxes (vendor-reported, so treat as a marketing figure, and note "resolution" is defined by the vendor).

Map it to the matrix. Support triage is **high frequency** (thousands of tickets), and the *common* questions — "where is my order," "how do I reset my password" — are **low ambiguity** with **low cost of error** (a wrong answer is usually a follow-up message, not a disaster). That is squarely automate-now.

But the same inbox contains the tail: a legal threat, a data-deletion demand, a distraught customer. Those are **high cost-of-error or high ambiguity**, so the well-designed system **escalates** them to a human rather than guessing. The honest read of the vendor numbers is that they describe the automatable *common path*, not the whole function — which is exactly what the matrix predicts. Automate the 50-70% that is safe and repetitive; route the rest to a person.`,
      branch: {
        scenario: `You're deciding whether to fully automate **outbound refunds** in your finance function. Refunds are frequent and mostly routine, but a wrong refund moves real money and is awkward to claw back. What's the best design?`,
        choices: [
          {
            label: 'Fully automate all refunds — they\'re frequent, so the matrix says automate.',
            correct: false,
            consequence: `**Instructive miss.** Frequency is only one axis. Refunds carry a real **cost of error** (money out the door, hard to reverse), so full autonomy puts an unbounded downside on the fast path. High frequency plus high blast radius is exactly the case for automation *with a control*, not blind automation.`,
          },
          {
            label: 'Automate the common path with a threshold: agent handles small, routine refunds; anything above an amount or outside policy escalates to a human.',
            correct: true,
            consequence: `**Correct.** You capture the leverage on the high-frequency, low-stakes majority while capping the blast radius. A value threshold (and a policy-edge check) turns "keep human" from a blanket rule into a targeted gate on exactly the transactions where error is expensive. That is the automate-now-with-escalation pattern the matrix is built for.`,
          },
          {
            label: 'Keep all refunds fully manual — money is involved, so never automate.',
            correct: false,
            consequence: `**Instructive miss.** Blanket "never automate anything with money" throws away the leverage on the routine 90%. The matrix doesn't say avoid the axis — it says gate the expensive tail. Manual-everything is as unexamined as automate-everything.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each business task into AUTOMATE NOW (high frequency, low cost-of-error, low ambiguity) or KEEP HUMAN (high stakes or high ambiguity), using the three-axis matrix.',
          buckets: ['Automate now', 'Keep human (or human-in-the-loop)'],
          items: [
            { text: 'Tag and route incoming support tickets by topic', bucket: 'Automate now' },
            { text: 'Draft first-pass replies to common "where is my order" questions', bucket: 'Automate now' },
            { text: 'Reconcile routine daily transactions against the ledger', bucket: 'Automate now' },
            { text: 'Decide whether to fire an underperforming contractor', bucket: 'Keep human (or human-in-the-loop)' },
            { text: 'Approve a large, irreversible wire transfer to a new vendor', bucket: 'Keep human (or human-in-the-loop)' },
            { text: 'Respond publicly to a legal threat or a PR crisis', bucket: 'Keep human (or human-in-the-loop)' },
          ],
          explain: 'Automate-now items are frequent, reversible, and well-specified — the agent\'s mistakes are cheap and recoverable. Keep-human items carry either irreversible cost (money, legal, personnel) or genuine ambiguity and accountability that an agent cannot own. Note the pattern: several "automate" items are the common path of a function whose expensive tail still escalates.',
        },
        {
          kind: 'numeric',
          prompt: 'A support agent auto-resolves 60% of 5,000 monthly tickets. How many tickets per month still need a human?',
          answer: 2000,
          unit: 'tickets',
          explain: '5,000 total minus 60% auto-resolved (3,000) leaves 2,000 escalated to humans. The escalated tail is a real, sizeable workload — automating the common path does not mean the human queue is empty, and you must staff or route for it.',
        },
      ],
      tutorHooks: [
        { label: 'Score my functions on the matrix', kind: 'ask', question: 'For my company, score each business function on frequency, cost-of-error, and ambiguity, and tell me which quadrant each falls in.' },
        { label: 'Where should I put escalation thresholds?', kind: 'ask', question: 'For a function I want to automate, propose concrete escalation thresholds (amounts, policy edges, confidence) that cap the blast radius while keeping the common path automatic.' },
        { label: 'Critique my automate-vs-keep split', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which task is the clearest "automate now" candidate?',
          options: [
            'Approving a one-off $250,000 acquisition offer',
            'Tagging and routing thousands of routine support tickets by topic',
            'Deciding company strategy for the next two years',
            'Responding to a lawsuit',
          ],
          answer: 1,
          explain: 'Ticket tagging is high-frequency, low cost-of-error, and low-ambiguity — the automate-now quadrant. The others are low-frequency and/or catastrophic-on-error and/or highly ambiguous, which is keep-human territory.',
        },
        {
          kind: 'mcq',
          prompt: 'The three axes of the automate-vs-keep-human matrix are:',
          options: [
            'Cost, latency, and model size',
            'Frequency, cost of error, and ambiguity',
            'Revenue, headcount, and vendor',
            'Speed, accuracy, and price',
          ],
          answer: 1,
          explain: 'Automate the high-frequency, low-cost-of-error, low-ambiguity work; keep humans on high-stakes or high-ambiguity work regardless of frequency. Many functions automate the common path and escalate the expensive tail.',
        },
        {
          kind: 'free',
          prompt: 'Choose one function you are tempted to fully automate. Score it on frequency, cost of error, and ambiguity, then decide: full automation, automate-with-escalation, or keep human. If you pick escalation, name the exact trigger that routes a case to a person.',
          rubric: 'Strong answer: (1) scores all three axes explicitly; (2) reaches a decision consistent with those scores; (3) if choosing escalation, names a concrete, checkable trigger (a dollar threshold, a policy edge, a confidence cutoff) rather than "when it seems hard"; (4) shows awareness that frequency alone does not justify automation when cost-of-error is high.',
        },
      ],
      commitSummary: 'concept only — next you design how these services hand work to each other.',
    },

    // -----------------------------------------------------------------------
    {
      id: '202.3',
      module: 202,
      title: 'Interfaces and handoffs between agents',
      estMinutes: 16,
      prerequisites: ['202.1', '202.2'],
      artifactSlot: null,
      concept: `Once you have several function-services, the risk moves to the **seams**. An autonomous company fails less often because one agent is dumb and more often because two agents hand off sloppily — one emits vague prose, the next misreads it, and the error propagates.

Clean handoffs rest on three mechanisms:

- **Structured outputs.** An agent should emit a defined shape — fields, types, an enum of allowed actions — not free text the next stage has to guess at. "Refund approved: amount 40, currency USD, reason enum RETURN" is a contract; "yeah go ahead and refund them" is a landmine.
- **Queues and state.** Agents rarely hand off synchronously by talking. One writes a task to a **queue** or a **shared state** record; the next picks it up. This decouples them in time, lets you retry, and gives you a log of exactly what crossed the boundary.
- **Contracts with validation.** The receiving side **validates** the handoff before acting. If a required field is missing or an amount is out of range, it rejects the message rather than improvising — the same discipline that keeps one bad input from becoming ten bad actions.

Design the interfaces first, the internals second. If every boundary is a typed, validated, logged contract, a wrong output stays contained at one seam instead of **cascading** through the whole company.`,
      reframe: {
        analogy: `A handoff between agents is an **API contract**, and the whole company is **message passing between services**. You define the schema of what crosses the boundary — required fields, types, allowed values — exactly as you'd define a request/response body or a protobuf message. The receiver programs against the *contract*, not the sender's mood, so either side can change internally as long as the shape holds.

Queues make it **asynchronous message passing**: producer writes, consumer reads, the broker gives you buffering, retries, and an audit trail. And validating the incoming message is just **schema validation at the boundary** — reject malformed input at the door, the way a well-built endpoint rejects a request that fails its schema instead of half-processing it.`,
        breaks: `A normal API contract binds a deterministic producer: given valid inputs, the field *values* are correct, not just well-typed. An agent can emit output that is **schema-valid but semantically wrong** — the JSON parses, \`amount\` is a number, and it's still the wrong amount. Structure catches malformed handoffs, not confidently-wrong ones, so typed interfaces are necessary but not sufficient; you still need value-level checks, cross-agent sanity limits, and sometimes a human on the highest-stakes seams. And agents can quietly **drift** from a schema over time or "helpfully" add fields, so contracts here need active enforcement, not just documentation.`,
      },
      workedExample: `The industry has converged on **structured outputs** precisely to make these handoffs safe. Modern LLM platforms let you constrain a model's output to a **JSON schema** (OpenAI shipped a "Structured Outputs" mode in 2024; Anthropic and others expose the same idea through tool/function definitions with typed parameters). The reason is exactly the handoff problem: downstream code — or a downstream agent — needs a predictable shape, not prose.

Concretely, a triage agent that must hand a refund to a finance agent is made to emit something like a validated object: an \`action\` drawn from a fixed enum, an \`amount\` number, a \`currency\` string, and a free-text \`reason\` that is *not* on the decision path. The finance service then validates: is \`action\` a known value, is \`amount\` under the auto-approve limit, is \`currency\` supported? If not, it rejects or escalates.

The honest caveat: schema-constrained output guarantees the **shape**, never the **judgement**. The refund object can be perfectly typed and still name the wrong customer or an amount the agent shouldn't have approved. So teams pair structured outputs with **value-level validation and limits** at the receiving seam. Structure stops the cascade of *malformed* handoffs; it does not certify the decision inside a well-formed one.`,
      branch: {
        scenario: `Your marketing agent hands drafts to a publishing agent by pasting a paragraph of chatty prose ("Here's a fun post, maybe add the promo, cheers!"). Publishing sometimes posts the wrong thing. What's the fix that most reduces cascading errors?`,
        choices: [
          {
            label: 'Tell the marketing agent to "write clearer handoff messages" in its prompt.',
            correct: false,
            consequence: `**Instructive miss.** A softer instruction to be clearer still leaves an unstructured, unvalidated seam — the publishing agent is still parsing prose and guessing. You've asked for better vibes, not a contract. The next ambiguous phrasing re-creates the bug.`,
          },
          {
            label: 'Define a typed handoff — fields like { text, channel, publishAt, requiresPromo } — that publishing validates before posting.',
            correct: true,
            consequence: `**Correct.** A structured, validated contract removes the guessing: publishing reads defined fields, checks them (known channel? valid time? promo flag boolean?), and rejects anything malformed instead of improvising. The seam is now typed, logged, and retryable, so a bad draft stays contained at the boundary instead of becoming a wrong public post.`,
          },
          {
            label: 'Merge the two agents into one so there is no handoff to get wrong.',
            correct: false,
            consequence: `**Instructive miss.** Merging removes the visible seam but not the failure — the decision "what to publish" and "how to publish" now share one context and one blast radius, and you lose the validation checkpoint between them. You've hidden the interface, not hardened it. Keep the boundary; make it a contract.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'rank',
          prompt: 'Order these steps for designing a safe handoff between two agents, from FIRST to LAST.',
          items: [
            'Define the interface: the fields, types, and allowed values that cross the seam',
            'Have the sending agent emit that structured shape (not free text)',
            'Write the handoff to a queue or shared-state record so it is logged and retryable',
            'Validate the incoming message on the receiving side before acting',
            'Escalate or reject anything malformed or out of range instead of improvising',
          ],
          explain: 'Contracts come first: you cannot emit or validate a shape you have not defined. Then the sender conforms to it, the queue makes the crossing durable and auditable, the receiver validates, and malformed cases are rejected or escalated rather than acted on. Skipping the definition step is what leaves you parsing prose.',
        },
        {
          kind: 'scenario',
          title: 'Tracing a cascade',
          intro: 'A wrong charge reached a customer. You are tracing which seam let a bad value through so you can add the right control.',
          decisions: [
            {
              situation: 'The billing agent received { amount: 4000, currency: "USD" } from the sales agent, where the intended amount was 40. The message was well-formed JSON. What most likely failed?',
              options: [
                { label: 'The JSON schema — the shape was invalid', correct: false, outcome: 'The shape was fine: amount is a number, currency is a string. Schema validation passes a well-formed but wrong value. This is exactly the limit of structured outputs.' },
                { label: 'Value-level validation — no sanity limit rejected an out-of-range amount', correct: true, outcome: 'Right. The handoff was schema-valid but semantically wrong. A value-level check (an auto-approve ceiling, or a cross-check against the order total) at the receiving seam would have caught 4000 and escalated it.' },
                { label: 'The queue dropped the message', correct: false, outcome: 'The message was delivered and processed — nothing was dropped. The problem is that a wrong-but-well-typed value was accepted without a value-range check.' },
              ],
            },
            {
              situation: 'You add a control. Which best prevents this class of error going forward?',
              options: [
                { label: 'A stricter type on amount (integer instead of number)', correct: false, outcome: 'Tightening the type does not stop a wrong integer. 4000 is a valid integer. Type strictness is not value validation.' },
                { label: 'A receiving-side limit that escalates amounts above a threshold or mismatching the source order', correct: true, outcome: 'Correct. A bounded, cross-checked limit at the seam catches confidently-wrong values that any schema would pass. Structure stops malformed handoffs; value checks stop wrong ones.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Design a handoff contract for my agents', kind: 'ask', question: 'Pick two of my company\'s functions that hand work to each other. Design the typed interface between them: fields, types, allowed values, and what the receiver should validate.' },
        { label: 'Harder: schema-valid but wrong', kind: 'harder', concept: 'catching semantically-wrong handoffs that pass schema validation, using value-level checks and cross-agent limits' },
        { label: 'Critique my seams', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why prefer structured outputs over free-text messages between agents?',
          options: [
            'Free text is always slower to generate',
            'A defined shape lets the receiver program against a contract and validate it, instead of guessing at prose',
            'Structured outputs guarantee the decision inside is correct',
            'JSON cannot be hallucinated',
          ],
          answer: 1,
          explain: 'Structure makes the seam a contract the receiver can parse and validate, containing malformed handoffs. It does NOT certify the judgement inside — a typed object can still carry a wrong value, which is why value-level checks are still needed.',
        },
        {
          kind: 'mcq',
          prompt: 'A handoff object is perfectly schema-valid but names the wrong refund amount. This shows that typed interfaces are:',
          options: [
            'Useless — you should go back to free text',
            'Necessary but not sufficient; you still need value-level validation at the seam',
            'A guarantee of correctness',
            'Only relevant to finance functions',
          ],
          answer: 1,
          explain: 'Schema validation catches malformed shapes, not confidently-wrong values. You pair structured outputs with cross-checks and range limits on the receiving side to catch semantically wrong handoffs.',
        },
        {
          kind: 'free',
          prompt: 'Describe one handoff in your company where two functions meet. Specify the structured interface (fields and types) and name one VALUE-level check the receiver should run that a schema alone would not catch.',
          rubric: 'Strong answer: (1) identifies a real producer/consumer pair of functions; (2) lists concrete fields with types (a genuine schema, not prose); (3) names a value-level check (range limit, cross-reference, enum-of-allowed-actions) distinct from mere type-checking; (4) shows understanding that structure contains malformed handoffs while value checks catch wrong ones.',
        },
      ],
      commitSummary: 'concept only — next you decide how to roll all of this out without a big-bang rewrite.',
    },

    // -----------------------------------------------------------------------
    {
      id: '202.4',
      module: 202,
      title: 'Start with one function, prove it, expand',
      estMinutes: 15,
      prerequisites: ['202.1', '202.2', '202.3'],
      artifactSlot: null,
      concept: `The failure mode of an ambitious founder is automating **everything at once**. You wire up six agentic functions, they hand off to each other, and when something goes wrong you cannot tell which service caused it — you've built an unobservable machine with six correlated failure modes and no baseline.

The disciplined path is the opposite: **pick one high-leverage function, make it reliable, then expand.** Concretely:

1. **Choose one function** where the automate-now case is strongest — high frequency, low cost-of-error, low ambiguity (usually front-line support triage, or a routine ops/finance pipeline).
2. **Prove it** against a real reliability bar you set in advance: a resolution or accuracy rate, an escalation rate, a cap on bad actions. Run it beside the human process first and compare.
3. **Only then expand** to the next function, reusing the contracts and guardrails you hardened on the first.

This sequencing gives you an **observable baseline**, a proof that your handoff and validation patterns actually work, and reusable machinery for function two. It also protects the company: one automated function with a human fallback has a bounded downside; six unproven ones do not. Leverage compounds — but only if each step is reliable before the next is built on top of it.`,
      reframe: {
        analogy: `This is the **strangler-fig pattern** — the standard way to modernize a system without a big-bang rewrite. You don't switch off the old monolith and flip on the new one overnight; you route *one* slice of traffic to the new implementation, prove it, then route the next slice, until the new system has gradually "strangled" the old one. Here the "monolith" is the all-human company: you migrate one function to an agent, prove it in production alongside the humans, then migrate the next.

The other half of the reframe is **incremental migration with a rollback path**. Each function you cut over keeps a human fallback (the old path) live until the new one has earned trust — the same reason you dark-launch and canary a service instead of shipping a rewrite and praying.`,
        breaks: `The strangler-fig assumes the old and new implementations produce **equivalent** results, so you can compare and cut over cleanly. With agents the new implementation is **non-deterministic**, so "prove it" means clearing a *statistical* bar (resolution rate, error rate over many cases), not a one-shot equivalence check — and the bar can regress as inputs drift. Migration order also isn't free: functions are **coupled** through their handoffs, so automating function two can change the input distribution function one was proven on. Re-validate the seam, don't assume a proven function stays proven once its upstream changes.`,
      },
      workedExample: `**Klarna** is again the honest illustration — this time of sequencing. It did not automate every function on day one; it went deep on **one high-frequency function, customer support**, where the automate-now case was strongest, and reported large volumes handled there (the ~700-agents-equivalent figure from lesson 202.1) before broadening its AI ambitions.

That is the strangler-fig shape: prove the highest-leverage function first. And the 2025 coda sharpens the *why*. When Klarna's leadership later acknowledged that over-automation had hurt support quality and reintroduced a human option, the damage was **contained to one function** with a fallback available — not spread across a fully-automated company with no human path left anywhere. Starting narrow is exactly what makes a reliability miss recoverable.

Two caveats to keep the lesson honest. First, these are largely **company-reported** figures, so treat the magnitudes as directional. Second, "prove it" only counts if the bar is set *before* you cut over and measured against the human baseline you're replacing — otherwise "it seems to work" quietly becomes the standard, which is how the tail cases that need a human get automated away.`,
      branch: {
        scenario: `You've decided to build your autonomous company. You have three functions you could automate: support triage, invoice reconciliation, and strategic partnerships. You have limited time. What sequencing best follows the strangler-fig discipline?`,
        choices: [
          {
            label: 'Automate all three at once so the company is fully autonomous from launch.',
            correct: false,
            consequence: `**The big-bang miss.** Three unproven agentic functions handing off to each other give you correlated failures and no observable baseline — when something breaks you can't localize it, and there's no human fallback anywhere. This is the rewrite-and-pray path the strangler-fig exists to avoid.`,
          },
          {
            label: 'Start with support triage (or invoice reconciliation): highest frequency and lowest cost-of-error. Prove it against a set bar, keep a human fallback, then expand.',
            correct: true,
            consequence: `**Correct.** You pick the strongest automate-now function, prove it in production beside the human process, harden the contracts and guardrails, and only then reuse that machinery on the next function. Bounded downside, observable baseline, reusable patterns — leverage that compounds because each step is reliable before the next.`,
          },
          {
            label: 'Start with strategic partnerships — it\'s the highest-value function, so automate it first.',
            correct: false,
            consequence: `**Instructive miss.** Partnerships are low-frequency, high-ambiguity, and high cost-of-error — the keep-human quadrant. Starting there means slow, unclear feedback and expensive mistakes, with no reliable baseline to learn from. High *value* is not the selection axis; high *leverage-and-provability* is.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'rank',
          prompt: 'Order the strangler-fig rollout of your first automated function, from FIRST to LAST.',
          items: [
            'Pick one high-leverage function with the strongest automate-now case',
            'Set a reliability bar in advance (accuracy, escalation rate, cap on bad actions)',
            'Run the agent in production beside the existing human process and compare',
            'Harden its contracts and guardrails until it clears the bar with a human fallback live',
            'Expand to the next function, reusing the proven patterns',
          ],
          explain: 'You choose the target, define what "proven" means before you start (so the bar can\'t drift), run it beside the human baseline, harden until it clears the bar, and only then migrate the next function. Reusing hardened contracts is why sequencing beats a big-bang: each step de-risks the next.',
        },
        {
          kind: 'numeric',
          prompt: 'Your support agent handles 3,000 tickets/month, auto-resolving 55% at your reliability bar. About how many tickets does it auto-resolve per month?',
          answer: 1650,
          unit: 'tickets',
          explain: '55% of 3,000 is 1,650 auto-resolved, leaving 1,350 to escalate. Proving this one function at a measured 55% gives you a concrete baseline and a bounded human workload — the observable footing you need before automating a second function.',
        },
      ],
      tutorHooks: [
        { label: 'Which function should I automate first?', kind: 'ask', question: 'Given my company, rank my functions by leverage-and-provability (frequency, cost-of-error, ambiguity) and tell me which single one to automate first and why.' },
        { label: 'Set my reliability bar', kind: 'ask', question: 'For the function I want to automate first, help me define a concrete reliability bar (metrics and thresholds) I should clear before I trust it and expand.' },
        { label: 'Harder: coupled functions and re-validation', kind: 'harder', concept: 'why automating a second function can invalidate the proof of the first, and how to re-validate a seam when its upstream changes' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'The strangler-fig approach to building an autonomous company means:',
          options: [
            'Automate every function at once for a fully autonomous launch',
            'Migrate one function at a time, proving each in production beside the human process before expanding',
            'Never automate anything until the whole system is designed perfectly',
            'Always automate the highest-value function first regardless of provability',
          ],
          answer: 1,
          explain: 'Incremental migration: prove one high-leverage function against a set bar with a human fallback, then reuse the hardened patterns on the next. It avoids the unobservable, correlated-failure trap of a big-bang rollout.',
        },
        {
          kind: 'mcq',
          prompt: 'You should pick your FIRST function to automate primarily by:',
          options: [
            'Which function is the most valuable to the company',
            'Which has the strongest automate-now case: high frequency, low cost-of-error, low ambiguity',
            'Which is the most technically impressive to build',
            'Which the founder personally dislikes doing',
          ],
          answer: 1,
          explain: 'Leverage-and-provability, not raw value, is the selection axis. A high-frequency, low-stakes, low-ambiguity function gives fast, clear feedback and a bounded downside, so you can prove your patterns before expanding.',
        },
        {
          kind: 'free',
          prompt: 'Name the ONE function you would automate first in your company and justify it on frequency, cost-of-error, and ambiguity. Then state the reliability bar you would require before expanding to a second function.',
          rubric: 'Strong answer: (1) picks a single function and justifies it as the strongest automate-now case on the three axes; (2) does not pick a high-ambiguity or catastrophic-error function as first; (3) states a concrete, measurable reliability bar (a rate or threshold) set before cutover; (4) shows the strangler-fig logic — prove one, keep a fallback, then expand — rather than big-bang automation.',
        },
      ],
      commitSummary: 'concept only — you leave with an org chart of agents, a matrix for what to automate, contracts for the seams, and a strangler-fig rollout plan.',
    },
  ],
}
