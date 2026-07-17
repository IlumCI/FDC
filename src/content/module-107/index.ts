import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 107 — Nonprofit formation & governance  (BONUS, Season 1, nonprofit)
//
// The nonprofit analog of the legal/governance bonus module. Slots in after
// module 11 on the nonprofit path. Every lesson carries the non-advice banner:
// this is educational framing, not legal or tax advice, and specifics are
// jurisdiction-dependent. US 501(c)(3) is used as ONE illustrative example;
// other countries have their own regimes. Real, well-known nonprofits are used
// purely as illustrations of structure, not endorsements or claims of fact.
// ===========================================================================

export const module107: Module = {
  id: 107,
  season: 1,
  bonus: true,
  paths: ['nonprofit'],
  insertAfter: 11,
  title: 'Nonprofit formation & governance',
  goal: "Stand up the nonprofit's legal and governance scaffolding: tax-exempt status, a fiduciary board, and the accountability structures a mission-driven org runs on. (Educational, not legal advice.)",
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '107.1',
      module: 107,
      title: 'Tax-exempt status (e.g. 501(c)(3))',
      estMinutes: 14,
      prerequisites: [],
      artifactSlot: null,
      concept: `> **Educational, not legal or tax advice; jurisdiction-dependent; consult a professional.**

**Tax exemption** is a deal, not a gift. In exchange for being organized and operated exclusively for a recognized public purpose — charitable, educational, scientific — an organization is relieved of income tax on mission-related activity, and (in some regimes) its donors can deduct their gifts. The US **501(c)(3)** category is one illustrative example of this pattern; the EU, UK, and every other jurisdiction have their own rules, thresholds, and paperwork, so treat the specifics here as a shape to recognize, not a checklist to follow.

The strings attached are the whole point:

- **No private benefit / no private inurement** — the org's assets and earnings cannot flow to insiders (founders, directors, their families) beyond reasonable pay for real work. This is the bright line that separates a charity from a business wearing a mission as a costume.
- **Limits on political activity** — a 501(c)(3)-style charity generally cannot campaign for or against candidates at all, and lobbying is capped. Cross the line and exemption is at risk.
- **Purpose lock** — if the org dissolves, remaining assets must go to another exempt purpose, not to the founders.

The trade you are accepting: **public accountability in exchange for tax benefits.** You gain favorable tax treatment and donor trust; you give up private ownership, unrestricted political action, and financial privacy. If you would resent any of those, the exempt structure is the wrong tool — a for-profit or hybrid may fit better.`,
      reframe: {
        analogy: `Tax-exempt status is an **elevated permission grant with a signed usage policy attached**. The state escalates your privileges (no income tax, deductible donations) the way a platform grants an app a sensitive scope — but only against a strict terms-of-service: assets are locked to the public-purpose namespace, insiders get no special write access to the treasury, and certain calls (partisan campaigning) are hard-denied. Keep to the policy and the grant persists; violate it and the grant is revoked and clawed back.`,
        breaks: `A software permission is usually binary and instantly enforced by the runtime; exempt status is **granted once and audited later**, sometimes years after the violation, by humans exercising judgment on fuzzy terms like "reasonable compensation" or "insubstantial lobbying." There is no compiler that rejects a bad transaction in real time — the enforcement is retrospective and probabilistic, which is exactly why organizations keep documentation as their audit log.`,
      },
      workedExample: `The **Wikimedia Foundation** — the nonprofit behind Wikipedia — is a widely-cited US 501(c)(3) public charity, used here purely as an illustration of the structure (details are illustrative, not a current legal opinion). It fits the pattern cleanly: an **educational** exempt purpose (free access to knowledge), revenue dominated by many small public donations rather than a few insiders, and no partisan campaigning. Because it is donor-funded and exempt, it accepts the trade in full — it publishes financials, its assets are locked to the mission, and no founder owns it or can sell it. Contrast the counterfactual: if the same team had built Wikipedia as a private company monetizing the same traffic, they would keep ownership and political freedom but lose deductibility for donors and the public-trust halo that a charity's structure signals. The structure you pick encodes which trade you are making.`,
      branch: {
        scenario: `You are forming an education nonprofit under a 501(c)(3)-style exemption. A board member proposes the org buy "consulting services" from a company she owns, at above-market rates, and also that the org publicly endorse a specific candidate who supports education funding. What is the right call? (Educational framing only — a real decision needs a professional.)`,
        choices: [
          {
            label: 'Both are fine as long as the mission benefits overall.',
            correct: false,
            consequence: `**Instructive miss.** Both trip the core strings. Paying an insider's company above market is **private inurement** — value flowing to a director beyond reasonable compensation. Endorsing a candidate is prohibited **partisan political activity** for a 501(c)(3)-style charity. "The mission benefits" is not a defense for either; it is precisely the rationalization the rules exist to block.`,
          },
          {
            label: 'Reject the candidate endorsement outright; for the consulting, only proceed at documented fair-market value with the conflicted member recused.',
            correct: true,
            consequence: `**Correct.** Partisan endorsement is a hard line — decline it (issue-based education on funding is a separate, more nuanced question for a professional). The related-party contract is not automatically forbidden, but it must be at arm's length: independent fair-market pricing, the conflicted director recused from the vote, and the whole thing documented. That is how you honor "no private benefit" without paralyzing the org.`,
          },
          {
            label: 'Approve the consulting deal but skip documenting it — paperwork is bureaucracy.',
            correct: false,
            consequence: `**Instructive miss.** The documentation IS the protection. Because exemption is enforced by later audit, an undocumented related-party deal at above-market rates is exactly the fact pattern that gets exemption revoked. The paperwork is your audit log; skipping it converts a survivable conflict into an existential one.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each activity by whether it generally KEEPS a 501(c)(3)-style charity within its exemption or PUTS the exemption at risk. (Illustrative; jurisdictions differ.)',
          buckets: ['Within exemption', 'Puts exemption at risk'],
          items: [
            { text: 'Paying staff reasonable, market-rate salaries for real work', bucket: 'Within exemption' },
            { text: 'Publishing nonpartisan educational material on a policy issue', bucket: 'Within exemption' },
            { text: "Locking residual assets to another exempt purpose on dissolution", bucket: 'Within exemption' },
            { text: 'Endorsing a specific candidate for office', bucket: 'Puts exemption at risk' },
            { text: "Routing above-market payments to a founder's own company", bucket: 'Puts exemption at risk' },
            { text: 'Distributing surplus earnings to board members as a bonus for insiders', bucket: 'Puts exemption at risk' },
          ],
          explain: 'The bright lines are private benefit/inurement (no value to insiders beyond reasonable pay) and partisan political activity (prohibited). Reasonable pay, nonpartisan education, and a purpose-locked dissolution clause all stay inside the deal.',
        },
      ],
      tutorHooks: [
        { label: 'Which exempt category might fit my org?', kind: 'ask', question: 'Given my mission and country, walk me through which recognized tax-exempt or charitable categories might be relevant to explore with a professional, and what trade-offs each implies. Flag that this is educational, not advice.' },
        { label: 'Harder: private benefit edge cases', kind: 'harder', concept: 'distinguishing reasonable compensation from private inurement in related-party transactions' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'The core trade a charity accepts in exchange for tax-exempt status is best described as:',
          options: [
            'Public accountability and loss of private ownership in exchange for tax benefits and donor trust',
            'A one-time fee in exchange for permanent, unconditional tax freedom',
            'The right to campaign for candidates in exchange for filing paperwork',
            'Private ownership of assets in exchange for a small tax on profits',
          ],
          answer: 0,
          explain: 'Exemption trades tax benefits and donor trust for public accountability, a purpose lock on assets, no private inurement, and limits on political activity. It is a conditional, auditable deal, not unconditional freedom.',
        },
        {
          kind: 'mcq',
          prompt: 'Under a 501(c)(3)-style exemption, which activity is most clearly prohibited?',
          options: [
            'Paying market-rate salaries to staff',
            'Campaigning for or against a specific candidate for public office',
            'Accepting many small donations from the public',
            'Publishing free educational content',
          ],
          answer: 1,
          explain: 'Partisan campaign intervention is generally a hard prohibition for this category. Market pay, small public donations, and free education are all consistent with exemption.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR nonprofit idea, name the recognized public purpose it would claim, and identify ONE string-attached constraint (private benefit, political limits, or the purpose lock) that would most change how you operate versus a for-profit. (This is educational, not advice.)',
          rubric: 'Strong answer: (1) states a plausible recognized exempt purpose (charitable/educational/scientific/etc.); (2) names a specific constraint and explains a concrete operational consequence (e.g. cannot pay insiders above market, cannot endorse candidates, cannot distribute assets to founders); (3) frames it as a trade for tax benefits/trust; (4) acknowledges jurisdiction-dependence rather than asserting a firm legal conclusion.',
        },
      ],
      commitSummary: 'concept only — no artifact; you map your own structure with a professional.',
    },

    // -----------------------------------------------------------------------
    {
      id: '107.2',
      module: 107,
      title: 'The board as fiduciary',
      estMinutes: 15,
      prerequisites: ['107.1'],
      artifactSlot: null,
      concept: `> **Educational, not legal or tax advice; jurisdiction-dependent; consult a professional.**

A nonprofit has no owners — so who is ultimately responsible? A **governing board** (trustees/directors) holding the organization in trust for the public. Board members are **fiduciaries**: the law holds them to duties they owe the mission, not themselves. The classic framing (US example; other regimes phrase it differently) is three duties:

- **Duty of care** — pay attention. Show up informed, read the financials, ask real questions, exercise the judgment a prudent person would.
- **Duty of loyalty** — put the org's interest above your own. Disclose conflicts, recuse yourself, never use your seat for personal gain.
- **Duty of obedience** — keep the org true to its stated mission and to the law; do not quietly drift the charity into doing something its exempt purpose never authorized.

Critically, **the board is not the staff.** The board governs; it hires, oversees, and can fire the chief executive, but it does not run day-to-day operations. And this is why **founders answer to a board.** In a startup you may control your company; in a nonprofit you built, you serve the mission through a body that can overrule you and, in the extreme, replace you. Founders who cannot accept that a board sits above them are structurally unsuited to lead a charity — the accountability is the feature, not a bug.`,
      reframe: {
        analogy: `The board is an **oversight layer with access control over privileged operations.** Routine execution runs freely at the staff layer, but "major" calls — approving the budget, hiring or firing the executive, changing the mission, taking on large obligations — require the board's authorization, like a system that gates destructive or high-blast-radius actions behind a separate approval quorum. The three duties are the review criteria that authorization is supposed to apply: care (did the approver actually inspect it), loyalty (is the approver conflicted), obedience (is the request in-scope for this system at all).`,
        breaks: `An access-control system enforces its own rules mechanically and in real time; a board is **humans who can rubber-stamp.** Nothing physically stops a disengaged board from approving whatever the executive puts in front of it — the "gate" only works if the fiduciaries actually exercise the duties. And board authority is **collective**: no single trustee is an admin who can act alone, unlike a person holding a root credential. The control is social and retrospective, so its strength depends entirely on the culture of the people staffing it.`,
      },
      workedExample: `The **Wikimedia Foundation Board of Trustees** is a useful illustration (structure only, illustrative and not a current legal opinion): a governing board that sits above the paid executive team, holds fiduciary responsibility for the mission, and famously includes seats filled through community-involved processes alongside appointed ones. The important structural fact is the separation — the trustees govern (set direction, oversee the CEO, guard the mission) while employees run the wikis day to day. Even the movement's founder does not personally control the Foundation; he holds a board seat among peers. That is the fiduciary pattern working exactly as intended: the person most associated with the org still answers to a body whose duty runs to the mission, not to him.`,
      branch: {
        scenario: `You founded a nonprofit and chair its board. The executive director (whom you hired) proposes a big grant from a funder who wants the program redesigned in a way you privately think drifts from the mission — but the money would double your budget. Two other board members are personal friends who will vote however you tell them. How should the board handle this? (Educational only.)`,
        choices: [
          {
            label: 'Whip your two friends to approve it quickly — you need the money and you control the votes.',
            correct: false,
            consequence: `**Instructive miss.** You just converted the board into a rubber stamp and breached the spirit of all three duties: no genuine care (no real deliberation), strained loyalty (using controlled votes for a call you privately doubt), and a possible obedience problem (mission drift). A board that votes on friendship instead of fiduciary judgment provides zero oversight — which is the one thing it exists to provide.`,
          },
          {
            label: 'Surface your mission concern openly, have the board deliberate on the record, and let independent judgment — not loyalty to you — decide.',
            correct: true,
            consequence: `**Correct.** The duty of care demands real deliberation; the duty of obedience demands the board weigh the mission-drift risk explicitly, not bury it under the budget upside. That may still end in "yes, with guardrails," but it must be a genuine fiduciary decision. The point of a board is that even the founder's preferred outcome gets tested against the mission by independent minds.`,
          },
          {
            label: 'Recuse the whole board and let the executive director decide alone — they run operations.',
            correct: false,
            consequence: `**Instructive miss.** This inverts governance and management. Accepting a mission-altering, budget-doubling grant is precisely a **board-level** decision — a privileged operation that must clear the oversight layer. Handing it to staff removes the fiduciary check exactly where it matters most.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Map each fact pattern to the fiduciary duty it most directly implicates (US framing; illustrative).',
          buckets: ['Duty of care', 'Duty of loyalty', 'Duty of obedience'],
          items: [
            { text: 'A trustee skips every meeting and never reads the financials', bucket: 'Duty of care' },
            { text: 'A trustee votes on a contract with their own company without recusing', bucket: 'Duty of loyalty' },
            { text: 'The board quietly redirects the charity into activities outside its stated exempt purpose', bucket: 'Duty of obedience' },
            { text: 'A trustee approves a major budget without asking a single question about it', bucket: 'Duty of care' },
            { text: 'A trustee steers a grant to a personal friend for private benefit', bucket: 'Duty of loyalty' },
          ],
          explain: 'Care = attention and informed judgment; loyalty = the org over personal interest, disclose and recuse; obedience = stay true to the mission and the law. Most real disputes are one of these three wearing different clothes.',
        },
      ],
      tutorHooks: [
        { label: 'How should I compose my first board?', kind: 'ask', question: 'Given my mission, what independent skills and perspectives should my founding board have so it can actually exercise care, loyalty, and obedience rather than rubber-stamp me? Educational, not advice.' },
        { label: 'Harder: conflicted-founder scenarios', kind: 'harder', concept: 'managing founder power on a board without breaching the duty of loyalty' },
        { label: 'Critique my governance instincts', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A board member consistently attends meetings but never reads the financial reports before approving budgets. Which duty is most at risk?',
          options: ['Duty of loyalty', 'Duty of care', 'Duty of obedience', 'None — attendance is enough'],
          answer: 1,
          explain: 'Duty of care requires informed, attentive judgment — not just physical presence. Approving budgets without reading them is the classic care failure.',
        },
        {
          kind: 'mcq',
          prompt: 'Why do nonprofit founders "answer to a board" in a way startup founders often do not answer to anyone?',
          options: [
            'Because nonprofits have shareholders who elect the founder',
            'Because a nonprofit has no owners, so a fiduciary board holds it in trust for the public and can oversee or replace leadership',
            'Because founders are legally barred from serving on the board',
            'Because staff, not the board, control the mission',
          ],
          answer: 1,
          explain: 'With no owners, accountability runs through a fiduciary board that governs on behalf of the public/mission. It can hire and fire the executive — including a founder — which is the structural accountability charities are built on.',
        },
        {
          kind: 'free',
          prompt: 'Describe one decision in YOUR nonprofit that should require board authorization (not staff discretion), and explain which fiduciary duty makes it a board-level call. (Educational framing only.)',
          rubric: 'Strong answer: (1) picks a genuinely high-blast-radius decision (executive hire/fire, budget approval, mission change, major obligation/related-party deal); (2) correctly ties it to a duty (care/loyalty/obedience); (3) shows understanding that the board governs and staff manage; (4) frames the board as real oversight, not a rubber stamp.',
        },
      ],
      commitSummary: 'concept only — no artifact; board design is yours to draft with counsel.',
    },

    // -----------------------------------------------------------------------
    {
      id: '107.3',
      module: 107,
      title: 'Governance vs management',
      estMinutes: 13,
      prerequisites: ['107.1', '107.2'],
      artifactSlot: null,
      concept: `> **Educational, not legal or tax advice; jurisdiction-dependent; consult a professional.**

The single most common nonprofit dysfunction is not fraud — it is **the board and the staff doing each other's jobs.** The clean division:

- **The board governs.** Direction (mission, strategy, big commitments), oversight (is the org solvent, legal, and on-mission), and the one operational lever it truly owns: hiring, evaluating, and if necessary replacing the chief executive.
- **The staff manage.** Execution — running programs, hiring the team, spending within the approved budget, making the thousand daily decisions that a board could never and should never touch.

Two failure modes sit on either side of that line:

- **The board in the weeds** — trustees micromanaging program details, editing the newsletter, second-guessing hires three levels down. This starves the board of time for actual oversight and demoralizes staff who now have a dozen part-time bosses.
- **The rubber-stamp board** — trustees who approve whatever the executive presents without scrutiny. Here the oversight layer exists on the org chart but performs no checks; the executive is effectively unaccountable.

Both are the same underlying error: **the boundary between the two layers has broken down.** Good governance is a discipline of staying on your side of the interface — the board sets what and why; the staff owns how.`,
      reframe: {
        analogy: `Governance and management are **two layers separated by an interface, and the health of the org is the health of that boundary — classic separation of concerns.** The board is the policy/interface layer: it defines the contract (mission, budget envelope, the executive it will hold responsible) and inspects the outputs. Staff are the implementation layer behind the interface, free to choose *how* as long as they honor the contract. A board in the weeds is a caller reaching past the interface to rewrite the implementation's internals — it couples the layers and breaks encapsulation. A rubber-stamp board is the interface accepting every return value without validating it. Either way the abstraction boundary has leaked, and leaked boundaries are where systems rot.`,
        breaks: `Software layers have a *formally specified* interface the compiler enforces; the board/staff boundary is a **norm, not a type signature.** Where "governance" ends and "management" begins is genuinely fuzzy at the margins (is setting executive pay governance or operations?), and reasonable orgs draw the line in slightly different places. There is no linker error when a trustee oversteps — only culture, a strong board chair, and a clear delegation policy keep the layers honest.`,
      },
      workedExample: `A well-run foundation such as the **Mozilla Foundation** illustrates the boundary (structure only, illustrative): a board that governs the mission and holds the executive accountable, and a paid leadership team that manages the programs, products, and staff day to day. The trustees do not decide which features ship or who gets hired onto the engineering team — that is squarely management. Their job is to ensure the organization stays solvent, lawful, and true to its open-internet mission, and to hire/evaluate the person who runs it. When the layers hold, the board's scarce meeting time goes to oversight that only it can do, and staff get the autonomy to actually execute. The dysfunction to avoid is the inverse: a board relitigating operational choices while no one is minding solvency and mission.`,
      branch: {
        scenario: `Your nonprofit's board meeting agenda keeps filling up with operational items: the wording of a fundraising email, which vendor to use for T-shirts, whether a junior hire should be full-time. Meanwhile the board has not reviewed the org's cash position in two quarters. What is the correct governance fix? (Educational only.)`,
        choices: [
          {
            label: 'Keep the operational items — engaged boards should be in the details — and add finance when there is time.',
            correct: false,
            consequence: `**Instructive miss.** This is the board-in-the-weeds failure. Every minute spent on T-shirt vendors is a minute not spent on the oversight (solvency, legal, mission) that *only* the board can perform. "Engaged" is not the same as "in the details"; here engagement has crossed the interface and abandoned the board's actual job.`,
          },
          {
            label: 'Delegate the operational decisions to the executive, and restructure the agenda around oversight: finances, risk, mission, and executive performance.',
            correct: true,
            consequence: `**Correct.** Push execution back to the layer that owns it (staff, via the executive) and reclaim the board's scarce time for what only it can do. A standing agenda anchored on solvency, compliance, mission, and executive oversight restores the separation of concerns. The board sets what and why; staff own how.`,
          },
          {
            label: 'Have the board take over finances directly by managing the bank accounts itself.',
            correct: false,
            consequence: `**Instructive miss.** Overcorrecting into the *other* layer. Reviewing and overseeing the finances is governance; personally operating the bank accounts is management. The board should demand clear financial reporting and hold the executive accountable for the numbers — not seize the operational controls.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each responsibility to the layer that should own it: the BOARD (governs) or the STAFF (manages).',
          buckets: ['Board (governs)', 'Staff (manages)'],
          items: [
            { text: 'Approving the annual budget envelope', bucket: 'Board (governs)' },
            { text: 'Hiring, evaluating, and if needed replacing the chief executive', bucket: 'Board (governs)' },
            { text: 'Ensuring the org stays solvent, lawful, and on-mission', bucket: 'Board (governs)' },
            { text: 'Choosing the email vendor and writing the newsletter copy', bucket: 'Staff (manages)' },
            { text: 'Hiring a junior program coordinator', bucket: 'Staff (manages)' },
            { text: 'Deciding day-to-day spending within the approved budget', bucket: 'Staff (manages)' },
          ],
          explain: 'The board owns direction, oversight, and the executive relationship; staff own execution. When these mix, you get either a board in the weeds or a rubber stamp — both a broken interface.',
        },
        {
          kind: 'scenario',
          title: 'Reading the boundary in real time',
          intro: 'A single board meeting produces three moments. For each, decide whether the board is respecting the governance/management interface or breaching it. (Educational framing.)',
          decisions: [
            {
              situation: 'A trustee proposes the board personally rewrite the program manager\'s weekly schedule.',
              options: [
                { label: 'Breach — that is management', correct: true, outcome: 'Right. Scheduling staff is execution; a trustee reaching into it couples the layers and undermines the executive.' },
                { label: 'Fine — boards should optimize operations', correct: false, outcome: 'No — this is the board-in-the-weeds failure; it steals time from real oversight.' },
              ],
            },
            {
              situation: 'The board asks the executive for a quarterly report on cash runway and program outcomes, then discusses the risks.',
              options: [
                { label: 'Respecting the interface — this is oversight', correct: true, outcome: 'Correct. Demanding reporting and weighing risk is exactly governance; the board inspects outputs without operating the internals.' },
                { label: 'Breach — the board should not see financials', correct: false, outcome: 'No — reviewing finances is core governance; a board that cannot see the numbers cannot oversee anything.' },
              ],
            },
            {
              situation: 'The executive presents a major new multi-year partnership and the board approves it in 30 seconds with no questions.',
              options: [
                { label: 'Breach — rubber-stamping', correct: true, outcome: 'Right. A board-level decision approved without scrutiny is the rubber-stamp failure: the oversight layer performed no check.' },
                { label: 'Fine — trust the executive', correct: false, outcome: 'No — trust does not replace the duty of care; major commitments need genuine deliberation.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Draft a delegation-of-authority sketch', kind: 'ask', question: 'Help me sketch which decisions in my nonprofit belong to the board versus the executive, so the governance/management boundary is explicit. Educational, not advice.' },
        { label: 'Harder: the fuzzy middle', kind: 'harder', concept: 'decisions that legitimately straddle governance and management (executive pay, major risk, reputational calls)' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A board spends its meetings choosing vendors and editing staff emails while never reviewing finances. This is best described as:',
          options: [
            'A healthy, engaged board',
            'The board-in-the-weeds failure: crossing into management and neglecting oversight',
            'A rubber-stamp board',
            'A necessary stage every nonprofit passes through',
          ],
          answer: 1,
          explain: 'Micromanaging operations while neglecting solvency/mission oversight is the board-in-the-weeds dysfunction — a leaked boundary between governance and management.',
        },
        {
          kind: 'mcq',
          prompt: 'Which single operational decision is legitimately the BOARD\'s to make, not the staff\'s?',
          options: [
            'Which caterer to book for an event',
            'Hiring and, if necessary, firing the chief executive',
            'The wording of a fundraising email',
            'Whether a junior coordinator works full-time',
          ],
          answer: 1,
          explain: 'The executive relationship — hiring, evaluating, replacing the CEO — is the one operational lever the board owns. Everything else on that list is management.',
        },
        {
          kind: 'free',
          prompt: 'Name one decision in YOUR nonprofit that sits in the fuzzy middle between governance and management, and argue where you would draw the line and why. (Educational only.)',
          rubric: 'Strong answer: (1) picks a genuinely ambiguous decision (e.g. executive compensation, a large reputational risk, a major partnership); (2) reasons explicitly about the board-governs / staff-manages interface; (3) draws a defensible line and justifies it; (4) shows awareness that the boundary is a norm, not a hard rule, and reasonable orgs differ.',
        },
      ],
      commitSummary: 'concept only — no artifact; your delegation lines are yours to draw.',
    },

    // -----------------------------------------------------------------------
    {
      id: '107.4',
      module: 107,
      title: 'Transparency & accountability',
      estMinutes: 15,
      prerequisites: ['107.1', '107.2', '107.3'],
      artifactSlot: null,
      concept: `> **Educational, not legal or tax advice; jurisdiction-dependent; consult a professional.**

A charity spends money it did not earn from customers — it spends the public's donated trust. So the whole sector runs on **verifiable transparency**: not "trust us," but "here are the filings, check us." The mechanisms (US examples; other countries have equivalents) include:

- **Public filings** — the US **Form 990** is an annual information return that many exempt orgs must file, and, notably, must make publicly available. It exposes revenue, expenses, executive compensation, and program spending to anyone who asks. It is the sector's most-read accountability document.
- **Conflict-of-interest policy** — a written process requiring insiders to disclose conflicts and recuse from tainted decisions, so the duty of loyalty is operationalized rather than assumed.
- **Donor trust as the currency** — donors, watchdog raters, and grantmakers all read these signals. A charity that files late, hides executive pay, or has a stacked insider board is visibly riskier, and the money follows the transparency.

Think of all this as the nonprofit's **public API of accountability**: a stable, published contract of endpoints — the financials, the pay figures, the conflict policy, the mission statement — that any outsider can query to verify the org is what it claims. The org does not get to hand-wave; it exposes the interface and lets the public integrate against it.`,
      reframe: {
        analogy: `Transparency is a **public API with a published, stable contract.** The Form 990 and its equivalents are documented, versioned (annual) endpoints returning structured data — revenue, expense ratios, top compensation, program vs overhead — that donors, raters, and regulators call without needing the org's permission. Donor trust is the **reputation you earn by honoring the contract**: consistent, on-time, non-surprising responses. A conflict-of-interest policy is the **auth-and-audit middleware** that keeps insider requests from privately mutating state. Break the contract — file late, return opaque data, hide a related-party call — and integrators (funders) route around you.`,
        breaks: `A real API returns machine-checked, real-time truth; a 990 is **self-reported, annual, and retrospective.** The numbers are what the org chose to report months after the fact, audited only sometimes, so the "contract" can be honored in letter while obscuring substance (creative expense allocation, buried related parties). Transparency guarantees *availability* of the interface, not the *honesty* of every field — which is why watchdogs, auditors, and an engaged board still matter on top of the public filing.`,
      },
      workedExample: `The **Wikimedia Foundation** again serves as a clean illustration (structure only, illustrative): as a US public charity it files an annual Form 990 that is publicly available, and it also publishes financial statements and annual reports beyond the bare legal minimum. Anyone can look up its revenue, its largest expenses, and its highest-compensated people without asking permission — that is the public API of accountability in action. The strategic lesson for a founder: transparency is not merely a compliance cost, it is a **trust-manufacturing machine.** Orgs that over-deliver on the accountability contract — clear filings, an explicit conflict policy, readable annual reports — convert that openness into donor confidence and watchdog ratings, which is exactly the currency a nonprofit runs on. Contrast a charity that treats its filing as a secret to be minimized: it technically complies but forfeits the trust dividend.`,
      branch: {
        scenario: `A major donor asks to see your nonprofit's most recent financial filing and your conflict-of-interest policy before making a large gift. Your executive director wants to stall because the filing shows a related-party contract (properly disclosed) with a board member's firm. What should the org do? (Educational only.)`,
        choices: [
          {
            label: 'Stall and hope the donor forgets — the related-party contract looks bad out of context.',
            correct: false,
            consequence: `**Instructive miss.** Stalling on a routine transparency request is itself the red flag. A *properly disclosed* related-party contract handled at arm's length is defensible; hiding it converts a survivable fact into an apparent cover-up. Watchdogs and sophisticated donors read evasiveness as risk faster than they read a documented conflict.`,
          },
          {
            label: 'Provide the filing and the conflict policy promptly, and explain how the related-party contract was disclosed, priced at fair value, and approved with recusal.',
            correct: true,
            consequence: `**Correct.** The transparency contract works *because* you can show the messy parts were handled correctly. Providing the public filing (it is public anyway), the written conflict policy, and the story of proper disclosure and recusal turns a scary-looking line item into evidence your governance functions. That is precisely what earns the large gift.`,
          },
          {
            label: 'Refuse — donors have no right to internal documents.',
            correct: false,
            consequence: `**Instructive miss.** The core filing (e.g. a Form 990) is generally *public* by law — refusing does not hide it and signals you have something to conceal. Beyond the legal minimum, voluntary openness is the trust currency of the sector; a flat refusal forfeits both the gift and your reputation.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'As an illustrative US example, an exempt organization that files a Form 990 must generally make its returns from roughly how many of its most recent years available for public inspection? (Enter the number of years; jurisdictions and details differ — educational only.)',
          answer: 3,
          tolerance: 0,
          unit: 'years',
          explain: 'In the US, the three most recent annual Form 990 returns are generally subject to public inspection. The exact rule is jurisdiction- and form-dependent — the durable point is that these filings are public, not private.',
        },
        {
          kind: 'rank',
          prompt: 'Rank these accountability signals from STRONGEST public trust signal (top) to WEAKEST (bottom), as an outsider would read them.',
          items: [
            'A publicly available annual financial filing (e.g. Form 990) with clear expense breakdown',
            'A written, enforced conflict-of-interest policy with documented recusals',
            'A published plain-language annual report going beyond the legal minimum',
            'A verbal assurance from the founder that "the money is well spent"',
          ],
          explain: 'Verifiable, public, structured disclosure outranks softer signals; an unverifiable verbal assurance is the weakest. The pattern: the more independently checkable the signal, the more trust it carries.',
        },
      ],
      tutorHooks: [
        { label: 'What should my public accountability look like?', kind: 'ask', question: 'Given my nonprofit and country, what public filings and voluntary transparency practices should I plan for to build donor trust? Frame it as educational, not advice.' },
        { label: 'Harder: reading a real 990', kind: 'harder', concept: 'interpreting expense ratios, executive compensation, and related-party disclosures on a nonprofit information return' },
        { label: 'Critique my transparency plan', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'In the US example, the Form 990 is best understood as:',
          options: [
            'A confidential tax return seen only by the government',
            'A publicly available annual information return exposing finances, compensation, and program spending',
            'An optional marketing document',
            'A document only donors above a certain amount may request',
          ],
          answer: 1,
          explain: 'The 990 is an information return that is generally public — the sector\'s most-read accountability document, readable by any donor, watchdog, or journalist.',
        },
        {
          kind: 'mcq',
          prompt: 'A donor reads two charities: one publishes clear filings, executive pay, and a conflict policy; the other says only "trust us, the money is well spent." The transparency framing predicts:',
          options: [
            'Both are equally trustworthy since intentions are what matter',
            'The verifiable, publicly-filed org is the stronger trust signal because its claims are independently checkable',
            'The opaque org is safer because it reveals less to competitors',
            'Transparency is irrelevant to donor decisions',
          ],
          answer: 1,
          explain: 'The whole sector runs on verifiable transparency: checkable public signals beat unverifiable assurances. The money follows the org whose accountability contract can actually be queried.',
        },
        {
          kind: 'free',
          prompt: 'Describe YOUR nonprofit\'s "public API of accountability": which signals (filings, conflict policy, annual report, pay disclosure) would you expose, and how would that build donor trust? (Educational only.)',
          rubric: 'Strong answer: (1) names concrete, verifiable transparency mechanisms appropriate to their jurisdiction (public filing, conflict-of-interest policy, annual report, compensation disclosure); (2) explains the link between checkable disclosure and donor/watchdog trust; (3) uses the public-API/contract framing or equivalent; (4) acknowledges that public filing is a floor and voluntary openness is the trust dividend, with jurisdiction-dependence noted.',
        },
      ],
      commitSummary: 'concept only — no artifact; your accountability practices are yours to build with counsel.',
    },
  ],
}
