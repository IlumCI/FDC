import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 7 — Marketing & go-to-market
//
// Turns "get customers" from a vibe into a system. The through-line is that
// acquisition is an engineering problem: a pipeline with measurable conversion
// rates (7.1), a routing decision under scarce attention (7.2), a choice
// between a straight pipe and a recursive loop (7.3), and a slow-warming trust
// cache plus launch sequencing (7.4, which writes startup.gtm). Every lesson
// stays numeric on Meridian so the learner leaves with a computable plan.
// ===========================================================================

export const module7: Module = {
  id: 7,
  title: 'Marketing & go-to-market',
  goal: 'Design a repeatable system to get the right strangers to become users.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '7.1',
      module: 7,
      title: 'The funnel as a pipeline with conversion rates',
      estMinutes: 14,
      prerequisites: [],
      artifactSlot: null,
      concept: `A **funnel** is your acquisition process modeled as ordered stages, each with a **conversion rate** — the fraction that survives to the next stage. A typical B2B shape:

$$\\text{visitor} \\to \\text{signup} \\to \\text{activated} \\to \\text{paid}$$

The headline number is the **overall conversion**, and it is the *product* of the stage rates, not their average:

$$c_{\\text{overall}} = c_1 \\times c_2 \\times \\cdots \\times c_n$$

Because rates multiply, the funnel is **dominated by its worst stage**. Ten stages at 90% each land at $0.9^{10} \\approx 35\\%$ — no single stage looks broken, yet two-thirds of the flow is gone. Conversely, doubling your *weakest* rate roughly doubles the whole output, while polishing an already-strong stage barely moves it.

So the core skill is **finding the leak**: instrument every stage, compute each rate, and rank them. The biggest absolute drop between two adjacent stages is where one hour of work buys the most customers. Optimizing anywhere else is motion without progress.`,
      reframe: {
        analogy: `A funnel is a **pipeline of filters** in series, exactly like a Unix pipe or a multi-stage request pipeline. Each stage passes a fraction of what it receives, so end-to-end throughput is the product of per-stage pass rates — the same reason a request path is only as fast as its slowest hop. Finding the leak is **profiling**: you don't guess which stage is slow, you measure each one and attack the bottleneck, because Amdahl's law applies to conversion too. Effort spent anywhere but the bottleneck is invisible at the output.`,
        breaks: `A profiler measures independent, stateless stages; funnel stages are **coupled and lossy about people**. The users who survive stage 1 are not a random sample — they are self-selected to be higher-intent, so a "40% activation" rate measured on survivors won't hold if you widen the top of the funnel with lower-intent traffic. And unlike dropped packets, a churned lead can sometimes be **re-driven** later (retargeting, nurture), so the stages aren't strictly one-shot. Treat the pipeline model as the right way to *locate* the leak, not as proof that each rate is a fixed constant of nature.`,
      },
      workedExample: `**Meridian** (CI insights, $40/seat/mo) runs one month of its funnel:

| stage | count | stage conversion |
|---|---|---|
| site visitors | 5,000 | — |
| signups (free trial) | 400 | 8.0% |
| activated (connected a repo) | 160 | 40.0% |
| paid | 40 | 25.0% |

Overall conversion = $0.08 \\times 0.40 \\times 0.25 = 0.008 = \\mathbf{0.8\\%}$ — 40 paying customers from 5,000 visitors. Sanity check: $5000 \\times 0.008 = 40$. ✓

Now find the leak. The **activation** stage (40%) is the standout drop: 240 people signed up and never connected a repo, so they can't experience the product. Lifting activation from 40% to 60% (a plausible onboarding fix) flows $400 \\times 0.60 \\times 0.25 = \\mathbf{60}$ paid — a 50% increase in customers with zero extra traffic. Compare pushing the already-decent 25% paid-conversion to 30%: that yields only $400 \\times 0.40 \\times 0.30 = 48$. Same effort, one-fifth the payoff. The arithmetic tells you where to work.`,
      branch: {
        scenario: `Meridian's funnel is visitor 5,000 → signup 8% → activated 40% → paid 25%. The founder has budget for exactly one initiative this month and is choosing between: **(A)** a paid-ads push that would add 2,000 more top-of-funnel visitors, **(B)** an onboarding rebuild that lifts activation 40% → 60%, or **(C)** a pricing-page polish that lifts paid conversion 25% → 30%. Which produces the most *new paying customers*?`,
        choices: [
          {
            label: 'A — buy 2,000 more visitors; more top-of-funnel is always more customers.',
            correct: false,
            consequence: `**Instructive miss.** 2,000 extra visitors at the same 0.8% overall convert to just $2000 \\times 0.008 = 16$ additional paid — and that assumes bought, lower-intent traffic converts as well as organic (it usually converts *worse*). You also pay CAC on every one of them. Adding volume to a leaky funnel pours more water through the same hole.`,
          },
          {
            label: 'B — rebuild onboarding to lift activation 40% → 60%.',
            correct: true,
            consequence: `**Correct.** Activation is the worst-surviving stage, so it dominates the product. $5000 \\times 0.08 \\times 0.60 \\times 0.25 = \\mathbf{60}$ paid, up from 40 — **+20 customers**, more than A's +16, at no incremental CAC and with permanent effect on every future cohort. Fixing the bottleneck multiplies everything downstream of it.`,
          },
          {
            label: 'C — polish the pricing page to lift paid conversion 25% → 30%.',
            correct: false,
            consequence: `**Instructive miss.** $5000 \\times 0.08 \\times 0.40 \\times 0.30 = 48$ paid — only **+8**. The paid stage is already your healthiest rate, so a relative improvement there moves the smallest absolute number. Polishing a strong stage is the classic "optimize the non-bottleneck" trap.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Map my funnel stages', kind: 'ask', question: 'Given my product and buyer, what are the right funnel stages to instrument for me, and what conversion rate would be a reasonable benchmark at each?' },
        { label: 'Harder funnel arithmetic', kind: 'harder', concept: 'finding the leak in a multi-stage funnel where stage rates interact with traffic quality' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A funnel has stage rates 10%, 50%, and 20%. A visitor count of 8,000 enters the top. How many reach the end, and which stage should you fix first?',
          options: [
            '80 customers; fix the 10% stage first',
            '800 customers; fix the 50% stage first',
            '80 customers; fix the 50% stage first',
            '1,600 customers; fix the 20% stage first',
          ],
          answer: 0,
          explain: 'Overall = 0.10 × 0.50 × 0.20 = 0.01, so 8,000 × 0.01 = **80**. The 10% stage is the worst survivor and dominates the product — a relative lift there moves the output most.',
        },
        {
          kind: 'free',
          prompt: 'Sketch YOUR funnel as ordered stages with a plausible conversion rate at each, compute your overall conversion, and identify the single stage you would fix first. Justify why that stage and not another.',
          rubric: 'Strong answer: (1) lists ordered, product-appropriate stages (e.g. visitor→signup→activate→paid) with concrete rates; (2) computes overall conversion as the PRODUCT of stage rates, not an average; (3) identifies the bottleneck by largest relative/absolute drop rather than gut feel; (4) reasons that fixing the weakest stage multiplies all downstream stages, and avoids the "just add more traffic" trap.',
        },
      ],
      commitSummary: 'concept only — you commit your funnel targets in lesson 7.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '7.2',
      module: 7,
      title: 'Channels as a routing problem',
      estMinutes: 15,
      prerequisites: ['7.1'],
      artifactSlot: null,
      concept: `A **channel** is a route strangers travel to reach the top of your funnel: content/SEO, paid ads, cold outbound, developer communities, integrations/marketplaces, partnerships. The central, counter-intuitive result — call it the **one-channel principle** — is that most companies grow on a *single* dominant channel at any given stage, not a balanced portfolio.

The reason is that channels are **winner-take-most** and have steep learning curves. Each channel has its own craft (ad-bidding, keyword strategy, outbound sequencing, community norms) and its own compounding advantage to whoever masters it. Attention and, more importantly, *your* focused iteration are the scarce resources. Spreading a fixed effort budget $E$ across $n$ channels gives each $E/n$ — often below the threshold where any channel starts working at all.

$$\\text{effort per channel} = \\frac{E}{n} \\;\\;\\Rightarrow\\;\\; \\text{shallow everywhere, competent nowhere}$$

The discipline: **channel-market fit**. Test a few cheaply, then concentrate on the one channel that shows traction and drive it until it saturates *before* adding a second. "Which channel?" is a routing decision — pick the path where your specific buyers already are and where your unit economics survive that channel's CAC.`,
      reframe: {
        analogy: `Picking a channel is **routing traffic under a load-balancing decision**, and going all-in on one is choosing to **fill one connection pool to capacity before opening a second**. Each channel is like mastering one framework: the tenth hour on the framework you already know returns far more than the first hour on a new one, because expertise compounds and context-switching has real cost. Spreading effort across five channels is thrashing a scheduler across five cold caches — every switch pays the warm-up cost again and none of them ever reaches throughput.`,
        breaks: `Load balancers assume interchangeable backends; **channels are not fungible** — the buyers, intent, and CAC differ wildly, so "just route more" to a saturated channel hits diminishing returns a scheduler never models. Channels also **saturate and decay**: a content strategy that works at 1,000 visitors/mo may cap out, and an ad channel's CAC rises as you exhaust the cheap audience — so the "one channel" is one *at a time*, not one *forever*. And a mature company genuinely does run several channels in parallel; the principle is about *sequencing* when your iteration budget is scarce, not a permanent ban on diversification.`,
      },
      workedExample: `**Meridian** must reach small engineering teams and can seriously pursue one of three channels this quarter. It runs a cheap two-week probe on each and estimates:

| channel | est. CAC | monthly reachable signups | notes |
|---|---|---|---|
| Paid search ads | $520 | ~120 | CAC exceeds LTV band; expensive keywords |
| Dev-community content (SEO + guides) | $180 | ~90 (compounding) | slow to start, buyers already there |
| Cold outbound email | $300 | ~60 | founder-time heavy, hard to scale |

Recall Meridian's economics: CM **$31**, target CAC around **$250**, LTV ≈ **$422** (LTV:CAC ≈ 1.69×). Paid search at **$520 CAC** breaks the unit model outright — LTV:CAC would fall to $422/520 ≈ 0.81×, underwater. Content at **$180 CAC** *improves* the ratio to $422/180 ≈ 2.34× and lands where developers actually look for CI tooling — plus its output compounds as old guides keep ranking. The routing call is clear: **concentrate on developer-community content**, drive it until it saturates, and only then test a second channel. Splitting the quarter three ways would leave content sub-scale (its compounding never ignites) and burn cash on ads that don't clear the economics.`,
      branch: {
        scenario: `Meridian's content channel is working: 90 signups/month at $180 CAC and slowly climbing as guides rank. The founder, excited, proposes to *also* launch paid ads, cold outbound, and a conference-sponsorship push next month "to diversify and grow faster," splitting the team's marketing time four ways. What's the right call?`,
        choices: [
          {
            label: 'Diversify now — four channels means four times the growth and less risk.',
            correct: false,
            consequence: `**Instructive miss.** Splitting a fixed effort budget four ways gives each channel a quarter of the iteration it needs to cross its own working threshold — including the content channel that's *currently working*, which you'd starve mid-climb. "Less risk" is backwards here: you trade one channel that's proven for four that are all sub-scale. Diversification protects a portfolio of *working* channels, not a wish-list of untested ones.`,
          },
          {
            label: 'Keep concentrating on content until it saturates, then add the next best channel.',
            correct: true,
            consequence: `**Correct.** Content has channel-market fit and is still compounding — the highest-return hour is the *next* hour on content, not the first hour on a cold channel. Drive it to saturation (rising CAC or flattening reach are the signals), *then* sequence in a second channel with dedicated focus. One channel mastered beats four half-run.`,
          },
          {
            label: 'Drop content and jump to paid ads — it can scale faster than SEO.',
            correct: false,
            consequence: `**Instructive miss.** Paid ads probed at **$520 CAC**, which puts LTV:CAC underwater (~0.81×) — faster *volume* at a *loss* is the scaling trap from Module 5. And abandoning a compounding channel that already clears your economics to chase raw speed throws away the asset you've been building. Speed at negative unit economics is just faster bankruptcy.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Which channel fits my buyer?', kind: 'ask', question: 'Given who my buyer is and where they spend attention, which one or two channels should I probe first, and what would channel-market fit look like for each?' },
        { label: 'Harder channel-economics case', kind: 'harder', concept: 'choosing a primary channel when CAC differs by channel and interacts with LTV band' },
        { label: 'Critique my channel plan', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A founder is running five acquisition channels simultaneously, each getting a fifth of a small marketing budget, and none is producing meaningful traction. The most likely diagnosis is:',
          options: [
            'The product has no market — none of the channels work',
            'Effort is spread too thin; no channel gets enough focus to cross its working threshold',
            'They need a sixth channel to find the one that works',
            'Channels are fungible, so the split should not matter',
          ],
          answer: 1,
          explain: 'Channels have steep learning curves and a minimum effort threshold. Splitting a fixed budget five ways usually leaves each below that threshold — the fix is to concentrate on the most promising one, not add a sixth.',
        },
        {
          kind: 'mcq',
          prompt: 'Channel A: CAC $150, reaches 80 buyers/mo, buyers are your exact ICP. Channel B: CAC $600, reaches 400 buyers/mo, mostly off-target. Your LTV is about $420. Which should you make your primary channel first?',
          options: [
            'B — it reaches five times as many people',
            'A — it fits your buyer and clears your unit economics',
            'Both equally, to diversify from day one',
            'Neither — CAC should always be under $50',
          ],
          answer: 1,
          explain: 'A gives LTV:CAC ≈ 420/150 = 2.8× and targets your ICP; B is ≈ 0.7× (underwater) on mostly off-target reach. Raw reach is worthless if the channel breaks your economics. Concentrate on A first.',
        },
      ],
      commitSummary: 'concept only — you name your primary channel in lesson 7.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '7.3',
      module: 7,
      title: 'Growth loops vs funnels',
      estMinutes: 16,
      prerequisites: ['7.1', '7.2'],
      artifactSlot: null,
      concept: `A funnel is a **straight pipe**: traffic enters the top, some fraction exits as customers, and every run starts over from zero — you keep buying the input. A **growth loop** feeds its output back into its input, so each cohort of users *generates* the next cohort's traffic. The three classic loops:

- **Viral / referral** — users invite other users (each customer brings $k$ more).
- **Content** — usage produces artifacts (pages, templates, public dashboards) that rank and pull in new users.
- **Paid** — revenue funds acquisition that produces more revenue (a loop only if unit economics are positive).

The key quantity for a viral loop is the **amplification factor** $k$ = new users each user brings, times the fraction who convert. If a fraction of output re-enters as input each cycle, total users follow a geometric series:

$$\\text{total} = u_0 \\,(1 + k + k^2 + \\cdots) = \\frac{u_0}{1 - k} \\quad (k < 1)$$

At $k = 0.5$ every 100 seed users eventually yield 200; at $k \\ge 1$ the loop is self-sustaining and grows without more input. A funnel's output is **linear** in spend; a loop's output **compounds**. That is the entire strategic difference: funnels are something you *pay for continuously*, loops are something you *build once and they run*.`,
      reframe: {
        analogy: `A funnel is an **iterative function you call once per lead** — input in, output out, no state carried forward. A growth loop is **recursion**: the function calls itself on its own output. The amplification factor $k$ is the recursion's branching ratio, and $\\frac{1}{1-k}$ is just the closed form of the geometric series that recursion generates — the same math as a **feedback amplifier's gain** $\\frac{1}{1-\\beta}$. Below $k=1$ the recursion terminates at a finite multiple of the seed; at $k \\ge 1$ it's an unbounded expansion — the growth equivalent of a base case you never hit, except here non-termination is exactly what you want.`,
        breaks: `Ideal recursion is stateless and its branching ratio is constant; a real loop's $k$ **decays as you saturate the market** — early adopters invite freely, but once most of your addressable niche is in, there's no one new to invite and $k$ falls below 1, so no loop grows forever. Loops also have **cycle time** (a referral might take weeks to fire) that the tidy series hides, and they can run *backwards*: churn and bad word-of-mouth are negative feedback that shrinks the base. So model loops as feedback systems with a drifting, eventually-sub-unity gain — not as a magic perpetual-motion machine.`,
      },
      workedExample: `**Meridian** compares two ways to spend a fixed budget.

**Funnel (paid ads):** at ~$250 CAC, $10,000/month buys ~40 customers/month. Stop paying and new customers drop to zero next month. Output is strictly linear: $N = \\text{spend}/\\text{CAC}$.

**Loop (referral built into the product):** each paying team invites teammates and peer teams. Suppose each customer brings, on average, **0.4** new *converting* customers over their life ($k = 0.4$). Seed a cohort of **50** customers from content:

$$\\text{total from that seed} = \\frac{50}{1 - 0.4} = \\frac{50}{0.6} \\approx \\mathbf{83}\\ \\text{customers}$$

The 50 you acquired pulled in ~33 more at *near-zero* CAC — blended CAC drops from $250 to about $250 \\times 0.6 = \\mathbf{\\$150}$, which lifts LTV:CAC from 1.69× toward ~2.8×. Now the compounding: raise the referral rate so $k = 0.6$ and the same 50 seed yields $50/0.4 = 125$; push product-led invites to $k = 0.9$ and it's $50/0.1 = 500$. The funnel would need *ten times* the ad spend to match what a small increase in $k$ produces for free. Loops don't beat funnels by being bigger per cycle — they beat them by **feeding themselves**.`,
      branch: {
        scenario: `Meridian can invest one quarter of engineering time in exactly one of: **(A)** a referral loop projected to reach $k = 0.5$, **(B)** a content loop where public CI-benchmark reports rank in search and pull in ~30 new signups/month that slowly compounds, or **(C)** doubling paid-ad spend for a one-time bump of +40 customers/month while the spend lasts. The founder wants "the most durable growth." Which fits that goal best?`,
        choices: [
          {
            label: 'C — double ad spend; +40/month is the biggest immediate number.',
            correct: false,
            consequence: `**Instructive miss for the stated goal.** Paid ads are a funnel: the +40/month lasts exactly as long as you keep paying, and CAC tends to *rise* as you exhaust the cheap audience. It's a fine accelerant, but it's the *least durable* option — the moment spend stops, growth stops. The founder asked for durable, and a straight pipe isn't that.`,
          },
          {
            label: 'A or B — build a loop; compounding output is what makes growth durable.',
            correct: true,
            consequence: `**Correct.** Both A and B feed output back into input, so growth persists (and compounds) after the initial build, unlike the ad pipe. A referral loop at $k=0.5$ turns every 100 customers into 200 over time; a content loop keeps ranking and pulling signups for free. The right pick between A and B depends on Meridian's product and where its buyers search — but *either loop* beats the funnel on durability, which is exactly the stated goal.`,
          },
          {
            label: 'None — loops are hype; a predictable funnel is always safer.',
            correct: false,
            consequence: `**Instructive miss.** Funnels are predictable but *linear and rented* — you pay for every customer, forever. Loops carry real risk (a referral loop can fail to reach useful $k$, content takes months to rank), but dismissing them entirely forfeits the only mechanism that produces compounding, self-sustaining growth. The mature answer is a working funnel to seed a loop, not funnel-forever.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Which loop could my product support?', kind: 'ask', question: 'Given how my product is used, is a viral/referral, content, or paid loop most natural, and what would drive its amplification factor k?' },
        { label: 'Harder loop math', kind: 'harder', concept: 'estimating k and steady-state users for a referral loop that saturates its market over time' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A referral loop seeds 200 users and each user brings, on average, 0.6 new converting users over their lifetime (k = 0.6, and stays below 1). Ignoring saturation, roughly how many total users does the seed eventually produce?',
          options: ['320', '500', '120', 'Unbounded — it grows forever'],
          answer: 1,
          explain: 'Geometric series: total = u₀ / (1 − k) = 200 / (1 − 0.6) = 200 / 0.4 = **500**. It is unbounded only when k ≥ 1; at k = 0.6 it converges to a finite multiple of the seed.',
        },
        {
          kind: 'free',
          prompt: 'Describe the most natural growth loop for YOUR product (referral, content, or paid), estimate its amplification factor k with a one-line justification, and explain how that loop compounds differently from simply buying traffic through a funnel.',
          rubric: 'Strong answer: (1) picks a loop type that genuinely fits how the product is used; (2) gives a plausible k with reasoning (who invites/what artifact ranks), acknowledging k < 1 for most real loops; (3) contrasts compounding (output feeds input, total ≈ u₀/(1−k)) against a funnel\'s linear pay-per-lead output; (4) notes at least one realistic limit — saturation drives k down, cycle time, or churn as negative feedback.',
        },
      ],
      commitSummary: 'concept only — your loop informs the plan you commit in lesson 7.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '7.4',
      module: 7,
      title: 'Brand as an accumulated trust cache & launch sequencing',
      estMinutes: 18,
      prerequisites: ['7.1', '7.2', '7.3'],
      artifactSlot: 'gtm',
      concept: `**Brand** is not your logo — it is the **accumulated trust** a market holds about you: a reputation state built up over many interactions and expensive to change quickly. Think of it as a *cache of credibility* that lowers the cost of every future funnel and loop. A stranger who already trusts you converts at a higher rate, refers more freely (higher $k$), and needs less convincing — brand multiplies every number in the previous three lessons.

Two properties follow. First, brand is **slow to warm and slow to cool**: you earn it through consistent, visible reliability over time, which is why it can't be bought in a week — but once warm, it persists and keeps paying out. Second, brand is **path-dependent**, so *sequencing your launch* matters. You don't fire everything at once; you warm the cache in order so each step lands on a slightly warmer audience:

$$\\text{private beta} \\to \\text{design partners / testimonials} \\to \\text{public launch} \\to \\text{amplify}$$

A launch is not a single day — it is the moment you *spend* accumulated trust to acquire attention, and it works only if you've pre-warmed enough of it. Launch cold and even a good product converts poorly; launch warm and the same funnel and loop run at higher rates for free.

This lesson closes the module: you'll commit your go-to-market — the one channel you'll make work, your funnel stages with target conversions, and your first launch step.`,
      reframe: {
        analogy: `Brand is a **warm cache of trust**. A cold prospect is a cache miss — expensive to convert, because you pay full price in proof, demos, and skepticism. Every consistent, reliable interaction is a write to the cache; a warm entry is a prospect who already trusts you and converts cheaply, a **cache hit**. Launch sequencing is deliberate **cache warming**: private beta and design-partner testimonials pre-populate credibility so that by public launch the majority of arrivals hit a warm entry instead of a cold one. And like a real cache, trust has **eviction** — a breach, an outage, a broken promise invalidates entries fast, and re-warming costs far more than the original write.`,
        breaks: `A CPU cache warms in microseconds and hits are perfectly reliable; a **trust cache warms over months and its "hits" are probabilistic** — a warm reputation raises conversion odds, it doesn't guarantee the sale. Eviction is brutally **asymmetric**: one serious breach can cold-invalidate trust that took years to write, and unlike LRU there's no clean "re-fetch" — winning trust back costs multiples of earning it the first time. Brand also isn't uniformly addressable: you can be warm to developers and stone-cold to their CFO, so the "cache" is really many segment-specific caches. Use the analogy for *why sequencing and consistency compound*, not as a promise that trust behaves like deterministic memory.`,
      },
      workedExample: `**Meridian** plans its launch to warm the trust cache in sequence rather than firing cold.

**Step 0 — private beta (weeks 1–4):** 15 hand-picked small eng teams from the founder's network use it free. Cost: near zero. Output: bug fixes and, crucially, **5 named testimonials** with real before/after CI-time numbers.

**Step 1 — design-partner proof (weeks 5–8):** publish two detailed case studies ("Team X cut failing-build triage from 40 min to 6"). This is the first cache-warming write to the *public* — content that also feeds the content loop from 7.3.

**Step 2 — public launch (week 9):** launch in the developer communities where the primary channel (content, from 7.2) already has reach. Because the audience arrives *warm* — they've seen the case studies and peer mentions — the top-of-funnel converts better. Concretely, a cold launch might convert the signup stage at 5%; launching into a pre-warmed audience lifts it toward the **8%** in Meridian's funnel (7.1). On 5,000 launch-week visitors that's the difference between 250 and 400 signups — and every downstream stage multiplies that gap.

**Step 3 — amplify (weeks 10+):** only now pour effort/spend into the proven channel and switch on the referral loop, because each new user now lands on warm brand and refers at a higher $k$.

The sequence matters: run Step 2 before Steps 0–1 and you'd launch to a cold audience, convert at 5%, and burn your one launch moment on strangers who have no reason yet to trust you. Warming the cache first makes the identical funnel and loop run at higher rates for free.`,
      branch: {
        scenario: `Your product is roughly ready and you're deciding how to go to market. You have a small network of friendly potential users, no public reputation yet, and one strong "launch moment" you can only really spend once (a big community post + press push). What sequence gives that launch the best odds?`,
        choices: [
          {
            label: 'Fire the big public launch now to maximize reach while the product is fresh, then gather testimonials from whoever converts.',
            correct: false,
            consequence: `**The classic cold-launch miss.** You spend your one launch moment on a stone-cold audience with zero social proof, so it converts at the low end (~5%) and you can't re-run it. Testimonials gathered *after* can't retroactively warm the launch that already happened. You inverted the sequence: proof has to precede the moment it's meant to amplify.`,
          },
          {
            label: 'Run a private beta with your network first, convert their results into named testimonials and case studies, then spend the launch moment into a pre-warmed audience.',
            correct: true,
            consequence: `**Correct.** You warm the trust cache before you spend it: beta → proof → public launch → amplify. By launch day the audience has seen real peer results, so the same funnel converts at the higher end (~8% vs ~5%), and the launch also seeds the referral loop at a higher k because new users land on warm brand. You get one launch moment — this ordering makes it hit warm instead of cold.`,
          },
          {
            label: 'Skip sequencing entirely and just buy ads continuously — brand is fuzzy and unmeasurable, so ignore it.',
            correct: false,
            consequence: `**Instructive miss.** Ads are a funnel you rent forever (7.3), and running them against *zero* brand means every click arrives cold and converts poorly — you pay full CAC for missing social proof. Brand is hard to measure but it multiplies every conversion rate and referral k in this module; ignoring it means paying the cold-cache penalty on every single acquisition, permanently.`,
          },
        ],
      },
      artifact: {
        componentKey: 'form',
        prompt: `Commit your go-to-market. Pick the ONE channel you'll make work first, sketch your funnel stages with target conversion rates, and your first launch step.`,
        fields: [
          { key: 'primaryChannel', label: 'Primary channel (the one you will make work)', type: 'text' },
          { key: 'funnelStages', label: 'Funnel stages + target conversion rates', type: 'textarea', placeholder: 'e.g. visit 100 → signup 8% → activate 40% → paid 25%' },
          { key: 'launchStep1', label: 'First concrete launch step', type: 'text' },
        ],
      },
      tutorHooks: [
        { label: 'Sequence my launch', kind: 'ask', question: 'Given my product, network, and primary channel, lay out a concrete launch sequence (beta → proof → public → amplify) with what I should have in hand before each step.' },
        { label: 'Pressure-test my GTM commitment', kind: 'critique' },
        { label: 'Harder brand/sequencing case', kind: 'harder', concept: 'how a warm vs cold audience changes funnel conversion and referral k, with numbers' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why does launch sequencing (private beta → testimonials → public launch → amplify) typically beat a single all-at-once public launch?',
          options: [
            'It is cheaper because you never spend money on the public launch',
            'Each step warms the trust cache so the public launch converts a pre-warmed, higher-trust audience',
            'It guarantees virality regardless of product quality',
            'Sequencing removes the need for a primary channel',
          ],
          answer: 1,
          explain: 'Sequencing pre-populates credibility (case studies, peer proof) so the audience arrives warm at launch, lifting conversion and referral k. It is not free, does not guarantee virality, and still needs a primary channel.',
        },
        {
          kind: 'free',
          prompt: 'Explain "brand as a trust cache" in your own words, then describe one concrete way you would warm that cache for YOUR product before your public launch, and how you would expect it to change a specific funnel conversion rate.',
          rubric: 'Strong answer: (1) frames brand as accumulated, slow-to-warm reputation that raises conversion and referral rates (a cache of credibility, with asymmetric eviction on breach); (2) names a concrete pre-launch warming action fit to their product (beta, design-partner case studies, community presence); (3) ties it to a SPECIFIC funnel-stage rate improving (e.g. signup 5%→8%) rather than a vague "more trust"; (4) reflects the launch-sequencing logic of proof before the launch moment.',
        },
      ],
      commitSummary: 'your go-to-market plan — primary channel, target funnel conversions, and first launch step — written to **startup.gtm**, the repeatable acquisition system you\'ll execute and refine.',
    },
  ],
}
