import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 2 — Problem discovery & the customer as a system under test
//
// Engineers ship solutions. This module inverts that reflex: treat the market
// as a system you instrument and probe BEFORE writing a line of product code.
// It builds from the solution-first bug (2.1), through interviews-as-logging
// (2.2) and falsifiable problem statements (2.3), to the ICP-as-type and the
// `problem` artifact (2.4) that writes startup.problem + ICP for later modules.
// ===========================================================================

export const module2: Module = {
  id: 2,
  title: 'Problem discovery & the customer as a system under test',
  goal: 'Find and validate a real, painful, willing-to-pay problem instead of building a solution in search of one.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '2.1',
      module: 2,
      title: 'The solution-first bug',
      estMinutes: 13,
      prerequisites: [],
      artifactSlot: null,
      concept: `Engineers have a systematic bug: we start from a **solution** we find interesting and hunt for a problem it might fit. The type signature of a startup is the reverse.

$$\\text{startup} : \\text{Problem} \\to \\text{Solution} \\to \\text{Business}$$

\`Problem\` is the *input* type. A solution built before you have a concrete value of that type is a function applied to \`undefined\` — it may typecheck (the code runs, the demo is slick) and still return garbage, because the argument that gives it meaning was never bound.

"Solution-first" feels productive because building is the part we're good at and the part that gives fast feedback. But shipping speed optimizes the wrong metric when the destination is wrong. The expensive failures in startups are almost never *"we built it badly"* — they're *"we built the wrong thing well."* No amount of engineering polish converts a problem nobody has into revenue.

Inverting to **problem-first** means treating the problem as a hypothesis to be discovered and validated as rigorously as you'd validate a load-bearing assumption in a distributed system. Before you earn the right to design a solution, three predicates must hold on the problem:

- **Real** — it exists outside your head; someone other than you hits it.
- **Painful** — it costs the sufferer time, money, or risk *today*.
- **Willing-to-pay** — the pain is large enough that they'd trade money to remove it.

Miss any one and the solution downstream inherits the defect. A real-but-not-painful problem yields a vitamin nobody buys; a painful-but-not-willing-to-pay problem yields heroic unpaid gratitude.`,
      reframe: {
        analogy: `Solution-first is **premature optimization** hoisted to the level of the whole company. Knuth's warning — don't tune a routine before you've profiled and found it's the bottleneck — is exactly the discovery discipline. Building the solution first is hand-optimizing a function before you know whether it's ever called. Problem discovery is *profiling the market*: you attach the profiler (interviews), find where the real time and money are being burned, and only then spend your scarce build budget on that hot path.`,
        breaks: `Profiling has a luxury discovery lacks: the program under test is deterministic and fully observable — run it again, get the same flame graph. A market is a **non-stationary, partially observable system**. The "hot path" moves as competitors, budgets, and habits shift, and every measurement (an interview) perturbs the thing you're measuring because people reshape their answers for an audience. So you can't profile once and cache the result; discovery is continuous sampling of a noisy, drifting signal, not a single deterministic trace you optimize against forever.`,
      },
      workedExample: `**Meridian's** founder is a senior engineer who loves distributed tracing. Version zero of the idea was *"a beautiful flame-graph viewer for CI pipelines"* — a solution she was excited to build. Notice the shape: she started from the artifact she wanted to make, not from a bound \`Problem\`.

Inverting, she forces herself to name the problem in one testable sentence: *"Small engineering teams (5–30 devs) lose hours every week to flaky, slow CI, and can't tell which failures are real."* Now check the three predicates:

- **Real?** Plausible — most teams have CI pain. Needs evidence, not assertion.
- **Painful?** "Hours every week" is a time cost she can try to quantify per team.
- **Willing-to-pay?** Unknown. A team might hate flaky CI and still absorb it as background noise rather than open a budget line.

The flame-graph viewer might be *part* of a solution — but she can't know until the problem is validated. At $40 per seat per month, Meridian only exists if that third predicate is TRUE for teams shaped like her ICP. This module is the work of binding that \`Problem\` value before writing product code.`,
      branch: {
        scenario: `A founder has spent two months building a polished Kubernetes cost-visualization dashboard because *"cloud bills are obviously too high."* It demos beautifully. Talking to ten target teams, eight say "neat" and none change anything. What's the highest-value next move?`,
        choices: [
          {
            label: 'Add more visualizations and integrations — the tool clearly needs to be more capable before people adopt.',
            correct: false,
            consequence: `**Instructive miss.** This is doubling down on the solution to fix a problem defect. "Neat, but I won't change anything" is not a feature gap — it's a signal that cost visibility isn't a *painful, willing-to-pay* problem for these teams (they likely have bigger fires, or the bill isn't their pain to own). More features on an unvalidated problem just polishes the wrong thing more.`,
          },
          {
            label: 'Run problem-discovery interviews to find whether an expensive, budgeted cloud-cost pain actually exists, and for whom.',
            correct: true,
            consequence: `**Correct.** "Neat" with zero behavior change is the market telling you the problem predicate failed — probably *willing-to-pay*. The move is to go back to the input type: interview to learn whose cloud bill is a real, owned, budgeted pain (maybe finance-adjacent platform teams, not app devs), and whether any segment feels it sharply enough to pay. The dashboard may survive as a solution *once a validated problem points at it* — or may need to be thrown away, which is cheaper now than after two more months.`,
          },
          {
            label: 'Drop cost tooling entirely and pivot to a trendier space with more buzz.',
            correct: false,
            consequence: `**Instructive miss.** Abandoning on the first negative signal is the mirror image of solution-first: it's *hype-first*. You'd carry the exact same bug into the new space — building before a \`Problem\` is bound — and burn the discovery you've already partly done. The discipline is to re-run discovery on the current space first; pivot on *evidence* that no willing-to-pay problem exists here, not on vibes.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Diagnose my idea: solution-first?', kind: 'ask', question: 'Here is my current idea. Am I reasoning solution-first or problem-first? Restate my idea as a bound Problem value and tell me which of real / painful / willing-to-pay I have the least evidence for.' },
        { label: 'Harder: separate vitamins from painkillers', kind: 'harder', concept: 'distinguishing a real-but-not-painful problem (a vitamin) from a painful, willing-to-pay problem (a painkiller) in my domain' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A team builds a slick tool and users say "cool, but we won\'t change our workflow for it." Which problem predicate has most likely FAILED?',
          options: [
            'Real — the problem does not exist at all',
            'Painful and/or willing-to-pay — it exists but is not costly enough to act on',
            'None — this is purely a UX problem to be fixed with more polish',
            'Willing-to-pay is irrelevant for free tools',
          ],
          answer: 1,
          explain: 'Users acknowledging the tool but refusing to change behavior means the problem is likely **real but not painful/willing-to-pay** enough to overcome switching cost. More polish (option 3) treats it as a UX defect and misses that the *problem* is the defect.',
        },
        {
          kind: 'free',
          prompt: 'State your current product idea, then re-express it strictly problem-first: name the segment, the pain, and why they would pay. Which of the three predicates (real, painful, willing-to-pay) do you have the WEAKEST evidence for, and why?',
          rubric: 'Strong answer: (1) restates the idea as a bound Problem — segment + specific pain + willingness-to-pay mechanism — rather than as a solution/feature; (2) explicitly evaluates all three predicates; (3) honestly identifies the weakest-evidence predicate rather than asserting all are satisfied; (4) shows awareness that a solution built before the problem is validated inherits the defect. Penalize answers that just describe the product or list features.',
        },
      ],
      commitSummary: 'concept only — you commit your validated problem and ICP in lesson 2.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '2.2',
      module: 2,
      title: 'Customer interviews as instrumentation',
      estMinutes: 16,
      prerequisites: ['2.1'],
      artifactSlot: null,
      concept: `A customer interview is **instrumentation**, not a demo and not a sales call. Its job is to collect logs about how the world already works — not to confirm the hypothesis you walked in with.

The failure mode has a precise shape. You ask a **leading assertion** — *"Wouldn't a tool that fixed flaky CI be amazing?"* — and the person, being polite, says yes. You've written a test whose assertion is baked into the prompt: it can only pass. That's not measurement; it's contaminating the log by logging your own hope.

The corrective discipline is often called **The Mom Test**: ask questions even your mom couldn't lie about, because they're about *her* life, not your idea. Reframed for engineers: **never assert your hypothesis inside the probe.** Instrument the system's actual past behavior instead of prompting it for a flattering future prediction.

Two rules do most of the work:

- **Ask about past behavior, not future intent.** *"What did you do the last time CI blocked a release?"* is a log of a real event. *"Would you use a tool that...?"* is a request to speculate, and speculation is cheap, agreeable, and non-binding. Humans are terrible at predicting their own future behavior and excellent at telling you what you want to hear.
- **Chase evidence of cost, not enthusiasm.** Time spent, money spent, workarounds hacked together, tickets filed. A workaround someone *already built* is a stronger signal than any amount of "I'd totally buy that."

The strongest possible signal isn't a compliment — it's discovering the person has already *paid* (in money, or in hours building a hack) to relieve the pain. That's a production log entry proving the problem is real, painful, and willing-to-pay, all at once.`,
      reframe: {
        analogy: `Leading questions are the interview equivalent of a **Heisenbug caused by your own probe**: the act of measuring changes the value, so the reading is an artifact of the instrument, not the system. When you embed your hypothesis in the question, you've added a \`console.log\` that mutates the variable it prints. Good interview technique is a **read-only probe** — you observe past events (logs the system already emitted) without writing to the state you're trying to observe. "What did you do last time?" reads history; "would you use this?" injects a value and then reads it back.`,
        breaks: `A read-only probe on real logs is faithful — the events happened and were recorded by the system, not narrated for you. Human memory is a **lossy, self-serving reconstruction**: even past-behavior answers are re-rendered on demand, edited to make the teller look competent and consistent. So unlike a log file you can't fully trust the record even when you avoid leading it — you triangulate across many interviews and, wherever possible, corroborate the story with an *artifact* (the actual workaround script, the invoice, the Slack thread) rather than the spoken recollection alone.`,
      },
      workedExample: `**Meridian's** founder interviews an eng lead at an 18-dev team. Two versions of the same conversation:

**Contaminated (leading assertion):** *"We're building CI insights that tell you which failures are real flakes — that'd save your team a ton, right?"* Answer: *"Oh yeah, totally, that sounds great."* This log entry is worthless: the assertion was in the prompt, willingness-to-pay is untested, and "great" costs the speaker nothing.

**Instrumented (past behavior + cost):** *"Walk me through the last time a CI failure blocked you. What happened, and what did you do about it?"* Answer: *"Last Thursday a flaky integration test went red on main. Two engineers spent about three hours re-running it and bisecting before we decided it was a flake and merged anyway. We've got a Slack channel where people just post 'is CI broken again?'."*

That second log is gold. It contains a **date** (real), a **cost** (~6 engineer-hours, quantifiable against salary), and a **workaround already built** (the Slack channel = they've paid in attention to route around the pain). Follow-ups probe willingness-to-pay without leading: *"Have you tried anything to fix this? Did you ever look for a tool? What stopped you?"* If they've already trialed or bought something, the third predicate is close to proven. For Meridian at $40 per seat per month across ~18 seats, six recurring hours a week of senior time is an easy budget conversation — *if* the logs keep saying so across many teams, not just this one.`,
      branch: {
        scenario: `You're validating a problem and get this on a call: *"Yeah, we'd definitely pay for something that solved that."* You have 15 minutes left. What's the best next question?`,
        choices: [
          {
            label: '"Great — how much would you pay per seat?"',
            correct: false,
            consequence: `**Instructive miss.** You've accepted a future-intent claim ("we'd pay") and doubled down on more speculation (a hypothetical price). Both are cheap and non-binding — pricing a fantasy purchase tells you almost nothing. You've also subtly started selling, which switches the person from honest-informant mode to polite-buyer mode and contaminates the rest of the log.`,
          },
          {
            label: '"When did you last hit this, and what did it actually cost you — and have you paid for or built anything to deal with it?"',
            correct: true,
            consequence: `**Correct.** You convert a soft future-intent signal into a hunt for hard past-behavior evidence: a specific recent instance, a quantifiable cost, and — critically — whether they've *already spent* money or engineering hours routing around it. Existing spend or a home-built workaround is the log entry that proves willing-to-pay far better than any "we'd pay." You're reading history, not injecting a value.`,
          },
          {
            label: '"Would you be a design partner and try our beta when it\'s ready?"',
            correct: false,
            consequence: `**Half-right, wrong moment.** Recruiting design partners is valuable — but doing it *before* you've extracted the cost evidence pivots the call into selling and forecloses honest discovery. A "yes" here is another free, agreeable future-intent claim. Get the past-behavior logs first; a design-partner ask lands far harder once you've confirmed the pain is real and expensive, and it's more honest too.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Rewrite my leading questions', kind: 'ask', question: 'Here are the questions I plan to ask in an interview. Which ones embed my hypothesis (leading assertions)? Rewrite them as read-only, past-behavior probes I could not accidentally lead.' },
        { label: 'Harder: detect false positives', kind: 'harder', concept: 'spotting polite false-positive signals in interview transcripts and distinguishing them from genuine willing-to-pay evidence' },
        { label: 'Critique my interview plan', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which interview question is the strongest instrument for validating a painful, willing-to-pay problem?',
          options: [
            '"Would you use a tool that solved this?"',
            '"Don\'t you think this is a big problem?"',
            '"What did you do the last time this happened, and did you spend anything on it?"',
            '"How much would you pay for a solution?"',
          ],
          answer: 2,
          explain: 'Only option 3 probes **past behavior** and **actual cost/spend** — a read-only log of real events. The others solicit future intent or speculation (1, 4) or embed the hypothesis as a leading assertion (2), all of which are cheap, agreeable, and non-binding.',
        },
        {
          kind: 'mcq',
          prompt: 'During an interview you discover the customer wrote a 200-line internal script to work around the pain last quarter. Why is this a strong signal?',
          options: [
            'It proves the customer is technical enough to be a good user',
            'It is behavioral evidence they already paid (in engineering hours) to relieve the pain — real, painful, and willing-to-pay in one artifact',
            'It means your solution is redundant and you should pivot',
            'It is weak because they solved it themselves and no longer need you',
          ],
          answer: 1,
          explain: 'An existing workaround is a **past-behavior artifact**: they spent real engineering hours, which simultaneously evidences that the problem is real, painful, and worth paying to relieve. A hacky internal script also signals an underserved need a better product could win — not that you are redundant.',
        },
      ],
      commitSummary: 'concept only — you commit your validated problem and ICP in lesson 2.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '2.3',
      module: 2,
      title: 'Falsifiable problem statements',
      estMinutes: 15,
      prerequisites: ['2.1', '2.2'],
      artifactSlot: null,
      concept: `A problem statement is only useful if it can be **wrong**. Write it as an assertion that can FAIL against evidence — a claim with a defined refutation condition — not a mission statement that's true by construction.

Contrast two forms:

- **Unfalsifiable:** *"Teams struggle with CI and we help them ship better software."* There is no observation that could refute this. It's vague enough to survive any evidence, which means it can never *earn* your confidence either. It's a \`return true\`.
- **Falsifiable:** *"Engineering teams of 5–30 devs lose 4+ hours per week to flaky CI, and would pay ~$40 per seat per month to cut that in half."* This makes sharp, checkable claims: a segment (5–30 devs), a magnitude (4+ hours/week), and a price the market must clear. Any of them can come back false.

A well-formed statement follows the shape **X segment loses Y because Z — and would pay to fix it**, where X, Y, and Z are specific enough that an interview can contradict them.

The engineering move is to write the statement, then immediately ask: **what evidence would refute this?** Name the failing observation *before* you go looking, so you can't rationalize it away afterward:

- "Teams of 5–30 devs" refuted if the pain concentrates only at 200+ devs, or only at solo hackers.
- "4+ hours/week" refuted if interviews consistently surface minutes, not hours.
- "Would pay ~$40/seat" refuted if teams with the pain have budget authority but consistently won't open a line item.

Discovery then becomes a genuine test: you're trying to *break* your own statement. If it survives many honest attempts to falsify it across your target segment, you've earned real confidence. If it can't even be stated in a way that could fail, you haven't made a claim — you've made a wish.`,
      reframe: {
        analogy: `A falsifiable problem statement is a **unit test with a real assertion**; an unfalsifiable one is a test whose body is \`assert(true)\` — it's green on every run and therefore certifies nothing. "What evidence would refute this?" is writing the **failing case first**, the way TDD makes you write the red test before the code. And trying to break your own statement in interviews is **property-based testing on the market**: you throw many varied inputs (different teams, sizes, contexts) at the claim specifically hoping to find a counterexample, and confidence comes from surviving the fuzzer, not from one hand-picked passing example.`,
        breaks: `A unit test gives a **crisp, binary verdict** on a deterministic system: red or green, reproducible. Market falsification is **statistical and threshold-laden** — one team saying "only 20 minutes" doesn't refute "4+ hours" any more than one flaky failure condemns a build; you're estimating a distribution from a noisy sample and deciding whether the weight of evidence crosses a line *you* have to set in advance. And unlike code, the system under test drifts: a statement that's false this quarter can become true as tooling and team sizes change. So "refuted" means *the evidence trends against it*, not a single red assertion — and you must fix the threshold beforehand to avoid moving the goalposts.`,
      },
      workedExample: `**Meridian's** founder turns her fuzzy idea into a falsifiable statement and pre-commits its refutation conditions.

**Statement (v1):** *"Engineering teams of 5–30 devs lose 4+ hours per week to flaky/slow CI and the inability to tell real failures from noise — and the eng lead would pay ~$40 per seat per month to halve that."*

**Pre-registered refutation conditions** (written *before* the interviews, so she can't wriggle out later):

- **Segment wrong** if, across ~15 interviews, the acute pain lands only below 5 devs (too small to have real CI) or only above ~50 (they've hired platform teams and built internal tooling).
- **Magnitude wrong** if teams that *have* the pain consistently report it in minutes-per-week, not hours — a nuisance, not a budget line.
- **Willing-to-pay wrong** if leads with clear pain and budget authority still won't open a line item (e.g. "we just live with it" survives repeated, non-leading probing).

She then runs the interviews from lesson 2.2 as attempts to *break* this. Suppose the logs come back: pain is sharp and hourly at 8–30 devs but nearly absent below 8; magnitude clusters at 3–6 hours/week; and three of five willing-to-pay probes surface existing spend on CI runners or flaky-test bots. Result: the *segment* claim is refined (floor raised to ~8 devs — a partial refutation she must honor), while *magnitude* and *willing-to-pay* survive. That surviving, sharpened statement — not the original wish — is what she'll commit as \`startup.problem\` next lesson, and it's already consistent with Meridian's $40-per-seat model.`,
      branch: {
        scenario: `A founder's problem statement is: *"Developers want better tools and we make their lives easier."* After 20 interviews she reports "everyone agreed the problem is real — 20 for 20." How should you read that result?`,
        choices: [
          {
            label: '20/20 agreement is overwhelming validation — she should start building immediately.',
            correct: false,
            consequence: `**Instructive miss.** A statement that gets 20/20 agreement is almost certainly **unfalsifiable** — "developers want better tools" is true of essentially every developer alive, so agreement carries zero information. A test that can never fail can never pass in a meaningful sense. The perfect score is a red flag, not a green light.`,
          },
          {
            label: 'The 100% pass rate is a symptom that the statement can\'t fail — rewrite it with specific, refutable claims and re-test.',
            correct: true,
            consequence: `**Correct.** Unanimous agreement on a vague claim means the claim asserts nothing checkable. The fix is to rewrite it in the falsifiable shape — a specific segment, a quantified pain, and a price to clear — each with a pre-registered refutation condition, then run discovery *trying to break it*. A statement that survives honest falsification attempts across a defined segment is worth far more than one that trivially "passes" everywhere.`,
          },
          {
            label: 'Keep the statement but add more interviews to push the sample past 100 for statistical rigor.',
            correct: false,
            consequence: `**Instructive miss.** More samples of an unfalsifiable claim just accumulate more meaningless green checks — you can't fix a broken assertion by running it more times. The defect is in the *claim*, not the sample size. Sharpen the statement so it *can* fail first; only then does a larger sample buy you real confidence.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Make my problem statement falsifiable', kind: 'ask', question: 'Here is my problem statement. Is it falsifiable? Rewrite it in the "X segment loses Y because Z — and would pay to fix it" shape and list, for each part, the specific observation that would refute it.' },
        { label: 'Harder: pre-register refutation thresholds', kind: 'harder', concept: 'setting quantitative refutation thresholds in advance (segment bounds, magnitude, price) so market evidence produces a real pass/fail instead of moving goalposts' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which problem statement is genuinely falsifiable?',
          options: [
            '"Companies need to be more efficient and our product helps."',
            '"Solo indie developers lose 5+ hours a week to manual deploy steps and would pay $20/month to automate them."',
            '"Everyone hates wasting time."',
            '"We empower teams to do their best work."',
          ],
          answer: 1,
          explain: 'Only option 2 makes checkable claims — a specific segment (solo indie devs), a quantified pain (5+ hrs/week on manual deploys), and a price ($20/mo) — each of which interviews could contradict. The others are true-by-construction mission statements no evidence could refute.',
        },
        {
          kind: 'free',
          prompt: 'Write your problem statement in the form "X segment loses Y because Z — and would pay to fix it." Then, for each of X, Y, and Z, state the specific observation that would REFUTE it. What result would make you abandon or pivot the statement?',
          rubric: 'Strong answer: (1) states a specific segment, a quantified/concrete pain, and a plausible willing-to-pay mechanism (not a vague mission); (2) gives a distinct, checkable refutation condition for the segment, the magnitude, AND the willingness-to-pay — pre-registered before evidence; (3) names a concrete overall result that would trigger abandon/pivot, showing the claim can actually fail; (4) avoids unfalsifiable phrasing. Penalize statements that no observation could contradict.',
        },
      ],
      commitSummary: 'concept only — you commit your validated problem and ICP in lesson 2.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '2.4',
      module: 2,
      title: 'The ICP as a type definition & synthesizing signal',
      estMinutes: 18,
      prerequisites: ['2.1', '2.2', '2.3'],
      artifactSlot: 'problem',
      concept: `Your **Ideal Customer Profile (ICP)** is a **type definition**: it partitions the world into values that *inhabit* the type (in the set) and values that don't (out). A type is defined as much by what it **excludes** as by what it admits, and a vague ICP — "engineering teams" — is like a type that accepts \`any\`: it typechecks everything and therefore constrains nothing.

$$\\text{ICP} = \\{\\, c \\in \\text{Customers} \\mid \\text{predicate}(c) \\,\\}$$

A useful ICP is a **narrow predicate** with explicit boundaries — and the out-of-set cases are load-bearing, exactly like the negative cases in a well-specified type. For Meridian the predicate is roughly: *B2B software teams of ~5–30 devs, running CI they own, feeling flaky/slow pipelines as a recurring, budgeted pain.* The exclusions matter just as much: solo devs (no real CI pain, no seats to sell), 200-dev orgs (have platform teams that build internal tooling), non-software teams (no CI at all). Each exclusion sharpens targeting, messaging, and — later — CAC.

**Segmenting** is refining the type into subtypes with different behavior. "Teams of 5–30 devs" might split into *fast-growing startups drowning in flakes* versus *stable teams optimizing cost* — same broad set, different pains and willingness-to-pay. You pick the subtype where the pain is sharpest.

The second half of this lesson is **synthesizing signal from noise**. Interviews return a noisy stream: enthusiasm, contradictions, one-off complaints, polite agreement. Turning that into signal means:

- **Weight past behavior and spend** far above stated intent (lesson 2.2).
- **Cluster by segment**, not in aggregate — a pain that's universal-but-mild in the whole sample may be acute in one subtype, and averaging destroys that.
- **Discount the outliers** who don't fit the ICP predicate; their vivid complaints are noise relative to your set, and chasing them widens the type back toward \`any\`.
- **Look for convergence**: the same specific pain, described in the same terms, recurring across in-set interviews. Convergence among in-set customers is signal; a loud one-off from an out-of-set customer is noise.

The output of all this is one committed, falsifiable problem statement plus a typed ICP — the foundation every later module builds on.`,
      reframe: {
        analogy: `An ICP is a **type with a discriminated boundary**, and defining "who's OUT" is writing the negative cases of the type — the inputs that must *not* typecheck. Synthesizing signal is a **classification / denoising** problem: interviews are noisy labeled samples, and you're fitting a decision boundary (the ICP predicate) while resisting overfit to loud outliers. Weighting spend over stated intent is choosing **high-quality labels** over cheap ones; clustering by segment before judging is **not averaging across classes**, because a signal strong in one cluster vanishes when you pool it with everything else.`,
        breaks: `A type boundary is **crisp and enforced by the compiler** — a value is in or out, no ambiguity, and it stays put. An ICP boundary is **fuzzy, probabilistic, and drifts**: real customers sit near the edge, a team of 32 devs isn't categorically different from 30, and the ideal set shifts as your product and the market evolve. There's no compiler to reject an off-type customer — *you* do, and every wrong inclusion costs real CAC. So unlike a type you can't set the ICP once and trust enforcement; you re-fit the boundary as evidence accumulates, and you deliberately keep it *narrow* early (precision over recall) because a too-wide ICP quietly poisons targeting long before any error surfaces.`,
      },
      workedExample: `**Meridian's** founder has 15 interview logs and must synthesize them into a committed ICP and problem. Raw stream (noisy):

- Six teams at **8–30 devs** describe flaky CI in near-identical terms: hours lost, "is CI broken again?" Slack channels, some already paying for flaky-test bots. **Convergence — strong in-set signal.**
- Two **solo devs** are wildly enthusiastic ("I'd love this!") but have trivial CI and no budget. **Loud, but out-of-set — noise.**
- One **250-dev platform lead** says the problem is real but "we built our own." **Out-of-set — confirms the upper exclusion, not a customer.**
- Two **5–7 dev teams** feel it mildly; pain is real but sub-hour. **In-set but weak — informs the lower boundary.**

**Synthesis.** Cluster by segment, not aggregate: pooling all 15 would dilute the sharp 8–30 signal with solo-dev noise and platform-team irrelevance. Weight the six converging in-set logs (with *existing spend*) highest. Discount the enthusiastic solo devs entirely — including them would widen the ICP back toward \`any\` and wreck targeting.

**Committed ICP (the type):**
- **IN:** B2B software teams, ~8–30 devs, own their CI, ship frequently, feel flaky/slow pipelines as a recurring budgeted pain; buyer is the eng lead with seat budget.
- **OUT:** solo devs and <8-dev teams (CI pain too small); 50+ dev orgs with platform teams (build their own); any team without owned CI.

**Committed problem (falsifiable, from lesson 2.3, now sharpened):** *"Software teams of 8–30 devs lose 3–6 hours/week to flaky, slow CI and can't cheaply tell real failures from noise — and their eng lead will pay ~$40 per seat per month to cut that materially."* This is exactly the segment and price behind Meridian's $40/seat model, ~5–30-dev ICP, and the CAC/LTV story from Module 5. The artifact below commits both to \`startup.problem\`.`,
      branch: {
        scenario: `Synthesizing 15 interviews, you find your sharpest, most emotional feedback came from a single out-of-ICP customer — a 400-dev enterprise with a vivid, specific horror story — while your six in-ICP small teams gave calmer, convergent, but less dramatic accounts. Where do you point the product?`,
        choices: [
          {
            label: 'Chase the enterprise — the intensity of that story proves the biggest pain and the biggest contract.',
            correct: false,
            consequence: `**The seductive miss.** One vivid out-of-set data point is *noise* relative to your ICP, no matter how emotional. Reorienting toward a 400-dev enterprise silently rewrites your type to \`any\`: different buyer, different sales motion, different product (SSO, on-prem, procurement), and it abandons the convergent signal from six in-set teams. Chasing the loudest outlier is overfitting to a single sample and is how focused products dissolve into unfocused ones.`,
          },
          {
            label: 'Serve the convergent in-ICP small teams; treat the enterprise story as an out-of-set outlier to note, not chase.',
            correct: true,
            consequence: `**Correct.** Convergence across six in-set customers — same pain, same terms, some already spending — is real signal; a lone out-of-set horror story is noise for *your* type, however dramatic. Building for the small-team ICP keeps CAC, pricing ($40/seat), and messaging coherent. Log the enterprise anecdote as a possible future segment, but don't let one loud sample re-fit your decision boundary and drag the ICP back toward everyone.`,
          },
          {
            label: 'Widen the ICP to cover both so you don\'t leave either opportunity on the table.',
            correct: false,
            consequence: `**Instructive miss.** "Cover both" is how an ICP decays into \`any\`. A type that admits 8-dev startups *and* 400-dev enterprises constrains nothing: you'd build conflicting features, blur your messaging, and raise CAC by marketing to two incompatible buyers at once. Early ICPs win on **precision, not recall** — narrow deliberately and expand only on evidence, never to avoid the discomfort of excluding someone.`,
          },
        ],
      },
      artifact: {
        componentKey: 'form',
        prompt: `Commit your validated problem and ICP. State the problem as a falsifiable claim, and define your Ideal Customer Profile as a type — who's in, who's explicitly out.`,
        fields: [
          { key: 'statement', label: 'Problem statement (falsifiable)', type: 'textarea', placeholder: 'X segment loses Y because Z — and would pay to fix it' },
          { key: 'icpIncludes', label: 'ICP — who is IN the set', type: 'textarea' },
          { key: 'icpExcludes', label: 'ICP — who is explicitly OUT', type: 'textarea' },
          { key: 'topPain', label: 'The single sharpest pain', type: 'text' },
          { key: 'evidence', label: 'Evidence you have (or will get)', type: 'textarea' },
        ],
      },
      tutorHooks: [
        { label: 'Pressure-test my ICP boundaries', kind: 'ask', question: 'Here is my draft ICP. Is the predicate narrow enough to constrain anything? Challenge my included and excluded sets, and tell me where my boundary is really "any" in disguise.' },
        { label: 'Harder: synthesize noisy interview data', kind: 'harder', concept: 'clustering conflicting interview signals by segment, weighting spend over intent, and deciding which subtype has the sharpest willing-to-pay pain' },
        { label: 'Critique my problem + ICP commit', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why is explicitly defining who is OUT of your ICP as important as defining who is in?',
          options: [
            'It is a formality; the exclusions do not affect the product or go-to-market',
            'A type is defined by its boundaries — without exclusions the ICP effectively accepts "any", which constrains nothing and blurs targeting, messaging, and CAC',
            'Exclusions exist only to avoid legal liability with certain customers',
            'It lets you charge excluded customers a higher price',
          ],
          answer: 1,
          explain: 'An ICP is a **type**, and a type is defined as much by what it rejects as by what it admits. Drop the exclusions and the predicate degenerates toward `any` — targeting, messaging, and CAC all blur because you are effectively selling to everyone.',
        },
        {
          kind: 'mcq',
          prompt: 'Across your interviews, your loudest, most emotional complaint comes from one customer far outside your ICP, while six in-ICP customers converge on the same calmer pain. Which is the stronger signal?',
          options: [
            'The single loud out-of-ICP complaint — emotional intensity indicates the biggest opportunity',
            'The six convergent in-ICP customers — convergence within your set is signal; a loud out-of-set one-off is noise',
            'They are equally weighted; every data point counts the same',
            'Neither — you should only trust survey data, not interviews',
          ],
          answer: 1,
          explain: 'Convergence among **in-set** customers (especially with existing spend) is signal; a single vivid **out-of-set** complaint is noise relative to your type, however emotional. Chasing the loud outlier overfits to one sample and quietly widens your ICP back toward `any`.',
        },
        {
          kind: 'free',
          prompt: 'Define your ICP as a type: the predicate for who is IN and at least three explicit exclusions (who is OUT), each with a reason. Then explain how you would synthesize a set of conflicting interviews into a single go/no-go signal for this ICP — what you weight up, and what you discount as noise.',
          rubric: 'Strong answer: (1) states a narrow, specific inclusion predicate (segment, size, context, buyer) rather than a vague "any"; (2) gives at least three concrete exclusions each with a reason tied to pain/budget/fit; (3) describes synthesis that weights past behavior and actual spend over stated intent, clusters by segment rather than averaging, and discounts out-of-ICP outliers as noise; (4) looks for convergence among in-set customers as the go/no-go signal. Penalize ICPs broad enough to accept nearly everyone, or synthesis that just tallies enthusiasm.',
        },
      ],
      commitSummary: 'your validated **problem statement** (falsifiable) and typed **ICP** — who is in and explicitly out, the sharpest pain, and your evidence — written to **startup.problem**, the foundation later modules build positioning, GTM, and sales on.',
    },
  ],
}
