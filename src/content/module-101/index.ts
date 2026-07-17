import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 101 — Mission & theory of change  (BONUS · Season 1 · non-profit path)
//
// Slots in right after lesson 0 for learners who chose "Non-profit". Mirrors
// Module 5's rigor: an objective-function reframe, a causal-DAG reframe for the
// theory of change, the outputs-vs-outcomes distinction as logging-vs-value,
// and a weakest-link / critical-path stress test. Real examples are named and
// lightly cited; all figures are labelled illustrative.
// ===========================================================================

export const module101: Module = {
  id: 101,
  season: 1,
  bonus: true,
  paths: ['nonprofit'],
  insertAfter: 0,
  title: 'Mission & theory of change',
  goal: "Replace 'profit' with 'impact' as your north star, and make the causal chain from your work to real-world change explicit and testable.",
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '101.1',
      module: 101,
      title: 'Impact as the objective function',
      estMinutes: 14,
      prerequisites: [],
      artifactSlot: null,
      concept: `A for-profit optimizes one scalar it can read straight off a bank statement: **profit**. A non-profit optimizes **mission impact** — the amount of real-world change it creates — and that single swap re-derives every downstream decision.

Impact is a harder objective for three reasons:

- **It is not directly observable.** Profit is measured; impact is *estimated*, usually with a proxy and a confidence interval.
- **The unit is chosen, not given.** "Dollars" is universal; "children who did not die of malaria," "tonnes of CO2 not emitted," or "prisoners who did not re-offend" are unit choices you must defend.
- **Revenue and objective decouple.** For a company, money in *is* the score. For a non-profit, money in is a **constraint** (you must stay solvent) but not the objective — a charity can raise more every year while its actual impact flatlines or falls.

That decoupling is the whole risk. When the thing that funds you (donations) diverges from the thing you exist to do (impact), you feel financial success while drifting from mission. This is **mission drift**: optimizing the fundraising proxy instead of the objective. Every later lesson is machinery for keeping the proxy honest.`,
      reframe: {
        analogy: `Think of your organization as a training loop minimizing a **loss function**. A company's loss is easy: negative profit, a quantity the world hands you every quarter. Your loss is **negative impact** — and you had to *write the loss function yourself*. Choosing your impact metric is choosing the objective the whole organization will gradient-descend toward, and everything not in that loss gets sacrificed to it. Pick "meals served" and you will, faithfully, maximize meals served even if nobody's nutrition improves. The optimizer is ruthless about optimizing exactly what you wrote down.`,
        breaks: `A loss function in training is fixed, cheap to evaluate, and differentiable. Your impact objective is **none of those**. It is expensive and slow to evaluate (you might learn whether it worked years later), it is **contested** (funders, staff, and beneficiaries may weight terms differently), and it can be **gamed** — a proxy you optimize hard enough stops correlating with the thing you cared about (Goodhart's law). So you are not just running the optimizer; you are perpetually **auditing whether the loss you wrote still points at the good you meant**. A company rarely has to ask whether profit still means profit.`,
      },
      workedExample: `**GiveWell** (illustrative) is a charity evaluator whose entire method is the refusal to let revenue stand in for impact. It does not ask "which charity raised the most?" — it asks "which charity converts a **marginal dollar** into the most impact?", using **cost-effectiveness** as its objective function, denominated in a deliberately chosen unit.

For its top malaria recommendations, GiveWell has publicly used a benchmark on the order of **~$3,000–$5,000 per life saved** (figures illustrative and revised over time). Notice what that objective forces:

- The unit is explicit ("lives saved," or more precisely deaths averted / DALYs), so two very different programs become comparable.
- A charity that is **beloved and well-funded** but converts dollars to impact inefficiently scores *worse* than an obscure one that converts efficiently — the opposite of a revenue ranking.
- The number invites challenge. Anyone can attack the estimate, which is the point: an objective you can argue about is an objective you can improve.

The lesson isn't the exact dollar figure — it's that GiveWell wrote down a loss function in impact-per-dollar and then optimized *that*, not donations received.`,
      branch: {
        scenario: `You run a non-profit teaching coding to unemployed adults. A major funder offers to **triple your budget** if you switch your headline metric from "graduates who got a job within 6 months" to "total students enrolled," because enrollment is the number their board likes to see grow. Enrollment is far easier to pump. What do you do?`,
        choices: [
          {
            label: 'Switch to enrollment — more money means more impact, and enrollment is real activity.',
            correct: false,
            consequence: `**Instructive miss.** You just changed your objective function to one that decouples from your mission. Enrollment is an *input/output*, not the change you exist to create; you can maximize it by admitting people you can't place, and your true impact can fall while the funder cheers. You've optimized the fundraising proxy — textbook **mission drift**, now contractually locked in.`,
          },
          {
            label: 'Keep employment as the objective; report enrollment as a secondary operational metric, and only take the money if the funder accepts that framing.',
            correct: true,
            consequence: `**Correct.** The objective stays anchored to the real-world change (people employed), while enrollment is demoted to what it actually is — a leading operational signal, useful but not the score. If the funder accepts this, you get the money without corrupting the loss. If they won't, you've learned the funding was pulling you off-mission, which is exactly the drift signal you needed to see.`,
          },
          {
            label: 'Decline any conversation — funder metrics are always corrupting.',
            correct: false,
            consequence: `**Overcorrection.** Funders aren't inherently corrupting, and refusing to engage forfeits real resources. The discipline isn't "reject funders," it's "never let the funding proxy *replace* the impact objective." You can often satisfy a funder's reporting needs with secondary metrics while keeping your loss function intact. Negotiate the framing; don't walk away on principle.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each item by the role it plays for a non-profit: is it the OBJECTIVE (the impact you optimize) or a CONSTRAINT (something you must satisfy to keep operating)?',
          buckets: ['Objective (impact)', 'Constraint (must satisfy)'],
          items: [
            { text: 'Reduction in beneficiary disease burden', bucket: 'Objective (impact)' },
            { text: 'Long-run literacy gains in the population you serve', bucket: 'Objective (impact)' },
            { text: 'Staying cash-solvent this fiscal year', bucket: 'Constraint (must satisfy)' },
            { text: 'Meeting your annual fundraising target', bucket: 'Constraint (must satisfy)' },
            { text: 'Complying with grant reporting requirements', bucket: 'Constraint (must satisfy)' },
          ],
          explain: 'Solvency, fundraising, and compliance are constraints — necessary to keep running, but not the score. Mission drift is what happens when a constraint (raise money) quietly gets promoted to the objective. Keep impact terms in the objective bucket and everything financial in the constraint bucket.',
        },
      ],
      tutorHooks: [
        { label: 'Draft my impact objective', kind: 'ask', question: 'Given my cause area, help me write ONE explicit impact objective function — the unit of good I optimize — and name the fundraising proxy most likely to tempt me away from it.' },
        { label: 'Harder: multi-term objectives', kind: 'harder', concept: 'combining multiple impact terms (reach, depth, equity) into one objective and the weighting choices that implies' },
        { label: 'Critique my objective', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A food bank distributes 30% more meals than last year, and donations are up 25%. Which statement best reflects impact thinking?',
          options: [
            'Impact clearly rose — both meals and money went up.',
            'You cannot yet conclude impact rose; meals distributed is an output, and donations are a constraint, not the objective.',
            'Impact fell, because costs must have risen with the extra meals.',
            'Impact equals donations, so it rose 25%.',
          ],
          answer: 1,
          explain: 'More meals and more money are encouraging, but neither is impact. Meals distributed is an output (a thing you did); donations are a funding constraint. Impact is the change in real hunger/nutrition, which these numbers do not directly establish. Conflating any of them with impact is exactly the decoupling this lesson warns against.',
        },
        {
          kind: 'free',
          prompt: 'State the single impact objective YOUR organization (or a non-profit you know) should optimize, including its unit. Then name the fundraising or vanity proxy most likely to tempt you into mission drift, and say how you would tell the two apart in practice.',
          rubric: "A strong answer: (1) states one explicit impact objective with a defensible unit (e.g. deaths averted, sustained literacy gains, recidivism avoided) rather than an activity count; (2) distinguishes it from revenue/donations, correctly treating money as a constraint; (3) names a concrete proxy (enrollment, meals served, donations, social-media reach) that could displace the objective; (4) gives a practical test for detecting drift, e.g. 'the proxy can rise while the objective stays flat.'",
        },
      ],
      commitSummary: 'concept only — you make the causal chain behind this objective explicit in the next lessons.',
    },

    // -----------------------------------------------------------------------
    {
      id: '101.2',
      module: 101,
      title: 'Theory of change: the causal model',
      estMinutes: 15,
      prerequisites: ['101.1'],
      artifactSlot: null,
      concept: `A **theory of change** is your organization's causal model: the explicit chain from the resources you put in to the change you claim to cause. The canonical links are:

**inputs → activities → outputs → outcomes → impact**

- **Inputs** — resources you consume (money, staff, volunteer hours, supplies).
- **Activities** — what you do with them (run a clinic, distribute nets, teach a class).
- **Outputs** — the direct, countable products of activities (nets distributed, students taught).
- **Outcomes** — the *changes* in the people or system that result (nets are hung and used; students actually learn).
- **Impact** — the long-run, higher-order effect (malaria mortality falls; lifetime earnings rise).

The point of writing it down is not to have a diagram. It is that **each arrow is a hypothesis** — a claim of the form "if we do the left thing, the right thing follows." And a hypothesis can be *wrong*. "We distribute nets → people sleep under them" is not a fact; it is a bet, and one that has genuinely failed in the field (nets repurposed as fishing gear). Making each link explicit turns a vague good intention into a set of **falsifiable claims you can go test**, one arrow at a time.`,
      reframe: {
        analogy: `A theory of change is a **causal DAG** — a dependency graph. Each node is a state; each directed edge is a claimed causal dependency, exactly like a build graph where "compile" must succeed before "link" can. Reading it left to right is a **forward pass**: inputs propagate through activities and outputs to produce impact. And because it's a dependency graph, you can reason about it structurally — trace any claimed impact **backward** along its edges to the inputs it depends on, and check that every edge in that path is one you actually believe. An impact node with no valid path back to your inputs is a claim with no support.`,
        breaks: `Software dependency graphs have edges that are **guaranteed** — if the compiler ran, the object file exists, deterministically. Your edges are **probabilistic and often unproven**: "class taught → students learned" holds *sometimes*, with an effect size, under conditions. Worse, real social systems have **feedback loops and confounders** a DAG's acyclic assumption forbids — outcomes can loop back and change behavior, and a hidden common cause can make two nodes correlate without any real edge between them. So use the graph to *organize* your causal claims and find what to test, but never mistake a drawn arrow for a compiled, guaranteed dependency.`,
      },
      workedExample: `**Against Malaria Foundation (AMF)** (illustrative) has an unusually crisp theory of change, which is part of why evaluators trust it:

- **Inputs:** donations (on the order of a few dollars per net, figure illustrative).
- **Activities:** fund and coordinate mass distributions of long-lasting insecticidal nets.
- **Outputs:** nets delivered to households in malaria-endemic regions.
- **Outcomes:** nets are *hung and slept under*, reducing infective mosquito bites.
- **Impact:** fewer malaria cases and deaths, especially in children under five.

Now watch the arrows become hypotheses AMF actually treats as testable rather than assumed. The **output → outcome** arrow — "nets delivered → nets used" — is the one that has failed elsewhere, so AMF funds **post-distribution surveys** that physically check whether nets are present and in use months later. The **outcome → impact** arrow rests on decades of randomized-trial evidence linking net usage to reduced mortality. Two different arrows, two different kinds of evidence, each attached to a specific link. That is what a theory of change buys you: it tells you *which* claim to go verify, instead of verifying the vague whole.`,
      branch: {
        scenario: `A youth mentoring non-profit describes its theory of change as: "We recruit mentors (input) → we run weekly sessions (activity) → at-risk teens improve their life outcomes (impact)." A funder asks you to review it. What is the most important structural problem?`,
        choices: [
          {
            label: 'Nothing structural — inputs, activities, and impact are all present, so the chain is complete.',
            correct: false,
            consequence: `**Instructive miss.** The nodes present aren't the issue; the **missing nodes** are. The chain jumps straight from an activity to long-run impact with no **outputs** (sessions actually attended) and no **outcomes** (measurable change in behavior, school engagement, etc.). That leap hides every place the causal path could break, and makes the whole theory unfalsifiable — you can't test an arrow you never drew.`,
          },
          {
            label: "The graph skips outputs and outcomes, collapsing several distinct causal arrows into one unexaminable jump from 'sessions' to 'life outcomes.'",
            correct: true,
            consequence: `**Correct.** The links "sessions run → sessions attended → teens more engaged/behaviorally changed → better long-run outcomes" are *several* hypotheses, each of which can independently fail. Collapsing them into one arrow means you can never localize a failure or test a claim. Expanding the intermediate nodes is exactly what makes the theory testable — and usually reveals the weakest link the org was quietly assuming away.`,
          },
          {
            label: 'The problem is that it lacks a budget and a fundraising plan.',
            correct: false,
            consequence: `**Category error.** A budget matters, but it isn't the *structural* flaw in the causal model. A theory of change is about the causal chain from work to change, not the finances; adding a budget wouldn't fix the fact that the chain teleports from an activity to impact with no testable intermediate links.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'rank',
          prompt: 'Put the five links of a theory of change in causal order, from what you consume to the long-run change you cause.',
          items: ['Inputs', 'Activities', 'Outputs', 'Outcomes', 'Impact'],
          explain: 'Inputs (resources) fund activities (what you do), which produce outputs (countable products), which — if your hypotheses hold — cause outcomes (changes in people/systems), which aggregate into impact (long-run effect). Each arrow between adjacent links is a separate, falsifiable causal claim.',
        },
        {
          kind: 'categorize',
          prompt: "A literacy non-profit lists the items below. Classify each as an OUTPUT (a countable thing produced) or an OUTCOME (a change that resulted).",
          buckets: ['Output', 'Outcome'],
          items: [
            { text: '5,000 books distributed to schools', bucket: 'Output' },
            { text: '120 reading sessions delivered', bucket: 'Output' },
            { text: "Children's reading level rose by one grade", bucket: 'Outcome' },
            { text: 'Share of students reading at grade level increased', bucket: 'Outcome' },
          ],
          explain: 'Books distributed and sessions delivered are outputs — direct products of activity you fully control. Reading-level gains and the share reading at grade level are outcomes — changes in the beneficiaries that only occur if the output→outcome hypothesis actually holds. The next lesson is entirely about not confusing these two.',
        },
      ],
      tutorHooks: [
        { label: 'Draw my theory of change', kind: 'ask', question: 'Help me write my theory of change as inputs → activities → outputs → outcomes → impact for my cause, and mark each arrow as a hypothesis with the evidence I currently have (or lack) for it.' },
        { label: 'Harder: confounders & feedback', kind: 'harder', concept: 'where a linear theory-of-change chain hides confounders or feedback loops, and how to represent them honestly' },
        { label: 'Critique my causal chain', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In a theory of change, what does each arrow between adjacent links actually represent?',
          options: [
            'A guaranteed, automatic step, like a compiled dependency.',
            'A falsifiable causal hypothesis that could turn out to be false.',
            'A budget line item.',
            'A funder reporting requirement.',
          ],
          answer: 1,
          explain: 'Every arrow is a claim of the form "if the left node happens, the right node follows" — a hypothesis you can test and that field experience shows can genuinely fail (e.g. nets delivered but not used). Treating arrows as guaranteed is the error the causal-DAG reframe warns against.',
        },
        {
          kind: 'mcq',
          prompt: 'Why is it a problem for a theory of change to jump directly from an activity to long-run impact, skipping outputs and outcomes?',
          options: [
            'It makes the diagram look too short and unprofessional.',
            'It collapses several distinct, independently-failable hypotheses into one arrow you can neither localize nor test.',
            'It violates accounting standards.',
            'It is fine, as long as the impact is important enough.',
          ],
          answer: 1,
          explain: 'The intermediate links are exactly where the causal path can break. Collapsing them into a single leap hides every failure point and makes the theory unfalsifiable — you cannot verify an arrow you never drew.',
        },
      ],
      commitSummary: 'concept only — you sharpen the outputs-vs-outcomes distinction next, then stress-test the whole chain.',
    },

    // -----------------------------------------------------------------------
    {
      id: '101.3',
      module: 101,
      title: 'Outputs vs outcomes vs impact',
      estMinutes: 13,
      prerequisites: ['101.1', '101.2'],
      artifactSlot: null,
      concept: `This is the single most important distinction in non-profit measurement, and the one most organizations get wrong:

- **Outputs** are things **you did** — nets distributed, meals served, students enrolled, wells drilled. You control them directly and can count them today.
- **Outcomes** are the **changes that resulted** in people or systems — nets used and malaria transmission down, nutrition improved, students literate, communities drinking clean water.
- **Impact** is the **long-run, attributable effect** net of what would have happened anyway — the counterfactual difference your work made.

Why counting outputs fools you: outputs are **cheap, fast, and fully within your control**, so they always look good. You can drill 100 wells and report a triumph while every well is broken within a year and nobody's water is cleaner. The output ("wells drilled") is real; the outcome ("clean water consumed") never happened. Because outputs are easy to produce and easy to grow, an organization that manages to its output numbers will reliably manufacture the *feeling* of progress while its actual impact stays flat — the exact mechanism of mission drift from lesson 101.1.

The discipline: **treat outputs as leading indicators, never as the goal.** Always ask "and did the outcome follow?" — and remember that impact additionally requires the **counterfactual**: change that wouldn't have happened without you.`,
      reframe: {
        analogy: `Outputs are **logging events**; outcomes are **measured user value**. Any engineer knows a service can emit a torrent of \`request_handled\` and \`job_completed\` logs — high throughput, green dashboards — while users are getting nothing they actually needed. The logs are trivially easy to emit and count, which is exactly why they're a seductive substitute for the hard question: did the user's real problem get solved? "Wells drilled" is \`well_drilled\` fired 100 times. "Clean water consumed for a year" is the retained, real user value — vastly harder to measure, and the only thing that mattered. Optimizing your log volume is Goodhart's law with a dashboard.`,
        breaks: `Server logs, at least, are **reliably true**: if the event fired, the code path ran. Non-profit outputs share their seductiveness but not their reliability — and the gap to "value" is far wider and slower to close. A user-value metric in software often arrives in minutes; an *outcome* like sustained literacy or averted disease can take **years** to become measurable, and establishing **impact** requires isolating your contribution from every other cause (a comparison or control group), which has no clean analogue in reading a log line. So the analogy nails *why outputs mislead*, but understates how much harder measuring social outcomes is than instrumenting a service.`,
      },
      workedExample: `**PlayPumps International** (illustrative) is the canonical cautionary tale. The idea: install merry-go-round water pumps in African villages so that children playing spins the pump and draws clean water. Roughly **1,800 pumps** were installed with tens of millions of dollars in funding (figures illustrative).

Read it against the three levels:

- **Output — spectacular.** ~1,800 pumps installed. Easy to count, easy to photograph, easy to fundraise on. Every output number was a success.
- **Outcome — a failure.** To meet villages' water needs, children would have had to "play" on the roundabout for hours a day; in practice adults, often women, ended up pushing it laboriously, many pumps sat broken with no maintenance path, and communities frequently preferred the hand pumps they'd had before. The **output → outcome** arrow — "pumps installed → clean water reliably obtained" — largely failed.
- **Impact — negative in places.** Some functioning conventional pumps were *replaced* by PlayPumps, so the counterfactual water access went **down**.

The organization was, by output metrics, wildly successful right up until independent outcome evaluations exposed the gap. Every dollar of that lesson is the difference between counting what you did and measuring what changed.`,
      branch: {
        scenario: `Your global-health non-profit reports to its board: "This year we trained **4,000 community health workers** — a 60% increase." A board member who took this course asks one question. Which question most sharply exposes whether real impact occurred?`,
        choices: [
          {
            label: '"Can we push the number to 6,000 trained next year?"',
            correct: false,
            consequence: `**Instructive miss.** This doubles down on the *output*. Growing "workers trained" makes the dashboard greener while telling you nothing about whether trained workers are actually practicing, retained, and improving patient health. You'd be optimizing the log-event count — precisely the trap PlayPumps fell into.`,
          },
          {
            label: '"Of the workers we trained, how many are still actively delivering care six months later, and did the health outcomes in their communities measurably improve versus comparable communities we didn\'t reach?"',
            correct: true,
            consequence: `**Correct.** This question walks the chain: from output (trained) to outcome (still practicing, care delivered) to impact (community health improved, *against a counterfactual comparison*). It refuses to let the training count stand in for the change, and it explicitly asks for the comparison group that separates your effect from what would have happened anyway. That is the whole lesson in one question.`,
          },
          {
            label: '"What was the cost per worker trained?"',
            correct: false,
            consequence: `**Useful but insufficient.** Cost-per-output is a real efficiency metric, but it still measures efficiency at producing the *output*, not whether the output caused any outcome. A very cheap training program that changes nothing is not a bargain — it's a cheaper way to produce zero impact. Ask about outcomes first, then cost per outcome.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'A clean-water charity reports the following. Sort each into OUTPUT (what we did), OUTCOME (change that resulted), or IMPACT (long-run counterfactual effect).',
          buckets: ['Output', 'Outcome', 'Impact'],
          items: [
            { text: '250 wells drilled this year', bucket: 'Output' },
            { text: 'Village training sessions held on well maintenance', bucket: 'Output' },
            { text: '80% of wells still delivering clean water after 18 months', bucket: 'Outcome' },
            { text: 'Households now drink from a safe source year-round', bucket: 'Outcome' },
            { text: 'Child diarrheal-disease rates fell vs comparable un-served villages', bucket: 'Impact' },
          ],
          explain: 'Wells drilled and sessions held are outputs you control. Wells still working and safe water consumed are outcomes — changes that only happen if the output→outcome hypothesis holds. The disease-rate drop measured against comparable un-served villages is impact, because the comparison isolates your counterfactual contribution.',
        },
        {
          kind: 'numeric',
          prompt: 'You install 500 pumps. Independent follow-up finds only 55% are still functional and actually used after one year. How many pumps are delivering the intended outcome?',
          answer: 275,
          unit: 'pumps',
          explain: '500 × 0.55 = 275. The other 225 are pure output with no outcome — installed, counted, fundraised on, but delivering nothing. Reporting "500 pumps installed" overstates real impact by nearly 2x. This gap between output and outcome is exactly what output-counting hides.',
        },
      ],
      tutorHooks: [
        { label: 'Split my metrics into the three levels', kind: 'ask', question: 'Here are the numbers my organization currently reports. Sort each into output, outcome, or impact, and flag any output I am currently mistaking for an outcome.' },
        { label: 'Harder: measuring the counterfactual', kind: 'harder', concept: 'estimating the counterfactual (comparison groups, RCTs, difference-in-differences) to move from outcome to true impact' },
        { label: 'Critique my reporting', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: '"1,800 water pumps installed" is which kind of metric, and why is it dangerous to celebrate on its own?',
          options: [
            'An outcome — it proves communities got water.',
            'An output — it counts what you did, and reveals nothing about whether clean water was actually obtained.',
            'An impact — it captures the long-run counterfactual effect.',
            'A constraint — it limits how much you can spend.',
          ],
          answer: 1,
          explain: 'Pumps installed is an output: fully within your control and easy to count, but silent on whether the output→outcome link held. PlayPumps installed ~1,800 pumps while the outcome (reliable clean water) largely failed — the danger of treating a countable output as if it were the change.',
        },
        {
          kind: 'free',
          prompt: "Pick ONE headline output your organization (or a non-profit you know) is proud of. State the outcome it is supposed to cause, then describe how you would actually verify the outcome followed — including how you'd estimate the counterfactual to claim genuine impact.",
          rubric: "A strong answer: (1) names a concrete output the org controls and counts; (2) states the specific outcome (real change in people/systems) that output is meant to cause, clearly distinct from the output; (3) proposes a credible verification of the outcome (follow-up survey, usage check, longitudinal measurement) rather than re-counting the output; (4) addresses the counterfactual — a comparison/control group or baseline — to separate genuine impact from what would have happened anyway.",
        },
      ],
      commitSummary: 'concept only — next you write your full chain as if-then links and hunt its weakest assumption.',
    },

    // -----------------------------------------------------------------------
    {
      id: '101.4',
      module: 101,
      title: 'Stating and stress-testing your theory of change',
      estMinutes: 16,
      prerequisites: ['101.1', '101.2', '101.3'],
      artifactSlot: null,
      concept: `Now assemble the chain and attack it. A theory of change you can't attack is decoration; a theory of change you *stress-test* is a plan.

**Step 1 — write every link as an explicit if-then.** Not "we help kids read," but a chain of conditionals:

- *If* we deliver books and run sessions (activities), *then* children attend and read them (outputs used).
- *If* children read regularly with support (outcome mechanism), *then* their reading level rises.
- *If* reading level rises and persists, *then* long-run educational and economic outcomes improve (impact).

**Step 2 — find the weakest link.** Each if-then has a probability of holding. The chain's overall success is roughly the **product** of those probabilities, so — exactly like a system's reliability — it is dominated by its **weakest link**. One arrow at 20% drags a chain of otherwise-90% arrows down to ~15%. Your job is to *identify that arrow* and either gather evidence for it or redesign around it.

The weakest link is usually **not** the one you're anxious about (can we drill the well?) but a quiet **behavioral or persistence assumption** you've never tested (will people *keep using* it?). Naming it converts your biggest risk from an unknown unknown into a hypothesis with a test attached — the whole point of doing any of this.`,
      reframe: {
        analogy: `Your theory of change is a **series reliability chain**, and finding the weakest assumption is finding the **critical path / single point of failure**. In a series system, overall reliability is the product of each component's reliability, so total success is capped by the least-reliable link — hardening the 99% components while a 30% component sits in series is wasted effort. Stress-testing a theory of change is the same triage: walk the chain, estimate each arrow's probability of holding, and pour your evidence-gathering and redesign budget into the **lowest-probability edge**, because that single point of failure bounds the whole system's expected impact.`,
        breaks: `Hardware reliabilities are **independent and estimated from data**; your link probabilities are **guessed, correlated, and revisable**. A single root cause (say, the program is culturally mismatched) can knock down several "independent" arrows at once, so the product-of-probabilities math is a heuristic for *where to look*, not a precise forecast. And unlike a fixed circuit, you can often **re-architect the chain** — add a maintenance activity, change the delivery model — turning a fatal weakest link into a survivable one. Use the reliability framing to *prioritize*, then remember your numbers are hypotheses, not datasheet values.`,
      },
      workedExample: `Take the malaria-net chain from lesson 101.2 and stress-test it as if-then links with illustrative probabilities:

1. *If* funded, *then* nets are manufactured and delivered to households. — call it **~95%** (logistics are well-understood).
2. *If* nets are delivered, *then* households hang and sleep under them nightly. — historically the shaky one; suppose **~70%** without follow-up.
3. *If* nets are used consistently, *then* infective bites and malaria transmission fall. — strong RCT evidence, **~90%**.
4. *If* transmission falls, *then* child mortality falls. — well-established, **~90%**.

Product ≈ 0.95 × 0.70 × 0.90 × 0.90 ≈ **0.54**. The chain's expected success is dominated by **link 2** — the behavioral "will they actually use it?" assumption — not by the manufacturing or the epidemiology everyone worries about. So the highest-value action isn't better nets or more trials; it's the thing effective net charities actually do: **post-distribution use surveys and education** that push link 2 from ~70% toward ~90%, which alone lifts the whole chain from ~0.54 to ~0.69. Same nets, same science — the leverage was entirely at the weakest link. Note also link 2 and its fix are **correlated** with local factors (heat, sleeping arrangements, prior education), so the analogy's independence assumption is only a guide to *where to look*.`,
      branch: {
        scenario: `You've written your job-training non-profit's theory of change as four if-then links and estimated each: (1) recruit unemployed adults — 90%; (2) they complete the 12-week course — 60%; (3) completers gain job-ready skills — 85%; (4) skilled completers get hired within 6 months — 65%. You have budget to seriously improve exactly ONE link this year. Which do you attack, and how do you decide?`,
        choices: [
          {
            label: 'Link 3 — invest in a better curriculum so skills gained goes from 85% to 95%.',
            correct: false,
            consequence: `**Instructive miss.** Link 3 is already among your *strongest* arrows (85%). Lifting a strong link yields little: the chain product barely moves because it's bottlenecked elsewhere. This is the classic error of hardening the reliable component while the weak one sits untouched — effort spent where it can't change the system-level number.`,
          },
          {
            label: 'Attack the lowest-probability link on the path — completion (60%) — since the chain product is bounded by its weakest arrow.',
            correct: true,
            consequence: `**Correct.** The chain is ~0.90 × 0.60 × 0.85 × 0.65 ≈ 0.30. Completion at 60% is the single point of failure; every downstream success is gated by it. Push completion from 60% to 80% (mentoring, stipends, childcare) and the whole chain jumps from ~0.30 to ~0.40 — a third more impact with no change to curriculum or hiring. Fixing the weakest link is where the leverage lives.`,
          },
          {
            label: "Attack hiring (65%) because getting people jobs is the mission and it feels closest to impact.",
            correct: false,
            consequence: `**Tempting but suboptimal.** Hiring is emotionally the "real" outcome, but at 65% it isn't your weakest link — completion (60%) is, and it's *upstream*, gating everyone who could ever reach the hiring stage. Improving hiring only helps the shrinking pool who completed. Fix the earlier, weaker link first; then a hiring push acts on a larger cohort. Attack by probability and position, not by emotional proximity to the mission.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'A four-link theory of change has if-then probabilities of 0.9, 0.5, 0.8, and 0.9. Treating the links as a series chain, what is the approximate overall probability the full chain delivers impact? (Give a decimal, e.g. 0.32.)',
          answer: 0.324,
          tolerance: 0.02,
          explain: '0.9 × 0.5 × 0.8 × 0.9 = 0.324. The 0.5 link dominates: raise it to 0.8 and the chain jumps to ~0.52. That is why you triage to the weakest link — it bounds the entire system, exactly like the least-reliable component in a series circuit.',
        },
        {
          kind: 'scenario',
          title: 'Stress-testing a microfinance theory of change',
          intro: "A microfinance non-profit's chain: (1) raise capital → (2) issue small loans to women entrepreneurs → (3) they invest in a business → (4) business income rises → (5) household well-being improves long-term. You're auditing it for the weakest, least-tested link.",
          decisions: [
            {
              situation: "Where is the weakest, most-likely-to-fail assumption in this chain?",
              options: [
                { label: 'Link 1: they will fail to raise the capital.', correct: false, outcome: 'Unlikely to be the binding risk — fundraising is hard but well-understood, and if capital never arrived the program simply would not run. The chain-breaking risk is a behavioral/economic assumption further down, where success is silently assumed.' },
                { label: 'Link 3→4: that loaned money is actually invested productively and raises business income (rather than smoothing consumption or being eaten by low margins).', correct: true, outcome: "Correct. Rigorous evaluations of microcredit found this is exactly where the chain often weakens: loans frequently fund consumption smoothing rather than business growth, and average income effects were far smaller than early advocates assumed. This behavioral/economic link is the untested single point of failure — attack it with evidence before scaling." },
                { label: 'Link 5: household well-being is hard to define, so the whole theory is unfalsifiable.', correct: false, outcome: "Partly fair — impact is genuinely hard to measure — but that's a measurement challenge, not the causal weak link. The chain can still break at the concrete, testable 3→4 arrow regardless of how you define ultimate well-being. Localize the weakest causal assumption first." },
              ],
            },
            {
              situation: "You've identified the 3→4 link as weakest. What is the best next move?",
              options: [
                { label: 'Scale the program 5x now — more loans means more impact.', correct: false, outcome: 'This scales an untested weakest link. If loans mostly fund consumption, 5x the loans just multiplies a near-zero income effect — the non-profit version of scaling broken unit economics. Prove the link before you multiply it.' },
                { label: 'Run a small evaluation (ideally with a comparison group) measuring whether loans actually raise business income, before scaling.', correct: true, outcome: 'Correct. You convert the weakest assumption into a tested hypothesis with a comparison group to isolate the counterfactual. If income genuinely rises, scale with confidence; if not, redesign (e.g. add business training) before committing more capital. Test the single point of failure first.' },
                { label: 'Drop the income link and just report loans issued.', correct: false, outcome: 'That abandons the outcome entirely and retreats to output-counting — the exact mistake from lesson 101.3. "Loans issued" is an output; whether income rose is the outcome you exist to create. Do not hide the weak link by refusing to measure it.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Find my weakest link', kind: 'ask', question: 'Here is my theory of change as if-then links with my rough probability for each. Identify my weakest link, sanity-check my estimates, and suggest the highest-leverage way to strengthen or test that link.' },
        { label: 'Harder: correlated failures', kind: 'harder', concept: 'when several links share a hidden common cause so they are not independent, and how that changes which link to fix first' },
        { label: 'Critique my stress test', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A theory of change modeled as a series chain has link probabilities 0.95, 0.95, 0.40, and 0.95. To most improve overall expected impact, you should:',
          options: [
            'Improve one of the 0.95 links to 0.99.',
            'Improve the 0.40 link — it is the single point of failure bounding the whole chain.',
            'Add more links to make the theory more thorough.',
            "It doesn't matter which link you improve; they all count equally.",
          ],
          answer: 1,
          explain: 'Overall success ≈ the product of link probabilities, so it is dominated by the weakest link. The chain is ~0.34; lifting the 0.40 link to 0.80 roughly doubles it, while polishing a 0.95 link barely moves the product. Triage to the critical path.',
        },
        {
          kind: 'free',
          prompt: "Write your organization's theory of change as a chain of if-then links, assign each a rough probability of holding, and identify your single weakest link. Then state the one experiment or evidence-gathering step you would run to test that link before scaling.",
          rubric: "A strong answer: (1) expresses the theory as explicit if-then links spanning activities → outputs → outcomes → impact; (2) assigns a plausible probability to each link; (3) correctly identifies the lowest-probability link as the one bounding overall success, and ideally recognizes it is often a behavioral/persistence assumption rather than a logistical one; (4) proposes a concrete, falsifiable test (survey, pilot, comparison group) for that weakest link before committing to scale — echoing the 'prove it before you multiply it' discipline.",
        },
      ],
      commitSummary: 'concept only — you leave this module with a written, stress-tested theory of change and its weakest link named and testable.',
    },
  ],
}
