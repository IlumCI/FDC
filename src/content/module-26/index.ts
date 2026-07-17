import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 26 — Legal & compliance II (for real)  (SEASON 2)
//
// Season 1 taught the concepts on a disposable startup.json. This module puts
// the learner in front of the REAL legal scaffolding of a venture: choosing and
// forming an entity, papering the contracts and IP that make the company
// ownable, and meeting privacy/employment basics as ongoing obligations. The
// through-line is judgment: when to DIY, when to use a service, and when to pay
// a lawyer. Every lesson is artifactSlot:null; real work is captured through
// the interactive blocks (platformTask writes "My venture").
//
// IMPORTANT: This module is EDUCATIONAL and is NOT legal advice. Law is deeply
// jurisdiction-dependent and changes over time. Every lesson repeats a
// non-advice banner and keeps specifics generic on purpose; the learner is
// pushed to consult a qualified lawyer for their actual situation.
// ===========================================================================

export const module26: Module = {
  id: 26,
  season: 2,
  title: 'Legal & compliance II (for real)',
  goal: 'Stand up the real legal scaffolding: incorporate, get contracts and IP right, and meet privacy/employment basics — knowing when to DIY vs hire a lawyer.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '26.1',
      module: 26,
      title: 'Incorporating for real',
      estMinutes: 18,
      prerequisites: [],
      artifactSlot: null,
      concept: `**Educational, not legal advice. Entity law is jurisdiction-dependent and changes — treat everything here as a way to reason, then confirm specifics with a qualified lawyer or accountant in your country.**

Incorporating is the act that turns "you, personally, doing risky things" into "a company doing them." Two benefits are the whole point. First, **limited liability**: a properly run entity is a legal person, so most business debts and lawsuits stop at the company instead of reaching your house and savings. Second, **ownership you can transfer**: an entity can issue shares, take investment, grant employee equity, and one day be acquired — none of which a sole individual can do cleanly.

The two questions you must actually answer are **which entity** and **where**. In common startup terms this is usually a choice between a **pass-through** form (an LLC or its local equivalent — flexible, simple, taxed once at the owner level) and a **corporation** (a C-corp or equivalent — the form institutional investors expect, able to issue stock options and reinvest profits, but with more formalities). "Where" matters because you register under a specific jurisdiction's law; many US startups pick Delaware for reasons of familiar case law and investor expectations, but that is a convention, not a rule, and it can be the *wrong* answer for a bootstrapped local business.

The real skill this lesson builds is **routing the decision**: a standard single-founder software company can often incorporate through a reputable *formation service* in an afternoon; a company with co-founders splitting equity, unusual tax situations, or a cross-border structure should pay a *lawyer* before filing, because unwinding a bad structure later is far more expensive than getting advice up front. Knowing which situation you're in is the judgment that saves you the most money.`,
      reframe: {
        analogy: `Incorporating is **wrapping your code in a process boundary**. Before you incorporate, you and the business share one address space: a fault in the business — a lawsuit, a debt — can corrupt *your* memory (your personal assets). Filing the entity spawns a separate process with its own protected memory and a defined interface (shares, a board, signatures). A crash inside that process is contained; it returns an error at the boundary instead of taking down the whole machine. Limited liability is memory isolation for your net worth.`,
        breaks: `Process isolation is enforced automatically by the OS; an entity's "isolation" is enforced only if **you keep running it as a separate process**. Commingle personal and company money, sign personal guarantees, or skip the required formalities and a court can "pierce the corporate veil" — the equivalent of the kernel letting one process scribble into another's memory because you disabled protection yourself. And the boundary has a real per-year cost the OS analogy hides: filings, a registered agent, and taxes are the "syscall overhead" of keeping the process alive. Isolation is a discipline you maintain, not a flag you set once.`,
      },
      workedExample: `**Stripe Atlas (a real, widely used incorporation service).** For a standard software startup, Atlas will form a US entity — a Delaware C-corp or an LLC — generate and file the incorporation documents, help obtain a federal tax ID (an EIN), issue founder equity, and prompt the time-sensitive tax election that early founders often forget. At time of writing it charges a flat fee of about $500 (which includes state filing and the first year of registered-agent service) and roughly $100 per year afterward for the registered agent. Its documents were prepared with a well-known startup law firm. (Fees and details change — verify on the official site before relying on any number here.)

Why cite it? Because it makes the DIY-vs-service-vs-lawyer decision concrete. For the *modal* technical founder — one or two people, standard equity, a plain software product, planning to maybe raise later — a service like this does in an afternoon, correctly, what would take you days of research and is easy to get subtly wrong (missing the EIN, botching the equity issuance, blowing a tax-election deadline). That is the sweet spot for a service: a **standardized, high-volume, low-variance** task.

The transferable lesson is the boundary, not the brand. A service is right when your situation is standard. The moment your situation is *not* standard — three founders arguing over a split, a spouse's business interest, non-US founders, IP currently owned by someone else, an unusual tax posture — the cheap flat fee stops being a bargain, because it will happily file a structure that's wrong for you. That is precisely when you spend a few hundred dollars on a lawyer *first*. Same task, different variance, different tool.`,
      branch: {
        scenario: `You're a solo founder building a standard SaaS product. You have no co-founders yet, no revenue, and you might raise money in a year or two. You've been paralyzed for two weeks reading about Delaware vs. your home state, C-corp vs. LLC, and whether to hire a lawyer. What's the disciplined move?`,
        choices: [
          {
            label: 'Keep researching until you fully understand every tax nuance and can defend the "perfect" structure before you file anything.',
            correct: false,
            consequence: `**Analysis paralysis on a standard case.** Your situation is the textbook low-variance one — single founder, plain software, standard equity. The marginal tax nuance you're agonizing over rarely changes the right answer for a pre-revenue solo SaaS, and the weeks lost are real. Structure can be adjusted later with counsel if your situation changes; indefinite research is just fear wearing a lab coat.`,
          },
          {
            label: 'Use a reputable formation service to incorporate the standard entity now, get your tax ID and equity done correctly, and keep a lawyer\'s number for when your situation becomes non-standard.',
            correct: true,
            consequence: `**Correct.** This is routing by variance. A single-founder standard software company is exactly the high-volume, low-variance task a service does well and cheaply — including the easy-to-miss pieces (tax ID, equity issuance, election deadlines). You get a clean, investor-legible entity in an afternoon and reserve lawyer spend for the moment it earns its cost: co-founders, unusual tax facts, or a financing.`,
          },
          {
            label: 'Hire a top startup law firm at premium hourly rates to handle the entire formation from scratch, to be safe.',
            correct: false,
            consequence: `**Over-buying for a standard task.** Paying premium hourly rates to hand-form a vanilla single-founder entity is spending a specialist's time on a solved, commoditized problem. Save the lawyer for genuinely non-standard decisions (equity splits, cross-border structure, financings) where their judgment actually changes the outcome. Here it mostly buys you a bigger invoice for the same certificate.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Educational simplification (NOT legal/tax advice). Sort each situation by which direction it usually points — toward a pass-through form (LLC-style) or toward a corporation (C-corp-style). Real cases are messier and jurisdiction-specific; use this to build intuition, then confirm with a professional.',
          buckets: ['Points toward an LLC / pass-through', 'Points toward a C-corp / corporation'],
          items: [
            { text: 'You plan to raise venture capital and grant employee stock options', bucket: 'Points toward a C-corp / corporation' },
            { text: 'You want simple pass-through taxation and minimal formalities', bucket: 'Points toward an LLC / pass-through' },
            { text: 'You expect institutional investors to lead a priced financing round', bucket: 'Points toward a C-corp / corporation' },
            { text: 'You are a solo consultant wanting liability protection and simple taxes', bucket: 'Points toward an LLC / pass-through' },
            { text: 'You want a standard option pool to grant equity to early hires', bucket: 'Points toward a C-corp / corporation' },
            { text: 'You want flexibility in how a few partners split profits, with less overhead', bucket: 'Points toward an LLC / pass-through' },
          ],
          explain: 'Rough rule of thumb only: if you intend to raise venture capital and issue stock options, investors typically expect a corporation (often a Delaware C-corp in the US). If you are bootstrapping, consulting, or want minimal formality and single-layer taxation, a pass-through form is often simpler. These are conventions with many exceptions and heavy jurisdiction/tax dependence — the value is knowing which questions to ask a professional, not memorizing an answer.',
        },
        {
          kind: 'rank',
          prompt: 'Put a typical incorporation into a sane sequence. (Illustrative US-style ordering — your jurisdiction will differ in details and names. Not legal advice.) Order the steps from first to last.',
          items: [
            'Decide your entity type and home jurisdiction (get advice if your situation is non-standard)',
            'Choose and clear an available company name in that jurisdiction',
            'File the formation document (e.g. certificate of incorporation / articles) with the registrar',
            'Appoint a registered agent and adopt governing documents (bylaws / operating agreement)',
            'Obtain a business tax identification number (an EIN in the US)',
            'Issue founder equity and handle any time-sensitive tax elections (e.g. a US 83(b) within its deadline)',
            'Open a business bank account and keep company and personal money strictly separate',
          ],
          explain: 'You decide entity and jurisdiction first because everything downstream depends on it, then clear a name, then file the formation document that legally creates the entity. Governing documents and a registered agent make it operable; the tax ID lets it transact; issuing equity and any elections lock in ownership and tax treatment (some deadlines are unforgiving). The final, ongoing step — a separate bank account — is what actually preserves your limited liability day to day. Names, forms, and deadlines vary by jurisdiction; verify locally.',
        },
        {
          kind: 'numeric',
          prompt: 'Cost of the boundary. A formation service charges a flat $500 up front (which includes the first year of registered-agent service) and then $100 per year for the registered agent after that. What is your total cost over the first three years, in dollars? Compute 500 + 100 + 100.',
          answer: 700,
          tolerance: 0,
          unit: '$ (3-year total)',
          explain: 'Year 1 is $500 (registered agent included). Years 2 and 3 add $100 each: 500 + 100 + 100 = $700 over three years. The point is not the exact figure (which changes) but that limited liability has a small, predictable recurring cost — the "syscall overhead" of keeping the entity alive. Budget for it; a lapsed registered agent or missed annual filing can administratively dissolve the very boundary you paid to create.',
        },
        {
          kind: 'scenario',
          title: 'Service, lawyer, or DIY?',
          intro: 'Routing the incorporation decision by variance. For each situation, pick the tool that fits. (Educational, not legal advice.)',
          decisions: [
            {
              situation: 'You are a single founder forming a standard software company with plain-vanilla founder equity and no unusual tax facts. Which route?',
              options: [
                { label: 'File everything yourself from raw state forms to save the fee', correct: false, outcome: 'Possible, but risky for the pieces that are easy to botch — the tax ID, equity issuance, and time-sensitive elections. The savings are small; the failure modes (a blown election deadline) are expensive and sometimes irreversible.' },
                { label: 'Use a reputable formation service', correct: true, outcome: 'Correct for the modal case. A standard single-founder software entity is exactly the high-volume, low-variance task a service does correctly and cheaply, including the easy-to-miss steps.' },
                { label: 'Retain a premium law firm to hand-form it', correct: false, outcome: 'Over-buying. You are paying specialist rates for a commoditized, solved task. Save the lawyer for decisions where judgment changes the outcome.' },
              ],
            },
            {
              situation: 'Now a co-founder is joining with a negotiated equity split and vesting, one founder is a non-resident, and you are about to take investment on custom terms. Which route?',
              options: [
                { label: 'Keep using the generic service templates as-is', correct: false, outcome: 'Dangerous. Generic templates cannot reason about your equity split, vesting, cross-border facts, or bespoke financing terms — and they will happily file a structure that is wrong for you, which is costly to unwind.' },
                { label: 'DIY it from online templates to move fast', correct: false, outcome: 'This is the highest-variance moment in the company\'s legal life; DIY here maximizes the chance of an expensive structural mistake baked into the cap table.' },
                { label: 'Pay a startup lawyer before filing anything', correct: true, outcome: 'Correct. Co-founders, vesting, cross-border founders, and custom financing terms are non-standard, high-variance decisions where a lawyer\'s judgment is worth many times its fee. Get advice first, then file.' },
              ],
            },
          ],
        },
        {
          kind: 'platformTask',
          title: 'Research real incorporation options for YOUR jurisdiction',
          body: 'Do the real research for your actual situation. If you are US-based, compare doing it through a formation service (see Stripe Atlas) against your government\'s own guidance. If you are outside the US, find your country/region\'s official company registrar and its equivalent guidance — the concepts transfer, the specifics do not. Reminder: this is educational, not legal advice, and it is jurisdiction-dependent; if your situation is non-standard, note that you should consult a lawyer. Spend 30-45 minutes. Then record your provisional decision.',
          links: [
            { label: 'Stripe Atlas — incorporate a US entity (fees/details on the official site)', url: 'https://stripe.com/atlas' },
            { label: 'US SBA — Choose a business structure (official government resource)', url: 'https://www.sba.gov/business-guide/launch-your-business/choose-business-structure' },
            { label: 'US SBA — Register your business (state-level requirements)', url: 'https://www.sba.gov/business-guide/launch-your-business/register-your-business' },
          ],
          steps: [
            'Identify the correct official registrar / government resource for YOUR jurisdiction (SBA + your state if US; your national company registrar otherwise).',
            'Pick a provisional entity type (pass-through vs. corporation) based on whether you plan to raise and grant equity.',
            'Decide your route — DIY, a formation service, or a lawyer — using the variance test (standard case vs. non-standard).',
            'Note the concrete costs you found (filing fee, service fee, registered agent / annual filing) so the recurring cost is not a surprise.',
            'Record your provisional decision below. Flag explicitly if your situation is non-standard and needs a lawyer.',
          ],
          taskKey: '26.1#incorporate',
          proofLabel: 'Your provisional choice: entity type + jurisdiction + route (DIY / service / lawyer), and why',
          proofKind: 'text',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'Incorporation references (real, official/reputable)',
          items: [
            { label: 'US SBA — Choose a business structure', url: 'https://www.sba.gov/business-guide/launch-your-business/choose-business-structure', note: 'Plain-language government overview of sole proprietorship, LLC, corporation, and more.' },
            { label: 'US SBA — Register your business', url: 'https://www.sba.gov/business-guide/launch-your-business/register-your-business', note: 'What registering means and how requirements vary by structure and state.' },
            { label: 'Stripe Atlas — documentation', url: 'https://docs.stripe.com/atlas', note: 'How a formation service actually runs the steps (entity, EIN, equity, elections). Verify current fees on the official site.' },
            { label: 'Cooley GO — startup legal documents & guides', url: 'https://www.cooleygo.com/documents/', note: 'Free formation and governance document generators and explainers from a major startup law firm. Reference, not advice.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Which entity and where, for me?', kind: 'ask', question: 'Walk me through the entity-choice reasoning for my specific situation (solo vs co-founders, bootstrapping vs raising, my country of residence). List the questions I still need a lawyer or accountant to answer, and be explicit that this is educational, not legal advice.' },
        { label: 'Service vs lawyer for my case', kind: 'ask', question: 'Given my situation, help me apply the variance test: is my incorporation a standard low-variance case (use a service) or a non-standard high-variance one (pay a lawyer first)? Name the specific facts about me that push it one way or the other.' },
        { label: 'A harder incorporation case', kind: 'harder', concept: 'choosing a structure when founders live in different countries and the company will have both US investors and non-US customers' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What is the single most important reason to keep company and personal money strictly separate after incorporating?',
          options: [
            'It makes bookkeeping slightly tidier at tax time',
            'Commingling funds can let a court "pierce the corporate veil" and reach your personal assets, defeating the limited liability you incorporated for',
            'Banks legally require every company to have exactly one account',
            'It increases the company\'s valuation',
          ],
          answer: 1,
          explain: 'Limited liability is a discipline, not a one-time flag. If you run the company\'s money through your personal accounts, sign personal guarantees, or ignore formalities, a court can disregard the entity ("pierce the veil") and let creditors or claimants reach you personally — undoing the exact protection you filed for. Keeping a separate bank account is the everyday act that preserves the boundary.',
        },
        {
          kind: 'mcq',
          prompt: 'You are forming a standard single-founder software company with vanilla equity and no unusual tax facts. By the "route by variance" heuristic, what is the best default?',
          options: [
            'Retain a premium law firm to hand-form everything, to be safe',
            'Use a reputable formation service, and keep a lawyer in reserve for when your situation becomes non-standard',
            'Never incorporate until you have revenue',
            'File nothing and operate personally to avoid all overhead',
          ],
          answer: 1,
          explain: 'A standard single-founder software entity is a high-volume, low-variance task that a reputable service does correctly and cheaply, including the easy-to-miss steps (tax ID, equity issuance, elections). Pay a lawyer when variance is high — co-founders, unusual tax facts, cross-border structure, or a financing — because that is where judgment changes the outcome and mistakes are expensive to unwind.',
        },
        {
          kind: 'free',
          prompt: 'For your own venture, state (1) the entity type and jurisdiction you provisionally chose and the single strongest reason; (2) your route (DIY / service / lawyer) and the variance test that justifies it; and (3) one thing you are genuinely unsure about that you would take to a professional. Be honest about what is jurisdiction-dependent.',
          rubric: 'Strong answer: (1) names a concrete entity + jurisdiction with a reason tied to their actual plans (raising & options -> corporation; bootstrapping/simple -> pass-through), not a memorized default; (2) picks a route and justifies it via variance (standard case -> service; non-standard facts -> lawyer) rather than fear or cost alone; (3) identifies a real open question for a professional and shows awareness that specifics are jurisdiction-dependent. Penalize confident claims stated as legal fact, and reward appropriate "consult a lawyer/accountant" framing.',
        },
      ],
      commitSummary: 'your provisional incorporation decision (entity + jurisdiction + route) is captured in "My venture" — with the non-standard flags that tell you when to bring in a lawyer. Educational only; confirm specifics with a professional.',
    },

    // -----------------------------------------------------------------------
    {
      id: '26.2',
      module: 26,
      title: 'Contracts & IP assignment',
      estMinutes: 20,
      prerequisites: ['26.1'],
      artifactSlot: null,
      concept: `**Educational, not legal advice. Contract and IP law is jurisdiction-dependent and fact-specific — use this to know what to ask for, then have a qualified lawyer review anything you actually sign.**

A company is, legally, a bundle of contracts and owned assets. Get the bundle right and you have something investable and sellable; get it wrong and you have a liability wearing a logo. Four documents do most of the load-bearing work:

- **Customer terms** (a Terms of Service for self-serve, or a Master Services Agreement / MSA for bigger deals). These set what you promise, cap your liability, disclaim warranties, and define who owns the data and deliverables. Their whole job is to make your downside *bounded and known*.
- **IP assignment** (often called a CIIAA / PIIA — a Confidential Information and Invention Assignment Agreement). Everyone who builds the product — founders, employees, and especially **contractors** — signs one, assigning to the company the rights to what they create for it.
- **Contractor / consulting agreements** that define deliverables, payment, and IP terms for outside help.
- **NDAs** for exchanging sensitive information with partners and investors.

**Why IP assignment is existential.** Here is the trap that has killed real deals: in many jurisdictions, absent a written assignment, an **independent contractor keeps the copyright to what they create** — you paid them, but you may only have an implied license, not ownership. So the freelancer who built your core module two years ago might still *own it*. This surfaces at the worst possible moment: during acquisition or investment due diligence, where a buyer's lawyers will demand a clean, unbroken chain of title to all core IP. A gap there can reprice the deal, delay it for months, or blow it up entirely. IP assignment is cheap when you get it signed on day one and ruinous to reconstruct later — which is exactly why it is the first contract you should never skip.`,
      reframe: {
        analogy: `An IP assignment is a **Contributor License Agreement (CLA)** for your company. In open source, if a stranger opens a pull request and you merge it without a CLA, they still hold the copyright to their contribution — the project has, at best, an implied license, and it cannot cleanly relicense or defend that code. Serious projects require a signed CLA *before* merging precisely so the chain of title is clean. Your startup is the project; every founder, employee, and contractor is a contributor; the CIIAA is the CLA that assigns their commits to the company instead of leaving them personally owned.`,
        breaks: `A CLA is scoped to one project and its license terms are known and uniform; a real IP assignment collides with **employment law and local statute** in ways a CLA never does — some jurisdictions limit what an employee can be made to assign (inventions made on personal time, unrelated to the job) or grant non-waivable "moral rights" that survive assignment. And the failure timing is worse: a missing CLA is caught at merge time, but a missing assignment is usually discovered *years later* in due diligence, when the contributor has left, has leverage, or is unreachable — and fixing it then can cost real equity or cash, not a quick re-submit.`,
      },
      workedExample: `**Mattel v. MGA Entertainment — the "Bratz" litigation (real, widely reported US case).** A designer named Carter Bryant conceived the wildly successful Bratz dolls. The problem: he had signed an invention-assignment agreement with his employer, Mattel, and the fight became whether that agreement's wording swept in his doll concept — did "inventions" cover *ideas* and *designs*, and did it reach things created on personal time? The dispute ran for the better part of a decade, swung on appeal, and moved enormous sums. Treat the play-by-play as illustrative rather than a precise legal holding, and note it is US-specific.

The transferable lesson is not about toys; it is that **the scope and wording of an IP assignment are the whole ballgame**, and courts will read them closely years after the ink dried. Whether IP belongs to a company or to an individual — and therefore who can sell it, license it, or build on it — can turn on a single clause about what is covered and when.

Now flip it to your side of the table. Most startups aren't Mattel; they're the small company whose *core code was written by a contractor who never signed anything*. Same principle, opposite exposure: without a clear, signed assignment, ownership is ambiguous, and ambiguity is exactly what a buyer's or investor's diligence lawyers are paid to find. The cheap, boring fix — get every founder, employee, and contractor to sign an assignment *before* they contribute — is what converts "a pile of code someone wrote" into "an asset the company indisputably owns."`,
      branch: {
        scenario: `You're deep in due diligence for a funding round (or an acquisition). The buyer's lawyers flag that a freelance developer built your core authentication module two years ago. You paid every invoice, but there is no signed IP assignment — just a payment record and some emails. The deal is contingent on clean IP ownership. What do you do?`,
        choices: [
          {
            label: 'Argue that you paid the invoices, so payment obviously transferred ownership — no signature needed.',
            correct: false,
            consequence: `**A dangerous myth.** In many jurisdictions, paying an independent contractor does NOT automatically transfer copyright — absent a written assignment you may hold only an implied license, not ownership. Diligence lawyers know this cold, which is exactly why they flagged it. "I paid them" is not a chain of title, and asserting it as one just tells the buyer you don't understand your own IP.`,
          },
          {
            label: 'Panic and rip out the module to rebuild it clean-room from scratch before the deal closes.',
            correct: false,
            consequence: `**Overreaction that misses the cheap fix.** Rebuilding core infrastructure under deal pressure is slow, risky, and usually unnecessary. The clean, standard remedy is to *paper the assignment now*, not to burn weeks re-implementing working code. Save the rebuild for the rare case where the contractor genuinely won't sign at any reasonable price.`,
          },
          {
            label: 'Contact the freelancer promptly, have counsel prepare and get a signed IP assignment (with proper consideration), and disclose the cured gap to the buyer.',
            correct: true,
            consequence: `**Correct.** The fix for a missing assignment is almost always to *get the assignment* — reach the contributor, have a lawyer paper it properly (fresh consideration matters), and present the cured chain of title. Do it early and quietly; the leverage only gets worse as the contributor learns a deal depends on their signature. Best of all: make everyone sign on day one so this scramble never happens.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Match each risk to the agreement that primarily covers it. (Educational simplification — real agreements overlap and vary by jurisdiction.)',
          buckets: ['Customer ToS / MSA', 'IP assignment (CIIAA/PIIA)', 'NDA / confidentiality'],
          items: [
            { text: 'A freelancer who built your core module could later claim they own it', bucket: 'IP assignment (CIIAA/PIIA)' },
            { text: 'Ensuring the company — not the individual engineer — owns an invention', bucket: 'IP assignment (CIIAA/PIIA)' },
            { text: 'Capping your financial exposure and disclaiming warranties to users', bucket: 'Customer ToS / MSA' },
            { text: 'Setting payment terms, SLAs, and deliverable ownership for an enterprise client', bucket: 'Customer ToS / MSA' },
            { text: 'Sharing sensitive metrics with a potential acquirer without them leaking', bucket: 'NDA / confidentiality' },
            { text: 'Stopping a partner you pitched from handing your roadmap to a competitor', bucket: 'NDA / confidentiality' },
          ],
          explain: 'IP assignment answers "who OWNS what we build" — existential and non-negotiable for every contributor. Customer terms (ToS/MSA) answer "what do we promise and how is our downside bounded" — liability caps, warranties, SLAs, and deliverable IP. NDAs answer "how do we share secrets safely" during deals and partnerships. Different questions, different documents; a real relationship may need several at once, and you should have a lawyer tailor the important ones.',
        },
        {
          kind: 'rank',
          prompt: 'Order these contracts by how early and existential they are for a pre-revenue startup — what you must not launch without, down to what can wait for the right customer. (Educational, not legal advice; order first to last.)',
          items: [
            'Signed IP assignment from every founder, employee, and contributor who touches the product',
            'A customer Terms of Service (or order form) with a limitation-of-liability clause',
            'Contractor / consulting agreements with explicit deliverables and IP terms',
            'A mutual NDA template ready for partner and investor conversations',
            'A Master Services Agreement (and data terms) for your first enterprise customer',
          ],
          explain: 'IP assignment comes first because without it you may not even own what you are selling — nothing else matters if ownership is broken. Customer terms come next: the moment real users transact, you need bounded liability and clear promises. Contractor agreements formalize outside help as you add it. An NDA template is handy but lower-stakes for most early deals. The heavier MSA/enterprise machinery can wait until you actually have an enterprise customer to sign it — don\'t over-lawyer before you need to.',
        },
        {
          kind: 'numeric',
          prompt: 'What an IP gap can cost. A buyer agrees to acquire your company for $10,000,000, but diligence finds an unresolved IP-assignment gap. Rather than walk, they hold back 15% of the price in escrow until the chain of title is cured. How much of your proceeds are frozen at closing, in dollars? Compute 10,000,000 x 0.15.',
          answer: 1500000,
          tolerance: 0,
          unit: '$ (escrow holdback)',
          explain: '10,000,000 x 0.15 = $1,500,000 of your own proceeds locked up — sometimes for many months — purely because a signature was missing years earlier. That is the concrete price of a broken chain of title: not usually a dead deal, but a repriced, delayed, or partly-withheld one. Set against the near-zero cost of getting assignments signed on day one, it is the clearest argument for treating IP assignment as non-negotiable. (Illustrative; deal mechanics vary.)',
        },
        {
          kind: 'scenario',
          title: 'The missing-assignment crisis',
          intro: 'A missing IP assignment rarely bites when you create the gap — it bites years later. Make the calls that keep your chain of title clean. (Educational, not legal advice.)',
          decisions: [
            {
              situation: 'You are about to bring on a freelance developer to build a core part of the product, starting Monday. What do you do about IP before they write any code?',
              options: [
                { label: 'Have them sign an IP assignment (as part of their contractor agreement) before they start', correct: true, outcome: 'Correct and cheap. Getting the assignment signed on day one — before any contribution — is the entire fix. It costs nothing but a signature now and prevents the diligence nightmare later.' },
                { label: 'Sort out paperwork later once you see if the work is any good', correct: false, outcome: 'This is exactly how gaps are created. "Later" often becomes "after they\'ve left," when their leverage is highest and your deal timeline is unforgiving.' },
                { label: 'Rely on the fact that you\'ll be paying them by invoice', correct: false, outcome: 'Dangerous myth: in many jurisdictions payment alone does not transfer copyright to a contractor. You could end up with an implied license, not ownership.' },
              ],
            },
            {
              situation: 'Diligence uncovers a two-year-old gap: a former contractor built a core module and never signed anything. He has since left on neutral terms. What is the best move?',
              options: [
                { label: 'Hope the buyer doesn\'t notice and stay quiet', correct: false, outcome: 'Concealment is the worst option — diligence lawyers are paid to find exactly this, and a hidden defect discovered late destroys trust and can kill the deal outright.' },
                { label: 'Reach out promptly, have counsel paper a proper signed assignment with fresh consideration, then disclose the cure', correct: true, outcome: 'Correct. The remedy for a missing assignment is to obtain the assignment. Move early while relations are neutral and leverage is lowest, do it properly through counsel, and present a cured chain of title.' },
                { label: 'Immediately rebuild the module from scratch under deadline', correct: false, outcome: 'Usually unnecessary and slow. Reserve a clean-room rebuild for the rare case where the contributor refuses to sign at any reasonable price.' },
              ],
            },
          ],
        },
        {
          kind: 'platformTask',
          title: 'Find your IP gaps and get a real assignment template',
          body: 'Audit your own chain of title, then get a real (reference) template so you know what one looks like. List every human who has written code, designed, or otherwise contributed to your product — founders, employees, freelancers, that friend who helped one weekend. For each, note whether a signed IP assignment exists. Then open a reputable template (e.g. Cooley GO\'s free CIIAA generator) to see the actual clauses. Reminder: templates are a starting point and reference, NOT legal advice — have a lawyer review anything you rely on, especially across borders. Record who still needs to sign.',
          links: [
            { label: 'Cooley GO — Employee Confidential Information & Inventions Assignment Agreement (free generator)', url: 'https://www.cooleygo.com/documents/form-employee-confidential-information-inventions-assignment-agreement/' },
            { label: 'Cooley GO — all startup document generators', url: 'https://www.cooleygo.com/documents/' },
            { label: 'Common Paper — free standard Terms of Service & cloud agreements', url: 'https://commonpaper.com/standards/terms-of-service/' },
          ],
          steps: [
            'List every person who has contributed to your product (founders, employees, contractors, one-off helpers).',
            'For each, mark whether a signed IP assignment exists (yes / no / unsure).',
            'Open a reputable CIIAA/assignment template and read the covered-IP and confidentiality clauses so you know what "good" looks like.',
            'Flag the highest-risk gaps first — anyone who built CORE product IP with no signature.',
            'Record who still needs to sign and your plan to close each gap (and note where you\'ll need a lawyer).',
          ],
          taskKey: '26.2#ip-assignment',
          proofLabel: 'Your IP-assignment audit: who has contributed, who has NOT signed, and your plan to close each gap',
          proofKind: 'text',
        },
        {
          kind: 'resource',
          title: 'Contracts & IP references (real, reputable)',
          items: [
            { label: 'Cooley GO — free startup document generators', url: 'https://www.cooleygo.com/documents/', note: 'CIIAA/invention-assignment, NDAs, consulting agreements, and more, with plain-language guides. Reference, not advice.' },
            { label: 'Cooley GO — Employee CIIAA form', url: 'https://www.cooleygo.com/documents/form-employee-confidential-information-inventions-assignment-agreement/', note: 'See exactly what an invention-assignment agreement contains and why each clause exists.' },
            { label: 'Common Paper — standard contracts (CC-licensed)', url: 'https://commonpaper.com/standards/', note: 'Plain-language, attorney-drafted Terms of Service, Cloud Service Agreements (MSA-style), NDAs, and SLAs you can adapt.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Audit my chain of title', kind: 'ask', question: 'Help me build an IP chain-of-title audit for my venture: walk me through every category of contributor (founders, employees, contractors, freelancers, open-source), what signed assignment each needs, and where my biggest gaps and risks are. Note where this depends on jurisdiction and where I need a lawyer.' },
        { label: 'Which contracts do I actually need now?', kind: 'ask', question: 'Given my stage and business model, tell me the minimum set of contracts I need right now (IP assignments, customer ToS/MSA, contractor agreements, NDAs) and which I can defer, and flag which ones are risky enough to have a lawyer draft or review.' },
        { label: 'Stress-test my IP position', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In many jurisdictions, if an independent contractor builds part of your product and there is NO written IP assignment, what is the most likely default position on ownership?',
          options: [
            'You own it outright because you paid the invoices',
            'The contractor may retain the copyright, leaving you with at best an implied license rather than ownership',
            'Ownership is automatically split 50/50 between you and the contractor',
            'Nobody owns it and it falls into the public domain',
          ],
          answer: 1,
          explain: 'A common and dangerous surprise: paying a contractor does not automatically transfer copyright in many jurisdictions. Without a signed assignment you may hold only an implied license, while the contractor keeps ownership. That gap is exactly what surfaces in due diligence and can reprice, delay, or kill a deal — which is why a signed assignment before any work is the cheap, non-negotiable fix. (Specifics vary by jurisdiction; confirm with a lawyer.)',
        },
        {
          kind: 'mcq',
          prompt: 'The "CIIAA is a CLA for your company" analogy is useful, but where does it BREAK?',
          options: [
            'A CLA is signed after merge, so assignments should be signed after the work too',
            'Employment/invention law can limit what an employee may be made to assign and grant non-waivable moral rights, and missing assignments are usually discovered years later in diligence — not caught at "merge time"',
            'CLAs and IP assignments are legally identical in every jurisdiction',
            'Neither a CLA nor an assignment has any real legal effect',
          ],
          answer: 1,
          explain: 'The analogy captures "get the chain of title clean before you merge/build." It breaks because real assignments collide with employment and invention statutes (limits on assigning personal-time or unrelated inventions; non-waivable moral rights in some countries) that a uniform, project-scoped CLA never faces — and the failure is discovered late, in diligence, when the contributor has left or gained leverage, making it far costlier than a quick re-submit.',
        },
        {
          kind: 'free',
          prompt: 'Do a real IP chain-of-title audit for your venture. List everyone who has contributed to the product, state who has and has not signed an IP assignment, name your single biggest gap, and describe how you would close it — including where you would involve a lawyer. Be explicit about what is jurisdiction-dependent.',
          rubric: 'Strong answer: (1) enumerates actual contributor categories (founders, employees, contractors, one-off helpers) rather than speaking abstractly; (2) honestly identifies at least one real or plausible gap and correctly treats missing contractor assignments as the high-risk case; (3) proposes the correct remedy — obtain a signed assignment (early, with proper consideration/counsel) rather than "I paid them" or "rebuild everything"; (4) shows awareness that ownership defaults and enforceability are jurisdiction-dependent and flags where a lawyer is needed. Penalize the "payment equals ownership" myth if stated as fact.',
        },
      ],
      commitSummary: 'your IP chain-of-title audit — who contributed, who hasn\'t signed, and your plan to close the gaps — is captured in "My venture." Templates are references, not legal advice; have a lawyer review what you sign.',
    },

    // -----------------------------------------------------------------------
    {
      id: '26.3',
      module: 26,
      title: 'Privacy & data compliance (GDPR/CCPA basics)',
      estMinutes: 20,
      prerequisites: ['26.1'],
      artifactSlot: null,
      concept: `**Educational, not legal advice. Privacy law (GDPR, UK GDPR, CCPA/CPRA, and many others) is jurisdiction-dependent, applies based on WHO your users are as much as where you are, and changes often. Use this to build the right instincts, then have a professional review your actual compliance.**

The mental flip this lesson demands: **personal data is a liability, not an asset by default.** Founders instinctively hoard data "in case it's useful later." But every record of personal data you hold is something you must secure, account for, be able to delete on request, and answer for if it leaks. Modern privacy regimes turn sloppy data handling into fines measured in percentages of global revenue and into breach headlines that outlast the product.

Four ideas cover most of the early ground:

- **Lawful basis and consent.** You generally need a *reason the law recognizes* to process someone's personal data. Where you rely on **consent**, it must be freely given, specific, and as easy to withdraw as to give — not buried in a pre-ticked box.
- **Data-subject rights, especially deletion.** People can ask what you hold, get a copy, and demand erasure ("right to be forgotten"). If you can't actually delete a user across your database, backups, analytics, and vendors, you have a compliance gap and an engineering one.
- **Processors and DPAs.** Every third party that touches your users' data on your behalf (your cloud host, analytics, email tool, support desk) is a **processor**, and you generally need a **Data Processing Agreement** (DPA) with each. Their breach can become your liability.
- **Privacy by design.** Bake minimization in: **the safest data is the data you never collect.** Collect the least you need, keep it the shortest time you can, and default to privacy rather than bolting it on later.

Note what "personal data" quietly includes: not just names and emails but often IP addresses, cookie identifiers, and location — things engineers rarely think of as regulated.`,
      reframe: {
        analogy: `Personal data is **attack surface**, and privacy by design is **minimizing it**. Every field you collect and store is another endpoint an attacker can reach, another thing you must patch, monitor, and defend — and another item a regulator can ask you to account for. Security engineers already live by a rule here: the safest code is the code you don't run, and the safest port is the one you don't open. Data minimization is the same instinct applied to people: the record you never collected can't be breached, can't be subpoenaed, and never shows up in a deletion request. Collecting less isn't laziness; it's shrinking your blast radius.`,
        breaks: `Attack surface is something *you* control and can unilaterally shrink; personal data comes with **externally imposed, sometimes conflicting duties** you can't just optimize away. Users can *compel* you to delete data (erasure) while other laws *compel* you to retain some of it (tax, financial, or legal-hold records) — a tension no "just close the port" instinct resolves. And unlike a patched vulnerability, a data breach is **irreversible**: once personal data leaks, you can't re-secure it, issue a hotfix, and move on — the exposure is permanent, and so, often, is the liability. Minimizing surface helps, but you're managing legal obligations, not just risk you own outright.`,
      },
      workedExample: `**CNIL v. Google — the €50 million GDPR fine (France, January 2019; real, widely reported).** France's data-protection regulator (the CNIL) fined Google €50 million — one of the first landmark GDPR penalties — for failures around **transparency and consent** in its ad personalization. Regulators concluded that the information users were given was scattered across multiple documents and hard to grasp, and that the consent obtained for personalized ads wasn't valid because it wasn't sufficiently informed, specific, or unambiguous (for example, relying on pre-configured, bundled agreement rather than a clear affirmative choice). Treat exact figures and procedural details as illustrative; the enforcement itself is real.

The instructive part for a founder isn't the size of the fine — it's *what* was penalized. Google's servers weren't hacked; no data was stolen. The violation was **how consent was requested and how clearly practices were disclosed.** That is entirely within a small team's control and entirely about *design*: where you put the notice, whether the box is pre-ticked, whether "agree" is bundled or granular, whether withdrawing is as easy as granting.

The transferable move: treat consent and transparency as **product surfaces you design deliberately**, not fine print you paste in at the end. Say plainly what you collect and why, ask for consent in a clear affirmative way when you rely on it, and make opting out genuinely easy. Pair that with minimization — collect less to begin with — and you've addressed the two things that actually got a trillion-dollar company fined, without needing to be a trillion-dollar company to do it.`,
      branch: {
        scenario: `A user in the EU emails: "Delete all my data." You find their information spread across your primary database, nightly backups, a third-party analytics tool, your email marketing list, and your support-ticket system. You're busy shipping. What's the right response?`,
        choices: [
          {
            label: 'Delete their row in the main database and consider it done — the other copies are obscure and no one will check.',
            correct: false,
            consequence: `**A partial deletion is a failed deletion.** The right to erasure generally reaches data wherever it lives, including analytics, mailing lists, support tools, and (subject to technical limits and retention exceptions) backups. Deleting only the primary row leaves you non-compliant and exposed — and it reveals that you never designed your systems to honor a request you were always going to receive.`,
          },
          {
            label: 'Refuse, on the grounds that you collected the data legitimately and it\'s a valuable business asset.',
            correct: false,
            consequence: `**The "data is my asset" reflex — exactly the mindset this lesson warns against.** Under GDPR-style regimes, holding personal data does not make deletion optional; the individual generally has the right, subject to narrow exceptions (like a legal obligation to retain certain records). "It's valuable to me" is not one of those exceptions, and refusing on that basis is precisely how you earn a complaint.`,
          },
          {
            label: 'Treat it as a formal data-subject request: verify identity, delete or anonymize across every system and processor within the legal timeframe, document what you did — and note where minimization would have made this trivial.',
            correct: true,
            consequence: `**Correct.** A deletion request is a process, not a favor: verify who's asking, propagate the deletion across your database, analytics, mailing list, support tool, and vendors (honoring documented retention exceptions), and keep a record that you complied within the required window. The pain of doing it also teaches the real lesson — had you collected less and mapped your data up front, this would have been a button, not a fire drill.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Under GDPR-style rules, "personal data" is broader than most engineers assume. Sort each item into likely personal data (regulated) vs. not. (Educational simplification; edge cases and jurisdictions vary.)',
          buckets: ['Likely personal data (regulated)', 'Likely NOT personal data'],
          items: [
            { text: 'A user\'s email address', bucket: 'Likely personal data (regulated)' },
            { text: 'An IP address logged with a request', bucket: 'Likely personal data (regulated)' },
            { text: 'A cookie or device identifier tied to a browser', bucket: 'Likely personal data (regulated)' },
            { text: 'A user\'s location history', bucket: 'Likely personal data (regulated)' },
            { text: 'Server CPU-utilization metrics with no user link', bucket: 'Likely NOT personal data' },
            { text: 'A fully anonymized, aggregate count of total signups', bucket: 'Likely NOT personal data' },
          ],
          explain: 'GDPR-style regimes treat data that can identify a person — directly or indirectly — as personal data, which famously includes IP addresses, cookie/device identifiers, and location, not just names and emails. Truly anonymized aggregates and system metrics with no path back to an individual generally fall outside. The practical takeaway: the "boring" identifiers your logs and analytics collect by default are usually regulated, so minimization and honest disclosure matter even if you never ask for a name.',
        },
        {
          kind: 'rank',
          prompt: 'Order the steps to launch with "privacy by design" rather than bolting privacy on afterward. (Educational, not legal advice; order first to last.)',
          items: [
            'Map what personal data you collect, where it flows, and why (a data inventory)',
            'Cut the collection down to the minimum each purpose actually needs (minimization)',
            'Establish a lawful basis, and where you rely on consent, make it clear and affirmative',
            'Publish an accurate privacy policy that matches what you actually do, and honor opt-outs',
            'Sign DPAs with every processor/vendor that touches user data',
            'Build deletion and export so you can honor data-subject requests on demand',
          ],
          explain: 'You can\'t protect or minimize what you haven\'t mapped, so inventory comes first; then cut collection to the minimum (the cheapest risk reduction there is). Only then does lawful basis/consent make sense, followed by a policy that truthfully reflects those practices. DPAs cover the third parties you rely on, and building deletion/export last operationalizes the rights users can exercise. Doing this up front turns a future deletion request into a button press instead of a fire drill.',
        },
        {
          kind: 'numeric',
          prompt: 'Why "data is a liability." A GDPR-style regime caps its highest fine tier at the GREATER of a fixed ceiling or 4% of global annual turnover. Suppose the fixed ceiling is 20 (million) and a company has 600 (million) in global annual turnover. What is the maximum fine, in millions? Compute the greater of 20 and 0.04 x 600.',
          answer: 24,
          tolerance: 0,
          unit: 'million (currency units)',
          explain: '4% of 600 million = 24 million, which is greater than the 20 million fixed ceiling, so the cap is 24 million. The mechanism is the point: top-tier privacy fines scale with your REVENUE, not with the value of the data or the size of your team. That is what makes personal data a liability to be minimized rather than an asset to be hoarded — the downside grows exactly as your company does.',
        },
        {
          kind: 'scenario',
          title: 'Consent, processors, and design choices',
          intro: 'Most early privacy exposure is about DESIGN — how you ask for consent and who you let touch the data — not about being hacked. Make the calls. (Educational, not legal advice.)',
          decisions: [
            {
              situation: 'You rely on consent to use analytics that track EU visitors. How should you request it?',
              options: [
                { label: 'Pre-tick the "I agree" box and bundle analytics consent into your general terms', correct: false, outcome: 'This is close to what got real companies fined: consent that is bundled and pre-configured is generally not "freely given, specific, and informed." Pre-ticked boxes are a classic invalid-consent pattern.' },
                { label: 'Ask for a clear, affirmative, unbundled opt-in, and make withdrawing it as easy as giving it', correct: true, outcome: 'Correct. Valid consent under GDPR-style rules is a clear affirmative act, specific to the purpose, and as easy to withdraw as to grant. Designing the consent surface deliberately is the whole game.' },
                { label: 'Skip consent entirely — you\'ll deal with it only if someone complains', correct: false, outcome: 'Processing without a lawful basis is the violation itself; waiting for a complaint just means the exposure accrues silently, like an unmonitored liability.' },
              ],
            },
            {
              situation: 'You want to add a third-party email tool that will store your users\' addresses. What do you do first?',
              options: [
                { label: 'Just integrate it — it\'s their infrastructure, so it\'s their compliance problem', correct: false, outcome: 'Wrong: the vendor is a processor acting on your behalf, and as the controller you retain responsibility. Their breach can become your liability.' },
                { label: 'Check it offers a Data Processing Agreement (DPA), sign it, and confirm it fits your minimization and deletion needs', correct: true, outcome: 'Correct. Every processor that touches user data generally needs a signed DPA, and you should confirm it supports your obligations (deletion, security) before you send it a single record.' },
                { label: 'Send them your full user table now and clean up the paperwork later', correct: false, outcome: 'Sharing personal data with an unvetted processor and no DPA is exactly the gap regulators and diligence teams look for. Paper it before, not after, the data leaves your systems.' },
              ],
            },
          ],
        },
        {
          kind: 'platformTask',
          title: 'Generate a real privacy policy / ToS for your venture',
          body: 'Produce a real first-draft privacy policy (and/or ToS) from a reputable generator, hosted at a real URL you can paste back. Use a well-known generator (e.g. Termly or iubenda). CRITICAL: a generated policy is only a starting point and is NOT legal advice — it MUST accurately describe what your product actually does (what you collect, why, which processors you use, how users delete their data). A policy that lies about your practices is worse than none. If you handle sensitive data or operate at scale, have a lawyer review it. Then paste the hosted policy URL.',
          links: [
            { label: 'Termly — free Privacy Policy generator (GDPR/CCPA-aware)', url: 'https://termly.io/products/privacy-policy-generator/' },
            { label: 'iubenda — free Privacy Policy generator', url: 'https://www.iubenda.com/en/help/36403-free-privacy-policy-generator/' },
            { label: 'Common Paper — free standard Terms of Service', url: 'https://commonpaper.com/standards/terms-of-service/' },
          ],
          steps: [
            'List what your product actually collects, why, and which third-party processors touch it (reuse your data inventory).',
            'Run a reputable generator, answering truthfully about YOUR real data practices — do not accept defaults that don\'t match reality.',
            'Make sure it covers collection, purpose, processors, user rights, and how someone requests deletion.',
            'Host/publish the policy so it has a real URL (many generators host it for you).',
            'Paste the hosted policy URL below. Note anything you\'re unsure about that needs a lawyer.',
          ],
          taskKey: '26.3#privacy-policy',
          proofLabel: 'The public URL of your generated privacy policy (must reflect your ACTUAL data practices)',
          proofKind: 'url',
        },
        {
          kind: 'resource',
          title: 'Privacy & data-compliance references (official + reputable)',
          items: [
            { label: 'EU GDPR — full text (gdpr-info.eu)', url: 'https://gdpr-info.eu/', note: 'The actual Regulation, organized by article and recital. The primary source, not a summary.' },
            { label: 'EU GDPR — official text on EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng', note: 'The authoritative EU legal database version of Regulation 2016/679.' },
            { label: 'UK ICO — guide to the data protection principles', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/', note: 'Clear, practical regulator guidance on the seven principles for organisations.' },
            { label: 'US FTC — Privacy & Security business guidance', url: 'https://www.ftc.gov/business-guidance/privacy-security', note: 'US federal guidance on data security and privacy, including "Protecting Personal Information."' },
            { label: 'California OAG — CCPA overview', url: 'https://oag.ca.gov/privacy/ccpa', note: 'Official California Consumer Privacy Act summary of business obligations and consumer rights.' },
            { label: 'Termly — privacy policy generator', url: 'https://termly.io/products/privacy-policy-generator/', note: 'Reputable generator for a first-draft policy. A starting point, not legal advice.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'What laws even apply to me?', kind: 'ask', question: 'Help me figure out which privacy regimes likely apply to my venture based on WHERE MY USERS are (EU/UK GDPR, California CCPA/CPRA, others), not just where I\'m based, and what the practical minimum obligations are. Be clear this is educational, not legal advice.' },
        { label: 'Design my consent & minimization', kind: 'ask', question: 'Given what my product collects, help me apply data minimization (what to stop collecting) and design a clear, affirmative consent + transparency flow, learning from the kind of failures that got real companies fined for consent/transparency rather than breaches.' },
        { label: 'A harder deletion-across-systems case', kind: 'harder', concept: 'honoring an erasure request when data is duplicated across backups, an analytics processor, and a legal-hold retention obligation that conflicts with deletion' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What best captures the core mindset shift this lesson argues for regarding personal data?',
          options: [
            'Personal data is an asset to accumulate because more data always means more value',
            'Personal data is a liability by default — every record must be secured, accounted for, and deletable, so the safest data is what you never collect',
            'Privacy law only applies to companies with over 1,000 employees',
            'As long as your servers are never breached, privacy compliance is automatic',
          ],
          answer: 1,
          explain: 'The flip is treating personal data as attack surface and liability rather than a free asset: every field you hold is something to secure, account for, and delete on request, with top-tier fines scaling to global revenue. That\'s why minimization ("the safest data is the data you never collect") is the cheapest and most durable risk reduction. And as the CNIL/Google fine shows, you can be penalized over consent and transparency design even with no breach at all.',
        },
        {
          kind: 'mcq',
          prompt: 'A third-party analytics vendor processes your users\' personal data on your behalf and suffers a breach. Which statement is most accurate?',
          options: [
            'It\'s entirely the vendor\'s problem; you have no exposure because you didn\'t hold the data',
            'The vendor is a "processor," you generally need a Data Processing Agreement (DPA) with them, and their breach can create liability for you as the controller',
            'You are only liable if you personally wrote the vendor\'s code',
            'DPAs are optional paperwork with no bearing on liability',
          ],
          answer: 1,
          explain: 'Vendors that handle your users\' data on your behalf are processors, and privacy regimes generally require a DPA with each. Because you decide the purpose (you\'re the "controller"), a processor\'s breach can flow back to you — which is exactly why mapping your processors and signing DPAs is part of privacy by design, not optional paperwork.',
        },
        {
          kind: 'free',
          prompt: 'For your venture, (1) list the personal data you actually collect and honestly flag anything you collect "just in case" that you could stop collecting; (2) name which privacy regime(s) likely apply based on where your users are; and (3) describe, concretely, what would happen today if a user demanded deletion — could you do it across all systems and processors? Where are the gaps? Note where you\'d need a lawyer.',
          rubric: 'Strong answer: (1) inventories real data categories and identifies at least one minimization opportunity, showing the "data is a liability" mindset; (2) reasons about applicable law from WHERE USERS are (EU/UK GDPR, CCPA, etc.), not only the founder\'s location; (3) gives an honest, concrete account of a deletion request across database, backups, analytics, mailing list, and processors, naming real gaps rather than claiming false readiness; and acknowledges DPAs and that specifics need professional/legal review. Reward honesty about gaps over polished but empty compliance claims.',
        },
      ],
      commitSummary: 'a real first-draft privacy policy (reflecting your actual data practices) is linked in "My venture," along with your data inventory and minimization notes. Educational only — have a professional review your compliance.',
    },

    // -----------------------------------------------------------------------
    {
      id: '26.4',
      module: 26,
      title: 'Employment & ongoing compliance as NFRs',
      estMinutes: 18,
      prerequisites: ['26.1'],
      artifactSlot: null,
      concept: `**Educational, not legal advice. Employment, tax, and filing rules are deeply jurisdiction-dependent and change frequently. Use this to build the right instincts and calendar, then confirm specifics with a qualified lawyer or accountant for your location.**

Founders think in terms of *shipping* — discrete features that get done. Compliance doesn't work that way. It behaves like **non-functional requirements**: uptime, security, backups. Nobody demos them, they never "ship," and if you ignore them they don't fail loudly — they quietly accrue risk until an outage (an audit, a penalty, a lawsuit) forces the bill. This lesson is about treating the boring recurring obligations as first-class engineering, because they are the ones that sink otherwise healthy companies.

Two clusters matter early:

- **Contractor vs. employee — the classification that bites hardest.** It is tempting to label everyone a "contractor" to skip payroll taxes, benefits, and paperwork. But classification is determined by the **substance of the relationship**, not the label on the contract. Broadly, if you control *how, when, and where* the work is done, the person works full-time and indefinitely only for you, and you provide the tools — they *look like an employee* regardless of what the agreement says. Misclassifying an employee as a contractor can mean back taxes, penalties, and interest, sometimes with personal exposure.
- **At-will vs. notice, and the recurring filings.** Some jurisdictions default to "at-will" employment (either side can end it anytime, with limits); many others require notice periods, cause, or severance. Layered on top are the truly recurring obligations — payroll tax withholding and remittance, year-end wage/information filings, annual entity reports, registered-agent renewals, business-license renewals — each with its own deadline and its own penalty for missing it.

The discipline: build a **compliance calendar** the way you'd set up monitoring and cron jobs. Enumerate every recurring obligation, its deadline, and who owns it. Obligations you can name are obligations you can meet; the ones that hurt are the ones nobody was watching.`,
      reframe: {
        analogy: `Ongoing compliance is your company's **cron jobs and NFRs**. Payroll-tax remittance, quarterly and year-end filings, the annual report, the registered-agent renewal — these are scheduled jobs that must run on time, forever, whether or not anyone's paying attention. Like production NFRs (backups, cert rotation, monitoring), they deliver no visible feature, so they're easy to deprioritize behind "real work." And exactly like a silently failing backup job, a missed filing doesn't page you today — it surfaces later as a penalty that has been quietly compounding, the compliance equivalent of interest on tech debt.`,
        breaks: `A failed cron job you can usually **retry idempotently** — rerun it and you're whole. Compliance failures often aren't reversible that way: miss a tax-remittance deadline and penalties plus interest accrue that you can't simply "rerun away," and some failures pierce the boundary entirely. Unremitted payroll withholding, for instance, can create **personal liability** for founders in some jurisdictions — the corporate veil doesn't protect you, unlike a stateless job that can't corrupt the host. And you don't get to define these NFRs: the schedules and rules are set by external authorities and change under you, so you can't refactor the requirement away — only keep up with it.`,
      },
      workedExample: `**Worker-classification battles in the gig economy — California's Dynamex / AB5 saga and the Uber–Lyft fights (real, heavily documented US example).** California's Supreme Court (in the 2018 *Dynamex* decision) adopted a strict "ABC test" for classifying workers, later codified and modified by legislation (AB5) — pushing many companies to treat gig workers as employees rather than contractors. Ride-hailing and delivery platforms fought this hard, culminating in a ballot measure (Proposition 22) carving out app-based drivers, itself then litigated for years. Treat the specifics as illustrative and note they're California-specific and evolving.

Why cite a saga instead of a tidy fact? Because it shows the two things that make classification so dangerous for founders. First, **the label loses to the substance**: writing "independent contractor" on the agreement didn't settle anything — regulators and courts looked at the economic reality of the relationship. Second, **the stakes compound**: reclassification reaches backward, implicating back taxes, benefits, and penalties across every worker and every period, which is why billion-dollar companies spent years and fortunes fighting over it.

You are not Uber, but you face the *same test at small scale* the first time you bring on a "contractor" who works full-time, on your schedule, with your tools, only for you. The transferable move is to classify by substance up front: if the relationship walks and talks like employment, treat it as employment (or genuinely restructure it to be independent) rather than betting your back-tax exposure on a label. And whatever you decide, put the resulting obligations — withholding, filings, renewals — on a calendar you actually watch.`,
      branch: {
        scenario: `To save on payroll taxes and benefits, you bring on a developer as a "1099 contractor." In practice: they work full-time, you set their hours, they use a company laptop, you direct their daily tasks, and they work only for you. A year in, the relationship sours and the question of their status comes up. What's the reality?`,
        choices: [
          {
            label: 'They\'re a contractor because that\'s what the signed agreement says and they invoice you monthly.',
            correct: false,
            consequence: `**The label doesn\'t control — the substance does.** Full-time, your hours, your equipment, your direction, working only for you: by the economic-reality/control tests that regulators actually apply, this looks like employment no matter what the contract is titled. As the gig-economy fights showed, "we called them a contractor" is exactly the argument that loses. You may be carrying real misclassification exposure.`,
          },
          {
            label: 'It doesn\'t matter how they work day-to-day, as long as both sides agreed to the contractor arrangement.',
            correct: false,
            consequence: `**Consent to a label can\'t override the law.** Worker-protection and tax rules generally aren\'t waivable by private agreement — you can\'t contract out of employee status when the relationship is, in substance, employment. The agencies that assess back taxes and penalties don\'t treat "they agreed" as a defense.`,
          },
          {
            label: 'They\'re likely an employee by the control/economic-reality tests regardless of the label, so you have misclassification exposure — reclassify (or genuinely restructure the relationship) and get advice.',
            correct: true,
            consequence: `**Correct.** Classification turns on how the work actually happens, not the contract\'s title. A full-time worker on your schedule, using your tools, working only for you, looks like an employee — exposing you to back taxes, penalties, and interest (sometimes with personal liability for unremitted withholding). The fix is to reclassify or truly restructure toward independence, and to take the specifics to a professional.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each factor by which way it usually points in a worker-classification analysis. (Educational simplification — real tests weigh many factors together and vary by jurisdiction. Not legal advice.)',
          buckets: ['Points toward independent contractor', 'Points toward employee'],
          items: [
            { text: 'Sets their own hours and works for multiple clients', bucket: 'Points toward independent contractor' },
            { text: 'You control how and when the work is done, day to day', bucket: 'Points toward employee' },
            { text: 'Uses their own tools and bears real risk of profit or loss', bucket: 'Points toward independent contractor' },
            { text: 'Works full-time, indefinitely, and only for you', bucket: 'Points toward employee' },
            { text: 'Paid per project/deliverable and can subcontract the work', bucket: 'Points toward independent contractor' },
            { text: 'You provide the equipment, training, and a fixed salary', bucket: 'Points toward employee' },
          ],
          explain: 'Classification tests (behavioral control, financial control, and the nature of the relationship, or "economic reality") ask whether the worker is genuinely running their own business or is economically dependent on you and under your direction. Independence points to contractor status; control, exclusivity, indefiniteness, and you supplying the tools point to employee. No single factor decides it, the label on the contract does not control, and the exact test varies by jurisdiction — get advice on close calls.',
        },
        {
          kind: 'rank',
          prompt: 'You are about to make your first hire. Order the setup steps so you don\'t create compliance debt. (Illustrative US-style ordering; names/steps differ by jurisdiction. Not legal advice. Order first to last.)',
          items: [
            'Determine the correct classification (employee vs. contractor) before onboarding, by substance not label',
            'Register as an employer and set up the required tax accounts (federal/state as applicable)',
            'Collect onboarding paperwork, including a signed IP-assignment agreement',
            'Set up payroll to withhold and remit taxes each pay cycle',
            'File the required periodic and year-end payroll/information returns',
            'Renew annual entity filings and registered-agent service each year',
          ],
          explain: 'Classification comes first because it determines every obligation that follows — get it wrong and everything downstream is wrong. Then you register as an employer and open tax accounts, collect onboarding docs (including the IP assignment from Lesson 26.2), and stand up payroll to withhold and remit on schedule. Periodic and year-end filings and annual entity/registered-agent renewals are the recurring "cron jobs" that must keep running. Missing any of these accrues penalties quietly — which is why they belong on a calendar you watch.',
        },
        {
          kind: 'numeric',
          prompt: 'Why misclassification is expensive. Suppose the employer share of payroll taxes you SHOULD have paid on a worker is about 7.65% of wages, and that worker earned $120,000 over the year you wrongly treated them as a contractor. Roughly how much employer payroll tax were you liable for, in dollars (before any penalties or interest)? Compute 0.0765 x 120000.',
          answer: 9180,
          tolerance: 20,
          unit: '$ (employer payroll tax, pre-penalty)',
          explain: '0.0765 x 120,000 = $9,180 in employer payroll tax for ONE worker for ONE year — before penalties and interest, which reclassification typically adds on top, and before multiplying across every misclassified worker and every year. The illustrative rate and rules are US-specific and change, but the shape is universal: the "savings" from calling an employee a contractor are a deferred liability that compounds, exactly like the tech-debt/NFR framing.',
        },
        {
          kind: 'scenario',
          title: 'Classification and the recurring bill',
          intro: 'Treat employment and compliance as substance and schedule, not labels and good intentions. (Educational, not legal advice.)',
          decisions: [
            {
              situation: 'You need ongoing full-time help and want to move fast. A friend suggests "just 1099 everyone" to skip payroll setup. What\'s the sound approach?',
              options: [
                { label: 'Classify by the substance of each relationship; if it\'s really employment, set up as an employer (or genuinely structure the role to be independent)', correct: true, outcome: 'Correct. Classification follows how the work actually happens. If you control the work and it\'s full-time and exclusive, it\'s employment in substance — treat it that way or truly restructure it. Convenience is not a classification test.' },
                { label: 'Label everyone a contractor to avoid payroll tax and paperwork', correct: false, outcome: 'This is the classic misclassification trap. The label loses to the substance, and reclassification reaches backward for taxes, penalties, and interest across every worker and period.' },
                { label: 'Ask each worker which they\'d prefer and honor that', correct: false, outcome: 'Preference doesn\'t determine legal status. You can\'t contract or consent your way out of employee classification when the relationship is, in substance, employment.' },
              ],
            },
            {
              situation: 'Three months after incorporating, you realize no one is tracking your annual report, registered-agent renewal, and tax filing deadlines. What do you do?',
              options: [
                { label: 'Wait until you get a notice — no news is good news', correct: false, outcome: 'Silent failure is the whole danger. Like an unmonitored backup job, a missed filing surfaces later as compounding penalties or even administrative dissolution of your entity.' },
                { label: 'Build a compliance calendar listing every recurring obligation, its deadline, and an owner — and set reminders', correct: true, outcome: 'Correct. Treat compliance like NFRs and cron jobs: enumerate every recurring obligation, assign a deadline and an owner, and monitor it. Obligations you can name are obligations you can meet.' },
                { label: 'Assume your formation service handles all of it automatically forever', correct: false, outcome: 'Dangerous assumption. Services cover some renewals but rarely all your tax and employment filings; unowned obligations are exactly the ones that lapse.' },
              ],
            },
          ],
        },
        {
          kind: 'platformTask',
          title: 'Build your ongoing-compliance calendar',
          body: 'Turn recurring obligations into a monitored schedule. Using the official references for YOUR jurisdiction, list every recurring compliance obligation your venture has or will have — worker classification decisions, payroll tax remittance, periodic and year-end filings, annual entity report, registered-agent renewal, business-license renewals. For each, capture the deadline and who owns it. Reminder: this is educational, not legal advice, and is jurisdiction-dependent — confirm the actual deadlines and requirements with an accountant or lawyer. Record your calendar (the obligations, deadlines, and owners).',
          links: [
            { label: 'IRS — Worker Classification 101: employee or independent contractor', url: 'https://www.irs.gov/newsroom/worker-classification-101-employee-or-independent-contractor' },
            { label: 'US DOL — Misclassification of employees as independent contractors (FLSA)', url: 'https://www.dol.gov/agencies/whd/flsa/misclassification' },
            { label: 'US SBA — Stay legally compliant (ongoing obligations)', url: 'https://www.sba.gov/business-guide/manage-your-business/stay-legally-compliant' },
          ],
          steps: [
            'List everyone doing work for you and note your provisional classification (employee vs. contractor) by SUBSTANCE, flagging close calls for advice.',
            'Enumerate every recurring obligation you can find for your entity and jurisdiction (payroll taxes, periodic/year-end filings, annual report, registered-agent, licenses).',
            'For each obligation, record the deadline (or "confirm with accountant") and a named owner.',
            'Set actual reminders ahead of each deadline so these become monitored cron jobs, not surprises.',
            'Record your compliance calendar below, and flag which items you need a professional to confirm.',
          ],
          taskKey: '26.4#compliance-calendar',
          proofLabel: 'Your compliance calendar: recurring obligations + deadlines + owners (and any misclassification flags)',
          proofKind: 'text',
        },
        {
          kind: 'resource',
          title: 'Employment & ongoing-compliance references (official)',
          items: [
            { label: 'IRS — Worker Classification 101', url: 'https://www.irs.gov/newsroom/worker-classification-101-employee-or-independent-contractor', note: 'Plain-language US overview of the behavioral/financial/relationship tests for employee vs. contractor.' },
            { label: 'IRS — Independent contractor (self-employed) or employee?', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee', note: 'Deeper US guidance, including how to request an official determination (Form SS-8).' },
            { label: 'US DOL — Misclassification under the FLSA', url: 'https://www.dol.gov/agencies/whd/flsa/misclassification', note: 'The labor-law (as opposed to tax) side of classification and the "economic reality" analysis.' },
            { label: 'US SBA — Stay legally compliant', url: 'https://www.sba.gov/business-guide/manage-your-business/stay-legally-compliant', note: 'Checklist-style overview of recurring external and internal compliance requirements (annual reports, taxes, licenses).' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Classify a specific role for me', kind: 'ask', question: 'Walk me through classifying a specific role at my venture by SUBSTANCE (control, exclusivity, tools, permanence, financial risk), tell me which way it leans and why, and flag whether it\'s a close call that needs professional advice. Remind me this is educational, not legal advice, and jurisdiction-dependent.' },
        { label: 'Draft my compliance calendar', kind: 'ask', question: 'Help me enumerate the recurring compliance obligations for my entity type and jurisdiction (payroll taxes, periodic and year-end filings, annual reports, registered-agent, licenses), suggest deadlines to confirm with a professional, and structure them into a calendar with owners.' },
        { label: 'A harder cross-border employment case', kind: 'harder', concept: 'engaging a full-time worker who lives in a different country from the company, and the classification, tax-withholding, and notice-period questions that raises' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A worker\'s contract clearly states "independent contractor," they invoice you monthly, and both sides signed willingly. In substance they work full-time on your schedule, with your equipment, only for you. What determines their legal classification?',
          options: [
            'The title written in the signed contract',
            'The substance of the relationship (control, exclusivity, tools, permanence, economic dependence) — which here points toward employee regardless of the label',
            'Whichever status results in lower taxes for the company',
            'The fact that both parties agreed makes the contractor label binding',
          ],
          answer: 1,
          explain: 'Classification follows the economic reality and degree of control, not the label or mutual consent. Full-time work on your schedule, with your tools, exclusively for you, points to employee status even if the contract says "contractor" — and misclassification exposes you to back taxes, penalties, and interest, sometimes with personal liability. Neither the title nor the parties\' agreement overrides the substance.',
        },
        {
          kind: 'mcq',
          prompt: 'The "compliance is cron jobs / NFRs" analogy is useful, but where does it BREAK?',
          options: [
            'Cron jobs and compliance are exactly the same, so the analogy never breaks',
            'A failed cron job can usually be retried idempotently, but missed filings accrue non-reversible penalties/interest and some (e.g. unremitted payroll withholding) can create PERSONAL liability that pierces the corporate boundary',
            'Compliance obligations are defined by you, just like your own NFRs',
            'Cron jobs run on a schedule but compliance obligations have no deadlines',
          ],
          answer: 1,
          explain: 'The analogy captures that compliance is recurring, invisible, and quietly accrues risk if neglected. It breaks because a stateless cron job can be rerun to make you whole, whereas missed compliance often can\'t: penalties and interest compound irreversibly, and failures like unremitted payroll withholding can reach founders personally — unlike an isolated job that can\'t corrupt the host. You also don\'t get to define these requirements; external authorities do, and they change under you.',
        },
        {
          kind: 'free',
          prompt: 'For your venture, (1) take one person doing work for you and classify them by substance (contractor vs. employee), naming the specific factors and flagging if it\'s a close call; and (2) list at least four recurring compliance obligations you\'ll have, each with a rough deadline/frequency and an owner. Be explicit about what you\'d confirm with a professional and what\'s jurisdiction-dependent.',
          rubric: 'Strong answer: (1) classifies a real or hypothetical worker using substance factors (control, exclusivity, tools, permanence, financial risk) rather than the label, and honestly flags close calls; (2) enumerates at least four genuinely recurring obligations (e.g. payroll tax remittance, year-end filings, annual report, registered-agent/license renewals) with a frequency/owner, showing the NFR/cron-job mindset; (3) explicitly defers specifics to an accountant/lawyer and notes jurisdiction dependence. Penalize relying on the contract label to classify, or treating compliance as one-time rather than recurring.',
        },
      ],
      commitSummary: 'your worker-classification flags and an ongoing-compliance calendar (obligations, deadlines, owners) are captured in "My venture" — the recurring NFRs that quietly sink companies when nobody owns them. Educational only; confirm specifics with a professional.',
    },
  ],
}
