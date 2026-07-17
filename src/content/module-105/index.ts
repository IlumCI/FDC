import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 105 — BONUS (Season 1, nonprofit path)
//
// Substitutes the default "Fundraising & capital" module on the nonprofit
// route. Venture cap tables, SAFEs, and priced rounds don't apply to a 501(c)
// org, so this module installs the nonprofit fundraising engine instead: a
// repeatable development SYSTEM across the donor pyramid, grants, and donor
// retention. It reuses the engineering reframes the course leans on — a
// funnel/state machine, power-law concentration, a spec-driven proof
// obligation, and retention/LTV — so a technical founder can reason about
// money the same way they reason about systems.
//
// insertAfter: 9 — slots in after the shared financial-model module on the
// nonprofit route. All lessons are prose-only (artifactSlot: null); no bespoke
// artifact. Numbers are illustrative but built on real nonprofit benchmarks
// (e.g. the Fundraising Effectiveness Project's ~45% overall / ~20% new-donor
// retention rates).
// ===========================================================================

export const module105: Module = {
  id: 105,
  season: 1,
  bonus: true,
  paths: ['nonprofit'],
  insertAfter: 9,
  title: 'Fundraising: grants, major donors & development',
  goal: 'Replace venture fundraising with the nonprofit engine: a repeatable development system across grants, the donor pyramid, and retention.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '105.1',
      module: 105,
      title: 'The development system (a fundraising funnel)',
      estMinutes: 15,
      prerequisites: [],
      artifactSlot: null,
      concept: `Fundraising is not a series of one-off asks. Done well it is a **development system**: a repeatable pipeline that moves a stranger to a committed, renewing supporter through four stages.

- **Identify** — find prospects with the capacity and affinity to give (research, referrals, event lists).
- **Cultivate** — build the relationship *before* asking (updates, tours, a coffee, a personal thank-you).
- **Solicit** — make a specific, sized ask at the right moment.
- **Steward** — report impact, thank sincerely, and re-engage — which loops the donor back toward the next, usually larger, gift.

The stages are a **state machine**: a donor occupies exactly one state, transitions are events (a first gift moves *solicit → steward*), and skipping a state — soliciting before cultivating — is the single most common cause of a "no." Most of your donors are stuck mid-pipeline, not lost; the job of a development office is to keep prospects *advancing*, not just to run one big appeal.

Because each transition has a conversion rate below 100%, the pipeline is **lossy**: you must feed the top with far more prospects than the gifts you need at the bottom. Knowing your stage-to-stage rates tells you exactly where the leak is — a strong ask rate but weak cultivation means you are asking cold; strong cultivation but weak solicitation means you are not asking at all. Measure the funnel and you can fix the *specific* stage instead of guessing.`,
      reframe: {
        analogy: `The development system is a **sales pipeline with retention**. Identify is lead generation; cultivate is nurturing; solicit is closing; steward is the renewal/retention loop that a good SaaS motion runs after the first sale. Each stage has a conversion rate, so the whole thing behaves like a funnel: throughput at the bottom equals top-of-funnel volume multiplied by the product of every stage's conversion. Optimize the pipeline the way you'd optimize any funnel — instrument each transition, find the lowest-converting stage, and fix *that* one first. And, exactly like SaaS, the real value is in the loop after the first close: a retained donor costs far less than a new one.`,
        breaks: `A sales funnel usually optimizes for speed and volume; a development pipeline optimizes for **relationship depth**, and rushing it backfires — a prospect solicited too early doesn't just fail to convert, they can exit the pipeline for good. Transition times are also long and human (major-gift cultivation runs months to years), so you cannot A/B test your way through it at software cadence. Treat the funnel as a model of *where value leaks*, not as a license to automate the human relationship out of it.`,
      },
      workedExample: `**Rivermark Literacy** (illustrative) runs its annual-fund pipeline and measures each transition:

- **Identify:** 5,000 prospects sourced from event lists and referrals.
- **Cultivate:** 20% become genuinely engaged → **1,000**.
- **Solicit:** 40% of engaged prospects receive a sized ask → **400**.
- **Gift:** 37.5% of those solicited make a first gift → **150** new donors.

$$\\text{new donors} = 5000 \\times 0.20 \\times 0.40 \\times 0.375 = 150$$

So a 5,000-name top of funnel yields **150** first gifts — an overall 3% stranger-to-donor rate, which is healthy for cold outreach. Now suppose Rivermark wants 300 new donors next year. It has two levers: double the top of funnel (expensive, and dilutes quality), or lift the **weakest transition**. Cultivation converts at only 20%; nudging it to 40% (better welcome series, one personal touch) *alone* doubles output to 300 with the same 5,000 prospects. Reading the funnel tells you the cheap fix is upstream, in the relationship — not in buying more names.`,
      branch: {
        scenario: `Rivermark's board wants "more revenue this quarter" and pressures the development director to email the entire 5,000-prospect list an aggressive donation appeal now — including 3,800 people who have never heard from the org. What is the right call?`,
        choices: [
          {
            label: 'Blast the full 5,000 — more asks means more gifts, and the board wants results now.',
            correct: false,
            consequence: `**Instructive miss.** You are soliciting prospects who have not been cultivated — skipping a required state transition. Cold asks convert poorly *and* burn the relationship: a chunk of those 3,800 unsubscribe or mark spam, permanently removing them from the top of your funnel. You trade a small short-term bump for a smaller pipeline forever.`,
          },
          {
            label: 'Solicit only the cultivated segment now, and start a cultivation sequence for the rest.',
            correct: true,
            consequence: `**Correct.** Ask the ~1,000 already-engaged prospects (they convert), and put the 3,800 cold names into a cultivation sequence so they *become* askable next quarter. You respect the state machine: solicit the states that are ready, advance the states that aren't. Revenue now **and** a healthier pipeline later.`,
          },
          {
            label: 'Refuse to ask anyone until every prospect is fully cultivated.',
            correct: false,
            consequence: `**Over-correction.** Cultivation is never "finished," and a pipeline that never solicits raises nothing. The discipline is not "don't ask" — it's "ask the states that are ready." Withholding the ask from your engaged segment leaves real, needed money on the table.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'rank',
          prompt: 'Put the donor lifecycle stages in the order a healthy development system moves a supporter through them.',
          items: [
            'Identify — find prospects with capacity and affinity',
            'Cultivate — build the relationship before asking',
            'Solicit — make a specific, sized ask',
            'Steward — thank, report impact, and re-engage for the next gift',
          ],
          explain: 'Identify → Cultivate → Solicit → Steward. Stewardship loops back to the next (usually larger) gift — the retention engine of the whole system.',
        },
        {
          kind: 'numeric',
          prompt: 'You identify 5,000 prospects. 20% enter cultivation, 40% of those are solicited, and 37.5% of solicited prospects make a first gift. How many first-time donors result?',
          answer: 150,
          unit: 'donors',
          explain: '5,000 × 0.20 × 0.40 × 0.375 = 150. A lossy funnel: top-of-funnel volume times the product of every stage conversion.',
        },
      ],
      tutorHooks: [
        { label: 'Map my funnel', kind: 'ask', question: 'Given my nonprofit and its audience, sketch a realistic four-stage development funnel with plausible stage-to-stage conversion rates, and tell me which stage is likely my weakest.' },
        { label: 'Harder funnel math', kind: 'harder', concept: 'multi-stage funnel throughput and finding the highest-leverage stage to improve' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A development pipeline has stage conversions of 25% (identify→cultivate), 50% (cultivate→solicit), and 40% (solicit→gift). From 4,000 prospects, how many first gifts result?',
          options: ['200', '500', '2,000', '1,000'],
          answer: 0,
          explain: '4,000 × 0.25 × 0.50 × 0.40 = 200. Throughput is top-of-funnel volume times the product of every stage conversion.',
        },
        {
          kind: 'mcq',
          prompt: 'You cultivate well (60% of prospects become engaged) but only 10% of engaged prospects are ever solicited. The highest-leverage fix is to:',
          options: [
            'Buy more prospect names to widen the top of the funnel',
            'Fix the solicitation stage — you are cultivating people you never ask',
            'Cut cultivation spending since conversion is already high there',
            'Lower your gift asks so more people say yes',
          ],
          answer: 1,
          explain: 'Strong cultivation with a weak solicitation rate means you are building relationships and then not asking. Fixing the lowest-converting transition beats widening the top of a leaky funnel.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR nonprofit, describe your four development stages and estimate the conversion rate at each transition. Which stage is your biggest leak, and what is one concrete action to improve it?',
          rubric: 'Strong answer: (1) names all four stages (identify, cultivate, solicit, steward) mapped to the org\'s real motions; (2) gives plausible per-stage conversion estimates; (3) identifies the lowest-converting transition as the leak; (4) proposes a concrete, stage-specific fix rather than "get more donors" in general.',
        },
      ],
      commitSummary: 'concept only — you build on this funnel in the next three lessons.',
    },

    // -----------------------------------------------------------------------
    {
      id: '105.2',
      module: 105,
      title: 'The donor pyramid & concentration',
      estMinutes: 16,
      prerequisites: ['105.1'],
      artifactSlot: null,
      concept: `Donor revenue is **not** evenly distributed. Plot gift size against donor count and you get a **pyramid**: a wide base of many small donors, a narrow middle of committed mid-level donors, and a tiny apex of **major donors** who supply a wildly disproportionate share of the money.

This is a **power law**, and it follows the familiar Pareto pattern: often ~80% of revenue comes from ~20% of donors, and frequently the very top 1–3% of donors provide *half* of everything raised. The practical consequence is brutal and clarifying: your fundraising results are dominated by a handful of relationships, not by the size of your mailing list.

That reshapes where effort goes. A common mistake is to spend staff time evenly across all donors — but a $40 base-tier donor and a $40,000 major donor are not equal units of work, and treating them identically wastes your scarcest resource (fundraiser attention) on the thin part of the distribution. The **major-gift** motion — deep, individual cultivation of a short list of high-capacity donors — is where the leverage lives.

The pyramid is also a **movement model**: the goal of the base is not only its own revenue but to *feed the tiers above it*. A first-time $40 donor is a candidate to become a $500 sustaining donor, who is a candidate to become a $40,000 major donor. Retention and upgrade are how donors climb. So you need both: a healthy base for volume and future majors, and disciplined major-gift work for the concentrated revenue that actually funds the mission this year.`,
      reframe: {
        analogy: `Donor revenue is a **power-law distribution** — the same heavy-tailed shape you see in file sizes, city populations, or the load a few hot keys put on a cache. The mean is a lie here; the distribution is ruled by its tail. Just as you'd profile a system and optimize the few hot paths that dominate runtime rather than micro-tuning cold code, you profile your donor base and invest in the few relationships that dominate revenue. "Optimize the hot path" and "steward your major donors" are the same instinct: find where the mass concentrates and put your effort there.`,
        breaks: `Hot keys in a cache are fungible and instantly re-derivable; major donors are **not**. Each one is a distinct human relationship that took years to build and can be lost by a single mishandled interaction, and you cannot simply "provision more" of them on demand. The tail is also not static — over-index on the apex and starve the base, and you stop manufacturing the *next* generation of major donors. Unlike a profiler you can't ignore the cold path; the base is your pipeline for the tail.`,
      },
      workedExample: `**Rivermark Literacy** (illustrative) raises **$500,000** from **1,000** individual donors in a year. Broken into tiers:

| Tier | Donors | Avg gift | Tier total | Share of revenue |
|---|---|---|---|---|
| Major (apex) | 10 | $25,000 | $250,000 | 50% |
| Mid-level | 90 | $1,500 | $135,000 | 27% |
| Base | 900 | ~$128 | $115,000 | 23% |

Read the concentration:

- The **top 1%** of donors (10 people) supply **50%** of all revenue.
- The **top 10%** (100 people) supply $250k + $135k = **$385,000 = 77%** — a textbook Pareto tail.
- The **bottom 90%** (900 donors) supply just **23%**.

Now weigh the effort. If losing *one* major donor removes $25,000 — as much as ~195 base donors combined — then a single major-donor relationship is worth more than your entire spring mailing. This does **not** mean abandon the base: those 900 donors are cheap volume *and* the farm system that grows your next major donors. It means the *marginal hour* of fundraiser time is worth far more spent deepening the top 10 relationships than sending one more generic appeal to the bottom 900.`,
      branch: {
        scenario: `Rivermark has budget for exactly one new hire. Option A: a direct-mail coordinator projected to add 300 new **base** donors (avg $128) next year. Option B: a major-gifts officer projected to cultivate 4 new **major** donors (avg $25,000) and retain 2 existing ones who were at risk. Which hire yields more revenue, and what's the catch?`,
        choices: [
          {
            label: 'A — 300 new donors is clearly more donors and more long-term pipeline.',
            correct: false,
            consequence: `**Instructive miss on the math.** 300 × $128 ≈ **$38,400** in new revenue. Option B's 4 new majors ≈ $100,000 *plus* $50,000 retained ≈ **$150,000** — nearly 4× the revenue. More *donors* is not more *money* under a power law. (The base still matters as a pipeline — but as a revenue bet this year, A loses badly.)`,
          },
          {
            label: 'B — major gifts dominate the revenue, but you must not let the base wither.',
            correct: true,
            consequence: `**Correct.** B adds ≈ $100k new + $50k retained ≈ **$150,000**, versus ≈ $38k for A. The concentration makes the major-gifts officer the higher-revenue bet by a wide margin. The catch you named is real: starve the base entirely and you stop growing the next generation of majors, so B is right *this* year but the base can't be abandoned.`,
          },
          {
            label: 'It cannot be compared — donor counts and gift sizes are different units.',
            correct: false,
            consequence: `**Avoidable miss.** They convert to the same unit — annual revenue. A ≈ $38,400; B ≈ $150,000. Refusing to compare is how nonprofits end up over-investing in the low-yield base out of a fuzzy sense of "more donors is better." Do the arithmetic; the power law makes the answer stark.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Of $500,000 raised from 1,000 donors, the top 100 donors (the top 10%) gave $385,000. What percentage of total revenue came from the top 10% of donors?',
          answer: 77,
          unit: '%',
          explain: '385,000 / 500,000 = 0.77 = 77%. A classic Pareto tail — a small share of donors supplies most of the revenue.',
        },
      ],
      tutorHooks: [
        { label: 'Profile my donor base', kind: 'ask', question: 'Help me estimate the pyramid for my nonprofit: rough tier counts and average gifts for base, mid, and major donors, and what share of revenue my top 1% and top 10% likely supply.' },
        { label: 'Harder concentration math', kind: 'harder', concept: 'power-law donor revenue, Pareto share, and the revenue cost of losing one major donor' },
        { label: 'Critique my reasoning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A nonprofit raises $1,000,000. Its top 5 donors give $600,000. Losing one of those 5 (avg $120,000) is equivalent to losing how many $150 base donors?',
          options: ['About 800 base donors', 'About 120 base donors', 'About 5 base donors', 'It cannot be compared'],
          answer: 0,
          explain: '$120,000 / $150 = 800. One major donor equals roughly 800 base donors — the arithmetic of a power-law distribution.',
        },
        {
          kind: 'mcq',
          prompt: 'The strategic reason a nonprofit still invests in its small-dollar base, despite the revenue concentration at the top, is that:',
          options: [
            'Small donors give more total money than major donors',
            'The base is the pipeline that grows into tomorrow\'s major donors',
            'Major-donor revenue is unreliable and should be ignored',
            'Fundraiser time is best spread evenly across all donors',
          ],
          answer: 1,
          explain: 'The base is the farm system for the tail: today\'s $40 donor is a candidate to climb to mid-level and eventually major. You keep it for pipeline, even though the apex dominates current revenue.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR nonprofit (or a realistic target), estimate your donor pyramid: number of donors and average gift in a base, mid, and major tier. What share of revenue comes from your top 1% and top 10%, and how should that reshape where you spend fundraiser time?',
          rubric: 'Strong answer: (1) builds three tiers with plausible counts and average gifts; (2) computes the revenue share of the top 1% and top 10%; (3) recognizes the power-law concentration; (4) concludes that marginal fundraiser effort should skew toward major-gift cultivation WITHOUT abandoning the base as a pipeline.',
        },
      ],
      commitSummary: 'concept only — the pyramid frames the grant and retention lessons that follow.',
    },

    // -----------------------------------------------------------------------
    {
      id: '105.3',
      module: 105,
      title: 'Grants: the institutional pipeline',
      estMinutes: 16,
      prerequisites: ['105.1', '105.2'],
      artifactSlot: null,
      concept: `Individuals give from relationship; **institutions** — foundations and government agencies — give from a **process**. A grant is a longer, spec-driven sales cycle with a formal evaluation, and it rewards teams that treat it like engineering against a specification rather than like a heartfelt letter.

The pipeline usually runs: research fit → **letter of inquiry (LOI)** → invited **full proposal** → review → award (or decline) → **reporting**. Cycle times are long — often 6 to 12 months from LOI to a funded check — so grants are a *lagging* revenue source you must seed far ahead of need.

The proposal itself is a **proof obligation**. The funder publishes a spec — eligibility, priorities, required outcomes, a logic model, a budget format — and your proposal must *demonstrate*, against that exact spec, that your program will produce the funder's desired result. Vague passion fails; a tight logic model with measurable outcomes and a credible budget passes. Read the guidelines as the type signature and satisfy every field.

Finally, grant money carries **restrictions**. A **restricted** grant may be spent only on the specified program (and often caps indirect/overhead recovery at a low percentage). **Unrestricted** funds can cover anything, including the rent, salaries, and reserves that keep the lights on. A common trap: winning a pile of restricted program grants while starving on unrestricted operating support — you can be "fully funded" on paper and still unable to make payroll. Track your restricted/unrestricted mix as carefully as the total.`,
      reframe: {
        analogy: `A grant proposal is a **spec-driven proof obligation**. The funder's guidelines are the specification — a type signature with required fields (eligibility, outcomes, logic model, budget schema). Your proposal is the implementation that must *type-check* against it: every required field satisfied, every claimed outcome backed by a measurement plan the reviewer will accept as proof. Reviewers are compilers with error messages — they reject on the first unmet constraint. And restricted funds are **tagged/typed memory**: a restricted grant is an allocation that can only be spent on its designated purpose, and spending it elsewhere is a type error (here, an audit finding). Unrestricted funds are general-purpose memory you can point anywhere.`,
        breaks: `Unlike a compiler, grant review is **partly subjective and relational** — program officers, prior relationship, and fundability of the *organization* all weigh in, so a perfectly "type-checking" proposal can still be declined for reasons outside the spec, and cultivating the program officer (as in the individual-donor pipeline) materially raises your odds. The spec is also often ambiguous and worth a pre-submission conversation. Treat "satisfy the spec" as necessary, not sufficient: it gets you into the review, but relationships and organizational credibility decide close calls.`,
      },
      workedExample: `**Rivermark Literacy** (illustrative) builds a grants pipeline. Its historical stage rates:

- Submits **20** letters of inquiry per year.
- **40%** are invited to a full proposal → **8** full proposals.
- **37.5%** of full proposals are funded → **3** grants.
- Average grant size: **$75,000**.

Expected grant revenue is the pipeline volume times the end-to-end probability times gift size:

$$\\text{expected grants} = 20 \\times 0.40 \\times 0.375 = 3 \\quad\\Rightarrow\\quad 3 \\times \\$75,000 = \\$225,000$$

So the realistic expectation is **$225,000** from a 20-LOI pipeline — and the overall LOI-to-award rate is just **15%**, which means grants, like the donor funnel, need a wide top. But look closer at the *composition*: suppose all three grants are **program-restricted**, each capping overhead recovery at **10%**. Then only about $22,500 of the $225,000 can touch general operating costs; roughly **$202,500 is locked** to specific programs. If Rivermark's rent, admin, and core salaries need $120,000 of unrestricted money, this "$225k win" leaves it $97,500 short on the very costs that keep it alive. The lesson: a grants pipeline must be sized on **both** total dollars *and* the restricted/unrestricted mix.`,
      branch: {
        scenario: `A foundation offers Rivermark a **$150,000 restricted** grant to launch a brand-new teen coding program — an area adjacent to, but outside, Rivermark's proven literacy work. The grant funds only the new program and allows just 8% overhead. Rivermark's core literacy program is currently under-resourced. What's the wise move?`,
        choices: [
          {
            label: 'Take it — $150,000 is $150,000, and turning down money is never right.',
            correct: false,
            consequence: `**Instructive miss.** This is **mission drift funded by restricted money**. The grant pays for a new program you weren't resourced to run, adds management load, and delivers almost no overhead to your strained core — you can grow "bigger" while getting *weaker* at your actual mission. Restricted money that pulls you off-strategy can cost more than it gives.`,
          },
          {
            label: 'Evaluate fit first: take it only if the teen program truly advances the mission and the overhead is survivable; otherwise negotiate or decline.',
            correct: true,
            consequence: `**Correct.** Restricted grants must be judged on *strategic fit and full cost*, not headline size. If the new program is a genuine mission extension and you can cover the thin overhead from other unrestricted sources, take it; if it's a distraction, try to negotiate scope/overhead, or decline. Disciplined nonprofits say no to money that funds someone else's priorities.`,
          },
          {
            label: 'Take the money but quietly spend part of it on the core literacy program instead.',
            correct: false,
            consequence: `**Serious error.** Redirecting restricted funds to an unapproved purpose is a **type error with legal teeth** — a breach of the grant agreement, an audit finding, and a fast way to be barred from that funder and others. Restrictions are binding constraints, not suggestions. If you need flexibility, negotiate it *in writing* before accepting.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each source of funds by whether it is restricted (spendable only on a designated purpose) or unrestricted (spendable on anything, including operations).',
          buckets: ['Restricted', 'Unrestricted'],
          items: [
            { text: 'A $75,000 foundation grant earmarked for the after-school reading program', bucket: 'Restricted' },
            { text: 'A $50 online gift with no designation', bucket: 'Unrestricted' },
            { text: 'A government grant that pays only for tutoring materials', bucket: 'Restricted' },
            { text: 'A general annual-fund donation to "support your work"', bucket: 'Unrestricted' },
            { text: 'A capital-campaign gift designated for the new building', bucket: 'Restricted' },
            { text: 'An operating gift a board member gives with no strings', bucket: 'Unrestricted' },
          ],
          explain: 'Restricted funds are legally tied to a purpose (program, capital, materials); unrestricted funds can cover rent, salaries, and reserves. A nonprofit can be "funded" on paper yet unable to make payroll if the mix is all restricted.',
        },
        {
          kind: 'numeric',
          prompt: 'You submit 20 letters of inquiry. 40% are invited to a full proposal, and 37.5% of full proposals are funded, at an average grant of $75,000. What is the expected total grant revenue, in dollars?',
          answer: 225000,
          tolerance: 1,
          unit: '$',
          explain: '20 × 0.40 × 0.375 = 3 grants; 3 × $75,000 = $225,000. A 15% LOI-to-award rate means the institutional pipeline, like the donor funnel, needs a wide top.',
        },
      ],
      tutorHooks: [
        { label: 'Read a funder spec with me', kind: 'ask', question: 'Given a grant\'s published priorities and required outcomes, help me map them like a specification and check whether my program "type-checks" against every required field.' },
        { label: 'Harder grant-mix math', kind: 'harder', concept: 'sizing a grants pipeline on total dollars AND the restricted/unrestricted split against operating need' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A grants pipeline submits 30 LOIs; 30% become full proposals; 40% of those are funded at $60,000 average. Expected grant revenue is:',
          options: ['$216,000', '$540,000', '$108,000', '$720,000'],
          answer: 0,
          explain: '30 × 0.30 × 0.40 = 3.6 grants; 3.6 × $60,000 = $216,000. Multiply pipeline volume by end-to-end probability by average grant size.',
        },
        {
          kind: 'mcq',
          prompt: 'A nonprofit wins $400,000 this year — all of it restricted program grants with 5% overhead caps — but is missing payroll. The core problem is:',
          options: [
            'It raised too little money overall',
            'Its funding mix is starved of unrestricted operating support',
            'Grants are always a bad funding source',
            'It should have spent the restricted grants on payroll',
          ],
          answer: 1,
          explain: 'Total dollars looked healthy, but restricted money can\'t cover core operations. The failure is the restricted/unrestricted MIX. Spending restricted funds on payroll would be a breach — the fix is to raise unrestricted revenue, not to misuse restricted funds.',
        },
        {
          kind: 'free',
          prompt: 'Pick a real or plausible grant your nonprofit could pursue. Treat its guidelines as a specification: list the required fields it demands (eligibility, outcomes, budget, etc.) and note whether the award would be restricted or unrestricted and how that affects your operating budget.',
          rubric: 'Strong answer: (1) treats the funder guidelines as a spec and enumerates concrete required fields/proof obligations; (2) identifies whether funds would be restricted vs unrestricted; (3) reasons about overhead/operating impact and the restricted/unrestricted mix; (4) shows awareness that satisfying the spec is necessary but relationship/fit also matter.',
        },
      ],
      commitSummary: 'concept only — grants complete the acquisition picture before we turn to keeping donors.',
    },

    // -----------------------------------------------------------------------
    {
      id: '105.4',
      module: 105,
      title: 'Donor retention & lifetime value',
      estMinutes: 17,
      prerequisites: ['105.1', '105.2', '105.3'],
      artifactSlot: null,
      concept: `Acquiring a donor is the *expensive* part; the money is in **keeping** them. Sector benchmarks (illustrative, but close to the Fundraising Effectiveness Project's real figures) tell a sobering story: overall donor retention hovers around **45%**, and **first-year** donor retention is often only **~20%** — four of five brand-new donors never give a second gift. Retention among *repeat* donors, by contrast, runs **60%+**. Retention rises sharply once a donor gives twice: the second gift is the real conversion.

Because acquisition frequently costs *more* than a first gift returns, the first year is usually a **loss leader** — you only come out ahead if the donor renews. That makes **donor lifetime value (LTV)** the number that matters:

$$\\text{expected donor lifespan (years)} = \\frac{1}{1 - r}$$

$$\\text{donor LTV} = \\text{annual gift} \\times \\text{expected lifespan}$$

where $r$ is the annual retention rate. The formula is unforgiving of churn: a donor giving the same annual amount is worth far more at 60% retention than at 40%, because lifespan grows *nonlinearly* as retention climbs toward 1.

The operational lever is **stewardship** — prompt thanks, impact reporting, and genuine re-engagement — the *steward* stage of Lesson 105.1's pipeline. Stewardship is cheap relative to acquisition and it directly lifts $r$. The strategic mistake is to pour every dollar into acquiring new donors through a leaky bucket while neglecting the stewardship that would keep the ones you already paid to get. Fix retention first; a higher $r$ multiplies the value of *every* donor you will ever acquire.`,
      reframe: {
        analogy: `Donor retention is **customer retention**, and donor LTV is the same calculation a SaaS company runs. Annual retention $r$ is the survival rate per period; expected lifespan is $\\frac{1}{1-r}$, the mean number of periods before churn; LTV is annual value times lifespan. The whole logic of "retention beats acquisition" transfers directly: a leaky retention rate caps LTV no matter how good your top-of-funnel is, so raising $r$ compounds into every future cohort. Stewardship is your retention program — the emails, reports, and human touch that keep the survival curve high — and its ROI is measured exactly like a churn-reduction initiative: small cost, multiplicative effect on lifetime value.`,
        breaks: `Donors aren't customers buying a service — they give from **belief and identity**, so the levers differ: impact reporting and belonging, not product features or discounts, move donor retention. Gifts are also **irregular and elastic** (a donor can lapse a year then return, or upgrade tenfold after a personal ask), so a single retention rate smooths over lumpier behavior than a subscription. And there's no contract — nothing auto-renews, which makes proactive stewardship more decisive than in a subscription business where inertia does some of the work. Use the LTV math for magnitude; don't assume donor motivation mirrors a paying customer's.`,
      },
      workedExample: `**Rivermark Literacy** (illustrative) compares two donors giving the *same* **$200/year**, differing only in retention.

A **new** donor at first-year retention $r = 0.20$:

$$\\text{lifespan} = \\frac{1}{1 - 0.20} = 1.25 \\text{ years} \\quad\\Rightarrow\\quad \\text{LTV} = 200 \\times 1.25 = \\$250$$

A **repeat** donor at retention $r = 0.60$:

$$\\text{lifespan} = \\frac{1}{1 - 0.60} = 2.5 \\text{ years} \\quad\\Rightarrow\\quad \\text{LTV} = 200 \\times 2.5 = \\$500$$

Same annual gift, **double the lifetime value** — purely from surviving to the second gift. Now the cost side: suppose Rivermark spends **$180** in acquisition to land that new donor's first $200 gift. Year one nets just **$20**. If the donor lapses (the 80% case), Rivermark barely broke even on the acquisition. If stewardship lifts them into the repeat cohort, they return $500 lifetime against $180 acquired — a **2.8×** return. The entire economics hinge on the *second gift*. That's why a modest stewardship budget (a thank-you call, an impact report, a birthday note) that raises repeat retention from 60% to 70% is often the highest-ROI money in the whole development program: at $r = 0.70$, lifespan jumps to $\\frac{1}{0.30} \\approx 3.33$ years and LTV to **$667**.`,
      branch: {
        scenario: `Rivermark's director has $30,000 of discretionary budget and two proposals. **Plan A:** spend it all on acquisition — new ads and a mailing projected to add 150 new donors (avg $200, first-year retention 20%). **Plan B:** spend it on stewardship — a donor-care program projected to lift *repeat* retention from 60% to 70% across an existing 400 repeat donors (avg $200). Which creates more long-term value?`,
        choices: [
          {
            label: 'A — 150 brand-new donors visibly grows the donor base, which is the point of fundraising.',
            correct: false,
            consequence: `**Instructive miss.** 150 new donors at 20% retention are worth ≈ 150 × ($200 × 1.25) = **$37,500** lifetime — and most lapse after year one. Growth in *headcount* through a leaky bucket is not the same as growth in value. Compare before choosing.`,
          },
          {
            label: 'B — lifting repeat retention compounds LTV across a large existing base.',
            correct: true,
            consequence: `**Correct.** Raising 400 repeat donors from 60% to 70% lifts each one's lifespan from 2.5 to ~3.33 years — an LTV gain of ($667 − $500) = **$167 each**, or ≈ **$66,700** across 400 donors, for the same $30,000. Retention improvements compound over an existing base and into every future cohort. Fix the bucket before pouring in more water.`,
          },
          {
            label: 'They\'re equivalent — a dollar of revenue is a dollar of revenue either way.',
            correct: false,
            consequence: `**Avoidable miss.** They are not equivalent once you compute lifetime value: ≈ $37,500 (A) versus ≈ $66,700 (B) from the same spend, because retention gains apply to a whole existing base and persist. The LTV formula exists precisely to stop "a dollar is a dollar" reasoning.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'A repeat donor gives $200 per year and your repeat-donor retention rate is 60%. Using expected lifespan = 1 / (1 − retention), what is this donor\'s lifetime value, in dollars?',
          answer: 500,
          unit: '$',
          explain: 'Lifespan = 1 / (1 − 0.60) = 2.5 years; LTV = $200 × 2.5 = $500. Lifespan grows nonlinearly as retention rises toward 1, so keeping donors is where LTV is made.',
        },
      ],
      tutorHooks: [
        { label: 'Compute my donor LTV', kind: 'ask', question: 'Given my average annual gift and a realistic retention rate for my nonprofit, compute donor lifetime value and show how much it changes if I lift retention by 10 points.' },
        { label: 'Harder retention/LTV case', kind: 'harder', concept: 'donor LTV across new vs repeat cohorts and the ROI of a stewardship program versus acquisition' },
        { label: 'Critique my plan', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A donor gives $300/year. If you can raise their retention from 50% to 75%, their expected lifespan (using 1/(1−r)) goes from:',
          options: [
            '2 years to 4 years (LTV $600 to $1,200)',
            '2 years to 3 years (LTV $600 to $900)',
            '1.5 years to 2 years (LTV $450 to $600)',
            '2 years to 2.5 years (LTV $600 to $750)',
          ],
          answer: 0,
          explain: 'Lifespan = 1/(1−0.50) = 2 years and 1/(1−0.75) = 4 years. LTV = $300 × 2 = $600 vs $300 × 4 = $1,200. Lifespan doubles from a 25-point retention gain — the nonlinearity is the whole point.',
        },
        {
          kind: 'mcq',
          prompt: 'First-year donor retention is ~20% but repeat-donor retention is ~60%. The single most important event in donor economics is therefore:',
          options: [
            'The very first gift, because acquisition is what grows the base',
            'The second gift, because it converts a donor into the durable repeat cohort',
            'The largest gift, because major donors dominate revenue',
            'The final gift, because it caps lifetime value',
          ],
          answer: 1,
          explain: 'The retention jump happens at the second gift: getting a donor to give again moves them from the ~20% cohort to the ~60% cohort, multiplying their lifetime value. Stewardship exists to earn that second gift.',
        },
        {
          kind: 'free',
          prompt: 'Estimate donor LTV for YOUR nonprofit at two retention rates (e.g. your new-donor and repeat-donor rates) using the 1/(1−r) formula. Then decide: given a fixed budget, would you spend the next dollar on acquisition or stewardship, and why?',
          rubric: 'Strong answer: (1) applies expected lifespan = 1/(1−r) at two plausible retention rates; (2) computes LTV = annual gift × lifespan correctly for both; (3) recognizes the nonlinear payoff of higher retention; (4) makes a defensible acquisition-vs-stewardship choice grounded in the LTV math and the leaky-bucket logic, typically favoring retention when the base is sizeable.',
        },
      ],
      commitSummary: 'concept only — you now have the full nonprofit development engine: funnel, pyramid, grants, and retention.',
    },
  ],
}
