import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 19 — Networking & social interaction for engineers  (Season 2)
//
// The highest-leverage non-technical skill, made legible for people who read
// systems more fluently than they read rooms. The throughline: social skill is
// LEARNABLE and SYSTEMATIC, not a personality you either have or don't — and
// none of it requires being fake. Every lesson gives the engineer an honest
// model, then explicitly marks where the model dehumanizes if taken literally.
// ===========================================================================

export const module19: Module = {
  id: 19,
  season: 2,
  title: 'Networking & social interaction for engineers',
  goal: 'Build real relationships and a real network without being fake — the highest-leverage non-technical skill, made legible.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '19.1',
      module: 19,
      title: 'Why networks compound (and why engineers underinvest)',
      estMinutes: 15,
      prerequisites: [],
      artifactSlot: null,
      concept: `Your career runs on a **social graph**: nodes are people, edges are relationships. But it is not a plain graph — the edges are **weighted** (how much trust and context flows across them) and they **decay** (an edge you never touch fades toward zero).

Engineers systematically underinvest here for a rational-looking reason: coding gives a tight feedback loop, and relationships pay back on a delay of months to years. So the investment feels unproductive right up until the day it is the only thing that works — the job, the co-founder, the first ten customers, the intro that unblocks everything.

Three properties make the graph worth investing in:

- **Compounding.** A strong edge introduces you to new nodes, which introduce more. Value grows with the square-ish of your reachable set, not linearly with effort.
- **Weak ties.** Your close friends know what you know. Your **weak ties** — acquaintances, ex-colleagues, people two hops out — reach different information and opportunities. A [2022 causal study of 20M LinkedIn users](https://www.science.org/doi/10.1126/science.abl4476) found moderately weak ties drive *more* job mobility than strong ones, echoing Granovetter's classic ["The Strength of Weak Ties"](https://www.cs.cmu.edu/~jure/pub/papers/granovetter73ties.pdf).
- **Give before you ask.** Edges are built by depositing value — an intro, an answer, a useful link — long before you withdraw any. A network you only touch when you need something is a network that has already decayed.`,
      reframe: {
        analogy: `Model it as a **weighted, directed graph with edge decay**. Each edge carries a weight — call it trust-bandwidth — and it obeys something like exponential decay, $w(t) = w_0 e^{-\\lambda t}$: without interaction, the weight halves over some months. "Keeping in touch" is just periodically re-sending a small packet to reset the decay timer. "Giving before asking" is pre-charging the edge so that when you finally send a request, there is weight to carry it. And your true reach is not your edge count — it is the size of your **2-hop neighborhood**, because most opportunity arrives from friends-of-friends, not friends.`,
        breaks: `Here is where the graph metaphor dehumanizes, and you must hold the break firmly: **people are not nodes to be optimized, and edges are not fungible.** Treating a person as a means to their neighbors is exactly the "networking" everyone can smell and hate. Real relationships are not weighted floats you top up on a schedule; a friend is not a cache you re-warm. The decay model is a useful reminder to stay in touch — but the *reason* to stay in touch is that you actually like the person, not that a timer expired. Use the graph to notice neglect; never use it to justify treating anyone as a route to someone else.`,
      },
      workedExample: `**Priya**, a backend engineer, decides to leave a job she has outgrown. She has 12 people she talks to often (strong ties) and maybe 300 former colleagues, meetup acquaintances, and open-source contacts she has not messaged in a year (weak ties, badly decayed).

Her strong ties all work at the same kind of company she is trying to leave — same information bubble. So over two weeks she sends 20 short, genuine notes to *weak* ties: "Saw you moved to infra at Northwind — congrats, how's it going?" No ask attached. Fourteen reply. Three mention their teams are hiring. One forwards her to a founder two hops out whom she had never met.

The role she eventually takes comes through that founder — a person who did not exist in her graph a month earlier, reached through a re-warmed weak edge. Note the mechanics: she *gave* attention first (congrats, curiosity), she reached *weak* ties for *new* information, and the payoff arrived from the **2-hop neighborhood**, not her inner circle.`,
      branch: {
        scenario: `You need a job in 6 weeks. Your instinct is to lean on your five closest friends in tech, who all work at companies like your current one, and message them daily for leads. A colleague suggests instead spending the first week reconnecting with 30 loosely-known former coworkers and acquaintances with no ask — just genuine notes. Which is the better opening move, and why?`,
        choices: [
          {
            label: 'Lean hard on the five close friends — they trust you most, so they will help most.',
            correct: false,
            consequence: `**Instructive miss.** Trust is high, but *information overlap* is also high: close friends largely know what you already know and see the same openings you already see. You will exhaust their leads fast and strain the relationships by over-asking. Strong ties are for depth, not breadth of new opportunity.`,
          },
          {
            label: 'Reconnect with the 30 weak ties first, giving before asking; surface new information, then make specific asks.',
            correct: true,
            consequence: `**Correct.** Weak ties reach *different* information — other companies, other rooms — which is exactly what a job search needs. Reconnecting with a genuine, ask-free note re-warms decayed edges so a later request has weight to travel on. You are widening the 2-hop neighborhood where most real opportunity actually lives.`,
          },
          {
            label: 'Skip people entirely and just apply to 200 jobs online — networks are luck, not a system.',
            correct: false,
            consequence: `**Instructive miss.** Cold applications have the worst conversion precisely because they carry zero edge-weight — no one is vouching for you. Referrals convert far better because a trusted edge routes your signal past the noise. The network is not luck; it is a learnable, repeatable system, which is the whole point of this module.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each behavior into whether it builds relationship equity (deposits value / genuine) or drains it (purely transactional / extractive). The line is simple: would the other person feel valued or used?',
          buckets: ['Relationship-building', 'Transactional'],
          items: [
            { text: 'Introduce two people who would genuinely benefit from knowing each other, with no ask attached', bucket: 'Relationship-building' },
            { text: 'Send a short congrats when a contact ships a launch or starts a new role', bucket: 'Relationship-building' },
            { text: 'Answer a stranger\'s technical question thoroughly, expecting nothing back', bucket: 'Relationship-building' },
            { text: 'Forward a link or job you know a specific contact would find useful', bucket: 'Relationship-building' },
            { text: 'Only message people the week you need a job or a favor', bucket: 'Transactional' },
            { text: 'Send the same copy-paste "let\'s connect and collaborate" DM to 50 people', bucket: 'Transactional' },
            { text: 'Add someone on LinkedIn, then immediately pitch them your product', bucket: 'Transactional' },
            { text: 'Ask a new contact for a big favor before you have ever given them anything', bucket: 'Transactional' },
          ],
          explain: 'The building behaviors all deposit value or attention first and leave the other person better off; the transactional ones withdraw before depositing, or treat a person as a means to an end. Over time deposits compound into trust you can honestly draw on; withdrawals-first drain edges to zero and get you quietly muted.',
        },
        {
          kind: 'numeric',
          prompt: 'You have about 200 first-degree connections. Assume each of them knows, on average, another 200 people. Ignoring any overlap, roughly how many people sit two hops away from you (your second-degree reach)?',
          answer: 40000,
          tolerance: 5000,
          unit: 'people',
          explain: 'Second-degree reach is roughly (first-degree count) times (average connections each), so 200 times 200 is about 40,000. Real overlap and clustering shrink the *unique* count substantially — your contacts share many friends — but the order of magnitude is the lesson: a modest first-degree circle opens a second-degree neighborhood in the tens of thousands. That is where compounding and weak-tie opportunity live.',
        },
      ],
      tutorHooks: [
        { label: 'Map my own weak ties', kind: 'ask', question: 'Help me list 15 weak ties I have let decay — former coworkers, acquaintances, open-source or event contacts — and draft a genuine, ask-free reconnect note for three of them based on what I remember about each.' },
        { label: 'Why do referrals convert better?', kind: 'harder', concept: 'how edge-weight and vouching change signal-to-noise in hiring and sales pipelines' },
        { label: 'Critique my networking instincts', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why do "weak ties" often produce more new opportunities than close friends?',
          options: [
            'Weak ties trust you more than close friends do',
            'Weak ties reach different information and social circles than the ones you already inhabit',
            'Weak ties are easier to manipulate into helping you',
            'Close friends are legally barred from giving referrals',
          ],
          answer: 1,
          explain: 'Close friends share most of your information bubble, so their leads overlap with what you already see. Weak ties bridge to *other* circles, surfacing openings and information you could not have reached otherwise — the core finding behind Granovetter and the 2022 LinkedIn study.',
        },
        {
          kind: 'mcq',
          prompt: 'An edge in your network "decays" when:',
          options: [
            'You disagree with the person once',
            'You go a long time without any genuine interaction, so trust and context fade',
            'The person changes jobs',
            'You connect on a new platform',
          ],
          answer: 1,
          explain: 'Decay is about time-without-interaction, not conflict or job changes. A small, genuine periodic touch resets the timer. This is why "give before you ask" and staying loosely in touch matter — they keep edge-weight above zero for the day you need it.',
        },
        {
          kind: 'free',
          prompt: 'Name one specific weak tie you have neglected who reaches a circle you are NOT already in. What genuine, ask-free message could you send them this week — and what value could you give before you ever need anything?',
          rubric: 'Strong answer: (1) identifies a concrete real person who bridges to a different circle/company/domain, not just a close friend; (2) drafts a specific, warm, non-generic message referencing something real about that person; (3) proposes a genuine give (congrats, a useful link, an intro, an offer to help) that precedes any ask; (4) shows they understand the give-before-ask and weak-tie logic rather than treating the person instrumentally.',
        },
      ],
      commitSummary: 'concept only — you will log real outreach in lesson 19.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '19.2',
      module: 19,
      title: 'Reading people: signals your parser drops',
      estMinutes: 16,
      prerequisites: ['19.1'],
      artifactSlot: null,
      concept: `A conversation carries far more than the literal words. There are at least four **side-channels** running in parallel, and technical people are prone to parsing only the first:

- **Content** — the literal claim. Easy; you already read this.
- **Status** — who is deferring to whom, who has the floor, whose approval is being sought. Present in almost every exchange, rarely stated.
- **Subtext** — what is meant but not said. "Interesting" can mean *I disagree*; "we should grab coffee sometime" can mean *polite goodbye*.
- **Emotion & turn-taking** — how the person feels, and the rhythm of who speaks when. Interrupting, monologuing, or missing a bid to change topic are the most common own-goals.

The good news: these channels are **legible**. They are not magic or charisma; they are patterns you can learn to detect, exactly like learning to read a new log format. The single highest-leverage skill is **active listening** — reflecting back what you heard before responding ("So the real blocker is the migration, not the deadline?"). It does three things at once: it verifies you parsed correctly, it signals respect (status), and it invites the other person to correct or continue (turn-taking). Most people, most of the time, want to feel *heard* more than they want to be impressed.`,
      reframe: {
        analogy: `Active listening is **adding instrumentation to a system you were running blind.** You would never debug a service by reading only its final return value; you add logging, traces, and metrics to see what is happening internally. A conversation is the same: the words are the return value, but status, subtext, emotion, and turn-taking are the internal telemetry. Reflecting back ("let me make sure I've got this…") is a **probe** — you emit a small query and read the response to confirm your model of their internal state before you act on it. Ask-and-reflect beats assume-and-broadcast, exactly as observability beats guessing.`,
        breaks: `The metaphor breaks in a way that matters: **people are not deterministic protocols, and "reading" them is not surveillance.** If you treat a person as a system to be reverse-engineered and exploited, you become the calculating, creepy operator everyone learns to avoid. Instrumentation here is in service of *understanding and caring*, not extraction. There is no exact spec you can decode; humans are ambiguous, moody, and inconsistent, and the honest move when unsure is to *ask warmly*, not to infer harder. Over-analyzing every micro-expression is its own failure mode — it makes you anxious and absent. The goal is presence, not a perfect parser.`,
      },
      workedExample: `**Sam** is pitching a teammate, **Lena**, on adopting a new testing framework. Sam talks for four minutes straight, listing features. Lena says "mm, yeah" twice, checks her phone, and offers a flat "cool."

Sam's parser, reading only content, logs "cool = agreement" and starts scheduling the migration. Wrong. The side-channels said otherwise: short verbal receipts, phone-check, and flat affect are classic **low-engagement / soft-no** signals.

Replay with instrumentation. Sam notices the flat "cool," stops, and probes: *"I've been talking a lot — what's your honest reaction? Is this even a problem worth solving right now?"* Lena exhales and says the team is underwater on a release and cannot take on a migration this quarter — a real constraint Sam never asked about. Now Sam knows the actual blocker (timing, not merit) and can offer to revisit after the release. He also just *earned trust* by demonstrating he would rather hear the truth than win the point. The reflect-and-ask move converted a fake yes into real information.`,
      branch: {
        scenario: `You are at a meetup telling someone about your side project. Two minutes in, they have said "nice" once, glanced toward the snack table, and their replies are getting shorter. What is the best read and response?`,
        choices: [
          {
            label: 'They need more detail to appreciate it — add more context and keep explaining.',
            correct: false,
            consequence: `**Instructive miss.** Shortening replies plus a glance away are disengagement signals, not a request for depth. More monologue accelerates the exit. The volume of information was never the problem; the lack of *two-way* rhythm was.`,
          },
          {
            label: 'Turn it back to them: "Anyway, that\'s my thing — what are you working on these days?"',
            correct: true,
            consequence: `**Correct.** You read the turn-taking cue and handed them the floor. Most people re-engage instantly when a conversation becomes about them, and you have shown social calibration — the thing that actually makes people want to talk to you again. If they light up, great; if not, you can both drift off gracefully with no bruise.`,
          },
          {
            label: 'They are clearly bored — abruptly say "well, I\'ll let you go" and walk off mid-sentence.',
            correct: false,
            consequence: `**Overcorrection.** You read the signal but responded with a jolt that reads as offended or awkward. Calibration is not just detecting disengagement — it is responding *smoothly*. Redirect to them first; if the energy truly is gone, exit warmly ("good to meet you — enjoy the rest of it"), not abruptly.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'rank',
          prompt: 'Put the moves of a good first conversation in the order that tends to work best.',
          items: [
            'Warm open: a friendly greeting plus one easy, genuine question about them',
            'Listen and reflect: paraphrase what they said before you reply',
            'Follow the thread: ask a follow-up about the thing they clearly care about',
            'Reciprocate: share something of your own that genuinely connects to it',
            'Read the room: notice energy and turn-taking, and give them space to steer',
            'Close with a specific, low-pressure next step ("mind if I follow you on X?")',
          ],
          explain: 'Good conversations start by giving attention (open + listen), deepen by following the other person\'s interest before broadcasting your own, and only then reciprocate. Monitoring energy throughout prevents the classic engineer failure of a great monologue nobody wanted. Closing with a *specific, small* next step is what turns a nice chat into an actual edge in your graph.',
        },
        {
          kind: 'scenario',
          title: 'The mis-read, replayed',
          intro: 'A short role-play in reading side-channels. Same situations engineers get wrong; you pick the calibrated response. There is no trick — just the option that reads the whole signal, not only the words.',
          decisions: [
            {
              situation: 'You ask a senior person for feedback on your design doc. They say, "It\'s interesting — I can see you put work in," then go quiet and do not say what they would change. What is the best read?',
              options: [
                { label: 'They approve; "interesting" plus effort-praise means ship it.', outcome: 'Miss. Praise for *effort* with no praise for the *substance*, followed by silence, is a common soft-negative. Reading it as approval means shipping something they had reservations about — and looking like you cannot take feedback.' },
                { label: 'Probe gently: "I\'d really value the honest version — what would you change or push back on?"', correct: true, outcome: 'Right. You named the subtext and made it safe to be candid. Explicitly inviting the critique gets you the real feedback and signals maturity. Senior people often soften bad news by default; you have to open the door.' },
                { label: 'Get defensive: explain why each part of the doc is already correct.', outcome: 'Miss. You have not even heard the objection yet, and defensiveness guarantees you never will. It also damages status — you look insecure. Curiosity, not defense, is the move.' },
              ],
            },
            {
              situation: 'In a group chat at a conference, one person keeps starting to speak and getting talked over — including, twice, by you. They are going quieter. What do you do?',
              options: [
                { label: 'Nothing — if they had something important they would push harder.', outcome: 'Miss. Not everyone competes for airtime, and the quiet person often has the most considered point. Ignoring the turn-taking imbalance means you lose their contribution and read as someone who dominates rooms.' },
                { label: 'Actively hand them the floor: "Wait — you started to say something a second ago, I\'d like to hear it."', correct: true, outcome: 'Right. You noticed a turn-taking cue most people miss and corrected the imbalance. People deeply remember whoever made space for them, and you just became the most trusted person in that circle without saying anything clever.' },
                { label: 'Talk more yourself to keep the energy up, assuming silence means the group is bored.', outcome: 'Miss. The silence was about being crowded out, not boredom. Filling it yourself compounds the exact problem and confirms you are reading only your own channel, not the room\'s.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Give me active-listening phrasings', kind: 'ask', question: 'Give me five natural, non-cheesy ways to reflect back what someone said and invite them to continue, that would not feel scripted coming from a fairly direct engineer.' },
        { label: 'Decode a real exchange', kind: 'ask', question: 'I will paste a conversation I found confusing. Help me read the status, subtext, emotion, and turn-taking channels I might have missed, without over-reading into it.' },
        { label: 'Harder: reading a tense meeting', kind: 'harder', concept: 'parsing status and subtext in a multi-party disagreement where the real objection is unstated' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Active listening is most powerful because it does which THREE things at once?',
          options: [
            'Verifies you understood, signals respect, and invites the other person to continue or correct you',
            'Fills silence, shows off your knowledge, and speeds up the conversation',
            'Lets you memorize facts, plan your rebuttal, and change the subject',
            'Flatters the person, hides your opinion, and ends the talk faster',
          ],
          answer: 0,
          explain: 'Reflecting back ("so the real blocker is X?") checks your parse, signals that you value them (status/respect), and hands them the turn to confirm or correct. That triple effect is why it is the single highest-leverage conversational move — and why it feels good to be on the receiving end.',
        },
        {
          kind: 'mcq',
          prompt: 'Someone gives short replies, checks their phone, and says a flat "cool" to your pitch. The best interpretation is:',
          options: [
            'Enthusiastic agreement — proceed as planned',
            'Low engagement or a soft no — pause and check in rather than push harder',
            'They dislike you personally and the relationship is over',
            'They did not hear you — repeat everything louder',
          ],
          answer: 1,
          explain: 'Short receipts, phone-checking, and flat affect are disengagement signals, not agreement. The move is to stop broadcasting and probe gently ("what\'s your honest reaction?") — which surfaces the real constraint and often rescues the relationship, as in the worked example.',
        },
        {
          kind: 'free',
          prompt: 'Recall a recent conversation where you now suspect you read only the literal words and missed a status, subtext, emotion, or turn-taking signal. What was the signal, and what could you have said to check your read in the moment?',
          rubric: 'Strong answer: (1) describes a concrete real interaction; (2) identifies a specific missed channel (status, subtext, emotion, or turn-taking) rather than restating the words; (3) proposes a natural reflect-or-ask line that would have verified the read; (4) shows the goal is genuine understanding, not manipulation or over-analysis.',
        },
      ],
      commitSummary: 'concept only — practice happens in your real outreach in 19.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '19.3',
      module: 19,
      title: 'The warm intro & the ask',
      estMinutes: 17,
      prerequisites: ['19.1', '19.2'],
      artifactSlot: null,
      concept: `The warm intro is the highest-conversion move in the whole network — a trusted person vouching routes you past the cold-inbox noise. Doing it well is a **protocol**, and the protocol is designed around one goal: **make it easy to say yes.**

The core pattern is the **double opt-in**, formalized in Fred Wilson's classic ["The Double Opt-In Introduction"](https://avc.com/2009/11/the-double-optin-introduction/):

1. You ask a mutual connection to introduce you to someone.
2. Crucially, the connector does *not* blast both parties together. They first ask the target privately: "Would you be open to an intro to Priya, who's working on X?"
3. Only after the target says yes does the connector make the actual introduction.

This protects everyone: the target is never ambushed, the connector never spends their reputation forcing an unwanted intro, and you only land in inboxes that already said yes.

To make *your* ask easy to grant, hand the connector a **forwardable blurb** — two or three sentences they can paste verbatim: who you are, the specific ask, and why it is relevant to the target. Never make a busy person compose your pitch for you. And keep the ask **small, specific, and easy to decline** — "could you forward this to Dana if you think it's a fit? No worries if not." A giftable escape hatch is what makes people say yes.

Giving intros well is the same protocol in reverse — and it is one of the best deposits you can make in the graph.`,
      reframe: {
        analogy: `A good ask is a **well-formed pull request.** A reviewer merges a PR fast when it is small, self-contained, clearly described, and low-risk to approve; they stall on a giant, vague one that makes *them* do the work of figuring out what you want. Your ask is the same: the forwardable blurb is a clean description and diff, the specific request is a tight scope, and "no worries if not" is making the change trivially revertible. The double opt-in is a **staged rollout** — you check with the downstream service (the target) before you route live traffic (the actual intro), so nobody gets paged by a request they never agreed to receive.`,
        breaks: `Where it breaks: **a "yes" is a personal favor with real social cost, not a 200 OK, and you cannot retry-spam a human.** A merged PR costs the reviewer a few minutes; a warm intro spends the connector's *reputation* — if you flake or behave badly, it is their credibility that takes the hit, and they know it. So an ask is not a stateless request you can fire repeatedly; over-asking or asking before you have given quietly downgrades you to "muted." The protocol framing helps you be considerate and legible, but never let it hide that on the other end is a person doing something generous and slightly risky for you. Earn it, and say thank you like you mean it.`,
      },
      workedExample: `**Marcus** wants to talk to **Dana**, a founder he admires, and they share one mutual contact, **Ivan**.

The wrong version: Marcus messages Ivan, "Hey, can you intro me to Dana?" — forcing Ivan to figure out who Marcus is now, what he wants, and how to phrase it. High effort, easy to ignore.

The right version: Marcus sends Ivan a message *built to forward*:

> "Ivan — no pressure at all, but if you think it's a fit: I'm the person who built the incident-replay tool you saw. I'd love 15 minutes with Dana to learn how she thinks about on-call load at her scale — I'm not selling anything, just want her perspective. Feel free to paste the below to her, and totally fine to pass:
>
> *Dana — Marcus built [tool], he's thoughtful about on-call, and would love 15 min to hear how you handle it. Open to it?*"

Now Ivan can forward in five seconds, Dana gets a clean double-opt-in ask with an easy out, and Marcus's request is specific ("15 minutes, your perspective, not selling"). Every friction point that would have produced a "no" or a silence has been removed. That is what "make it easy to say yes" means in practice.`,
      branch: {
        scenario: `You want an intro to a hiring manager through a former coworker you have not spoken to in a year. Which opening gives you the best real shot?`,
        choices: [
          {
            label: '"Hey! Long time. Can you introduce me to anyone hiring? I\'ll take anything."',
            correct: false,
            consequence: `**Instructive miss.** Two problems: you reappeared after a year of silence with an immediate ask (an under-charged edge), and the request is so vague it makes *them* do all the work of figuring out who and how. "Anything" is unforwardable. Reconnect first, then ask something specific.`,
          },
          {
            label: 'Reconnect warmly first, then send a specific, forwardable double-opt-in ask with an easy out.',
            correct: true,
            consequence: `**Correct.** You re-warm the edge before withdrawing from it, and you hand over a paste-ready blurb naming the exact person, the exact ask, and why it fits — with "no worries if not." You have minimized their effort and social risk, which is precisely what converts an intro request into an actual intro.`,
          },
          {
            label: 'Skip the coworker; DM the hiring manager cold with a long message about yourself.',
            correct: false,
            consequence: `**Instructive miss.** A cold DM throws away the one asset that beats the noise — a trusted person vouching for you. It also makes the manager do the vetting a warm intro would have done for free. The warm path exists; use it, and make it easy.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'scenario',
          title: 'Craft the ask',
          intro: 'You want a warm intro to a founder, Dana, through a mutual contact, Ivan. Build the ask one decision at a time. Pick the option that makes it easiest to say yes.',
          decisions: [
            {
              situation: 'First: how do you frame the request to Ivan (the connector)?',
              options: [
                { label: '"Can you intro me to Dana?" — let Ivan work out the details.', outcome: 'Miss. This offloads the effort onto Ivan: he now has to recall who you are, guess your ask, and write the pitch. Busy people quietly drop high-effort requests. Do the work for him.' },
                { label: 'Send a short, forwardable blurb: who you are, the specific ask, why it fits Dana — with an explicit "no pressure, fine to pass."', correct: true, outcome: 'Right. Ivan can forward it in seconds, and you have given him an easy out that protects his reputation. Making the connector\'s job trivial is the single biggest lever on whether the intro happens.' },
                { label: 'Ask Ivan to convince Dana to take a meeting because it would really help your job search.', outcome: 'Miss. You are asking Ivan to spend his credibility selling *your* need to Dana. That is a big, awkward ask that centers you, not Dana — and connectors rarely burn reputation on a hard sell.' },
              ],
            },
            {
              situation: 'Next: how specific is the actual request to Dana?',
              options: [
                { label: '"Would love to pick your brain sometime about, you know, startups and stuff."', outcome: 'Miss. Vague and open-ended asks are hard to say yes to because the person cannot tell what they are agreeing to or how long it takes. Ambiguity reads as "this will expand to fill my week."' },
                { label: '"15 minutes to hear how you think about on-call load at your scale — not selling anything, just your perspective."', correct: true, outcome: 'Right. Bounded time, a clear topic, and an explicit "not selling" remove the three things that make people hesitate: cost, scope, and hidden agenda. Specific asks convert.' },
                { label: '"An hour to walk through my whole product and get detailed feedback plus intros to your investors."', outcome: 'Miss. That is three large asks stacked on a first contact — time, deep work, and her network. Escalating scope before any relationship exists is how you get a polite no or silence.' },
              ],
            },
            {
              situation: 'Finally: Dana says yes and gives you 15 helpful minutes. What next?',
              options: [
                { label: 'Thank her, and separately thank Ivan — then actually act on her advice and later tell them what came of it.', correct: true, outcome: 'Right. Closing the loop rewards both the connector and the target, turns a one-off into a durable edge, and makes them glad they helped. Reporting back what you did with the advice is the move almost nobody makes — and everyone remembers.' },
                { label: 'Immediately ask Dana for three more intros while you have her attention.', outcome: 'Miss. Cashing a favor straight into a bigger favor is the fastest way to feel extractive. Let the edge charge; give something back before you withdraw again.' },
                { label: 'Say a quick thanks to Dana and skip Ivan — he only forwarded an email.', outcome: 'Miss. Ivan spent reputation to vouch for you; skipping his thanks is exactly how you avoid ever getting a second intro from him. The connector\'s effort is the invisible, essential part.' },
              ],
            },
          ],
        },
        {
          kind: 'platformTask',
          title: 'Make your profile easy to say yes to',
          body: 'Before you ask anyone for an intro, make sure the profile they will check passes the five-second test. When a connector or target looks you up, your LinkedIn (or X) should instantly answer "who is this and why should I care?" Rewrite your headline and About/bio so a stranger understands what you build and the value you create — position yourself by what you have *done*, not just a job title, in the spirit of Patrick McKenzie\'s ["Don\'t Call Yourself A Programmer"](https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/). Add a real photo, a specific headline, and a first line of the About section that a non-expert would understand.',
          links: [
            { label: 'LinkedIn official: tips for optimizing your profile', url: 'https://www.linkedin.com/top-content/career/resume-tips/tips-for-optimizing-your-linkedin-profile/' },
            { label: 'LinkedIn: 20 steps to a better profile', url: 'https://www.linkedin.com/business/sales/blog/profile-best-practices/17-steps-to-a-better-linkedin-profile-in-2017' },
            { label: 'Patrick McKenzie: Don\'t Call Yourself A Programmer', url: 'https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/' },
          ],
          steps: [
            'Add or update a clear, friendly headshot (profiles with photos get far more views).',
            'Rewrite your headline to say what you build and the value, not just your title.',
            'Rewrite the first two lines of your About/bio so a non-expert instantly gets what you do.',
            'List a couple of concrete things you have shipped or accomplished, framed by impact.',
            'Make the profile public enough that a warm-intro recipient can actually see it.',
          ],
          taskKey: '19.3#profile',
          proofLabel: 'Public URL of your updated LinkedIn or X profile',
          proofKind: 'url',
        },
      ],
      tutorHooks: [
        { label: 'Write my forwardable blurb', kind: 'ask', question: 'Help me draft a two-to-three sentence forwardable intro blurb for a specific person I want to reach: who I am, the specific ask, and why it is relevant to them. Make it paste-ready and easy to decline.' },
        { label: 'Critique an ask I already sent', kind: 'critique' },
        { label: 'Harder: giving a great intro', kind: 'harder', concept: 'running the double opt-in as the connector, including how to decline making an intro without damaging either relationship' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In a double opt-in introduction, what happens BEFORE the two parties are connected?',
          options: [
            'The connector emails both people at once to save time',
            'The connector privately checks with the target that they are open to the intro',
            'You email the target directly and CC the connector',
            'The target must publicly agree in a group thread',
          ],
          answer: 1,
          explain: 'The whole point of the double opt-in is that the connector gets the target\'s private yes first, so no one is ambushed and the connector never spends reputation forcing an unwanted intro. Only after that yes does the actual introduction go out.',
        },
        {
          kind: 'mcq',
          prompt: 'What most makes an intro request "easy to say yes to"?',
          options: [
            'It is long and detailed so they have full context',
            'It is a specific, small ask with a forwardable blurb and an easy way to decline',
            'It flatters the connector heavily before asking',
            'It asks for as much as possible so you only have to ask once',
          ],
          answer: 1,
          explain: 'Small scope, a paste-ready blurb, and a graceful "no worries if not" remove the cost, effort, and awkwardness that produce a no. Long messages, big asks, and heavy flattery all raise the effort or the stakes — the opposite of easy to grant.',
        },
        {
          kind: 'free',
          prompt: 'Write a forwardable intro blurb (two or three sentences) for one specific person you would genuinely like to reach through a mutual connection. Include who you are, the specific ask, and why it is relevant to them — and make it easy to decline.',
          rubric: 'Strong answer: (1) names a real, specific target and a plausible mutual connector; (2) the blurb is genuinely paste-ready and short; (3) it contains a specific, bounded ask (not "pick your brain about everything"); (4) it explains why it is relevant to the *target*, not just useful to the sender; (5) it includes an easy, face-saving out. Penalize vague, self-centered, or oversized asks.',
        },
      ],
      commitSummary: 'concept only — your updated profile and outreach get logged as real tasks below.',
    },

    // -----------------------------------------------------------------------
    {
      id: '19.4',
      module: 19,
      title: 'Building your network for real',
      estMinutes: 20,
      prerequisites: ['19.1', '19.2', '19.3'],
      artifactSlot: null,
      concept: `A network is not built in a panic before you need it; it is **maintained** as a low-grade background process. Four practices, in order of leverage:

- **Show up where your people are, repeatedly.** A community you post in weekly (Indie Hackers, a Discord, a local meetup) beats a conference you attend once. **Consistency compounds; intensity does not.** Familiarity is built by repeated small contact, not one heroic appearance.
- **Build a light personal brand.** Not "influencer" — just being *known for something specific*. Write about the problems you work on, ship things in public, answer questions in your niche. It makes people reach out to *you*, which inverts the whole cold-outreach problem.
- **Give publicly.** Answer questions, share what you learned, celebrate other people's work. Public generosity is the cheapest, most scalable deposit into the graph.
- **Run a follow-up system.** This is the one engineers most underrate and are best equipped to do. After you meet someone, log it: who, context, one thing you discussed, when to reconnect. Then actually reconnect. A [personal CRM](https://getdex.com/) or even a plain spreadsheet turns "I should stay in touch" — which never happens — into a reliable process that does.

None of this is fake. You are choosing to be consistent, generous, and organized about relationships you genuinely value. Systematizing the *remembering* is not manipulation; it is respect at scale.`,
      reframe: {
        analogy: `Your network is a **system you keep alive with a maintenance job, not a project you finish.** Think of a follow-up CRM as an **index over your relationships**: without it, every "who did I meet at that thing and what did we say?" is a full table scan of your memory that usually returns null. The CRM stores who, context, and a reconnect date, so the lookup is O(1) and reliable. Consistency-over-intensity is the same reason a **cron job that runs weekly** beats a one-time script: repeated small executions keep the system warm, where a single big run leaves it to decay again. Personal brand is **caching your value publicly** so people can find and pull it without you pushing it one message at a time.`,
        breaks: `The break is the important part: **a relationship is not a service with an uptime SLA, and you cannot automate genuineness.** The CRM reminds you to reach out; it cannot care for you, and a message that reads as CRM-generated ("it's been 90 days, touching base!") is worse than silence. The tool is a memory aid so that your *real* attention lands on the right person at the right time — it is scaffolding for sincerity, not a substitute for it. Automating the *logistics* of staying in touch is kind; automating the *warmth* is hollow and people feel it instantly. Keep the human in the loop; let the system only remember.`,
      },
      workedExample: `**Nadia** commits to a simple, sustainable system instead of sporadic bursts.

Weekly (30 minutes): she answers two questions in an [Indie Hackers](https://www.indiehackers.com/) thread in her domain and posts one short lesson from her week on X. Not viral — just consistent and specific. Over three months a handful of people start recognizing her name.

Per contact: every time she has a real conversation — a meetup, a call, a DM thread — she adds a row to her [personal CRM](https://getdex.com/): name, where they met, one genuine detail ("kid just started walking," "migrating off Kafka"), and a reconnect date 6–8 weeks out. When a date comes up, the tool nudges her, and she sends a *specific* note referencing that detail — never a generic "touching base."

The result after a quarter: two inbound intro requests (from the public posts), one former acquaintance who became a real friend (from consistent follow-up), and a co-founder conversation that started because someone remembered her name. She did no "networking events" in the schmoozing sense. She was just consistent, generous, and organized — a process any engineer can run.`,
      branch: {
        scenario: `You have limited time for building your network. Which strategy actually compounds?`,
        choices: [
          {
            label: 'Attend one big flagship conference a year and try to meet as many people as possible in three days.',
            correct: false,
            consequence: `**Instructive miss.** One high-intensity burst creates dozens of near-zero-weight edges that all decay before you follow up, and you cannot maintain 200 new "contacts" from a single weekend. Intensity without a follow-up system evaporates. Familiarity comes from repetition, not one marathon.`,
          },
          {
            label: 'Show up consistently in one community, give publicly, and run a follow-up system for the people you actually connect with.',
            correct: true,
            consequence: `**Correct.** Repeated small contact builds real familiarity, public giving makes people come to you, and the follow-up system ensures the edges you do form get maintained instead of decaying. It is lower effort per week and vastly higher yield — the compounding path.`,
          },
          {
            label: 'Automate it: schedule an app to send everyone a "just checking in!" message every 90 days.',
            correct: false,
            consequence: `**Instructive miss.** Automating the *warmth* backfires — generic auto-messages read as exactly what they are and can damage a relationship more than silence. Automate the *reminder*, then write a genuine, specific note yourself. Keep the human in the loop.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'platformTask',
          title: 'Send three genuine messages this week',
          body: 'Time to run the system for real. This week, send three genuine messages: warm intros you offer to make, reconnects to weak ties you have let decay, or specific asks built the 19.3 way. Make each one real — reference something specific about the person, and give before (or instead of) asking wherever you can. Then log them in your venture workspace so this becomes a repeatable habit, not a one-off. This is the milestone task for the module: the whole point is to move from model to practice.',
          links: [
            { label: 'Fred Wilson: The Double Opt-In Introduction', url: 'https://avc.com/2009/11/the-double-optin-introduction/' },
            { label: 'Dex: how to use a personal CRM for networking', url: 'https://blog2.getdex.com/blog/personal-crm-networking-guide/' },
          ],
          steps: [
            'Pick three real people: at least one weak tie to reconnect with, and at least one where you can give value first.',
            'Write each message specifically — reference something real about that person, no copy-paste.',
            'Send them this week (not "someday").',
            'Log each in your follow-up system with a reconnect date, so the edge stays warm.',
          ],
          taskKey: '19.4#outreach',
          proofLabel: 'Paste the three messages you sent (or a short note on each: who, and what you gave or asked)',
          proofKind: 'text',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'Communities to show up in, and a follow-up system to run',
          items: [
            { label: 'Indie Hackers', url: 'https://www.indiehackers.com/', note: 'Active community of founders and builders; a great place to give publicly and be known for something specific.' },
            { label: 'Y Combinator Startup School', url: 'https://www.startupschool.org/', note: 'Free program and community, plus the largest co-founder matching platform — consistency here compounds.' },
            { label: 'Reddit: r/startups', url: 'https://www.reddit.com/r/startups/', note: 'Large, open community for questions and discussion; low barrier to showing up regularly.' },
            { label: 'Dex — personal CRM', url: 'https://getdex.com/', note: 'Syncs contacts, logs how you met, and reminds you to reconnect. Automate the remembering, not the warmth.' },
            { label: 'Monica — open-source personal CRM', url: 'https://github.com/monicahq/monica', note: 'Self-hostable, private relationship manager if you prefer to own your data. A spreadsheet also works to start.' },
            { label: 'The strength of weak ties (2022 causal study)', url: 'https://www.science.org/doi/10.1126/science.abl4476', note: 'The evidence behind why showing up broadly, not just deeply, pays off.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Design my follow-up system', kind: 'ask', question: 'Help me set up a lightweight follow-up system I will actually maintain: what fields to track per contact, a sane reconnect cadence for different tie strengths, and a weekly 30-minute routine that fits my schedule.' },
        { label: 'Pick my one community', kind: 'ask', question: 'Given my domain and goals, which single community should I commit to showing up in consistently, and what would a realistic weekly contribution look like for me?' },
        { label: 'Critique my personal-brand plan', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'For building a network over time, which principle holds?',
          options: [
            'Intensity beats consistency — one big effort is enough',
            'Consistency compounds; repeated small contact builds familiarity that a single burst cannot',
            'You should automate personal warmth to scale it',
            'Personal brand only matters for influencers',
          ],
          answer: 1,
          explain: 'Familiarity and trust come from repeated small contact, like a weekly cron job keeping a system warm. A single high-intensity burst creates weak edges that decay before you follow up. Automate reminders, never warmth; and a light, specific personal brand helps anyone by making people come to you.',
        },
        {
          kind: 'mcq',
          prompt: 'What is the right role for a personal CRM (or a contact spreadsheet)?',
          options: [
            'To send automatic "just checking in" messages so you never have to write anything',
            'To remember who you met, the context, and when to reconnect — so your genuine attention lands well',
            'To rank your contacts by how useful they are to you',
            'To replace actually caring about people',
          ],
          answer: 1,
          explain: 'The tool is a memory aid: it stores context and nudges you to reconnect, so you can send a specific, sincere message at the right time. Automating the warmth (option 1) backfires, and treating it as a usefulness ranking (option 3) is the extractive trap this whole module warns against.',
        },
        {
          kind: 'free',
          prompt: 'Describe the follow-up system you will actually run: one community you will show up in, a simple weekly routine, and how you will log and reconnect with people you meet. Be honest about what is sustainable for you.',
          rubric: 'Strong answer: (1) names one specific community and a realistic recurring contribution; (2) describes a concrete, sustainable weekly routine (time-boxed); (3) specifies a follow-up logging method (CRM or spreadsheet) with what fields and a reconnect cadence; (4) distinguishes automating the reminder from writing genuine messages; (5) is realistic about their own bandwidth rather than aspirational-but-doomed.',
        },
      ],
      commitSummary: 'real relationship-building tasks — your updated profile and three genuine outreach messages — logged in "My venture" as a repeatable habit, not a one-off.',
    },
  ],
}
