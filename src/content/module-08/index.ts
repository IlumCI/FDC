import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 8 — Sales & distribution
//
// Reframes selling for engineers who instinctively distrust it: a pipeline is
// a state machine, qualification is input validation, objection handling is
// debugging, and a demo is a spec walkthrough. Meridian is a low-touch B2B
// dev-tool sold to small teams, so the module repeatedly checks whether a
// heavy sales motion even fits — often it doesn't. The last lesson writes
// startup.sales via the reusable `form` artifact.
// ===========================================================================

export const module8: Module = {
  id: 8,
  title: 'Sales & distribution',
  goal: 'Move a deal from interest to signed without it feeling like manipulation.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '8.1',
      module: 8,
      title: 'The sales pipeline as a state machine',
      estMinutes: 14,
      prerequisites: [],
      artifactSlot: null,
      concept: `A **sales pipeline** is a finite set of **stages** a deal passes through on its way to *closed-won* or *closed-lost*. The discipline that separates a real pipeline from a wishlist is one rule: **every stage has an explicit exit criterion** — an observable, checkable fact that must be true before the deal advances.

Bad stages describe *your* activity ("sent email", "had call"). Good stages describe a *verified fact about the buyer*:

- **Lead** → **Qualified**: exit when you've confirmed a real problem, a budget, and someone who can say yes.
- **Qualified** → **Evaluating**: exit when they've agreed to actually trial or pilot the product.
- **Evaluating** → **Closed**: exit when the trial hit a success metric they named up front.

The reason to be strict: a deal sitting in a stage whose exit criterion isn't met is **lying to you**. It looks like progress and forecasts like revenue, but it hasn't actually moved. Explicit exit criteria are what make the pipeline a measurement instrument instead of a hope-tracker.

**Forecasting** falls out of this cleanly. Assign each stage a historical **close probability** and multiply by deal value:

$$\\text{forecast} = \\sum_i P(\\text{close} \\mid \\text{stage}_i) \\times \\text{value}_i$$

The probabilities are only trustworthy *because* the exit criteria are strict — otherwise every stage's "probability" is contaminated by deals that don't belong there.`,
      reframe: {
        analogy: `A pipeline is a **finite state machine**. A deal is a **token** in exactly one state at a time. Stages are the states; exit criteria are the **guard conditions** on each transition — the boolean that must hold before the token is allowed to move to the next state. \`closed-won\` and \`closed-lost\` are the two accepting/terminal states. Just as an FSM with sloppy guards accepts inputs it shouldn't, a pipeline with vague exit criteria lets deals transition on vibes, and your forecast becomes the output of a machine whose transitions aren't actually gated.`,
        breaks: `Real deals violate FSM cleanliness in two ways. First, transitions aren't purely forward — a deal can **regress** (a champion leaves, a new stakeholder appears) and legitimately move *backward* a state, which a naive forward-only FSM forbids. Second, the token isn't fully observed: you infer a deal's true state from noisy signals (an enthusiastic call can mask a dead budget), so you're really running a **hidden-state** machine and estimating which state you're in. Treat the FSM as the discipline for *defining* states and guards, not as a claim that deals move deterministically.`,
      },
      workedExample: `**Meridian** (CI insights, $40/seat/mo, sold to small eng teams) defines four stages with hard exit criteria:

| Stage | Exit criterion (must be TRUE to advance) | Close prob. |
|---|---|---|
| Lead | A real team signed up or replied — not just a page visit | 10% |
| Qualified | Confirmed CI pain + a named budget owner | 30% |
| Trialing | Product installed in their real CI, running on real builds | 60% |
| Closed-won | Trial hit a metric they named (e.g. "flaky-test alerts saved us a day") | 100% |

Right now Meridian has: 20 Leads, 8 Qualified, 5 Trialing. Each deal averages a 5-seat team at $40/seat = **$200/mo**. Forecast for the quarter's new MRR:

$$(20)(0.10)(200) + (8)(0.30)(200) + (5)(0.60)(200)$$
$$= 400 + 480 + 600 = \\$1{,}480 \\text{ expected new MRR}$$

Notice what the exit criteria buy you: a "Trialing" deal isn't one that *promised* to try — it's one where Meridian's action ran on a real build. That's why 60% is believable. Loosen the criterion to "expressed interest in trying" and the 60% is fiction.`,
      branch: {
        scenario: `Meridian's founder reviews the board and finds a deal parked in **Trialing** for six weeks. The prospect is friendly, replies to every email, and keeps saying "we love it, just need to find time to really dig in." The product was never actually installed in their CI. Where does this deal belong?`,
        choices: [
          {
            label: 'Leave it in Trialing — they are clearly engaged and it would feel punitive to demote it.',
            correct: false,
            consequence: `**Instructive miss.** Engagement is your activity signal, not the exit criterion. Trialing's guard is *"installed and running on real builds"* — which is false. Keeping it in Trialing inflates your 60%-weighted forecast with a deal that has done none of the work that makes 60% real. The friendliness is exactly the noise that hides the true state.`,
          },
          {
            label: 'Move it back to Qualified — the Trialing guard (installed in real CI) was never met.',
            correct: true,
            consequence: `**Correct.** A deal belongs in the highest stage whose exit criterion it has *actually* passed. This one passed Qualified (real pain, budget owner) but not Trialing's guard, so it regresses. This is the backward transition the FSM analogy warns about, and it's healthy: your forecast now reflects reality, and the demotion surfaces the real blocker — they haven't committed the effort, which is a signal worth chasing directly.`,
          },
          {
            label: 'Move it forward to a "Verbal Yes" stage — they keep saying they love it.',
            correct: false,
            consequence: `**Instructive miss, and a dangerous one.** "We love it" with no installation is the softest possible signal, and inventing a stage to honor it corrupts every probability downstream. You'd be advancing a token past a guard it failed because you *want* the transition to fire. That's how pipelines fill with deals that forecast revenue and deliver none.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Draft exit criteria for my pipeline', kind: 'ask', question: 'Given my product and buyer, propose 4-5 pipeline stages, each with an exit criterion phrased as a verified fact about the buyer (not my activity). Flag any of my current stages that secretly describe my own actions.' },
        { label: 'Harder forecasting example', kind: 'harder', concept: 'probability-weighted pipeline forecasting with regressions and stale deals' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which of these is a well-formed stage exit criterion (as opposed to an activity log)?',
          options: [
            'We sent the proposal and followed up twice',
            'The prospect confirmed a budget and named who signs off',
            'We had a great call and they seemed excited',
            'We added them to our CRM and tagged them hot',
          ],
          answer: 1,
          explain: 'A valid exit criterion is an observable, verified fact about the *buyer* that gates the transition. "Confirmed a budget and named who signs off" is checkable and buyer-side. The others describe your activity or your feelings, neither of which gates whether the deal actually advanced.',
        },
        {
          kind: 'mcq',
          prompt: 'A pipeline has 30 deals at 10% (each $1,000) and 4 deals at 50% (each $1,000). What is the probability-weighted forecast?',
          options: ['$34,000', '$5,000', '$3,000', '$17,000'],
          answer: 1,
          explain: 'Forecast = Σ P × value = (30)(0.10)(1000) + (4)(0.50)(1000) = 3,000 + 2,000 = **$5,000**. Summing raw deal count or raw value ignores stage probability, which is the whole point of the weighting.',
        },
      ],
      commitSummary: 'concept only — you commit your pipeline in lesson 8.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '8.2',
      module: 8,
      title: 'Qualification (BANT/MEDDIC) as input validation',
      estMinutes: 15,
      prerequisites: ['8.1'],
      artifactSlot: null,
      concept: `**Qualification** is the process of deciding *early* whether a deal can plausibly close, so you don't spend weeks of scarce selling time on deals that were dead on arrival. Two common checklists:

- **BANT** — **B**udget (can they pay?), **A**uthority (can this person say yes?), **N**eed (is there a real problem?), **T**imeline (is there a reason to act now?).
- **MEDDIC** — a heavier enterprise version: **M**etrics, **E**conomic buyer, **D**ecision **c**riteria, **D**ecision **p**rocess, **I**dentify pain, **C**hampion.

The critical mindset shift for engineers: **disqualifying is a feature, not a failure.** A "no" discovered in week one is a *success* — you reclaimed the cycles you'd have burned discovering it in week eight. The goal of qualification is not to advance every deal; it's to route each deal to *close* or *reject* as cheaply as possible.

Match the rigor to the deal. MEDDIC exists for six-figure enterprise deals with buying committees; running full MEDDIC on a $200/mo self-serve signup is malpractice by over-process. For a low-touch dev-tool, lightweight BANT — often just "is there real pain, and can whoever's evaluating actually turn it on and expense it?" — is usually enough.`,
      reframe: {
        analogy: `Qualification is **input validation at the boundary**. A lead is untrusted input. BANT/MEDDIC is the validation schema you run *before* the expensive handler (your sales effort) executes. Rejecting bad input early is cheap; letting it flow into the core and blow up eight stages deep is expensive. Disqualifying a bad-fit lead is a \`400 Bad Request\` returned fast — a healthy, correct response — not an error in your system. And like all validation, it belongs **at the edge**: the earlier the check, the more work you save.`,
        breaks: `Input validation is usually a pure, deterministic predicate: same input, same verdict, forever. A lead is **not** static. "No budget" this quarter becomes "budget approved" next quarter; a junior evaluator becomes a champion who recruits the economic buyer. So qualification isn't a one-time \`validate()\` at ingress — it's a **re-evaluated** judgment that can flip as the deal's state changes, which is why disqualified leads get *nurtured* rather than \`throw\`-n away permanently. Over-strict validation here doesn't just reject bad input; it can reject input that would have been good next month.`,
      },
      workedExample: `**Meridian** gets two inbound signups the same morning. It applies lightweight BANT:

**Lead A — a solo developer on a hobby project.**
- Budget: no company card; would pay out of pocket, reluctantly.
- Authority: yes (it's just them).
- Need: mild — their CI is 3 minutes, flakiness isn't hurting.
- Timeline: "someday."

**Lead B — a 6-person startup eng team.**
- Budget: already pays for CI minutes; $40/seat is within a manager's discretionary spend.
- Authority: the eng manager evaluating can expense it directly.
- Need: acute — flaky tests block their deploys weekly.
- Timeline: "we want this fixed before our next hiring wave."

Meridian **disqualifies A** (or routes them to a free tier / self-serve and spends *zero* human time on them) and **invests real effort in B**. Note this is the correct call precisely *because* Meridian is low-touch: A isn't insulted and B isn't over-managed. Spending an hour hand-holding A would cost the same hour that moves B toward a $240/mo close. Disqualification didn't lose a customer — it protected the cycles that win one.`,
      branch: {
        scenario: `A prospect fills Meridian's contact form. Real pain (their CI is a mess), and the evaluator is clearly technical and enthusiastic. But when asked, they say: "I don't control any budget, and I'd have to convince my VP, who I've never actually spoken with about tooling." How should Meridian treat this deal?`,
        choices: [
          {
            label: 'Full speed ahead — the pain and enthusiasm are real, budget always follows a great product.',
            correct: false,
            consequence: `**Instructive miss.** You've validated N (need) and skipped B and A entirely. Enthusiasm from someone with no budget and no proven path to the economic buyer is the single most common way deals die at "final approval." You'll invest weeks and lose to "we couldn't get sign-off" — the exact failure qualification exists to catch early.`,
          },
          {
            label: 'Qualify the champion path: help them build the case to the VP, but stage the deal honestly as "no economic buyer yet."',
            correct: true,
            consequence: `**Correct.** This is a genuine *champion* with no *economic buyer* secured yet — a MEDDIC gap. You don't disqualify (the pain and champion are real assets), but you don't fool yourself either: the deal is gated on reaching the VP. So you arm the champion (an ROI one-pager, a metric they can show) and keep the deal's stage honest. For a low-touch tool this is a light touch — one helpful asset — not an enterprise campaign.`,
          },
          {
            label: 'Disqualify immediately — no budget authority means dead deal.',
            correct: false,
            consequence: `**Over-strict validation.** You're treating a re-evaluable judgment as a permanent \`throw\`. A technical champion with real pain is exactly the asset that *creates* budget by making the case internally. Rejecting them outright discards a lead that was one VP conversation from qualified. Disqualify absence of *need*, not a champion who hasn't yet reached the buyer.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Right-size my qualification', kind: 'ask', question: 'Given my price point and sales motion, is BANT or MEDDIC (or something lighter) appropriate for me? Draft the specific questions I should ask to qualify a lead cheaply.' },
        { label: 'Harder: a mixed-signal lead', kind: 'harder', concept: 'qualifying a lead that passes some BANT/MEDDIC criteria and fails others' },
        { label: 'Critique my instinct to chase every lead', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In BANT/MEDDIC terms, why is a fast "disqualify" considered a good outcome?',
          options: [
            'It boosts your close rate by removing losses from the denominator',
            'It reclaims scarce selling time to spend on deals that can actually close',
            'It means the product is too good for that customer',
            'It is never a good outcome — every lead should be pursued',
          ],
          answer: 1,
          explain: 'Qualification is about *allocating scarce effort*. A cheap early "no" frees the cycles you would have spent discovering the same "no" expensively later. (Vanity-optimizing close rate by cherry-picking is a side effect, not the reason.)',
        },
        {
          kind: 'free',
          prompt: 'For YOUR product, write the 3-4 qualification questions you would ask a new lead, and state what answer would make you DISqualify (or de-prioritize) them. Justify whether BANT-lightweight or full MEDDIC fits your sales motion.',
          rubric: 'Strong answer: (1) proposes concrete, buyer-facing qualification questions mapped to budget/authority/need/timeline (or MEDDIC elements); (2) names a specific disqualifying answer and frames disqualification as protecting effort, not as failure; (3) correctly matches process weight to the deal size / motion (lightweight for low-touch self-serve; MEDDIC only for large committee deals); (4) references their own price/motion rather than generic advice.',
        },
      ],
      commitSummary: 'concept only — qualification feeds the pipeline you commit in lesson 8.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '8.3',
      module: 8,
      title: 'Handling objections as debugging',
      estMinutes: 15,
      prerequisites: ['8.1', '8.2'],
      artifactSlot: null,
      concept: `An **objection** is a stated reason the buyer gives for not moving forward: "too expensive," "we already use X," "not the right time," "I need to think about it." The engineer's instinct — and the bad salesperson's instinct — is to **defeat** the objection: fire back a counter-argument and win the point.

That's the wrong model. An objection is a **blocker to diagnose**, not an argument to win. The words the buyer says are the *symptom*; the actual concern is often something else entirely. "It's too expensive" rarely means the price is arithmetically too high — it usually means *"I don't yet see enough value to justify this,"* or *"I'm not confident it'll work for us,"* or *"someone above me will question this spend."* Each of those has a completely different fix.

So the move is **root-cause analysis**, not rebuttal:

1. **Reproduce** — get them to say more: "Say more about that — expensive compared to what?"
2. **Isolate** — separate the surface complaint from the real blocker.
3. **Fix the actual cause** — value framing, a proof point, or help getting internal sign-off — whichever the diagnosis calls for.

Crucially, some objections are **legitimate** — the real diagnosis is "this is genuinely a bad fit." Then the correct fix is to *disqualify* (lesson 8.2), not to keep pushing. Trying to defeat a true objection is arguing with a correct bug report.`,
      reframe: {
        analogy: `An objection is a **bug report**, and the buyer's words are the **symptom, not the root cause** — exactly like a user who reports "the app is slow" when the real cause is an N+1 query. You don't argue with the report ("no it isn't"); you **reproduce and isolate**. "Too expensive" is \`the page is slow\`: a surface description of a deeper condition. Good objection handling is a debugging session — ask clarifying questions, form a hypothesis about the real blocker, and fix *that*. And like debugging, the fastest path is often to get the reporter to give you a better repro: "what would need to be true for this to be worth it?"`,
        breaks: `Software bugs have a ground-truth cause you can eventually confirm by reading the code. A buyer's real objection lives in their head and their org, and they **may not tell you the truth** — sometimes they don't even know it themselves, and sometimes they actively conceal it ("it's the price" when really a competitor already won internally). So you can't single-step to certainty; you're inferring hidden state from an unreliable narrator. And unlike a bug, some objections **should not be "fixed"** at all — a legitimate bad-fit objection is a *correct* report, and the right response is to close the ticket as won't-fix (disqualify), not to patch around a true statement.`,
      },
      workedExample: `A qualified 8-person team is trialing **Meridian** and the eng manager says: **"It's too expensive."** At 8 seats × $40 that's $320/mo. The novice defeats it ("but think of the ROI!"). Meridian's founder **debugs** it instead:

*"Totally fair — expensive relative to what specifically?"*

The answer isolates the real bug: **"Well, only two of us actually look at CI dashboards. Paying for 8 seats feels wrong."**

That's a completely different blocker than "the price is too high." The root cause is **packaging mismatch**, not price level. The fix isn't a discount or an ROI lecture — it's: *"Then you don't need 8 seats. Put the 2 people who act on CI insights on it — that's $80/mo — and add seats only if more people start using it."*

Now the objection is *gone*, Meridian didn't erode its price, and the deal is $80/mo of **real** usage that will expand honestly. Had the founder "won" the original argument, they'd have either lost the deal or sold 8 resented seats that churn. The diagnosis — not the rebuttal — closed it.`,
      branch: {
        scenario: `A trialing prospect goes quiet, then emails: **"Thanks, but we've decided to hold off for now."** No reason given. Meridian's founder wants to respond. What's the best first move?`,
        choices: [
          {
            label: 'Send a strong closing push — a limited-time discount to create urgency and reverse the decision.',
            correct: false,
            consequence: `**Instructive miss.** You're patching before you've diagnosed. "Hold off" is a symptom with at least four distinct root causes — no budget, a competitor won, the champion lost internal support, or the product genuinely didn't deliver in the trial. A discount only fixes *one* of those and, fired blindly, signals desperation and trains the buyer to wait for price drops. You'd be arguing with a bug report you haven't reproduced.`,
          },
          {
            label: 'Ask one honest diagnostic question to find the real blocker before proposing any fix.',
            correct: true,
            consequence: `**Correct.** Reproduce before you patch. A low-pressure, genuine question — "Totally understand. So I can learn: was it a timing thing, a missing capability, or did it just not prove itself in the trial?" — isolates which bug you're actually looking at. Only then do you know whether the fix is a proof point, a champion assist, a packaging change, or an honest disqualification. Often this question *itself* reopens the deal, because you're clearly trying to help rather than to win.`,
          },
          {
            label: 'Accept it and close the deal as lost — respecting a "no" means never asking why.',
            correct: false,
            consequence: `**Over-corrected.** Respecting a real "no" is right, but a vague "hold off" isn't yet a diagnosed "no" — it's an undiagnosed blocker. One honest question isn't pressure; it's how you learn whether this is a legitimate bad-fit (disqualify cleanly) or a fixable concern the buyer didn't bother to voice. Closing-lost without a single diagnostic question throws away both the deal *and* the lesson about why it stalled.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Debug my most common objection', kind: 'ask', question: 'The objection I hear most is [I will tell you]. Help me list the 3-4 distinct root causes it could be hiding, and the diagnostic question that separates them.' },
        { label: 'Harder: distinguishing real vs smokescreen objections', kind: 'harder', concept: 'telling a legitimate bad-fit objection (disqualify) from a fixable surface objection' },
        { label: 'Critique my rebuttal reflex', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A buyer says "it\'s too expensive." Treating objection-handling as debugging, your first move is to:',
          options: [
            'Present a detailed ROI calculation proving the price is justified',
            'Offer a discount to remove the price barrier',
            'Ask a clarifying question to find the real concern behind the words',
            'Restate the value proposition more forcefully',
          ],
          answer: 2,
          explain: '"Too expensive" is a symptom, not a root cause. Before applying any fix you reproduce and isolate — a clarifying question ("expensive compared to what?") reveals whether the real blocker is value perception, packaging, confidence, or internal sign-off, each of which needs a different fix.',
        },
        {
          kind: 'free',
          prompt: 'Take the objection you expect to hear most for YOUR product. List at least two distinct root causes it could be masking, the diagnostic question you would ask to tell them apart, and — importantly — the case in which the right response is to DISqualify rather than to overcome it.',
          rubric: 'Strong answer: (1) states a realistic objection for their product; (2) enumerates 2+ genuinely distinct underlying causes (not rephrasings of one); (3) gives a diagnostic question that discriminates between them; (4) identifies a scenario where the objection is legitimate and the correct move is to disqualify/walk away, not to "win" — showing they understand an objection is a blocker to diagnose, not an argument to defeat.',
        },
      ],
      commitSummary: 'concept only — you name your top objection in the lesson 8.4 artifact.',
    },

    // -----------------------------------------------------------------------
    {
      id: '8.4',
      module: 8,
      title: 'The demo as a spec walkthrough & closing as consensus',
      estMinutes: 18,
      prerequisites: ['8.1', '8.2', '8.3'],
      artifactSlot: 'sales',
      concept: `Two final moves, both de-mystified.

**The demo is a spec walkthrough.** A bad demo is a feature tour — a linear parade of everything the product does, indexed by *your* menu structure. A good demo is a **walkthrough of the buyer's spec**: you take the specific problem they told you about in qualification and demonstrate the product *solving that exact problem*, in their terms. Every click answers a requirement *they* stated. Features they didn't ask about are noise; cut them. The demo's job is to show the spec is met, not to enumerate the API surface.

**Closing is reaching consensus, not applying pressure.** The manipulative model — artificial urgency, guilt, "what would it take to get you to sign today" — treats the buyer as an opponent to overpower. The honest model treats closing as **converging on a shared, explicit agreement**: we both now believe this solves your problem, at a price that works, with these next steps. A close is just the moment the two parties' models of the deal *agree*. If they don't agree, the answer isn't more pressure — it's finding the remaining disagreement (an undiagnosed objection from lesson 8.3) and resolving it.

Ask directly and let the answer be real: *"Does this solve the problem you came in with? If so, here's how we start; if not, what's missing?"* That question closes deals **and** cleanly disqualifies the ones that shouldn't close — both are wins.`,
      reframe: {
        analogy: `The demo is **acceptance testing against a spec the buyer wrote**. Qualification captured their requirements; the demo runs those requirements against the product while they watch, like stepping through acceptance criteria and showing each one goes green. Closing is a **two-party consensus protocol** — think of committing a change both reviewers must approve. The deal "commits" only when both nodes hold the same state: buyer agrees it solves their problem, seller agrees on scope and price. Pressure tactics are like forcing a merge past a failing review — you can do it, but you've shipped a deal that doesn't actually pass, and it churns like a reverted commit.`,
        breaks: `Acceptance tests have an objective oracle: the assertion passes or fails, full stop. A demo has **no such oracle** — "did this solve your problem?" is judged by a human whose criteria are partly emotional, political, and unspoken, and who can *feel* satisfied while the underlying spec isn't truly met (or vice versa). And consensus in distributed systems is between symmetric, honest nodes following a protocol; a negotiation has **asymmetric information and real interests** — the buyer may consent while withholding a concern, so "agreement reached" is softer and more revocable than a committed transaction. The analogy gives you the right *posture* (prove the spec, seek genuine agreement); it doesn't give you a machine-checkable close.`,
      },
      workedExample: `**Meridian** demos to the 6-person team from lesson 8.2, whose stated spec was: *"flaky tests block our deploys weekly."*

**Bad demo (feature tour):** dashboards, all 12 integrations, the settings panel, the org-management screen, historical trend charts… 30 minutes, and the buyer's actual pain was touched for maybe 90 seconds.

**Good demo (spec walkthrough):** Meridian opens *their* CI (installed during the trial), points at a build that failed on a flaky test last Tuesday, and shows Meridian flagging it as flaky, auto-quarantining it, and unblocking the deploy — the exact requirement, solved, in their environment. Nothing else. Total: 8 minutes, 100% on-spec.

**The close** is then a consensus check, not a pitch: *"That's the weekly-deploy-blocker problem you described. Did we solve it?"* The manager says yes. Meridian: *"Then here's the start — the 2 people who act on CI go live at $80/mo, we revisit seats in a month."* No urgency theater, no discount games. Both parties now hold the same model of the deal, so it closes — and because it closed on a *met spec* rather than pressure, it's the kind of deal that expands instead of churning. Had the manager said "not quite — it doesn't catch flakiness in our integration tests," that's not a closing failure; it's a rediscovered spec item to diagnose.`,
      branch: {
        scenario: `Meridian is at the closing moment with a well-qualified team. The demo went well and the manager is nodding — but hasn't said yes. The founder feels the urge to seal it. Which closing move is right?`,
        choices: [
          {
            label: 'Manufacture urgency: "This trial pricing expires Friday, so I need a decision by then."',
            correct: false,
            consequence: `**Instructive miss.** Artificial urgency is pressure standing in for consensus. If the buyer isn't yet in agreement, a fake deadline doesn't create agreement — it creates a coerced yes that resents you, or a no that could have been a diagnosable objection. For a low-touch dev-tool sold to peers who can smell manufactured scarcity, this actively damages trust. You're forcing a merge past a review that hasn't passed.`,
          },
          {
            label: 'Ask the consensus question directly: "Does this solve the problem you came in with? If yes, here\'s how we start; if not, what\'s missing?"',
            correct: true,
            consequence: `**Correct.** This is closing-as-consensus in one sentence. It invites genuine agreement, and it's symmetric: a "yes" starts the deal cleanly, a "no, X is missing" hands you the exact remaining disagreement to resolve (an objection to debug per 8.3) or a clean signal to disqualify. Either outcome is honest and moves you forward. No pressure, no manipulation — just checking whether both parties' models actually agree.`,
          },
          {
            label: 'Stay quiet and keep demoing more features until they feel they have to say yes.',
            correct: false,
            consequence: `**Instructive miss.** Piling on unrequested features is the feature-tour anti-pattern *and* a dodge of the close. It adds noise past the point the spec was met, dilutes the one thing they cared about, and delays the honest consensus question. More surface area doesn't produce agreement; it buries the requirement that would have produced it. Ask the question instead.`,
          },
        ],
      },
      artifact: {
        componentKey: 'form',
        prompt: `Commit your sales playbook: your pipeline stages with exit criteria, a first outreach script, and the objection you most need to answer.`,
        fields: [
          { key: 'pipelineStages', label: 'Pipeline stages + exit criteria', type: 'textarea', placeholder: 'e.g. Lead → Qualified (has budget+pain) → Demo → Trial → Closed' },
          { key: 'outreachScript', label: 'First outreach script (2-3 sentences)', type: 'textarea' },
          { key: 'topObjection', label: 'The objection you most need to handle', type: 'text' },
        ],
      },
      tutorHooks: [
        { label: 'Turn my qualification notes into a spec-walkthrough demo', kind: 'ask', question: 'Given the problem my buyer states in qualification, script an 8-minute demo that walks through solving THAT problem and cuts everything else. Tell me which features to leave out.' },
        { label: 'Draft my consensus-close question', kind: 'ask', question: 'Write a direct, non-manipulative closing question for my product that also cleanly disqualifies a bad-fit deal. Adapt it to my low/high-touch sales motion.' },
        { label: 'Critique my playbook for manipulation', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What best distinguishes a spec-walkthrough demo from a feature-tour demo?',
          options: [
            'It shows every feature so the buyer sees the full value',
            'It solves the specific problem the buyer stated, in their terms, and cuts the rest',
            'It is always shorter than ten minutes',
            'It focuses on the product roadmap rather than current features',
          ],
          answer: 1,
          explain: 'The spec-walkthrough demonstrates the product meeting the buyer\'s stated requirement — their spec — and treats unrequested features as noise to cut. Length is a side effect of that focus, not the defining trait; showing "every feature" is exactly the feature-tour anti-pattern.',
        },
        {
          kind: 'mcq',
          prompt: 'Closing "as reaching consensus" means the deal closes when:',
          options: [
            'You apply enough urgency that the buyer feels they must decide now',
            'Both parties hold the same model of the deal — it solves the problem, at a price and scope both accept',
            'You have answered every possible objection preemptively',
            'The buyer has run out of reasons to say no',
          ],
          answer: 1,
          explain: 'Consensus closing means the two parties\' models of the deal agree: the buyer believes it solves their problem, the seller agrees on scope and price. Absent agreement, the fix is to surface and resolve the remaining disagreement — not to apply pressure or "run out" their objections.',
        },
        {
          kind: 'free',
          prompt: 'Draft the direct, non-manipulative closing question you will actually use for YOUR product. Then explain how the same question also handles the case where the deal SHOULDN\'T close.',
          rubric: 'Strong answer: (1) writes a concrete closing question tied to the buyer\'s stated problem (spec) rather than generic pressure; (2) frames the close as checking for genuine agreement, not applying urgency/guilt; (3) explains that a "no / here\'s what\'s missing" answer is a valid, useful outcome — either a diagnosable objection (8.3) or a clean disqualification (8.2) — not a failure; (4) reflects their actual sales motion (e.g. low-touch self-serve vs high-touch) rather than a generic enterprise script.',
        },
      ],
      commitSummary: 'your sales playbook — pipeline stages with exit criteria, first outreach script, and top objection — written to **startup.sales**.',
    },
  ],
}
