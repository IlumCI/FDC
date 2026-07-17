import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 20 — Power & the winning coalition (Dictator's Handbook) · Season 2
//
// A DESCRIPTIVE model of how organizational power actually works, drawn from
// selectorate theory (Bueno de Mesquita & Smith, "The Dictator's Handbook",
// popularized by CGP Grey's "The Rules for Rulers"). The point is clarity, not
// cynicism: you learn how coalitions, keys to power, and control of the
// "treasure" really operate so you can build a FAIR, durable company, read a
// board or cap table with clear eyes, and never get quietly ousted from your
// own venture — AND so you can recognize and resist bad actors who use these
// levers extractively. The ethical line is explicit throughout: understand the
// machine to keep it honest, not to strip-mine it.
// ===========================================================================

export const module20: Module = {
  id: 20,
  season: 2,
  title: 'Power & the winning coalition (Dictator\'s Handbook)',
  goal: 'See organizational power as a system — coalitions, keys to power, and control of the treasure — so you can build a fair, durable company and never get quietly ousted from your own.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '20.1',
      module: 20,
      title: 'The three groups: nominal, real, and winning coalition',
      estMinutes: 16,
      prerequisites: [],
      artifactSlot: null,
      concept: `Selectorate theory (Bueno de Mesquita & Smith) says every organization — a dictatorship, a democracy, a startup — is governed by the same structure: **three nested groups of people whose support a leader depends on.**

- **Nominal selectorate** — everyone with *some* formal say, however weak. In a company: every shareholder on the cap table, every option holder, everyone who could in principle vote. The book calls these the *interchangeables* — large, mostly powerless, easily replaced.
- **Real selectorate** — those whose support *actually* matters right now: the people who genuinely choose and sustain leadership. Your active board members, your major-stake investors, the cofounder whose departure would break the company. The book's *influentials*.
- **Winning coalition** — the **minimal set whose support you truly cannot lose** without losing control. Not everyone who matters — the smallest group that, if aligned against you, ends you (or that, aligned with you, keeps you in power). The book's *essentials*.

The single most important number in the whole theory is the **size of the winning coalition** relative to the selectorate. A leader answerable to a *small* coalition can rule by rewarding a handful of insiders with private spoils. A leader answerable to a *large* coalition must deliver broad public goods, because you can't privately bribe that many people. That ratio — not slogans about culture — predicts how an organization actually behaves.`,
      reframe: {
        analogy: `Power is a **distributed-consensus problem**. Control isn't a scalar you "have"; it's a **quorum** you can still assemble. The nominal selectorate is every node in the cluster. The real selectorate is the set of nodes that are actually online and voting. The winning coalition is the **minimum quorum** — the smallest set of votes that commits a decision.

Just like Raft or Paxos, what keeps you leader is not owning the most nodes in the abstract; it's reliably reaching quorum on the writes that matter. Lose the quorum — a board majority, a key signer — and the fact that you nominally "founded" the cluster is irrelevant: the next commit happens without you. Reading power this way tells you exactly which nodes to keep healthy.`,
        breaks: `Consensus nodes are stateless and interchangeable; **people are not.** A quorum algorithm assumes votes are fungible and preferences fixed — but your coalition members have loyalty, ethics, memory, and their own goals, and they can be *persuaded*, not just counted. A node never feels betrayed; a cofounder does. Worse, treating humans as nodes is the exact failure mode this module warns against — the extractive leader who optimizes the quorum and forgets the people. Use the analogy to *locate* power, never to justify treating anyone as a replaceable vote.`,
      },
      workedExample: `**Meridian** (the CI-insights startup) has this ownership after a seed round:

| Holder | Ownership | Board seat? |
|---|---|---|
| Ada (founder/CEO) | 38% | Yes |
| Ben (cofounder/CTO) | 24% | Yes |
| Seed fund | 18% | Yes |
| Angel pool (6 people) | 8% | No |
| Employee option pool | 12% | No |

**Nominal selectorate:** all of them — every share and option carries a formal vote somewhere. That's ~15 people. Most have no real leverage.

**Real selectorate:** Ada, Ben, and the seed fund partner. These three actually decide direction; the angels and option holders follow.

**Winning coalition:** on the 3-seat board, ordinary decisions pass on a simple majority — **2 of 3 seats.** So the *minimal* set that controls Meridian is any two of {Ada, Ben, Seed}. Ada does **not** hold unilateral control despite being CEO and largest holder: if Ben and the seed fund align, they are a winning coalition *against* her. Her real job is to make sure she's always inside the coalition, not outside it — ideally by keeping the company healthy enough that no insider *wants* to move against her, not by scheming to shrink the room.`,
      branch: {
        scenario: `A first-time founder insists: "I own 51% of the shares, so I'm in complete control — the board is a formality." The cap table shows she owns 51% of *common* stock, but the company has a 5-seat board (2 founders, 2 investors, 1 independent) and the investors hold protective provisions requiring their consent for financings, budgets, and executive hires. What's the accurate read?`,
        choices: [
          {
            label: 'She\'s right — majority share ownership is control, full stop.',
            correct: false,
            consequence: `**Instructive miss.** Share majority controls *shareholder* votes, but day-to-day power flows through the **board** and through **consent rights**, not the cap table alone. Her winning coalition for most real decisions is on that 5-seat board (needs 3), and the protective provisions hand investors a veto on the decisions that matter most. Ownership % is necessary context, not the whole map.`,
          },
          {
            label: 'Control lives wherever the binding decisions are made — here, the board and the consent rights, not just the share count.',
            correct: true,
            consequence: `**Correct.** The winning coalition is decision-specific. Hiring an exec or approving a budget runs through the board (3 of 5 seats) *and* investor consent — so her 51% doesn't settle those. Reading power means asking, for each decision that matters, *which minimal set of people can say yes or no.* That's what selectorate theory forces you to do instead of waving a cap-table percentage around.`,
          },
          {
            label: 'The board and consent rights are meaningless because she can just fire the board.',
            correct: false,
            consequence: `**Instructive miss.** Shareholders elect directors, but investor directors typically hold their seats by contract (voting agreements), and protective provisions can't be swept aside by common-stock majority. Believing you can unilaterally "fire the board" is exactly how founders discover — too late — that their real coalition was smaller than they thought.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Classify each Meridian stakeholder into the selectorate layer that best describes their actual power over company decisions.',
          buckets: ['Nominal selectorate', 'Real selectorate', 'Winning coalition'],
          items: [
            { text: 'An employee holding 0.3% in vested options, no board seat', bucket: 'Nominal selectorate' },
            { text: 'One of six angels holding ~1% each, no information rights', bucket: 'Nominal selectorate' },
            { text: 'The seed fund partner who holds one of the three board seats', bucket: 'Winning coalition' },
            { text: 'The CEO/founder, who holds one of the three board seats', bucket: 'Winning coalition' },
            { text: 'A respected senior investor with no seat but whose opinion sways the board', bucket: 'Real selectorate' },
            { text: 'The cofounder/CTO whose exit would collapse the product, holds a board seat', bucket: 'Winning coalition' },
            { text: 'A former advisor still on the cap table with 0.5%, now disengaged', bucket: 'Nominal selectorate' },
          ],
          explain: 'Nominal = everyone with a formal but negligible say (small option/angel holders, a disengaged advisor). Real selectorate = people who genuinely shape outcomes even without a vote (the influential seatless investor). Winning coalition = the essentials — here the three board members, because ordinary decisions pass on a 2-of-3 majority, so *any two of them* form a minimal winning coalition and no single one is individually decisive. (This is exactly the worked example: control is any two of the three seats.) The same person can move between layers as the rules change — a new financing, a lost board seat.',
        },
      ],
      tutorHooks: [
        { label: 'Map MY real winning coalition', kind: 'ask', question: 'Given my cap table and board (or my best description of them), help me identify my nominal selectorate, real selectorate, and the minimal winning coalition for each major decision type (financing, hiring, pivot).' },
        { label: 'Harder: multi-class shares & vetoes', kind: 'harder', concept: 'locating the winning coalition when there are multiple share classes, protective provisions, and a voting agreement' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In selectorate theory, the "winning coalition" is best defined as:',
          options: [
            'Everyone who owns any equity in the company',
            'The minimal set of supporters whose backing is required to keep control',
            'The largest group of stakeholders by headcount',
            'Only the founder and CEO',
          ],
          answer: 1,
          explain: 'The winning coalition is the *smallest essential* set — the minimal group that, aligned with you, keeps you in power (and, aligned against you, removes you). It is not everyone with equity (that\'s the nominal selectorate) nor merely the CEO.',
        },
        {
          kind: 'mcq',
          prompt: 'A leader answerable to a very SMALL winning coalition, relative to a large selectorate, will tend to:',
          options: [
            'Deliver broad public goods that benefit everyone',
            'Reward a few insiders with private spoils and neglect the broader group',
            'Automatically be more ethical than a leader with a large coalition',
            'Have no ability to make any decisions',
          ],
          answer: 1,
          explain: 'The core prediction: small coalition ⇒ you can retain power by privately rewarding a handful of essentials, so broad public goods are under-supplied. Large coalition ⇒ you must deliver public goods because you can\'t privately bribe that many people. The coalition-to-selectorate ratio predicts behavior.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR company (or a company you know well), name the nominal selectorate, the real selectorate, and the actual winning coalition for the decision "approve a new financing round." Who is in the minimal set, and is anyone surprisingly in or out of it?',
          rubric: 'Strong answer: (1) correctly separates the three layers rather than conflating ownership % with control; (2) identifies a *minimal* winning coalition (e.g. specific board seats plus any consent-right holders), not just "the shareholders"; (3) accounts for board structure and/or protective provisions if present; (4) surfaces at least one non-obvious member (a seatless-but-influential investor, a veto holder, or a founder who is surprisingly NOT decisive).',
        },
      ],
      commitSummary: 'concept only — you begin building your own power map here and formalize control in lesson 20.3.',
    },

    // -----------------------------------------------------------------------
    {
      id: '20.2',
      module: 20,
      title: 'The five rules of staying in power',
      estMinutes: 18,
      prerequisites: ['20.1'],
      artifactSlot: null,
      concept: `The book distills how leaders survive into five rules. They are stated cynically — as what a self-interested ruler *does*. We read them **descriptively** (this is how the machine works) and then draw the **ethical** version a founder should actually follow.

The five rules, as written:

1. **Keep your winning coalition as small as possible.** Fewer essentials to satisfy = cheaper, tighter control.
2. **Keep your nominal selectorate as large as possible.** A big pool of replaceable "interchangeables" means any essential who defects can be swapped out — which keeps essentials loyal *through fear of replacement*.
3. **Control the flow of revenue — the "treasure."** Whoever controls the money controls who gets paid, and therefore who stays loyal.
4. **Pay your key supporters just enough** to keep them loyal — no more. Overpay and you waste treasure; underpay and they defect.
5. **Don't take money from your supporters to give to the people.** Extractive rulers keep the treasure flowing *to the coalition*, not to the broad public.

**The ethical inversion for founders:** the same knobs, turned the other way. Keep your coalition *small enough to move fast but broad enough to be fair* (don't over-concentrate power in a way that lets one person hijack the company). Grow the "selectorate" (employees, shareholders) as people with *real* stake and voice, not as interchangeable threats. Control the treasure **transparently** — a clean cap table and budget you don't quietly divert. Pay supporters *fairly and durably* by aligning incentives, and **don't over-promise equity** you'll regret. And crucially: invest the treasure in **public goods** (culture, product, everyone's upside), because a company run for a tiny extractive clique rots. Knowing the extractive playbook is exactly what lets you spot it being run on you.`,
      reframe: {
        analogy: `The "treasure" is your **resource allocator** — the scheduler that decides which processes get CPU. In selectorate terms, staying in power is keeping *scheduling authority*: control which jobs (people, projects) receive the budget, equity, and access. Rule 3 ("control the flow of revenue") is literally "own the scheduler." Rules 1 and 4 are a **capacity-planning** problem: a smaller coalition is a smaller set of high-priority jobs you must always keep fed; paying "just enough" is setting each job's resource quota to the minimum that prevents it from migrating to another cluster (a competitor, a coup).

Read defensively, this tells you where a hostile actor will strike: they don't fight you head-on, they **capture the scheduler** — get signing authority, control the raise, own the board agenda — and then reallocate loyalty one budget line at a time.`,
        breaks: `A scheduler's jobs have no agency — they don't resent their quota or unionize. People do. "Pay just enough" treats humans as utility-maximizing processes with a defection threshold, but real supporters have loyalty, fairness instincts, and long memories; squeeze them to the theoretical minimum and you breed the exact disloyalty the rule tries to prevent. The extractive reading also ignores that in a company the "treasure" is **positive-sum** — invested in public goods it *grows*, unlike a fixed national budget. The math models control; it does not model trust, and trust is what actually makes a company durable.`,
      },
      workedExample: `**Two founders, same starting point, opposite strategies.**

*Extractive Erin* runs the playbook literally. She keeps her coalition tiny (herself + one pliant board ally), controls all financial info personally, pays her cofounder "just enough" with a thin equity grant and a 5-year cliff-heavy vest, and routes company cash through vendors she owns. Short-term, she has airtight control. But the CTO — underpaid relative to his indispensability — is a single point of failure sitting *outside* the winning coalition. When a competitor offers him more, he leaves and takes the roadmap. Erin controls a hollow company.

*Aligned Ada* uses the *same map* ethically. She keeps decision-making tight (a focused 3-person board) but makes her key people **secure**: the CTO gets fair equity with standard vesting and a board seat, so he's *inside* the coalition and has no incentive to defect. The treasure is transparent — a shared budget and a clean cap table nobody has to reverse-engineer. She spends on public goods (real option pool, honest culture). Her control is *softer* per-decision but far more **durable**, because no essential person is both indispensable and disgruntled.

The lesson: the five rules are a lens. The extractive reading buys control and loses resilience; the ethical inversion trades a little unilateral control for a company that doesn't quietly rot or oust you.`,
      branch: {
        scenario: `Your lead investor proposes: "Let's keep the option pool small and hand out equity very sparingly — dilution is the enemy, and hungry employees work harder." You've just learned rules 1 and 4 (small coalition, pay just enough). Is this good advice?`,
        choices: [
          {
            label: 'Yes — minimal equity out is textbook rule 4, so it must be optimal.',
            correct: false,
            consequence: `**Instructive miss — you\'ve read the rule extractively.** "Pay just enough" minimizes cost only in a static, adversarial model. Under-granting equity to the people who *are* your product leaves them indispensable AND disgruntled — the worst quadrant. It also signals a company run for insiders, which repels the strong hires you most need. The rule describes a lever; it doesn\'t say squeeze it to zero.`,
          },
          {
            label: 'Push back: grant fairly to the people who are genuinely essential, and keep the pool honest — retention and alignment beat squeezing.',
            correct: true,
            consequence: `**Correct.** The ethical inversion of rule 4 is *align, don't squeeze.* Your essentials (early engineers, key hires) should sit **inside** the coalition with enough stake that leaving is irrational. Chronic under-granting to save a few points of dilution is how you lose the exact people whose defection is catastrophic. You still avoid *over*-promising equity you\'ll regret — fairness, not maximalism, in both directions.`,
          },
          {
            label: 'Ignore equity entirely and just pay high salaries instead.',
            correct: false,
            consequence: `**Instructive miss.** Cash and equity solve different problems: salary buys effort now, equity buys *alignment and retention* over the long arc where your essentials could otherwise defect. Swapping all equity for salary strips the mechanism that keeps key people inside the coalition through the years that matter, and burns runway you may not have.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'rank',
          prompt: 'Order the five "rules of staying in power" the way the theory prioritizes them for a leader trying to secure and hold control — from the highest-leverage rule to the lowest.',
          items: [
            'Control the flow of the treasure (whoever controls the money controls loyalty)',
            'Keep your winning coalition as small as possible',
            'Keep your nominal selectorate as large as possible (so essentials fear replacement)',
            'Pay your key supporters just enough to keep them loyal — no more',
            'Don\'t divert the treasure to the broad public at your coalition\'s expense',
          ],
          explain: 'The theory\'s logic: first secure the money (rule 3) — without the treasure you can pay no one and control nothing. Then shrink the set of people you must pay (small coalition) so the treasure stretches. Then enlarge the replaceable pool (large selectorate) so your essentials stay loyal through fear of being swapped out. Then tune each payment to the minimum that prevents defection. The "don\'t redistribute to the public" rule is last — it\'s the *consequence* of the first four, the spending posture that falls out once control is secured. (Ethically, a founder inverts each: transparent treasure, fair coalition, real stake for people, and deliberate investment in public goods.)',
        },
        {
          kind: 'numeric',
          prompt: 'After a Series A your board expands to 7 seats: 2 founders, 2 investor directors, and 3 independents. Ordinary board resolutions pass on a simple majority. What is the minimum number of seats a single aligned voting bloc must control to be guaranteed to pass any ordinary resolution?',
          answer: 4,
          tolerance: 0,
          unit: 'seats',
          explain: 'Simple majority of 7 is any number greater than 3.5, i.e. 4 seats. That is the minimum winning coalition on this board. Notice neither the 2 founders nor the 2 investors control it alone — the 3 independents are the swing, which is exactly why who nominates and controls "independent" seats is one of the most contested terms in a financing.',
        },
      ],
      tutorHooks: [
        { label: 'Which rule is being run on ME?', kind: 'ask', question: 'Describe a power dynamic I\'m worried about (a cofounder, investor, or exec). Which of the five rules might they be running, and what would the ethical counter-move be?' },
        { label: 'Harder: coalition math with swing seats', kind: 'harder', concept: 'minimum winning coalition and swing-vote power when board seats are unevenly nominated across share classes' },
        { label: 'Critique my equity plan', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why does the theory say a leader wants the nominal selectorate (the pool of "interchangeables") to be LARGE?',
          options: [
            'Because more shareholders always means more revenue',
            'Because a large replaceable pool means any essential who defects can be swapped out, keeping essentials loyal through fear of replacement',
            'Because large groups are easier to keep informed',
            'Because it forces the leader to provide public goods',
          ],
          answer: 1,
          explain: 'A big pool of interchangeables makes every essential replaceable. The credible threat "I can swap you out" is what keeps the small winning coalition loyal and cheap. (The ethical founder builds the opposite: people with real, secure stake — loyalty through alignment, not fear.)',
        },
        {
          kind: 'mcq',
          prompt: 'The single most foundational of the five rules — the one the others depend on — is:',
          options: [
            'Pay supporters just enough',
            'Control the flow of the treasure (the revenue)',
            'Keep the selectorate large',
            'Avoid redistributing to the public',
          ],
          answer: 1,
          explain: 'Control of the treasure is foundational: if you don\'t control the money, you can\'t pay anyone, and every other rule (who to pay, how much, whom to reward) is moot. Defensively, this is why capturing signing/financial authority is a hostile actor\'s first move.',
        },
        {
          kind: 'free',
          prompt: 'Take ONE of the five rules and write both its extractive reading and its ethical inversion for a founder. Then give a concrete action you would take in your own company that follows the ethical version.',
          rubric: 'Strong answer: (1) states one rule accurately in its descriptive/extractive form; (2) articulates the ethical inversion (e.g. control-the-treasure ⇒ transparent budget & clean cap table; pay-just-enough ⇒ align fairly, don\'t squeeze); (3) gives a specific, plausible action in the learner\'s own context; (4) shows understanding that the SAME lever can build fairness or extraction depending on how it\'s turned.',
        },
      ],
      commitSummary: 'concept only — you apply this to real board and cap-table control in lesson 20.3.',
    },

    // -----------------------------------------------------------------------
    {
      id: '20.3',
      module: 20,
      title: 'Coalitions in practice: boards, cofounders, cap tables',
      estMinutes: 20,
      prerequisites: ['20.1', '20.2'],
      artifactSlot: null,
      concept: `Control in a company is won and lost through three concrete instruments — this is where the theory touches ground.

- **Board seats.** The board hires and fires the CEO, approves budgets and financings, and sets strategy. Board *composition* — not share count — is where most control battles are actually decided. Count seats, and count *who nominates each seat* (a "independent" seat controlled by investors is not independent).
- **Voting thresholds & protective provisions.** Ordinary matters pass on a simple board or shareholder majority; big matters (new financings, selling the company, changing share classes) often need *super*majorities or specific-class consent. Protective provisions give investors a **veto** far larger than their ownership %. Your winning coalition is *decision-specific*: the minimal set for a routine hire differs from the minimal set to sell the company.
- **Information.** The person who controls the numbers, the narrative, and the board agenda shapes what the coalition even votes on. Rule 3 ("control the treasure") shows up in practice as *control of information about the treasure.* An honest founder counters this with radical transparency; a bad actor exploits opacity.

The healthy posture: design a **legible** power structure — everyone can see who decides what — and keep your essentials aligned so control is *earned by the company being worth backing*, not manufactured by hiding the ball. That's how you stay in without ever having to play dirty.`,
      reframe: {
        analogy: `A cap table plus a board is a **permissions and quorum config**. Shares are principals; board seats are the members of the committee that must reach quorum to commit privileged operations; protective provisions are **explicit deny rules** that override a majority ("this operation additionally requires the Series A role's approval"). Reading control is reading the effective ACL: for each sensitive action, evaluate *which principals must jointly approve.* A founder who only reads the ownership column is like an engineer reading only file ownership and missing the sudoers file — the real authority is in the rules layered on top.`,
        breaks: `An access-control system evaluates deterministically and never changes its mind; a board is people who negotiate, trade favors, and can be *persuaded* between meetings. ACLs don't have relationships, reputations, or a sense of betrayal — and they can't call each other before the vote. Modeling the board as a permission matrix tells you the *floor* of who must formally consent, but the actual outcome rides on trust, alignment, and how you\'ve treated people. The config tells you who *can* block you; it doesn\'t tell you who *will* stand with you when it matters — that\'s earned, not configured.`,
      },
      workedExample: `**Meridian, Series A.** The founders start with a 3-seat board (Ada, Ben, seed investor). The Series A lead wants: a **5-seat** board (2 founders, 2 investors, 1 mutually-agreed independent), plus protective provisions requiring **investor consent** for any future financing, sale, or budget over a threshold.

Read the coalition math for each decision *after* the round:

- **Routine hire / ordinary resolution:** simple majority of 5 = **3 seats.** Any two founders + one other. Founders + the independent = 3 ⇒ founders can still run the company day-to-day *if* they hold the independent.
- **New financing or sale:** simple board majority *plus* investor protective consent. Now the 2 investor directors hold an effective **veto** regardless of the 3–2 seat math. The winning coalition for "big" decisions **includes the investors necessarily.**
- **Who controls the independent?** If the "mutually agreed" independent is really investor-friendly, the board tilts 3–2 against founders on contested ordinary matters too. This single seat is worth more negotiation than a point of valuation.

**The founder's move:** accept investor consent on genuinely major matters (normal and fair), but fight to keep the independent *genuinely* independent and to scope protective provisions narrowly. That preserves a founder-controlled coalition for operations while giving investors legitimate protection on existential decisions — a fair, durable split, not a hijack in either direction.`,
      branch: {
        scenario: `You (CEO) and your cofounder disagree on direction. Your cofounder quietly proposes to the two investor directors that they replace you as CEO at the next board meeting — on a 5-seat board where they'd need 3 votes (cofounder + 2 investors). You hear about it two days before. What is the *healthy* response?`,
        choices: [
          {
            label: 'Pack the board fast — rush an ally into the independent seat before the meeting to block them.',
            correct: false,
            consequence: `**Instructive miss.** Manufacturing a rushed board change to win a vote is exactly the extractive play this module teaches you to *recognize*, not run. Even if procedurally possible, it torches trust with investors and your cofounder, and boards remember who plays dirty. You might win the vote and lose the company\'s cohesion — and your reputation for the next raise.`,
          },
          {
            label: 'Go to the board first with transparency: surface the disagreement, make your case on the merits, and address the cofounder relationship directly.',
            correct: true,
            consequence: `**Correct.** The durable coalition is one that backs you because the company is worth backing. Get ahead of it honestly: present the strategic disagreement to the board yourself, show your reasoning and results, and try to repair or clarify the cofounder relationship. If the board still moves against you on the merits, that\'s a legitimate outcome of a legible structure — and far better than "winning" via a maneuver that poisons every future interaction.`,
          },
          {
            label: 'Do nothing — you\'re the founder, they\'d never actually remove you.',
            correct: false,
            consequence: `**Dangerous miss.** "They\'d never" is how founders get ousted. On a 5-seat board a cofounder + 2 investors *is* a winning coalition, and CEO founders are removed regularly. Reading the coalition math is precisely what tells you this is a live threat you must engage — calmly and honestly, but engage.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'scenario',
          title: 'A contested board vote',
          intro: 'Meridian has a 5-seat board: Ada (CEO), Ben (CTO), the seed investor, the Series A investor, and one independent. A pivotal vote is coming on whether to accept an acquisition offer that is great for investors (guaranteed return) but mediocre for the team and mission. Ada wants to keep building; the investors lean toward selling. Play the coalition, ethically.',
          decisions: [
            {
              situation: 'First: how should Ada approach the independent director, whose vote likely decides it?',
              options: [
                {
                  label: 'Present the honest case — the growth plan, the numbers, and the risk — and let the independent weigh it on the merits.',
                  correct: true,
                  outcome: 'Right. The independent seat exists to be persuaded by reasoning, not captured. An honest, well-argued case is both the ethical move and the one most likely to earn a durable ally. If you lose on the merits, the structure worked as intended.',
                },
                {
                  label: 'Offer the independent a side sweetener (extra advisory shares) contingent on voting your way.',
                  correct: false,
                  outcome: 'This is coalition-buying — the extractive rule 4 in miniature, and likely a breach of the independent\'s duty and yours. It corrupts the one genuinely neutral seat and, if surfaced, destroys your standing with the whole board.',
                },
                {
                  label: 'Skip the independent and just whip the founder-aligned votes to force a deadlock.',
                  correct: false,
                  outcome: 'Engineering a deadlock ignores the person the structure designed to break ties fairly, and a stalemated board on a live acquisition invites a governance crisis. You avoid the argument instead of winning it.',
                },
              ],
            },
            {
              situation: 'The investors argue their fiduciary duty is to their fund\'s returns and the sale delivers that. How should Ada frame the decision to the full board?',
              options: [
                {
                  label: 'Acknowledge the investors\' legitimate interest, then argue on shared value: show why continuing builds MORE value for everyone, including them, with a credible plan.',
                  correct: true,
                  outcome: 'Right. Investors\' return-seeking is legitimate, not villainy. The winning argument aligns interests — demonstrate that the public-goods path (keep building) also beats the sale on *their* metric with evidence, turning a zero-sum vote into a shared-upside case.',
                },
                {
                  label: 'Accuse the investors of betraying the mission and try to shame them publicly.',
                  correct: false,
                  outcome: 'Moralizing at people doing their job hardens them against you and signals you can\'t make the case on substance. It also misreads the theory: investors respond to incentives and returns, so change the incentive math, don\'t deliver a sermon.',
                },
                {
                  label: 'Threaten to resign and take the team if they vote to sell.',
                  correct: false,
                  outcome: 'A resignation threat is a coercion play that can backfire spectacularly — the board may simply accept it, and you\'ve confirmed you\'ll hold the company hostage. Save ultimatums for genuine ethical lines, not strategic disagreements you can still win on merits.',
                },
              ],
            },
          ],
        },
        {
          kind: 'document',
          title: 'Model how control shifts with the cap table',
          body: 'Build a simple cap table and, next to it, a second column that most founders forget: the *control* column. For each holder, write their ownership %, their board seat (if any), and any consent/veto rights. Then, for three decisions — a routine hire, a new financing, and a sale — mark the minimal set of people whose YES is required. You will usually find that control and ownership diverge sharply, and that a single "independent" seat or one protective provision swings more than ten points of equity. Keep this document current through every round; it is your live map of the winning coalition.',
          templateHref: '/templates/cap-table.csv',
          docKey: '20-3-cap-table-control',
          docLabel: 'Cap table + control map',
        },
      ],
      tutorHooks: [
        { label: 'Read MY board math', kind: 'ask', question: 'Given my board composition and any protective provisions, walk through the minimal winning coalition for a routine hire, a new financing, and a sale of the company. Where do control and ownership diverge?' },
        { label: 'Harder: negotiating the independent seat', kind: 'harder', concept: 'how board-seat nomination rights and "independent" director control determine real voting power across financing rounds' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Protective provisions in a financing typically give investors:',
          options: [
            'A larger ownership percentage than they paid for',
            'A veto over specified major decisions (financings, sale, share changes) regardless of their ownership %',
            'The right to fire any employee at will',
            'Nothing enforceable — they are just guidelines',
          ],
          answer: 1,
          explain: 'Protective provisions are consent/veto rights over enumerated major actions. They can hand a minority investor decisive control over existential decisions even with a small ownership stake — which is why they, not the cap-table percentage, often define the winning coalition for "big" matters.',
        },
        {
          kind: 'mcq',
          prompt: 'On a 5-seat board (2 founders, 2 investors, 1 independent), which statement about ordinary-resolution control is correct?',
          options: [
            'The founders always control the board because they started the company',
            'Whoever the independent director sides with reaches the 3-seat majority',
            'The investors control everything because they have money',
            'Ownership percentage alone determines the board vote',
          ],
          answer: 1,
          explain: 'Ordinary resolutions need 3 of 5. Founders (2) and investors (2) are balanced, so the independent is the swing vote — control of that single seat decides contested ordinary matters. This is why who truly controls the "independent" seat is heavily negotiated.',
        },
        {
          kind: 'free',
          prompt: 'Describe your (real or planned) board and any consent rights. For the decision "sell the company," list the minimal winning coalition. Then name one change to the structure that would make control MORE legible and fair — for both founders and investors.',
          rubric: 'Strong answer: (1) lists board seats and who nominates each, plus any protective provisions; (2) derives a decision-specific minimal winning coalition for a sale (usually board majority PLUS investor consent), not just "the shareholders"; (3) proposes a concrete structural improvement (narrowly-scoped provisions, a genuinely independent seat, clear information rights) that increases legibility/fairness rather than just grabbing control for one side.',
        },
      ],
      commitSummary: 'concept only — you\'ll pull the ethics together and leave with a live power map in lesson 20.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '20.4',
      module: 20,
      title: 'Using power for good — and resisting its abuse',
      estMinutes: 18,
      prerequisites: ['20.1', '20.2', '20.3'],
      artifactSlot: null,
      concept: `The whole point of understanding this machine is to run it *honestly* and to defend against those who don't. Three closing principles.

**Public goods vs private spoils — the culture fork.** The clearest predictor of whether a company is healthy or rotting is *where the treasure flows.* A **public-goods** company invests in things everyone shares: a real option pool, honest information, fair process, product quality, upside for the whole team. An **extractive** company routes rewards to a tiny clique and starves everyone else. Both can grow for a while; only the first is durable, because in a talent business your essentials can *leave.* Deliberately build public goods — it's not charity, it's resilience.

**Spot manipulation.** The extractive plays have signatures: concentrating signing/financial authority quietly; keeping the cap table or budget opaque; isolating you from other board members or coinvestors; manufacturing urgency to skip diligence; expanding the pool of "interchangeables" so key people feel replaceable and afraid. Naming the play is half of defeating it — and you can only name it because you now know the rules.

**When concentrated control is legitimately protective.** Not all concentration is a power grab. Founder-friendly control (super-voting shares, a locked board seat) can *protect* a mission from short-term extractive pressure — the same tool, used defensively. The test is **directional**: does the concentration serve broad public goods and long-term health, or does it strip-mine the company for a few? Same lever, opposite ethics. Judge by where the treasure flows and who bears the risk, not by the mechanism alone.

You now have a lens for reading and shaping the power structure of your real company — clearly, and without becoming the thing you learned to see.`,
      reframe: {
        analogy: `Ethical power design is **capability-based security with least privilege and an audit log.** A healthy org grants each person the authority they need to do their job (aligned incentives), makes the grants **visible** (transparent cap table, open budget = an audit trail anyone can read), and avoids a single principal silently accumulating root. An extractive org is the opposite: hidden privilege escalation, no logging, one account quietly gaining sudo over the treasure. Defending your company is threat-modeling: enumerate who could capture the scheduler, and design so that capture is *visible and hard*, not so that it\'s impossible for anyone to lead.`,
        breaks: `Security models assume a clear adversary and a fixed policy; company power is fluid and most "attackers" aren\'t villains — they\'re rational actors (investors, cofounders) pursuing legitimate interests that sometimes conflict with yours. Over-applying a security mindset makes you paranoid and unable to *trust*, which is itself fatal in a startup: you can\'t threat-model your way to a great cofounder relationship. The model tells you where abuse is *possible*; it can\'t tell you who is acting in good faith. That judgment — extending trust while staying legible — is human, and it\'s the part the analogy can\'t give you.`,
      },
      workedExample: `**A tale of where the treasure flows.**

Company A raised big and concentrated control: super-voting founder shares, an opaque budget only the CEO sees, a thin option pool, and a habit of routing bonuses to a three-person inner circle. On paper, unshakeable control. In practice, senior engineers — the essentials — noticed the upside was captured, the information was hidden, and their stake was thin. They left for companies where the treasure was shared. Company A kept its control and lost its ability to build. The concentration was **extractive**: it served the clique, not the company.

Company B *also* concentrated control — the founder held super-voting shares and a protected board seat. But she used them to *defend public goods*: she blocked an acquirer who would have gutted the team, kept a generous transparent option pool, published the budget internally, and tied bonuses to broad company metrics. Her essentials stayed because staying was rational and fair. Same mechanism — concentrated control — opposite direction. Company B\'s power structure was **protective**: it shielded shared upside from short-term extraction.

The mechanism (concentrated control) is ethically neutral. The verdict comes from the **direction of the treasure**: shared and legible (durable), or captured and hidden (rots). This is the single question to ask of any power structure, including your own.`,
      branch: {
        scenario: `A prospective investor offers a term sheet at a great valuation, but with unusual terms: they want control of the board's "independent" seat, broad protective provisions over ordinary operations (not just major matters), and a "founder vesting reset" that re-vests your already-earned shares. They're pushing you to sign within 48 hours "before the round fills." You need the money. What do you do?`,
        choices: [
          {
            label: 'Sign — the valuation is great and you need the cash; you\'ll manage the terms later.',
            correct: false,
            consequence: `**The classic fatal miss.** These terms are a coordinated capture play: control of the "independent" seat (swing vote), veto over *ordinary* operations (not just existential ones), a re-vest that claws back your earned equity, and manufactured urgency to skip diligence. Valuation is the bait; the terms are the trap. You\'d be handing over the winning coalition and your own vested stake at once — and "manage it later" is exactly what the 48-hour deadline exists to prevent.`,
          },
          {
            label: 'Refuse to be rushed: get counsel, benchmark the terms, and negotiate the control provisions down — or walk. A fair investor won\'t need to trap you.',
            correct: true,
            consequence: `**Correct.** Every red flag from this module is present: opacity via speed, control of the swing seat, over-broad vetoes, and an extractive re-vest of *earned* equity. The move is to slow it down — good investors expect diligence and don\'t claw back vested founder shares. Negotiate the control terms to fair scope (major-matters-only provisions, a genuinely independent seat, no re-vest) or walk. Money that costs you the company isn\'t cheap capital, it\'s the treasure changing hands.`,
          },
          {
            label: 'Publicly accuse the investor of being a predator and blow up the deal loudly.',
            correct: false,
            consequence: `**Understandable but wrong.** You don\'t need theatrics — you need leverage and information. Some aggressive terms are negotiable opening positions, not proof of malice; torching the relationship publicly forecloses a possibly-fixable deal and marks you as volatile to other investors. Resist calmly and structurally: counter the terms, take your time, and let a bad actor reveal themselves by refusing reasonable diligence.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'scenario',
          title: 'Resisting a bad-actor coalition',
          intro: 'Six months in, a new investor-director and a disgruntled cofounder start acting in concert: the cofounder quietly proposes centralizing all financial signing authority under the investor "for efficiency," while the investor floats bringing in a "seasoned operator" who would take a board seat and dilute the founders. Separately each sounds reasonable; together they\'re assembling a winning coalition to sideline you. Respond, ethically and effectively.',
          decisions: [
            {
              situation: 'The "centralize signing authority under one person for efficiency" proposal lands. What do you do?',
              options: [
                {
                  label: 'Counter with transparent, distributed controls: dual-signoff over a threshold, an open budget, and no single person owning the treasure — framed as good governance.',
                  correct: true,
                  outcome: 'Right. Rule 3 says whoever controls the treasure controls loyalty, so concentrating signing authority in one hand is the core capture move. Countering with dual-control and transparency defeats it on legitimate governance grounds — hard to argue against, and it protects everyone including honest investors.',
                },
                {
                  label: 'Agree, to avoid conflict — it\'s just an operational detail.',
                  correct: false,
                  outcome: 'This is the single highest-leverage concession you could lose. "Just efficiency" is how control of the treasure gets handed over quietly. Financial signing authority is never merely operational; it is the scheduler, and you don\'t give one aligned bloc root over it.',
                },
                {
                  label: 'Grab all signing authority for yourself instead, to be safe.',
                  correct: false,
                  outcome: 'Fighting a capture play by running your own capture play makes you the bad actor and hands the coalition a legitimate grievance. The fix for over-concentration isn\'t to concentrate it under you — it\'s distributed, transparent control that no single person (including you) can abuse.',
                },
              ],
            },
            {
              situation: 'You realize the cofounder and investor are coordinating against you. What\'s the healthiest structural response?',
              options: [
                {
                  label: 'Bring it into the open with the full board and any aligned coinvestors: name the pattern factually, propose fair governance, and rebuild trust or force the issue transparently.',
                  correct: true,
                  outcome: 'Right. Isolation is the coalition\'s weapon; sunlight is your counter. Surfacing the pattern to the whole board and other stakeholders breaks the private coordination, forces the merits into the open, and lets legitimate parties distance themselves from a bad-faith play. You resist without becoming a schemer yourself.',
                },
                {
                  label: 'Secretly build a counter-coalition and ambush them at the next meeting.',
                  correct: false,
                  outcome: 'Meeting a covert play with a covert play escalates into a governance knife-fight that damages the company regardless of who wins, and it abandons the ethical high ground that is actually your strongest asset with the rest of the board.',
                },
                {
                  label: 'Say nothing and hope it resolves itself.',
                  correct: false,
                  outcome: 'Silence lets the coalition consolidate on its own timeline. Coordinated capture doesn\'t dissolve from neglect — it completes. Reading the pattern obliges you to act, calmly and in the open, before the votes are lined up.',
                },
              ],
            },
          ],
        },
        {
          kind: 'resource',
          title: 'Sources — selectorate theory & the rules of power',
          items: [
            {
              label: 'The Dictator\'s Handbook — Bueno de Mesquita & Smith (publisher page)',
              url: 'https://www.hachettebookgroup.com/titles/bruce-bueno-de-mesquita/the-dictators-handbook/9781610390453/',
              note: 'The primary source (PublicAffairs, 2011). The five rules and the nominal/real/winning-coalition framework come from here.',
            },
            {
              label: 'The Dictator\'s Handbook — overview (Wikipedia)',
              url: 'https://en.wikipedia.org/wiki/The_Dictator%27s_Handbook',
              note: 'Concise summary of the book\'s argument and the coalition-size logic, with references.',
            },
            {
              label: 'CGP Grey — "The Rules for Rulers" (video)',
              url: 'https://www.youtube.com/watch?v=rStL7niR7gs',
              note: 'The popular 19-minute explainer that adapts the book\'s selectorate model; excellent intuition for keys-to-power and the treasure.',
            },
            {
              label: 'Selectorate theory — scholarly overview (Wikipedia)',
              url: 'https://en.wikipedia.org/wiki/Selectorate_theory',
              note: 'Defines the nominal selectorate (S), real selectorate, and winning coalition (W), and the loyalty-norm ratio W/S that drives public- vs private-goods behavior.',
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Audit MY power structure', kind: 'ask', question: 'Walk through my company\'s power structure and flag where the treasure flows (public goods vs a narrow clique), where control is opaque, and any capture risks — then suggest fair, legible fixes.' },
        { label: 'Is this concentration protective or extractive?', kind: 'ask', question: 'I\'m considering a control mechanism (super-voting shares / locked board seat / broad provisions). Help me judge whether it\'s protective (serves broad public goods) or extractive (serves a few), by the direction-of-the-treasure test.' },
        { label: 'Critique my defense plan', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'According to the "direction of the treasure" test, what best distinguishes a protective use of concentrated control from an extractive one?',
          options: [
            'The specific legal mechanism used (super-voting shares are always bad)',
            'Whether the concentration channels value to broad public goods and long-term health, or strip-mines it for a narrow clique',
            'Whether the founder or an investor holds the control',
            'The size of the company\'s valuation',
          ],
          answer: 1,
          explain: 'The mechanism (super-voting shares, locked seats, provisions) is ethically neutral. What matters is *directional*: does the control protect shared, long-term value (public goods) or extract it for a few? Same lever, opposite ethics — judge by where the treasure flows and who bears the risk.',
        },
        {
          kind: 'mcq',
          prompt: 'Which of these is a classic SIGNATURE of a manipulative power play a founder should recognize?',
          options: [
            'An investor asking for a board seat proportional to a large investment',
            'Manufacturing urgency to skip diligence while quietly consolidating financial/signing authority and keeping the budget opaque',
            'A cofounder requesting a transparent, published budget',
            'Investors exercising a narrowly-scoped veto over selling the company',
          ],
          answer: 1,
          explain: 'The extractive signatures cluster: artificial urgency (skip diligence), quiet consolidation of the treasure (signing authority), and opacity (hidden budget). A proportional board seat, a request for transparency, or a narrow major-matters veto are normal, legitimate governance — not red flags.',
        },
        {
          kind: 'free',
          prompt: 'Look at your own company (or one you know). Does the treasure flow toward public goods or a narrow clique? Name one specific thing you would change to make the power structure more legible and fair — and one legitimate reason you might KEEP some concentration of control.',
          rubric: 'Strong answer: (1) applies the direction-of-the-treasure test concretely (option pool, budget transparency, information access, who captures upside); (2) proposes a specific legibility/fairness improvement; (3) correctly identifies a legitimate protective use of concentrated control (defending mission/team from short-term extraction) rather than treating all concentration as bad; (4) shows non-cynical understanding — the lens is for building fairness and resisting abuse, not for manipulation.',
        },
      ],
      commitSummary: 'you can now read and shape the power structure of your real company — its coalitions, its treasure flows, and its capture risks — and act to keep it fair, legible, and durable.',
    },
  ],
}
