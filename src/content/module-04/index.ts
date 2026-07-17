import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 4 — Product-market fit & positioning
//
// The qualitative counterpart to Module 5's unit economics. Where M5 asks
// "does one unit make money?", M4 asks "are you even the right thing for the
// right people?" — and makes that question measurable. PMF is framed as a
// monitored invariant (an SLO), positioning as an API contract, the value
// proposition as a cost function the customer minimizes, and pivoting as
// refactoring. The final lesson writes startup.positioning via the reusable
// `form` artifact.
// ===========================================================================

export const module4: Module = {
  id: 4,
  title: 'Product-market fit & positioning',
  goal: 'Define what you are, for whom, versus what — and how you\'ll know when it\'s working.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '4.1',
      module: 4,
      title: 'PMF as a monitored invariant',
      estMinutes: 15,
      prerequisites: [],
      artifactSlot: null,
      concept: `**Product-market fit (PMF)** is the state where a market pulls your product out of your hands faster than you can ship it — retention holds, word of mouth compounds, and demand outruns your ability to serve it. The trouble is that "you'll know it when you feel it" is useless as an operating signal. You need a **measurable proxy** you can watch.

The best-known proxy is the **Sean Ellis test**: survey users who have genuinely used the product and ask, *"How would you feel if you could no longer use this?"* The load-bearing number is the fraction answering **"very disappointed."** Ellis's empirical benchmark across many startups was that clearing roughly **40%** correlates with products that went on to sustainable growth; below it, growth efforts tend to stall.

Treat 40% as a **threshold on a health metric**, not a trophy. PMF is not a milestone you pass once and forget — markets move, competitors ship, your ICP shifts. It is a signal you **keep monitoring**, backed by leading indicators (retention curves, organic referral rate, activation rate) that move *before* the survey does. PMF is less "did we launch" and more "is the invariant still holding this month."`,
      reframe: {
        analogy: `PMF is a **Service Level Objective**. "≥ 40% very disappointed" is your SLO target on the metric that actually predicts survival, exactly like "p99 latency < 200ms" is a target on the metric that predicts a usable service. You don't check an SLO once at launch — you put it on a dashboard and alert on it, because the thing it guards degrades silently. The Sean Ellis survey is your periodic probe; retention, activation, and referral rate are the **leading indicators** that trip *before* the top-line SLO breaches, the way rising error rates warn you before latency violates the objective. Below the threshold, you are in a degraded state and your priority is remediation, not new features.`,
        breaks: `An SLO measures a system whose behavior is stationary between deploys; a market is **non-stationary and adversarial**. Your 40% can erode with zero change on your side because a competitor shipped or the ICP's needs drifted — there is no "we didn't touch it, so it's fine." The survey is also a **lagging, small-n, self-report** probe: it's noisy, gameable by whom you choose to survey, and easy to juice by narrowing to fans. And unlike a latency SLO there's no clean SLA contract — 40% is a robust rule of thumb from Ellis's data, not a law of physics. Use it to trigger attention, not to declare victory.`,
      },
      workedExample: `**Meridian** (CI insights for small eng teams, ICP ~5–30 devs) surveys the **60** teams that reached the "activated" state — connected a repo and viewed at least three insight reports.

| answer | count | share |
|---|---|---|
| Very disappointed | 21 | 35% |
| Somewhat disappointed | 24 | 40% |
| Not disappointed | 15 | 25% |

The headline is **35% very disappointed** — *below* the 40% SLO. But the leading indicators say more: among teams of **10–20 devs** the "very disappointed" share is **48%**, while among **solo and 2-dev** teams it's **12%**. Meridian doesn't have a broken product; it has a **segment mismatch** — strong fit in the mid-size band, noise from the tiny teams dragging the blended number down. The remediation isn't "add features"; it's tightening the ICP toward the 10–20-dev core where the invariant already holds. That is a positioning decision (lesson 4.2), diagnosed by monitoring the metric instead of the vibe.`,
      branch: {
        scenario: `Meridian's blended "very disappointed" score is **35%**, under the 40% line. The founder has three interpretations on the table. Which is the soundest read of the signal?`,
        choices: [
          {
            label: 'We failed the PMF test — pivot the whole product to a new idea.',
            correct: false,
            consequence: `**Instructive miss.** A single blended number below threshold is a *trigger to investigate*, not a verdict to abandon. The segment breakdown shows a 48%-fit core hiding inside the average — throwing out the product would discard a segment that already clears the SLO. You'd pivot away from your best users because you read the aggregate instead of the distribution.`,
          },
          {
            label: 'Segment the responses first — the blended number may be masking strong fit in a sub-ICP.',
            correct: true,
            consequence: `**Correct.** The 40% test is only as meaningful as the population you run it on. Slicing by team size reveals 48% fit in the 10–20-dev band and near-zero fit among solo teams. The right move is to *narrow the ICP* to where the invariant holds and re-measure, not to declare global failure. Monitoring means reading the distribution, not just the mean.`,
          },
          {
            label: 'Ignore it — 35 is close enough to 40, ship more features and it\'ll drift up.',
            correct: false,
            consequence: `**Instructive miss.** "Close enough" treats a health signal as a vanity target. Shipping features blindly is the most expensive way to move the number, and it ignores the leading indicators (the segment split) already pointing at the real cause. You'd burn a quarter of roadmap on the wrong remediation.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Design my PMF survey', kind: 'ask', question: 'Given my domain and ICP, who exactly should I survey for a valid Sean Ellis test, and what leading indicators (retention, activation, referral) should I watch alongside it?' },
        { label: 'Harder: interpret a noisy PMF signal', kind: 'harder', concept: 'reading a below-threshold Sean Ellis score across heterogeneous segments and deciding narrow vs pivot' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A founder runs the Sean Ellis test on all newsletter subscribers (most of whom never used the product) and gets 55% "very disappointed." What is the most likely problem?',
          options: [
            'Nothing — 55% clears the 40% bar, they have PMF',
            'The population is wrong; the survey must target genuine, activated users',
            'The 40% benchmark is too low and should be raised',
            'Very disappointed is the wrong answer to count',
          ],
          answer: 1,
          explain: 'The test is only valid on users who have *genuinely used* the product. Surveying subscribers who never activated measures brand affinity, not fit — a classic way to fake a passing score. The population you probe is the whole ballgame.',
        },
        {
          kind: 'mcq',
          prompt: 'Why is it better to think of the 40% threshold as an SLO rather than a launch milestone?',
          options: [
            'Because SLOs are legally binding and milestones are not',
            'Because a market is non-stationary — fit can erode with no change on your side, so you must keep monitoring',
            'Because 40% is a physical constant that never changes',
            'Because milestones are measured in months and SLOs in seconds',
          ],
          answer: 1,
          explain: 'Fit degrades silently as competitors ship and the ICP drifts. An SLO framing forces continuous monitoring and leading indicators; a milestone framing lets you declare victory once and stop watching the metric that predicts survival.',
        },
        {
          kind: 'free',
          prompt: 'Define the PMF metric you would monitor for YOUR product, name the exact population you would survey, and list two leading indicators that would move before the survey does. What threshold would put you in a "degraded" state?',
          rubric: 'A strong answer: (1) names a concrete PMF proxy (Sean Ellis % very disappointed, or a defensible retention/organic-growth metric) with a specific threshold; (2) specifies a valid survey population (activated/genuine users, not all signups or subscribers); (3) names two plausible leading indicators (retention curve, activation rate, organic referral rate) that lead the survey; (4) frames it as an ongoing monitored signal rather than a one-time launch gate.',
        },
      ],
      commitSummary: 'concept only — you commit your positioning and PMF metric in lesson 4.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '4.2',
      module: 4,
      title: 'Positioning as an API contract',
      estMinutes: 14,
      prerequisites: ['4.1'],
      artifactSlot: null,
      concept: `**Positioning** is the promise you expose to the market: *what you are, for whom, and versus what.* It is not a tagline and not the sum of your features — it is the small set of **guarantees** a customer relies on when they choose you, and the **reference frame** (the category) they use to judge you.

The classic template forces every load-bearing decision into one sentence:

> For **[target customer]** who **[need/opportunity]**, **[product]** is a **[category]** that **[key benefit]**. Unlike **[primary alternative]**, our product **[key differentiation]**.

Each blank is a commitment. The **category** sets expectations — call yourself a "CI insights tool" and buyers expect it to sit next to their CI, not replace it. The **alternative** names who you're really fighting (often "a spreadsheet" or "nothing," not the obvious competitor). The **differentiation** is the one guarantee they can't get from the alternative.

Good positioning is **narrow and sharp**. "For everyone who writes code" exposes no contract at all — it promises nothing specific, so nobody self-selects. Positioning that tries to serve every caller ends up serving none, because the guarantees get so weak they stop distinguishing you.`,
      reframe: {
        analogy: `Positioning is an **API contract**. The positioning statement is your published interface: it declares the **type signature** (category — what kind of thing you are), the **intended caller** (ICP — who this endpoint is for), the **guarantee** (key benefit — what you promise to return), and the **contract you beat** (the alternative and your differentiation). Customers integrate against that contract. When your marketing, onboarding, and product all honor the same declared interface, callers get exactly what the signature promised and trust compounds. Narrowing the ICP is like tightening a type: a precise signature makes it obvious who should call you and lets those callers integrate with confidence.`,
        breaks: `An API contract is **enforced by the runtime** — violate it and you get a compile error or an exception. Positioning is enforced only by **customer perception and memory**, which are fuzzy, slow, and swayed by competitors restating your contract for you. You can also **version an API** with deprecation windows; repositioning is closer to a breaking change with no migration guide — existing customers keep calling the *old* contract in their heads for months. And a market can simply **reject your declared category** ("we don't think you're a CI tool, we think you're a nice-to-have report") — imagine callers who override your type signature by consensus. The contract only holds if the market agrees to honor it.`,
      },
      workedExample: `**Meridian's** positioning statement, each blank a deliberate commitment:

> For **small engineering teams of 5–30 developers** who **need to catch CI regressions and flaky tests without a dedicated platform team**, **Meridian** is a **CI insights tool** that **surfaces the failing tests and slow pipelines costing you the most, ranked by impact**. Unlike **staring at raw CI logs or building your own dashboards**, Meridian **turns pipeline noise into a prioritized fix list on day one**.

Read the contract it exposes:

- **ICP** = 5–30 devs — narrow enough that a 10-person team instantly knows "that's us" and a 500-engineer org knows it's not.
- **Category** = "CI insights tool" — sits *beside* existing CI, doesn't ask anyone to rip out GitHub Actions. Sets the right comparison frame.
- **Alternative** = "raw logs / DIY dashboards," not a named competitor. That's the honest default Meridian actually displaces.
- **Differentiation** = "prioritized fix list on day one" — the one guarantee a spreadsheet of logs can't make.

Notice what's *excluded*: no promise of full CI/CD orchestration, no enterprise SSO story, no 500-dev scale claim. Those omissions are the contract too — they tell the market which calls **not** to make, which is exactly why the mid-size ICP trusts the ones it does make.`,
      branch: {
        scenario: `Meridian is tempted to broaden its statement to *"For any software team that wants better CI, Meridian is a DevOps platform that improves your whole pipeline."* The reasoning: a bigger category and wider ICP means a bigger market. Is this a stronger contract?`,
        choices: [
          {
            label: 'Yes — "any software team" and "DevOps platform" address a far larger market.',
            correct: false,
            consequence: `**Instructive miss.** Widening the ICP to "any team" means no specific caller self-selects — a 10-dev team no longer sees itself, and a 500-dev org expects orchestration you don't have. "DevOps platform" also re-frames the comparison against heavyweight incumbents you'll lose to on features. A bigger declared surface with weaker guarantees is a *worse* contract, not a broader one.`,
          },
          {
            label: 'No — the broader category over-promises and the vague ICP makes nobody self-select; keep it narrow.',
            correct: true,
            consequence: `**Correct.** "DevOps platform" changes the category buyers judge you in — now you're compared to full orchestration suites and found lacking, because you set an expectation you can't guarantee. And "any software team" is a signature so generic no caller integrates against it. Sharp positioning wins the mid-size segment decisively; broad positioning loses everyone slowly. Narrow the type, honor the contract.`,
          },
          {
            label: 'It doesn\'t matter — positioning is just marketing copy, the product is the same either way.',
            correct: false,
            consequence: `**Instructive miss.** Positioning isn't decoration on a fixed product; it's the contract that determines who shows up, what they expect, and who you're measured against. Change the declared category and you change the comparison set, the churn drivers, and the roadmap pressure. Same binary, entirely different contract — and the market judges the contract.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Draft my positioning statement', kind: 'ask', question: 'Using the For-X-who-Y template, draft a positioning statement for my product. Push me on whether my ICP is narrow enough and whether my named alternative is the real one (often a spreadsheet or "nothing").' },
        { label: 'Harder: pick the right category', kind: 'harder', concept: 'choosing a product category that sets a winnable comparison frame rather than one that invites comparison to incumbents' },
        { label: 'Critique my positioning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In the positioning template, why does the "unlike [primary alternative]" slot often name a spreadsheet or "doing nothing" rather than a direct competitor?',
          options: [
            'Because naming competitors is legally risky',
            'Because the real thing most customers use today is usually a manual workaround or nothing, and that is what you actually displace',
            'Because spreadsheets are always the strongest competitor in every market',
            'Because you should never acknowledge that competitors exist',
          ],
          answer: 1,
          explain: 'Most buyers are not switching from a named rival — they are switching from a manual hack or from doing nothing. Positioning against that honest default is more persuasive than positioning against a competitor the buyer may not even be considering.',
        },
        {
          kind: 'mcq',
          prompt: 'A founder positions their product "for everyone who works with data." What is the core problem with this as an API contract?',
          options: [
            'It targets too small a market',
            'The type signature is so generic that no specific caller self-selects and the guarantees become too weak to distinguish the product',
            'It names too many competitors',
            'It uses the wrong product category',
          ],
          answer: 1,
          explain: 'An over-broad ICP exposes no meaningful contract: nobody sees themselves as the intended caller, and to serve "everyone" the guarantees must weaken until they stop differentiating. A precise, narrow signature is what lets the right callers integrate with confidence.',
        },
        {
          kind: 'free',
          prompt: 'Write a first-draft positioning statement for YOUR product using the full template (For X who Y, we are a Z that W, unlike V). Then critique your own draft: is the ICP narrow enough to self-select, and is the named alternative the one customers actually use today?',
          rubric: 'A strong answer: (1) fills every slot of the template — ICP, need, product, category, benefit, alternative, differentiation; (2) has an ICP specific enough that a real customer would recognize themselves; (3) names an honest primary alternative (often a manual workaround or "nothing," not just the obvious competitor); (4) states a differentiation that the named alternative genuinely cannot provide; (5) reflects critically on whether the category sets a winnable comparison frame.',
        },
      ],
      commitSummary: 'concept only — you commit the finished statement in lesson 4.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '4.3',
      module: 4,
      title: 'The value proposition as a cost function',
      estMinutes: 14,
      prerequisites: ['4.1', '4.2'],
      artifactSlot: null,
      concept: `A customer never buys on price alone. They minimize a **total cost of adoption** — a sum of everything it takes to get and keep the outcome you promise:

$$C_{\\text{total}} = C_{\\text{money}} + C_{\\text{time}} + C_{\\text{risk}} + C_{\\text{switching}}$$

- **Money** — the sticker price and ongoing fees.
- **Time** — evaluation, integration, learning, and ongoing operation.
- **Risk** — the expected cost of it not working: wasted effort, reputational hit, having to rip it out.
- **Switching** — leaving the incumbent: migration, retraining, breaking existing workflows.

Your **value proposition** is not "our features are good." It is a claim that *you lower this cost function* relative to the alternative — either by delivering a bigger benefit for the same total cost, or the same benefit at a lower total cost. Crucially, **price is only one term.** A product that costs $40 more but removes a week of integration time and a large risk of failure can still *minimize* the customer's total cost. This is why "we're cheaper" is a weak value proposition and "you're running in ten minutes with zero migration" is a strong one — the second attacks the terms that usually dominate the sum.`,
      reframe: {
        analogy: `The customer is running an **optimizer minimizing a cost function**, and your value proposition is a claim about the shape of that function. Sticker price is just one term with one weight; **time, risk, and switching cost** are the other terms, and for most B2B buyers they dominate — integration time and the risk of a failed rollout routinely outweigh a monthly fee. A good value prop is a **gradient step that moves the customer to a lower total cost** than the incumbent point they're sitting on. "Cheaper" only touches $C_{\\text{money}}$; the highest-leverage value props attack whichever term is largest — usually the switching or risk term the incumbent is quietly charging.`,
        breaks: `A real cost function has clean, commensurable units; the customer's terms are **in different currencies and only partly conscious**. You can't literally add dollars, hours, and reputational risk — buyers weight them with private, shifting exchange rates, and often *can't articulate* the risk term even though it drives the decision. The weights are also **heterogeneous across the ICP**: a solo founder weights time cost brutally, an enterprise weights risk and compliance far above price. So there is no single global minimum you can compute for everyone — the "function" is a useful model for *which term to attack*, not a quantity you optimize to a number. Treat it as a map of leverage, not a spreadsheet.`,
      },
      workedExample: `**Meridian** costs **$40/seat/month** — strictly *more* money than the alternative, which is "read raw CI logs for free." A naive money-only view says Meridian loses. Model the full cost function for a **12-dev team** instead:

| term | DIY / raw logs | Meridian |
|---|---|---|
| Money | $0 | $40 × 12 = $480/mo |
| Time | ~6 hrs/week triaging flaky tests & slow pipelines | ~30 min/week reviewing a ranked fix list |
| Risk | regressions slip to production; no prioritization | high-impact failures surfaced first |
| Switching | none (already there) | ~10 min: connect repo, no migration |

The **money term goes up** by $480/mo, but the **time term collapses** — roughly 5.5 engineer-hours/week returned. At even a conservative loaded rate, that time saving dwarfs the $480, and the **switching cost is near zero** (ten-minute setup, no migration off anything). Meridian's value proposition isn't "cheaper" — it's *"we lower your total cost by trading a small money term for a large time-and-risk saving, with almost no switching cost to get there."* That is the sentence that justifies charging **more** than free and still minimizing the customer's cost function. It's also why the ten-minute onboarding is a feature, not a detail: it zeroes the term that most often blocks adoption.`,
      branch: {
        scenario: `A prospect tells Meridian: *"A competitor is $10/seat cheaper than you."* The founder can respond three ways. Which best reflects the cost-function view?`,
        choices: [
          {
            label: 'Match the price — drop to $30/seat so we\'re not more expensive.',
            correct: false,
            consequence: `**Instructive miss.** Competing on the money term alone is the weakest game — it cuts your contribution margin (from $31 toward $21) to fight on the *smallest* term in most buyers' cost function. If the customer truly optimized on price they'd already be using free raw logs. Reflexively price-matching concedes that money is the only term, which is exactly the frame you should refuse.`,
          },
          {
            label: 'Reframe on total cost — show the time saved and risk removed dwarf a $10 price gap.',
            correct: true,
            consequence: `**Correct.** $10/seat is a rounding error next to 5+ engineer-hours/week and the risk of a regression reaching production. The right move is to shift the conversation from $C_{\\text{money}}$ to the terms that dominate the sum: quantify the time returned and the risk removed. If the competitor can't match *those*, the $10 gap is irrelevant to a buyer minimizing total cost.`,
          },
          {
            label: 'Ignore it — price objections aren\'t real, just push features harder.',
            correct: false,
            consequence: `**Instructive miss.** The objection is real and dismissing it loses the deal. But "push features" also misses the point: features only matter insofar as they lower a cost term. The answer is neither to cave on price nor to feature-dump, but to *re-anchor on total cost* and show which terms you shrink.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Map my customer\'s cost function', kind: 'ask', question: 'For my product and ICP, break the customer\'s total cost of adoption into money, time, risk, and switching terms. Which term is largest today, and which does my value proposition actually reduce?' },
        { label: 'Harder: quantify time-vs-money trade', kind: 'harder', concept: 'justifying a higher price by quantifying the time and risk terms you reduce for a specific ICP' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A product costs $50/mo more than the incumbent but eliminates a two-week migration and a real risk of data loss. In the total-cost model, why can it still be the cost-minimizing choice?',
          options: [
            'Because money is the only term that matters and $50 is small',
            'Because it lowers the time, risk, and switching terms enough to more than offset the higher money term',
            'Because higher-priced products are always higher quality',
            'Because switching cost is irrelevant to buyers',
          ],
          answer: 1,
          explain: 'Total cost is money + time + risk + switching. Adding $50 to the money term while removing a two-week migration (time + switching) and a data-loss risk can lower the *sum*. Price is one term among several, and rarely the dominant one in B2B.',
        },
        {
          kind: 'mcq',
          prompt: 'Why is "we are cheaper than the competition" usually a weak value proposition for a B2B tool?',
          options: [
            'Because being cheaper is illegal in most markets',
            'Because it competes only on the money term, which is often the smallest in the buyer\'s cost function, and it invites a price war that erodes margin',
            'Because customers never care about price',
            'Because cheaper products cannot have good positioning',
          ],
          answer: 1,
          explain: 'Money is typically a minor term next to time, risk, and switching cost for B2B buyers. Competing on price attacks the weakest lever and starts a margin-destroying race; strong value props attack the dominant terms the incumbent is quietly charging.',
        },
        {
          kind: 'free',
          prompt: 'Write YOUR value proposition as a claim about the customer\'s cost function: which of the four terms (money, time, risk, switching) does your product reduce most, versus which alternative? Be concrete about the size of the reduction.',
          rubric: 'A strong answer: (1) explicitly frames the value prop in terms of reducing total cost, not just "good features"; (2) identifies which of the four terms dominates for their ICP and which their product reduces; (3) gives a concrete estimate of the reduction (hours saved, risk removed, migration avoided); (4) compares against a named alternative and acknowledges any term (often money) that their product increases, showing the net is still favorable.',
        },
      ],
      commitSummary: 'concept only — you state your value proposition as reduced cost in lesson 4.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '4.4',
      module: 4,
      title: 'Measuring PMF & pivoting as refactoring',
      estMinutes: 18,
      prerequisites: ['4.1', '4.2', '4.3'],
      artifactSlot: 'positioning',
      concept: `You now have three things to commit: a **PMF metric** to monitor, a **positioning statement**, and a **value proposition**. The last skill is knowing what to do when the metric stays below target: **pivot or persevere.**

The engineering distinction that clarifies this: a **pivot changes the interface; a refactor changes only the internals.** Not every change is a pivot. Tuning onboarding, re-pricing, or swapping your acquisition channel are **refactors** — the promise to the market (your positioning contract) stays the same; you're improving how you deliver it. A **pivot** changes the exposed contract itself: a new ICP, a new category, a new core benefit. That's a *breaking change* to everyone integrating against your old promise.

The decision rule ties back to lesson 4.1. **Persevere and refactor** when the PMF signal is below target but a *sub-segment clears it* and leading indicators (retention, referral) are trending up — you have a working core to amplify. **Pivot** when, after honest iteration, **no segment** shows durable fit and the leading indicators are flat or falling — the interface itself is wrong, and no amount of internal tuning fixes a wrong contract. Pivot deliberately and rarely: like a breaking API change, it strands existing users and resets trust, so it must be a considered decision, not a monthly reflex.`,
      reframe: {
        analogy: `Improving your product is **refactoring**; pivoting is a **breaking interface change.** A refactor rewrites internals — onboarding flow, pricing mechanics, acquisition channel, the implementation of the promise — while the public contract (positioning: who it's for, what category, what benefit) stays stable, so existing customers notice nothing break. A pivot **rewrites the public signature**: new ICP, new category, new core guarantee. Every integrator against the old contract now gets a compile error. The rule of thumb transfers cleanly: **refactor freely and often** to hit your PMF SLO; **change the interface rarely and deliberately**, only when you've proven the contract itself — not its implementation — is what's failing.`,
        breaks: `In code you *own the callers* and can migrate them on your schedule; in a market your "callers" are customers with their own memory and momentum, and a pivot **strands them with no migration path** — they don't recompile, they churn. The cost asymmetry is also brutal: a bad refactor is cheap to revert, a pivot **resets your trust, brand, and often your team's morale** and is very hard to undo. And there's no test suite that turns green to tell you the pivot "passed" — you only learn if the new interface fits by *re-running the whole PMF measurement over months*. So the code intuition ("refactor internal, pivot interface") is right about *what changed*, but understates how expensive and irreversible the interface change is in a market.`,
      },
      workedExample: `**Meridian**, pulling the whole module together. Its blended PMF metric sits at **35% very disappointed** — under the 40% SLO — but from lesson 4.1 the **10–20-dev segment reads 48%**, retention in that band is flattening (a durable core), and referral rate there is rising. Diagnosis: **persevere and refactor**, don't pivot.

The refactors (internals; contract unchanged):
- **Positioning refactor:** tighten the ICP language from "5–30 devs" toward the 10–20-dev core where fit is proven — sharpening the same contract, not replacing it.
- **Onboarding refactor:** the solo/2-dev teams that churned never activated; gate signup toward team accounts so the measured population matches the ICP that actually fits.
- **Value-prop refactor:** lead with the time saved (5+ eng-hrs/week) for mid-size teams, the dominant cost term for that segment.

None of these touch the exposed contract — Meridian is still "a CI insights tool for small eng teams." Contrast the *pivot* Meridian is **not** doing: abandoning CI insights to become, say, a generic observability platform for enterprises. That would rewrite the ICP, the category, and the core benefit at once — a breaking change stranding the 48%-fit core it just found. With unit economics still thin (**LTV:CAC ≈ 1.69×**), amplifying a proven segment via refactors is far safer than betting the company on a new interface. Prove the contract, then commit to it — which is exactly what you do now.`,
      artifact: {
        componentKey: 'form',
        prompt: `Commit your positioning. Fill the statement template with YOUR ICP and alternative, state the value proposition as the cost you reduce, and define the PMF metric you'll monitor plus its target.`,
        fields: [
          { key: 'statement', label: 'Positioning statement (For X who Y, we are a Z that W, unlike V)', type: 'textarea' },
          { key: 'valueProp', label: 'Value proposition — what cost do you reduce?', type: 'textarea' },
          { key: 'pmfMetric', label: 'PMF metric you will monitor', type: 'text', placeholder: 'e.g. % who would be very disappointed without it' },
          { key: 'pmfTarget', label: 'Target value for that metric', type: 'number' },
        ],
      },
      branch: {
        scenario: `Your product has been live two quarters. Blended "very disappointed" is stuck at **28%**, and — unlike Meridian — *no* sub-segment clears 40%; retention curves are still falling across the board and referral is flat. A teammate proposes shipping three more features to "push the number up." What's the right call?`,
        choices: [
          {
            label: 'Ship the three features — more value will lift the PMF number.',
            correct: false,
            consequence: `**Instructive miss.** Feature-adding is an *internal refactor*, and refactors only help when a working core exists to amplify. With no segment clearing threshold and leading indicators falling, the evidence says the **contract itself is wrong** — wrong ICP, category, or benefit. More features on a wrong interface just polishes something the market doesn't want. This is the most common way teams burn a year avoiding a pivot.`,
          },
          {
            label: 'Treat it as a pivot signal: no segment fits and indicators are falling, so re-examine the interface — ICP, category, or core benefit.',
            correct: true,
            consequence: `**Correct.** The decision rule from this module: refactor when a sub-segment clears the SLO and indicators trend up; **pivot when no segment shows durable fit and leading indicators are flat or falling.** That's the pattern here. The honest move is to change the *interface* — who it's for, what category, what benefit — not to tune internals harder. Pivot deliberately (it's a breaking change), but the signal is unambiguous.`,
          },
          {
            label: 'Do nothing and keep monitoring — 28% might drift to 40% on its own.',
            correct: false,
            consequence: `**Instructive miss.** Monitoring is right *as an ongoing discipline*, but a metric stuck below target for two quarters with falling leading indicators is not noise you wait out — it's a signal demanding action. Passive waiting burns runway while the interface stays wrong. The SLO framing is meant to *trigger remediation*, and here remediation means re-examining the contract, not hoping.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Pivot or persevere on my numbers', kind: 'ask', question: 'Given my PMF metric, my segment breakdown, and my retention/referral trends, apply the decision rule: is my situation a refactor (persevere) or an interface change (pivot)? Name what specifically I would change in each case.' },
        { label: 'Critique my committed positioning', kind: 'critique' },
        { label: 'Harder: distinguish refactor from pivot', kind: 'harder', concept: 'classifying proposed changes (re-pricing, new ICP, new channel, new category) as internal refactors vs breaking interface pivots' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Under the refactor-vs-pivot framing, which of these is a PIVOT (a breaking interface change) rather than a refactor?',
          options: [
            'Changing your monthly price from $40 to $50 per seat',
            'Redesigning the onboarding flow to improve activation',
            'Switching your target customer from small eng teams to enterprise security orgs, with a new category and core benefit',
            'Moving acquisition spend from paid ads to content marketing',
          ],
          answer: 2,
          explain: 'Re-pricing, onboarding, and channel changes are internal refactors — the market-facing contract (who it\'s for, what category, what benefit) is unchanged. Changing the ICP, category, and core benefit rewrites the exposed interface: that is a pivot, a breaking change to everyone integrating against your old promise.',
        },
        {
          kind: 'mcq',
          prompt: 'Your blended PMF score is below 40%, but one clear sub-segment reads 46% with rising retention and referral. The decision rule says:',
          options: [
            'Pivot immediately — the blended number is below target',
            'Persevere and refactor: amplify the proven segment (tighten ICP, fix onboarding) without changing the exposed contract',
            'Do nothing until the blended number crosses 40% on its own',
            'Abandon the segment that fits and chase the ones that don\'t',
          ],
          answer: 1,
          explain: 'A sub-segment clearing the SLO with improving leading indicators is a working core to amplify — that calls for internal refactors (narrow the ICP, fix the population you onboard), not a pivot. You pivot only when NO segment shows durable fit and indicators are flat or falling.',
        },
        {
          kind: 'free',
          prompt: 'Suppose your monitored PMF metric sits below its target for two quarters. Describe how you would decide between pivoting and persevering, referencing your segment breakdown and leading indicators — and give one concrete example of a refactor you would try before ever considering a pivot.',
          rubric: 'A strong answer: (1) applies the decision rule — persevere/refactor when a sub-segment clears the threshold and leading indicators trend up, pivot when no segment shows durable fit and indicators are flat/falling; (2) references their actual PMF metric and target (ideally the one they committed in the artifact); (3) distinguishes an internal refactor (pricing, onboarding, channel, ICP-tightening) from an interface pivot (new ICP, category, or core benefit); (4) names at least one concrete refactor to try first and treats a pivot as a deliberate, costly breaking change, not a reflex.',
        },
      ],
      commitSummary: 'your positioning statement, value proposition, and monitored PMF metric with its target — written to **startup.positioning**, the promise the rest of your plan must honor.',
    },
  ],
}
