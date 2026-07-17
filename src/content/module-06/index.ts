import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 6 — Pricing & packaging
//
// The lever with the highest ROI a founder controls. Price feeds straight
// back into Module 5's unit economics: raising price lifts contribution
// margin dollar-for-dollar, so this module's final artifact writes
// startup.pricing, which M5 (and later M9) reads. The four lessons move from
// *why* price against value, to *estimating* willingness-to-pay, to
// *packaging* it into tiers, to *choosing the metric* and committing a number.
// ===========================================================================

export const module6: Module = {
  id: 6,
  title: 'Pricing & packaging',
  goal: 'Set a price that captures value and matches how the customer buys.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '6.1',
      module: 6,
      title: 'Pricing as value capture, not cost-plus',
      estMinutes: 14,
      prerequisites: ['5.1'],
      artifactSlot: null,
      concept: `Most engineers price the way they'd size a server: add up the costs, staple on a margin, ship it. That's **cost-plus** pricing, and it answers the wrong question. Cost tells you the *floor* below which you lose money on every sale. It says nothing about the *ceiling* — what the customer will actually pay — and the gap between floor and ceiling is where all the profit lives.

The alternative is **value-based** pricing: set price against the value the customer receives, not the cost you incurred to deliver it. If your CI tool saves a 6-engineer team ten hours a week of debugging flaky pipelines, the value created is measured in engineer-hours saved, and it has nothing to do with your $9 of infra cost per seat.

Why this matters more than cost work: **a 1% improvement in price usually beats a 1% cut in variable cost, because price improvement flows entirely into contribution margin.** From Module 5, Meridian's CM is $40 − $9 = $31. A 1% price rise (+$0.40) adds $0.40 straight to CM. A 1% variable-cost cut (−$0.09) adds only $0.09. The price lever is roughly $0.40/$0.09 ≈ **4.4× more powerful per point** here — and that ratio grows the higher your margin already is.

Cost-plus is a **local minimum**: safe, defensible, and quietly leaving most of your value on the table.`,
      reframe: {
        analogy: `Cost-plus pricing is **premature optimization keyed off the wrong metric**. You've profiled the code, found the compile cost, and tuned against *that* — but the number your users actually feel is end-to-end latency under load, a completely different quantity. Optimizing cost-plus is like shaving milliseconds off a function nobody's latency budget depends on: locally rigorous, globally irrelevant.

Value-based pricing is **profiling against the metric that matters** — the customer's realized value — and only then deciding where to set the dial. Cost is a *constraint* in the optimizer (price must clear it), not the *objective function*.`,
        breaks: `The analogy oversells precision. You can measure latency to the microsecond; you cannot measure a customer's value to the dollar — WTP is a fuzzy distribution across heterogeneous buyers, not a profiler reading (that's lesson 6.2's whole problem). And unlike a latency budget, value is partly *constructed* by how you frame and package the offer — anchoring, tiers, and the price metric itself shift perceived value (lessons 6.3 and 6.4). So "profile the real metric" is the right instinct, but the metric here is soft, movable, and buyer-specific in a way runtime latency never is.`,
      },
      workedExample: `**Meridian** currently charges **$40 / seat / month**, a number the founder originally set as "infra cost $9, round up to a nice figure, call it 4×." Pure cost-plus.

Now price against value. Meridian's CI insights cut a typical 6-engineer team's time chasing flaky-pipeline failures by ~8 hours/month. Loaded engineer cost ≈ $75/hour, so the tool creates about $600/month of value for that team, or **$100/seat/month** of value delivered.

Meridian captures $40 of a $100 value pool — a **40% value-capture ratio**. That's not greedy; it's timid. Compare the two levers on CM (currently $31):

- Cut infra 1% ($9 → $8.91): CM rises to $31.09. Gain: **+$0.09**.
- Raise price 1% ($40 → $40.40): CM rises to $31.40. Gain: **+$0.40**.

Even a modest move toward value — say $48/seat, still under half the value created — lifts CM to $39, a **26% jump in contribution margin** from one pricing decision, no infra work at all. That $39 CM flows directly into the Module 5 model: LTV and the LTV:CAC ratio both rise with it.`,
      branch: {
        scenario: `Meridian's founder finally accepts that $40 is under-priced. A cost-focused advisor pushes back: "Before you touch price, spend the quarter renegotiating your cloud contract — you can get variable cost from $9 down to $7." The founder has one quarter and one focus. Value analysis suggests price could move from $40 to $52 with minimal churn. Which lever?`,
        choices: [
          {
            label: 'Chase the cost cut to $7 — a guaranteed $2/seat is money in the bank.',
            correct: false,
            consequence: `**Instructive miss.** The $2 cost cut lifts CM from $31 to $33 (+6.5%). Real, but small. The price move from $40 to $52 lifts CM from $31 to $43 (+39%) — six times the impact — and doesn't require a vendor's cooperation. "Guaranteed" is doing a lot of work here: you're guaranteeing the *smaller* number. Cost work is worth doing, but not *instead of* the far larger price lever when you can only pick one.`,
          },
          {
            label: 'Move price toward value ($40 → $52), validating churn risk as you go.',
            correct: true,
            consequence: `**Correct.** Price flows entirely into CM: $40 − $9 = $31 becomes $52 − $9 = $43, a **+39%** contribution-margin gain versus +6.5% from the cost cut. Because you're still capturing barely over half the ~$100 value created, churn risk is modest and testable. The cost renegotiation isn't wrong — it's just the smaller, slower, less-controllable lever. Do it later; do price now.`,
          },
          {
            label: 'Do neither yet — you can\'t justify a price change without a full WTP study first.',
            correct: false,
            consequence: `**Over-cautious, and it has a real cost.** Rigor on willingness-to-pay is exactly lesson 6.2, and you should estimate it. But "capturing 40% of clearly-created value" is already strong evidence you're under-priced; waiting a full quarter to touch an obviously-timid price forgoes CM you'll never get back. Estimate WTP *and* move — the two aren't sequential gates.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Estimate the value I create', kind: 'ask', question: 'For my product and customer, help me estimate the dollar value I create per unit (time saved, revenue enabled, cost avoided) and compare it to my current price to get a value-capture ratio.' },
        { label: 'Price-vs-cost lever math on my numbers', kind: 'harder', concept: 'why a 1% price change beats a 1% cost change, computed on the learner\'s own margin' },
        { label: 'Critique my current pricing logic', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A product sells for $200 with variable cost $50 (CM = $150). Which single move adds the most to contribution margin?',
          options: [
            'A 2% cut in variable cost',
            'A 2% increase in price',
            'They add exactly the same amount',
            'Cannot tell without knowing fixed costs',
          ],
          answer: 1,
          explain: 'A 2% price rise adds 2% of $200 = **$4** straight to CM. A 2% cost cut adds only 2% of $50 = **$1**. Price beats cost by the ratio of price to cost ($200/$50 = 4×). Fixed costs are irrelevant to CM — that\'s the Module 5 point.',
        },
        {
          kind: 'mcq',
          prompt: 'Cost-plus pricing is best described as:',
          options: [
            'The most profitable pricing method because it guarantees a margin',
            'A safe local minimum that anchors on cost and ignores customer value',
            'Illegal in most B2B markets',
            'Identical to value-based pricing when margins are high',
          ],
          answer: 1,
          explain: 'Cost-plus guarantees you clear the floor but blinds you to the ceiling (WTP). It\'s a defensible **local minimum** — safe, and usually leaving most of the value gap uncaptured.',
        },
        {
          kind: 'free',
          prompt: 'Estimate the dollar value YOUR product creates per unit for a typical customer (time saved, cost avoided, or revenue enabled). Divide your current or intended price by that value to get a value-capture ratio, and argue whether you are over- or under-priced.',
          rubric: 'Strong answer: (1) quantifies value created with a concrete mechanism (hours saved x loaded cost, revenue enabled, cost avoided) rather than hand-waving; (2) computes a value-capture ratio = price / value; (3) interprets it (well under ~30-50% usually signals under-pricing; near or above 100% signals the offer won\'t clear); (4) connects the pricing conclusion back to contribution margin from Module 5.',
        },
      ],
      commitSummary: 'concept only — you commit your actual price in lesson 6.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '6.2',
      module: 6,
      title: 'Willingness-to-pay & Van Westendorp as parameter estimation',
      estMinutes: 16,
      prerequisites: ['6.1'],
      artifactSlot: null,
      concept: `Value-based pricing (6.1) needs a number: what *will* the customer pay? That number is **willingness-to-pay (WTP)**, and the key mental shift is that WTP is not a scalar — it's a **distribution** over your prospects. Some buyers would pay $80/seat; some would balk at $25. The demand curve is just this distribution read as "fraction of buyers whose WTP is at least $p$."

You can't observe WTP directly (asking "what would you pay?" invites lies in both directions), so you **estimate** it from noisy signals. The most practical survey instrument is the **Van Westendorp Price Sensitivity Meter**, which asks four deliberately indirect questions about a described product:

1. At what price is it **too cheap** (you'd doubt its quality)?
2. At what price is it a **bargain** (good value)?
3. At what price is it getting **expensive** (but you'd still consider it)?
4. At what price is it **too expensive** (you'd never buy)?

Each question yields a cumulative curve across respondents. Their **intersections** bound a sensible price range: the crossing of "too cheap" and "too expensive" gives an *Optimal Price Point*, and "bargain" × "expensive" bounds a *Range of Acceptable Prices*. Van Westendorp doesn't hand you a profit-maximizing price — it hands you **calibrated bounds** and flags where quality-perception (too-cheap) and budget (too-expensive) constraints bite.`,
      reframe: {
        analogy: `WTP estimation is **parameter estimation from noisy samples**, exactly like fitting a model. The true demand curve is a latent function you can't observe; each survey respondent is a **noisy sample** from the underlying WTP distribution. The four Van Westendorp questions are four different **sampling probes** of the same curve — like measuring a system's response at four frequencies to reconstruct its transfer function. Cross the reconstructed curves and you get a **confidence interval on price**, not a point estimate. You're doing the same thing you do when you fit parameters to telemetry: infer the hidden distribution from observable, noisy readings.`,
        breaks: `The sampling isn't clean, and the analogy hides three biases a good estimator would never tolerate. First, **stated preference is not revealed preference** — what people say in a survey diverges from what they pay with a real card, usually optimistically. Second, the sample is rarely IID from your buyer population; survey respondents self-select and may not be the economic buyer at all. Third — and unlike honest telemetry — the *act of asking frames the answer*: describe the product as premium and every reported price shifts up. So treat Van Westendorp as a **weakly-informative prior**, not a maximum-likelihood fit. The only unbiased estimator of WTP is a **live price test with real money on the line**.`,
      },
      workedExample: `**Meridian** surveys 60 engineering-team leads with the four questions, describing the product honestly. Aggregating the cumulative curves (price per seat/month):

| Curve | Crosses at |
|---|---|
| "too cheap" × "too expensive" (Optimal Price Point) | **~$46** |
| "bargain" × "expensive" (acceptable range) | **$34 – $58** |
| Point of Marginal Cheapness (too-cheap = not-cheap) | **$28** |
| Point of Marginal Expensiveness (expensive = not-expensive) | **$55** |

Read it like a confidence interval, not a verdict. The data says: below ~$28, a meaningful slice of buyers start to **distrust the quality** ("why is a CI tool this cheap?") — so Meridian's old cost-plus $40 was not just leaving margin behind, it was arguably *signalling cheapness*. Above ~$55, budget resistance climbs steeply. The acceptable band centres around **$46**, comfortably above today's $40.

Crucially, this is a *prior*, not proof. Meridian doesn't jump to $46 on survey data alone — it runs a live test: offer new cohorts $46 and $52, watch actual conversion and CM. The survey **narrowed the search space** from "$25–$80, who knows" to "test around $46–$55," which is exactly what a good estimator is for. Landing near $46 would lift CM from $31 to $37 (+19%), flowing straight into the Module 5 ratio.`,
      branch: {
        scenario: `Meridian's Van Westendorp study points to an Optimal Price Point near $46. The founder has budget for exactly one validation step before repricing. Options: (A) run a larger, cleaner survey (n = 400 instead of 60) to tighten the estimate; (B) A/B a real $46 price on live sign-up traffic for six weeks; (C) interview 10 happy customers about whether $46 "feels fair." Which is the strongest estimator of true WTP?`,
        choices: [
          {
            label: 'A — a bigger survey shrinks the error bars and gives statistical confidence.',
            correct: false,
            consequence: `**Instructive miss.** A larger n reduces *sampling* noise but does nothing about the dominant error: **stated-vs-revealed-preference bias**. You'd get a tighter estimate of what people *say*, which is a biased estimator of what they *pay*. More samples from a biased instrument converges confidently on the wrong number.`,
          },
          {
            label: 'B — A/B test the real $46 price on live traffic and measure actual conversion.',
            correct: true,
            consequence: `**Correct.** A live price test is **revealed preference** — real buyers, real cards, real money. It's the only estimator that eliminates stated-preference bias, and it measures the thing you actually care about (conversion × CM), not a proxy. The survey did its job by narrowing you to "$46-ish"; the A/B test is the maximum-likelihood fit with money on the line. Watch CM, not just conversion: a small conversion dip at a higher price often still raises total contribution.`,
          },
          {
            label: 'C — ask loyal customers if $46 feels fair; they know the product best.',
            correct: false,
            consequence: `**Instructive miss, and doubly biased.** Existing happy customers are the *most* selected sample possible — they already chose to buy, so their WTP skews high and unrepresentative of the marginal prospect who decides your conversion rate. And it's still stated preference. You'd learn how your fans feel, not what the market will bear.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Design a WTP test for my product', kind: 'ask', question: 'Help me design a willingness-to-pay estimation for my product: whether to use Van Westendorp, a live price A/B test, or both, and what sample and biases to watch for in my specific market.' },
        { label: 'Harder: interpret Van Westendorp curves', kind: 'harder', concept: 'reading Optimal Price Point and Range of Acceptable Prices from four cumulative curves, including the too-cheap quality-signal crossing' },
        { label: 'Critique my WTP reasoning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'The single most important reason to prefer a live price A/B test over a Van Westendorp survey is that the test:',
          options: [
            'Has a larger sample size',
            'Measures revealed preference (real money) instead of stated preference',
            'Is cheaper to run than a survey',
            'Eliminates the need to estimate WTP at all',
          ],
          answer: 1,
          explain: 'Surveys capture **stated** preference — what people say — which is systematically biased. A live test captures **revealed** preference: what real buyers actually pay. Sample size doesn\'t fix a biased instrument.',
        },
        {
          kind: 'mcq',
          prompt: 'In a Van Westendorp study, some respondents call a price "too cheap." This primarily signals:',
          options: [
            'The price is objectively below your variable cost',
            'A quality-perception floor — too low a price makes buyers distrust the product',
            'A data error; nobody thinks low prices are bad',
            'You should always price at exactly that point',
          ],
          answer: 1,
          explain: 'The "too cheap" curve captures the **quality-signalling floor**: below it, buyers infer the product must be inferior. It\'s a real constraint, unrelated to your cost, and it warns against under-pricing a premium tool.',
        },
        {
          kind: 'free',
          prompt: 'Describe how you would estimate willingness-to-pay for YOUR product. Frame WTP as a distribution, name whether you would use Van Westendorp, a live price test, or both, and identify the single biggest bias you would need to defend against.',
          rubric: 'Strong answer: (1) treats WTP as a distribution across buyers, not one number; (2) proposes a concrete estimation method appropriate to the learner\'s stage (survey for a prior, live A/B test for revealed preference); (3) names a specific bias (stated-vs-revealed, self-selected sample, framing effect) and how to mitigate it; (4) connects the resulting price estimate back to contribution margin / the value-capture idea from 6.1.',
        },
      ],
      commitSummary: 'concept only — your WTP estimate informs the price you commit in lesson 6.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '6.3',
      module: 6,
      title: 'Packaging & tiers as feature-flag configuration',
      estMinutes: 15,
      prerequisites: ['6.2'],
      artifactSlot: null,
      concept: `A WTP distribution (6.2) has a problem: a **single** price can only ever capture one slice of it. Charge $46 and you lose everyone whose WTP is $30, while under-charging everyone whose WTP is $90. **Packaging** — bundling features into tiers at different prices — lets one product serve multiple points on the WTP curve at once. This is **price discrimination** done legitimately, through differentiated offers rather than charging different people different prices for the identical thing.

The dominant pattern is **good-better-best**: three tiers that let buyers self-select by need and budget. Three is not arbitrary — it exploits the **compromise effect** (buyers gravitate to the middle option) and gives you an anchor (top tier) and a floor (entry tier) around the tier you actually want most people to choose.

The craft is **fencing**: deciding which features gate which tier. A good fence is *value-aligned* — the features a high-WTP segment needs most (SSO, audit logs, priority support, higher usage limits, admin controls) sit in the upper tiers, so buyers sort themselves by willingness-to-pay without feeling cheated. A bad fence gates something cheap-to-serve but universally needed (basic API access, a second user), which just annoys everyone and drives them to competitors.

Done well, tiering **lifts blended contribution margin** by capturing high-WTP buyers at a premium while still converting price-sensitive ones — without lowering the price for anyone who'd have paid more.`,
      reframe: {
        analogy: `Tiers are a **feature-flag / permissions matrix**, and you've already built this system. Each account carries an entitlement set; each feature checks a flag; the plan is just a named bundle of flags — Free = { core: true, sso: false, audit: false }, Enterprise = { core: true, sso: true, audit: true }. "Fencing a feature" is deciding which flag a given plan grants. You're not building three products; you're building **one codebase with one entitlement check per gated capability**, exactly like role-based access control where the role is the plan tier. Good-better-best is a three-role RBAC table.`,
        breaks: `Feature flags are internal and frictionless to flip; **pricing fences are read by customers and carry emotional weight**. Flip a flag off in code and nothing objects; fence a feature customers consider basic (a second seat, CSV export) and you generate resentment, support tickets, and churn — the "permission denied" here has a human on the other side who feels nickel-and-dimed. Second break: flags are usually independent booleans, but tier *value* is **non-linear and bundled** — buyers evaluate the whole package's story, not the flag set, so a coherent narrative ("Team," "Business," "Enterprise") matters more than the exact feature count. Third: you can toggle a flag anytime, but **re-fencing a shipped plan is a migration** — existing customers are grandfathered, contracts bind, and moving a feature between tiers can breach expectations. Entitlement logic is the easy part; the fence is a *market* decision, not a config change.`,
      },
      workedExample: `**Meridian** replaces its single $40/seat plan with good-better-best, informed by the 6.2 WTP band ($28–$58) and the ~$46 optimal point:

| Tier | Price/seat/mo | Fenced features | Target segment |
|---|---|---|---|
| **Team** | $29 | Core CI insights, 3 repos, community support | Solo devs / tiny teams, low WTP |
| **Business** | $49 | Everything in Team + unlimited repos, SSO, priority support | The 6-eng team Meridian models — the target |
| **Enterprise** | $89 | Everything + audit logs, SLA, dedicated success manager | High-WTP orgs with compliance needs |

The fences are value-aligned: **SSO and audit logs** cost Meridian almost nothing to serve but are exactly what larger, higher-WTP buyers must have — so those buyers sort themselves *up* into Business and Enterprise voluntarily.

Effect on unit economics. Suppose the customer mix lands 25% Team / 55% Business / 20% Enterprise. Blended price = $0.25×29 + $0.55×49 + $0.20×89 = $7.25 + $26.95 + $17.80 = **$52/seat**. At the same $9 variable cost, blended CM = **$43** — up from $31 under the flat $40 plan, a **39% lift**, with the price-sensitive Team tier still converting buyers who'd have bounced at $40. The middle tier (the compromise-effect winner) is deliberately set at the ~$46-ish value point, nudged to $49 for the psychological reasons in lesson 6.4.`,
      branch: {
        scenario: `Meridian is fencing its three tiers. One decision is contentious: **SSO (single sign-on)**. It's cheap to run and every serious buyer expects it. Marketing wants SSO in the entry $29 Team tier "so nobody feels nickel-and-dimed." Sales wants it fenced into Business ($49) because "that's what closes enterprise." Where should SSO live?`,
        choices: [
          {
            label: 'Team ($29) — SSO is cheap to serve and gating it feels petty.',
            correct: false,
            consequence: `**Instructive miss.** "Cheap to serve" is the wrong test for a fence — *value alignment* is. SSO is a near-perfect fence precisely because it's a **must-have for high-WTP buyers and irrelevant to low-WTP solo devs**. Putting it in the $29 tier throws away your cleanest self-selection signal: you'd let a compliance-driven enterprise buy the cheapest plan, capturing a fraction of their willingness-to-pay. Fence on *what segments value*, not on what costs you.`,
          },
          {
            label: 'Business ($49) — SSO is a value-aligned fence that sorts high-WTP buyers upward.',
            correct: true,
            consequence: `**Correct.** SSO is the textbook fence: negligible marginal cost, but a hard requirement for exactly the larger, higher-WTP organizations you want in Business and Enterprise. Gating it there makes those buyers **self-select up** without resentment — they genuinely need it and expect to pay for the tier that has it. Meanwhile solo devs on Team don't miss what they'd never use. The fence lifts blended CM by capturing more of the high-WTP segment's value.`,
          },
          {
            label: 'Sell SSO as a standalone $10 add-on available on every tier.',
            correct: false,
            consequence: `**Half-clever, but it leaks value.** A flat add-on prices SSO the same for a solo dev and a 500-seat enterprise, ignoring that its *value* is wildly different across segments — the whole point of tiering. It also clutters the good-better-best story with à la carte decisions, weakening the compromise effect that steers buyers to your target middle tier. Bundle SSO into the tier whose segment values it; reserve add-ons for genuinely optional, usage-varying extras.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Design good-better-best for my product', kind: 'ask', question: 'Help me design three good-better-best tiers for my product: which features to fence into each, which segment each targets, and where to set the middle (target) tier relative to my WTP estimate.' },
        { label: 'Which features make good fences?', kind: 'ask', question: 'For my product, which specific features are value-aligned fences (must-haves for high-WTP buyers, cheap to serve) versus bad fences that would just annoy everyone?' },
        { label: 'Harder: blended CM across a tier mix', kind: 'harder', concept: 'computing blended price and contribution margin across a good-better-best tier mix and comparing it to a single flat price' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'The primary economic reason to offer good-better-best tiers instead of one price is to:',
          options: [
            'Reduce engineering cost by shipping fewer features',
            'Capture more of the WTP distribution by letting buyers self-select',
            'Comply with pricing regulations',
            'Guarantee every customer pays the same amount',
          ],
          answer: 1,
          explain: 'A single price captures only one slice of the WTP distribution. Tiers let high-WTP buyers pay more and low-WTP buyers still convert — capturing more of the curve via self-selection, which lifts blended contribution margin.',
        },
        {
          kind: 'mcq',
          prompt: 'Which is the best example of a value-aligned fence for a B2B dev tool?',
          options: [
            'Gating basic CSV export (which everyone needs) behind the top tier',
            'Gating SSO and audit logs (must-haves for large, high-WTP orgs) into upper tiers',
            'Charging extra for the login page',
            'Removing a feature from all tiers to cut costs',
          ],
          answer: 1,
          explain: 'A good fence gates features a **high-WTP segment specifically needs** (SSO, audit logs, SLAs), so those buyers self-select upward. Fencing something universally needed (CSV export) just annoys everyone and drives churn.',
        },
        {
          kind: 'free',
          prompt: 'Sketch good-better-best tiers for YOUR product: name each tier, its price, and the key feature(s) you would fence into it. Justify your fences by which segment values them, and estimate blended contribution margin across a plausible customer mix.',
          rubric: 'Strong answer: (1) defines three coherent tiers with prices tied to the learner\'s WTP estimate from 6.2; (2) fences features by VALUE alignment (must-haves for high-WTP segments in upper tiers), not by what is cheap to serve; (3) names the target/middle tier and reasons about the compromise effect; (4) computes a blended price and CM across a stated mix and compares it to a single flat price.',
        },
      ],
      commitSummary: 'concept only — you commit a single headline price and metric in lesson 6.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '6.4',
      module: 6,
      title: 'Price metric selection & psychology',
      estMinutes: 18,
      prerequisites: ['6.1', '6.2', '6.3'],
      artifactSlot: 'pricing',
      concept: `You know *how much* to charge (6.1–6.2) and *how to package* it (6.3). The last decision is the **price metric**: the *unit* you bill on. This is often more consequential than the number itself, because the metric decides whether your revenue **scales with the value the customer gets**.

Three archetypes:

- **Per-seat** — bill per user. Simple, predictable, easy to forecast. Breaks when value isn't proportional to headcount (a 3-person team running 10,000 CI jobs gets huge value from few seats) and it can *penalize adoption* — teams ration logins to save money, throttling the very usage that creates stickiness.
- **Usage-based** — bill per unit of consumption (CI minutes, API calls, GB). Revenue tracks value beautifully and lands are low-friction, but it's **unpredictable** for the customer (a scary bill) and for you (lumpy revenue), and it needs metering infrastructure.
- **Flat** — one price, unlimited use. Dead-simple to buy, but it **decouples price from value** entirely: your biggest power users cost you the most and pay the same as your lightest.

The rule: **pick the metric that most closely tracks the value the customer receives**, then check it's easy to *understand*, easy to *predict*, and *aligned with* (not against) adoption.

Then layer **pricing psychology** — the UX of the number:

- **Anchoring** — the first price a buyer sees frames all others. A visible $89 Enterprise tier makes $49 Business feel reasonable. Anchors are the default values that steer a choice.
- **Charm pricing** — $49 reads as meaningfully less than $50; the left digit dominates perception.
- **Compromise effect** — three options funnel buyers to the middle (6.3), so *design* the middle to be the plan you want sold.

These aren't manipulation; they're **affordances** — the same way a well-placed default button guides a user through a flow without forcing them.`,
      reframe: {
        analogy: `Choosing a price metric is **choosing the right unit for a measurement**, and choosing it wrong corrupts everything downstream — like reporting throughput in "requests" when your cost and value both scale with *bytes*. Per-seat, per-usage, and flat are three candidate units; the correct one is whichever your customer's realized **value is dimensionally proportional to**. Get the unit right and price scales linearly with value for free; get it wrong and you're forever applying correction factors (discounts, overage fees, custom contracts) to patch the mismatch.

Pricing psychology, meanwhile, is **UX affordances for a decision**. Anchoring is a **default value**; charm pricing is **visual hierarchy** (the left digit is the bold heading the eye reads first); the compromise effect is a **highlighted "recommended" option**. You already design flows that guide users to the right action without coercion — pricing layout is the same craft applied to the buy decision.`,
        breaks: `Two breaks. First, unlike a physical unit, the price metric **changes customer behavior** — the act of measuring perturbs the system. Bill per seat and teams *ration seats*; bill per CI-minute and they *optimize pipelines to run fewer minutes*, sometimes destroying the value you meant to sell. There's no neutral unit; each one shapes usage. A meter that changes what it measures has no exact analogue in instrumentation. Second, psychological affordances shade into **dark patterns** if they misinform rather than guide — a fake "anchor" tier nobody can actually buy, or charm pricing that hides real overage costs, erodes trust and, in B2B, gets caught in procurement. The line: an affordance helps a buyer choose what genuinely fits them; a dark pattern extracts a choice they'd regret. Stay on the affordance side — repeat B2B relationships punish the other.`,
      },
      workedExample: `**Meridian** must pick its metric. Walk the three against *its* value driver:

- **Per-seat ($49, from 6.3):** value from CI insights correlates *reasonably* with team size — more engineers, more pipelines, more value. Predictable for buyers, easy to forecast, matches how dev tools are bought. Weakness: a small team running enormous CI volume underpays relative to value.
- **Usage-based (per 1,000 CI minutes):** tracks value most tightly — heavy pipelines pay more — but engineering leads *hate* unpredictable CI bills, and it punishes the deep integration that makes Meridian sticky (teams would trim pipelines to cut cost). High metering cost for a small team.
- **Flat ($1,500/mo unlimited):** simplest to sell, but a 3-person team and a 60-person team pay the same while getting wildly different value — leaves money on the table at the top and prices out the bottom.

**Decision: per-seat at $49**, because it best balances value-tracking with the *predictability* B2B engineering buyers demand, and it matches the good-better-best packaging from 6.3. (A hybrid — per-seat with a generous CI-minute allowance and metered overage — is the natural next step once metering exists.)

Now the psychology. Present three tiers with **Enterprise $89 as the visible anchor**, **Business $49 highlighted "Most popular"** (compromise effect steering to the target tier), all charm-priced ($29/$49/$89, not $30/$50/$90). The left-digit effect makes $49 read closer to "$40-something" than to $50.

Unit-economics tie-back: committing **$49/seat** against the Module 5 variable cost of $9 sets CM = **$40** — up from the old $31, a **+29%** contribution-margin gain that flows straight into LTV and lifts Meridian's LTV:CAC from 1.69× toward ~2.2×. **This is the number you commit below**, and it feeds your Module 5 model directly: raising price lifts CM dollar-for-dollar.`,
      branch: {
        scenario: `Your product is a CI-insights tool much like Meridian: a small, high-usage team can get more value than a large, low-usage one, and buyers are engineering leads who dread surprise bills. You're deciding the price metric to commit. Which do you choose, and why?`,
        choices: [
          {
            label: 'Pure usage-based (per CI-minute) — it tracks value most tightly, so revenue scales perfectly with value.',
            correct: false,
            consequence: `**Instructive miss — right criterion, wrong weighting.** Usage *does* track value best in the abstract, but you ignored two costs it imposes: engineering buyers **hate unpredictable bills** (a spiky month blows their budget and triggers a review), and metered pricing makes teams **trim the very usage** — deep pipeline integration — that makes you sticky. Tightest value-tracking isn't worth much if it scares off buyers and suppresses adoption. Metric choice balances value-tracking *against* predictability and adoption incentives.`,
          },
          {
            label: 'Per-seat, priced against value — predictable for buyers, decent value-tracking, matches how dev teams buy.',
            correct: true,
            consequence: `**Correct.** Per-seat wins the *balance*: it tracks value reasonably (team size correlates with pipelines/value), it's **predictable** — the thing engineering buyers most demand — and it aligns with how dev tooling is procured. It's not the tightest value-tracker (a small high-usage team underpays), which is exactly why a per-seat base **plus a usage allowance and metered overage** is the mature evolution. But as the metric to commit today, per-seat is the right call, and it drops cleanly into the per-seat unit economics from Module 5.`,
          },
          {
            label: 'Flat unlimited pricing — simplest to sell, no metering to build, no bill anxiety.',
            correct: false,
            consequence: `**Instructive miss.** Flat is the easiest to buy, but it **fully decouples price from value**: your 3-person power-user team and your 60-person light team pay the same, so you simultaneously under-charge the high-value accounts and over-charge (and lose) the small ones. Simplicity is real, but here it forfeits the most contribution margin of the three. Simplicity that ignores value distribution is a false economy.`,
          },
        ],
      },
      artifact: {
        componentKey: 'form',
        prompt: `Commit your pricing. Choose the metric your customers actually buy on and a headline price. (This slot feeds your Module 5 unit economics — a higher price lifts contribution margin directly.)`,
        fields: [
          { key: 'metric', label: 'Price metric', type: 'select', options: ['per-seat', 'usage', 'flat'] },
          { key: 'headlinePrice', label: 'Headline price ($ / unit / month)', type: 'number' },
        ],
      },
      tutorHooks: [
        { label: 'Which metric fits my product?', kind: 'ask', question: 'Given how value scales for my customers, help me choose between per-seat, usage-based, and flat pricing, weighing value-tracking against predictability and adoption incentives. Suggest a hybrid if one fits.' },
        { label: 'Pressure-test my psychology (affordance vs dark pattern)', kind: 'critique' },
        { label: 'Harder: metric choice changes behavior', kind: 'harder', concept: 'how each price metric perturbs customer usage (seat rationing, minute-trimming) and how to pick a metric that aligns with, not against, adoption' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'The most important criterion when choosing a price metric (per-seat vs usage vs flat) is that the metric should:',
          options: [
            'Be the one your biggest competitor uses',
            'Track the value the customer receives, while staying predictable and adoption-aligned',
            'Always be usage-based, since it scales with consumption',
            'Minimize your metering and billing engineering cost above all else',
          ],
          answer: 1,
          explain: 'Pick the unit whose measure tracks customer value, then confirm it\'s predictable and doesn\'t penalize adoption. Usage tracks value tightest but hurts predictability; the right metric balances all three, not any single one.',
        },
        {
          kind: 'mcq',
          prompt: 'A pricing page shows a $89 Enterprise tier mainly to make the $49 Business tier feel reasonable. This technique is:',
          options: [
            'Charm pricing',
            'Anchoring',
            'The compromise effect',
            'Usage-based pricing',
          ],
          answer: 1,
          explain: 'A high visible price that frames the others as reasonable is **anchoring** — the first price seen sets the reference point. Charm pricing is the $49-vs-$50 left-digit effect; the compromise effect is buyers gravitating to the middle option.',
        },
        {
          kind: 'free',
          prompt: 'State the price metric (per-seat, usage, or flat) and headline price you are committing for YOUR product, and justify the metric by how value scales for your customers. Then compute the contribution margin this price implies against your Module 5 variable cost, and note how it changes your LTV:CAC ratio.',
          rubric: 'Strong answer: (1) picks a metric and justifies it by how customer value scales, weighing value-tracking against predictability and adoption (not just "usage is tightest"); (2) commits a concrete headline number consistent with the WTP work in 6.2 and packaging in 6.3; (3) computes CM = price - variable cost using their Module 5 variable cost; (4) explains that a higher price lifts CM dollar-for-dollar and therefore raises LTV and the LTV:CAC ratio, closing the loop back to Module 5.',
        },
      ],
      commitSummary: 'your price metric and headline price written to **startup.pricing** — a higher price lifts contribution margin directly, so this feeds back into your Module 5 unit economics (CM, LTV, and the LTV:CAC ratio).',
    },
  ],
}
