import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 5 — Unit Economics: the cost function of a business
//
// Built first and deep as the reference implementation for every future
// module. It exercises the whole platform: formulas, the strongest analogy in
// the course (CAC:LTV as a cache system), a numeric Meridian worked example, an
// interactive scaling-trap branch, and the computational artifact that writes
// startup.unitEconomics (later read by M9's financial model).
// ===========================================================================

export const module5: Module = {
  id: 5,
  title: 'Unit Economics: the cost function of a business',
  goal: 'Model whether ONE unit of business makes money before you scale anything.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '5.1',
      module: 5,
      title: 'Contribution margin: net-per-request',
      estMinutes: 14,
      prerequisites: [],
      artifactSlot: null,
      concept: `**Contribution margin** is what one additional customer contributes after the cost of serving *that* customer:

$$\\text{CM} = \\text{price} - \\text{variable cost per unit}$$

Split every cost into two buckets:

- **Variable costs** scale with each unit sold (infra per tenant, per-seat support, payment fees).
- **Fixed costs** exist whether you have 1 customer or 10,000 (your salary, the office, the base cluster).

Contribution margin deliberately ignores fixed costs. It answers one question: *does selling one more unit put money in or take money out?* If CM is negative, nothing downstream can save you — every sale digs the hole deeper.

**Contribution margin %** = $\\text{CM} / \\text{price}$. High-margin software lives at 70–90%; a business reselling hardware might live at 15%.`,
      reframe: {
        analogy: `Think of the business as a **cost function** evaluated per request. Serving a customer is a request with a *marginal* cost — the extra CPU, bandwidth, and support that one more tenant adds. Contribution margin is the net you keep on that request after paying its marginal cost, exactly like the net value of an API call after the compute it burned.

Fixed costs are your **baseline idle draw** — the cluster you pay for even at zero traffic. Contribution margin is measured *above* that baseline, the same way you'd measure the marginal cost of one more request rather than re-amortizing the whole datacenter into it.`,
        breaks: `A cost function is usually smooth; real variable costs are **step functions**. Support is "free" until one more customer forces a new hire — then marginal cost spikes for that unit and flattens again. And CM says nothing about whether you cover fixed costs: a 90% margin still goes bankrupt if volume never clears the baseline. CM is necessary, not sufficient.`,
      },
      workedExample: `**Meridian** sells CI insights at **$40 / seat / month**. Per active seat it pays:

- Infra (compute + storage): **$4**
- Support (amortized): **$3**
- Payment processing (~2.9% + fee): **$2**

Variable cost per unit = $4 + $3 + $2 = **$9**.

$$\\text{CM} = 40 - 9 = \\$31 \\quad\\quad \\text{CM \\%} = 31/40 = 78\\%$$

Meridian's founder salary ($6,000/mo) and base cluster ($800/mo) are **fixed** — they don't enter CM. They set the *volume* Meridian must clear to survive, which is the next lesson's problem, not this one's.`,
      branch: {
        scenario: `Meridian's founder wants to "be conservative" and folds their **$6,000/mo salary** into the per-customer variable cost by dividing it across the current 40 customers ($150/customer). With that, CM becomes $40 − $9 − $150 = **−$119**. They panic and conclude the business is doomed. What's the right call?`,
        choices: [
          {
            label: 'The founder is right — that salary is a real cost, so CM really is negative.',
            correct: false,
            consequence: `**Instructive miss.** The salary is real, but it is **fixed**, not variable — it does not change when Meridian adds the 41st customer. Dividing a fixed cost by current volume creates a phantom per-unit cost that *falls as you grow*, which is exactly backwards for decision-making. You'd reject profitable customers because of an accounting artifact.`,
          },
          {
            label: 'Keep salary out of CM; it belongs to the fixed-cost / break-even question instead.',
            correct: true,
            consequence: `**Correct.** CM = $31 is unchanged. The salary doesn't vanish — it defines the **break-even volume**: fixed costs $6,800 ÷ CM $31 ≈ **220 customers** to cover the baseline. That's a real, actionable target. Mixing the two buckets destroys that signal.`,
          },
          {
            label: 'Average all costs together always — the variable/fixed split is academic.',
            correct: false,
            consequence: `**Instructive miss.** The split is the entire point. Fully-averaged cost per unit changes every month with volume, so you can never tell whether *one more sale* helps. Keeping variable and fixed separate is what makes unit economics a decision tool instead of a lagging report.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Classify my costs (fixed vs variable)', kind: 'ask', question: 'Given my pricing and domain, list the likely variable costs vs fixed costs for my business, and flag any that are actually step costs.' },
        { label: 'Harder margin example in my domain', kind: 'harder', concept: 'contribution margin with mixed fixed/variable and step costs' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A product sells for $120 with variable cost $30. Fixed costs are $9,000/mo. What is the contribution margin per unit?',
          options: ['$90', '$-9,030', 'Depends on how many units you sell', '$120'],
          answer: 0,
          explain: 'CM = price − variable cost = 120 − 30 = **$90**. Fixed costs never enter CM; they set break-even volume ($9,000 / $90 = 100 units), not the per-unit margin.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR company (see your pricing in startup.json), list your variable costs per customer and compute your contribution margin. Name one cost you were tempted to call variable that is actually fixed.',
          rubric: 'A strong answer: (1) uses the learner\'s actual headline price from startup.json; (2) enumerates plausible per-unit variable costs (infra, support, fees); (3) computes CM = price − variable correctly; (4) correctly identifies a fixed cost (e.g. salary, base infra, tooling subscriptions) that should NOT be in CM and explains why.',
        },
      ],
      commitSummary: 'concept only — you build the persisted model in lesson 5.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '5.2',
      module: 5,
      title: 'CAC & LTV: acquisition is a cache',
      estMinutes: 16,
      prerequisites: ['5.1'],
      artifactSlot: null,
      concept: `Two numbers decide whether growth is an engine or a leak.

**Customer Acquisition Cost (CAC)** — what you pay to get one paying customer:

$$\\text{CAC} = \\frac{\\text{total acquisition spend}}{\\text{new customers acquired}}$$

**Lifetime Value (LTV)** — total contribution margin a customer returns before they churn:

$$\\text{LTV} = \\text{CM per period} \\times \\text{expected lifetime (periods)}$$

The decision metric is the **ratio** $\\text{LTV} : \\text{CAC}$. Rules of thumb:

- **< 1** — you lose money on every customer. Growth accelerates bankruptcy.
- **~3×** — healthy; each acquisition dollar returns about three.
- **> 5×** — often *under*-investing; you could likely spend more to grow faster.

And **payback period** = $\\text{CAC} / \\text{CM per period}$ — how long until a customer has repaid what you spent to acquire them. Payback matters for *cash*: a great LTV:CAC with a 20-month payback can still bankrupt you if you only have 12 months of runway.`,
      reframe: {
        analogy: `Acquisition is a **cache**. A new customer is a cold entry: paying CAC is the cost of the **cache miss** — the one-time price of loading them in. Every month they stay retained is a **cache hit**: you return contribution margin at ~zero acquisition cost. Retention is your **hit ratio**.

LTV:CAC is the condition that your cache *pays for itself*: the hits (accumulated CM) must exceed the miss cost (CAC) by a comfortable margin, or you're **thrashing** — paying to load customers who evict before they amortize. Payback period is simply **time-to-amortize the miss**. A business with a 0.8× ratio is a cache with a hit rate so low that every lookup costs more than it saves — and scaling it just runs more expensive lookups per second.`,
        breaks: `Cache lines are interchangeable; customers are **not** — LTV is heterogeneous, and a blended average hides that your enterprise tier subsidizes a money-losing free-adjacent tier. Eviction (churn) is **probabilistic**, not deterministic LRU. And unlike a hardware cache you can sometimes **re-warm an evicted line** (win-back campaigns), which no cache does. Treat the analogy as intuition for the *ratio condition*, not for customer behavior.`,
      },
      workedExample: `**Meridian** spends **$2,000/mo** on ads and content and acquires **8** new customers from it:

$$\\text{CAC} = 2000 / 8 = \\$250$$

From lesson 5.1, CM = **$31/mo**. Assume an expected lifetime of **≈ 13.6 months** (we *derive* this from Meridian's retention curve in the next lesson — take it on credit for now):

$$\\text{LTV} = 31 \\times 13.6 \\approx \\$422$$
$$\\text{LTV:CAC} = 422 / 250 \\approx \\mathbf{1.69\\times}$$
$$\\text{payback} = 250 / 31 \\approx \\mathbf{8.1\\ months}$$

Meridian is **positive but thin** — above 1×, so each customer eventually profits, but well below the 3× band. It's fragile: a small rise in CAC or a dip in retention pushes it toward burning. This is the number that will make or break the financial model you build in Module 9.`,
      branch: {
        scenario: `Meridian's ratio is a thin **1.69×**. The founder has two levers and time for only one this quarter: **(A)** cut CAC from $250 to $180 by dropping a paid channel and leaning on content, or **(B)** lift retention so expected lifetime goes from 13.6 → 18 months. Both are plausible. Which moves the ratio more?`,
        choices: [
          {
            label: 'A — cut CAC to $180.',
            correct: false,
            consequence: `New ratio = $422 / $180 ≈ **2.34×**. A real improvement, and it also shortens payback pressure. But compare with B before committing.`,
          },
          {
            label: 'B — lift lifetime to 18 months.',
            correct: true,
            consequence: `LTV becomes 31 × 18 = $558, ratio = 558 / 250 ≈ **2.23×** — *slightly less* than cutting CAC here. BUT retention also compounds into every future cohort and lowers churn-driven CAC pressure, while a cheaper channel often can't supply the same *volume*. The "right" answer is genuinely close — the lesson is that you must **compute both**, not argue from vibes. Under these specific numbers A edges it; change retention to 22 months and B wins. Unit economics is a calculator, not an opinion.`,
          },
          {
            label: 'Neither matters much — just raise price.',
            correct: false,
            consequence: `Price is a *third* lever and often the strongest (it lifts CM directly, improving both LTV and payback at once) — but it's not free: it can lower conversion and raise churn, changing CAC and lifetime simultaneously. That coupling is exactly why you model it (Module 6) rather than eyeball it. "Just raise price" skips the measurement this module is teaching you to demand.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Sanity-check my CAC assumptions', kind: 'ask', question: 'Given my domain, what acquisition costs do founders systematically forget when they compute CAC (e.g. fully-loaded, not just ad spend)? Apply it to my numbers.' },
        { label: 'Harder LTV:CAC example', kind: 'harder', concept: 'LTV:CAC with blended segments and payback-vs-runway tension' },
        { label: 'Critique my reasoning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Company X: CAC $600, CM $50/mo, expected lifetime 30 months. Which statement is true?',
          options: [
            'LTV:CAC = 2.5× and payback = 12 months',
            'LTV:CAC = 0.4× — it loses money per customer',
            'LTV:CAC = 2.5× and payback = 30 months',
            'You cannot compute LTV without knowing fixed costs',
          ],
          answer: 0,
          explain: 'LTV = 50 × 30 = $1,500; ratio = 1500/600 = **2.5×**. Payback = CAC/CM = 600/50 = **12 months**. Fixed costs are irrelevant to LTV:CAC — that\'s the point of unit economics.',
        },
        {
          kind: 'mcq',
          prompt: 'A founder brags about a 9× LTV:CAC ratio. The most likely diagnosis is:',
          options: [
            'The business is perfectly healthy, nothing to change',
            'They are probably under-investing in growth and leaving demand on the table',
            'Their contribution margin must be negative',
            'Payback period must be under one month',
          ],
          answer: 1,
          explain: 'A very high ratio usually signals **under-investment** — they could spend more to acquire faster and still clear the 3–5× band. It does not by itself say anything about payback or margin sign.',
        },
      ],
      commitSummary: 'concept only — the numbers get persisted in lesson 5.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '5.3',
      module: 5,
      title: 'Retention as a decay curve',
      estMinutes: 15,
      prerequisites: ['5.2'],
      artifactSlot: null,
      concept: `LTV needs an **expected lifetime**, and that comes from the **retention curve**: the fraction of a cohort still paying at month $t$.

The clean way to get expected lifetime is the **area under the retention curve**:

$$\\text{expected lifetime} = \\int_0^{\\infty} R(t)\\,dt \\approx \\sum \\text{(trapezoids over your measured points)}$$

If churn were a constant $c$ per month, retention would decay exponentially, $R(t) = (1-c)^t$, and expected lifetime collapses to the famous shortcut:

$$\\text{lifetime} \\approx \\frac{1}{c}$$

So 5% monthly churn ⇒ ~20-month lifetime. But that shortcut assumes *constant* churn, which is almost never true.`,
      reframe: {
        analogy: `A retention curve is a **survival curve**, and expected lifetime is **MTTF** — mean time to failure. You already integrate the survival function to get expected time-to-live from a decay process; a customer base is the same math with "failure" = churn. Constant hazard ⇒ exponential decay ⇒ $\\text{lifetime} = 1/\\text{churn}$, exactly like $\\text{MTTF} = 1/\\lambda$ for a constant failure rate.`,
        breaks: `Real retention is **not** a constant-hazard process. Two deviations dominate: an **onboarding cliff** (early hazard is much higher — users who never activate churn fast), and a **loyal core** where the curve *flattens* toward an asymptote instead of decaying to zero. Both mean the $1/c$ shortcut is wrong — it typically *underestimates* lifetime for the survivors while *overestimating* it across the cliff. When the curve flattens, always integrate the real points; don't fit a single exponential.`,
      },
      workedExample: `**Meridian's** measured retention (one cohort):

| month | % retained |
|---|---|
| 0 | 100 |
| 1 | 88 |
| 3 | 74 |
| 6 | 63 |
| 12 | 52 |
| 24 | 41 |

Integrate trapezoidally (width × average height, height as a fraction):

- 0→1: $1 \\times 0.94 = 0.94$
- 1→3: $2 \\times 0.81 = 1.62$
- 3→6: $3 \\times 0.685 = 2.055$
- 6→12: $6 \\times 0.575 = 3.45$
- 12→24: $12 \\times 0.465 = 5.58$

Sum ≈ **13.6 months** — this is the lifetime we borrowed in lesson 5.2, now derived. Note the curve is still at 41% at month 24 and clearly **flattening**, so 13.6 is a *lower bound* (we truncated the tail). A naive "1/churn" using month-1 churn (12%) would say ~8 months — badly low, because it extrapolates the onboarding cliff across the whole life. Integrating the real curve is why Meridian's LTV is $422, not $250.`,
      branch: {
        scenario: `Two SaaS products show these month-12 numbers. Product **P** retains 30% but its curve is still dropping ~3%/month. Product **Q** retains 45% and its curve has been flat at 45% for the last four months. Which has the better *expected lifetime* outlook, and why?`,
        choices: [
          {
            label: 'P — 30% but you can win the churning users back later.',
            correct: false,
            consequence: `**Instructive miss.** A still-falling curve means the hazard hasn't stabilized — P has no proven loyal core yet, and its integral tail keeps shrinking. Win-back is a separate motion you shouldn't assume into the base lifetime.`,
          },
          {
            label: 'Q — a flattening curve implies a durable loyal core, so the tail integral is large.',
            correct: true,
            consequence: `**Correct.** A curve that **flattens** signals a low-hazard survivor segment: those users have found durable value and will contribute for a long time, so the area under Q's tail is large and predictable. Q's expected lifetime can exceed P's by *years* even though both looked similar at a single snapshot. The shape matters more than any single month's number.`,
          },
          {
            label: 'Impossible to say from retention alone — you need revenue.',
            correct: false,
            consequence: `**Partly fair but overcautious.** Revenue/expansion refines LTV, but the *shape* of the retention curve alone already tells you which product has a durable core versus a leaking one. That shape is exactly what expected-lifetime integration captures, and it's decision-relevant on its own.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'How do I even measure a retention curve?', kind: 'ask', question: 'I have no users yet. How do I estimate a defensible retention curve for my domain, and what proxy data can I use before I have cohorts?' },
        { label: 'Harder retention example', kind: 'harder', concept: 'expected lifetime from a flattening retention curve vs the 1/churn shortcut' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A product has constant 4% monthly churn. The quick estimate of expected customer lifetime is:',
          options: ['4 months', '25 months', '96 months', 'Cannot be estimated without the full curve'],
          answer: 1,
          explain: 'Constant hazard ⇒ lifetime ≈ 1/churn = 1/0.04 = **25 months**. This shortcut is only valid *because* churn is stated as constant; for a real (non-constant) curve you must integrate.',
        },
        {
          kind: 'free',
          prompt: 'Sketch (in words or numbers) a plausible retention curve for YOUR product and estimate expected lifetime by summing trapezoids. Is your curve more likely to have an onboarding cliff, a flattening core, or both?',
          rubric: 'Strong answer: (1) gives concrete (month, %) points; (2) computes an area-under-curve estimate roughly correctly; (3) reasons about curve SHAPE (cliff vs flattening core) for their specific product/domain rather than assuming constant churn; (4) connects the lifetime back to their LTV.',
        },
      ],
      commitSummary: 'concept only — assemble and persist everything next.',
    },

    // -----------------------------------------------------------------------
    {
      id: '5.4',
      module: 5,
      title: 'Assemble your model & the scaling trap',
      estMinutes: 20,
      prerequisites: ['5.1', '5.2', '5.3'],
      artifactSlot: 'unitEconomics',
      concept: `Now wire the pieces into one model and confront the trap that kills more startups than any competitor.

**The scaling trap:** growth is a **multiplier** on your per-unit economics, not a fix for them. If each customer is unprofitable (ratio < 1 or payback ≫ runway), acquiring more customers *faster* burns cash *faster*. Founders reach for growth precisely when the model is broken — "we'll grow into it" — and accelerate toward the wall.

The discipline: **prove positive unit economics first**, then scale. Concretely, scale when both hold:

1. $\\text{LTV:CAC} \\gtrsim 3$ (durable margin over acquisition cost), and
2. $\\text{payback} < \\text{runway}$ (you survive long enough to be repaid).

Meridian at **1.69×** is not there yet. The right move is to fix the ratio (retention, CAC, or price — Module 6) *before* pouring money into acquisition.`,
      reframe: {
        analogy: `Scaling is a **gain stage**. It multiplies the *sign* of your per-unit economics. Feed it positive unit economics and you amplify profit; feed it negative unit economics and you've built a **positive feedback loop toward insolvency** — the system runs away in the wrong direction, and more input power just gets there sooner. "Grow into it" is hoping a high-gain amplifier will fix a signal with the wrong polarity. It won't; it saturates at bankruptcy.`,
        breaks: `The per-unit function isn't perfectly static under scale. **Economies of scale** can bend variable cost *down* as volume grows (cheaper infra tiers, negotiated fees), and fixed costs get absorbed across more units, improving total margin. So a business slightly underwater per-unit can *sometimes* legitimately grow into positive economics — but only if you can **name the specific mechanism** and quantify it. "Scale will fix it" without a named cost curve is wishful thinking; "our infra cost/tenant drops 40% past 5k tenants, here's the contract" is a plan.`,
      },
      workedExample: `**Meridian**, all numbers now derived: CM **$31**, CAC **$250**, lifetime **13.6 mo**, LTV **$422**, ratio **1.69×**, payback **8.1 mo**.

Suppose Meridian takes $150k to 10× acquisition (80 new customers/month instead of 8). Monthly acquisition spend jumps to **$20,000**. But CM only arrives *over time* along the retention curve. In month 1 the 80 new customers contribute ≈ 80 × $31 = **$2,480** while acquisition cost that month is **$20,000** — a **−$17,520** monthly gap that only closes ~8 months later *per cohort*, and only if retention holds under 10× faster, lower-intent growth (it usually degrades). At 1.69× the trap is real: scaling multiplies an $8-month cash hole across every cohort at once. Fix the ratio to ~3×+ first, then the same $150k builds a profit engine instead of a burn engine.`,
      branch: {
        scenario: `Your own company's ratio (fresh from the calculator you're about to fill) is **0.8×** — underwater per customer. A VC offers a $2M round explicitly to "grow aggressively and capture the market before competitors." Runway with the raise: 18 months. Payback at current numbers: 26 months. What do you do?`,
        choices: [
          {
            label: 'Take the money and scale hard — market share now, economics later.',
            correct: false,
            consequence: `**The classic fatal miss.** At 0.8× every acquired customer *destroys* value, and payback (26mo) exceeds runway (18mo), so cohorts never repay before the cash runs out. Scaling a negative-sign signal through a gain stage just reaches insolvency faster — now with $2M of other people's money and a board expecting the growth that's killing you.`,
          },
          {
            label: 'Fix unit economics to ≥ 3× and payback < runway first; raise (or skip raising) to scale a working model.',
            correct: true,
            consequence: `**Correct.** The sequence is non-negotiable: **prove the unit works, then multiply it.** Spend the current runway lifting retention/price/CAC until the ratio clears ~3× and payback drops under your runway. *Then* capital becomes fuel instead of accelerant. Many great companies even find they need far less (or no) outside money once the unit is healthy — the strongest negotiating position there is.`,
          },
          {
            label: 'Take the money but sit on it and don\'t scale until economics work.',
            correct: false,
            consequence: `**Half-right, real hazard.** Fixing economics first is correct, but raising $2M against a growth thesis you then *don't* execute creates a board mandate mismatch — you'll be pushed to deploy into growth before the unit is fixed, recreating option A under pressure. Raise against the plan you'll actually run, and raise *after* the unit works when you can.`,
          },
        ],
      },
      artifact: {
        componentKey: 'unit-economics',
        prompt: `Build your real model. Adjust the inputs to your company's actual (or best-estimate) numbers and read the derived metrics live. **Save to startup.json** to commit it — Module 9's financial model will read exactly these fields, so the numbers you set here propagate forward. Watch the **LTV:CAC** verdict: your job this module is to know your ratio and your payback cold.`,
      },
      tutorHooks: [
        { label: 'Is my model internally consistent?', kind: 'critique' },
        { label: 'What lever should I pull first?', kind: 'ask', question: 'Given my saved unit economics, which single lever (price, variable cost, CAC, or retention) most improves my LTV:CAC and payback, and by roughly how much? Show the arithmetic on my numbers.' },
        { label: 'Stress-test my "grow into it" case', kind: 'ask', question: 'I want to scale. Given my numbers, name the specific cost mechanism that would have to hold for scaling to fix (not worsen) my economics, and tell me if my case is real or wishful.' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A company has LTV:CAC of 0.9× and payback of 22 months on 14 months of runway. The correct move is to:',
          options: [
            'Scale acquisition to reach profitability through volume',
            'Fix unit economics before scaling — volume amplifies the loss',
            'Raise a large round to extend runway and scale anyway',
            'Cut price to win more customers faster',
          ],
          answer: 1,
          explain: 'Below 1× with payback exceeding runway, scaling multiplies the loss and cohorts never repay in time. Fix the ratio (retention/CAC/price) first. Cutting price usually makes CM — and thus the ratio — *worse*.',
        },
        {
          kind: 'free',
          prompt: 'State your saved LTV:CAC ratio and payback period. Are you clear to scale by the two-condition test? If not, name the single lever you will pull first and your target number for it.',
          rubric: 'Strong answer: (1) cites the learner\'s actual saved ratio and payback from startup.unitEconomics; (2) correctly applies the two conditions (ratio ≳ 3 AND payback < runway); (3) if not clear to scale, picks ONE concrete lever (price, variable cost, CAC, retention) with a specific target and a rough recomputed ratio; (4) avoids the "grow into it" fallacy unless it names a real cost-curve mechanism.',
        },
      ],
      commitSummary: 'your unit economics — CM, CAC, LTV, payback, and LTV:CAC ratio — written to **startup.unitEconomics**, later read by the Module 9 financial model.',
    },
  ],
}
