import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 29 — Strategy II & durable moats  (SEASON 2)
//
// Season 1 taught you to find a business; Season 2 makes you build one that
// LASTS. This module is about the difference between a good quarter and a
// durable advantage. It uses Hamilton Helmer's "7 Powers" as the spine, layers
// network effects and competitive game theory on top, and ends where every
// venture eventually arrives: the endgame. Every lesson is artifactSlot:null —
// the venture is advanced through interactive blocks (a network-effect audit
// task writes the "My venture" workspace), not slots. Real companies, real
// numbers, real strategy essays throughout.
// ===========================================================================

export const module29: Module = {
  id: 29,
  season: 2,
  title: 'Strategy II & durable moats',
  goal: 'Build advantage that lasts: identify and deepen real moats, anticipate competitive response, and think clearly about endgames (scale, exit, or independence).',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '29.1',
      module: 29,
      title: 'The 7 Powers (durable advantage)',
      estMinutes: 20,
      prerequisites: [],
      artifactSlot: null,
      concept: `Profit attracts imitation. In a market with no barrier, any margin you earn is a signal that tells competitors exactly where to point their capital — and they arbitrage it away until returns fall to the cost of capital. So the only interesting strategic question is not "how do I make money?" but "why won't this be competed away?" A **moat** is the answer to that second question: a structural reason your advantage survives adversarial pressure.

Hamilton Helmer, in *7 Powers*, gives the sharpest working definition. **Power** is any condition that creates the potential for *persistent differential returns*. Each Power has two halves that must both be present:

- A **Benefit** — a reason you make more free cash flow (lower cost, higher price, more volume).
- A **Barrier** — a reason a competitor who *sees* your benefit still can't, or rationally won't, copy it.

The Benefit is common; the Barrier is rare. Anyone can undercut on price for a while; the moat is the mechanism that makes matching you *unprofitable for them specifically*. Helmer enumerates seven such mechanisms, and after decades of scrutiny the list has held up as roughly complete:

1. **Scale economies** — per-unit cost falls with size; a subscale rival can't match your price and survive.
2. **Network economies** — the product is more valuable the more users it has, so a late entrant offers a worse product at any price.
3. **Switching costs** — a customer already on you loses money, data, or time by leaving, so a rival must overcome that gap *plus* be better.
4. **Counter-positioning** — you adopt a superior business model the incumbent will *not* copy because copying would cannibalise their existing business.
5. **Branding** — durable affective association lets you charge more for a functionally similar good (Hermès, not a raincoat).
6. **Cornered resource** — preferential access to a coveted asset: a patent, a deposit, a key team, a lithography monopoly.
7. **Process power** — an organisational way of doing things that produces superior output and resists copying because it took decades to build (Toyota Production System).

The unifying test is **invariance under adversarial pressure**: imagine your smartest competitor, fully funded, staring directly at your profits. Which of these seven reasons would still stop them? If the honest answer is "none," you have a good business, not a moat — and you should assume the margin is temporary.`,
      reframe: {
        analogy: `A moat is a **potential well**, not a wall. A wall is binary — it's up or it's breached. A potential well is a shape in the energy landscape: a competitor can still climb out, but doing so *costs energy*, and the deeper the well the more capital and time they must spend to escape your customers' orbit. The seven Powers are seven different ways to deepen the well. Switching costs raise the wall on the *customer's* side; scale economies raise the cost on the *competitor's* side; counter-positioning makes the incumbent's own mass work against them so they never even attempt the climb. Strategy is landscape engineering — you're shaping the potential surface so that the low-energy state for everyone else is "leave you alone."`,
        breaks: `A physical potential well has a *fixed* depth; a moat's depth is **endogenous and decaying**. It changes because rivals actively dig, because technology flattens the landscape (a platform shift can teleport a competitor over any well — see how mobile erased desktop moats), and because your own neglect silts it in. There is no conservation law protecting your advantage. Worse, some "wells" are illusory: a deep-looking barrier that a well-capitalised entrant can simply *tunnel* through with cash is not a moat, it's a speed bump. The physics metaphor also hides the human core — counter-positioning works because of an incumbent's *incentives and pride*, not any energy barrier. Treat the well as something you must keep excavating, against an intelligent adversary, on shifting ground.`,
      },
      workedExample: `**Netflix vs. Blockbuster — counter-positioning, then layered power.** In 2000 Netflix was a tiny DVD-by-mail service; Blockbuster was a $5B giant with thousands of stores. Netflix's model had a structural benefit: no late fees, unlimited queue, postal delivery — cheaper to run and beloved by customers. The obvious question is: why didn't Blockbuster, with vastly more money, just copy it? Because Blockbuster earned an enormous share of its profit from **late fees** (widely reported around $800M a year, on the order of a sixth of revenue at its peak — treat the exact figure as illustrative). A subscription, no-late-fee model wasn't a feature they'd overlooked; copying it would have *detonated their own most profitable line*. That is counter-positioning: the incumbent's rational, spreadsheet-approved decision to protect existing profit is precisely what lets the entrant grow unmolested. Good management produced a bad outcome.

The deeper lesson is how Netflix then **layered** additional Powers so the early advantage compounded rather than expiring. As it scaled it earned **scale economies** in content licensing and then original production (a fixed \\$100M show amortised over 200M subscribers costs far less per viewer than over 20M). It built **brand** (the flywheel of "where you watch") and mild **switching costs** (your profiles, ratings, watch history). A single Power rarely lasts forever; durable companies stack Powers so that as one erodes another has matured. When you audit your own moat, don't ask "do I have *a* barrier?" — ask "which Power do I have *now*, and which one am I building to inherit it?" (See the *7 Powers* framework and the counter-positioning case studies cited in this lesson's resources.)`,
      branch: {
        scenario: `Your startup sells a slick analytics tool that's growing fast on a low, transparent, self-serve price. The dominant incumbent is a $2B enterprise-software company whose sales force earns big commissions on six-figure annual contracts, and whose revenue is booked as long, high-margin licences. Investors ask what stops the incumbent from crushing you by launching a cheap self-serve product next quarter. What's the strongest honest answer?`,
        choices: [
          {
            label: 'Nothing structural — we just have to out-execute them and hope they stay slow.',
            correct: false,
            consequence: `**Underselling a real moat.** "Out-execute and hope" is the answer of a company with no barrier, and it's the answer that makes investors nervous — rightly, if it were true. But look closer: your low, self-serve price isn't just a tactic, it's *counter-positioned* against their entire commission-driven, high-ACV model. You're leaving a genuine barrier unnamed. Naming it correctly is the difference between "a feature they'll copy" and "a model they can't."`,
          },
          {
            label: 'They likely will NOT copy the self-serve model, because doing so would cannibalise their high-margin licence revenue and enrage their commissioned sales force — this is counter-positioning, and it is a real (if temporary) barrier.',
            correct: true,
            consequence: `**Correct.** The incumbent's own economics are the barrier. A cheap self-serve line would deflate their average contract value, demoralise the sales team whose commissions depend on big deals, and let Wall Street reprice the whole company on lower margins — so the rational executive decision is to *not* respond, or to respond late and half-heartedly. That's exactly Helmer's counter-positioning. Crucially, you should also say what you're building *behind* it (switching costs via embedded data, network or scale effects) because counter-positioning has a shelf life: it lasts only until the incumbent decides the new model is now bigger than the old one worth protecting.`,
          },
          {
            label: 'We have a strong brand, so they can\'t touch us.',
            correct: false,
            consequence: `**Wrong Power, and premature.** Brand is a real Power, but a fast-growing young analytics tool almost certainly hasn't earned durable affective pricing power yet — brand takes years and usually matures *late*. Reaching for "brand" here misdiagnoses the actual barrier, which is counter-positioning against the incumbent's business model. Name the Power you actually have, not the one that sounds most flattering.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Classify each real competitive advantage into the Helmer Power that best explains why it resists imitation. Focus on the BARRIER (why a rival can\'t or won\'t copy), not just the benefit.',
          buckets: ['Scale economies', 'Network economies', 'Switching costs', 'Counter-positioning', 'Branding', 'Cornered resource', 'Process power'],
          items: [
            { text: 'ASML is the sole maker of EUV lithography machines; the process took decades and exclusive supplier relationships to build', bucket: 'Cornered resource' },
            { text: 'A new user joins WhatsApp mainly because everyone they message is already on it', bucket: 'Network economies' },
            { text: 'Amazon\'s fulfilment cost per package keeps falling as volume rises, so a small rival can\'t match its shipping price', bucket: 'Scale economies' },
            { text: 'Vanguard\'s at-cost index funds are a model incumbent active managers won\'t copy because it would gut their fee revenue', bucket: 'Counter-positioning' },
            { text: 'An enterprise has years of data, integrations, and trained staff on Salesforce; ripping it out is a painful multi-month project', bucket: 'Switching costs' },
            { text: 'Hermès sells a bag for many times its material-and-labour cost purely on decades of desirability', bucket: 'Branding' },
            { text: 'Toyota consistently produces cars at higher quality and lower defect rates via a production system rivals have failed to replicate for 40 years', bucket: 'Process power' },
            { text: 'Dell built PCs to order and sold direct, a model Compaq wouldn\'t copy without wrecking its retail-channel relationships', bucket: 'Counter-positioning' },
          ],
          explain: 'The trap is classifying by the benefit ("it\'s cheaper", "it\'s popular") instead of the barrier. ASML and WhatsApp both look like "everyone uses them", but ASML\'s barrier is a cornered resource (nobody else CAN make the machine) while WhatsApp\'s is network economics (nobody WANTS the empty rival). Vanguard and Dell both win on a model the incumbent declines to copy — that "declines to copy because it would hurt themselves" signature is the tell for counter-positioning, distinct from scale (per-unit cost) or switching (customer-side lock-in).',
        },
        {
          kind: 'resource',
          title: '7 Powers — the primary sources (verify the framework yourself)',
          items: [
            { label: 'Hamilton Helmer — 7 Powers (official site)', url: 'https://7powers.com/', note: 'The book that defines Power = Benefit + Barrier and enumerates the seven. Start here.' },
            { label: 'Commoncog — Counter-Positioning, with 15 real case studies', url: 'https://commoncog.com/c/concepts/counter-positioning/', note: 'The deepest free treatment of the subtlest Power, including Netflix/Blockbuster and Vanguard.' },
            { label: 'Lenny\'s Podcast — Business strategy with Hamilton Helmer', url: 'https://www.lennysnewsletter.com/p/business-strategy-with-hamilton-helmer', note: 'Helmer himself on how to apply the framework to your own company.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Which of the 7 Powers do I actually have?', kind: 'ask', question: 'Walk through all seven Powers for my venture. For each, tell me honestly whether I have a real BARRIER (not just a benefit), how deep it is, and which Power I should be building next to inherit the one I have now.' },
        { label: 'Stress-test my moat against a funded attacker', kind: 'ask', question: 'Play my smartest, fully funded competitor. Given my business, tell me exactly how you would attack my supposed moat, and which of my barriers would actually stop you versus which are just speed bumps you\'d tunnel through with cash.' },
        { label: 'A harder counter-positioning case', kind: 'harder', concept: 'distinguishing genuine counter-positioning (incumbent rationally won\'t copy) from a barrier the incumbent is simply slow to copy but eventually will' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In Helmer\'s framework, every Power must have two components. A competitor lowers prices to match yours for a quarter but loses money doing it and gives up. Which component of YOUR Power does their failure reveal?',
          options: [
            'The Benefit — you make more cash flow',
            'The Barrier — a reason a competitor who sees your advantage still can\'t profitably copy it',
            'The brand — customers love you',
            'The market size — the pie is big',
          ],
          answer: 1,
          explain: 'The Benefit (more cash flow) is common and easy to see; the rival saw it and tried to match it. What stopped them was the Barrier — the structural reason matching you is unprofitable *for them specifically* (here, likely scale economies giving you a lower cost floor). Power = Benefit + Barrier, and it is the Barrier that makes returns persistent.',
        },
        {
          kind: 'mcq',
          prompt: 'Which situation is the clearest example of counter-positioning rather than another Power?',
          options: [
            'A social app is more useful because all your friends are already on it',
            'A chipmaker\'s per-unit cost falls as its factories run at higher volume',
            'A discount broker offers zero-commission trades that the full-service incumbent won\'t match because commissions are a huge share of its profit',
            'A luxury house charges a premium purely on brand desirability',
          ],
          answer: 2,
          explain: 'Counter-positioning\'s signature is: the entrant adopts a superior model, and the incumbent RATIONALLY declines to copy it because copying would cannibalise its existing profit. The zero-commission broker fits exactly. The others are network economies, scale economies, and branding respectively — real Powers, but driven by a different barrier.',
        },
        {
          kind: 'free',
          prompt: 'For your own venture, name the single Power you most plausibly have (or are closest to). State its Benefit and, more importantly, its Barrier — the specific reason a well-funded competitor who sees your success still can\'t or won\'t copy you. Then name one different Power you could build next so your advantage compounds instead of expiring.',
          rubric: 'Strong answer: (1) picks ONE of the seven Powers by name and correctly matches it to the venture; (2) clearly separates Benefit (why more cash flow) from Barrier (why a rival can\'t/won\'t copy), with the Barrier being genuinely structural rather than "we work harder"; (3) passes the adversarial test — the stated barrier would plausibly stop a funded attacker; (4) names a DIFFERENT second Power as the next thing to build, showing understanding that single Powers erode and durable firms layer them. Penalise answers that describe only a benefit with no barrier, or that claim brand/network effects a young venture cannot yet have.',
        },
      ],
      commitSummary: 'no slot written — you now have the vocabulary of durable advantage (Power = Benefit + Barrier) and an honest read on which of the seven you actually hold.',
    },

    // -----------------------------------------------------------------------
    {
      id: '29.2',
      module: 29,
      title: 'Network effects & increasing returns',
      estMinutes: 20,
      prerequisites: ['29.1'],
      artifactSlot: null,
      concept: `Most businesses face **diminishing** returns: each new customer is a little harder and less valuable to win than the last. A small set of businesses face the opposite — **increasing returns** — where each new user makes the product *more* valuable to every existing user, so growth feeds growth. This is the network effect, and it is the reason a handful of companies compound into near-monopolies while everyone else grinds.

**Why the value curve bends upward.** Bob Metcalfe (co-inventor of Ethernet) argued that the value of a communications network scales with the number of possible *connections*, not the number of nodes. With $n$ users there are $\\frac{n(n-1)}{2}$ possible pairwise links, so value grows roughly as $n^2$ while cost grows roughly as $n$. Double the users and you roughly quadruple the value — that gap between an $n^2$ value curve and an $n$ cost curve is the engine of increasing returns. (Metcalfe's law overstates real networks — not every connection is equally valuable — but the *direction* is the point: superlinear value, linear cost.)

**Direct vs. indirect.** A **direct** (or same-side) network effect: each user of the *same* type makes the product better for the others — telephones, WhatsApp, a fax standard. An **indirect** (or cross-side, two-sided) network effect: more of one type attracts more of the *other* type, and vice versa — riders and drivers, diners and restaurants, buyers and sellers, developers and users. Two-sided networks are more powerful and more fragile: you must grow *both* sides in balance, and a shortage on either side stalls the whole flywheel.

**Critical mass** is the threshold below which the effect runs in reverse. Below it, the network is too sparse to be useful, so users churn faster than they arrive and the thing dies (the "empty restaurant" / cold-start problem). Above it, the flywheel self-sustains and often tips toward winner-take-most. The entire early-stage game for a network business is *engineering your way to critical mass in a narrow enough beachhead that the density feels real* — which is why network businesses almost always launch in one city, one campus, one niche, not "the world."`,
      reframe: {
        analogy: `A network effect is a **nuclear chain reaction**. Each fission event (a happy user) releases neutrons (invitations, content, liquidity) that can trigger further events. The **critical mass** is exactly the reactor's critical threshold: below it, each event triggers on average *less than one* successor, so the reaction fizzles out (subcritical); above it, each event triggers *more than one*, and you get a self-sustaining, exponential chain (supercritical). Geometry matters as much as fuel — a subcritical mass goes critical just by being *compressed* into a denser configuration, which is precisely why a network launches in one dense niche rather than spread thin across the world. Density, not headcount, tips the reaction.`,
        breaks: `A real chain reaction, once supercritical, is almost impossible to stop and must be *damped*; a network effect is far more perishable. Neutrons don't get bored, but users do — networks decay when quality drops, when a better-compressed rival reaches criticality first, or when the same $n^2$ that amplified value starts amplifying *noise* (spam, trolls, low-quality supply) and drives users out. And Metcalfe's tidy $n^2$ flatters reality: connections aren't fungible neutrons, most of yours are worthless (you don't value being connected to a random stranger), so effective value grows much slower than the physics analogy implies. Finally, unlike fissile material, a network can be *forked* or *disintermediated* — users can carry their relationships to a new platform (as many did leaving MySpace for Facebook), something no uranium atom can do. Treat criticality as necessary but never permanent.`,
      },
      workedExample: `**OpenTable and the two-sided cold start.** OpenTable connects diners (who want available reservations) with restaurants (who want filled tables). This is a classic *indirect* network effect: diners come where the restaurants are, restaurants come where the diners are — and at launch you have neither, the textbook chicken-and-egg. Broadcasting nationally would have been fatal: a diner in any single city opening the app to find three participating restaurants churns instantly, because below critical mass the value is negative.

OpenTable's answer was **geographic density over reach**. It concentrated on a handful of cities (notably San Francisco), and critically it *subsidised the harder side first*: it sold restaurants electronic reservation-book hardware and software that was useful **even with zero diners from OpenTable** — solving the restaurant's own operational problem. That gave the network a reason to have supply before it had demand. Once enough restaurants in one city were on the system, diners in that city found real inventory, diners attracted more restaurants, and the flywheel turned — *within that city*. Only then did OpenTable replicate the playbook city by city. The transferable pattern is exact: (1) pick a beachhead narrow enough that critical mass is *reachable*, (2) find a way to give the hard side of the network standalone value so it shows up before the flywheel exists, and (3) expand only after each local network is self-sustaining. Growth in network businesses is a sequence of local criticalities, not one global launch. (See the NFX Network Effects Bible and Manual cited below for the taxonomy and more cases.)`,
      branch: {
        scenario: `You're building a two-sided marketplace connecting freelance CNC machinists with hardware startups that need small-batch parts. You have a modest launch budget. Three go-to-market plans are on the table. Which gives you the best shot at reaching critical mass?`,
        choices: [
          {
            label: 'Launch nationwide from day one to maximise total listings and look big to investors.',
            correct: false,
            consequence: `**Spreading the fuel too thin — subcritical everywhere.** A national launch means that in any given city or niche, a startup posts a job and sees two machinists, and a machinist logs in to find one job. Below critical mass on both sides, everyone churns and the "big" numbers hide a network that is dead everywhere. Reach is the enemy of density; density is what tips the chain reaction. This is how most marketplaces quietly fail.`,
          },
          {
            label: 'Dominate one narrow beachhead (say, a single region plus one part-type), and give the harder-to-attract side standalone value so it shows up before the flywheel exists.',
            correct: true,
            consequence: `**Correct.** Compress the fuel: pick a beachhead narrow enough that a startup posting a job actually sees real, responsive supply and a machinist sees real, winnable work. Identify which side is harder to attract (usually supply) and give it a reason to be there even before liquidity exists — a standalone tool, guaranteed early jobs, or hand-seeded demand. Reach criticality locally, prove the flywheel self-sustains, THEN replicate region by region. Local density beats global thinness every time.`,
          },
          {
            label: 'Focus entirely on signing up as many machinists as possible first; worry about demand later.',
            correct: false,
            consequence: `**Half the reactor.** In a two-sided network, supply with no demand is as dead as demand with no supply — a thousand idle machinists will churn out of boredom before your first startup posts a job. You can lead with one side, but only if you either subsidise it with standalone value or tightly pace it against the other side. "Sign up everyone on one side and hope" ignores that both sides must reach density *together* for the flywheel to turn.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Metcalfe sanity check. A messaging network has 5,000 active users. Using the pairwise-connection model, value is proportional to the number of possible connections, n(n-1)/2. The network grows to 10,000 users. By approximately what FACTOR does the Metcalfe value increase? (Compute [10000 x 9999 / 2] divided by [5000 x 4999 / 2] and round to one decimal.)',
          answer: 4,
          tolerance: 0.2,
          unit: 'x',
          explain: 'Connections at 10,000 = 10000 x 9999 / 2 = 49,995,000. At 5,000 = 5000 x 4999 / 2 = 12,497,500. Ratio = 49,995,000 / 12,497,500 = 4.0. Doubling users roughly QUADRUPLES Metcalfe value because value grows as n-squared while your cost to serve grew only about 2x (linear). That gap between an n-squared value curve and an n cost curve is the whole engine of increasing returns — and why the leader in a network market pulls away non-linearly.',
        },
        {
          kind: 'platformTask',
          title: 'Audit your venture for a real network effect',
          body: 'Be ruthlessly honest: most businesses do NOT have a network effect, and claiming a fake one is a classic pitch red flag. Determine whether YOUR product genuinely gets more valuable to each user as more users join — and if so, what type, and how far you are from critical mass. Use the NFX taxonomy to classify it. Then record your honest verdict in "My venture".',
          links: [
            { label: 'NFX — The Network Effects Manual (16 types, classify yours)', url: 'https://www.nfx.com/post/network-effects-manual' },
            { label: 'NFX — The Network Effects Bible (the full theory)', url: 'https://www.nfx.com/post/network-effects-bible' },
          ],
          steps: [
            'Ask the acid test: does an EXISTING user get more value when a NEW user joins? If not, you have growth, not a network effect — record that honestly.',
            'If yes, classify it: direct/same-side (users help users) or indirect/cross-side (one side attracts the other)? Use the NFX Manual\'s types.',
            'Identify which side (if two-sided) is harder to attract, and how you would give it standalone value pre-liquidity.',
            'Estimate your critical mass: in your narrowest realistic beachhead, roughly how many active users/listings before the product feels "full"? Are you above or below it?',
            'Record your verdict: the effect type (or honest "none"), your beachhead, and your distance from critical mass.',
          ],
          taskKey: '29.2#nfx',
          proofLabel: 'Your network-effect verdict (type + beachhead + distance from critical mass, or an honest "no network effect")',
          proofKind: 'text',
        },
      ],
      tutorHooks: [
        { label: 'Do I really have a network effect?', kind: 'ask', question: 'Interrogate my product with the acid test: does an existing user get more value when a new user joins? Help me tell a genuine network effect apart from mere virality or scale economies, and if I have one, classify it using the NFX taxonomy.' },
        { label: 'How do I reach critical mass?', kind: 'ask', question: 'Given my two-sided (or single-sided) network, help me pick a beachhead narrow enough to reach critical mass, identify which side is harder to attract, and design a way to give that side standalone value before the flywheel exists.' },
        { label: 'Stress-test my critical-mass math', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A food-delivery app connects hungry customers with local restaurants. More restaurants attract more customers, and more customers attract more restaurants. What kind of network effect is this, and what is the key launch risk?',
          options: [
            'Direct/same-side; the risk is that users bore each other',
            'Indirect/cross-side (two-sided); the risk is the chicken-and-egg cold start — you must grow both sides to density together or neither survives',
            'No network effect; it is just a normal marketplace',
            'Scale economies; the risk is high fixed costs',
          ],
          answer: 1,
          explain: 'Two different user types (customers, restaurants) each attract the other — that is an indirect / cross-side network effect. Its defining hazard is the two-sided cold start: below critical mass on either side the product is useless, so you must reach local density on both sides simultaneously, usually by launching in one dense area and often subsidising the harder side first.',
        },
        {
          kind: 'mcq',
          prompt: 'Why do network businesses almost always launch in one city, campus, or narrow niche rather than nationally?',
          options: [
            'Because national marketing is too expensive',
            'Because critical mass depends on DENSITY, not total headcount — a subcritical network tips over only when compressed into a dense enough configuration to feel "full"',
            'Because regulators require a local launch',
            'Because founders prefer small markets',
          ],
          answer: 1,
          explain: 'Like a fissile mass going critical by compression, a network reaches self-sustaining criticality through density, not sheer numbers. Spread thin across a nation, every local network is subcritical and users churn faster than they arrive; concentrated in one narrow beachhead, the same users create real liquidity, the flywheel turns, and you can then replicate it. Density is the strategic variable.',
        },
        {
          kind: 'free',
          prompt: 'State whether your venture has a genuine network effect. If it does, name its type (direct or indirect), define your critical-mass threshold in concrete terms (how many active users/listings in your narrowest beachhead before it feels "full"), and say whether you are above or below it and how you would cross it. If it does NOT, say so honestly and name the real Power (from lesson 29.1) you rely on instead.',
          rubric: 'Strong answer: (1) applies the acid test correctly and does not fabricate a network effect where there is only growth/virality; (2) if present, correctly classifies direct vs indirect and, for two-sided, notes the harder side; (3) gives a CONCRETE critical-mass estimate tied to a specific beachhead (a number and a scope), not a vague "enough users"; (4) states a credible path across the threshold OR, if no network effect, honestly names the alternative Power. Reward intellectual honesty about NOT having a network effect over an inflated claim.',
        },
      ],
      commitSummary: 'your honest network-effect verdict (type, beachhead, distance from critical mass — or a clean "none") is saved to "My venture".',
    },

    // -----------------------------------------------------------------------
    {
      id: '29.3',
      module: 29,
      title: 'Competitive dynamics & game theory',
      estMinutes: 21,
      prerequisites: ['29.1', '29.2'],
      artifactSlot: null,
      concept: `A moat is a static picture; competition is a *game*. Every move you make provokes a response, and the response is chosen by a rational opponent with their own incentives, constraints, and blind spots. Strategy is therefore not "what's my best move?" but "what's my best move *given how the other player will rationally respond to it*?" — you have to reason at least one level deeper than the board.

**Anticipate the response, not just the move.** Before any aggressive action — a price cut, a launch into their core, a poaching campaign — ask: what is the incumbent's *best reply*, and am I still better off after it happens? A price war looks clever until you model the retaliation and realise the incumbent, with deeper pockets, can outlast you at a loss. The naive founder plans move 1; the strategist plans the equilibrium.

**Counter-positioning is a structural asymmetry in the game.** Its power (from lesson 29.1) is that it makes the incumbent's rational best reply be *no reply*. You want to pick fights where the opponent's optimal move is to leave you alone — because responding would damage them more than ignoring you. The incumbent's own scale, channel, and profit structure become the very reasons they *can't* retaliate without self-harm. This is why attacking a giant's *business model* (as Netflix did to late fees) is safer than attacking their *feature* (which they can simply copy).

**When NOT to provoke.** The mirror-image error is waking a sleeping giant. A small, fast entrant is often *below the incumbent's threshold of attention* — too small to be worth a response, especially given the incumbent's cannibalisation fears and org inertia. Provoke them loudly (a splashy PR campaign naming them, a land-grab into their most defended, most profitable segment) and you can trigger a response you'd have avoided by staying quiet and growing in the margins. The judo principle: use their mass against them, don't invite them to use it against you. Sometimes the highest-EV move is the one that keeps you *boring* until your moat is deep enough to survive their full attention.`,
      reframe: {
        analogy: `Competitive strategy is **minimax search with a model of the opponent**, exactly like a chess engine. You never evaluate a move by the board it produces; you evaluate it by the board that results *after the opponent plays their best reply*, and their reply after that. A price cut that wins the current position but loses after the incumbent's forced retaliation is a losing move at depth 2, however good it looks at depth 1. Counter-positioning is the delicious case where your search discovers that the opponent's best reply is a *null move* — every response available to them scores worse for them than passing — so you get to advance for free. And staying quiet against a giant is pruning: you deliberately avoid the branch that would activate a powerful opponent subtree you can't yet survive.`,
        breaks: `Chess is **finite, fully observed, and fixed-rules**; markets are none of these. You cannot see the opponent's full position (their roadmap, their cost structure, their board's patience), the rules mutate mid-game (a technology shift, a regulator, a pandemic rewrites the payoff matrix), and — unlike chess — the game is usually **positive-sum with multiple simultaneous opponents**, so "beat the other player" is often the wrong objective entirely; growing the pie can dominate winning your slice. Worst of all, real opponents are *not perfectly rational*: they respond emotionally, defend pride, or fail to respond out of pure inertia. Modelling them as flawless minimax players will make you *over-fear* a competitor who is actually asleep, and *under-fear* one who will burn money irrationally to crush you out of spite. Use the search discipline, but keep re-estimating the opponent's real, human, imperfect evaluation function.`,
      },
      workedExample: `**Blockbuster's rational non-response (the game behind the moat).** Return to Netflix, now as a *game*. When Netflix's DVD-by-mail subscription started taking share, Blockbuster had, on paper, everything needed to crush it: brand, thousands of stores, far more capital. Model the game at depth 2. Blockbuster's best reply to "launch a competing no-late-fee subscription" was to weigh the gain (blunting Netflix) against the cost (vaporising ~\\$800M of high-margin late-fee revenue and cannibalising store traffic). For years the spreadsheet said *don't* — the rational, shareholder-approved best reply was the null move. That's why counter-positioning is a game-theoretic gift: the entrant advances because the incumbent's optimal move is to pass.

But the ending is the whole lesson. Around 2004 Blockbuster finally *did* respond — launching Blockbuster Online and, briefly, dropping late fees — and it genuinely hurt Netflix, whose stock fell hard as the incumbent at last brought its mass to bear. Netflix survived partly because it kept moving (streaming) and partly because Blockbuster, carrying store-network costs and debt, couldn't sustain the fight and entered bankruptcy in 2010. Two transferable truths: (1) counter-positioning buys you *time*, not permanence — it lasts only until the new model grows big enough that the incumbent's math flips to "respond"; and (2) when the giant does wake, your survival depends on having used the free time to deepen a *different* moat (streaming scale, brand) rather than assuming the giant would sleep forever. Anticipate the response you're currently enjoying the *absence* of. (See the counter-positioning case studies in the resources.)`,
      branch: undefined,
      artifact: undefined,
      blocks: [
        {
          kind: 'scenario',
          title: 'You poke the giant',
          intro: 'You run a fast-growing developer tool with 30,000 users and a real but shallow moat. A $40B incumbent owns the adjacent category. You must decide a series of competitive moves — each one is really a question about how the incumbent will rationally respond.',
          decisions: [
            {
              situation: 'Marketing wants to launch a bold campaign with the tagline "The [Incumbent]-killer" — naming the giant directly, targeting their most profitable enterprise segment, and pitching press on the David-vs-Goliath story. Your moat is not yet deep. Do you run it?',
              options: [
                { label: 'Yes — the publicity and positioning are worth it; provoke them loudly.', correct: false, outcome: 'You just woke a sleeping giant while your moat was shallow. By naming them and aiming at their MOST defended, MOST profitable segment, you raised yourself above their threshold of attention and made non-response embarrassing for their executives. They now have both the incentive and the resources to respond hard — bundling a free competitor into their existing product, leaning on their channel — and you have no deep moat to survive it. You chose the one branch that activates the opponent subtree you can\'t yet win.' },
                { label: 'No — grow quietly in the margins and segments they least defend until your moat is deep enough to survive their full attention.', correct: true, outcome: 'Correct — this is strategic pruning. While you\'re small and boring, the incumbent\'s rational best reply is the null move (you\'re below their attention threshold, and cannibalisation fear plus org inertia keep them still). You use that free time to deepen switching costs and network density in segments they neglect. Provoke them only once your moat can survive the response you\'d trigger. Judo: don\'t invite the giant to use their mass on you.' },
              ],
            },
            {
              situation: 'A year later you consider undercutting the incumbent with an aggressive price war on their core enterprise product to grab share fast. They have roughly 50x your cash. Model the game to depth 2. Do you start the price war?',
              options: [
                { label: 'Yes — cut price hard and take share before they react.', correct: false, outcome: 'At depth 1 you win share; at depth 2 you lose. The incumbent\'s best reply to a price war is to match or beat your price and outlast you — they have ~50x the cash and can run the segment at a loss far longer than you can. A price war is the worst game to start against a richer opponent, because price is the one dimension where their deeper pockets are decisive. You picked the opponent\'s strongest branch.' },
                { label: 'No — compete on a dimension where their business model can\'t follow (a counter-positioned model, a segment their channel won\'t serve), not on price where their cash wins.', correct: true, outcome: 'Correct. Never start a price war against a deeper-pocketed incumbent — that dimension favours their mass. Instead pick a move whose best reply for them is still the null move: a business model they won\'t copy without self-harm, or an underserved segment their sales channel can\'t profitably serve. You want the fight where THEIR rational response is to leave you alone, not the one where their chequebook ends you.' },
              ],
            },
          ],
        },
        {
          kind: 'rank',
          prompt: 'Rank these four barriers from MOST durable (hardest for a funded competitor to erode over 10 years) to LEAST durable. Think about what it would actually take an intelligent adversary to overcome each.',
          items: [
            'A large, dense two-sided network effect that has clearly tipped (both sides depend on your liquidity)',
            'High switching costs from deep data, integrations, and trained staff embedded in enterprise workflows',
            'A counter-positioned business model the incumbent currently declines to copy',
            'A first-mover head start with a slicker UI and no other structural barrier',
          ],
          explain: 'A tipped, dense network effect is the deepest moat here: a rival must recreate the whole network\'s value from zero, which users won\'t abandon (the empty-restaurant problem protects you). Deep switching costs are strong but erodable — a determined competitor can subsidise migration or build importers. Counter-positioning is real but explicitly TIME-LIMITED: it lasts only until the new model grows big enough that the incumbent\'s math flips to "respond" (as Blockbuster eventually did). A first-mover UI edge is barely a moat at all — UI is copied in a quarter and confers no structural barrier. Durability tracks how much an adversary must spend, and whether users themselves resist the switch.',
        },
      ],
      tutorHooks: [
        { label: 'Model my competitor\'s best response', kind: 'ask', question: 'I\'m considering a specific competitive move (I\'ll describe it). Play the incumbent and reason to depth 2: what is their rational best reply, am I better or worse off after it, and is there a move whose best reply for them is to leave me alone?' },
        { label: 'Am I about to wake a sleeping giant?', kind: 'ask', question: 'Given my size, moat depth, and the incumbent in my space, tell me honestly whether my planned move would raise me above their threshold of attention before my moat can survive their response — and what a quieter, judo alternative would be.' },
        { label: 'A harder game-theory case', kind: 'harder', concept: 'choosing a move when the incumbent is NOT perfectly rational — modelling an opponent who may retaliate irrationally out of pride, or fail to respond out of pure inertia' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'You plan to cut prices aggressively to take share from an incumbent with roughly 50x your cash. Reasoning to "depth 2" (their best reply), why is this usually a bad move?',
          options: [
            'Price cuts are always unethical',
            'Their rational best reply is to match or beat your price and outlast you at a loss, and price is precisely the dimension where their deeper pockets are decisive',
            'Customers dislike low prices',
            'It violates antitrust law',
          ],
          answer: 1,
          explain: 'Evaluate the move by the board AFTER the opponent\'s best reply, not the board it creates immediately. Against a far richer incumbent, a price war invites retaliation on the one axis where their capital advantage wins outright — they can run the segment at a loss longer than you can survive. Compete where their business model or channel can\'t follow, not where their chequebook dominates.',
        },
        {
          kind: 'mcq',
          prompt: 'What is the "sleeping giant" hazard, and what does it imply about a small entrant\'s publicity strategy?',
          options: [
            'That giants are always slow, so you should always attack them loudly',
            'That while you are below the incumbent\'s attention threshold their best reply is often no response, so loudly provoking them (naming them, attacking their most-defended segment) before your moat is deep can trigger a costly response you\'d otherwise avoid',
            'That you should never market your product at all',
            'That giants cannot legally respond to small competitors',
          ],
          answer: 1,
          explain: 'A small, boring entrant often benefits from the incumbent\'s inertia and cannibalisation fears — their rational move is to ignore you. A splashy, giant-naming, core-segment land-grab removes that free pass by making non-response embarrassing and the threat salient. Stay in the margins and grow quietly until your moat can survive their full attention; provoke only from strength.',
        },
        {
          kind: 'free',
          prompt: 'Pick one competitive move your venture might realistically make in the next year (a launch, a price change, a push into an incumbent\'s segment). Reason to depth 2: state the incumbent\'s most likely rational best reply, say whether you are better or worse off after it, and either justify the move or replace it with one whose best reply for the incumbent is to leave you alone. Note one way the incumbent might respond IRRATIONALLY.',
          rubric: 'Strong answer: (1) names a concrete move; (2) explicitly models the opponent\'s BEST REPLY rather than assuming no response, and evaluates the post-response position (depth 2), not just the immediate one; (3) either defends the move against that reply or swaps in a counter-positioned / margin alternative whose best reply is the null move; (4) acknowledges the opponent may not be perfectly rational (pride-driven retaliation or inertia-driven non-response) and how that changes the read. Penalise depth-1 thinking that ignores retaliation, and price-war-against-a-giant reasoning.',
        },
      ],
      commitSummary: 'no slot written — you can now evaluate competitive moves at depth 2, exploit counter-positioning, and avoid waking giants before your moat is deep.',
    },

    // -----------------------------------------------------------------------
    {
      id: '29.4',
      module: 29,
      title: 'Endgames: scale, exit, or stay independent',
      estMinutes: 18,
      prerequisites: ['29.1', '29.2', '29.3'],
      artifactSlot: null,
      concept: `Every venture has an **endgame** — the state it is ultimately steering toward — and most founders never name theirs, which means they optimise for someone else's. There are three broad endgames, and none is morally superior; the failure is only *mismatch* between the endgame and what you actually want your life to be.

- **Scale** — raise capital, chase a very large outcome, likely go public or become a category-defining independent company. This path demands venture financing, a market big enough to justify it, and years of your life pointed at growth above all. It is the right endgame for a genuine winner-take-most market and the wrong one for a lifestyle-sized opportunity.
- **Exit (M&A)** — sell the company. Two very different flavours: an **acquihire** (the buyer mainly wants the *team*; the product is wound down — modest price, essentially a premium hiring event) versus a **strategic acquisition** (the buyer wants what you've *built* — your product, users, technology, or the removal of a threat — and pays a premium tied to its value *to them*, often far above your standalone worth). Knowing which one you're in determines everything about how you negotiate.
- **Independence** — stay private and profitable, control your own pace, take dividends instead of an exit. The bootstrapper's endgame. It forgoes the lottery ticket in exchange for autonomy and durable cash flow — a completely rational choice that venture culture systematically under-celebrates.

**Two facts about M&A that founders learn too late.** First, *companies are bought, not sold* — a proactive process where you shop yourself signals weakness and depresses price; the strong position is a great business a strategic buyer *needs*, ideally with more than one interested party creating competitive tension. Second, price follows **value to the acquirer**, not your costs or even your standalone value — Facebook paid \\$1B for Instagram's ~13 employees because of what Instagram was worth *to Facebook* (a mobile-photo threat neutralised, a rocket-ship acquired), not because of Instagram's revenue (roughly zero at the time).

The lesson's real work is **alignment**: your funding, your growth rate, and your ownership structure should all be chosen to serve the endgame you actually want. Raise venture money and you've largely *committed* to the scale-or-sell path — a $50M-raised company can't quietly become a happy $3M/year lifestyle business, because your investors need a large liquidity event. Choose the endgame first; let it dictate the capital.`,
      reframe: {
        analogy: `Choosing an endgame is **designing the base case of a recursion before you write the recursive calls**. Every recursive function needs a terminating condition; get the base case wrong (or leave it undefined) and the whole computation either never halts or returns garbage no matter how elegant the recursive step. Your fundraising, hiring, and growth decisions are the recursive calls — each one should move you toward a *defined* terminating state (IPO, acquisition, or a steady profitable independent). Define the base case first and every recursive call is checked against it: "does raising this round move me toward my terminating condition, or past it into a state I can't return from?"`,
        breaks: `A recursion's base case is *fixed at compile time*; your endgame is a **moving target you're allowed to change** — founders legitimately start out aiming to stay independent and later decide to scale, or vice versa, as they learn what they want and what the market offers. The danger the analogy captures is real (undefined base case = non-terminating flail), but it overstates rigidity: the goal is to always have a *current* intended terminating state, not to lock one in forever. The deeper break is that some recursive calls are **irreversible** in a way code never is — taking $50M of venture money is a one-way transition that *removes* the "stay small and independent" base case from the reachable set entirely, because your investors now require a large exit. So: keep a defined endgame, feel free to revise it deliberately, but respect that certain calls (big raises) permanently prune which endgames you can still reach.`,
      },
      workedExample: `**Two right answers: Instagram (\\$1B strategic exit) vs. Mailchimp (independent for two decades).** In 2012 Facebook acquired Instagram — about 13 employees, effectively no revenue — for roughly \\$1B. This was a *strategic* acquisition, not an acquihire: Facebook wasn't buying 13 engineers, it was buying a fast-growing mobile-photo network that threatened its core and would have been dangerous in a rival's hands. The price reflected value *to Facebook* (threat neutralised, category won), not Instagram's standalone financials. Instagram's founders had raised venture money and were on the scale-or-sell path; a large, credible strategic buyer arriving at a moment of strength (multiple suitors circling, explosive growth) is exactly the condition that maximises an M&A outcome. Company bought, not sold — from strength.

Contrast **Mailchimp**. Founded in 2001, it took **zero** venture capital, stayed private and profitable, and grew on its own cash flow for two decades — the independence endgame executed with total discipline. Its founders deliberately kept control and optionality: no investors demanding a liquidity event meant they could run it as a durable, dividend-throwing business on their own pace. And because they never *needed* to sell, when they eventually chose to (acquired by Intuit in 2021 for a reported ~\\$12B), they did so entirely on their terms, capturing the value themselves rather than sharing it with rounds of prior investors. The pairing is the whole lesson: both outcomes were *right* because each matched the founders' chosen endgame and capital structure. Instagram's venture funding aligned with a scale-or-sell endgame; Mailchimp's bootstrapping aligned with independence-then-optional-sale. Disaster comes only from mismatch — raising like Instagram while wanting the life Mailchimp's founders had, or vice versa. (See Paul Graham on why growth drives acquisition offers, in the resources.)`,
      branch: undefined,
      artifact: undefined,
      blocks: [
        {
          kind: 'scenario',
          title: 'The acquisition offer',
          intro: 'Your venture is four years old, profitable, growing ~40% a year, and means a great deal to you. You did NOT raise venture capital — you own most of it and are on the independence path. Two offers land in the same month. Work through the decision.',
          decisions: [
            {
              situation: 'Offer A: a large strategic acquirer in an adjacent market offers a premium price — well above a standard multiple — explicitly because owning you closes a gap in their platform and keeps you out of a rival\'s hands. Offer B: a different buyer offers less, and their diligence makes clear they mainly want your engineering team; your product would be wound down. Which is the strategic acquisition, and which is the acquihire?',
              options: [
                { label: 'A is the strategic acquisition (price tied to value TO them, product lives on); B is the acquihire (they want the team, product dies).', correct: true, outcome: 'Correct. The tells are unambiguous: Offer A pays a premium tied to what you\'re worth TO the acquirer (closing a platform gap, denying a rival) and keeps the product alive — a classic strategic acquisition. Offer B\'s price is modest and diligence centres on the team while the product is wound down — the signature of an acquihire, essentially a premium hiring event. Knowing which one you\'re in reframes the entire negotiation and what you should optimise for.' },
                { label: 'B is the strategic one because a talent-focused buyer values people most; A is just overpaying.', correct: false, outcome: 'Reversed. A strategic acquisition is defined by the buyer wanting what you BUILT (product, users, market position, threat removal) and paying for its value to them — that\'s Offer A, product-lives-on and premium-priced. An acquihire is defined by the buyer wanting the TEAM while the product dies for a modest price — that\'s Offer B. Talent-focus at a low price with the product shut down is the acquihire signature, not the strategic one.' },
              ],
            },
            {
              situation: 'You lean toward Offer A\'s number, but it means giving up a profitable business you love running and that fits your independence endgame. The strategic buyer is applying time pressure. What\'s the disciplined move?',
              options: [
                { label: 'Sign fast before they change their mind — a big premium may never come again.', correct: false, outcome: 'The pressure is manufactured leverage. Because you took no venture money, you have the rarest asset in any M&A: you don\'t NEED to sell. A profitable, growing, independent business is exactly the position of strength that maximises price — and lets you walk. Signing fast under artificial urgency, against your stated independence endgame, trades your strongest negotiating position and a life you like for a number chosen under someone else\'s clock.' },
                { label: 'Use your independence as leverage: you can credibly walk, so negotiate hard (ideally surfacing a second bidder for competitive tension), and only sell if the number genuinely beats the value of continuing to own the business.', correct: true, outcome: 'Correct. Companies are bought, not sold, and the seller who can credibly walk away commands the best terms. Your lack of investors and your profitability mean "keep running it" is a genuinely great alternative — so anchor the negotiation on value TO the acquirer, create competitive tension if you can, and refuse the artificial deadline. Sell only if the offer clearly beats independence on the dimensions you actually care about. Endgame first; let the price prove itself against it.' },
              ],
            },
          ],
        },
        {
          kind: 'resource',
          title: 'Endgames & strategy — real essays (verify these yourself)',
          items: [
            { label: 'Hamilton Helmer — 7 Powers (official site)', url: 'https://7powers.com/', note: 'The moat framework underpinning what makes a company worth acquiring in the first place.' },
            { label: 'Paul Graham — "Startup = Growth"', url: 'https://paulgraham.com/growth.html', note: 'Why fast growth is what produces acquisition offers, and why acquirers find fast-growing companies both valuable and dangerous.' },
            { label: 'NFX — The Network Effects Bible', url: 'https://www.nfx.com/post/network-effects-bible', note: 'Why network-effect businesses command scale endgames and premium strategic acquisitions.' },
            { label: 'Commoncog — Counter-Positioning case studies', url: 'https://commoncog.com/c/concepts/counter-positioning/', note: 'How the durability of your moat shapes which endgames are even available to you.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Which endgame fits my life?', kind: 'ask', question: 'Help me name my real endgame — scale, exit, or independence — by reasoning from what I actually want my life and ownership to look like, and then tell me whether my current or planned capital structure is aligned with it or quietly committing me to a different one.' },
        { label: 'Am I in an acquihire or a strategic acquisition?', kind: 'ask', question: 'I have (or expect) an acquisition conversation. Help me read the signals to tell whether it\'s an acquihire (they want the team, price modest, product wound down) or a strategic acquisition (they want what I built, price tied to value to them), and how that should change my negotiation.' },
        { label: 'Stress-test my endgame-vs-capital alignment', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Facebook paid roughly $1B for Instagram when Instagram had about 13 employees and essentially no revenue. What best explains the price?',
          options: [
            'Instagram\'s costs and headcount justified it',
            'Acquisition price follows value TO THE ACQUIRER — a fast-growing mobile-photo network that threatened Facebook\'s core and would be dangerous in a rival\'s hands — not the target\'s standalone revenue',
            'Facebook overpaid by mistake',
            'It was an acquihire for 13 engineers',
          ],
          answer: 1,
          explain: 'In a strategic acquisition, price tracks what the target is worth to the buyer — here, neutralising a mobile threat and owning a rocket-ship — not the target\'s costs or standalone financials (near-zero revenue). That\'s the opposite of an acquihire, where the buyer wants the team and the product is wound down for a modest price. Read which game you\'re in before you negotiate.',
        },
        {
          kind: 'mcq',
          prompt: 'Why does raising a large venture round ($50M) effectively remove "stay small, independent, and profitable" from your reachable endgames?',
          options: [
            'Because venture money is illegal to keep',
            'Because your investors require a large liquidity event (IPO or big acquisition) to earn their return, so the company is now committed to the scale-or-sell path — a one-way transition, like an irreversible recursive call that prunes the base case',
            'Because you can always give the money back later with no consequences',
            'Because profitability becomes impossible after raising money',
          ],
          answer: 1,
          explain: 'Venture investors need a large exit to return their fund; a company that raised $50M can\'t rationally settle into a quiet $3M/year lifestyle business, because that starves their required return. The raise is a largely irreversible transition that prunes the independence endgame from the reachable set. That\'s why you choose the endgame first and let it dictate the capital — not the reverse.',
        },
        {
          kind: 'free',
          prompt: 'Name your intended endgame (scale, exit, or independence) and justify it from what you actually want your life and ownership to look like — not from what sounds impressive. Then check alignment: is your current or planned capital structure (bootstrapped vs venture-backed) consistent with that endgame, or is it quietly committing you to a different one? If you\'d consider selling, state whether you\'d most likely be in an acquihire or a strategic acquisition and why.',
          rubric: 'Strong answer: (1) picks a specific endgame and justifies it from genuine personal goals (autonomy, wealth ceiling, risk appetite, time horizon) rather than status; (2) explicitly checks capital-structure alignment and recognises that a large raise commits to scale-or-sell while bootstrapping preserves independence; (3) if exit is contemplated, correctly distinguishes acquihire (team wanted, product wound down, modest price) from strategic acquisition (built thing wanted, price tied to value to acquirer); (4) shows awareness that endgame can be revised but certain capital decisions are irreversible. Penalise "scale" chosen purely for prestige with no alignment check, or confusion between the two M&A types.',
        },
      ],
      commitSummary: 'no slot written — you\'ve named your endgame (scale, exit, or independence) and pressure-tested whether your capital structure actually serves it. This closes Strategy II: build a moat, defend it in the game, and steer toward an endgame that fits your life.',
    },
  ],
}
