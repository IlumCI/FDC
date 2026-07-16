import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 9 — Accounting & financial modeling
//
// Reads the model the learner already built: pricing (M5/M6) and unit
// economics (M5). This module teaches the three statements as views over one
// event log, accrual-vs-cash as eventual consistency, a driver-based model as
// a dependency graph, and runway/burn/break-even as resource-exhaustion
// monitoring. The final lesson persists startup.financials — the headline
// drivers that read forward into capital planning (M10).
//
// Meridian canon (do not contradict): $40/seat/mo, var $9, CM $31 (78%),
// CAC $250, LTV ≈ $422, ratio ≈ 1.69×, payback ≈ 8.1mo, fixed ≈ $6,800/mo
// (salary $6,000 + cluster $800), break-even ≈ 220 customers.
// ===========================================================================

export const module9: Module = {
  id: 9,
  title: 'Accounting & financial modeling',
  goal: 'Read the three statements and build a driver-based financial model of your company.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '9.1',
      module: 9,
      title: 'The three statements as three views over one event log',
      estMinutes: 14,
      prerequisites: ['5.4'],
      artifactSlot: null,
      concept: `A company's financials look like three separate documents, but they are three **read-only projections over one append-only log**: the *journal*, an ordered record of every transaction as a double-entry event.

Each statement answers a different question by folding that same log a different way:

- **Income statement (P&L)** — a *window aggregation*: revenue minus expenses **between two timestamps**. Answers *did we make money this period?*
- **Balance sheet** — a *point-in-time snapshot* of accumulated state at one instant. Answers *what do we own and owe right now?* It obeys the accounting identity:

$$\\text{Assets} = \\text{Liabilities} + \\text{Equity}$$

- **Cash flow statement** — the same events **filtered to the cash account**, grouped into operating, investing, and financing. Answers *where did actual cash move?*

The tie that makes them one system: net income from the P&L flows into retained earnings on the balance sheet, and the change in the balance sheet's cash line must equal the bottom of the cash flow statement. Three views, one underlying truth:

$$\\text{Net income} = \\text{Revenue} - \\text{Expenses}$$

No single statement is enough. Profit without cash is a timing lie; cash without profit is often borrowed time. You read all three because each hides what the others reveal.`,
      reframe: {
        analogy: `This is **event sourcing with CQRS**. The journal is the immutable event log — every transaction appended as a balanced pair of entries. The three statements are **materialized read models** projected from that log. The balance sheet is a *current-state aggregate* (fold the whole log up to now). The P&L is a *windowed projection* (fold only the events inside the reporting period). The cash flow statement is the *same events filtered to one account*. Change a source event and all three views must re-derive consistently, exactly like rebuilding read models from an event store.`,
        breaks: `A clean event store folds raw, factual events deterministically. Accounting projections inject **judgment**: depreciation, bad-debt allowances, and accruals are estimated entries, not observed cash events — the fold includes opinion. Double-entry is also a **redundancy constraint**, not a plain append: every event hits two accounts and the books must balance, more like a checksum than a log line. And the "immutable" log is not truly immutable — **restatements** revise prior periods, something a real append-only log forbids.`,
      },
      workedExample: `One month at **Meridian** (40 customers, $40/seat). The journal records, among others:

- Bill 40 seats: revenue **$1,600** earned; half paid in cash, half invoiced net-30.
- Variable costs (infra + support + fees, $9/seat): **$360** cash out.
- Founder salary **$6,000** and base cluster **$800**: cash out (fixed).
- Acquisition spend (8 new customers next month at $250 CAC): **$2,000** cash out.

Project the same log three ways:

**P&L (the month):** revenue $1,600 − variable $360 − fixed $6,800 − S&M $2,000 = **net loss of −$7,560**.

**Cash flow (operating):** only $800 of the $1,600 was collected, so cash from operations ≈ $800 − $360 − $6,800 − $2,000 = **−$8,360** — worse than the loss, because $800 is stuck in receivables.

**Balance sheet (snapshot after):** cash **down** by the period's outflow, a new **accounts-receivable asset of $800**, and equity reduced by the $7,560 loss. Assets still equal liabilities plus equity — the identity holds by construction.

Same events. Three numbers (−7,560, −8,360, and a snapshot). Reading only one would mislead you.`,
      branch: {
        scenario: `Meridian's **bank balance rose by $1,440** this month because three customers prepaid a year up front. The founder announces "we were profitable this month." Which statement actually answers *did we make money?*`,
        choices: [
          {
            label: 'The cash flow statement — cash went up, so we profited.',
            correct: false,
            consequence: `**Instructive miss.** Cash rising says nothing about profit. That $1,440 is a **year of service owed** — it lands as a deferred-revenue *liability*, not income. Only $40 per prepaid seat is earned this month; the rest is a promise you must still deliver. Reading cash as profit is exactly how prepaid or financed inflows disguise an operating loss.`,
          },
          {
            label: 'The income statement (P&L) — profit is revenue earned minus expenses for the period.',
            correct: true,
            consequence: `**Correct.** "Did we make money?" is a *windowed* question, and the P&L is the window fold: revenue **earned** (not collected) minus expenses **incurred** this period. Meridian's P&L still shows a **−$7,560 loss** despite cash rising, because most of that $1,440 is unearned. The cash movement and the profit are different projections of the same log — you needed the right one.`,
          },
          {
            label: 'The balance sheet — it shows the full financial position.',
            correct: false,
            consequence: `**Partly fair but wrong tool.** The balance sheet is a *snapshot* of state, not a *period* measure. It will show more cash and a new deferred-revenue liability, but it cannot by itself tell you whether *this month* earned more than it spent — that is a windowed aggregation, which is the P&L's job.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Map my transactions to the three statements', kind: 'ask', question: 'Given my pricing and cost structure, walk one typical month of my transactions through all three statements and show where each entry lands.' },
        { label: 'Harder: reconcile net income to cash', kind: 'harder', concept: 'reconciling P&L net income to cash-flow-from-operations via changes in receivables, payables, and deferred revenue' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which statement is a point-in-time SNAPSHOT rather than an aggregation over a reporting period?',
          options: ['The income statement (P&L)', 'The balance sheet', 'The cash flow statement', 'None — all three are period aggregations'],
          answer: 1,
          explain: 'The **balance sheet** captures state at one instant (Assets = Liabilities + Equity). The P&L and cash flow statements both aggregate events *over* a period. That is why the balance sheet is the fold of the entire log up to "now," while the others fold only a window.',
        },
        {
          kind: 'mcq',
          prompt: 'Meridian earns $1,600 of revenue but collects only $800 in cash this month. The uncollected $800 appears on the balance sheet as:',
          options: ['A liability (deferred revenue)', 'An asset (accounts receivable)', 'An expense on the P&L', 'Equity'],
          answer: 1,
          explain: 'Revenue earned but not yet collected is **accounts receivable — an asset** (someone owes you). Deferred revenue is the opposite case: cash collected before the service is earned, which is a *liability*.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR company, name one question each of the three statements is uniquely suited to answer, and one question it CANNOT answer that another statement can. Use your actual pricing where relevant.',
          rubric: 'Strong answer: (1) correctly assigns the P&L to period profitability, the balance sheet to point-in-time position, and the cash flow statement to actual cash movement; (2) gives a concrete, company-specific question for each; (3) demonstrates that reading one statement alone is insufficient (e.g. cash up while P&L shows a loss); (4) references their real price or cost numbers rather than staying abstract.',
        },
      ],
      commitSummary: 'concept only — you persist the model in lesson 9.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '9.2',
      module: 9,
      title: 'Accrual vs cash as eventual consistency',
      estMinutes: 15,
      prerequisites: ['9.1'],
      artifactSlot: null,
      concept: `Two ledgers track the same business and disagree in the short run. **Accrual** recognizes revenue when it is *earned* (service delivered) and expenses when *incurred*. **Cash** records money only when it actually moves. They describe the same events, offset in time.

The gap between them lives in **working-capital accounts**:

- **Accounts receivable (AR)** — earned but not yet collected (revenue leads cash).
- **Accounts payable (AP)** — incurred but not yet paid (expense leads cash).
- **Deferred revenue** — collected but not yet earned (cash leads revenue).

The reconciliation from profit to cash makes the lag explicit:

$$\\text{CFO} = \\text{Net income} + \\text{non-cash} - \\Delta\\text{AR} + \\Delta\\text{AP} + \\Delta\\text{Deferred rev}$$

This is why a **profitable company still runs out of cash**: if you book revenue on net-60 terms while paying salaries every two weeks, growth *widens* the AR gap faster than profit fills it. Each new customer is booked as profit today but funded out of your pocket for 60 days. Grow fast enough and you starve — the P&L is green while the bank hits zero. Profit is a claim about the period; cash is a claim about *survival*, and survival is the binding constraint.`,
      reframe: {
        analogy: `Accrual is the **strongly-consistent** ledger — it commits the truth the instant a transaction is earned. Cash is the **eventually-consistent replica**: the same write, applied later, once payment settles. The staleness window is your **collection period** (days sales outstanding). Absent failure the two converge — every earned dollar eventually arrives as cash — exactly like a replica catching up to the primary after a lag. Deferred revenue is the mirror case: the cash replica gets the write *before* the accrual primary recognizes it, and must hold it as a pending liability until the "commit" (delivery) happens.`,
        breaks: `Eventual consistency **guarantees** convergence; accounting does not. A customer default is a **partition that never heals** — the earned write is lost, written off as bad debt, and the replicas permanently diverge. The lag is also not a neutral systems property: it is **business-controlled** (you set payment terms) and directional (you want to collect fast and pay slow). And unlike replication lag, the gap can be *strategically widened* — offering net-90 to win a deal deliberately trades cash timing for revenue, a choice no replica makes.`,
      },
      workedExample: `**Meridian** signs enterprise logos that demand **net-60** terms, and it is growing bookings by **$1,000 of new monthly revenue each month**.

Month 1: earn $1,600, collect $0 of it yet (net-60), pay $9,160 in cash costs. **P&L: near break-even on new logos; cash: −$1,600 buried in AR.**

By month 3 the AR pile is three months of billings deep — roughly **$1,600 + $2,600 + $3,600 ≈ $7,800 of earned-but-uncollected revenue** sitting as an asset while payroll went out in cash every month. The faster Meridian grows, the *larger* that frozen balance, because each month's new billings enter AR before the oldest clears.

Now the mirror: Meridian also lands **three annual prepays at $480 each = $1,440 cash today**. That inflow is **deferred revenue**, a liability — only $120/month (3 seats × $40) is earned. Cash looks healthy; earned revenue does not.

Net effect: the P&L can read *profitable* while the cash account bleeds from the AR gap and is temporarily propped by prepay liabilities. Two ledgers, same events, opposite stories — and only one of them can make payroll.`,
      branch: {
        scenario: `Meridian's P&L shows a small **profit** three months running, yet the bank balance keeps **falling** and payroll is three weeks away. The founder asks what to do first.`,
        choices: [
          {
            label: 'Nothing structural — the P&L is profitable, so cash will follow. Just wait.',
            correct: false,
            consequence: `**Dangerous miss.** "Cash will follow" is only true if you *survive the lag*. With net-60 terms and growing bookings, the receivables gap widens every month — waiting means the gap grows while payroll is due now. Profitable companies die in exactly this window. Convergence is guaranteed in theory and useless if you are insolvent before it arrives.`,
          },
          {
            label: 'Attack working capital: shorten collection (deposits, net-15, prepay discounts), stretch payables, and manage the cash-conversion cycle.',
            correct: true,
            consequence: `**Correct.** The problem is *timing*, not profitability, so the fix is the timing gap. Pull cash forward (upfront deposits, annual prepay discounts, tighter net terms, faster invoicing) and push your own payments out where fair. Shrinking days-sales-outstanding converts frozen AR into spendable cash without changing a single price — you are reducing replication lag, not the underlying economics.`,
          },
          {
            label: 'Book revenue more aggressively to make the P&L look even stronger.',
            correct: false,
            consequence: `**Instructive miss — and it makes things worse.** Recognizing more revenue faster only *widens* the accrual-to-cash gap: more earned dollars sitting in AR, more profit with no cash behind it. Aggressive recognition is how profitable-looking companies accelerate straight into insolvency. The cash ledger, not the P&L, is the one about to fail.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Where is my cash trapped?', kind: 'ask', question: 'Given my pricing and likely payment terms, estimate where cash gets trapped (AR, deferred revenue, payables) and how big the gap gets if I grow bookings 20% a month.' },
        { label: 'Harder: cash-conversion cycle', kind: 'harder', concept: 'computing the cash-conversion cycle and why a negative cycle (customer prepays) is a growth superpower' },
        { label: 'Critique my cash reasoning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A customer pays $480 upfront for 12 months of service. In the month of payment, how is this recorded under accrual accounting?',
          options: [
            '$480 of revenue and $480 of cash',
            '$40 of revenue earned; $440 held as a deferred-revenue liability; $480 cash received',
            '$480 of revenue, $0 cash',
            '$480 recorded as an expense',
          ],
          answer: 1,
          explain: 'Only the delivered month is **earned** ($40). The remaining $440 is cash you hold but have not yet earned — a **deferred-revenue liability**. Cash ($480) and earned revenue ($40) diverge, which is the whole point of accrual vs cash.',
        },
        {
          kind: 'mcq',
          prompt: 'Why can a company be profitable on its P&L every month yet still run out of cash?',
          options: [
            'Its expenses are miscalculated',
            'Earned revenue is stuck in receivables (long collection terms) while cash costs are paid now — the gap widens as it grows',
            'Profit and cash are always identical, so this cannot happen',
            'It is paying too little tax',
          ],
          answer: 1,
          explain: 'Revenue is recognized when **earned**, but cash arrives on the customer\'s payment terms. With net-60 billing and growth, the receivables gap grows faster than profit fills it — the accrual "primary" is ahead of the cash "replica," and payroll is due in cash.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR company, describe the accrual-to-cash lag: what payment terms will you offer, how large does the receivables (or deferred-revenue) gap get, and what is one lever to shrink it? Use your real price.',
          rubric: 'Strong answer: (1) correctly distinguishes when revenue is EARNED vs when cash LANDS for their model; (2) identifies the specific working-capital account that opens the gap (AR for net terms, deferred revenue for prepay); (3) quantifies the gap roughly using their actual price and a plausible collection period; (4) names a concrete lever (deposits, prepay discount, shorter net terms, faster invoicing) and explains why it shrinks the lag without changing unit economics.',
        },
      ],
      commitSummary: 'concept only — the persisted model comes together in lesson 9.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '9.3',
      module: 9,
      title: 'A driver-based model as a dependency graph',
      estMinutes: 16,
      prerequisites: ['9.2'],
      artifactSlot: null,
      concept: `A financial model is not a pile of numbers — it is a **dependency graph**. At the leaves sit **drivers**: a handful of assumptions you can defend (price, starting customers, net new per month, contribution margin, fixed costs). Everything else is a **formula node** computed *from* those leaves. Outputs (revenue, burn, break-even, runway) are the roots.

The cardinal rule: **never type a number you could compute.** A hardcoded output is a lie waiting to go stale — the moment an upstream assumption changes, that cell no longer agrees with the model. Drivers are inputs; outputs are pure functions of them.

For Meridian the core recurrence is a few lines:

$$\\text{customers}_t = \\text{customers}_0 + n \\times t$$

$$\\text{contribution}_t = \\text{customers}_t \\times \\text{price} \\times \\text{CM\\%}$$

$$\\text{net}_t = \\text{contribution}_t - \\text{fixed} - \\text{S\\&M}$$

Change one driver — say CM% or net new per month — and every downstream period *recomputes*. That is the model's value: it turns "what if we raise price 10%?" from an argument into a **recalculation**. A good model is auditable (you can trace any output back to its drivers), minimal (few assumptions, each defensible), and honest (no output secretly typed by hand).`,
      reframe: {
        analogy: `A spreadsheet is a **pure-functional dependency graph** — a DAG of memoized nodes. Each cell is a pure function of the cells it references; it holds no hidden state. Recalculation is a **topological re-evaluation**: change a driver and the engine marks every downstream cell **dirty** and recomputes them in dependency order — precisely how an **incremental build system** (make, Bazel) invalidates and rebuilds only the targets affected by a changed source. A driver change is an edited source file; the recompute is the build doing the minimal work to bring outputs back in sync. Referential transparency is what lets you trust the result.`,
        breaks: `Real financial models routinely contain **circular references** — interest depends on debt, which depends on the cash balance, which depends on interest. A DAG cannot express a cycle; spreadsheets resolve it by **iterative calculation**, quietly abandoning the pure-build guarantee for a fixed-point loop that may not converge. Purity also leaks: **volatile functions**, manual overrides, and a stray hardcoded number buried inside a formula column all reintroduce hidden state, so the "same inputs give same outputs" promise fails. And spreadsheet recalc order is not a verified topological sort — stale-cache bugs are real.`,
      },
      workedExample: `**Meridian's** driver-based model. Drivers: start **40** customers, **+8**/month, price **$40**, CM **78%** (so **$31**/customer), fixed **$6,800**/mo, S&M **$2,000**/mo (8 × $250 CAC).

Contribution per customer = 40 × 0.78 ≈ **$31**. Roll it forward:

| month | customers | contribution ($) | fixed + S&M ($) | net cash ($) |
|---|---|---|---|---|
| 0 | 40 | 1,240 | 8,800 | −7,560 |
| 6 | 88 | 2,728 | 8,800 | −6,072 |
| 12 | 136 | 4,216 | 8,800 | −4,584 |
| 22 | 216 | 6,696 | 8,800 | −2,104 |
| 30 | 280 | 8,680 | 8,800 | −120 |

Two break-evens fall out of the *same* drivers. **Operating break-even** (contribution covers fixed only) = 6,800 ÷ 31 ≈ **220 customers**, reached near **month 22** — the canonical Meridian number. **Cash-flow break-even** (contribution also covers the $2,000 growth S&M) needs ≈ 284 customers, near **month 31**.

Now flip one driver: lift CM% from 78% to **85%** (CM ≈ $34). Operating break-even drops to 6,800 ÷ 34 ≈ **200 customers**, near month 20. One leaf changed; every downstream period and both break-evens recomputed — no cell edited by hand.`,
      branch: {
        scenario: `A teammate builds Meridian's model but **types "5,200" directly into the month-6 revenue cell** because "that's what we're targeting," instead of linking it to the driver formula. Later the growth assumption changes from +8 to +6 customers/month. What actually happens?`,
        choices: [
          {
            label: 'Fine — the target is a useful anchor, and hardcoding it keeps the model honest to the goal.',
            correct: false,
            consequence: `**Instructive miss.** A hardcoded output is a **stale cache**. When the +8 driver drops to +6, every *linked* cell recomputes but the month-6 cell stubbornly stays 5,200 — now inconsistent with its own neighbors. The model silently reports a number no assumption supports. Targets belong in a separate "goal" line, never inside the computed graph.`,
          },
          {
            label: 'The hardcoded cell goes stale: it no longer agrees with the driver, so the model is now internally inconsistent and untrustworthy.',
            correct: true,
            consequence: `**Correct.** You broke referential transparency. In a proper dependency graph, changing the growth driver dirties month 6 and recomputes it; a typed-in constant is an un-invalidated node that lies after the first change. The fix is the cardinal rule — **link every output to drivers** so one edit propagates everywhere and the model always agrees with its own assumptions.`,
          },
          {
            label: 'It causes a circular reference error.',
            correct: false,
            consequence: `**Not quite.** Hardcoding a value creates no cycle — it just severs the dependency edge, so the cell stops responding to upstream changes. The failure is a **silent staleness** bug, not a circular-reference error. (Circularity is a different hazard, e.g. interest ↔ debt ↔ cash.)`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'What are my real drivers?', kind: 'ask', question: 'Given my saved pricing and unit economics, list the minimal set of drivers my model needs and which outputs should be computed from them (never typed).' },
        { label: 'Harder: sensitivity from the graph', kind: 'harder', concept: 'ranking drivers by how much each moves break-even, i.e. reading the dependency graph as a sensitivity analysis' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In a driver-based model, which of these should be a DRIVER (input) rather than a computed output?',
          options: [
            'Monthly revenue',
            'Break-even customer count',
            'Net new customers per month',
            'Runway in months',
          ],
          answer: 2,
          explain: '**Net new customers per month** is an assumption you set — a leaf of the graph. Revenue, break-even, and runway are all *computed* from drivers like this one. Typing any of those three by hand instead of computing them is the stale-output bug.',
        },
        {
          kind: 'mcq',
          prompt: 'Changing one driver and having every dependent cell recompute in dependency order is most like:',
          options: [
            'A database transaction rollback',
            'An incremental build recompiling only the targets affected by a changed source',
            'A garbage-collection sweep',
            'A load balancer redistributing traffic',
          ],
          answer: 1,
          explain: 'A spreadsheet recalc marks downstream cells dirty and re-evaluates them in topological order — exactly like **make or Bazel** rebuilding only what a changed source affects. Each cell is a pure function of its inputs, which is what makes the recompute trustworthy.',
        },
        {
          kind: 'free',
          prompt: 'List the 4–6 drivers of YOUR financial model and name two outputs that must be computed from them. Then pick one driver and describe what recomputes downstream if you change it.',
          rubric: 'Strong answer: (1) identifies a minimal, defensible set of drivers (e.g. price, starting customers, growth rate, CM%, fixed costs) drawn from their saved pricing/unit economics; (2) correctly classifies revenue, break-even, burn, or runway as computed OUTPUTS not drivers; (3) traces a concrete propagation ("raise CM% → contribution per customer rises → break-even customer count falls → break-even month moves earlier"); (4) shows awareness that outputs should never be hardcoded.',
        },
      ],
      commitSummary: 'concept only — you assemble and persist the headline drivers next.',
    },

    // -----------------------------------------------------------------------
    {
      id: '9.4',
      module: 9,
      title: 'Runway, burn & break-even as resource-exhaustion monitoring',
      estMinutes: 18,
      prerequisites: ['9.3', '5.4'],
      artifactSlot: 'financials',
      concept: `Now read the two outputs that decide whether the company lives. **Burn** is net monthly cash outflow — the drain rate. **Runway** is how long until the tank hits zero:

$$\\text{runway (months)} = \\frac{\\text{cash on hand}}{\\text{net monthly burn}}$$

**Break-even** is the point where income covers the fixed drain, so burn crosses to zero:

$$\\text{break-even customers} = \\frac{\\text{fixed costs}}{\\text{CM per customer}}$$

These read directly from the model you already built: **price and CM%** come from your pricing (Module 6) and **CM, CAC, retention** from your unit economics (Module 5). The financial model does not invent numbers — it *composes* them.

The whole game reduces to one inequality:

$$\\text{time to break-even} < \\text{runway}$$

If you reach break-even before the cash runs out, you survive on your own power. If not, you must **cut burn, raise cash, or improve unit economics** *before* the gap closes on you. The dangerous part is that runway is only as trustworthy as its most fragile assumption: a small dip in CM% or a churn spike lengthens time-to-break-even and shortens runway at the same time, squeezing the inequality from both ends.`,
      reframe: {
        analogy: `Runway is a **resource-exhaustion monitor** — free disk, battery percentage, a token budget, remaining rate-limit quota. Burn is the **drain rate**, and runway is your **time-to-exhaustion**: $\\text{cash} / \\text{burn}$ has the same shape as free-bytes over write-rate — seconds until the disk fills. Break-even is the **steady state** where inflow rate meets the drain, so the level stops falling. And you manage it like any exhaustion metric: set an **alert threshold well above zero** (raise or cut *months* before empty, not at the OOM-kill), because remediation — closing a round, restructuring costs — has its own lead time.`,
        breaks: `A disk fills at a steady rate; **burn is not constant**. It bends with growth, seasonality, hiring, and one-time costs, so a naive cash-over-burn extrapolation is often wrong — usually optimistic. The countdown is also **controllable**, not fixed: unlike a disk you cannot un-fill, a company can **shed load** (cut burn) or **add capacity** (raise) mid-flight, resetting the clock. And the scariest failures are not smooth drains but **step changes** — a key customer churns, a payment fails — that move runway discontinuously. Monitor the *derivative*, not just the level.`,
      },
      workedExample: `**Meridian**, composing the saved model. Contribution per customer **$31**, fixed **$6,800**/mo, S&M **$2,000**/mo, starting **40** customers growing **+8**/month, and **$50,000** cash in the bank.

**Current burn:** revenue 40 × $40 = $1,600; minus variable $360, fixed $6,800, S&M $2,000 → net **−$7,560/month**.

**Runway:** 50,000 ÷ 7,560 ≈ **6.6 months**.

**Break-even:** 6,800 ÷ 31 ≈ **220 customers**. Growing +8/month from 40, that is (220 − 40) ÷ 8 ≈ **22.5 months** away.

Line them up: **time to break-even ≈ 22 months, runway ≈ 6.6 months.** Meridian hits the wall **roughly 16 months before** it would break even. At current drivers it does *not* survive on its own power — it must raise, cut burn, or steepen CM before month 7.

**Sensitivity** — the fragile assumption: drop CM% from 78% to **70%** (CM ≈ $28). Burn worsens to about −$8,000/month, runway falls to ≈ **6.3 months**, *and* break-even rises to 6,800 ÷ 28 ≈ **243 customers** (≈ 25 months out). One soft assumption pushed both ends of the inequality the wrong way. That is why you stress the drivers, not just point-estimate them.`,
      branch: {
        scenario: `Your own model (fresh from the drivers you're about to commit) shows **6.6 months of runway** but **break-even ~22 months away**. You have three moves and cash for essentially one bet. What do you do?`,
        choices: [
          {
            label: 'Pour the remaining cash into faster acquisition to reach break-even sooner.',
            correct: false,
            consequence: `**The fatal miss.** More acquisition means more S&M *now*, which **raises burn and shortens runway** — you sprint toward a break-even you can no longer reach in time. Contribution from new customers arrives slowly along the retention curve while the CAC hits immediately. You would close the wall on yourself faster. Volume does not fix a runway that is shorter than time-to-break-even.`,
          },
          {
            label: 'Close the gap deliberately: extend runway (cut burn and/or raise) and steepen unit economics until time-to-break-even fits inside runway.',
            correct: true,
            consequence: `**Correct.** The inequality is the whole problem: time-to-break-even (22mo) exceeds runway (6.6mo), so you must move *both* numbers until they cross. Cut non-essential burn to lengthen runway, and lift CM% or retention (Module 6) to pull break-even earlier — then raise, if needed, against a plan where the cash actually reaches self-sufficiency. Manage the exhaustion metric before it alarms, not after.`,
          },
          {
            label: 'Do nothing structural yet — 6.6 months is plenty of time to figure it out.',
            correct: false,
            consequence: `**Instructive miss.** Remediation has **lead time**: raising a round takes months, and burn is not even constant — a single churn event moves runway discontinuously. Waiting until the metric is near zero leaves no room to cut or raise. You act on a resource-exhaustion alert *early*, with months of buffer, precisely because the fix is slow.`,
          },
        ],
      },
      artifact: {
        componentKey: 'form',
        prompt: `Commit your financial model's headline drivers. These read from your pricing + unit economics — set a monthly revenue target, your burn, and compute runway and break-even.`,
        fields: [
          { key: 'monthlyRevenueTarget', label: 'Monthly revenue target ($)', type: 'number', help: 'The monthly revenue you are steering toward — roughly your break-even customer count times your price.' },
          { key: 'monthlyBurn', label: 'Monthly burn ($)', type: 'number', help: 'Net cash out per month: fixed costs + S&M − contribution. Meridian burns about $7,560 at 40 customers.' },
          { key: 'runwayMonths', label: 'Runway (months of cash left)', type: 'number', help: 'Cash on hand ÷ monthly burn.' },
          { key: 'breakEvenMonth', label: 'Projected break-even month #', type: 'number', help: 'The month your contribution first covers fixed costs — where burn crosses zero.' },
        ],
      },
      tutorHooks: [
        { label: 'Compute my runway and break-even', kind: 'ask', question: 'Using my saved pricing and unit economics, compute my monthly burn, runway, break-even customer count, and roughly which month I break even. Show the arithmetic.' },
        { label: 'Stress-test my fragile assumption', kind: 'ask', question: 'Which single assumption in my model most shortens my runway if it moves 10% the wrong way? Recompute runway and break-even under that stress.' },
        { label: 'Critique my survival plan', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A company has $90,000 cash and burns $15,000/month net. What is its runway?',
          options: ['6 months', '15 months', '90 months', 'Cannot be determined without revenue'],
          answer: 0,
          explain: 'Runway = cash ÷ burn = 90,000 ÷ 15,000 = **6 months**. Revenue already nets into burn (burn is the *net* outflow), so you do not need it separately — though remember burn is rarely constant, so treat 6 months as a first estimate.',
        },
        {
          kind: 'mcq',
          prompt: 'Your runway is 6 months but break-even is 22 months away. Which action makes the situation WORSE?',
          options: [
            'Cutting non-essential fixed costs to lower burn',
            'Raising capital to extend runway',
            'Increasing acquisition spend to grow customers faster',
            'Improving contribution margin to pull break-even earlier',
          ],
          answer: 2,
          explain: 'More acquisition spend **raises burn and shortens runway** now, while its contribution arrives only slowly — widening the gap between runway and time-to-break-even. The other three all close the gap by moving one side of the inequality the right way.',
        },
        {
          kind: 'free',
          prompt: 'State your committed monthly burn, runway, and projected break-even month. Does time-to-break-even fit inside your runway? If not, name the one lever you will pull first and what it does to each number.',
          rubric: 'Strong answer: (1) cites the learner\'s actual saved burn, runway, and break-even month from startup.financials; (2) correctly applies the survival inequality (time-to-break-even < runway); (3) if the inequality fails, picks ONE concrete lever (cut burn, raise, or improve CM/retention) and states its effect on BOTH runway and break-even; (4) avoids the trap of increasing acquisition spend to "grow into" break-even, or explains why their specific case is an exception; (5) shows the numbers read from pricing + unit economics rather than being invented.',
        },
      ],
      commitSummary: 'your headline financial drivers — monthly revenue target, burn, runway, and projected break-even month — written to **startup.financials**, composed from startup.pricing and startup.unitEconomics and read forward by capital planning in Module 10.',
    },
  ],
}
