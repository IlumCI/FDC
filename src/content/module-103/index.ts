import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 103 — Program economics & cost-per-outcome  (Season 1 BONUS, nonprofit)
//
// The nonprofit analog of Module 5 (Unit Economics). Where M5 asks "does ONE
// unit of business make money?", this asks "what does it REALLY cost to
// produce ONE outcome?" — and brings the same numeric discipline to impact:
// fully-loaded cost per outcome, marginal cost of impact, the overhead-ratio
// myth / starvation cycle, and cost-effectiveness comparison across programs.
// Bonus module, inserted after M5 on the nonprofit path. No persisted artifact.
// Engineering reframes: cost function / cost per unit; the marginal-cost curve;
// starving observability to fake efficiency; benchmarking options by one metric.
// ===========================================================================

export const module103: Module = {
  id: 103,
  season: 1,
  bonus: true,
  paths: ['nonprofit'],
  insertAfter: 5,
  title: 'Program economics & cost-per-outcome',
  goal: "Bring unit-economics discipline to impact: compute the real cost to produce one outcome, and reason about marginal cost and scale — without the 'overhead is bad' myth.",
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '103.1',
      module: 103,
      title: 'Cost per outcome',
      estMinutes: 15,
      prerequisites: [],
      artifactSlot: null,
      concept: `**Cost per outcome** is the nonprofit analog of cost per unit. It answers one question: what does it actually cost us to produce one real *result* — not one activity, not one person touched, but one **outcome**?

$$\\text{cost per outcome} = \\frac{\\text{total program cost}}{\\text{outcomes produced}}$$

Two disciplines make this number honest.

**1. Fully-loaded cost.** The numerator includes direct delivery (staff, materials, space) **and** the allocated share of shared infrastructure the program actually consumes (coordination, data systems, evaluation). Pretending infrastructure is free understates your true cost and makes every later comparison a lie.

**2. Outcomes, not outputs.** An **output** is an activity you performed — students tutored, meals served, wells drilled. An **outcome** is the change you exist to create — a student reading at grade level, a well still flowing in two years. Cost per output flatters you; cost per outcome tells the truth.

The gap between them is your **conversion rate**. Enroll 1,000 and reach the outcome for 600, and your cost per outcome is not your cost per enrollee — it is higher, and 600/1,000 is a funnel number you should track like one.

Cost per outcome is deliberately blunt. It does **not** say whether an outcome is worth its cost (that is cost-effectiveness, lesson 103.4), nor what the *next* outcome will cost (marginal cost, lesson 103.2). It gives you one honest denominator so every later decision has something real to stand on.`,
      reframe: {
        analogy: `Treat your program as a **production function**. Serving a beneficiary is a request; producing an outcome is a *successful* request — a 200, not merely a request that returned. Cost per outcome is your fully-loaded **cost per successful response**.

Outputs are throughput; outcomes are *successful* throughput. Reporting cost per output is like bragging about requests-per-second while hiding your error rate: the requests that 500'd still burned CPU, and the beneficiaries who didn't reach the outcome still cost real money. The denominator that matters is successes, not attempts.`,
        breaks: `A server's success is binary and instant; an outcome is often partial and delayed. A student who advances half a grade is a real partial result the 200/500 dichotomy erases, and many outcomes are only verifiable months later — you compute cost per success before you fully know the successes. Attribution is fuzzy too: unlike a request your service handled end-to-end, an outcome can have many causes (school, family, economy). Cost per outcome quietly assumes your program produced it — be honest about the counterfactual, which lesson 103.4 makes explicit.`,
      },
      workedExample: `**Northwind Tutoring** runs after-school reading support. This year:

- Direct program costs (tutor stipends, curriculum, space): **$396,000**
- Allocated share of shared infrastructure (coordinators, scheduling software, evaluation): **$84,000**
- Total fully-loaded program cost: **$480,000**

Activity and results:

- Students enrolled: **1,000**
- Students who completed the year: **750**
- Students who advanced at least one full reading grade level (the outcome): **600**

Cost per **output** (per student enrolled): 480,000 / 1,000 = **$480**.
Cost per **outcome** (per grade-level advance): 480,000 / 600 = **$800**.

The $320 gap is not waste — it is the honest price of a 60% conversion from enrolled to outcome. Report $480 and you look cheaper than you are; report $800 and you can actually manage it. Lift conversion to 70% (700 outcomes) on the *same* budget and cost per outcome falls to 480,000 / 700 ≈ **$686** with no extra spend. That is a real lever — and you can only see it once you divide by outcomes instead of enrollments.`,
      branch: {
        scenario: `A funder asks Northwind for its "cost per child." The development director, wanting the most competitive figure, proposes reporting **$480** (cost per enrolled child) and describing it as Northwind's cost of *impact*. What is the right call?`,
        choices: [
          {
            label: 'Report $480 and describe it as the cost of the impact — it is a real number and the most competitive.',
            correct: false,
            consequence: `**Instructive miss.** $480 is a true cost *per child served* — but that is an output, not an outcome. Calling it impact overstates your effectiveness by 67% (real cost per outcome is $800) and quietly promises a price you cannot sustain, feeding the very expectation-lowering that starves organizations (lesson 103.3). A true number in the wrong denominator is still a misleading claim.`,
          },
          {
            label: 'Lead with cost per outcome ($800) and give cost per child served ($480) as labeled context.',
            correct: true,
            consequence: `**Correct.** Report both, each honestly labeled, and headline the outcome. You lose the vanity of the smaller number and gain something better: a figure you can defend, manage, and improve. Funders who understand outcomes trust the org that shows the real denominator, and you keep a metric you can actually move.`,
          },
          {
            label: 'Refuse to give any per-child figure — outcomes are too complex to reduce to one number.',
            correct: false,
            consequence: `**Overcautious.** Complexity is a reason to define the denominator carefully, not to withhold it. Without an honest per-outcome number you can never be compared, benchmarked, or improved — you have opted out of the entire discipline this module is built on. The answer is a *good* denominator, not none.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Northwind lifts completion so that 700 students reach the outcome on the same $480,000 fully-loaded budget. What is the new cost per outcome, to the nearest dollar?',
          answer: 686,
          tolerance: 3,
          unit: '$',
          explain: 'Cost per outcome = total cost / outcomes = 480,000 / 700 ≈ $686. Same spend, more outcomes, lower cost per outcome — conversion is a lever you only see once you divide by outcomes rather than enrollments.',
        },
      ],
      tutorHooks: [
        { label: 'Define the outcome for my program', kind: 'ask', question: 'For my nonprofit and domain, help me define a single defensible OUTCOME (not an output), and list the outputs I might be tempted to report as impact instead.' },
        { label: 'Harder cost-per-outcome example', kind: 'harder', concept: 'fully-loaded cost per outcome with a low output-to-outcome conversion rate' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A job-training nonprofit spends $900,000 fully loaded. It enrolls 600 people; 300 complete; 180 land a job lasting 6+ months (the defined outcome). Cost per outcome is:',
          options: ['$1,500', '$3,000', '$5,000', 'Cannot be computed'],
          answer: 2,
          explain: 'Cost per outcome = total / outcomes achieved = 900,000 / 180 = **$5,000**. Dividing by enrollees ($1,500) or completers ($3,000) measures outputs, not the outcome the organization exists to produce.',
        },
        {
          kind: 'mcq',
          prompt: 'Which figure is the most honest to put in the numerator of cost per outcome?',
          options: [
            'Direct delivery costs only, so the number looks lean',
            'Direct costs plus the program\'s allocated share of shared infrastructure',
            'Direct costs minus overhead, to appear more efficient',
            'Total organizational revenue for the year',
          ],
          answer: 1,
          explain: 'Fully-loaded cost = direct delivery **plus** the infrastructure the program actually consumes (coordination, data, evaluation). Excluding it understates true cost and corrupts every later comparison. Revenue is not cost.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR nonprofit: define one outcome, estimate your fully-loaded annual program cost and the number of outcomes produced, and compute cost per outcome. Then state your output-to-outcome conversion rate and name one output you were tempted to report as impact.',
          rubric: 'Strong answer: (1) states a real OUTCOME (a change), distinct from an output/activity; (2) uses a fully-loaded cost that includes the program\'s share of shared infrastructure; (3) computes cost per outcome = total cost / outcomes correctly; (4) gives a conversion rate (outcomes / people served) and correctly identifies an output they might have mislabeled as impact.',
        },
      ],
      commitSummary: 'concept only — no persisted artifact; you carry cost per outcome into the marginal and comparison lessons.',
    },

    // -----------------------------------------------------------------------
    {
      id: '103.2',
      module: 103,
      title: 'Marginal cost of impact & diminishing returns',
      estMinutes: 16,
      prerequisites: ['103.1'],
      artifactSlot: null,
      concept: `Average cost per outcome hides a more decision-relevant number: the cost of the **next** outcome. The **marginal cost of impact**:

$$\\text{marginal cost} = \\frac{\\Delta\\,\\text{total cost}}{\\Delta\\,\\text{outcomes}}$$

It almost never equals the average, and the two diverge in a shape you can predict.

**Early on, economies of scale.** Fixed infrastructure — a coordinator, a scheduling system, a curriculum you built once — spreads across more outcomes, so each additional outcome is *cheaper* than the last and the average falls. This is the increasing-returns arm of the curve.

**Then diminishing returns.** You serve the easiest-to-reach, highest-readiness beneficiaries first. The next cohort is harder — more remote, higher need, lower baseline — so each additional outcome costs *more* than the last. Marginal cost climbs above the average and drags the average up with it.

Plot outcomes on the x-axis and marginal cost on the y-axis and you get a **U-shaped** cost curve. Two rules follow:

- When marginal cost is **below** average cost, expanding lowers your average — **scale**.
- When marginal cost climbs **above** the value of an outcome (or above what another intervention would cost — lesson 103.4), **stop** expanding this program; the next dollar does more good elsewhere.

The mistake is managing to the average. The average tells you what past outcomes cost; the margin tells you what the *next decision* costs. Decisions live at the margin.`,
      reframe: {
        analogy: `This is the **marginal-cost curve** from any capacity-planning problem. Your first requests amortize fixed infrastructure — cost per request falls as you fill idle capacity you already paid for (economies of scale). Past a knee, you are adding load to a saturating system: each extra request needs more expensive capacity — a new shard, a premium region — and marginal cost climbs.

The rule is the same one you use for load: keep scaling while **marginal < average** (you are filling paid-for capacity cheaply), and stop or route elsewhere when marginal cost exceeds the value of the work. You never provision the whole fleet by re-averaging the datacenter into every request; you decide at the margin.`,
        breaks: `Compute capacity is fungible and elastic; human-service capacity is lumpy and non-substitutable. You cannot spin up a trained tutor in 90 seconds, and the "harder" beneficiaries are not just pricier identical units — their needs differ in *kind*, so a single scalar marginal cost flattens a qualitative change. And the curve is not fixed physics: program innovation can shift the *whole* curve down (a better method lowers marginal cost at every volume), which no amount of autoscaling ever does to a datacenter.`,
      },
      workedExample: `**Northwind** sits at **600 outcomes** for **$480,000** → average **$800**. Two expansion options for next year:

**Option 1 — deepen in-city.** Add 100 outcomes by raising conversion in current schools. Extra cost **$60,000** (more tutor hours, no new infrastructure).
Marginal cost = 60,000 / 100 = **$600 per outcome** — *below* the $800 average.
New average = (480,000 + 60,000) / 700 = 540,000 / 700 ≈ **$771**. The average **falls**. Scale this.

**Option 2 — expand to rural districts.** Add 200 outcomes, but you must stand up transport, hire coordinators, and absorb lower student density. Extra cost **$300,000**.
Marginal cost = 300,000 / 200 = **$1,500 per outcome** — nearly double the average.
New average = (480,000 + 300,000) / 800 = 780,000 / 800 = **$975**. The average **rises**.

Neither is automatically "wrong." Option 1 is the efficient next step. Option 2 may still be right if reaching rural students is *mission-critical* and $1,500 still beats the best alternative use of those dollars — but you make that call at the margin, eyes open, not by blending it into a comfortable-looking $975 average that hides the $1,500 truth.`,
      branch: {
        scenario: `Northwind has three costed expansion tranches. **A**: next 100 outcomes at marginal **$600**. **B**: next 100 at marginal **$1,100**. **C**: next 100 at marginal **$2,400**. A comparably well-evidenced literacy program elsewhere produces outcomes at **$900** each and has room for your money. You have budget for exactly 200 more outcomes. Where do they go?`,
        choices: [
          {
            label: 'Fund A and B — keep the impact in-house where you control quality.',
            correct: false,
            consequence: `**Instructive miss.** A ($600) beats the $900 benchmark — fund it. But B costs $1,100 per outcome while an equally-evidenced program delivers the same outcome for $900. Every outcome you buy in B instead of there costs $200 more for the same good. Loyalty to your own logo is not cost-effectiveness.`,
          },
          {
            label: 'Fund tranche A ($600) in-house; route the rest to the external $900 program rather than your own B ($1,100).',
            correct: true,
            consequence: `**Correct.** Fund the cheapest outcomes first, regardless of whose logo is on them. A beats the benchmark, so keep it; beyond A your own margin ($1,100) exceeds the $900 benchmark, so the marginal dollar does more good sent elsewhere. You maximize outcomes, not org-chart headcount.`,
          },
          {
            label: 'Fund A, B, and C to maximize the number of outcomes under your own brand.',
            correct: false,
            consequence: `**Instructive miss.** C at $2,400 is nearly 3x the $900 benchmark; funding it destroys roughly $1,500 of potential good per outcome relative to the alternative. Maximizing outcomes *under your brand* is not maximizing outcomes. The margin, not the logo, decides.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'A program adds 150 outcomes by spending an extra $270,000. What is the marginal cost per outcome, in dollars?',
          answer: 1800,
          tolerance: 0,
          unit: '$',
          explain: 'Marginal cost = change in total cost / change in outcomes = 270,000 / 150 = $1,800 per outcome. Compare this to your average — if it is higher, expanding raises your average cost per outcome.',
        },
        {
          kind: 'categorize',
          prompt: 'Sort each factor by which arm of the cost curve it drives.',
          buckets: ['Economies of scale (lowers marginal cost)', 'Diminishing returns (raises marginal cost)'],
          items: [
            { text: 'Fixed scheduling software spread over more students', bucket: 'Economies of scale (lowers marginal cost)' },
            { text: 'Reusing a curriculum you already built once', bucket: 'Economies of scale (lowers marginal cost)' },
            { text: 'Negotiating bulk pricing on materials at higher volume', bucket: 'Economies of scale (lowers marginal cost)' },
            { text: 'Reaching remote, harder-to-serve beneficiaries', bucket: 'Diminishing returns (raises marginal cost)' },
            { text: 'Highest-readiness beneficiaries enrolled first, leaving harder cases', bucket: 'Diminishing returns (raises marginal cost)' },
            { text: 'Staff burnout and overtime as you push past capacity', bucket: 'Diminishing returns (raises marginal cost)' },
          ],
          explain: 'Fixed costs spread over more outcomes and volume discounts pull marginal cost DOWN (increasing returns). Harder-to-reach beneficiaries and saturated capacity push it UP (diminishing returns). The real curve is U-shaped: scale through the first arm, stop or redirect in the second.',
        },
      ],
      tutorHooks: [
        { label: 'Sketch my program\'s cost curve', kind: 'ask', question: 'Given my program and domain, where do my economies of scale likely give way to diminishing returns, and what specific factors drive each arm?' },
        { label: 'Harder marginal-cost example', kind: 'harder', concept: 'choosing between expansion tranches by marginal cost against an external benchmark' },
        { label: 'Critique my reasoning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A program\'s average cost per outcome is $800, and the marginal cost for its next cohort is $600. Expanding into that cohort will:',
          options: [
            'Raise the average cost per outcome',
            'Lower the average cost per outcome toward $600',
            'Leave the average unchanged',
            'Make marginal cost irrelevant',
          ],
          answer: 1,
          explain: 'When marginal cost ($600) is below the average ($800), each added outcome is cheaper than the running average, so the average is pulled **down** toward the marginal cost. This is the signal to scale.',
        },
        {
          kind: 'mcq',
          prompt: 'Marginal cost of your next outcome has risen to $2,000, while a comparably-evidenced program can produce the same outcome for $900 and has room for funds. The cost-effective move is to:',
          options: [
            'Expand your own program anyway, to keep control',
            'Direct the marginal dollars to the $900 program',
            'Average the two to $1,450 and proceed',
            'Stop measuring marginal cost — it is discouraging',
          ],
          answer: 1,
          explain: 'At the margin your outcome costs $2,000; the alternative delivers the same outcome for $900 with room to absorb the money. The next dollar does more good there. Averaging hides the decision; the margin is the decision.',
        },
        {
          kind: 'free',
          prompt: 'Describe YOUR program\'s likely cost curve: where do economies of scale end and diminishing returns begin, and roughly what marginal cost per outcome would make you stop expanding this program in favor of another use of the money?',
          rubric: 'Strong answer: (1) distinguishes marginal from average cost; (2) names concrete drivers of BOTH arms (a fixed cost that spreads; a factor that makes later outcomes harder); (3) states a stop/scale trigger tied to marginal cost crossing either the value of an outcome or an external benchmark; (4) avoids managing purely to the average.',
        },
      ],
      commitSummary: 'concept only — marginal reasoning carries into the overhead and cost-effectiveness lessons.',
    },

    // -----------------------------------------------------------------------
    {
      id: '103.3',
      module: 103,
      title: 'The overhead-ratio myth',
      estMinutes: 16,
      prerequisites: ['103.1'],
      artifactSlot: null,
      concept: `The **overhead ratio** is the share of spending that is not direct program delivery:

$$\\text{overhead ratio} = \\frac{\\text{management} + \\text{fundraising costs}}{\\text{total expenses}}$$

The myth is that a **low overhead ratio means an efficient charity**. It does not. The ratio measures *where money is categorized*, not *what money produces*. It is completely silent on outcomes — the only thing that actually matters.

Worse, chasing it is actively harmful. The **nonprofit starvation cycle** runs like this: funders demand low overhead → organizations underinvest in infrastructure (skilled staff, data systems, evaluation, training) and reclassify shared costs as "program" → they report artificially low overhead → funders take that as the norm and push expectations even lower → real capability erodes → programs quietly fail. Everyone optimized a proxy and starved the thing the proxy was meant to protect.

Infrastructure is not the tax on impact; it is the **machinery of impact**. Evaluation is *how you know cost per outcome at all*. Financial systems are how you allocate fully-loaded cost honestly. Trained, decently-paid staff are why outcomes happen and why they don't churn out the door. An organization with 8% overhead and no evaluation function cannot even tell you its cost per outcome — it knows only its cost per output, and is flying blind.

The right metric is the one this whole module is built on: **cost per outcome**. A charity at 30% overhead with rigorous delivery can be far cheaper per real outcome than an 8% charity that cannot tell whether its outcomes are real. Judge the machine's output, not the fraction of budget spent oiling it.`,
      reframe: {
        analogy: `Overhead ratio is the "we spend almost nothing on ops" brag. The team that runs with no monitoring, no on-call, no CI, and no error budget looks gloriously lean on a spreadsheet — 100% of engineering "shipping features." Then it pages at 3am, ships regressions it never detects, and cannot tell you its real reliability because it never instrumented anything.

Cutting observability to raise your feature-spend ratio **is** the starvation cycle: you optimized a cost ratio and blinded yourself to outcomes. Infrastructure, evaluation, and finance are a nonprofit's **observability and CI** — the unglamorous systems that separate *believing* you have impact from *knowing* it.`,
        breaks: `Observability has a real ceiling — past a point, more monitoring genuinely is waste — and the same holds for nonprofits: overhead is not automatically virtuous either. A 60% fundraising ratio can signal a real problem (a broken funnel, self-dealing), just as 90% spend on "monitoring" would be absurd. The claim is not "high overhead good." It is that the ratio is the **wrong axis entirely**. Judge by cost per outcome; treat overhead as a flag to investigate, never a verdict on its own.`,
      },
      workedExample: `Two clean-water nonprofits, each spending **$1,000,000** a year, both reporting "wells built" (all follow-up figures illustrative).

**LeanWell** — overhead **9%**. Spends almost nothing on monitoring or repair. Builds **250** wells. But with no evaluation and no maintenance system, follow-up finds only **40%** still functioning after two years.
Lasting wells (the outcome): 250 × 0.40 = **100**.
Cost per outcome = 1,000,000 / 100 = **$10,000 per lasting well**.

**DeepWell** — overhead **27%**. That "overhead" is a monitoring team, sensor-based fault detection, local repair technicians, and an evaluation function. Builds fewer wells — **170** — but **90%** are still functioning after two years.
Lasting wells: 170 × 0.90 = **153**.
Cost per outcome = 1,000,000 / 153 ≈ **$6,536 per lasting well**.

The "bloated" 27%-overhead charity delivers a lasting outcome for about **35% less** than the "lean" one. The overhead ratio ranked them exactly backwards. The infrastructure LeanWell skipped — monitoring, repair, evaluation — is precisely what would have converted its *outputs* (wells built) into *outcomes* (wells still flowing).`,
      branch: {
        scenario: `A major funder offers Northwind a **$200,000** grant on the condition that overhead stays under 10% and none of the grant may touch "administration, evaluation, or software." Northwind's leaders know its evaluation function — currently ~6% of budget — is exactly what lets it prove and improve cost per outcome. What is the wise response?`,
        choices: [
          {
            label: 'Accept as-is; reclassify the evaluation staff as "program" to stay under 10%.',
            correct: false,
            consequence: `**Instructive miss — this is the starvation cycle in one move.** You take the money, misreport infrastructure as program to hit an arbitrary ratio, and set the funder\'s expectation even lower next cycle. And you have squeezed the exact function that proves your impact exists. Optimizing the proxy, starving the thing it was meant to protect.`,
          },
          {
            label: 'Negotiate with cost-per-outcome data: make the case that evaluation is what makes the grant\'s outcomes real, and ask them to fund true program cost including its infrastructure share.',
            correct: true,
            consequence: `**Correct.** You move the conversation from a ratio to outcomes — the axis that matters. The best funders respond to cost-per-outcome evidence, and you protect the machinery that produces impact. If they still will not move, you at least know the true price of the constraint and can decide with eyes open.`,
          },
          {
            label: 'Decline any grant that touches overhead — accept only fully unrestricted money.',
            correct: false,
            consequence: `**Overcautious.** Most real funding carries *some* restriction; refusing all of it leaves impact on the table. The skill is negotiating around outcomes, not purity. Decline this specific constraint if it truly guts your evaluation — but as a blanket rule it is impractical.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'rank',
          prompt: 'Rank these four charities from MOST to LEAST cost-effective (lowest cost per lasting outcome first). Each spends $1,000,000. Ignore the overhead ratio — rank by cost per outcome.',
          items: [
            'DeepWell — 153 lasting wells (≈ $6,536 each), 27% overhead',
            'MidWell — 125 lasting wells ($8,000 each), 18% overhead',
            'LeanWell — 100 lasting wells ($10,000 each), 9% overhead',
            'ShowWell — 80 lasting wells ($12,500 each), 6% overhead',
          ],
          explain: 'Cost per lasting outcome = 1,000,000 / lasting wells. DeepWell $6,536 < MidWell $8,000 < LeanWell $10,000 < ShowWell $12,500. The ranking is the exact inverse of the overhead ratio — the leanest-looking charity is the least cost-effective, because it starved the infrastructure that makes outputs last.',
        },
      ],
      tutorHooks: [
        { label: 'Which of my costs is real infrastructure?', kind: 'ask', question: 'Help me identify which parts of my "overhead" are actually the machinery that produces or measures outcomes, and how I would explain that to a ratio-focused funder.' },
        { label: 'Harder overhead-myth example', kind: 'harder', concept: 'comparing two charities where the higher-overhead one is more cost-effective per lasting outcome' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Two charities each spend $1M. Charity A: 10% overhead, 120 verified lasting outcomes. Charity B: 25% overhead, 200 verified lasting outcomes. Which is more cost-effective?',
          options: [
            'A — its overhead ratio is lower',
            'B — its cost per lasting outcome is lower',
            'A — more of every dollar is labeled "program"',
            'Cannot tell without more overhead detail',
          ],
          answer: 1,
          explain: 'Cost per outcome: A = 1,000,000 / 120 ≈ $8,333; B = 1,000,000 / 200 = $5,000. B produces a lasting outcome for less despite higher overhead. The ratio is silent on outcomes; cost per outcome is not.',
        },
        {
          kind: 'mcq',
          prompt: 'The nonprofit "starvation cycle" refers to:',
          options: [
            'Donors withholding funds during recessions',
            'A self-reinforcing loop where overhead pressure makes orgs underinvest in and underreport infrastructure, eroding capability',
            'Programs that run out of eligible beneficiaries',
            'Cutting programs in order to fund more fundraising',
          ],
          answer: 1,
          explain: 'Funder pressure for low overhead pushes orgs to starve and misreport infrastructure; that resets the norm lower, capability erodes, and programs fail. It is the classic case of optimizing a proxy and destroying what the proxy was meant to protect.',
        },
        {
          kind: 'free',
          prompt: 'Name one piece of "overhead" infrastructure YOUR org needs to produce or measure outcomes (e.g. evaluation, data systems, trained staff). Explain concretely how classifying it as waste and cutting it would raise your cost per outcome.',
          rubric: 'Strong answer: (1) identifies a specific infrastructure/overhead function tied to producing or MEASURING outcomes; (2) explains the mechanism by which cutting it degrades outcomes or the ability to know them; (3) connects to cost per outcome (outputs stop converting to lasting outcomes, or you go blind on the metric); (4) shows they understand overhead ratio is the wrong axis, not that high overhead is inherently good.',
        },
      ],
      commitSummary: 'concept only — you now judge by cost per outcome, not overhead ratio, going into cross-program comparison.',
    },

    // -----------------------------------------------------------------------
    {
      id: '103.4',
      module: 103,
      title: 'Cost-effectiveness & comparing interventions',
      estMinutes: 18,
      prerequisites: ['103.1', '103.2', '103.3'],
      artifactSlot: null,
      concept: `Cost per outcome becomes powerful when you use it to **compare**. Cost-effectiveness is cost per outcome placed side by side across programs, so a scarce dollar flows to where it does the most good. This is the logic behind **GiveWell's cost-per-life-saved reasoning**: estimate, for each intervention, the fully-loaded cost to produce one unit of the outcome, then fund the most effective *at the margin*.

Two disciplines make the comparison legitimate.

**1. A common outcome unit.** You can only divide by the same denominator. Cost per "person helped" is meaningless across a bed-net program and a tutoring program. Fields solve this with shared units — cost per life saved, cost per **DALY** averted (a year of healthy life), or explicit moral weights that convert different goods onto one scale. Without a common unit you are comparing nothing.

**2. Marginal, counterfactual, with room for funding.** The decision funds the *next* outcomes, so compare **marginal** cost-effectiveness — not a charity's lifetime average — among options that can actually absorb the money. And subtract what would have happened anyway: an outcome that would have occurred without you is not one you produced.

Illustrative GiveWell-style figures: a top anti-malaria program might avert a death for roughly **$5,000** (illustrative), while a less-targeted health program might cost **$50,000** for the same outcome. That 10x gap means the same budget saves ten times as many lives simply by moving to the more cost-effective margin. The uncomfortable implication of taking cost per outcome seriously: *good* is not good enough when *ten-times-better* exists and has room for your money.`,
      reframe: {
        analogy: `This is **benchmarking implementations by a common metric** — dollars per unit of work, requests served per watt, cost per successful job. You would never pick a service because it "feels" fast; you benchmark candidates on one metric under one workload and choose the best cost-per-throughput at the margin you will actually run.

Cost per outcome is that benchmark for impact, and "fund the most effective with room for more funding" is **capacity planning**: route load to the node with the best marginal cost until its marginal cost rises to meet the next-best node, then spill over. Same discipline, higher stakes.`,
        breaks: `Benchmarks assume the metric captures what you care about — and outcomes resist a single scalar far more than latency does. A DALY or a moral weight is a *modeled* value with real uncertainty and real ethical judgment baked in; two honest analysts can weight a death against a year of schooling differently and get different rankings. Latency invites no such disagreement. So treat cost-effectiveness rankings as **decision-support with error bars**, not a total order handed down from physics — and be loudest about uncertainty exactly where the numbers drive the biggest reallocations.`,
      },
      workedExample: `A foundation has **$1,000,000** to allocate and three vetted options, each costed *at the margin* with confirmed room for the funds (all figures illustrative):

| intervention | outcome | marginal cost / outcome |
|---|---|---|
| Anti-malaria nets | death averted | $5,000 |
| Vitamin-A supplementation | death averted | $3,500 |
| General health clinic | death averted | $50,000 |

Same outcome unit (a death averted), so the comparison is legitimate:

- All $1M to the clinic: 1,000,000 / 50,000 = **20** deaths averted.
- All $1M to nets: 1,000,000 / 5,000 = **200** deaths averted.
- All $1M to Vitamin A: 1,000,000 / 3,500 ≈ **286** deaths averted.

Now fund the most cost-effective **with room for funding first**. Suppose Vitamin A can absorb only $500,000 before its marginal cost rises. Put $500k there (≈ 143 averted) and the next $500k into nets (100 averted) → **≈ 243** deaths averted — still about **12x** the clinic-only plan.

The clinic may do real good. But "real good" that costs 10–14x more per outcome means every dollar sent there instead of to the margin is roughly nine lives not saved. That is the weight cost per outcome asks you to carry — and the reason to compare, not just to measure.`,
      branch: {
        scenario: `Your nonprofit runs the general health clinic above (**$50,000** per death averted). A donor, moved by your annual report, offers **$500,000** — but privately tells you they mostly want *the most lives saved* and would follow your honest advice on where it should go. What do you tell them?`,
        choices: [
          {
            label: 'Accept it for your clinic — the donor chose you, and the clinic does genuine good.',
            correct: false,
            consequence: `**Instructive miss.** The donor stated their goal (lives saved) and asked for honest advice. Steering $500k to a $50,000-per-outcome program when $3,500–$5,000 options have room trades roughly 90 lives for organizational loyalty. Honesty here means naming the more effective margin even when it is not you.`,
          },
          {
            label: 'Tell the truth: for maximizing lives saved, the nets / Vitamin-A margin is ~10x more effective and has room; offer to help them give there, and separately make the case for what your clinic uniquely does.',
            correct: true,
            consequence: `**Correct.** You serve the donor\'s actual objective and your own integrity, and you are forced to articulate your program\'s *distinct* value rather than competing on a metric you lose. Funders remember the organization that told them the truth — and your clinic\'s real case is whatever it does that the cheap interventions do not.`,
          },
          {
            label: 'Take the money and quietly split it 50/50, to feel balanced.',
            correct: false,
            consequence: `**Instructive miss.** Undisclosed splitting substitutes your comfort for the donor\'s informed choice and still sends $250k to a 10x-costlier outcome. "Balanced" is not a cost-effectiveness argument. Transparency plus the marginal-dollar rule is.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'A donor has $700,000 for a program that averts a death for $3,500 per outcome (illustrative) and has room for the full amount. How many deaths does it avert, to the nearest whole number?',
          answer: 200,
          tolerance: 0,
          unit: 'deaths averted',
          explain: 'Outcomes = budget / cost per outcome = 700,000 / 3,500 = 200. A common outcome unit (a death averted) is what makes this division — and any cross-program comparison — meaningful.',
        },
        {
          kind: 'scenario',
          title: 'The marginal grant',
          intro: 'You advise a family foundation with $400,000 left to allocate this year. Everything is costed at the margin, on one common outcome unit (a death averted). All figures illustrative.',
          decisions: [
            {
              situation: 'Program A averts a death for $4,000 but can absorb only $200,000 before its marginal cost rises steeply. Program B averts a death for $9,000 with effectively unlimited room. Where does the FIRST $200,000 go?',
              options: [
                { label: '$200k to Program A (≈ 50 averted)', correct: true, outcome: 'Right. Fund the cheapest outcomes first, up to the point where that program\'s marginal cost rises. $200k at $4,000 each ≈ 50 deaths averted — far more than the same money at B\'s $9,000.' },
                { label: '$200k to Program B, because unlimited room is simpler', correct: false, outcome: 'No. Convenience is not cost-effectiveness. B costs more than 2x per outcome; sending the first dollars there instead of the cheaper A leaves lives on the table. Room for funding decides ties, not the first choice.' },
              ],
            },
            {
              situation: 'Program A is now saturated. For the remaining $200,000: fund Program B now at $9,000 per outcome (unlimited room, confirmed), or hold the cash for a possible $3,000-per-outcome program that is NOT yet confirmed and might have room next quarter?',
              options: [
                { label: 'Fund Program B now (≈ 22 averted)', correct: true, outcome: 'Right under these facts. ~22 confirmed outcomes beat an unconfirmed maybe. You can always redirect FUTURE dollars to the $3,000 program once it is real — but do not let confirmed lives wait on a speculative option.' },
                { label: 'Hold the cash for the unconfirmed $3,000 program', correct: false, outcome: 'Risky here. A cheaper program would be better IF it were real and imminent — but it is unconfirmed and the delay leaves ~22 confirmable outcomes unfunded now. If the $3,000 option firms up with room and low delay cost, THEN prefer it; on today\'s facts, fund B.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Find a common outcome unit for my domain', kind: 'ask', question: 'Help me put two interventions in my field on a single common outcome unit so I can compare their cost-effectiveness honestly, and flag where the comparison is fragile.' },
        { label: 'Harder cross-program comparison', kind: 'harder', concept: 'allocating a fixed budget across interventions with different marginal costs and limited room for funding' },
        { label: 'Critique my comparison', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'You have $600,000. Program X: $4,000 per life saved. Program Y: $40,000 per life saved. Both have room for the full amount. Choosing X over Y saves how many ADDITIONAL lives?',
          options: ['15 more', '135 more', '10x more, but the count cannot be known', 'None — both save the same'],
          answer: 1,
          explain: 'X: 600,000 / 4,000 = 150 lives. Y: 600,000 / 40,000 = 15 lives. Difference = 150 − 15 = **135** additional lives from the same budget by choosing the more cost-effective option.',
        },
        {
          kind: 'mcq',
          prompt: 'Why must cost-effectiveness comparisons use MARGINAL cost with "room for more funding" rather than a charity\'s lifetime average?',
          options: [
            'Because averages are always miscalculated',
            'Because the decision funds the NEXT outcomes, whose cost can differ from past ones, and only programs with room can absorb the dollars',
            'Because it makes smaller charities look better',
            'Because marginal cost is easier to compute than an average',
          ],
          answer: 1,
          explain: 'Your dollars buy future outcomes at the margin, and marginal cost can differ sharply from the historical average (diminishing returns). And the money only helps where there is room to absorb it — a great average with no capacity left saves no one.',
        },
        {
          kind: 'free',
          prompt: 'Pick two interventions in YOUR domain (or two ways to spend the same dollar). Put them on a common outcome unit, estimate cost per outcome for each, and reason about which should get the marginal dollar — and name one thing that would change your answer.',
          rubric: 'Strong answer: (1) chooses a single common outcome unit that both interventions can be measured against; (2) estimates cost per outcome for each and compares them; (3) reasons at the MARGIN with room-for-funding and/or counterfactual considerations; (4) names a real source of uncertainty (moral weights, data quality, room for funding) that could flip the decision — showing rankings are decision-support with error bars, not physics.',
        },
      ],
      commitSummary: 'concept only — you leave with cost per outcome, marginal cost, and cross-program cost-effectiveness as one connected toolkit.',
    },
  ],
}
