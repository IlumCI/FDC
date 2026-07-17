import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 203 — Agent operations & orchestration · Season 1 · BONUS
//
// Curated bonus for the AUTONOMOUS-CORPORATION path: a company whose day-to-day
// work is run by AI agents (NOT a crypto/DAO). This is the most technical
// module in Season 1 — it treats agents as production software with an
// operational loop: orchestration, tools/memory/context, human-in-the-loop, and
// evals. Engineering reframes throughout (state machine vs REPL loop, context
// window as a function's inputs, tools as syscalls, circuit breakers, tests/CI/
// observability). The running example is "Vega", a realistic AI-agent-run
// e-commerce operations company (support, refunds, vendor disputes), framed
// with honest limits — nondeterminism, miscalibrated confidence, silent
// failures — rather than hype. Slots in after module 4 on the autonomous route.
// ===========================================================================

export const module203: Module = {
  id: 203,
  season: 1,
  bonus: true,
  paths: ['autonomous'],
  insertAfter: 4,
  title: 'Agent operations & orchestration',
  goal: 'Run agents reliably in production: orchestration, tools, memory, human-in-the-loop, and evaluation — the operational loop that keeps an autonomous company working.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '203.1',
      module: 203,
      title: 'Orchestration: workflows vs autonomous loops',
      estMinutes: 15,
      prerequisites: [],
      artifactSlot: null,
      concept: `Orchestration is how you wire a model into a system that actually does work. There are two archetypes, and choosing between them is the first real decision in agent ops.

A **workflow** is a predetermined path. You, the engineer, fix the steps ahead of time and let the model fill specific slots: classify this ticket, then extract these fields, then call this tool, then draft a reply. Control flow lives in *your* code; the model is a component you call. Workflows are predictable, cheap, easy to test, and easy to debug — when something breaks you can point at the exact step.

An **autonomous loop** hands control flow to the *model*. You give it a goal, a set of tools, and let it decide what to do next, observe each result, and repeat until it judges the goal met. This is flexible — it handles cases you never enumerated. It is also riskier: nondeterministic, harder to test, more expensive (many model calls per task), and free to loop, wander, or take an action you did not anticipate.

The engineering question is never "which is better." It is *how much open-endedness does this task genuinely need?* Most production value comes from workflows with a model in a few slots. Reserve the autonomous loop for problems whose steps truly cannot be enumerated in advance — open research, triage of novel cases, multi-step debugging.

A working rule: **use the most constrained orchestration that still solves the task.** You can always widen the aperture later; you can rarely un-ship an incident. And these compose — a common shape is a workflow whose single hardest step is a *bounded* autonomous loop wrapped in guardrails.`,
      reframe: {
        analogy: `A workflow is a **state machine / DAG pipeline**: fixed nodes, edges you drew, deterministic transitions. You can enumerate every path, unit-test each node, and read a trace top to bottom. An autonomous loop is an **open REPL**: read a goal, evaluate (pick and run a tool), print the observation, loop — where the "programmer" typing at the prompt is the model itself, improvising the next line each turn. The DAG gives you predictability; the REPL gives you a general problem-solver you did not have to hand-wire.`,
        breaks: `The analogy flatters the loop. A real REPL runs deterministic code and halts when the program says so; this loop is driven by a **stochastic** operator that can hallucinate a tool that does not exist, call a real one with malformed arguments, or never decide it is done — there is no guaranteed halting, which is why step caps and spend caps are mandatory, not optional. And a DAG's nodes are fixed; an agent can effectively invent an edge you never drew, reaching a state your test set never covered. State also **accumulates in the context window** and degrades over long runs, so a loop that behaved at step 3 can misbehave at step 30 for reasons a clean state machine never has.`,
      },
      workedExample: `**Vega** is an AI-agent-run e-commerce operations company: agents handle support tickets, refunds, and vendor disputes end to end. Take one job — resolving a refund request — two ways.

**As a workflow:** ticket in, then \`classify\` (is this a refund request?), then \`extract\` (order id, reason), then \`check_policy(order)\`, then — if within policy and under the cap — \`issue_refund(amount)\`, then \`draft_reply\`. Five fixed nodes. Each is logged and independently testable. On Vega's standard refund tickets this resolves about **92%** of cases at roughly 1.2 model calls each, and every failure lands on a nameable node.

**As an autonomous loop:** give an agent the goal "resolve this ticket" plus tools (\`lookup_order\`, \`check_policy\`, \`issue_refund\`, \`escalate\`, \`reply\`) and let it choose. It gracefully handles the messy 8% the workflow chokes on — "wrong item *and* a reship, partial credit for the delay" — but averages ~6 model calls, occasionally over-refunds, and once looped re-checking policy until a step cap stopped it.

Vega's actual production design uses **both**: the workflow carries the routine 92%, and its \`escalate\`-adjacent branch drops the hard 8% into a bounded loop (tool allowlist, 8-step cap, spend cap, mandatory human approval over $200). Constrained by default; open only where the task demands it.`,
      branch: {
        scenario: `Vega wants to automate **vendor dispute resolution**: reading a supplier's email, checking the contract and shipment records, negotiating a partial credit over a few back-and-forth emails, and settling. It is multi-step, genuinely novel per case, and touches money and supplier relationships. How should you orchestrate it?`,
        choices: [
          {
            label: 'A fixed workflow — enumerate every dispute type as a branch and hard-code the path.',
            correct: false,
            consequence: `**Instructive miss.** Disputes are open-ended negotiations; you cannot enumerate the branches without a combinatorial mess that still misses the case that shows up tomorrow. Force-fitting a DAG here means constant re-coding and brittle dead-ends. This is exactly the task where a workflow's predictability turns into rigidity.`,
          },
          {
            label: 'A bounded autonomous loop: real tools, but a tool allowlist, step and spend caps, and a human approval gate on any settlement.',
            correct: true,
            consequence: `**Correct.** The task is genuinely open, so the model needs control flow — but "open" does not mean "unlimited." You widen the aperture *and* box it: only the tools the job needs, a hard step cap so it cannot loop forever, a spend cap so a bad turn cannot drain money, and a human sign-off before any credit is actually issued. Maximum needed flexibility, minimum blast radius.`,
          },
          {
            label: 'An unbounded autonomous loop — give it every tool and let it run until it settles, trusting the model to stop.',
            correct: false,
            consequence: `**Instructive miss.** This is the right *shape* with the safety removed. A stochastic operator with no step cap can loop; with no spend cap one bad decision moves real money; with every tool exposed the blast radius is the whole system. "Trust the model to stop" is precisely the assumption an autonomous loop violates — halting is not guaranteed.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Vega is deciding how to orchestrate each job. Sort each into the orchestration that fits best: a deterministic WORKFLOW, or a BOUNDED autonomous loop.',
          buckets: ['Deterministic workflow', 'Bounded autonomous loop'],
          items: [
            { text: 'Send the standard 3-email onboarding sequence to every new customer', bucket: 'Deterministic workflow' },
            { text: 'Classify an incoming ticket and route it to the right queue', bucket: 'Deterministic workflow' },
            { text: 'Nightly: pull yesterday\'s orders, compute totals, write the summary row', bucket: 'Deterministic workflow' },
            { text: 'Investigate a novel "my package shows delivered but is missing" case across carrier, order, and fraud signals', bucket: 'Bounded autonomous loop' },
            { text: 'Issue a refund that is clearly within the fixed policy and under the cap', bucket: 'Deterministic workflow' },
            { text: 'Negotiate a partial credit with a vendor over several back-and-forth emails', bucket: 'Bounded autonomous loop' },
          ],
          explain: 'Enumerable, repeatable steps with a known path belong in a workflow — predictable, cheap, testable (onboarding sequence, routing, the nightly rollup, an in-policy refund). Jobs whose steps cannot be listed in advance — novel investigation, open negotiation — need the model to own control flow, but always *bounded* (tool allowlist, step and spend caps, approval gates). The heuristic: reach for the most constrained option that still solves the task, and only widen when the task genuinely refuses to fit a fixed path.',
        },
      ],
      tutorHooks: [
        { label: 'Which of my jobs should be workflows?', kind: 'ask', question: 'Given the jobs my autonomous company needs to run, help me sort each into a deterministic workflow vs a bounded autonomous loop, and for each loop candidate list the specific guardrails (tool allowlist, step cap, spend cap, approval gate) I should set.' },
        { label: 'Harder: nested orchestration', kind: 'harder', concept: 'designing a workflow whose one hard step is a bounded autonomous loop, and where to place the guardrails between the two layers' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'The biggest operational reason to prefer a deterministic workflow over an autonomous loop when both could work is that the workflow is:',
          options: [
            'More intelligent than the model',
            'Predictable, cheaper, and testable — you can point at the exact step that failed',
            'Guaranteed to handle cases you never enumerated',
            'The only option that can call tools',
          ],
          answer: 1,
          explain: 'A workflow fixes control flow in your code, so it is predictable, uses fewer model calls, and is debuggable step by step. Handling un-enumerated cases is the *loop\'s* strength, not the workflow\'s; and both can call tools.',
        },
        {
          kind: 'mcq',
          prompt: 'You do decide a task needs an autonomous loop. Which set of guardrails is essential precisely because the loop is driven by a stochastic operator?',
          options: [
            'A prettier prompt and a faster model',
            'A tool allowlist, a step cap, a spend cap, and an approval gate on high-stakes actions',
            'Nothing — a good enough model will self-regulate',
            'More retries on every tool call',
          ],
          answer: 1,
          explain: 'A stochastic operator can loop, misfire tools, or take unsafe actions, and halting is not guaranteed. Bounding the tools it can touch, capping steps and spend, and gating irreversible actions on a human are what keep an open loop safe. "It will self-regulate" is the assumption the loop violates.',
        },
        {
          kind: 'free',
          prompt: 'Pick one job your autonomous company must do. Argue whether it should be a workflow or a bounded autonomous loop, and defend your choice using the "most constrained orchestration that still solves the task" rule. If you choose a loop, name your guardrails.',
          rubric: 'Strong answer: (1) names a concrete job; (2) correctly reasons about whether the steps are enumerable in advance (workflow) or genuinely open (loop); (3) explicitly applies the "most constrained that still works" principle rather than defaulting to full autonomy; (4) if a loop, names specific guardrails (tool allowlist, step cap, spend cap, approval gate); (5) acknowledges a real tradeoff (cost, testability, or blast radius).',
        },
      ],
      commitSummary: 'concept only — orchestration choices you will apply across the rest of this module.',
    },

    // -----------------------------------------------------------------------
    {
      id: '203.2',
      module: 203,
      title: 'Tools, memory & context',
      estMinutes: 17,
      prerequisites: ['203.1'],
      artifactSlot: null,
      concept: `Functionally, an agent is a **model called in a loop with a context window and a set of tools.** Everything it *knows* in the moment is whatever sits in that context window; everything it can *do* is whatever tools you expose. Two design surfaces therefore dominate reliability: what you put into the context, and what the tools let it touch.

**Context is the input.** The model has no memory between calls except what you place back in. Each turn you assemble: the system prompt (its role, policies, constraints), the current task state, retrieved knowledge (relevant docs, prior tickets), and the running transcript of tool calls and their results. Garbage in, garbage out is *literal* here — feed an agent stale, irrelevant, or contradictory context and it makes confident, wrong decisions. Retrieval (RAG) is how you fetch just the relevant slice instead of dumping everything; the skill is *precision*, not volume. Too much context hurts as much as too little — it dilutes attention, raises cost and latency, and buries the signal, a failure often called "context rot."

**Memory** splits in two. *Short-term* memory is the context window itself, wiped when the session ends. *Long-term* memory lives in external stores — a database, a vector index, a scratchpad file — that the agent reads and writes **through tools**. The agent does not "remember" a customer's history; it calls a tool that retrieves it.

**Tools are the agent's syscalls** — the only way it affects the world outside its own text. Design them like an API for a capable but very literal junior engineer: unambiguous names, tight input schemas, validated arguments, and error messages the model can actually act on. A vague tool ("do_stuff") or a silent failure produces exactly the confident nonsense you are trying to prevent.`,
      reframe: {
        analogy: `Think of one agent turn as a **function of its context window**: output = f(context). The context window is the argument list — system prompt, task state, retrieved docs, transcript — and the quality of the output is bounded by the quality of those inputs, exactly like a pure function can only be as good as what you pass it. **Tools are its syscalls**: the model's own text can compute and plan, but to read a database, move money, or send an email it must trap out to a tool, just as user-space code traps to the kernel to touch the disk or network. Long-term memory is the filesystem it reaches only through those syscalls.`,
        breaks: `f(context) is not a *pure* function: the same context can yield different outputs run to run (sampling is nondeterministic), so you cannot cache or reason about it as if inputs fully determine outputs. Syscalls to a real OS have precise contracts and a deterministic caller; here the "caller" is stochastic — it can invoke a syscall with malformed arguments, in the wrong order, or invent one that does not exist, which is why input validation and clear errors matter far more than in ordinary code. And unlike a function argument list, the context window is **finite** — there is a hard token budget — so "just pass more" eventually truncates or degrades. The abstraction locates the design surfaces; it does not promise determinism.`,
      },
      workedExample: `A Vega agent gets: "Where is my order? It's been two weeks." The naive instinct is to hand the model everything — the entire 50,000-ticket history and the full policy manual — and hope it finds what it needs. That blows the token budget, buries the signal, and costs a fortune per turn.

The disciplined assembly instead retrieves a **precise slice**:

- **System prompt** (role, tone, escalation policy): ~1,500 tokens
- **Tool schemas** (\`lookup_order\`, \`get_shipping_status\`, \`reply\`, \`escalate\`): ~2,000 tokens
- **Retrieved facts** — this customer's order and live carrier status, fetched by a tool, plus the *two* relevant shipping-policy snippets (not the whole manual): ~4,000 tokens
- **Transcript** — the last few messages of this conversation: ~3,500 tokens

That is ~11,000 tokens of *relevant* context. If Vega caps the working context at 16,000 tokens for latency, ~5,000 remain for the model's reasoning and reply. The order is retrieved through a tool (long-term memory), never assumed from memory the agent does not have. Result: a grounded answer — "carrier shows it stuck in transit since day 4; here's a reship" — instead of a fluent guess assembled from an over-stuffed, half-relevant window.`,
      branch: {
        scenario: `Vega's refund agent is *intermittently* refunding the **wrong amount** — usually right, occasionally issuing a refund that matches a *different* order the customer placed months ago. The model, tools, and prompt have not changed. Where do you look first?`,
        choices: [
          {
            label: 'It is the model being unreliable — swap to a bigger/newer model.',
            correct: false,
            consequence: `**Instructive miss.** Reaching for the model first skips the far more likely cause. A swap is expensive, slow, and here it treats a *data* bug as a *reasoning* bug — the new model, fed the same ambiguous context, will make the same confident mistake. Diagnose the inputs before you replace the engine.`,
          },
          {
            label: 'Inspect what is actually in the context: the order-retrieval tool is loosely scoped and returns ALL of the customer\'s orders, so the agent sometimes grounds on the wrong one.',
            correct: true,
            consequence: `**Correct.** This is garbage-in, garbage-out. The retrieval returns multiple orders with no clear "which one this ticket is about," so the agent occasionally picks the wrong total — confidently. The fix is on the *context* surface: scope the tool to the specific order referenced, or pass a single disambiguated record. Same model, same prompt, correct inputs — problem gone.`,
          },
          {
            label: 'Add several more worked examples to the system prompt so it "learns" the right amount.',
            correct: false,
            consequence: `**Instructive miss.** Examples cannot fix a context that contains the *wrong data* — if the window holds two order totals with no way to tell them apart, more examples just make the wrong choice more fluently. You would also be spending token budget to paper over a retrieval scoping bug. Fix the input, not the framing around it.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'rank',
          prompt: 'Vega\'s context assembler is over its token budget and returning noisy answers. Rank these fixes from HIGHEST leverage (do first) to lowest, for making the agent both cheaper and more accurate.',
          items: [
            'Scope retrieval to the exact order/policy this ticket needs, instead of dumping the whole knowledge base',
            'Remove stale or contradictory documents from what gets retrieved',
            'Trim the running transcript to the messages that still matter this turn',
            'Tighten tool schemas and descriptions so calls are unambiguous',
            'Buy a model with a larger context window so you can pass more',
          ],
          explain: 'Precision beats volume, so the top move is scoping retrieval to exactly what the task needs — it cuts cost and noise at once. Next, purge stale/contradictory context (GIGO: contradictory docs actively mislead). Then trim the transcript so old turns stop crowding the window. Tightening tool schemas reduces malformed calls, a real but narrower win. A bigger context window is *last*: it lets you pass more of the same noise, treating the symptom (running out of room) rather than the cause (passing irrelevant context). "Just make the window bigger" is the trap — more room for garbage is still garbage.',
        },
        {
          kind: 'numeric',
          prompt: 'A Vega agent turn assembles: system prompt 1,500 tokens, tool schemas 2,000, retrieved docs 4,000, and transcript 3,500. Vega caps the working context at 16,000 tokens for latency. How many tokens remain for the model\'s reasoning and reply?',
          answer: 5000,
          unit: 'tokens',
          explain: 'Used = 1,500 + 2,000 + 4,000 + 3,500 = 11,000 tokens. Remaining = 16,000 − 11,000 = 5,000 tokens. This is why precision in retrieval matters: every extra irrelevant document you stuff in eats directly into the budget the model has left to actually think and respond — and once you hit the cap, something gets truncated whether you chose it or not.',
        },
      ],
      tutorHooks: [
        { label: 'Design my context window', kind: 'ask', question: 'For one of my agent\'s jobs, help me lay out exactly what should go in the context window each turn — system prompt, task state, what to retrieve vs skip, and how much transcript to keep — and flag where I risk GIGO or context rot.' },
        { label: 'Critique my tool definitions', kind: 'critique' },
        { label: 'Harder: memory architecture', kind: 'harder', concept: 'designing short-term vs long-term memory for an agent — what lives in the window, what lives in a retrieval store, and the tools that bridge them' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Treating an agent turn as output = f(context), the single most reliable way to improve output quality is usually to:',
          options: [
            'Raise the temperature so the model is more creative',
            'Improve the context — retrieve the precise relevant facts and remove stale/contradictory ones',
            'Always pass the maximum amount of context the window allows',
            'Remove the tools so the model reasons unaided',
          ],
          answer: 1,
          explain: 'Output is bounded by the inputs. Precise, clean context is the highest-leverage lever — garbage in, garbage out is literal. Passing the *maximum* context causes dilution and context rot; removing tools removes the agent\'s only way to act on the world.',
        },
        {
          kind: 'mcq',
          prompt: 'In the "tools are syscalls" framing, why does input validation matter MORE for agent tools than for a normal function call in your codebase?',
          options: [
            'Because tools are slower than functions',
            'Because the caller is stochastic — it can pass malformed arguments, call in the wrong order, or invent a tool that does not exist',
            'Because tools cannot return errors',
            'Because the model has unlimited context',
          ],
          answer: 1,
          explain: 'Ordinary code has a deterministic caller with a known contract. An agent is a stochastic caller: it may hand a tool bad arguments or hallucinate a call, so tight schemas, validation, and actionable error messages are what keep those "syscalls" safe.',
        },
        {
          kind: 'free',
          prompt: 'One of your agent\'s tools sometimes gets called with bad or ambiguous arguments. Describe how you would redesign the tool (name, schema, validation, error message) so the stochastic caller is far more likely to use it correctly — and how you would confirm the fix.',
          rubric: 'Strong answer: (1) treats the tool like an API for a literal junior — unambiguous name, tight typed schema, required fields; (2) adds input validation that rejects bad calls rather than silently proceeding; (3) returns an error message the model can act on (says what was wrong and what to do); (4) connects the fix to reliability (fewer confident-wrong actions); (5) mentions verifying via the eval/monitoring loop rather than by vibe.',
        },
      ],
      commitSummary: 'concept only — context and tool design principles you carry into escalation and evals.',
    },

    // -----------------------------------------------------------------------
    {
      id: '203.3',
      module: 203,
      title: 'Human-in-the-loop & escalation',
      estMinutes: 16,
      prerequisites: ['203.1', '203.2'],
      artifactSlot: null,
      concept: `Autonomy is not all-or-nothing; it is a **dial you set per action** by stakes and confidence. The discipline: let the agent act freely inside a safe envelope, and **escalate to a human** the moment it leaves that envelope — low confidence, high blast radius, or an explicit policy trigger.

Three mechanisms do the work:

- **Approval gates.** Some actions require human sign-off *before* they execute, regardless of confidence — a refund over $500, a legal notice, deleting data, spending above a threshold. The agent prepares the action and waits. Irreversible, high-stakes operations belong here.
- **Confidence thresholds.** The agent (or a cheap secondary classifier) estimates how sure it is; below a threshold it routes to a human instead of acting. Calibration is the catch — a model's raw "I'm 95% sure" is often over-optimistic, so you tune thresholds against *measured* outcomes, not the model's self-report.
- **Escalation policies.** When the agent is stuck, looping, hitting repeated tool errors, or facing a case outside its playbook, it hands off *with context attached* so the human starts warm, not cold.

The economics matter: human review has cost and latency, so you cannot escalate everything or you have just rebuilt a manual process at agent prices. The goal is to escalate the *right* cases — set thresholds so review effort lands on genuinely ambiguous or high-stakes items while the agent clears the routine mass. Track two opposing error rates: cases it *should* have escalated but did not (dangerous), and cases it escalated *needlessly* (expensive). Tuning the dial is choosing where to sit between them.`,
      reframe: {
        analogy: `Escalation is **exception handling with a person as the \`catch\` block**, wrapped in a **circuit breaker**. Confidence thresholds are the guard condition — when the estimate drops below the bar, you stop trying to handle it in-agent and throw. Approval gates are a mandatory checkpoint the control flow *must* pass through for high-stakes actions, like a hard assertion before an irreversible write. And when the agent hits repeated tool errors or loops, the breaker **trips**: it stops hammering the failing path and sheds that load to a fallback — the human — instead of failing over and over. Same instinct you already have for a flaky downstream dependency, pointed at the agent's own uncertainty.`,
        breaks: `A real circuit breaker trips on a **measurable** signal — error rate, latency, timeouts. Agent "confidence" is a fuzzy, frequently **miscalibrated** self-estimate, so the trip signal itself can be wrong: an overconfident agent will fail to escalate exactly the cases it is most wrong about, which is the opposite of what you want. And code exceptions are loud — they throw — whereas an agent's worst failures are often **silent**: a fluent, plausible, wrong answer that never raises anything to catch. So in-loop self-reports are necessary but not sufficient; you also need out-of-band monitoring (next lesson) to catch the failures that never announce themselves.`,
      },
      workedExample: `Vega's refund agent runs a tiered escalation policy:

- **Auto-approve** refunds **≤ $50** that clearly match policy — the agent issues them and replies.
- **$50–$500**: the agent attaches a written rationale and a human ops reviewer approves asynchronously (usually within the hour).
- **Over $500, or any ticket containing "chargeback" / "legal" / "attorney"**: **hard escalation** — the agent does nothing but package full context and route to a person immediately.
- **Confidence override:** if the policy-match classifier scores below **0.8**, route to a human *even under $50*. A cheap wrong refund at scale is still a leak.

Over a representative week: **78%** of refund tickets auto-resolve, **18%** go through async human approval, **4%** hard-escalate. The number Vega watches most is not any of those — it is the **missed-escalation rate**: cases the agent auto-approved that a human later judged should have been stopped. That week it was 0.6%, mostly low-confidence approvals that slipped just over the 0.8 line. Vega treats every one as a signal to re-tune the threshold, not as a one-off to shrug off — because the silent, confident wrong approval is the failure the whole policy exists to catch.`,
      branch: {
        scenario: `Vega's agent auto-approved a **$480** refund that turned out to be **fraud** — a customer exploiting a "damaged item, keep it" path with fabricated photos, across several small orders. The refund was within the dollar tier and the classifier scored 0.86, over the 0.8 bar. What is the right fix?`,
        choices: [
          {
            label: 'Set the auto-approve cap to $0 — every refund now needs a human. No more misses.',
            correct: false,
            consequence: `**Instructive miss.** This trades one error rate entirely for the other. You have eliminated missed escalations by escalating *everything* — which rebuilds the manual process the agent existed to replace, at full human cost and latency. The 96% of legitimate, routine refunds now all wait on a person. You do not fix a threshold by deleting the autonomy.`,
          },
          {
            label: 'Add a fraud-signal check to the escalation policy: when signals fire (repeat "keep it" claims, mismatched photos, velocity across orders), require human approval regardless of amount or confidence.',
            correct: true,
            consequence: `**Correct.** The gap was not the dollar tier or the confidence score — it was a *missing trigger*. Fraud is a specific high-stakes signal that should route to a human even when the amount is small and the model feels sure (it felt sure here — 0.86 — and was wrong, exactly the miscalibration risk). You add the trigger, keep the routine flow fast, and feed this case into your eval set so the fix is measured, not hoped.`,
          },
          {
            label: 'Add a line to the prompt: "Never approve fraudulent refunds." Ship it.',
            correct: false,
            consequence: `**Instructive miss.** A stern instruction cannot detect fraud the agent could not already see — it had no fraud signal in context, so telling it "don't approve fraud" changes nothing about *this* failure. Worse, it creates the illusion of a fix with no measurable trigger and no gate. Detection plus an approval gate is a control; a prompt sentence is a wish.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'scenario',
          title: 'Tuning the escalation dial',
          intro: 'You own Vega\'s human-in-the-loop policy. For each situation, choose the response that best balances the two error rates — missed escalations (dangerous) against needless escalations (expensive) — using approval gates, confidence thresholds, and escalation triggers.',
          decisions: [
            {
              situation: 'A refund of $30 clearly within policy; the policy-match classifier scores 0.94. What should the agent do?',
              options: [
                { label: 'Auto-approve and reply', correct: true, outcome: 'Right. Low stakes, high confidence, clean policy match — this is exactly the routine mass the agent should clear on its own. Escalating it would be needless cost and latency.' },
                { label: 'Route to a human to be safe', correct: false, outcome: 'Over-cautious. Escalating high-confidence, low-stakes, in-policy cases just rebuilds a manual queue and burns review budget. Save human attention for genuinely ambiguous or high-stakes items.' },
              ],
            },
            {
              situation: 'A refund of $40 that is in-policy, but the confidence classifier scores only 0.62 — the agent is unsure it read the situation right.',
              options: [
                { label: 'Auto-approve; it is under the $50 cap', correct: false, outcome: 'Miss. The dollar cap is not the only guard. A below-threshold confidence score is a signal to route to a human even under the cap — a cheap wrong action repeated at scale is still a real leak, and the model\'s low confidence is telling you something.' },
                { label: 'Route to a human via the confidence override', correct: true, outcome: 'Right. The confidence threshold exists precisely for this: low confidence overrides the auto-approve tier. A quick human check on the genuinely uncertain cases is where review effort earns its cost.' },
              ],
            },
            {
              situation: 'A refund of $220 that is in-policy and the classifier scores a confident 0.97.',
              options: [
                { label: 'Auto-approve — high confidence clears it', correct: false, outcome: 'Miss. Confidence is not the only axis; stakes matter independently. This amount sits in the approval tier, and $220 is enough blast radius to warrant a human sign-off regardless of how sure the model is — especially since that confidence can be miscalibrated.' },
                { label: 'Attach a rationale and send for async human approval', correct: true, outcome: 'Right. Above the auto-approve amount, an approval gate applies by stakes, not confidence. The agent does the legwork (rationale, context) so the human decision is fast, but the irreversible spend waits for a person.' },
              ],
            },
            {
              situation: 'A ticket where the agent has hit the same tool error four times in a row and is making no progress.',
              options: [
                { label: 'Keep retrying — it may resolve itself', correct: false, outcome: 'Miss. Repeated identical failures are the classic circuit-breaker condition. Hammering the failing path wastes calls and money and delays the customer; the signal says stop trying in-agent.' },
                { label: 'Trip the breaker: escalate to a human with the full error context attached', correct: true, outcome: 'Right. Repeated tool errors are a measurable trip signal. Shed the load to a human and hand over the context so they start warm — exactly the escalation-policy case, distinct from a confidence or stakes trigger.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Design my escalation policy', kind: 'ask', question: 'Help me draft a human-in-the-loop policy for my agent: which actions need approval gates, where to set confidence thresholds, and what triggers a hard escalation. Point out where I am at risk of missed escalations vs needless ones.' },
        { label: 'Harder: calibrating confidence', kind: 'harder', concept: 'why raw model confidence is often miscalibrated, and how to set escalation thresholds against measured outcomes instead of the model\'s self-report' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'The two error rates you tune a human-in-the-loop policy between are:',
          options: [
            'Model latency and tool latency',
            'Cases it should have escalated but did not (dangerous) vs cases it escalated needlessly (expensive)',
            'Training loss and validation loss',
            'True positives and true negatives on the fraud classifier only',
          ],
          answer: 1,
          explain: 'Escalation is a tradeoff between missed escalations (a person needed to intervene and did not — dangerous) and needless escalations (a human reviewed something the agent could have handled — expensive). Tuning thresholds and triggers is choosing where to sit between them.',
        },
        {
          kind: 'mcq',
          prompt: 'Why is high model confidence NOT sufficient on its own to auto-approve a high-dollar, irreversible action?',
          options: [
            'Because confidence scores are always exactly 0.5',
            'Because model confidence is often miscalibrated, and stakes are a separate axis — high blast radius warrants an approval gate regardless of confidence',
            'Because the model cannot output a confidence score at all',
            'Because approval gates make the agent slower, which is always bad',
          ],
          answer: 1,
          explain: 'Confidence and stakes are independent axes. A raw confidence estimate can be over-optimistic (miscalibrated), so an irreversible, high-value action should pass through an approval gate on stakes alone — the agent can be confident and wrong.',
        },
        {
          kind: 'free',
          prompt: 'For your autonomous company, name one action that must sit behind an approval gate (by stakes), one that should trigger a confidence-threshold escalation, and one that should trip an escalation on repeated failure. Explain what would go wrong if each ran fully autonomously.',
          rubric: 'Strong answer: (1) gives a genuinely high-stakes/irreversible action for the approval gate and explains the blast radius; (2) gives an ambiguous/low-confidence case for the threshold and notes miscalibration risk; (3) gives a repeated-error/loop case for the breaker-style escalation; (4) for each, states the concrete failure of full autonomy; (5) shows awareness of the missed-vs-needless escalation tradeoff rather than escalating everything.',
        },
      ],
      commitSummary: 'concept only — escalation design that your evals and monitoring will hold accountable.',
    },

    // -----------------------------------------------------------------------
    {
      id: '203.4',
      module: 203,
      title: 'Evals: how you know it works',
      estMinutes: 18,
      prerequisites: ['203.1', '203.2', '203.3'],
      artifactSlot: null,
      concept: `You cannot ship agents you cannot measure. A non-deterministic system that touches money and customers deserves the same rigor as any production software — adapted for the fact that the *same input can yield different outputs*.

An **eval set** is your test suite: a collection of representative and adversarial cases, each with a way to judge the outcome. Draw them from three wells — real historical tickets labeled with the right action, hand-written edge cases, and **every past incident turned into a regression test**. Judging is harder than asserting equality, because outputs vary. Use exact checks where you can (did it call the refund tool with the right amount? did it stay within policy?) and graded checks where you cannot (an LLM-as-judge or a rubric scoring reply quality). You read a **pass rate** over the set, not a single pass/fail.

Three layers mirror ordinary engineering:

- **Offline evals = the test suite.** Run the whole set on every prompt change, model swap, or tool edit. A model that improves on general benchmarks can *regress your specific task* — you only find out because the eval catches it.
- **CI gate.** Wire evals into the deploy pipeline: block the release if the pass rate drops below a bar or any critical case regresses. This is what lets you change prompts without fear.
- **Production monitoring = observability.** Offline sets never cover the live distribution. Log every agent trajectory, sample and grade them, watch for drift, and alert on spikes in escalation rate, tool errors, or cost per resolution. Incidents flow back into the eval set.

The trap is shipping on **vibes** — a demo that "feels good." Feelings do not catch the 3% of cases that quietly refund the wrong customer. Measurement does.`,
      reframe: {
        analogy: `Evals are your **test suite, CI gate, and observability stack** for a stochastic system. The offline eval set is unit + integration tests; the deploy-blocking pass-rate bar is the CI gate that stops a red build from shipping; production trajectory logging with sampled grading and alerts on escalation/error/cost spikes is your metrics-and-tracing layer. Every incident becoming a new eval case is the same reflex as writing a regression test for every bug — you never want to be surprised by the same failure twice.`,
        breaks: `A unit test is deterministic and binary — same input, same result, green or red. An eval case can **pass on one run and fail the next**, so you run it N times and read a *rate*: green no longer means "correct," it means "passes at rate p," and you set bars accordingly. Coverage is **unbounded** — you cannot enumerate every natural-language input — so an eval set is always a *sample*, forever incomplete, which is exactly why production monitoring exists to catch the live distribution the sample missed. And your grader may itself be a model: an LLM-as-judge is a **fallible measuring instrument** with its own error, so treat eval numbers as evidence with error bars, not proof. The tooling looks like CI; the epistemics are statistics, not assertions.`,
      },
      workedExample: `Vega maintains a **250-case** eval set for the refund agent: 180 real labeled tickets, 40 hand-written edge cases (partial refunds, currency mismatches, "keep it" claims), and 30 regression cases mined from past incidents. Baseline pass rate: **92%** (230 pass, 20 fail) — checked with exact assertions on the tool call and amount plus an LLM-judge on reply quality.

A newer, **cheaper** model appears; general benchmarks are higher, and the team is tempted to swap on the spot. Instead they run the eval set first. Pass rate **drops to 84%** (210 pass) — the new model misreads Vega's partial-refund policy on exactly the edge cases the benchmarks never tested. The **CI gate** (bar: 90%, and zero critical-case regressions) blocks the deploy automatically. No incident reaches a customer.

The team mines the 40 new failures, adds 12 sharpened partial-refund cases to the set, rewrites the ambiguous policy line in the system prompt, and re-runs: **93%**. Now it ships. Two weeks later **production monitoring** shows the escalation rate creeping from 4% to 9% — a newly launched product line is generating ticket shapes the eval set never covered. Those live cases become new eval cases, the prompt is patched, and the loop closes. The eval set is not a document you write once; it is a living instrument that grows every time reality surprises you.`,
      branch: {
        scenario: `A major model upgrade is available — clearly stronger on public benchmarks and slightly cheaper. Your agent handles Vega's refunds and vendor disputes in production. What is the responsible way to adopt it?`,
        choices: [
          {
            label: 'Ship it now — it beats the current model on every published benchmark, so it must be better for us.',
            correct: false,
            consequence: `**Instructive miss.** General benchmarks measure general capability, not *your* task. A stronger model routinely regresses on a specific policy, tool schema, or edge case the benchmarks never touched — and you would ship that regression straight to customers and their money. "Better on benchmarks" is a hypothesis your eval set exists to test, not a conclusion.`,
          },
          {
            label: 'Run the full eval set against the new model first; gate the swap on the pass rate clearing your bar with no critical-case regressions.',
            correct: true,
            consequence: `**Correct.** This is exactly the CI gate. You measure the new model on your task-specific set — exact checks plus graded ones — read the pass rate over many cases, and only promote it if it clears the bar and regresses no critical case. If it drops (as Vega's did, 92% to 84%), the gate catches it before a customer does, and the failures become new eval cases. Adoption becomes a measured decision, not a leap of faith.`,
          },
          {
            label: 'Eyeball it: run five real tickets through the new model by hand, and if they look good, ship.',
            correct: false,
            consequence: `**Instructive miss.** Five hand-checked cases is a sample far too small to detect a regression that hits, say, 8% of traffic — you would very likely see five passes and ship the problem anyway. And with a stochastic system a single good run per case does not even establish a pass *rate*. This is shipping on vibes with a thin coat of diligence.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Vega runs its 250-case eval set. The current model passes 92%. A candidate model passes 84%. How many MORE cases fail under the candidate than under the current model?',
          answer: 20,
          unit: 'cases',
          explain: 'Current failures: 8% of 250 = 20. Candidate failures: 16% of 250 = 40. Additional failures = 40 − 20 = 20 cases. Those 20 regressions are invisible on general benchmarks (where the candidate looks better) and only surface because the task-specific eval set catches them — which is exactly why the CI gate blocks the swap. Every one of those 20 is a customer interaction that would have gone wrong in production.',
        },
      ],
      tutorHooks: [
        { label: 'Build my first eval set', kind: 'ask', question: 'Help me design a starter eval set for my agent: where to source cases (real logs, edge cases, past incidents), which outcomes to check exactly vs grade with an LLM-judge, what pass-rate bar to gate deploys on, and which production metrics to monitor.' },
        { label: 'Harder: LLM-as-judge reliability', kind: 'harder', concept: 'the failure modes of LLM-as-judge grading and how to validate your grader against human labels so your measuring instrument is trustworthy' },
        { label: 'Critique my eval plan', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A model upgrade improves general public benchmarks but, run against your task-specific eval set, the pass rate drops from 92% to 84%. The correct read is:',
          options: [
            'The eval set is wrong — benchmarks are the ground truth, so ship the upgrade',
            'The upgrade regresses on your specific task; the CI gate should block it until fixed',
            'Pass rate is meaningless for non-deterministic systems',
            'You should delete the failing cases so the pass rate goes back up',
          ],
          answer: 1,
          explain: 'General benchmarks do not measure your task. A drop on your own eval set is a real regression on the cases you care about; gating the deploy on the pass rate is the whole point. Deleting failing cases would hide the regression — the opposite of measuring.',
        },
        {
          kind: 'mcq',
          prompt: 'Why do you still need production monitoring even when your offline eval set passes at a high rate?',
          options: [
            'Because offline evals are always deterministic and never fail',
            'Because the eval set is a finite sample and cannot cover the live input distribution, which drifts over time',
            'Because monitoring replaces the need for an eval set entirely',
            'Because the model stops working after deployment',
          ],
          answer: 1,
          explain: 'An eval set is a sample of an unbounded input space, and the live distribution drifts (new product lines, new customer behavior). Monitoring catches what the sample missed and feeds fresh failures back into the eval set — the two layers complement each other.',
        },
        {
          kind: 'free',
          prompt: 'Describe the first eval set you would build for your agent: three concrete case sources, one outcome you would check exactly vs one you would grade with an LLM-judge, the pass-rate bar you would gate deploys on, and one production metric you would alert on. Note one reason your grader could itself be wrong.',
          rubric: 'Strong answer: (1) names three real sources (e.g. historical logs, hand-written edge cases, past incidents as regressions); (2) distinguishes an exact check (tool call/amount/policy compliance) from a graded check (reply quality via rubric/LLM-judge); (3) sets a concrete deploy-gate bar and mentions critical-case regressions; (4) names a live metric to monitor (escalation rate, tool-error rate, cost per resolution); (5) acknowledges the grader is fallible (LLM-judge error, sample incompleteness, or run-to-run variance) — evidence, not proof.',
        },
      ],
      commitSummary: 'concept only — the measurement loop (evals, CI gate, monitoring) that keeps every earlier lesson honest in production.',
    },
  ],
}
