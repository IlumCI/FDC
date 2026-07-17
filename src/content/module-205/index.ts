import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 205 — Autonomous go-to-market & growth · Season 1 BONUS (autonomous)
//
// A curated bonus for the AUTONOMOUS-CORPORATION path: an AI-agent-run company.
// The premise is leverage — an agent fleet can run acquisition, content, and
// outreach channels no small human team could staff. The counter-premise, which
// this module hammers, is that the same leverage turns into industrial-scale
// spam and brand damage the moment quality, consent, and reputation guardrails
// are dropped. Every "correct" answer favors quality over volume, consent over
// reach, and durable trust over a short-term spike. Prose-only (artifactSlot
// null throughout); slots in after Module 7 on the autonomous route.
// ===========================================================================

export const module205: Module = {
  id: 205,
  season: 1,
  bonus: true,
  paths: ['autonomous'],
  insertAfter: 7,
  title: 'Autonomous go-to-market & growth',
  goal: 'Grow an AI-run company: programmatic acquisition, agent-generated content and outreach at scale — without becoming spam or torching your brand.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '205.1',
      module: 205,
      title: 'Programmatic acquisition',
      estMinutes: 14,
      prerequisites: [],
      artifactSlot: null,
      concept: `A human-run company staffs one growth channel at a time. An agent-run company can run a **channel as a pipeline**: a data source plus a template plus a rendering loop that produces thousands of assets on a schedule. Three channels reward this most:

- **Programmatic SEO** — generate one page per real entity in a dataset (every integration pair, every city, every product) so each page answers a specific long-tail query.
- **Generated content** — briefs, comparisons, and answers produced from structured inputs rather than hand-written one by one.
- **Automated ads** — an agent that creates, bids, measures, and prunes ad variants across a keyword space far larger than a person could manage.

The leverage is real: a two-person company can occupy a search footprint that used to need a content team. But leverage is a **multiplier on sign**, not a fix. Programmatic pages backed by genuine, unique data (a real integration, real inventory, real prices) map to real intent and earn traffic. The identical machinery pointed at **thin, templated filler** produces "doorway pages" — near-duplicate shells with no unique value — which search engines actively demote and which train users to distrust your domain.

So the discipline for an autonomous GTM system is: automate the *distribution*, but gate on *substance*. Ask of every generated asset, "does one real person get one real answer here?" If yes, parallelize hard. If the honest answer is "no, this exists only to rank," you are building a liability that compounds as fast as the asset count.`,
      reframe: {
        analogy: `This is **batch / parallel processing** applied to a marketing channel. Doing outreach or SEO by hand is a serial loop: one page, one campaign, one email, processed at human clock speed. Programmatic acquisition is the **map** step — you define a transform once ("entity to landing page") and run it across the whole input partition in parallel, the way a batch job fans a function over millions of rows instead of iterating them by hand. The template is your kernel; the dataset is your input shard; the agent fleet is your worker pool.`,
        breaks: `Batch jobs are **independent and idempotent** — one record's output can't hurt another's. Marketing assets are **not** independent: they compete for the same finite crawl budget, the same index quota, and the same limited human attention, and they all draw on one **shared reputation** (your domain authority, your brand). Ship ten thousand thin pages and you don't just waste ten thousand jobs — you poison the shared resource that made the other, good pages rank. A batch framework also gives you a clean exit code; a search engine's quality judgment is delayed, opaque, and applied to the *whole domain* at once. Parallelize the work, but never assume the assets don't interact — they share a namespace called your reputation.`,
      },
      workedExample: `**Zapier** is the canonical honest example. Their programmatic SEO generates a landing page for essentially every "connect App A to App B" pair across thousands of integrated apps — tens of thousands of pages from one template over their real integration catalog. It works because each page is backed by a **genuine, unique fact**: that integration actually exists, with real triggers and actions a searcher wants. Someone Googling "connect Typeform to Slack" lands on a page that answers exactly that and offers the working product.

Now the honest failure mode. Take the *same* template and point it at combinations you don't really support — pages that exist only to capture the query, with recycled boilerplate and no working integration behind them. That is a **doorway-page** pattern: search engines classify it as low-value and can demote the entire domain, including your good pages. The machinery is identical; the only difference is whether a real entity and a real answer sit behind each generated URL.

The autonomous-GTM lesson: your page count is not the metric. **Pages that map one-to-one to a real answer** is the metric. An agent can generate either kind at the same speed, so the guardrail — "only render when the backing data is real and unique" — has to live *inside* the generation loop, not in a human review that never happens at that scale.`,
      branch: {
        scenario: `Your agent can generate landing pages from a keyword tool. Option A: emit **50,000** pages covering every keyword permutation, most backed only by templated boilerplate. Option B: emit **3,000** pages, one per entity for which you hold real, unique data (actual specs, prices, or working integrations). Both ship this week. Which do you approve?`,
        choices: [
          {
            label: 'A — more pages means more surface area and more chances to rank; volume wins in SEO.',
            correct: false,
            consequence: `**Instructive miss.** Fifty thousand thin, near-duplicate pages is the textbook doorway-page pattern. Search engines increasingly detect it and can demote the *whole domain* — so the boilerplate 47,000 drag down the 3,000 that could have ranked. Volume without unique substance is negative leverage: you scaled a liability and put your good assets at risk behind it.`,
          },
          {
            label: 'B — 3,000 pages each backed by a real, unique answer.',
            correct: true,
            consequence: `**Correct.** Each page maps to genuine intent and a genuine fact, so it earns its ranking and builds domain trust instead of spending it. This is the Zapier pattern: automate distribution, gate on substance. You can always grow the 3,000 as your real dataset grows — but you never manufacture pages that exist only to rank.`,
          },
          {
            label: 'Ship A now to grab the footprint, then improve quality later once traffic arrives.',
            correct: false,
            consequence: `**Instructive miss — the "grow into it" trap in GTM form.** A quality penalty applied to your domain is slow to earn back and doesn't wait for your cleanup. "Rank first, add substance later" usually means the substance never comes and the penalty does. If the data isn't real yet, the page shouldn't exist yet.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'For each growth task, decide whether it is safe to mass-produce with an agent pipeline, or should stay human / not be mass-generated at all.',
          buckets: ['Safe to automate at scale', "Keep human / don't mass-generate"],
          items: [
            { text: 'Landing pages for 5,000 integrations that genuinely exist, each with real triggers and actions', bucket: 'Safe to automate at scale' },
            { text: 'City pages backed by real, unique local inventory and prices', bucket: 'Safe to automate at scale' },
            { text: 'Automated bid and budget adjustments across thousands of ad keywords, measured on conversions', bucket: 'Safe to automate at scale' },
            { text: 'Ten thousand near-duplicate keyword pages with recycled boilerplate and no unique data', bucket: "Keep human / don't mass-generate" },
            { text: "A nuanced public statement responding to a customer-data incident", bucket: "Keep human / don't mass-generate" },
            { text: 'A founder point-of-view essay staking out a contrarian strategy position', bucket: "Keep human / don't mass-generate" },
          ],
          explain: 'The dividing line is whether a real, unique entity and a real answer sit behind each asset. Integration pages, inventory pages, and measured ad optimization all map one-to-one to genuine intent, so the pipeline adds leverage. Doorway boilerplate maps to nothing real — mass-producing it spends domain trust. And judgment-heavy, reputation-critical writing (a crisis statement, a strategy stance) is exactly where a templated flood damages the brand; those stay human by choice, not by capacity.',
        },
      ],
      tutorHooks: [
        { label: 'Which of MY channels parallelize?', kind: 'ask', question: 'Given my product and domain, which acquisition channels have a real dataset behind them that would support programmatic generation, and which would just produce doorway-style filler I should avoid?' },
        { label: 'Harder: crawl budget & cannibalization', kind: 'harder', concept: 'programmatic SEO at scale where thin pages consume crawl budget and cannibalize the rankings of good pages on the same domain' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What most reliably separates programmatic pages that rank durably from ones that get a domain penalized?',
          options: [
            'The raw number of pages generated',
            'Whether each page is backed by a real, unique entity and answers a genuine query',
            'How fast the agent can render them',
            'Using more keywords per page',
          ],
          answer: 1,
          explain: 'Substance, not count or speed. Pages mapped one-to-one to a real entity and a real answer (the Zapier integration pattern) earn trust; near-duplicate filler generated only to rank is the doorway-page pattern that can demote the whole domain.',
        },
        {
          kind: 'mcq',
          prompt: 'Why is "generate 50k thin pages now, add substance later" a dangerous plan?',
          options: [
            'It costs too much compute up front',
            'A domain-level quality penalty is slow to reverse and the promised substance rarely arrives',
            'Search engines reward it too much and skew your metrics',
            'It always violates the law',
          ],
          answer: 1,
          explain: 'Quality penalties apply at the domain level and are slow to earn back, dragging down your good pages too. "Rank first, fix later" typically ships the liability and never ships the fix. If the backing data is not real yet, the page should not exist yet.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR AI-run company, name one acquisition channel you could run programmatically. Identify the real dataset behind it (one page/asset per what?), and state the specific guardrail you would put INSIDE the generation loop to prevent it from producing filler.',
          rubric: 'Strong answer: (1) names a concrete channel (programmatic SEO, generated comparison content, automated ads); (2) identifies a real, unique dataset that gives each asset genuine substance (not just keyword permutations); (3) states a guardrail enforced at generation time — e.g. "only render if the backing record has N real fields / a working integration" — rather than a human review that cannot scale; (4) shows awareness that thin filler spends shared domain reputation.',
        },
      ],
      commitSummary: 'concept only — you design the quality gate and the compounding loop in later lessons.',
    },

    // -----------------------------------------------------------------------
    {
      id: '205.2',
      module: 205,
      title: 'Agent-generated content & quality control',
      estMinutes: 15,
      prerequisites: ['205.1'],
      artifactSlot: null,
      concept: `For most of the web's history the constraint on content was **production**: writing was slow and expensive, so whoever could produce more usually won. Agents invert that. Generation is now nearly free and effectively unbounded — which means production has stopped being the bottleneck, and the whole internet is discovering the constraint that was hiding behind it: **verification**.

When anyone can emit a plausible article in seconds, plausibility is worthless. The web is flooding with confidently-wrong AI text, and readers, search engines, and buyers are all re-pricing "looks fine" down to zero. In that world the moat is not "can you make content" — everyone can — it is "can you make content that is **actually true, actually useful, and actually on-brand**, and *prove* it at scale." Curation and verification become the scarce, valuable, defensible work.

So an autonomous content system's real architecture is not a generator; it is a **verification pipeline** with a generator bolted on the front. The generator over-produces cheaply; the pipeline's job is to *reject*. Practical gates:

- **Grounding / fact-check** — every claim traceable to a real source; unsupported claims fail.
- **Dedup & originality** — kill near-duplicates and plagiarized spans.
- **Brand-voice & policy filter** — tone, claims you're legally allowed to make, safety.
- **Human sampling QA** — a person reviews a random sample; a rising defect rate halts publishing.

The mental shift: stop optimizing generation throughput (it's already infinite) and start optimizing **verified-output throughput** — how much content clears the gates per unit of trusted review. That number, not word count, is your content velocity.`,
      reframe: {
        analogy: `Generation is cheap; **verification is the bottleneck** — exactly like modern software. Writing code was never the hard part of shipping; **review, tests, and CI** are the gate, and they, not the typing speed, set your real throughput. An agent that emits articles is a developer who can type infinitely fast: useless, even dangerous, without the pipeline that decides what's allowed to merge. Treat published content like merged code — it passes grounding checks (unit tests against sources), dedup (no copy-paste), policy lint (brand and legal), and a sampled human review (code review) before it reaches \`main\`.`,
        breaks: `The analogy oversells how *automatable* verification is. Some checks genuinely parallelize — schema validation, plagiarism detection, grounding a claim against a cited source are all machine-runnable, so verification is not always the slow serial step the analogy implies. But a unit test has a **decidable** pass/fail, and many content-quality questions don't: "is this genuinely useful," "is this subtly misleading," "does this sound like us" are judgment calls with no green checkmark. So you can't fully close the loop — you drive the defect rate down with automated gates *and* keep a human sampling stage whose job is to catch the failures no assertion can express. Verification is the bottleneck; some of it is automatable, and the irreducible remainder is exactly the part that protects your brand.`,
      },
      workedExample: `**CNET (Red Ventures), 2023** is the honest cautionary example. The site quietly published around 70 finance articles generated by an AI tool under the "CNET Money" byline. The generator worked fine — the *verification* didn't. Once scrutinized, the pieces were found to contain factual and math errors, and CNET ended up appending corrections to a large fraction of them. The reputational cost — a trusted tech-media brand caught shipping unreviewed AI errors — far exceeded whatever the articles earned. That is generation optimized and verification skipped, in one headline.

Contrast the pipeline version. An agent over-produces: for every slot you need, it drafts several candidates. Each candidate then runs the gates — grounding every number against a cited source, a dedup/originality screen, a brand-and-legal filter — and only passing candidates advance. A human reviews a **random sample** of what passed; if the sampled defect rate creeps up, publishing **auto-pauses** until the pipeline is fixed. You publish less than the generator could emit, on purpose. The output that ships is the *verified* subset, and its trustworthiness is the moat.

The number to manage isn't articles generated per day. It's **articles that clear the gates per unit of trusted review** — verified-output throughput. Generation being infinite is precisely why that ratio, not the raw count, is the whole game.`,
      branch: {
        scenario: `Your content agent can draft 500 publish-ready articles a day. Engagement is fine in tests. Your operator proposes wiring the generator **directly to auto-publish** to maximize output while the quality still "looks good." What's the right architecture call?`,
        choices: [
          {
            label: 'Auto-publish all 500/day — quality looks fine and speed is the advantage.',
            correct: false,
            consequence: `**Instructive miss — this is the CNET failure mode.** "Looks fine" is worthless when everyone can generate plausible text; the errors surface later, at scale, under your byline, and the correction cost dwarfs the traffic. Optimizing generation throughput with no verification gate ships your brand's credibility as collateral.`,
          },
          {
            label: 'Over-generate, then publish only the subset that clears grounding, dedup, and policy gates, with human sampling QA and an auto-pause on rising defects.',
            correct: true,
            consequence: `**Correct.** Generation is cheap, so let the agent over-produce and make the pipeline's job *rejection*. Automated gates catch the decidable failures; sampled human review catches the judgment-call failures no assertion can express; the auto-pause stops a regression before it floods the site. You publish less than you could — deliberately — and everything that ships is verified. That verified-output throughput is the moat.`,
          },
          {
            label: 'Publish everything now, then have humans review it after it is live and fix problems as complaints arrive.',
            correct: false,
            consequence: `**Instructive miss.** Review-after-publish means every defect ships first and is discovered by your readers — the most expensive possible place to catch it. At 500/day no human backfill keeps up, and the trust damage from public errors is not undone by a later quiet edit. The gate has to be *before* \`main\`, not after.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'rank',
          prompt: 'Order a sane agent-content pipeline from first step to last, so that cheap automated rejection happens before scarce human attention and nothing unverified reaches publish.',
          items: [
            'Over-generate multiple candidate drafts per needed slot',
            'Run automated grounding / fact-check: every claim must trace to a real cited source',
            'Deduplication and originality screen (kill near-duplicates and plagiarized spans)',
            'Brand-voice and legal/policy filter',
            'Human sampling QA on a random subset, with auto-pause if the defect rate rises',
            'Publish only the candidates that cleared every gate',
          ],
          explain: 'Cheap, decidable checks run first and reject the bulk so you never spend scarce human review on obvious failures: grounding kills the hallucinations, dedup kills the copies, the policy filter kills off-brand or legally risky claims. Human sampling sits near the end because judgment is the expensive, non-automatable resource — you spend it on a sample of what already passed, and the auto-pause turns that sample into a circuit breaker. Publishing is the last step, gated on the whole chain: generation is infinite, so the pipeline is defined by what it refuses to ship.',
        },
      ],
      tutorHooks: [
        { label: 'Design MY verification gates', kind: 'ask', question: 'For my product and content type, what specific grounding, dedup, brand, and legal gates should my content pipeline enforce, and which of them can be automated versus need human sampling?' },
        { label: 'Harder: measuring verified-output throughput', kind: 'harder', concept: 'defining and tracking verified-output-per-review as the real content velocity metric, including how to set a defect-rate threshold that auto-pauses publishing' },
        { label: 'Critique my pipeline', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Once generation is effectively free and infinite, where does an AI-content company\'s competitive moat move?',
          options: [
            'To generating even more content faster than rivals',
            'To verification and curation — producing content that is provably true, useful, and on-brand',
            'To using a larger model',
            'To publishing before competitors regardless of review',
          ],
          answer: 1,
          explain: 'When everyone can emit plausible text, plausibility is worthless and production stops being the constraint. The scarce, defensible work becomes verification and curation — proving the content is accurate, useful, and on-brand. Generation is cheap; verification is the bottleneck and therefore the moat.',
        },
        {
          kind: 'mcq',
          prompt: 'What is the core lesson of the CNET AI-content episode for an autonomous GTM system?',
          options: [
            'AI should never write anything',
            'A generator without a verification gate ships errors under your brand and the correction cost dwarfs the gains',
            'Finance content is simply too hard to automate',
            'Human writers are always cheaper than agents',
          ],
          answer: 1,
          explain: 'The generator worked; verification was skipped, so errors shipped under a trusted byline and had to be corrected at scale, costing far more credibility than the articles earned. The takeaway is architectural: gate output before publish, do not optimize generation throughput with no verification stage.',
        },
        {
          kind: 'free',
          prompt: 'Describe the verification pipeline for YOUR content type. What does the generator over-produce, which automated gates reject candidates before a human sees them, and what is the single trigger that would auto-pause publishing?',
          rubric: 'Strong answer: (1) frames generation as over-production and the pipeline\'s job as rejection; (2) names concrete automated gates appropriate to the content (grounding against sources, dedup/originality, brand-voice, legal/policy) and orders cheap-automatable ones before human review; (3) keeps a human sampling stage for the non-decidable judgment calls; (4) defines a specific auto-pause trigger (e.g. sampled defect rate above a threshold) showing they optimize verified-output throughput, not raw generation count.',
        },
      ],
      commitSummary: 'concept only — the ethics of automated outreach come next.',
    },

    // -----------------------------------------------------------------------
    {
      id: '205.3',
      module: 205,
      title: 'Automated outreach vs spam (the ethics line)',
      estMinutes: 16,
      prerequisites: ['205.1', '205.2'],
      artifactSlot: null,
      concept: `An agent can personalize outreach at a scale no sales team could match — and that is exactly what makes it dangerous. The *same capability* is "a relevant message to the right person at the right moment" and "a hundred thousand unsolicited messages a day." The line between them is not volume alone; it is **consent, relevance, and reputation**.

Three constraints govern automated outreach, and an autonomous system has to encode all three:

- **Consent** — did this person opt in, or at minimum do you have a legitimate, lawful basis to contact them? Regimes like GDPR and CAN-SPAM aren't decoration; unsolicited bulk contact is both illegal in many places and the definition of spam.
- **Relevance** — does the message serve *them*, not just you? Irrelevant "personalization" (their name stitched into a template that ignores their actual situation) reads as exactly what it is.
- **Deliverability & reputation** — email and messaging platforms run **sender-reputation systems**. Spam complaints, spam-trap hits, and high bounce rates degrade your sender score until your messages silently route to spam — for *everyone*, including the people who wanted to hear from you.

The crucial asymmetry: reputation is **slow to build and fast to destroy**, and the punishment is **silent**. You rarely get a clear "you're blocked" — your deliverability just quietly collapses and you find out weeks later. So an autonomous outreach system's guardrails are not a compliance afterthought; they are the thing that keeps the channel *alive*. The correct posture is always the one that protects trust: fewer, consented, genuinely relevant messages, sent within rate limits, beat a blast every time — because the blast burns the channel you need tomorrow.`,
      reframe: {
        analogy: `Automated outreach is governed by **rate limits and a reputation system**, and blasting is a **self-inflicted DDoS**. Email deliverability is, quite literally, a distributed reputation-and-throttling protocol: every mailbox provider scores your sending domain and IP (think of a sender reputation like a live health score), watches your complaint and bounce rates, and throttles or blackholes you when you misbehave. Firing a hundred thousand cold messages at once is you DDoSing other people's inboxes — and the system responds the way any rate-limited system does: it drops you. Warming a domain slowly, staying under sending limits, and keeping complaint rates low is just **respecting the rate limit and protecting your reputation score** so the service keeps accepting your traffic.`,
        breaks: `A technical rate limiter is **transparent and buyable**: you get a clear 429, you back off, or you upgrade your plan for more quota. Sender reputation is neither. There's usually **no explicit error** — spam filtering is silent, so your feedback is delayed and hidden, and you can be "throttled" for weeks without a single failed request. And you **can't just pay for more quota**: reputation is earned socially through consistent good behavior and recovers *slowly* after damage — there is no premium tier that restores trust you burned. So the analogy is right about the mechanism (respect limits, protect the score) but understates the stakes: unlike a 429 you can retry past, a wrecked sender reputation is a slow, silent, expensive climb back — which is exactly why you never spend it on a blast.`,
      },
      workedExample: `Concretely, mailbox providers publish the tripwires. Gmail's sender guidelines tell bulk senders to keep the **spam-complaint rate below 0.3%** (and ideally under 0.1%), and to authenticate, honor one-click unsubscribe, and only mail people who **asked** to hear from them. Cross those lines and your mail starts landing in spam — not just for the annoyed recipients, but for your whole domain.

Now the two strategies, run by an agent. **Strategy A:** scrape 100,000 addresses, generate a lightly-personalized template, and blast it in a day. Even a modest 1% of recipients hitting "spam" is **1,000 complaints** — a complaint rate around 1%, well over triple Gmail's 0.3% ceiling — plus spam-trap hits from the scraped list. Result: sender reputation craters, and within days your legitimate mail (invoices, onboarding, replies to people who *do* want them) silently routes to spam. You DDoS'd inboxes and the network dropped you.

**Strategy B:** mail only a consented, well-targeted segment; warm the domain; keep volume within limits; make every message genuinely relevant; one-click unsubscribe honored instantly. Complaint rate stays near **0.1%**, deliverability stays high, and the channel keeps working next quarter. Strategy B reaches fewer inboxes today and **far more** over any horizon that matters — because it doesn't burn the reputation the channel runs on. The autonomous system must encode B's limits as hard constraints, not suggestions.`,
      branch: {
        scenario: `Your outreach agent has a scraped list of 100,000 contacts and the ability to send all of them a personalized cold email tonight. It also has a smaller list of 4,000 people who explicitly opted in and match your ICP. Sending is nearly free. What do you have the agent do?`,
        choices: [
          {
            label: 'Blast all 100,000 tonight — reach is the whole point and sending is free.',
            correct: false,
            consequence: `**Instructive miss — this is a self-inflicted DDoS.** A scraped 100k list means spam-trap hits and a complaint rate far above the ~0.3% ceiling. Your sender reputation craters silently, and your *legitimate* mail — including to the 4,000 who wanted it — starts routing to spam for weeks. You traded one night's reach for the channel itself, and likely broke consent law doing it.`,
          },
          {
            label: 'Mail only the 4,000 consented, well-matched contacts, within rate limits, with genuinely relevant messages and instant unsubscribe.',
            correct: true,
            consequence: `**Correct.** Consent, relevance, and reputation all point the same way. A targeted, opted-in send keeps your complaint rate low (~0.1%), protects deliverability for everyone, and stays on the right side of the law. You reach fewer inboxes tonight and vastly more over time, because the channel still works next month. Guardrails here are what keep the channel alive.`,
          },
          {
            label: 'Blast the 100,000 but from a separate throwaway domain so your main domain is protected.',
            correct: false,
            consequence: `**Instructive miss — clever, still wrong.** Domain-shuffling to dodge reputation systems is exactly the pattern spam infrastructure is built to detect, and it doesn't fix the real problems: you're still contacting non-consenting people (often unlawfully), still sending irrelevant mail, and still training recipients to distrust your brand when they connect the dots. Protecting your reputation *metric* while spamming isn't ethics; it's evasion, and it damages trust in the company behind the throwaway.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Your agent sends 50,000 emails and 200 recipients mark them as spam. What is your spam-complaint rate, in percent? (Gmail asks bulk senders to stay under 0.3%.)',
          answer: 0.4,
          tolerance: 0.01,
          unit: '%',
          explain: '200 / 50,000 = 0.004 = 0.4%. That is above Gmail\'s 0.3% guideline (and four times its 0.1% ideal), so this send is already in reputation-damaging territory. Complaint rate is a rate, not a raw count — which is why a "small percentage" of a huge blast is still enough to route your whole domain to spam.',
        },
        {
          kind: 'scenario',
          title: 'Tuning the outreach agent',
          intro: 'You are configuring the guardrails on an autonomous outreach agent. Each decision trades reach against trust. Choose the setting that keeps the channel alive.',
          decisions: [
            {
              situation: 'A teammate suggests removing the unsubscribe link "because it lowers reply rates." What do you set?',
              options: [
                { label: 'Remove it — fewer opt-outs means more prospects stay reachable', correct: false, outcome: 'Wrong and often unlawful. One-click unsubscribe is required by Gmail bulk-sender rules and by CAN-SPAM. Removing it converts opt-outs into spam complaints, which hurt reputation far more than an unsubscribe does — and it destroys trust with the exact people you want.' },
                { label: 'Keep one-click unsubscribe and honor it instantly', correct: true, outcome: 'Correct. A frictionless unsubscribe is both legally required and reputation-protective: a quiet opt-out is vastly cheaper than a spam complaint. Respecting the exit is what keeps the channel and the brand healthy.' },
              ],
            },
            {
              situation: 'The agent can send 100,000/day immediately from a brand-new sending domain. Send limit?',
              options: [
                { label: 'Ramp to full volume on day one to hit the quarterly number', correct: false, outcome: 'Wrong. A cold domain blasting 100k/day is the classic spammer signature; mailbox providers throttle or blackhole it and your reputation never recovers cleanly. This is DDoSing inboxes and getting dropped.' },
                { label: 'Warm the domain gradually and cap daily volume within provider limits', correct: true, outcome: 'Correct. Warming and staying under rate limits is exactly respecting the reputation system so the service keeps accepting your traffic. Slower start, durable channel.' },
              ],
            },
            {
              situation: 'You have a scraped list and an opted-in list. Which does the agent contact?',
              options: [
                { label: 'Both — more contacts, more pipeline', correct: false, outcome: 'Wrong. Scraped lists carry spam traps and zero consent, spiking complaints and legal exposure and poisoning deliverability for the consented list too.' },
                { label: 'Only the opted-in, relevant segment', correct: true, outcome: 'Correct. Consent plus relevance keeps complaint rates low and stays lawful. Fewer messages, protected reputation, a channel that still works next quarter.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Set MY outreach guardrails', kind: 'ask', question: 'For my company and jurisdiction, what consent basis, rate limits, and complaint-rate thresholds should my autonomous outreach agent enforce as hard constraints, and how should it auto-pause if deliverability degrades?' },
        { label: 'Harder: reputation recovery', kind: 'harder', concept: 'diagnosing and recovering a damaged sender reputation after a bad send, and why it is slow, silent, and asymmetric versus a technical rate limit' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why is a damaged sender reputation more dangerous than hitting a technical rate limit (a 429)?',
          options: [
            'A 429 is permanent; reputation damage is not',
            'Reputation damage is silent, slow to recover, and cannot simply be bought back with a higher plan',
            'Rate limits affect your whole domain but reputation does not',
            'There is no real difference between them',
          ],
          answer: 1,
          explain: 'A 429 is transparent and buyable — back off or upgrade quota. Sender reputation gives no explicit error (spam filtering is silent), recovers slowly, and can\'t be restored by paying for a premium tier. That asymmetry is why you never spend reputation on a blast.',
        },
        {
          kind: 'mcq',
          prompt: 'An agent can send to a scraped 100k list or a consented, well-matched 4k segment tonight. The right call is to:',
          options: [
            'Send to the 100k — reach is the goal and sending is free',
            'Send only to the consented, relevant 4k within rate limits, with instant unsubscribe',
            'Send to the 100k from a throwaway domain to protect the main one',
            'Send to both lists to maximize pipeline',
          ],
          answer: 1,
          explain: 'Consent, relevance, and reputation all point to the 4k. The scraped blast means spam traps, a complaint rate far above the ~0.3% ceiling, silent deliverability collapse for everyone, and likely unlawful contact. Domain-shuffling is evasion, not ethics, and still spams non-consenting people.',
        },
        {
          kind: 'free',
          prompt: 'Your outreach agent is about to launch. Write the three hard constraints you would encode — one each for consent, relevance, and reputation — and for reputation, name a specific metric and threshold that would auto-pause sending.',
          rubric: 'Strong answer: (1) a consent rule grounded in opt-in or a lawful basis (GDPR/CAN-SPAM aware), not scraped contacts; (2) a relevance rule that ties each message to the recipient\'s real situation/ICP fit rather than superficial name-merge personalization; (3) a reputation rule with a concrete metric and threshold (e.g. auto-pause if spam-complaint rate exceeds ~0.3%, or on rising bounce/spam-trap hits) plus rate-limiting/domain-warming; (4) frames guardrails as keeping the channel alive and protecting trust, not as optional compliance.',
        },
      ],
      commitSummary: 'concept only — you assemble these channels into a compounding loop next.',
    },

    // -----------------------------------------------------------------------
    {
      id: '205.4',
      module: 205,
      title: 'Growth loops that compound without headcount',
      estMinutes: 16,
      prerequisites: ['205.1', '205.2', '205.3'],
      artifactSlot: null,
      concept: `The reason an AI-run company can outgrow its headcount is the **growth loop**: a closed cycle where each turn's output feeds the next turn's input, so results **compound** instead of adding. The canonical one for an autonomous GTM system:

**content produced -> traffic earned -> usage/behavior data collected -> better, more targeted content produced -> more traffic ...**

Every lap, the data from the last lap makes the next batch of content sharper, which earns more traffic, which yields more data. A human team adds growth **linearly** — output scales with people. A loop adds it **geometrically** — output scales with itself, and the machine runs the lap while you sleep.

But a loop is a **multiplier on whatever you feed it**, and here every earlier lesson comes due. A loop wrapped around the *good* pipeline — real programmatic pages (205.1), verified content (205.2), consented outreach (205.3) — compounds trust, traffic, and data into a durable engine. The *identical* loop wrapped around thin pages, unverified generation, or spam compounds **garbage**: it manufactures scaled low-quality content, tanks your domain, and burns your channels faster than any human could. Automating your way to scaled spam is a real, easy outcome — the loop doesn't know good from bad; it amplifies the **sign** of what's inside it.

So the design rule is: put the **quality/consent gate inside the loop**, not beside it. A loop with the verification stage on its critical path compounds quality. A loop that skips the gate for speed compounds its own defects — and does it automatically, at a rate no one is watching.`,
      reframe: {
        analogy: `A growth loop is a **compounding feedback loop** — mathematically, positive feedback, and structurally a **recursion** where each call's return value becomes the next call's argument. That's why it compounds rather than adds: like interest earning interest, or a recursive function accumulating on every frame, the state grows as a function of itself. \`growth(n) = growth(n-1) * gain\` — with gain above 1 you get geometric blow-up, which is precisely the leverage an autonomous company is after. Content this lap becomes data becomes better content next lap: the output is fed back as input, and the system climbs its own returns.`,
        breaks: `Two ways the clean recursion lies. First, **real loops saturate** — the gain isn't constant. Market size is finite, search demand caps out, spam filters and index limits push back, and returns diminish as you scale, so the geometric curve bends into an S, not a straight shot to infinity. A recursion with unbounded growth and no base case is a bug, not a business. Second, and worse: **a positive feedback loop amplifies the sign of its input, defects included.** Recursion with a corrupt return value doesn't self-correct — it propagates the corruption every frame. Wrap the loop around thin pages or spam and it compounds *those*, converting your leverage into scaled damage automatically. The fix is a **damping/guardrail term inside the loop** — the quality and consent gate on the critical path — so the thing that compounds is trust, and the thing that saturates does so gracefully instead of exploding into spam.`,
      },
      workedExample: `**Honest example: the data-content loop, done right.** Consider a review/marketplace pattern (think how sites like TripAdvisor or G2 grow): real user activity generates real data -> that data populates genuinely useful pages -> pages earn search traffic -> new visitors generate more activity and data. Each lap the corpus gets richer and more unique, so the pages get *more* defensible, not less. An AI-run company runs the same loop with agents doing the assembly, but the fuel — real usage data — is what keeps each page substantive (the 205.1 rule) and keeps the loop compounding trust.

**The compounding, quantified.** Suppose the loop grows your verified-content corpus **20% per cycle** starting from 100 articles. Lap by lap: \`100 -> 120 -> 144 -> 172.8\`. After three laps you're near **173** with no added headcount — geometric, because each lap's data sharpens the next lap's output. That's \`100 * 1.2^3\`.

**The same loop, ungated.** Drop the verification and consent gates to "go faster," and the 20% compounds *thin pages and cold-blast contacts* instead. Now every lap manufactures more filler that spends domain reputation and more spam that burns deliverability — the curve still compounds, but toward a demoted domain and dead channels, automatically, while no human is watching the rate. Same recursion, opposite sign.

The design takeaway: the compounding is real and it's the whole point — but it only builds an asset if the **gate lives on the loop's critical path**. Guardrails aren't friction on the loop; they're what decides whether the loop compounds trust or compounds spam.`,
      branch: {
        scenario: `You're designing the content-to-data growth loop for your AI-run company. Compute and infra are cheap, so you can spin the loop as fast as you like. Where do you put the verification and consent gate?`,
        choices: [
          {
            label: 'Outside the loop — let the loop spin at max speed, and run quality checks as a separate offline job later.',
            correct: false,
            consequence: `**Instructive miss.** A gate beside the loop isn't on the critical path, so the loop compounds unverified output for many laps before the offline job ever catches up — and by then the thin pages and bad sends have already spent your reputation. A positive feedback loop with the correction outside it amplifies defects faster than the correction removes them.`,
          },
          {
            label: 'Inside the loop, on the critical path — only verified, consented output feeds the next lap.',
            correct: true,
            consequence: `**Correct.** Putting the gate on the loop's critical path means the thing that compounds is *verified, consented* output, so each lap builds trust and defensibility instead of debt. It's the damping/guardrail term that keeps a positive feedback loop from running away into scaled spam. Slightly slower per lap, durably compounding.`,
          },
          {
            label: 'Skip the gate for now to prove the loop compounds, then add quality controls once you have scale.',
            correct: false,
            consequence: `**Instructive miss — the "grow into it" trap returns.** An ungated loop doesn't wait for you; it compounds its defects at the same geometric rate as its wins, so by the time you "have scale" you have scaled damage — a demoted domain, burned channels, and a reputation cleanup that's slow and silent. You can't bolt the base case onto a runaway recursion after it's already blown the stack.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'A growth loop grows your verified-content corpus by 20% each cycle. Starting from 100 articles, roughly how many do you have after 3 cycles? (Compounding, not adding.)',
          answer: 173,
          tolerance: 2,
          unit: 'articles',
          explain: '100 x 1.2^3 = 100 x 1.728 = 172.8, about 173 — not 160 (which is what simple 20-per-cycle addition would give). The gap between 173 and 160 is the compounding: each cycle grows the base the next cycle multiplies. The same 1.2 factor applied to thin pages or spam would compound those instead, which is why the quality gate has to sit inside the loop.',
        },
      ],
      tutorHooks: [
        { label: 'Design MY growth loop', kind: 'ask', question: 'Given my product, sketch a concrete content-to-data (or referral, or usage) growth loop for my company, name what compounds each lap, and show exactly where the verification/consent gate sits on the critical path.' },
        { label: 'Harder: loop gain, saturation & guardrails', kind: 'harder', concept: 'modeling a growth loop as feedback with a gain factor, where it saturates into an S-curve, and how a quality gate acts as a damping term that prevents runaway spam' },
        { label: 'Critique my loop for runaway-spam risk', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why does a growth loop compound while a human team typically adds growth linearly?',
          options: [
            'Agents are simply faster typists than humans',
            "Each lap's output becomes the next lap's input, so results grow as a function of themselves (geometric), like a recursion accumulating each call",
            'Loops remove the need for any quality control',
            'Human teams cannot use data at all',
          ],
          answer: 1,
          explain: 'A loop feeds its output back as input, so growth is a function of prior growth — geometric compounding, like interest on interest or a recursion accumulating each frame. Human output scales linearly with headcount; a loop scales with itself. Quality control is still required — the loop amplifies whatever sign you feed it.',
        },
        {
          kind: 'mcq',
          prompt: 'The single most important design choice that decides whether a growth loop builds an asset or compounds spam is:',
          options: [
            'Running the loop as fast as compute allows',
            'Placing the verification/consent gate inside the loop, on its critical path',
            'Maximizing the number of laps per day',
            'Removing guardrails so the loop is not slowed down',
          ],
          answer: 1,
          explain: 'A positive feedback loop amplifies the sign of its input. A gate on the critical path means only verified, consented output feeds the next lap, so trust compounds; a gate beside the loop (or skipped for speed) lets defects compound at the same geometric rate. Guardrails are the damping term, not friction.',
        },
        {
          kind: 'free',
          prompt: 'Describe one growth loop for YOUR AI-run company. Name what compounds each lap, estimate a per-lap growth factor and what it becomes after a few laps, and state where the quality/consent gate sits so the loop compounds trust rather than spam.',
          rubric: 'Strong answer: (1) describes a genuine closed loop where each lap\'s output feeds the next (content->traffic->data->better content, referral, or usage-based), not a one-shot campaign; (2) names the compounding quantity and gives a rough geometric estimate (a gain factor over several laps), showing it understands compounding vs adding; (3) acknowledges saturation/diminishing returns rather than assuming infinite growth; (4) places a verification and/or consent gate ON the loop\'s critical path and explains that an ungated loop compounds defects (thin pages, spam) at the same rate, tying back to lessons 205.1-205.3.',
        },
      ],
      commitSummary: 'concept only — you now have the full autonomous GTM playbook: parallelize distribution, gate on substance and consent, and compound trust.',
    },
  ],
}
