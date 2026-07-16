import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 11 — Legal, incorporation & operations
//
// The "boring" scaffolding that lets the company legally exist and run. Framed
// for engineers: entity types as deployment targets, equity/vesting as
// time-locked access control, contracts/ToS/privacy as the legal API surface,
// and compliance/tax/ops as non-functional requirements plus scaling nodes.
//
// IMPORTANT: this module is GENERAL EDUCATION, not legal or tax advice, and it
// is heavily region-dependent. Every lesson flags this. Specifics (entity
// forms, filings, rates) are kept generic on purpose — the durable lesson is
// the tradeoff structure, not any one jurisdiction's paperwork. The last
// lesson writes startup.legal via the reusable `form` artifact.
// ===========================================================================

export const module11: Module = {
  id: 11,
  title: 'Legal, incorporation & operations',
  goal: 'Stand up the real-world scaffolding so the company can legally exist and run — (general education, not legal advice).',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '11.1',
      module: 11,
      title: 'Entity types as deployment targets',
      estMinutes: 14,
      prerequisites: [],
      artifactSlot: null,
      concept: `> **Not legal or tax advice.** This is general education. Entity names, tax treatment, and filings vary enormously by country and even by state/region. Treat everything here as a mental model, then confirm specifics with a qualified professional in *your* jurisdiction.

Incorporating turns "some people building a thing" into a **legal person** — an entity that can own assets, sign contracts, be sued, and be taxed *instead of you personally*. Before that, you and the business are the same legal object, so the business's debts and lawsuits are **your** debts and lawsuits.

Three broad shapes dominate the conversation (names differ by region — a UK "Ltd", a German "GmbH", an Estonian "OÜ" all rhyme with these):

- **Sole trader / partnership** — no separation. Cheapest to start; unlimited personal liability. Rarely right once you have users, revenue, or co-founders.
- **Limited-liability company (LLC-style)** — a liability shield with flexible, usually **pass-through** taxation (profits taxed once, on the owners). Simple to run; often *awkward* for priced equity rounds and stock options.
- **Corporation (C-corp-style)** — a distinct taxable entity with **shares**. Heavier admin and potential double taxation, but it is the shape investors and stock-option plans expect.

The decision is a **tradeoff across three axes**: personal *liability* protection, *tax* treatment, and *investability*. There is no globally "best" entity — only the best fit for how you intend to raise money and operate.`,
      reframe: {
        analogy: `Choosing an entity is choosing a **deployment target**. Your product logic (the actual business) is the same, but where you deploy it changes everything around it. A sole trader is running the binary **directly on your laptop as root** — zero isolation, so a crash takes the whole machine (a business liability reaches your personal assets). An LLC is a **container**: a real isolation boundary that's quick to stand up and cheap to run. A C-corp is a **managed orchestration platform** — more boilerplate, more moving parts, but it exposes the standardized interfaces (shares, option pools, board governance) that outside investors' tooling plugs into.

You pick the target by the non-functional requirements: how much isolation you need (liability), what the runtime costs to operate (tax and admin), and what has to integrate with it later (investors, employees holding equity).`,
        breaks: `A deployment target is a reversible, low-stakes choice — you redeploy on a whim. Re-incorporating or **converting** an entity is not: it can trigger tax events, require re-papering contracts and IP, and occasionally reset investor-relevant clocks. The isolation is also **leakier** than a container's: courts can "pierce the veil" and reach owners personally if you commingle personal and company money, skip formalities, or commit fraud. The shield protects the *diligent*, not the sloppy. And unlike infra, the right target is set as much by tax and securities law in *your* country as by engineering taste — which is exactly why this is a professional's question, not a default you can copy from a blog.`,
      },
      workedExample: `**Meridian** is a small B2B dev-tooling team. Two founders, a handful of paying customers, and a clear intent to raise a priced round within a year or two.

Walk the three axes (generically — *not* a recommendation for any specific reader):

- **Liability.** They ship software that plugs into customers' CI pipelines. A bad release could plausibly draw a claim. Both founders want their personal savings *outside* the blast radius, so any option **without** a liability shield is off the table.
- **Tax.** An LLC-style pass-through would tax profits once, on the founders — attractive while small and profitable. But Meridian expects to reinvest, not distribute, and to bring on option-holding employees.
- **Investability.** The professional investors Meridian is courting almost always want to buy **preferred shares** with a standard option pool underneath. That strongly favors a corporation-style entity, because the instruments investors use are built for shares.

The *shape* of the answer: a small, profitable, bootstrapped-forever business often leans LLC-style; a team optimizing for a priced venture round and employee options usually accepts the corporation's overhead to get its investability. Meridian's stated intent (raise soon, grant options) points toward the corporation-style target — **but the actual choice, and how to get there tax-efficiently, is a conversation with a startup lawyer and accountant in their jurisdiction, not a decision this lesson can make.**`,
      branch: {
        scenario: `Meridian's founders read a viral thread titled "Just start an LLC — corps are a scam for lawyers." They're about to file an LLC-style entity this afternoon to save time and money, even though they plan to raise a priced venture round and grant employee stock options within ~12 months. What's the right call?`,
        choices: [
          {
            label: 'File the LLC now — it is cheaper and simpler, and they can always convert later if investors insist.',
            correct: false,
            consequence: `**Instructive miss.** The LLC *is* cheaper and simpler day-to-day — that part of the thread isn't wrong. But "convert later" is doing a lot of hidden work: converting an entity right before a round can create tax events, force you to re-paper IP and contracts, and burn legal spend at the worst possible moment. Optimizing the cheap early step can make the expensive later step much worse. Match the entity to where you're *going*, not just where you are.`,
          },
          {
            label: 'Pause the filing and take the raise-and-options intent to a startup lawyer/accountant before choosing a shape.',
            correct: true,
            consequence: `**Correct.** The blog is generic; Meridian's decision hinges on *their* specific intent (priced round + option pool) and *their* jurisdiction's tax and securities rules. A short paid consult now is far cheaper than a conversion or a scared-off investor later. The lesson isn't "always incorporate as a corp" — it's that the entity is a **deployment target chosen from your roadmap and NFRs**, and this particular roadmap (venture + options) usually favors the corporation-style target. Confirm, don't copy.`,
          },
          {
            label: 'Stay a general partnership for now — no entity at all — to avoid all fees until revenue is bigger.',
            correct: false,
            consequence: `**The dangerous miss.** A partnership means **no liability shield**: a customer claim or a co-founder's business debt can reach each founder's personal assets, and disputes between the founders have no entity-level rules to fall back on. You'd be saving small filing fees by leaving the single most valuable feature — isolation — switched off precisely while you have paying users who could sue.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Map the tradeoffs to my situation', kind: 'ask', question: 'Given my rough plans (bootstrap vs raise, solo vs co-founders, employees with equity or not), walk me through the liability / tax / investability tradeoffs of an LLC-style vs corporation-style entity — as general education, and tell me exactly which questions I should bring to a lawyer in my jurisdiction.' },
        { label: 'Harder entity-choice example', kind: 'harder', concept: 'entity selection when tax residency, cross-border customers, and a future venture round all interact' },
        { label: 'Critique my reasoning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A founder plans to raise a priced venture round and grant employee stock options within a year. Which single factor most strongly pushes them toward a corporation-style entity rather than an LLC-style one?',
          options: [
            'Corporations always pay less tax than LLCs',
            'Investors and option plans are built around shares, which corporations issue cleanly',
            'LLC-style entities provide no liability protection at all',
            'Corporations are cheaper and simpler to administer',
          ],
          answer: 1,
          explain: 'It is the **investability** axis. The instruments investors buy (preferred shares) and the option pools employees expect are native to corporation-style entities. Tax is often *worse* (potential double taxation), admin is *heavier*, and LLC-style entities **do** provide a liability shield — so the other options are false.',
        },
        {
          kind: 'mcq',
          prompt: 'A founder brags that their entity "totally protects" their personal assets, then routinely pays personal rent from the company account and skips all corporate formalities. What is the accurate concern?',
          options: [
            'Nothing — the liability shield is absolute once you incorporate',
            'Commingling funds and skipping formalities can let a court pierce the veil and reach them personally',
            'They will simply pay slightly more tax',
            'The shield only fails if the company is a corporation, not an LLC',
          ],
          answer: 1,
          explain: 'The shield protects the diligent, not the sloppy. Commingling personal and company money and ignoring formalities are classic grounds for **piercing the corporate veil**, which exposes owners personally — regardless of entity type. (General education, not legal advice.)',
        },
      ],
      commitSummary: 'concept only — you draft your entity/ops checklist in lesson 11.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '11.2',
      module: 11,
      title: 'Equity, vesting & founder agreements as access control with time-locks',
      estMinutes: 16,
      prerequisites: ['11.1'],
      artifactSlot: null,
      concept: `> **Not legal or tax advice.** Vesting mechanics, tax on equity (and elections like an early-tax filing), and enforceability vary by jurisdiction. Confirm specifics with a professional.

**Equity** is ownership of the company, usually measured in shares or percentages. **Vesting** is the rule that you *earn* your equity over time instead of owning it all on day one.

The standard shape (a convention, not a law):

- A **4-year vesting schedule** — you earn your grant gradually across four years of continued involvement.
- A **1-year cliff** — you earn **nothing** until you pass the one-year mark, at which point ~25% vests at once; the rest then accrues monthly.
- **Unvested** equity is returned to the company (or never issued) if you leave early.

Critically, **founders should vest too.** It feels absurd to put a time-lock on your *own* company, but founder vesting is what protects the cap table from the most common early catastrophe: a co-founder who leaves after three months walking away with a huge, permanent, un-earned slice of the company — a **dead-equity** wound that poisons every future hire and investor.

$$\\text{vested fraction} \\approx \\begin{cases} 0 & t < \\text{cliff} \\\\ \\dfrac{t}{\\text{total}} & t \\ge \\text{cliff} \\end{cases}$$

A **founder agreement** writes all of this down *before* anyone has a reason to fight: who owns what, the vesting terms, what happens on departure, and how decisions get made.`,
      reframe: {
        analogy: `Vesting is **time-locked access control**. Equity is a permission grant, and vesting attaches a policy to it: the grant isn't fully active the moment it's issued — it *matures* on a schedule of continued contribution. The **cliff** is a probation window written as an access rule: for the first year the effective grant is **zero**, and only after the lock releases does the principal accrue rights. Leaving early is like failing the probation check — the un-matured permissions are **revoked** and returned to the pool, exactly as you'd revoke a token that never reached its activation date.

Founder vesting is applying that same policy to the **root/admin accounts**. It's tempting to exempt the founders — "we're the owners" — but the whole point of access control is that it binds *especially* the most powerful principals. The founder agreement is the **policy file** committed to the repo before an incident, so everyone can see the rules instead of arguing them mid-outage.`,
        breaks: `Access control is usually **binary and instantly reversible** — flip a boolean and the permission is gone. Vested equity is neither: it is a *legal property right* that, once vested, you generally **cannot claw back** just because relations sour. There's no "revoke" call on shares someone has already earned. Vesting is also entangled with **tax** in ways access tokens never are — *when* equity vests can trigger tax, and some jurisdictions offer an early-election filing that must be made within a tight deadline, which no permission system has an analog for. And a cliff isn't purely mechanical: whether unvested equity actually returns cleanly depends on documents being drafted and signed correctly. So treat "time-locked access control" as the intuition for *why* vesting exists — and treat the drafting and the tax timing as a professional's job.`,
      },
      workedExample: `**Meridian**'s two founders, **Ana** and **Ben**, agree to split equity **55/45** and — on a lawyer's advice — put *both* of themselves on a standard **4-year vest with a 1-year cliff**. It feels redundant ("it's *our* company"), but they do it anyway.

Nine months in, Ben decides startup life isn't for him and leaves. Trace the two worlds:

- **Without vesting:** Ben owns his full **45%** outright, forever. Meridian now has a departed co-founder holding nearly half the company and contributing nothing — **dead equity**. Every future investor sees it and balks; every early hire's option grant is diluted by a ghost. Ana is effectively running a company she co-owns with someone who left.
- **With the cliff:** Ben left at 9 months — *before* the 1-year cliff — so **0%** has vested. His shares return to the company. Painful personally, clean structurally: the cap table reflects who's actually building, and Meridian stays fundable.

Now suppose instead Ben leaves at **2.5 years**. He's vested $\\frac{2.5}{4} \\approx 62.5\\%$ of his 45% grant, i.e. about **28%** of the company, and keeps that; the remaining ~17-point slice returns. He earned what he built and no more. That's the whole point: vesting makes equity **track contribution over time** instead of rewarding whoever showed up on incorporation day. *(How the return of unvested shares is actually documented and taxed is jurisdiction-specific — get it drafted by a professional.)*`,
      branch: {
        scenario: `Ana proposes founder vesting to Ben on day one. Ben is offended: "We're equal founders and I trust you — putting *me* on a vesting schedule means you don't trust me. Let's just each own our shares outright and keep it simple." How should Ana respond?`,
        choices: [
          {
            label: 'Agree — trust is the foundation of a co-founder relationship, and vesting signals distrust.',
            correct: false,
            consequence: `**Instructive miss.** This feels kind and it's the most common way founders sleepwalk into disaster. Vesting isn't about *this* moment's trust; it's insurance against an unknowable future — illness, a change of heart, a move, a falling-out. If Ben leaves in year one with no vesting, Ana is stuck with a co-owner who isn't contributing, and *she* is the one harmed. Skipping vesting to prove trust is optimizing feelings today at the cost of the company's survivability.`,
          },
          {
            label: 'Reframe it: vesting protects the person who STAYS, so putting them both on it is mutual protection, not suspicion.',
            correct: true,
            consequence: `**Correct.** The key reframe is that founder vesting is **symmetric and mutual**: it protects whichever founder *stays* from being saddled with dead equity held by whichever founder *leaves*. Ana isn't asking Ben to prove himself to her — they're both agreeing to a rule that says "equity tracks contribution, for both of us." Investors will expect it anyway, and having it settled before any conflict is exactly when it's easy to agree. Trust is *why* you can write the policy calmly today, not a reason to skip it.`,
          },
          {
            label: 'Compromise by giving them both huge, fully-vested grants now but adding a handshake promise to "give some back" if someone leaves early.',
            correct: false,
            consequence: `**The worst of both worlds.** A handshake promise to return equity is exactly the kind of thing that evaporates under stress — when someone's actually leaving, "give some back" turns into a dispute with no enforceable rule behind it. Un-vested-but-promised equity is legally *theirs*; the informal promise is nearly worthless. This is the situation vesting exists to prevent, recreated with extra steps. Write the real schedule down.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Explain cliffs and monthly vesting on my split', kind: 'ask', question: 'Given a co-founder split I describe, walk through how a 4-year / 1-year-cliff schedule would play out if someone leaves at 6 months, 18 months, or 3 years — as general education — and list the tax-timing questions I should raise with a professional.' },
        { label: 'Harder equity scenario', kind: 'harder', concept: 'acceleration clauses (single vs double trigger) and how they interact with founder vesting on an acquisition' },
        { label: 'Critique my founder-agreement thinking', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A co-founder on a standard 4-year vest with a 1-year cliff leaves after 10 months. How much of their grant have they vested?',
          options: [
            'About 21% (10/48 of the grant)',
            'Nothing — they left before the 1-year cliff',
            '25% — the cliff amount is always paid out',
            'Their full grant, since founders are exempt from cliffs',
          ],
          answer: 1,
          explain: 'A **cliff** means zero vests until you pass the one-year mark. Leaving at 10 months is before the cliff, so **0%** has vested and the shares return to the company. The cliff amount (~25%) only lands *at* the one-year point, and founders are not automatically exempt.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR company, describe your intended founder equity split and vesting terms (or, if solo, what you would set up before your first co-founder or key hire). Explain in your own words why founder vesting protects the founder who stays — not just the company.',
          rubric: 'Strong answer: (1) states a concrete split and vesting intent (e.g. 4-year vest, 1-year cliff), or a sensible solo-founder plan for future grants; (2) correctly explains the "protects the person who stays / prevents dead equity" logic rather than framing vesting as distrust; (3) shows understanding that unvested equity returns on early departure and that the cliff means zero before year one; (4) acknowledges that exact terms, documents, and tax timing are jurisdiction-specific and belong with a professional (not legal advice).',
        },
      ],
      commitSummary: 'concept only — you record your vesting intent in the lesson 11.4 checklist.',
    },

    // -----------------------------------------------------------------------
    {
      id: '11.3',
      module: 11,
      title: 'IP, contracts & ToS/privacy as the legal API surface',
      estMinutes: 15,
      prerequisites: ['11.1', '11.2'],
      artifactSlot: null,
      concept: `> **Not legal or tax advice.** IP-assignment rules, enforceable contract terms, and privacy-law obligations differ sharply by jurisdiction and by who your users are. This is general education; use professionally drafted documents.

Your company interacts with the outside world through a set of **legal documents**, and each one is an interface with a contract (in the software sense) that others rely on:

- **IP assignment** — the agreement that work created by founders, employees, and contractors is *owned by the company*. Without it, the person who wrote the code may personally own it. Investors treat a clean **IP chain of title** as non-negotiable: if the company doesn't clearly own its own product, there's nothing to invest in.
- **Customer contracts / MSAs** — what you promise paying customers (uptime, support, data handling) and, crucially, the **limits** on that promise (liability caps, warranty disclaimers).
- **Terms of Service (ToS)** — the public contract governing anyone who uses the product: acceptable use, disclaimers, dispute rules, termination rights.
- **Privacy policy** — what data you collect, why, how it's stored and shared, and users' rights over it. In many regions this is **legally mandatory**, not optional boilerplate.

The unifying idea: these documents are the **legally binding surface** you expose. Everything inside — your code, your ops — is implementation. The documents define what the outside world may rely on, and what recourse they have when something breaks.`,
      reframe: {
        analogy: `Your legal documents are your **public API surface**, and each one is a published **contract** callers integrate against. A customer contract is a versioned endpoint with an explicit **SLA and error envelope**: liability caps and warranty disclaimers are you defining the maximum "response size" of a failure so a single bad call can't take down the whole company. The ToS is the **public rate-limit-and-acceptable-use spec** every anonymous caller is bound by. The privacy policy is your **data-handling contract** — the documented schema of what you collect and what guarantees you make about it.

**IP assignment** is the deepest one: it's establishing **ownership of the codebase itself**. Without a clean assignment, it's as if the library your whole product imports is under a license you never actually secured — every build sits on a dependency you don't own, and any downstream integrator (an investor, an acquirer) who runs due diligence will flag it immediately.`,
        breaks: `An API contract is enforced *mechanically* — violate the schema and the call fails deterministically, instantly, the same way every time. Legal contracts are enforced **through disputes**: slowly, expensively, with human judgment, and only if someone chooses to pursue it. A clause can be written and signed and still be **unenforceable** because a court in your jurisdiction won't honor it (some liability waivers and non-competes simply don't hold). There's no compiler that rejects an invalid contract — an unenforceable term looks fine until it's tested. And unlike an API you can silently hot-patch, changing terms that users already relied on can require **notice, consent, or re-acceptance**, especially for privacy. So the analogy nails *why the surface matters and why ownership must be clean* — but "it's written down" is not the same as "it will hold," and that gap is exactly where you need a lawyer, not a linter.`,
      },
      workedExample: `**Meridian** moved fast in month one. A freelance developer, **Priya**, built the core parsing engine on a handshake — paid via invoice, no contract, no IP assignment. Meridian also launched with a ToS and privacy policy **copy-pasted from a competitor's website**, find-and-replaced with Meridian's name.

Eighteen months later, Meridian signs a term sheet. Diligence surfaces two wounds:

- **The IP gap.** Because there was no assignment agreement, **Priya may personally own the copyright** to the parsing engine she wrote — the literal core of the product. Meridian's chain of title is broken: on paper, the company doesn't fully own its own flagship. The investor won't close until this is fixed, which now means locating Priya and negotiating an assignment *from a position of weakness* (she knows how much it matters). A one-page contract at the start would have made this a non-issue.
- **The copied policy.** The lifted privacy policy describes data practices that are the *competitor's*, not Meridian's — it promises things Meridian doesn't do and omits things Meridian actually does (like a third-party analytics processor). That's not just sloppy; in a privacy-regulated region it can be a **compliance violation and a misrepresentation to users**, independent of the diligence problem.

The cost of skipping the legal surface isn't zero-then-fine — it's a **deferred, compounding liability** that comes due at the worst moment (a raise, an acquisition, a breach). Cheap to do right at the start; expensive and leverage-losing to fix under a term sheet. *(What a valid assignment or a compliant policy requires is jurisdiction-specific — this is general education, not a template to copy.)*`,
      branch: {
        scenario: `Meridian is about to bring on its first contractor to build a new integration, and separately needs a privacy policy before onboarding EU-based customers. The founders, remembering the Priya lesson, want to "do it right this time" but are cash-strapped. Which approach best protects the company?`,
        choices: [
          {
            label: 'Have the contractor sign a clear IP-assignment agreement up front, and get a privacy policy drafted/reviewed for their actual data practices — treat both as required, not optional.',
            correct: true,
            consequence: `**Correct.** Both are load-bearing parts of the legal surface. A signed IP assignment *before* work starts keeps the chain of title clean automatically — the single cheapest insurance in a startup. And a privacy policy that accurately reflects Meridian's *own* data flows (not a competitor's) is both a legal obligation in many regions and a truthful contract with users. Spending a modest amount here is dramatically cheaper than fixing a broken title under a term sheet or facing a privacy complaint. Doing it right at the start is the *frugal* option once you count the deferred cost.`,
          },
          {
            label: 'Skip the contractor agreement to save legal fees — they are just doing one small integration, and copy a well-known company\'s privacy policy since those are clearly compliant.',
            correct: false,
            consequence: `**This is the Priya mistake, twice.** "Just one small integration" is exactly how core IP ends up personally owned by a contractor — the size of the task doesn't shrink the ownership gap. And copying a big company's privacy policy imports *their* data practices, not yours: it will describe collection and sharing you don't do and omit what you actually do, which can itself be a misrepresentation and a compliance violation. Both shortcuts recreate a deferred liability that surfaces at the worst time.`,
          },
          {
            label: 'Do the IP assignment (that one clearly matters) but skip the privacy policy for now — you can add it once you have more EU customers and it becomes a real problem.',
            correct: false,
            consequence: `**Half-right, and the missing half bites.** Getting the IP assignment is genuinely correct. But "wait until it's a real problem" misreads privacy law: in many regions the obligation attaches as soon as you process personal data of those users — the *first* EU customer, not the hundredth. Onboarding them without a compliant policy means you're already non-compliant, and the fix is reactive and stressful instead of a cheap up-front step. Non-functional requirements you can't defer are the whole theme of the next lesson.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'What is my legal surface right now?', kind: 'ask', question: 'Based on what you know about my company, list the legal documents I most likely need (IP assignment, customer contract/MSA, ToS, privacy policy), why each matters, and which are urgent given who my users are — as general education, and flag what needs a lawyer in my jurisdiction.' },
        { label: 'Harder IP chain-of-title example', kind: 'harder', concept: 'IP chain of title with contractors, open-source dependencies, and prior-employer invention-assignment clauses' },
        { label: 'Critique my ToS/privacy thinking', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A startup paid a freelancer to build its core feature via invoice, with no written agreement. During an investment diligence, why is this a serious problem?',
          options: [
            'The freelancer might personally own the IP, breaking the company\'s chain of title',
            'Paying by invoice is illegal in most jurisdictions',
            'It means the startup owes the freelancer additional equity automatically',
            'Investors dislike freelancers on principle',
          ],
          answer: 0,
          explain: 'Without an **IP-assignment agreement**, the creator may retain copyright to what they built — so the company may not actually own its own core product. A broken **chain of title** is a classic diligence blocker. Paying by invoice is fine; the missing piece is the assignment.',
        },
        {
          kind: 'mcq',
          prompt: 'A team copies a large tech company\'s privacy policy verbatim, swapping in their own name, to save time. The most accurate risk is:',
          options: [
            'None — big companies\' policies are the gold standard and safe to reuse',
            'It may describe data practices that are not theirs, creating a misrepresentation and possible compliance violation',
            'They will owe the other company a licensing fee',
            'Their liability cap will automatically be too low',
          ],
          answer: 1,
          explain: 'A privacy policy is a factual description of **your** data flows. Copying another company\'s imports *their* practices — promising things you don\'t do and omitting things you do — which can be a misrepresentation to users and a compliance problem in privacy-regulated regions. (General education, not legal advice.)',
        },
      ],
      commitSummary: 'concept only — your IP/contracts posture feeds the lesson 11.4 checklist.',
    },

    // -----------------------------------------------------------------------
    {
      id: '11.4',
      module: 11,
      title: 'Compliance & tax as non-functional requirements; ops as scaling nodes',
      estMinutes: 18,
      prerequisites: ['11.1', '11.2', '11.3'],
      artifactSlot: 'legal',
      concept: `> **Not legal or tax advice.** Compliance regimes, tax obligations, and employment rules are intensely jurisdiction-specific and change over time. This is general education; a qualified accountant and lawyer in *your* region are non-optional.

Two families of obligation run quietly under everything you build.

**Compliance & tax are non-functional requirements.** Nobody asked for them; the product "works" without them right up until it catastrophically doesn't. They include:

- **Tax filings & registrations** — income/corporate tax, sales tax / VAT / GST once you cross thresholds, and payroll taxes the moment you have employees. These have **hard deadlines** and penalties for missing them.
- **Regulatory compliance** — privacy regimes, security standards customers demand (e.g. a SOC-2-style audit for enterprise deals), and any sector rules that apply to your users.
- **Bookkeeping** — the boring, continuous discipline that makes every one of the above *possible* and keeps your financial model honest.

Like latency or security, these don't show up as features, but ignoring them accrues **debt that compounds** and eventually blocks releases (a deal you can't close without SOC-2) or halts the system entirely (penalties, or an entity in bad standing).

**Ops = adding nodes to a running system.** Your first hires, contractors, and tools are **capacity added to a live system that can't take downtime.** Each new person is a node that needs provisioning (contracts, IP assignment, payroll setup, access), coordination overhead, and a clear interface (role, responsibilities). Adding nodes carelessly doesn't linearly add throughput — it can add *coordination cost* faster than capacity.`,
      reframe: {
        analogy: `Compliance and tax are **non-functional requirements** — the exact same category as latency, availability, and security. A demo with no auth and no monitoring "works" in the sense that requests return; a company with no tax registrations and no bookkeeping "works" in the sense that it ships. Both are one incident away from disaster, and in both cases the NFR was invisible right until the outage. Missing a tax deadline is an **unhandled exception in production**: silent while traffic is low, then a penalty (a thrown error) with interest that compounds like an unpaid alert.

**Scaling the team is horizontal scaling.** Your first hire is the second node in the cluster. Naively you expect two nodes to double throughput, but you have to provision the node (contracts, access, IP assignment), add it to the **coordination protocol** (who owns what, how work is handed off), and absorb the communication overhead every distributed system pays. Ops is the discipline of adding nodes so they actually increase capacity instead of just increasing chatter.`,
        breaks: `A production NFR is enforced by a system *you* control — you can choose your own availability target and accept the tradeoff. Compliance NFRs are set by **external authorities** who don't negotiate with your roadmap: you can't decide a tax deadline is "P2 this quarter," and there's no feature flag to disable a regulation. The penalty function is also **discontinuous and jurisdiction-specific** in a way latency never is — small lateness can trigger disproportionate fines, and the rules differ by country and change under you.

And people are **not** stateless compute nodes. You can't autoscale a team up and down without enormous human cost; onboarding is slow, morale isn't a metric you can pin, and "removing a node" (a layoff or firing) carries legal *and* ethical weight a load balancer never faces. Employment law makes each node's provisioning and de-provisioning genuinely different across regions. Use the analogy for the *shape* — invisible-until-critical NFRs, coordination overhead when adding capacity — and drop it the moment it tempts you to treat filings as optional or people as fungible.`,
      },
      workedExample: `**Meridian** is closing its biggest deal yet: a **$90,000/year** enterprise contract. Two "non-functional" walls appear at once — the theme of this whole module coming due.

- **Compliance NFR.** The enterprise customer's security team requires a **SOC-2-style report** before signing. Meridian has none. This isn't a feature they can ship next sprint — it's an audited process taking months. The deal that would transform their revenue is **blocked by an NFR they deferred**, exactly like discovering in the sales cycle that you never built authentication. They can start the process now, but they've lost the months they could have banked earlier.
- **Tax NFR.** Crossing into real revenue and multiple regions, Meridian is now likely over **sales-tax / VAT thresholds** in places it never registered. Each unregistered month is quiet liability accruing with penalties — an unhandled exception that hasn't thrown *yet*.

Meanwhile Meridian makes its **first two hires** to service the growing book — two new nodes on a live system. Ana's instinct is "just get them coding Monday." But each node needs provisioning: an employment agreement **with IP assignment** (lesson 11.3), payroll and payroll-tax setup (a tax NFR that starts the day they're hired), access, and a defined role so the two of them don't collide on the same work. Skip the provisioning and you don't get 2× throughput — you get two people unsure who owns what, plus a fresh IP-title gap.

The lesson of the module in one scene: the "boring" scaffolding — entity, equity, IP, compliance, tax, ops — is **load-bearing**, and it comes due exactly when you're succeeding. *(Every specific here — which SOC-2 scope, which tax registrations, which employment terms — is jurisdiction-specific and belongs with your accountant and lawyer. General education, not advice.)*`,
      branch: {
        scenario: `Meridian is growing fast. Revenue is up, a big deal is in the pipeline, and the founders are heads-down shipping. An advisor asks who's handling bookkeeping, tax registrations, and the compliance prep for enterprise deals. Ana says: "We'll deal with all the legal and tax stuff once we hit a real milestone — right now every hour has to go into the product." What's the best response?`,
        choices: [
          {
            label: 'Ana is right to focus — product is the only thing that matters early, and compliance/tax can be batched up and cleaned later.',
            correct: false,
            consequence: `**The tempting miss.** Product focus is genuinely vital, but compliance and tax are **NFRs with external deadlines you don't control** — "clean it later" works for tech debt you own, not for a tax filing date or a SOC-2 audit a customer demands *now*. Batching them means missing deadlines (penalties that compound) and discovering, mid-deal, that the thing blocking a $90k contract takes months to fix. The debt comes due on the regulator's and customer's schedule, not yours.`,
          },
          {
            label: 'Treat compliance, tax, and bookkeeping as ongoing NFRs: set up basic bookkeeping now, get professional help for registrations, and start compliance prep before deals require it.',
            correct: true,
            consequence: `**Correct.** You don't have to make the founders into accountants — you have to stop treating these as deferrable. Continuous bookkeeping keeps everything else possible and your financial model honest; a professional handles registrations before thresholds are breached; and starting SOC-2-style prep *before* a customer demands it means the NFR is ready when the deal arrives instead of blocking it. NFRs are maintained continuously and cheaply, not bolted on in a panic. This is also why your first ops hires and tools matter — capacity to keep the scaffolding standing as you scale.`,
          },
          {
            label: 'Hire a full-time in-house General Counsel and a full finance team immediately so nothing is ever missed.',
            correct: false,
            consequence: `**Over-provisioning the nodes.** The instinct — take compliance seriously — is right, but a small B2B startup doesn't need full-time in-house counsel and a finance department yet; that's enormous fixed cost and coordination overhead for load you don't have. The proportionate answer is *fractional*: bookkeeping software plus an accountant, a startup lawyer on call, and compliance prep timed to real deals. Add nodes to match actual capacity needs, not out of fear — right-sizing ops is part of the skill.`,
          },
        ],
      },
      artifact: {
        componentKey: 'form',
        prompt: `Draft your incorporation & ops checklist (general education, not legal advice — confirm specifics with a professional in your jurisdiction). Pick a likely entity type, your jurisdiction, and your vesting intent.`,
        fields: [
          { key: 'entityType', label: 'Likely entity type', type: 'select', options: ['LLC', 'C-corp', 'Other / local equivalent'] },
          { key: 'jurisdiction', label: 'Jurisdiction', type: 'text', placeholder: 'e.g. Delaware, US / Estonia / your country' },
          { key: 'vestingNote', label: 'Founder equity & vesting intent', type: 'textarea', placeholder: 'e.g. 4-year vest, 1-year cliff, split X/Y' },
        ],
      },
      tutorHooks: [
        { label: 'Build my compliance/tax NFR checklist', kind: 'ask', question: 'Given my entity type, jurisdiction, and who my customers are, list the compliance and tax obligations I should treat as non-functional requirements (registrations, likely thresholds, common enterprise compliance asks) — as general education — and mark which ones I must confirm with an accountant or lawyer.' },
        { label: 'Right-size my first ops hires', kind: 'ask', question: 'Given my stage and workload, help me think about my first ops hires/tools as adding nodes to a system: what each new person needs provisioned (contracts, IP assignment, payroll, access, role) and how to avoid adding coordination cost faster than capacity.' },
        { label: 'Critique my checklist', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why is it accurate to call compliance and tax "non-functional requirements" for a startup?',
          options: [
            'Because they are optional, like a nice-to-have feature',
            'Because, like latency or security, they are invisible until they fail — but have hard external deadlines you don\'t control',
            'Because only large companies ever have to worry about them',
            'Because they improve the product\'s core functionality directly',
          ],
          answer: 1,
          explain: 'Like latency or security, compliance and tax don\'t appear as user-facing features and are easy to ignore while small — but they carry **hard, externally-set deadlines and penalties** you can\'t reschedule, so deferring them accrues compounding debt that eventually blocks or halts the business.',
        },
        {
          kind: 'mcq',
          prompt: 'A founder makes a first hire and expects it to immediately double the team\'s output. Which framing best captures the reality of "ops as scaling nodes"?',
          options: [
            'Adding a person is like adding a stateless compute node — throughput scales linearly and instantly',
            'A new hire is a node that needs provisioning and coordination, so naive additions can add overhead faster than capacity',
            'Team size has no relationship to output, so hiring is irrelevant',
            'You should always hire as many people as possible to maximize capacity',
          ],
          answer: 1,
          explain: 'Horizontal scaling never gives free linear throughput: a new hire must be **provisioned** (contract, IP assignment, payroll, access, a defined role) and added to the team\'s **coordination protocol**. Done carelessly, adding nodes adds communication overhead faster than capacity — people are not stateless compute.',
        },
        {
          kind: 'free',
          prompt: 'Using your checklist from this lesson, name the top three legal/compliance/ops items you would set up first for YOUR company and justify the order. Then name one obligation you are unsure about and would take to a professional. (This is your own plan — treat it as general education, not advice.)',
          rubric: 'Strong answer: (1) references the learner\'s own entity type, jurisdiction, and vesting intent from their checklist / startup.legal; (2) prioritizes a sensible first three (e.g. incorporation + IP assignment + basic bookkeeping, or founder agreement + vesting + privacy policy) with a real justification for the ordering that reflects the module (liability shield, clean IP chain, NFRs with deadlines); (3) treats compliance/tax as non-functional requirements with external deadlines rather than deferrable; (4) explicitly flags at least one item as jurisdiction-specific and names taking it to an accountant/lawyer — showing they internalized the "general education, not legal advice" framing.',
        },
      ],
      commitSummary: 'your incorporation & ops checklist — likely entity type, jurisdiction, and founder vesting intent — written to **startup.legal**. General education, not legal or tax advice: confirm every specific with a qualified professional in your jurisdiction.',
    },
  ],
}
