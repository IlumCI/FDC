import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 3 — Market & competition: sizing and structure
//
// Teaches the founder to quantify the opportunity HONESTLY (bottom-up, not
// wishful percentages of a huge number) and to map the competitive landscape
// the way an engineer reverse-engineers an existing system — including the
// competitor everyone forgets: "do nothing / a spreadsheet". The final lesson
// writes startup.market (sizing + competitors), which merges with the M1
// market memo.
// ===========================================================================

export const module3: Module = {
  id: 3,
  title: 'Market & competition: sizing and structure',
  goal: 'Quantify the opportunity and map the competitive landscape honestly.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '3.1',
      module: 3,
      title: 'TAM/SAM/SOM as nested scopes',
      estMinutes: 13,
      prerequisites: [],
      artifactSlot: null,
      concept: `Market size is not one number — it is three **nested scopes**, each a strict subset of the one above it.

- **TAM (Total Addressable Market):** every dollar spent per year if *everyone* who could conceivably use a product like yours bought it. The outermost boundary.
- **SAM (Serviceable Addressable Market):** the slice of TAM your product actually serves given who you sell to, where, in what language, at what price tier, through the channel you have. TAM filtered by reality.
- **SOM (Serviceable Obtainable Market):** the slice of SAM you can realistically *win* in a defined window (say 2–3 years) against real competitors with your real go-to-market. What you can actually capture.

$$\\text{SOM} \\subseteq \\text{SAM} \\subseteq \\text{TAM}$$

The whole point of the nesting is that each layer strips away a category of wishful thinking. TAM says "the money exists." SAM says "and I can technically serve it." SOM says "and I can beat the alternatives for it soon."

**Why founders inflate these:** a big TAM feels like ambition, and investors screen out tiny markets, so the incentive is to quote the largest defensible (or indefensible) number. The classic move is to present TAM as if it were SOM — "it's a $50B market, we just need 1%" — quietly implying the 1% is easy and already yours. It is neither. A disciplined founder quotes all three, shows how each shrinks from the last, and treats SOM as the number that governs the next two years of planning.`,
      reframe: {
        analogy: `TAM/SAM/SOM are **variable scopes** — global, module, and function scope nested inside one another. TAM is the global namespace: everything that could possibly be referenced. SAM is module scope: the subset actually visible and importable given how your program is structured. SOM is the local function scope: the handful of names you can bind and use *right now* in the block you're executing. An identifier in the global scope isn't usable just because it exists; it has to be in scope where you actually stand. Revenue is the same — a dollar in TAM isn't yours because it exists; it has to fall inside the scope you can reach this cycle.`,
        breaks: `Lexical scopes are **exact and enforced** — the compiler rejects a name that isn't in scope. Market scopes are **fuzzy and self-declared**: nothing stops you from writing SOM = 20% of SAM with no justification, and no compiler errors. Worse, the boundaries *move* — a new integration, a translation, a price cut can pull revenue from an outer scope into an inner one over time, whereas variable scope is fixed at parse time. So the nesting gives you the right mental model for *subset discipline*, but unlike code you are both the author and the only reviewer enforcing it. That is exactly why the numbers get inflated.`,
      },
      workedExample: `**Meridian** sells CI insights to small engineering teams at $40 per seat per month. Watch the three scopes narrow.

- **TAM — outermost:** every small software team on Earth that runs CI and could pay for insight on it. Suppose there are about 3 million such teams globally, averaging 12 developers each, and imagine *all* of them buying at $40/seat/mo. That is $40 times 12 times 12 months = $5,760 per team per year, times 3,000,000 teams = **$17.3B/yr**. Enormous, and almost entirely unreachable today.
- **SAM — filtered by reality:** Meridian ships in English, sells self-serve to teams on GitHub/GitLab, and targets teams of roughly 5–30 devs. Say that is about 8% of those teams — 240,000 teams — averaging 12 seats. $5,760 per team times 240,000 = **$1.38B/yr**. Still large, but now it is teams Meridian can actually serve.
- **SOM — obtainable in 2–3 years:** against incumbents and inertia, a self-serve tool with a small team might realistically win on the order of 1.5% of SAM in that window: 3,600 teams. $5,760 times 3,600 = **$20.7M/yr**.

Each arrow *down* has an explicit reason — language/channel/segment for SAM, competition/GTM for SOM. That chain of reasons is what separates a credible size from a fantasy. Notice SOM ($20.7M) is the number that should drive Meridian's actual hiring and roadmap, not the $17.3B headline.`,
      branch: {
        scenario: `A founder pitches: "Global spend on developer tools is $30B a year. If we capture just 2% of that, we're a $600M company." How should you react to this sizing?`,
        choices: [
          {
            label: 'Reject it: this is TAM dressed up as SOM, with an unjustified "just 2%" hiding all the hard work.',
            correct: true,
            consequence: `**Correct.** "$30B market, just 2%" is the canonical inflation move. $30B is a loose TAM for *all* dev tools — most of which this product doesn't serve — and "2%" is asserted, not earned. There's no SAM (which teams, which channel, which price) and no SOM (who they beat, in what window). The 2% is the entire business plan, waved away as if it were a rounding error. Ask for the bottom-up path down to obtainable revenue.`,
          },
          {
            label: 'Accept it: 2% is a conservative, modest share, so the number is safe.',
            correct: false,
            consequence: `**Instructive miss.** "Just 2%" *sounds* humble, and that's precisely the trick — it reframes an unproven capture as trivially small. Market share is won customer by customer against real alternatives; there is nothing automatic about 2%. A small share of a giant TAM can be harder to obtain than a large share of a well-chosen SAM. The percentage's modesty tells you nothing about whether it's achievable.`,
          },
          {
            label: 'Accept it but ask them to raise the target to 5% to look more ambitious.',
            correct: false,
            consequence: `**Wrong direction entirely.** The problem isn't that the ambition is too low — it's that the number is top-down and unjustified. Inflating 2% to 5% makes it *less* credible, not more. The fix is to rebuild from the bottom up (teams times seats times price times winnable share), not to turn a bigger dial on a number that was never grounded.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Draft my three scopes', kind: 'ask', question: 'Given my product and customer, help me define plausible TAM, SAM, and SOM as nested scopes, and name the explicit filter that shrinks each layer to the next.' },
        { label: 'Where am I inflating?', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which ordering and relationship is correct?',
          options: [
            'TAM ⊆ SAM ⊆ SOM — SOM is the biggest because it includes future growth',
            'SOM ⊆ SAM ⊆ TAM — SOM is what you can realistically obtain soon',
            'They are three independent estimates that need not be subsets of each other',
            'SAM ⊆ TAM ⊆ SOM — obtainable market is the outer bound',
          ],
          answer: 1,
          explain: 'The scopes nest inward: SOM (obtainable) sits inside SAM (serviceable), which sits inside TAM (total). Each inner layer is a strict subset produced by applying a real-world filter — channel and segment for SAM, competition and GTM for SOM.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR company, state TAM, SAM, and SOM in one sentence each, and for every arrow down (TAM→SAM, SAM→SOM) name the specific filter that justifies the shrink. Then say which number should drive your next two years of planning, and why.',
          rubric: 'Strong answer: (1) gives three nested numbers with SOM ⊆ SAM ⊆ TAM; (2) names a concrete, defensible filter for EACH arrow down (e.g. language/channel/segment for SAM; competition/GTM/window for SOM) rather than an arbitrary percentage with no reason; (3) identifies SOM as the planning-relevant number and explains that TAM is context, not a target; (4) avoids presenting a raw TAM percentage as if it were obtainable.',
        },
      ],
      commitSummary: 'concept only — you size and persist the market in lesson 3.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '3.2',
      module: 3,
      title: 'Bottom-up vs top-down sizing',
      estMinutes: 16,
      prerequisites: ['3.1'],
      artifactSlot: null,
      concept: `There are two ways to compute a market size, and they are not equally trustworthy.

**Top-down** starts from a big published number and multiplies by a fraction:

$$\\text{size} = \\text{big industry number} \\times \\text{some percentage}$$

It is fast, it always yields an impressive figure, and it hides every assumption inside that one percentage. "The dev-tools market is $30B; we'll get 2%" is top-down. The percentage is doing all the work and is almost never defended.

**Bottom-up** builds the number from the atoms of your actual business — countable units multiplied by your real price:

$$\\text{size} = (\\text{number of customers}) \\times (\\text{units each}) \\times (\\text{price per unit}) \\times (\\text{periods per year})$$

Every term is something you can source, sanity-check, or argue about individually. If someone disputes your bottom-up TAM, they have to attack a *specific* factor — "there aren't 3 million such teams" or "they won't buy 12 seats" — which is a productive argument. A top-down number gives them nothing to grip except the percentage, which you can always re-tune to whatever you wanted.

**The smell test:** top-down sizing is a code smell. Not always wrong, but a signal to look closer — like a function that returns a magic constant. Bottom-up is the sizing you can defend line by line, and the only kind worth putting in a plan. Use top-down at most as a *cross-check* on a bottom-up number, never as the primary estimate.`,
      reframe: {
        analogy: `Bottom-up sizing is an **integration test built from real units**; top-down is a **magic number** hard-coded at the top of the file. When a bottom-up estimate is wrong, you can bisect it — each factor (teams, seats, price, periods) is an isolated component you can test and correct independently, exactly like tracking a failure to one function in a call stack. A top-down "2% of $30B" is an unsourced constant: when it's wrong there's nothing to bisect, because the entire estimate is one opaque literal. You'd never trust a bare *return 600000000 // seems right* in production; a top-down TAM is the same literal wearing a suit.`,
        breaks: `Real integration tests are **deterministic** — same inputs, same output. A bottom-up market model is not: your factors are *estimates with error bars* (how many teams? really 12 seats? what churn-adjusted price?), so two honest people can build bottom-up models that differ by 2x. The analogy holds for *decomposability and debuggability*, not for precision — bottom-up isn't "correct," it's **auditable**. Its value is that every disagreement localizes to a factor you can go measure, not that it produces the true number.`,
      },
      workedExample: `Let's build **Meridian's** TAM from the bottom up, showing every factor, then contrast with the lazy top-down version.

**Bottom-up (the trustworthy path):**

1. Count the customers. Small engineering teams worldwide that run CI on a hosted platform Meridian supports: estimate **3,000,000** teams. (Sourceable from public counts of orgs on GitHub/GitLab with active CI.)
2. Units per customer. Average seats Meridian would sell per team: **12** developers.
3. Price per unit. Meridian's canon price: **$40** per seat per month.
4. Periods per year. Annualize: **12** months.

$$\\text{TAM} = 3{,}000{,}000 \\times 12 \\times 40 \\times 12 = \\$17.3\\text{B/yr}$$

Now every factor is exposed. Skeptical of $17.3B? Argue that there aren't 3M teams, or that average seats is 8 not 12 — each is a checkable claim, and the answer moves in a way you can trace.

**Top-down (the smell):** "IDC says global software spend is roughly $700B; dev tooling is maybe 5% of that, so $35B; we serve maybe 0.05x of that, call it $17.5B." Same ballpark answer — but notice you can't attack it. Which factor is wrong? The 5%? The 0.05x? They were reverse-engineered to land near the number we already liked. That is the tell: top-down can be tuned to any target, so it *confirms* beliefs instead of testing them.

The bottom-up $17.3B and the top-down $17.5B agree here — which is a fine cross-check — but only the bottom-up one is a real argument. Carry the bottom-up factors forward: they're the same atoms you'll narrow into SAM and SOM.`,
      branch: {
        scenario: `You're sizing Meridian and short on time. You find a credible analyst report: "global CI/CD tools market: $4.2B in 2025." You could just take a slice of that and be done. What's the sound move?`,
        choices: [
          {
            label: 'Build the bottom-up (teams × seats × price × 12) as primary, and use the $4.2B report only as a sanity cross-check.',
            correct: true,
            consequence: `**Correct.** The bottom-up model is your defensible primary — every factor is sourced and attackable. The analyst's $4.2B is a genuinely useful *second opinion*: if your bottom-up SAM comes out wildly larger than the whole reported market, you've likely over-counted teams or seats and should recheck. Two methods that roughly agree raise your confidence; the report earns its place as a cross-check, not as the answer.`,
          },
          {
            label: 'Take 30% of the $4.2B report ($1.26B) and call that your market. It came from analysts, so it is credible.',
            correct: false,
            consequence: `**Instructive miss.** Borrowing a report's credibility doesn't transfer to your 30%. Where did 30% come from? It's an unsourced multiplier on someone else's aggregate — pure top-down. And the report's scope (all CI/CD tooling, all company sizes) probably doesn't match your SAM (small teams, self-serve, English). You've inherited their boundaries and invented your fraction. Build from your own units instead.`,
          },
          {
            label: 'Distrust the report entirely and ignore it, since only bottom-up counts.',
            correct: false,
            consequence: `**Overcorrection.** Bottom-up should be *primary*, but throwing away a credible third-party number wastes a free cross-check. The disciplined use of top-down is exactly this: never as your headline estimate, but as a reality check that flags when your bottom-up factors have drifted. Use both; just be clear which one you'd defend in a room.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Build my bottom-up TAM', kind: 'ask', question: 'Walk me through a bottom-up TAM for my product: help me pick and source each factor (customers, units each, price, periods) and show the arithmetic.' },
        { label: 'Is my sizing a top-down smell?', kind: 'critique' },
        { label: 'Harder sizing example', kind: 'harder', concept: 'reconciling a bottom-up TAM with a conflicting top-down analyst figure and deciding which factor is wrong' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which of these is a bottom-up market size?',
          options: [
            'The martech market is $500B; we will capture 1.5%, so $7.5B',
            '18,000 target dental clinics × 3 seats × $90/seat/mo × 12 = $58.3M/yr',
            'Our TAM is 10% of the Fortune 500 IT budget',
            'Analysts project the sector will grow to $80B, and we ride that wave',
          ],
          answer: 1,
          explain: 'Only option 2 multiplies countable units (clinics × seats) by a real price over real periods — every factor is separately checkable. The others start from a big aggregate and apply an unsourced percentage, which is the top-down smell.',
        },
        {
          kind: 'free',
          prompt: 'Compute a bottom-up TAM for YOUR product. Show all four factors (number of customers, units each, price per unit, periods per year) and the arithmetic. Then propose one top-down cross-check and say what it would mean if the two disagreed by 5x.',
          rubric: 'Strong answer: (1) produces an explicit product of countable factors with visible arithmetic, using the learner\'s real price; (2) each factor is plausibly sourced or reasoned, not asserted; (3) offers a top-down figure explicitly as a CROSS-CHECK, not the primary; (4) reasons sensibly about a 5x disagreement — e.g. re-examining which specific factor (customer count or seats) is likely mis-estimated — showing they understand bottom-up is auditable factor by factor.',
        },
      ],
      commitSummary: 'concept only — the bottom-up numbers get persisted in lesson 3.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '3.3',
      module: 3,
      title: 'Competitive analysis as reverse-engineering',
      estMinutes: 15,
      prerequisites: ['3.1'],
      artifactSlot: null,
      concept: `A competitive analysis is not a feature-checkbox grid. It is **reverse-engineering an existing system** to learn where it is load-bearing and where it is brittle — so you can attack the seams.

For each real competitor, recover three things:

- **What they optimized for.** Every product encodes priorities. An enterprise incumbent optimized for procurement, compliance, and large seat counts — which made it slow, expensive, and hostile to a 6-person team. Those weren't bugs; they were the point, and they are exactly where a small-team tool has room.
- **Where they are structurally strong.** Distribution, brand, integrations, data moats, switching costs. These are the parts you should *not* attack head-on — you will lose a frontal fight against a well-funded incumbent's core strength.
- **Where they are structurally weak.** Not "their UI is ugly" (cosmetic, easily fixed) but weaknesses *baked into their architecture and business model*: a sales-led incumbent literally cannot serve a $40/seat self-serve team profitably; a free open-source tool cannot fund dedicated support. Structural weaknesses are load-bearing — they can't patch them without breaking what makes them them.

The engineer's discipline: distinguish a **surface weakness** (fixable in a sprint, so not a durable wedge) from a **structural weakness** (welded into their cost structure or org, so it will persist). You want to build where their strengths don't reach *and* their weaknesses can't be fixed. That intersection is your wedge.`,
      reframe: {
        analogy: `Studying a competitor is **reverse-engineering a binary you can't see the source of**. You don't get their strategy docs; you get observable behavior — pricing pages, docs, release notes, job postings, who they hire, what they deprecate — and you infer the architecture and priorities behind them, exactly like inferring a system's design from its API surface and latency profile. Job postings are especially good telemetry: a wave of enterprise-sales hires tells you where they're investing, the way a new endpoint in an API tells you what a service is starting to support.`,
        breaks: `A binary is **static and honest** — it does what its bytes say. A competitor is an **adaptive adversary**: once you exploit a gap, they can *respond* — cut prices, ship the feature, acquire you or a rival. Reverse-engineering assumes a fixed target; competitive strategy is a game against something that reacts. So the analysis isn't a one-time decompile — it's continuous, and the durable wedges are the ones the competitor *can't* respond to without breaking their own model (structural), not the ones they simply *haven't* responded to yet (surface). The static-analysis mindset finds the gaps; game-theoretic thinking tells you which gaps will still be open next year.`,
      },
      workedExample: `Map **Meridian's** landscape (B2B CI insights for small eng teams). Three archetypes of competitor:

**1. The enterprise incumbent** (big, sales-led CI/observability suite, ~$50k+ annual contracts).
- *Optimized for:* large orgs, procurement, compliance, breadth.
- *Structurally strong:* deep integrations, brand trust, an enterprise sales machine.
- *Structurally weak:* its **cost to serve** is welded to human sales and success. It literally cannot profitably onboard a 6-dev team at $40/seat — the CAC would dwarf the contract. That weakness is structural: dropping to self-serve would cannibalize the enterprise motion it's built on. **Meridian's wedge lives here.**

**2. The free/OSS tool** (self-hosted dashboards, community-maintained).
- *Optimized for:* zero license cost, hackability.
- *Structurally strong:* free, huge top-of-funnel, no vendor lock.
- *Structurally weak:* no funded support, no SLA, setup and maintenance cost falls on the team's own engineers. Meridian's paid, supported, zero-maintenance offering beats it *for teams whose engineering time is scarce* — which is most small commercial teams.

**3. The adjacent platform feature** (CI platform's built-in, basic insights tab).
- *Optimized for:* keeping you on their platform; "good enough" and bundled.
- *Structurally strong:* already there, free, zero integration friction. This is the scariest one.
- *Structurally weak:* it's a checkbox feature, not their focus — shallow, slow to improve, and generic across all customers. Depth is Meridian's answer, but only if the depth is *visibly* worth switching for.

Notice the wedge: Meridian wins where the incumbent's economics can't follow (small self-serve teams) **and** where the free/bundled options are too shallow or too costly-in-time. That intersection — not any single feature — is the position.`,
      branch: {
        scenario: `You're analyzing the enterprise incumbent. Two weaknesses look exploitable: **(A)** their onboarding UI is clunky and dated, and **(B)** their sales-led cost structure makes small self-serve teams unprofitable for them to serve. You can build your positioning around one. Which is the durable wedge?`,
        choices: [
          {
            label: 'B — their cost structure can\'t profitably serve small self-serve teams; that\'s baked into their business model.',
            correct: true,
            consequence: `**Correct.** (B) is a *structural* weakness: it's welded to their sales-led, high-CAC model, and they can't fix it without cannibalizing the enterprise revenue that funds them. That gap will still be open in two years. Positioning around "built for small teams, self-serve, no sales call" attacks a seam they structurally cannot close. This is a wedge, not a skirmish.`,
          },
          {
            label: 'A — a clunky UI is an obvious, visible weakness customers feel immediately.',
            correct: false,
            consequence: `**Instructive miss.** A dated UI is a *surface* weakness — real, but fixable in a quarter by a company with their resources. Build your whole identity on "we're prettier" and you've picked a fight on ground they can level the moment it costs them a deal. Surface weaknesses make bad wedges precisely because the competitor *can* respond. Cosmetics aren't a moat.`,
          },
          {
            label: 'Both equally — stack the UI advantage and the pricing advantage for a stronger case.',
            correct: false,
            consequence: `**Tempting but muddled.** Stapling a fixable surface flaw to a durable structural one *dilutes* your positioning and stakes part of your story on ground that can vanish. When the incumbent ships a UI refresh, half your pitch evaporates and the market wonders what else was shallow. Lead with the structural wedge (B); a nicer UI can be a supporting detail, never the thesis.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Map my competitors', kind: 'ask', question: 'Help me reverse-engineer my top 3 competitors: for each, infer what they optimized for, their structural strengths, and their structural (not surface) weaknesses.' },
        { label: 'Surface vs structural?', kind: 'ask', question: 'Here is a competitor weakness I found. Help me judge whether it is a surface weakness they can patch quickly or a structural one welded into their cost structure or org.' },
        { label: 'Critique my wedge', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which competitor weakness is the most durable wedge for a new entrant?',
          options: [
            'Their marketing site looks outdated and loads slowly',
            'Their sales-led cost structure makes small self-serve customers unprofitable to serve',
            'They shipped a bug in their latest release',
            'Their brand color is unpopular with younger developers',
          ],
          answer: 1,
          explain: 'Options 1, 3, and 4 are surface weaknesses — patchable in a sprint or a rebrand. Only the cost-structure weakness is structural: it\'s welded to their business model, so they can\'t fix it without cannibalizing their core revenue. That\'s the seam that stays open.',
        },
        {
          kind: 'free',
          prompt: 'Pick your single toughest competitor and reverse-engineer it: what did they optimize for, what is their strongest structural strength (that you should NOT attack head-on), and what is one structural weakness you can build a wedge on? Explain why that weakness is structural, not surface.',
          rubric: 'Strong answer: (1) infers what the competitor optimized for from observable evidence (pricing, docs, hiring, target segment) rather than guessing; (2) names a genuine structural STRENGTH the entrant should avoid fighting head-on; (3) identifies a structural weakness and explicitly argues it is welded into the competitor\'s cost structure / org / business model and thus hard to patch, distinguishing it from a fixable surface flaw; (4) connects the weakness to a concrete wedge/position for the learner\'s product.',
        },
      ],
      commitSummary: 'concept only — you record your real competitors in lesson 3.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '3.4',
      module: 3,
      title: 'Substitutes & the null competitor',
      estMinutes: 18,
      prerequisites: ['3.1', '3.2', '3.3'],
      artifactSlot: 'market',
      concept: `The competitor that kills the most startups isn't on any feature grid: it's **"do nothing"** — the customer keeping their spreadsheet, their manual process, or their status quo. Call it the **null competitor**. It has no sales team, ships no features, and wins constantly, because switching costs the customer time and risk while doing nothing costs them nothing today.

Any credible competitive picture includes **substitutes**, not just direct rivals: the spreadsheet, the intern, the in-house script, the "we'll build it ourselves," and pure inertia. If your product is only slightly better than the spreadsheet, the null competitor wins — a small improvement rarely clears the activation energy of change.

Zooming out, this is about **market structure** — where your market sits on the spectrum from one seller to many:

- **Monopoly** (one seller): pricing power, but as a new entrant you're attacking an entrenched position and often a moat.
- **Oligopoly** (a few large sellers): differentiation and coordination dynamics; wedges exist in underserved niches.
- **Monopolistic competition** (many sellers, differentiated products): you compete on being *distinctly better for a segment* — where most software startups actually live.
- **Perfect competition** (many sellers, identical products): price-takers, near-zero margin — a red flag if your product is undifferentiated.

For a new entrant the structure sets the rules: in a near-monopoly you need a wedge the incumbent can't follow; in monopolistic competition you need sharp differentiation for a segment; and *everywhere* you must still beat the null competitor, because "keep doing what we do now" is always on the menu regardless of structure.`,
      reframe: {
        analogy: `The null competitor is the **"do nothing" baseline** in a systems benchmark. Before you adopt a new library, framework, or rewrite, the honest comparison isn't against the *other* new library — it's against **not changing anything**, because the status quo has zero migration cost and zero risk, and it already works well enough to ship. A new dependency has to beat *that* baseline by enough to justify the migration, the retraining, and the unknown bugs. Customers evaluate your product exactly like you evaluate a rewrite: the incumbent option is "leave it as it is," and it's winning by default until you prove a decisive margin.`,
        breaks: `A benchmark baseline is **static** — "do nothing" scores the same every run. The customer's status quo is not: it **degrades** (their spreadsheet cracks as the team grows) and it can *improve* (they hire someone, or the pain quietly recedes), so the null competitor's strength moves with the customer's situation, not with your product. That's why *timing and trigger events* matter — you often win not when you get better, but when their status quo gets painful enough (a bad outage, a scaling wall) that the "do nothing" baseline finally scores worse than switching. A benchmark never has a bad week; a customer's spreadsheet does, and that's your opening.`,
      },
      workedExample: `**Meridian's** honest competitive set, with the null competitor front and center.

Meridian's real toughest competitor for a 6-dev team is usually **not** the enterprise incumbent or the OSS tool — it's **"we just eyeball the CI dashboard and keep a spreadsheet of flaky tests."** That null competitor costs the team $0 in cash and is already in their workflow. Meridian at $40/seat/mo must clear the switching threshold against *free and already-here*.

So Meridian's wedge has to be framed against inertia, not just rivals:
- **Quantify the null competitor's hidden cost.** A team of 12 losing, say, 3 engineer-hours a week to flaky-test triage at a loaded $75/hr is $225/week ≈ **$975/mo** of wasted time. Meridian for 12 seats is 12 × $40 = **$480/mo**. Framed that way, Meridian isn't a $480 cost — it's a net **$495/mo saving** versus doing nothing. That reframe is what beats the null competitor.
- **Market structure read:** small-team CI insight is **monopolistic competition** — several differentiated tools plus bundled platform features, no single dominant seller for *this* segment. That's good news for a new entrant: no monopoly moat to breach, and room to win a segment by being distinctly better for small self-serve teams. The danger isn't a monopolist crushing Meridian; it's failing to differentiate enough from the *free bundled tab and the spreadsheet* to justify switching.

Recall the unit economics from Module 5: CM $31, CAC $250, LTV ≈ $422, ratio ≈ 1.69×. The null competitor is *why CAC is $250* — a chunk of that spend is the cost of overcoming "do nothing," not of beating a named rival. Sizing (SOM ≈ $20.7M from lesson 3.1) and competition connect here: the obtainable market is really "teams whose status quo hurts enough to switch this year."`,
      branch: {
        scenario: `You've mapped your competition and listed three direct rivals. A mentor asks: "Who's your biggest competitor, really?" You realize most lost deals didn't go to a rival at all — the prospect just kept using their spreadsheet. How should this change your plan?`,
        choices: [
          {
            label: 'Name "do nothing / the spreadsheet" as the primary competitor and reframe the pitch around the status quo\'s hidden cost and a switching trigger.',
            correct: true,
            consequence: `**Correct.** If deals die to inertia, the null competitor *is* your primary competitor, and your job changes: quantify what the status quo silently costs them (wasted hours, missed incidents), lower switching friction (easy onboarding, migration path), and target trigger moments when their spreadsheet visibly breaks. You beat "do nothing" by making the cost of doing nothing legible and the cost of switching small — not by adding a feature no rival has.`,
          },
          {
            label: 'Ignore it — "do nothing" isn\'t a company, so it doesn\'t belong in a competitive analysis.',
            correct: false,
            consequence: `**The fatal miss.** A competitor is anything the customer chooses *instead of you*, and the status quo is chosen constantly. Leaving it off the map means you optimize against rivals while losing to inertia — polishing feature parity nobody switched for. The null competitor has no logo, but it wins the most deals. Refusing to name it doesn't make it stop winning.`,
          },
          {
            label: 'Cut your price sharply to undercut the spreadsheet, since the spreadsheet is free.',
            correct: false,
            consequence: `**Misreads the problem.** You cannot out-price *free* — the spreadsheet is $0, so a price war against it ends at giving the product away and still losing to zero switching cost. The status quo isn't beaten on price; it's beaten on **value made legible and friction removed**. Slashing price also craters your CM and LTV:CAC (Module 5) while doing nothing about the real barrier, which is inertia, not dollars.`,
          },
        ],
      },
      artifact: {
        componentKey: 'form',
        prompt: `Size your market bottom-up and name your real competition (including the null competitor). Use whole dollars for TAM/SAM/SOM.`,
        fields: [
          { key: 'tam', label: 'TAM (annual, $) — bottom-up', type: 'number' },
          { key: 'sam', label: 'SAM (annual, $)', type: 'number' },
          { key: 'som', label: 'SOM — obtainable in 2-3 yrs ($)', type: 'number' },
          { key: 'topCompetitor', label: 'Toughest competitor (may be "do nothing")', type: 'text' },
          { key: 'yourGap', label: 'The gap you exploit', type: 'textarea' },
        ],
      },
      tutorHooks: [
        { label: 'Name my null competitor', kind: 'ask', question: 'For my product, what is the most likely "do nothing / status quo" alternative my customers use instead of buying, and how would I quantify its hidden cost to beat it?' },
        { label: 'What market structure am I in?', kind: 'ask', question: 'Given my competitors and product, classify my market structure (monopoly, oligopoly, monopolistic competition, perfect competition) and tell me what that means for me as a new entrant.' },
        { label: 'Critique my competitive map', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A B2B startup keeps losing deals not to rivals but to prospects who "keep using their current spreadsheet." What is the correct interpretation?',
          options: [
            'The spreadsheet is not a competitor because it is not a company',
            'The status quo ("do nothing") is their primary competitor and must be beaten on legible value and low switching cost',
            'They should immediately drop their price below the spreadsheet\'s cost',
            'They have no competition, since no rival is winning those deals',
          ],
          answer: 1,
          explain: 'The null competitor — do nothing / the status quo — is a real and often dominant competitor. You beat it by making the status quo\'s hidden cost legible and reducing switching friction, not by pretending it isn\'t there or by trying to undercut something that is already free.',
        },
        {
          kind: 'mcq',
          prompt: 'Your market has many sellers offering differentiated products, with no single dominant player. This structure is:',
          options: [
            'Perfect competition — expect near-zero margins',
            'Monopoly — expect to fight an entrenched moat',
            'Monopolistic competition — win by being distinctly better for a segment',
            'Oligopoly — expect only two or three giant players',
          ],
          answer: 2,
          explain: 'Many sellers with differentiated products and no dominant player is monopolistic competition — where most software startups live. You compete not on identical-good price (that\'s perfect competition) but on sharp differentiation for a specific segment.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR company: name your single toughest competitor (be honest — it may be "do nothing / a spreadsheet"), quantify what that status quo costs the customer versus your price, classify your market structure, and state in one sentence the gap you exploit. Save your TAM/SAM/SOM and this competitor into the artifact.',
          rubric: 'Strong answer: (1) names a genuinely honest toughest competitor and seriously considers the null competitor rather than only listing branded rivals; (2) quantifies the status quo\'s hidden cost against the learner\'s real price to show a switching case, rather than proposing to out-price free; (3) correctly classifies market structure (monopoly/oligopoly/monopolistic competition/perfect competition) and draws the right new-entrant implication; (4) states a crisp, differentiated gap consistent with their earlier sizing (SOM) and competitive map. Bonus: connects overcoming inertia to CAC.',
        },
      ],
      commitSummary: 'your market sizing (TAM/SAM/SOM) and named competition — including the null competitor and the gap you exploit — written to **startup.market**, merging with your Module 1 market memo.',
    },
  ],
}
