import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 28 — Leadership & founder psychology  (SEASON 2: "Building for Real")
//
// By this point in Season 2 the learner has a real venture with real users,
// real money, and real fatigue. The scarcest, least-maintained component in
// that whole system is the founder's own decision-making and mental health.
// This module treats both as engineering problems: make good decisions when
// you cannot know the answer (expected value, base rates, one-way vs two-way
// doors, decision journals); debug the systematic errors in your own head
// (biases, inversion, second-order thinking); know when to hold the line vs
// pivot; and — humanely and seriously — protect your own operating system from
// burnout so you can last the distance. Every lesson is artifactSlot:null; the
// real work is captured through interactive `blocks` (a decision journal, a
// pivot checklist, and a genuine support habit written to "My venture").
// ===========================================================================

export const module28: Module = {
  id: 28,
  season: 2,
  title: 'Leadership & founder psychology',
  goal: 'Make good decisions under uncertainty and last the distance: mental models, expected-value thinking, and protecting your own operating system from burnout.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '28.1',
      module: 28,
      title: 'Decisions under uncertainty',
      estMinutes: 18,
      prerequisites: [],
      artifactSlot: null,
      concept: `As a founder you are paid, in the end, for the quality of your decisions — and almost every important one is made without enough information. Waiting for certainty is not an option; the market moves and your runway burns while you wait. So the skill is not "be right"; it is "have a good *process* for deciding under uncertainty, then judge yourself on the process, not the outcome." Good decisions sometimes have bad outcomes and bad decisions sometimes get lucky; conflating the two ("resulting") is how founders learn exactly the wrong lessons.

Three tools do most of the work:

- **Expected value.** Weight each outcome by its probability and its payoff, and sum: the expected value is $EV = \\sum_i p_i \\cdot x_i$. It forces you to price both the size of a prize and the odds of getting it, instead of being hypnotised by one or the other. A 10% shot at a huge win can beat a 90% shot at a small one — or not. Do the arithmetic.
- **Base rates.** Your inside view ("*our* pilot will convert, I can feel it") is systematically over-optimistic. The base rate — how often things *like this* actually work out — is the anchor that keeps your probabilities honest. Start from the outside view, then adjust.
- **Reversible vs irreversible.** Amazon calls these two-way doors and one-way doors. A reversible decision you can walk back from cheaply; an irreversible one you cannot. These deserve completely different amounts of deliberation — and the classic founder error is agonising over reversible decisions while rushing the irreversible ones.

Finally, **decision journals**. Because outcomes are noisy and memory is self-serving, the only way to actually improve your process is to write down — *at the time* — what you decided, what you expected, and why. Reviewed later, the journal is the ground truth that tells you when you were smart-and-unlucky versus stupid-and-lucky. It is the unit test suite for your judgement.`,
      reframe: {
        analogy: `Expected-value thinking is **designing to the load distribution instead of a single guessed load**. A junior engineer sizes a system for the one scenario they imagined; a good engineer characterises the whole distribution of inputs — how often each load occurs, how costly each failure is — and provisions for the weighted whole. That is exactly what EV does with decisions: it refuses to collapse an uncertain future into a single story and instead integrates payoff against probability across all the branches. Base rates are your **prior**; the specifics of your situation are the **likelihood** you use to update it — decision-making as Bayesian estimation rather than wishful point-guessing.`,
        breaks: `EV silently assumes you can **survive the variance and take the bet many times** — that the law of large numbers gets to run. A founder often cannot. A positive-EV bet that carries a 20% chance of *ruin* (out of cash, company dead) is not a good bet if you only get one life, because the runs where you go bust end the game before the average can arrive. This is gambler's ruin, and it is why "maximise expected value" must be constrained by "never risk what you cannot afford to lose." So compute the EV — then check the **downside** separately and cap it. The distribution tells you the average; it does not tell you whether you're still alive to collect it.`,
      },
      workedExample: `**Amazon's "Type 1 and Type 2 decisions" (Jeff Bezos, 2015 Letter to Shareholders).** Bezos drew a hard distinction between two kinds of decision. **Type 2** decisions are *reversible* — "two-way doors." If you walk through and don't like what you find, you can walk back out. These, he argued, should be made **quickly**, by individuals or small teams, without heavy process. **Type 1** decisions are *irreversible*, or nearly so — "one-way doors" — and those deserve slow, deliberate, consultative care, because you cannot easily undo them.

His key warning is the one founders most need: as organisations (and people) get more experienced, they tend to apply the heavyweight, Type-1 process to *everything*, including the abundant Type-2 decisions. The result is slowness, risk-aversion, and "diminished invention." The transferable discipline is a two-step sort *before* you deliberate: first ask "is this a one-way door or a two-way door?", and only *then* choose how much time to spend. Rushing a one-way door (a co-founder split, an exclusive multi-year contract, deleting production data) can be fatal; agonising over a two-way door (a price you can change next week, a landing-page headline, a reversible feature) burns the scarcest founder resource — momentum — for nothing. Match the deliberation to the door.`,
      branch: {
        scenario: `A large potential customer offers you a deal: they'll pay well, but only if you sign a **two-year exclusive** that bars you from selling to anyone else in their industry — by far your best market. You have three weeks of their attention and a tempting cheque in front of you. You're pre-product-market-fit and this is roughly 40% of your projected revenue. How do you approach the decision?`,
        choices: [
          {
            label: 'Sign quickly — revenue now is oxygen, and you can always renegotiate later if it hurts.',
            correct: false,
            consequence: `**Rushing a one-way door.** An exclusivity clause that locks you out of your best market for two years is close to irreversible: you can't "renegotiate later" from a position of weakness once you're dependent on their cheque, and you've forfeited the very customers who'd prove your model. This is a Type-1 decision being made at Type-2 speed. The revenue is real, but so is the possibility that this single clause caps your company's ceiling for two years. Slow down precisely because you can't walk back out.`,
          },
          {
            label: 'Recognise it as a one-way door: slow down, quantify the value of the market you\'d forgo, and either negotiate the exclusivity out (or way down) or walk — while looking for a reversible pilot instead.',
            correct: true,
            consequence: `**Correct — match deliberation to the door.** Irreversibility is the signal to spend your scarce deliberation here. Price the option you'd be giving up (the rest of the industry for two years), then push hard to convert this into something reversible: a non-exclusive deal, a shorter term, a paid pilot, or exclusivity limited to a narrow sub-segment. If they won't move and the locked-out market is your real prize, the disciplined answer may be to decline attractive money. One-way doors earn the slow, expensive process.`,
          },
          {
            label: 'Spend the three weeks polishing your pricing tiers and demo instead — get those perfect before you respond.',
            correct: false,
            consequence: `**Optimising the two-way door while the one-way door closes.** Pricing tiers and demo copy are reversible — you can change them next week at almost no cost, so they deserve *little* deliberation. Pouring your three weeks into them while the genuinely irreversible exclusivity decision goes unexamined is the classic inversion of effort. Spend the scarce, careful thinking on the thing you can't undo, not on the things you can.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Expected-value gut check. You can run a paid pilot for $5,000. You estimate a 30% chance it converts into a contract worth $40,000 in gross profit and a 70% chance it yields nothing. Treating the $5,000 as spent either way, what is the expected value of running the pilot, in dollars? Compute 0.30 x 40,000 - 5,000.',
          answer: 7000,
          tolerance: 100,
          unit: '$',
          explain: 'EV = 0.30 x 40,000 - 5,000 = 12,000 - 5,000 = $7,000. Positive EV, so the bet is worth taking IF the $5,000 loss won\'t ruin you and you can make several such bets. Two honesty checks: (1) your 30% is a guess — anchor it to a BASE RATE (how often do pilots like this actually convert?), because founders systematically inflate the inside view; (2) EV is an average over many trials, so also confirm the 70%-lose branch is survivable. Good process, then arithmetic, then a downside check.',
        },
        {
          kind: 'categorize',
          prompt: 'Sort each decision into a two-way door (reversible, decide fast) or a one-way door (irreversible or nearly so, decide slowly). This sort is the FIRST move — before you spend any deliberation, you decide how much the decision deserves.',
          buckets: ['Two-way door (reversible)', 'One-way door (irreversible)'],
          items: [
            { text: 'Changing your pricing page for a two-week experiment', bucket: 'Two-way door (reversible)' },
            { text: 'Trying a new onboarding flow behind a feature flag', bucket: 'Two-way door (reversible)' },
            { text: 'Running a small paid-ads test on one channel', bucket: 'Two-way door (reversible)' },
            { text: 'Rewording your landing-page headline', bucket: 'Two-way door (reversible)' },
            { text: 'Signing a two-year exclusive distribution contract', bucket: 'One-way door (irreversible)' },
            { text: 'Splitting equity 50/50 with a co-founder with no vesting', bucket: 'One-way door (irreversible)' },
            { text: 'Taking a lead investor with aggressive control and veto terms', bucket: 'One-way door (irreversible)' },
            { text: 'Deleting production customer data with no backup', bucket: 'One-way door (irreversible)' },
          ],
          explain: 'Reversible decisions (pricing tests, feature flags, ad experiments, copy) should be made fast and cheap — over-deliberating them wastes momentum. Irreversible ones (exclusive contracts, un-vested equity, heavy investor control, destroying data) deserve slow, consultative care because you cannot walk back out. The classic founder error is exactly the reverse: agonising over the reversible and rushing the irreversible.',
        },
        {
          kind: 'document',
          title: 'Start a decision journal',
          body: 'The only way to improve your decision PROCESS is to record what you decided, what you expected, and why — at the time, before the outcome contaminates your memory. Later, reviewing the entry tells you whether a bad result came from a bad decision or just bad luck. Use the template to log one real, live decision from your venture right now: the situation, the options, your expected value / probabilities, whether it\'s a one-way or two-way door, your choice, and a date to review it.',
          templateHref: '/templates/decision-journal.md',
          docKey: '28.1#journal',
          docLabel: 'My decision journal',
        },
        {
          kind: 'resource',
          title: 'Deciding under uncertainty (real, canonical)',
          items: [
            { label: 'Farnam Street — How a Decision Journal Changed the Way I Make Decisions', url: 'https://fs.blog/2014/02/decision-journal/', note: 'Shane Parrish\'s original decision-journal method, with a template. The source for this lesson\'s journaling block.' },
            { label: 'Amazon — 2015 Letter to Shareholders (Type 1 / Type 2 decisions)', url: 'https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders', note: 'Bezos on one-way vs two-way doors and matching deliberation to reversibility.' },
            { label: 'Farnam Street — The Best Articles (mental models & decision-making)', url: 'https://fs.blog/best-articles/', note: 'A curated shelf on base rates, probabilistic thinking, and avoiding "resulting".' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Work an EV calc with me', kind: 'ask', question: 'Help me build an expected-value estimate for a real decision I\'m facing: list the outcomes, help me anchor each probability to a base rate rather than my optimism, compute the EV, and then separately pressure-test whether the worst-case downside is survivable.' },
        { label: 'Is this a one-way or two-way door?', kind: 'ask', question: 'I\'ll describe a decision I\'m weighing. Help me classify it as reversible (two-way door) or irreversible (one-way door), and tell me how much deliberation it actually deserves and who I should involve.' },
        { label: 'Critique my decision reasoning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Option A is a 10% chance of a $500,000 payoff (else nothing). Option B is a 70% chance of a $50,000 payoff (else nothing). Purely by expected value, which is higher — and what critical check does EV NOT do for you?',
          options: [
            'B is higher; EV already accounts for whether you can survive a loss',
            'A is higher (EV $50,000 vs $35,000); but EV does not tell you whether the downside is survivable, so you must cap ruin risk separately',
            'They are equal; EV also guarantees the outcome',
            'A is higher; therefore you should always choose the higher-EV option regardless of downside',
          ],
          answer: 1,
          explain: 'A: 0.10 x 500,000 = $50,000. B: 0.70 x 50,000 = $35,000. A has the higher expected value. But EV is an average over many trials and says nothing about ruin: if losing would end your company, a higher-EV bet with a fatal downside can still be the wrong choice. Compute EV, then check survivability separately — never let the average blind you to gambler\'s ruin.',
        },
        {
          kind: 'mcq',
          prompt: 'According to the one-way / two-way door framing, what is the most common and costly founder error?',
          options: [
            'Spending too little time on all decisions equally',
            'Treating reversible decisions as irreversible while rushing the genuinely irreversible ones',
            'Never making any irreversible decisions',
            'Always consulting a large group before deciding anything',
          ],
          answer: 1,
          explain: 'Reversible (two-way door) decisions should be made fast and cheap; irreversible (one-way door) decisions deserve slow, careful process. The classic error is the inversion: agonising over easily-reversible choices (pricing, copy, features) while rushing the decisions you truly cannot walk back (exclusive contracts, equity splits, destructive actions). Sort by reversibility BEFORE you decide how much to deliberate.',
        },
        {
          kind: 'free',
          prompt: 'Take one real decision you are facing in your venture right now. (1) Classify it as a one-way or two-way door and justify it. (2) Sketch the expected value: list at least two outcomes with rough probabilities anchored to a base rate, and a payoff for each. (3) State the worst-case downside and whether it is survivable. (4) Make a call, and name the date you\'ll review the decision journal entry.',
          rubric: 'A strong answer: (1) correctly classifies reversibility and matches proposed deliberation to it; (2) gives concrete outcomes with probabilities that reference a base rate / outside view rather than pure optimism, and computes or sketches an EV; (3) explicitly separates the downside/ruin check from the EV, showing awareness that a positive-EV bet can still be un-survivable; (4) commits to a decision AND a review date, demonstrating they understand judging process over outcome. Penalise "resulting" (judging by imagined outcome), missing base rates, or ignoring the downside.',
        },
      ],
      commitSummary: 'no slot written — you started a real decision journal and practised sorting decisions by reversibility and expected value: a process you\'ll be judged on, instead of luck.',
    },

    // -----------------------------------------------------------------------
    {
      id: '28.2',
      module: 28,
      title: 'Mental models & avoiding your own bugs',
      estMinutes: 19,
      prerequisites: ['28.1'],
      artifactSlot: null,
      concept: `Your brain ships with bugs. Cognitive biases are not occasional lapses — they are *systematic*, predictable errors baked into how humans reason, and they hit smart people just as hard (sometimes harder, because intelligence is great at rationalising). The founder's job is to treat their own mind like a system with known defects and build guardrails around them.

Four bugs cause most founder wreckage:

- **Confirmation bias** — you seek and over-weight evidence that you're right, and quietly discount evidence that you're wrong. It's why founders "validate" ideas by talking only to people who already like them.
- **Sunk-cost fallacy** — you keep investing because you've *already* invested, letting unrecoverable past costs distort a forward-looking decision. The money and months are gone whichever way you choose; only the future matters.
- **Survivorship bias** — you study the winners (the ones who reached the interview, the blog post, the stage) and copy their moves, blind to the identical moves made by the far larger population who failed and left no trace.
- **Overconfidence / optimism bias** — your inside view of *your* odds is systematically rosier than the base rate. (This is exactly why Lesson 28.1 leaned on base rates.)

Two debugging tools counter them. **Inversion**: instead of asking "how do I succeed?", ask "how would I *guarantee failure*?" — then avoid those things. Charlie Munger's version, borrowed from the mathematician Jacobi: *"Invert, always invert."* It surfaces risks your success-framed thinking hides. **Second-order thinking**: don't stop at the immediate consequence of a decision — ask "*and then what?*" repeatedly. First-order thinking sees the direct effect (cut prices → more sales); second-order thinking sees the cascade (→ competitors match → margins collapse → you can't fund support → churn rises). The founders who compound are the ones who reason two and three steps down the chain while everyone else optimises step one.`,
      reframe: {
        analogy: `A cognitive bias is **systematic error, not random noise** — a sensor with a fixed offset, not a jittery one. If a thermometer reads randomly high and low, you average many readings and the noise cancels. But if it reads a constant three degrees high, taking a thousand more readings just gives you a very precise *wrong* answer; averaging can't save you. Biases are the constant offset. That's why "I thought about it really hard / gathered more data" doesn't fix them — more effort on a miscalibrated instrument yields confident error. The only fix is what engineers do with a biased sensor: **calibrate against an external reference** — base rates, a devil's advocate, a pre-mortem, someone paid to disagree with you.`,
        breaks: `A sensor can be fully recalibrated once you know its offset; **you cannot fully debug your own mind**. Worse, biases come with a meta-bug — the *bias blind spot*: people readily see distortions in others and believe themselves immune, so simply *learning* about a bias does not immunise you against it. And unlike a fixed hardware offset, your biases shift with emotion, fatigue, and stakes — they get *worse* exactly when a decision matters most and you're tired and invested. So don't rely on introspection to catch them in the moment; build **external** guardrails (checklists, journals, a co-founder who's allowed to tell you you're wrong) that work even when your self-awareness is offline.`,
      },
      workedExample: `**Quibi (Jeffrey Katzenberg & Meg Whitman, 2018–2020).** Quibi raised roughly **$1.75 billion** to launch a short-form, mobile-first premium video service and shut down about **six months** after its April 2020 launch — one of the fastest, most expensive collapses in startup history (all widely reported). It is a near-perfect specimen of biases compounding.

*Confirmation bias and overconfidence:* two celebrated executives with enormous track records treated their own conviction — and the ease of raising a fortune — as proof of demand, rather than testing whether real users wanted premium video in short chunks on their phones. Raising $1.75B *feels* like validation; it is not the same as usage. *Ignoring disconfirming evidence:* the format assumptions (people want Hollywood-quality shows in 10-minute bites, phone-only, behind a paywall) went essentially untested against actual behaviour. *Second-order failure:* launching a paid, mobile-first, on-the-go product in April 2020 — as a pandemic glued everyone to their couches and their large TVs — was a first-order plan (great content, great talent) undone by a second-order reality (context of use collapsed). The transferable lesson is not "Quibi's founders were foolish" — they were extraordinarily capable, which is the point: capability and capital do not immunise you against systematic error. What would have helped is exactly the toolkit — inverting ("how would we guarantee nobody uses this?"), asking "and then what?", and calibrating conviction against real behavioural base rates instead of the feeling of a big raise.`,
      branch: {
        scenario: `You're about to launch a bold new feature you're personally excited about. You've shown it to ten users; eight loved it. You have budget for one more week of validation before the public launch. What's the highest-leverage way to spend it?`,
        choices: [
          {
            label: 'Show it to ten more users who fit the same enthusiastic profile — if they love it too, you\'ll have twenty data points and real confidence.',
            correct: false,
            consequence: `**Confirmation bias, industrialised.** Twenty readings from the same biased sensor is just a more precise wrong answer. If you only sample users predisposed to like it (and interpret polite enthusiasm as demand), you'll manufacture confidence without testing anything. More data along the axis you already believe in doesn't calibrate the instrument — it flatters it.`,
          },
          {
            label: 'Run a pre-mortem and invert: assume the launch flopped, brainstorm every reason why, then deliberately seek out sceptical or churned users and second-order effects you\'d been ignoring.',
            correct: true,
            consequence: `**Correct — calibrate against a hostile reference.** Inversion ("we launched and it failed — why?") and a pre-mortem surface the risks your excitement is hiding, and seeking out sceptics counters confirmation bias by sampling the readings you'd rather not see. Asking "and then what?" catches the second-order effects (support load, cannibalised revenue, a segment you'd annoy). This is the week that actually reduces your uncertainty rather than inflating your conviction.`,
          },
          {
            label: 'Skip validation and just launch — you\'ve already sunk two months into building it, so it needs to ship.',
            correct: false,
            consequence: `**Sunk-cost fallacy.** The two months are gone whether you launch well or badly; they are irrelevant to whether one more week of cheap risk-reduction is worth it. Letting "we already built it" drive the decision is exactly the bug — past investment distorting a forward-looking choice. The build cost doesn't buy you the right to skip the calibration.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Spot the bug. Each situation is driven mainly by one cognitive bias — sort it into the right bucket. Naming the bias is the first step to building a guardrail against it.',
          buckets: ['Confirmation bias', 'Sunk-cost fallacy', 'Survivorship bias', 'Overconfidence / optimism bias'],
          items: [
            { text: 'You only interview users who already signed up and loved the demo, then call the idea "validated".', bucket: 'Confirmation bias' },
            { text: 'You dismiss a churned user\'s harsh feedback as "not our target customer" without checking.', bucket: 'Confirmation bias' },
            { text: 'You keep funding a failing feature because you\'ve already spent six months building it.', bucket: 'Sunk-cost fallacy' },
            { text: 'You stay in a dead partnership because backing out would waste the year you put in.', bucket: 'Sunk-cost fallacy' },
            { text: 'You copy the exact tactics from three unicorn founders\' blog posts, ignoring the thousands who did the same and failed.', bucket: 'Survivorship bias' },
            { text: 'You conclude "dropping out of college works" from a handful of famous dropout founders.', bucket: 'Survivorship bias' },
            { text: 'You estimate your pilot will convert at 40% when the industry base rate is 8%.', bucket: 'Overconfidence / optimism bias' },
            { text: 'You budget six weeks for a project every comparable team took six months to finish.', bucket: 'Overconfidence / optimism bias' },
          ],
          explain: 'Confirmation bias = seeking/keeping only agreeable evidence. Sunk-cost = letting unrecoverable past investment drive a forward decision. Survivorship = learning only from visible winners while the failed majority left no trace. Overconfidence/optimism = your inside view of your odds beating the base rate. Naming the specific bug is what lets you install the specific guardrail (a devil\'s advocate, a "past cost is irrelevant" rule, hunting for the failures, anchoring to base rates).',
        },
        {
          kind: 'scenario',
          title: 'Debugging a biased decision in real time',
          intro: 'A founder is deciding whether to keep pouring resources into "Project Atlas", a big bet that launched four months ago. Walk the decision and catch the bugs as they appear.',
          decisions: [
            {
              situation: 'Atlas usage is flat and churn is high, but the founder pulls up a folder of glowing testimonials from early fans and feels reassured. What\'s happening?',
              options: [
                { label: 'That\'s good diligence — testimonials are real evidence the product works.', correct: false, outcome: 'This is confirmation bias. Curating the flattering evidence (testimonials from fans) while the hard aggregate metrics (flat usage, high churn) say otherwise is exactly how smart founders talk themselves past a warning. The testimonials are real but unrepresentative — a biased sample.' },
                { label: 'It\'s confirmation bias — cherry-picking fan testimonials over the aggregate churn and usage data.', correct: true, outcome: 'Right. The founder is over-weighting agreeable evidence and discounting the representative signal. The guardrail: look at the whole cohort, and go talk to the CHURNED users, not just the fans.' },
              ],
            },
            {
              situation: 'A team member says: "We\'ve already put four months and most of the quarter\'s budget into Atlas, so we have to see it through." How should the founder treat that argument?',
              options: [
                { label: 'It\'s a strong argument — abandoning it would waste everything already invested.', correct: false, outcome: 'That is the sunk-cost fallacy stated out loud. The four months and the spent budget are gone no matter what you choose next; they are not a reason to spend MORE. Only the forward-looking expected value matters now.' },
                { label: 'Flag it as sunk-cost reasoning: past spend is irrelevant to whether future spend is worth it.', correct: true, outcome: 'Correct. Reframe the question as if you were deciding fresh today with no history: "knowing what we now know, would we START Atlas?" If not, the prior investment shouldn\'t rescue it.' },
              ],
            },
            {
              situation: 'To decide, the founder wants a sharper process. What\'s the best next move?',
              options: [
                { label: 'Gather ten more data points from Atlas\'s happiest users to settle it.', correct: false, outcome: 'More readings from the same biased sample won\'t calibrate anything — it just produces confident error. You need a hostile reference, not a friendlier one.' },
                { label: 'Run a pre-mortem/inversion ("assume we killed Atlas and were right — why?") and reason second-order about what continuing costs the rest of the company.', correct: true, outcome: 'Correct. Inversion surfaces the risks the founder\'s attachment is hiding, and second-order thinking ("and then what?") exposes the opportunity cost — every week on Atlas is a week not spent on what\'s actually working. That\'s a real decision process, not motivated reasoning.' },
              ],
            },
          ],
        },
        {
          kind: 'resource',
          title: 'Mental models & debugging your thinking (real)',
          items: [
            { label: 'Farnam Street — Inversion: The Power of Avoiding Stupidity', url: 'https://fs.blog/inversion/', note: 'Munger and Jacobi\'s "invert, always invert" as a practical decision tool.' },
            { label: 'Farnam Street — Second-Order Thinking', url: 'https://fs.blog/second-order-thinking/', note: 'Asking "and then what?" to see the cascade past the first consequence.' },
            { label: 'Farnam Street — Mental Models: The Best Way to Make Intelligent Decisions', url: 'https://fs.blog/mental-models/', note: 'The full latticework, including the major cognitive biases and how to guard against them.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Run a pre-mortem with me', kind: 'ask', question: 'Help me run a pre-mortem on a decision or launch I\'m planning: assume it failed badly a year from now, and walk me through inverting to list every plausible cause, then rank which risks are worth guarding against now.' },
        { label: 'Which bias is biting me?', kind: 'ask', question: 'I\'ll describe how I\'m reasoning about a current call. Help me identify which cognitive bias (confirmation, sunk-cost, survivorship, overconfidence) is most likely distorting it, and prescribe a concrete external guardrail.' },
        { label: 'A harder second-order case', kind: 'harder', concept: 'reasoning three orders deep about a price cut, where the first-order effect is good, the second-order effect is bad, and the third-order effect changes the answer again' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why does "just gather more data and think harder" often FAIL to fix a cognitive bias?',
          options: [
            'Because biases are random noise that averages out with more data',
            'Because a bias is a systematic offset, so more effort on a miscalibrated instrument yields confident error, not accuracy — you need an external reference',
            'Because gathering data is always a waste of time',
            'Because only unintelligent people have biases',
          ],
          answer: 1,
          explain: 'A bias is systematic error (a fixed offset), not random noise. Random noise averages out with more readings; a systematic offset does not — a thousand more readings from a miscalibrated sensor just gives a precise wrong answer. The fix is calibration against an external reference (base rates, a pre-mortem, a devil\'s advocate), not more introspection or effort.',
        },
        {
          kind: 'mcq',
          prompt: 'You\'re about to cut your price 30% to win more customers. Which is the SECOND-order-thinking question?',
          options: [
            'Will lower prices bring in more sign-ups this month?',
            'And then what? Will competitors match, will margins fall below what funds support, and will that raise churn and starve the very growth I wanted?',
            'What headline should announce the new price?',
            'How quickly can we update the pricing page?',
          ],
          answer: 1,
          explain: 'First-order thinking stops at the immediate effect (lower price -> more sign-ups). Second-order thinking asks "and then what?" repeatedly, tracing the cascade: competitor response, margin compression, reduced ability to fund support/product, and the churn that follows. Reasoning two and three steps down the chain is what separates durable operators from step-one optimisers.',
        },
        {
          kind: 'free',
          prompt: 'Pick a real decision or belief you currently hold strongly about your venture. (1) Name the ONE cognitive bias most likely distorting your view of it and explain how. (2) Apply inversion: what would you do if you wanted to GUARANTEE this fails? (3) Trace one second-order consequence ("and then what?") you had not fully considered. (4) State one external guardrail you\'ll put in place.',
          rubric: 'A strong answer: (1) correctly identifies and explains a specific bias (confirmation, sunk-cost, survivorship, or overconfidence) operating on a real belief, not a generic mention; (2) genuinely inverts the problem to surface failure modes, not just restates the goal; (3) traces a real second-order effect that changes or complicates the decision; (4) names a concrete EXTERNAL guardrail (devil\'s advocate, pre-mortem, base-rate anchor, decision journal) rather than "I\'ll try to be more objective". Penalise answers that show the bias blind spot — claiming immunity or staying purely introspective.',
        },
      ],
      commitSummary: 'no slot written — you practised naming your own systematic errors and installing external guardrails (inversion, pre-mortems, second-order thinking) instead of trusting introspection.',
    },

    // -----------------------------------------------------------------------
    {
      id: '28.3',
      module: 28,
      title: 'Conviction vs adaptability',
      estMinutes: 18,
      prerequisites: ['28.1', '28.2'],
      artifactSlot: null,
      concept: `Every founder is told two contradictory things. "Persevere — overnight successes take a decade, and quitters never win." And: "Be adaptable — the best startups pivot, don't fall in love with your idea." Both are true, which is useless until you can tell *which one applies right now*. That judgement — knowing when to hold the line and when to change course — is one of the highest-stakes calls you'll make, because getting it wrong in either direction is fatal: too much conviction and you ride a dead idea into the ground; too little and you abandon a good one just before it works.

The unlock is to separate the **mission and the core insight** from the **specific vehicle** currently expressing them. Great pivots almost never throw everything away. They keep the hard-won insight, the team, and often a loyal micro-segment, and change *how* the value is delivered. A pivot is not surrender and not starting over; it's redirecting accumulated learning toward a better vehicle for the same underlying belief.

**"Strong opinions, loosely held"** is the usual slogan for this — commit hard enough to actually test a bet, but hold the opinion loosely enough to drop it when evidence contradicts it. It's a good aspiration with a notorious failure mode, though: in practice it often licenses people to hold *loud* opinions and then invoke "loosely held" only as a face-saving exit — or, worse, to flip on every stray data point and never commit long enough to learn anything. So the discipline isn't the slogan; it's the *pre-commitment*: decide **in advance** what evidence, over what window, would change your mind — a falsifiable bar you set before you're emotionally entangled. Then persevere hard until the bar is hit or missed, and let the pre-registered evidence, not your mood or your ego, make the call.`,
      reframe: {
        analogy: `Conviction vs adaptability is the **explore–exploit trade-off** of an optimiser searching a landscape — think simulated annealing. *Exploit* (conviction) means keep climbing the hill you're on; *explore* (pivot) means jump to a different region to escape a peak that's too low. Pure exploitation gets you stuck on the nearest small hill — a local optimum — convinced you're at the top because every small step down looks worse. Pure exploration never settles anywhere long enough to climb. Good search does both on a **schedule**: explore widely and jump readily *early* (high "temperature"), then commit and refine *later* as evidence accumulates. A pivot is a deliberate jump out of a local optimum you've proven is too low to be worth staying on.`,
        breaks: `Simulated annealing assumes a **fixed landscape** and **cheap, unlimited evaluations**. A founder has neither. The market landscape **shifts underneath you** — a peak that was real last year can erode — so you're searching a surface that moves. And every "evaluation" costs real runway and months of your life, so you get very few probes, not millions; you cannot brute-force your way out of a local optimum. Worst of all, unlike an algorithm you have an **emotional bias toward the hill you're standing on** — sunk cost and identity make "stay" feel safer than the data warrants. So the schedule can't be automatic: you need pre-committed evidence bars (Lesson 28.1's journal, 28.2's inversion) precisely because your own "temperature" won't cool honestly on its own.`,
      },
      workedExample: `**Slack's pivot out of Glitch (Stewart Butterfield / Tiny Speck, 2012–2013).** Butterfield's company spent years and most of its funding building *Glitch*, a whimsical online game. Despite relentless effort — relaunches, new features, invite campaigns — it never reached the scale it needed, and in 2012 the team shut it down. But to build the game across a distributed team, they had constructed an internal messaging tool they *could not stop using*; it was the one thing that had proven itself under daily load. They productised it, and in 2013 launched **Slack** — which reportedly saw around **8,000 companies sign up within 24 hours** of its preview (widely reported; treat the figure as illustrative). Slack later became a multi-billion-dollar company.

Notice what Butterfield *kept* and what he *dropped*. He dropped the vehicle (the game) the moment the evidence was undeniable — no amount of conviction was going to make Glitch work. But he kept the **team**, the accumulated engineering, and above all the **insight** hiding in plain sight: the internal tool solved a real, painful, universal problem. That's the anatomy of a real pivot — not "give up and start over," but "kill the failing vehicle, redeploy the learning."

Hold this next to the opposite virtue: **Airbnb (2008–2009)** nearly died repeatedly — the founders maxed out credit cards and sold novelty cereal boxes to survive — yet *held conviction* through the "ramen years" because their core insight (strangers will pay to stay in each other's homes) kept showing faint but real signal. Same meta-skill, opposite call. The difference wasn't grit or flexibility as personality traits; it was reading the evidence honestly against a pre-set bar. Butterfield's bar for Glitch was missed and he moved; Airbnb's bar kept being *just* met, so they stayed. Your job is to set that bar before your ego does.`,
      branch: {
        scenario: `Fourteen months in. Your overall growth is flat and your runway is about nine months. But one small segment — roughly 15% of your users — is intensely engaged, uses you daily, and is quietly begging for features aimed squarely at them. The broad market you originally targeted is lukewarm. What's the disciplined move?`,
        choices: [
          {
            label: 'Persevere on the original broad market — pivoting now would waste 14 months, and you just need to push harder on growth.',
            correct: false,
            consequence: `**Conviction curdling into sunk cost.** "Pushing harder" on a market that's been lukewarm for 14 months is climbing a hill the evidence says is too low, and "we\'d waste the 14 months" is the sunk-cost bug from Lesson 28.2 — those months are gone either way. Worse, you\'re ignoring your one piece of strong signal (the intense micro-segment) in favour of the story you started with. That\'s exploitation of a proven-poor peak.`,
          },
          {
            label: 'Investigate a pivot toward the intense segment: talk to them deeply, size whether that niche can grow, and if the signal holds, redeploy the team and product to serve them — keeping your insight, changing the vehicle.',
            correct: true,
            consequence: `**Correct — jump toward the real signal.** An intensely engaged micro-segment amid broad indifference is exactly the faint-but-real peak worth exploring, and pivoting toward it is redeploying your learning, not starting over. The discipline: verify the niche is big enough to matter (a beloved tiny market is still tiny), then commit hard to it. This is how many great companies were found — following the users who actually can\'t live without you.`,
          },
          {
            label: 'Panic-pivot to a completely different idea you saw trending this week — clearly the current thing isn\'t working.',
            correct: false,
            consequence: `**Over-exploration — never settling to learn.** Abandoning everything (including a segment that genuinely loves you) to chase an unrelated trend throws away your team\'s accumulated insight and your one real signal, and there\'s no reason the new hill is any higher. This is the "loosely held" failure mode: flipping on a whim instead of on pre-committed evidence. A real pivot keeps the insight; a panic-pivot discards it.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'scenario',
          title: 'Persevere or pivot: reading the evidence',
          intro: 'You set out to help freelance designers manage client invoices. Growth is slow. Work the decision the disciplined way — bar first, ego last.',
          decisions: [
            {
              situation: 'Before deciding anything, what should you establish first?',
              options: [
                { label: 'Your gut feeling about whether the idea still excites you.', correct: false, outcome: 'Excitement is exactly the signal you should NOT steer by — it\'s the emotional bias toward the hill you\'re standing on. You need an external, falsifiable bar, not a mood reading.' },
                { label: 'A pre-committed evidence bar: what metric, over what window, would count as "working" vs "not".', correct: true, outcome: 'Right. Deciding in advance what evidence would change your mind is the whole discipline — it lets the pre-registered data, not your ego or your fatigue, make the call when the moment comes.' },
              ],
            },
            {
              situation: 'You notice that a subset of your users — small agencies, not solo freelancers — are wildly engaged and pulling you toward team features. Meanwhile solo freelancers churn. What does this most likely mean?',
              options: [
                { label: 'Ignore the agencies; they\'re a distraction from your real target, solo freelancers.', correct: false, outcome: 'That protects the original story at the cost of the strongest signal you have. An intensely engaged sub-segment amid churn elsewhere is a candidate peak worth exploring, not a distraction to suppress.' },
                { label: 'It\'s a possible pivot signal — the value you built may fit agencies better than solo freelancers.', correct: true, outcome: 'Correct. The users who can\'t live without you are pointing at where the real value is. This is a vehicle change (who you serve and how), while keeping your core insight about invoicing pain.' },
              ],
            },
            {
              situation: 'You decide the agency signal is strong. How do you pivot well?',
              options: [
                { label: 'Scrap everything — new name, new codebase, new team — and start fresh on agencies.', correct: false, outcome: 'That throws away the accumulated insight, product, and team that make a pivot cheaper than a fresh start. A good pivot redeploys learning; it doesn\'t torch it. You\'d be paying full price for a head start you already own.' },
                { label: 'Keep the team, the invoicing insight, and the loyal agencies; redirect the product and positioning toward them; and set a new bar to test the bet.', correct: true, outcome: 'Correct — that\'s the anatomy of a real pivot (the Slack move): drop the failing vehicle, keep the insight/team/loyal segment, and commit hard to the new direction with a fresh falsifiable bar.' },
              ],
            },
          ],
        },
        {
          kind: 'rank',
          prompt: 'Put the disciplined persevere-or-pivot process in order. Founders tend to jump straight to the emotional verdict; sequence it so evidence leads and ego follows.',
          items: [
            'Set a falsifiable bar in advance: what evidence, over what window, would mean "working" vs "not"',
            'Measure the current thesis honestly against that bar over a fair window',
            'Separate the failing vehicle from the insight, team, and loyal segment you\'ve proven',
            'Talk deeply to your most engaged users to locate the real, faint signal',
            'Decide: persevere, pivot (keep the insight, change the vehicle), or stop',
            'Commit fully to the decision for a fixed period before you\'re allowed to re-open it',
          ],
          explain: 'Bar first (before you\'re emotionally entangled), then an honest measurement, then separate what\'s failing (vehicle) from what you\'ve learned works (insight/team/segment), then mine your most engaged users for signal. Only THEN decide — persevere, pivot, or stop — and then commit for a fixed window so you don\'t flip on noise. The whole point is to let pre-committed evidence, not mood, make the call.',
        },
        {
          kind: 'resource',
          title: 'Conviction, pivots & "strong opinions" (real)',
          items: [
            { label: 'The death of Glitch, the birth of Slack', url: 'https://buildingslack.com/the-death-of-glitch-the-birth-of-slack/', note: 'The full, sourced account of Slack\'s pivot — what Butterfield dropped and what he kept.' },
            { label: 'TechCrunch — The Slack origin story', url: 'https://techcrunch.com/2019/05/30/the-slack-origin-story/', note: 'Independent reporting on the Glitch-to-Slack pivot and its timeline.' },
            { label: 'Commoncog — "Strong Opinions, Weakly Held" Doesn\'t Work That Well', url: 'https://commoncog.com/strong-opinions-weakly-held-is-bad/', note: 'A sharp critique of the slogan and why pre-committed evidence beats it — the source for this lesson\'s caution.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Set my persevere/pivot bar', kind: 'ask', question: 'Help me set a falsifiable, pre-committed bar for my current bet: what specific metric, threshold, and time window would tell me to persevere, and what would tell me to pivot or stop — decided now, before I\'m emotionally entangled.' },
        { label: 'Is this a pivot or a panic?', kind: 'ask', question: 'I\'ll describe my situation and the change I\'m tempted to make. Help me tell whether it\'s a disciplined pivot (keeping my insight/team/loyal segment and redeploying learning) or a panic-pivot chasing a trend, and what I\'d be keeping vs throwing away.' },
        { label: 'Critique my conviction', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What most distinguishes a disciplined pivot (like Slack\'s) from either stubbornness or panic?',
          options: [
            'It throws away everything and starts completely fresh',
            'It keeps the core insight, team, and loyal segment while changing the vehicle, and is triggered by pre-committed evidence rather than mood',
            'It happens only when you run out of money',
            'It means switching to whatever idea is trending that week',
          ],
          answer: 1,
          explain: 'A real pivot redeploys accumulated learning: it drops the failing vehicle but keeps the hard-won insight, the team, and often a loyal micro-segment — and it\'s triggered by evidence you pre-committed to, not by ego (stubbornness) or a whim (panic). Slack kept the team and the internal-tool insight and dropped only the game.',
        },
        {
          kind: 'mcq',
          prompt: 'What is the notorious failure mode of "strong opinions, loosely held"?',
          options: [
            'It forces founders to never change their minds',
            'It can license holding loud opinions and invoking "loosely held" only as a face-saving exit — or flipping on every data point and never committing long enough to learn',
            'It requires expensive market research',
            'It only applies to large companies',
          ],
          answer: 1,
          explain: 'In practice the slogan often degrades in two directions: people hold opinions loudly and cite "loosely held" as an escape hatch when proven wrong, or they flip on every stray signal and never commit long enough to test anything. The fix isn\'t the slogan but PRE-COMMITMENT: decide in advance what evidence, over what window, would change your mind, then let that bar (not mood) decide.',
        },
        {
          kind: 'free',
          prompt: 'For your venture\'s single biggest current bet, write your pre-committed persevere/pivot rule. State (1) the exact metric and threshold that would count as "working", (2) the time window, (3) what you would KEEP if you pivoted (the insight/team/segment) versus change (the vehicle), and (4) one honest emotional bias that might make you cling to the current path past the evidence.',
          rubric: 'A strong answer: (1) names a specific, measurable, falsifiable threshold set in advance (not a vibe); (2) gives a concrete, fair time window; (3) demonstrates the pivot-vs-restart distinction by naming what accumulated learning would be preserved vs the vehicle that would change; (4) shows genuine self-awareness of the emotional/sunk-cost pull toward staying. Penalise answers that steer by excitement, offer no falsifiable bar, or treat pivoting as starting from scratch.',
        },
      ],
      commitSummary: 'no slot written — you built a pre-committed persevere/pivot rule that lets evidence, not ego or panic, decide when to hold the line and when to redeploy your learning.',
    },

    // -----------------------------------------------------------------------
    {
      id: '28.4',
      module: 28,
      title: 'Sustaining yourself: burnout & resilience',
      estMinutes: 20,
      prerequisites: ['28.1'],
      artifactSlot: null,
      concept: `Here is the uncomfortable truth this module has been building toward: **you are the single most critical, least-maintained component in your company.** Every lesson so far assumed a founder capable of clear decisions, honest self-debugging, and steady judgement over years. None of that survives a burned-out operator. Protecting your own mental health is not self-indulgence or a wellness nicety — it is *system maintenance* on the one component you cannot replace.

Founder mental health is a real, measured problem, not a soft one. Research by Dr. Michael Freeman and colleagues found entrepreneurs are markedly more likely than others to report mental-health conditions; the pressures — financial precarity, identity fusion with the company, isolation at the top, relentless uncertainty — are structural, not personal failings. Naming it plainly is the first act of resilience.

Three practical commitments:

- **Treat rest and recovery as scheduled maintenance, not slack to be cut.** A server run at 100% with no maintenance window doesn't go faster; it degrades and eventually fails catastrophically. Sleep, exercise, time genuinely off, and relationships outside the company are not the reward for success — they are the *infrastructure* that produces the good decisions success requires.
- **Build a support system before you need it.** Isolation is the founder default and it is corrosive. A peer group of other founders (who get it), a mentor, a therapist or coach, and honest relationships are redundancy for your operating system. Set them up while you're okay, because you won't have the energy to build them mid-crisis.
- **Watch your leading indicators.** Burnout is not a sudden event; it has early warning signs — dread, cynicism, shortened sleep, withdrawal, loss of meaning. Like any good monitoring, the point is to catch degradation *early*, when a small correction works, not after the outage.

This is a marathon, not a sprint. The founders who win are frequently just the ones still standing, still thinking clearly, after the ones who burned bright and flamed out are gone. **Lasting the distance is itself a competitive advantage** — and it is one you have to engineer on purpose.`,
      reframe: {
        analogy: `You are a **production server with no redundancy and no maintenance window.** Burnout is what happens when you run a single machine at 100% CPU indefinitely, with monitoring switched off and no on-call backup: throughput looks great for a while, then thermal throttling, then errors, then a cascading crash that takes far longer to recover from than any maintenance would have cost. Sleep and time off are the **scheduled maintenance window**; a peer group and co-founder are **redundancy and failover**; therapy and honest self-reflection are **observability** — the monitoring that catches degradation before the outage. You would never design a critical system this way for anyone else. Don't run *yourself* that way.`,
        breaks: `This analogy is useful but it can quietly **dehumanise you**, and that misreading is dangerous — so hold its limits firmly. You are **not fungible hardware**: you can't be swapped out, "rebooted", or optimised purely for uptime, and your worth is not your throughput. Recovery from real burnout or depression is **nonlinear and slow** — not a clean restart but a genuine healing that can take months and often needs professional help, not a life hack. And much of the load you carry is **emotional, not computational** — grief, fear, loneliness — which "add more redundancy" doesn't touch. So take the maintenance discipline from the analogy, but drop the machine's coldness: you're a person who deserves care for its own sake, not merely a resource to keep online. If you are in genuine distress, that is a signal to reach for real human support — see the resources below — not to optimise harder.`,
      },
      workedExample: `**Brad Feld deciding to write about his depression publicly (2013–2014).** Feld — co-founder of Foundry Group and Techstars, one of the most respected investors in tech — went through an extended depressive episode. Given how publicly he lived his life through his blog, he concluded that staying silent about it would be, in his words, being "deceitful about how I was doing." So instead he chose to **provide leadership by being open**, writing plainly about his struggle on feld.com (see "Encountering Depression and What It Means To Be Well", 2015). The result was striking: **hundreds of entrepreneurs reached out privately**, many of whom had never told *anyone* about their own depression, and for many that first honest conversation was a turning point toward getting help.

Set this beside the data. Dr. Michael Freeman's research found entrepreneurs report mental-health conditions at substantially higher rates than the general population — this is a population-level pattern driven by the structure of the work, not a personal weakness in any one founder. Feld's contribution wasn't a cure; it was **breaking the silence** that makes founder mental-health problems so dangerous — the isolation, the shame, the belief that "real founders don't struggle." The transferable lesson is threefold: (1) struggling is *common and structural*, so treat it as normal system load, not proof you're not cut out for this; (2) *naming it and reaching out* — to a peer, a therapist, a friend — is a strength and often the turning point, not an admission of failure; and (3) you don't have to be a famous investor to do the same at your own scale. Building the support system, and using it, is the maintenance that keeps the irreplaceable component running.`,
      branch: {
        scenario: `It's month 18. You notice the signs: you dread opening your laptop, you're sleeping five hours, you snap at people you care about, and the work that used to energise you now feels like grey obligation. Growth is okay but not great. A part of you says "real founders just push through." What do you actually do?`,
        choices: [
          {
            label: 'Push through — sleep and feelings are luxuries, and slowing down now would let the company slip. Grind harder until it turns.',
            correct: false,
            consequence: `**Running the server at 100% with monitoring off.** Those symptoms — dread, cynicism, shortened sleep, withdrawal — are your leading indicators of burnout flashing red, and "push through" ignores them exactly when a cheap correction still works. Grinding harder on a degrading operator doesn\'t produce more; it produces worse decisions and risks a cascading crash that costs the company far more than a maintenance window would. Willpower is not a substitute for recovery.`,
          },
          {
            label: 'Treat it as system maintenance: protect sleep and real time off now, and reach out — schedule with a peer founder group, a therapist or coach, and a trusted friend — before it deepens.',
            correct: true,
            consequence: `**Correct — maintain the critical component early.** Catching burnout at the leading-indicator stage, when a small correction works, is exactly the point of monitoring. Restoring sleep and genuine recovery is infrastructure for good decisions, not slack; and reaching out breaks the isolation that makes founder burnout so dangerous. Reaching for support is a strength and often the turning point — as thousands of founders discovered when peers like Brad Feld broke the silence. This protects both you and the company.`,
          },
          {
            label: 'Quit entirely tomorrow — if it\'s this hard, it clearly isn\'t meant to be.',
            correct: false,
            consequence: `**Over-correction from an impaired state.** A burned-out, sleep-deprived operator is in the worst possible condition to make a one-way-door decision like shutting down (Lesson 28.1). Distress distorts judgement; the disciplined move is first to restore the operator — sleep, recovery, support — and only then, from a clear head, decide whether to persevere or pivot. Fix the monitoring before you act on a red reading taken by a broken sensor.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each item into a leading indicator of burnout (an early warning worth catching now) or a healthy maintenance practice (part of the system that prevents it). Knowing your warning lights and your maintenance routine is the whole monitoring job.',
          buckets: ['Leading indicator of burnout', 'Healthy maintenance practice'],
          items: [
            { text: 'Persistent dread before opening your laptop', bucket: 'Leading indicator of burnout' },
            { text: 'Growing cynicism about work that used to excite you', bucket: 'Leading indicator of burnout' },
            { text: 'Sleep quietly shrinking to five hours a night', bucket: 'Leading indicator of burnout' },
            { text: 'Withdrawing from friends and skipping things you enjoy', bucket: 'Leading indicator of burnout' },
            { text: 'A standing weekly call with a peer-founder group', bucket: 'Healthy maintenance practice' },
            { text: 'Protecting a genuine day off with no work contact', bucket: 'Healthy maintenance practice' },
            { text: 'Regular exercise and a consistent sleep schedule', bucket: 'Healthy maintenance practice' },
            { text: 'Seeing a therapist or coach on a standing cadence', bucket: 'Healthy maintenance practice' },
          ],
          explain: 'Leading indicators — dread, cynicism, shrinking sleep, withdrawal, loss of meaning — are the warning lights that let you correct early, while it\'s cheap. Maintenance practices — peer groups, protected rest, exercise, therapy/coaching on a cadence — are the infrastructure that keeps the irreplaceable component running. Watch the first; build the second BEFORE you need it.',
        },
        {
          kind: 'platformTask',
          title: 'Set up one real support habit — for real, today',
          body: 'This is the milestone of the module: turn "I should take care of myself" into one concrete, standing commitment. Pick ONE support habit and actually set it up now — do not just resolve to. Good options: join or start a peer-founder group; book a first session with a therapist or coach; schedule a standing weekly check-in with a trusted friend or fellow founder; or commit (in your calendar) to a protected weekly recovery block. The bar is a real, recurring commitment with a date on it — not a vague intention. Then record what you set up and when it happens next. If you are struggling right now, please also look at the crisis resources in the block below — reaching out is a strength.',
          links: [
            { label: 'Founder Mental Health Pledge — vetted directory of founder-specific support', url: 'https://www.founderpledge.com/resources' },
            { label: 'Feld Thoughts — Brad Feld\'s writing on founder depression & mental health', url: 'https://feld.com/archives/tag/depression/' },
          ],
          steps: [
            'Choose ONE habit: peer-founder group, therapist/coach, a standing friend check-in, or a protected weekly recovery block.',
            'Take the concrete first action now — send the message, book the session, create the recurring calendar event, or join the group.',
            'Put a real date/time on it so it recurs without you having to decide again each week.',
            'Record what you set up and when it next happens — this initializes your support habit in "My venture".',
          ],
          taskKey: '28.4#support',
          proofLabel: 'The one support habit you set up (what it is, and the next date it happens)',
          proofKind: 'text',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'If things get dark — immediate, real support',
          items: [
            { label: '988 Suicide & Crisis Lifeline (US) — call or text 988', url: 'https://988lifeline.org/', note: 'Free, confidential, 24/7 support for anyone in emotional distress or crisis. You do not have to be suicidal to reach out.' },
            { label: 'Find a Helpline — international directory of free crisis lines', url: 'https://findahelpline.com/', note: 'Verified emotional-support and crisis helplines by country, for wherever in the world you are.' },
          ],
        },
        {
          kind: 'resource',
          title: 'Founder mental health & resilience (real)',
          items: [
            { label: 'Brad Feld — Encountering Depression and What It Means To Be Well', url: 'https://feld.com/archives/2015/09/encountering-depression-means-well/', note: 'A respected investor writing honestly about his own depression — the essay that helped normalise the conversation.' },
            { label: 'Dr. Michael A. Freeman — Entrepreneurship & mental-health research', url: 'https://www.michaelafreemanmd.com/Research.html', note: 'The academic work behind "Are Entrepreneurs Touched with Fire?" — evidence that founder mental-health strain is structural, not personal weakness.' },
            { label: 'Founder Mental Health Pledge — resources directory', url: 'https://www.founderpledge.com/resources', note: '80+ vetted therapy, coaching, peer-group, and self-serve resources built specifically for founders.' },
            { label: 'Y Combinator Startup Library', url: 'https://www.ycombinator.com/library', note: 'Includes candid talks and essays on founder wellbeing, resilience, and the emotional reality of building.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Design my maintenance system', kind: 'ask', question: 'Help me design a realistic personal-maintenance system: my leading indicators of burnout to watch for, a weekly recovery cadence (sleep, exercise, real time off), and the specific support relationships (peer group, mentor, therapist/coach) I should set up now while I\'m okay.' },
        { label: 'Am I showing early warning signs?', kind: 'ask', question: 'I\'ll describe how I\'ve been feeling and behaving lately. Help me honestly read whether these are leading indicators of burnout, and suggest concrete early corrections — while being clear about when I should seek professional support.' },
        { label: 'How do I start a peer-founder group?', kind: 'ask', question: 'Walk me through starting or joining a small peer-founder support group: how to find the right few people, what a good cadence and format looks like, and the norms (confidentiality, honesty) that make it actually useful.' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In the "you are an unredundant production server" model, why is "just push through" a dangerous response to early burnout signs?',
          options: [
            'Because founders should never work hard',
            'Because the early signs are leading indicators flashing red, and ignoring them runs a degrading operator toward a cascading crash that costs far more than a maintenance window would',
            'Because pushing through always works, so it\'s boring',
            'Because rest is only needed after the company succeeds',
          ],
          answer: 1,
          explain: 'Dread, cynicism, shrinking sleep, and withdrawal are leading indicators — the monitoring that lets you correct early and cheaply. Running a critical component at 100% with the warning lights ignored doesn\'t produce more; it degrades judgement and risks a crash whose recovery is far costlier (and slower) than the rest you skipped. Rest and support are infrastructure for good decisions, not a reward for success.',
        },
        {
          kind: 'mcq',
          prompt: 'What does Brad Feld\'s decision to write publicly about his depression — and the research context around it — most teach founders?',
          options: [
            'That only unsuccessful founders struggle with mental health',
            'That founder mental-health strain is common and structural, and that naming it and reaching for support is a strength and often the turning point, not an admission of failure',
            'That founders should keep struggles entirely private to protect the company',
            'That mental health has no measurable link to entrepreneurship',
          ],
          answer: 1,
          explain: 'Freeman\'s research shows founders report mental-health conditions at higher rates for structural reasons (precarity, isolation, identity fusion) — it is normal system load, not personal weakness. Feld\'s openness broke the isolation and shame that make it dangerous, prompting hundreds of founders to reach out and get help. The lesson: struggling is common, and naming it and building/using a support system is strength and maintenance, not failure.',
        },
        {
          kind: 'free',
          prompt: 'Design your own operating-system maintenance plan. State (1) two or three leading indicators of burnout YOU personally tend to show first, (2) your weekly recovery cadence (sleep, movement, genuine time off), (3) the one support relationship you committed to in the platform task and when it next happens, and (4) a pre-committed rule for what you\'ll do when your warning lights go red.',
          rubric: 'A strong answer: (1) names specific, personal early-warning signs (not generic), showing real self-monitoring; (2) gives a concrete, realistic recovery cadence rather than "I\'ll rest more"; (3) references the actual standing support habit they set up, with a real next date; (4) states a pre-committed action ("if I hit X, I will do Y") for when indicators go red, showing they treat their own wellbeing as engineered maintenance. Reward humane self-honesty and concreteness; penalise "I\'ll just power through" or purely aspirational answers with no commitments. If an answer signals genuine crisis, gently point them to the professional/crisis resources.',
        },
      ],
      commitSummary: 'a real support habit is now initialized in "My venture" — the maintenance schedule for the one component you can\'t replace. Decisions, self-debugging, conviction, and endurance all run on top of it. Last the distance.',
    },
  ],
}
