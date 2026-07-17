import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 23 — Organizational design & scaling  (SEASON 2)
//
// Season 2 is "Building for Real". By now the founder has a venture, users,
// and probably a few people helping. The failure mode of this stage is not
// the market — it is the org. A founder who is the single point of contact
// for every decision has built a system whose throughput is capped at one
// person, and whose communication cost grows quadratically. This module is
// unapologetically engineer-native: it treats org design as system design.
// Conway's law says your architecture is a homomorphic image of your comms
// graph; span-of-control is edge count in that graph; delegation is an
// access-control matrix; the founder bottleneck is Amdahl's law. Every lesson
// is artifactSlot:null — the real deliverable (a decision-rights doc) is
// written through the interactive `blocks`, not a startup.json slot.
// ===========================================================================

export const module23: Module = {
  id: 23,
  season: 2,
  title: 'Organizational design & scaling',
  goal: 'Design an org that doesn\'t bottleneck on you: structure, delegation, decision rights, and communication that scales sub-quadratically.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '23.1',
      module: 23,
      title: 'Structure & Conway\'s law',
      estMinutes: 18,
      prerequisites: [],
      artifactSlot: null,
      concept: `You already believe that architecture matters. Here is the uncomfortable corollary you probably haven't internalized: **your org chart is architecture too, and it ships in your product whether you designed it to or not.**

In 1968 Melvin Conway published the observation now known as **Conway's law**: *"Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations."* Two teams that rarely talk will build two modules with a thin, awkward, under-negotiated interface between them — because the interface is a *negotiation*, and the negotiation is exactly the conversation those teams aren't having. Three backend teams and one frontend team tend to produce three services and one increasingly overloaded client. The seams in your software fall on the seams in your org.

For a founder this cuts two ways. The **naive** reading is fatalistic: "structure is destiny, oh well." The **useful** reading is the **inverse Conway maneuver** — since structure leaks into architecture, deliberately *design the teams* to produce the architecture you want. Want loosely-coupled services with clean APIs? Create loosely-coupled teams with clean interfaces and let Conway do the work for you. Team boundaries are not an HR concern you delegate to a people-ops hire later; they are a load-bearing technical decision you are making right now, every time you decide who talks to whom.

The first structural fork you'll face is **functional vs cross-functional**. A functional org groups people by craft (all engineers together, all designers together); a cross-functional org groups them by outcome (a squad with an engineer, a designer, and a PM who together own one customer problem end-to-end). Neither is universally right — but each one, per Conway, will emit a *different product*.`,
      reframe: {
        analogy: `Conway's law is a **homomorphism** from your communication graph onto your system architecture. A homomorphism is a structure-preserving map: whatever relationships exist in the source are reflected in the image. Nodes are teams; edges are the conversations that actually happen; and the map sends each team to the component it builds and each recurring conversation to the interface between components. Because the map preserves structure, two components can only have a well-designed interface if the two teams that own them have a real, ongoing conversation to design it. You cannot draw a clean module boundary where there is no team boundary to *enforce* it — the compiler of your org will optimize it away.`,
        breaks: `A mathematical homomorphism is total, exact, and static; your org is none of those. Real communication runs on **shadow edges** the org chart never shows — the two staff engineers who were roommates and settle cross-team design over coffee, routing around the official structure. The map is also **re-drawable**: unlike a fixed algebraic map you can perform the inverse Conway maneuver and reshape the teams to get the image you want. And it's **lossy the other way** — one team can, with discipline, maintain several cleanly-separated modules, so the map isn't injective. Treat Conway's law as a strong prior about what your structure will *tend* to emit, not an iron law that removes your agency.`,
      },
      workedExample: `**Amazon's 2002 "API Mandate" is the inverse Conway maneuver executed at company scale.** As recounted publicly by former Amazon (and Google) engineer Steve Yegge in his widely-read 2011 "Platforms Rant", Jeff Bezos issued a mandate roughly to the effect of: all teams will expose their data and functionality through service interfaces; teams will communicate with each other *only* through those interfaces — no shared databases, no back-door reads, no other inter-process communication; and every interface must be designed from the ground up to be externalizable. Anyone who didn't comply would be fired.

Read that as org design, not just tech policy. Bezos did not start by drawing an architecture diagram and hoping the teams matched it. He changed the **communication structure** — he forbade the informal cross-team back-doors and forced every interaction onto explicit, versioned interfaces — and let Conway's law do the rest. Because teams could now *only* talk through APIs, the system they produced *became* a collection of independently-deployable, API-first services. That reshaping is a major part of why Amazon could later turn its internal infrastructure into AWS: the org had already been contorted into a shape whose homomorphic image was a clean service platform. The transferable lesson for a founder with twelve people, not a hundred thousand: if you want decoupled software, ship decoupled teams — decide the seams in your org on purpose, because they will show up in your product either way. (Source: Steve Yegge's "Google Platforms Rant", widely archived; the mandate is also discussed in Amazon's own engineering retrospectives.)`,
      branch: {
        scenario: `Your venture has 9 people. You're building a product with a web app, a mobile app, and a data/ML backend. Two natural structures are on the table. A **functional** org: one Engineering team, one Design team, one Data team, each grouped by craft. A **cross-functional** org: two squads, each with web + mobile + a slice of data, every squad owning a whole customer journey end-to-end. You care most about shipping features fast without cross-team hand-offs stalling everything. Which do you pick, and why?`,
        choices: [
          {
            label: 'Functional org — group by craft so specialists learn from each other and you get consistent engineering standards.',
            correct: false,
            consequence: `**A real benefit, wrong priority for your stated goal.** Functional grouping does raise craft quality and consistency — but per Conway, an org split by *craft* emits a product split by *layer*, so every customer feature has to be handed across the Design → Engineering → Data seams to ship. That's exactly the cross-team hand-off latency you said you wanted to avoid. Functional shines when depth of craft dominates; it fights you when end-to-end feature speed is the goal.`,
          },
          {
            label: 'Cross-functional squads owning whole customer journeys — accept some craft duplication to get end-to-end ownership.',
            correct: true,
            consequence: `**Correct for this goal.** You said the priority is shipping features without hand-offs. A squad that contains every skill a feature needs can design, build, and ship it without negotiating across a craft boundary mid-flight — the interface is *inside* the team. By Conway's law that structure tends to emit vertically-sliced, independently-shippable features, which is the architecture you want. The cost you're knowingly paying is some duplication and weaker craft-consistency, which you manage with a light guild/chapter overlay — not by re-centralizing.`,
          },
          {
            label: 'Don\'t decide — let the team self-organize; imposing structure is premature at 9 people.',
            correct: false,
            consequence: `**"No decision" is itself a decision — and Conway still applies.** A structure will emerge from whoever happens to talk to whom, and it will silently shape your architecture without anyone owning the trade-off. At 9 people the cost of *choosing* is an afternoon; the cost of an accidental structure is a product whose seams fell wherever the loudest two engineers happened to pair. Deliberate beats emergent precisely because the emergent one is invisible until it's load-bearing.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each trait into the structure it belongs to. This is the fork every scaling founder faces: a FUNCTIONAL org groups people by craft (all engineers together), a CROSS-FUNCTIONAL org groups them by outcome (a squad owning one customer problem end to end). Knowing which trait comes from which lets you choose on purpose.',
          buckets: ['Functional (by craft)', 'Cross-functional (by outcome)'],
          items: [
            { text: 'Deep craft mastery and consistent engineering standards across the company', bucket: 'Functional (by craft)' },
            { text: 'Easiest to enforce one shared tech stack and shared best practices', bucket: 'Functional (by craft)' },
            { text: 'Ships a feature end to end without hand-offs across team boundaries', bucket: 'Cross-functional (by outcome)' },
            { text: 'Each team owns a customer-facing outcome and its metric', bucket: 'Cross-functional (by outcome)' },
            { text: 'Tends to emit a layered architecture (one module per craft)', bucket: 'Functional (by craft)' },
            { text: 'Tends to emit vertically-sliced, independently-shippable features', bucket: 'Cross-functional (by outcome)' },
            { text: 'Risks duplicated work and drift in standards between teams', bucket: 'Cross-functional (by outcome)' },
            { text: 'Risks slow delivery because every feature crosses craft boundaries', bucket: 'Functional (by craft)' },
          ],
          explain: 'Neither structure is "better" — each optimizes a different variable and, per Conway, emits a different product. Functional maximizes craft depth and consistency but pays in cross-team hand-offs and a layered architecture. Cross-functional maximizes end-to-end delivery speed and outcome ownership but pays in duplication and standards drift. Choose the one whose costs you can most afford right now, and add a light overlay (guilds/chapters, or a platform team) to buy back what you gave up.',
        },
        {
          kind: 'scenario',
          title: 'The seam you draw is the seam you ship',
          intro: 'A payments feature needs work that spans two of your teams. Watch how the org boundary you drew turns into the product boundary your users feel. Each decision is a small application of Conway\'s law.',
          decisions: [
            {
              situation: 'Your "Billing" team and your "Accounts" team have never agreed on who owns the customer payment method. A new refunds feature needs both. What happens by default (per Conway)?',
              options: [
                { label: 'The refund logic develops a thin, awkward, under-specified interface between Billing and Accounts, and edge cases fall in the gap.', correct: true, outcome: 'Correct. The two teams aren\'t really talking, so the interface between their modules is exactly as thin and under-negotiated as their conversation. The product seam lands on the org seam, and refunds break at the boundary neither team owns.' },
                { label: 'The two teams automatically build a clean, well-factored shared module because the code demands it.', correct: false, outcome: 'Wishful. Code has no agency; teams do. A clean shared interface requires a real, ongoing negotiation between the two teams — which is precisely the conversation this structure isn\'t forcing. Without changing the comms structure, the seam stays ragged.' },
              ],
            },
            {
              situation: 'You want refunds to be robust. Applying the inverse Conway maneuver, what\'s the structural move?',
              options: [
                { label: 'Give one team clear end-to-end ownership of "payment method + refunds", so the interface is inside a team instead of across a gap.', correct: true, outcome: 'Correct. Reshape the org to emit the architecture you want: put the whole refund flow inside one team\'s boundary so the tricky interface becomes an internal design problem that one owner is accountable for — not a no-man\'s-land between two teams.' },
                { label: 'Write a stricter Jira ticket describing the desired interface and assign it across both teams.', correct: false, outcome: 'A ticket doesn\'t change the communication structure — the same two non-talking teams now co-own a ticket. Conway\'s law operates on who actually negotiates with whom, not on the wording of the work item. Move the boundary, don\'t just document it.' },
              ],
            },
          ],
        },
        {
          kind: 'resource',
          title: 'Conway\'s law & team topology (primary sources)',
          items: [
            { label: 'Melvin Conway — "How Do Committees Invent?" (1968, full PDF)', url: 'https://www.melconway.com/Home/pdf/committees.pdf', note: 'The original paper. Short and readable — the source of the law itself.' },
            { label: 'Conway\'s law — Wikipedia', url: 'https://en.wikipedia.org/wiki/Conway%27s_law', note: 'Good survey, including the "inverse Conway maneuver" and modern software-architecture takes.' },
            { label: 'Martin Fowler — Team Topologies (bliki)', url: 'https://martinfowler.com/bliki/TeamTopologies.html', note: 'Fowler\'s concise summary of Skelton & Pais\'s four team types and three interaction modes.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Which structure should MY venture use?', kind: 'ask', question: 'Given my product surface (list of major components), my headcount, and whether my priority is end-to-end delivery speed or craft consistency, help me choose between a functional and a cross-functional structure, and sketch the specific teams and their boundaries.' },
        { label: 'Design my inverse Conway maneuver', kind: 'ask', question: 'I want a specific target architecture (I\'ll describe it). Work backwards with me: what team boundaries and communication rules would tend to EMIT that architecture under Conway\'s law, and what shadow edges might undermine it?' },
        { label: 'A harder team-boundary case', kind: 'harder', concept: 'drawing team boundaries when one platform capability (auth, billing) is needed by every product squad — platform team vs embedded vs shared library, evaluated through Conway\'s law' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A founder wants a decoupled, API-first, independently-deployable service architecture. According to Conway\'s law and the inverse Conway maneuver, what is the most effective lever?',
          options: [
            'Write a detailed target architecture document and mandate that all teams conform to it',
            'Reshape the teams and their communication rules to be decoupled and API-first, so the org emits the desired architecture',
            'Hire more senior engineers who individually prefer clean architecture',
            'Adopt a microservices framework and let the tooling enforce boundaries',
          ],
          answer: 1,
          explain: 'Conway\'s law says the system is a structure-preserving image of the communication graph, so the highest-leverage move is to change the graph. The inverse Conway maneuver deliberately designs decoupled, interface-mediated teams so that the architecture they emit is decoupled and API-first — exactly what Amazon\'s 2002 API mandate did. Documents, senior hires, and frameworks help at the margin but don\'t override the structural pull of who talks to whom.',
        },
        {
          kind: 'mcq',
          prompt: 'In the homomorphism reframe (communication graph → system architecture), where does the analogy BREAK in a way a founder must exploit?',
          options: [
            'Communication graphs have no edges, so the map is trivial',
            'The map is fixed and exact, so architecture can never be changed',
            'Unlike a fixed algebraic map, the org graph is re-drawable — you can reshape teams (the inverse Conway maneuver) to change the architecture it emits',
            'System architecture has no relationship to team structure at all',
          ],
          answer: 2,
          explain: 'A true homomorphism is a fixed map; an org is not. The exploitable break is that you can redraw the source graph — change who talks to whom — and thereby change the image. That is the whole point of the inverse Conway maneuver: agency, not fatalism. (Other breaks: shadow edges route around the chart, and one team can maintain several modules, so the map isn\'t exact or injective.)',
        },
        {
          kind: 'free',
          prompt: 'For your own venture, draw the current (or planned) communication structure: who are the teams (or clusters of people), and which pairs actually talk regularly? Then predict, via Conway\'s law, one seam in your product that this structure will tend to produce. Finally, name one deliberate change to the org (an inverse Conway maneuver) that would move that seam somewhere better.',
          rubric: 'A strong answer: (1) lists concrete teams/clusters and the real communication edges between them (not an idealized chart); (2) makes a SPECIFIC, falsifiable prediction about a product seam that mirrors an org seam (e.g. "Billing and Accounts barely talk, so refunds will have a ragged interface"); (3) proposes a concrete structural change (merge ownership, split a team, add or remove a communication rule) rather than a documentation or tooling fix; (4) shows the learner understands structure as a load-bearing technical decision. Penalize answers that treat org design as an HR afterthought or that only propose writing a spec.',
        },
      ],
      commitSummary: 'no slot written — you now read the org chart as architecture: team boundaries are the seams your product will ship, and the inverse Conway maneuver is how you place them on purpose.',
    },

    // -----------------------------------------------------------------------
    {
      id: '23.2',
      module: 23,
      title: 'Communication overhead & span of control',
      estMinutes: 16,
      prerequisites: ['23.1'],
      artifactSlot: null,
      concept: `Here is the equation that governs why growing teams slow down. In a group of $n$ people where everyone can talk to everyone, the number of distinct communication channels is $\\frac{n(n-1)}{2}$ — one edge for every pair. This is the edge count of the complete graph on $n$ nodes, and it grows **quadratically**. Double the team and you roughly *quadruple* the potential ways information has to flow (and get garbled).

Run the numbers and the trap is obvious. A team of 3 has 3 channels. A team of 6 has 15. A team of 12 has 66. A team of 20 has 190. You added people **linearly** and bought coordination cost **quadratically** — which is why the founder who "just needs a few more hands" so often finds the team gets *slower*, not faster, right after hiring. Fred Brooks named the extreme case in *The Mythical Man-Month* (1975): **adding people to a late software project makes it later**, because the new hires consume ramp-up and communication bandwidth faster than they add output. Coordination is a tax, and the tax rate rises with headcount.

You cannot repeal the quadratic. What you *can* do is stop running every team as a complete graph. The whole craft of org design is buying **sub-quadratic** communication: keep the fully-connected clusters small, and connect the clusters through a small number of well-defined interfaces instead of an all-to-all mesh. Amazon's **two-pizza team** rule — no team so large that two pizzas can't feed it, roughly 6–10 people — is exactly this instinct encoded as a heuristic. Small teams keep their internal edge count cheap; the *number* of teams grows linearly, and you connect them through a routing structure (owners, interfaces, a platform team) rather than a mesh.

**Span of control** — how many people or teams report to one person — is the same equation seen from a manager's chair. A manager who is a hub for 10 direct reports is sitting at the center of a busy star; push it too far and the hub saturates. The answer to a saturating hub is not heroics, it's **topology**: introduce a layer, split the cluster, define the interface.`,
      reframe: {
        analogy: `A team communicating all-to-all is a **fully-connected mesh network**, and it inherits the mesh's fatal scaling property: adding one node adds $n$ new links, so total links grow as $O(n^2)$. Network engineers never let a large network stay a full mesh — the cabling, the routing tables, and the broadcast traffic explode. They impose **topology**: hierarchy, spine-and-leaf, routers, subnets. Traffic between two hosts no longer needs a dedicated wire; it hops through a small number of aggregation points. An org scales the same way: keep small clusters densely connected internally, then route between clusters through managers and interfaces so the *global* edge count grows closer to linear than quadratic. A manager is a router; a team interface is a subnet boundary.`,
        breaks: `Packets don't get demoralized when routed through three hops, but **information does**. Every human "router" you insert to cut the edge count also adds latency and lossy re-encoding — the telephone-game distortion that turns a crisp decision at the top into mush at the edge. A network's routers are cheap, faithful, and fast; a management layer is expensive, political, and forgetful. So unlike a network, you cannot just keep adding hierarchy to cut fan-out — past a point the routing *layers themselves* become the bottleneck (this is why flat-ish orgs and direct founder-to-IC channels stay valuable). The goal is not to minimize edges at all costs; it's to cut the *needless* all-to-all edges while protecting the few high-bandwidth links that actually carry the signal.`,
      },
      workedExample: `**Amazon's two-pizza teams turn the $\\frac{n(n-1)}{2}$ curve into a design constraint.** Amazon's long-standing rule (documented in AWS's own executive-insights material) is that a team should be small enough to be fed by two pizzas — in practice roughly 6 to 10 people — and should own its service end to end with a single-threaded owner. The stated rationale is precisely communication cost: smaller teams minimize the lines of communication, reduce coordination overhead, and keep decision-making fast, so the people closest to the work retain ownership instead of drowning in cross-team sync.

Do the arithmetic the rule is dodging. A single 20-person "team" carries $\\frac{20 \\times 19}{2} = 190$ internal channels — an unmanageable mesh where no one can hold the whole context. Split that same 20 people into three two-pizza teams of ~7 and each team carries only $\\frac{7 \\times 6}{2} = 21$ internal channels, for $63$ total, plus a *small* number of inter-team interfaces. Same headcount, less than half the internal coordination cost, and the cross-team links are now explicit and few rather than implicit and quadratic. That is the entire move: you don't fight the quadratic, you *box* it — keep it operating only inside small clusters and pay a linear price to connect them. Brooks's law is the warning label for founders who ignore this; the two-pizza rule is the design pattern that heeds it. (Source: AWS Executive Insights, "Amazon's Two-Pizza Teams"; Fred Brooks, *The Mythical Man-Month*.)`,
      branch: {
        scenario: `Your single product team has grown to 14 people and, unmistakably, slowed down. Stand-ups run 40 minutes, every decision needs five people in a room, and two engineers just shipped conflicting changes because they didn't know about each other's work. A board advisor says "you clearly need more senior engineers — hire two more." What's the disciplined move?`,
        choices: [
          {
            label: 'Hire the two senior engineers — more horsepower will clear the backlog.',
            correct: false,
            consequence: `**Adding nodes to a saturated mesh — this is Brooks\'s law in the making.** At 14 people you already carry 91 potential channels; at 16 you\'d carry 120. The slowdown isn\'t a shortage of horsepower, it\'s coordination overhead growing quadratically, and new hires consume ramp-up and communication bandwidth before they add output. You\'d likely get *slower*, not faster. Fix the topology before you add mass.`,
          },
          {
            label: 'Split the 14 into two two-pizza teams of ~7, each owning a clear slice with one owner, connected by a small defined interface.',
            correct: true,
            consequence: `**Correct — this is buying sub-quadratic communication.** Fourteen people as one mesh is 91 channels; two teams of 7 are 21 each (42 total) plus a handful of explicit inter-team links. You cut internal coordination by more than half without changing headcount, and each team is now small enough that everyone holds the context. You fixed the *topology*, which is the actual bottleneck — then you can hire into the smaller teams without re-saturating.`,
          },
          {
            label: 'Keep one team but add more process — a stricter stand-up format and a heavier planning ritual.',
            correct: false,
            consequence: `**Treating the symptom, not the topology.** More ritual on a 14-person mesh just formalizes the 91 channels; you\'re paying the quadratic tax through meetings instead of chaos. Process can shave the constant factor a little, but it can\'t change the growth rate. The only thing that bends the curve is keeping the fully-connected clusters small — i.e. splitting the team.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Span-of-control arithmetic. Your team has grown to 12 people who all coordinate directly with one another (a fully-connected communication graph). How many distinct communication channels is that? Use the complete-graph edge count: n(n-1)/2.',
          answer: 66,
          tolerance: 0,
          unit: 'channels',
          explain: 'n(n-1)/2 = 12 x 11 / 2 = 66. Compare: 6 people = 15 channels, 12 people = 66, 20 people = 190. Headcount grew linearly; coordination cost grew quadratically. This single curve is why teams slow down as they grow and why the two-pizza rule caps team size — you keep the fully-connected cluster small so its edge count stays cheap, then connect clusters through a few explicit interfaces instead of an all-to-all mesh.',
        },
        {
          kind: 'numeric',
          prompt: 'Now prove the two-pizza split pays off. You have 20 people. Compare running them as ONE team versus THREE teams of 6, 7, and 7. How many total INTERNAL channels do the three small teams have combined? Compute 6x5/2 + 7x6/2 + 7x6/2.',
          answer: 57,
          tolerance: 0,
          unit: 'channels',
          explain: 'One team of 20 = 20x19/2 = 190 internal channels. Three teams of 6/7/7 = 15 + 21 + 21 = 57 internal channels — less than a third of the mesh cost — plus a small, explicit number of inter-team interfaces. Same 20 people, but by boxing the quadratic inside small clusters you slash coordination overhead. That gap between 190 and 57 is the entire economic case for the two-pizza rule.',
        },
        {
          kind: 'resource',
          title: 'Team size & communication cost (canonical sources)',
          items: [
            { label: 'AWS Executive Insights — Amazon\'s Two-Pizza Teams', url: 'https://aws.amazon.com/executive-insights/content/amazon-two-pizza-team/', note: 'Amazon\'s own account of the rule and why small teams minimize communication lines.' },
            { label: 'The Mythical Man-Month — Wikipedia', url: 'https://en.wikipedia.org/wiki/The_Mythical_Man-Month', note: 'Brooks\'s law ("adding manpower to a late software project makes it later") and the communication-overhead argument behind it.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Is my team past two-pizza size?', kind: 'ask', question: 'My team has N people who all coordinate directly. Compute my current communication-channel count, tell me whether I\'ve crossed the two-pizza threshold, and propose a specific split into smaller teams with clear ownership and interfaces.' },
        { label: 'Design my routing layer', kind: 'ask', question: 'Help me design the "topology" that keeps my org sub-quadratic: how to cluster people into small teams, where to put the interfaces between them, and how to avoid inserting so many management layers that the layers themselves become the bottleneck.' },
        { label: 'Critique my "just hire more" instinct', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A team grows from 8 people to 16, all coordinating directly. Roughly what happens to the number of communication channels?',
          options: [
            'It doubles, from 28 to 56 — linear with headcount',
            'It stays about the same because people self-organize',
            'It roughly quadruples, from 28 to 120 — quadratic in headcount',
            'It grows logarithmically, from 28 to about 34',
          ],
          answer: 2,
          explain: 'Channels = n(n-1)/2. At 8 people that\'s 28; at 16 it\'s 16x15/2 = 120. Doubling the headcount roughly quadrupled the coordination cost — the quadratic curve. This is exactly why linear hiring into one mesh buys super-linear overhead, and why you must split into small clusters rather than grow one big team.',
        },
        {
          kind: 'mcq',
          prompt: 'In the network-topology reframe, why can\'t a founder just keep adding management layers to cut communication fan-out the way a network adds routers?',
          options: [
            'Because management layers are illegal above a certain company size',
            'Because human "routers" add latency and lossy re-encoding (the telephone game), so past a point the layers themselves become the bottleneck',
            'Because networks never actually reduce the number of links',
            'Because span of control has no effect on communication cost',
          ],
          answer: 1,
          explain: 'Routers are cheap, fast, and faithful; management layers are expensive, slow, and forgetful. Each layer you add to cut fan-out also distorts and delays the signal, so beyond a point the hierarchy is the bottleneck. The goal is to cut the NEEDLESS all-to-all edges (via small teams and clear interfaces) while protecting the few high-bandwidth links that carry real signal — not to minimize edges by piling on hierarchy.',
        },
        {
          kind: 'free',
          prompt: 'Take your own current team (or your 12-month plan). Compute its communication-channel count with n(n-1)/2. If it\'s above ~15 (a two-pizza cap), propose a concrete split into small teams, give each a clear owner and the interface between them, and show the new total internal channel count to prove the split reduces coordination cost.',
          rubric: 'A strong answer: (1) correctly computes n(n-1)/2 for the actual/planned headcount; (2) recognizes whether it exceeds a two-pizza threshold; (3) proposes a SPECIFIC split into small teams each with a named owner and a defined inter-team interface (not just "hire a manager"); (4) computes the new sum of internal channels and shows it is meaningfully lower than the single-mesh count, demonstrating they understand you box the quadratic inside small clusters and pay a linear price to connect them. Penalize answers that respond to slowdown with "add more people" or "add more process" without changing topology.',
        },
      ],
      commitSummary: 'no slot written — you can now compute the coordination tax (n(n-1)/2), recognize a saturating mesh, and split it into two-pizza clusters connected by explicit interfaces.',
    },

    // -----------------------------------------------------------------------
    {
      id: '23.3',
      module: 23,
      title: 'Delegation & decision rights (RACI)',
      estMinutes: 18,
      prerequisites: ['23.1'],
      artifactSlot: null,
      concept: `Most founders think they're delegating when they hand off *tasks*. Real delegation hands off **outcomes**. "Go update the pricing page copy" is a task — you still own the thinking, and every follow-up question routes back to you. "Own our pricing page: you decide the copy, the layout, and what converts; the constraint is it must not undercut our margin floor" is an outcome — now someone else owns the loop, and you're freed from it. Task-delegation makes you a slower bottleneck; outcome-delegation actually removes you from the critical path. The unit of delegation is a *decision right*, not a chore.

But "you own it" is uselessly vague until you answer a sharper question: **who decides, and who merely gets a say?** This is where teams silently break. Two people both think they're accountable, so they fight; or *nobody* thinks they're accountable, so the thing rots. The classic tool for making this explicit is the **RACI matrix**. For any task or decision, name exactly four roles:

- **Responsible** — the person(s) who actually do the work.
- **Accountable** — the *single* owner who is answerable for the outcome and has final say. Exactly one per decision. This is the load-bearing constraint.
- **Consulted** — people whose input is sought *before* the decision (two-way).
- **Informed** — people told *after* the decision (one-way).

The most common RACI failure is having zero or multiple Accountables. Zero means the decision has no owner and stalls; two means a turf war. The discipline is brutal and simple: **one A per row.**

Delegation is also not binary — it's a **dial**. You don't either "keep it" or "hand it off completely." The Management 3.0 framework names seven levels from *Tell* (you decide, you announce) through *Consult*, *Agree*, *Advise*, up to *Delegate* (they decide, you don't even need to be told). Matching the right level to the person, the stakes, and their proven judgment is the actual skill. New hire on a high-stakes call? Low on the dial. Trusted lead on a reversible call? Turn it all the way up.`,
      reframe: {
        analogy: `A RACI matrix is an **access-control matrix**. Rows are protected resources (decisions/tasks); columns are principals (people); each cell grants a permission. **Accountable** is the *write/owner* capability — and just as a well-run system gives each critical resource exactly one root owner, RACI gives each decision exactly one A. **Responsible** is *execute*. **Consulted** is *read-write before commit* (their input can change the result). **Informed** is *read-only, after commit* (they can observe but not alter). Delegation levels are **privilege escalation**: moving someone from Tell to Delegate is granting broader capabilities as they earn trust, exactly like promoting a user from read-only to \`sudo\`. Good org design, like good security, is the *principle of least astonishment about who can do what* — everyone can see their permissions and there are no ambiguous grants.`,
        breaks: `An access-control matrix is enforced by a **kernel**: an unauthorized write is *impossible*, not merely frowned upon. A RACI matrix is enforced only by **social agreement** — there is no kernel, so a determined person can violate the permissions and the only consequence is a conversation. That makes RACI far weaker (it degrades the moment people stop respecting it) and, oddly, far more **flexible** (you can renegotiate a grant on the fly without a security review). The other break is **over-specification**: fine-grained ACLs are cheap for a computer to check but expensive for humans to maintain — a RACI so detailed that every trivial decision has a four-role matrix becomes bureaucratic sludge. Specify decision rights for the decisions that actually matter and that people actually fight over; leave the rest to trust.`,
      },
      workedExample: `**Amazon's "single-threaded owner" is the "exactly one Accountable" rule promoted to an operating principle.** Amazon found that when an important initiative was one responsibility among many for a busy leader, it starved — everyone was a little bit responsible, so no one truly owned it. Their fix (documented in AWS's own leadership material and widely discussed in Amazon retrospectives) is the **single-threaded owner / single-threaded leader**: one person whose *sole* job is that initiative, with clear authority over it and a team dedicated to it. It is RACI's load-bearing constraint — one and only one Accountable — turned into a staffing rule.

Look at *why* it works through the access-control lens. A decision with two "owners" is a resource with two conflicting write-capabilities: every commit risks a merge conflict that only a turf war resolves. A decision with zero real owners is a resource no principal has write access to: it never gets updated and quietly rots. The single-threaded owner guarantees exactly one write-capability per critical initiative, which is why the initiative actually moves. The transferable move for a founder: for every outcome that matters — onboarding conversion, hiring quality, the pricing model — name one, and *only* one, accountable owner, give them real decision rights (not just the chore), and set the delegation level explicitly so they know how far their \`sudo\` extends. Then get out of their loop. (Source: AWS Executive Insights on single-threaded leadership; the RACI framework as summarized by Atlassian and CIO.)`,
      branch: {
        scenario: `You're delegating "own our customer onboarding" to a capable engineer, Dana. You want this genuinely off your plate. Which handoff actually removes you from the critical path?`,
        choices: [
          {
            label: '"Here\'s my list of 8 onboarding tweaks — go implement them and check with me before shipping each one."',
            correct: false,
            consequence: `**Task delegation with a leash — you\'re still the bottleneck.** You handed off the *typing*, not the *thinking*: you still own the decisions, and "check with me before shipping each one" routes every step back through you. Dana is now a slower proxy for your own hands. This is exactly the delegation that makes founders busier, not freer. You delegated the chore and kept the decision right.`,
          },
          {
            label: '"You own onboarding conversion. You decide what to change and ship it. Constraint: don\'t touch billing or pricing without me. You\'re Accountable; loop me in as Informed on big swings."',
            correct: true,
            consequence: `**Correct — outcome delegation with explicit decision rights.** You handed off the *outcome* (conversion) and the *authority* to pursue it, named Dana as the single Accountable, drew a clear guardrail (billing/pricing stays with you), and set the delegation level high with an Informed channel for the big stuff. Dana now owns the loop and you\'re off the critical path — while the one thing you must not lose control of is explicitly fenced.`,
          },
          {
            label: '"Onboarding is all yours now — total freedom, do whatever you think is best." (No constraints, no reporting, no scope.)',
            correct: false,
            consequence: `**Abdication, not delegation.** Turning the dial straight to full Delegate with zero guardrails and no Informed channel isn\'t trust, it\'s hoping. If Dana rewrites the pricing flow or changes something you can\'t reverse, you find out when it\'s already shipped. Real delegation sets the level to match the stakes and the person\'s proven judgment, names the constraints, and keeps an Informed link for high-stakes or irreversible moves.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'rank',
          prompt: 'Order the seven levels of delegation (Management 3.0) from KEEPING the most control to GIVING AWAY the most. The skill is matching the right level to the stakes and the person\'s proven judgment — but first you have to know the dial has positions.',
          items: [
            'Tell — you decide alone and simply announce the decision',
            'Sell — you decide, then work to convince the team it\'s right',
            'Consult — you gather the team\'s input first, then you decide',
            'Agree — you and the team decide together, by consensus',
            'Advise — the team decides, but you give your opinion first',
            'Inquire — the team decides, then tells you what they chose',
            'Delegate — the team decides fully; you don\'t even need to be told',
          ],
          explain: 'The seven levels (Tell, Sell, Consult, Agree, Advise, Inquire, Delegate) are a dial, not a switch. Control shifts smoothly from "you decide, you announce" to "they decide, you don\'t even hear about it." The founder\'s job is to set the dial per decision: low for new people and high-stakes/irreversible calls, high for trusted people and reversible calls. Naming the level explicitly is what prevents both micromanagement (dial stuck low) and abdication (dial slammed to Delegate with no guardrails).',
        },
        {
          kind: 'categorize',
          prompt: 'Assign the right RACI role to each person on a single decision: "Ship a change to the checkout pricing display." Remember the load-bearing rule — exactly ONE Accountable.',
          buckets: ['Responsible (does the work)', 'Accountable (single owner, final say)', 'Consulted (input sought before)', 'Informed (told after)'],
          items: [
            { text: 'The engineer who writes and ships the pricing-display code', bucket: 'Responsible (does the work)' },
            { text: 'The product lead who owns conversion and answers for the outcome', bucket: 'Accountable (single owner, final say)' },
            { text: 'The finance person who must confirm it respects the margin floor', bucket: 'Consulted (input sought before)' },
            { text: 'The designer whose input on layout is sought before shipping', bucket: 'Consulted (input sought before)' },
            { text: 'The support team, who need to know once it\'s live to answer tickets', bucket: 'Informed (told after)' },
            { text: 'The founder, who wants a heads-up after big pricing-display swings', bucket: 'Informed (told after)' },
          ],
          explain: 'One decision, four role types, exactly one Accountable (the product lead). Responsible = the doer; Consulted = two-way input BEFORE the decision (finance guards the margin floor, design shapes layout); Informed = one-way notice AFTER (support and the founder). The failure mode this prevents: two people assuming they\'re accountable (turf war) or nobody assuming it (the decision rots). If you can\'t name the single A, you haven\'t actually delegated the decision yet.',
        },
        {
          kind: 'resource',
          title: 'Decision rights & delegation (working references)',
          items: [
            { label: 'Atlassian — RACI charts explained', url: 'https://www.atlassian.com/work-management/project-management/raci-chart', note: 'Clean, practical definition of the four roles with examples and templates.' },
            { label: 'CIO — The RACI matrix: your blueprint for project success', url: 'https://www.cio.com/article/287088/project-management-how-to-design-a-successful-raci-project-plan.html', note: 'How to design a RACI, plus the common failure modes (too many A\'s, no A at all).' },
            { label: 'Management 3.0 — The 7 Levels of Delegation & Delegation Poker', url: 'https://management30.com/practice/delegation-poker/', note: 'The delegation dial as a concrete team practice — including how to negotiate the level per decision.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Build a RACI for my hardest decision', kind: 'ask', question: 'Walk me through building a RACI for a specific recurring decision in my venture. Help me name the single Accountable, distinguish Consulted (input before) from Informed (told after), and catch the failure of having zero or multiple A\'s.' },
        { label: 'Set the delegation level for each report', kind: 'ask', question: 'For each of my direct reports and the decisions they touch, help me set the right level on the seven-level dial (Tell to Delegate) based on the stakes, reversibility, and their proven judgment — and tell me where I\'m currently micromanaging or abdicating.' },
        { label: 'A harder decision-rights case', kind: 'harder', concept: 'assigning decision rights when two teams both need authority over a shared resource (e.g. the design system, or the shared database schema) without creating two Accountables' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What is the single load-bearing constraint of a RACI matrix, and why does it matter?',
          options: [
            'Every task must have at least three Consulted people, to ensure buy-in',
            'Exactly one Accountable per decision — zero means it stalls with no owner, two or more means a turf war',
            'The Responsible and Accountable must always be the same person',
            'Everyone on the team must be Informed about every decision',
          ],
          answer: 1,
          explain: 'One and only one Accountable per row is the rule everything else hangs on. Zero A\'s = a decision no one owns, so it rots; multiple A\'s = conflicting owners, so it becomes a turf war. In the access-control reframe, Accountable is the write/owner capability, and just as a well-run system gives each critical resource exactly one root owner, a healthy org gives each decision exactly one A. Amazon\'s single-threaded owner is this rule as a staffing principle.',
        },
        {
          kind: 'mcq',
          prompt: 'Delegating "here are 8 tweaks, implement them and check with me before each ship" versus "you own conversion, decide and ship within these guardrails" — what\'s the key difference?',
          options: [
            'The first is faster because you stay involved in every step',
            'They\'re the same; both hand work to someone else',
            'The first delegates the task but keeps the decision right (you stay the bottleneck); the second delegates the outcome and the authority (you leave the critical path)',
            'The second is riskier and should be avoided until the company is large',
          ],
          answer: 2,
          explain: 'Task delegation hands off the typing but keeps the thinking — every decision still routes back through you, so you remain the bottleneck, just a slower one. Outcome delegation hands off the decision right along with the work, with explicit guardrails and an Informed channel, which actually removes you from the critical path. The unit of real delegation is a decision, not a chore.',
        },
        {
          kind: 'free',
          prompt: 'Pick one real recurring decision in your venture that currently routes through you. Write its RACI: name the single Accountable (not yourself, ideally), the Responsible doer(s), who is Consulted before, and who is Informed after. Then set the delegation level (Tell to Delegate) you\'ll use and justify it by the stakes and the person\'s proven judgment.',
          rubric: 'A strong answer: (1) picks a concrete, real recurring decision; (2) names exactly ONE Accountable and ideally moves it off the founder; (3) correctly distinguishes Responsible (doer), Consulted (two-way input before), and Informed (one-way after) with real people; (4) sets an explicit delegation level and justifies it by stakes, reversibility, and the person\'s track record — showing they treat delegation as a dial, not a switch. Penalize answers with multiple or zero Accountables, or that only delegate the task while keeping the decision right.',
        },
      ],
      commitSummary: 'no slot written — you can now delegate outcomes not tasks, write a RACI with exactly one Accountable, and set the delegation dial per decision instead of hovering or abdicating.',
    },

    // -----------------------------------------------------------------------
    {
      id: '23.4',
      module: 23,
      title: 'Escaping the founder bottleneck',
      estMinutes: 20,
      prerequisites: ['23.1', '23.2', '23.3'],
      artifactSlot: null,
      concept: `Everything in this module converges on one failure mode: **you.** The early-stage founder is, correctly, involved in everything — it's how the thing gets off the ground. But the very habits that made you indispensable at 3 people make you the bottleneck at 30. If every decision, every unblock, every "quick question" routes through you, then the company's maximum throughput is *your* throughput, no matter how many people you hire. You have built a system with one CPU and a growing queue.

The math is unforgiving, and it's math you already know. If a fraction $p$ of all decisions must pass through you — the serial section — then by **Amdahl's law** the most speedup you can ever get from adding people (parallel workers) is bounded by $\\frac{1}{p}$. If 30% of everything needs you, you cannot go more than about $3.3\\times$ faster than solo *no matter how many people you hire.* Hiring past that point doesn't add output; it adds queue. The only lever that actually scales the company is **shrinking $p$** — pushing decisions to the edge so less of the work has to touch you.

That is the whole job change of this stage: **from doing to designing.** Your product stops being the code and starts being *the system that produces the code* — the teams (23.1), the communication topology (23.2), and the decision rights (23.3) that let good outcomes happen without you in the loop. Concretely this means three moves. **Hire managers**, not just more ICs, once your span of control saturates — a manager is a router that absorbs the coordination load you can no longer carry. **Write things down**: the decision-rights doc, the "how we decide" defaults, the operating principles — because a rule that lives only in your head *requires your head* to apply it, which is the bottleneck restated. And replace **heroics with systems**: every time you personally save the day, ask what system, hire, or written default would have made your heroism unnecessary, and build *that* instead. Heroics feel great and guarantee you can never leave.`,
      reframe: {
        analogy: `The founder bottleneck is **Amdahl's law**, exactly. Your company is a program you're trying to speed up by throwing cores (hires) at it. But any program has a **serial fraction** that can't be parallelized, and here the serial fraction is *the decisions that must route through you.* Amdahl's law says the maximum speedup is $\\frac{1}{p}$ where $p$ is that serial fraction — so if 25% of all work needs the founder, the hard ceiling is $4\\times$, and the 20th hire is contending for the same single lock as the 5th. Adding cores past the point where the serial section dominates buys almost nothing but contention. The only move that raises the ceiling is **shrinking the serial fraction** — refactoring the "must go through the founder" decisions into ones the edge can make itself. Delegation is lock-free programming for your org.`,
        breaks: `Cores are interchangeable and instantly productive; **people are not.** A new hire has ramp-up, needs trust built before you can hand them a decision, and — unlike a thread — may make a *worse* decision than you would have at first, so naive parallelization can lower quality before it raises throughput (this is Brooks's law lurking again). Amdahl also assumes the serial fraction is *fixed*; yours isn't — the entire craft is that you can *choose* to shrink $p$ by designing systems, whereas a CPU can't rewrite its own serial section. Finally, some of your serial fraction *should* stay serial: a handful of decisions (core values, key executive hires, betting-the-company calls) genuinely warrant the founder and shouldn't be delegated to cut $p$. The goal isn't $p = 0$; it's driving $p$ down to the irreducible few decisions that truly need you.`,
      },
      workedExample: `**Google's founders hiring Eric Schmidt (2001) is a founder-bottleneck refactor at the top of the org.** Larry Page and Sergey Brin were brilliant technical founders whose fingerprints were on everything — and as Google scaled past a few hundred people, the reality (pushed hard by their investors, Kleiner Perkins and Sequoia) was that two founders in the loop on operational and organizational decisions had become a ceiling on the company's throughput. Their response was not to work harder; it was to *change the system*: they recruited Eric Schmidt, an experienced executive, as CEO in 2001 — the arrangement press at the time framed as "adult supervision" — so that a whole class of scaling and operational decisions no longer had to route through the two founders. This is real, public, and extensively documented history.

Read it as shrinking the serial fraction. The founders didn't stop mattering — they kept the decisions that genuinely needed them (product direction, the technical soul of the company) and *offloaded* the large class of operational decisions that were serializing on them into a leader whose job was exactly to own that load. In Amdahl terms, they cut $p$ by refactoring "must go through a founder" into "goes through the CEO and his org," raising the company's speedup ceiling dramatically. The transferable move for you at your scale is identical in shape, if smaller: identify the classes of decisions that are serializing on you, decide which few *truly* need you, and hire or delegate the rest into people and written systems that own them. The point is not to matter less — it's to make sure the company's throughput isn't capped at yours. (Source: widely documented Google history, e.g. the 2001 Schmidt hiring and contemporaneous reporting on the "adult supervision" arrangement.)`,
      branch: {
        scenario: `Your company is 25 people and you, the founder, are drowning. Your calendar is wall-to-wall: you're the final approver on hires, the tie-breaker on every product debate, the person unblocking three teams a day, and the one who "just needs to review this before it ships." You work 70-hour weeks and the company is *still* getting slower. What actually fixes this?`,
        choices: [
          {
            label: 'Work harder and get more disciplined with your calendar — better time management will clear the backlog.',
            correct: false,
            consequence: `**Optimizing the constant factor on an Amdahl ceiling.** However heroically you manage your calendar, if a large fraction of all decisions must route through you, the company\'s throughput is capped at yours — and a maxed-out founder is a maxed-out bottleneck. Time management shaves the constant; it can\'t change the growth rate. You\'re trying to run the serial section faster instead of shrinking it.`,
          },
          {
            label: 'Shrink the serial fraction: hire/appoint managers to absorb coordination, write down decision-rights and "how we decide" defaults, and push decisions to the edge — keeping only the few that truly need you.',
            correct: true,
            consequence: `**Correct — this is the from-doing-to-designing move.** You attack $p$ directly: managers act as routers that absorb the coordination you can\'t carry; written decision-rights let people decide without your head in the loop; and pushing decisions to the edge raises the whole company\'s speedup ceiling. You keep the irreducible few (values, key hires, bet-the-company calls) and refactor the rest out of yourself. That\'s the only lever that scales — everything else just rearranges the queue.`,
          },
          {
            label: 'Hire five more senior ICs so there are more capable hands to take on the work.',
            correct: false,
            consequence: `**More cores against an unchanged serial section.** If every decision still routes through you, five more ICs mostly add five more things waiting in your queue — contention for the same lock, not throughput. This is Brooks\'s law territory: without shrinking the founder-serial fraction first, added people can make things slower. Fix the decision-rights topology before (or as) you add mass, or you\'re just growing the backlog.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'scenario',
          title: 'From hero to designer: three unblock requests',
          intro: 'It\'s a normal Tuesday and three people ping you to unblock them. Each ping is a fork: be the hero (solve it now, stay the bottleneck) or be the designer (build the system so this class of ping stops reaching you). Watch how shrinking the serial fraction feels in the moment.',
          decisions: [
            {
              situation: 'An engineer asks: "Can you approve this $200 SaaS tool I need?" — the fourth such ask this week.',
              options: [
                { label: 'Set a written spending policy: any tool under $500 needs no approval; over $500 needs your lead\'s sign-off. Then never field this ping again.', correct: true, outcome: 'Correct — you refactored a recurring decision out of your serial section. A one-time written default now handles every future instance without your head in the loop. That is designing the system instead of being it.' },
                { label: 'Approve it quickly — it\'s only $200, and being responsive keeps people moving.', correct: false, outcome: 'The hero move that guarantees the fifth ping. Fast approval feels helpful, but you\'ve confirmed that every small spend must route through you — you kept p high. Responsiveness on a recurring decision is the bottleneck wearing a friendly face.' },
              ],
            },
            {
              situation: 'A team lead asks you to break a tie on a product-detail debate their squad has been having.',
              options: [
                { label: 'Break the tie yourself so they stop being blocked — you have the context and it\'s quick.', correct: false, outcome: 'You just taught the squad that ties route to the founder — so the next tie will too. Being the tie-breaker on squad-level details is exactly the serial fraction you need to shrink. Quick and helpful, but it re-installs you as the lock.' },
                { label: 'Hand the decision right to the team lead as the single Accountable, with a guardrail, so their squad\'s ties resolve at the squad from now on.', correct: true, outcome: 'Correct — you delegated the outcome and the authority, not just this one call. The lead now owns squad-level ties (with a clear guardrail), so this entire class of decision stops reaching you. Amdahl\'s p just dropped.' },
              ],
            },
            {
              situation: 'You realize you personally "saved the day" three times this week with late-night fixes, and it felt great.',
              options: [
                { label: 'Keep it up — your willingness to jump in is a competitive advantage and shows the team you\'re all-in.', correct: false, outcome: 'Heroics feel great and guarantee you can never leave. Each save proves the system depends on you and quietly discourages building the thing that would make your heroism unnecessary. A company that needs its founder to save the day hasn\'t been designed — it\'s been rescued.' },
                { label: 'For each save, ask what hire, system, or written default would have prevented the need — and build THAT this week.', correct: true, outcome: 'Correct — this is the systems-over-heroics discipline. Every heroic save is a bug report about a missing system. Converting each one into a durable fix is how you design yourself out of the critical path instead of decorating it.' },
              ],
            },
          ],
        },
        {
          kind: 'platformTask',
          title: 'Write your first decision-rights & delegation doc',
          body: 'This is the milestone of the module: turn "everything routes through me" into a written system. Create a short decision-rights document for YOUR venture. List the 5-10 recurring decisions that currently touch you. For each, name the single Accountable (move it off yourself wherever you honestly can), the delegation level you\'ll use (Tell to Delegate), and any guardrail. Then explicitly list the few decisions that SHOULD stay with you (values, key hires, bet-the-company calls) so the boundary is deliberate. Save it and share it with your team — a decision-rights doc that lives only in your head still requires your head, which is the bottleneck restated.',
          links: [
            { label: 'Atlassian — RACI chart (use it to structure each decision\'s roles)', url: 'https://www.atlassian.com/work-management/project-management/raci-chart' },
            { label: 'Management 3.0 — 7 Levels of Delegation (set the level per decision)', url: 'https://management30.com/practice/delegation-poker/' },
          ],
          steps: [
            'List the 5-10 recurring decisions that currently route through you (approvals, tie-breaks, unblocks, sign-offs).',
            'For each, name the single Accountable owner — and honestly try to make it someone other than you.',
            'Set the delegation level (Tell to Delegate) per decision, matched to stakes, reversibility, and the person\'s track record.',
            'Add any guardrail (e.g. "under $500, no approval"; "don\'t touch pricing without me").',
            'Separately list the few decisions that SHOULD stay with you, so keeping them is a deliberate choice, not a default.',
            'Write the doc, share it with your team, and record its location / one-line summary below.',
          ],
          taskKey: '23.4#decision-rights',
          proofLabel: 'Where your decision-rights doc lives + the one decision you were most surprised you could move off yourself',
          proofKind: 'text',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'Scaling yourself out of the bottleneck (the reference shelf)',
          items: [
            { label: 'Team Topologies (Skelton & Pais) — official book site', url: 'https://teamtopologies.com/book', note: 'The canonical modern text on structuring teams for fast flow: four team types, three interaction modes, and Conway\'s law applied deliberately.' },
            { label: 'The Great CEO Within (Matt Mochary)', url: 'https://www.amazon.com/Great-CEO-Within-Tactical-Building/dp/0578599287', note: 'The tactical playbook for founders scaling from doing to designing — accountability, delegation, and operating systems. Written for technical first-time founders.' },
            { label: 'Melvin Conway — Conway\'s Law (author\'s own page)', url: 'https://www.melconway.com/Home/Conways_Law.html', note: 'The origin of the idea that your org structure ships in your product — the through-line of this whole module.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Estimate my serial fraction p', kind: 'ask', question: 'Help me estimate what fraction of decisions currently route through me, compute the rough Amdahl ceiling on how much faster my company can go, and identify which classes of decision are contributing most to that serial fraction.' },
        { label: 'Draft my decision-rights doc', kind: 'ask', question: 'Walk me through drafting my decision-rights doc: help me list the recurring decisions that touch me, assign a single Accountable and a delegation level to each, set guardrails, and decide the few that should genuinely stay with me.' },
        { label: 'Spot my heroics-instead-of-systems habit', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'By the Amdahl\'s-law framing, if 25% of all decisions must route through the founder, what is the hard ceiling on how much faster the company can go than the founder working solo — and what raises it?',
          options: [
            'No ceiling — just keep hiring; more people always means more speed',
            'About 4x, and the only lever that raises it is shrinking the founder\'s serial fraction (pushing decisions to the edge)',
            'About 25x, raised by hiring 25 people',
            'The ceiling depends only on how many hours the founder works',
          ],
          answer: 1,
          explain: 'Amdahl\'s law caps speedup at 1/p, so p = 0.25 gives a hard ceiling of about 4x no matter how many people you hire — past that, new hires mostly add queue and contend for the same "founder lock." The only lever that raises the ceiling is shrinking p: refactoring "must go through the founder" decisions into ones the edge can make via managers, written decision-rights, and delegation.',
        },
        {
          kind: 'mcq',
          prompt: 'Where does the Amdahl\'s-law analogy for the founder bottleneck most importantly BREAK?',
          options: [
            'Companies can\'t be sped up at all, unlike programs',
            'The serial fraction p is fixed, just like in a real CPU',
            'Unlike a CPU\'s fixed serial section, the founder can CHOOSE to shrink p by designing systems — and a few decisions (values, key hires) should deliberately stay serial',
            'Adding people to a company is always instant and cost-free, unlike adding cores',
          ],
          answer: 2,
          explain: 'A CPU can\'t rewrite its own serial section, but a founder can: the whole craft is deliberately shrinking p by building teams, topology, and written decision-rights. Two related breaks: people (unlike cores) have ramp-up and may decide worse at first (Brooks\'s law), and the goal is not p = 0 — a few decisions (core values, key executive hires, bet-the-company calls) should stay with the founder on purpose. Drive p down to the irreducible few, not to zero.',
        },
        {
          kind: 'free',
          prompt: 'Do an honest bottleneck audit of yourself. (1) List three classes of decision that currently route through you and roughly estimate your serial fraction p. (2) For each, state whether you\'ll shrink it (via a manager, a written default, or delegating the decision right) or deliberately keep it, and why. (3) Describe the last time you were a "hero" and name the system, hire, or written default that would have made that heroism unnecessary.',
          rubric: 'A strong answer: (1) names three CONCRETE recurring decision classes and gives a rough, honest p; (2) for each, chooses shrink-vs-keep with a specific mechanism (named manager, written default with a threshold, delegated decision right with an Accountable) and reserves "keep" for genuinely founder-level calls (values, key hires, bet-the-company); (3) turns a real heroic moment into a durable system/hire/default, showing they grasp systems-over-heroics. Penalize answers that respond to overload with "work harder / manage my calendar better / just hire more ICs" without shrinking the serial fraction, and penalize p = 0 fantasies that delegate away decisions that should stay with the founder.',
        },
      ],
      commitSummary: 'no slot written — but your first decision-rights doc is now written and shared: you\'ve started refactoring yourself out of the critical path, shrinking the serial fraction so the company\'s throughput is no longer capped at yours.',
    },
  ],
}
