import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 30 — Capstone: the real launch & operating cadence  (SEASON 2 FINALE)
//
// This is the graduation module — the final capstone of the entire app.
// Season 1 taught the mechanics on a disposable startup.json. Season 2 turned
// the learner into a founder with a REAL venture: real demand signal, a real
// name and workspace, a real thesis and cadence. Module 30 closes the loop.
// The learner runs a launch pre-flight checklist, SHIPS for real on real
// platforms (Product Hunt, Show HN, communities), installs the operating
// system that keeps the company self-correcting (dashboard + cadence + decision
// log), and commits to a written 90-day plan. Every lesson is artifactSlot:null;
// the real company is tracked through the interactive blocks (two milestone
// platformTasks + the operating-cadence document write "My venture"). At the
// end, the real company is live and running. This is the founder's continuous
// loop — the app hands the controls over for good.
// ===========================================================================

export const module30: Module = {
  id: 30,
  season: 2,
  title: 'Capstone: the real launch & operating cadence',
  goal: 'Go live for real, install the operating system that keeps the company self-correcting, and commit to a 90-day plan. This is graduation — your real company is running.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '30.1',
      module: 30,
      title: 'The launch checklist',
      estMinutes: 16,
      prerequisites: [],
      artifactSlot: null,
      concept: `You are about to do the thing the whole app was for: put your real product in front of real strangers who can judge it, use it, and pay for it. The failure mode here is not cowardice — you have already committed. The failure mode is **launching with something quietly broken** that a two-minute check would have caught: the signup that 500-errors on mobile, the payment link pointing at test mode, the landing page with no way to actually contact you.

The discipline is to treat launch readiness as a **pre-flight checklist**, not a feeling. A checklist is not a to-do list of everything you could ever do — it is the short, ordered set of things that **must be true** before you leave the ground, each one a killer if skipped. Pilots do not skip the checklist because they are experienced; they run it *because* they are experienced enough to know that competence does not protect you from forgetting one dumb, fatal item under pressure.

Two moves make a launch checklist real. First, **rank** the items in the order that de-risks fastest and respects dependencies — you verify the product actually works before you write the announcement that drives traffic to it. Second, **separate must-haves from nice-to-haves**: the things that are truly blocking (it works, someone can pay, you can see who showed up) versus the things that feel urgent but are not (the perfect logo, the third blog post, the animated demo). Launching is a decision to accept that the nice-to-haves are not done. The checklist is what lets you make that decision *deliberately* instead of discovering the gap live, in front of your first hundred users.`,
      reframe: {
        analogy: `A launch checklist is a **pre-flight checklist**, and the reason it exists is a real engineering disaster. It is the same instrument you already trust as an engineer: the deployment runbook, the release gate, the "is the migration reversible, is the rollback tested, is the on-call paged" list you run before you push to production. You do not run it because you are junior; you run it because production punishes forgetting exactly one item, and no amount of skill immunizes a human under pressure against forgetting one item. The checklist externalizes the memory so your competence can go toward the things that actually need judgment.`,
        breaks: `A pre-flight checklist assumes a **known, bounded aircraft** — the failure modes are enumerable and stable, refined over decades of near-identical flights. Your first launch is not that: you cannot list every way a brand-new product meets a brand-new market, so a checklist gives you a false sense of completeness. Ticking every box guarantees the plane is airworthy; it guarantees *nothing* about whether anyone wants to fly to where you are going. The checklist protects you from the dumb, avoidable death (broken signup); it does not protect you from the real risk (nobody cares). So run it religiously to clear the avoidable failures off the table — then remember the un-checklistable question is still the whole game.`,
      },
      workedExample: `**The checklist was invented by a crash — Boeing's Model 299, October 30, 1935.** The Army Air Corps was evaluating Boeing's new long-range bomber (the prototype of what became the B-17). On its demonstration flight the aircraft took off, climbed, stalled, and crashed, killing the pilot — Major Ployer Hill, one of the most experienced test pilots in the Corps. The investigation found no mechanical fault. The plane was simply more complex than earlier aircraft, and the crew had forgotten a single step: they left the "gust locks" — a mechanism that locks the control surfaces on the ground — engaged. The press called the plane "too much airplane for one man to fly."

The response is the part worth internalizing. They did not conclude the plane was too complex, and they did not just demand more training for already-expert pilots. They created the **pilot's checklist**: a short, printed list of the critical steps for takeoff, flight, landing, and taxiing. With the checklist, the "unflyable" bomber went on to fly millions of miles. This is the origin story surgeon and writer Atul Gawande uses to open *The Checklist Manifesto* (2009) — his argument that in any field past a certain complexity, the checklist beats individual brilliance at preventing avoidable failure. The transferable lesson for your launch is exact: you are the expert pilot, your product is "too much airplane" to hold entirely in your head on launch morning, and the gust lock is your payment link left in test mode. Write the checklist. Run it out loud. Do not launch on memory.`,
      branch: {
        scenario: `It is the night before launch. Your product works on your machine, you have a decent landing page, and you are exhausted. Going down your list, you notice three loose ends: (A) you have never actually tested the signup-and-pay flow from a phone on a real network; (B) your logo is a rough placeholder you do not love; (C) you meant to write a second blog post. You have energy for roughly one of them tonight. What do you do?`,
        choices: [
          {
            label: 'Polish the logo — first impressions matter, and a rough logo makes the whole thing look amateur.',
            correct: false,
            consequence: `**Optimizing a nice-to-have while a must-have is unverified.** A placeholder logo has never killed a launch; a signup flow that 500-errors on mobile has killed thousands. You are spending your last unit of energy on the item with the smallest blast radius and leaving the load-bearing one — can a stranger actually give you money? — untested. This is polishing the paint while the gust locks are still engaged.`,
          },
          {
            label: 'Test the full signup-and-pay flow from a real phone on a real network, and fix whatever breaks — the logo and the blog post can wait.',
            correct: true,
            consequence: `**Correct.** The one item that MUST be true is that a real stranger, on the device most of them will use, can go from landing page to paying (or signing up) without hitting a wall. That is the gust-lock check — the single unverified step most likely to be fatal on launch day. The logo and the extra post are genuine nice-to-haves; launching means consciously accepting they are not done. Clear the killer, ship, and fix the cosmetics live.`,
          },
          {
            label: 'Do none of them and just launch — shipping fast is the whole point, and you can fix anything after.',
            correct: false,
            consequence: `**"Move fast" is not the same as "skip the pre-flight."** Speed is a virtue for reversible, cosmetic things — the logo, the copy, the second post. It is a vice for the one irreversible thing: the first hundred people only get one first impression, and if half of them hit a broken payment flow, you have burned scarce, un-refundable attention. The checklist is not bureaucracy that slows you down; it is the two minutes that protects the launch you only get to do once.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'rank',
          prompt: 'Put your launch-day sequence in the order that de-risks fastest and respects dependencies. Founders love to jump straight to "post the announcement"; order these so you never drive traffic to something you have not verified works.',
          items: [
            'Confirm the core flow works end to end (signup, core action, and payment) on a real phone on a real network',
            'Confirm you can SEE what happens: analytics/dashboard is live and events are firing',
            'Write the launch assets: the tagline, the demo, and the honest maker comment',
            'Line up your warm supporters and pick the launch day and hour',
            'Post the launch on your primary platform and add the maker comment',
            'Stay present for the first hours: answer every comment and fix small breakages live',
          ],
          explain: 'Verify the product works before anything else — a broken core flow makes every downstream step counterproductive. Next, make sure you can measure the launch, or you will learn nothing from it. Only then prepare assets, line up support, pick the time, and post. Finally, treat launch day as live support, not a fire-and-forget post. Announcing before the flow works and before you can measure it is the classic self-inflicted wound.',
        },
        {
          kind: 'categorize',
          prompt: 'Launch morning is a triage exercise: you will never have everything "done," so you must know what genuinely blocks the launch versus what only feels urgent. Sort each item into must-have-to-launch versus nice-to-have.',
          buckets: ['Must-have to launch', 'Nice-to-have (ship without it)'],
          items: [
            { text: 'A stranger can complete the core workflow without your help', bucket: 'Must-have to launch' },
            { text: 'A working way to collect payment or capture the signup', bucket: 'Must-have to launch' },
            { text: 'Analytics live so you can see traffic, signups, and where people drop off', bucket: 'Must-have to launch' },
            { text: 'A clear one-line description of what it is and who it is for', bucket: 'Must-have to launch' },
            { text: 'A way for users to reach you when something breaks', bucket: 'Must-have to launch' },
            { text: 'A professionally designed, final logo you love', bucket: 'Nice-to-have (ship without it)' },
            { text: 'A second and third blog post in the content pipeline', bucket: 'Nice-to-have (ship without it)' },
            { text: 'An animated product tour and a polished explainer video', bucket: 'Nice-to-have (ship without it)' },
            { text: 'Integrations with three tools no early user has actually asked for', bucket: 'Nice-to-have (ship without it)' },
          ],
          explain: 'Must-haves share one property: skipping them means a real stranger cannot get value, cannot pay, or cannot be measured — the launch fails silently. Everything in the nice-to-have column is real work you will eventually do, but none of it blocks a first paying user today. Launching is precisely the decision to accept the right column is unfinished so the left column can meet the market now.',
        },
      ],
      tutorHooks: [
        { label: 'Build my launch checklist', kind: 'ask', question: 'Given my specific product and how it delivers value, draft my personal launch pre-flight checklist: the ordered must-haves that have to be TRUE before I post, and the nice-to-haves I am allowed to ship without. Flag the one item most likely to be my "gust lock".' },
        { label: 'Find what would break on launch day', kind: 'critique' },
        { label: 'A harder readiness call', kind: 'harder', concept: 'deciding whether a known bug is a launch-blocker or an acceptable ship-with-it, by reasoning about blast radius and reversibility rather than perfectionism' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What is the defining property of a genuine launch-blocker (a must-have), as opposed to a nice-to-have?',
          options: [
            'It is the item that took the most engineering effort to build',
            'Skipping it means a real stranger cannot get value, cannot pay, or cannot be measured — so the launch fails at its core purpose',
            'It is whatever the founder feels most anxious about the night before',
            'It is the item that would most impress other founders',
          ],
          answer: 1,
          explain: 'A must-have is load-bearing for the launch itself: if it is missing, the core loop (a stranger gets value, you can capture payment/signup, and you can measure it) is broken. Effort, anxiety, and peer impressiveness are not the test — blast radius on the actual launch is. Nice-to-haves are real work that nonetheless does not block a first paying user.',
        },
        {
          kind: 'mcq',
          prompt: 'The pilot\'s checklist was invented after the 1935 Boeing Model 299 crash. What is the correct lesson for your launch?',
          options: [
            'Complex products should not be launched by a single founder',
            'Expert competence does not immunize you against forgetting one dumb, fatal step under pressure — so externalize the critical steps into a checklist you run every time',
            'More training always prevents launch failures',
            'Checklists guarantee your launch will succeed',
          ],
          answer: 1,
          explain: 'The crash was not caused by a bad plane or an unskilled pilot — an expert forgot one step (the gust locks). The response was not "more training" but a printed checklist that externalizes the critical steps. The checklist prevents the avoidable, self-inflicted failure; it does NOT guarantee success, because it cannot check whether anyone actually wants what you are launching.',
        },
        {
          kind: 'free',
          prompt: 'Write your own launch pre-flight checklist for your real venture. List your must-haves in the order you will verify them, name the single item most likely to be your "gust lock" (the quietly fatal one you could forget), and name two nice-to-haves you are consciously choosing to ship without.',
          rubric: 'Strong answer: (1) lists concrete must-haves specific to the learner\'s product that map to the real launch loop — the core workflow works, payment/signup captures, analytics can measure it, a clear description exists, users can reach them; (2) orders them so the product is verified before traffic is driven to it; (3) names a specific plausible "gust lock" (e.g. payment link in test mode, mobile signup untested) rather than a generic worry; (4) names two genuine nice-to-haves they will deliberately launch without, showing they understand launching as a conscious triage decision. Penalize vague lists with no ordering and no distinction between blocking and non-blocking items.',
        },
      ],
      commitSummary: 'no slot written — you leave this lesson with a pre-flight checklist: the ordered must-haves that must be true before you ship, and the nice-to-haves you will consciously launch without.',
    },

    // -----------------------------------------------------------------------
    {
      id: '30.2',
      module: 30,
      title: 'Launch it (for real)',
      estMinutes: 20,
      prerequisites: ['30.1'],
      artifactSlot: null,
      concept: `This is the lesson the whole app was building toward. Not a simulation, not a dry run — you post your real product to real platforms where real strangers will see it, judge it, use it, and tell you the truth. Everything before this was preparation. Now you ship.

A launch is not one event; it is a **coordinated post across the channels where your users already gather**, each with its own culture you must respect. Product Hunt is a curated daily leaderboard of new products — great for reach among early adopters, makers, and tech-forward buyers, and it rewards a strong tagline, a clear demo, a genuine maker comment, and a warm audience showing up in the first hours. Hacker News's "Show HN" is for things people can actually *try or run right now* — it is unforgiving of marketing language and hype, and it rewards a plain, honest title and a real backstory in the comments. Beyond those, the right niche communities — the subreddits, Discords, and forums where your specific users already complain about the problem you solve — often convert better than either, because the audience is pre-qualified.

The two hard truths of launch day. First, **a launch is not a fire-and-forget post; it is live customer support and community management for a day.** The maker who answers every comment, fixes small breakages live, and engages like a human consistently outperforms the one who posts and disappears. Second, **a launch is a beginning, not a verdict.** A quiet launch is data, not a death sentence — plenty of enduring companies had unremarkable launch days and grew through everything that came after. The point of launching is not to "win the day." It is to cross the line from "someone building something" to "someone whose product is live in the world, taking real feedback." That crossing is irreversible, and it is the whole point of graduating.`,
      reframe: {
        analogy: `Launching is **merging to \`main\` and cutting the release** after a long spell on a feature branch. On the branch you had total control and zero exposure — your code, your assumptions, no one else's reality touching it. Launch is the merge: the moment your work meets the shared trunk, real traffic, and inputs you did not author and cannot predict. And exactly like a real release, the work does not end at the merge button — it *begins* there. You watch the dashboards, you triage what the first real users hit, you hotfix the thing that only breaks under real load. The commit is the small, irreversible act; the operating that follows is the job.`,
        breaks: `A merge to \`main\` has a **rollback** — a bad release reverts, and by tomorrow it is as if it never shipped. Your launch does not cleanly roll back: the first hundred people formed an impression, the Show HN thread is part of the permanent record, the early tweet exists. So you cannot treat launch with a deployer's casual "we'll just revert" — the reputational blast radius of the *first* launch is uniquely un-revertible, which is exactly why lesson 30.1's checklist mattered. And unlike a merge, whose success is binary and immediate (tests pass or fail), a launch's real signal arrives over *weeks*, not in the launch-day upvote count. Do not mistake the green build of a #1-on-Product-Hunt day for the thing that actually matters, which is retention you will not see for a month.`,
      },
      workedExample: `**Gumroad's launch on Hacker News (2011).** Sahil Lavingia, then a young designer-engineer, built the first version of Gumroad — a dead-simple way to sell a file or product with a single link — over a short, intense build sprint. He then did the thing this lesson is about: he shipped it to a real platform where his users lived. He posted it to Hacker News, it climbed to the front page, and the wave of traffic from that single, honest "here is a thing I made, you can try it right now" post drove a flood of signups and Gumroad's first real users and sellers. (The story is documented across Lavingia's own writing and numerous interviews; treat exact figures as illustrative and the *shape* as the lesson.)

Notice what the launch actually did — and did not do. It did **not** anoint Gumroad a success on day one; the company's real story played out over years of grinding on retention, payments, and a long, public near-death and recovery. What the launch *did* was cross the line: it put a real product in front of real strangers on a platform they trusted, and let their behavior — signups, usage, feedback — replace Lavingia's assumptions with reality. The transferable moves are exact and repeatable for you: (1) ship something people can actually **use right now**, not a waitlist or a promise; (2) post it where your users already are, in the plain, honest register that community rewards; (3) show up as a human in the thread. The launch is not the finish line. It is the starting gun — and firing it is the entire point of today.`,
      branch: {
        scenario: `Your Product Hunt launch went out this morning. By midday it is doing "fine" — a modest number of upvotes, some comments, a trickle of signups, but you are clearly not going to be #1 product of the day. You feel the disappointment rising and the urge to conclude the idea is a dud. There are three real comments and two signup drop-off reports sitting unanswered. What is the right move?`,
        choices: [
          {
            label: 'Accept the launch flopped, pull back, and start planning a pivot — the market has spoken.',
            correct: false,
            consequence: `**Mistaking a launch-day rank for a verdict.** A middling Product Hunt position on one day tells you almost nothing about whether the business works — retention, which you will not see for weeks, is the real signal. Meanwhile you are abandoning the highest-value work available right now: real strangers left you real comments and told you exactly where they dropped off. Gumroad, and most enduring companies, did not win their launch day. Do not let a leaderboard you were never going to top talk you out of the feedback that is actually gold.`,
          },
          {
            label: 'Treat the rest of launch day as live support: answer every comment, dig into the two drop-off reports, and fix what you can in real time.',
            correct: true,
            consequence: `**Correct.** The upvote count is a vanity number; the comments and the drop-off reports are the product of the launch — direct, free signal from real users about exactly where your funnel leaks. The maker who engages like a human and fixes breakages live consistently outperforms the one chasing rank. A launch is a day of customer support, and the real payoff is not "#1 of the day" — it is the two funnel bugs you just found and the users who felt heard.`,
          },
          {
            label: 'Buy some upvotes and ask friends to mass-upvote to climb the leaderboard before the day ends.',
            correct: false,
            consequence: `**Optimizing the vanity metric, and often against the rules.** Manufactured upvotes are explicitly against the norms of these platforms (Show HN forbids soliciting votes outright, and Product Hunt polices vote manipulation), so you risk getting your launch penalized or removed. Worse, even if it worked, a gamed rank changes nothing real: it does not fix your funnel, retain a single user, or teach you anything. You would be spending your launch-day energy inflating the one number that does not matter while ignoring the feedback that does.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'platformTask',
          title: 'Ship it — launch your real product on a real platform',
          body: 'This is the milestone. Not a simulation: post your real, working product where real strangers will see it. Pick the platform whose culture fits your product and audience — Product Hunt for reach among early adopters and makers, Show HN for something people can run or try right now, or the specific niche community where your users already gather. Read that platform\'s norms first (each link goes to the real guide), prepare an honest tagline and maker comment, post it, and then stay present for the first hours answering every comment. Record the live URL of your launch as proof. Then breathe — your product is in the world.',
          links: [
            { label: 'Product Hunt — the launch page (start here to launch)', url: 'https://www.producthunt.com/launch' },
            { label: 'Product Hunt — the homepage/leaderboard', url: 'https://www.producthunt.com/' },
            { label: 'Hacker News — the official "Show HN" guidelines (read before posting)', url: 'https://news.ycombinator.com/showhn.html' },
            { label: 'Hacker News — submit', url: 'https://news.ycombinator.com/submit' },
            { label: 'Indie Hackers — share your launch with a founder-heavy audience', url: 'https://www.indiehackers.com/' },
            { label: 'Reddit r/SideProject — a community that welcomes real launches', url: 'https://www.reddit.com/r/SideProject/' },
          ],
          steps: [
            'Choose your primary platform by matching its culture to your product and audience (do not spray-and-pray all at once).',
            'Read that platform\'s norms — Show HN in particular is strict: something people can try now, a plain honest title, no hype, and never solicit upvotes.',
            'Prepare your assets: a clear tagline, a working link a stranger can use immediately, and a genuine maker comment telling the real backstory.',
            'Post it on your chosen day and hour, then add your maker comment.',
            'Stay present for the first hours: answer every comment as a human, and fix small breakages live.',
            'Paste the live URL of your launch below as proof that your real product is now in the world.',
          ],
          taskKey: '30.2#launch',
          proofLabel: 'The live URL of your launch (Product Hunt page, Show HN thread, or community post)',
          proofKind: 'url',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'Launch-platform playbooks (real guides, real norms)',
          items: [
            { label: 'Product Hunt — official Launch Guide', url: 'https://www.producthunt.com/launch', note: 'How the leaderboard works, timing (Tue-Thu, 12:01am Pacific), assets, and the maker comment. Read before you pick a date.' },
            { label: 'Hacker News — Show HN guidelines', url: 'https://news.ycombinator.com/showhn.html', note: 'The rules: something people can try now, a neutral title with no hype, a backstory comment, and never ask anyone to upvote. Violating these gets you flagged.' },
            { label: 'Hacker News — the guidelines', url: 'https://news.ycombinator.com/newsguidelines.html', note: 'The broader community norms that keep a Show HN from being killed — worth reading once.' },
            { label: 'Indie Hackers', url: 'https://www.indiehackers.com/', note: 'A founder community where sharing your launch, numbers, and lessons is the norm — good for durable feedback beyond launch day.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Pick my launch platform and write my post', kind: 'ask', question: 'Given my product, my ICP, and where my users already gather, recommend which platform I should launch on first (Product Hunt, Show HN, or a specific community), then draft my tagline and my honest maker comment in the register that platform rewards.' },
        { label: 'Stress-test my launch against the platform\'s rules', kind: 'ask', question: 'Check my planned launch against the actual norms of the platform I chose — especially the Show HN rules about being tryable-now, neutral titling, and not soliciting votes — and tell me what would get me flagged or ignored.' },
        { label: 'Reframe a quiet launch day', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why is the "Show HN" section of Hacker News a poor fit for a product that is only a waitlist or a landing page?',
          options: [
            'Show HN only allows open-source projects',
            'Show HN is explicitly for things people can try, run, or inspect right now — a landing page or market test is off-topic and will be flagged',
            'Show HN requires you to pay a submission fee',
            'Show HN bans any product that charges money',
          ],
          answer: 1,
          explain: 'Show HN\'s official guidelines are specific: it is for things people can actually try out, run, or inspect immediately. Blog posts, sign-up pages, waitlists, and market tests are off-topic because they cannot be tried. It also forbids hype in the title and soliciting upvotes. Matching a platform\'s culture is part of launching well.',
        },
        {
          kind: 'mcq',
          prompt: 'A founder\'s product gets a modest, middling response on launch day. What is the most accurate interpretation?',
          options: [
            'The idea is dead; time to pivot immediately',
            'A launch is a beginning, not a verdict — launch-day rank is a weak signal, and the real signal (retention) arrives over weeks',
            'The launch-day upvote count is the single most important metric for the business',
            'They should buy upvotes to climb the leaderboard',
          ],
          answer: 1,
          explain: 'Launch day is the starting gun, not the finish line. Rank and upvotes are largely vanity; whether users come back (retention) is the real signal and it takes weeks to read. Many enduring companies had unremarkable launches. The right response to a quiet launch is to mine the real feedback and keep operating, not to pivot on one day of noise or game a meaningless number.',
        },
        {
          kind: 'free',
          prompt: 'Report your real launch. Which platform did you post to and why did its culture fit your product? Paste or describe your launch URL, and then reflect honestly: what did the first strangers\' behavior and comments actually tell you — and what will you fix or change because of it? Resist grading yourself on upvotes.',
          rubric: 'Strong answer: (1) names the actual platform the learner launched on and justifies the choice by matching platform culture to product/audience (tryable-now for Show HN, early-adopter reach for Product Hunt, pre-qualified niche for a community); (2) references their real launch URL/post rather than a hypothetical; (3) extracts genuine signal from real user behavior and comments — a funnel drop-off, a confusion point, a feature request — rather than fixating on upvote count; (4) names a concrete change they will make. Reward treating the launch as a beginning and reading real feedback over vanity metrics; penalize grading success purely by launch-day rank.',
        },
      ],
      commitSummary: 'MILESTONE — your real product is live. The launch URL is saved to "My venture". You have crossed the irreversible line from someone building something to someone whose product is in the world, taking real feedback.',
    },

    // -----------------------------------------------------------------------
    {
      id: '30.3',
      module: 30,
      title: 'The operating system: metrics, cadence, decisions',
      estMinutes: 20,
      prerequisites: ['30.2'],
      artifactSlot: null,
      concept: `You are live. Now the company has to *run* — and run without you holding every variable in your head. The thing that makes a company self-correcting instead of founder-dependent is an **operating system**: three cheap, boring components that together form a control loop. Skip them and you will confuse motion for progress for months; install them and the company starts telling you the truth on a schedule.

**Component 1 — the dashboard (metrics you can actually see).** A metric you cannot see cannot be steered. You need one place — a real analytics tool, not a vibe — that shows your north-star metric and the handful of input metrics that drive it: acquisition, activation, retention, revenue. The rule is a small number of metrics that measure *delivered value*, not a wall of vanity numbers. If you cannot see, at a glance, whether last week was better or worse than the week before, you do not have a dashboard; you have a hope.

**Component 2 — the cadence (a clock).** A dashboard nobody looks at is decoration. The cadence is the rhythm at which you actually read the numbers and act: a short weekly review of the north-star and its inputs, a monthly look at financials and retention, a quarterly persevere-or-pivot decision. The cadence is what converts observation into correction — it is the sampling rate of your feedback loop.

**Component 3 — the decision log (memory).** Founders re-litigate the same decisions endlessly because they forget *why* they chose what they chose. An append-only decision log — date, decision, why, and when to revisit — turns scattered choices into an auditable trail. It kills circular debates, and months later it lets you check your past reasoning against reality, which is the only way you actually get better at deciding. Together these three — see, on a clock, with a memory — are the operating system that keeps a company converging instead of thrashing.`,
      reframe: {
        analogy: `The operating system is the **monitoring, alerting, and incident-review stack you would never run a production service without.** The dashboard is your metrics and graphs — the Grafana board showing the golden signals. The cadence is your alerting thresholds and your regular on-call review — the schedule on which someone actually looks and responds, rather than waiting for the pager to scream. The decision log is your incident/change log and post-mortem doc — the append-only record of what you changed, why, and what you learned, so the same outage does not get "solved" three different ways by three people who forgot the last time. No serious engineer ships a service with no dashboards, no alerts, and no post-mortems; the operating system is that same instinct applied to the company itself.`,
        breaks: `Production monitoring watches a system whose correct behavior is **known and specified** — you defined the SLO, so a breach is unambiguous. Your company has no spec: the "correct" value of your north-star is unknown, the action-to-effect delay can be *months* (this week's product work shows up in next quarter's retention), and the metric is only a **proxy** for the value you actually want. That last point invites **Goodhart's law** — optimize the proxy hard enough and it decouples from real value (juice signups, quietly kill retention). So run the loop, but resist two failure modes a real monitoring stack never faces: reacting to weekly noise because the true signal is delayed, and gaming your own dashboard until the number stops meaning anything. The instruments are the same; the discipline required to read them honestly is harder.`,
      },
      workedExample: `**Amazon's Weekly Business Review — the operating system, run at scale.** In *Working Backwards* (2021), Colin Bryar and Bill Carr — both long-tenured Amazon executives — describe the metrics discipline that ran the company: a **Weekly Business Review (WBR)** built on a shared metrics deck, reviewed on a fixed weekly cadence, with a hard distinction between two kinds of metric. **Output metrics** (revenue, profit, stock price) are the results you ultimately want but *cannot directly control and that lag*. **Controllable input metrics** are the specific, upstream actions you *can* directly move week to week — selection added, price competitiveness, in-stock rate, page load time — that Amazon believed would, in time, drive the outputs. The WBR obsessively steers the *inputs*, on the theory that if you get the controllable inputs right, the outputs follow.

Three transferable ideas, and they map exactly onto the three components above. First, **measure inputs you can control, not just outputs you can only pray for** — your weekly review should be about the levers you can actually pull this week, not the revenue you cannot directly touch. Second, the value is in the **fixed cadence**: the same metrics, reviewed at the same rhythm, so that a change from last week is *visible* and demands a response — that regularity is what turns a dashboard into a control loop. Third, the review is where **decisions get made and recorded**, not just where numbers get admired. You are not Amazon and you do not need its machinery — but a solo founder with one north-star, five input metrics, a weekly 30-minute review, and an append-only decision log is running the *same operating system*, just sized for one. Install it now, while it is cheap and the habits are forming, not after you are drowning.`,
      branch: {
        scenario: `Three weeks post-launch, your weekly numbers are jumping around: signups up 40% one week, down 25% the next, activation wobbling. In this week's review you feel the pull to react hard to the latest dip — rip out the onboarding flow and rebuild it, because this week was bad. What does a disciplined operating cadence tell you to do?`,
        choices: [
          {
            label: 'React now: the number dropped, so tear out onboarding and rebuild it this week — speed of response is everything.',
            correct: false,
            consequence: `**Chasing noise because the signal is delayed.** At tiny volumes, week-to-week swings are mostly noise, and the action-to-effect delay means this week's dip may reflect something from two weeks ago, not your onboarding. Ripping out a flow on one bad data point is over-correction — the exact failure mode of sampling a slow, noisy system too aggressively. You will thrash, and worse, you will never learn whether the rebuild helped because you changed everything at once.`,
          },
          {
            label: 'Look at the trend across several weeks and the input metrics, form ONE hypothesis about the biggest leak, run a single measurable change, and log the decision and when to revisit it.',
            correct: true,
            consequence: `**Correct.** This is the operating system working as designed: read the *trend*, not the last dip; drill from the wobbling output into the input metric that best explains it; make one change you can actually attribute; and write it in the decision log with a revisit date so future-you can check the reasoning against reality. That is a control loop correcting on signal, not a founder flinching at noise.`,
          },
          {
            label: 'Stop looking at the numbers for a month — they are too noisy to be useful right now anyway.',
            correct: false,
            consequence: `**The opposite failure — turning off the instruments.** Noise is a reason to look at *trends and inputs*, not a reason to go blind. Abandon the cadence and you lose the one thing that makes the company self-correcting; you will drift for a month on vibes and discover problems far too late. The discipline is to keep the loop running but read it maturely — smooth the noise, watch the leading inputs, and act on signal.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'document',
          title: 'Write your operating cadence',
          body: 'This is the written control loop that runs your company. Use the template to define your one metric that matters this quarter, your daily/weekly/monthly/quarterly rhythm, and — crucially — your append-only decision log. A cadence in your head is a wish; a cadence written down is a commitment you can actually keep and audit. Fill it in for YOUR real venture and save it to your workspace. This is the operating system you will run every week from now on.',
          templateHref: '/templates/operating-cadence.md',
          docKey: '30.3#os',
          docLabel: 'My operating cadence & decision log',
        },
        {
          kind: 'platformTask',
          title: 'Stand up your real metrics dashboard',
          body: 'Install the eyes of your operating system. Pick a real analytics tool, connect it to your live product, and get your north-star metric plus a few input metrics (acquisition, activation, retention) actually showing up on one screen. Do not build a wall of vanity numbers — a small number of metrics that measure delivered value. PostHog is the common default for technical founders (open-source, generous free tier, product analytics in one place); Plausible is simpler if you only need privacy-friendly website analytics. Confirm events are firing from your real product, then record the URL of your live dashboard as proof.',
          links: [
            { label: 'PostHog — product analytics, session replay, and dashboards (generous free tier)', url: 'https://posthog.com/' },
            { label: 'Plausible — simple, privacy-friendly website analytics', url: 'https://plausible.io/' },
            { label: 'Amplitude — product analytics and the North Star Playbook', url: 'https://amplitude.com/' },
            { label: 'Amplitude — The North Star Playbook (choosing the metric your dashboard centers on)', url: 'https://amplitude.com/resources/north-star-playbook' },
          ],
          steps: [
            'Choose a tool: PostHog for product analytics on a technical product, Plausible if you mainly need clean website analytics.',
            'Install it in your live product and confirm real events are firing (not just a test page view).',
            'Put your north-star metric front and center, plus a small number of input metrics: acquisition, activation, and early retention.',
            'Sanity-check it against the "can go down / measures delivered value" test — cut any pure vanity number.',
            'Paste the URL of your live dashboard below as proof your operating system can now see.',
          ],
          taskKey: '30.3#dashboard',
          proofLabel: 'The URL of your live metrics dashboard',
          proofKind: 'url',
        },
      ],
      tutorHooks: [
        { label: 'Design my dashboard', kind: 'ask', question: 'Given my product and its north-star metric, tell me exactly which 4-6 metrics belong on my dashboard (north-star plus input metrics for acquisition, activation, and retention), which are outputs vs controllable inputs, and which vanity numbers to leave OFF.' },
        { label: 'Set up my weekly review', kind: 'ask', question: 'Help me design a 30-minute weekly review ritual for my venture: what to look at in order, how to tell a real trend from noise given my low volume, and how to decide when a dip warrants a change versus watchful waiting.' },
        { label: 'Stress-test my metrics for Goodhart', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In Amazon\'s Weekly Business Review, why does the discipline emphasize controllable INPUT metrics over output metrics like revenue?',
          options: [
            'Because revenue does not matter to Amazon',
            'Because outputs lag and cannot be directly controlled, while controllable inputs are the upstream levers you can actually move this week to drive those outputs later',
            'Because input metrics are always larger and more impressive',
            'Because output metrics are impossible to measure',
          ],
          answer: 1,
          explain: 'Outputs (revenue, profit) are what you ultimately want but they lag and you cannot touch them directly. Controllable input metrics — the specific upstream actions you can move week to week — are the levers a review can actually act on, on the theory that getting the inputs right makes the outputs follow. A weekly cadence steering inputs is a real control loop; admiring lagging outputs is not.',
        },
        {
          kind: 'mcq',
          prompt: 'What is the specific job of the decision log in the operating system?',
          options: [
            'To impress investors with how many decisions you make',
            'To record each decision, its rationale, and when to revisit it — killing circular re-litigation and letting you later check your reasoning against reality',
            'To replace the dashboard and the cadence',
            'To track how many hours the founder works',
          ],
          answer: 1,
          explain: 'The decision log is the memory of the operating system. An append-only record of what you decided, why, and when to revisit stops the same debate from being re-fought endlessly and — months later — lets you audit your past reasoning against what actually happened, which is the only reliable way to improve at deciding. It complements, not replaces, the dashboard (eyes) and cadence (clock).',
        },
        {
          kind: 'free',
          prompt: 'Describe your venture\'s operating system in concrete terms: (1) your north-star metric and two input metrics you will put on your dashboard, and where you will see them; (2) your weekly / monthly / quarterly cadence — what you will review at each; and (3) one recent real decision you would log, with its rationale and a revisit date.',
          rubric: 'Strong answer: (1) names a north-star metric that measures delivered value and can go down, plus two plausible LEADING input metrics, and names the actual tool/dashboard they will use; (2) specifies a real cadence with distinct weekly (north-star + inputs), monthly (financials + retention), and quarterly (persevere/pivot) content; (3) writes a concrete decision-log entry with a genuine decision, an honest rationale, and a revisit trigger/date. Penalize vanity-only metrics, a dashboard with no home, or a cadence with no distinct rhythm. Reward evidence they will actually run the loop, not just admire numbers.',
        },
      ],
      commitSummary: 'your operating cadence and decision log are saved to "My venture", and your live dashboard URL is recorded. The company can now see itself, on a clock, with a memory — a control loop that keeps it self-correcting.',
    },

    // -----------------------------------------------------------------------
    {
      id: '30.4',
      module: 30,
      title: 'Your 90-day plan & the road ahead',
      estMinutes: 18,
      prerequisites: ['30.1', '30.2', '30.3'],
      artifactSlot: null,
      concept: `This is graduation. Your product is live, your operating system is running, and the app is about to hand you the controls for good. The last thing a founder needs before flying solo is not another framework — it is a **plan for the next 90 days** and an honest picture of the loop they will run forever.

**Why 90 days.** A quarter is the natural planning horizon for a small company: long enough that meaningful things can change (a metric can move, a channel can be proven or killed, a cohort can be observed), short enough that you cannot hide from reality or let a bad bet run for a year. The discipline of a 90-day plan is **brutal prioritization**: you pick the *one* thing that most needs to be true in 90 days — usually a single number on your dashboard moved from X to Y — and you rank everything else against it. Most of what feels urgent will not make the list, and that is the point. A plan that tries to do ten things is a plan to do none of them well.

**The founder's continuous loop.** Here is the truth the whole app has been building to: **there is no finish line.** The company you just launched does not "get finished." What you do instead, forever, is run a loop — observe the metric, form a hypothesis, run the smallest experiment, read the result, decide, and go again. Every module you completed is one turn of that loop made explicit; from here you run it yourself, on your own cadence, with real stakes. The founders who last are not the ones with the best single idea. They are the ones who **keep running the loop with intellectual honesty** long after the initial excitement is gone — correcting on signal, killing what does not work, and staying, always, on Day 1.`,
      reframe: {
        analogy: `The road ahead is a **REPL, not a compiled program that terminates.** You spent Season 1 thinking of the business like a batch job — write it all correctly, compile, run, done. It is not that. It is a read-eval-print loop: you enter one small change (an experiment), the market evaluates it (real user behavior), it prints a result (your metrics move), and you read that result to decide the next input. The 90-day plan is just committing to the *next several evaluations* — the specific inputs you will feed the loop this quarter — rather than pretending you can write the whole program up front. The company is never "done running"; you are never not at the prompt.`,
        breaks: `A REPL gives **instant, unambiguous** evaluation — you type, you see the result, the state is fully known. The market\'s REPL is cruelly slow and noisy: the "print" for a retention experiment takes weeks, the result is entangled with a dozen confounds you did not control, and the same input can print differently depending on timing and luck. So you cannot iterate as fast or as cleanly as at a real prompt, and you must resist the twin errors of reading noise as signal (over-reacting to one evaluation) and never committing an input at all (endless analysis at the prompt). The loop is real and it is the right model — but running it on a human market demands a patience and honesty that a real REPL, with its instant true answers, never asks of you.`,
      },
      workedExample: `**Amazon's "Day 1" — the continuous loop, stated by the person who ran it longest.** Jeff Bezos titled Amazon's very first shareholder letter, in 1997, "It\'s Still Day 1," and then reused that phrase relentlessly for over two decades. He named the building he worked in "Day 1." He explained the discipline plainly in the 2016 letter: he was asked what "Day 2" looks like, and answered — "Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death. And that is why it is always Day 1." (These are real, public shareholder letters; the 1997 letter is reprinted in every subsequent annual report and the 2016 letter is widely quoted.)

The point for your graduation is exact. "Day 1" is a refusal to ever treat the company as *finished* — a commitment to keep running the loop (obsess over customers, decide fast, resist proxies and process for their own sake) with the same urgency as on the first day, precisely when success makes it tempting to coast. That is the founder\'s continuous loop, named by someone who compounded it for twenty-plus years. Your 90-day plan is your first deliberate turn of that loop as a real, solo founder: pick the one number that most needs to move, commit to the two or three bets that will move it, and set the date you will read the result and decide again. You are not graduating *out* of the loop. You are graduating *into* it — with a real company, running, that is now entirely yours.`,
      branch: {
        scenario: `You sit down to write your first 90-day plan. Your head is full of everything you "should" do: rebuild onboarding, start a content engine, add the three integrations users mentioned, redesign the landing page, launch on a second platform, set up a referral program, and talk to more users. You have limited hours and one real company. What makes this a plan rather than a wish list?`,
        choices: [
          {
            label: 'Put all seven on the plan with deadlines — ambition is good, and a real founder should be able to juggle everything.',
            correct: false,
            consequence: `**A list of everything is a plan for nothing.** Seven parallel priorities on a solo founder\'s calendar means each gets a fraction of the focus needed to actually move, and nothing reaches the depth where it changes a metric. This is the exact failure the 90-day discipline exists to prevent: without brutal prioritization you will be busy for a quarter and have moved no number. A plan is defined by what it says no to.`,
          },
          {
            label: 'Pick the ONE metric that most needs to move in 90 days, choose the two or three bets most likely to move it, cut the rest for now, and set the date you will read the result.',
            correct: true,
            consequence: `**Correct.** This is what turns a wish list into a plan: one focusing metric, a tiny number of bets ranked by their likely effect on it, an explicit "not now" for everything else, and a date to evaluate and decide again. The cut items are not abandoned — they are queued for a future turn of the loop. Brutal prioritization against a single 90-day outcome is the whole discipline, and it is what a solo founder\'s scarce hours demand.`,
          },
          {
            label: 'Skip the plan and just stay reactive — respond to whatever users and the metrics throw at you day to day.',
            correct: false,
            consequence: `**Pure reactivity is drift wearing the costume of responsiveness.** Without a 90-day focus you will lurch from one loudest-voice request to the next, never accumulating enough progress on any front to move a real number. Being responsive to signal is good; having no thesis about what most needs to be true this quarter means you are running the loop with no direction — evaluating random inputs and calling it iteration.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'scenario',
          title: 'Prioritizing your first 90 days',
          intro: 'You are drafting the plan that will govern your next quarter as a real, solo founder. Each decision below is a real prioritization fork. There is a disciplined answer and a seductive trap — choose the one that keeps a scarce-hours founder converging on a single outcome rather than thrashing across ten.',
          decisions: [
            {
              situation: 'First, the shape of the plan. What sits at the top?',
              options: [
                { label: 'A single focusing metric to move from X to Y in 90 days, with everything else ranked against it', correct: true, outcome: 'Right. One number, one horizon. It gives every downstream choice a test: does this move the metric, or not? That is what makes the rest of the plan decidable instead of a wish list.' },
                { label: 'A list of every feature and channel you could pursue, so nothing gets missed', outcome: 'This is a backlog, not a plan. Without one focusing outcome, nothing tells you what to cut, and a solo founder who chases everything moves nothing. Lead with the single metric.' },
                { label: 'A revenue target for the year, with the 90 days left unspecified', outcome: 'A distant output with no near-term inputs is not steerable. Ninety days is the horizon where you can actually act and read results; anchor there, on a metric you can move.' },
              ],
            },
            {
              situation: 'You have room for only a few bets under that metric. How do you choose them?',
              options: [
                { label: 'The two or three bets with the highest expected effect on the focusing metric, even if less fun than the others', correct: true, outcome: 'Correct. Rank bets by likely impact on the one metric, not by novelty or how enjoyable they are to build. Two or three done deeply beat seven done shallowly.' },
                { label: 'Whatever is most technically interesting to build this quarter', outcome: 'Founder-fun is a real trap — it optimizes your enjoyment, not the metric. The AI feature you love does not make the list unless it moves the number. Rank by impact.' },
                { label: 'Whatever the single loudest user demanded most recently', outcome: 'One loud voice is a sample of one. Weigh requests by how many real users they represent and how much they move your metric, not by volume or recency.' },
              ],
            },
            {
              situation: 'Halfway through the quarter, a shiny new opportunity appears — a chance to launch on a big new platform next week. It is genuinely exciting and completely off your 90-day plan. What do you do?',
              options: [
                { label: 'Log it, judge it against the focusing metric, and defer it to the next quarter unless it clearly beats a current bet', correct: true, outcome: 'Correct. Not "never" — "not now, unless it demonstrably beats what it would displace." That is the discipline: the plan can change deliberately, but not by every shiny distraction mid-quarter. Protect the focus you chose.' },
                { label: 'Drop everything and chase it — you have to move fast on opportunities', outcome: 'This is how quarters evaporate. If every mid-flight shiny thing derails the plan, you never finish a single bet deeply enough to move the metric. Opportunities get evaluated against the plan, not exempted from it.' },
                { label: 'Ignore it completely without a thought — the plan is the plan', outcome: 'Too rigid. The loop is supposed to incorporate new signal. The move is not to ignore the opportunity but to evaluate it honestly against your focusing metric and current bets — then usually defer, sometimes swap.' },
              ],
            },
          ],
        },
        {
          kind: 'platformTask',
          title: 'Write and commit your 90-day plan',
          body: 'The final milestone of the whole app. Write your real 90-day plan and commit it to your workspace. Keep it ruthlessly short: the ONE metric you will move from X to Y, the two or three bets you believe will move it, what you are explicitly NOT doing this quarter, and the date you will read the result and decide again. This is not an exercise — it is the plan you will actually run as a solo founder starting now. Write it, commit it, and start the loop.',
          links: [
            { label: 'Amazon — Jeff Bezos 1997 shareholder letter ("It\'s Still Day 1")', url: 'https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders' },
            { label: 'Y Combinator Startup Library — for whatever your 90-day bets require next', url: 'https://www.ycombinator.com/library' },
          ],
          steps: [
            'Write the ONE focusing metric and its 90-day target: move [metric] from X to Y.',
            'List the two or three bets most likely to move it, ranked by expected impact.',
            'Write your explicit "not now" list — the tempting things you are deliberately deferring this quarter.',
            'Set the review dates: your weekly cadence and the specific date you will judge whether the 90-day metric moved.',
            'Commit the plan to your workspace below — this is the plan you start running today.',
          ],
          taskKey: '30.4#plan',
          proofLabel: 'Your 90-day plan: the one metric (X to Y), your 2-3 bets, your "not now" list, and the review date',
          proofKind: 'text',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'The road ahead — post-launch & continuous-learning shelf',
          items: [
            { label: 'Y Combinator Startup Library', url: 'https://www.ycombinator.com/library', note: 'Your standing reference for every stage past launch — growth, hiring, fundraising, and more, all free.' },
            { label: 'Lenny\'s Newsletter', url: 'https://www.lennysnewsletter.com/', note: 'The most widely read newsletter on product, growth, and retention — concrete tactics for the loop you are now running.' },
            { label: 'First Round Review', url: 'https://review.firstround.com/', note: 'Deep, well-reported essays on the operational realities of building a company past day one.' },
            { label: 'Indie Hackers', url: 'https://www.indiehackers.com/', note: 'Transparent numbers and post-launch stories from founders of real, profitable small companies — the antidote to survivorship bias.' },
            { label: 'Paul Graham — Essays', url: 'https://paulgraham.com/articles.html', note: 'Re-read "Do Things that Don\'t Scale" and "How to Get Startup Ideas" now that they are no longer theory but your daily reality.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Draft my 90-day plan', kind: 'ask', question: 'Given my live product, my north-star metric, and where I am post-launch, help me write a ruthlessly prioritized 90-day plan: the one metric to move from X to Y, the two or three highest-impact bets, and the explicit "not now" list I should cut to stay focused.' },
        { label: 'Pressure-test my priorities', kind: 'critique' },
        { label: 'How do I keep running the loop?', kind: 'ask', question: 'Now that the app is ending, help me design the personal weekly ritual that keeps me running the founder\'s continuous loop with honesty — how to observe, hypothesize, experiment, and decide every week without drifting into either noise-chasing or analysis paralysis.' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What is the defining discipline that turns a 90-day plan into a real plan rather than a wish list?',
          options: [
            'Including as many priorities as possible so nothing is missed',
            'Brutal prioritization: one focusing metric to move from X to Y, a tiny number of bets ranked by their effect on it, and an explicit "not now" for everything else',
            'Setting a large annual revenue target and working backward vaguely',
            'Staying purely reactive to whatever users request each day',
          ],
          answer: 1,
          explain: 'A plan is defined by what it says no to. A single 90-day focusing metric gives every candidate bet a pass/fail test (does it move the number?), forces the two-or-three-bet limit a solo founder\'s hours demand, and turns the rest into a deliberate "not now" queue. Everything-lists, vague annual targets, and pure reactivity all fail because none of them concentrates scarce hours on one movable outcome.',
        },
        {
          kind: 'mcq',
          prompt: 'Bezos\'s "It\'s always Day 1" and the "REPL, not a compiled program" reframe both make the same core point about the road ahead. What is it?',
          options: [
            'A company is a batch job: design it correctly once, ship it, and it is finished',
            'There is no finish line — you run a continuous observe-hypothesize-experiment-decide loop forever, and the founders who last are the ones who keep running it with honesty',
            'Once you launch, the hard work is over',
            'Success means reaching a state of stasis where nothing needs to change',
          ],
          answer: 1,
          explain: 'Both images reject the "compiled program that terminates" model. The company is never done; you stay at the prompt, feeding the loop small experiments and reading real results forever. Bezos\'s warning is that treating it as finished — "Day 2" / stasis — leads to decline. Graduating means graduating INTO the loop, not out of it.',
        },
        {
          kind: 'free',
          prompt: 'Write your real 90-day plan as your final commitment: the ONE metric you will move from X to Y, the two or three bets you believe will move it, the tempting things you are explicitly NOT doing this quarter, and the date you will read the result. Then, in one honest sentence, state the founder\'s continuous loop you are committing to run from here.',
          rubric: 'Strong answer: (1) names a SINGLE focusing metric with a concrete X and Y over 90 days, tied to the learner\'s real dashboard/north-star; (2) lists only two or three bets, chosen for likely impact on that metric rather than novelty or fun; (3) includes an explicit "not now" list, demonstrating the prioritization discipline of cutting tempting work; (4) sets a real review/decision date; (5) articulates the continuous loop (observe, hypothesize, experiment, decide, repeat) as an ongoing commitment, showing they understand there is no finish line. Penalize sprawling everything-lists, missing numbers, no "not now", or treating launch as the end. Reward decisiveness, focus, and intellectual honesty about running the loop.',
        },
      ],
      commitSummary: 'MILESTONE — your 90-day plan is committed to "My venture". This is graduation. Your real company is live, instrumented, self-correcting, and pointed at one clear outcome for the next quarter. The app has taught you every turn of the loop; from here you run it yourself, on Day 1, forever. Go build. The company is yours, and it is running.',
    },
  ],
}
