import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 102 — Beneficiaries vs funders: the two-sided nonprofit  (BONUS)
//
// A Season 1 bonus module curated for the NON-PROFIT path. It slots in after
// the default module 2 in the nonprofit route. The whole module rests on one
// structural fact: in a nonprofit the people you serve are usually NOT the
// people who pay. Every lesson reframes that split through an engineering lens
// the audience already owns — two-sided platforms, the ad model (user !=
// customer), and Goodhart / reward-hacking for mission drift. Prose-only:
// every lesson is artifactSlot: null with no artifact key.
// ===========================================================================

export const module102: Module = {
  id: 102,
  season: 1,
  bonus: true,
  paths: ['nonprofit'],
  insertAfter: 2,
  title: 'Beneficiaries vs funders: the two-sided nonprofit',
  goal: 'Master the defining structural fact of a nonprofit: the people you serve are usually NOT the people who pay — and serving both without drifting is the core discipline.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '102.1',
      module: 102,
      title: 'The split market',
      estMinutes: 13,
      prerequisites: [],
      artifactSlot: null,
      concept: `In almost every business you have studied so far, one person both *receives* the value and *pays* for it. The customer who loves your product is the customer whose card you charge. A nonprofit breaks that link. The people you serve — your **beneficiaries** — usually do not pay. The people who pay — your **funders**: donors, grantmakers, government contracts — usually receive nothing tangible for themselves. You are running two relationships at once, with two different groups, and neither group's satisfaction automatically implies the other's.

This decoupling is the single structural fact that makes nonprofits hard, and it is the root of most nonprofit dysfunction. In a normal market, revenue is a built-in truth signal: if you stop delivering value, customers stop paying, and you feel it fast. When the payer and the beneficiary are different people, that feedback loop is severed. You can delight funders while failing beneficiaries (a well-marketed program that does not work), or serve beneficiaries beautifully while starving for money (a great program nobody will fund). Money no longer proves impact; applause no longer proves need met.

The discipline of this module is to hold *both* sides deliberately and keep them from drifting apart. You must run beneficiary discovery to know you are delivering real value, and separately run funder discovery to know why anyone pays. Treat them as two customers with two jobs-to-be-done — because that is exactly what they are. Confuse them, or optimize only the one who writes checks, and the mission quietly rots while the bank balance looks fine.`,
      reframe: {
        analogy: `A nonprofit is a **two-sided platform**, like an ad-supported app or a marketplace. On one side are **users** who get the value (readers of Wikipedia, riders matched to drivers); on the other are **customers** who pay (advertisers, the merchant side). Search users never pay the search engine; advertisers do. The product survives only if *both* sides stay healthy — enough users to be worth advertising against, enough advertisers to fund the users' free experience. A nonprofit is the same graph: beneficiaries are the un-billed "user" side, funders are the paying "customer" side, and the organization is the platform in the middle, matching one side's need to the other side's willingness to pay for that need to be met.`,
        breaks: `The analogy breaks on *who benefits from the match*. On an ad platform the advertiser gets direct, measurable value back — clicks, sales — so the two sides are bound by a tight commercial feedback loop. A donor funding a shelter gets no shelter; their "return" is impact they will never personally consume and often cannot directly verify. That missing verification loop is *worse* than an ad platform, not better: advertisers can measure conversions, but donors mostly cannot audit outcomes, which is exactly why nonprofits can drift far before anyone notices. Use the two-sided framing for the structure, but never assume the market will self-correct the way an ad auction does.`,
      },
      workedExample: `**Wikipedia** is the cleanest real illustration (figures illustrative). Its beneficiaries are hundreds of millions of **readers**, who pay nothing. Its funders are a far smaller pool of **donors** — the people who respond to those banner appeals (illustrative: a low single-digit percentage of readers ever give, and the median gift is roughly the price of a coffee). Two different populations, two different jobs. Readers want a fast, neutral, comprehensive encyclopedia. Donors want to *protect* something they believe should exist and stay ad-free — they are buying a feeling of stewardship, not an article.

Notice how decoupled the loops are. The foundation behind it could raise a record year of donations while article quality slips, or readers could be perfectly served while the fundraising banners underperform. Neither number proves the other. A for-profit encyclopedia would get one fused signal — subscriptions — that rises and falls with reader value. Wikipedia must watch **two** dials: reader value (are we serving the mission?) and donor conviction (will anyone keep paying for it?). Managing that split, on purpose, is the whole game — and it is the exact skill the rest of this module builds.`,
      branch: {
        scenario: `You run a free after-school tutoring nonprofit. A board member argues: "Our donations are up 30% this year and our list of eager donors keeps growing — clearly we're succeeding. Let's put all our energy into the donor side." What is the right response?`,
        choices: [
          {
            label: 'Agree — rising donations are the market telling us we deliver value, just like revenue in a startup.',
            correct: false,
            consequence: `**Instructive miss.** In a normal business revenue and value are fused, so rising revenue *is* evidence of value. Here the payer is not the beneficiary — donations rising proves donors are satisfied and says nothing about whether a single child learned more. You have read one of your two dials and assumed it reads for both.`,
          },
          {
            label: 'Donations up is great news on the funder side, but silent on the beneficiary side — get separate evidence tutoring outcomes are real before leaning in.',
            correct: true,
            consequence: `**Correct.** Donor enthusiasm and beneficiary impact are decoupled loops. Celebrate the funding, then go get the *other* signal — attendance, learning gains, beneficiary interviews — because nothing about the donation number tells you the program works. Leaning entirely into donors is how organizations become excellent at fundraising for programs that quietly do not deliver.`,
          },
          {
            label: "Donations don't matter at all — ignore funders and focus only on the kids.",
            correct: false,
            consequence: `**Instructive miss in the other direction.** The two-sided reality cuts both ways: a nonprofit that ignores its funder side runs out of money and serves no one. The lesson is not "funders don't matter" — it is that funder health and beneficiary health are *separate* things you must each track. Drop either side and the platform collapses.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each item by which side of the two-sided platform it belongs to. Beneficiaries RECEIVE the value and usually pay nothing; funders PAY and usually receive no tangible service for themselves. Watch for items that sound important but are really about only one side.',
          buckets: ['Beneficiary side (receives value)', 'Funder side (pays)'],
          items: [
            { text: 'A child getting free tutoring after school', bucket: 'Beneficiary side (receives value)' },
            { text: 'A family served a hot meal at the shelter', bucket: 'Beneficiary side (receives value)' },
            { text: 'A reader looking up a free encyclopedia article', bucket: 'Beneficiary side (receives value)' },
            { text: 'A foundation writing a $250,000 grant check', bucket: 'Funder side (pays)' },
            { text: 'A monthly $15 recurring donor', bucket: 'Funder side (pays)' },
            { text: 'A government agency paying a per-service contract', bucket: 'Funder side (pays)' },
            { text: 'A major donor who wants a named program and quarterly reports', bucket: 'Funder side (pays)' },
          ],
          explain: 'The left bucket is people who consume the mission and pay nothing; the right bucket is people who supply money and consume no service themselves. The whole difficulty of a nonprofit is that these are two different populations. In a for-profit they would be the same person, and one revenue number would tell you everything. Here you must satisfy both groups separately — and, as later lessons show, keep the paying side from silently redefining what the receiving side gets.',
        },
      ],
      tutorHooks: [
        { label: 'Map my two sides', kind: 'ask', question: 'For my nonprofit or idea, help me list my beneficiary population and my funder population explicitly, and name the distinct job-to-be-done for each side.' },
        { label: 'Where could my two dials diverge?', kind: 'ask', question: 'Given my cause, sketch a realistic scenario where my funder dial (money raised) looks great while my beneficiary dial (real impact) is actually failing, and how I would catch it.' },
        { label: 'Critique my reasoning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why is rising donation revenue a weaker signal of impact than rising revenue is in a startup?',
          options: [
            'Because donations are smaller than startup revenue',
            'Because the payer (donor) is usually not the beneficiary, so the payment does not prove value was delivered to the person served',
            'Because nonprofits are not allowed to measure impact',
            'Because donors behave irrationally',
          ],
          answer: 1,
          explain: 'In a startup the payer and the beneficiary are the same person, so payment is evidence of delivered value. In a nonprofit they are decoupled: a rising donation number proves donors are satisfied, not that beneficiaries were helped. You need a separate beneficiary-side signal.',
        },
        {
          kind: 'mcq',
          prompt: "The two-sided platform framing maps a nonprofit's beneficiaries and funders onto which two roles?",
          options: [
            'Employees and managers',
            "The un-billed 'user' side and the paying 'customer' side",
            'Founders and investors',
            'Suppliers and distributors',
          ],
          answer: 1,
          explain: 'Like an ad-supported product, a nonprofit has an un-billed user side (beneficiaries) and a paying customer side (funders). Both sides must stay healthy for the platform to survive, and neither one automatically reports on the other.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR nonprofit or idea, name your beneficiary population and your funder population explicitly, and state one way their two jobs-to-be-done differ. Then name one signal you could watch for each side.',
          rubric: "Strong answer: (1) names a concrete beneficiary population and a concrete funder population that are clearly DIFFERENT groups; (2) articulates a distinct job-to-be-done for each side; (3) proposes one beneficiary-side signal (e.g. an outcome, attendance, interview finding) AND one funder-side signal (e.g. donations, retention, renewal); (4) shows awareness that the two signals are decoupled and one does not prove the other.",
        },
      ],
      commitSummary: 'concept only — this bonus module is prose; you carry the two-sided lens into every path decision that follows.',
    },

    // -----------------------------------------------------------------------
    {
      id: '102.2',
      module: 102,
      title: 'Beneficiary discovery (still do customer discovery)',
      estMinutes: 16,
      prerequisites: ['102.1'],
      artifactSlot: null,
      concept: `Season 1 taught you customer discovery: talk to real people, watch what they do, and never assume you know their problem. That skill does not get suspended because your users do not pay — if anything the stakes are higher. When beneficiaries hold no wallet, they cannot "vote with their feet" the way paying customers do, so the market will not punish you for building the wrong thing. The only thing standing between you and a useless-but-well-funded program is deliberate **beneficiary discovery**.

Same muscles as customer discovery, pointed at the people you serve: interview them, observe their actual context, map the job they are trying to get done, and prototype before you scale. The classic startup failure — falling in love with your solution and assuming the need — is even more common in mission work, because the solution often *feels* obviously good ("clean water!", "literacy!") and the funders are cheering. Feeling good is not evidence.

Two things here are different and non-negotiable. First, **dignity**: beneficiaries are often in vulnerable positions, so discovery must never be extractive, must protect privacy, and should give something back. Second, the principle **"nothing about us without us"** — people affected by a program must hold real power in designing it, not merely be surveyed as data points. Co-design beats consultation, which beats assumption. Practically: run interviews where the beneficiary is the expert on their own life, seat lived-experience voices in the actual decision, and treat a funder's enthusiasm as a *hypothesis* about need — never as confirmation of it. The reward is the same as in any startup: you stop building things nobody wanted, before you have spent the money proving it.`,
      reframe: {
        analogy: `This is **user research with the billing removed**. In a startup, if you skip discovery, paying users delete the app and churn tells you within weeks. Beneficiary discovery is the same interview-and-observe loop — jobs-to-be-done, contextual inquiry, prototype tests — aimed at your users. Think of it as building for an API consumer who *cannot* return an error code: they cannot churn, cannot complain to your billing team, cannot leave a bad review that dents revenue. So you must instrument the feedback channel yourself, deliberately, because the market's automatic error-reporting is switched off.`,
        breaks: `Ordinary user research assumes the user is a free agent who chose your product and can walk away; that power symmetry is often absent here. A beneficiary may depend on your service, fear that honest criticism costs them access, or come from a context you do not share. So naive "move fast, A/B test on the users" tactics can be actively harmful — you would be experimenting on people who cannot opt out. The discovery *intent* transfers; the extractive, high-velocity *tactics* do not. Slow down, get consent, share power, and remember the person cannot just close the tab.`,
      },
      workedExample: `**PlayPumps International** is the cautionary classic (details illustrative). The idea was irresistible to funders: a children's merry-go-round that pumped clean water as kids played — fun, photogenic, and it drew tens of millions in high-profile donations. What it skipped was beneficiary discovery. In practice the pumps often produced far less water than promised, required children's labor (or, absent children, women pushing a merry-go-round in the sun) to work, cost more than the hand pumps they replaced, and broke down with no local repair path. Communities had not asked for them and frequently wanted their old pumps back.

The tell: nearly every signal the organization optimized came from the *funder* side — the story delighted donors — while almost none came from the *beneficiary* side. A week of genuine discovery ("walk us through how you get water today; what happens when this breaks?") would have surfaced the labor, the maintenance, and the output problems before the first installation. The funders felt wonderful; the beneficiaries got a worse pump. That is precisely the gap beneficiary discovery exists to close — the decoupled loop from lesson 102.1, failing in the wild.`,
      branch: {
        scenario: `You are launching a job-training program for recently unemployed workers. A major funder is excited and wants to launch in six weeks. You have talked to zero prospective participants. The funder says: "We already know they need coding skills — let's just build it." What do you do?`,
        choices: [
          {
            label: "Insist on beneficiary discovery interviews first — even a compressed round — treating the funder's 'they need coding' as a hypothesis to test.",
            correct: true,
            consequence: `**Correct.** The funder's conviction is a hypothesis about need, not evidence of it. A short, respectful discovery round ("walk me through your last job search; what actually blocked you?") routinely overturns the obvious answer — maybe the barrier is childcare, transit, a credential, or interview confidence, not coding. Test before you build; it is far cheaper than a funded program nobody can use.`,
          },
          {
            label: "Build the coding curriculum on the funder's timeline — they're paying and they clearly understand the space.",
            correct: false,
            consequence: `**Instructive miss.** This is assuming the need and letting the payer define the beneficiary's problem — the exact PlayPumps trap. The funder pays, but the funder is not the person job-hunting. Launch on their assumption and you may run a polished program that solves a problem your participants do not have.`,
          },
          {
            label: 'Send participants a multiple-choice survey asking whether they want coding training, then proceed.',
            correct: false,
            consequence: `**Partial credit, but weak.** A leading survey ("do you want the thing we already plan to build?") is consultation dressed as discovery and invites yes-bias — it is not "nothing about us without us." Open, observational interviews where the beneficiary is the expert on their own barriers beat a checkbox that merely ratifies your existing plan.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'rank',
          prompt: 'Put a respectful, non-extractive beneficiary discovery process in the order you would actually run it — from reaching the right people to acting on what you learn. The ordering that protects dignity and avoids assuming the need should come out on top.',
          items: [
            'Identify and reach the actual beneficiaries — not proxies or funders who speak for them',
            'Get informed consent and design the interaction to be non-extractive (protect privacy, give something back)',
            'Ask open questions about their current reality and the job they are trying to get done',
            'Observe their real context and behavior, not just their stated answers',
            'Co-design a prototype WITH lived-experience voices holding real decision power',
            'Test the prototype small, then feed results back to the community before scaling',
          ],
          explain: 'You reach the real people first (proxies smuggle in assumptions), earn consent and design for dignity before extracting anything, then learn through open questions and direct observation rather than leading surveys. Co-design puts affected people in the decision — "nothing about us without us" — and a small test with a feedback loop closes the discovery before you commit money at scale. Skip to the middle and you are optimizing a solution you never validated a need for.',
        },
      ],
      tutorHooks: [
        { label: 'Design a dignified interview', kind: 'ask', question: 'Help me design one beneficiary discovery interview for my program that is not extractive: who to talk to, three open questions, how to get consent, and one way to give something back.' },
        { label: 'Harder: spot my assumed need', kind: 'harder', concept: 'separating a funder-driven assumed need from a validated beneficiary need in my specific program' },
        { label: 'Critique my plan', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: "Why does the risk of 'building the wrong thing' rise when your users are beneficiaries who do not pay?",
          options: [
            'Beneficiaries are less articulate than paying customers',
            'Without a payment or churn signal, the market will not automatically punish a useless program, so bad fit can persist while funding continues',
            'Nonprofits have smaller teams',
            'Discovery is not allowed in the social sector',
          ],
          answer: 1,
          explain: 'Paying customers punish a bad product by churning, which forces a fix. Beneficiaries who do not pay cannot send that signal, so a poorly-fitting program can run for years — especially if funders keep cheering. Deliberate beneficiary discovery replaces the missing market signal.',
        },
        {
          kind: 'mcq',
          prompt: "The principle 'nothing about us without us' most directly requires that:",
          options: [
            'Surveys use multiple choice',
            'People affected by a program hold real decision-making power in its design, not just provide data',
            'Funders approve the final program',
            'Beneficiaries sign confidentiality agreements',
          ],
          answer: 1,
          explain: 'It is a demand for shared power, not just consultation. Affected people must be at the table where decisions are actually made — co-design over consultation over assumption — which is why a leading survey does not satisfy it.',
        },
        {
          kind: 'free',
          prompt: 'Describe how you would run one beneficiary discovery interview for your program without it being extractive: who you would talk to, one open question you would ask, and one concrete way you would protect their dignity or give something back.',
          rubric: 'Strong answer: (1) names a real beneficiary (not a proxy or funder) to interview; (2) gives a genuinely OPEN question about their current reality, not a leading yes/no about the planned solution; (3) names a concrete dignity or reciprocity measure (consent, privacy, compensation, sharing findings back); (4) frames the funder-assumed need as a hypothesis to test rather than a fact.',
        },
      ],
      commitSummary: 'concept only — carry the discovery discipline into how you design any real program.',
    },

    // -----------------------------------------------------------------------
    {
      id: '102.3',
      module: 102,
      title: 'Understanding funders as a second customer',
      estMinutes: 15,
      prerequisites: ['102.1', '102.2'],
      artifactSlot: null,
      concept: `You have done beneficiary discovery. Now do the *other* discovery — because funders are a second customer, with their own jobs-to-be-done, and "they should just give because the cause is good" is as naive as "users should just buy because our product is good." Nobody funds a mission; they fund what the mission does *for them*.

What do donors and grantmakers actually "buy"? Rarely the literal service. Usually one of three things: **impact** (evidence their money changed an outcome they care about — the ROI buyer), **belonging** (membership in a community or movement, the feeling of being part of something — the tribe buyer), and **identity** (an expression of who they are and their values, often signaled to others — the self-concept buyer). Institutional grantmakers add a fourth flavor: **portfolio fit and reporting** — they deploy someone else's capital against a stated strategy and need you to make their own upward reporting easy.

So build **funder personas** the same way you built user personas. The major donor who wants a named building and quarterly impact photos is a different customer from the small recurring donor who wants a five-second, frictionless way to feel good each month, who differs again from the program officer who needs your outcomes to map onto their foundation's logic model. Each has a distinct job, a distinct "currency" of proof, and a distinct failure mode when you get it wrong. Treat "funders" as one blob and you will write appeals that resonate with nobody. The goal is not manipulation — it is the empathy you owe any customer: understand what they are really trying to accomplish, and be honest about whether you can deliver it. Fund the mission by serving the funder's real job, without letting that job redefine the mission (that is next lesson).`,
      reframe: {
        analogy: `Funders are a **second customer segment**, and fundraising is **B2B sales and product-market fit** all over again — just with "impact" as the product. Charity: water is the textbook build: it split its two customers cleanly. Public donors "buy" guilt-free giving and proof — a well-known "100% model" promises every public dollar goes to water projects, while a separate set of private donors covers operations — and donors receive photos and GPS coordinates of the specific well their money built. That is a *product* designed around a funder job-to-be-done: "I want to know my gift actually did something." Same discovery, personas, and value-proposition work you would run for any paying customer.`,
        breaks: `The analogy tempts you toward pure customer-obsession — "give the paying customer exactly what they want." In a startup that is the whole job. Here it is a *trap*, because your paying customer is not your beneficiary, so maximizing funder satisfaction can directly harm the mission (a "100% to the field" promise, for instance, can starve the very overhead that makes programs work — see the next lesson). So run the funder like a customer for *discovery and communication*, but not for *product direction*: the beneficiary's need, not the funder's preference, must set what you actually build.`,
      },
      workedExample: `Consider a mid-size literacy nonprofit mapping its funder base into personas (illustrative):

| Persona | What they "buy" | Proof currency | Failure mode |
|---|---|---|---|
| **Grace, the major donor** | Impact + legacy | A named program, quarterly outcome stories | Feels like an ATM if she gets only receipts |
| **Sam, the $15-a-month recurring** | Belonging + identity | Frictionless signup, a monthly "you did this" note | Churns silently if giving ever feels effortful |
| **The Hollis Foundation** | Portfolio fit | Outcomes mapped to their logic model, clean reporting | Will not renew if your report does not fit theirs |

Same organization, one mission, three completely different products of *communication*. The appeal that lands Grace (a personal outcome narrative and a lunch) would feel heavy and guilt-tripping to Sam, whose entire job-to-be-done is "let me feel good in five seconds and get out of my way." The report that renews Hollis (metrics against their framework) would bore Grace.

Charity: water made this concrete at scale: separating a public "buys proof and purity" donor from a private "funds the boring operations" donor let each group get the product it actually wanted. The lesson is not to have three messages for their own sake — it is that funders, like users, segment by *job*, and discovery tells you the segments. Guess the personas and you optimize the average appeal, which by definition fits no real person.`,
      branch: {
        scenario: `A wealthy prospective donor offers a transformative gift, but only for a shiny new program that is not your strongest work — she is clearly buying the *identity* of backing something innovative. Your existing core program serves beneficiaries better but is "boring" to her. How do you handle the funder-as-customer here?`,
        choices: [
          {
            label: 'Take the gift and spin up the new program — a customer wants what she wants, and the money is real.',
            correct: false,
            consequence: `**Instructive miss.** Yes, understand her job (she is buying innovation and identity). But funders drive *communication*, not *product direction*. Building a weaker program because the payer prefers it is the mission-drift trap you study next — you would be letting the customer redefine the product at the beneficiary's expense.`,
          },
          {
            label: "Understand her real job (backing something innovative) and reframe your high-impact core work to satisfy it — or, if you honestly can't, decline rather than distort the mission.",
            correct: true,
            consequence: `**Correct.** This is customer empathy without customer capture: take her jobs-to-be-done seriously and look for an honest overlap between what she wants to buy and what actually serves beneficiaries. Often you can position core work as the real innovation. If no honest overlap exists, a disciplined no protects the mission — the gift is not worth drifting for.`,
          },
          {
            label: 'Lecture her that she should fund what is effective, and refuse to engage with her motivations.',
            correct: false,
            consequence: `**Instructive miss.** Ignoring the funder's real job is as naive as ignoring a customer's. She is not obligated to fund your priorities out of duty; recognizing that she is buying identity is the *start* of finding honest overlap, not a moral failing to scold. You can honor her motivation and steer toward impact — dismissing it just loses the relationship.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Each quote is a funder telling you what they are really buying. Sort each into the underlying job-to-be-done. Listen for the motive under the words: proof of results, connection to a community, or expression of who they are.',
          buckets: ['Impact (proof it worked)', 'Belonging (part of something)', 'Identity (who I am)'],
          items: [
            { text: '"Show me the data that my gift actually moved the needle."', bucket: 'Impact (proof it worked)' },
            { text: '"Send me the specific outcomes so I can report results to my board."', bucket: 'Impact (proof it worked)' },
            { text: '"I love being part of this community of supporters."', bucket: 'Belonging (part of something)' },
            { text: '"The monthly member calls make me feel like an insider."', bucket: 'Belonging (part of something)' },
            { text: '"I give because this is who I am and what I stand for."', bucket: 'Identity (who I am)' },
            { text: '"I proudly wear the wristband so people know I back this cause."', bucket: 'Identity (who I am)' },
          ],
          explain: 'Impact buyers want evidence and outcomes; belonging buyers want connection and insider status; identity buyers want to express and signal their values. Most real donors mix these, but one usually dominates, and it tells you what proof and what message will satisfy their job. Guess wrong — send outcome spreadsheets to an identity buyer, or wristbands to a foundation officer — and even a generous funder feels unseen.',
        },
        {
          kind: 'numeric',
          prompt: 'Your nonprofit raised 500,000 dollars this year. One foundation gave 300,000 dollars of that total. What percent of your revenue came from that single funder?',
          answer: 60,
          tolerance: 0.5,
          unit: '%',
          explain: '300,000 / 500,000 = 0.60 = 60%. Treating funders as customers also means watching concentration: 60% from one funder is like a business with one customer worth most of its revenue. If that funder shifts strategy or renews on new terms, they can dictate your direction — a structural pressure toward the mission drift covered next.',
        },
      ],
      tutorHooks: [
        { label: 'Draft my funder personas', kind: 'ask', question: 'Help me draft two or three funder personas for my cause: who they are, whether they are mainly buying impact, belonging, or identity, and the proof currency each one needs.' },
        { label: 'Harder: reframe core work as innovation', kind: 'harder', concept: 'honestly positioning my proven core program to satisfy a donor who wants to buy innovation, without distorting the program' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: "The three things donors most often 'buy' are best summarized as:",
          options: [
            'Overhead, salaries, and rent',
            'Impact, belonging, and identity',
            'Tax deductions only',
            'Products and services for their own use',
          ],
          answer: 1,
          explain: 'Donors rarely buy the literal service. They buy evidence their money changed an outcome (impact), membership in a community (belonging), or an expression of who they are (identity). Grantmakers add portfolio fit and easy reporting.',
        },
        {
          kind: 'mcq',
          prompt: "Why build separate funder personas instead of one 'donor' appeal?",
          options: [
            'To manipulate donors into giving more',
            'Because funders segment by distinct jobs-to-be-done, so an averaged appeal fits no real person',
            'Because regulations require segmented appeals',
            'Because major donors dislike small donors',
          ],
          answer: 1,
          explain: 'Funders segment by job just as users do. A message tuned to the average of a major donor, a $15 recurring giver, and a foundation officer resonates with none of them. Personas let each funder get the product of communication that matches their real job.',
        },
        {
          kind: 'free',
          prompt: 'Name one funder persona for your cause: who they are, which of impact / belonging / identity they are mainly buying, and the one proof currency that would satisfy their job.',
          rubric: 'Strong answer: (1) describes a concrete, plausible funder persona for the learner\'s cause; (2) identifies which of impact, belonging, or identity dominates their motive; (3) names a specific proof currency (outcome data, a member community, a signal/badge, a report format) that matches that motive; (4) treats the funder as a customer with a job, not as an obligation, without proposing to distort the mission to please them.',
        },
      ],
      commitSummary: 'concept only — you now run BOTH discoveries: beneficiaries for the mission, funders for the money.',
    },

    // -----------------------------------------------------------------------
    {
      id: '102.4',
      module: 102,
      title: 'Mission drift: when you optimize for the payer',
      estMinutes: 17,
      prerequisites: ['102.1', '102.2', '102.3'],
      artifactSlot: null,
      concept: `Here is the failure mode the whole module has been building toward. **Mission drift** is what happens when you quietly start optimizing for the payer instead of the beneficiary. No one decides to abandon the mission; you just keep making locally reasonable choices that please funders, and one day your program serves donors' preferences better than beneficiaries' needs. The two-sided structure makes drift the *default* direction, because the funder side holds the money and the loud feedback, while the beneficiary side is often silent.

The engineering name for this is **Goodhart's law**: when a measure becomes a target, it ceases to be a good measure. You optimize a **proxy** because the true objective — beneficiary wellbeing — is hard to measure, and the proxy — donations, a funder-friendly metric, a heart-warming story — is easy. Optimize the proxy hard enough and it *diverges* from the objective it was meant to stand in for.

The textbook example is the **overhead ratio**:

$$\\text{overhead ratio} = \\frac{\\text{admin} + \\text{fundraising}}{\\text{total expenses}}$$

Donors and watchdog sites latched onto "low overhead equals efficient," so nonprofits optimized it — and starved themselves of the training, systems, and staff that make programs actually work. Chasing the funder-preferred proxy produced *worse* outcomes for beneficiaries. It became such a recognized problem that the major charity evaluators publicly called it the "overhead myth."

Guardrails against drift: (1) define and measure a real beneficiary-outcome metric, and give it authority over proxies; (2) seat lived-experience voices where decisions are actually made; (3) pressure-test every funder-driven change with "does this serve the beneficiary, or just the payer?"; (4) be willing to decline money that would bend the mission. Drift is a gradient; guardrails are what keep you from rolling down it.`,
      reframe: {
        analogy: `Mission drift is **optimizing a proxy metric that diverges from the true objective** — reward hacking. Your loss function should be beneficiary wellbeing, but that is expensive to evaluate, so you train against a cheap surrogate: dollars raised, overhead ratio, a viral story. The optimizer — your whole organization, quarter after quarter — will ruthlessly exploit the surrogate, and Goodhart guarantees the surrogate and the true objective come apart under pressure. You end up with a model that scores beautifully on the proxy and fails the task: a fundraising machine that has forgotten what it was raising money to do.`,
        breaks: `Reward hacking in ML is usually framed as the *agent* gaming a *fixed* reward. Here the reward itself is set by an external party (funders) with their own goals, and it *shifts* — it is more like your objective being slowly rewritten by whoever pays for the compute. And unlike a model, an organization has *memory and agency*: it can notice the divergence and choose guardrails, decline the misaligned reward, or renegotiate it. Drift is not thermodynamically inevitable; it is a governance choice. The analogy diagnoses the failure — it does not excuse it.`,
      },
      workedExample: `Picture two youth-mentoring nonprofits (illustrative). **Alpha** proudly advertises a 92% "program" ratio — only 8% overhead. **Beta** runs at 75% program, 25% overhead. A naive donor picks Alpha every time.

Look closer. Alpha hit 8% by cutting mentor training, skipping outcome measurement, and underpaying staff who churn every year — so its mentors are unprepared and no one even knows whether kids benefit. Beta's 25% funds real training, a data system that tracks each youth's outcomes, and retained staff. Beta's mentored kids show measurably better results; Alpha's number *looks* better and *delivers* worse. The overhead ratio, optimized as a target, stopped measuring efficiency and started measuring willingness to starve capacity.

This is not just a framing device. In 2013 the leaders of the main U.S. charity watchdogs (GuideStar, Charity Navigator, and the BBB Wise Giving Alliance) jointly published an open "overhead myth" letter urging donors to stop using the overhead ratio as their primary measure of a nonprofit's worth — a public admission that a beloved funder proxy had been driving the sector *away* from impact. That is Goodhart's law with a body count of good programs. The fix is not "ignore costs" but "measure the objective — beneficiary outcomes — and give it authority over the proxy."`,
      branch: {
        scenario: `A $250,000 grant is on the table, but the funder wants you to shift your homelessness program from long-term housing (what your outcome data shows actually works) toward short-term emergency shelters (which photograph better and give the funder a bigger "people helped" headcount). The grant would nearly double your budget. What do you do?`,
        choices: [
          {
            label: 'Take the grant and pivot to shelters — doubling the budget lets us help far more people, and headcount is still impact.',
            correct: false,
            consequence: `**The classic drift move.** You would be optimizing the funder's proxy (photogenic headcount) over your beneficiary-outcome metric (people durably housed), which your own data says works better. "More people helped" on a worse intervention is Goodhart in action — the number climbs while the mission erodes. Doubling the budget to do the less-effective thing just buys scale of the wrong outcome.`,
          },
          {
            label: "Reshape the grant toward your proven model; if the funder insists on the drift, decline or take a smaller aligned amount — protect the outcome metric's authority.",
            correct: true,
            consequence: `**Correct.** The guardrail is that your beneficiary-outcome metric outranks funder preference. First seek honest overlap — can you fund housing and still satisfy the funder's real job? If they truly require the less-effective pivot, a disciplined no (or a scoped, aligned slice) protects the mission. Money that bends you off your best outcome is not a bargain; it is drift with a wire transfer.`,
          },
          {
            label: 'Take the grant but quietly keep doing housing while reporting shelter numbers.',
            correct: false,
            consequence: `**Instructive miss.** Beyond the obvious integrity and legal problems, this pretends the tension away instead of resolving it — you would be managing to two conflicting objectives and misreporting, which corrodes trust with the funder and your own team. Drift is resolved by *honest* alignment or a clean no, never by fraud. The tension is real; face it openly.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'A nonprofit spends 1,200,000 dollars total this year: 300,000 dollars on administration and fundraising combined, and the rest on programs. What is its overhead ratio, in percent?',
          answer: 25,
          tolerance: 0.5,
          unit: '%',
          explain: '300,000 / 1,200,000 = 0.25 = 25%. The trap is treating a lower number as automatically better. An organization can drive this ratio down by cutting training, measurement, and staff — starving the very capacity that produces outcomes. The overhead ratio is a proxy; optimize it as a target and Goodhart\'s law makes it diverge from real efficiency.',
        },
      ],
      tutorHooks: [
        { label: 'Find my drift risk', kind: 'ask', question: 'For my cause, name the funder-preferred proxy most likely to pull me off my true beneficiary objective, and how the drift would show up before I noticed it.' },
        { label: 'Design my guardrails', kind: 'ask', question: 'Help me define one real beneficiary-outcome metric for my program and three concrete guardrails that give it authority over funder-preferred proxies.' },
        { label: 'Critique my thinking', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: "Goodhart's law explains mission drift because:",
          options: [
            'Nonprofits are simply badly managed',
            'When a proxy (like donations or overhead ratio) becomes the target, it diverges from the true objective (beneficiary wellbeing) it was meant to represent',
            'Beneficiaries keep changing their minds',
            'Funders are fundamentally dishonest',
          ],
          answer: 1,
          explain: 'You optimize an easy-to-measure proxy in place of a hard-to-measure objective. Push on the proxy hard enough and it comes apart from the objective — the fundraising or overhead number improves while beneficiary outcomes quietly worsen. That divergence is mission drift.',
        },
        {
          kind: 'mcq',
          prompt: "The 'overhead myth' episode shows that:",
          options: [
            'Low overhead always means an efficient charity',
            'Optimizing a funder-preferred proxy (overhead ratio) drove nonprofits to starve the capacity that produces real outcomes',
            'Overhead should be as high as possible',
            'Watchdog sites never change their advice',
          ],
          answer: 1,
          explain: 'The overhead ratio became a target, so organizations cut training, measurement, and staff to look efficient — worsening real impact. Major watchdogs publicly disowned it as a primary measure. The fix is to elevate a beneficiary-outcome metric above the proxy, not to ignore costs entirely.',
        },
        {
          kind: 'free',
          prompt: 'Name the beneficiary-outcome metric that should have authority over proxies in your cause, and describe one funder-preferred proxy that could pull you away from it. What guardrail would you put in place?',
          rubric: 'Strong answer: (1) names a concrete beneficiary-OUTCOME metric (an actual change in beneficiaries, not an activity count or a fundraising figure); (2) identifies a specific funder-preferred proxy (donations, overhead ratio, headcount, a photogenic story) that could cause drift; (3) explains how optimizing the proxy would diverge from the true objective (Goodhart); (4) proposes at least one concrete guardrail giving the outcome metric authority — e.g. lived-experience voices in decisions, a decline-the-money rule, or a change-review test.',
        },
      ],
      commitSummary: 'concept only — you leave this bonus module able to name mission drift, its Goodhart mechanism, and the guardrails that stop it.',
    },
  ],
}
