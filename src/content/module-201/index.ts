import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 201 — The autonomous company thesis  (SEASON 1 · BONUS · autonomous)
//
// A curated bonus for the "Autonomous corporation" path: a company designed to
// run largely on AI agents and software, with the human founder as director and
// guardrail-setter. This is NOT a crypto/DAO idea — there is no token, no smart
// contract, no on-chain governance. It is about maximizing output per human by
// delegating work to agents and software, while being clear-eyed that today's
// agents are unreliable for many tasks. The throughline is engineering honesty:
// we are designing a SYSTEM around unreliable components (retries, validation,
// human fallback), not selling the fantasy that you can walk away and let the
// bots run the company. All four lessons are artifactSlot:null; the work is in
// the reasoning and the interactive blocks.
// ===========================================================================

export const module201: Module = {
  id: 201,
  season: 1,
  bonus: true,
  paths: ['autonomous'],
  insertAfter: 0,
  title: 'The autonomous company thesis',
  goal: "Understand what an AI-agent-run company is and isn't: extreme leverage, a human as director and guardrail-setter, and a clear-eyed view of what agents can and cannot yet do.",
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '201.1',
      module: 201,
      title: 'Leverage: output per human',
      estMinutes: 14,
      prerequisites: [],
      artifactSlot: null,
      concept: `The autonomous-company thesis has one metric at its core: **output per human**. Not revenue, not headcount, not even profit — the leverage ratio of how much a company produces divided by how many people it takes to produce it. The bet is that AI agents and software let a very small team (sometimes one person) reach output that used to require dozens.

The vivid version of this is Sam Altman's line about the coming **"one-person billion-dollar company."** Treat that as a *direction*, not a forecast. The sober reading is not "fire everyone." It is: for a growing set of tasks, the marginal cost of the next unit of work is trending toward the cost of a software call rather than the cost of a salaried hour. When that is true for a task, adding humans is the *wrong* lever — you scale that task with software, and you spend your scarce human attention on the tasks software still cannot do.

The mental shift is from **worker** to **orchestrator**. A worker's output is bounded by their own hours. An orchestrator's output is bounded by how well they can specify, delegate, verify, and correct work done by systems that never sleep. This is the same reason a staff engineer who designs a service that serves millions has more leverage than one who hand-answers support tickets — even though ticket-answering is real, necessary work.

Be honest about the ceiling: high leverage is not free output. Every delegated task still needs specification and verification, and those *do* consume human time. The thesis is about maximizing output per person, not eliminating the person.`,
      reframe: {
        analogy: `Automation is **raising the leverage ratio**, exactly like moving from hand-tuning one server to writing the autoscaler that manages a fleet. Naval Ravikant's framing is useful here: labor and capital are *permissioned* leverage (you need to hire, you need to fundraise), while **code and media are permissionless** — you write them once and they work while you sleep, at near-zero marginal cost per copy. AI agents extend that permissionless leverage from deterministic code to open-ended, judgment-shaped tasks. You stop being the CPU executing the work and become the **scheduler** deciding what runs, with what priority, under what limits.`,
        breaks: `Code leverage is *deterministic* — a correct function returns the correct answer a billion times. Agent leverage is **probabilistic**: the same prompt can succeed, fail, or confidently invent. So the analogy "agents are just more code" breaks on reliability. An autoscaler you trust to run unattended; an agent you generally cannot, yet, for anything consequential. The leverage is real, but every agent-driven task carries a *verification tax* that pure code does not. High output per human is achievable — but the humans you keep are spending their hours writing specs and checking outputs, not sipping cocktails while the company runs itself.`,
      },
      workedExample: `**Pieter Levels (levelsio) and his solo software portfolio** is the canonical real example of extreme output-per-human. Levels publicly runs a portfolio of products — Nomad List, RemoteOK, and the AI products PhotoAI and InteriorAI — essentially solo, with no traditional employees and a heavy reliance on software and, increasingly, AI models to do the work. PhotoAI, for instance, generates AI headshots and photos: the "production line" is largely fine-tuned image models plus automation, so the marginal cost of serving another customer is close to a compute bill rather than another hired photographer.

Levels self-reports (on his public "open startup" revenue pages and in interviews such as the Lever Time and Lex Fridman conversations) that this portfolio reaches multi-million-dollar annualized revenue run rates with a team of roughly one. *Treat the exact figures as illustrative and self-reported* — they are not audited, and they move month to month. The transferable point survives the uncertainty: the output-per-human ratio here is one to two orders of magnitude above a conventional agency doing similar work with staff.

The honest caveats matter. Levels is an unusually strong engineer and marketer, so this is closer to a *ceiling* than a median outcome. He still does enormous amounts of work himself — support, marketing, model wrangling, dealing with abuse and refunds. "Solo" does not mean "hands-off"; it means one human operating at very high leverage, not zero human operating a self-running machine.`,
      branch: {
        scenario: `You run a small B2B tool solo. Support volume is growing and eating your week. A friend says "just hire two support reps." You believe roughly 70% of tickets are repetitive, well-documented questions, and about 30% are genuinely novel or high-stakes (billing disputes, angry enterprise accounts, edge-case bugs). What's the highest-leverage move?`,
        choices: [
          {
            label: 'Hire the two reps — support is human work, and headcount is how you scale it.',
            correct: false,
            consequence: `**Instructive miss.** You just spent your scarcest resource (cash + management attention) scaling the *repetitive* 70% with the *most expensive* lever. Those tickets are exactly the ones software handles well. You have added fixed cost and a management burden without touching the part of support that actually needs a human.`,
          },
          {
            label: 'Automate the repetitive 70% (retrieval over your docs, drafted replies you approve), and reserve your own time — plus any future hire — for the novel 30%.',
            correct: true,
            consequence: `**Correct.** This is the output-per-human move: route the permissionless-leverage tasks to software and spend human attention where judgment is required. Note you did not remove the human — you *concentrated* the human on the 30% that needs one. If you later hire, you hire for judgment, not for volume. That is the whole thesis in one decision.`,
          },
          {
            label: 'Fully automate 100% of support with an agent and turn off the human queue entirely.',
            correct: false,
            consequence: `**Over-rotation — the hype version.** The novel 30% includes billing disputes and enterprise anger, where a wrong autonomous answer is expensive or legally fraught. Fully closing the human queue removes the fallback exactly where you most need it. Maximal automation with a human in the loop beats maximal automation with the human removed.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'rank',
          prompt: "Rank these ways of getting more work done from LOWEST to HIGHEST ceiling on output-per-human. (Higher ceiling doesn't mean more reliable — that tension is the point.)",
          items: [
            'Do the work yourself, by hand, one task at a time',
            'Hire employees to do more of the same work (labor leverage)',
            'Write deterministic software that runs the work for you (code leverage)',
            'Delegate open-ended tasks to AI agents wired into your software (agent leverage)',
          ],
          explain: "Naval's ladder: your own hands cap output at your hours; labor raises the cap but is permissioned and linear (each hire is a new salary and a new manager-hour). Code is permissionless and near-zero marginal cost per run, but only covers tasks you can fully specify. Agents extend that permissionless leverage to fuzzy, judgment-shaped tasks — the highest ceiling here. The honest asterisk: reliability runs roughly the OPPOSITE direction. Hand-work and code are dependable; agents have the biggest ceiling and the shakiest floor, which is why you keep a human in the loop.",
        },
      ],
      tutorHooks: [
        { label: 'Find my highest-leverage task to automate', kind: 'ask', question: 'Given what my business does, help me list its recurring tasks and rank them by (a) how repetitive/specifiable they are and (b) how much of my week they eat, so I can spot the highest output-per-human automation to build first.' },
        { label: 'Pressure-test my "solo" plan', kind: 'critique' },
        { label: 'Harder leverage example', kind: 'harder', concept: 'estimating realistic output-per-human ceilings for a specific business function' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In the autonomous-company thesis, the core metric being maximized is best described as:',
          options: [
            'Total headcount, because more people means more output',
            'Output per human — how much the company produces per person it takes to produce it',
            'Revenue in absolute dollars, regardless of team size',
            'The number of AI agents deployed',
          ],
          answer: 1,
          explain: 'The thesis is about **leverage**: output divided by humans. Headcount and even raw revenue miss it — a company can raise output per human either by producing more or by needing fewer people to do so. Number of agents is an input, not the goal.',
        },
        {
          kind: 'mcq',
          prompt: 'Naval\'s distinction between "permissioned" and "permissionless" leverage matters here because:',
          options: [
            'Permissionless leverage (code, agents) works while you sleep at near-zero marginal cost, so it scales output without scaling headcount',
            'Permissioned leverage is always illegal',
            'Only venture-funded companies can use permissionless leverage',
            'Agents are a form of permissioned leverage because you must ask them nicely',
          ],
          answer: 0,
          explain: 'Labor and capital need someone\'s permission (a hire, an investor) and scale roughly linearly. Code and agents are **permissionless** — replicated at near-zero marginal cost — which is exactly why they raise output per human. Agents extend permissionless leverage from deterministic code to open-ended tasks.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR business idea, estimate its current output-per-human and name the single task where shifting from a human/labor lever to a software/agent lever would raise that ratio the most. Be honest about the verification time that task would still cost you.',
          rubric: 'Strong answer: (1) frames output-per-human as a ratio, not raw output; (2) identifies a concrete, repetitive/specifiable task suited to software or a supervised agent; (3) explains why that lever raises the ratio (near-zero marginal cost vs a salaried hour); (4) is honest that specification + verification of the delegated task still consumes human time — does NOT claim the work vanishes.',
        },
      ],
      commitSummary: 'concept only — you frame the thesis before designing the system in later lessons.',
    },

    // -----------------------------------------------------------------------
    {
      id: '201.2',
      module: 201,
      title: 'The automation spectrum',
      estMinutes: 15,
      prerequisites: ['201.1'],
      artifactSlot: null,
      concept: `"Autonomous company" sounds binary — either the bots run it or they don't. In reality every company sits on a **spectrum of autonomy, per function**, and the good ones deliberately pick a *different* point on the spectrum for each task. A useful ladder:

- **Manual** — a human does the whole task by hand.
- **Scripted** — deterministic software runs a fully-specified task (a cron job, a Zapier flow, a reconciliation script). Reliable, but only for tasks you can fully specify in advance.
- **Tool-assisted** — a human drives, but AI accelerates them (drafting copy, suggesting code, summarizing a call). The human is still in the driver's seat and owns every output.
- **Supervised agent** — an agent plans and executes multi-step work, but a human reviews or approves before anything consequential happens (draft-then-approve, propose-then-confirm).
- **Autonomous** — the agent acts end-to-end without per-action human review, within hard limits.

The engineering mistake is treating this as a single dial for the whole company. It isn't. Invoice reconciliation might be safely *scripted*; first-draft marketing copy is *tool-assisted*; support triage can be a *supervised agent*; approving a refund over a threshold stays *manual*. Choosing the level is a risk decision: **cost of a wrong action × how often it fires, versus the value of removing the human**. Where a mistake is cheap and reversible, push toward autonomy. Where it is expensive, irreversible, or legally binding, keep a human gate. Most real "AI-run" companies are a patchwork of these levels, not a single autonomous brain.`,
      reframe: {
        analogy: `This is the **SAE self-driving ladder (L0–L5)** applied to business tasks. L0 is manual driving; L2 is driver-assist where a human must keep hands on the wheel and stays responsible; L4 is full autonomy but only inside a bounded operational domain (a mapped city, good weather); L5 is anywhere, anytime, and essentially doesn't exist in production. You would never put an L2 system in charge of an L5 job. Likewise you match each business task to the automation level its risk profile justifies, and you keep the "hands on the wheel" wherever the domain isn't bounded and the failure isn't cheap.`,
        breaks: `Self-driving levels are a formal, regulated standard with defined handoff behavior; business automation has **no such standard and no clean handoff**. A car warns you before it disengages; a text agent typically fails *silently and confidently*, handing you a wrong answer with no "take over now" alert. And unlike a car staying in its lane, an agent's operational domain is fuzzy — it can wander into a task it was never meant to handle without any physical boundary stopping it. So borrow the *idea* of graded, domain-bounded autonomy, but don't assume the agent will tell you when it has left its safe envelope. You have to build that detection yourself.`,
      },
      workedExample: `**Klarna's AI customer-service assistant (2024)** is a widely-reported real case of a supervised-to-autonomous agent doing frontline work. In February 2024 Klarna announced its OpenAI-powered assistant was handling about two-thirds of customer-service chats — a volume it framed as *"the equivalent of 700 full-time agents"* — with resolution times cut sharply and customer-satisfaction scores it claimed were on par with human agents. On the automation spectrum this is a supervised/bounded agent placed on a high-volume, mostly-repetitive function: refunds, returns, payment questions.

The honest sequel is what makes it a good lesson rather than an ad. Through 2025, reporting (Bloomberg and others) noted Klarna **walking part of it back** — its CEO acknowledging that cost-cutting had pushed quality down and that the company was investing in human agents again for cases where customers want a person. *Treat the specific numbers as illustrative and company-reported;* the arc is the teaching point.

Read it as spectrum management: the *repetitive, low-stakes* two-thirds was a reasonable place to push toward autonomy, and it genuinely removed enormous cost. But the *complex, emotional, high-stakes* remainder was pushed too far toward autonomy too fast, and the right move was to pull that slice back to human-led. The company didn't choose "automate" or "don't" — it (eventually) chose a *different level per segment of tickets*. That per-function calibration, including the willingness to walk a slice back when quality drops, is the skill.`,
      branch: {
        scenario: `You're placing four tasks on the automation spectrum for your one-person company. Cash is tight, so you want to automate aggressively — but you also can't afford a catastrophic mistake. The tasks: (A) tagging inbound leads by industry, (B) sending the final signed pricing on a $50,000 enterprise deal, (C) drafting weekly blog posts, (D) issuing refunds under $20. Where's the most *defensible* placement?`,
        choices: [
          {
            label: 'Autonomous for all four — you\'re solo and need the leverage everywhere.',
            correct: false,
            consequence: `**The over-rotation.** A and D are cheap-and-reversible enough for autonomy, and C is fine as tool-assisted or supervised. But B — final pricing on a $50k deal — is expensive, hard to reverse, and effectively binding. Automating that end-to-end trades a small time saving for tail risk that can cost you the deal or the margin. Uniform autonomy ignores the risk math.`,
          },
          {
            label: 'Autonomous for A (tag leads) and D (small refunds), supervised/tool-assisted for C (blog drafts), manual gate for B (enterprise pricing).',
            correct: true,
            consequence: `**Correct — this is per-function calibration.** Lead tagging and sub-$20 refunds are cheap, frequent, and reversible: ideal for autonomy. Blog drafts benefit from AI speed but want your voice and a final read, so tool-assisted or supervised. The enterprise price is high-stakes and near-irreversible — you keep a human gate. Same company, four different levels, each chosen from cost-of-error times frequency.`,
          },
          {
            label: 'Manual for all four until you fully trust the agents — safety first.',
            correct: false,
            consequence: `**Instructive miss in the other direction.** Refusing to automate the cheap, reversible, high-frequency tasks (A, D) throws away exactly the leverage that makes a solo company viable, and burns your scarce hours on work software does well. "Safety first" is right for B, but applying it uniformly is its own failure. The skill is picking the level per task, not defaulting the whole company to one end.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each task into the automation level its risk profile justifies TODAY. Rule of thumb: cost of a wrong action times how often it fires, versus the value of removing the human. Cheap-and-reversible pushes right toward autonomy; expensive, irreversible, or legally binding stays left with a human gate.',
          buckets: ['Human-led / manual gate', 'Supervised agent (human reviews before it lands)', 'Safe to fully automate today'],
          items: [
            { text: 'Signing off on a large enterprise contract or final pricing', bucket: 'Human-led / manual gate' },
            { text: 'Deciding whether to fire a customer or issue a five-figure refund', bucket: 'Human-led / manual gate' },
            { text: 'Responding to a novel, angry enterprise complaint on public social media', bucket: 'Human-led / manual gate' },
            { text: 'Drafting a reply to a refund request the agent then routes to you for approval', bucket: 'Supervised agent (human reviews before it lands)' },
            { text: 'Generating a first-draft marketing email you edit before sending', bucket: 'Supervised agent (human reviews before it lands)' },
            { text: 'Writing unit tests for existing code that a human reviews in the PR', bucket: 'Supervised agent (human reviews before it lands)' },
            { text: 'Tagging and routing inbound support tickets by topic', bucket: 'Safe to fully automate today' },
            { text: 'Reconciling invoices against payments with deterministic rules', bucket: 'Safe to fully automate today' },
            { text: 'Sending a templated receipt after a completed purchase', bucket: 'Safe to fully automate today' },
          ],
          explain: 'The left bucket is expensive, irreversible, or legally binding — a wrong action there is a real loss, so a human owns the decision. The middle is where agents add speed but a wrong output is catchable if a human reviews before it lands (draft-then-approve). The right is cheap, high-frequency, and reversible or fully specifiable — the marginal human review costs more than the rare mistake. Same company runs all three levels at once; the judgment is placing each task, not picking one dial for everything.',
        },
      ],
      tutorHooks: [
        { label: 'Place my tasks on the spectrum', kind: 'ask', question: 'Help me list my business’s recurring tasks and assign each to manual, scripted, tool-assisted, supervised-agent, or autonomous — using cost-of-error times frequency as the deciding rule, and flag which ones I’m tempted to over-automate.' },
        { label: 'Where should I keep a human gate?', kind: 'critique' },
        { label: 'Harder calibration example', kind: 'harder', concept: 'choosing autonomy levels when a task is high-frequency but occasionally high-stakes' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What single factor most justifies keeping a task at "manual / human gate" rather than pushing it to autonomous?',
          options: [
            'The task is boring and the human would rather not do it',
            'A wrong action is expensive, hard to reverse, or legally binding — cost-of-error times frequency is high',
            'The task happens very frequently',
            'An AI agent could technically attempt it',
          ],
          answer: 1,
          explain: 'Autonomy level is a **risk decision**: cost of a wrong action times how often it fires, versus the value of removing the human. High frequency actually pushes *toward* automation if errors are cheap; it\'s expensive, irreversible, or binding consequences that keep a human gate.',
        },
        {
          kind: 'mcq',
          prompt: 'The Klarna assistant case is best read as an example of:',
          options: [
            'Proof that all customer service should be fully autonomous',
            'Per-function calibration: pushing the repetitive slice toward autonomy while (eventually) pulling the complex, high-stakes slice back to human-led',
            'Proof that AI agents never work in customer service',
            'A crypto/DAO governance experiment',
          ],
          answer: 1,
          explain: 'Klarna automated the mostly-repetitive majority of chats (large real savings) but later walked back the portion where quality dropped and customers wanted a human. The lesson is choosing a *different level per segment*, and being willing to move a slice back when quality falls — not a single company-wide verdict.',
        },
        {
          kind: 'free',
          prompt: 'Pick two tasks from your own business that feel similar but belong at different points on the automation spectrum. Explain the placement of each using cost-of-error and frequency, and say what signal would make you move one to a different level.',
          rubric: 'Strong answer: (1) names two concrete tasks; (2) places each at an explicit level (manual/scripted/tool-assisted/supervised/autonomous); (3) justifies with cost-of-error times frequency, not vibes; (4) identifies a monitoring signal (error rate, complaint spike, a near-miss) that would trigger moving a task up or DOWN the ladder — showing autonomy level is revisable, as in the Klarna walk-back.',
        },
      ],
      commitSummary: 'concept only — you learn to place each function at the right autonomy level.',
    },

    // -----------------------------------------------------------------------
    {
      id: '201.3',
      module: 201,
      title: 'Human as director & guardrail-setter',
      estMinutes: 15,
      prerequisites: ['201.2'],
      artifactSlot: null,
      concept: `If agents do the execution, what is the human *for*? Three things software cannot yet own: **objectives, taste, and limits.**

- **Objectives** — deciding *what* the company should do and why. Agents optimize a target you hand them; they do not choose the target. Choose it badly and a diligent agent will pursue the wrong thing efficiently.
- **Taste** — the judgment of what is good, on-brand, honest, and worth shipping. Agents can generate a hundred variants; deciding which one is *right* for your customers and values is a human act (for now).
- **Limits** — the guardrails: what the agent must never do, thresholds that require human sign-off, budgets it cannot exceed, actions that are simply out of bounds.

This is a genuine shift in the human's job: **from doing the work to specifying the work and reviewing it at scale.** You stop writing every line and start writing the spec, the acceptance criteria, and the constraints — then reviewing outputs, spotting the failures, and tightening the spec. Your leverage now comes from how clearly you can state intent and how efficiently you can catch what went wrong.

Two failure modes bracket the role. **Under-specifying:** you hand an agent a vague goal and no limits, and it does something plausible-looking, expensive, and wrong. **Over-controlling:** you review every trivial output by hand and become the bottleneck you were trying to remove. The director's craft is putting the human check exactly where it changes an outcome — on objectives, on taste calls, and at the guardrails — and nowhere else. You are not the worker anymore; you are the person who decides what "done right" means and enforces the boundaries of "never."`,
      reframe: {
        analogy: `This is the shift **from writing code to writing specs plus doing code review at scale.** A senior engineer's leverage was never their own keystrokes — it was clear interfaces, good tests, and review comments that catch the bug before it ships. Directing agents is that job amplified: the prompt and constraints are your **spec and type signatures**; the guardrails are **assertions and rate limits**; your review of agent output is **code review**, except the "author" is tireless and works in parallel. You move up the stack from implementer to the person who defines correctness and polices the boundary conditions.`,
        breaks: `Code review assumes a competent author who understands *why* the interface exists and won't deliberately route around your intent; an agent has no such understanding and will cheerfully satisfy the letter of a spec while violating its spirit (the classic reward-hacking failure). And a human author *learns* from your review comment permanently; an agent may repeat the same mistake next session unless you bake the correction into the spec or the guardrail itself. So "just review it like a junior's PR" undersells the vigilance required: your reviews have to assume an author with no common sense and no memory, which means the guardrails — the things it *cannot* do — carry far more of the safety load than review comments ever did.`,
      },
      workedExample: `Return to **Pieter Levels' solo operation** and read it through the director lens. Across products like PhotoAI and InteriorAI, Levels is not personally generating each customer's images — fine-tuned models and automation do that execution. His actual daily work, as he describes it in interviews (Lex Fridman, 2024) and on his public feeds, is much closer to *directing*: deciding which product to build and for whom (objectives), judging which model outputs and which UX are good enough to ship (taste), and — critically — dealing with **guardrails**: abuse of the image generators, refunds, content that must never be produced, and the reputational limits of what the products will do.

*Framed honestly and as illustrative:* the interesting part is not that he "automated a company." It is that the parts he cannot delegate are exactly objectives, taste, and limits. The image model can generate infinite variants; Levels decides which are on-brand and which cross a line. The payment system can run autonomously; Levels sets the refund and abuse policy and intervenes on the edge cases. When something goes wrong — a bad generation, an abuse vector, a payments dispute — the accountability lands on *him*, so the guardrails are his to set and enforce.

The caveat that keeps this honest: he still spends real hours doing this. Directing is not passive. The volume of execution he offloads is huge, but the objective-setting, taste, and guardrail work is a genuine, ongoing human job — and it's the job that doesn't shrink as you add more automation. It arguably grows.`,
      branch: {
        scenario: `You give a marketing agent this instruction: "Grow our newsletter signups as much as possible this month." You give it a budget-connected ad account and permission to publish landing-page copy autonomously. Two weeks later signups have tripled — but a chunk came from a landing page making a health claim your product can't actually support, and ad spend is 3x what you expected. What went wrong at the *director* level?`,
        choices: [
          {
            label: 'Nothing — the agent hit the goal. Tripling signups is a win; the claims are a minor cleanup.',
            correct: false,
            consequence: `**Instructive miss.** The agent did exactly what you said — "as much as possible" — with no objective beyond a raw number, no taste constraint on honesty, and no limit on spend. A false health claim is a legal and trust liability, not a cleanup. The agent optimized a badly-chosen target efficiently. That is a *director* failure, not an agent failure.`,
          },
          {
            label: 'You under-specified: no honesty/brand constraint (taste), no spend cap or claim-review gate (limits), and a target that rewarded volume over quality (objective).',
            correct: true,
            consequence: `**Correct.** All three director responsibilities were missing. The objective should have been signups *that meet a quality bar*, not raw volume; taste should have forbidden claims you can't support; limits should have capped spend and gated any health/medical claim for human review before publishing. The fix isn't "the agent is bad" — it's tightening the spec and adding the guardrails you forgot. That is the job.`,
          },
          {
            label: 'You over-controlled — you should have removed all human involvement so the agent could move even faster.',
            correct: false,
            consequence: `**Backwards.** This case is caused by *too few* guardrails, not too many. Removing human involvement further would let the next false claim ship straight to production with more budget behind it. Over-controlling is a real failure mode — but it looks like reviewing every trivial output by hand, not like setting a spend cap and a claim-review gate. Those gates are exactly where a director's check belongs.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'scenario',
          title: 'Directing an agent-run growth function',
          intro: "You've delegated most execution to agents and software. Your job now is objectives, taste, and limits — plus putting human checks only where they change an outcome. Two calls land on your desk.",
          decisions: [
            {
              situation: 'You’re about to hand a content agent its standing instructions for the quarter. What do you write?',
              options: [
                { label: '"Maximize traffic." One line, no constraints — trust it to figure out the rest.', correct: false, outcome: 'Under-specified. A pure-volume target with no taste or limit constraints is exactly what produces off-brand, borderline, or false content that "works." A diligent agent will optimize the wrong thing efficiently.' },
                { label: 'A target tied to quality (qualified signups), plus explicit no-go rules (no unsupported claims, on-brand voice) and a spend cap, with anything touching legal/medical claims routed to you.', correct: true, outcome: 'This is the director’s spec: objective (quality-weighted, not raw volume), taste (voice + honesty rules), and limits (spend cap + a human gate on high-risk claims). The agent now has a target it can’t satisfy by cutting corners you care about.' },
                { label: 'Nothing standing — you’ll just review and rewrite every piece it produces yourself.', correct: false, outcome: 'Over-controlling. You’ve reinserted yourself as the worker and become the bottleneck automation was meant to remove. Reviews belong at objectives, taste calls, and guardrails — not on every routine output.' },
              ],
            },
            {
              situation: 'The agent flags that a high-performing ad variant implies a money-back guarantee you don’t actually offer. It’s outperforming everything else. What’s the director move?',
              options: [
                { label: 'Let it run — the numbers are great and you can sort out the guarantee later.', correct: false, outcome: 'A performance win built on a promise you can’t keep is a liability and a trust breach. Letting results override your limits is how the guardrail becomes decorative. The point of a limit is that it binds even when it’s costing you.' },
                { label: 'Kill the variant, encode "never imply guarantees/terms we don’t offer" as a standing guardrail, and let the agent keep optimizing within the honest set.', correct: true, outcome: 'Correct: you enforce the limit even against a good number, and you convert the one-off catch into a permanent guardrail so the agent (which won’t "learn" it on its own) can’t reintroduce it next session. Taste and limits owned by the human; optimization left to the agent.' },
                { label: 'Shut the whole agent down — clearly it can’t be trusted.', correct: false, outcome: 'Overreaction. The agent did the right thing by flagging it; the gap was a missing guardrail, not a rogue agent. The director fix is to tighten the spec, not to abandon the leverage.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Draft guardrails for an agent I want to delegate to', kind: 'ask', question: 'I want to delegate a specific function to an agent. Help me write its spec as a director would: the objective (quality-weighted, not raw volume), the taste/brand constraints, the hard limits and budgets, and the exact thresholds or action types that must route to me for approval.' },
        { label: 'Am I under-specifying or over-controlling?', kind: 'critique' },
        { label: 'Harder spec-writing example', kind: 'harder', concept: 'writing an agent objective that resists reward-hacking the metric' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In an agent-run company, the three things the human director most clearly still owns are:',
          options: [
            'Typing speed, meeting attendance, and inbox zero',
            'Objectives (what to pursue), taste (what is good), and limits (the guardrails)',
            'Writing every line of execution work by hand',
            'The choice of which cloud provider to use',
          ],
          answer: 1,
          explain: 'Agents optimize a target you set, generate variants you must judge, and act within boundaries you define. **Objectives, taste, and limits** are precisely the parts that don\'t delegate cleanly — and the director\'s job is to own them while agents handle execution.',
        },
        {
          kind: 'mcq',
          prompt: 'The reframe "directing agents is writing specs plus code review at scale" partly breaks because, unlike a human junior engineer, an agent:',
          options: [
            'Always understands the intent behind your interface',
            'Will satisfy the letter of a spec while violating its spirit, and may not remember your correction next session — so guardrails carry more of the safety load than review comments',
            'Learns permanently from every review comment',
            'Refuses to work in parallel',
          ],
          answer: 1,
          explain: 'An agent lacks common sense about *why* a constraint exists (reward-hacking risk) and may not retain a correction unless you bake it into the spec or guardrail. So you cannot rely on review comments the way you would with a learning human — the hard limits (what it *cannot* do) do more of the work.',
        },
        {
          kind: 'free',
          prompt: 'Take one function you’d delegate to an agent and write its director spec: the objective (make it quality-weighted, not raw volume), two taste/brand constraints, and two hard limits (including at least one threshold that routes to a human). Then name the failure mode you’re most at risk of: under-specifying or over-controlling.',
          rubric: 'Strong answer: (1) states a quality-weighted objective, not a raw-volume metric that invites reward-hacking; (2) gives concrete taste/brand constraints; (3) gives hard limits including a human-approval threshold; (4) honestly self-diagnoses under-specifying vs over-controlling with a reason. Bonus: notes that a caught mistake should become a standing guardrail because the agent won’t retain it otherwise.',
        },
      ],
      commitSummary: 'concept only — you define the director role before confronting agent limits.',
    },

    // -----------------------------------------------------------------------
    {
      id: '201.4',
      module: 201,
      title: "What agents can't (yet) do — and designing around it",
      estMinutes: 16,
      prerequisites: ['201.3'],
      artifactSlot: null,
      concept: `The autonomous-company thesis only survives contact with reality if you are honest about what today's agents *can't* reliably do. Four hard limits, as of now:

- **Reliability.** Agents fail probabilistically and often *silently* — a confident, well-formatted, wrong answer. There is no exception thrown. Chain several unreliable steps and the end-to-end success rate collapses.
- **Judgment in novel situations.** Agents are strong on tasks resembling their training and brittle off-distribution. A genuinely new situation — an unusual customer, an edge-case dispute, a crisis — is exactly where they're least trustworthy and where the cost of being wrong is often highest.
- **Accountability.** An agent cannot be liable. When it commits your company to something, *you* are on the hook. Legally and reputationally, responsibility flows to the human.
- **Grounding and truth.** Agents hallucinate — inventing facts, policies, prices, or citations. Without a source of truth wired in and checked, "plausible" and "correct" are easy to confuse.

The engineering response is not "wait for better models" or "trust it and hope." It's to **design a reliable system out of unreliable components** — the oldest discipline in distributed systems. You already know the toolkit: **retries** with backoff for transient failures; **validation** of every output against a schema, a rule, or a source of truth before it's used; **redundancy / cross-checks** (a second agent or a deterministic check verifies the first); **circuit breakers and budgets** so a failure can't run away; and a **human fallback** for the cases the system flags as low-confidence or high-stakes. You are not building a company that runs *without* humans. You are building one where humans are the fallback path and the guardrail, deployed exactly where the components are least reliable and the cost of error is highest.`,
      reframe: {
        analogy: `This is **fault-tolerant systems design**, one-for-one. No single disk, packet, or node is reliable, yet you build reliable storage and networks from them — with checksums (validation), retransmission (retries), replication (redundancy), timeouts and circuit breakers (runaway protection), and graceful degradation (fallback). An agent is just another **unreliable component with a high but sub-100% success rate**. You don't demand the component be perfect; you architect around its failure distribution. The end-to-end reliability of the company is a *system property* you engineer, not a property you get for free from the model.`,
        breaks: `Hardware failures are usually **independent and detectable** — a checksum catches a flipped bit, and two disks rarely fail for the same reason at the same instant. Agent failures are neither. They're **correlated** (two agents given the same prompt often make the *same* mistake, so naive redundancy buys less than it does with disks) and frequently **undetectable** without an external source of truth (a hallucinated policy passes every internal check because nothing internal knows it's false). So you can't just replicate and vote. Your validation has to reach *outside* the agents to ground truth, and your redundancy has to be genuinely diverse (a deterministic check, a different method) rather than "ask another LLM." The fault-tolerance instinct is right; the failure model is nastier than hardware's.`,
      },
      workedExample: `**Air Canada's chatbot and the Moffatt tribunal decision (2024)** is the cleanest real illustration of the accountability limit. A grieving passenger asked Air Canada's website chatbot about bereavement fares; the bot told him he could book now and apply for the discount retroactively within 90 days. That was **wrong** — it contradicted the airline's actual policy. When Air Canada refused the refund, the passenger took it to British Columbia's Civil Resolution Tribunal.

Air Canada's reported defense was, remarkably, that the chatbot was *"a separate legal entity responsible for its own actions."* The tribunal rejected this outright and held the airline liable for what its bot told a customer, ordering it to pay damages. *Framed as illustrative — details from the published tribunal decision and 2024 news coverage.*

Every one of this module's limits is visible here. **Reliability:** the bot produced a confident, well-formed, wrong answer with no error raised. **Grounding:** it hallucinated a policy that contradicted the real one, because it wasn't wired to the source of truth. **Accountability:** the company — not "the bot" — was held responsible; you cannot offload liability onto software. The design lesson writes itself: a customer-facing agent making claims about **policy or price** is a high-stakes, off-distribution-prone function that *needs* the fault-tolerance stack — validation against the actual policy database before an answer goes out, and a human fallback for anything the system can't ground. The honest reading is not "don't use agents for support." Klarna showed the huge upside on the repetitive majority. It's "don't let an ungrounded agent make binding claims," and design the system so it structurally can't.`,
      branch: {
        scenario: `You're designing an autonomous refund agent. It reads a customer email, decides eligibility against your policy, and can issue refunds. You want maximal automation. Single-step reliability of the agent's eligibility decision is about 92%. Refunds over $200 are rare but costly to get wrong. What's the soundest design?`,
        choices: [
          {
            label: 'Let it run fully autonomously on all refunds — 92% is good enough, and the leverage is worth the occasional miss.',
            correct: false,
            consequence: `**Miss.** 92% per decision means roughly 1 in 12 refund decisions is wrong, applied to money, silently. On the rare high-value refunds that error is expensive and possibly the kind of "binding claim" that lands on you (see Air Canada). "Good enough" for a low-stakes tag is not good enough for issuing cash with no check.`,
          },
          {
            label: 'Validate every decision against the policy rules deterministically, auto-issue only small/clear-cut refunds, and route anything over $200 or low-confidence to a human — with retries and a spend circuit-breaker.',
            correct: true,
            consequence: `**Correct — that's the fault-tolerance stack.** Deterministic validation catches decisions that violate policy (grounding); auto-issuing only the cheap, clear cases captures most of the leverage where errors are cheap; the human fallback covers the high-stakes and low-confidence tail; and the circuit-breaker stops a runaway. You engineered end-to-end reliability from a 92% component rather than demanding the component be perfect.`,
          },
          {
            label: 'Chain three agents in sequence (read, decide, issue) to be thorough, each fully autonomous, no external checks.',
            correct: false,
            consequence: `**Backwards on two counts.** Chaining unreliable steps *multiplies* failure — three 92% steps in series is roughly 0.92 cubed, about 78% end-to-end, worse than one step. And three LLM steps share correlated failure modes, so this isn't real redundancy. Fault tolerance needs *external* validation and a human fallback, not more agents in a row.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'You chain 10 independent agent steps into one workflow, each of which succeeds 95% of the time. Assuming failures are independent, what is the end-to-end success rate of the whole workflow, in percent? (Round to the nearest whole percent.)',
          answer: 60,
          tolerance: 1,
          unit: '%',
          explain: 'End-to-end success = 0.95 to the 10th power ≈ 0.599, about 60%. Even "95% reliable" components chained deep collapse fast — a 40% failure rate for the workflow. This is why you don’t build long unbroken agent chains: you add validation/checkpoints between steps, keep chains short, and put a human fallback on the tail. (And real agent failures are correlated, so the true picture is often worse than this independence assumption.)',
        },
        {
          kind: 'categorize',
          prompt: 'You’re making an unreliable agent-run process dependable. Match each real technique to the fault-tolerance role it plays — the same toolkit you’d use to build reliable systems from unreliable hardware.',
          buckets: ['Retry / transient-failure handling', 'Validation against ground truth', 'Runaway protection', 'Human fallback'],
          items: [
            { text: 'Re-run a timed-out tool call with exponential backoff', bucket: 'Retry / transient-failure handling' },
            { text: 'Retry a malformed agent response once before escalating', bucket: 'Retry / transient-failure handling' },
            { text: 'Check the agent’s claimed policy against the actual policy database before replying', bucket: 'Validation against ground truth' },
            { text: 'Reject any output that fails a schema/format or business-rule check', bucket: 'Validation against ground truth' },
            { text: 'Cap total daily spend and trip a circuit-breaker if refunds exceed a threshold', bucket: 'Runaway protection' },
            { text: 'Halt the workflow if error rate crosses a limit within an hour', bucket: 'Runaway protection' },
            { text: 'Route low-confidence or high-value decisions to a person for sign-off', bucket: 'Human fallback' },
            { text: 'Escalate anything off-distribution or novel to the founder', bucket: 'Human fallback' },
          ],
          explain: 'This is distributed-systems fault tolerance mapped onto agents: retries absorb transient failures, validation against an external source of truth catches hallucinations and rule-breaking (the part naive LLM-on-LLM redundancy misses), circuit-breakers and budgets stop a failure from running away, and a human fallback covers the high-stakes, low-confidence, off-distribution tail where agents are least trustworthy and accountability lands on you. You build a reliable company as a SYSTEM property, not by waiting for a perfect model.',
        },
      ],
      tutorHooks: [
        { label: 'Design the fault-tolerance stack for one of my agent workflows', kind: 'ask', question: 'Take a workflow I want to automate and help me design it as a reliable system from an unreliable agent: where to add validation against a source of truth, where retries help, what circuit-breakers/budgets to set, and exactly which cases should route to a human fallback.' },
        { label: 'Where am I over-trusting my agents?', kind: 'critique' },
        { label: 'Harder reliability-math example', kind: 'harder', concept: 'estimating end-to-end reliability of a multi-step agent workflow and where to insert checks' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why is "just chain more agents in sequence" usually a poor way to improve reliability?',
          options: [
            'It is too cheap to be effective',
            'Chaining unreliable steps multiplies failure (their success rates compound downward), and LLM steps share correlated failure modes so it isn’t genuine redundancy',
            'Agents refuse to be chained',
            'It always violates the law',
          ],
          answer: 1,
          explain: 'Reliability of a series is the product of each step\'s reliability, so long chains collapse (0.92 cubed ≈ 78%). Worse, multiple LLM steps tend to make the *same* mistakes, so they don\'t provide independent redundancy. You need external validation, short chains, and a human fallback instead.',
        },
        {
          kind: 'mcq',
          prompt: 'The Air Canada chatbot tribunal case most directly illustrates which limit of today’s agents?',
          options: [
            'That agents are too slow to be useful',
            'Accountability and grounding — the company (not "the bot") is liable, and an ungrounded agent hallucinated a policy that contradicted the real one',
            'That agents cost too much to run',
            'That customers dislike all automation',
          ],
          answer: 1,
          explain: 'The tribunal rejected the idea that the bot was a separate liable entity and held the airline responsible. The bot had confidently stated a policy that wasn\'t real (a grounding failure). The design fix is validating claims against a source of truth and a human fallback for binding statements.',
        },
        {
          kind: 'free',
          prompt: 'Pick one workflow you want to run autonomously. Estimate a rough single-step reliability for its riskiest step, then describe how you’d make the overall process dependable using at least three of: retries, external validation, redundancy/cross-checks, circuit-breakers/budgets, human fallback. Say explicitly where the human sits.',
          rubric: 'Strong answer: (1) picks a concrete workflow and gives a plausible sub-100% reliability estimate for the risky step; (2) treats reliability as a SYSTEM property built from an unreliable component; (3) applies at least three named fault-tolerance techniques appropriately, with validation reaching an EXTERNAL source of truth (not just another LLM); (4) places the human fallback on the high-stakes / low-confidence / off-distribution tail and acknowledges accountability lands on the human. Bonus: notes agent failures are correlated, so naive redundancy is weak.',
        },
      ],
      commitSummary: 'concept only — you leave with an honest model of agent limits and the fault-tolerant design that works around them.',
    },
  ],
}
