import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 106 — Impact measurement & honest reporting  (SEASON 1 BONUS, nonprofit)
//
// A curated bonus for the non-profit path, slotting in after module 9. Season 1
// taught the learner to think in metrics (unit economics, outcome vs vanity
// numbers). This bonus turns that lens on social impact: measure the OUTCOME you
// cause, not the ACTIVITY you did; prove attribution instead of assuming it;
// resist Goodhart when a metric becomes a target; and report to funders with the
// same integrity an engineer brings to a blameless postmortem. All four lessons
// are artifactSlot:null (prose + interactive blocks only, no artifact write).
// Real programs are named (Pratham/TaRL, GiveDirectly, Evidence Action's No Lean
// Season); specific figures are illustrative unless a program is quoted directly.
// ===========================================================================

export const module106: Module = {
  id: 106,
  season: 1,
  bonus: true,
  paths: ['nonprofit'],
  insertAfter: 9,
  title: 'Impact measurement & honest reporting',
  goal: 'Measure whether you\'re actually changing outcomes (not just producing outputs), without overclaiming — and report to funders with rigor and integrity.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '106.1',
      module: 106,
      title: 'Measuring outcomes, not activity',
      estMinutes: 14,
      prerequisites: [],
      artifactSlot: null,
      concept: `A program produces two very different kinds of number, and confusing them is the most common measurement error in the non-profit world.

- **Outputs** are the work you *did*: workshops held, meals served, pamphlets printed, students enrolled. They are easy to count and always go up when you try harder.
- **Outcomes** are the change you *caused*: children who can now read, families who escaped food insecurity, patients who stayed on treatment. They are harder to measure and do not automatically follow from outputs.

The whole discipline is to instrument the **outcome** — the change in the world — rather than the **activity** you controlled. "We ran 400 tutoring sessions" tells a funder nothing about whether any child learned. "Reading proficiency in our cohort rose from 22% to 61%" is the claim that matters.

A useful refinement is **leading vs lagging** indicators. The lagging outcome (a child reads fluently, a family stays out of poverty for two years) is what you ultimately care about, but it arrives late. A **leading indicator** is an early, measurable proxy that credibly predicts the lagging one — session attendance *plus* a monthly reading-level check, not attendance alone. Good leading indicators let you steer before the lagging result is locked in; bad ones (pure activity counts) just make you feel busy. Instrument the change, pick leading indicators that genuinely predict it, and never let output volume stand in for outcome.`,
      reframe: {
        analogy: `This is the **vanity metric vs real-value metric** distinction you already know from product engineering. Registered users, page views, and "lines of code shipped" are outputs: they climb whenever the team is active and almost never fall, which is exactly why they feel good and mean little. The metrics that actually track value — activated users who complete the core action, weekly retention, task-success rate — are outcomes: they move only when you genuinely helped someone. "Sessions delivered" is your pageview count; "reading level improved" is your retained-active-user count. A dashboard full of numbers that only go up is a dashboard of vanity metrics, in a nonprofit exactly as in a startup.`,
        breaks: `The analogy breaks on **latency and irreversibility**. A product team can measure the real outcome (did the user succeed?) within the same session; many social outcomes lag by *years* — literacy that sticks, recidivism avoided, health maintained — so you genuinely cannot close the loop as fast, which is why credible leading indicators matter far more here than in software. And unlike a churned user you can re-engage tomorrow, a mismeasured cohort of children ages out: the cost of tracking the wrong metric is not a bad quarter, it is a generation you can't re-run. Borrow the vanity/real framing; respect that the feedback loop is slower and the stakes don't reset.`,
      },
      workedExample: `**Pratham**, an Indian education non-profit, is the origin of the *Teaching at the Right Level* (TaRL) approach, evaluated over years by J-PAL researchers. An output-only report would have read: "trained 20,000 volunteers, ran learning camps in 10,000 villages." Impressive activity, zero evidence of learning.

Instead Pratham instrumented the **outcome** with a simple, cheap oral assessment (the ASER tool): can a child read a paragraph, a sentence, a word, or nothing? Illustrative cohort numbers make the shape clear:

| Reading level | Baseline | After camp |
|---|---|---|
| Cannot read letters | 35% | 12% |
| Letters only | 30% | 22% |
| Words / sentence | 25% | 34% |
| Full paragraph | 10% | 32% |

The **leading indicator** they steer on daily is the fraction of children who moved up *at least one level*, checked every few weeks — an early signal that predicts the lagging outcome (durable literacy). Attendance alone (an output) was deliberately *not* treated as success: full camps with flat reading levels would have counted as failure. That discipline — grouping children by current level and measuring level-change, not seats filled — is precisely what the evidence showed works, and it is why TaRL scaled to millions of children. The number that mattered was never "camps held"; it was "levels gained."`,
      branch: {
        scenario: `You run a job-training non-profit. Your board wants a single headline metric for the annual report. Your data team offers three candidates: (A) "**people trained**" — total participants who completed the course; (B) "**graduates employed at 6 months**" — the lagging outcome you actually exist to produce; (C) "**mock-interview pass rate at week 4**", a mid-program checkpoint that has historically predicted 6-month employment well. You can feature one as the headline and track the others internally. Which do you lead with?`,
        choices: [
          {
            label: 'A — "people trained." It is the biggest, cleanest number and always grows.',
            correct: false,
            consequence: `**Instructive miss.** "People trained" is a pure **output** — it rises whenever you enroll more bodies, regardless of whether a single person got a job. Leading with it tells funders how busy you were, not whether you changed anyone's life, and it quietly rewards the wrong behavior: fill seats, ignore results. This is the vanity metric in its purest form.`,
          },
          {
            label: 'B as the headline outcome, with C as the leading indicator you steer on internally.',
            correct: true,
            consequence: `**Correct.** Employment at 6 months (B) is the **lagging outcome** you exist to cause, so it belongs in the headline — that is the honest claim. But because it arrives too late to steer this cohort, you run the program on the **leading indicator** (C), the week-4 checkpoint that credibly predicts B, catching a failing cohort while you can still fix it. Outcome for the claim, validated leading indicator for the steering. Output counts stay in an appendix as context, never as the headline.`,
          },
          {
            label: 'C alone — the week-4 pass rate is early and predictive, so just report that.',
            correct: false,
            consequence: `**Half-right, real hazard.** C is an excellent *leading* indicator and the right thing to steer on — but reporting it *as if it were the outcome* is subtle overclaiming. A leading indicator is a prediction, not proof; if you never publish the lagging 6-month employment number, you can never be caught when the prediction fails, and eventually it will. Steer on C, but stake your headline on the outcome you actually deliver.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each metric a social program might report into OUTPUT (activity you controlled) versus OUTCOME (change you caused). The headline of an honest impact report should come from the right-hand column.',
          buckets: ['Output (activity)', 'Outcome (change caused)'],
          items: [
            { text: 'Number of tutoring sessions delivered', bucket: 'Output (activity)' },
            { text: 'Meals distributed this quarter', bucket: 'Output (activity)' },
            { text: 'Volunteers trained and deployed', bucket: 'Output (activity)' },
            { text: 'Children who advanced at least one reading level', bucket: 'Outcome (change caused)' },
            { text: 'Families still food-secure twelve months later', bucket: 'Outcome (change caused)' },
            { text: 'Patients who completed their full treatment course', bucket: 'Outcome (change caused)' },
          ],
          explain: 'Outputs go up whenever you work harder and reveal nothing about impact; outcomes move only when the world actually changed. Report activity as context, but never let it stand in for the change you exist to cause.',
        },
      ],
      tutorHooks: [
        { label: 'Find the vanity metrics in my program', kind: 'ask', question: 'Here is what my non-profit currently reports. Which of these are outputs (vanity/activity metrics) and which are genuine outcomes, and what leading indicator could I add to steer toward the outcome before it is too late?' },
        { label: 'Design a leading indicator for my outcome', kind: 'ask', question: 'My lagging outcome takes months or years to observe. Help me design an early, cheap-to-measure leading indicator that credibly predicts it for my specific program and population.' },
        { label: 'Critique my outcome logic', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A food-security non-profit reports "48,000 meals served this quarter." What kind of metric is this, and what would turn it into an outcome?',
          options: [
            'It is already an outcome — meals served is the impact',
            'It is an output; the outcome would be something like the share of served families still food-secure months later',
            'It is a leading indicator that reliably predicts food security',
            'It is a lagging indicator of poverty',
          ],
          answer: 1,
          explain: 'Meals served is an **output** — it grows whenever you distribute more food, regardless of whether hunger was durably reduced. The outcome is the *change*: households that became and stayed food-secure. Report the output as context, but stake the claim on the outcome.',
        },
        {
          kind: 'mcq',
          prompt: 'A literacy program\'s durable outcome (children reading fluently) only shows up after a year. Which is the best LEADING indicator to steer the current cohort on?',
          options: [
            'The number of reading sessions the program delivered this term',
            'The share of children who advanced at least one reading level by week 6, checked on fresh passages',
            'The total money spent on materials this quarter',
            'How satisfied volunteers say they are with the program',
          ],
          answer: 1,
          explain: 'A good leading indicator is early, cheap to measure, and credibly predicts the lagging outcome. Week-6 level gains on unseen passages move only when children are actually learning, so they forecast durable fluency. Sessions delivered and money spent are outputs; volunteer satisfaction is unrelated to student learning.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR non-profit (or one you know well), name one output metric it is tempted to headline, the true lagging outcome it exists to cause, and one leading indicator that would let you steer toward that outcome early. Explain why the leading indicator credibly predicts the outcome.',
          rubric: 'A strong answer: (1) correctly identifies a genuine OUTPUT/activity metric; (2) states the real lagging OUTCOME (a durable change in people\'s lives, not an activity); (3) proposes a specific, cheap-to-measure LEADING indicator; (4) gives a plausible causal reason the leading indicator predicts the lagging outcome, rather than just asserting it.',
        },
      ],
      commitSummary: 'concept only — you separate outputs from outcomes and choose a leading indicator; nothing is persisted.',
    },

    // -----------------------------------------------------------------------
    {
      id: '106.2',
      module: 106,
      title: 'Attribution: did YOU cause it?',
      estMinutes: 16,
      prerequisites: ['106.1'],
      artifactSlot: null,
      concept: `You measured the outcome and it improved. Congratulations — but did *your program* cause the improvement, or would it have happened anyway? That is the **attribution problem**, and it is where most impact claims quietly fall apart.

The trap is **correlation mistaken for causation**. Your job-training graduates found work; but the local economy also recovered that year, and the people who *signed up* were more motivated than average to begin with. Both are **confounds** — factors that move the outcome independently of your program and inflate your apparent impact.

The cure is **counterfactual thinking**: what would have happened to these same people *without* the program? You can never observe that directly for the same person, so you estimate it with a **comparison group** that resembles your participants but did not receive the program.

- The gold standard is a **randomized controlled trial (RCT)**: randomly assign eligible people to treatment or control, so the two groups differ *only* by chance and by your program. Randomization neutralizes confounds you didn't even think to measure — including self-selection.
- Full RCTs are often impractical, so credible cheaper comparisons exist: a **waitlist** as a natural control, a **matched comparison group**, a **before/after with a comparison region**, or a **staggered rollout** where later-served sites act as controls for earlier ones.

Impact = outcome in the treated group **minus** the counterfactual. Without some estimate of that counterfactual, you have a number, not a claim.`,
      reframe: {
        analogy: `An RCT is an **A/B test with a control group**, and you already trust it for exactly the same reason. When you ship a feature and conversion rises, you don't credit the feature — the season, a marketing push, or a pricing change could have done it. So you randomly split users into A (feature) and B (holdout) and read the *difference*. The holdout is your counterfactual: the same population, minus your change. A social program's control group is that holdout. "Outcomes went up after we launched" is the pre/post chart every engineer has learned to distrust; "the treated group beat the randomized control by 18 points" is the A/B result you'd actually ship on. Randomization is what turns a correlation into a causal read, in a landing-page test and in a poverty program alike.`,
        breaks: `The analogy breaks on **cost, ethics, and interference**. You can spin up a web holdout for free and end it in a day; randomizing who gets medicine, cash, or schooling raises real ethical stakes and can take years — which is why the cheaper credible designs (waitlists, staggered rollout) exist and matter more here. And unlike isolated web sessions, people **talk to and affect each other**: treating one household can spill over onto an untreated neighbor (a job network, a disease that stops spreading), contaminating the control in a way A/B's independent users rarely do. The logic of the holdout is identical; the plumbing is far harder, and spillover is a first-class threat, not an edge case.`,
      },
      workedExample: `**GiveDirectly** delivers unconditional cash transfers to people in extreme poverty and — unusually — built its credibility on **RCTs**, randomizing which eligible households received transfers so a comparison group established the counterfactual. That design is what let researchers separate the effect of the *cash* from everything else moving in those villages.

Consider the naive alternative and why it fails. A pre/post story: "recipient households' assets rose 40% in the year after transfers." Confounded — a good harvest, seasonal migration income, or the simple fact that surveyed villages were on an upswing could explain much of it. The RCT instead compares treated households against randomly assigned controls in the *same* region and *same* year, so weather and local economy hit both groups equally and cancel out. The remaining gap — illustratively, treated households holding meaningfully more assets and reporting less hunger than controls — is the part you can honestly attribute to the cash.

Crucially, GiveDirectly's researchers also measured **spillovers**: did untreated neighbors gain or lose? Ignoring that would have let village-level effects leak into the control and bias the estimate. Naming and measuring the confound — rather than assuming it away — is the entire difference between "assets rose" (a correlation) and "the transfer *caused* an 18-point asset gain over control" (a claim a serious funder can act on).`,
      branch: {
        scenario: `Your after-school mentoring non-profit reports that mentored students' graduation rate is **89%**, versus a **71%** district average, and concludes the program adds "18 points." A skeptical funder pushes back. What is the most honest response?`,
        choices: [
          {
            label: 'Stand firm — 89% vs 71% is an 18-point gap, that is your impact.',
            correct: false,
            consequence: `**The classic attribution error.** Students who *enroll* in mentoring — or whose families sign them up — are typically more motivated or better-supported than the district average to begin with. That **self-selection** is a confound: some of the 18 points was there before you touched them. Comparing a self-selected group to a whole-district average measures *who joins*, not *what the program does*.`,
          },
          {
            label: 'Concede the raw comparison is confounded and propose a credible counterfactual — a matched comparison group or, better, a randomized or waitlist design.',
            correct: true,
            consequence: `**Correct.** The right move is to admit the district average is not a valid counterfactual (self-selection contaminates it) and to estimate what *these* students would have done without you. A **waitlist RCT** (randomize who enrolls this term vs next), or at minimum a **matched comparison** on prior grades and background, isolates the program's effect. The honest headline becomes the gap over that comparison group — which may be smaller than 18 points, but is real.`,
          },
          {
            label: 'Raise the claim to 25 points by only counting students who attended every session.',
            correct: false,
            consequence: `**This makes it worse.** Keeping only the most-engaged completers stacks a *second* selection effect on the first: you are now comparing your most motivated, most-supported students to a general average. High attenders would have done better regardless. Filtering to your best cases inflates the number and destroys attribution — the opposite of what the funder is asking for.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'scenario',
          title: 'Diagnose the confound',
          intro: 'Each program below reports a raw before/after or vs-baseline improvement. Your job is to spot whether the claim credibly attributes the change to the program, or whether a confound could explain it. Think like an engineer reading an uncontrolled pre/post chart.',
          decisions: [
            {
              situation: 'A microloan program reports borrowers\' incomes rose 22% over two years and attributes it entirely to the loans. No comparison group was used, and the national economy grew strongly over the same period.',
              options: [
                { label: 'Attribution is sound — income rose after the loans', correct: false, outcome: 'No. With no control group and a booming economy, a large share of the 22% could be the rising tide lifting all boats. Pre/post with no counterfactual cannot separate the loan\'s effect from the macro trend.' },
                { label: 'A confound (economy-wide growth) is uncontrolled; need a comparison group', correct: true, outcome: 'Correct. The economy is a classic confound that moves incomes independently of the loans. A comparison group of similar non-borrowers in the same economy would net it out; without one, the claim is a correlation.' },
              ],
            },
            {
              situation: 'A health non-profit randomly assigned villages to receive clean-water infrastructure or not, then compared child-illness rates. Treated villages had 30% fewer cases than control villages in the same district and season.',
              options: [
                { label: 'This is a credible causal claim — randomization handles confounds', correct: true, outcome: 'Correct. Random assignment makes treated and control villages differ only by chance and by the program, so weather, season, and local conditions hit both equally. The 30% gap is a defensible causal estimate — watch only for spillover between nearby villages.' },
                { label: 'Still confounded — you cannot prove causation from any field study', correct: false, outcome: 'Too skeptical. A well-run RCT is precisely how field research establishes causation; randomization neutralizes even unmeasured confounds. The remaining concern is spillover between adjacent villages, not the core design.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'What is my counterfactual?', kind: 'ask', question: 'For my program and outcome, help me design the most credible counterfactual I can afford — RCT, waitlist, staggered rollout, or matched comparison — and name the specific confounds each design does and does not neutralize.' },
        { label: 'Find the confounds in my impact claim', kind: 'ask', question: 'Here is an impact claim my organization makes. List the plausible confounds (self-selection, secular trends, spillovers) that could inflate it, and how I would test whether each one is doing the work.' },
        { label: 'Harder attribution example', kind: 'harder', concept: 'estimating impact from a staggered rollout when a full RCT is impossible, including spillover between treated and control sites' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which design most credibly isolates a program\'s causal effect from confounds you did not think to measure?',
          options: [
            'Before/after on program participants only',
            'Comparing participants to the national average',
            'Randomly assigning eligible people to treatment vs control (an RCT)',
            'Surveying participants about how much the program helped them',
          ],
          answer: 2,
          explain: 'Random assignment makes treatment and control differ only by chance and by the program, so *unmeasured* confounds — including self-selection — are balanced across both groups. Before/after and vs-average designs leave confounds intact; self-reported helpfulness adds a further reporting bias.',
        },
        {
          kind: 'mcq',
          prompt: 'A tutoring program compares its enrolled students to the whole-school average and claims the gap as its impact. The most likely problem is:',
          options: [
            'The sample is too small to matter',
            'Self-selection — students who enroll differ systematically from the average before the program starts',
            'The school average is a randomized control group',
            'There is no problem; this is a valid counterfactual',
          ],
          answer: 1,
          explain: 'Students (or families) who choose to enroll tend to be more motivated or supported than the school average, so part of the gap predates the program. That self-selection is a confound; the whole-school average is not a valid counterfactual for a self-selected group.',
        },
        {
          kind: 'free',
          prompt: 'Take an impact claim your organization makes (or might make). Describe the most credible counterfactual you could actually afford — an RCT, a waitlist, a staggered rollout, or a matched comparison — and name one specific confound it would neutralize and one it would not.',
          rubric: 'A strong answer: (1) states a concrete impact claim; (2) proposes a realistic comparison-group design appropriate to the program\'s constraints; (3) correctly explains what confound the design neutralizes (e.g. secular trends, self-selection via randomization); (4) honestly names a residual threat the design does NOT fully handle (e.g. spillover, attrition, external validity), showing counterfactual thinking rather than blind faith in one method.',
        },
      ],
      commitSummary: 'concept only — you reason about counterfactuals and confounds; nothing is persisted.',
    },

    // -----------------------------------------------------------------------
    {
      id: '106.3',
      module: 106,
      title: 'Avoiding measurement traps (Goodhart & gaming)',
      estMinutes: 15,
      prerequisites: ['106.1', '106.2'],
      artifactSlot: null,
      concept: `You now have an outcome metric with credible attribution. The next danger appears the moment you *set that metric as a target* and attach stakes to it: people optimize the number instead of the goal it was meant to represent.

This is **Goodhart's law**: *when a measure becomes a target, it ceases to be a good measure.* The metric was only ever a **proxy** for the outcome you care about. Push hard enough on the proxy and it detaches from the goal — the number climbs while the underlying good stagnates or worsens.

The archetype is **teaching to the test**. Test scores proxy for "students learned." Make scores the target — tie funding, jobs, or reputation to them — and programs drill test-taking, narrow the curriculum, coach the marginal questions, and in the worst cases quietly exclude weak students from the count. Scores rise; learning does not. The proxy got gamed.

Defenses that actually work:

- **Prefer measures that are hard to game** — outcomes verified by an independent party, or that require the real thing to move (a child who can read *any* new passage, not the practiced one).
- **Use a basket, not a single number** — several metrics plus a guardrail, so gaming one shows up as damage in another.
- **Watch for the divergence signal**: the proxy improving while spot-checks of the true outcome don't is the fingerprint of gaming.
- **Separate steering metrics from stakes**: a number you use to learn should not carry punishment, or people manage the number instead of the mission.

The goal is a metric robust enough that the only way to move it is to actually deliver the outcome.`,
      reframe: {
        analogy: `**Goodhart's law is over-optimizing a proxy loss.** In machine learning you never get to optimize "the model is genuinely good"; you optimize a measurable surrogate — training loss, a benchmark score, a click-through reward. Push the optimizer hard enough and it finds the gap between the surrogate and what you actually wanted: it overfits the benchmark, exploits the reward, memorizes the test set. The benchmark number soars while real-world performance flatlines or degrades. A program tying stakes to test scores is running the same optimizer against the same kind of proxy, and it finds the same gap — drilling the test instead of building the skill. Every engineer who has watched a model game its reward function already understands why a gamed KPI diverges from the mission it was meant to encode.`,
        breaks: `The analogy breaks because **the optimizer here is people, and people respond to incentives, framing, and fairness, not just gradients.** A model games a reward mechanically; a teacher or caseworker games a target *because* stakes were attached, and will often *not* game it if the metric is used for learning rather than punishment — a lever no loss function has. That means one of your strongest defenses is social, not statistical: change *why* the number is collected. Conversely, humans game more creatively than any optimizer — they can exclude hard cases, reclassify, or outright fabricate, exploits no gradient descent would invent. Borrow the proxy-divergence intuition; remember your optimizer has motives.`,
      },
      workedExample: `The cleanest real illustration comes from **high-stakes standardized testing**, the phenomenon Campbell's law named decades ago. When U.S. school funding and staff evaluations were tied hard to standardized test scores, the proxy ("students learned") was made the target — and it got gamed at scale. Illustrative but representative patterns that follow:

- **Curriculum narrowing**: subjects and skills not on the test (science, arts, critical writing) get squeezed out; the score rises, the education narrows.
- **Teaching to the test**: class time shifts to test format and likely questions rather than transferable understanding.
- **Selection gaming**: in the worst documented cases, likely-low-scoring students were reclassified or discouraged from sitting, and a handful of districts saw outright answer-changing scandals.

The tell was **divergence**: reported scores climbed while independent, low-stakes assessments of the *same* students (which no one was incentivized to game) stayed flat — the signature of a gamed proxy. Contrast the robust design from lesson 106.1: **Pratham's** reading check asks a child to read a *fresh* passage, an outcome you cannot fake by drilling one text, and its steering data was kept largely separate from punitive stakes. The lesson is not "stop measuring." It is: choose measures that only move when the real outcome moves, keep a basket with guardrails, and never weld high stakes onto a single fragile proxy.`,
      branch: {
        scenario: `Your workforce non-profit is funded on a single target: **"job placements within 90 days."** Placements are up 40% this year and the funder is thrilled. A caseworker quietly tells you how: staff now steer clients toward any job that counts — short-term, low-wage, high-turnover roles — and stop tracking clients the moment day 90 passes. What do you do?`,
        choices: [
          {
            label: 'Nothing — placements are the funded metric and they are up. Do not rock the boat.',
            correct: false,
            consequence: `**Textbook Goodhart, ignored.** "Placements in 90 days" was a *proxy* for "clients reach stable, sustaining employment." Welding stakes to it detached the proxy from the goal: staff optimize the count with churn-and-burn placements that collapse on day 91. The number is real and the mission is failing simultaneously — exactly the divergence that signals a gamed metric. Doing nothing locks it in.`,
          },
          {
            label: 'Add a guardrail metric — job retention at 6 and 12 months — and separate learning data from funder stakes, then renegotiate the target as a basket.',
            correct: true,
            consequence: `**Correct.** You attack the gaming structurally: pair the placement count with a **retention guardrail** (still employed at 6 and 12 months) so churn placements stop counting as wins, turning the target into a *basket* that is hard to game — you can only move retention by actually helping people into durable jobs. Then keep the steering data blameless and renegotiate the funder metric to reward sustained employment. You change the incentive, not just scold the caseworkers responding rationally to it.`,
          },
          {
            label: 'Discipline the caseworkers for gaming the number and set an even higher placement target.',
            correct: false,
            consequence: `**Wrong lever, worse outcome.** The caseworkers are rational agents optimizing the target *you* set; punishing them while keeping the same single fragile proxy — and raising it — intensifies the pressure to game and pushes it underground (selection, misreporting). Goodhart is a design flaw in the metric, not a moral flaw in the staff. Fix the measure and the incentive, not the people responding to it.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each measure by how EASY it is to game once you attach high stakes to it. Robust measures are the ones you can only move by actually delivering the outcome.',
          buckets: ['Easily gamed proxy', 'Hard-to-game / robust'],
          items: [
            { text: 'Score on a test whose questions leak in advance', bucket: 'Easily gamed proxy' },
            { text: 'Job placements counted only at day 90, never after', bucket: 'Easily gamed proxy' },
            { text: 'Self-reported satisfaction on a survey run by the program itself', bucket: 'Easily gamed proxy' },
            { text: 'Reading a fresh, unseen passage assessed by an independent tester', bucket: 'Hard-to-game / robust' },
            { text: 'Employment still held at 6 and 12 months, verified in records', bucket: 'Hard-to-game / robust' },
            { text: 'Outcome measured on a random sample by an outside evaluator', bucket: 'Hard-to-game / robust' },
          ],
          explain: 'A proxy is gameable when you can move the number without moving the outcome: leaked tests, snapshot placements, and self-run surveys all reward the appearance of success. Robust measures require the real thing — a fresh passage, durable employment, independent verification — so the only path to a better number is a better outcome.',
        },
        {
          kind: 'numeric',
          prompt: 'A program reports 500 job placements at 90 days. An independent audit finds only 180 of those people are still employed at 12 months. What is the retention rate at 12 months, as a percentage? (Enter just the number.)',
          answer: 36,
          tolerance: 0.5,
          unit: '%',
          explain: '180 / 500 = 0.36 = 36%. The 90-day placement count looked strong, but the 12-month guardrail reveals that nearly two-thirds of placements did not last — the exact divergence between a gamed proxy and the real outcome. A retention guardrail turns that hidden failure into a visible one.',
        },
      ],
      tutorHooks: [
        { label: 'Stress-test my metric for gaming', kind: 'ask', question: 'Here is the single metric my program is funded on. Play the adversary: list every way a rational staff member could move that number WITHOUT improving the real outcome, then propose a guardrail or basket that closes each loophole.' },
        { label: 'Design a hard-to-game basket', kind: 'ask', question: 'Help me replace my single target with a small basket of metrics plus a guardrail for my specific program, such that the only way to improve the basket is to actually deliver the outcome.' },
        { label: 'Harder Goodhart example', kind: 'harder', concept: 'detecting proxy divergence when a headline metric improves but the underlying outcome does not, and choosing a robust replacement measure' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Goodhart\'s law is best summarized as:',
          options: [
            'Any metric worth tracking should be tied to funding',
            'When a measure becomes a target, it ceases to be a good measure, because people optimize the proxy instead of the goal',
            'Bigger numbers are always better than smaller ones',
            'You should never measure social programs',
          ],
          answer: 1,
          explain: 'A metric is only a proxy for the real outcome. Attach stakes and people optimize the proxy directly — teaching to the test, churn placements — so the number detaches from the goal. That divergence, not the measuring itself, is the trap.',
        },
        {
          kind: 'mcq',
          prompt: 'A program\'s headline test scores climb every year, but an independent low-stakes assessment of the same students stays flat. This divergence most likely indicates:',
          options: [
            'The program is working perfectly and the independent test is broken',
            'The high-stakes metric is being gamed (e.g. teaching to the test); the flat independent measure reveals the real outcome is not improving',
            'Test scores are always the most reliable measure of learning',
            'The two measures are unrelated, so nothing can be concluded',
          ],
          answer: 1,
          explain: 'A proxy rising while an un-gamed measure of the same outcome stays flat is the fingerprint of Goodhart gaming. The stakes drove effort into the score itself rather than into learning; the independent, low-stakes check — which no one is incentivized to game — exposes the gap.',
        },
        {
          kind: 'free',
          prompt: 'Pick one metric your organization reports (or would). Describe how a rational insider could game it without improving the real outcome, then propose a guardrail or basket that would make the gaming show up as damage elsewhere. Explain why your fix is harder to game than the original.',
          rubric: 'A strong answer: (1) identifies a genuine proxy metric and a *specific*, plausible gaming strategy (selection, narrowing, snapshot timing, self-report); (2) proposes a concrete guardrail or basket (e.g. a retention/durability measure, independent verification, a counter-metric); (3) explains why the fix requires actually delivering the outcome to move; (4) ideally notes separating steering data from punitive stakes.',
        },
      ],
      commitSummary: 'concept only — you audit a metric for gaming and design a guardrail; nothing is persisted.',
    },

    // -----------------------------------------------------------------------
    {
      id: '106.4',
      module: 106,
      title: 'Reporting with integrity',
      estMinutes: 17,
      prerequisites: ['106.1', '106.2', '106.3'],
      artifactSlot: null,
      concept: `You have honest outcomes, credible attribution, and gaming-resistant metrics. The final act is telling funders the truth — *including the parts that hurt*.

The temptation to **overclaim** is structural. Funders reward impressive numbers, the next grant depends on this report, and everyone in the sector is polishing theirs, so cherry-picking the best cohort, quietly dropping the failed pilot, or restating a confounded correlation as proven causation feels almost mandatory. It is also corrosive: overclaiming misallocates scarce charitable money toward whatever *sounds* best, and one exposed exaggeration can end an organization's credibility for good.

Integrity in reporting means, concretely:

- **Report the counterfactual honestly** — the effect over control, not the flattering raw before/after.
- **Disclose what didn't work** — the arm of the program that failed, the metric that dropped, the sample you couldn't reach. Null and negative results are information, not shame.
- **State uncertainty** — confidence intervals, sample sizes, and the confounds you couldn't fully rule out. A number with honest error bars beats a confident fiction.
- **Distinguish claims by strength** — "an RCT shows" is not the same sentence as "we believe" or "participants told us."

The organizations funders trust most are **learning organizations**: they treat a failed program as a finding to publish, not a secret to bury, and they get *more* funding over time precisely because their claims survive scrutiny. Honest reporting is not a tax on impact; over a long relationship with serious funders, it *is* the impact strategy.`,
      reframe: {
        analogy: `An integrity report is a **blameless postmortem** with **observability** attached. When a system fails, a mature engineering culture doesn't hide the incident or pin it on one on-call engineer; it writes an honest timeline — what broke, what the metrics actually showed, what we still don't understand — because the goal is a system that learns, and you cannot fix what you cover up. That is exactly a learning organization reporting a failed program arm to its funder. And "state your uncertainty and distinguish claim strength" is **observability**: you don't ship a green dashboard that hides the p99 latency spike; you expose the real signal, error bars and all, so decisions are made on truth. Overclaiming impact is the nonprofit equivalent of a status page that says "all systems operational" while users are down — it protects you today and destroys trust the moment someone looks.`,
        breaks: `The analogy breaks on **the audience and the incentive gradient**. An internal postmortem is read by colleagues who share your interest in truth; a funder report is read by someone deciding whether to give you money next year, so the pressure to spin is far stronger and more direct than anything a postmortem faces. That makes the *discipline* harder to hold precisely where it matters most, and it means integrity often has to be protected by structure — pre-registered metrics, external evaluators, funders who explicitly reward honesty — not willpower alone. A blameless culture is something a team grants itself; honest impact reporting frequently has to be engineered into the funding relationship against its natural gradient.`,
      },
      workedExample: `**Evidence Action** ran a program called **No Lean Season**, which offered small loans to encourage seasonal migration for work in Bangladesh — a promising early study suggested it raised incomes. As they scaled, a larger, more rigorous **RCT failed to replicate the effect**: at scale, the program did not produce the income gains the earlier evidence implied.

What Evidence Action did next is the model for this lesson. Rather than bury the result, cherry-pick the favorable early study, or quietly let the program drift, they **published the disappointing findings and discontinued the program** — publicly explaining that the evidence no longer justified funding it. (Specific figures here are illustrative; the decision and its transparency are the documented, real part.)

Read it against this module's whole arc. They measured an **outcome**, not activity (106.1). They insisted on real **attribution** via RCT rather than the flattering early correlation (106.2). They refused to let a favorable proxy or a sunk-cost narrative override the truth (106.3). And they **reported the failure with integrity** (106.4) — treating a null result as a finding to act on, not a secret to hide. The counterintuitive payoff: publishing a failure *increased* their credibility with serious, evidence-driven funders, because it proved their positive claims could be trusted. That is a learning organization, and it is why honesty compounds: the org that can say "this didn't work, so we stopped" is the org whose "this works" is worth funding.`,
      branch: {
        scenario: `Your flagship program's fresh RCT came back **null** — no significant effect over control — even though last year's uncontrolled report showed a big before/after gain. Your renewal grant is due next month and this program is 60% of your budget. What do you put in the report?`,
        choices: [
          {
            label: 'Lead with last year\'s before/after gain and omit the null RCT — the older number is more fundable.',
            correct: false,
            consequence: `**Overclaiming, and a time bomb.** You would be headlining a confounded correlation you now know does not survive a controlled test, while hiding the stronger evidence that contradicts it. Serious funders increasingly check; when the null result surfaces — and it will — you lose not just this program's funding but the credibility of every *other* claim you have ever made. Short-term safety, existential long-term risk.`,
          },
          {
            label: 'Report the null result honestly, explain what you are changing or stopping because of it, and propose a redesigned approach with a pre-registered evaluation.',
            correct: true,
            consequence: `**Correct — and the strongest long-term move.** You disclose the null, distinguish it clearly from the old confounded gain, and treat it as a finding: here is what the evidence now says, here is what we are changing or winding down, here is how we will test the next version. This is the learning-organization posture that funders who fund on evidence *reward* — it is precisely what Evidence Action did with No Lean Season. Honesty about failure is what makes your future "it works" believable.`,
          },
          {
            label: 'Report only the sub-group where the effect was positive and present it as the program\'s impact.',
            correct: false,
            consequence: `**Cherry-picking dressed as data.** Slicing to the one favorable sub-group after seeing the results (a "fishing expedition") manufactures an effect that will not replicate — a subtle cousin of the gaming from lesson 106.3. Presenting it as *the* impact is overclaiming with a statistical veneer. If the sub-group finding is genuinely interesting, report it honestly as an exploratory hypothesis to test next, never as proven impact.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'rank',
          prompt: 'Order these ways of describing the SAME result from LEAST honest / most overclaiming (top) to MOST honest (bottom).',
          items: [
            'We transformed the community and lifted everyone out of poverty.',
            'Incomes rose 40% after our program (uncontrolled before/after, no comparison group).',
            'Treated households beat the randomized control by 12 points, though the confidence interval is wide and spillover is uncertain.',
            'Our RCT found no significant effect over control, so we are redesigning the program and will pre-register the next evaluation.',
          ],
          explain: 'The top claim is pure hyperbole with no evidence; the before/after is a confounded correlation dressed as impact. The controlled estimate with stated uncertainty is honest and useful, and openly reporting a null result plus a plan is the highest-integrity posture — the one that builds durable funder trust.',
        },
        {
          kind: 'scenario',
          title: 'Draft the honest sentence',
          intro: 'For each situation, choose the sentence that reports the finding with integrity — matching the strength of the claim to the strength of the evidence.',
          decisions: [
            {
              situation: 'Participants told you in a satisfaction survey that they felt more confident. You have no outcome data and no comparison group.',
              options: [
                { label: '"Our program boosts participant confidence and life outcomes."', correct: false, outcome: 'Overclaim. Self-reported feelings on your own survey are the weakest evidence, and you have no outcome data at all — asserting "life outcomes" is fiction. Match the claim to the evidence you actually have.' },
                { label: '"Participants self-reported feeling more confident; we have not yet measured whether this changed outcomes."', correct: true, outcome: 'Correct. It reports exactly what you know — a self-reported perception — flags the absence of outcome evidence, and promises nothing you cannot support. Honest about strength, useful to the funder.' },
              ],
            },
            {
              situation: 'One program arm succeeded in a controlled test; a second arm showed no effect. The failed arm is a third of your spend.',
              options: [
                { label: 'Report only the successful arm and describe it as "the program\'s impact."', correct: false, outcome: 'Cherry-picking. Hiding the failed arm that consumes a third of your budget misrepresents both your impact and your cost-effectiveness. Funders who later learn of it will distrust everything else.' },
                { label: 'Report both arms, note the failed one, and explain how you will reallocate or redesign that spend.', correct: true, outcome: 'Correct. Disclosing the null arm alongside the successful one is exactly the learning-organization posture — it makes your positive claim credible and shows you act on evidence rather than defend sunk costs.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Audit my impact report for overclaiming', kind: 'ask', question: 'Here is a draft impact report. Flag every place I overclaim: correlations stated as causation, cherry-picked cohorts, missing uncertainty, or claims stronger than my evidence supports — and rewrite each to match the actual strength of the evidence.' },
        { label: 'How do I report a failure to a funder?', kind: 'ask', question: 'One of my programs came back null or negative. Help me write a funder update that reports it with integrity, explains what I am changing because of it, and frames it as a learning-organization strength rather than a defeat.' },
        { label: 'Critique my reporting integrity', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Evidence Action\'s handling of No Lean Season is held up as a model because they:',
          options: [
            'Scaled the program aggressively despite weak evidence',
            'Published the disappointing at-scale RCT results and discontinued the program rather than burying the finding',
            'Reported only the favorable early study to protect their funding',
            'Refused to evaluate the program with a control group',
          ],
          answer: 1,
          explain: 'When a rigorous at-scale RCT failed to replicate the early promising result, Evidence Action publicly reported the null finding and wound the program down. Treating a failure as a finding to publish — not a secret to hide — is what makes a learning organization\'s positive claims trustworthy.',
        },
        {
          kind: 'mcq',
          prompt: 'Which sentence reports an impact result with the MOST integrity?',
          options: [
            'Our program changed thousands of lives this year.',
            'Incomes rose 30% after our program (no comparison group used).',
            'Treated participants earned 9% more than a randomized control group, with a wide confidence interval and possible spillover we could not fully rule out.',
            'Participants who completed every session did far better than average.',
          ],
          answer: 2,
          explain: 'Option 3 reports the effect *over a control group* (real attribution) and honestly states its uncertainty and unresolved confounds. The others are vague hyperbole, a confounded before/after, and a self-selected completer comparison — all forms of overclaiming.',
        },
        {
          kind: 'free',
          prompt: 'Imagine one of your programs just returned a null or negative result on its best evaluation. Draft the two or three sentences you would put in your funder report. Then explain why reporting it honestly is likely to serve your organization better over a multi-year funding relationship than hiding it.',
          rubric: 'A strong answer: (1) drafts a report passage that states the null/negative result plainly and distinguishes it from any weaker prior claim; (2) frames it as a finding that drives a decision (redesign, reallocate, or stop) rather than as shame; (3) states uncertainty or next steps (e.g. pre-registered re-evaluation); (4) argues credibly that honesty compounds trust and that exposed overclaiming would damage all other claims — the learning-organization case.',
        },
      ],
      commitSummary: 'concept only — you practice reporting outcomes, failures, and uncertainty with integrity; nothing is persisted.',
    },
  ],
}
