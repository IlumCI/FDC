import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 18 — Sales at scale & negotiation  (SEASON 2)
//
// Season 1 taught the mechanics of selling on a disposable startup.json. This
// module makes it REAL: the learner stands up an actual CRM pipeline, qualifies
// against real frameworks (BANT/MEDDIC), and negotiates through role-play where
// the win-win move is the correct one. The throughline for engineers: a sales
// pipeline is a state machine with exit criteria; qualification is input
// validation; objections are blockers you debug; and a close is consensus, not
// a trick. Manipulation is explicitly ruled out — it wins the deal and loses
// the account. Every lesson is artifactSlot:null; the real work is tracked in
// the interactive blocks (the platformTask writes "My venture").
// ===========================================================================

export const module18: Module = {
  id: 18,
  season: 2,
  title: 'Sales at scale & negotiation',
  goal: 'Run a real pipeline and negotiate without manipulation: qualify hard, handle objections like debugging, and close by reaching genuine consensus.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '18.1',
      module: 18,
      title: 'The pipeline as a state machine (for real)',
      estMinutes: 18,
      prerequisites: [],
      artifactSlot: null,
      concept: `A sales pipeline is not a to-do list and it is not a feeling about which deals are "hot." It is a **finite state machine**. Each deal is one instance; each stage is a state; and the only thing that moves a deal from one state to the next is a **verifiable exit criterion** — an observable event, not a vibe.

The single most common failure of early founders is a pipeline whose stages are named after *your* activity ("Demo done", "Proposal sent") instead of the *buyer's* verifiable commitment ("Buyer confirmed budget and named the economic buyer"). Activity-named stages let you feel productive while deals rot, because you can always do more activity. Buyer-commitment stages are honest: a deal can only advance when the buyer does something you can point at.

Three rules make the machine trustworthy:

- **Every stage has an entry event and an explicit exit criterion.** If you cannot state, in one sentence, the observable thing that must be true to leave a stage, the stage is fiction.
- **Movement is monotonic-ish, with an explicit "Closed lost" sink.** Deals advance when criteria are met, and a stalled deal is *disqualified into the sink*, not left to haunt the forecast. A pipeline that only grows is a pipeline that lies.
- **Stage probabilities are calibration targets, not decoration.** If your "60% — proposal sent" stage closes 15% of the time, the number is wrong or the exit criterion is too weak. The machine is only useful if the transition probabilities are measured against reality.

A real CRM exists to enforce exactly this discipline: it makes the states explicit, forces a deal to sit in exactly one state, and records the transitions so you can measure conversion between stages. That measurement is the whole point — it tells you *where* deals die, which is the only thing that tells you what to fix.`,
      reframe: {
        analogy: `A pipeline is a **finite state machine with guard conditions**. A deal is a token that lives in exactly one state at a time. A transition fires only when its **guard** evaluates true — and the guard is a predicate over the *buyer's* observable behavior, not yours. "Qualified to buy" is not a state you declare; it is a state the token enters only when the guard \`hasConfirmedBudget && hasNamedEconomicBuyer && hasStatedPain\` returns true. "Closed lost" is the absorbing sink state that catches every token whose guard can no longer fire. Your CRM is the runtime that enforces the machine and logs every transition, so you can compute the transition probability between any two states from real event data.`,
        breaks: `A real state machine is **deterministic and memoryless**: given a state and an input, the next state is fixed. Deals are neither. The same guard event ("sent proposal") converts wildly differently depending on history the token carries — who championed it, how much pain, prior trust — so transitions are **probabilistic**, and the probabilities drift as your market and product change. Worse, unlike a CPU, a human buyer can silently leave the machine entirely (ghost you) without ever firing a "Closed lost" transition, so you must add **timers**: a deal with no buyer event in N days is auto-flagged for disqualification. The FSM is the right skeleton; just never mistake its tidiness for the messy, memory-laden, stochastic reality of the tokens moving through it.`,
      },
      workedExample: `**HubSpot's default deal pipeline — read it as a state machine, then fix its weak guards.** When you open a fresh HubSpot CRM, the out-of-the-box pipeline ships seven stages with baked-in win probabilities: *Appointment scheduled (20%), Qualified to buy (40%), Presentation scheduled (60%), Decision maker bought-in (80%), Contract sent (90%), Closed won (100%), Closed lost (0%)* (documented in HubSpot's pipeline setup guide, cited below). Notice the design: two absorbing sink states at the ends (won/lost), monotonically rising probabilities, and one deal living in exactly one stage.

But read the stage *names* critically and you see the classic trap in two of them. "Presentation scheduled" and "Contract sent" are named after **your** activity — scheduling and sending are things *you* do, and you can do them to an unqualified deal all day. Compare "Decision maker bought-in", which is named after a **buyer commitment** you can verify. The transferable move is to keep HubSpot's skeleton but rewrite every activity-named stage as a buyer-verifiable exit criterion: "Presentation scheduled" becomes "Buyer confirmed the demo will include the economic buyer and named the metric they'd evaluate"; "Contract sent" becomes "Buyer confirmed the paper is with legal and gave a signature target date." Then watch the real conversion rate between adjacent stages. If "40% — Qualified" deals actually close at 12%, your qualification guard is too weak — which is exactly the subject of the next lesson.`,
      branch: {
        scenario: `You're reviewing your pipeline with a co-founder. A $48k deal has sat in "Proposal sent" for five weeks. The buyer was enthusiastic on the demo, replied warmly to the proposal email ("looks great, let me circulate internally"), and has since gone quiet through two polite follow-ups. Your co-founder wants to keep forecasting it at 60% because "the energy was so good." What's the disciplined move?`,
        choices: [
          {
            label: 'Keep it at 60% — the buyer was genuinely excited and it would be premature to give up on real interest.',
            correct: false,
            consequence: `**The pipeline that only grows is the pipeline that lies.** "Energy" is not a guard condition; a buyer-verifiable event is. Five weeks of silence after a proposal, with no confirmed budget or named economic buyer, is a stalled token with no firing transition. Forecasting it at 60% corrupts every number downstream and, worse, lets you feel covered so you under-fill the top of the funnel. Excitement that won't circulate to a decision-maker is not a 60% deal.`,
          },
          {
            label: 'Define the missing exit criterion, make one specific disqualifying ask, and if it fails, move the deal to "Closed lost" with a reason code.',
            correct: true,
            consequence: `**Correct.** The honest question is: what buyer-verifiable event would let this token advance, and can you trigger it? Make one crisp ask that forces a state transition — "To keep this on our roadmap I need 15 minutes with whoever signs; can we get that on the calendar this week, yes or no?" A yes advances it on real evidence; continued silence fires the "Closed lost" transition with a reason code you can later analyze. Either way the machine now reflects reality, and you've freed your attention for live deals.`,
          },
          {
            label: 'Leave it untouched but keep sending a friendly monthly check-in indefinitely — no harm in staying in touch.',
            correct: false,
            consequence: `**Zombie deals are worse than dead deals.** A token parked in a state with no timer and no guard silently inflates your pipeline, drains follow-up energy, and hides the fact that you need new top-of-funnel. Staying in touch is fine — but move the deal to "Closed lost" (or a "Nurture" state that is explicitly *not* in the forecast) so your machine stops lying about it. Honesty in the states is what makes the conversion math usable.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'rank',
          prompt: 'Put these deal stages into the correct order of a clean buyer-commitment pipeline — from first contact to the terminal state. Each stage should be advanceable only by a buyer-verifiable event.',
          items: [
            'New lead — a real person from your target segment has entered the funnel',
            'Discovery booked — buyer agreed to a call and showed up',
            'Qualified — buyer confirmed budget, named the economic buyer, and stated real pain',
            'Evaluation — buyer is actively testing or comparing against named criteria',
            'Verbal commit — buyer said yes pending paperwork and gave a signature target date',
            'Closed won — signed and paid',
          ],
          explain: 'The order tracks escalating BUYER commitment, not your activity: a stranger becomes a booked call, becomes a qualified opportunity (budget + economic buyer + pain), becomes an active evaluation, becomes a verbal yes with a date, becomes a signature. Each arrow is a transition that only a buyer event can fire. Note that "Closed lost" is not in this happy-path sequence — it is the absorbing sink any stage can drop into when its guard can no longer fire.',
        },
        {
          kind: 'platformTask',
          title: 'Build your real pipeline in a free CRM (today)',
          body: 'Stand up an actual state machine for your venture. Create a free HubSpot CRM account (no credit card) and build ONE deal pipeline whose stages are named after buyer commitments, not your activity. For each stage, write a one-sentence exit criterion — the observable buyer event required to leave it. Then add 3–5 of your real (or realistic prospective) deals as tokens in the correct stages. Paste the shareable URL to your pipeline settings or a screenshot link as proof.',
          links: [
            { label: 'HubSpot — free CRM (start here, no credit card)', url: 'https://www.hubspot.com/products/crm' },
            { label: 'HubSpot — free deal pipeline software', url: 'https://www.hubspot.com/products/sales/deal-pipeline' },
            { label: 'HubSpot Knowledge Base — set up and customize pipelines', url: 'https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines' },
          ],
          steps: [
            'Create a free HubSpot account and open Settings then Objects then Deals then Pipelines.',
            'Rename the default stages so each is a BUYER commitment (e.g. "Qualified: budget + economic buyer + pain confirmed"), not your activity ("Demo done").',
            'For every stage, write its one-sentence exit criterion — the observable buyer event needed to advance.',
            'Add 3–5 real or realistic deals and place each in its honest current stage.',
            'Copy a shareable link (or upload a screenshot and paste its URL) as your proof.',
          ],
          taskKey: '18.1#pipeline',
          proofLabel: 'Link to your live CRM pipeline (or a screenshot URL)',
          proofKind: 'url',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'Pipeline & CRM setup (real, canonical)',
          items: [
            { label: 'HubSpot — Free CRM', url: 'https://www.hubspot.com/products/crm', note: 'The free tier is more than enough to run one real pipeline; one pipeline with up to 10 stages on the free plan.' },
            { label: 'HubSpot Knowledge Base — set up and customize pipelines', url: 'https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines', note: 'How to rename stages, set win probabilities, and require fields on transition — the mechanics of enforcing your state machine.' },
            { label: 'HubSpot — deal pipeline software overview', url: 'https://www.hubspot.com/products/sales/deal-pipeline', note: 'The default 7-stage pipeline and its baked-in probabilities — a good skeleton to critique and rewrite.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Design my pipeline stages', kind: 'ask', question: 'Given my product, price point, and buyer, propose a 5–7 stage pipeline where every stage is named after a BUYER commitment, and write the one-sentence verifiable exit criterion for each stage.' },
        { label: 'Rewrite my activity-named stages', kind: 'ask', question: 'Here are my current pipeline stages. Point out which ones are named after MY activity rather than a buyer commitment, and rewrite each weak one as a buyer-verifiable exit criterion with a timer for auto-disqualification.' },
        { label: 'Critique my pipeline honesty', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What most reliably distinguishes an honest pipeline stage from a self-deceiving one?',
          options: [
            'The stage has a high win-probability percentage attached to it',
            'The stage is named after a verifiable BUYER commitment, with an exit criterion you can point at, rather than after your own activity',
            'The stage has many deals in it',
            'The stage was created by a paid CRM rather than a free one',
          ],
          answer: 1,
          explain: 'Activity-named stages ("Demo done", "Proposal sent") let you feel productive while deals rot, because you can always generate more of your own activity. A stage named after a buyer commitment, with an observable exit criterion, can only advance when the buyer actually does something — which is what makes the whole state machine, and its conversion math, trustworthy.',
        },
        {
          kind: 'mcq',
          prompt: 'A deal has sat in your "Proposal sent (60%)" stage for six weeks with no buyer response to three follow-ups. In the state-machine view, what should happen?',
          options: [
            'Nothing — leave it at 60% because the buyer was enthusiastic earlier',
            'Immediately mark it Closed won because you did all the work',
            'Trigger one specific disqualifying ask; if no buyer-verifiable event fires, move it to the Closed lost sink with a reason code',
            'Raise its probability to 80% to reflect the time invested',
          ],
          answer: 2,
          explain: 'A token with no firing transition is stalled, not progressing. Make one crisp ask that forces a buyer event (e.g. a yes/no to meeting the signer this week). If it fires, advance on real evidence; if not, drop it into the Closed lost sink with a reason code so your forecast stops lying and your conversion data stays clean. Zombie deals that only inflate the pipeline are worse than honestly-dead ones.',
        },
        {
          kind: 'free',
          prompt: 'Describe the pipeline you built in the CRM. List your stages, and for two of them give the exact one-sentence buyer-verifiable exit criterion. Then name one stage where you were tempted to use an activity name, and how you rewrote it as a buyer commitment.',
          rubric: 'Strong answer: (1) lists a coherent set of stages that escalate in BUYER commitment toward a terminal won/lost state; (2) gives two concrete, observable exit criteria phrased as buyer events (budget confirmed, economic buyer named, signature date given) rather than seller activities; (3) identifies a real temptation toward an activity-named stage ("Demo done", "Proposal sent") and shows the rewrite into a buyer commitment; (4) shows understanding that stalled deals must fall into a Closed lost sink. Penalize pipelines that are pure activity lists or that lack any verifiable criteria.',
        },
      ],
      commitSummary: 'your real CRM pipeline is live in "My venture" — a state machine with buyer-verifiable exit criteria, not a wishful to-do list.',
    },

    // -----------------------------------------------------------------------
    {
      id: '18.2',
      module: 18,
      title: 'Qualification as input validation',
      estMinutes: 18,
      prerequisites: ['18.1'],
      artifactSlot: null,
      concept: `Qualification is **input validation** for your pipeline. An unqualified deal is malformed input: if you let it in, it doesn't crash immediately — it corrupts your forecast, consumes weeks of your scarcest resource (time), and eventually fails deep in the process where the cost of failure is highest. The whole discipline is to reject bad input *cheaply and early*, at the boundary, before it propagates.

Two canonical frameworks give you the validation predicates:

- **BANT** — Budget, Authority, Need, Timeline (originally from IBM). A fast, four-field gate: does the prospect have money to spend, are you talking to someone who can spend it, is there a real problem, and is there a reason to act now? BANT is coarse but fast — good for high-volume, lower-price sales.
- **MEDDIC** — Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion. A richer schema created at PTC (Parametric Technology) in the 1990s. It validates not just *whether* the deal is real but *how the buyer will actually decide* — the decision process and criteria — and whether you have an internal Champion who will sell for you when you're not in the room. MEDDIC is heavier; it's for complex, high-value, multi-stakeholder deals.

The counterintuitive truth engineers resist: **the goal of a qualification call is to disqualify fast, not to persuade.** A good discovery call is a series of tests any one of which can *fail the deal*, and failing a deal early is a *win* — it returns your most finite resource to deals that can actually close. Founders who treat qualification as a chance to pitch are like a parser that accepts every string because rejecting input feels rude. The kindest, most efficient thing you can do for a bad-fit prospect is to tell them quickly that you're not right for them.

Beware the two error types, exactly as in classification. A **false positive** (advancing a deal that will never close) is expensive but visible — you eventually notice. A **false negative** (disqualifying a real deal too aggressively) is expensive and *invisible* — you never see the revenue you waved away. Calibrate your gate so it's strict, but tune it against real closed/lost data rather than superstition.`,
      reframe: {
        analogy: `Qualification is **validating input at the trust boundary**. Every incoming lead is untrusted input. BANT and MEDDIC are your schema: a set of predicates the input must satisfy before you allocate expensive downstream resources (engineering demos, custom proposals, your calendar) to it. Disqualifying early is *failing fast at the boundary* — the cheapest possible place to reject, exactly like validating a request at the API edge instead of letting a malformed payload throw three services deep. A "Champion" in MEDDIC is a trusted delegate inside the buyer's org who re-validates your case when you're not present.`,
        breaks: `Input validation has a **fixed, knowable schema** — you can enumerate exactly what a valid email or JSON body looks like. A deal's true qualification is **latent and self-reported**, gathered from a human who may not know their own budget, may misrepresent their authority, or may not yet feel the pain they'll feel in three months. So your predicates are noisy estimators, not exact matchers, and a rigid checklist applied literally becomes an interrogation that destroys the very rapport you need to gather honest signal. Treat BANT/MEDDIC as a *conversation guide* that tells you what you still don't know — not as a form to grill the prospect through. And unlike a parser, you sometimes *change* the input: skilled discovery can help a prospect discover budget or urgency that was genuinely there but unarticulated. Validate strictly; interrogate never.`,
      },
      workedExample: `**MEDDIC at PTC — qualification as the engine of a $300M-to-$1B run.** In the mid-1990s, sales leaders John McMahon, Dick Dunkel, and Jack Napoli built MEDDIC at Parametric Technology Corporation, and PTC's revenue grew from roughly $300 million to about $1 billion over the following years — a story now cited in essentially every MEDDIC overview (see MEDDICC and HubSpot, below). The mechanism worth extracting is not the acronym; it's what MEDDIC forced reps to *disqualify on*.

The two letters that do the heaviest lifting are **E** (Economic Buyer) and the **Decision Process**. Most losing deals at PTC weren't lost because the product was worse; they were lost because reps invested months in an enthusiastic *Champion* who had no budget authority, and never validated who actually signed or how the company really approved a seven-figure purchase. MEDDIC turns those into mandatory predicates: you may not forecast a deal as qualified until you have personally validated the economic buyer and mapped the decision process. That single gate reclassifies a huge fraction of "hot" deals as false positives *before* they consume proposal and engineering time. The transferable lesson for your venture: pick the two or three predicates that most often explain your losses, make them *hard gates*, and be willing to disqualify a friendly, excited prospect who fails them — friendliness is not budget, and a Champion is not an Economic Buyer.`,
      branch: {
        scenario: `You're 20 minutes into a discovery call. The prospect — a mid-level manager — is genuinely enthusiastic, loves the demo, and says "this is exactly what we need." But when you probe, she admits she has no budget line for it this year, isn't sure who would approve it, and there's no particular deadline. She's asking for a detailed custom proposal and a second demo for her team. What do you do?`,
        choices: [
          {
            label: 'Build the detailed custom proposal and schedule the second demo — her enthusiasm is the strongest signal you have.',
            correct: false,
            consequence: `**Accepting malformed input because it was friendly.** She fails three of four BANT predicates: no Budget, unclear Authority, no Timeline. Enthusiasm from someone who can't buy is the most expensive false positive in sales — it feels like progress and consumes your scarcest resources (a custom proposal, engineering demo time) on a deal that structurally cannot close this year. Rejecting rudely is wrong; but pouring hours in without validating budget or authority is worse.`,
          },
          {
            label: 'Name the gaps honestly, try to convert her into a Champion who maps you to the economic buyer, and set a light next step gated on that — not a custom proposal.',
            correct: true,
            consequence: `**Correct — disqualify the deal's current form, qualify the path.** You don't have a qualified opportunity; you have an enthusiastic potential Champion. The right move is to say so kindly and make the next step cheap and conditional: "I don't want to build you a proposal that dies in budget — help me understand who owns this budget and how a purchase like this gets approved, and let's get them in the room." If she can't or won't open that door, the deal fails validation now, cheaply, instead of after weeks of custom work.`,
          },
          {
            label: 'Politely end the call and disqualify immediately — no budget, no deal, move on.',
            correct: false,
            consequence: `**A false negative — over-strict validation.** You're right that it's not qualified *today*, but hard-dropping an enthusiastic insider throws away a real asset: a potential Champion who can route you to the economic buyer. Qualification is strict, not brittle. Reject the deal's current form (no custom proposal yet) while keeping the cheap, conditional path open. Waving away real latent deals is the invisible, unmeasured cost that over-aggressive reps never see on their own dashboards.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each signal from a discovery call into whether it QUALIFIES the deal (evidence it can really close) or should DISQUALIFY / de-prioritize it (a red flag under BANT/MEDDIC). Judge on real buying reality, not on how pleasant the signal feels.',
          buckets: ['Qualifying signal', 'Disqualifying / red flag'],
          items: [
            { text: 'Prospect names a specific dollar budget already allocated for this class of problem', bucket: 'Qualifying signal' },
            { text: 'You are talking directly to the person who signs, and they confirm they can approve the spend', bucket: 'Qualifying signal' },
            { text: 'There is a hard deadline (a contract expiry, an audit, a launch) forcing action this quarter', bucket: 'Qualifying signal' },
            { text: 'An internal champion can articulate the metric they will use to justify the purchase upward', bucket: 'Qualifying signal' },
            { text: 'Enthusiastic contact loves the demo but has no budget line and can not name who approves it', bucket: 'Disqualifying / red flag' },
            { text: '"Just send me some information" with no agreed next step and no stated problem', bucket: 'Disqualifying / red flag' },
            { text: 'The prospect can not describe any concrete pain or cost of doing nothing', bucket: 'Disqualifying / red flag' },
            { text: 'Every answer routes to "I would have to check with a lot of people" and no decision process is knowable', bucket: 'Disqualifying / red flag' },
          ],
          explain: 'Qualifying signals are evidence across BANT/MEDDIC that the deal is REAL and buyable: allocated budget, confirmed authority, a forcing timeline, and a champion who can quantify the value. The red flags all share one trait — they feel like interest but lack the structural conditions for a purchase: no budget, no authority, no pain, no knowable decision process. The kindest and most efficient response to a red-flag deal is to fail it fast rather than pour custom work into it.',
        },
        {
          kind: 'scenario',
          title: 'Run a qualification call',
          intro: 'You have 25 minutes with an inbound prospect from a 60-person company. Your job is not to pitch — it is to validate the deal against BANT/MEDDIC and disqualify fast if it fails. Each decision tests whether you gather real signal or chase pleasant noise.',
          decisions: [
            {
              situation: 'The call opens. The prospect says "We saw your demo, looks cool — can you walk us through all the features?" How do you spend the first ten minutes?',
              options: [
                { label: 'Launch into a full feature walkthrough — they asked, so give them the tour.', correct: false, outcome: 'You spent your most valuable minutes broadcasting instead of validating. A feature tour to an unqualified prospect teaches you nothing about budget, authority, or pain — you leave the call "feeling good" with zero validation data. Discovery is a diagnostic interview, not a demo.' },
                { label: 'Ask what triggered them to look now, and what it is costing them today to not have a solution.', correct: true, outcome: 'You lead with pain and timing — the predicates that decide whether a deal is real. "What changed that made you look now?" surfaces the forcing event (Timeline) and "what does this cost you today?" quantifies the Metric and Pain. You are validating, not pitching.' },
                { label: 'Immediately quote your price to see if they flinch.', correct: false, outcome: 'Anchoring on price before establishing pain or value guarantees the number sounds too high — you have given them a cost with no benefit to weigh it against. Price is a late-stage conversation once value and budget are established, not an opening validation move.' },
              ],
            },
            {
              situation: 'She describes a real, recurring pain and a rough deadline. You ask about budget. She says: "We do not really have a budget set aside for this specifically." What is the right read and response?',
              options: [
                { label: 'Treat it as an automatic disqualification and start wrapping up the call.', correct: false, outcome: 'Too brittle. "No line item yet" is common and often means the pain has not been costed, not that money is impossible. You risk a false negative — waving away a real deal. Probe whether budget could be found for a sufficiently valuable fix before you drop it.' },
                { label: 'Probe how they have funded similar tools before and who would need to approve new spend — mapping budget and authority rather than accepting or rejecting on the word "budget".', correct: true, outcome: 'Right. "No specific budget" is a prompt to investigate, not a verdict. Asking how they funded comparable purchases reveals the real approval path (Authority + Decision Process) and whether budget can be created for enough value. You are validating the structure, not taking the first answer at face value.' },
                { label: 'Offer a steep discount on the spot so budget stops being an objection.', correct: false, outcome: 'You just taught her the price is soft and skipped straight past validating authority and decision process. Discounting to manufacture a deal before you even know who approves spend is how you win an unqualified deal at a destroyed margin — the worst of both worlds.' },
              ],
            },
            {
              situation: 'You uncover that she is enthusiastic but not the decision-maker; a VP and a security review both gate any purchase. She wants a detailed custom proposal now. How do you proceed?',
              options: [
                { label: 'Send the full custom proposal immediately — momentum matters and she asked for it.', correct: false, outcome: 'You are about to invest hours of custom work on a deal you have not validated with the economic buyer or mapped through its decision process. This is the classic PTC-era loss: months poured into a Champion with no authority. Gate the expensive work on access to the real decision path.' },
                { label: 'Enlist her as a Champion: give her a lightweight one-pager to socialize the VP, and make the custom proposal conditional on a joint call with the VP and a walk-through of the security process.', correct: true, outcome: 'Exactly right. You convert an enthusiastic non-buyer into a Champion and gate your expensive effort (the custom proposal) on validating the Economic Buyer and Decision Process. Cheap work now (a one-pager she can forward), expensive work only once the deal proves it can actually be approved.' },
                { label: 'Ask her to just forward you the VP\'s email so you can pitch them cold.', correct: false, outcome: 'Going around your Champion to cold-pitch her boss burns the one asset you have. Champions sell for you internally precisely because they have context and credibility you lack; bypassing her signals you do not value her and often gets you politely blocked. Work through the Champion, not around her.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Build my qualification checklist', kind: 'ask', question: 'Given my product, price point, and buyer, tell me whether I should anchor on BANT or MEDDIC, and turn it into a concrete discovery-call checklist of questions — including the two or three HARD gates I should be willing to disqualify a friendly prospect on.' },
        { label: 'Which of my recent losses were false positives?', kind: 'ask', question: 'Help me analyze my recent lost deals: which ones I should have disqualified earlier and on which specific predicate (budget, economic buyer, decision process, pain), so I can tighten my qualification gate against real data.' },
        { label: 'A harder qualification case', kind: 'harder', concept: 'qualifying a multi-stakeholder enterprise deal where the champion, the economic buyer, and the technical evaluator all want different things' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In the "qualification as input validation" frame, why is disqualifying a deal early considered a WIN rather than a failure?',
          options: [
            'Because it lets you avoid ever talking to difficult prospects',
            'Because rejecting bad input cheaply at the boundary returns your scarcest resource (time) to deals that can actually close, before the deal fails expensively downstream',
            'Because more disqualifications always means a healthier business',
            'Because it improves your close rate on paper regardless of revenue',
          ],
          answer: 1,
          explain: 'An unqualified deal is malformed input: accepted, it corrupts your forecast and consumes weeks of custom work before failing deep in the process. Rejecting it early — at the trust boundary — is failing fast at the cheapest possible place, freeing your finite time for deals that can close. The goal of discovery is to disqualify fast, not to persuade.',
        },
        {
          kind: 'mcq',
          prompt: 'Which pair of MEDDIC elements most often explains why an enthusiastic-looking deal was actually doomed, per the PTC story?',
          options: [
            'Metrics and Champion — the numbers and the internal advocate',
            'Economic Buyer and Decision Process — reps invested in a Champion with no signing authority and never mapped how the purchase was really approved',
            'Identify Pain and Decision Criteria — the prospect had no complaints',
            'Metrics and Timeline — there was no deadline',
          ],
          answer: 1,
          explain: 'MEDDIC\'s heaviest-lifting predicates are the Economic Buyer and the Decision Process. Most losing deals were not lost on product; they were lost because reps poured months into an enthusiastic Champion who could not sign, without ever validating who actually approved the spend or how the company really decided. Making those hard gates reclassifies many "hot" deals as false positives before they cost you proposal and engineering time.',
        },
        {
          kind: 'free',
          prompt: 'Write your own qualification gate. Pick BANT or MEDDIC for your venture and justify the choice, then state the two hard predicates you will be willing to DISQUALIFY a friendly, enthusiastic prospect on. Give one example of a past or hypothetical deal that would fail your gate and why failing it fast is the right outcome.',
          rubric: 'Strong answer: (1) chooses BANT or MEDDIC with a reason tied to deal complexity/price (BANT for high-volume/lower-price, MEDDIC for complex/high-value multi-stakeholder); (2) names two SPECIFIC hard gates (e.g. no validated economic buyer, no knowable decision process, no confirmed budget, no quantifiable pain) rather than vague ones; (3) shows willingness to disqualify an enthusiastic prospect who fails a gate, understanding enthusiasm is not budget and a Champion is not an Economic Buyer; (4) explains WHY early failure is a win (returns finite time, avoids an expensive false positive). Penalize answers that treat qualification as a chance to pitch or that refuse to ever disqualify.',
        },
      ],
      commitSummary: 'no slot written — you now have a real qualification gate (BANT/MEDDIC) that disqualifies bad-fit deals fast, protecting your finite time for deals that can close.',
    },

    // -----------------------------------------------------------------------
    {
      id: '18.3',
      module: 18,
      title: 'Negotiation without manipulation',
      estMinutes: 20,
      prerequisites: ['18.2'],
      artifactSlot: null,
      concept: `Negotiation terrifies engineers because it looks like the one domain with no ground truth — pure social gamesmanship. It is not. **Principled negotiation**, the method from Roger Fisher and William Ury's *Getting to Yes* (Harvard Negotiation Project), gives you an honest, repeatable algorithm that never requires manipulation. Its four moves: **separate the people from the problem**, **focus on interests, not positions**, **invent options for mutual gain**, and **insist on objective criteria**.

Three concepts do most of the work:

- **BATNA** — your Best Alternative To a Negotiated Agreement: what you'll do if this deal falls through. Your BATNA, not your bluster, is the true source of your power. You should never accept a deal worse than your BATNA, and you should quietly work to *improve* it (a second interested customer, a lower-cost fallback) before and during any negotiation. Knowing the other side's BATNA is just as valuable.
- **Interests vs positions.** A *position* is what someone says they want ("I need 30% off"). An *interest* is *why* — the underlying need (predictable cost, internal justification, fear of overpaying). Positions collide; interests often don't. Almost all creative deals come from trading across differently-valued interests to **expand the pie** before dividing it.
- **Anchoring**, honestly. The first number stated exerts a strong gravitational pull on the final one — a real, well-documented cognitive bias. Using an anchor is not manipulation *if the anchor is defensible* — grounded in objective criteria (comparable prices, value delivered, a public rate card). Pulling a number from nowhere to exploit the bias is manipulation; opening with a justified number is simply advocacy.

The line between negotiation and manipulation is **information symmetry and consent**. Persuasion gives the other party true information and lets them decide in their own interest. Manipulation relies on them *not* seeing something — a fake deadline, a manufactured scarcity, a hidden defect, exploiting a bias they'd object to if named. The test is simple: *would this move still work if the other side could see exactly what you were doing?* Principled negotiation passes that test; manipulation fails it by design. And there is a hard commercial reason to stay clean beyond ethics: manipulation wins the deal and loses the account. The customer you trick signs once, churns fast, warns their network, and never refers you. In any repeated game — which every real business is — honesty is not just right, it's the dominant long-run strategy.`,
      reframe: {
        analogy: `Principled negotiation is **constraint solving, not a zero-sum game**. Positions are two conflicting hard constraints ("price = X" vs "price = Y") over a single variable — a system that looks infeasible. Interests are the *real* constraints underneath, and there are usually more variables than the one you're fighting over: price, payment terms, contract length, scope, timing, a case study, a referral. Reframing from positions to interests is enlarging the variable set until the solver finds a feasible region that satisfies both parties' true constraints — "expanding the pie." Your BATNA is your objective function's floor: the value of the no-deal path, below which you refuse any solution.`,
        breaks: `A constraint solver assumes the constraints are **fixed, known, and honestly declared**. Human negotiators strategically **hide and misstate** their constraints — a counterpart may overstate a deadline or conceal their true BATNA — so you're solving a system where some inequalities are deliberately obscured. And unlike a solver optimizing a scalar, people carry constraints the math never captures: fairness, face, and the memory of how they were treated. A deal that is numerically optimal but leaves the other side feeling cornered is a *failed* negotiation, because it poisons the repeated game — they churn, they warn others, they never refer you. So use the solver frame to find creative feasible regions, but hold two things it can't model: the counterpart may be lying about the constraints, and *how the other party feels at the end is itself a term of the deal*.`,
      },
      workedExample: `**The orange — the canonical "expand the pie" example from Getting to Yes.** Two people quarrel over a single orange. Both insist "I need the orange" — identical *positions* over one indivisible variable, a textbook zero-sum fight. The intuitive "fair" outcome is to split the difference: cut it in half. Fisher and Ury use this deliberately simple story (see the Program on Negotiation, below) to show why splitting the difference is often the *wrong* answer.

When you ask *why* — the move from positions to interests — it turns out one person wants to eat the fruit and the other wants the peel to bake a cake. Their interests don't actually conflict; they were hidden under identical positions. The value-maximizing deal gives one person all the flesh and the other all the peel: each gets **100% of what they wanted**, versus 50% each from naively splitting. Nothing was manipulated — the gain came purely from surfacing true interests and discovering the variables (flesh vs peel) were separable. Transfer this directly to your deals: when a prospect says "I need 20% off," the move is never to reflexively meet at 10%. It's to ask what's behind the number. Maybe they need a lower *first-year* cost (so trade a longer term for a ramp), or predictable budgeting (so trade a discount for annual prepay), or internal cover (so give a defensible public-rate justification). Find the peel-versus-flesh, and you turn a margin fight into a bigger pie.`,
      branch: {
        scenario: `A well-qualified enterprise prospect wants to buy, but their procurement lead opens hard: "Your list price is $60,000 a year. We have budget for $40,000, take it or leave it — and honestly a competitor quoted us less." You have a real BATNA (two other live deals in your pipeline), your true floor is about $48,000, and you suspect the competitor is not truly comparable. You genuinely want this logo. Walk through the negotiation.`,
        choices: [
          {
            label: 'Cave to $40,000 immediately to secure the logo — a marquee customer is worth the margin hit, and they said take it or leave it.',
            correct: false,
            consequence: `**Accepting below your floor on an unverified anchor.** $40k is below your $48k BATNA-justified floor, and "take it or leave it" plus a vague competitor quote is a classic pressure anchor you have not tested. Caving instantly teaches procurement your price is soft, sets your renewal and every future negotiation lower, and may win a logo at a loss. A strong BATNA exists precisely so you do not have to accept a deal worse than walking away.`,
          },
          {
            label: 'Probe the interests behind the number, hold your value with objective criteria, and expand the pie — trade terms (annual prepay, longer contract, a case study) to bridge price while staying above your floor.',
            correct: true,
            consequence: `**Correct — principled negotiation, no manipulation.** First separate people from problem ("I want to make this work — help me understand the $40k figure"). Surface the interest: is it a hard budget cap, a fiscal-year timing issue, or a fear of overpaying versus the competitor? Then hold value with objective criteria (what the competitor's quote does and does not include) and expand variables: "I can get closer to your number with a 2-year commit and annual prepay, plus a joint case study." You reach a deal above your $48k floor that gives them a defensible win — and you kept the account clean for the long game.`,
          },
          {
            label: 'Invent a fake "price goes up at midnight tonight" deadline and imply two other buyers are about to take the last slot, to pressure them into signing at $55,000 fast.',
            correct: false,
            consequence: `**This wins the deal and loses the account.** A fabricated deadline and manufactured scarcity are textbook manipulation — they fail the transparency test (the move only works because procurement can not see it is fake). Even if they sign, you have started a multi-year relationship on a lie a sophisticated procurement team will likely detect, poisoning renewals, referrals, and reputation. In the repeated game every business actually plays, manipulation is a dominated strategy. Anchor with real criteria, never invented pressure.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Discount vs margin: feel the real cost of "just knock off 10%." You sell a product for $200 with a unit cost of $120 (a 40% gross margin, so $80 gross profit per unit). A prospect pushes for a 10% price cut. After the discount, by what PERCENT does your per-unit gross profit fall? Compute the drop in gross profit as a percentage of the original $80.',
          answer: 25,
          tolerance: 1,
          unit: '%',
          explain: 'A 10% cut on the $200 price is $20 off, so the new price is $180 while cost stays $120 — new gross profit is $60. The drop is (80 minus 60) / 80 = 20/80 = 25%. A 10% price concession destroyed 25% of your margin. This asymmetry is why reflexive discounting is so dangerous, and why you trade OTHER variables (term, prepay, scope, a case study) instead of reaching for the price lever first.',
        },
        {
          kind: 'scenario',
          title: 'A multi-decision negotiation (the win-win path is correct)',
          intro: 'You are negotiating an annual contract with a serious, qualified buyer. At each step, the manipulative move and the cave-in are both wrong; the principled, pie-expanding move that respects both sides\' real interests is correct. Your BATNA is solid and your true floor is known — negotiate from strength without deceit.',
          decisions: [
            {
              situation: 'The buyer opens: "Before we talk price, what\'s the absolute lowest you can go?" How do you respond?',
              options: [
                { label: 'Blurt out your true floor immediately to show good faith and speed things up.', correct: false, outcome: 'Leading with your floor collapses your entire negotiating range to zero — you have anchored on your worst acceptable outcome and can only move down from there. Good faith does not mean surrendering your BATNA. Anchor on justified value first; your floor is private information.' },
                { label: 'Redirect to value and interests: "Before we anchor on a number, help me understand what success looks like for you and what\'s driving the budget — then I can propose the right package."', correct: true, outcome: 'You refuse to be anchored to your floor and instead move the conversation to interests and objective value. Understanding their real constraints (budget timing, must-have outcomes) lets you build a package that expands the pie rather than just shrinking your price. This is separating people from problem and focusing on interests.' },
                { label: 'Name a number far below list to seem generous and build goodwill.', correct: false, outcome: 'Opening with a lowball anchor on your own side trains the buyer that your price is soft and there is always more to give. Goodwill built by signaling weak pricing evaporates at renewal. Anchor high but DEFENSIBLE — on real value and comparables — not low to be liked.' },
              ],
            },
            {
              situation: 'You learn their real constraint: they have hard budget approval for $40,000 this fiscal year, but genuine appetite for more next year. Your list is $60,000; your floor is $48,000. What do you propose?',
              options: [
                { label: 'Just discount to $40,000 to fit this year\'s budget — meeting their number keeps it simple.', correct: false, outcome: 'You dropped below your $48k floor and left all the pie-expanding variables (time, term, ramp) on the table. Their constraint was about THIS fiscal year, not total value — so a flat discount solves the wrong problem while destroying margin. When the constraint is timing, trade on time, not price.' },
                { label: 'Propose a ramped 2-year deal: a lower first-year fee that fits this year\'s $40k approval, stepping up in year two, with a total contract value above your floor.', correct: true, outcome: 'Exactly — you expanded the variable set from price alone to price-over-time. A ramp respects their real interest (this year\'s budget cap) while a 2-year commit lifts total value above your floor and locks in retention. Both sides get more than a naive split would give: their interests and yours were not actually in conflict once you found the extra variable.' },
                { label: 'Tell them budgets are "not your problem" and hold firm at $60,000, take it or leave it.', correct: false, outcome: 'Rigidly defending a position while ignoring their real constraint is how you lose a winnable deal to a competitor who was willing to get creative. Principled negotiation separates the people from the problem and treats their budget reality as a shared constraint to solve together, not an obstacle to steamroll.' },
              ],
            },
            {
              situation: 'They love the ramped structure but ask for one more concession: "Throw in your premium onboarding tier for free and we\'ll sign today." That tier has real cost to you. How do you handle it?',
              options: [
                { label: 'Say yes to everything to close today — momentum is worth more than one onboarding tier.', correct: false, outcome: 'Conceding for free at the finish line teaches the buyer that pushing always yields more and gives away real value for nothing in return. Every concession should be TRADED, not gifted — an unreciprocated give-away signals your prices and terms were padded all along and invites more asks at renewal.' },
                { label: 'Trade it, don\'t gift it: "I can include premium onboarding if you\'ll be a reference and do a short case study once you\'re live" — exchanging value for value.', correct: true, outcome: 'Right. You converted a one-sided ask into a mutual-gain trade: they get the onboarding they value, you get a reference and case study worth far more than the onboarding cost in future pipeline. Trading concessions keeps the deal balanced and turns a cost into a marketing asset — expanding the pie one last time.' },
                { label: 'Refuse flatly — you already ramped the price, so no more give.', correct: false, outcome: 'A flat refusal at the close treats the negotiation as positional trench warfare and risks souring a deal you have nearly won. The issue is not that they asked; it is that a give should be reciprocated. Say yes to the onboarding IN EXCHANGE for something you value — do not just plant your flag and risk the whole deal over a tradeable item.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Map my BATNA and floor', kind: 'ask', question: 'Help me work out my BATNA for an upcoming negotiation and translate it into a hard walk-away floor, then suggest concrete ways I could improve my BATNA before I sit down (a second interested buyer, a fallback plan) so I negotiate from real strength.' },
        { label: 'Turn their position into interests', kind: 'ask', question: 'My prospect is demanding a specific discount (their position). Help me brainstorm the likely INTERESTS behind it and a set of non-price variables I could trade — term, prepay, scope, timing, references — to expand the pie and reach a deal above my floor.' },
        { label: 'Is this move manipulation or persuasion?', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What is the single clearest test for whether a negotiation tactic is honest persuasion versus manipulation?',
          options: [
            'Whether it results in a signed deal',
            'Whether the tactic would still work if the other side could see exactly what you were doing — persuasion survives transparency; manipulation depends on them not seeing something',
            'Whether you feel guilty afterwards',
            'Whether the price you got was above your floor',
          ],
          answer: 1,
          explain: 'Manipulation relies on the counterpart NOT seeing something — a fake deadline, manufactured scarcity, a hidden defect, an exploited bias. Honest persuasion gives them true information and lets them decide in their own interest, so it survives full transparency. Beyond ethics, manipulation is a dominated strategy in the repeated game every business plays: the customer you trick churns fast and warns their network.',
        },
        {
          kind: 'mcq',
          prompt: 'A buyer states the position "I need 20% off." In principled negotiation, what is the correct next move, and why?',
          options: [
            'Immediately counter at 10% to split the difference — it feels fair',
            'Ask what interest is behind the number (predictable cost? internal justification? fiscal timing?) so you can trade non-price variables and expand the pie instead of just shrinking margin',
            'Refuse any discount and hold your list price as a matter of principle',
            'Give the full 20% to build goodwill for the relationship',
          ],
          answer: 1,
          explain: 'Positions collide; interests often do not. "20% off" is a position — the move is to uncover WHY (the interest) and discover extra variables (term, prepay, scope, timing, references) to trade across, turning a margin fight into a bigger pie. Splitting the difference at 10% is the orange-cut-in-half mistake: it ignores that the two sides may value different things and leaves mutual gains undiscovered.',
        },
        {
          kind: 'free',
          prompt: 'For a real or realistic upcoming deal, write your negotiation prep: (1) your BATNA and the walk-away floor it implies; (2) the buyer\'s likely POSITION versus their probable underlying INTEREST; (3) two non-price variables you could trade to expand the pie; and (4) one anchor you could open with that is defensible by objective criteria rather than manipulative.',
          rubric: 'Strong answer: (1) states a concrete BATNA and derives a numeric or clear walk-away floor from it; (2) distinguishes a stated position from the underlying interest (not just restating the position); (3) names two genuine NON-price levers (term length, prepay, scope, timing, references, case study) that expand rather than divide the pie; (4) proposes an anchor grounded in objective criteria (comparables, value delivered, published rate) and can explain why it is advocacy, not manipulation (it survives transparency). Penalize answers that reach for price/discount as the only lever, that confuse position with interest, or that propose fake-deadline / manufactured-scarcity tactics.',
        },
      ],
      commitSummary: 'no slot written — you can now negotiate from a real BATNA and floor, trade interests to expand the pie, and stay on the honest side of the line that separates persuasion from manipulation.',
    },

    // -----------------------------------------------------------------------
    {
      id: '18.4',
      module: 18,
      title: 'Objections & closing as consensus',
      estMinutes: 16,
      prerequisites: ['18.3'],
      artifactSlot: null,
      concept: `Engineers dread objections because sales culture frames them as attacks to be "overcome." Reframe: an objection is a **blocker in a build**, and handling it is **debugging**. A blocker is information — it tells you exactly which condition is currently false and preventing the deal from compiling. A prospect who raises a real objection is doing you a *favor*: they've handed you a stack trace. The prospect who says nothing and ghosts you gave you a silent failure with no logs, which is far worse.

The debugging discipline has four steps, and engineers already know them:

- **Reproduce, don't react.** Don't patch a symptom you don't understand. When someone says "it's too expensive," that is a symptom with many possible root causes: no budget, unclear value, fear versus a competitor, or a stalling proxy for a different unspoken objection. Ask questions until you can *reproduce* the real blocker.
- **Find the root cause, not the surface string.** "Too expensive" compared to *what*? "I need to think about it" — about which specific thing? The stated objection is rarely the root cause; keep asking "what would need to be true?" until you hit the actual failing condition.
- **Isolate: is it a real blocker or a smoke test?** Some objections are genuine gating conditions; others are the buyer checking whether you'll cave (a price objection is often a test of your conviction, not a true budget wall). Distinguish them before you spend a concession.
- **Fix the condition or fail the build honestly.** If the blocker is real and fixable, address it with evidence. If it's genuinely unfixable — you're wrong for them — say so. A false close is a deferred crash: it surfaces as churn, a clawback, or a bad reference.

**Closing is consensus, not conquest.** The manipulative-sales caricature — "always be closing," hard pressure, the assumptive trap — is exactly the wrong model, and it is why engineers find closing distasteful. A real close is the moment you make explicit an alignment that already exists: every blocker is debugged, both sides believe the value exceeds the price, and signing is simply the natural next state. If you have to *pressure*, you have a blocker you haven't found — pressure is what people reach for when they skipped the debugging. The best close is often just an honest, direct question: "From everything we've covered, this looks like a fit to me — is there anything left that would stop you from moving forward?" That question either produces a yes or surfaces the last remaining blocker. Both are wins; both beat pressure.`,
      reframe: {
        analogy: `An objection is a **failing assertion in your test suite**, and closing is a **green build**. Each objection is a specific assertion that currently evaluates false — \`assert(perceivedValue > price)\`, \`assert(trustsImplementation)\`, \`assert(hasBudgetPath)\`. You do not "overcome" a failing test by shouting at it; you read *which* assertion failed, find the root cause, and either fix the underlying condition or accept the build genuinely isn't ready to ship. The close is not a separate act of persuasion — it is what happens automatically when every assertion passes at once. Asking for the sale is just running the final build and reading the result.`,
        breaks: `A test suite is **deterministic and complete**: the same input always fails the same assertion, and a green suite means the code is correct. Human objections are neither. The *stated* objection often isn't the one actually failing — "too expensive" can be a proxy for "I don't trust that you'll still be here in a year" — so you're debugging a system that **lies about its own error messages**. And a green build is not the same as a good deal: you can get every objection to "pass" through pressure or false reassurance and still ship a deal that crashes in production as churn. Unlike code, the buyer has feelings, memory, and a BATNA, and can revoke a "pass" the moment they feel handled. Use the debugging frame to stay curious instead of defensive — but never treat a human "yes" as a compiled binary that can't change its mind.`,
      },
      workedExample: `**"Your price is too high" — the most common objection, debugged rather than discounted.** HubSpot's sales research reports that sellers who successfully handle buyers' objections can reach close rates as high as 64%, and their guidance on the price objection is explicit: the reflexive discount is almost always the wrong first move (see HubSpot's objection-handling and price-objection guides, cited below). Read the objection as a failing assertion with several possible root causes, and the right response falls out.

"Too expensive" is a *symptom string*, not a root cause. Debugging it means asking "expensive compared to what?" — and the answers diverge completely. Compared to a *competitor*? Then the failing assertion is about differentiated value, and you fix it with objective criteria (what your price includes that theirs doesn't), not a discount. Compared to *doing nothing*? Then you never established the cost of the status quo, and you fix it by re-quantifying their pain. A *budget* wall this fiscal year? Then it's a timing constraint you solve with terms (a ramp or prepay, exactly as in the last lesson), not a lower price. Just *testing whether you'll cave*? Then discounting instantly *confirms* your price was inflated and trains them to push forever. Notice that only one of these four root causes is even *about* the number — yet the untrained instinct answers all four by cutting price, which fixes the wrong bug, destroys margin (recall a 10% cut can erase 25% of gross profit), and often doesn't even close the deal. The transferable move: never patch a price objection with a discount until you've reproduced which assertion actually failed.`,
      branch: {
        scenario: `You've run a great process: qualified hard, negotiated fairly, and the buyer clearly has the pain and the budget. On what feels like the final call, they go quiet, then say: "This all looks good... I just need to think it over and circle back." No specific concern, no date. Your instinct is screaming that the deal is slipping. What's the right move?`,
        choices: [
          {
            label: 'Apply pressure: invent a discount that expires Friday to force a decision before they cool off.',
            correct: false,
            consequence: `**Reaching for pressure because you skipped the debugging.** "I need to think about it" is a vague error message hiding a specific failing assertion — and a fake expiring discount neither finds nor fixes it. It manufactures urgency the buyer will resent, signals your price was soft, and often produces a "no" just to escape the pressure. When you feel the urge to pressure, it means there is an undebugged blocker; find it, do not paper over it.`,
          },
          {
            label: 'Gently surface the real blocker: "Totally fair — usually when someone wants to think it over there\'s one specific thing that isn\'t fully settled. What\'s the piece you\'re least sure about?"',
            correct: true,
            consequence: `**Correct — debug the vague objection into a specific one.** "Think it over" is a silent failure with no stack trace; your job is to get logs. A calm, permission-giving question converts the fog into a nameable blocker — a stakeholder you haven't met, a risk about implementation, a lingering price doubt — which you can then actually address. You are not pressuring; you are making the hidden failing assertion visible so consensus can be reached honestly.`,
          },
          {
            label: 'Respect it completely: say "of course, take all the time you need," and wait for them to circle back on their own.',
            correct: false,
            consequence: `**Too passive — you accepted a silent failure and closed the logs.** "Take all the time you need" with no next step is how well-qualified deals quietly die: the unspoken blocker never surfaces, momentum decays, and you have no event to advance the state machine. Respecting the buyer does not mean abandoning the process — surface the specific concern kindly and agree a concrete next step, or the deal drifts into the Closed lost sink by neglect.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'scenario',
          title: 'Debug a live objection',
          intro: 'A well-qualified buyer raises a price objection late in the process. Treat it as a failing assertion: reproduce it, find the root cause, and decide whether to fix the condition or trade — without reflexive discounting and without manipulation.',
          decisions: [
            {
              situation: 'The buyer says: "Honestly, your price is just too high." What is your FIRST move?',
              options: [
                { label: 'Offer a 15% discount right away to keep the deal alive.', correct: false, outcome: 'You patched a symptom you had not diagnosed. "Too high" has at least four different root causes — competitor comparison, weak value, budget timing, or a conviction test — and only one is actually about the number. Discounting first fixes the wrong bug, destroys margin (a 10% cut can erase 25% of gross profit), and often does not even close the deal.' },
                { label: 'Ask "Too high compared to what?" to reproduce the real blocker before touching price.', correct: true, outcome: 'Exactly — you refuse to react and instead reproduce the failure. "Compared to what?" splits the vague symptom into diagnosable root causes: a competitor (fix with differentiated value), doing nothing (re-quantify pain), a budget cap (trade on terms), or a conviction test (hold firm). You cannot fix the bug until you know which assertion failed.' },
                { label: 'Defend the price by listing every feature you offer.', correct: false, outcome: 'Feature-dumping is reacting, not debugging — you are answering an objection you have not yet understood. If the real root cause is budget timing or trust, a wall of features misses it entirely and sounds defensive. Diagnose first; a targeted response to the ACTUAL failing assertion beats a scattershot feature list every time.' },
              ],
            },
            {
              situation: 'It turns out the root cause is a genuine comparison: a cheaper competitor quoted them 30% less. What now?',
              options: [
                { label: 'Match the competitor\'s price to avoid losing on cost.', correct: false, outcome: 'Racing to match on price concedes that the two offers are equivalent — which is exactly the frame you must challenge. You also torch your margin and set a precedent that your price bends under any competitor mention. The failing assertion is about VALUE differentiation, so answer it with evidence, not a price cut.' },
                { label: 'Use objective criteria: clarify what your offer includes that the competitor\'s does not, and let them weigh true total value.', correct: true, outcome: 'Right. The assertion that failed is perceivedValue > price relative to the alternative — so you fix it with objective criteria, surfacing the real differences (scope, reliability, support, total cost of ownership) the raw quote hides. You let the buyer decide on complete information: persuasion, not manipulation, and it survives full transparency.' },
                { label: 'Tell them the competitor\'s product is bad and their company is unreliable.', correct: false, outcome: 'Trashing the competitor is a credibility risk that makes you look insecure and can be manipulative if you distort facts. Buyers discount badmouthing heavily. Contrast on objective, verifiable differences in value instead — let the comparison speak for itself rather than attacking, which poisons trust in the repeated game.' },
              ],
            },
            {
              situation: 'You have addressed the value gap honestly and the buyer is nodding — every blocker seems debugged. How do you close?',
              options: [
                { label: 'Use an assumptive trap: send the contract without asking and act as if it is already decided.', correct: false, outcome: 'The assumptive/pressure close is the manipulative caricature that makes closing feel dirty — and it backfires with sophisticated buyers who feel handled and revoke their soft yes. If consensus genuinely exists you do not need a trick; if it does not, a trick only hides the last blocker until it resurfaces as churn.' },
                { label: 'Make the alignment explicit and ask directly: "From everything we\'ve covered this looks like a fit — is there anything left that would stop you moving forward?"', correct: true, outcome: 'This is closing as consensus: you name the alignment that already exists and invite the last hidden blocker to surface. The question can only produce a yes (consensus confirmed) or the final objection (now debuggable). Both are wins, and both beat pressure — which is only ever a substitute for a blocker you failed to find.' },
                { label: 'Keep selling more features to be safe before asking for anything.', correct: false, outcome: 'Over-selling past the point of consensus introduces new doubt where none existed — you can talk a buyer OUT of a decision they had already made. Once every assertion passes, the build is green; running more tests just risks flakiness. Recognize alignment and ask the clean closing question.' },
              ],
            },
          ],
        },
        {
          kind: 'resource',
          title: 'Negotiation, objections & closing — the real reference shelf',
          items: [
            { label: 'Getting to Yes — principled negotiation (Program on Negotiation, Harvard)', url: 'https://www.pon.harvard.edu/daily/negotiation-skills-daily/principled-negotiation-focus-interests-create-value/', note: 'The four moves and the interests-vs-positions core, from the group that literally wrote the book.' },
            { label: 'What is a BATNA? (Program on Negotiation, Harvard)', url: 'https://www.pon.harvard.edu/tag/batna/', note: 'The single most important concept in negotiation: your walk-away power. Read before any real negotiation.' },
            { label: 'Never Split the Difference — Chris Voss (The Black Swan Group)', url: 'https://www.blackswanltd.com/never-split-the-difference', note: 'The FBI-negotiator counterpoint to Getting to Yes: tactical empathy, calibrated questions, and why "splitting the difference" is often a trap.' },
            { label: 'MEDDIC / MEDDPICC — the qualification methodology (MEDDICC)', url: 'https://meddicc.com/meddpicc-sales-methodology-and-process', note: 'The canonical source on the framework created at PTC; the Economic Buyer and Decision Process are the gates that matter.' },
            { label: 'SPIN Selling — the questioning method (HubSpot overview)', url: 'https://blog.hubspot.com/sales/spin-selling-the-ultimate-guide', note: 'Situation / Problem / Implication / Need-payoff — how to ask questions that let the buyer sell themselves, from Neil Rackham\'s 35,000-call study.' },
            { label: 'Objection handling: 44 common objections & how to respond (HubSpot)', url: 'https://blog.hubspot.com/sales/handling-common-sales-objections', note: 'A practical catalog to debug against — including the four-step process and the "price is too high" playbook.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Debug my toughest objection', kind: 'ask', question: 'Here is the objection I keep hearing from prospects. Help me enumerate the possible ROOT causes behind it, the diagnostic questions that would distinguish them, and the honest fix for each — without reflexive discounting.' },
        { label: 'Write my closing question', kind: 'ask', question: 'Given where my deal stands, help me write a direct, non-manipulative closing question that names the consensus we have reached and invites any last blocker to surface, plus how I would handle each likely response.' },
        { label: 'Is my close consensus or pressure?', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In the "objection as blocker to debug" frame, why is a prospect who raises a specific objection doing you a favor?',
          options: [
            'Because it means they have already decided to buy',
            'Because they handed you a stack trace — information about exactly which condition is currently false — whereas the prospect who silently ghosts you gave a failure with no logs',
            'Because objections legally obligate them to continue negotiating',
            'Because it gives you an excuse to offer a discount',
          ],
          answer: 1,
          explain: 'An objection is a failing assertion made visible — it tells you precisely which condition is blocking the deal, so you can find the root cause and fix it or fail honestly. The genuinely bad case is silent: the prospect who says nothing and disappears has given you a failure with no logs. That is why surfacing objections, even late, beats a quiet ghost.',
        },
        {
          kind: 'mcq',
          prompt: 'What best distinguishes "closing as consensus" from the manipulative "always be closing" caricature?',
          options: [
            'Consensus closing uses more aggressive urgency tactics',
            'A consensus close makes explicit an alignment that already exists once every blocker is debugged; if you have to apply pressure, it signals an undebugged blocker you failed to find',
            'Consensus closing means never asking for the sale directly',
            'They are the same thing described with different words',
          ],
          answer: 1,
          explain: 'A real close is a green build: every objection (assertion) passes, both sides believe value exceeds price, and signing is the natural next state. Pressure is what people reach for when they skipped the debugging — it papers over a blocker instead of finding it. The best close is often a direct, honest question that either confirms consensus or surfaces the last blocker; both beat pressure.',
        },
        {
          kind: 'free',
          prompt: 'Take the single objection you most fear hearing about your venture. Write it out, then debug it: list two or three possible ROOT causes, the diagnostic question you would ask to tell them apart, and for the most likely root cause, the honest fix (which may be trading a non-price variable, providing evidence, or conceding you are not the right fit). Finish with the exact consensus-style closing question you would ask once it is resolved.',
          rubric: 'Strong answer: (1) states a real, specific objection rather than a strawman; (2) enumerates multiple plausible ROOT causes (competitor, weak value, budget timing, trust, a conviction test) instead of assuming the surface string is the cause; (3) gives a concrete diagnostic question that would distinguish them ("compared to what?", "what would need to be true?"); (4) proposes an honest fix that is NOT a reflexive discount — trading a variable, supplying objective criteria, or honestly disqualifying; (5) ends with a direct, non-manipulative closing question that names consensus and invites any last blocker. Penalize reflexive discounting, pressure/assumptive tactics, or treating the stated objection as automatically the root cause.',
        },
      ],
      commitSummary: 'no slot written — you can now treat objections as blockers to debug (not attacks to overcome) and close by making explicit a consensus that already exists, never by pressure or manipulation.',
    },
  ],
}
