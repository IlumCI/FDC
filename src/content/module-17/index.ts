import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 17 — Growth, funnels & real analytics  (SEASON 2)
//
// Season 2 is "Building for Real": the learner now instruments an ACTUAL
// product, on real analytics platforms, and makes real decisions from the
// numbers. This module is the measurement backbone. It refuses the two failure
// modes engineers fall into with analytics: (1) drowning in dashboards that
// feel productive but guide nothing (vanity), and (2) shipping "improvements"
// on gut feel with no controlled test. Every lesson is artifactSlot:null; the
// real work is tracked through interactive `blocks` — a platformTask writes an
// actual event/funnel into the learner's analytics tool, a document writes a
// cohort read into "My venture". The throughline: analytics is not reporting,
// it is a decision system — instrument like an engineer, read curves like a
// scientist, and only trust a lift you measured against a control.
// ===========================================================================

export const module17: Module = {
  id: 17,
  season: 2,
  title: 'Growth, funnels & real analytics',
  goal: 'Turn analytics into decisions: instrument real events, read cohorts and retention on real curves, and run experiments that actually move a metric.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '17.1',
      module: 17,
      title: 'Actionable vs vanity metrics',
      estMinutes: 16,
      prerequisites: [],
      artifactSlot: null,
      concept: `A dashboard is not analytics. Analytics is the discipline of measuring the *one* thing that, when it moves, tells you what to do next. Most founders instead accumulate **vanity metrics** — numbers that feel good, always trend up, and change no decision. Total registered users, cumulative downloads, pageviews, followers: every one of them can be large and rising while the business quietly dies. They are the analytics equivalent of a green build with no tests.

The distinguishing test of an **actionable metric** is brutally simple: *if this number changed, would I do something different?* An actionable metric is (a) tied to delivered value, (b) able to go **down**, and (c) attributable — you can trace a move back to a cause you control. Week-1 activation rate, weekly active users completing the core action, free-to-paid conversion, cohort retention: each of these can fall, and each fall points at a specific broken thing you can go fix.

Before you can read any metric, you must **instrument** it, and instrumentation is just logging with a schema. You would never debug a distributed system by watching CPU go up; you emit structured, named events at the exact points that matter — \`signup_completed\`, \`workflow_finished\`, \`invite_sent\` — with typed properties, and you decide the schema *before* you need the data, because you cannot query events you never emitted. A tool like PostHog will *autocapture* clicks and pageviews for free, but autocapture is \`printf\` debugging: fine to start, useless for the questions that decide your company. The metric that matters is almost always a **custom event** you deliberately fire.

The goal of this lesson is to make you allergic to numbers that only rise, and fluent in choosing — and instrumenting — the small set that actually steer.`,
      reframe: {
        analogy: `Instrumenting product events is **structured logging and observability**, one-for-one. You already know that \`log.info("something happened")\` is worthless at 3am, and that what saves you is a named event with typed fields — a trace span with attributes — emitted at the exact code path you'll later need to reason about. Product events are the same: \`posthog.capture('workflow_completed', { plan, team_size, seconds_elapsed })\` is a structured log line for user behavior. A vanity metric is the equivalent of only ever graphing "total log lines emitted": a big, comforting, monotonic number that tells you nothing about whether the system is healthy. Actionable metrics are your SLIs — the few signals you'd actually page on.`,
        breaks: `Server logs record *deterministic* events from a system you fully specified; product events record *humans*, who are noisy, adversarial, and context-dependent. A log line means exactly what the code says; a \`button_clicked\` event might mean intent, confusion, a misclick, or a bot. So you cannot debug behavior the way you debug a stack trace — a single event is evidence, not proof, and the meaning lives in aggregates and cohorts, not individual lines. And unlike logs, over-instrumenting has a real cost beyond disk: every extra event is schema you must maintain, a privacy surface, and a distraction. The engineering instinct "log everything, grep later" quietly becomes "500 event types nobody trusts." Instrument *deliberately*, around decisions, not exhaustively.`,
      },
      workedExample: `**Eric Ries and IMVU's "vanity metrics" (documented in The Lean Startup, 2011).** IMVU — the 3D avatar chat company Ries co-founded — had a board-ready story: gross registered users climbing, total revenue climbing, cumulative numbers all pointing up and to the right. By every vanity metric the company was winning. Ries describes realizing the charts were a narcotic: aggregate totals *can only go up*, because they are cumulative, so they hid the fact that each new cohort of users was behaving no better than the last. When he re-cut the same data as **cohort behavior** — for each weekly cohort, what fraction activated, converted, and retained — the comfortable growth story collapsed into a flat, unmoving line. The product changes the team was proudly shipping were not improving the numbers that mattered; the cumulative charts had simply been outrunning the truth.

The transferable lesson is the origin of the term itself: Ries coined "vanity metrics" for exactly these totals-that-only-rise, and "actionable metrics" for cohort-based, per-action rates that can fall and therefore teach. Notice the mechanism — the *same underlying data* told a triumphant story as a cumulative total and a sobering story as a cohort rate. Nothing about the business changed; only the honesty of the metric did. When you choose what to instrument and how to slice it, you are choosing whether your analytics can ever deliver bad news. If it can't, it isn't analytics. (Source: Eric Ries, The Lean Startup, ch. 7, "Measure.")`,
      branch: {
        scenario: `It's the Monday investor update. Your app crossed 100,000 total registered users this week — a great-looking headline. But you also know week-4 cohort retention has been sliding for three straight cohorts, from about 22% to about 15%. You have room for one hero metric at the top of the update. What do you lead with?`,
        choices: [
          {
            label: 'Lead with "100,000 total registered users" — it\'s the milestone everyone will celebrate, and retention is a detail for later.',
            correct: false,
            consequence: `**The vanity trap, and it's the expensive kind.** A cumulative total can only rise, so leading with it means leading with a number that can never signal a problem — you are training yourself and your investors to watch the one gauge that can't warn you. Meanwhile the metric that CAN fall is falling. This is IMVU exactly: the comfortable total outruns the truth until the truth arrives all at once. Report the total if you must, but never let it be the number that steers.`,
          },
          {
            label: 'Lead with the declining week-4 cohort retention, frame it as the thing you\'re actively debugging, and show the total as context.',
            correct: true,
            consequence: `**Correct — and it's the founder move, not the timid one.** Retention is actionable: it can fall (it is), it's tied to delivered value, and a decline points at a fixable cause (onboarding, a broken core action, the wrong acquisition channel). Leading with it signals you read your own instruments honestly and are already on the leak. Good investors trust a founder who surfaces the falling number more than one who hides behind a total that can only go up.`,
          },
          {
            label: 'Report both as equally weighted headline numbers and let the reader decide which matters.',
            correct: false,
            consequence: `**False balance.** These two numbers are not peers: one can only rise and guides nothing; the other can fall and points at a cause. Presenting them as equals launders the vanity metric into legitimacy and buries the signal. Your job is to *rank* your metrics by how much they steer decisions, not to lay them side by side and abdicate. Lead with the one that can deliver bad news.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each metric by whether it can actually steer a decision. The test for the right-hand bucket: could this number go DOWN, is it tied to delivered value, and would a change make you do something different? Cumulative totals that only ever rise belong on the left.',
          buckets: ['Vanity (feels good, steers nothing)', 'Actionable (can fall, drives a decision)'],
          items: [
            { text: 'Total registered users (cumulative, all-time)', bucket: 'Vanity (feels good, steers nothing)' },
            { text: 'Cumulative app downloads since launch', bucket: 'Vanity (feels good, steers nothing)' },
            { text: 'Total pageviews this quarter', bucket: 'Vanity (feels good, steers nothing)' },
            { text: 'Social media follower count', bucket: 'Vanity (feels good, steers nothing)' },
            { text: 'Number of press mentions', bucket: 'Vanity (feels good, steers nothing)' },
            { text: 'Week-1 activation rate (new users completing the core action)', bucket: 'Actionable (can fall, drives a decision)' },
            { text: 'Weekly active users completing the core workflow', bucket: 'Actionable (can fall, drives a decision)' },
            { text: 'Week-4 cohort retention', bucket: 'Actionable (can fall, drives a decision)' },
            { text: 'Free-to-paid conversion rate', bucket: 'Actionable (can fall, drives a decision)' },
            { text: 'LTV-to-CAC ratio by acquisition channel', bucket: 'Actionable (can fall, drives a decision)' },
          ],
          explain: 'The left column is made of cumulative totals and applause: they only rise, are not tied to whether users got value, and change no decision. The right column is made of RATES and cohort-sliced measures: each can fall, each is attributable to a cause you control, and each fall points at a specific fix. Same data can live in either column — the honesty is in the slicing, not the source.',
        },
        {
          kind: 'numeric',
          prompt: 'Activation is a classic actionable metric because it can fall and it points at onboarding. This week 3,200 new users signed up and 640 of them completed your core action within 24 hours. What is your 24-hour activation rate, in percent?',
          answer: 20,
          tolerance: 0.5,
          unit: '%',
          explain: 'Activation rate = 640 / 3,200 = 0.20 = 20%. Unlike "3,200 sign-ups" (a total that only rises), this rate can drop next week — and if it does, you look straight at the onboarding path between sign-up and the core action. That attributability is what makes it actionable rather than vanity.',
        },
        {
          kind: 'resource',
          title: 'Instrumenting events & spotting vanity metrics (real, canonical)',
          items: [
            { label: 'PostHog — Capturing events (docs)', url: 'https://posthog.com/docs/product-analytics/capture-events', note: 'How to fire deliberate custom events with typed properties — the "structured logging" of product analytics.' },
            { label: 'PostHog — Autocapture (docs)', url: 'https://posthog.com/docs/product-analytics/autocapture', note: 'What you get for free (clicks, pageviews) and why it is the printf, not the SLI, of your product.' },
            { label: 'Andrew Chen — Featured essays', url: 'https://andrewchen.com/list-of-essays/', note: 'Deep corpus on growth metrics; on why aggregate numbers hide the truth and cohorts reveal it.' },
            { label: 'Andrew Chen — Metrics investors look for (red flags & magic numbers)', url: 'https://andrewchen.com/investor-metrics-deck/', note: 'The tells that a metric is vanity, and what a rigorous metrics story looks like.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Pick my one metric that matters', kind: 'ask', question: 'Given what my product does and the value it delivers, propose 2-3 candidate "one metric that matters" that are tied to value, can go DOWN, and are attributable — then help me choose one and name the exact custom event I need to instrument to measure it.' },
        { label: 'Design my event schema', kind: 'ask', question: 'Help me design a small, deliberate event-tracking schema for my core workflow: the 5-8 named events I should fire, the typed properties on each, and where in the user journey they belong — treating it like structured logging, not autocapture-everything.' },
        { label: 'Which of my metrics are vanity?', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which single property most reliably separates an actionable metric from a vanity metric?',
          options: [
            'It is a large, impressive number',
            'It can go DOWN, because it measures a rate tied to delivered value and therefore can deliver bad news',
            'It is reported to investors',
            'It is captured automatically without writing any tracking code',
          ],
          answer: 1,
          explain: 'Vanity metrics are typically cumulative totals that can only rise, so they can never signal a problem. An actionable metric is a rate or cohort measure that CAN fall — and because it can fall, a decline points at a specific, fixable cause. Size, audience, and ease of capture are irrelevant to whether a metric steers a decision.',
        },
        {
          kind: 'mcq',
          prompt: 'You want to know whether users who finish your core workflow are more valuable. In the "events as structured logging" model, what is the right first move?',
          options: [
            'Rely on autocapture — it already records every click, so the data must be in there somewhere',
            'Deliberately fire a named custom event like workflow_completed with typed properties, because you cannot query behavior you never instrumented',
            'Add up total pageviews and assume higher pageviews means more value delivered',
            'Wait until you have millions of users so the totals are big enough to trust',
          ],
          answer: 1,
          explain: 'Autocapture is the printf of analytics — great to start, useless for the specific questions that decide your company. Just as you emit a named, typed log/span at the exact code path you will need to reason about, you must deliberately fire a custom event (e.g. workflow_completed) with properties. You cannot analyze an event you never emitted.',
        },
        {
          kind: 'free',
          prompt: 'For your real venture, name the single metric that matters most right now. State (1) why it is actionable (can it fall? is it tied to value? is it attributable?), (2) one vanity metric you have been tempted to celebrate instead and why it steers nothing, and (3) the exact named event(s) and properties you would instrument to measure your chosen metric.',
          rubric: 'Strong answer: (1) names ONE metric that is a rate/cohort measure, can decrease, is tied to delivered value, and is attributable to a controllable cause — not a cumulative total; (2) identifies a specific vanity metric they were drawn to and explains that it only rises / changes no decision; (3) specifies concrete instrumentation — named custom events with typed properties at defined points in the journey — showing they treat events like deliberate structured logging, not autocapture-everything. Penalize choosing a cumulative total as the "metric that matters", or vague "track engagement" with no event schema.',
        },
      ],
      commitSummary: 'no slot written — you chose the one metric that matters for your venture and the deliberate events needed to measure it, and you can now tell vanity from signal on sight.',
    },

    // -----------------------------------------------------------------------
    {
      id: '17.2',
      module: 17,
      title: 'Cohort & retention analysis on real curves',
      estMinutes: 20,
      prerequisites: ['17.1'],
      artifactSlot: null,
      concept: `A single retention number is a lie of omission. "40% retention" means nothing until you ask *retention of what, measured when, for which cohort*. The honest object is not a number but a **curve**: for a group of users who all started in the same period (a **cohort**), what fraction are still performing the core action N days, weeks, or months later. Plot that fraction against time and you get a **decay curve** — and the *shape* of that curve is the single most important chart in your company.

Three shapes, three verdicts. A curve that **decays to zero** means you have a leaky bucket: every user eventually leaves, so no amount of acquisition compounds — you are pouring water into a bucket with a hole in the bottom. A curve that **flattens at a positive floor** means a stable core of users found durable value; that floor, the asymptote, is your real product. And the rare **smiling curve** — retention that dips then rises as lapsed users come back — signals a product whose value grows with time or network. The flattening height, not the day-1 number, is what predicts whether you have product-market fit.

**Cohorts are versioned experiments you didn't mean to run.** Every time you change onboarding, pricing, or the core flow, users who arrive after the change are a new "version." Comparing the July cohort's curve to the September cohort's curve is a natural A/B test on your own history: if September retains better, whatever you shipped in August worked. This is why cohort analysis beats a single blended retention number — blending mixes versions and averages away the very signal you need. Read cohorts like you read a performance regression across releases: line up the versions, overlay the curves, find the one that changed.

Finally, retention is the hidden term inside **lifetime value**. If a retained user pays and churns at some monthly rate, their LTV is roughly $\\frac{\\text{ARPU}}{\\text{churn}}$ — so a curve that flattens higher (lower long-run churn) multiplies the value of every acquisition dollar. Retention is not a "growth" concern separate from money; it *is* the money.`,
      reframe: {
        analogy: `A retention curve is a **decay / half-life curve**, exactly like radioactive decay or an RC discharge. Each cohort starts at 100% "charge" and drains over time. What you care about is not the instantaneous value but the *shape*: the decay constant (how fast users leak) and — crucially — whether the curve decays to zero or settles at a non-zero steady state. Comparing cohorts is reading the decay curve of successive manufacturing batches to see whether your process change lowered the failure rate. And LTV falls out of the same physics: integrate the area under the survival curve times revenue and you get lifetime value, the way you'd integrate power over a discharge to get total energy delivered.`,
        breaks: `Radioactive decay has a *constant* half-life — the physics never changes. Human retention does not: your decay "constant" shifts every time you change the product, the acquisition channel, or the season, which is the entire reason cohorts matter (a nucleus has no "cohort"). Worse, real curves are **non-monotonic and heterogeneous** — a resurrection ("smiling") tail has no analogue in simple decay, and a blended curve is a *superposition* of very different sub-populations decaying at different rates, so the aggregate half-life can be meaningless. And survivorship bias creeps in: the users still on the curve at month 12 are a self-selected sample, not a representative one. So use the decay intuition for the *shape questions* — does it flatten, at what floor — but never assume the constant is constant.`,
      },
      workedExample: `**"What is good retention?" — the Lenny Rachitsky / Casey Winters benchmark study (2020).** Rachitsky surveyed dozens of top product and growth leaders to answer a question everyone quotes and few define: what retention curve actually indicates product-market fit? The central finding is a shape, not a number: **the strongest signal of product-market fit is a retention curve that flattens** — that reaches a positive asymptote rather than decaying to zero. Where it flattens, and at what height, varies enormously by business model. For consumer social, a great month-N curve might flatten around the high tens of percent; for many B2B SaaS products, strong retention flattens even higher; for transactional businesses, *where* the curve flattens matters more than the six-month rate, and the flattening can take longer than six months to reveal itself. The transferable rule the study hammers home: stop obsessing over your day-1 or week-1 number and ask whether the curve **flattens at all**, because a curve that keeps sliding toward zero means you do not yet have a product people durably need.

Why this is the load-bearing chart: a flattening curve means acquisition compounds — each cohort adds to a stable base — so growth is additive on top of a floor rather than a treadmill replacing churned users. A curve decaying to zero means you are running to stand still; every new user you buy will eventually leak out, and no marketing budget survives that. And because LTV is roughly revenue divided by long-run churn, a higher flattening point is not a vanity improvement — it multiplies the payback on every dollar of CAC. The method to copy: cut users into start-period cohorts, plot each cohort's survival curve, overlay them to see whether product changes moved the *asymptote*, and judge yourself on the floor, not the first day. (Sources: Lenny Rachitsky, "What is good retention?", Lenny's Newsletter, 2020; companion write-up at Casey Accidental.)`,
      branch: {
        scenario: `You pull retention for two of your monthly cohorts. The March cohort's weekly curve decays steadily and is heading toward roughly 5% and still falling at month 4. The September cohort (after you rebuilt onboarding) drops faster in week 1 but then clearly FLATTENS around 25% and holds. A teammate says March is better "because it started higher in week 2." What's the right read?`,
        choices: [
          {
            label: 'March is better — it retained more users in the early weeks, so the rebuild made things worse.',
            correct: false,
            consequence: `**Reading the wrong feature of the curve.** Early-week height is nearly irrelevant; what predicts a real business is the ASYMPTOTE. March is decaying toward ~5% and still falling — a leaky bucket that will approach zero. September flattens at ~25% and holds, which means a durable core found value. Judging retention by the week-2 value is like judging a discharge curve by its first millisecond instead of its steady state.`,
          },
          {
            label: 'September is better: it FLATTENS at a positive floor (~25%) while March decays toward zero. The onboarding rebuild worked — treat the cohorts as versioned experiments and keep the September change.',
            correct: true,
            consequence: `**Correct.** The shape is the verdict. A curve that flattens at 25% means a quarter of each cohort became durable users on top of whom acquisition compounds; a curve sliding toward 5% and falling is a bucket with a hole. Because the only systematic difference between the cohorts is the onboarding you shipped in August, the improved asymptote is attributable evidence the rebuild worked. Ship it forward and watch October confirm.`,
          },
          {
            label: 'Ignore both cohorts and just report the blended all-users retention number — it\'s simpler and less noisy.',
            correct: false,
            consequence: `**Blending destroys the signal.** A single blended number is a superposition of the leaky March-style users and the durable September-style users decaying at different rates — the average hides exactly the improvement you need to see. Cohorts are versioned experiments precisely so you can tell whether a change moved the curve; collapsing them back into one number throws that away and makes your onboarding win invisible.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Your weekly retention curve flattens at a positive floor: a durable core of users keeps paying. For that retained segment, ARPU is $40/month and the segment churns at 4% per month (0.04). Using the standard approximation LTV = ARPU / churn, what is the lifetime value per retained user, in dollars?',
          answer: 1000,
          tolerance: 5,
          unit: '$',
          explain: 'LTV = ARPU / churn = 40 / 0.04 = $1,000 per retained user. The formula is just the area under the survival curve times revenue: lower long-run churn (a curve that flattens higher) makes the denominator smaller and multiplies LTV. This is why the flattening HEIGHT, not the day-1 number, is the term that shows up in your unit economics.',
        },
        {
          kind: 'document',
          title: 'Write your cohort retention read',
          body: 'Pull retention for two or more of your real start-period cohorts and read the SHAPE, not a single number. Use the worksheet to record: does each curve decay to zero or flatten at a floor; what is the approximate flattening height; what product/onboarding/channel change distinguishes the cohorts (they are versioned experiments); and what LTV the flattening floor implies. Save your read to "My venture" — a curve you interpreted beats a number you quoted.',
          templateHref: '/templates/retention-cohort-worksheet.md',
          docKey: '17.2#retention',
          docLabel: 'My cohort retention read',
        },
        {
          kind: 'resource',
          title: 'Retention curves & cohorts (real benchmarks and method)',
          items: [
            { label: "Lenny Rachitsky — What is good retention?", url: 'https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29', note: 'The benchmark study: a flattening curve is the strongest signal of product-market fit; benchmarks by business model.' },
            { label: 'Lenny Rachitsky — How to increase your retention', url: 'https://www.lennysnewsletter.com/p/how-to-increase-your-retention-issue', note: 'The practical companion: once you can read a cohort curve, the levers that actually move retention.' },
            { label: 'Sequoia — Retention', url: 'https://articles.sequoiacap.com/retention', note: 'Why retention is the foundation the whole growth model sits on, and how to read cohort curves.' },
            { label: 'a16z — Retention benchmarks (incl. the "smiling" curve)', url: 'https://a16z.com/ai-retention-benchmarks/', note: 'Modern benchmarks and the rare resurrection/smiling curve where lapsed users return.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Read my retention curve', kind: 'ask', question: 'I will describe my cohort retention curve (approximate values by week or month). Tell me whether it is decaying to zero, flattening at a floor, or smiling, what that implies about product-market fit, and what the flattening height means for my LTV.' },
        { label: 'Turn my curve into LTV', kind: 'ask', question: 'Help me estimate LTV from my retention curve: given my ARPU and my long-run (flattened) churn rate, compute LTV = ARPU / churn, and show how a higher flattening floor changes the payback on my CAC.' },
        { label: 'A harder cohort case', kind: 'harder', concept: 'diagnosing a blended retention number that hides two sub-populations decaying at very different rates, and deciding which cohorts to separate' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which feature of a retention curve is the strongest signal of product-market fit?',
          options: [
            'The day-1 or week-1 retention value being as high as possible',
            'Whether the curve FLATTENS at a positive floor rather than decaying toward zero',
            'The total number of users in the starting cohort',
            'The curve being perfectly smooth with no week-to-week noise',
          ],
          answer: 1,
          explain: 'Per the Rachitsky/Winters benchmark study, the load-bearing feature is the asymptote: a curve that flattens at a positive floor means a durable core found value and acquisition can compound on top of it. A high day-1 number that then decays to zero is still a leaky bucket. Judge the shape and the flattening height, not the first data point.',
        },
        {
          kind: 'mcq',
          prompt: 'Why is cohort analysis preferred over a single blended retention number when you have shipped product changes over time?',
          options: [
            'Blended numbers are always mathematically incorrect',
            'Cohorts act like versioned experiments — each start-period is a "version," so overlaying their curves reveals whether a change moved retention, which blending averages away',
            'Cohorts require less data to compute',
            'A blended number cannot be shown to investors',
          ],
          answer: 1,
          explain: 'Users who arrive after a change are effectively a new version of your product. Overlaying cohort curves is a natural A/B test on your own history — you can see whether an onboarding or pricing change moved the asymptote. A blended number is a superposition of different sub-populations decaying at different rates, which averages away exactly that signal.',
        },
        {
          kind: 'free',
          prompt: 'Describe your real cohort retention curve (or your best current estimate). Does it decay toward zero, flatten at a floor, or smile? Roughly where does it flatten, and what does that imply about (a) whether you have product-market fit and (b) the LTV of a retained user given your ARPU and long-run churn?',
          rubric: 'Strong answer: (1) describes a CURVE/shape over time, not a single number, and classifies it (decay-to-zero / flattening / smiling); (2) correctly reads that a flattening positive floor is the PMF signal and a decay-to-zero is a leaky bucket; (3) estimates a flattening height and connects it to LTV via LTV = ARPU / long-run churn, showing they understand retention as the term inside unit economics; (4) ideally notes cohorts as versioned experiments. Penalize quoting one blended retention percentage with no shape, or treating the day-1 value as the verdict.',
        },
      ],
      commitSummary: 'your cohort retention read is saved to "My venture" — you can now judge product-market fit by the shape of a curve and turn its flattening floor into an LTV.',
    },

    // -----------------------------------------------------------------------
    {
      id: '17.3',
      module: 17,
      title: 'The funnel as a pipeline you optimize',
      estMinutes: 20,
      prerequisites: ['17.1', '17.2'],
      artifactSlot: null,
      concept: `A funnel is a **pipeline with measured stages**, and like any pipeline its throughput is governed by its narrowest, leakiest stage. The classic shape — visitor to sign-up to activation to paying to retained — is a series of conversion rates multiplied together, so total end-to-end conversion is the product of the per-stage rates. That multiplication is the whole game: because the rates multiply, a stage sitting at 10% is quietly capping everything downstream of it, and fixing the *right* stage can move total throughput more than heroics anywhere else.

**Find the leak before you fix anything.** Engineers love to optimize the stage they find most interesting; the discipline is to instrument every stage, compute the per-step conversion, and locate the step where you lose the most users *relative to what's achievable*. A step converting at 15% when comparable products hit 60% is a bigger opportunity than a step at 80% you could nudge to 82%, even though the second feels more "broken." Profile first: the biggest absolute drop-off is where the water is escaping, and Amdahl's law applies — optimizing a stage that isn't the bottleneck yields almost nothing.

**Prioritize fixes by impact times ease.** Once you've ranked the leaks by size, you don't just attack the biggest one — you attack the one with the best ratio of expected impact to effort. This is the **ICE / impact-effort** discipline (popularized by Sean Ellis and the growth-hacking canon): a huge leak that needs a six-month rebuild loses to a medium leak you can fix this week, because you'll get three more shots at the funnel in the time the rebuild takes. Rank by \`impact / effort\`, ship the cheap high-impact fixes first, and re-profile — the bottleneck moves after every fix, exactly like optimizing a hot path.

One caution worth internalizing early: the funnel is a *one-directional* model, and the best products don't only push users down a funnel — they **loop**, feeding outputs (a retained user, a shared invite) back into the top as new inputs. Reforge's argument that "growth loops are the new funnels" is the mature version of this lesson: optimize the funnel, but know it's a local model inside a larger loop.`,
      reframe: {
        analogy: `A conversion funnel is a **pipeline whose throughput is set by its bottleneck stage**, and optimizing it is textbook profiling under Amdahl's law. Total conversion is the *product* of the per-stage pass rates, the way a data pipeline's throughput is gated by its slowest stage — so you profile to find the stage with the worst rate, optimize *that*, and re-profile, because the bottleneck relocates after every fix. Speeding up a stage that isn't the constraint is wasted work; a 2x on a 90% stage barely moves the product, while lifting a 15% stage to 40% cascades through everything below it. Impact-times-ease prioritization is just choosing which optimization has the best payoff-to-effort ratio before you touch code.`,
        breaks: `A CPU pipeline moves *identical, compliant* work units; a funnel moves *people who can refuse*, and they don't drop out uniformly — the users who leak at one stage are often systematically different (wrong-fit traffic, price-sensitive, mobile-on-a-train) from those who pass, so "fixing" a stage can just admit worse-fit users who leak later. Second, funnel stages are not independent: changing the sign-up step alters *who* reaches activation, so per-stage rates shift under your feet in a way pipeline stages never do. Third, and most fundamental, the funnel is strictly one-directional — it has no concept of a user coming *back* or *bringing others*, which is where real compounding lives. So profile and fix the bottleneck, but remember you're optimizing a linear approximation of something that, done right, is a loop.`,
      },
      workedExample: `**Dave McClure's "AARRR" pirate metrics, and impact-effort prioritization (500 Startups, 2007-onward).** McClure's framework names the canonical funnel every product secretly has: **Acquisition** (users arrive), **Activation** (first happy experience), **Retention** (they come back), **Referral** (they tell others), **Revenue** (they pay) — "AARRR," hence "pirate metrics." His load-bearing insight was not the stages themselves but the mandate to *instrument each stage separately and find the one bleeding the most*, rather than pouring more money into Acquisition (the stage founders instinctively obsess over) when the real leak is a broken Activation step converting at a fraction of what it should. A funnel where 5% of visitors activate does not need more traffic; more traffic just wastes more visitors against the same wall.

Pair that with **impact-effort (ICE) prioritization**, popularized by Sean Ellis (who coined "growth hacking"): score each candidate fix by expected Impact, Confidence, and Ease, and attack the best ratio first. The combined method is the professional loop: (1) instrument the full AARRR funnel and compute per-stage conversion; (2) find the stage with the largest drop-off *relative to benchmark* — the bottleneck; (3) brainstorm fixes and rank them by impact / effort; (4) ship the cheapest high-impact fix, re-profile, and repeat, because the bottleneck moves. The reason this beats "optimize everything" is Amdahl's law made concrete: with stages multiplying, lifting your worst stage from 5% to 15% triples end-to-end throughput, while polishing an already-strong stage is rounding error. The transferable move: never optimize a funnel stage you haven't confirmed is the bottleneck, and never pick the fix by how fun it is to build — pick it by impact over effort. (Sources: Dave McClure, "Startup Metrics for Pirates" / AARRR; Sean Ellis on growth and ICE prioritization.)`,
      branch: {
        scenario: `Your funnel: 10,000 visitors -> 2,000 sign up (20%) -> 300 activate (15% of sign-ups) -> 240 pay (80% of activated). Your instinct and your last board meeting both push you to "get more traffic." You have engineering time for exactly one initiative this month. Where do you aim it?`,
        choices: [
          {
            label: 'Buy more traffic to double visitors to 20,000 — top of funnel is where growth comes from.',
            correct: false,
            consequence: `**Optimizing the wrong stage.** Doubling visitors at the current rates just doubles the number of people who hit the same walls: you'd spend real money to push more users into a 15% activation step and end with proportionally the same leak. The bottleneck is Activation (85% of sign-ups never reach value), and Amdahl's law says work spent anywhere but the bottleneck barely moves total throughput. More traffic against a broken funnel is more waste.`,
          },
          {
            label: 'Fix the activation step: only 15% of sign-ups reach first value, far below what\'s achievable. Diagnose and rebuild that step, then re-profile.',
            correct: true,
            consequence: `**Correct — you profiled instead of guessing.** Activation at 15% is the bottleneck by a mile, and because stages multiply, lifting it even to 30% would DOUBLE end-to-end conversion with zero extra traffic spend. That's a better return than doubling the top of the funnel, and cheaper. Fix the leak, re-profile (the bottleneck will move — maybe to Revenue next), and repeat. This is the AARRR discipline: find the bleeding stage, not the fun one.`,
          },
          {
            label: 'Polish the payment step from 80% to 85% — it\'s the closest stage to revenue, so it matters most.',
            correct: false,
            consequence: `**Recency bias toward the money.** The payment step is already your STRONGEST stage; nudging 80% to 85% is a ~6% relative gain on the smallest remaining pool. Meanwhile activation is dumping 85% of sign-ups. Proximity to revenue is not the same as being the bottleneck — profile by drop-off size relative to what's achievable, and activation wins overwhelmingly.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'rank',
          prompt: 'You have profiled your funnel and generated a backlog of fixes. Rank them the way a disciplined operator would — by impact / effort (ICE), attacking the biggest confirmed leak that is also cheap to fix first, and pure top-of-funnel spend last. Put them in the order you would actually work them.',
          items: [
            'A one-day copy + form-field fix on the activation step, your confirmed biggest leak (huge impact, tiny effort)',
            'Adding a progress indicator and a sample template to the activation flow (high impact, a few days effort)',
            'Reworking the pricing page where a medium leak sits (medium impact, about a week of effort)',
            'A full multi-week onboarding rebuild that might help activation more (high potential impact, very high effort)',
            'Buying more top-of-funnel traffic while the activation leak is still unfixed (spends money to feed the leak)',
          ],
          explain: 'Impact/effort ordering: first the one-day fix on the confirmed bottleneck (best ratio by far), then the few-day high-impact activation improvements, then the medium pricing leak, then the expensive rebuild (only if cheaper fixes are exhausted), and dead last buying traffic to feed a funnel that is still leaking. Cheap high-impact fixes on the confirmed bottleneck win because you get several more shots at the funnel in the time one big rebuild takes.',
        },
        {
          kind: 'platformTask',
          title: 'Instrument a real funnel (or key event) in an analytics tool',
          body: 'Stop reading about funnels and build one. In PostHog, Amplitude, or GA4, define your core funnel from at least three named events (e.g. signup_completed -> core_action_started -> core_action_completed) OR, if you are earlier, instrument the single custom event for your "one metric that matters" from lesson 17.1 and build an insight on it. Confirm real data flows in, then identify the biggest per-stage drop-off. Record what you built and the leak you found.',
          links: [
            { label: 'PostHog — Funnels (docs)', url: 'https://posthog.com/docs/product-analytics/funnels' },
            { label: 'PostHog — Send events / getting started', url: 'https://posthog.com/docs/getting-started/send-events' },
            { label: 'Amplitude — The North Star Playbook (choosing the metric to funnel toward)', url: 'https://amplitude.com/resources/north-star-playbook' },
            { label: 'Google Analytics 4 — Set up events (docs)', url: 'https://developers.google.com/analytics/devguides/collection/ga4/events' },
          ],
          steps: [
            'Pick the 3+ named events that make up your core funnel (or the single event for your one metric that matters).',
            'Instrument them: fire the custom events from your app, or configure them in the tool, and confirm live data arrives.',
            'Build a funnel insight (or a dashboard tile) and read the per-stage conversion rates.',
            'Identify the stage with the biggest drop-off relative to what is achievable — your bottleneck.',
            'Record the funnel you built, the per-stage rates, and the single leak you would fix first.',
          ],
          taskKey: '17.3#dashboard',
          proofLabel: 'The funnel/event you instrumented, its per-stage rates, and the bottleneck you found (paste the insight URL or describe it)',
          proofKind: 'text',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'Funnels, leaks & the loops beyond them (real)',
          items: [
            { label: 'PostHog — Funnels (docs)', url: 'https://posthog.com/docs/product-analytics/funnels', note: 'How to build funnels, read per-stage conversion, break down by cohort, and find the leak.' },
            { label: 'Reforge — Growth Loops are the New Funnels', url: 'https://www.reforge.com/blog/growth-loops', note: 'Balfour, Winters, Kwok & Chen on why the funnel is a local model and durable growth is a loop.' },
            { label: 'Amplitude — The North Star Playbook', url: 'https://amplitude.com/resources/north-star-playbook', note: 'Choosing the value metric your funnel should be optimizing toward.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Find the leak in my funnel', kind: 'ask', question: 'I will give you my funnel stages and per-stage conversion rates. Help me identify the bottleneck (biggest drop-off relative to what is achievable), and explain why fixing it beats optimizing a stronger stage using the multiplying-rates / Amdahl logic.' },
        { label: 'Rank my funnel fixes by impact x ease', kind: 'ask', question: 'Here are candidate fixes for my funnel leak. Help me score each by impact, confidence, and ease (ICE) and put them in the order I should actually ship them, and tell me which to do this week.' },
        { label: 'Is my funnel really a loop?', kind: 'harder', concept: 'converting a linear acquisition funnel into a growth loop that reinvests retained/referring users back into the top' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Your funnel is 20% sign-up, then 15% activation, then 80% payment. You can improve exactly one stage. Which change most increases end-to-end conversion, and why?',
          options: [
            'Improve payment from 80% to 90% — it is closest to revenue',
            'Improve activation from 15% to 30% — because stage rates multiply, the worst stage caps everything downstream, so doubling it roughly doubles total conversion',
            'Improve sign-up from 20% to 22% — top of funnel touches the most users',
            'It does not matter which stage; a 10-point gain anywhere is equal',
          ],
          answer: 1,
          explain: 'Total conversion is the product of the stage rates, so the lowest stage is the bottleneck (Amdahl\'s law). Activation at 15% is dumping 85% of sign-ups; lifting it to 30% roughly doubles end-to-end conversion. Polishing the already-strong 80% payment stage, or nudging sign-up by 2 points, are rounding errors by comparison. Always fix the confirmed bottleneck.',
        },
        {
          kind: 'mcq',
          prompt: 'You have three candidate funnel fixes. In the impact-times-ease (ICE) discipline, which do you ship first?',
          options: [
            'The most technically interesting one, because motivated engineers ship faster',
            'The one with the best expected-impact-to-effort ratio, typically a cheap high-impact fix on the confirmed bottleneck',
            'The largest possible rebuild, because bigger projects have bigger payoffs',
            'Whichever the most senior person prefers',
          ],
          answer: 1,
          explain: 'Rank fixes by impact / effort and ship the best ratio first — usually a cheap, high-impact fix on the stage you have confirmed is the bottleneck. A huge leak that needs a multi-month rebuild loses to a medium leak you can fix this week, because you get several more shots at the funnel in the same time. Pick by payoff-over-effort, not by how fun the build is.',
        },
        {
          kind: 'free',
          prompt: 'Report the real funnel (or key event) you instrumented in the platform task. List your stages and per-stage conversion rates, name the single biggest leak relative to what is achievable, and state the specific fix you would ship first — justifying it with impact-times-ease reasoning rather than instinct.',
          rubric: 'Strong answer: (1) presents a REAL instrumented funnel or event with named stages and per-stage rates the learner actually built; (2) correctly identifies the bottleneck as the largest drop-off relative to benchmark, not the stage closest to revenue or the top of funnel; (3) proposes a specific first fix chosen by impact / effort (a cheap high-impact fix on the bottleneck), showing they will re-profile after; (4) demonstrates understanding that stage rates multiply. Penalize "get more traffic" while a mid-funnel leak is unfixed, or optimizing an already-strong stage.',
        },
      ],
      commitSummary: 'you instrumented a real funnel in an analytics tool, found the true bottleneck, and can now prioritize fixes by impact times ease instead of instinct — the leak, then the loop.',
    },

    // -----------------------------------------------------------------------
    {
      id: '17.4',
      module: 17,
      title: 'Experimentation: A/B tests as hypothesis testing',
      estMinutes: 20,
      prerequisites: ['17.1', '17.3'],
      artifactSlot: null,
      concept: `An A/B test is a **controlled experiment** — the same tool a scientist uses to establish that an intervention *caused* an effect rather than coincided with it. You split incoming users randomly into a control (A) and a variant (B), change exactly one thing, and let randomization make the two groups statistically identical in every other respect. If B then converts better *by more than chance would produce*, you have causal evidence the change worked. Without the control you have a before/after story, and before/after stories are how founders fool themselves: the number went up the week you shipped, but also the week a holiday, a press hit, and a seasonal swing landed.

The machinery you cannot skip is **statistical significance and power**. Any two random groups differ a little by luck, so you need a rule for "bigger than luck." The **p-value** answers: if the change truly did nothing, how likely is a difference this large by chance alone? A conventional threshold is p < 0.05. But significance is only half the guarantee — **power** (conventionally 80%) is the probability your test *detects* a real effect of a given size if it exists. Low power means you'll miss real wins and call them "no difference." Both requirements collapse into one practical question answered *before you launch*: **what sample size do I need?** Smaller effects and higher confidence demand more users; a test run under-powered is a test that can only mislead you.

The failure mode that destroys more experiments than any other is **p-hacking**, and its most common form is **peeking**. If you watch the results live and stop the moment they cross significance, you have massively inflated your false-positive rate — because a random walk *will* cross the line temporarily if you give it enough chances, and you've turned "one test at 5%" into "twenty looks, each with its own chance to fluke." The disciplines that prevent this: fix your sample size and duration in advance, pick your one primary metric before you start (not the best of twenty after), don't stop early on a good peek, and don't slice the data forty ways hunting for *any* segment that reached significance. An experiment is a pre-registered hypothesis test, not a search for a flattering number.

The payoff for this rigor is decisions you can trust. Most tested ideas — even at the best companies — *fail or do nothing*, and a controlled experiment is the only instrument honest enough to tell you which of your beloved ideas is one of them.`,
      reframe: {
        analogy: `An A/B test is a **controlled experiment with a null hypothesis**, exactly as in a stats course or a physics lab. Control vs variant is treatment vs placebo; randomization is what lets you attribute a difference to the one thing you changed rather than to confounds. The p-value is your false-positive rate against the null "the change does nothing"; power is your true-positive rate for a real effect; the required sample size is the n that buys you both at once — a power calculation you do BEFORE collecting data, like sizing a detector to resolve the signal you expect. p-hacking is the multiple-comparisons problem: run enough looks or slice enough subgroups and something crosses p < 0.05 by pure chance, which is why physicists pre-register and demand 5-sigma, and why you fix your metric and sample size in advance.`,
        breaks: `A physics constant doesn't change while you measure it; your users and product do. **Novelty effects** (users click the new thing because it's new, then stop) and **seasonality** mean a variant can win this week and lose next, so a too-short test measures a transient, not the truth. Populations drift, so the "identical groups" randomization guarantees only holds within the test window. And unlike a clean lab, business tests face a **primary-metric trap**: a variant can lift the metric you tested while quietly hurting one you didn't (more sign-ups, worse retention) — an experiment optimizes what you measure, Goodhart included. Finally, statistical significance is not business significance: with a huge sample you can prove a 0.1% lift is "real" and completely not worth shipping. Keep the rigor of the lab, but never forget you are experimenting on a moving, strategic system, not an inert one.`,
      },
      workedExample: `**Microsoft Bing's controlled-experiment culture, from Ronny Kohavi's work (Kohavi, Tang & Xu, "Trustworthy Online Controlled Experiments," 2020).** Kohavi, who built and ran experimentation at Bing (and earlier Amazon), documents a now-famous case: an engineer proposed a small change to how ad headlines were displayed. It sat low on the priority list for months because nobody believed it mattered. When finally A/B tested, it increased revenue by roughly **12%** — on the order of **$100M/year** — with no measurable harm to user experience. The only reason anyone knew is that Bing ran it as a *controlled experiment* against a concurrent control, rather than shipping to everyone and eyeballing a before/after that seasonality and other launches would have masked.

The deeper, more sobering finding from the same body of work is the base rate: at Bing, only about **one third** of well-designed experiments produced positive results; roughly a third were flat and a third *negative* — and Kohavi reports similar "most ideas fail" numbers across Google, Amazon, and others. This is the whole argument for the method in one statistic. If two out of three expert-designed ideas don't help (or actively hurt), then shipping on conviction means shipping harm you cannot see, and the before/after "the number went up" reasoning is worthless because it can't distinguish your change from the holiday that landed the same week. Kohavi also documents the discipline that makes the numbers trustworthy — pre-committing to sample size and a primary metric, running long enough to survive novelty effects, and *not* peeking-and-stopping — precisely because the alternative is a false-positive machine. The transferable lesson: your intuition about which change will win is, statistically, wrong about two-thirds of the time, and only a controlled experiment run with discipline can tell you which third you're in. (Source: Kohavi, Tang & Xu, Trustworthy Online Controlled Experiments, Cambridge University Press, 2020.)`,
      branch: {
        scenario: `You're testing a new checkout button. You pre-committed to 20,000 users per variant. On day 2, at 3,000 users per side, the variant is up and the tool flashes "95% significant!" Your CEO wants to ship it to everyone right now and move on. What do you do?`,
        choices: [
          {
            label: 'Ship it immediately — it already hit 95% significance, so the result is proven and waiting just wastes time.',
            correct: false,
            consequence: `**Classic peeking / p-hacking, and it's a false-positive machine.** A random walk WILL cross the significance line temporarily if you keep looking, so stopping the instant an early peek crosses 95% inflates your false-positive rate far above 5% — you've quietly run many looks, each with its own chance to fluke. You're also at 15% of your planned sample, well under-powered, and vulnerable to a novelty bump that fades. Early significance on a peek is exactly the signal to distrust.`,
          },
          {
            label: 'Keep the test running to the pre-committed sample size and duration, ignoring the early peek, then decide on the primary metric.',
            correct: true,
            consequence: `**Correct — you honored the pre-registration.** Fixing sample size and duration in advance and refusing to stop on a good peek is precisely what keeps your false-positive rate at the 5% you signed up for. Running to full sample also lets novelty effects wash out and gives you the power to trust a real effect (or to see the early "win" regress to nothing, which it often does). Decide on your one pre-chosen primary metric at the end, not on the prettiest interim slice.`,
          },
          {
            label: 'Keep peeking every few hours and ship the moment it hits significance again on any metric — checkout, sign-ups, or engagement.',
            correct: false,
            consequence: `**Double p-hacking: peeking AND multiple comparisons.** Repeated looks inflate false positives, and hunting across several metrics for *any* that crosses the line multiplies the problem — with enough metrics and enough looks, something will hit p < 0.05 by pure chance. This is how teams "prove" effects that evaporate in the next test. Pre-commit to one primary metric and one sample size, and let the experiment finish before you judge it.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'scenario',
          title: 'Ship or kill: reading real experiment results',
          intro: 'You run several A/B tests to completion at their pre-committed sample sizes. For each result, decide whether to ship the variant, kill it, or keep investigating. Statistical significance and business significance are not the same thing, and a win on one metric can hide a loss on another.',
          decisions: [
            {
              situation: 'Variant B lifts checkout conversion from 4.0% to 5.0% (a 25% relative lift), p = 0.01, at full pre-committed sample. Retention and refund rates are unchanged. Do you ship it?',
              options: [
                { label: 'Ship it', correct: true, outcome: 'Correct. A large, statistically significant lift (p = 0.01, well under 0.05) on your primary metric, at the pre-committed sample size, with no harm to guardrail metrics (retention, refunds), is exactly the clean win experiments exist to find. Ship, then monitor that the lift holds post-launch as novelty fades.' },
                { label: 'Kill it', correct: false, outcome: 'Too conservative. This is a textbook ship: a 25% relative lift at p = 0.01 on the primary metric at full sample, with guardrails clean. Killing a result this strong means you will never ship anything.' },
                { label: 'Keep investigating', correct: false, outcome: 'Over-caution wastes the win. The test is complete at its pre-committed sample, the effect is large and significant, and guardrails are clean. There is nothing left to investigate — ship and monitor.' },
              ],
            },
            {
              situation: 'Variant B lifts a huge-sample test from 4.00% to 4.05% conversion. Because the sample is enormous, p = 0.001 (highly significant). The change requires an expensive backend rewrite to ship. Do you ship it?',
              options: [
                { label: 'Ship it — it is highly significant', correct: false, outcome: 'This confuses statistical significance with business significance. With a giant sample you can prove a 0.05-point lift is "real" and still have it be worthless — especially against an expensive rewrite. p < 0.001 tells you the effect is not zero; it does not tell you the effect is worth the cost.' },
                { label: 'Kill it (or shelve it) — the effect is real but trivially small versus the cost', correct: true, outcome: 'Correct. Significance answers "is it non-zero?", not "is it worth it?" A ~1.25% relative lift that needs an expensive rewrite likely fails a cost-benefit test. Real but trivial is a kill (or a shelve) — spend the effort on a bigger lever.' },
                { label: 'Keep peeking to see if the effect grows', correct: false, outcome: 'The test is already at full sample and highly significant; more peeking will not change that the EFFECT SIZE is tiny. The problem is not statistical certainty, it is that a 0.05-point lift is not worth an expensive rewrite.' },
              ],
            },
            {
              situation: 'Variant B lifts sign-ups by a significant 8%, but in the same test week-1 retention of those sign-ups drops by a significant 12%. Do you ship it?',
              options: [
                { label: 'Ship it — more sign-ups is the goal', correct: false, outcome: 'This is the primary-metric / Goodhart trap. The variant optimized the metric you watched (sign-ups) by attracting worse-fit users who then churn — a 12% retention drop can easily outweigh an 8% sign-up gain in real value. Shipping this makes your top-line look better while the business gets worse.' },
                { label: 'Kill it (or redesign) — the retention loss likely outweighs the sign-up gain', correct: true, outcome: 'Correct. A win on the tested metric that comes with a significant loss on a guardrail metric is often a net negative. The variant is pulling in users who do not stick. Kill it, or redesign so you get the sign-up lift without degrading retention, and re-test.' },
                { label: 'Ship it but ignore the retention number as noise', correct: false, outcome: 'The retention drop is statistically significant, not noise — you cannot dismiss it. Ignoring a real guardrail regression because it is inconvenient is exactly how teams ship changes that quietly hurt the business.' },
              ],
            },
          ],
        },
        {
          kind: 'numeric',
          prompt: 'Before you can size a test you must quantify the effect you are chasing. Your control converts at 4.0% and your variant at 5.0%. What is the RELATIVE lift, in percent? (Relative lift = (variant - control) / control x 100.)',
          answer: 25,
          tolerance: 0.5,
          unit: '%',
          explain: 'Relative lift = (5.0 - 4.0) / 4.0 = 1.0 / 4.0 = 0.25 = 25%. The absolute lift is only 1 percentage point, but the relative lift is 25% — and relative lift is what sample-size calculators want, because smaller relative effects require dramatically larger samples to detect at the same confidence and power. Quantifying the effect first is what tells you how big a test you must run.',
        },
        {
          kind: 'resource',
          title: 'Experimentation done right (calculators & rigorous method)',
          items: [
            { label: "Evan Miller — Sample Size Calculator", url: 'https://www.evanmiller.org/ab-testing/sample-size.html', note: 'The canonical pre-launch calculator: enter baseline rate, minimum detectable effect, significance, and power to get required n per variant.' },
            { label: "Evan Miller — Awesome A/B Tools", url: 'https://www.evanmiller.org/ab-testing/', note: 'Significance testing, sequential tests, and the reasoning behind each — a whole toolkit for honest experiments.' },
            { label: 'PostHog — Experiments best practices (docs)', url: 'https://posthog.com/docs/experiments/best-practices', note: 'Pre-committing sample size, avoiding peeking, choosing a primary metric, and running long enough to survive novelty.' },
            { label: 'PostHog — Experiment statistics / significance (docs)', url: 'https://posthog.com/docs/experiments/experiment-significance', note: 'How significance is computed and why checking-and-stopping early corrupts your false-positive rate.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Size my A/B test', kind: 'ask', question: 'Help me compute the sample size for my A/B test: given my baseline conversion rate, the minimum relative lift I care about detecting, and standard 95% significance / 80% power, walk me through the required users per variant and how long that will take at my traffic.' },
        { label: 'Did I p-hack this?', kind: 'critique' },
        { label: 'A harder experiment-design case', kind: 'harder', concept: 'designing a test with a guardrail metric and a novelty-effect washout period so a short-term win is not mistaken for a durable one' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why is "peeking" at an A/B test and stopping the moment it crosses p < 0.05 a form of p-hacking?',
          options: [
            'Because looking at data early physically changes the users\' behavior',
            'Because a random difference will temporarily cross the significance line if you look repeatedly, so early stopping inflates your false-positive rate far above the nominal 5%',
            'Because p-values are only valid after exactly 30 days',
            'Because you are legally required to run tests to completion',
          ],
          answer: 1,
          explain: 'Each look is another chance for a random walk to cross the threshold by luck. Stopping on the first crossing turns "one test at 5%" into many correlated looks, each with its own fluke probability, so the true false-positive rate balloons. The fix is to pre-commit to sample size and duration and not stop early on a good peek — the same reason rigorous fields pre-register.',
        },
        {
          kind: 'mcq',
          prompt: 'A variant shows a statistically significant (p = 0.001) improvement, but the effect is a 0.05-percentage-point lift and shipping it needs an expensive rewrite. What is the right conclusion?',
          options: [
            'Ship it — statistical significance means it is worth doing',
            'Statistical significance is not business significance; a real-but-tiny effect can fail a cost-benefit test, so likely kill or shelve it',
            'The p-value must be wrong because the effect is small',
            'Keep peeking until the effect gets larger',
          ],
          answer: 1,
          explain: 'A tiny p-value only says the effect is very unlikely to be zero — it says nothing about whether the effect is large enough to matter. With a huge sample you can prove a trivial lift is "real." Against an expensive rewrite, a ~1.25% relative lift likely is not worth it. Separate "is it non-zero?" (significance) from "is it worth it?" (effect size vs cost).',
        },
        {
          kind: 'free',
          prompt: 'Design one real A/B test for your venture. State (1) the single change and your one-sentence hypothesis, (2) your one primary metric and at least one guardrail metric, (3) roughly what sample size / duration you would pre-commit to and why, and (4) the specific rule you will follow to avoid p-hacking. Then state, honestly, what result would make you KILL the variant.',
          rubric: 'Strong answer: (1) tests exactly one change with a falsifiable hypothesis; (2) names ONE primary metric chosen in advance plus a guardrail metric (e.g. retention/refunds) to catch a Goodhart win; (3) pre-commits to a sample size / duration and shows awareness that smaller effects and higher confidence need more users (ideally references a power/sample-size calc); (4) states an anti-p-hacking rule — no early stopping on a peek, no metric-shopping, fixed duration; and (5) gives a concrete kill condition (no significant lift at full sample, or a guardrail regression, or real-but-trivial effect vs cost). Penalize before/after reasoning with no control, peeking-to-significance, or shipping any statistically significant result regardless of effect size or guardrails.',
        },
      ],
      commitSummary: 'no slot written — you can now run an A/B test as a disciplined hypothesis test: pre-committed sample size, one primary metric plus guardrails, no peeking, and ship/kill decisions that separate statistical significance from business significance.',
    },
  ],
}
