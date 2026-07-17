import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 207 — Legal, accountability & the human-in-the-loop
//   (BONUS · Season 1 · autonomous-corporation path)
//
// Slots in after lesson 11 for learners running an AI-agent-operated company.
// Mirrors the rigor of Module 5 / Module 101: an ownership reframe (you own
// your production system's behavior), a "someone owns the pager" reframe for
// entity + accountable human, a dependency-failure reframe for agent-action
// liability, and an audit-trail / change-control reframe for designing
// accountability in. Real cases are named and lightly cited; every figure is
// labelled illustrative, and EVERY lesson carries the not-legal-advice banner —
// this is a genuinely unsettled, fast-moving area of law.
// ===========================================================================

export const module207: Module = {
  id: 207,
  season: 1,
  bonus: true,
  paths: ['autonomous'],
  insertAfter: 11,
  title: 'Legal, accountability & the human-in-the-loop',
  goal: "An 'autonomous' company is still legally owned and operated by people. Understand who is accountable when agents act, and why a human owner/entity remains essential. (Educational, not legal advice.)",
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '207.1',
      module: 207,
      title: "There is no 'the AI did it' defense",
      estMinutes: 14,
      prerequisites: [],
      artifactSlot: null,
      concept: `**Educational, not legal advice; this is an emerging, unsettled area; consult a professional.**

There is a comforting fiction in autonomous systems: that if the software chose the action, the software is to blame. Legally, this is false. Your AI agents are **tools**, not **legal persons**. A tool cannot hold rights, sign a binding contract in its own name, be sued, own property, or serve a sentence. When your agent acts, the law generally looks *through* the tool to the person or entity that deployed it — you, your co-founders, your company. "The AI did it" is not a recognized defense; it is closer to "my compiler emitted the bug," which no user has ever accepted as a reason their problem is not your problem.

Three consequences follow:

- **Attribution flows to the deployer.** An action your system takes is, in law, generally treated as an action *you* took through an instrument you built and control.
- **Autonomy is not personhood.** However independently the agent operates, it does not acquire legal standing simply by acting on its own.
- **Intent is often not required.** Many liabilities (breach of contract, consumer-protection violations, data breaches) attach on the basis of *effect*, not on whether a human specifically intended it.

Whether some future legal regime grants agents a limited personhood is genuinely unsettled and debated — but you cannot build on a regime that does not yet exist. Build for the world as it is: every agent action is legally yours.`,
      reframe: {
        analogy: `You already live by this rule in engineering: **you own your production system's behavior.** When your service corrupts a customer's data at 3am, "the code had a bug" is an *explanation*, never an *excuse* — the customer's data is still gone and it is still your incident. Nobody accepts "the deployment pipeline did it" as absolution, because you built the pipeline, you shipped the code, and you chose to point it at production. An AI agent acting for your company is the same relationship one layer up: it is your software running in production against real people, and its outputs are your outputs. A bug is not a defense to your users, and "the model decided" is not a defense to a court.`,
        breaks: `A production bug is mostly a *reputational and contractual* problem you control the blast radius of; legal attribution can be **broader and less forgiving**. Regulators, not just customers, can act; some liabilities are **strict** (no fault or intent needed); and the exposure can reach *past* the company to individuals in ways a normal outage never does. The analogy also understates the flux: courts and legislatures are actively working out how agency, foreseeability, and "who is the author of this action" apply to autonomous systems, and the answers differ by jurisdiction and are moving. Treat "you own it" as the safe floor, not the settled ceiling.`,
      },
      workedExample: `**Moffatt v. Air Canada** (British Columbia Civil Resolution Tribunal, decided 2024; details as widely reported) is the cleanest real example of the "the AI did it" defense being tried — and rejected.

A grieving passenger asked Air Canada's website chatbot about bereavement fares. The chatbot told him he could book now and apply for a bereavement discount **retroactively** within 90 days. That policy did not exist; the airline's actual policy did not allow retroactive claims. When the passenger sought the promised refund, Air Canada refused.

In the dispute, the airline reportedly argued — remarkably — that the chatbot was **"a separate legal entity that is responsible for its own actions."** The tribunal rejected this outright: the chatbot was part of Air Canada's website, the company was responsible for **all** the information on it whether from a static page or a chatbot, and it made no sense that the airline would not be answerable for a tool it deployed. Air Canada was ordered to pay the passenger (a modest sum, reported around a few hundred Canadian dollars plus fees).

The dollar amount is trivial; the principle is not. A company argued in a real proceeding that its bot was its own legal person, and lost. This is a single small-claims-style decision, not a supreme-court doctrine, so do not over-read it — but it is exactly the fiction this lesson warns you never to build on.`,
      branch: {
        scenario: `You run an autonomous e-commerce company. Overnight, your support agent — with no human in the loop — promised a customer a "lifetime free replacement" warranty that your company does not actually offer, in writing, in a chat transcript the customer saved. The customer now demands it. Your co-founder says, "That's an AI hallucination, not a real promise — we just tell them the bot was wrong." What is the sound position?`,
        choices: [
          {
            label: 'Agree — it was the AI, not a human, so no real commitment was made and you can disclaim it.',
            correct: false,
            consequence: `**Instructive miss.** The customer dealt with *your* company through a channel you deployed and control; a reasonable customer had no way to know the bot exceeded your policy. "Our tool malfunctioned" is your problem to absorb, not the customer's — this is precisely the Air Canada posture that failed. Disclaiming it invites exactly the consumer-protection and misrepresentation exposure you are trying to avoid, and it does it in writing.`,
          },
          {
            label: 'Treat the promise as potentially binding on the company, honor or negotiate it, and fix the agent so it cannot exceed policy again.',
            correct: true,
            consequence: `**Correct.** You own your system's behavior, so you start from the assumption the commitment may bind you and manage it like the real liability it is — honor it, or resolve it fairly — while treating the root cause as a defect: the agent could make legally significant promises with no guardrail. That guardrail (an approval gate on warranty-level commitments) is exactly the accountability engineering lesson 207.4 builds. Owning it is cheaper than litigating whether "the AI did it."`,
          },
          {
            label: 'Take it case by case based purely on the dollar amount, with no policy change to the agent.',
            correct: false,
            consequence: `**Half-right, wrong lesson.** Sizing your response to the exposure is reasonable, but doing *only* that leaves the actual defect in place: an autonomous agent that can invent binding-looking commitments at will. You'll be back here next week with a bigger promise. Ownership means fixing the system that produced the liability, not just triaging its outputs one at a time.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each item by whether, under today\'s law, it can be a LEGAL PERSON (can hold rights, contract, sue and be sued, be liable) or is merely a TOOL/INSTRUMENT (the law looks through it to a person or entity).',
          buckets: ['Can be a legal person', 'Tool / instrument (law looks through it)'],
          items: [
            { text: 'A human founder', bucket: 'Can be a legal person' },
            { text: 'An incorporated company (LLC / corporation)', bucket: 'Can be a legal person' },
            { text: 'The LLM agent that drafts your emails', bucket: 'Tool / instrument (law looks through it)' },
            { text: 'The autonomous trading script your company runs', bucket: 'Tool / instrument (law looks through it)' },
            { text: 'The prompt/policy file that configures your agents', bucket: 'Tool / instrument (law looks through it)' },
          ],
          explain: 'Legal personhood today attaches to humans and to entities the law recognizes (companies, some associations) — things that can hold rights and bear liability. Your agents, scripts, and prompts are instruments: however autonomously they run, the law attributes their actions to the deployer. That asymmetry is the entire basis for "there is no the-AI-did-it defense."',
        },
      ],
      tutorHooks: [
        { label: 'Where could my agents create commitments?', kind: 'ask', question: 'Walk through my autonomous company and list the places where an agent could create a legally significant commitment or representation (promises to customers, prices, warranties, claims) that would be attributed to me.' },
        { label: 'Harder: agency & foreseeability', kind: 'harder', concept: 'how legal concepts of agency, apparent authority, and foreseeability apply when an autonomous agent (not a human employee) acts on a company\'s behalf' },
        { label: 'Critique my reasoning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Under current law, when your autonomous agent takes an action that harms a customer, who does the law most typically look to as responsible?',
          options: [
            'The AI agent itself, as a separate legal person',
            'Nobody — autonomous actions have no responsible party',
            'The person or entity that deployed and controls the agent',
            'The model vendor exclusively, in every case',
          ],
          answer: 2,
          explain: 'The agent is a tool; the law generally looks through it to the deployer who built, configured, and ran it. It is not a separate legal person, "nobody" is never the answer, and while a vendor may sometimes share exposure, responsibility does not vanish or transfer wholesale off the deployer.',
        },
        {
          kind: 'mcq',
          prompt: 'What was the key holding a company tried and failed to establish in the widely reported Air Canada chatbot case?',
          options: [
            'That chatbots cannot make factual statements',
            'That its chatbot was a separate legal entity responsible for its own actions',
            'That customers must always read the fine print',
            'That AI outputs are automatically copyrighted',
          ],
          answer: 1,
          explain: 'The airline reportedly argued the chatbot was a separate legal entity responsible for its own actions; the tribunal rejected this, holding the company responsible for information its deployed tool provided. It is one small decision, not a global doctrine, but it directly tests — and defeats — the "the AI did it" defense.',
        },
        {
          kind: 'free',
          prompt: 'Explain in your own words why "the AI did it" is not a defense for your autonomous company, and give one concrete example from YOUR business where an agent could take an action that would legally be attributed to you.',
          rubric: 'A strong answer: (1) states that agents are tools/instruments, not legal persons, so their actions are attributed to the deployer; (2) draws the engineering parallel that you own your production system\'s behavior (a bug is an explanation, not an excuse); (3) gives a concrete, business-specific example (a promise, price, warranty, claim, or transaction an agent could execute autonomously); (4) acknowledges the area is unsettled/evolving rather than asserting a fixed rule, consistent with the not-legal-advice framing.',
        },
      ],
      commitSummary: 'concept only — next you make the entity and the accountable human behind that ownership explicit.',
    },

    // -----------------------------------------------------------------------
    {
      id: '207.2',
      module: 207,
      title: 'You still need an entity & an accountable human',
      estMinutes: 15,
      prerequisites: ['207.1'],
      artifactSlot: null,
      concept: `**Educational, not legal advice; this is an emerging, unsettled area; consult a professional.**

If agent actions are attributed to *someone*, the design question becomes: **to whom?** An "autonomous company" that automates its operations still has to answer that, because you can automate *labor* but you cannot automate *legal personhood* into existence. Somebody or some entity must be the thing the world contracts with, sues, taxes, and holds responsible.

In practice the autonomous company still does the boring, human things a normal company does:

- **It incorporates.** An LLC or corporation is what lets the business (rather than you personally) hold assets, sign, and — critically — cap personal liability. "Autonomous" does not exempt you from having a recognized legal entity.
- **It has an accountable human (or humans).** Directors, officers, an owner, or at minimum a **registered agent** — a named human the state can serve papers on. Regulators expect a responsible person, not a wallet address.
- **It signs, pays taxes, and files.** Contracts, tax registration and returns, required disclosures. Automation can *prepare* these; a legally responsible party still stands behind them.

The trap is believing that if the *operations* are autonomous, the *accountability* is too. It is not. Automation reduces the human labor of running the company; it does not reduce the requirement that a legal person owns the outcomes. However advanced your agents, someone must own the pager — and that someone is a person or an entity, not a model.`,
      reframe: {
        analogy: `**Automation reduces labor, not accountability — someone owns the pager.** You can automate deploys, tests, rollbacks, and remediation until no human touches the release path for months. That does *not* delete the on-call rotation. When the fully automated system pages at 3am, a *named human* is still ultimately responsible for the service being up — automation moved the work off their plate, not the accountability. Your autonomous company is the same: the agents can run operations end-to-end, but there is still a named legal owner on the hook when it matters. "No one is on call" is not a state a serious system is ever actually in; it just means you haven't named who is.`,
        breaks: `On-call is an *internal* convention you can redesign freely; legal accountability is **externally imposed** and far less flexible. You cannot page-swap your way out of who a regulator serves, and in some structures liability can fall on **owners or members personally** in ways an internal rotation never would. The frontier is also genuinely moving: special legal wrappers for autonomous/decentralized organizations exist in a few jurisdictions and are being litigated and legislated right now, so *which* entity and *which* human is optimal is unsettled. The invariant that survives all of it: the set of accountable persons is never empty.`,
      },
      workedExample: `The **CFTC v. Ooki DAO** action (United States, filed 2022; default judgment reported 2023; details as reported) is the sharp real lesson that "decentralized and autonomous" does not mean "no accountable entity."

Ooki DAO was a decentralized autonomous organization — governance by token-holder vote, no traditional company, explicitly designed to operate without a conventional accountable center. Regulators alleged it ran an illegal trading operation. The striking part: a U.S. court reportedly treated the DAO as an **unincorporated association** — a recognized legal entity — and entered judgment against it, with the theory that its **token-holders could bear liability** for its conduct. The attempt to have "no one" be responsible instead risked making **many** people responsible.

Contrast the deliberate wrapper approach: jurisdictions such as **Wyoming** (and the Marshall Islands, among others) created **DAO LLC** statutes precisely so an autonomous/decentralized organization can be a proper limited-liability entity with a **registered agent** — i.e., an accountable human contact and a liability shield — instead of an ambiguous association exposing its members (all figures and specifics illustrative and jurisdiction-dependent).

Both point the same way: the more autonomous the operation, the *more* deliberately you need to choose the entity and name the accountable humans — not less. Skipping the entity does not remove accountability; it just leaves it unstructured and often personal.`,
      branch: {
        scenario: `You are launching an AI-agent-run company and your pitch is "no humans in charge — fully autonomous." Your technical co-founder proposes shipping with **no incorporated entity at all**: just the agents, a treasury wallet, and a website, "so there's literally no one to sue." How do you respond?`,
        choices: [
          {
            label: 'Great idea — with no entity and no named humans, there is no target for liability.',
            correct: false,
            consequence: `**Dangerous miss.** "No entity" does not create "no liability" — it removes the *shield*, not the *exposure*. As the Ooki DAO matter showed, courts can recharacterize an unstructured autonomous org as an association and reach the people behind it *personally*. You have not made yourself unsuable; you have removed the very structure (the LLC/corporation) that keeps a lawsuit from reaching your personal assets.`,
          },
          {
            label: 'Incorporate a proper entity, name a responsible human / registered agent, and let the agents operate the business *inside* that structure.',
            correct: true,
            consequence: `**Correct.** The company can be operationally autonomous *and* legally well-formed: an entity holds the assets and contracts, a named human (officer/owner or at least a registered agent) is the accountable point of contact, and the agents run day-to-day inside that shell. This is what caps your personal liability and gives regulators a legitimate party to deal with. Autonomy is an operating model; the entity is the legal container it runs in.`,
          },
          {
            label: 'Incorporate, but list the AI agent itself as the sole director and officer to keep humans out.',
            correct: false,
            consequence: `**Not currently workable.** Jurisdictions generally require directors/officers (or at least a registered agent) to be legal persons a court can actually serve and hold responsible — an AI is not one today. Whether that ever changes is exactly the kind of unsettled question this module flags, but you cannot incorporate on a rule that does not yet exist. You still need a real human in the accountable seat.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'rank',
          prompt: 'Put the steps of standing up a legally accountable autonomous company in a sensible order, from choosing the structure to routing the agents through it.',
          items: [
            'Choose a legal structure and jurisdiction',
            'Incorporate / register the entity',
            'Appoint an accountable human (officer/owner) and a registered agent',
            'Obtain tax registration and required IDs',
            'Open a bank account in the entity\'s name and route agent actions through the entity',
          ],
          explain: 'You pick the structure and jurisdiction first, then bring the entity into legal existence, then attach the accountable humans the state can serve, then register for tax so the entity can transact lawfully, and finally give it a bank account and wire the agents to act *as* the entity. Notice a human and an entity appear early and cannot be skipped — automation runs inside this scaffold, it does not replace it.',
        },
      ],
      tutorHooks: [
        { label: 'What entity fits my autonomous company?', kind: 'ask', question: 'Given my business and where I operate, walk me through the entity and accountable-human questions I need a lawyer to answer (structure, registered agent, who signs, tax registration) so I go in prepared.' },
        { label: 'Harder: DAO wrappers & member liability', kind: 'harder', concept: 'how DAO LLC statutes and unincorporated-association treatment change whether liability lands on the entity or on individual members/owners' },
        { label: 'Critique my structure', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Your company automates all of its operations with agents. Which of the following can it also automate away?',
          options: [
            'The need for a legal entity',
            'The need for an accountable human / registered agent',
            'The obligation to pay taxes and file',
            'None of these — automation reduces labor, not legal accountability',
          ],
          answer: 3,
          explain: 'Automation removes human *labor*, not the requirement that a legal person owns the outcomes. The entity, the accountable human, and the tax/filing obligations all remain. "Someone owns the pager" — the accountable set is never empty just because the operations are autonomous.',
        },
        {
          kind: 'mcq',
          prompt: 'What is the main lesson of the Ooki DAO matter for an "autonomous, no-one-in-charge" company?',
          options: [
            'Decentralization makes an organization immune from regulators',
            'Trying to have no accountable entity can instead expose the people behind it personally',
            'Only corporations, never associations, can ever be held liable',
            'Autonomous organizations are always illegal',
          ],
          answer: 1,
          explain: 'A court reportedly treated the DAO as an unincorporated association and pursued liability reaching its token-holders. Attempting to remove the accountable center did not remove accountability — it risked making it personal and unstructured. A deliberate entity with a named human is the safer design.',
        },
      ],
      commitSummary: 'concept only — next you map the specific kinds of liability an agent\'s actions can create inside that entity.',
    },

    // -----------------------------------------------------------------------
    {
      id: '207.3',
      module: 207,
      title: 'Liability for agent actions',
      estMinutes: 16,
      prerequisites: ['207.1', '207.2'],
      artifactSlot: null,
      concept: `**Educational, not legal advice; this is an emerging, unsettled area; consult a professional.**

Once you accept that agent actions are yours (207.1) and land on your entity (207.2), the practical question is *what kinds* of liability they can create. Four recurring buckets:

- **Contract.** An agent that "agrees," quotes a price, promises a refund, or confirms terms can create commitments a customer reasonably relies on — the Air Canada pattern from 207.1.
- **Harmful outputs (tort-style).** An agent that gives dangerous advice, defames someone, or causes foreseeable harm can expose you to negligence-style claims. Outputs are not "just text" when people act on them.
- **IP and data.** Training on or emitting others' copyrighted work, leaking personal data, or processing data without a lawful basis raises infringement and privacy exposure (GDPR-style regimes attach obligations regardless of intent).
- **Consumer protection & disclosure.** Deceptive claims, dark patterns, and — increasingly — **failing to disclose that a person is dealing with AI**. Regulators are pushing transparency: tell people when they are interacting with a machine, and don't let an agent make claims your company couldn't make itself.

A recurring instinct is to point at the model vendor: "the foundation model produced it." Sometimes a vendor shares exposure — but to your customer and to regulators, **your dependency's failure is still your outage.** You chose the dependency, you put it in front of users, and you are the party they dealt with. Exactly how liability is apportioned between deployer, vendor, and user is one of the most actively contested questions in this space; do not assume it lands anywhere other than on you by default.`,
      reframe: {
        analogy: `**Your dependency's failure is still your outage.** When a third-party API you depend on goes down and takes your checkout with it, your customers do not care whose datacenter caught fire — your product is down, your SLA is breached, your incident. You may have recourse *against the vendor* afterward, but that is a separate ledger from your obligation *to your users*. A foundation model or agent framework is that dependency. If it emits an infringing image, a defamatory claim, or a false promise through your product, that is your liability to the outside world first; any indemnity from the vendor is a private back-channel that does not excuse you to the customer or the regulator. You own the composed system, including the parts you didn't write.`,
        breaks: `Two ways the analogy is *too kind*. First, an outage is usually transient and remediable; some legal harms (a privacy breach, an infringing distribution, a defamatory statement that spreads) are **not cleanly reversible** — you can't "roll back" a leaked dataset. Second, vendor contracts for AI are far less settled than cloud SLAs: **indemnities, liability caps, and who-owns-the-output terms vary wildly and are being renegotiated and litigated**, so you cannot assume the tidy recourse that mature infrastructure gives you. Read the actual terms, and assume the external-facing liability is yours until a professional tells you otherwise.`,
      },
      workedExample: `Two real, contrasting cases show the buckets in the wild (details as reported; treat as illustrative).

**Harmful output — the NEDA "Tessa" chatbot (United States, 2023).** The National Eating Disorders Association reportedly replaced part of its human helpline with a chatbot named Tessa. Users reported that it gave weight-loss and calorie-restriction advice — the kind of guidance that can be actively dangerous for people with eating disorders. The organization took it down within days amid public backlash. Whatever the ultimate legal analysis, the shape is the point: an automated system produced **harmful outputs** to a vulnerable audience, and the responsibility landed on the organization that deployed it, not on "the chatbot."

**Contract / consumer reliance — Air Canada (2024, from 207.1).** A bot's invented policy became a commitment the company had to answer for.

Layer on the **disclosure** frontier: regimes like the EU AI Act (transparency obligations, e.g. around Article 50 as commonly summarized) and guidance/enforcement from bodies like the U.S. FTC push companies to **disclose AI interaction** and to avoid deceptive automated claims. Specifics, thresholds, and effective dates vary by jurisdiction and are moving — the durable takeaway is that "we used an AI" is not a shield, and *hiding* that you used one can itself be the violation.`,
      branch: {
        scenario: `Your autonomous marketing agent, with no human review, published a blog post that (a) copied several paragraphs almost verbatim from a competitor's copyrighted guide, and (b) stated your product "is clinically proven to cure insomnia," a claim your company has no evidence for and has never made. Your vendor's terms say outputs are "provided as-is." What is the accurate read of your exposure?`,
        choices: [
          {
            label: 'The vendor\'s "as-is" terms mean the model provider is responsible, so your company is in the clear.',
            correct: false,
            consequence: `**Instructive miss.** "As-is" mostly limits the *vendor's* liability *to you* — it does not transfer *your* liability *to the outside world*. To the competitor (IP) and to regulators/consumers (a likely deceptive, unsupported health claim), you are the publisher. Your dependency's terms are a private ledger; they are not a defense to the people your published output harmed.`,
          },
          {
            label: 'Treat both as your company\'s exposure — potential IP infringement and a likely deceptive-claims problem — take the post down, and add review gates for claims and third-party content.',
            correct: true,
            consequence: `**Correct.** You separate the two buckets: the copied text is an **IP** risk, the unsupported "clinically proven" line is a **consumer-protection / deceptive-claims** risk, and both are attributed to you as publisher regardless of the vendor's as-is language. The fix is a defect fix: legally significant public claims and third-party-content reuse should pass a gate before an autonomous agent can publish them — the accountability engineering of 207.4.`,
          },
          {
            label: 'Only the health claim matters; verbatim copying is fine because an AI generated it, not a person.',
            correct: false,
            consequence: `**Wrong on the IP.** "A machine typed it" does not launder copyright — reproducing someone's protected expression through your product is still potentially infringing, and it is your product doing the distributing. Both problems are live. Dismissing the copying because an agent produced it is the same "the AI did it" fallacy from 207.1, wearing an IP costume.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each incident into the kind of liability it most directly raises for the company that deployed the agent.',
          buckets: ['Contract', 'Harmful output (tort-style)', 'IP & data', 'Consumer protection & disclosure'],
          items: [
            { text: 'Agent confirms a price and delivery date a customer then relies on', bucket: 'Contract' },
            { text: 'Agent gives dangerous health advice to a vulnerable user', bucket: 'Harmful output (tort-style)' },
            { text: 'Agent reproduces long passages from a copyrighted book in a product', bucket: 'IP & data' },
            { text: 'Agent stores and reuses customers\' personal data with no lawful basis', bucket: 'IP & data' },
            { text: 'Chatbot never tells users they are talking to an AI, as a regime requires', bucket: 'Consumer protection & disclosure' },
            { text: 'Agent advertises an unproven "clinically proven" benefit', bucket: 'Consumer protection & disclosure' },
          ],
          explain: 'Commitments a customer relies on are contract risk; foreseeable harm from outputs is tort-style; reproducing protected work or mishandling personal data is IP/data risk; and deceptive claims or failing to disclose AI interaction is consumer-protection/disclosure risk. Real incidents often trigger several at once — the copied "clinically proven" post from the branch is IP *and* consumer-protection at the same time.',
        },
        {
          kind: 'scenario',
          title: 'Triaging an autonomous agent incident',
          intro: 'Your support agent, unsupervised, told a customer over chat that your app is "HIPAA-compliant and safe for storing medical records." It is not, and the customer uploaded patient data on the strength of it. You are the deployer; your model vendor\'s contract says outputs are as-is.',
          decisions: [
            {
              situation: 'Where does the primary external liability sit?',
              options: [
                { label: 'With the model vendor, because the as-is clause shifts responsibility for outputs to them.', correct: false, outcome: 'The as-is clause chiefly limits the vendor\'s liability to you; it does not move your liability to the customer or a regulator. You are the party the customer dealt with and relied on. Vendor recourse, if any, is a separate ledger.' },
                { label: 'With your company — you deployed the agent, the customer relied on its representation, and a false compliance claim plus a possible data-handling problem are yours.', correct: true, outcome: 'Correct. This blends contract/consumer reliance (a false representation acted upon) with a serious data/privacy exposure (patient records stored on a system that isn\'t what was promised). Your dependency\'s terms don\'t excuse you to the outside world — your dependency\'s failure is your outage.' },
                { label: 'With the customer, for trusting a chatbot instead of reading the fine print.', correct: false, outcome: 'Blaming the user is the losing posture. A reasonable customer had no way to know the agent exceeded reality, and pushing responsibility onto them is exactly the consumer-protection risk you want to avoid — not a defense.' },
              ],
            },
            {
              situation: 'What is the durable fix, beyond handling this one incident?',
              options: [
                { label: 'Add a system rule and a hard gate so the agent cannot make compliance/safety representations without human approval, and log every such attempt.', correct: true, outcome: 'Correct. You treat the false claim as a defect and engineer it out: legally significant representations (compliance, safety, medical/financial claims) get an approval gate and an audit trail. That is the accountability design of lesson 207.4 — autonomous, but not unsupervised where it legally matters.' },
                { label: 'Tell the agent in the prompt to "be careful and accurate" and consider it solved.', correct: false, outcome: 'A soft instruction is not a control. Prompts drift and models still hallucinate; without a hard gate and logging on legally significant claims, the same incident recurs with no record of it. Design the guardrail, don\'t just request good behavior.' },
                { label: 'Disable the entire support agent permanently.', correct: false, outcome: 'Overcorrection. The problem isn\'t automation itself, it\'s ungated legally significant claims. You can keep the agent for the vast majority of low-risk interactions and gate only the high-exposure actions — risk-based control, not a blanket shutdown.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Map my agents\' liability surface', kind: 'ask', question: 'For each autonomous agent in my company, tell me which liability buckets (contract, harmful output, IP/data, consumer protection/disclosure) it could plausibly trigger, and which are highest-exposure for my domain.' },
        { label: 'Harder: apportioning liability with vendors', kind: 'harder', concept: 'how deployer, model vendor, and user liability might be apportioned for an agent\'s output, and why "as-is" vendor terms don\'t settle it externally' },
        { label: 'Critique my disclosure practices', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Your autonomous agent produces an infringing image, and your model vendor\'s contract says outputs are "provided as-is." What does that clause most likely mean for your exposure to the party whose work was infringed?',
          options: [
            'It transfers all liability to the vendor, so you are safe',
            'It mainly limits the vendor\'s liability to you; you can still be liable to the outside party as the deployer/publisher',
            'It means no one is liable because the output was automated',
            'It guarantees you a full indemnity in every jurisdiction',
          ],
          answer: 1,
          explain: 'As-is terms chiefly cap the vendor\'s liability *to you*; they do not move *your* external liability to the injured party, who dealt with your product. Your dependency\'s failure is still your outage — any vendor recourse is a separate matter you should not assume.',
        },
        {
          kind: 'mcq',
          prompt: 'Which best captures the disclosure direction regulators are pushing for consumer-facing agents?',
          options: [
            'Companies should hide that they use AI to seem more human',
            'Disclosing AI use is optional in every jurisdiction with no consequences',
            'Increasingly, tell people when they are interacting with AI and don\'t let agents make claims the company couldn\'t make itself',
            'Only the model vendor, never the deployer, must disclose anything',
          ],
          answer: 2,
          explain: 'Regimes like the EU AI Act and guidance/enforcement from bodies such as the FTC push transparency (disclose AI interaction) and prohibit deceptive automated claims. Specifics vary and are evolving, but hiding AI use or making unsupported claims through an agent is a risk, not a shield.',
        },
        {
          kind: 'free',
          prompt: 'Pick ONE autonomous agent in your business and name the single liability bucket (contract, harmful output, IP/data, or consumer protection/disclosure) where it is most exposed. Explain the specific action that creates the risk and why "the vendor\'s model did it" would not protect you.',
          rubric: 'A strong answer: (1) identifies a specific agent and one concrete high-exposure action; (2) correctly classifies the liability bucket it falls in; (3) explains the exposure lands on the deployer/publisher, not the model vendor, to the external party; (4) invokes the "your dependency\'s failure is your outage" logic — vendor as-is terms limit vendor-to-you liability, not your external liability — while acknowledging apportionment is unsettled and jurisdiction-dependent.',
        },
      ],
      commitSummary: 'concept only — next you engineer the controls that keep an autonomous company accountable by design.',
    },

    // -----------------------------------------------------------------------
    {
      id: '207.4',
      module: 207,
      title: 'Designing accountability in',
      estMinutes: 17,
      prerequisites: ['207.1', '207.2', '207.3'],
      artifactSlot: null,
      concept: `**Educational, not legal advice; this is an emerging, unsettled area; consult a professional.**

You can build a company that is genuinely autonomous *and* accountable — but accountability has to be **engineered in**, not hoped for. Four controls do most of the work:

- **Audit logs.** Every legally significant action an agent takes should leave a durable, tamper-evident, timestamped record: what it did, on what inputs, under which policy version. If you can't reconstruct why the system did something, you can't defend it, fix it, or prove you exercised care.
- **Approval gates (human-in-the-loop where it counts).** Not everything needs a human — that would defeat the point — but **legally significant** actions should pass a gate: signing contracts above a threshold, moving money, making public safety/medical/financial claims, filing anything with a regulator. Gate by exposure, not by volume. A useful rule of thumb: gate when the expected exposure $\\text{exposure} = P(\\text{harm}) \\times \\text{severity}$ is high, and let low-exposure actions run free.
- **Clear ownership.** Every system has a **named human owner** — the accountable person for that agent's behavior. "Everyone/no one owns it" is how accountability evaporates.
- **Honest disclosure.** Tell people when they are dealing with AI, and don't let agents assert things the company couldn't.

Frameworks in adjacent domains already encode this instinct — model-risk-management guidance (e.g. the U.S. Fed's SR 11-7 for models), the NIST AI Risk Management Framework, and SOX-style change control all boil down to: log it, gate the risky bits, and name an owner. The specific obligations for autonomous companies are still forming, so treat these as robust design defaults, not a compliance checklist.`,
      reframe: {
        analogy: `This is just **audit trails + change control + a named owner for each system**, applied to agents. You already run production this way: every deploy is logged and reversible, risky changes require review/approval before they ship, and each service has an on-call owner. Accountability engineering for an autonomous company is the same three primitives pointed at legally significant actions. The **audit log** is your immutable deploy history — the record you reach for in the post-incident review and, now, potentially in a legal one. The **approval gate** is change control: low-risk changes flow through CI automatically, high-blast-radius changes need a human sign-off. And **clear ownership** is the on-call rotation: a named human answerable for the system's behavior. Build the company like you'd build a well-run production system, and "autonomous" and "accountable" stop being in tension.`,
        breaks: `Production controls are *yours to tune*; legal accountability controls have **external standards you don't fully set** — what counts as an adequate audit trail, a sufficient gate, or a responsible owner can be defined by regulators, and those definitions differ by jurisdiction and are **still being written for AI**. A tamper-evident log you designed may not meet an evidentiary bar; a gate you thought was enough may not satisfy a specific regime. And unlike a rollback, some legal harms can't be undone by reverting. So use the engineering primitives to get 90% of the way honestly and cheaply — then have a professional check that your log, gates, and ownership actually meet the obligations that apply to you.`,
      },
      workedExample: `Consider an autonomous fintech-style company that lets agents move customer money, and design the controls as if reviewing a system (all thresholds illustrative — real ones depend on your law and risk).

- **Audit log.** Every transfer writes an append-only record: agent id, policy version, inputs, decision rationale, timestamp, and outcome. Six months later, when a customer disputes a transaction, you can reconstruct exactly what happened and show the control was followed — the difference between a defensible incident and an indefensible one.
- **Approval gates by exposure.** Transfers under, say, $100 within policy: fully autonomous. Transfers over a threshold, to new payees, or flagged as anomalous: **human approval required** before execution. This is $\\text{exposure} = P(\\text{harm}) \\times \\text{severity}$ in practice — cheap, frequent, low-severity actions run free; rare, high-severity ones get a human. It mirrors financial change-control and model-risk-management practice (SR 11-7-style: validate, monitor, and keep humans over high-impact model decisions).
- **Named owner.** One accountable human owns "the payments agent." When it misbehaves at 3am, there is a name on the pager, not a diffusion of responsibility.
- **Disclosure.** Customers are told they're dealing with an automated agent, and the agent cannot assert guarantees the company hasn't approved.

Same autonomy, radically different defensibility. The company still runs itself day-to-day; it simply can't take a legally significant action without leaving a trace, clearing a gate, and pointing at an owner.`,
      branch: {
        scenario: `You are designing accountability into your autonomous company and have limited engineering time. Your co-founder wants to route **every** agent action — including answering FAQ questions from your public help docs — through human approval, "to be safe." Another option is to gate by exposure. What's the best design?`,
        choices: [
          {
            label: 'Gate everything through a human — maximum safety, no action is unsupervised.',
            correct: false,
            consequence: `**Self-defeating.** Gating trivial, low-exposure actions (FAQ lookups from public docs) destroys the entire value of autonomy and creates a human bottleneck that people will route around or rubber-stamp — which is *worse* than no gate, because it manufactures the appearance of review without the substance. Controls you can't sustain get bypassed. Gate by exposure, not by reflex.`,
          },
          {
            label: 'Gate by exposure: low-risk actions run autonomously with logging; legally significant actions (money, contracts, public claims, filings) require approval; everything is audited and owned.',
            correct: true,
            consequence: `**Correct.** This is risk-based control — the same instinct as change control, where CI ships low-risk changes automatically and only high-blast-radius changes need sign-off. You spend your scarce human review on the actions where $\\text{exposure} = P(\\text{harm}) \\times \\text{severity}$ is high, log everything for reconstructability, and name an owner. The company stays genuinely autonomous while the actions that can actually hurt you get a human and a trace.`,
          },
          {
            label: 'Skip gates entirely; just keep good logs so you can explain things after the fact.',
            correct: false,
            consequence: `**Half a control.** Audit logs are necessary but not sufficient — they help you *explain* a harm, not *prevent* one. For legally significant actions (moving money, signing, public claims), an after-the-fact log of an irreversible mistake is cold comfort. Pair logging with gates on the high-exposure actions; the log is the record, the gate is the brake.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'rank',
          prompt: 'Rank these agent actions from LOWEST legal exposure (safe to fully automate) to HIGHEST (should require a human approval gate).',
          items: [
            'Answering a factual question from your public help docs',
            'Issuing a small account credit within a pre-approved policy',
            'Signing a vendor contract on the company\'s behalf',
            'Publishing a public safety or medical claim about your product',
            'Filing a document with a regulator',
          ],
          explain: 'Exposure rises as severity and irreversibility rise. A public-docs answer is near-zero risk; a small in-policy credit is bounded and low; a signed contract creates binding obligations; a public safety/medical claim can trigger consumer-protection and harm liability at scale; a regulatory filing is the highest-stakes, least-reversible act. Gate the top of this list, automate the bottom — exposure equals probability of harm times severity.',
        },
        {
          kind: 'numeric',
          prompt: 'Your payments agent handles 10,000 transfers a month. You decide to require human approval only for transfers over a threshold, which is 4% of volume. How many transfers per month hit the human approval gate?',
          answer: 400,
          unit: 'transfers',
          explain: '10,000 × 0.04 = 400. Risk-based gating means ~9,600 low-exposure transfers stay fully autonomous while the 400 highest-exposure ones get a human and a trace. That is the whole point of gating by exposure rather than by volume — you concentrate scarce human review where P(harm) × severity is highest, and keep the company genuinely autonomous everywhere else.',
        },
      ],
      tutorHooks: [
        { label: 'Design my approval gates', kind: 'ask', question: 'For my autonomous company, help me draw the line between actions my agents can take freely and actions that need a human approval gate, using an exposure (probability times severity) test on my specific action types.' },
        { label: 'Harder: what makes an audit log defensible', kind: 'harder', concept: 'what turns an audit log from an internal debugging aid into something that could support a due-care or compliance argument (immutability, tamper-evidence, policy versioning, retention)' },
        { label: 'Critique my accountability design', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which set of controls best makes an autonomous company both autonomous AND accountable?',
          options: [
            'Route every single agent action through a human for maximum safety',
            'Audit logs, exposure-based approval gates on legally significant actions, a named owner per system, and honest AI disclosure',
            'Only audit logs — being able to explain actions afterward is enough',
            'A prompt instruction telling agents to always behave lawfully',
          ],
          answer: 1,
          explain: 'Gate by exposure (not everything — that defeats autonomy and gets bypassed), log durably, name an owner, and disclose. Logs alone only explain harm rather than prevent it, gating everything is unsustainable, and a soft prompt instruction is not a control. This mirrors audit trails + change control + a named owner.',
        },
        {
          kind: 'mcq',
          prompt: 'Under a risk-based ("exposure = probability of harm × severity") gating policy, which action should an autonomous agent most clearly be allowed to take WITHOUT a human approval gate?',
          options: [
            'Wiring a large payment to a brand-new payee',
            'Answering a factual question from your public help documentation',
            'Signing a multi-year vendor contract',
            'Publishing a "clinically proven" health claim',
          ],
          answer: 1,
          explain: 'Answering from public docs is low probability of harm and low severity — safe to automate with logging. The other three are high-severity or irreversible (large/new-payee transfer, binding contract, regulated health claim) and belong behind an approval gate. Gate by exposure, automate the rest.',
        },
        {
          kind: 'free',
          prompt: 'Design the accountability controls for ONE high-exposure action your autonomous company takes. Specify: what the audit log captures, where the approval gate sits (and why that threshold), who the named owner is, and what you disclose. Note one place a professional should check whether your controls actually meet the obligations that apply.',
          rubric: 'A strong answer: (1) picks a genuinely legally significant action (money movement, contract, public claim, filing); (2) specifies a concrete audit-log record (inputs, policy version, timestamp, rationale, outcome) that supports reconstruction; (3) places an approval gate justified by an exposure = probability × severity argument, not by volume; (4) names a single accountable human owner and states a disclosure; (5) explicitly flags that a professional must confirm the controls meet applicable, jurisdiction-dependent, still-evolving obligations — consistent with the not-legal-advice framing.',
        },
      ],
      commitSummary: 'concept only — you leave this module able to build a company that is autonomous in operation and accountable by design, with a named owner, audit trails, and gates on every legally significant action.',
    },
  ],
}
