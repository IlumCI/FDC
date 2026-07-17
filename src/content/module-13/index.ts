import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 13 — Orientation: from learner to founder  (SEASON 2 opener)
//
// Season 1 was a simulator: you practiced the mechanics of a business on a
// disposable startup.json. Season 2 is "Building for Real" — the learner now
// commits to an ACTUAL venture, with real sources, real platforms, and real
// documents. This module is the on-ramp. It does the one thing a course can
// do that a book cannot: get a hesitant, capable engineer to actually decide,
// set up a real workspace, and commit to a direction. Every lesson is
// artifactSlot:null; the REAL venture is tracked through the new interactive
// `blocks` (platformTask/document write the "My venture" workspace), not slots.
// ===========================================================================

export const module13: Module = {
  id: 13,
  season: 2,
  title: 'Orientation: from learner to founder',
  goal: 'Stop simulating. Decide what you\'ll actually build, set up your real workspace, and commit to a direction — with real tools.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '13.1',
      module: 13,
      title: 'Readiness: are you actually going to do this?',
      estMinutes: 16,
      prerequisites: [],
      artifactSlot: null,
      concept: `Season 1 cost you nothing to be wrong. Season 2 spends your **time**, your **savings**, and your **reputation** — real, non-refundable resources. So the first honest question is not "is my idea good?" It is "am I actually going to do this, and can I survive doing it long enough to find out?"

Three variables decide whether you can even take the field:

- **Runway** — months you can operate before you must earn or raise. Runway = liquid savings ÷ monthly burn (personal + venture). Twelve months of real runway buys very different decisions than three.
- **Founder-market fit** — the overlap between what *this* market rewards and what *you* specifically bring: domain scars, an unfair distribution channel, a rare skill. It is the closest thing to a durable edge a first-time founder has.
- **Risk envelope** — the drawdown you can take without your life detonating: dependents, mortgage, visa status, health cover. This is a constraint, not a character flaw. Founders who ignore it don't take *more* risk; they take *unpriced* risk.

Readiness is not courage. It is a budget. The romantic founder quits with three months of cash and a perfect idea; the durable founder engineers a runway and a kill/continue rule *before* the emotional part starts. Being honest here is the highest-leverage thing you do all season — everything downstream assumes you told yourself the truth.`,
      reframe: {
        analogy: `Founder-market fit is **impedance matching**. A source delivers maximum power into a load only when their impedances match; mismatch it and most of your energy reflects back as heat. You are the source, the market is the load. When your specific advantages — the industry you already know, the audience that already trusts you, the tool you can build in a weekend — line up with what the market actually pays for, most of your effort converts into traction. When they don't, you pour in the same effort and it dissipates. Runway is simply how long the source can keep driving before the supply sags.`,
        breaks: `Circuit impedances are fixed; **you are not a passive component**. Founders re-tune themselves — learn the domain, recruit a co-founder who supplies the missing half, buy the distribution you lack. So a mismatch you can name is a *plan*, not a verdict, in a way no soldered network ever gets. And beware the inverse: a perfect match into a **tiny load** still delivers tiny power. Impedance-matched into a market of forty people is a beautiful, well-tuned circuit driving nothing. Fit is necessary; size still matters.`,
      },
      workedExample: `**Stripe (Patrick and John Collison, founded 2010).** Before Stripe the brothers were *developers* who had already built and sold a company (Auctomatic) — which meant they had personally felt the specific pain of wiring payments into software: days of bank paperwork, gateways, and merchant accounts to accept a single dollar online. Their product was, famously, "seven lines of code to charge a card." That is founder-market fit in its purest form: the customer (a developer) and the founder were the *same person*, so they could tell in minutes whether a design removed the pain or not.

Contrast the illustrative counterfactual: two founders with no payments background deciding payments "looks like a big market." Same idea, same TAM — but they would have to *buy* every insight the Collisons already owned, burning runway to reach a starting line the Collisons began behind. The lesson is not "only build what you've lived." It is that founder-market fit is a real, spendable advantage: name yours honestly, and where it's thin, plan explicitly to acquire it (a co-founder, a design partner, six months embedded in the domain) rather than pretending effort will substitute for fit.`,
      branch: {
        scenario: `You earn $180k as a senior engineer. You have about **3 months** of living expenses saved, a mortgage, and a partner whose income covers roughly half the household. You have a credible idea in a domain you know well. Everything in you wants to hand in your notice on Monday. What's the disciplined move?`,
        choices: [
          {
            label: 'Quit Monday and go full-time — commitment is the only way it becomes real.',
            correct: false,
            consequence: `**The romantic miss.** Three months of runway against a mortgage means you are optimizing for *not dying* within one quarter, which forces premature, desperate decisions — the wrong customers, the wrong first raise, the wrong price. Commitment is real, but you can commit hard *without* setting your runway to a number that guarantees panic. You didn't take more risk here; you took unpriced risk.`,
          },
          {
            label: 'Set an explicit runway target and a written kill/continue milestone, keep income while you gather real signal, then commit deliberately once the runway and the evidence are in place.',
            correct: true,
            consequence: `**Correct.** This is engineering, not cowardice. Extend runway to a number that buys calm decisions (e.g. 9–12 months), define in advance the signal that would justify going full-time (real users, real payments, a design partner), and use your current income as *free runway* while you get it. You commit no less hard — you just commit on a budget you chose instead of one fear chose for you.`,
          },
          {
            label: 'Wait until you have a perfect idea and two years of savings before doing anything at all.',
            correct: false,
            consequence: `**The never-start trap.** "Perfect idea + huge cushion" is a condition that rarely arrives, and waiting for it is how capable people stay learners forever. Readiness is a budget you *engineer*, not a state you wait to be granted. The correct answer buys safety AND forces motion; this one buys only stalling.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Founders waste enormous energy worrying about things they cannot move. Sort each factor into what you actually control versus what you don\'t — then resolve to spend your worry budget only on the left column.',
          buckets: ['In your control', 'Not in your control'],
          items: [
            { text: 'How many focused hours per week you commit', bucket: 'In your control' },
            { text: 'Whether you choose a market you already understand', bucket: 'In your control' },
            { text: 'Your personal monthly burn and how much runway you engineer', bucket: 'In your control' },
            { text: 'How fast you talk to real prospective users', bucket: 'In your control' },
            { text: 'Whether a competitor raises a $50M round next quarter', bucket: 'Not in your control' },
            { text: 'Interest rates and the macro funding climate', bucket: 'Not in your control' },
            { text: 'The exact timing of the market wave you\'re riding', bucket: 'Not in your control' },
            { text: 'Whether a large incumbent decides to copy your feature', bucket: 'Not in your control' },
          ],
          explain: 'Almost everything that determines whether you START is in your control; almost everything founders lose sleep over is not. Runway, hours, market choice, and speed-to-customer are yours. Competitors, macro, timing, and incumbents are weather — plan for them, but never wait on them.',
        },
        {
          kind: 'resource',
          title: 'Founder-readiness reading (real, canonical)',
          items: [
            { label: 'Paul Graham — "Before the Startup"', url: 'https://paulgraham.com/before.html', note: 'The counterintuitive truths about what starting actually demands of you.' },
            { label: 'Y Combinator Startup Library', url: 'https://www.ycombinator.com/library', note: 'The single best free corpus on founding; start with the "Becoming a Founder" collection.' },
            { label: 'Paul Graham — "How to Start a Startup"', url: 'https://paulgraham.com/start.html', note: 'The three ingredients: good people, something customers want, spend little. Read it as a readiness checklist.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Compute my real runway', kind: 'ask', question: 'Help me estimate my true personal runway: walk me through liquid savings, monthly burn (personal + any venture cost), and any income I can keep, then tell me how many months of calm decisions that buys and what a sane kill/continue milestone would be.' },
        { label: 'Where is my founder-market fit thin?', kind: 'ask', question: 'Given my background and the market I\'m eyeing, name my genuine founder-market-fit advantages and, more importantly, where the fit is thin — and give me a concrete plan (co-founder, design partner, embedding) to acquire the missing half.' },
        { label: 'Critique my readiness reasoning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'You have $36,000 in liquid savings and expect a combined personal-plus-venture burn of $6,000/month with no other income. What is your runway, and what does it mostly buy you?',
          options: [
            '6 months — enough to make calm, deliberate decisions',
            '6 months — enough that you must reach revenue or raise fast, which pressures every early decision',
            '36 months — plenty of time, no urgency',
            'Runway cannot be computed without knowing the idea',
          ],
          answer: 1,
          explain: 'Runway = 36,000 / 6,000 = 6 months. Six months against no income is short: it forces you toward whoever will pay soonest and whatever raise is available, not necessarily the right customer or terms. The lesson is not that 6 months is fatal, but that runway silently sets the *quality* of the decisions you can afford to make.',
        },
        {
          kind: 'mcq',
          prompt: 'Which best describes founder-market fit as a decision tool?',
          options: [
            'Proof that your idea will succeed',
            'The overlap between what a market rewards and the specific advantages you bring — a spendable edge you should name and, where thin, plan to acquire',
            'A personality trait some founders are born with',
            'The size of the total addressable market',
          ],
          answer: 1,
          explain: 'Founder-market fit is the impedance match between you and the load: your domain scars, unfair distribution, or rare skill against what the market actually pays for. It is necessary but not sufficient (a perfect match into a tiny market still delivers little), and unlike a fixed circuit you can re-tune it by acquiring the missing half.',
        },
        {
          kind: 'free',
          prompt: 'Do your own honest readiness audit. State (1) your realistic runway in months and how you\'d extend it, (2) your two strongest founder-market-fit advantages for the direction you\'re considering and one real gap, and (3) a written kill/continue milestone that would tell you to go all-in or stop.',
          rubric: 'A strong answer: (1) computes runway as savings ÷ burn with a concrete number and names a lever to extend it (cut burn, keep income, part-time); (2) names two SPECIFIC founder-market-fit advantages (not generic "I\'m hardworking") plus one honest gap and how they\'d close it; (3) states a falsifiable, pre-committed kill/continue milestone (a signal + a date/number), showing they understand readiness as an engineered budget rather than courage. Penalize vague self-assessment with no numbers.',
        },
      ],
      commitSummary: 'no slot written — this lesson sets the honest baseline (runway, fit, risk envelope) you\'ll build the rest of Season 2 on.',
    },

    // -----------------------------------------------------------------------
    {
      id: '13.2',
      module: 13,
      title: 'Where to start: idea selection with real signal',
      estMinutes: 18,
      prerequisites: ['13.1'],
      artifactSlot: null,
      concept: `Most technical founders start from a **solution** — an elegant thing they can build — and then hunt for a problem it fits. This is backwards, and it is the single most common way capable engineers waste a year. The discipline of Season 2 is to start from **demand you can observe** and let it select the idea.

**Real signal** is evidence that someone, somewhere, is *already* trying to solve this problem and failing. It comes in observable forms: people paying for inadequate tools, threads full of workarounds and complaints, rising search interest, hiring for a role that exists only because the problem exists, spreadsheets and scripts people maintain by hand. Signal is not "friends said it was cool" and not "the market is huge." It is behavior under load.

**Earn the right.** Before you are allowed to build, you owe the problem a small number of things: talking to people who have it, quantifying how often and how painfully it bites, and confirming they've tried to fix it and would pay for a better fix. Earning the right costs days, not months, and it is the cheapest insurance you will ever buy. Solution-first founders skip it because the building is fun; that fun is exactly what it costs them.

The goal of this lesson is not to fall in love with an idea. It is to choose the *problem* with the strongest observable pull, and to prove — with real signal from real platforms — that the pull exists before you write a line of product code.`,
      reframe: {
        analogy: `Choosing an idea from real signal is **profiling before optimizing**. No competent engineer hand-optimizes a function before profiling shows it's the hot path — that's how you spend a week shaving a loop that runs twice. Demand signal is your profiler for the market: it tells you where the real load is before you pour engineering into a code path nobody executes. Solution-first building is optimizing an unprofiled program because the assembly was pretty.`,
        breaks: `A profiler measures a *running* system; a pre-launch market has no trace to sample, so you're inferring load from **proxies** — search trends, forum volume, competitors' revenue — every one of which is noisy and gameable. Worse, absence of signal is not proof of no demand: the best markets are sometimes silent because no one yet has words for the problem (a genuine "zero-to-one" gap). So use signal to *reject* weak ideas cheaply and to *rank* candidates, but treat a quiet market as "investigate further," not "profiled cold — abort." The profiler tells you where load is; it can't always tell you where load *will be*.`,
      },
      workedExample: `**Dropbox (Drew Houston; founded 2007, demo circa 2008).** File sync was a crowded, skeptical space — investors kept asking why anyone needed *another* one. Rather than spend a year building the full synchronization engine and hoping, Houston recorded a roughly four-minute screencast **demonstrating the product working**, seeded it on Hacker News and Digg, and pointed viewers at a simple beta waitlist. The waitlist reportedly jumped from around **5,000 to about 75,000 sign-ups overnight** (figures widely reported; treat the exact numbers as illustrative).

What actually happened is a textbook demand test. Houston paid the cost of a *video*, not a *product*, to measure real behavior — sign-ups from strangers who felt the pain — before committing the hard engineering. The signal (tens of thousands of self-selected people raising their hands) *earned him the right* to build, and just as importantly told him the pitch and the audience that resonated. The transferable move for you is not "make a viral video." It is: find the cheapest artifact that produces *real* signal — a landing page, a demo, a manual concierge service, a pre-order — and let strangers' behavior, not your enthusiasm, decide whether the problem is worth your year.`,
      branch: {
        scenario: `You've built a genuinely slick AI feature over two weekends — you love it, and technically it's your best work. No one asked for it. Separately, in a niche community you follow, people keep posting the same dull complaint about a manual reporting chore and sharing hacky spreadsheets to cope. You have time to pursue one. Which do you chase?`,
        choices: [
          {
            label: 'Keep polishing the AI feature — once it\'s good enough, demand will show up.',
            correct: false,
            consequence: `**"Build it and they will come" — the solution-first miss.** You already have the strongest asset in early-stage building — a crowd repeatedly, publicly complaining about a specific painful chore and hacking around it — and you\'re proposing to ignore it in favor of a solution nobody requested. Polish does not manufacture demand. This is optimizing an unprofiled code path because the assembly is pretty.`,
          },
          {
            label: 'Go toward the boring, painful reporting chore: talk to the people complaining, quantify how often it bites, confirm they\'d pay — and earn the right before building.',
            correct: true,
            consequence: `**Correct.** The dull, recurring, workaround-generating complaint IS the signal — behavior under load. Spend days, not months: interview the complainers, count how often the chore recurs and what it costs them, and check they\'ve already tried (and paid for) inadequate fixes. Boring problems people already pay to escape beat exciting solutions nobody asked for, almost every time.`,
          },
          {
            label: 'Throw up a landing page for the AI feature, run one small ad campaign, and if click-through is low conclude there\'s no market.',
            correct: false,
            consequence: `**Overcautious *and* solution-first.** A single weak channel test on a solution nobody requested tells you almost nothing — low CTR could be the ad, the copy, the audience, or genuinely no demand, and you can\'t tell which. You already have durable, unpaid signal on the OTHER problem; don\'t trade real observed behavior for one noisy sample on the idea you happen to prefer.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Bottom-up demand sanity check. A niche subreddit for your target user has 240,000 members. Surveys of that community suggest about 4% actively struggle with the specific problem each month. If you could eventually convert 2.5% of those active sufferers to a $30/month tool, what is the resulting monthly revenue (in dollars)? Compute 240,000 x 0.04 x 0.025 x 30.',
          answer: 7200,
          tolerance: 50,
          unit: '$/month',
          explain: 'Reachable sufferers = 240,000 x 0.04 = 9,600/month. Convert 2.5% -> 240 paying users. At $30/month that is 240 x 30 = $7,200/month, or about $86k/year — from ONE community. Bottom-up beats top-down "1% of a huge TAM" fantasy because every factor is a number you can go verify. Treat it as a hypothesis to test, not a forecast.',
        },
        {
          kind: 'platformTask',
          title: 'Go find real demand signal (today, on real platforms)',
          body: 'Pick your single strongest candidate problem and gather observable signal for it. Do NOT ask friends. Look for behavior under load: rising or steady search interest, communities where the complaint recurs, and evidence people already pay for inadequate fixes. Spend 30–45 minutes. Then record what you actually found — the strongest concrete signal, with a number or a quote, or the honest verdict "weaker than I hoped."',
          links: [
            { label: 'Google Trends — Explore search interest over time', url: 'https://trends.google.com/explore' },
            { label: 'Reddit — find the communities where your users complain', url: 'https://www.reddit.com/' },
            { label: 'Indie Hackers — see what people are already building and charging for', url: 'https://www.indiehackers.com/' },
          ],
          steps: [
            'On Google Trends, enter 2–3 terms your users would search; note whether interest is rising, flat, or seasonal.',
            'Find 1–2 communities (subreddits, forums, Discords) where the problem lives; search for the complaint and read the top threads.',
            'Look for evidence of existing spend: competitors, paid workarounds, "I currently pay X to do this" comments.',
            'Write your strongest single piece of signal — ideally a number or a direct user quote — or record an honest "no strong signal yet".',
          ],
          taskKey: '13.2#signal',
          proofLabel: 'Your strongest demand signal (a quote, a number, or an honest null result)',
          proofKind: 'text',
        },
      ],
      tutorHooks: [
        { label: 'Turn my idea into a demand test', kind: 'ask', question: 'Given my candidate problem, design the CHEAPEST artifact (landing page, demo video, concierge MVP, pre-order) that would produce real behavioral signal, and tell me exactly what number would count as "earned the right to build".' },
        { label: 'Where do my users actually complain?', kind: 'ask', question: 'For my target user and problem, list the specific real communities, forums, search terms, and existing paid tools I should mine for demand signal, and what to look for in each.' },
        { label: 'A harder idea-selection case', kind: 'harder', concept: 'ranking three candidate problems by observable demand signal when the strongest market is the quietest one' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which of these is the strongest REAL demand signal for a candidate problem?',
          options: [
            'The total addressable market is estimated at $40 billion',
            'Three friends said the idea sounds cool',
            'A 200,000-member community has recurring threads where people share manual spreadsheets to cope, and two paid tools already exist but are widely disliked',
            'The underlying technology is novel and technically impressive',
          ],
          answer: 2,
          explain: 'Signal is behavior under load: people already hacking around the problem AND already paying for inadequate fixes is the clearest evidence demand exists. A huge TAM, friends\' encouragement, and technical novelty are not evidence anyone will pay — they are the classic solution-first mirages.',
        },
        {
          kind: 'mcq',
          prompt: 'What does the "earn the right" principle require before you start building?',
          options: [
            'Raising a seed round to fund development',
            'Talking to people who have the problem, quantifying its frequency and pain, and confirming they\'ve tried to fix it and would pay',
            'Filing a patent on your approach',
            'Finishing a polished MVP so you have something to show',
          ],
          answer: 1,
          explain: 'Earning the right costs days, not months: interview real sufferers, measure how often and how painfully the problem bites, and confirm existing (paid) attempts to solve it. It is cheap insurance against building something nobody wants — the step solution-first founders skip because building is more fun.',
        },
        {
          kind: 'free',
          prompt: 'For your leading candidate problem, report the demand signal you actually gathered in the platform task. What is the single strongest piece of evidence (a number, a trend, or a user quote), what did it fail to show, and does it earn you the right to build — or do you need to keep looking?',
          rubric: 'Strong answer: (1) cites CONCRETE signal the learner actually found (a Trends direction, a subreddit thread, an existing paid competitor, a quote) rather than generic optimism; (2) distinguishes real behavioral signal from vanity signals (big TAM, friends\' praise, tech novelty); (3) honestly states what the signal does NOT prove; (4) reaches a defensible verdict on whether the right is earned, and if not, names the next cheap test. Reward intellectual honesty about weak or null results.',
        },
      ],
      commitSummary: 'your first real demand signal is captured in "My venture" — the evidence, not the enthusiasm, that a problem is worth your year.',
    },

    // -----------------------------------------------------------------------
    {
      id: '13.3',
      module: 13,
      title: 'Direction: your 12-month thesis & operating cadence',
      estMinutes: 18,
      prerequisites: ['13.2'],
      artifactSlot: null,
      concept: `A direction is not a to-do list. It is a **thesis** plus a **loop**. The thesis is the one bet you are making for the next twelve months, expressed as a single number you are trying to move. The loop is the cadence at which you observe that number and correct course. Together they turn a founder from someone who is "busy" into a system that converges.

**The north-star metric.** Pick exactly one number that captures *delivered value*, not vanity. It must be able to go **down** — that is what makes it honest. "Total registered users" only ever rises and tells you nothing; "weekly active teams completing the core workflow" can fall, which means it actually measures whether you're delivering value this week. Everything else you track is an *input* that you believe drives this one output.

**The operating cadence.** A metric with no rhythm is a dashboard nobody reads. Set a cadence: a weekly review of the north-star and its inputs, a monthly check that the thesis still holds, and a quarterly decision to persevere or pivot. The cadence is what converts observation into correction.

**The 12-month thesis** is one sentence: *"If we move [north-star metric] from X to Y by doing [the one or two bets], we will have proven [the core hypothesis]."* Write it down. A thesis you can't state in a sentence is a thesis you can't test — and an untested thesis is just motion.`,
      reframe: {
        analogy: `A company is a **control system**. The north-star metric is your **setpoint** — the variable you're regulating. Reality is the plant, full of disturbances. Your operating cadence is the **sampling rate of the feedback loop**: each review measures the error between where the metric is and where you want it, and each decision is the corrective input. Sample too slowly and you're steering a ship by looking at where it was last quarter; the lag makes you over-correct and oscillate. Sample and correct at a sane rhythm and the system converges on the setpoint.`,
        breaks: `Real control loops assume a *known plant* and *bounded delay*. A startup has neither. The delay between an action and its effect on the metric can be **months** (today's product work shows up in next quarter's retention), so naive high-frequency correction chases noise. And the metric is only a **proxy** for the thing you truly want — which invites **Goodhart's law**: optimize the proxy hard enough and it decouples from real value (juice sign-ups, kill retention). So keep the loop, but resist two failure modes a PID controller never faces: reacting to noise because the true signal is delayed, and gaming the setpoint until it stops meaning anything.`,
      },
      workedExample: `**Early Facebook's north-star: "7 friends in 10 days."** Rather than steering by total registered users — a number that only climbs and hides churn — the growth team dug into server logs to find the *behavior* that separated users who stayed from users who quit, and reportedly landed on a specific activation threshold: a new user adding roughly **seven friends within their first ten days**. That single input predicted long-term retention, so the whole company could align on moving it (the exact "7 and 10" figures are widely cited and are best treated as illustrative of the method, not gospel numbers).

Notice what makes this a good north-star and cadence, not a vanity dashboard. First, it measures *delivered value* — a connected user who will come back — not a registration that might be a ghost. Second, it is a **leading** indicator: it moves *before* retention does, so a weekly cadence watching it gives the team time to correct rather than reading a lagging obituary. Third, it is honest — a bad week of onboarding makes the number *fall*, which is exactly the error signal a control loop needs. Your job in this lesson is to find your equivalent: the single earliest behavior that proves a user got real value, and to build a rhythm around moving it. (See the North Star Playbook cited below for the full method.)`,
      branch: {
        scenario: `You're setting your 12-month north-star. You must pick one number for the whole venture to align on. Three candidates are on the table. Which do you choose as your north-star metric?`,
        choices: [
          {
            label: 'Total registered users — it only goes up and always looks good in an update.',
            correct: false,
            consequence: `**The vanity trap.** A monotonically rising number is exactly the *wrong* setpoint: it can\'t fall, so it can never signal an error, which means it can\'t steer anything. It also invites Goodhart — you\'ll optimize sign-ups (spam invites, junk accounts) while real value quietly leaks. A north-star you can\'t fail is a north-star you can\'t learn from.`,
          },
          {
            label: 'Weekly active teams completing the core workflow — a value metric that can rise or fall.',
            correct: true,
            consequence: `**Correct.** This measures *delivered value* (a team actually got the job done), it\'s a **leading** indicator of retention and revenue, and crucially it can go **down** — a bad product week makes it fall, giving your cadence a real error signal to correct. That honesty is precisely what turns your operating loop into a control system instead of a highlight reel.`,
          },
          {
            label: 'Monthly revenue only — money is the ultimate truth, so track nothing else.',
            correct: false,
            consequence: `**Half-right, dangerously lagging.** Revenue is the truth, but it\'s a *trailing* indicator — by the time it moves, the product decisions that caused it are months old, so a loop that samples only revenue over-corrects on stale information. Keep revenue as an outcome, but pick a **leading** value metric as your north-star so your weekly cadence can steer before the revenue arrives, not after it\'s already gone.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'rank',
          prompt: 'Order the first 90 days of your venture into a sane sequence. Founders love to jump to building; put these in the order that earns the right to build and sets up a loop that converges.',
          items: [
            'Talk to 10+ real prospective users and confirm the problem is painful and recurring',
            'Choose your single north-star metric and write your one-sentence 12-month thesis',
            'Set your operating cadence (weekly review, monthly thesis check, quarterly pivot/persevere)',
            'Ship the smallest thing that lets a real user complete the core workflow',
            'Instrument the north-star metric so you can actually measure it each week',
            'Run your first weekly reviews and correct course based on the metric, not vibes',
          ],
          explain: 'Talk to users first (earn the right), then commit to a metric and a testable thesis, then set the cadence that will govern the loop. Only THEN build the smallest real workflow — and instrument the metric so the loop has a signal. Finally, run the reviews and correct. Building before you have a metric, a thesis, and a cadence is motion without convergence.',
        },
        {
          kind: 'document',
          title: 'Write your operating cadence',
          body: 'Turn your thesis into a running loop. Use the template to define your north-star metric, your weekly/monthly/quarterly rhythm, who reviews what, and the pivot/persevere decision rule. A cadence written down is a commitment; a cadence in your head is a wish. Fill it in for YOUR venture and save it to your workspace.',
          templateHref: '/templates/operating-cadence.md',
          docKey: '13.3#cadence',
          docLabel: 'My operating cadence',
        },
        {
          kind: 'resource',
          title: 'North-star metric & cadence (real method)',
          items: [
            { label: 'Amplitude — The North Star Playbook', url: 'https://amplitude.com/resources/north-star-playbook', note: 'The canonical guide to choosing a value-based north-star and its input metrics (source for the Facebook example).' },
            { label: 'Y Combinator Startup Library', url: 'https://www.ycombinator.com/library', note: 'On focus and choosing the one metric that matters right now.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Pick my north-star metric', kind: 'ask', question: 'Given my product and the value it delivers, propose 2–3 candidate north-star metrics that measure delivered value, can go down, and are leading rather than lagging — and help me choose one and name its key input metrics.' },
        { label: 'Write my one-sentence thesis', kind: 'ask', question: 'Help me write my 12-month thesis in the form "If we move [metric] from X to Y by doing [bet], we will have proven [hypothesis]" using my actual numbers and direction.' },
        { label: 'Stress-test my metric for Goodhart', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which property most clearly distinguishes a genuine north-star metric from a vanity metric?',
          options: [
            'It is always large and impressive to investors',
            'It only ever increases over time',
            'It can go DOWN, because it measures delivered value and therefore provides a real error signal',
            'It is denominated in dollars',
          ],
          answer: 2,
          explain: 'A north-star must be able to fall — that is what makes it an honest measure of whether you delivered value this period, and what gives your operating loop an error signal to correct. Metrics that only rise (total registered users) can never signal failure and invite Goodhart\'s law.',
        },
        {
          kind: 'mcq',
          prompt: 'In the control-system view of a company, what does the operating cadence correspond to, and what is its main startup-specific hazard?',
          options: [
            'The setpoint; the hazard is picking too high a target',
            'The sampling/feedback frequency; the hazard is that action-to-effect delay can be months, so over-frequent correction chases noise',
            'The plant; the hazard is that it never changes',
            'The disturbance; the hazard is that competitors cause it',
          ],
          answer: 1,
          explain: 'Cadence is how often you sample the metric and apply a corrective input. Because a startup\'s action-to-effect delay can be months (today\'s work shows in next quarter\'s retention), correcting too aggressively on every wiggle chases noise. Keep a steady rhythm and separate signal from lag.',
        },
        {
          kind: 'free',
          prompt: 'State your 12-month thesis in one sentence using the form "If we move [north-star metric] from X to Y by doing [the one or two bets], we will have proven [the core hypothesis]." Then name your weekly/monthly/quarterly cadence and one input metric you believe drives the north-star.',
          rubric: 'Strong answer: (1) states a SINGLE north-star metric that measures delivered value and can decrease (not a pure vanity/monotonic metric); (2) fills the thesis template with concrete X, Y, and a named bet; (3) specifies a real cadence (weekly review + monthly thesis check + quarterly pivot/persevere or similar); (4) names at least one plausible LEADING input metric that drives the north-star. Penalize vanity metrics, missing numbers, or a thesis that isn\'t falsifiable.',
        },
      ],
      commitSummary: 'your operating cadence is saved to "My venture" — a written control loop (metric + rhythm + decision rule) instead of a wish.',
    },

    // -----------------------------------------------------------------------
    {
      id: '13.4',
      module: 13,
      title: 'Commit: name it and open your workspace',
      estMinutes: 14,
      prerequisites: ['13.1', '13.2', '13.3'],
      artifactSlot: null,
      concept: `Everything so far has been analysis. This lesson is the flip from *thinking about* a venture to *having* one. The mechanism is small and almost embarrassingly concrete: give it a working name, claim a home for it online, and open your workspace. Naming is the act that instantiates the thing — it gives you and everyone you talk to a handle to refer to, and it converts "an idea I have" into "the company I'm building."

The trap here is **over-optimizing an easily reversible decision**. A name is a *two-way door*: you can walk back through it. Renaming a pre-launch venture costs an afternoon; the biggest companies in the world did it. So the standard for a working name is not "perfect and permanent" — it is "good enough, available, and claimable *today*." Pronounceable, not actively bad, with a domain and handles you can grab. That's it. The founders who spend three weeks and $4,000 on the "perfect" name before they have a single user have mistaken a two-way door for a one-way door, and paid for it in momentum.

Commitment is also **psychological infrastructure**. A named thing with a workspace and a URL you can send to a friend creates the lightweight accountability that separates founders from perpetual learners. You don't need to announce it to the world. You need to make it real enough to yourself that stopping would feel like abandoning something, not merely un-choosing an idea.`,
      reframe: {
        analogy: `Naming your venture is running \`git init\`. Up to now you had a design in your head — real thinking, but nothing instantiated, nothing with an identity the tools can track. \`git init\` costs a fraction of a second and changes the category of what you have: now there is a repository, a place commits accrue, a thing with a name that others can clone and reference. The name and workspace are the same move for your company — the cheap, near-instant act that turns a directory of loose thoughts into a tracked project with momentum.`,
        breaks: `\`git init\` creates an *empty* repo, and a name creates an *empty* company — the identifier is not the product, and confusing the two is fatal. A gorgeous name with no users is an initialized repo with no commits: impressive-looking, worth nothing. The analogy also flatters the ease of *renaming*: refactoring a package name is a mechanical find-and-replace, whereas renaming a venture that already has customers, SEO, and trust carries real switching cost. Pre-launch it's a two-way door; post-traction the door gets heavier. Name cheaply now precisely because it's cheap now.`,
      },
      workedExample: `**The most famous companies almost all started under a different name — and shipped anyway.** Google began as "BackRub." Amazon was briefly "Cadabra" (and Bezos also registered "Relentless" — relentless.com still redirects to Amazon today). Instagram was a bloated check-in app called "Burbn" before it was stripped down and renamed. Twitter was "twttr," born inside a podcasting company called Odeo. These are real, public, widely documented facts.

The point is not that names don't matter — they do, eventually. The point is that **not one of these founders let the name block the start**, and every one of these names was changed later without harming the company. The working name is a placeholder that lets you *begin*; the great name (if you even need one) is a problem you get to have *after* you have traction. So the transferable move is ruthless: pick a name that clears a low bar — sayable, not embarrassing, available as a domain and handles you can claim in the next ten minutes — and spend the energy you saved on the demand signal and product that actually decide your fate.`,
      branch: {
        scenario: `You're ready to commit, but you've stalled for a week on the name. The perfect .com is taken; the owner wants $4,000 for it. You're also considering paying a lawyer to file a trademark before you launch. Meanwhile you have zero users. What do you do?`,
        choices: [
          {
            label: 'Buy the $4,000 premium domain and file the trademark now — brand is everything, do it right the first time.',
            correct: false,
            consequence: `**Over-optimizing a two-way door.** You have no users and no proof the venture even survives contact with the market, yet you\'re spending real money and a week of momentum on a decision you can trivially revise later. Google, Amazon, and Instagram all shipped under throwaway names and renamed after traction. Spend the $4,000 and the week on demand and product, not on branding a company that hasn\'t earned a brand yet.`,
          },
          {
            label: 'Pick a good-enough available name, grab the domain and handles you CAN claim today, and start — rename later if it ever matters.',
            correct: true,
            consequence: `**Correct.** The bar is "sayable, not embarrassing, claimable today," not "perfect and permanent." A slightly different available domain (or a clean alternate TLD you actually own) plus matching handles is more than enough to instantiate the venture and start building momentum. Renaming pre-launch costs an afternoon — treat the name as the two-way door it is and walk through it now.`,
          },
          {
            label: 'Don\'t name it at all until you\'ve found product-market fit — a name now is premature.',
            correct: false,
            consequence: `**The opposite failure — no instantiation.** Refusing to name it keeps the venture as "an idea I have" instead of "the thing I\'m building," and you lose the psychological infrastructure — the handle, the URL, the lightweight accountability — that separates founders from perpetual learners. You don\'t need the perfect name; you need a name. Run \`git init\` now; you can rename the repo later.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'platformTask',
          title: 'Name your venture and open your workspace',
          body: 'This is the milestone: instantiate your real venture. Choose a working name that clears the bar — pronounceable, not embarrassing, and claimable TODAY. Use a name/domain/handle checker to confirm you can actually own a home for it (a clean domain and matching social handles). Do not chase the perfect name or a premium domain; a good-enough available name is the correct answer. Then record your chosen name — this initializes "My venture".',
          links: [
            { label: 'Namechk — check a name across domains and social handles at once', url: 'https://namechk.com/' },
            { label: 'Stripe Atlas — when you\'re ready to actually incorporate (later)', url: 'https://stripe.com/atlas' },
          ],
          steps: [
            'Brainstorm 5–10 working names that are sayable and describe or evoke what you do.',
            'Run your top candidates through Namechk; keep only ones with a claimable domain and handles.',
            'Pick one that clears the bar — do NOT hold out for the perfect/premium option.',
            'Claim the domain and 1–2 key handles so the name is really yours.',
            'Record your chosen working name below to initialize your venture workspace.',
          ],
          taskKey: '13.4#name',
          proofLabel: 'Your venture\'s working name (and the domain/handle you claimed)',
          proofKind: 'text',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'The canonical startup libraries — your Season 2 reference shelf',
          items: [
            { label: 'Y Combinator Startup Library', url: 'https://www.ycombinator.com/library', note: 'The essential free corpus — essays and talks on every stage of founding.' },
            { label: 'Paul Graham — Essays', url: 'https://paulgraham.com/articles.html', note: 'Start with "How to Get Startup Ideas", "Do Things that Don\'t Scale", and "Before the Startup".' },
            { label: 'Indie Hackers', url: 'https://www.indiehackers.com/', note: 'Transparent stories and numbers from founders of profitable small businesses — the antidote to survivorship bias.' },
            { label: 'Stripe Atlas — guides & incorporation', url: 'https://stripe.com/atlas', note: 'When you\'re ready to make it a legal entity; the guides are worth reading before you need them.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Help me name it', kind: 'ask', question: 'Given what my venture does and who it serves, brainstorm 10 working-name candidates that are pronounceable and claimable, and tell me how to sanity-check availability fast without over-investing in the name.' },
        { label: 'Am I over-optimizing the name?', kind: 'critique' },
        { label: 'What should I read first?', kind: 'ask', question: 'From the YC Library, Paul Graham\'s essays, and Indie Hackers, which 3 specific pieces should I read first given my stage and the direction I just committed to, and why?' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why should a first-time founder resist spending weeks (and thousands of dollars) perfecting the company name before launch?',
          options: [
            'Because names never matter at all',
            'Because a pre-launch name is a two-way door — cheap to change later — so the correct bar is "good enough and claimable today," not "perfect and permanent"',
            'Because trademarks are worthless',
            'Because the first name is legally binding and cannot be changed',
          ],
          answer: 1,
          explain: 'Renaming a pre-launch venture costs an afternoon — Google (BackRub), Amazon (Cadabra), and Instagram (Burbn) all did it. Over-investing in a name treats an easily reversible two-way door like a one-way door, and the momentum lost is the real cost. Ship under a good-enough available name and revisit only if traction ever warrants it.',
        },
        {
          kind: 'mcq',
          prompt: 'In the "git init" analogy for naming your venture, where does the analogy BREAK?',
          options: [
            'git init is slow, so naming should be slow too',
            'An initialized repo and a named company are both EMPTY — the identifier is not the product, and a great name with no users is worth nothing',
            'You can never rename a git repository',
            'git init requires a remote server, like a domain does',
          ],
          answer: 1,
          explain: 'git init instantiates an empty repo; naming instantiates an empty company. The break is confusing the identifier for the product: a beautiful name with zero users is an initialized repo with zero commits — impressive-looking, worthless. Also, renaming gets costlier after you have customers, SEO, and trust, so name cheaply NOW while it\'s a two-way door.',
        },
        {
          kind: 'free',
          prompt: 'State the working name you chose, the domain/handles you were able to claim, and — in one honest paragraph — why this name clears the "good enough and claimable today" bar rather than being the "perfect" name. Then write the single sentence that commits you: what you are building, for whom, and the north-star you set last lesson.',
          rubric: 'Strong answer: (1) gives a concrete chosen working name and the actual domain/handle availability they checked; (2) justifies it against the low bar (pronounceable, not embarrassing, claimable today) rather than perfection, showing they understand the two-way-door principle; (3) writes a clear one-sentence commitment naming the product, the target user, and the north-star metric from lesson 13.3; (4) reads as an actual commitment, not more deliberation. Reward decisiveness; penalize continued name-perfectionism or refusal to commit.',
        },
      ],
      commitSummary: 'your real venture is now initialized in "My venture" — a name, a claimed home online, and a committed direction. Season 1 was practice; from here, you\'re building the real thing.',
    },
  ],
}
