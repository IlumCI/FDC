import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 24 — Politics, influence & investor relations (Dictator's Handbook III)
// · Season 2
//
// The third and most practical instalment of the selectorate arc. Module 20
// gave the DESCRIPTIVE model (coalitions, keys to power, the treasure). This
// module operationalizes it around the three arenas that actually decide a
// founder's fate: the BOARD, the INVESTORS, and INTERNAL politics — plus the
// defensive skill of resisting capture. The framing stays ethical and
// descriptive throughout: you learn how influence really flows so you can keep
// control where it protects the mission, align incentives fairly, and defend
// against bad actors — NOT so you can manipulate. Every lesson is
// artifactSlot:null; the real venture is advanced through the interactive
// blocks (a genuinely-sent investor/mentor update, a board power map, a
// walk-away red-lines doc).
// ===========================================================================

export const module24: Module = {
  id: 24,
  season: 2,
  title: 'Politics, influence & investor relations (Dictator\'s Handbook III)',
  goal: 'Manage the power around you — board, investors, internal politics — as coalition management: keep control where it protects the mission, align incentives, and resist capture.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '24.1',
      module: 24,
      title: 'The board as your winning coalition',
      estMinutes: 16,
      prerequisites: [],
      artifactSlot: null,
      concept: `Module 20 gave you the model; this module puts it to work in the room where control is actually exercised. For most of a venture's life, that room is the **board**. The board hires and fires the CEO, approves budgets and financings, and blesses a sale. So the single most consequential sentence a founder can internalize is: **your board is your winning coalition made concrete.** Not your cap table, not your title — the specific set of directors whose votes keep you in the chair.

Three things determine whether that coalition holds for you:

- **Composition** — how many seats exist, and *who nominates each one.* A "5-seat board, 2 founders, 2 investors, 1 independent" is not a fact about ownership; it is a fact about power. The independent seat is usually the swing, which is why *who really controls it* is worth more than a valuation point.
- **Thresholds** — ordinary matters pass on a simple majority; existential matters (removing the CEO, selling, new share classes) often need a **supermajority** or a specific class's consent. Your winning coalition is *decision-specific*: the minimal set to approve a routine hire is not the minimal set to remove you.
- **Information** — the board can only vote on what it can see, and it sees what *you* choose to show it, on the schedule you set. Whoever controls the numbers, the narrative, and the agenda shapes the decision before anyone votes. Ethically, this is an argument for **radical transparency**, not for hiding the ball — but you must understand the lever to use it honestly and to notice when someone else is using it on you.

The healthy posture is not to scheme your way to a captive board. It is to *read* the coalition accurately, keep your essentials aligned because the company is genuinely worth backing, and never be surprised by a vote you could have counted in advance.`,
      reframe: {
        analogy: `A board vote is **triple-modular redundancy (TMR)**. In a fault-tolerant system you run three independent channels into a *voter* that outputs the majority result, so no single faulty channel can flip the output. Your board is the voter; each director is a channel. Control is not "being one channel" — it is reliably being in the majority the voter reports. And here is the part engineers underrate: in a real TMR system, whoever controls the **sensor feed** that drives the channels can steer the output without touching the voter at all. Feed two channels the same biased input and the "redundant" majority faithfully reports your bias. In a board, that sensor feed is *information* — the metrics, the framing, the agenda. Control the inputs and you often decide the vote before it happens.`,
        breaks: `TMR channels are identical, independent, and memoryless; **directors are none of those.** They talk to each other *between* meetings (the channels are cross-wired in ways no hardware voter allows), they carry loyalty and reputation, and a good director actively distrusts a suspiciously clean sensor feed — feed them a biased narrative and the sharp ones detect the manipulation and *hold it against you*. So the analogy correctly locates where power sits (majority at the voter, bias at the sensor) but badly under-models the humans: you cannot spoof your way to a durable majority, because the channels compare notes and remember. Transparency isn't just ethics here; it's the only input a smart voter won't reject.`,
      },
      workedExample: `**Steve Jobs, removed from operations at Apple, 1985.** Jobs co-founded Apple, was its public face, and held a large block of stock — by any cap-table reading, a powerful man. But after the Macintosh underperformed sales targets and Jobs clashed repeatedly with CEO John Sculley (whom Jobs himself had recruited), the disagreement went to the **board**. The board sided with Sculley, stripped Jobs of his operational duties running the Macintosh division, and left him a figurehead with no line authority. He resigned months later. These events are extensively documented (see Isaacson's biography and contemporaneous reporting); treat any specific meeting details as illustrative, but the outcome is historical fact.

Read it through the model. Jobs mistook *founding and owning* for *the winning coalition.* The coalition that actually decided his fate was the boardroom majority, and in the Sculley showdown he simply did not have it — the directors' confidence had shifted to the professional CEO with the operating record. Notice the double lesson, because it cuts both ways: the same board that ejected Jobs in 1985 is the mechanism through which he *returned* to control in 1997 and rebuilt his coalition deliberately, eventually reconstituting the board around directors who backed his vision. The transferable point is not "boards are the enemy." It is that a board is a coalition you must *continuously earn and count*, never one you can take for granted because your name is on the founding documents.`,
      branch: {
        scenario: `You're negotiating your Series A. The lead is fair on price and genuinely helpful, but proposes a 5-seat board — 2 founders, 2 investor directors, and 1 independent "to be mutually agreed" — plus a normal package of protective provisions (investor consent for a future financing or a sale). A friend tells you to reject any board that isn't founder-controlled. What's the clear-eyed move?`,
        choices: [
          {
            label: 'Refuse any structure where founders don\'t hold an outright majority of seats — control is non-negotiable.',
            correct: false,
            consequence: `**Rigid, and probably deal-killing.** A 2-2-1 board with a genuinely independent swing is a *standard, fair* Series A structure — investors giving you real money reasonably expect real governance. Demanding an outright founder majority at the A signals you value control over partnership and can cost you good leads. The sophisticated move isn't to reject board seats; it's to fight for the terms that actually decide power: a truly independent independent, and narrowly-scoped provisions.`,
          },
          {
            label: 'Accept investor consent on genuinely major matters, but negotiate hard on the ONE thing that swings ordinary control — that the independent seat is truly neutral, not investor-friendly in disguise.',
            correct: true,
            consequence: `**Correct.** You've located the real fulcrum. On a 2-2-1 board, ordinary resolutions need 3 of 5, so founders (2) plus a genuine independent can hold day-to-day control — but only if the "mutually agreed" independent isn't quietly the lead's former operating partner. That single seat outweighs a point of valuation. Concede legitimate protection on existential matters (sale, new financing); spend your leverage on keeping the swing vote actually swing.`,
          },
          {
            label: 'Accept everything as offered — the lead is nice and the price is good, so the governance details won\'t matter in practice.',
            correct: false,
            consequence: `**The naive miss this whole module exists to prevent.** "They're nice" is not a governance structure. Nice people leave funds, funds get new partners, and a friendly lead can still vote you out on the merits if results turn. Read the coalition math *before* you sign, precisely because the terms outlast the relationship. You don't need to be adversarial — you need to know, for each decision that matters, exactly which seats decide it.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Your board has 7 seats. The company charter requires a two-thirds supermajority of the full board to remove the sitting CEO. What is the minimum number of seats a coalition must control to be able to remove the CEO?',
          answer: 5,
          tolerance: 0,
          unit: 'seats',
          explain: 'Two-thirds of 7 is 4.67, and you cannot have a fraction of a director, so removal needs 5 seats. The mirror-image insight matters more for a founder: to BLOCK removal you only need to deny the opposition its fifth vote, i.e. control just 3 of the 7 seats. Knowing both numbers — 5 to remove, 3 to block — is exactly the kind of coalition math you should be able to compute in your sleep before you ever sign a term sheet.',
        },
        {
          kind: 'categorize',
          prompt: 'Reading a board honestly means knowing where each director stands on a specific contested decision — not to scheme, but so you engage the right people the right way and are never surprised by a vote. For an upcoming strategy vote, sort each director by their likely stance.',
          buckets: ['Aligned (with you on the merits)', 'Persuadable (undecided, movable by evidence)', 'Opposed (leaning against, on the merits)'],
          items: [
            { text: 'Your co-founder, who co-authored the plan and shares your read of the market', bucket: 'Aligned (with you on the merits)' },
            { text: 'The seed investor who has backed your judgment through two prior hard calls', bucket: 'Aligned (with you on the merits)' },
            { text: 'The genuinely independent director who says "show me the retention data and I\'ll decide"', bucket: 'Persuadable (undecided, movable by evidence)' },
            { text: 'A new investor director who hasn\'t seen the numbers yet and has no prior view', bucket: 'Persuadable (undecided, movable by evidence)' },
            { text: 'The investor director whose fund needs a near-term exit and openly prefers the safer plan', bucket: 'Opposed (leaning against, on the merits)' },
          ],
          explain: 'This is a reading exercise, not a manipulation plan. Aligned directors get a heads-up and become co-advocates; persuadables get your best honest evidence *before* the meeting, never a surprise in it; opposed directors get their concern engaged directly and on the merits, because a respected dissenter you addressed openly is far less dangerous than one you blindsided. Counting the room in advance is diligence — the alternative is discovering your coalition during the vote.',
        },
        {
          kind: 'rank',
          prompt: 'Rank these levers of board influence from the MOST durable (hardest to lose, ethically strongest) to the LEAST durable (fragile, and a warning sign if you\'re relying on it).',
          items: [
            'A track record of hitting the numbers you told the board you would hit',
            'Genuine, trust-based relationships with each director, maintained between meetings',
            'A legible structure you negotiated well (fair seats, narrow provisions, a real independent)',
            'Controlling the information and agenda the board sees each meeting',
            'A procedural maneuver to win one specific vote (packing a seat, rushing a resolution)',
          ],
          explain: 'Durable influence is *earned*: delivering results is the bedrock, then real relationships, then a fair structure you set up honestly. Information control is genuinely powerful but ethically double-edged and fragile — smart directors detect a curated narrative and it curdles into distrust. A one-off procedural maneuver is the weakest and most dangerous: it may win a vote but it brands you as someone who plays dirty, and boards have long memories. If your control rests mostly on the bottom two, you don\'t have a coalition — you have a liability.',
        },
        {
          kind: 'scenario',
          title: 'Information is the sensor feed',
          intro: 'A tense quarter is coming. Revenue missed plan by 15%, but your leading indicators (activation, retention of the newest cohort) are the best they have ever been. You control the board deck and the agenda. How you present this is a live test of the ethics of information leverage.',
          decisions: [
            {
              situation: 'How do you frame the revenue miss in the board deck?',
              options: [
                {
                  label: 'Lead with the miss plainly, then show the leading indicators and your causal argument for why revenue follows them next quarter.',
                  correct: true,
                  outcome: 'Right. This is the honest use of information leverage: you set the agenda and the framing (a real power), but the framing is *true* — bad news first, then the genuine reason for optimism. Directors trust a founder who surfaces the miss before they have to ask, and that trust is the durable asset. You shaped the narrative without distorting it.',
                },
                {
                  label: 'Bury the miss in an appendix and open with the record activation numbers so the meeting feels like a win.',
                  correct: false,
                  outcome: 'This is the manipulative use of the same lever, and it is a slow-acting poison. Sophisticated directors find the buried miss, and now they distrust every deck you ever send. You spent your most valuable board asset — credibility — to avoid one uncomfortable slide. The sensor feed the smart voter rejects is the doctored one.',
                },
                {
                  label: 'Delay the board meeting a few weeks hoping revenue recovers so you never have to report the miss.',
                  correct: false,
                  outcome: 'Manufacturing a schedule delay to dodge a number is a red flag your directors are trained to smell, and it forfeits the goodwill of proactive disclosure. Controlling the agenda cadence is legitimate; using it to hide a material miss is exactly the opacity you would call a warning sign in someone else.',
                },
              ],
            },
          ],
        },
        {
          kind: 'document',
          title: 'Build your board power map',
          body: 'Make your winning coalition explicit. For each board seat, record: who holds it, who NOMINATES it (this is the real tell), and how they lean. Then, for three decisions — a routine budget approval, a new financing, and removing/replacing the CEO — write the exact minimal set of seats (and any protective consents) required to pass it. You will usually find control is decision-specific and that one "independent" seat or one provision swings more than a big block of equity. Keep this current through every round; it is your live coalition map.',
          templateHref: '/templates/board-power-map.md',
          docKey: '24.1#board-map',
          docLabel: 'My board power map',
        },
        {
          kind: 'resource',
          title: 'Board composition & board management (real, canonical)',
          items: [
            { label: 'First Round Review — Board Management collection', url: 'https://review.firstround.com/articles/board-management/', note: 'Practitioner guides on building and running an effective board, including identifying and integrating truly independent directors.' },
            { label: 'Brad Feld & Mahendra Ramsinghani — "Startup Boards" (Goodreads)', url: 'https://www.goodreads.com/book/show/60862171-startup-boards', note: 'The standard field guide to building and leading a startup board; pair it with the same authors\' "Venture Deals" for the term mechanics.' },
            { label: 'Y Combinator Startup Library', url: 'https://www.ycombinator.com/library', note: 'Free talks and essays on board composition, control, and founder-investor governance.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Count MY board coalition', kind: 'ask', question: 'Given my board composition (seats, who nominates each, any protective provisions), compute the minimal winning coalition for three decisions: a routine budget, a new financing, and removing the CEO. Tell me where my control is solid and where it\'s only one seat deep.' },
        { label: 'Is my independent seat really independent?', kind: 'ask', question: 'Help me evaluate whether a proposed "mutually agreed" independent director is genuinely neutral or effectively investor-aligned, and what questions or nomination mechanics would make the seat truly independent.' },
        { label: 'Harder: supermajorities & swing seats', kind: 'harder', concept: 'computing blocking positions and minimal winning coalitions when different decisions carry different thresholds (simple majority vs two-thirds vs class consent) on the same board' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why is it accurate to call the board — rather than the cap table — a founder\'s "winning coalition made concrete"?',
          options: [
            'Because directors own more equity than founders do',
            'Because the board is where the binding decisions (hire/fire CEO, budgets, financings, sale) are actually voted, so control lives in board seats and thresholds, not in ownership percentage alone',
            'Because share ownership has no legal effect',
            'Because founders can always appoint every board seat themselves',
          ],
          answer: 1,
          explain: 'Share ownership matters, but the decisions that determine a founder\'s fate are made by the board under specific voting thresholds and consent rights. That is why Steve Jobs, a large owner and the founder, could be stripped of operating control in 1985 by a board majority. Read power at the layer where the binding votes happen.',
        },
        {
          kind: 'mcq',
          prompt: 'In the triple-modular-redundancy analogy, "information" (metrics, framing, agenda) plays the role of the sensor feed. What is the correct ETHICAL takeaway, and where does the analogy break?',
          options: [
            'Bias the feed however you like; the voter can\'t tell — humans are just redundant channels',
            'Whoever controls the inputs strongly shapes the vote, so use that power for radical transparency; the analogy breaks because directors talk to each other and detect (and punish) a doctored narrative',
            'Information is irrelevant because the board votes on ownership percentages',
            'The founder should withhold all information to protect the company',
          ],
          answer: 1,
          explain: 'Controlling the inputs is real leverage, which is exactly why transparency matters: you shape the framing honestly rather than distorting it. The analogy breaks because directors are not independent, memoryless channels — they compare notes and remember, so a manipulated feed destroys the credibility that is your most durable board asset.',
        },
        {
          kind: 'free',
          prompt: 'For your own board (real or planned), write the minimal winning coalition for the decision "remove the CEO," and separately for "approve a routine budget." Then name one director whose stance you are genuinely unsure of, and one honest thing you could show or tell them — not a manipulation — that would help them decide well.',
          rubric: 'Strong answer: (1) derives a decision-specific minimal coalition for BOTH decisions, correctly reflecting seat counts and any supermajority/consent thresholds (not just "the shareholders"); (2) identifies who nominates the swing/independent seat; (3) names a genuinely uncertain director and proposes an HONEST piece of evidence or context to help them (surfacing a risk, sharing real data) rather than a manipulative tactic; (4) shows the learner is counting the room in advance as diligence, not scheming. Penalize conflating ownership % with control, and penalize any answer whose "influence" plan relies on hiding information.',
        },
      ],
      commitSummary: 'your live board power map is saved to "My venture" — for each major decision, the exact minimal set of seats that controls it, so you\'re never surprised by a vote you could have counted.',
    },

    // -----------------------------------------------------------------------
    {
      id: '24.2',
      module: 24,
      title: 'Investor relations as coalition maintenance',
      estMinutes: 20,
      prerequisites: ['24.1'],
      artifactSlot: null,
      concept: `Your board coalition is not a structure you set once; it is a relationship you *maintain*. The single highest-leverage maintenance habit — cheaper and more powerful than almost anything else a founder does — is the **monthly investor update**: a short, consistent, honest email to the people whose support you depend on.

Read it through the model and it stops being a chore and becomes a **control signal**. An update does four things at once:

- **It keeps you top-of-mind for the help you actually need.** Investors sit on a network of talent, customers, and capital. They deploy it for the founders they're thinking about — which means the founders who show up in their inbox every month. Silence is invisibility.
- **It builds the trust that carries you through a bad quarter.** The founders who report *challenges* plainly, month after month, earn the benefit of the doubt when a number dips. The founders who only surface when they need money have no trust account to draw on.
- **It makes your "asks" work.** A specific, standing ask ("intro to a VP Eng who has scaled a data platform past 50 engineers") converts a passive investor into an active one. Vague asks ("let me know if you think of anything") get nothing.
- **It is a liveness signal to your coalition.** Regular, candid updates say *this company is being run by someone in control.* Their absence says the opposite — and investors, like any coordinator watching for failure, act on silence.

The data backs the mechanism: investors report that founders who send **consistent** updates are markedly more likely to raise follow-on funding than those who go quiet between rounds (Visible.vc, cited below). This is coalition maintenance, and "managing up" in its healthiest form — not spin, but the disciplined, honest communication that keeps the people around you aligned and useful.`,
      reframe: {
        analogy: `The monthly update is a **heartbeat / keepalive** in a distributed system. A healthy service emits a periodic "I'm alive and here's my state" signal to the coordinator. As long as the beats arrive on schedule, the coordinator leaves the service alone and routes work to it. Miss a few beats and the coordinator does not assume the best — it marks you *suspect*, then *failed*, and starts intervening: rerouting, escalating, in the worst case initiating recovery (read: a worried investor calling your other investors). Your investors are the coordinator. The update is your keepalive. Send it on a steady cadence and you stay a trusted, healthy node that gets work (intros, capital, air cover) routed to you; go silent and you trigger exactly the anxious intervention you least want during a hard stretch.`,
        breaks: `A protocol heartbeat is **contentless and unfakeable-in-spirit** — it's just a bit that says "up." An investor update is rich, and that's where the analogy both helps and misleads. First, *what's in the beat matters*: a cheerful update that hides real trouble is a heartbeat that lies, and unlike a protocol, human coordinators eventually detect the lie and trust collapses faster than if you'd simply reported the problem. Second, heartbeats build no relationship — they can't earn goodwill — whereas a candid update *accrues* trust you can spend later. So don't optimize for merely "emitting a beat." Optimize for a *truthful* beat that also does the relational work a protocol never has to: honesty about challenges is the feature, not a bug to route around.`,
      },
      workedExample: `**Mathilde Collin (co-founder/CEO of Front) and the discipline of the update.** Collin is widely cited — including in First Round Review's board and communication guides — for treating investor and board communication as a core operating discipline rather than an afterthought: focused, consistent, candid updates that keep her backers informed through good months and bad. The practice is deliberately unglamorous and deliberately regular, and it is credited as part of how Front maintained strong investor relationships across multiple rounds.

Pair that practice with the aggregate evidence. Portfolio-analytics firm Visible.vc reports that startups sending **consistent** investor updates are roughly **twice as likely** to raise follow-on funding as those that go quiet between rounds (figure per Visible; treat it as directional rather than a precise law). The mechanism is exactly the coalition model: an investor's scarce attention, network, and follow-on capital flow toward the founders who stay legibly *in control and in contact.* The transferable move is not "be a great writer." It is to install a **cadence** — same day each month, same sections (a one-line state-of-the-business, 3–5 metrics including cash and runway, wins, challenges stated plainly, and 1–3 specific asks) — and then never break it. The founders who win the follow-on aren't the ones with the prettiest update; they're the ones whose update simply *always arrives.*`,
      branch: {
        scenario: `It's a bad month. You missed your revenue plan, a key engineer quit, and your runway is now about 7 months. Your monthly investor update is due Thursday. Every instinct says to skip it this month and send a great one once you've turned things around. What do you do?`,
        choices: [
          {
            label: 'Skip it this month — sending bad news just alarms investors, and you\'ll look stronger with a comeback update later.',
            correct: false,
            consequence: `**Exactly backwards, and the most common founder error.** Going silent in a bad month is a missed heartbeat: your investors don't conclude "all is well," they conclude "something is wrong and they're hiding," which is worse than the actual news. You also forfeit the moment when their help is most valuable — a hard month is precisely when a well-placed intro or a bridge conversation matters. Silence during trouble is how you burn the trust you'll need to raise again.`,
          },
          {
            label: 'Send it on schedule: state the miss and the departure plainly, show the runway honestly, explain your plan, and make two specific asks (a senior eng intro, and a candid read on bridge options).',
            correct: true,
            consequence: `**Correct.** This is coalition maintenance under load. Reporting the bad month candidly *builds* the trust that carries you — investors have seen bad months and they fund founders who stay honest and in control through them. Your specific asks convert their concern into action (talent, capital, guidance) exactly when you need it. The truthful heartbeat, sent on cadence, is worth far more than a polished comeback email that arrives after you've already suffered the silence penalty.`,
          },
          {
            label: 'Send an upbeat update that emphasizes a few good metrics and quietly omits the miss, the departure, and the runway.',
            correct: false,
            consequence: `**The lying heartbeat.** Cherry-picking metrics to manufacture a "good" month is the fake keepalive — and human coordinators detect it. When the truth surfaces (it will, at the next raise or diligence), the discovered omission destroys your credibility far more than the original bad news would have. Managing up is honest communication, not spin; the founders who last report the hard numbers *first*, before anyone has to ask.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Your investor update reports the health metrics. This month you have $420,000 in the bank and a net burn (spend minus revenue) of $70,000 per month, and you expect burn to hold steady. What runway, in months, do you report?',
          answer: 6,
          tolerance: 0,
          unit: 'months',
          explain: 'Runway = cash / net burn = 420,000 / 70,000 = 6 months. Runway is the single number every investor scans for first, so report it plainly and consistently — never bury or fudge it. Six months is short enough that your update should already be doing coalition work: signalling the raise conversation early and making specific asks, not springing a cash emergency on your backers at month two.',
        },
        {
          kind: 'rank',
          prompt: 'Order the sections of a strong monthly investor update the way a busy investor wants to read them — from what should come FIRST to what should come last.',
          items: [
            'A one-line "state of the business" (was this a good, bad, or mixed month?)',
            'Key metrics: revenue/MRR, growth, cash in bank, and runway',
            'Wins: 2–3 concrete pieces of real progress',
            'Challenges: 1–2 things that are genuinely hard, stated plainly',
            'Asks: 1–3 specific, actionable requests for help',
          ],
          explain: 'Give the frame first (one honest sentence on the month), then the hard numbers an investor scans for (metrics, cash, runway), then wins, then challenges stated candidly, then specific asks. This ordering respects a busy reader and front-loads the signal. The two sections founders most often get wrong are challenges (they hide them, which forfeits trust) and asks (they leave them vague, which wastes the coalition\'s reach). Both belong in every update, every month.',
        },
        {
          kind: 'categorize',
          prompt: 'A useful update is honest and specific. Sort each element into whether it BELONGS in your monthly update or DOESN\'T (because it\'s spin, vanity, or noise).',
          buckets: ['Belongs in the update', 'Leave it out'],
          items: [
            { text: 'Cash in bank and runway in months, stated plainly even when short', bucket: 'Belongs in the update' },
            { text: 'A specific ask: "intro to a VP Eng who has scaled a data platform past 50 engineers"', bucket: 'Belongs in the update' },
            { text: 'A challenge you\'re facing and how you plan to address it', bucket: 'Belongs in the update' },
            { text: 'A leading metric that can go down, reported the same way each month', bucket: 'Belongs in the update' },
            { text: 'Total cumulative signups highlighted to look impressive, with churn omitted', bucket: 'Leave it out' },
            { text: 'A vague ask: "let me know if you think of anything!"', bucket: 'Leave it out' },
            { text: 'Three paragraphs of narrative spin explaining away the revenue miss', bucket: 'Leave it out' },
          ],
          explain: 'What belongs: the honest state (cash, runway, a leading metric that can fall), specific asks the coalition can act on, and candid challenges with a plan. What to cut: vanity metrics chosen to impress, vague asks that convert to nothing, and spin that explains away bad news. The discipline is the same one from Module 20 — the update is a public good you invest in honestly, not a highlight reel you curate to manage perceptions.',
        },
        {
          kind: 'platformTask',
          title: 'Write and actually send a real update',
          body: 'This is the milestone: run one real cycle of coalition maintenance. Write a genuine monthly-style update for YOUR venture — even if your "investors" today are a mentor, an advisor, a design partner, or a founder friend who has agreed to follow your progress. Keep it to 250–750 words, plain-text email (not a PDF). Use the standard sections: one-line state of the business, 3–5 metrics including cash/runway if applicable, 2–3 wins, 1–2 honest challenges, and 1–3 specific asks. Then SEND it to at least one real person. Record what you sent and to whom (paste the update text or a short summary as your proof).',
          links: [
            { label: 'Visible.vc — How to write the perfect investor update (with templates)', url: 'https://visible.vc/blog/how-to-write-the-perfect-investor-update/' },
            { label: 'Mercury — How to write an effective investor update', url: 'https://mercury.com/blog/how-to-write-an-effective-investor-update' },
            { label: 'TechCrunch — How to write your monthly investor update', url: 'https://techcrunch.com/2024/02/05/how-to-write-your-monthly-investor-update/' },
          ],
          steps: [
            'Pick at least one real recipient: a current investor, or a mentor/advisor/design partner/founder friend who will follow your progress.',
            'Draft 250–750 words: one-line state of the business, 3–5 metrics (include cash and runway if you have them), 2–3 wins, 1–2 honest challenges, 1–3 specific asks.',
            'Make at least one ask genuinely specific and actionable — a named kind of intro, a concrete piece of advice, a review of one artifact.',
            'Send it as a plain-text email. Then paste the update text (or a short summary) below as your proof.',
          ],
          taskKey: '24.2#update',
          proofLabel: 'Your sent update (paste the text or a summary) and who you sent it to',
          proofKind: 'text',
          milestone: true,
        },
        {
          kind: 'scenario',
          title: 'A tense investor ask',
          intro: 'On a 1:1 call, your most influential investor — the one whose opinion sways the rest of the board — makes a pointed ask: "I want you to cut your team by 20% this quarter to extend runway, and I\'d like weekly financials from now on instead of monthly." The cut would hit a team you believe is essential to next quarter\'s roadmap. This is managing up under real pressure. Handle it well.',
          decisions: [
            {
              situation: 'How do you respond to the layoff demand in the moment?',
              options: [
                {
                  label: 'Acknowledge the legitimate concern (runway), ask what specifically is worrying them, and commit to bring back a data-backed plan — without agreeing to the cut on the spot.',
                  correct: true,
                  outcome: 'Right. The ask reflects a real concern (runway) even if the proposed remedy is wrong, so you engage the concern, not just the demand. Buying time to respond with data respects the investor while protecting a decision that\'s yours to make as CEO. You neither cave nor stonewall — you convert a tense directive into a shared problem to solve on the merits.',
                },
                {
                  label: 'Agree to the 20% cut immediately to keep your most influential backer happy.',
                  correct: false,
                  outcome: 'Caving on the spot to an operational decision you believe is wrong trades the company\'s roadmap for one person\'s short-term comfort. Your job is to run the company on the merits and bring the board your best judgment. An investor who respects you wants a reasoned pushback with data, not reflexive compliance — reflexive compliance actually erodes their confidence in you.',
                },
                {
                  label: 'Refuse flatly and tell them team decisions are none of an investor\'s business.',
                  correct: false,
                  outcome: 'Slamming the door misreads the relationship. Runway is legitimately the board\'s business, and this is your most influential coalition member. Dismissing the concern outright hardens them and can turn one worried investor into a bloc pushing for the cut. Engage the concern respectfully and win on data — don\'t pick a status fight you don\'t need.',
                },
              ],
            },
            {
              situation: 'On the "weekly financials instead of monthly" request, what\'s the healthiest read and response?',
              options: [
                {
                  label: 'Treat it as a trust/anxiety signal: offer a tighter cadence temporarily with a clear metric that would return you to monthly, so the extra reporting is a bridge, not a permanent leash.',
                  correct: true,
                  outcome: 'Right. A sudden demand for much tighter reporting usually signals eroded confidence, not genuine need for weekly data. Meeting it partway — more frequent updates for a defined period, tied to a metric that restores normal cadence — rebuilds trust while preventing "weekly financials" from hardening into a permanent supervisory grip. You address the real variable (their confidence) rather than just the request.',
                },
                {
                  label: 'Refuse any change in cadence — monthly is standard and you won\'t be micromanaged.',
                  correct: false,
                  outcome: 'Digging in on cadence when your most influential investor is anxious spends trust you can\'t spare. The request is a symptom; refusing to treat the symptom at all leaves the underlying loss of confidence to fester and grow into board-level pressure.',
                },
                {
                  label: 'Agree to permanent weekly financials indefinitely to fully reassure them.',
                  correct: false,
                  outcome: 'Conceding an open-ended weekly reporting obligation hands over a standing supervisory lever and eats your team\'s time every week. Reassurance should be bounded and tied to a return condition — otherwise a temporary anxiety calcifies into permanent oversight that shifts the balance of control.',
                },
              ],
            },
          ],
        },
        {
          kind: 'resource',
          title: 'Investor updates — real templates & guides (verified)',
          items: [
            { label: 'Visible.vc — How to write the perfect investor update', url: 'https://visible.vc/blog/how-to-write-the-perfect-investor-update/', note: 'Sections, templates, and the follow-on-funding data cited in this lesson.' },
            { label: 'Carta — How to write an effective investor update', url: 'https://carta.com/learn/private-funds/management/portfolio-management/investor-updates/', note: 'A clean structure and tips from the cap-table platform investors actually use.' },
            { label: 'Mercury — How to write an effective investor update', url: 'https://mercury.com/blog/how-to-write-an-effective-investor-update', note: 'Founder-focused guide emphasizing transparency about challenges (features Mathilde Collin\'s approach).' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Draft my update', kind: 'ask', question: 'Help me draft this month\'s investor/mentor update for my venture. Ask me for my one-line state of the business, my key metrics (including cash and runway), my wins and challenges, and turn my vague asks into specific, actionable ones.' },
        { label: 'Make my ask specific', kind: 'ask', question: 'Here is a vague ask I want help converting: [describe it]. Rewrite it as a specific, actionable request an investor could act on immediately, and tell me who in a typical investor network would be the right target.' },
        { label: 'Critique my managing-up plan', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why is going SILENT during a bad month the worst option for a founder, in coalition terms?',
          options: [
            'Because investors legally require monthly updates',
            'Because silence reads as a missed heartbeat — investors assume something is being hidden and start intervening, and you forfeit their help exactly when it\'s most valuable',
            'Because the update must always contain good news to be worth sending',
            'Because bad news should be saved for the annual meeting',
          ],
          answer: 1,
          explain: 'An update is a liveness signal. Missing it during trouble doesn\'t reassure your coalition — it triggers the anxious intervention (calls to other investors, pressure) you least want, and it wastes the moment when a well-placed intro or bridge conversation could help most. The candid update, sent on cadence, builds the trust that carries you through the dip.',
        },
        {
          kind: 'mcq',
          prompt: 'The "lying heartbeat" failure mode in an investor update is:',
          options: [
            'Reporting cash and runway honestly even when they\'re low',
            'Sending an upbeat update that cherry-picks metrics and quietly omits a real miss, a departure, or the true runway',
            'Making a specific, actionable ask',
            'Stating a challenge plainly with a plan to address it',
          ],
          answer: 1,
          explain: 'A curated, omission-heavy "good" update is the fake keepalive: it signals health that isn\'t there. Human coordinators eventually detect the omission (at the next raise or in diligence), and the discovered deception costs far more credibility than the original bad news would have. Honesty about challenges is the feature, not the bug.',
        },
        {
          kind: 'free',
          prompt: 'Reflect on the update you actually wrote and sent in the platform task. Who did you send it to, what was your single most specific ask, and what challenge did you report honestly? If you were tempted to soften or omit anything, name it and explain why sending it straight is the stronger long-term move.',
          rubric: 'Strong answer: (1) references a REAL update the learner actually sent and a real recipient (investor, mentor, advisor, design partner); (2) shows the ask was specific and actionable, not vague; (3) demonstrates honest reporting of at least one genuine challenge, including cash/runway if applicable; (4) reflects understanding that candor builds the trust that carries a founder through bad months, and that omission/spin is the "lying heartbeat" that costs more credibility later. Reward evidence of actually completing the send; penalize purely hypothetical answers or any plan that relies on hiding bad news.',
        },
      ],
      commitSummary: 'you ran one real cycle of coalition maintenance — a genuine update, sent to a real backer, with honest metrics and a specific ask. Install the cadence and never break it.',
    },

    // -----------------------------------------------------------------------
    {
      id: '24.3',
      module: 24,
      title: 'Internal politics & influence without authority',
      estMinutes: 18,
      prerequisites: ['24.1', '24.2'],
      artifactSlot: null,
      concept: `Most of the decisions that determine whether your company executes are not made by vote and not made by fiat. They're made by a handful of people — an eng lead, a designer, a partner team, a key hire — choosing to *actually align* behind a direction. You will constantly need to move people over whom you have **no formal authority**, or whom you could technically order but shouldn't. This is not a dirty art. Done well, it is the core skill of leadership, and it is the ethical inverse of manipulation.

Two ideas do most of the work:

- **Align incentives; don't override them.** People act on their own goals, constraints, and rewards. You rarely change behavior by arguing harder — you change it by making the behavior you want *also serve their goals.* This is Cohen & Bradford's "currencies of exchange": everyone values different things (recognition, a scarce resource, a career-relevant project, being consulted), and influence is trading in the currencies the other person actually cares about. It's reciprocity, made explicit and honest.

- **Build the coalition before the meeting.** Decisions are usually settled in the quiet conversations *before* the room convenes, not in the room. You line up the aligned, bring your real evidence to the persuadable, and engage the opposed directly — so that by the time the decision is "made," the alignment already exists. Done in the open, this is just good stakeholder work; done in secret with distortion, it becomes the manipulation this course warns against.

Underneath sits a cultural fork you already met in Module 20: **public goods vs private goods.** In a *public-goods* culture, influence is earned by making the pie bigger for everyone — sharing credit, information, and upside. In a *private-goods* culture, influence is hoarded and traded as favors to a clique. Both can move decisions short-term; only the first compounds, because in a talent business the people you influenced can walk. The whole point of understanding these levers is to pull them toward alignment and fairness — and to recognize when someone is pulling them toward manipulation.`,
      reframe: {
        analogy: `Influence without authority is **mechanism design** — you don't control the agents, so you shape the *reward landscape* so that each agent, optimizing its own objective, rolls toward the outcome you want. A founder with authority can set another team's gradient directly ("do this"). Without authority, you can't touch their gradient, so instead you change the terrain: you lower the cost for them to say yes, raise the value the decision delivers *to their goals*, and add the reciprocity term (a currency they care about) that tips their local optimum toward your global one. You're not forcing the descent; you're designing a loss function under which their honest self-interested descent converges with yours.`,
        breaks: `People are not clean optimizers with a stable objective you can read off, and treating them as such is the fast road to *manipulation.* Three failures a real reward function never has: (1) **Goodhart** — engineer the incentive too cleverly and people optimize the proxy while resenting the game, so the "alignment" is hollow; (2) **preferences aren't fixed or fully knowable** — you're guessing at currencies, and guessing wrong (or worse, exploiting a currency cynically) reads as being handled and destroys trust; (3) **the relationship itself is a term you can't fully model** — durable influence rests on a history of good faith that no single well-designed incentive can substitute for. Use the frame to *align* honestly; the moment you're engineering someone's landscape to get them to act against their own interest, you've crossed from influence into manipulation.`,
      },
      workedExample: `**Lyndon B. Johnson as Senate Majority Leader (1955–1961), as documented by Robert Caro in "Master of the Senate."** LBJ held a position with famously *little* formal power — the majority leader can't command a single senator's vote. Yet he moved the Senate more effectively than almost anyone before or since. Caro's account shows *how*: Johnson made himself the person who knew, better than anyone, what each individual senator actually needed — a committee assignment, a dam for their state, a bill scheduled (or buried) at the right moment, a moment of public deference. He then traded in exactly those currencies. His influence came not from authority he lacked but from an almost obsessive reading of everyone else's incentives and a relentless willingness to satisfy them in exchange for votes.

Take the mechanism, and note the ethics honestly. The *descriptive* lesson is pure influence-without-authority: he changed behavior by aligning it with what each person wanted, not by giving orders he had no power to give — which is precisely Cohen & Bradford's currencies model in the wild. The *cautionary* lesson is that the same virtuosity ran the full range from legitimate coalition-building to genuine manipulation and coercion, and Caro is unsparing about both. That's the whole point of studying it: the skill of reading and trading incentives is ethically neutral, and it is the same skill whether you use it to align a team around a fair decision or to strong-arm people against their interests. Learn the mechanism; choose the public-goods direction deliberately.`,
      branch: {
        scenario: `You need the platform team — who don't report to you — to prioritize an API change that unblocks your roadmap. Their lead is skeptical and busy. You have no authority to make them do it. What's the most effective *and* ethical way to get alignment?`,
        choices: [
          {
            label: 'Escalate immediately: go to their VP and get the work ordered top-down.',
            correct: false,
            consequence: `**The blunt instrument, used first.** Escalation borrows authority you don't have, and using it as your opening move brands you as someone who goes over people's heads. Even if you win the ticket, you've spent trust with a team you'll need again and again, and a resentfully-ordered team delivers the letter of the work, not its spirit. Escalation is a last resort after honest alignment fails — not the first move.`,
          },
          {
            label: 'Meet the lead first: understand their goals and constraints, frame the API change so it also advances something THEY care about, and bring evidence — then line up support before any decision meeting.',
            correct: true,
            consequence: `**Correct.** This is mechanism design done honestly: you learn the currencies the platform lead actually values (maybe this change also retires tech debt they hate, or gives their team a visible win), frame the ask so saying yes serves their goals too, and build the alignment in the quiet conversation before the room. You changed the reward landscape rather than trying to force a gradient you don't control — and you did it in the open, so it's stakeholder work, not manipulation.`,
          },
          {
            label: 'Quietly promise the lead a personal favor and imply their skepticism could look bad to leadership if they block you.',
            correct: false,
            consequence: `**This is where influence crosses into manipulation.** A private quid-pro-quo plus a veiled threat isn't alignment — it's coercion dressed as a deal, and it exploits fear rather than serving anyone's real goals. Even if it works once, you've taught a capable person that dealing with you is dangerous, and that reputation spreads. The line is bright: align by serving their genuine interests in the open, never by manufacturing leverage over them in the dark.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'The clearest predictor of a healthy influence culture (from Module 20) is where the "treasure" flows. Sort each practice into whether it builds PUBLIC goods (shared, compounding, durable) or PRIVATE goods (hoarded, clique-based, corrosive).',
          buckets: ['Public goods (shared, compounding)', 'Private goods (hoarded, clique-based)'],
          items: [
            { text: 'Sharing credit publicly with the people who did the work', bucket: 'Public goods (shared, compounding)' },
            { text: 'Making key information and metrics visible to the whole team', bucket: 'Public goods (shared, compounding)' },
            { text: 'A transparent, written decision process anyone can follow', bucket: 'Public goods (shared, compounding)' },
            { text: 'Investing in tooling and docs that make everyone faster', bucket: 'Public goods (shared, compounding)' },
            { text: 'Routing the best opportunities only to a personal inner circle', bucket: 'Private goods (hoarded, clique-based)' },
            { text: 'Hoarding information so only you can broker decisions', bucket: 'Private goods (hoarded, clique-based)' },
            { text: 'Trading undocumented favors for loyalty behind closed doors', bucket: 'Private goods (hoarded, clique-based)' },
          ],
          explain: 'Public-goods practices (shared credit, open information, legible process, shared tooling) compound because they make the whole team more capable and they earn influence that survives any one relationship. Private-goods practices (inner-circle opportunities, hoarded information, secret favor-trading) can move a decision this week but corrode trust and, in a talent business, drive the very people whose alignment you need to leave. Same organizational energy, opposite durability.',
        },
        {
          kind: 'rank',
          prompt: 'Rank these influence tactics from the MOST ethical and durable to the LEAST — the last one crosses the line into manipulation.',
          items: [
            'Understand the other person\'s genuine goals and frame your ask so it also serves them',
            'Bring real evidence and make your case openly on the merits',
            'Build support in honest 1:1s before the decision meeting (no distortion)',
            'Trade a concrete, transparent favor both sides acknowledge (open reciprocity)',
            'Manufacture urgency and imply hidden consequences to pressure a quick yes',
          ],
          explain: 'The top four are all legitimate influence, roughly ordered by how much they rely on shared truth: aligning incentives honestly and arguing on the merits are the gold standard; pre-meeting coalition-building and open reciprocity are fine as long as nothing is distorted or hidden. The last is manipulation — manufactured urgency plus implied threats exploits fear and short-circuits genuine consent. The bright line isn\'t "influence vs no influence"; it\'s whether you\'re serving the other person\'s real interests in the open or engineering pressure over them in the dark.',
        },
        {
          kind: 'numeric',
          prompt: 'A cross-functional decision needs sign-off from a committee of 5 team leads, and you have no authority over any of them. Going in, 2 leads already agree with you and 1 is firmly opposed. To reach a simple majority of the committee, what is the minimum number of the 2 remaining undecided leads you must win over?',
          answer: 1,
          tolerance: 0,
          unit: 'leads',
          explain: 'A simple majority of 5 is 3. You start with 2 aligned, so you need just 1 more of the 2 undecided leads — and the firmly-opposed lead is not where your effort should go. This is coalition math without authority: identify the minimal set of persuadable people whose alignment tips the decision, and spend your honest effort (evidence, incentive-alignment) there rather than trying to convert an entrenched opponent or over-lobbying people already with you.',
        },
        {
          kind: 'scenario',
          title: 'Aligning a reluctant peer',
          intro: 'You want to standardize the whole company on one internal data schema — a change you\'re convinced is right, but that creates real short-term migration pain for the analytics team, whose lead reports to a different manager. You have no authority to mandate it. Move them, ethically.',
          decisions: [
            {
              situation: 'First conversation with the analytics lead. Where do you start?',
              options: [
                {
                  label: 'Ask about their current pain and goals first — what the migration would cost them, and what would make it worth their while — before pitching your solution.',
                  correct: true,
                  outcome: 'Right. You can\'t design an aligned incentive without first reading the other person\'s real currencies. Maybe the standardization also kills a class of bugs they hate, or you can offer engineering help with the migration. Starting with their goals turns "your change" into "our win" and is the honest core of influence without authority.',
                },
                {
                  label: 'Open by explaining in detail why your schema is technically superior and why they should adopt it.',
                  correct: false,
                  outcome: 'Leading with your solution and its virtues is the classic technical-founder trap: you\'re optimizing a gradient you don\'t control by arguing harder. Without understanding their constraints and what they value, even a correct proposal lands as extra work imposed from outside — and being right on the merits doesn\'t move someone who feels unheard.',
                },
                {
                  label: 'Mention that leadership "would probably want this anyway" to nudge them toward yes.',
                  correct: false,
                  outcome: 'Invoking vague authority you don\'t actually hold is a small manipulation that a sharp peer sees through instantly, and it poisons the relationship. If you had the mandate you\'d use it openly; implying one you don\'t have is a bluff that costs you credibility when it\'s called.',
                },
              ],
            },
            {
              situation: 'They\'re warming up but worried the migration will blow their quarter\'s roadmap. What do you offer?',
              options: [
                {
                  label: 'Offer a concrete, transparent trade: your team absorbs part of the migration work and you jointly present a revised timeline to both managers.',
                  correct: true,
                  outcome: 'Right. Open reciprocity in a currency they value (engineering hours, air cover with their manager) makes saying yes rational for them, and doing it transparently — with both managers in the loop — keeps it as legitimate stakeholder work rather than a backroom deal. You lowered their cost to say yes instead of pressuring them.',
                },
                {
                  label: 'Tell them the migration is happening regardless, so they might as well cooperate.',
                  correct: false,
                  outcome: 'A manufactured "it\'s happening anyway" ultimatum is coercion, and it\'s also a bluff — you have no authority to make it happen. Even if it worked, you\'d convert a warming ally into a resentful conscript who does the minimum. The whole point was to align them, not to corner them.',
                },
                {
                  label: 'Privately promise to put in a good word for their promotion if they prioritize your migration.',
                  correct: false,
                  outcome: 'A hidden personal quid-pro-quo tied to their career crosses from open reciprocity into a favor economy that corrupts the decision — it aligns them to you personally rather than to the merits, and it\'s exactly the private-goods behavior that rots a culture. Keep reciprocity concrete, work-related, and in the open.',
                },
              ],
            },
          ],
        },
        {
          kind: 'document',
          title: 'Map the currencies for a real decision',
          body: 'Pick one real decision where you need alignment from people you can\'t simply order. For each key stakeholder, write: their genuine goals and constraints, the "currency" they actually value (recognition, a resource, a career-relevant project, being consulted, less of some pain), how your ask could also serve that, and where they currently stand (aligned / persuadable / opposed). Then write your honest pre-meeting plan — who you\'ll talk to first and what real evidence you\'ll bring. This is a stakeholder-alignment map, not a manipulation script: everything in it should be something you\'d be comfortable saying to the person\'s face.',
          templateHref: '/templates/stakeholder-currencies.md',
          docKey: '24.3#currencies',
          docLabel: 'Stakeholder currency map',
        },
        {
          kind: 'resource',
          title: 'Influence without authority — the real toolkit',
          items: [
            { label: 'Robert Cialdini — The 7 Principles of Persuasion (Influence at Work)', url: 'https://www.influenceatwork.com/7-principles-of-persuasion/', note: 'Reciprocity, commitment/consistency, social proof, authority, liking, scarcity, unity — the evidence-based mechanics, to use honestly and to recognize when used on you.' },
            { label: 'Esade — Influence without authority: Cialdini\'s principles', url: 'https://dobetter.esade.edu/en/influence-authority', note: 'Applies the principles specifically to influencing when you hold no formal power.' },
            { label: 'Cohen & Bradford — "Influence Without Authority" (currencies of exchange)', url: 'https://www.influencewithoutauthority.com/', note: 'The canonical model behind this lesson: everyone values different currencies; influence is honest, reciprocal trade in the currencies people actually care about.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Map a real stakeholder', kind: 'ask', question: 'I need alignment from someone I can\'t order: [describe them and the decision]. Help me figure out their likely goals and the "currencies" they value, and how to frame my ask so it honestly serves their interests too.' },
        { label: 'Is this influence or manipulation?', kind: 'ask', question: 'Here\'s a tactic I\'m considering to move a decision: [describe it]. Help me judge whether it\'s legitimate influence (serving their real interests, in the open) or manipulation (engineering pressure or distortion), and suggest an ethical alternative if it crosses the line.' },
        { label: 'Harder: multi-stakeholder coalition', kind: 'harder', concept: 'building an honest coalition for a contested decision across several teams with conflicting incentives and no shared manager' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In the mechanism-design framing, what does "influence without authority" actually consist of?',
          options: [
            'Arguing your position more forcefully until people agree',
            'Reshaping the reward landscape — via honest framing and reciprocity in currencies they value — so the other person\'s own self-interest aligns with the outcome you want',
            'Escalating to someone with formal authority to order the outcome',
            'Making people comply through implied threats',
          ],
          answer: 1,
          explain: 'Without authority you can\'t set someone\'s "gradient" directly, so you change the terrain: frame the ask so saying yes serves their real goals, and trade honestly in the currencies they care about (Cohen & Bradford). Arguing harder ignores their incentives; escalation borrows authority you don\'t have; threats are manipulation. Honest incentive-alignment is the durable move.',
        },
        {
          kind: 'mcq',
          prompt: 'Where is the bright line between legitimate influence and manipulation?',
          options: [
            'There is no line — all influence is manipulation',
            'Influence is illegal; manipulation is legal',
            'Legitimate influence serves the other person\'s genuine interests in the open; manipulation engineers pressure, distortion, or hidden leverage to move them against their interest',
            'Manipulation is anything that happens before a meeting',
          ],
          answer: 2,
          explain: 'The same skill — reading and trading incentives — is ethically neutral. It becomes manipulation when you distort the truth, manufacture urgency or fear, or engineer hidden leverage to get someone to act against their own interest. It stays legitimate when you align honestly with their real goals and do it in the open. Pre-meeting coalition-building is fine; secret coercion is not.',
        },
        {
          kind: 'free',
          prompt: 'Take a real decision where you need alignment from someone you can\'t order. Name their likely goals and one "currency" they value, describe how you\'d frame your ask so it honestly serves them too, and state the specific line you would NOT cross even if it would win the decision faster.',
          rubric: 'Strong answer: (1) identifies a specific person/decision and reads their genuine goals and at least one currency (recognition, resource, career-relevant work, being consulted, pain reduction); (2) frames the ask as mutual benefit, not just "why I\'m right"; (3) shows the plan is honest and in the open (comfortable saying it to their face); (4) names a concrete ethical red line (no manufactured urgency, no hidden threats, no distortion, no secret quid-pro-quo) demonstrating they understand the influence/manipulation boundary. Penalize answers that rely on borrowed authority, coercion, or hidden leverage.',
        },
      ],
      commitSummary: 'you have a stakeholder currency map for a real decision — an honest, in-the-open plan to align people you can\'t order, and a clear line you won\'t cross to do it.',
    },

    // -----------------------------------------------------------------------
    {
      id: '24.4',
      module: 24,
      title: 'Resisting capture & bad actors',
      estMinutes: 20,
      prerequisites: ['24.1', '24.2', '24.3'],
      artifactSlot: null,
      concept: `Everything so far assumes good-faith counterparties. This lesson is the defensive one: what to do when someone runs the extractive playbook *on you.* You learned the moves in Module 20; here you learn to recognize them in real time and respond without either rolling over or becoming a schemer yourself.

**The signatures of a capture play** cluster together, and any one of them can be innocent — it's the *combination and direction* that gives it away:

- **Concentrating the treasure quietly** — one person angling for sole signing authority, control of the raise, or ownership of the board agenda "for efficiency."
- **Manufacturing urgency** — a compressed deadline ("sign before the round fills," "decide by Friday") whose real function is to *skip diligence.* Legitimate deals survive scrutiny; traps depend on your not looking.
- **Isolating you** — discouraging you from talking to your other investors, your co-founders, or independent counsel. Isolation removes your out-of-band verification, which is precisely why it's a tell.
- **Expanding the "interchangeables"** — making key people feel replaceable and afraid, so they don't resist.
- **Clawing back what's earned** — a "vesting reset," a re-vest of already-vested founder shares, or a dilution that specifically targets one person's stake.

**Protective control is not hypocrisy.** Concentrating control can be *defensive* — founder super-voting shares or a locked board seat used to protect the mission and the team from short-term extraction. The test from Module 20 still governs: judge by the **direction of the treasure.** Does the concentration serve broad, long-term, shared value, or strip-mine it for a few? Same mechanism, opposite ethics.

**And know when to walk.** The hardest, most important skill is the willingness to lose the deal. Money that costs you the company isn't cheap capital — it's the treasure changing hands. A founder who cannot walk has already lost the negotiation; the ability to say no, calmly, is the only thing that makes your yes worth anything.`,
      reframe: {
        analogy: `Spotting manipulation is **social-engineering / phishing defense** applied to the boardroom. A phishing attack rarely breaks the crypto; it exploits the *human protocol.* Its signatures map one-to-one onto capture plays: **manufactured urgency** ("your account will be closed in 24 hours" ≙ "sign before the round fills") to stop you from verifying; **authority spoofing** (a message that looks like it's from the CEO ≙ terms framed as "standard, everyone signs these") to borrow legitimacy; and **isolation from out-of-band channels** ("don't call the bank, just click here" ≙ "no need to loop in your other investors or a lawyer") to remove your ability to check. The defense is identical to security training: **slow down** (urgency is the attack, not the deadline), **verify out-of-band** (call your other investors, your counsel, another founder), and **never act under artificial time pressure.** The trap depends on you not looking; looking is the whole defense.`,
        breaks: `A phisher is unambiguously malicious and the correct response is to *block and delete.* A hard-charging investor or a frustrated co-founder is usually **not** an attacker — they're a legitimate counterparty pursuing real interests that partly conflict with yours, and some aggressive terms are honest opening positions, not traps. So you cannot just "block the sender": you have to keep negotiating in good faith while staying alert, which is a much harder posture than binary threat/no-threat. Over-applying the security mindset makes you paranoid and unable to build the trusting relationships a startup runs on — you can't threat-model your way to a great co-founder or a great lead investor. The model tells you where abuse is *possible* and flags the signatures; it can't tell you who's acting in good faith. That judgment stays human.`,
      },
      workedExample: `**Eduardo Saverin's dilution at early Facebook (2004–2005).** Saverin was a co-founder and, for a period, held roughly a third of the company. As the company reincorporated and raised money, a new financing issued a large tranche of shares — to which Saverin's stake was *not* proportionally protected — and his ownership was diluted dramatically (widely reported as falling from around 30% toward the low single digits to ~10% range before litigation). Saverin sued; the dispute was settled and his stake and credit as co-founder were ultimately restored to a negotiated level (settlement terms are confidential; the specific percentages are as reported in press accounts and the subsequent litigation, so treat exact figures as illustrative).

Read it as a defense case, not a morality tale about any individual. The *mechanism* — issuing new shares in a financing that dilutes a specific holder who isn't paying attention or lacks protective terms — is a textbook capture move, and it worked precisely because the target wasn't positioned to see it coming or block it. The defensive lessons are concrete and transferable: (1) **protective terms matter** — pro-rata rights, anti-dilution protection, and a board/consent structure determine whether a financing can be used against you; (2) **information and presence matter** — a co-founder disengaged from the cap table and the paperwork is the easiest to dilute; and (3) **the paper is the power** — control lives in the documents you sign (or fail to read), which is exactly why manufactured urgency to "just sign" is such a reliable red flag. You defend not by distrusting everyone, but by staying present, reading the documents, keeping protective terms, and refusing to be rushed past diligence.`,
      branch: {
        scenario: `A prospective lead offers a term sheet at a headline valuation well above your expectations — but the terms are unusual: they want control of the board's "independent" seat, protective provisions that reach into *ordinary* operations (not just major matters), and a "founder vesting reset" that re-vests shares you've already earned. They're pressing you to sign within 72 hours "before the allocation closes," and suggest you "don't need to bog this down with lawyers." You genuinely need the money. What do you do?`,
        choices: [
          {
            label: 'Sign — the valuation is exceptional and cash is tight; you\'ll manage the awkward terms once the money is in.',
            correct: false,
            consequence: `**Every phishing signature is lit up at once.** Manufactured urgency (72 hours) to skip diligence, isolation ("don\'t bog it down with lawyers") to remove out-of-band verification, control of the swing seat, over-broad vetoes into ordinary operations, and a re-vest that claws back *earned* equity. The high valuation is the bait; the terms are the trap. "Manage it later" is exactly what the deadline exists to prevent — after you sign, you no longer have the leverage. This is the classic fatal miss.`,
          },
          {
            label: 'Refuse to be rushed: get counsel, benchmark the terms, and negotiate the control provisions down to fair scope — or walk. A good investor expects diligence and doesn\'t claw back vested shares.',
            correct: true,
            consequence: `**Correct.** You ran the defense: slow down (the urgency is the attack, not the deadline) and verify out-of-band (counsel, other founders, benchmarks). Legitimate investors expect you to do diligence and do not re-vest your earned equity or veto ordinary operations. Negotiate the terms to fair scope — major-matters-only provisions, a genuinely independent seat, no re-vest — and be visibly willing to walk. The willingness to lose the deal is what gives you the leverage to fix it.`,
          },
          {
            label: 'Publicly call the investor a predator, post the term sheet, and blow up the deal loudly to warn other founders.',
            correct: false,
            consequence: `**Understandable, but the wrong tool.** Some aggressive terms are opening positions, not proof of malice, and you can\'t always tell which yet — this is the "you can\'t just block the sender" break in the analogy. Public theatrics foreclose a possibly-fixable deal, breach confidentiality, and mark you as volatile to every other investor watching. Resist calmly and structurally: counter the terms, take your time, insist on counsel, and let a genuine bad actor reveal themselves by refusing reasonable diligence.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Dilution as a capture mechanic. Before a new financing you hold 1,200,000 of the company\'s 4,000,000 total shares. The round issues 2,000,000 brand-new shares to investors, and you receive none of them and hold no anti-dilution protection. What is your ownership percentage AFTER the round?',
          answer: 20,
          tolerance: 1,
          unit: '%',
          explain: 'New total = 4,000,000 + 2,000,000 = 6,000,000 shares. Your unchanged 1,200,000 is now 1,200,000 / 6,000,000 = 20%, down from 30%. Dilution itself is normal and expected in a financing — the capture RISK is when new issuance is aimed at a specific holder who lacks pro-rata or anti-dilution protection and isn\'t paying attention (the Saverin mechanic). The defense is structural: protective terms and staying present on the cap table, not distrust of all dilution.',
        },
        {
          kind: 'categorize',
          prompt: 'The signatures of a capture play look a lot like normal governance at a glance — the difference is direction and combination. Sort each item into a manipulation RED FLAG versus LEGITIMATE governance.',
          buckets: ['Red flag (capture signature)', 'Legitimate governance'],
          items: [
            { text: 'A compressed "sign by Friday before the round fills" deadline meant to skip diligence', bucket: 'Red flag (capture signature)' },
            { text: 'Discouraging you from looping in your other investors or a lawyer', bucket: 'Red flag (capture signature)' },
            { text: 'A "founder vesting reset" that re-vests shares you have already earned', bucket: 'Red flag (capture signature)' },
            { text: 'Protective provisions that reach into routine, ordinary operations', bucket: 'Red flag (capture signature)' },
            { text: 'An investor asking for a board seat proportional to a large, fair investment', bucket: 'Legitimate governance' },
            { text: 'A narrowly-scoped investor veto over selling the company or issuing new stock', bucket: 'Legitimate governance' },
            { text: 'A request for standard information rights and monthly reporting', bucket: 'Legitimate governance' },
          ],
          explain: 'Red flags cluster around opacity, speed, isolation, over-broad control, and clawing back what\'s earned — each engineered to move value or control quietly and fast. Legitimate governance is proportional, narrowly-scoped, and survives scrutiny: a fair board seat, a major-matters-only veto, standard reporting. The tell is rarely a single term; it\'s the combination, the direction of the treasure, and the pressure not to look closely.',
        },
        {
          kind: 'rank',
          prompt: 'You suspect a capture play is underway. Rank your defensive moves from what you should do FIRST to what you should do last.',
          items: [
            'Slow the process down — refuse to act under a manufactured deadline',
            'Verify out-of-band — talk to your other investors, counsel, and trusted founders',
            'Benchmark the terms and name the specific provisions that are off-market',
            'Counter with fair-scope terms (narrow provisions, real independent seat, no re-vest)',
            'Be visibly willing to walk away from the deal entirely',
          ],
          explain: 'Defense order mirrors phishing response: first neutralize the urgency (the deadline is the attack), then verify out-of-band to break any isolation, then get specific about which terms are off-market, then counter with fair scope, and hold the willingness to walk as your ultimate leverage throughout. Notice the willingness to walk is listed last not because it\'s least important but because it underwrites every earlier step — you can only slow down, verify, and counter credibly if you\'re genuinely prepared to say no.',
        },
        {
          kind: 'scenario',
          title: 'Resisting a coordinated capture',
          intro: 'Six months in, a new investor-director and a disgruntled co-founder begin acting in concert. The co-founder proposes centralizing all financial signing authority under the investor "for efficiency," while the investor floats bringing in a "seasoned operator" who would take a board seat and dilute the founders. Separately each sounds reasonable; together they\'re assembling a coalition to sideline you. Respond — ethically and effectively.',
          decisions: [
            {
              situation: 'The "centralize all signing authority under one person for efficiency" proposal lands. What do you do?',
              options: [
                {
                  label: 'Counter with transparent, distributed controls: dual sign-off over a threshold, an open budget, and no single person owning the treasure — framed as good governance.',
                  correct: true,
                  outcome: 'Right. Whoever controls the treasure controls loyalty, so concentrating signing authority in one hand is the core capture move. Countering with dual-control and transparency defeats it on legitimate governance grounds that are hard to argue against, and it protects everyone — including honest investors. You didn\'t grab control, you distributed it.',
                },
                {
                  label: 'Agree, to avoid conflict — it\'s just an operational detail.',
                  correct: false,
                  outcome: 'This is the single highest-leverage concession you could lose. "Just efficiency" is how control of the treasure gets handed over quietly. Financial signing authority is never merely operational — it\'s the scheduler, and you don\'t hand one aligned bloc root over it.',
                },
                {
                  label: 'Grab all signing authority for yourself instead, to be safe.',
                  correct: false,
                  outcome: 'Fighting a capture play by running your own capture play makes you the bad actor and hands the coalition a legitimate grievance. The fix for over-concentration isn\'t to concentrate it under you — it\'s distributed, transparent control no single person (including you) can abuse.',
                },
              ],
            },
            {
              situation: 'You realize the co-founder and investor are coordinating against you. What\'s the healthiest structural response?',
              options: [
                {
                  label: 'Bring it into the open with the full board and any aligned coinvestors: name the pattern factually, propose fair governance, and force the merits into daylight.',
                  correct: true,
                  outcome: 'Right. Isolation is the coalition\'s weapon; sunlight is your counter. Surfacing the pattern to the whole board and other stakeholders breaks the private coordination, forces the substance into the open, and lets legitimate parties distance themselves from a bad-faith play. You resist without becoming a schemer yourself.',
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
            {
              situation: 'Negotiations stall and the investor issues an ultimatum: accept the "seasoned operator" board seat and the signing change within a week, or they\'ll withhold the next tranche of already-committed funding. What\'s the right posture?',
              options: [
                {
                  label: 'Take the threat seriously but don\'t capitulate: verify your rights to the committed tranche, line up alternatives, and be genuinely willing to walk from this investor if the terms are extractive.',
                  correct: true,
                  outcome: 'Right. An ultimatum tied to committed money is coercion, and the only real answer to coercion is credible optionality: know your contractual rights, develop alternatives, and be willing to lose this relationship rather than surrender control. A founder who cannot walk has already lost; the willingness to say no is what makes the threat negotiable.',
                },
                {
                  label: 'Capitulate — you can\'t risk losing the funding, so give them the seat and the signing change.',
                  correct: false,
                  outcome: 'Surrendering control under an ultimatum rewards the coercion and completes the capture. You\'d keep the tranche and lose the company\'s governance — the treasure changing hands. Capital that requires you to hand over control on a one-week threat is the most expensive money on earth.',
                },
                {
                  label: 'Call their bluff publicly and dare them to withhold committed funding.',
                  correct: false,
                  outcome: 'Public brinkmanship forecloses a possibly-salvageable position and can trigger exactly the funding freeze you can least afford, mid-fight. Resist structurally and privately first — verify rights, build alternatives, surface the pattern to the board — rather than escalating to a public dare before you\'ve secured your footing.',
                },
              ],
            },
          ],
        },
        {
          kind: 'document',
          title: 'Write your walk-away red-lines',
          body: 'Decide your non-negotiables BEFORE you\'re under pressure — because manufactured urgency is designed to make you decide in the moment. Write your red-lines: the specific terms you will not accept (e.g. re-vesting earned equity, provisions over ordinary operations, loss of a genuinely independent seat, signing away sole treasure control), the diligence steps you will always take (counsel review, benchmarking, talking to other investors) no matter how tight the deadline, and your honest BATNA (what you\'ll do if you walk). A red-line written in calm is a decision urgency can\'t stampede.',
          templateHref: '/templates/walk-away-red-lines.md',
          docKey: '24.4#red-lines',
          docLabel: 'My walk-away red-lines',
        },
        {
          kind: 'resource',
          title: 'Sources — the Dictator\'s Handbook, boards & investor relations (verified)',
          items: [
            {
              label: 'The Dictator\'s Handbook — Bueno de Mesquita & Smith (publisher page)',
              url: 'https://www.hachettebookgroup.com/titles/bruce-bueno-de-mesquita/the-dictators-handbook/9781610390453/',
              note: 'The primary source (PublicAffairs, 2011) for selectorate theory and the five rules — the descriptive model this whole arc defends against being used on you.',
            },
            {
              label: 'Selectorate theory — scholarly overview (Wikipedia)',
              url: 'https://en.wikipedia.org/wiki/Selectorate_theory',
              note: 'Defines nominal/real selectorate and the winning coalition, and the loyalty ratio that predicts public- vs private-goods behavior.',
            },
            {
              label: 'First Round Review — Board Management collection',
              url: 'https://review.firstround.com/articles/board-management/',
              note: 'Practitioner guidance on building a fair, effective board and keeping the independent seat genuinely independent.',
            },
            {
              label: 'Visible.vc — How to write the perfect investor update',
              url: 'https://visible.vc/blog/how-to-write-the-perfect-investor-update/',
              note: 'The investor-update discipline that maintains your coalition and keeps you present enough to spot a capture play early.',
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Stress-test a term sheet', kind: 'ask', question: 'Here are the key terms I\'ve been offered: [paste them]. Help me flag any capture signatures (over-broad provisions, re-vesting, control of the independent seat, manufactured urgency, isolation) versus legitimate governance, and tell me which to negotiate and which are deal-breakers.' },
        { label: 'Draft my walk-away red-lines', kind: 'ask', question: 'Help me write my non-negotiable red-lines and my BATNA before I\'m under pressure, so a manufactured deadline can\'t stampede me into a bad decision. Ask me about my situation and leverage.' },
        { label: 'Protective or extractive?', kind: 'ask', question: 'I\'m weighing a concentration-of-control mechanism (super-voting shares / locked board seat / broad provisions). Use the direction-of-the-treasure test to help me judge whether it\'s protective (serves broad, long-term value) or extractive (serves a few).' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In the phishing-defense analogy, "manufactured urgency" ("sign before the round fills") functions the same way as a phishing email\'s "act now" pressure. What is the correct defensive response?',
          options: [
            'Meet the deadline to prove you\'re decisive',
            'Slow down and verify out-of-band (counsel, other investors, benchmarks) — the urgency is the attack, and a legitimate deal survives diligence',
            'Immediately accuse the counterparty of fraud',
            'Sign quickly but add a note that you had reservations',
          ],
          answer: 1,
          explain: 'Artificial urgency exists to stop you from looking, so looking is the defense: slow the process, verify out-of-band to break any isolation, and benchmark the terms. Legitimate investors expect diligence; only traps depend on your not doing it. Note the analogy\'s limit — unlike a phisher you can\'t just "block the sender," because the counterparty may be legitimate, so you resist calmly rather than theatrically.',
        },
        {
          kind: 'mcq',
          prompt: 'Which factor determines whether a CONCENTRATION of control (e.g. founder super-voting shares) is protective rather than extractive?',
          options: [
            'The specific legal mechanism — super-voting shares are always extractive',
            'Whether a founder or an investor holds it',
            'The direction of the treasure: whether the concentration channels value to broad, long-term, shared health, or strip-mines it for a narrow few',
            'The size of the valuation attached to the round',
          ],
          answer: 2,
          explain: 'The mechanism is ethically neutral — the same super-voting shares can defend a mission from short-term extraction or entrench a clique. The verdict is directional: does the control serve broad public goods and long-term health, or capture value for a few? Judge by where the treasure flows and who bears the risk, not by the tool itself.',
        },
        {
          kind: 'free',
          prompt: 'Write two or three of your own walk-away red-lines for a future financing or a co-founder/board negotiation — specific terms you will not accept no matter the pressure — and state your honest BATNA (what you\'ll do if you walk). Then explain why deciding these in calm, in advance, is itself a defense against a capture play.',
          rubric: 'Strong answer: (1) names specific, concrete red-lines (e.g. no re-vesting earned equity, no provisions over ordinary operations, keep a genuinely independent seat, no sole signing authority for one party) rather than vague sentiments; (2) states a realistic BATNA showing the learner could actually walk; (3) explains that pre-committing in calm neutralizes manufactured urgency and the "just sign" pressure — the urgency is the attack; (4) shows balanced judgment: resisting capture without becoming paranoid or a schemer, and recognizing legitimate governance is not a red flag. Penalize answers with no concrete red-lines or no credible walk-away option.',
        },
      ],
      commitSummary: 'you leave with your walk-away red-lines and BATNA written down in calm — the defense that lets you resist capture without becoming a bad actor yourself, and the judgment to tell a real trap from hard-but-fair terms.',
    },
  ],
}
