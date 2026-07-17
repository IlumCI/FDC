import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 22 — Managing resources & operations  (SEASON 2, "Building for Real")
//
// Season 2 treats the company as a control system you actually operate. By now
// the learner has a named venture, a north-star, and a written cadence stub
// (Module 13). This module makes the system *run*: allocate scarce capital and
// protect runway (22.1), prioritize ruthlessly under scarcity (22.2), write
// OKRs as a spec with acceptance criteria (22.3), and install the operating
// cadence that closes the loop so the system self-corrects (22.4). Every lesson
// is artifactSlot:null; the REAL venture is advanced through interactive blocks
// (platformTask/document write the "My venture" workspace), never through slots.
// ===========================================================================

export const module22: Module = {
  id: 22,
  season: 2,
  title: 'Managing resources & operations',
  goal: 'Run the company as a control system: budget and protect runway, prioritize ruthlessly, and install an operating cadence so the system self-corrects.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '22.1',
      module: 22,
      title: 'Budgeting & runway as resource management',
      estMinutes: 18,
      prerequisites: [],
      artifactSlot: null,
      concept: `Cash is the one resource a company cannot borrow against forever, cannot manufacture, and cannot get back once spent. Every other constraint — talent, time, attention — can be traded for cash, but cash traded away is gone. So the first discipline of operations is not "spend wisely" in the abstract; it is to treat your bank balance as a **depleting energy budget** and to know, at all times, exactly how long it lasts.

**Runway** is that number: months of operation left before you must earn more or raise more. The formula is brutally simple — runway = cash on hand divided by net monthly burn — and its simplicity is the point. Net burn is money out minus money in per month; if you spend $50,000 and collect $10,000, your burn is $40,000, and $480,000 in the bank buys you twelve months. Anyone on the team who cannot state the runway to within a month is flying an aircraft without a fuel gauge.

**Zero-based thinking** is how you allocate the budget that produces that burn. The lazy method — take last quarter's spend and add a bit — quietly ossifies every past decision into a permanent tax. Zero-based budgeting instead starts every line at zero and forces each dollar to *re-justify itself* against the current goal. It is more work, and it is the difference between a budget that reflects what you're trying to prove *now* and one that reflects what you happened to be doing a year ago.

The founder's job here is not frugality for its own sake. It is to spend aggressively on the one or two things that buy signal or growth, starve everything else, and keep enough runway that you always make decisions from calm rather than panic. Runway does not just measure survival; it silently sets the *quality* of every decision you're allowed to make.`,
      reframe: {
        analogy: `Runway is the **battery gauge on a robot** running an untethered mission. Cash on hand is charge; net burn is the current draw in watts; runway is charge divided by draw — how many minutes until the robot is dead on the floor. A good operator watches the gauge constantly and does two things: reduces draw on subsystems that don't serve the mission (dim the LEDs, spin down the idle motor) and routes the remaining power to the actuators that actually complete the objective. Zero-based budgeting is auditing every subsystem's power draw from scratch each cycle instead of assuming last mission's wiring was optimal.`,
        breaks: `A battery drains at a **knowable, roughly constant rate**; a startup's burn is lumpy and its *income* is a live variable the robot doesn't have — a single signed customer can cut net draw overnight, and a single bad hire or cloud bill can spike it. So runway is a moving estimate, not a fixed countdown, and the dangerous error is trusting last month's number after the inputs shifted. The analogy also implies the only move is to *conserve*; in reality the highest-return move is often to **spend the battery faster on purpose** to reach a milestone that unlocks a recharge (revenue, a raise). A robot that hoards charge and never reaches the objective still dies — it just dies with a full-looking gauge.`,
      },
      workedExample: `**Airbnb, spring 2020.** When the pandemic froze travel, Airbnb's Q2 2020 revenue fell roughly 72% year over year, to about $335 million, and the company had to burn cash refunding cancelled bookings on top of payroll and overhead — draining more than a third of its reserves (Airbnb S-1, SEC, 2020; CNBC, Nov 2020). Management treated it as exactly what it was: a runway emergency. In April 2020 they raised about $2 billion in debt and equity from Silver Lake and Sixth Street on distress terms — reportedly around 10% interest with equity warrants — which is the price you pay for capital when you negotiate from weakness rather than strength (TechCrunch, May 2020).

Crucially, they did not only *raise*; they cut. In May 2020 Airbnb laid off roughly 1,900 people — about 25% of staff — and slashed sales-and-marketing spend by around 74% (TechCrunch, 2020; Airbnb S-1). That is zero-based thinking under fire: every line re-justified against the single goal of surviving to the other side, not against what the budget used to be. The result was that by Q3 the leaner company actually turned a $219 million profit and went public that December. The transferable lesson is not "cut 25% of your team." It is that runway is the master variable — when it's threatened you attack it from both ends (extend cash *and* cut burn), and you re-derive the budget from zero rather than trimming the edges of the old one.`,
      branch: {
        scenario: `You have $300,000 in the bank and a net burn of $50,000/month — six months of runway. A great senior engineer is available for $12,000/month all-in, and hiring them would clearly speed up the product. Revenue is real but small and not yet growing fast. What's the disciplined move?`,
        choices: [
          {
            label: 'Hire them now — talent is the constraint, and a better product is what fixes everything.',
            correct: false,
            consequence: `**Burn-blind.** Adding $12,000/month takes burn to $62,000 and drops runway from six months to under five, on an unproven revenue trajectory. You'd be spending your battery faster without a named milestone the hire is supposed to unlock. Speed is worth paying for — but only against an explicit "reach X by month N" that the extra person makes attainable, and only if the resulting runway still buys calm. This is spending because building is fun, not because the math clears.`,
          },
          {
            label: 'First define the milestone the hire must help hit, re-derive the budget from zero, and only hire if the resulting runway still lets you reach that milestone with margin — otherwise extend runway first.',
            correct: true,
            consequence: `**Correct.** You made the hire a *bet with a payoff and a deadline*, not a comfort. Zero-based the budget: what must be true in five months, does this person move it, and does the shortened runway still clear it with buffer? If yes, spend the battery on purpose toward the recharge. If no, extend runway (cut elsewhere, raise, grow revenue) before you add draw. Either way the number, not the enthusiasm, decides.`,
          },
          {
            label: 'Refuse to hire anyone and cut spending to the bone to maximize months of runway.',
            correct: false,
            consequence: `**Hoarding the battery.** Maximizing runway while reaching no milestone is how a company dies with a full-looking gauge. Runway exists to be *spent* toward the objective that unlocks a recharge — revenue or a raise. Reflexive frugality that starves the one or two things that actually buy growth is just a slower version of failure. The goal is calm decisions and forward motion, not the highest possible month count.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Your company has $480,000 in cash. Last month you spent $65,000 and collected $25,000 in revenue. Assuming that pace holds, how many months of runway do you have? (Runway = cash / net monthly burn.)',
          answer: 12,
          tolerance: 0.1,
          unit: 'months',
          explain: 'Net burn = money out minus money in = 65,000 - 25,000 = 40,000/month. Runway = 480,000 / 40,000 = 12 months. Note that revenue is part of the equation: growing that $25,000 collection is just as powerful a runway lever as cutting the $65,000 spend.',
        },
        {
          kind: 'numeric',
          prompt: 'You have $300,000 in cash and a net burn of $50,000/month (6 months of runway). Zero-basing the budget, you cut recurring spend so net burn falls to $30,000/month. What is your new runway, in months?',
          answer: 10,
          tolerance: 0.1,
          unit: 'months',
          explain: 'New runway = 300,000 / 30,000 = 10 months. Cutting burn from $50,000 to $30,000 did not add a cent of cash, yet it bought four extra months of decisions. Because runway is a ratio, attacking the denominator (burn) is often faster and more certain than raising the numerator (cash).',
        },
        {
          kind: 'categorize',
          prompt: 'You are zero-basing next quarter\'s budget with the single goal of proving customers will pay. Sort each line item by whether, right now, it directly earns you that proof — or merely burns runway while you wait.',
          buckets: ['Buys signal or growth', 'Burns runway without proof'],
          items: [
            { text: 'Paid pilots and sales calls with real prospective buyers', bucket: 'Buys signal or growth' },
            { text: 'The one engineer building the core paid workflow', bucket: 'Buys signal or growth' },
            { text: 'A small, measured acquisition test in one channel', bucket: 'Buys signal or growth' },
            { text: 'A premium office lease signed for the "real company" feel', bucket: 'Burns runway without proof' },
            { text: 'A full rebrand and logo refresh before you have paying users', bucket: 'Burns runway without proof' },
            { text: 'A second product line begun before the first has revenue', bucket: 'Burns runway without proof' },
          ],
          explain: 'Zero-based thinking forces every dollar to re-justify itself against the CURRENT goal. Against "prove customers will pay," pilots, the core workflow, and a measured channel test earn proof; offices, rebrands, and second products are comfort or premature scaling that quietly tax your runway. The test is not "is this nice?" but "does this dollar buy signal now?"',
        },
        {
          kind: 'rank',
          prompt: 'Cash is suddenly tight and you must cut burn this week without killing the company. Order these moves from what you should reach for FIRST to what you should reach for LAST.',
          items: [
            'Cut discretionary spend: unused SaaS seats, travel, events, premium tools',
            'Pause or shrink paid marketing channels that are not yet proven to pay back',
            'Renegotiate or defer large fixed costs (office, vendor contracts, cloud commitments)',
            'Reduce or defer founder and executive compensation',
            'Lay off part of the team',
          ],
          explain: 'You cut in order of reversibility and human cost. Discretionary spend and unproven marketing are near-free to cut and easy to restore. Renegotiating fixed costs and trimming founder pay signal seriousness before you touch anyone else. Layoffs come last because they are the most damaging and least reversible — and if you must, cut deep once rather than bleeding the team in rounds.',
        },
        {
          kind: 'platformTask',
          title: 'Build your real budget and runway tracker',
          body: 'Instrument the master variable. Build a simple monthly model for YOUR venture: list cash on hand, every real cost line (people, tools, infra, contractors), and any revenue you collect. Compute net burn and runway = cash / net burn. Zero-base it — make each line justify itself against this quarter\'s goal. Then record your current runway in months. If you have no burn yet, model the burn your next three months of spending will create.',
          links: [
            { label: 'Paul Graham — "Default Alive or Default Dead?" (the runway essay)', url: 'https://paulgraham.com/aord.html' },
            { label: 'Google Sheets — build the model here', url: 'https://sheets.google.com' },
            { label: 'Y Combinator Startup Library — managing finances', url: 'https://www.ycombinator.com/library' },
          ],
          steps: [
            'List cash on hand today.',
            'List every monthly cost line and every monthly revenue line; compute net burn = out minus in.',
            'Compute runway = cash / net burn, and write the number of months.',
            'Zero-base: mark any line that does not buy signal or growth this quarter as a candidate to cut.',
            'Record your current runway (in months) below.',
          ],
          taskKey: '22.1#runway',
          proofLabel: 'Your current runway in months (and the biggest line you\'ll zero-base)',
          proofKind: 'number',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'Runway & budgeting (real, canonical)',
          items: [
            { label: 'Paul Graham — "Default Alive or Default Dead?"', url: 'https://paulgraham.com/aord.html', note: 'The essay that made "at your current growth and burn, do you reach profitability before the money runs out?" the central startup question.' },
            { label: 'Airbnb S-1 (SEC EDGAR, 2020)', url: 'https://www.sec.gov/Archives/edgar/data/1559720/000119312520294801/d81668ds1.htm', note: 'Primary source for the pandemic runway story: revenue collapse, the Silver Lake / Sixth Street raise, and the cost cuts.' },
            { label: 'Y Combinator Startup Library', url: 'https://www.ycombinator.com/library', note: 'Practical talks on fundraising, burn, and managing a lean company.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Compute my real runway', kind: 'ask', question: 'Walk me through my venture\'s runway: help me list cash on hand, every monthly cost, and any revenue, compute net burn and runway = cash / net burn, and tell me whether that number buys calm decisions or forces panic.' },
        { label: 'Zero-base my budget', kind: 'ask', question: 'Help me zero-base my budget against this quarter\'s single goal: go line by line and force each cost to justify itself, and flag which lines buy signal or growth versus which just burn runway.' },
        { label: 'A harder runway trade-off', kind: 'harder', concept: 'deciding whether to spend runway faster to hit a milestone that unlocks revenue or a raise, versus conserving to survive longer' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'You have $600,000 in the bank. You spend $90,000/month and collect $30,000/month in revenue. What is your runway?',
          options: [
            '6.7 months — cash divided by gross spend',
            '10 months — cash divided by net burn (spend minus revenue)',
            '20 months — cash divided by revenue',
            'Runway cannot be computed from these numbers',
          ],
          answer: 1,
          explain: 'Runway uses NET burn = spend minus revenue = 90,000 - 30,000 = 60,000/month. Runway = 600,000 / 60,000 = 10 months. Using gross spend ($90,000) understates runway because it ignores incoming cash; revenue is a genuine runway lever, not a rounding error.',
        },
        {
          kind: 'mcq',
          prompt: 'What most distinguishes zero-based budgeting from the usual "last quarter plus a bit" approach?',
          options: [
            'It always produces a smaller budget',
            'It starts every line item at zero and forces each dollar to re-justify itself against the current goal',
            'It removes the need to track runway',
            'It is only used by large companies with finance teams',
          ],
          answer: 1,
          explain: 'Zero-based budgeting resets every line to zero and makes each dollar earn its place against what you are trying to prove NOW, rather than inheriting last period\'s spending as a permanent tax. It need not shrink the budget — it re-points it — and it is if anything more valuable for a tiny company where every dollar of runway is decisive.',
        },
        {
          kind: 'free',
          prompt: 'For your own venture, state (1) your current runway in months, computed as cash / net burn with the actual numbers; (2) the single largest cost line and whether, zero-based against this quarter\'s goal, it earns its keep; and (3) one deliberate way you would either extend runway or spend it faster to reach a specific milestone.',
          rubric: 'Strong answer: (1) computes runway as cash / net burn with concrete numbers (and treats revenue as part of net burn); (2) names a specific largest cost line and judges it against the current goal rather than habit, showing zero-based thinking; (3) proposes a deliberate runway move tied to a NAMED milestone (extend by cutting/raising, or spend faster to unlock revenue/a raise), showing runway is understood as the master variable that sets decision quality. Penalize vague answers with no numbers or reflexive "just cut everything" frugality.',
        },
      ],
      commitSummary: 'your real runway is now a number you own — cash / net burn, zero-based against this quarter\'s goal — the master variable every later decision is spent against.',
    },

    // -----------------------------------------------------------------------
    {
      id: '22.2',
      module: 22,
      title: 'Prioritization under scarcity',
      estMinutes: 18,
      prerequisites: ['22.1'],
      artifactSlot: null,
      concept: `Once runway is finite, prioritization stops being a productivity nicety and becomes the core act of management: every yes is a no to everything else you could have done with that time and cash. The scarce resource is not ideas — you will always have more of those than you can execute — it is *focused execution*. So the skill is not generating options; it is **killing** them well.

Two tools do most of the work. The **Eisenhower matrix** separates the *important* (moves your north-star) from the merely *urgent* (loud, time-boxed, but often trivial), because the two are constantly confused. The trap it exposes is spending your best hours firefighting urgent-but-unimportant tasks while the important-but-not-urgent work — the thing that actually compounds — never gets touched. The discipline is to defend time for important-not-urgent work *before* the urgent floods in.

The **RICE score** turns a fuzzy "this feels valuable" into four smaller estimates you can defend: Reach (how many are affected, per period), Impact (how much it moves the goal per person), Confidence (a haircut, 0 to 1, for how sure you are), and Effort (person-months). Score = Reach times Impact times Confidence, divided by Effort. Built by Sean McBride on Intercom's growth team in 2017, its whole purpose is to strip gut feeling out of the argument by making people put numbers behind their advocacy — especially the Confidence haircut, which quietly demotes exciting bets nobody can actually justify.

The output of both tools is the same underrated thing: **the ability to say no** with a reason. Opportunity cost is invisible — you never see the growth you forfeited by building the wrong thing — so scarcity discipline is largely the practice of making that invisible cost visible enough to act on. A prioritized list you don't defend is just a wish list; the founder's real work is guarding the top of it and cheerfully killing the rest.`,
      reframe: {
        analogy: `Prioritization is a **scheduler on a single-core CPU with a real-time deadline**. You have one execution unit (focus) and more runnable tasks than cycles, so you cannot run them all — you must choose an ordering. RICE is your priority function: it computes a score per task so the scheduler runs highest value-per-cycle first. The Eisenhower matrix is your **interrupt policy**: urgent tasks fire interrupts demanding immediate service, and a naive scheduler that services every interrupt as it arrives thrashes — it never finishes the high-priority background job that actually matters. Good systems mask low-value interrupts to protect the important work.`,
        breaks: `A CPU scheduler assumes task costs and values are **known and stable**; your RICE inputs are guesses, and the Impact and Confidence terms especially are where wishful thinking hides, so the "optimal" ordering is only as good as numbers you half-invented. Worse, a real scheduler's tasks are *independent*, but startup work has **dependencies and compounding** a priority number misses — a low-RICE task can be the unlock that makes three high-RICE tasks possible, and a scheduler blind to that will starve the critical path. And unlike a CPU, you pay a **context-switch tax** that is brutal for humans: an ordering that constantly preempts is worse than a slightly suboptimal one you actually finish. Use the score to *inform* the ordering, not to obey it.`,
      },
      workedExample: `**RICE at Intercom (Sean McBride, growth team, 2017).** McBride's team had a single goal — convert website visitors into active, paying users — and a backlog of project ideas that all sounded good in the room. The problem was that every advocate defended their pet idea with one fuzzy, all-in-one estimate of "value," and the loudest or most senior estimate tended to win. RICE split that single fuzzy number into four defensible ones so the argument moved from conviction to evidence (Intercom blog, "RICE: Simple prioritization for product managers").

Consider two ideas scored the RICE way. Idea A: a flashy redesign — Reach 5,000 users/quarter, Impact 1, Confidence 0.5 (nobody's sure it converts), Effort 5 person-months, giving (5,000 × 1 × 0.5) / 5 = 500. Idea B: a dull onboarding fix — Reach 8,000, Impact 2, Confidence 0.8 (there's data), Effort 2, giving (8,000 × 2 × 0.8) / 2 = 6,400. The boring fix outscores the exciting redesign by more than 10x, and the reason is legible to everyone: it reaches more people, moves them more, is better supported by evidence, and costs less. The transferable move is not "always ship onboarding." It is that the Confidence haircut and the Effort denominator systematically demote glamorous, unproven, expensive bets in favor of high-certainty, high-leverage, cheap ones — and that making the numbers explicit lets a team disagree about the *inputs* instead of fighting about the *conclusion*.`,
      branch: {
        scenario: `It's Monday. Your calendar is already full of "urgent": a noisy customer wants a custom feature by Friday, three low-priority bugs are open, and an investor asked for a deck update "when you get a chance." Meanwhile your most important work — talking to ten target buyers to validate the paid workflow — has slipped three weeks in a row. What do you do?`,
        choices: [
          {
            label: 'Clear the urgent queue first — knock out the custom feature, the bugs, and the deck, then get to the customer calls with a clean plate.',
            correct: false,
            consequence: `**The urgency trap.** A "clean plate" never arrives — new urgent work floods in daily, so important-not-urgent work that waits for a lull waits forever. That's exactly why the buyer calls have slipped three weeks. Servicing every interrupt as it fires is how the scheduler thrashes and the one compounding job never runs. The urgent feels like the job; the important IS the job.`,
          },
          {
            label: 'Protect a block for the ten buyer conversations first, then triage the rest: say no (or "not now") to the low-value urgent items and batch what remains.',
            correct: true,
            consequence: `**Correct.** You defended the important-not-urgent work before the urgent could flood in — the only way it ever gets done. Then you triaged: the custom feature likely gets a "no, that's not our roadmap," the low bugs get batched, the deck waits. Masking low-value interrupts is what protects the background job that actually moves your north-star. Saying no with a reason is the skill, not a failure of service.`,
          },
          {
            label: 'Build the custom feature — a paying customer asking for something is the strongest possible signal, so it must be the priority.',
            correct: false,
            consequence: `**One loud voice is not the market.** A single customer's custom request is high on urgency and often low on Reach and Confidence — score it and it usually loses to validating the workflow for the *many* buyers you haven't talked to. Building bespoke features for whoever shouts loudest is how you become a consultancy for one account while the actual product direction goes unvalidated. Let RICE, not volume, rank it.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort this Monday\'s work into the Eisenhower quadrants. Be honest: much of what feels urgent is not actually important to your north-star.',
          buckets: ['Important & Urgent', 'Important, Not Urgent', 'Urgent, Not Important', 'Neither'],
          items: [
            { text: 'Production is down and paying customers cannot log in', bucket: 'Important & Urgent' },
            { text: 'A key contract expires today and must be renewed to keep the service running', bucket: 'Important & Urgent' },
            { text: 'The ten buyer-validation calls that keep slipping', bucket: 'Important, Not Urgent' },
            { text: 'Writing next quarter\'s OKRs and operating cadence', bucket: 'Important, Not Urgent' },
            { text: 'A low-priority customer pinging for a "nice to have" tweak by Friday', bucket: 'Urgent, Not Important' },
            { text: 'Most unfiltered Slack and email notifications', bucket: 'Urgent, Not Important' },
            { text: 'Endlessly re-picking your project management tool', bucket: 'Neither' },
            { text: 'Reading industry news to "stay informed"', bucket: 'Neither' },
          ],
          explain: 'The whole point of the matrix is the top-right vs bottom-left confusion: a down system or an expiring contract is genuinely important AND urgent, but a low customer\'s Friday tweak or a Slack ping only FEELS urgent. Founders who live in the urgent-not-important box stay busy while the important-not-urgent work (validation, planning) — the work that compounds — never happens. Defend that box on the calendar first.',
        },
        {
          kind: 'numeric',
          prompt: 'Score a backlog item with RICE. Reach = 8,000 users affected per quarter; Impact = 2 (massive, on a 0.25–3 scale); Confidence = 0.8; Effort = 4 person-months. Compute the RICE score = (Reach x Impact x Confidence) / Effort.',
          answer: 3200,
          tolerance: 1,
          unit: 'RICE points',
          explain: 'RICE = (8,000 x 2 x 0.8) / 4 = 12,800 / 4 = 3,200. The Confidence term (0.8) is a deliberate haircut for how sure you are, and the Effort denominator punishes expensive work — together they demote glamorous, unproven, costly ideas in favor of high-certainty, high-leverage, cheap ones. The absolute number is meaningless; it only exists to rank items against each other.',
        },
        {
          kind: 'rank',
          prompt: 'You scored five backlog items with RICE. Order them from HIGHEST priority (ship first) to LOWEST, given these scores.',
          items: [
            'Onboarding fix — RICE 6,400 (Reach 8,000, Impact 2, Confidence 0.8, Effort 2)',
            'Self-serve checkout — RICE 3,200 (Reach 8,000, Impact 2, Confidence 0.8, Effort 4)',
            'Pricing page rework — RICE 1,500 (Reach 6,000, Impact 1, Confidence 0.5, Effort 2)',
            'Flashy redesign — RICE 500 (Reach 5,000, Impact 1, Confidence 0.5, Effort 5)',
            'Bespoke feature for one loud customer — RICE 90 (Reach 300, Impact 1.5, Confidence 0.6, Effort 3)',
          ],
          explain: 'You ship in descending RICE order: highest value-per-effort first. The onboarding fix wins on high reach, high impact, strong evidence, and low effort; the bespoke one-customer feature loses badly on Reach despite feeling urgent. But remember the analogy\'s limits: if a low-RICE item is a dependency that unlocks three high-RICE ones, the score alone will mislead you — use it to inform the ordering, not to obey it blindly.',
        },
        {
          kind: 'scenario',
          title: 'The cost of saying yes',
          intro: 'Scarcity means every yes is a no elsewhere. Practice making opportunity cost visible and saying no with a reason — the core managerial act of this lesson.',
          decisions: [
            {
              situation: 'A well-known prospect will sign a decent contract IF you build a custom integration only they will use. It would consume your one engineer for six weeks — the same six weeks planned for the paid workflow that serves all buyers. What do you do?',
              options: [
                { label: 'Say yes — a signed logo is proof, and revenue is revenue.', correct: false, outcome: 'You bought one logo and forfeited six weeks of building the workflow that serves the whole market. That is the invisible opportunity cost made real: you can\'t see the many buyers you failed to validate, so the trade feels free. It isn\'t. One bespoke account can quietly turn you into its consultancy.' },
                { label: 'Say no (or "not on our roadmap"), explain why, and offer to revisit once the general workflow ships.', correct: true, outcome: 'Correct. You named the opportunity cost — six weeks of the many-buyer workflow — and declined with a reason rather than reflexively chasing the logo. Saying no with a rationale is the skill scarcity demands; a prioritized list you won\'t defend is just a wish list.' },
              ],
            },
            {
              situation: 'Your team wants to add three "quick" features this sprint because each individually seems cheap. Your north-star is weekly active teams completing the core workflow. How do you respond?',
              options: [
                { label: 'Approve all three — they\'re each small, so why not.', correct: false, outcome: '"Each is small" ignores the context-switch tax and the fact that three small non-core features still displace the one core improvement. Scarcity discipline isn\'t about the cost of any single yes; it\'s about protecting focus for the work that moves the north-star.' },
                { label: 'Score each against the north-star, keep at most the one with real reach and impact, and defer the rest.', correct: true, outcome: 'Correct. You forced each "quick win" to justify itself against the goal instead of waving them through on apparent cheapness. Most "small" features are small in effort and smaller in impact; guarding the top of the list means killing them cheerfully.' },
              ],
            },
          ],
        },
        {
          kind: 'platformTask',
          title: 'RICE-score your real backlog',
          body: 'Bring your actual to-do list. Write down every candidate project or feature competing for the next month, then score each with RICE: Reach (people affected per period), Impact (0.25 minimal to 3 massive), Confidence (0 to 1 — your evidence haircut), Effort (person-months). Compute (R x I x C) / E for each, rank them, and draw a line: everything below it is an explicit "no, not now." Record your top item and one thing you are killing.',
          links: [
            { label: 'Intercom — "RICE: Simple prioritization for product managers" (the origin)', url: 'https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/' },
            { label: 'Product School — RICE framework guide with examples', url: 'https://productschool.com/blog/product-fundamentals/rice-framework' },
            { label: 'Google Sheets — build your scored backlog here', url: 'https://sheets.google.com' },
          ],
          steps: [
            'List every project competing for the next month\'s focus.',
            'For each, estimate Reach, Impact (0.25–3), Confidence (0–1), and Effort (person-months).',
            'Compute RICE = (Reach x Impact x Confidence) / Effort for each and sort descending.',
            'Draw the line: mark everything below your capacity as an explicit "no, not now".',
            'Record your single top-priority item and one thing you are deliberately killing.',
          ],
          taskKey: '22.2#rice',
          proofLabel: 'Your #1 RICE item and one thing you are saying no to',
          proofKind: 'text',
        },
        {
          kind: 'resource',
          title: 'Prioritization frameworks (real)',
          items: [
            { label: 'Intercom — the original RICE post', url: 'https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/', note: 'Sean McBride\'s own writeup of the framework he built on Intercom\'s growth team.' },
            { label: 'Product School — RICE guide with worked examples', url: 'https://productschool.com/blog/product-fundamentals/rice-framework', note: 'Clear examples of scoring and ranking a backlog.' },
            { label: 'The Eisenhower matrix (Covey popularized "important vs urgent")', url: 'https://www.eisenhower.me/eisenhower-matrix/', note: 'The urgent/important distinction Eisenhower is credited with and Stephen Covey made famous in "The 7 Habits of Highly Effective People."' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'RICE-score my backlog', kind: 'ask', question: 'Help me RICE-score my actual backlog: for each project, push me to estimate Reach, Impact, Confidence, and Effort honestly, compute the scores, and tell me where to draw the line for "no, not now".' },
        { label: 'Help me say no', kind: 'ask', question: 'I struggle to say no. Given a request that\'s pulling at me, help me name the opportunity cost of saying yes and script a clear, kind "no" or "not now" with a reason.' },
        { label: 'Stress-test my priorities', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In the RICE score (Reach x Impact x Confidence) / Effort, what is the specific job of the Confidence term?',
          options: [
            'To increase the score of ideas the founder personally likes',
            'To apply an evidence-based haircut (0 to 1) that demotes exciting but unproven bets',
            'To measure how many users the project reaches',
            'To convert the score into dollars',
          ],
          answer: 1,
          explain: 'Confidence is a 0-to-1 multiplier reflecting how much evidence backs your Reach and Impact estimates. A dazzling idea nobody can justify gets a low Confidence and its score collapses, while a well-evidenced boring fix survives. It is the term that strips wishful thinking out of the ranking.',
        },
        {
          kind: 'mcq',
          prompt: 'What is the central failure mode the Eisenhower matrix is designed to expose?',
          options: [
            'Spending too much money on tools',
            'Letting urgent-but-unimportant tasks crowd out the important-but-not-urgent work that actually compounds',
            'Hiring the wrong people',
            'Setting a north-star metric that only goes up',
          ],
          answer: 1,
          explain: 'The matrix separates important (moves your goal) from urgent (loud and time-boxed) precisely because we confuse them. The classic trap is firefighting urgent-not-important tasks all day while the important-not-urgent work — validation, planning, the compounding stuff — never gets defended time. The fix is to block that work first, before the urgent floods in.',
        },
        {
          kind: 'free',
          prompt: 'Take the two highest-competing items on your real backlog. Score each with RICE (show Reach, Impact, Confidence, Effort and the resulting number), state which wins and why, and then name one thing you are going to say no to this month and the opportunity cost that "no" is protecting.',
          rubric: 'Strong answer: (1) gives concrete RICE inputs and computed scores for two real items, not hand-waving; (2) correctly reads the ranking and explains it in terms of reach/impact/evidence/effort, ideally noting a dependency or context-switch caveat where relevant; (3) names a specific thing being declined and articulates the opportunity cost the "no" protects, showing they grasp that every yes is a no elsewhere. Penalize answers that rank by gut feeling, invent suspiciously round inputs to force a preferred winner, or refuse to say no to anything.',
        },
      ],
      commitSummary: 'your backlog is now ranked, not just listed — RICE-scored, with a defended top and an explicit "no" list, so scarce focus goes to what compounds.',
    },

    // -----------------------------------------------------------------------
    {
      id: '22.3',
      module: 22,
      title: 'OKRs & goal alignment',
      estMinutes: 20,
      prerequisites: ['22.1', '22.2'],
      artifactSlot: null,
      concept: `A prioritized backlog tells you what to do next; it does not tell the whole organization *why* or *whether it worked*. That is the job of **OKRs** — Objectives and Key Results — and the cleanest way for an engineer to understand them is as a **spec with acceptance criteria**. The Objective is the qualitative goal (the feature you're building); the Key Results are the measurable, testable conditions that must be true for the Objective to count as met (the acceptance tests). If a Key Result can't fail a test, it isn't a Key Result.

**Objectives are directional and memorable; Key Results are numbers.** "Delight our first cohort of paying customers" is an Objective — inspiring, unmeasurable on its own. Its Key Results make it falsifiable: "reach 40 paying customers," "hit 30% week-4 retention," "achieve an NPS of 40." The most common failure is writing *tasks* as Key Results — "launch the referral feature" — which measures activity, not outcome. A Key Result should describe the result you want to be true in the world, such that you could hit it by any means; "launch the feature" is done even if the feature helps no one.

**Alignment** is the other half. Popularized by John Doerr from Intel's Andy Grove, and made famous when Doerr introduced them to Google in 1999 — an investment that helped a 40-person company grow past 70,000 — OKRs align an org by making everyone's goals *transparent and connected*: a team's Objective supports the company's, so a junior engineer can see how their Key Result ladders up. This kills the quiet waste of teams optimizing local metrics that don't add up to anything.

Two calibration rules keep OKRs honest. Set them **ambitiously**: Google grades on a 0.0–1.0 scale and treats an average around 0.7 as the sweet spot — consistently scoring 1.0 means you sandbagged; consistently scoring 0.3 means you're not learning to calibrate. And keep them **few**: three Objectives with three Key Results each is plenty. An org with fifteen "priorities" has none.`,
      reframe: {
        analogy: `An OKR is a **spec with acceptance tests**. The Objective is the feature description in the ticket — "make onboarding delightful" — human-readable and directional. The Key Results are the automated acceptance tests that must go green for the ticket to close: assertions with concrete thresholds that either pass or fail, no debate. Just as you'd reject a pull request whose "tests" merely assert that code *ran* rather than that it produced the right output, you reject a Key Result that asserts a task *shipped* rather than that a metric *moved*. And cascading OKRs are like a well-factored test suite: the company's top-level tests decompose into each team's module-level tests that ladder up to them.`,
        breaks: `Acceptance tests are **deterministic and complete**: green means correct, and passing tests you didn't write can't hurt you. OKRs are neither. A Key Result is a *proxy* for value, so it's vulnerable to **Goodhart's law** — optimize "40 paying customers" hard enough and you'll buy junk signups that pass the test while the real objective (customers who love the product) fails silently. Worse, unlike a test suite you *want* to pass 100%, a well-set OKR is designed to be *missed ~30% of the time*, so a green board is a red flag that you aimed too low. And no assertion captures everything that matters — the qualitative "delight" the Objective names always exceeds the three numbers you chose to measure it by. Treat Key Results as necessary evidence, never as the whole definition of done.`,
      },
      workedExample: `**Google, 1999 (John Doerr, from Andy Grove's Intel).** When Doerr invested about $12 million in Google, he brought OKRs — the discipline he'd learned under Andy Grove at Intel — to a roughly 40-person company with sky-high ambition and no management system. With OKRs as the operating backbone, Google aligned every team's measurable goals to the company's, and grew past 70,000 employees (John Doerr, "Measure What Matters," 2018; whatmatters.com).

Two specifics are worth stealing. First, Google's **grading calibration**: Key Results are scored 0.0 to 1.0, and the target is an average around 0.6–0.7. Consistently hitting 1.0 doesn't mean you're excellent — it means your goals were too timid; the system is deliberately tuned so that "the sweet spot of ambitious realism" leaves you falling short about 30% of the time (Google re:Work, "Set goals with OKRs"). Committed OKRs are the exception — those are pass/fail and you're expected to hit 1.0. Second, the **spec discipline**: a good Google Key Result reads like an acceptance test — "increase sign-up-to-active conversion from 20% to 35% this quarter" — not like a task — "improve the signup flow." The transferable move for your venture is to write three Objectives at most, give each two-to-four Key Results that are numbers a stranger could verify, set them so 0.7 would be a genuinely good outcome, and make sure each one visibly ladders up to your north-star from Module 13.`,
      branch: {
        scenario: `A teammate drafts this OKR for the quarter. Objective: "Improve the product." Key Results: (1) "Launch the new dashboard," (2) "Fix lots of bugs," (3) "Grow the user base." You're the founder reviewing it. What's your response?`,
        choices: [
          {
            label: 'Approve it — it names a clear goal and three concrete things to do this quarter.',
            correct: false,
            consequence: `**None of these are Key Results.** "Improve the product" is unmeasurable; "launch the dashboard" is a task (done even if it helps no one); "fix lots of bugs" has no threshold; "grow the user base" has no number, timeframe, or direction that can fail. This is a to-do list wearing an OKR costume. You could complete every item and have no idea whether anything actually improved.`,
          },
          {
            label: 'Rewrite it as a spec with acceptance tests: a sharper Objective and Key Results that are verifiable numbers tied to the north-star, set so ~0.7 would be a good result.',
            correct: true,
            consequence: `**Correct.** For example — Objective: "Make our first cohort genuinely successful." Key Results: "raise activation (signup to core-workflow-complete) from 20% to 35%," "reach 40 paying teams," "hit 30% week-4 retention." Each is a falsifiable assertion a stranger could check, each ladders up to the north-star, and the set is calibrated so hitting ~0.7 would be a real win. That is an OKR; the original was a task list.`,
          },
          {
            label: 'Approve the objective but tell them to add ten more Key Results so nothing important is missed.',
            correct: false,
            consequence: `**Dilution, not rigor.** Thirteen Key Results is not thoroughness — it's the absence of prioritization, and it guarantees the team optimizes whichever ones are easiest rather than whichever matter most. The whole power of OKRs is forcing a *few* falsifiable outcomes. Fix the ones you have (make them measurable outcomes, not tasks); don't bury the signal under more rows.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'scenario',
          title: 'Fix a bad OKR',
          intro: 'The most common OKR mistakes are writing tasks instead of outcomes, and Key Results with no failing condition. Diagnose and repair each one.',
          decisions: [
            {
              situation: 'Proposed Key Result: "Launch the referral program." Is this a valid Key Result, and if not, how do you fix it?',
              options: [
                { label: 'Valid — it\'s specific and shippable this quarter.', correct: false, outcome: 'It\'s a task, not a result. "Launched" is true even if the referral program drives zero signups — it measures activity, not the outcome you actually want. A Key Result must describe a result in the world you could hit by any means.' },
                { label: 'Invalid — rewrite as an outcome: "Referral program drives 25% of new signups by quarter end."', correct: true, outcome: 'Correct. Now it\'s an acceptance test: it can fail, it measures the result (referred signups) not the activity (launching), and any approach that hits the number counts. Whether you "launch a program" is an implementation detail.' },
              ],
            },
            {
              situation: 'Proposed Key Result: "Significantly improve retention." Valid or not?',
              options: [
                { label: 'Valid — retention is exactly the right thing to target.', correct: false, outcome: 'Right target, unfalsifiable phrasing. "Significantly" has no threshold, so at quarter end you can argue any result is a pass. A Key Result you can\'t score is not a Key Result.' },
                { label: 'Invalid — quantify it: "Raise week-4 retention from 18% to 30%."', correct: true, outcome: 'Correct. A baseline (18%), a target (30%), and a window (week 4) make it a number a stranger could verify and that can clearly pass or fail. That is the whole job of a Key Result.' },
              ],
            },
            {
              situation: 'Your board of OKRs has 4 Objectives with 5 Key Results each — 20 in total — and at quarter end the team hit 1.0 on almost all of them. What does that tell you?',
              options: [
                { label: 'Great quarter — near-perfect execution across the board.', correct: false, outcome: 'Two red flags. Twenty Key Results means no real prioritization, and scoring near 1.0 across the board means they were set too timidly. A green board is a signal you sandbagged, not that you excelled.' },
                { label: 'The OKRs were too many and too easy — cut to ~3 Objectives and set next quarter\'s so ~0.7 would be a win.', correct: true, outcome: 'Correct. Few and ambitious is the rule: three Objectives, a handful of Key Results each, calibrated so the sweet spot (~0.7) means falling short about 30% of the time. Consistently hitting 1.0 means aim higher.' },
              ],
            },
          ],
        },
        {
          kind: 'categorize',
          prompt: 'Sort each statement into whether it belongs as an Objective (qualitative, directional) or a Key Result (a measurable, testable outcome) — and reject anything that is really just a task in disguise.',
          buckets: ['Good Objective', 'Good Key Result', 'Task disguised as a KR (reject)'],
          items: [
            { text: 'Make our first paying cohort wildly successful', bucket: 'Good Objective' },
            { text: 'Become the default tool for indie game studios', bucket: 'Good Objective' },
            { text: 'Raise activation from 20% to 35% this quarter', bucket: 'Good Key Result' },
            { text: 'Reach 40 paying teams by March 31', bucket: 'Good Key Result' },
            { text: 'Hit 30% week-4 retention', bucket: 'Good Key Result' },
            { text: 'Launch the new onboarding flow', bucket: 'Task disguised as a KR (reject)' },
            { text: 'Ship the mobile app', bucket: 'Task disguised as a KR (reject)' },
          ],
          explain: 'Objectives are memorable and directional ("make the cohort successful"); Key Results are verifiable numbers with baselines, targets, and windows ("40 paying teams by March 31"). "Launch X" and "ship Y" are tasks — true the moment the thing exists, regardless of whether it worked — so they belong on a backlog, not in a Key Result. The test: can it fail a measurement? If not, it is not a Key Result.',
        },
        {
          kind: 'numeric',
          prompt: 'At quarter end you grade one Objective\'s three Key Results on Google\'s 0.0–1.0 scale: 0.9, 0.7, and 0.5. What is the Objective\'s score (the average of its Key Results)?',
          answer: 0.7,
          tolerance: 0.01,
          unit: 'score',
          explain: 'Average = (0.9 + 0.7 + 0.5) / 3 = 2.1 / 3 = 0.7. That lands squarely in Google\'s "sweet spot of ambitious realism": a well-set aspirational OKR should score around 0.6–0.7. Consistently averaging 1.0 means you set the targets too low; consistently averaging 0.3 means you are not calibrating (or not executing). The number is a learning signal, not a grade to maximize.',
        },
        {
          kind: 'platformTask',
          title: 'Draft your real quarterly OKRs',
          body: 'Write this quarter\'s OKRs for YOUR venture. Set at most 3 Objectives (qualitative, memorable), each with 2–4 Key Results that are measurable outcomes with a baseline, a target, and a window — not tasks. Make each Objective visibly ladder up to your north-star from Module 13. Calibrate ambition so that hitting ~0.7 would be a genuinely good quarter. Then record your single most important Objective and its Key Results.',
          links: [
            { label: 'Google re:Work — "Set goals with OKRs"', url: 'https://rework.withgoogle.com/intl/en/guides/set-goals-with-okrs' },
            { label: 'What Matters — how to write and grade OKRs', url: 'https://www.whatmatters.com/faqs/how-to-grade-okrs' },
            { label: 'What Matters — Google\'s OKR playbook', url: 'https://www.whatmatters.com/resources/google-okr-playbook' },
          ],
          steps: [
            'Write up to 3 qualitative, memorable Objectives for this quarter.',
            'Give each Objective 2–4 Key Results that are measurable outcomes with baseline, target, and window.',
            'Reject any Key Result that is really a task ("launch X", "ship Y") — restate it as the result you want to be true.',
            'Check each Objective ladders up to your north-star metric.',
            'Calibrate: would hitting ~0.7 be a good quarter? Record your top Objective and its Key Results.',
          ],
          taskKey: '22.3#okrs',
          proofLabel: 'Your top Objective and its 2–4 measurable Key Results',
          proofKind: 'text',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'OKRs (real, canonical)',
          items: [
            { label: 'Google re:Work — "Set goals with OKRs"', url: 'https://rework.withgoogle.com/intl/en/guides/set-goals-with-okrs', note: 'Google\'s own guide, including the 0.0–1.0 grading scale and the ~0.7 sweet spot.' },
            { label: 'John Doerr — "Measure What Matters"', url: 'https://www.whatmatters.com/the-book', note: 'The canonical OKR book: the Intel origin, the Google story, and dozens of real OKR case studies.' },
            { label: 'What Matters — OKRs Explained (free)', url: 'https://www.whatmatters.com/', note: 'Doerr\'s free companion resources and a short course on writing and grading OKRs.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Write my quarterly OKRs', kind: 'ask', question: 'Help me draft this quarter\'s OKRs: propose up to 3 Objectives tied to my north-star, and for each give 2–4 Key Results that are measurable outcomes (baseline, target, window) rather than tasks.' },
        { label: 'Is this a KR or a task?', kind: 'ask', question: 'Here are my draft Key Results. Tell me which are real measurable outcomes and which are tasks in disguise, and rewrite the tasks as falsifiable Key Results.' },
        { label: 'A harder alignment case', kind: 'harder', concept: 'cascading OKRs across two teams so their Key Results ladder up to the company north-star without creating conflicting local incentives' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which of these is a proper Key Result rather than a task in disguise?',
          options: [
            'Launch the new onboarding flow',
            'Significantly improve activation',
            'Raise activation (signup to core-workflow-complete) from 20% to 35% this quarter',
            'Work hard on retention',
          ],
          answer: 2,
          explain: 'A Key Result is an acceptance test: it needs a baseline (20%), a target (35%), and a window (this quarter) so it can clearly pass or fail. "Launch the flow" is a task (true the moment it ships, regardless of effect); "significantly improve" and "work hard on" have no measurable threshold and can\'t fail. Only the third describes a verifiable outcome.',
        },
        {
          kind: 'mcq',
          prompt: 'On Google\'s 0.0–1.0 OKR scale, what does it usually mean if a team consistently scores close to 1.0 on its aspirational OKRs?',
          options: [
            'The team is executing perfectly and should be rewarded',
            'The OKRs were set too timidly — the sweet spot is around 0.7, so a green board suggests you aimed too low',
            'The OKRs were too ambitious and should be lowered',
            'The grading scale is broken',
          ],
          answer: 1,
          explain: 'Aspirational OKRs are deliberately tuned so that ~0.7 is a good outcome — you should fall short about 30% of the time. Consistently hitting ~1.0 means the targets were sandbagged, not that execution was flawless. (Committed OKRs are the exception: those are pass/fail and expected to hit 1.0.)',
        },
        {
          kind: 'free',
          prompt: 'Write one Objective for your venture this quarter and 2–3 Key Results for it. Then explain (1) why each Key Result is a measurable outcome and not a task, (2) how the Objective ladders up to your north-star, and (3) roughly what score would represent the ambitious-realism sweet spot and why.',
          rubric: 'Strong answer: (1) states a qualitative, directional Objective plus 2–3 Key Results that each have a baseline/target/window and can clearly fail — not "launch X" tasks; (2) explicitly connects the Objective to the learner\'s north-star metric; (3) shows understanding that a well-set aspirational OKR targets ~0.7 (falling short ~30% of the time) rather than a guaranteed 1.0, and ideally notes the Goodhart risk of gaming a proxy. Penalize tasks-as-KRs, unmeasurable phrasing, or a set with no connection to the north-star.',
        },
      ],
      commitSummary: 'this quarter\'s OKRs are drafted as a spec with acceptance tests — few, measurable, ambitious, and laddering up to your north-star.',
    },

    // -----------------------------------------------------------------------
    {
      id: '22.4',
      module: 22,
      title: 'The operating cadence',
      estMinutes: 18,
      prerequisites: ['22.1', '22.2', '22.3'],
      artifactSlot: null,
      concept: `Runway, priorities, and OKRs are all *state*. What makes a company self-correct is the *loop* that reads that state and acts on it: the **operating cadence**. Without a cadence, your OKRs are a document nobody reopens until the quarter is over, your runway is a number you rediscover in a panic, and your priorities drift because nothing forces you to re-rank. The cadence is the clock that converts observation into correction.

The loop runs at **nested frequencies**, each with a different job. **Daily** (async, two minutes): what shipped, what's next, what's blocked — fast enough to unstick people the same day. **Weekly** (30–45 minutes): review the north-star and its inputs against target, set the top three priorities and the explicit *not*-doing list, log one customer conversation. **Monthly**: financials — revenue, burn, runway — plus retention and one experiment result. **Quarterly**: did we hit the OKRs, pivot or persevere, and set next quarter's single metric. Higher frequencies catch small deviations before they compound; lower frequencies protect you from over-reacting to noise.

The reason to nest them is **matching sampling rate to signal**. Some variables move day to day (blockers, shipping); sampling them quarterly means small problems fester for months. Others — retention, whether the whole thesis holds — move slowly, and sampling them daily just feeds you noise and provokes thrashing. A good cadence samples each variable at roughly the rate it actually changes.

The discipline that makes cadence work is that **each loop ends in a decision, written down**. A review that produces no decision is theater; a decision not logged is a decision you'll relitigate. The append-only decision log — what we decided, why, and when to revisit — is what turns a series of meetings into a control system with memory. Motion without a cadence is just busyness; a cadence without decisions is just meetings. You want the loop that converges.`,
      reframe: {
        analogy: `The operating cadence is a **feedback control loop with nested sampling rates**, like a real control stack: a fast inner loop stabilizes attitude at hundreds of hertz while a slow outer loop plans the trajectory at a few hertz. Your daily and weekly reviews are the inner loop — high sampling rate, small corrections, keeping the system from tipping over day to day. Your monthly and quarterly reviews are the outer loop — low sampling rate, big steering decisions about where the whole vehicle is headed. Each loop measures the error between the metric and its setpoint (the OKR target) and applies a corrective input. The decision log is the loop's integral term — accumulated memory so you don't forget what you already corrected for.`,
        breaks: `Control loops assume a **known plant and bounded, short delay** between input and effect. A startup violates both: the delay between a product decision and its effect on retention can be *months*, so a naive high-frequency loop reacts to noise and **over-corrects**, oscillating between strategies before any of them had time to work. And the metric is a **proxy** — crank the loop hard on it and Goodhart's law decouples it from real value. So keep the nested loops, but add two things no autopilot needs: *patience* about the long action-to-effect delay (don't pivot on one bad week when the fix takes a quarter to show), and *judgment* to tell a real signal from noise. The cadence gives you a rhythm to think on schedule; it does not think for you.`,
      },
      workedExample: `**Andy Grove's Intel and the origin of the operating rhythm.** The nested-cadence discipline traces to Andy Grove, who ran Intel on what he called a management system of regular, purpose-specific meetings and codified it in "High Output Management" (1983) — the same lineage that produced OKRs and that John Doerr carried to Google. Grove's core claim is that a manager's output is the output of the teams under them, and the leverage comes from *information and decisions delivered on a rhythm*: frequent one-on-ones and staff meetings to catch problems early, periodic reviews to steer. Google later formalized the outer loop as quarterly OKR grading and setting (Grove, "High Output Management"; Doerr, "Measure What Matters").

Notice the control-system logic. The fast loop (one-on-ones, staff meetings) exists because small problems are cheap to fix when caught the same week and ruinous when discovered a quarter late — that's sampling a fast variable at a fast rate. The slow loop (quarterly OKR review) exists because whether the *strategy* is working is a slow variable; sampling it weekly would just provoke strategy-thrashing on noise. And each meeting is meant to *end in decisions*, not status theater — Grove was scathing about meetings that consume time without producing them. The transferable move for your venture is exactly the template in the document below: install a daily, weekly, monthly, and quarterly loop; sample each variable at the rate it changes; and make every loop end in a written decision you can revisit. (Elad Gil's "High Growth Handbook," cited below, shows how this same rhythm scales from 10 to 10,000 people.)`,
      branch: {
        scenario: `You review your north-star metric only once a quarter, at the OKR grading meeting. This quarter it came in badly, and now — three months in — you're discovering a problem that started in week two. A teammate proposes you fix it by reviewing the metric daily and pivoting strategy whenever it dips. What's the right cadence design?`,
        choices: [
          {
            label: 'Keep quarterly-only reviews — checking more often just creates noise and meeting overhead.',
            correct: false,
            consequence: `**Sampling too slow.** A fast-moving variable reviewed quarterly means a week-two problem festers for three months before anyone sees it — exactly what just happened. Under-sampling the fast loop is how small, cheap-to-fix deviations compound into a blown quarter. You need a faster inner loop, not the status quo.`,
          },
          {
            label: 'Install nested loops: review the north-star and its inputs weekly to catch deviations early, but hold strategy pivots to the monthly/quarterly loop so you don\'t thrash on noise.',
            correct: true,
            consequence: `**Correct.** Match sampling rate to signal: the north-star and its input metrics move week to week, so sample them weekly to catch problems in days, not months. But whether the *strategy* is working is a slow variable with a long action-to-effect delay, so big pivots belong in the slower loop. Fast inner loop for small corrections, slow outer loop for steering — and every review ends in a written decision.`,
          },
          {
            label: 'Review daily and pivot strategy whenever the metric dips — maximum responsiveness is always better.',
            correct: false,
            consequence: `**Over-correcting on noise.** Pivoting strategy on every daily dip is textbook oscillation: because the delay between a fix and its effect on the metric can be months, you'll abandon good strategies before they've had time to work, thrashing between directions on random noise. High sampling is fine for *observing*; reserve big *corrections* for the slow loop where the signal is real.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'rank',
          prompt: 'Order the operating loops from the HIGHEST sampling frequency (fastest inner loop) to the LOWEST (slowest outer loop).',
          items: [
            'Daily async check-in: shipped / next / blocked',
            'Weekly review: north-star and input metrics vs target, top 3 priorities and the not-doing list',
            'Monthly review: revenue, burn, runway, retention, one experiment result',
            'Quarterly review: grade OKRs, pivot-or-persevere, set next quarter\'s single metric',
          ],
          explain: 'The cadence nests by frequency: daily unsticks people same-day, weekly catches metric deviations early, monthly watches the slower financial and retention variables, and quarterly makes the big steering decisions. Fast inner loops make small corrections; slow outer loops make strategy calls. Matching each loop\'s frequency to how fast its variable actually changes is the whole design.',
        },
        {
          kind: 'categorize',
          prompt: 'Match each decision or check to the loop where it belongs — sample each variable at roughly the rate it actually changes.',
          buckets: ['Daily / Weekly (fast inner loop)', 'Monthly', 'Quarterly (slow outer loop)'],
          items: [
            { text: 'Is anyone blocked right now, and what shipped yesterday?', bucket: 'Daily / Weekly (fast inner loop)' },
            { text: 'Is the north-star metric on track versus this week\'s target?', bucket: 'Daily / Weekly (fast inner loop)' },
            { text: 'What are the top 3 priorities this week, and what are we explicitly NOT doing?', bucket: 'Daily / Weekly (fast inner loop)' },
            { text: 'What are revenue, burn, and runway this month, and how is retention trending?', bucket: 'Monthly' },
            { text: 'What did our latest experiment teach us, and what changes as a result?', bucket: 'Monthly' },
            { text: 'Did we hit our OKRs, and do we pivot or persevere?', bucket: 'Quarterly (slow outer loop)' },
            { text: 'What is next quarter\'s single most important metric?', bucket: 'Quarterly (slow outer loop)' },
          ],
          explain: 'Fast variables (blockers, weekly metric movement, this week\'s priorities) belong in the daily/weekly loop so problems surface in days. Slower variables (monthly financials, retention, experiment learnings) belong in the monthly loop. The slowest, biggest decisions (OKR grading, pivot-or-persevere, next quarter\'s metric) belong in the quarterly loop, where the signal has had time to accumulate and you won\'t thrash on noise.',
        },
        {
          kind: 'numeric',
          prompt: 'You burn $40,000/month. A failing initiative becomes detectable after its first month, but you only review it in your quarterly meeting (once every 3 months). Compared with catching it at a monthly review, how many EXTRA dollars do you burn on the failing initiative before you notice?',
          answer: 80000,
          tolerance: 100,
          unit: 'dollars',
          explain: 'A monthly review catches it after ~1 month ($40,000 spent). A quarterly-only review catches it after ~3 months ($120,000 spent). The extra cost of the slower sampling rate is 120,000 - 40,000 = $80,000 — two extra months of burn on a bet you already had the evidence to kill. That gap is precisely why fast-moving variables need a fast inner loop; under-sampling is not free.',
        },
        {
          kind: 'scenario',
          title: 'When the cadence breaks',
          intro: 'A cadence fails in specific, recognizable ways: reviews with no decisions, sampling mismatched to the signal, and meetings that become status theater. Diagnose each.',
          decisions: [
            {
              situation: 'Your weekly review runs 45 minutes, everyone shares detailed status, and it ends warmly — but nothing is decided and nothing is written down. Two weeks later the same issue resurfaces, unresolved. What\'s wrong?',
              options: [
                { label: 'Nothing — regular status-sharing keeps everyone informed, which is the point.', correct: false, outcome: 'A review that produces no decision is theater. Status can be shared async in two minutes; the reason to gather is to DECIDE. Because nothing was decided or logged, the same issue returns and gets relitigated — the loop has no corrective output and no memory.' },
                { label: 'Each review must end in explicit decisions, logged append-only with a "revisit when" — otherwise it\'s not a control loop.', correct: true, outcome: 'Correct. The loop only self-corrects if it produces a decision and remembers it. Move status to async, spend the meeting deciding, and write each decision (what, why, revisit-when) into an append-only log so it stops resurfacing.' },
              ],
            },
            {
              situation: 'A founder reviews retention every single day and, whenever it dips, changes the onboarding strategy. Retention keeps getting worse and the team is whiplashed. What\'s the failure?',
              options: [
                { label: 'They aren\'t reviewing often enough — they should check retention hourly.', correct: false, outcome: 'The opposite. Retention is a SLOW variable with a long action-to-effect delay; each onboarding change takes weeks to show up. Reviewing daily and pivoting on every dip is over-sampling and over-correcting on noise — classic oscillation that prevents any strategy from ever working.' },
                { label: 'Retention is a slow variable — observe it often if you like, but reserve strategy changes for the slower loop so you stop thrashing on noise.', correct: true, outcome: 'Correct. Match the correction rate to the signal, not just the observation rate. You can watch retention daily, but big onboarding pivots belong in the monthly/quarterly loop, giving each change time to actually take effect before you judge it.' },
              ],
            },
          ],
        },
        {
          kind: 'document',
          title: 'Write your operating cadence',
          body: 'Install the loop for YOUR venture. Use the template to define the one metric that matters this quarter, then your daily, weekly, monthly, and quarterly loops — what each reviews, who attends, and the decision each is meant to produce. Crucially, set up the append-only decision log so every review ends in a written decision with a "revisit when." Fill it in for your real company and save it to your workspace.',
          templateHref: '/templates/operating-cadence.md',
          docKey: '22.4#cadence',
          docLabel: 'My operating cadence',
        },
        {
          kind: 'platformTask',
          title: 'Put the loop on the calendar',
          body: 'A cadence that isn\'t scheduled doesn\'t exist. Turn your written cadence into recurring calendar events: a weekly review, a monthly financial-and-retention review, and a quarterly OKR review, each with a fixed time and a one-line agenda pointing at the decision it must produce. Then run your FIRST weekly review this week and log one decision in your decision log. Record the date and time of your recurring weekly review.',
          links: [
            { label: 'Google Calendar — create the recurring reviews', url: 'https://calendar.google.com' },
            { label: 'Elad Gil — "High Growth Handbook" (how cadence scales)', url: 'https://growth.eladgil.com/' },
          ],
          steps: [
            'Create a recurring weekly review event with a fixed time and a one-line agenda (north-star vs target, top 3 priorities, not-doing list).',
            'Create recurring monthly (financials + retention) and quarterly (OKR grading + pivot/persevere) reviews.',
            'Run your first weekly review this week and make at least one real decision.',
            'Log that decision (what, why, revisit-when) in your append-only decision log.',
            'Record the day and time of your recurring weekly review below.',
          ],
          taskKey: '22.4#cadence-live',
          proofLabel: 'The day/time of your recurring weekly review (and one decision you logged)',
          proofKind: 'text',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'Operating cadence & scaling (real, canonical)',
          items: [
            { label: 'John Doerr — "Measure What Matters"', url: 'https://www.whatmatters.com/the-book', note: 'The OKR book, whose quarterly grading loop is the outer ring of the operating cadence.' },
            { label: 'Elad Gil — "High Growth Handbook"', url: 'https://growth.eladgil.com/', note: 'How operating cadence, meetings, and management rhythm evolve as a company scales from 10 to 10,000 people. Free companion site.' },
            { label: 'High Growth Handbook (Stripe Press)', url: 'https://press.stripe.com/high-growth-handbook', note: 'Publisher page for the book, with chapter overviews on scaling operations and the CEO\'s job.' },
            { label: 'Andrew Grove — "High Output Management"', url: 'https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884', note: 'The origin of the management-by-meetings rhythm and the ancestor of OKRs; the source of the nested-cadence idea.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Design my cadence', kind: 'ask', question: 'Help me design my operating cadence: given my team size and stage, propose what my daily, weekly, monthly, and quarterly loops should review, who should attend, and the decision each must produce.' },
        { label: 'Am I sampling right?', kind: 'ask', question: 'Given my metrics, which ones am I reviewing too often (over-sampling noise and over-correcting) and which too rarely (letting problems fester)? Help me match each variable to the loop that fits how fast it changes.' },
        { label: 'Critique my cadence for theater', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why does a good operating cadence use nested frequencies (daily/weekly/monthly/quarterly) rather than reviewing everything at one interval?',
          options: [
            'To fill the calendar and keep the team busy',
            'To match each variable\'s sampling rate to how fast it actually changes — fast loops catch small deviations early, slow loops avoid over-reacting to noise',
            'Because investors require quarterly meetings',
            'Because more meetings always produce better decisions',
          ],
          answer: 1,
          explain: 'Fast-moving variables (blockers, weekly metric movement) need a fast inner loop or small problems fester for months; slow-moving variables (retention, whether the strategy works) need a slow outer loop or you over-react to noise and thrash. Nesting the frequencies matches sampling rate to signal — the core of the control-system view.',
        },
        {
          kind: 'mcq',
          prompt: 'In the control-loop analogy, what is the single biggest way a startup violates the assumptions of a normal feedback controller?',
          options: [
            'The setpoint is unknowable, so no metric can be chosen',
            'The delay between an action and its effect can be months, so reacting at high frequency over-corrects on noise',
            'Startups have no disturbances to correct for',
            'The plant is perfectly known and never changes',
          ],
          answer: 1,
          explain: 'A normal controller assumes a known plant and short, bounded delay. A startup\'s action-to-effect delay can be months (today\'s product work shows up in next quarter\'s retention), so a naive high-frequency loop pivots on noise and oscillates. The fix is patience in the slow loop plus judgment to separate signal from noise — things an autopilot never needs.',
        },
        {
          kind: 'free',
          prompt: 'Describe the operating cadence you will actually run for your venture. Name your daily, weekly, monthly, and quarterly loops (what each reviews and the decision it produces), state one metric you will review weekly and one you will only revisit quarterly and why the frequencies differ, and explain how your decision log keeps the loop from relitigating the same issues.',
          rubric: 'Strong answer: (1) specifies concrete daily/weekly/monthly/quarterly loops, each ending in a decision rather than status theater; (2) correctly assigns a fast-moving variable to the weekly loop and a slow-moving one (retention, strategy/pivot) to the quarterly loop, and justifies the difference by how fast each variable changes and the action-to-effect delay; (3) explains the append-only decision log as the loop\'s memory that prevents relitigation. Penalize a single-frequency cadence, reviews with no decisions, or over-sampling slow variables and pivoting on noise.',
        },
      ],
      commitSummary: 'your operating cadence is live and on the calendar — nested loops that sample each variable at the right rate, each ending in a logged decision, so the company self-corrects on a clock.',
    },
  ],
}
