import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 16 — Real go-to-market execution  (SEASON 2)
//
// Season 2 is "Building for Real". By now the learner has a named venture, a
// demand signal, and a thesis. This module makes them do the thing engineers
// most want to defer: put the product in front of actual strangers and read
// the numbers. Every lesson is hands-on — a real landing page, one real
// channel, real analytics, and one real campaign — tracked through the
// interactive `blocks` (platformTask/document write the "My venture"
// workspace), not through startup.json slots. All lessons are artifactSlot:null.
// ===========================================================================

export const module16: Module = {
  id: 16,
  season: 2,
  title: 'Real go-to-market execution',
  goal: 'Actually put your product in front of real strangers: stand up a landing page, one channel, analytics, and run a real first campaign — then read the numbers.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '16.1',
      module: 16,
      title: 'Ship a landing page & capture intent',
      estMinutes: 18,
      prerequisites: ['13.4'],
      artifactSlot: null,
      concept: `A landing page is the cheapest instrument you own for converting attention into **evidence**. Its job is not to look good; its job is to make a stranger take one measurable action that reveals real intent. And there is a hard hierarchy of what counts as intent. A pageview is noise. A "like" is a compliment. An **email address** is a small, costly commitment — a stranger handing you a way to reach them because they want what you described. A pre-order or a booked call is stronger still. Design the page to harvest the strongest intent the stranger will realistically give this early.

Three disciplines make a page an instrument rather than a brochure:

- **One promise, one call to action.** The page answers "what do I get, and what do I do next?" in the first screen. Every extra choice you offer dilutes the one measurement you came for.
- **Capture, don't just inform.** If a visitor can leave impressed but untracked, you learned nothing. The single CTA must write a row somewhere — an email, a signup, a click you can count.
- **Instrument before you drive traffic.** A page with no analytics is a dyno with the sensor unplugged: you run the engine and learn nothing. Put the tag on before the first visitor arrives, or the first visitors are wasted.

The output of this lesson is not a beautiful site. It is a live URL that a stranger can hit and that quietly records whether they wanted in.`,
      reframe: {
        analogy: `A landing page is an **engine dyno**. You do not put a new engine straight into a car and drive it onto the motorway to find out if it works. You bolt it to a dynamometer — a rig that loads the engine and measures real output — and read torque and power before you trust it on the road. The landing page is that rig for your idea: it puts your promise under a real load (strangers who owe you nothing) and measures actual output (emails, signups) before you commit the expensive engineering of building the product.`,
        breaks: `A dyno measures a **finished** engine; a landing page measures a **promise** of a product that does not exist yet. That gap is the danger. You can tune copy until sign-ups spike and conclude "demand!" — when you have really only proven the *pitch* converts, not that the eventual product will. Worse, you can measure intent you cannot fulfil: a headline that overpromises harvests emails you will disappoint. So read landing-page signal as evidence about the *message and the appetite*, confirmed only when the product you actually ship keeps those people. The dyno tells you the engine spins; it does not tell you the car survives the road.`,
      },
      workedExample: `**Buffer's smoke-test landing page (Joel Gascoigne, 2010).** Before writing the social-scheduling product, Gascoigne built a tiny two-step landing page. Page one described what Buffer would do and showed a single button: "Plans and Pricing." Clicking it did not open a checkout — it revealed a short message: "Hello! You caught us before we're ready," plus an email field to be notified. The click on "Plans and Pricing" measured *purchase intent*; the email measured *willingness to be pursued*. Only after enough strangers clicked through both steps did he build the product, reportedly reaching his first paying customers within about seven weeks. (Widely documented in Gascoigne's own "Idea to Paying Customers in 7 Weeks" write-up; treat exact figures as illustrative of the method.)

Notice the engineering. He did not ask friends. He did not build first. He built the cheapest artifact that produces *graded* behavior — a click and an email from a stranger — and he instrumented it so the behavior was counted, not guessed. The transferable move is exactly this: publish a real page with one promise and one intent-capturing CTA, put analytics on it before you share it, and let the click-through be your dyno reading. Your job this lesson is to get that rig live at a real URL today, not to perfect it.`,
      branch: {
        scenario: `Your landing page is written and you must choose its single primary call to action before you share it with real strangers. Which do you ship?`,
        choices: [
          {
            label: 'A prominent "Learn more" button that just scrolls the page down to more copy.',
            correct: false,
            consequence: `**A brochure, not an instrument.** "Learn more" captures nothing — a visitor can read, nod, and leave, and you will never know they existed. You will drive traffic and harvest zero evidence. Every landing page needs exactly one action that writes a row you can count; scrolling is not that action.`,
          },
          {
            label: 'One clear CTA: "Join the waitlist" with a single email field, wired to your analytics.',
            correct: true,
            consequence: `**Correct.** An email is the cheapest strong intent a stranger will give you this early — a real, costly signal that they want in. One promise, one field, one recorded action: that is the whole instrument. Now every visitor either converts (evidence) or does not (also evidence), and you can read the rate.`,
          },
          {
            label: 'A 12-question qualification survey the visitor must finish before you tell them anything.',
            correct: false,
            consequence: `**Over-asking kills the measurement.** Demanding twelve answers from a cold stranger before delivering value collapses your conversion rate and confounds your reading — did they leave because there is no demand, or because your form is a wall? Capture the minimum viable intent (an email) first; qualify the people who raised their hand *afterward*.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'platformTask',
          title: 'Publish a real landing page today',
          body: 'Stand up an actual, public landing page for your venture. Use a no-code builder so this takes an hour, not a week. It needs exactly three things: one clear promise (headline), one call to action that captures intent (an email/waitlist field), and a live URL a stranger can reach. Do NOT chase design perfection — ship it, then instrument it next lesson. Paste your live URL as proof.',
          links: [
            { label: 'Carrd — one-page sites, free tier, live in minutes', url: 'https://carrd.co/' },
            { label: 'Framer — free landing pages with built-in forms', url: 'https://www.framer.com/' },
          ],
          steps: [
            'Write ONE headline that states the promise in your user\'s words.',
            'Add ONE call to action that captures intent — a waitlist/email field, not just a "learn more".',
            'Keep the first screen ruthless: promise, proof, one CTA. Cut everything else.',
            'Publish to a real public URL and open it on your phone to confirm a stranger could use it.',
            'Paste the live URL below to record your landing page in "My venture".',
          ],
          taskKey: '16.1#landing',
          proofLabel: 'The live public URL of your landing page',
          proofKind: 'url',
        },
        {
          kind: 'numeric',
          prompt: 'Reading your first result. You shared your page and it received 1,800 unique visitors; 90 of them left their email on the waitlist. What is your visit-to-email conversion rate, in percent? Compute 90 / 1,800 x 100.',
          answer: 5,
          tolerance: 0.1,
          unit: '%',
          explain: 'Conversion = 90 / 1,800 = 0.05 = 5%. Landing-page email capture in the low single digits to ~10% is a common early range, so 5% is a real, readable signal rather than a verdict. The number matters less than the habit: you now have a baseline rate you can try to move by changing the headline, the offer, or the traffic source — one variable at a time.',
        },
        {
          kind: 'resource',
          title: 'Landing pages & positioning (real references)',
          items: [
            { label: 'First Round Review — Go-to-market', url: 'https://review.firstround.com/articles/go-to-market/', note: 'First Round\'s collected GTM guidance for early founders — start here for message and ICP.' },
            { label: 'Y Combinator — The best way to launch your startup', url: 'https://www.ycombinator.com/library/Ir-the-best-way-to-launch-your-startup', note: 'Why you should ship the page (and launch) far sooner than feels comfortable.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Draft my landing page copy', kind: 'ask', question: 'Given my product and target user, draft a landing page: one headline that states the promise in the user\'s words, one subhead, three proof points, and one intent-capturing call to action. Keep it to a single screen.' },
        { label: 'What intent should I capture?', kind: 'ask', question: 'Help me choose the strongest realistic intent to capture on my page right now — email waitlist, pre-order, booked call, or deposit — given how early I am and who my user is, and explain the trade-off.' },
        { label: 'Critique my landing page', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why is an email address a better landing-page conversion target than a pageview or a "like"?',
          options: [
            'Because emails are worth money when you sell the list',
            'Because it is a small but costly commitment that reveals real intent and gives you a way to pursue the person',
            'Because pageviews are impossible to measure',
            'Because likes violate privacy law',
          ],
          answer: 1,
          explain: 'Intent has a hierarchy: a pageview is noise, a like is a free compliment, an email is a costly signal — a stranger handing you a way to reach them because they want what you described. The landing page exists to harvest the strongest realistic intent, and email is usually the cheapest strong signal this early.',
        },
        {
          kind: 'mcq',
          prompt: 'In the dyno analogy for a landing page, where does the analogy BREAK?',
          options: [
            'A dyno is expensive, so landing pages must be expensive too',
            'A dyno measures a finished engine, but a landing page measures only a PROMISE of a product that does not exist yet — so strong sign-ups prove the pitch converts, not that the product will retain',
            'A dyno cannot measure output under load',
            'Landing pages cannot be instrumented',
          ],
          answer: 1,
          explain: 'The dyno reads a real, finished engine; the landing page reads a promise. That gap is the trap: you can tune copy until sign-ups spike and mistake "the pitch converts" for "the product works". Landing-page signal is evidence about message and appetite, confirmed only when the shipped product keeps those people.',
        },
        {
          kind: 'free',
          prompt: 'Report your live landing page. Give the URL, state your single promise and your single intent-capturing CTA, and describe what you instrumented (or will instrument) so that every visitor is either counted as converted or not. Then state the one thing you would change first to try to lift the conversion rate.',
          rubric: 'Strong answer: (1) gives a REAL live URL the learner actually published; (2) names one clear promise and one intent-capturing CTA (email/waitlist/pre-order), not a "learn more"; (3) shows they understand the page must record a countable action per visitor; (4) names a concrete, single-variable experiment to lift conversion (headline, offer, or traffic source). Penalize a brochure with no capture, multiple competing CTAs, or "I\'ll build it later".',
        },
      ],
      commitSummary: 'your real landing page is live and recorded in "My venture" — a URL a stranger can hit that quietly captures whether they wanted in.',
    },

    // -----------------------------------------------------------------------
    {
      id: '16.2',
      module: 16,
      title: 'Pick and work ONE channel',
      estMinutes: 18,
      prerequisites: ['16.1'],
      artifactSlot: null,
      concept: `The most common early-distribution mistake is not picking the *wrong* channel — it is picking *five*. A founder sprays effort across Twitter, cold email, SEO, ads, and a podcast, gives each a fraction of a week, sees no channel reach signal, and concludes "marketing is hard". The failure is arithmetic: a channel only teaches you something once you have pushed enough volume through it to read a rate, and you cannot push enough volume through five at once.

So the discipline is **one channel, worked to signal**. Pick the single channel with the best **channel-market fit** — the place where your specific ICP already gathers, at a cost and cadence you can actually sustain — and commit to it long enough to get a real answer. A useful test for fit: *where is my user already spending attention on this problem, and can I show up there repeatedly without burning out or going broke?* For a solo, pre-launch founder that usually means a targeted, cheap, founder-run channel with fast feedback: direct outreach to named ideal customers, or showing up where they already congregate — not national brand advertising.

Working a channel means a **weekly activity target** you hit regardless of mood: 20 outbound messages, or 2 posts, or a set ad budget. You are not looking for virality; you are looking for a readable rate — reach to visit to signup — so you know whether this channel can become a repeatable engine before you dare open a second one.`,
      reframe: {
        analogy: `Choosing one channel is **matched filtering**. To pull a known signal out of noise, you do not sweep every filter at once — you correlate the input against the *one* template that matches the signal you expect, and integrate long enough for it to rise above the noise floor. A channel is a matched filter for your buyer: you commit to the one template that best matches where your ICP's attention lives, and you integrate — repeat the activity week after week — until the response climbs out of the noise and becomes a rate you can trust.`,
        breaks: `Matched filtering assumes you **know the signal's shape** in advance; a founder often does not know which channel matches until they have tried. So the honest version is: commit to one *long enough to reject it*, not forever. Integrate too briefly and you dismiss a channel that would have worked (you never crossed the noise floor); integrate on a channel that is genuinely mismatched and you waste weeks correlating against the wrong template. The skill the analogy hides is knowing your **integration window** — the pre-set volume and time after which "no signal" is a real result, not impatience.`,
      },
      workedExample: `**Zapier's one-channel bet: programmatic SEO (Wade Foster and team, early 2010s).** Zapier connects apps — "when X happens in tool A, do Y in tool B." Rather than spreading thin across paid ads, events, and social, the team went deep on a single channel that matched exactly how their users searched: SEO. They built a landing page for essentially every *pair* of integrations a user might want ("Connect Gmail to Slack", "Connect Trello to Google Sheets") and for individual apps. Someone Googling how to connect two specific tools landed on a Zapier page that answered precisely that intent — and converted. That one channel, worked relentlessly, became a compounding engine that carried the company for years. (Widely documented in Zapier's own growth write-ups; treat as illustrative of the discipline, not a recipe.)

The lesson is not "do SEO". SEO fit Zapier because their users expressed the need as a *search query* — perfect channel-market fit — and because programmatic pages let them work that one channel at scale without a sales team. Your channel will differ: if your ICP lives in a particular subreddit or Slack, that is your channel; if they respond to a personal note, cold outreach is. The transferable move is to name the *one* channel your users' attention actually flows through, and to work it to a readable rate before touching a second.`,
      branch: {
        scenario: `Your landing page is live and you are impatient for traffic. You have limited hours each week. How do you approach channels?`,
        choices: [
          {
            label: 'Launch on five channels at once — Twitter, cold email, SEO, ads, and a podcast — and double down on whatever sticks.',
            correct: false,
            consequence: `**Spray-and-pray — the arithmetic fails.** Split across five channels, none gets enough volume to cross the noise floor, so none produces a readable rate and you cannot tell what "stuck" from luck. You will feel busy and learn nothing. A channel only teaches you once you push real volume through it — and you cannot push real volume through five with limited hours.`,
          },
          {
            label: 'Pick the ONE channel where your specific ICP already gathers, set a weekly activity target, and work it until you can read a rate.',
            correct: true,
            consequence: `**Correct.** One channel, matched to where your users' attention already lives, worked at a committed weekly cadence long enough to rise above noise. Now reach-to-visit-to-signup becomes a real number, and you have a clean answer — this channel is an engine, or it is not — before you spend a second channel\'s worth of hours.`,
          },
          {
            label: 'Copy the exact channel your best-funded competitor uses, since it is clearly working for them.',
            correct: false,
            consequence: `**Fit is not transferable by imitation.** A competitor at a different stage, with a different ICP, budget, and team, can make a channel work that is wrong for you — expensive brand ads, a paid sales team, a conference circuit. Channel-market fit is about *your* users and *your* constraints. Learn from them, but choose the channel that matches where your buyers actually are and what you can sustain.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'For a solo, pre-launch founder with a live landing page and limited hours, sort each channel into a sensible FIRST channel versus one that is usually premature at this stage. The rule of thumb: cheap, targeted, founder-run, and fast-feedback channels first; expensive, broad, or delegated ones later.',
          buckets: ['Sensible first channel', 'Usually premature at pre-launch'],
          items: [
            { text: 'Direct outreach to 20 named ideal customers each week', bucket: 'Sensible first channel' },
            { text: 'Posting where your users already gather (a specific subreddit, Slack, or forum)', bucket: 'Sensible first channel' },
            { text: 'A small, high-intent search-ad test on the exact terms your users type', bucket: 'Sensible first channel' },
            { text: 'Founder-led content in the niche you know (a weekly post or thread)', bucket: 'Sensible first channel' },
            { text: 'National podcast or TV brand advertising', bucket: 'Usually premature at pre-launch' },
            { text: 'Broad, untargeted display and banner ads at scale', bucket: 'Usually premature at pre-launch' },
            { text: 'Hiring an agency for a 12-month SEO content play before you have a proven message', bucket: 'Usually premature at pre-launch' },
            { text: 'Sponsoring a $30,000 conference booth', bucket: 'Usually premature at pre-launch' },
          ],
          explain: 'At pre-launch you want channels that are cheap (so a null result does not bankrupt you), targeted (so the rate you read is about your real ICP), founder-run (so you learn the message first-hand), and fast (so you get signal in weeks). Outreach, showing up where users already are, tight high-intent ad tests, and founder content all qualify. Broad brand spend and delegated long-horizon plays come after you have a message that converts.',
        },
        {
          kind: 'platformTask',
          title: 'Execute one real channel action',
          body: 'Do a single, real action on your ONE chosen channel today — a real post in the community where your users are, or 10-20 personalized outreach messages to named ideal customers, or a small high-intent ad set pointed at your landing page. This must be real and public/sent, not a draft. Then paste a link to the artifact (the post URL, a link to your outreach doc/thread, or the live ad) as proof.',
          links: [
            { label: 'Reddit — find and post where your users gather', url: 'https://www.reddit.com/' },
            { label: 'First Round Review — Go-to-market', url: 'https://review.firstround.com/articles/go-to-market/' },
          ],
          steps: [
            'Name your ONE channel and why your ICP\'s attention lives there.',
            'Set a weekly activity target (e.g. 20 outbound / 2 posts / a fixed ad budget).',
            'Do the first real action now — post it, send it, or launch it. Point it at your landing page.',
            'Record the link to what you actually shipped so it is verifiable.',
          ],
          taskKey: '16.2#channel',
          proofLabel: 'A link to your real first post / outreach / ad',
          proofKind: 'url',
        },
        {
          kind: 'resource',
          title: 'Choosing and working one channel (real playbooks)',
          items: [
            { label: 'Gabriel Weinberg — The Bullseye Framework for Getting Traction', url: 'https://medium.com/@yegg/the-bullseye-framework-for-getting-traction-ef49d05bfd7e', note: 'The author of "Traction" on testing the 19 channels cheaply and committing to the one that works.' },
            { label: 'Y Combinator Startup Library', url: 'https://www.ycombinator.com/library', note: 'On focus and doing things that do not scale to get your first users.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Which one channel fits me?', kind: 'ask', question: 'Given my ICP and where they already spend attention on this problem, help me pick the single best first channel and reject the others, and set a realistic weekly activity target I can sustain.' },
        { label: 'Set my integration window', kind: 'ask', question: 'Help me define, in advance, the volume and number of weeks after which "no signal" from my chosen channel is a real result rather than impatience — my kill/keep threshold for this channel.' },
        { label: 'A harder channel-choice case', kind: 'harder', concept: 'choosing one channel when your ICP is split across two very different places and each implies a different, incompatible motion (outbound sales vs. self-serve content)' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why is committing to ONE channel usually better than testing five channels simultaneously at pre-launch?',
          options: [
            'Because four of the five channels are always scams',
            'Because a channel only produces a readable rate after enough volume, and limited hours cannot push enough volume through five at once',
            'Because using multiple channels is against advertising rules',
            'Because the first channel you pick is always the right one',
          ],
          answer: 1,
          explain: 'A channel teaches you only once you push enough volume to rise above the noise floor and read a rate. Spread thin across five, none crosses that threshold, so you feel busy but learn nothing and cannot tell signal from luck. One channel, worked to a readable rate, gives a clean answer before you open a second.',
        },
        {
          kind: 'mcq',
          prompt: 'In the matched-filter analogy, what is the key thing the analogy HIDES that a real founder must supply?',
          options: [
            'The requirement to use expensive equipment',
            'The integration window — the pre-set volume and time after which "no signal" counts as a real rejection rather than impatience',
            'The fact that channels never work',
            'That you must always run every filter at once',
          ],
          answer: 1,
          explain: 'Matched filtering assumes you already know the signal\'s shape; a founder often does not know which channel fits until they try. So you must decide in advance how much volume and time equals a fair test. Integrate too briefly and you wrongly reject a good channel; integrate on a mismatched one and you waste weeks. The integration window is the missing discipline.',
        },
        {
          kind: 'free',
          prompt: 'Name the ONE channel you chose and justify its channel-market fit (where does your ICP already spend attention on this problem?). State your weekly activity target and your pre-committed integration window — the volume and number of weeks after which you will judge the channel a pass or a fail. Then report the first real action you actually took.',
          rubric: 'Strong answer: (1) names a SINGLE channel and justifies fit by pointing to where the specific ICP already gathers, not generic reach; (2) sets a concrete, sustainable weekly activity target (a number); (3) pre-commits an integration window (volume + weeks) as a kill/keep threshold, showing they will not quit early or grind a mismatched channel forever; (4) reports a REAL first action taken (a posted link, sent outreach, live ad). Penalize multi-channel spraying or vague "I\'ll try some marketing".',
        },
      ],
      commitSummary: 'your one chosen channel and your first real action are recorded in "My venture" — a committed motion, not a spray across five channels.',
    },

    // -----------------------------------------------------------------------
    {
      id: '16.3',
      module: 16,
      title: 'Instrument the funnel with real analytics',
      estMinutes: 20,
      prerequisites: ['16.2'],
      artifactSlot: null,
      concept: `You now have traffic hitting a page. Without instrumentation you have a rumor, not a result. **Analytics turns behavior into a funnel** — a short sequence of named steps, each with a count, so you can see not just *whether* people convert but *where* they fall out. The leak is the lesson: the whole point of a funnel is to localize the single biggest drop-off so you know what to fix next.

Do not instrument everything. Define a **small set of named events** that mark the real stages of value:

- **Visit** — someone reached your page.
- **Signup** — they gave intent (email/account).
- **Activated** — they did the one action that first delivers value (the "aha").
- **Paid** — they converted to revenue.

Four to six events, named for *behaviors* not pages, is plenty. Each adjacent pair gives you a conversion rate; multiply them and you get the overall reach-to-paid rate. The magic is diagnostic: if visit-to-signup is healthy but signup-to-activated is dismal, your problem is onboarding, not traffic — and no amount of extra traffic fixes an onboarding leak. Pouring more visitors into a page that converts at 0.5% is scaling a leak.

The trap on the other side is **instrumentation paralysis**: 200 events, elaborate dashboards, and a launch that never happens because the tracking is not "complete". You need the four events that map your funnel, wired to a real tool, live before your campaign — not a data warehouse.`,
      reframe: {
        analogy: `A funnel is a **manufacturing yield chain**. A fab does not report one number for "chips made"; it measures yield at each stage — wafers in, dies patterned, dies passing test, units packaged, units shipped — because the only way to raise final output is to find the *stage* bleeding the most and fix that one. Your funnel is the same yield chain for attention: reach in, visits, signups, activations, paid out. You improve the end number by finding and fixing the lowest-yield step, not by cramming more wafers into a line that fails at test.`,
        breaks: `A fab's stages are **physically sequential and clean**; user funnels are **leaky and non-linear**. Real people skip steps, come back three weeks later, convert from a different device, or activate before signing up. So a naive funnel over-counts drop-off (you mark someone "lost" who simply returned via another path) and hides multi-session journeys. Treat the funnel as a *useful approximation* that localizes the worst leak — not as a literal assembly line where every user marches through in order exactly once. The yield metaphor points you at the leak; it lies about how tidily humans flow.`,
      },
      workedExample: `**AARRR "Pirate Metrics" (Dave McClure, 2007).** McClure gave early-stage teams a deliberately tiny funnel — five stages every startup shares: **Acquisition** (they arrive), **Activation** (first happy experience), **Retention** (they come back), **Referral** (they tell others), **Revenue** (they pay). The insight that made it famous was not the stages themselves but the *discipline*: pick a handful of events that map these stages, measure the conversion between each, and obsess over the single worst-converting step rather than a vanity total. A team drowning in "we have 50,000 pageviews" was taught to ask instead: of those, how many activated? Of those, how many came back? The number that is embarrassingly low is your roadmap.

The transferable move is exactly this framing. You do not need McClure's five; for a pre-launch funnel, visit to signup to activated to paid is enough. But adopt his discipline: name the events, watch the *between* rates, and let the worst leak — not your enthusiasm or a big top-line number — decide what you build next. Instrument the smallest funnel that localizes your leak, and get it live before you drive your campaign traffic, so the campaign is measured rather than merely felt. (McClure's original "Startup Metrics for Pirates" deck is the canonical source.)`,
      branch: {
        scenario: `You are about to run your first campaign and need analytics in place. How do you instrument?`,
        choices: [
          {
            label: 'Just watch total pageviews in your website builder\'s built-in counter — that is analytics enough.',
            correct: false,
            consequence: `**A vanity top-line, no funnel.** Total pageviews cannot tell you *where* people fall out, so it can never point you at what to fix. If the number is low you do not know if the problem is traffic, message, or onboarding. A single aggregate is a rumor; you need the between-stage rates to learn anything actionable.`,
          },
          {
            label: 'Define a small set of named events — visit, signup, activated, paid — in a real analytics tool, and watch the conversion between each.',
            correct: true,
            consequence: `**Correct.** Four events named for behaviors give you three conversion rates and an overall rate, and — crucially — they localize the biggest leak. Now a bad campaign result is diagnosable: is it a traffic problem, a message problem, or an onboarding problem? That is the difference between learning and guessing.`,
          },
          {
            label: 'Instrument all 200 possible user actions with a full analytics stack before you launch anything.',
            correct: false,
            consequence: `**Instrumentation paralysis.** Two hundred events and a "complete" data pipeline is how a launch slips by two months while you tune tracking no one is reading yet. You need the four events that map your funnel, live before the campaign. Precision you cannot act on this week is procrastination wearing an engineer\'s hat.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'platformTask',
          title: 'Set up real analytics and define your funnel events',
          body: 'Install a real analytics tool on your landing page and define the small set of named events that map your funnel: at minimum visit, signup, and (if you can) activated and paid. Pick one tool and actually wire it up — a page-view is not enough; you want named events you can build a funnel from. Record which tool you set up and the exact events you defined.',
          links: [
            { label: 'PostHog — product analytics with funnels and events (free tier)', url: 'https://posthog.com/' },
            { label: 'PostHog Docs — capturing events', url: 'https://posthog.com/docs' },
            { label: 'Plausible — simple, privacy-friendly analytics with goals', url: 'https://plausible.io/' },
            { label: 'Google Analytics', url: 'https://analytics.google.com/' },
          ],
          steps: [
            'Choose ONE analytics tool and add its snippet to your landing page.',
            'Define events named for behaviors: visit, signup, and if possible activated and paid.',
            'Confirm events fire — trigger each one yourself and check it appears in the tool.',
            'Build a simple funnel view from the events so you can read between-stage rates.',
            'Record the tool and the exact event names you defined below.',
          ],
          taskKey: '16.3#analytics',
          proofLabel: 'The analytics tool you set up and the funnel events you defined',
          proofKind: 'text',
        },
        {
          kind: 'numeric',
          prompt: 'Funnel math. Your campaign sends 2,000 visitors to your page. 6% sign up; 40% of signups activate (do the core action); 25% of activated users convert to a $20/month plan. What is your resulting monthly recurring revenue, in dollars? Compute 2,000 x 0.06 x 0.40 x 0.25 x 20.',
          answer: 240,
          tolerance: 5,
          unit: '$/month',
          explain: 'Walk the funnel: 2,000 x 0.06 = 120 signups; x 0.40 = 48 activated; x 0.25 = 12 paying; x $20 = $240/month. Overall visitor-to-paid conversion is 0.06 x 0.40 x 0.25 = 0.6%. Notice the leverage: signup-to-activated (40%) is the weakest multiplicative step here — lifting it from 40% to 60% would raise MRR by half without a single extra visitor. That is why you read the funnel, not just the top line.',
        },
        {
          kind: 'resource',
          title: 'Funnel instrumentation (real references)',
          items: [
            { label: 'PostHog Docs — product analytics and funnels', url: 'https://posthog.com/docs', note: 'How to capture events and build funnel/retention views in practice.' },
            { label: 'Amplitude — The North Star Playbook', url: 'https://amplitude.com/resources/north-star-playbook', note: 'Choosing the value-based metric your funnel should serve, with input metrics.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Design my funnel events', kind: 'ask', question: 'Given my product, help me define the 4-6 named events that map my funnel — especially the single "activation" event that marks first real value — and how to name them for behaviors rather than pages.' },
        { label: 'Where is my biggest leak?', kind: 'ask', question: 'Given my current between-stage conversion rates (I\'ll paste them), tell me which single step is my biggest leak, whether the fix is traffic/message/onboarding/pricing, and what to change first.' },
        { label: 'Stress-test my instrumentation plan', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What is the primary diagnostic value of a funnel over a single top-line number like total signups?',
          options: [
            'It makes dashboards look more professional to investors',
            'It localizes the single biggest drop-off between stages, so you know which specific thing to fix next',
            'It guarantees your conversion rate will rise',
            'It removes the need to talk to users',
          ],
          answer: 1,
          explain: 'A funnel breaks conversion into named stages, each with a rate, so the biggest leak is visible. If visit-to-signup is fine but signup-to-activated is terrible, the problem is onboarding, not traffic — and pouring more visitors in would just scale the leak. The between-stage rates are what turn data into a decision.',
        },
        {
          kind: 'mcq',
          prompt: 'In the manufacturing-yield analogy for a funnel, what does the analogy get WRONG about real users?',
          options: [
            'Users never convert, unlike wafers',
            'Fab stages are clean and strictly sequential, but users are leaky and non-linear — they skip steps, return later, or convert on another device, so a naive funnel over-counts drop-off',
            'Yield cannot be measured at each stage',
            'You should always add more events to be safe',
          ],
          answer: 1,
          explain: 'A fab\'s stages are physically sequential and each unit passes through once; users are messy — multi-session, cross-device, out-of-order. So the funnel is a useful approximation that localizes the worst leak, not a literal assembly line. Trust it to point at the problem stage, not to model exactly how humans flow.',
        },
        {
          kind: 'free',
          prompt: 'Describe the analytics you actually set up. Which tool, and which named events map your funnel (visit / signup / activated / paid or your equivalents)? Report or estimate your between-stage conversion rates, identify your single biggest leak, and say whether fixing it is a traffic, message, onboarding, or pricing problem.',
          rubric: 'Strong answer: (1) names a REAL tool the learner installed (PostHog, Plausible, GA, etc.); (2) lists a small set of behavior-named events forming a funnel, including an activation event; (3) reports between-stage rates (even rough) rather than a single vanity total; (4) identifies the single biggest leak AND classifies the fix (traffic/message/onboarding/pricing), showing they understand you fix the leak, not just add traffic. Penalize "total pageviews only" and 200-event over-instrumentation.',
        },
      ],
      commitSummary: 'your funnel is instrumented in "My venture" — named events in a real tool so your campaign will be measured, and its biggest leak visible, not merely felt.',
    },

    // -----------------------------------------------------------------------
    {
      id: '16.4',
      module: 16,
      title: 'Run a real campaign & read results',
      estMinutes: 20,
      prerequisites: ['16.1', '16.2', '16.3'],
      artifactSlot: null,
      concept: `This is the milestone: a real, bounded campaign — a burst of concentrated effort on your one channel, pointed at your instrumented page, with a **success criterion you write down before you start**. The pre-committed criterion is the whole discipline. Without it you will do what every founder does under uncertainty: run the campaign, then let a number you happen to like decide the story. Set the bar first, so the result grades *you* instead of you grading the result.

Reading results has three failure modes to avoid:

- **Vanity reading.** Celebrating impressions, likes, or reach — the numbers that always look big and never mean anything. Read the *conversion* numbers on your funnel, not the applause.
- **Premature kill.** Declaring the channel dead off a tiny sample or one bad number. A campaign that sent 400 visitors is a small experiment; treat its rates as directional, and check *where* the leak is before you condemn the channel.
- **Scaling a leak.** Seeing modest conversion and immediately buying more traffic — pouring volume into a page or onboarding that fails downstream. If the leak is below the top of the funnel, more traffic just wastes more money.

The decision at the end is one of three, and you must pick based on the funnel, not vibes: **persevere** (it beat the bar — do more of the same), **fix the biggest leak** (the channel delivered qualified traffic but a downstream stage bled — repair that, then re-run), or **kill/switch** (the channel cannot deliver qualified traffic at a cost you can bear — go back to lesson two and pick the next one). A campaign you cannot make a clean decision from was not instrumented; a campaign you refuse to decide from was not really run.`,
      reframe: {
        analogy: `A campaign is a **hypothesis test with a pre-registered threshold**. Good experimental practice fixes the success criterion *before* collecting data — you state "I will accept the effect if the result clears this bar" in advance, precisely so you cannot rationalize whatever you observe into a win. Your written success criterion ("if by day 14 I have a 5% visit-to-signup rate from this channel, it works; if not, I change the message or the channel") is that pre-registration. It converts a campaign from a story you tell afterward into a test that can actually fail.`,
        breaks: `A lab test assumes a **fixed, adequate sample** and a stable effect; a first campaign gives you a **tiny, noisy** sample and a target that is still moving as you tune the message. So do not treat one under-powered campaign as a definitive p-value that "proves" no demand — that is false rigor. The right posture is sequential: pre-register a threshold to stay honest, but read a near-miss as "iterate one variable and re-run", not "reject forever". Rigor keeps you from fooling yourself; pretending a 400-visitor test is conclusive fools you a different way.`,
      },
      workedExample: `**Groove's transparent funnel teardown (Alex Turnbull, Groove HQ, mid-2010s).** Groove, a help-desk SaaS, published its real numbers as it grew — including a widely read teardown of why users were churning. Instead of celebrating signups (a vanity top-line), the team instrumented the funnel and found the leak was *early*: a large share of trial users never reached the activation moment, and many churned within the first days. Reading the between-stage numbers, not the top line, told them the fix was **onboarding**, not more traffic — so they rebuilt the first-run experience and re-measured, rather than buying more signups into a leaky funnel. (Documented in Groove's public startup-journey blog; treat specific figures as illustrative of the method.)

The move to copy is the reading, not the tactic. Groove had a big, flattering signup number and refused to be flattered — they looked at where users actually fell out, localized the worst leak, made *one* targeted change, and re-ran the measurement. That is the difference between "persevere/fix/kill" decided by the funnel and a decision decided by mood. When your campaign lands this lesson, do the same: ignore the applause metrics, find the worst-converting stage against your pre-set bar, and choose one of the three decisions deliberately.`,
      branch: {
        scenario: `Your first real campaign is done. It drove modest traffic. You have to read the results and decide. What is the disciplined move?`,
        choices: [
          {
            label: 'Point to the impressions and likes — reach was huge — and declare the campaign a success.',
            correct: false,
            consequence: `**Vanity reading.** Impressions and likes are the numbers that always look big and never pay rent. They cannot tell you whether a single stranger moved down your funnel. Read the conversion rates on your instrumented events against your pre-set bar; applause is not evidence.`,
          },
          {
            label: 'Compare the funnel numbers against the success criterion you wrote before the campaign, find the biggest leak, and choose persevere / fix / kill accordingly.',
            correct: true,
            consequence: `**Correct.** The pre-registered bar keeps you honest, the funnel localizes the leak, and the decision follows from the data: beat the bar means do more; qualified traffic but a downstream bleed means fix that stage and re-run; no qualified traffic at a bearable cost means switch channels. That is a campaign you can actually learn from.`,
          },
          {
            label: 'The absolute numbers are small, so kill the whole idea and conclude there is no market.',
            correct: false,
            consequence: `**Premature kill on a tiny sample.** A few hundred visitors is a directional experiment, not a verdict on the market — and you have not even checked *where* the leak is. Maybe the channel delivered fine traffic and your page failed to convert, which is a message fix, not a dead idea. Diagnose before you condemn; iterate one variable and re-run.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'document',
          title: 'Write your one-page GTM plan before you launch',
          body: 'Before you run the campaign, fill in the one-page go-to-market plan for YOUR venture: your ICP, the one problem and promise, your single channel, your target funnel conversion rates, your message, the concrete first-30-days actions, and — critically — your written success criterion. A campaign without a pre-committed success criterion cannot fail honestly. Fill it in and save it to your workspace.',
          templateHref: '/templates/gtm-plan.md',
          docKey: '16.4#gtmplan',
          docLabel: 'My one-page GTM plan',
        },
        {
          kind: 'rank',
          prompt: 'Order your launch sequence. Founders love to jump straight to "run the ads"; put these steps in the order that makes the campaign readable and its result decidable.',
          items: [
            'Write the one-page GTM plan, including the pre-committed success criterion',
            'Confirm the landing page is live with one clear intent-capturing CTA',
            'Confirm analytics is firing the funnel events (visit, signup, activated, paid)',
            'Prepare the campaign asset for your one channel (the post / outreach / ad + message)',
            'Run the campaign to a small, real audience on that one channel',
            'Read the funnel numbers against your pre-set criterion',
            'Decide: persevere, fix the biggest leak and re-run, or kill/switch the channel',
          ],
          explain: 'Plan and set the bar first, then make sure the page and the instrumentation are actually working (a campaign into a broken funnel teaches nothing), then prepare and run the campaign, then read against the pre-set criterion, and only then decide. Running before the page, the events, and the success criterion are in place produces numbers you cannot interpret and a decision you cannot defend.',
        },
        {
          kind: 'scenario',
          title: 'Kill or keep the channel — read the data',
          intro: 'You ran a two-week campaign on your one channel, pointed at your instrumented landing page. Your pre-set bar was 5% visit-to-email. Now read what actually happened and decide — twice.',
          decisions: [
            {
              situation: 'The channel delivered 600 real visitors from your target audience, but only 0.5% left their email — far below your 5% bar. The traffic looked well-qualified; the page just did not convert it. What do you do?',
              options: [
                { label: 'Kill the channel — it failed the bar.', correct: false, outcome: 'Wrong leak. The CHANNEL did its job — it delivered 600 qualified visitors. The failure was downstream, at the page/message. Killing the channel throws away the one thing that worked and mis-attributes the problem.' },
                { label: 'Rewrite the page headline and offer, then re-run the same channel.', correct: true, outcome: 'Correct. The leak is at visit-to-email, so the fix is the message/offer, not the channel. Change one variable (the headline or the offer), re-run to the same qualified traffic, and re-read the rate. That is diagnosing before condemning.' },
                { label: 'Buy 5x more traffic to the same page to get more emails in absolute terms.', correct: false, outcome: 'Scaling a leak. Pouring more visitors into a page converting at 0.5% just wastes more money at the same broken step. Fix the conversion first; scale second.' },
              ],
            },
            {
              situation: 'After you fix the page, the same channel now converts at a healthy 7% visit-to-email — but no matter what you do, this channel simply cannot deliver more than about 50 qualified visits per week. It converts well but cannot scale. What now?',
              options: [
                { label: 'Keep pouring all your effort here and expect the volume to grow on its own.', correct: false, outcome: 'Hopeful but static. A channel capped at ~50 visits/week will not spontaneously scale; betting your growth on it alone caps your growth at its ceiling.' },
                { label: 'Keep it as a small, reliable evergreen source and now test a second, more scalable channel.', correct: true, outcome: 'Correct. It converts well, so keep it running as a dependable trickle — but its volume ceiling means you now have earned the right to open a SECOND channel for scale. This is exactly when the "one channel" discipline lets you expand.' },
                { label: 'Abandon it because 50 visits a week is too small to matter.', correct: false, outcome: 'Wasteful. A channel that reliably converts at 7% is an asset, even at low volume. You do not abandon what works; you keep it and add scalable volume alongside it.' },
              ],
            },
          ],
        },
        {
          kind: 'platformTask',
          title: 'Run your real first campaign and record the result',
          body: 'This is the launch. Run a small, real, bounded campaign on your one channel to your instrumented landing page — a concentrated burst over a fixed window (e.g. one to two weeks). Then read the funnel against the success criterion in your GTM plan. Record your campaign\'s headline conversion number (for example, visit-to-email as a percentage) so you have a real result to decide from. This is the milestone that turns Season 2 from preparation into a launched go-to-market.',
          links: [
            { label: 'Y Combinator — How to launch (again and again)', url: 'https://www.ycombinator.com/library/6i-how-to-launch-again-and-again' },
            { label: 'First Round Review — Go-to-market', url: 'https://review.firstround.com/articles/go-to-market/' },
          ],
          steps: [
            'Confirm your page is live, your CTA captures intent, and your funnel events fire.',
            'Run the campaign to a real audience over a fixed window — actually ship it.',
            'Read the funnel: reach to visit to signup, against your pre-set success criterion.',
            'Identify the single biggest leak and choose persevere / fix-and-re-run / kill-switch.',
            'Record your headline conversion number below to log your first real launch.',
          ],
          taskKey: '16.4#campaign',
          proofLabel: 'Your campaign\'s headline conversion number (e.g. visit-to-email %)',
          proofKind: 'number',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'Launching and reading results (real playbooks)',
          items: [
            { label: 'Y Combinator Startup Library', url: 'https://www.ycombinator.com/library', note: 'On launching early and often, and doing things that do not scale to get your first users.' },
            { label: 'First Round Review — Go-to-market', url: 'https://review.firstround.com/articles/go-to-market/', note: 'Collected early-stage GTM guidance: ICP, the first sales calls, and honest forecasting.' },
            { label: 'Gabriel Weinberg — The Bullseye Framework', url: 'https://medium.com/@yegg/the-bullseye-framework-for-getting-traction-ef49d05bfd7e', note: 'The "test cheaply, then double down on the one channel that works" discipline for reading results.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Set my success criterion', kind: 'ask', question: 'Help me write a falsifiable success criterion for my first campaign in the form "if by day N I have [rate] from this channel, it works; if not, I change [X]" using my real funnel and a sane target for my stage.' },
        { label: 'Read my campaign numbers', kind: 'ask', question: 'I\'ll paste my campaign\'s funnel numbers (reach, visits, signups, activations). Tell me my biggest leak, whether the honest decision is persevere / fix-and-re-run / kill-switch, and the single change to make next.' },
        { label: 'Am I reading vanity metrics?', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why must you write the campaign\'s success criterion BEFORE you run it?',
          options: [
            'Because investors require a written plan',
            'So the result grades you against a fixed bar, instead of you rationalizing whatever number you observe into a "win" afterward',
            'Because you cannot change anything once a campaign starts',
            'Because the criterion determines your ad budget legally',
          ],
          answer: 1,
          explain: 'A pre-committed criterion is like pre-registering a hypothesis test: it fixes the bar before the data arrives, precisely so you cannot tell a flattering story after the fact. Set the bar first and the campaign can honestly fail; set it after and every result becomes a success in hindsight.',
        },
        {
          kind: 'mcq',
          prompt: 'Your campaign drove 600 well-qualified visitors but only 0.5% left their email, far below your 5% bar. What is the correct decision?',
          options: [
            'Kill the channel — it failed the bar',
            'The channel delivered qualified traffic, so the leak is at the page/message: fix the headline or offer and re-run the same channel',
            'Buy 5x more traffic to the same page',
            'Conclude there is no market and stop',
          ],
          answer: 1,
          explain: 'The channel did its job — 600 qualified visitors. The failure is downstream at visit-to-email, which is a message/offer problem, not a channel problem. Fix one variable on the page and re-run to the same traffic. Killing the channel mis-attributes the leak; buying more traffic scales the leak; quitting condemns the idea on a diagnosed-but-fixable page problem.',
        },
        {
          kind: 'free',
          prompt: 'Report your real campaign. State your pre-committed success criterion, the channel and campaign you ran, your headline conversion number(s) from the funnel, and where your biggest leak was. Then state your decision — persevere, fix-the-biggest-leak-and-re-run, or kill/switch — and justify it from the funnel numbers, not from vanity metrics or vibes.',
          rubric: 'Strong answer: (1) states a success criterion that was set BEFORE the campaign (a rate + a date/window); (2) reports a REAL campaign on the one channel with actual funnel numbers (not impressions/likes alone); (3) identifies the single biggest leak from between-stage rates; (4) reaches one of the three decisions (persevere / fix-and-re-run / kill-switch) and justifies it from the funnel, avoiding vanity reading, premature kill, and scaling-a-leak. Reward intellectual honesty about a weak result and a clear, defensible next action.',
        },
      ],
      commitSummary: 'your first real campaign is launched and its result recorded in "My venture" — a pre-set bar, a real conversion number, and a deliberate persevere / fix / kill decision. Season 2 is now live in the market, not on paper.',
    },
  ],
}
