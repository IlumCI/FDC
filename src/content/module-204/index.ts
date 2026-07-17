import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 204 — BONUS (autonomous path): Unit economics of an agent workforce
//
// The agent-workforce analog of Module 5. When "labor" is compute, the cost
// structure inverts: near-zero marginal cost, but a reliability tax and a
// shared-resource ceiling replace headcount as the binding constraint. Mirrors
// M5's numeric rigor — every lesson carries a formula and an arithmetic worked
// example — but persists nothing (all lessons artifactSlot: null). Slots into
// the autonomous route after Module 5.
//
// CAVEAT threaded through every example: model/compute prices move fast; the
// numbers here are illustrative of the METHOD, not a current price sheet.
// ===========================================================================

export const module204: Module = {
  id: 204,
  season: 1,
  bonus: true,
  paths: ['autonomous'],
  insertAfter: 5,
  title: 'Unit economics of an agent workforce',
  goal: "When your 'labor' is compute, the cost structure inverts. Model cost-per-task, gross margin, and the strange scaling economics of a company whose workers are agents.",
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '204.1',
      module: 204,
      title: 'Cost per task = compute, not salary',
      estMinutes: 15,
      prerequisites: [],
      artifactSlot: null,
      concept: `In a human company, the marginal cost of one more task is a slice of someone's **salary** — a large, sticky, roughly fixed number. In an agent company it is **compute**: input tokens, output tokens, and tool calls, metered per task and often measured in **cents**.

The raw cost of a single agent task:

$$\\text{cost}_{\\text{task}} = (t_{\\text{in}} \\times p_{\\text{in}}) + (t_{\\text{out}} \\times p_{\\text{out}}) + \\text{tool costs}$$

where $t_{\\text{in}}, t_{\\text{out}}$ are tokens (usually priced **per million**) and tool costs are external API calls, code execution, or retrieval the agent triggers. Multi-step agents pay this on **every** step, so a task that loops ten times pays roughly ten times the single-call cost.

The mental inversion: human labor cost is **dominated by fixed salary and barely moves with volume**; agent labor cost is **almost purely variable and collapses toward zero per task**. That flips which lever matters. For humans you optimize *throughput per person*; for agents you optimize *tokens per task* and *steps per task*, because those are the only things you actually pay for.

One caveat to internalize now and for the rest of this module: **model and compute prices change fast** — often falling several-fold in a year. Treat every number here as illustrating the arithmetic, not quoting a price.`,
      reframe: {
        analogy: `Think **cost per request** on a metered API. You do not pay a "developer" to serve each HTTP request; you pay for the CPU-milliseconds and bandwidth that request consumed. An agent task is the same metered request — the meter reads tokens and tool calls instead of CPU-ms. Your unit cost is a usage integral, not a headcount line.`,
        breaks: `A plain API request is roughly constant-cost; an agent task is **variable-length**. It decides how many steps to take, so the "request" can cost 3x what you estimated when it goes down a reasoning rabbit hole. And unlike a stateless request, agent output quality is **stochastic** — you sometimes pay full price for a wrong answer, a cost a normal API request never imposes. That gap is lesson 204.3's whole subject.`,
      },
      workedExample: `A support-triage agent classifies a ticket and drafts a reply. Per task it consumes roughly:

- Input: **8,000 tokens** (system prompt + ticket + retrieved docs)
- Output: **700 tokens** (the draft reply)
- One retrieval tool call: **$0.001**

Assume illustrative prices of $3 per million input tokens and $15 per million output tokens.

Input cost: $\\frac{8{,}000}{1{,}000{,}000} \\times 3 = \\$0.024$

Output cost: $\\frac{700}{1{,}000{,}000} \\times 15 = \\$0.0105$

Tool: $0.001.

$$\\text{cost}_{\\text{task}} \\approx 0.024 + 0.0105 + 0.001 = \\mathbf{\\$0.0355}$$

About **3.6 cents** per ticket. A human agent handling ~15 tickets/hour at a fully-loaded $30/hour costs **$2.00 per ticket** — roughly **56x** more. That gap is the entire thesis of the agent-company. Caveat: at those illustrative prices; a cheaper model or a shorter prompt can move the 3.6 cents by an order of magnitude, which is exactly the lever you tune.`,
      branch: {
        scenario: `Your agent task currently costs about 3.6 cents, dominated by the **8,000 input tokens** — most of which is a large static system prompt and a fixed doc bundle re-sent on every call. You have engineering time for exactly one optimization this week. Which cuts cost-per-task the most?`,
        choices: [
          {
            label: 'Switch to a model with cheaper output tokens.',
            correct: false,
            consequence: `**Instructive miss.** Output is only $0.0105 of your $0.0355 — under a third of the bill. Even halving output price saves ~$0.005/task. You optimized the smaller term. Always attack the dominant line first; here that is input.`,
          },
          {
            label: 'Cache or trim the static input (prompt caching / retrieve fewer docs) so you stop re-paying for 8,000 tokens every call.',
            correct: true,
            consequence: `**Correct.** Input is $0.024 — two-thirds of the cost — and most of it is the same bytes every call. Prompt caching (or trimming the doc bundle) can cut the repeated input cost by 5-10x, taking the task from ~3.6 cents toward ~1.5 cents. You attacked the dominant term, which is where cost-per-task optimization always starts.`,
          },
          {
            label: 'Nothing — 3.6 cents is already trivially cheap versus the human.',
            correct: false,
            consequence: `**Tempting but wrong at scale.** 3.6 cents feels like a rounding error until you run 2 million tasks/month: that is $72,000 vs ~$30,000 after caching. At volume, the per-task cost IS your cost structure. Complacency here is how an agent company quietly loses its margin.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'An agent task uses 12,000 input tokens at $3/million and 1,000 output tokens at $15/million, plus $0.002 in tool calls. What is the cost per task, in dollars?',
          answer: 0.053,
          tolerance: 0.002,
          unit: '$',
          explain: 'Input: (12,000/1,000,000) x 3 = $0.036. Output: (1,000/1,000,000) x 15 = $0.015. Tool: $0.002. Total = 0.036 + 0.015 + 0.002 = $0.053.',
        },
        {
          kind: 'numeric',
          prompt: 'If that same task costs $0.053 and a human doing it costs $1.85, roughly how many times cheaper is the agent? (give the multiple)',
          answer: 35,
          tolerance: 3,
          unit: 'x',
          explain: '1.85 / 0.053 = ~34.9x cheaper. The order-of-magnitude gap — not the exact figure — is the point, and it survives even large price swings.',
        },
        {
          kind: 'categorize',
          prompt: 'Sort each cost driver by whether it scales with the number of tasks (variable) or not (fixed).',
          buckets: ['Variable (per task)', 'Fixed (per month)'],
          items: [
            { text: 'Output tokens generated per task', bucket: 'Variable (per task)' },
            { text: 'Tool/API calls the agent triggers', bucket: 'Variable (per task)' },
            { text: 'Input tokens per task', bucket: 'Variable (per task)' },
            { text: 'Monthly platform / observability subscription', bucket: 'Fixed (per month)' },
            { text: "Engineer's salary maintaining the agent", bucket: 'Fixed (per month)' },
          ],
          explain: 'Tokens and tool calls meter per task (variable); the humans and platforms you keep on retainer are fixed. The inversion vs a human company: the variable bucket is now tiny and the fixed bucket dominates.',
        },
      ],
      tutorHooks: [
        { label: 'Estimate cost-per-task for MY agent', kind: 'ask', question: 'Given my agent workflow (describe the steps, prompt size, and tools), estimate its cost per task from tokens and tool calls, and flag the single largest cost driver.' },
        { label: 'Harder: multi-step agent cost', kind: 'harder', concept: 'cost per task for a looping multi-step agent that pays token cost on every step' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'For a single-shot agent task, which term is usually LARGEST when there is a big static system prompt plus retrieved context?',
          options: ['Output token cost', 'Input token cost', 'Tool-call cost', 'They are always equal'],
          answer: 1,
          explain: 'A large re-sent system prompt plus retrieved docs makes input tokens dominant. That is why prompt caching and context trimming are the first cost levers, not output-model swaps.',
        },
        {
          kind: 'free',
          prompt: 'Describe one task an agent would do in YOUR company. Estimate its input tokens, output tokens, and any tool calls, and compute a rough cost per task. Then compare to what a human would cost for the same task.',
          rubric: 'Strong answer: (1) names a concrete task; (2) gives plausible token counts and at least one tool cost; (3) computes cost = (t_in x p_in) + (t_out x p_out) + tools with correct per-million arithmetic; (4) contrasts against a fully-loaded human cost and states the rough multiple; (5) acknowledges prices are illustrative / change fast.',
        },
      ],
      commitSummary: 'concept only — you build the margin picture on top of this in 204.2.',
    },

    // -----------------------------------------------------------------------
    {
      id: '204.2',
      module: 204,
      title: 'Gross margin when labor is compute',
      estMinutes: 16,
      prerequisites: ['204.1'],
      artifactSlot: null,
      concept: `If it costs cents to deliver a unit that you sell for dollars, **gross margin looks spectacular** — on paper. Gross margin is revenue minus the cost of delivering it:

$$\\text{gross margin \\%} = \\frac{\\text{price} - \\text{cost to deliver}}{\\text{price}}$$

Naively, "cost to deliver" is just the compute from 204.1, and a task priced at $1.00 costing $0.036 shows a **96%+** margin — better than most SaaS. This is the seductive number in every agent-company pitch.

The seduction breaks because compute is **not** the only cost of delivering agent work. Two additions erode it, and they are structural, not incidental:

- **Rework**: agents produce wrong or unusable output some fraction of the time. You re-run the task (paying compute again) or discard the revenue.
- **Human oversight / review**: for anything with stakes, a person checks or corrects some share of outputs. That review time is real labor cost per unit, folded back into delivery.

The honest delivery cost is:

$$\\text{cost}_{\\text{deliver}} = \\text{cost}_{\\text{task}} + \\text{rework cost} + \\text{oversight cost}$$

The lesson: raw compute margin is the **ceiling**, not the reality. An agent company's true gross margin lives wherever the reliability tax and the review burden pull it down from that ceiling — and for high-stakes work, oversight can dominate everything else.`,
      reframe: {
        analogy: `This is contribution margin (Module 5) with the variable-cost bucket rewritten. Same formula, price minus what it costs to serve one unit — but the "server cost" is now tokens plus the human who checks the token machine's homework. Oversight is your per-seat support cost, ported into an agent world.`,
        breaks: `In classic SaaS, higher volume dilutes support cost per unit as you build self-serve. In an agent company, oversight can be **stubbornly proportional** to output volume when every high-stakes result needs eyes — 10x the tasks means 10x the reviews. The margin does not automatically improve with scale the way a software gross margin does; you have to *engineer* the review rate down. That refusal to dilute is what makes the reliability tax (204.3) so dangerous.`,
      },
      workedExample: `A contract-review agent sells each review at **$5.00**. Costs to deliver one review:

- Compute (cost per task from 204.1): **$0.12**
- Rework: it fails **8%** of the time and must be re-run once, so expected extra compute is $0.08 \\times 0.12 = \\$0.0096 \\approx \\mathbf{\\$0.01}$
- Human oversight: a reviewer spot-checks, averaging **2 minutes per review** at a fully-loaded $45/hour, i.e. $\\frac{2}{60} \\times 45 = \\mathbf{\\$1.50}$

$$\\text{cost}_{\\text{deliver}} = 0.12 + 0.01 + 1.50 = \\$1.63$$

$$\\text{gross margin \\%} = \\frac{5.00 - 1.63}{5.00} = \\frac{3.37}{5.00} = \\mathbf{67\\%}$$

The naive compute-only view claimed $\\frac{5.00 - 0.12}{5.00} = 98\\%$. The **oversight cost alone** dragged a 98% fantasy down to a real **67%** — still a strong margin, but a completely different business. Notice which term dominates: the human reviewer costs **12x** the compute. Caveat: compute could fall further, but the $1.50 of human review will not — so margin work here is really *review-rate* work. (Illustrative rates.)`,
      branch: {
        scenario: `Your contract-review agent runs at **67%** gross margin, and the worked example just showed the human reviewer ($1.50) dwarfs compute ($0.12). Leadership wants to push margin toward 85%+. Which move actually gets you there?`,
        choices: [
          {
            label: 'Negotiate a 30% discount on model/compute pricing.',
            correct: false,
            consequence: `**Instructive miss.** Compute is $0.12 of a $1.63 delivery cost. A 30% cut saves ~$0.036 per review — it moves gross margin by well under a point. You optimized the 7% term and ignored the 92% term. This is the 204.1 lesson repeating: attack the dominant cost.`,
          },
          {
            label: 'Raise agent reliability so only 1-in-5 reviews (not every one) needs human eyes.',
            correct: true,
            consequence: `**Correct.** If only 20% of outputs get the 2-minute review, expected oversight drops to $0.20 \\times 1.50 = \\$0.30$. New delivery cost ≈ $0.12 + 0.01 + 0.30 = \\$0.43$, and margin jumps to $(5.00-0.43)/5.00 \\approx \\mathbf{91\\%}$. The lever was never compute — it was the *fraction of outputs that need a human*, which is a reliability and confidence-routing problem.`,
          },
          {
            label: 'Raise the price from $5 to $7.',
            correct: false,
            consequence: `**Partly works, dodges the point.** At $7 with the same $1.63 cost, margin is $(7-1.63)/7 \\approx 77\\%$ — better, but you may lose deals, and you have not touched the structural driver. Margin engineering in an agent company is mostly about **driving the review rate down**, not repricing around a fixed oversight tax.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'A task sells for $2.00. Compute is $0.05, expected rework is $0.02, and human oversight averages $0.40 per task. What is the gross margin, in percent?',
          answer: 76.5,
          tolerance: 1.5,
          unit: '%',
          explain: 'Delivery cost = 0.05 + 0.02 + 0.40 = $0.47. Margin = (2.00 - 0.47)/2.00 = 1.53/2.00 = 76.5%. The human oversight term again dominates delivery cost.',
        },
        {
          kind: 'numeric',
          prompt: 'Same task ($2.00 price, $0.05 compute, $0.02 rework). If you cut required oversight so it averages only $0.10 per task, what is the new gross margin in percent?',
          answer: 91.5,
          tolerance: 1.5,
          unit: '%',
          explain: 'Delivery cost = 0.05 + 0.02 + 0.10 = $0.17. Margin = (2.00 - 0.17)/2.00 = 91.5%. Cutting the oversight term is what actually moves agent-company margin.',
        },
        {
          kind: 'rank',
          prompt: 'Order these delivery-cost terms for a high-stakes agent task from LARGEST to smallest (typical case).',
          items: ['Human oversight / review per task', 'Expected rework (re-run) cost', 'Raw compute (tokens) per task'],
          explain: 'For high-stakes work the human reviewer usually dominates, rework is a small multiple of compute, and raw compute is often the smallest term — the inverse of what the "96% margin" pitch assumes.',
        },
      ],
      tutorHooks: [
        { label: 'Compute MY real gross margin', kind: 'ask', question: 'Given my per-task compute cost, my agent failure rate, and how often a human reviews output, compute my true gross margin including rework and oversight, and tell me which term dominates.' },
        { label: 'Harder: margin with tiered review', kind: 'harder', concept: 'gross margin when only low-confidence outputs are routed to human review and the rest ship automatically' },
        { label: 'Critique my margin assumptions', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'An agent-company pitch claims "96% gross margins because compute is nearly free." The most likely omission is:',
          options: [
            'They forgot to include output tokens',
            'They excluded rework and human-oversight costs from delivery cost',
            'Gross margin cannot exceed 90% for any business',
            'They should have used contribution margin instead',
          ],
          answer: 1,
          explain: 'Compute-only margin is the ceiling. Real delivery cost adds rework (re-runs) and, especially, human review — which for high-stakes work often dwarfs the compute and pulls the true margin well below the headline.',
        },
        {
          kind: 'free',
          prompt: 'For your agent product, estimate delivery cost as compute + rework + oversight, then compute gross margin. Which of the three terms dominates, and what would you do to shrink it?',
          rubric: 'Strong answer: (1) states a price and a compute cost per task; (2) adds a rework term tied to a failure rate and an oversight term tied to review time/rate; (3) computes gross margin correctly; (4) identifies the dominant term (usually oversight for high-stakes work) and proposes a lever that targets THAT term (e.g. confidence routing to cut review rate) rather than compute; (5) notes prices are illustrative.',
        },
      ],
      commitSummary: 'concept only — 204.3 makes the reliability tax precise.',
    },

    // -----------------------------------------------------------------------
    {
      id: '204.3',
      module: 204,
      title: 'The reliability tax',
      estMinutes: 17,
      prerequisites: ['204.1', '204.2'],
      artifactSlot: null,
      concept: `Agents fail a fraction of the time, and failure is not free — you pay again to retry, to verify, or to hand off to a human. The right unit is not cost-per-task but **cost per *successful* task**, because the customer only values successes.

Let $p$ be the probability a single attempt succeeds and $c$ the compute cost of one attempt. If you retry failures until success (independent attempts), the **expected number of attempts** is $\\frac{1}{p}$, so:

$$\\text{cost per success (retry)} = \\frac{c}{p}$$

At $p = 0.9$ that is a mild $1.11c$ — an 11% tax. At $p = 0.5$ it doubles your cost. The tax is nonlinear and it bites hardest exactly where reliability is worst.

But pure retry only works when failures are **detectable and independent** — and often they are not. A wrong answer that *looks* right is worse than a crash. So real pipelines add a **verifier** (another model call, a test, a rule check) and a **human fallback** for the cases the verifier flags. A fuller model:

$$\\text{cost}_{\\text{success}} = \\frac{c + c_{\\text{verify}}}{p} + (1-p_{\\text{caught}}) \\times c_{\\text{escape}}$$

where $c_{\\text{verify}}$ is the check's cost, $p_{\\text{caught}}$ is how reliably you catch failures, and $c_{\\text{escape}}$ is the cost of a bad output reaching the customer (support, refunds, reputation). That last term is the scary one: **undetected failures** are the true reliability tax, and they do not shrink just because compute got cheaper.`,
      reframe: {
        analogy: `This is **expected value under a failure probability** — the same math as an **error budget** or **tail-latency** model in an SLA. You never design for the happy path alone; you budget for the p95/p99 where things fail and price the retries and fallbacks in. Cost per success is your agent's SLA-adjusted cost: what you actually pay once you account for the fraction that misses.`,
        breaks: `Retry math assumes attempts are **independent** — that a second try is a fresh coin flip. Agents violate this: if a task fails because the input is genuinely ambiguous or out-of-distribution, **every** retry fails the same way, and $\\frac{1}{p}$ badly *understates* cost (you can loop forever paying compute for a task that never succeeds). Independent-failure retry works for transient/stochastic errors; it does not rescue a systematically hard input. Cap your retries and route persistent failures to a human, or the tax becomes unbounded.`,
      },
      workedExample: `An agent extracts structured data from invoices. One attempt costs **$0.04** and succeeds **85%** of the time ($p = 0.85$). Failures are caught by a cheap schema validator costing **$0.005** per check that catches **95%** of failures. A bad record that escapes costs about **$6** in downstream cleanup.

Naive retry-only cost per success: $\\frac{0.04}{0.85} = \\mathbf{\\$0.047}$ — a modest 18% tax over the $0.04 base.

Now the fuller picture. Per successful task you pay attempt plus verify, scaled by retries: $\\frac{0.04 + 0.005}{0.85} = \\$0.053$. Escapes: a failure occurs 15% of the time and 5% of those slip past the validator, so escape probability ≈ $0.15 \\times 0.05 = 0.0075$, costing $0.0075 \\times 6 = \\mathbf{\\$0.045}$ per task.

$$\\text{cost}_{\\text{success}} \\approx 0.053 + 0.045 = \\mathbf{\\$0.098}$$

The undetected-failure term ($0.045) is nearly **as large as everything else combined**, even though escapes happen under 1% of the time — because each one is 150x the cost of a normal attempt. Cheaper compute barely touches this number; **better verification** ($p_{\\text{caught}}$ up) or **lower escape cost** ($c_{\\text{escape}}$ down) is where the tax actually lives. (Rates illustrative and drift over time.)`,
      branch: {
        scenario: `Your invoice agent's true cost per success is ~9.8 cents, and the breakdown just showed the **undetected-failure term** ($0.045) rivals everything else. You can fund one improvement. Which cuts cost per success the most?`,
        choices: [
          {
            label: 'Halve compute cost per attempt from $0.04 to $0.02.',
            correct: false,
            consequence: `**Instructive miss.** That shrinks the $0.053 attempt+verify term to ~$0.029, saving ~$0.024. Real, but it does nothing to the $0.045 escape term — the one that stems from failures reaching customers. You cut the visible cost and left the dangerous one untouched.`,
          },
          {
            label: 'Improve the verifier so it catches 99% of failures instead of 95%.',
            correct: true,
            consequence: `**Correct.** Escape probability drops from 0.15 x 0.05 = 0.0075 to 0.15 x 0.01 = 0.0015, so the escape term falls from $0.045 to 0.0015 x 6 = $0.009 — a **$0.036 saving**, larger than halving compute. The reliability tax lives in undetected failures; raising p_caught attacks it directly. This is the error-budget mindset: spend on catching the tail, not on the happy path.`,
          },
          {
            label: 'Add unlimited automatic retries so nothing ever fails.',
            correct: false,
            consequence: `**Dangerous miss.** Retries only help when failures are independent. Invoices that fail are often genuinely ambiguous — every retry fails identically while you keep paying compute, and the 1/p formula breaks toward infinity. Worse, retrying does not catch the "looks-right-but-wrong" escapes at all. Cap retries and route persistent failures to a human.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'An agent attempt costs $0.06 and succeeds 75% of the time (p = 0.75). Using retry-only, what is the cost per successful task, in dollars?',
          answer: 0.08,
          tolerance: 0.005,
          unit: '$',
          explain: 'Cost per success = c/p = 0.06 / 0.75 = $0.08. The 25% failure rate adds a 33% tax over the $0.06 base attempt.',
        },
        {
          kind: 'numeric',
          prompt: 'Failures happen 20% of the time; a validator catches 90% of them, so 10% escape. If each escaped bad output costs $5, what is the expected escape cost per task, in dollars?',
          answer: 0.10,
          tolerance: 0.01,
          unit: '$',
          explain: 'Escape probability = 0.20 x 0.10 = 0.02. Expected escape cost = 0.02 x 5 = $0.10. Rare-but-expensive escapes can dominate cost per success.',
        },
        {
          kind: 'scenario',
          title: 'Choosing the reliability lever',
          intro: 'Your agent has p = 0.8 success, a cheap validator catching 90% of failures, and escaped errors cost $8 each downstream. Compute per attempt is $0.03. Decide how to spend.',
          decisions: [
            {
              situation: 'Where is the biggest hidden cost most likely hiding?',
              options: [
                { label: 'In the raw compute per attempt', correct: false, outcome: 'At $0.03/attempt and p=0.8, attempt cost per success is only ~$0.0375. Small.' },
                { label: 'In the undetected failures that escape to customers at $8 each', correct: true, outcome: 'Right. Escape prob = 0.2 x 0.1 = 0.02, x $8 = $0.16 per task — over 4x the attempt cost. The tail dominates.' },
                { label: 'In the validator being too expensive to run', correct: false, outcome: 'A validator is typically pennies; its COST is rarely the issue — its catch rate is.' },
              ],
            },
            {
              situation: 'A task keeps failing on the same ambiguous input after 3 retries. Do you keep retrying?',
              options: [
                { label: 'Yes — retries are independent, it will eventually pass', correct: false, outcome: 'Failures on ambiguous inputs are correlated, not independent. You will loop forever burning compute.' },
                { label: 'No — cap retries and route it to a human fallback', correct: true, outcome: 'Correct. Correlated failures break the 1/p model; a retry cap plus human fallback bounds the cost.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Model MY cost per successful task', kind: 'ask', question: 'Given my agent success rate, retry policy, verifier catch rate, and downstream cost of a bad output, compute my cost per successful task and identify which term dominates.' },
        { label: 'Harder: correlated failures', kind: 'harder', concept: 'why the 1/p retry model breaks for correlated failures and how to bound cost with retry caps and human fallback' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'An agent succeeds 80% of the time and you retry failures. Assuming independent attempts, expected attempts per success is:',
          options: ['0.8', '1.25', '1.8', '5'],
          answer: 1,
          explain: 'Expected attempts = 1/p = 1/0.8 = 1.25. So cost per success is 1.25 x the single-attempt cost — a 25% reliability tax, valid only while failures are independent.',
        },
        {
          kind: 'mcq',
          prompt: 'Which failure type is the TRUE reliability tax that cheaper compute does not fix?',
          options: [
            'Crashes that are caught and retried',
            'Undetected wrong answers that escape to the customer',
            'Slow responses that eventually succeed',
            'Tasks that cost slightly more tokens than estimated',
          ],
          answer: 1,
          explain: 'Undetected failures reach the customer and carry large downstream cost (support, refunds, trust). They shrink only with better verification or lower escape cost — not with cheaper tokens.',
        },
        {
          kind: 'free',
          prompt: 'For your agent, estimate cost per successful task including retries, a verifier, and the cost of an undetected failure escaping. Which lever — success rate, catch rate, or escape cost — would you invest in first, and why?',
          rubric: 'Strong answer: (1) states a per-attempt cost and success probability p and applies c/p correctly; (2) adds a verifier cost and an escape term = P(fail) x P(uncaught) x escape cost; (3) identifies which term dominates (often the escape term); (4) picks a lever targeting the dominant term (raising catch rate or cutting escape cost, not just compute); (5) notes retries assume independence and correlated failures need a cap + human fallback.',
        },
      ],
      commitSummary: 'concept only — 204.4 puts these costs on a scaling curve.',
    },

    // -----------------------------------------------------------------------
    {
      id: '204.4',
      module: 204,
      title: 'Scaling economics & the compute cost curve',
      estMinutes: 18,
      prerequisites: ['204.1', '204.2', '204.3'],
      artifactSlot: null,
      concept: `Human companies scale by **hiring** — each new unit of output needs recruiting, onboarding, and a salary, so growth is slow, lumpy, and expensive. An agent company has near-zero marginal labor: to do 10x the tasks you mostly just make 10x the API calls. Replication is nearly free. This is why agent companies can, in principle, scale output almost discontinuously.

But "near-zero marginal labor" does not mean "no constraints." The binding constraints simply **move**:

- **Compute cost** stays linear at best. Total cost $\\approx N \\times \\text{cost}_{\\text{success}}$ for $N$ tasks. There is no headcount economy of scale to bend it down automatically — 10x the tasks is 10x the token bill unless you *engineer* caching, distillation, or cheaper models.
- **Rate limits & capacity**: providers cap tokens-per-minute. Past your quota, throughput is bounded no matter how much demand exists — a shared-resource ceiling you do not control.
- **Quality ceiling**: the model has a fixed capability. Tasks beyond it fail no matter how many times you run them, so raising volume cannot buy you quality you do not have.
- **Oversight that refuses to dilute** (204.2): if review scales with volume, your best cost line grows linearly too.

So the agent company's scaling story is: **marginal labor collapses, but marginal compute, a shared rate-limit ceiling, and a fixed quality ceiling replace headcount as the limit.** The model "breaks" precisely where you assume free replication also means free cost or infinite quality. It means neither.`,
      reframe: {
        analogy: `An agent fleet is a **stateless service behind a shared backend**. Stateless replicas are cheap to spin up — that is your near-free labor replication. But every replica hammers the same rate-limited API and the same fixed-capability model, exactly like web servers bounded by one shared database. You scale the cheap tier freely right up until the shared resource saturates; then adding replicas buys you nothing but queueing.`,
        breaks: `A stateless service's shared backend can usually be **provisioned bigger** — shard the DB, add capacity. The agent company's shared backends are stickier: the **quality ceiling** is a property of the model itself and cannot be scaled by spending more (you cannot buy 10% more correctness the way you buy 10% more CPU), and **rate limits** are set by an external provider on their schedule, not yours. So the analogy holds for throughput but breaks for quality — the one bottleneck you cannot provision away is the model's capability.`,
      },
      workedExample: `An agent company runs at **cost per success $0.10** (from 204.3) and grows from 100,000 to **1,000,000 tasks/month**.

Compute cost scales **linearly**: $1{,}000{,}000 \\times 0.10 = \\mathbf{\\$100{,}000/\\text{month}}$, up from $10,000 — no automatic economy of scale bends it down.

Now the ceilings bite. Suppose the provider caps you at **2,000,000 tokens/minute** and each task averages 9,000 tokens. Max throughput = $\\frac{2{,}000{,}000}{9{,}000} \\approx 222$ tasks/minute, or $222 \\times 60 \\times 24 \\times 30 \\approx \\mathbf{9.6\\text{M tasks/month}}$. So 1M/month fits — but a jump to 12M/month would **hit the rate-limit wall**: throughput is capped no matter how much demand exists, until you negotiate a higher quota or shard across providers.

And oversight (204.2): if 20% of outputs still need a 2-minute human review at $45/hour, that is $0.20 \\times \\$1.50 = \\$0.30$/task, i.e. **$300,000/month** at 1M tasks — **3x the compute bill** and growing linearly with volume. The naive "labor is free so scaling is free" story is wrong on two fronts at once: compute is linear and un-discounted, and human oversight can be the largest line of all. Engineering the review rate and the token/task down is the whole game. (Illustrative prices; they move fast.)`,
      branch: {
        scenario: `Your agent company runs at $0.10 per success with 20% of outputs needing human review, and demand is about to 5x. Compute is linear, you are near your provider's rate limit, and the model occasionally fails on your hardest task type no matter what. Where does the model break FIRST as you scale?`,
        choices: [
          {
            label: 'Nowhere — labor is basically free, so 5x demand is 5x profit.',
            correct: false,
            consequence: `**The seductive miss.** Free marginal *labor* is not free marginal *cost*. Compute scales linearly (5x the token bill), human oversight scales linearly (5x the review hours), and you are about to hit a rate-limit wall. "Replication is free" describes labor, not the shared resources that actually bind you.`,
          },
          {
            label: 'At the shared ceilings — rate limits cap throughput and the fixed quality ceiling caps what you can even attempt — while compute and oversight costs rise linearly.',
            correct: true,
            consequence: `**Correct.** This is the stateless-service-behind-a-shared-backend picture: replicas are cheap, but the rate limit saturates and the model's fixed capability caps quality — and unlike CPU you cannot simply provision more correctness. Meanwhile your two big cost lines (compute, oversight) grow linearly with no automatic discount. The plan is explicit: negotiate quota / multi-provider for throughput, distill or route to cheaper models for compute, drive the review rate down for oversight, and scope out the tasks above the quality ceiling.`,
          },
          {
            label: 'Only the compute bill matters — everything else is a rounding error at scale.',
            correct: false,
            consequence: `**Half-right, incomplete.** Compute is real and linear, but at these numbers human oversight ($300k/month) exceeds compute ($100k/month), and the rate-limit wall can stop you serving demand regardless of budget. Fixating on the token bill alone misses the two constraints — oversight cost and the shared ceiling — that break the model first.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'At a cost per successful task of $0.08, what is the monthly compute-and-delivery cost for 2,000,000 tasks, in dollars? (assume it scales linearly)',
          answer: 160000,
          tolerance: 1000,
          unit: '$',
          explain: '2,000,000 x $0.08 = $160,000/month. With no automatic economy of scale, total cost is just N x cost-per-success — linear, not sublinear.',
        },
        {
          kind: 'numeric',
          prompt: 'A provider caps you at 1,500,000 tokens/minute and each task averages 10,000 tokens. What is your maximum throughput, in tasks per minute?',
          answer: 150,
          tolerance: 5,
          unit: 'tasks/min',
          explain: '1,500,000 / 10,000 = 150 tasks/minute. Past this shared-resource ceiling, more demand does not raise throughput until you get more quota.',
        },
        {
          kind: 'categorize',
          prompt: 'Classify each factor by whether scaling an agent company makes it easier (a lever you control) or is a hard ceiling you cannot simply buy your way past.',
          buckets: ['Lever you can engineer', 'Hard shared/fixed ceiling'],
          items: [
            { text: 'Prompt caching to cut tokens per task', bucket: 'Lever you can engineer' },
            { text: 'Routing easy tasks to a cheaper model', bucket: 'Lever you can engineer' },
            { text: 'Driving the human review rate down', bucket: 'Lever you can engineer' },
            { text: "The model's fixed capability / quality ceiling", bucket: 'Hard shared/fixed ceiling' },
            { text: "The provider's tokens-per-minute rate limit", bucket: 'Hard shared/fixed ceiling' },
          ],
          explain: 'Tokens/task, model routing, and review rate are yours to engineer. The model quality ceiling and the provider rate limit are shared/external constraints — you negotiate or design around them, you do not simply buy past them.',
        },
        {
          kind: 'rank',
          prompt: 'Order these by how directly you control them when scaling, from MOST within your control to least.',
          items: ['Tokens per task (caching, prompt trimming)', 'Human review rate (confidence routing)', "Provider's rate-limit quota", "The model's fixed quality ceiling"],
          explain: 'Tokens/task is almost entirely yours; review rate you engineer; rate-limit quota you can negotiate but the provider sets; the model quality ceiling is the least controllable — a hard property you must scope around.',
        },
      ],
      tutorHooks: [
        { label: 'Find where MY model breaks at scale', kind: 'ask', question: 'Given my cost per successful task, tokens per task, provider rate limit, and human review rate, project my cost and throughput at 10x volume and tell me which constraint binds first.' },
        { label: 'Harder: multi-provider scaling', kind: 'harder', concept: 'scaling past a single provider rate limit by sharding across providers and routing by task difficulty, and the cost trade-offs' },
        { label: 'Critique my "scaling is free" assumption', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In an agent company, "near-zero marginal labor" means:',
          options: [
            'Total cost stays flat as you scale',
            'Replicating a worker is nearly free, but compute, rate limits, and a quality ceiling become the binding constraints',
            'You never need human oversight',
            'Compute cost falls automatically as volume grows',
          ],
          answer: 1,
          explain: 'Labor replication is cheap, but the constraints move to compute (linear), provider rate limits (a shared ceiling), and the model quality ceiling (fixed capability). Total cost is not flat and compute does not auto-discount.',
        },
        {
          kind: 'mcq',
          prompt: 'Which constraint can you LEAST simply buy your way past by spending more?',
          options: [
            'Tokens per task',
            "The model's fixed quality ceiling",
            'The size of your engineering team',
            'Your monthly compute budget',
          ],
          answer: 1,
          explain: 'The quality ceiling is a property of the model itself — you cannot purchase 10% more correctness the way you buy more CPU or a higher rate limit. Tasks above it must be scoped out or handled differently.',
        },
        {
          kind: 'free',
          prompt: 'For your agent company at 10x current volume, project total cost (linear in cost-per-success), check whether you hit a provider rate limit, and name the constraint that breaks first. What is your plan for it?',
          rubric: 'Strong answer: (1) scales total cost as N x cost-per-success and shows it is linear (no automatic discount); (2) computes a throughput ceiling from tokens/task vs a rate limit; (3) identifies the FIRST binding constraint (compute, oversight, rate limit, or quality ceiling); (4) gives a concrete plan matched to that constraint (caching/distillation for compute, confidence routing for oversight, multi-provider/quota for rate limits, scoping for quality); (5) avoids the "scaling is free" fallacy and notes prices are illustrative.',
        },
      ],
      commitSummary: 'concept only — the bonus module persists nothing; carry these cost curves into your real agent-company model.',
    },
  ],
}
