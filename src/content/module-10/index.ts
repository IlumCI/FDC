import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 10 — Fundraising & capital
//
// The decision module: whether, when, and how to raise. It treats financing as
// choosing a dependency with terms (10.1), teaches the cap table as an
// ownership ledger and dilution as arithmetic (10.2), demystifies SAFEs and
// pre/post-money valuation as pure algebra (10.3), and closes on what
// investors actually underwrite — the fundable narrative as a proof
// obligation — where the learner commits a capital decision to
// startup.capital (10.4). Meridian's thin 1.69× ratio from Module 5 is the
// running honesty check: the metrics need fixing before they are fundable.
// ===========================================================================

export const module10: Module = {
  id: 10,
  title: 'Fundraising & capital',
  goal: 'Decide whether, when, and how to raise money — and understand the instruments.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '10.1',
      module: 10,
      title: 'Financing as choosing a dependency with terms',
      estMinutes: 14,
      prerequisites: [],
      artifactSlot: null,
      concept: `Every dollar you bring into the business arrives **attached to terms**. There is no free capital, only capital whose price is paid in different currencies: interest, ownership, or your own time and constraint. Three sources dominate.

- **Debt** — you borrow and repay with interest. The lender has no claim on your upside beyond the agreed rate, but repayment is **non-negotiable** and often **secured** against assets. Miss payments and they can force default.
- **Equity** — you sell a permanent slice of ownership. No repayment schedule, but you have handed over a share of every future dollar *and* a voice in governance. This dependency never expires.
- **Bootstrapping** — you fund growth from revenue and founders' savings. No external claim at all, but you are rate-limited to the cash the business itself throws off, and you personally absorb the risk.

The right frame for an engineer: **money is a dependency you take on, and every dependency has a coupling cost.** Debt is tight coupling on *cash flow* — rigid, predictable, unforgiving of a bad month. Equity is tight coupling on *control and upside* — flexible on cash, permanent on ownership. Bootstrapping is the zero-dependency path, and like avoiding a library you could have used, its cost is the speed and capability you forgo.

The question is never "should I get money?" It is "which coupling can this business survive, and which price am I actually willing to pay?"`,
      reframe: {
        analogy: `Picking a financing source is like **adding a dependency to your system**. Debt is a library with a hard **SLA**: it does exactly one thing, the contract is explicit, and it will page you at 3am if you miss a payment — rigid but predictable. Equity is more like taking on a **co-maintainer with commit rights**: no invoice ever arrives, but they now share ownership of the codebase and get a say in its direction, forever. Bootstrapping is the **"write it yourself, no dependencies"** choice: maximum control, zero external claims, but you are capped at the throughput of your own team.

In every case you are trading **autonomy for capability**, exactly as you do when you pull in a package instead of hand-rolling. The interesting engineering question is the same too: what is the *coupling*, and can you tolerate it under stress?`,
        breaks: `A software dependency you can usually **rip out and replace** — swap the library, fork it, vendor it. Financing dependencies are far stickier. You cannot un-sell equity: once an investor owns 15%, you do not get it back without buying them out at a higher price. Debt can sometimes be refinanced, but rarely on your schedule and never during the bad month when you most want to. And a co-maintainer analogy undersells governance: an equity holder can have **contractual veto rights** over decisions a mere contributor never would. Treat the analogy as intuition for *coupling*, not for *reversibility* — financing is a dependency you mostly cannot roll back.`,
      },
      workedExample: `**Meridian** needs about $200,000 to fund a year of two engineers while it fixes its unit economics. Consider the same amount three ways.

- **Debt:** A venture lender offers $200,000 at 12% over 3 years. Monthly repayment is roughly $6,600 — a fixed draw against a company whose contribution margin is only $31 per customer. At Meridian's ~40 customers that is $1,240/mo of CM against a $6,600/mo obligation. The debt would *consume* the business. Debt suits predictable cash flows; Meridian does not have them yet.
- **Equity:** An angel offers $200,000 for a slice of the company. No monthly drain, and the investor is motivated to help — but Meridian permanently gives up ownership and gains a stakeholder in every future decision. The exact slice is a valuation question (lessons 10.2–10.3).
- **Bootstrap:** Meridian keeps all ownership and takes no obligation, but $200,000 from revenue at $31 CM/customer is a *long* accumulation. It buys time to fix the 1.69× ratio without a clock, at the cost of speed.

The lesson is not "equity wins." It is that Meridian's **weak, unpredictable cash flow rules debt out**, and the real choice is between the speed of equity and the control of bootstrapping — a choice you cannot make well until the unit economics are fixed.`,
      branch: {
        scenario: `Meridian's founder is offered a $200,000 bank loan and a $200,000 angel equity investment on the same day. The company has thin, lumpy revenue (CM $31/customer, ~40 customers) and an unproven retention curve. The founder hates dilution and leans toward the loan "to keep 100% of the company." What is the right read?`,
        choices: [
          {
            label: 'Take the loan — avoiding dilution always maximizes founder value.',
            correct: false,
            consequence: `**Instructive miss.** Dilution aversion is reasonable, but debt is a claim on **cash you do not reliably have**. A fixed ~$6,600/mo repayment against $1,240/mo of contribution margin is a solvency risk that no amount of retained ownership offsets — owning 100% of an insolvent company is worth zero. Debt is priced in cash-flow coupling, and Meridian cannot service it yet.`,
          },
          {
            label: 'Prefer equity here: the business cannot yet service fixed debt, so trading some ownership buys survival room without a repayment clock.',
            correct: true,
            consequence: `**Correct.** Match the financing to the cash flow. Meridian's revenue is too thin and too unpredictable to carry a rigid repayment schedule, so debt's coupling is the dangerous one right now. Equity's price — permanent ownership and a governance voice — is real, but it does not threaten solvency in a bad month. The founder's instinct to protect ownership is valid; it is just outweighed by the coupling debt imposes on a pre-product-market-fit cash flow.`,
          },
          {
            label: 'Take both — more runway is strictly better.',
            correct: false,
            consequence: `**Instructive miss.** Stacking a fixed-repayment dependency *on top of* an equity sale gives you the worst coupling of each: you still dilute, and you still owe $6,600/mo the business cannot cover. Runway is not "strictly better" when part of it arrives with a claim that can force default. Capital is a dependency; taking two of them does not halve the coupling, it adds them.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Which source fits my cash flow?', kind: 'ask', question: 'Given my pricing, contribution margin, and how lumpy my revenue is, walk through whether debt, equity, or bootstrapping fits my situation best right now — and name the coupling cost I would be signing up for.' },
        { label: 'Harder: blended financing', kind: 'harder', concept: 'venture debt layered on top of an equity round and the combined coupling on cash flow and ownership' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A pre-revenue startup with unpredictable cash flow is choosing between a bank loan and an equity round for the same amount. Which factor most argues against the loan?',
          options: [
            'Loans always cost more than equity in the long run',
            'Debt requires fixed repayments the company may be unable to service from unreliable cash flow',
            'Equity investors never expect a return',
            'Debt dilutes ownership more than equity does',
          ],
          answer: 1,
          explain: 'Debt couples tightly to **cash flow**: repayments are due on schedule regardless of a bad month. A company with unreliable cash flow risks default. Debt does not dilute ownership at all — that is equity — and equity investors very much expect a return.',
        },
        {
          kind: 'mcq',
          prompt: 'Bootstrapping is best described as:',
          options: [
            'Free capital with no cost of any kind',
            'The zero-external-dependency path: maximum control, but rate-limited to the cash the business generates',
            'A form of debt with deferred interest',
            'Always the wrong choice once outside money is available',
          ],
          answer: 1,
          explain: 'Bootstrapping takes on no external claim — no repayment, no dilution — but its cost is real: you are limited to the throughput of your own revenue and savings. It trades speed for control, which is a genuine cost, not "free."',
        },
        {
          kind: 'free',
          prompt: 'For YOUR company, describe your current cash-flow profile (how predictable, how thick your margin) and argue which financing dependency — debt, equity, or bootstrapping — you could actually survive right now. Name the specific coupling cost you would be accepting.',
          rubric: 'Strong answer: (1) characterizes the learner\'s real cash-flow predictability and margin (ideally referencing their unit economics); (2) maps that to a financing source using the coupling frame — debt = cash-flow coupling, equity = control/ownership coupling, bootstrap = throughput limit; (3) explicitly names the price being paid in the recommended path; (4) avoids treating any source as "free" or dilution-avoidance as automatically correct.',
        },
      ],
      commitSummary: 'concept only — you commit your capital decision in lesson 10.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '10.2',
      module: 10,
      title: 'Cap tables & dilution as ownership accounting',
      estMinutes: 16,
      prerequisites: ['10.1'],
      artifactSlot: null,
      concept: `A **cap table** (capitalization table) is nothing more exotic than a **ledger of who owns what**. Each row is a shareholder; each holds some number of shares; ownership percentage is that holder's shares divided by the **total shares outstanding**. That denominator is the entire game.

$$\\text{ownership \\%} = \\frac{\\text{your shares}}{\\text{total shares outstanding}}$$

**Dilution** is what happens when the denominator grows. When the company issues *new* shares — to an investor, or into an option pool — everyone who does not receive new shares sees their percentage fall, even though their **share count never changed**. You did not lose shares; the pie got more slices.

Two facts engineers routinely get wrong:

- **Dilution is not theft.** If new shares are issued in exchange for money or talent that grows the whole pie, a smaller slice of a bigger pie can be worth more in absolute dollars. The question is always *what the new shares bought*.
- **Percentages only compare against a stated denominator.** "I own 10%" is meaningless without "of what?" — fully-diluted (counting all options and convertibles) or issued-only. Founders get burned confusing the two.

The **option pool** is a block of shares set aside, unissued, to hire and retain employees. Critically, investors usually insist the pool be created **before** their money goes in, which means the pool dilutes founders, not the new investor — a subtle term with real cost, covered in the worked example.`,
      reframe: {
        analogy: `A cap table is a **reference-counted ownership object**, and total shares outstanding is the **denominator every percentage is computed against**. Issuing new shares is like every existing holder's fraction being recomputed against a larger total — nobody's numerator (share count) changed, but everyone's normalized share dropped. Dilution is just **re-normalization after the denominator grows**.

The option pool is a **pre-allocated block** reserved off the top — like reserving capacity in a buffer before you start writing to it. Where in the sequence you reserve it decides whose allocation it comes out of.`,
        breaks: `Reference counting is mechanical and value-neutral — a count is a count. Ownership is not: two holders with identical percentages can have **wildly different rights** attached. Preferred shares carry liquidation preferences, pro-rata rights, and vetoes that common shares do not, so "10% is 10%" is false in a way that "1 ref is 1 ref" never is. The cap table tells you *how much* you own; it does not, by itself, tell you *what that ownership can do* — that lives in the term sheet. Percentage is the headline; the rights are the fine print, and the fine print frequently matters more.`,
      },
      workedExample: `**Meridian** starts clean: the two founders split **1,000,000 shares** 50/50 — 500,000 each, 100% between them.

An angel invests for **20%** of the company post-investment, and — standard term — requires a **10% option pool** created *pre-money* (before the money goes in). Watch the order of operations, because it is where founders lose points they never see coming.

**Step 1 — carve the pool pre-money.** The pool must be 10% of the *post-financing* company, established before the raise. Working the algebra so the pool is 10% and the investor is 20% of the final total, the final share count lands at **1,428,571 shares**, allocated:

| Holder | Shares | Ownership |
|---|---|---|
| Founder A | 500,000 | 35.0% |
| Founder B | 500,000 | 35.0% |
| Option pool | 142,857 | 10.0% |
| Angel | 285,714 | 20.0% |
| **Total** | **1,428,571** | **100%** |

The founders went from 50% each to **35% each**. Of that 30 points of combined dilution, 20 points went to the investor (who paid for it) and **10 points went to fund the option pool** — and because the pool was carved *pre-money*, that 10% came **entirely out of the founders**, not shared with the angel. Had the pool been created *post-money*, the angel would have shared in funding it and the founders would have kept more.

**The takeaway:** the *pool-timing term* is worth real ownership. Same headline ("20% to the investor, 10% pool"), materially different founder outcome depending on one word — "pre" versus "post."`,
      branch: {
        scenario: `A term sheet gives an investor 20% for their money and specifies a 10% option pool. The founder sees "20% + 10%" and assumes they are giving up 30% total, split proportionally. The investor's lawyer has written the pool as **pre-money**. What actually happens to the founders' ownership?`,
        choices: [
          {
            label: 'Founders give up 30%, and the investor shares in funding the option pool.',
            correct: false,
            consequence: `**Instructive miss.** That is the *post-money* pool outcome, not what this term sheet says. When the pool is **pre-money**, it is carved out of the pre-investment company — which is entirely the founders' — so the investor's stake is calculated *after* the pool already exists. The investor does **not** help fund the pool; the founders absorb all 10 points of it.`,
          },
          {
            label: 'The founders absorb the full option pool themselves; the pre-money placement shifts that 10% off the investor and onto them.',
            correct: true,
            consequence: `**Correct.** "Pre-money pool" is one of the most quietly expensive terms in a seed deal. Placing the pool before the money means it dilutes the pre-money holders — the founders — while the investor's 20% is measured against the post-pool total. Same two numbers on the page, but the founders end up several points lower than the naive "we split 30%" intuition. Always ask whether a pool is pre- or post-money; it is a real transfer of ownership.`,
          },
          {
            label: 'The option pool has no effect on founders until shares are actually granted to employees.',
            correct: false,
            consequence: `**Instructive miss.** The dilution happens when the pool is **created**, not when it is granted. Reserving the shares expands total shares outstanding immediately, re-normalizing everyone's percentage that moment. Unissued pool shares still sit in the denominator, so the founders' percentage drops the day the pool is established.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Build my cap table', kind: 'ask', question: 'Help me lay out a simple cap table for my company: my founders and their splits, then walk through what a round of the size I am considering would do to each row.' },
        { label: 'Pre- vs post-money pool on my numbers', kind: 'ask', question: 'Take my planned raise and option pool size, and show me the founder ownership difference between carving the pool pre-money versus post-money. Use my actual numbers.' },
        { label: 'Harder: multi-round dilution', kind: 'harder', concept: 'stacking dilution across a seed and a Series A, tracking founder ownership through both rounds' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A founder owns 600,000 of 1,000,000 shares (60%). The company issues 500,000 new shares to an investor. The founder\'s share count and ownership are now:',
          options: [
            '600,000 shares, 60% — issuing shares does not affect existing holders',
            '600,000 shares, 40% — the denominator grew to 1,500,000',
            '400,000 shares, 40% — the founder\'s shares were reduced',
            '1,100,000 shares, 60% — the founder receives a proportional share of the new issue',
          ],
          answer: 1,
          explain: 'Dilution grows the denominator, not your numerator. The founder still holds 600,000 shares, but total shares outstanding rose to 1,500,000, so ownership = 600,000 / 1,500,000 = **40%**. Your share count is untouched; the pie got more slices.',
        },
        {
          kind: 'mcq',
          prompt: 'Why does an investor typically prefer the option pool to be created pre-money?',
          options: [
            'It gives employees more shares than a post-money pool would',
            'It shifts the dilution from the pool onto the founders rather than being shared with the investor',
            'Pre-money pools are legally required by most jurisdictions',
            'It reduces the total number of shares outstanding',
          ],
          answer: 1,
          explain: 'A pre-money pool is carved out of the pre-investment (founder-owned) company, so the founders absorb that dilution while the investor\'s percentage is measured against the post-pool total. It is a subtle transfer of ownership from founders to the deal, which is exactly why investors ask for it.',
        },
        {
          kind: 'free',
          prompt: 'Write out your starting cap table (founders and splits). Then take a raise you might do and compute what percentage each founder ends up with, being explicit about whether any option pool is pre- or post-money and who absorbs it.',
          rubric: 'Strong answer: (1) states a concrete starting cap table with share counts or percentages; (2) applies dilution correctly — new shares grow the denominator, existing share counts unchanged; (3) explicitly handles the option pool timing (pre vs post money) and correctly identifies who absorbs it; (4) reports final ownership percentages that sum to 100% and are arithmetically consistent.',
        },
      ],
      commitSummary: 'concept only — the capital decision is committed in lesson 10.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '10.3',
      module: 10,
      title: 'SAFEs, valuations & pre/post-money as arithmetic',
      estMinutes: 15,
      prerequisites: ['10.2'],
      artifactSlot: null,
      concept: `Valuation vocabulary sounds like finance mystique. It is arithmetic. Two definitions and one identity carry almost everything.

$$\\text{post-money} = \\text{pre-money} + \\text{amount raised}$$

$$\\text{investor ownership \\%} = \\frac{\\text{amount invested}}{\\text{post-money valuation}}$$

That is the whole core. **Pre-money** is what you claim the company is worth *before* the new cash; **post-money** is that plus the cash, because the moment the money hits the bank it is genuinely part of the company's value. The investor's slice is what they put in divided by what the company is worth *after* they put it in — never the pre-money, a common and costly slip.

A **SAFE** (Simple Agreement for Future Equity) is an instrument that takes money **now** and converts to shares **later**, at the next priced round, instead of pricing the company today. It exists because pricing a very early company is guesswork, and a SAFE lets you defer that fight. Two terms shape how a SAFE converts:

- **Valuation cap** — a *ceiling* on the price the SAFE converts at. If the priced round values the company above the cap, the SAFE investor converts as if the valuation were the cap — rewarding them for early risk with a bigger slice.
- **Discount** — a percentage off the priced-round price (say 20%), so the early money buys shares cheaper than the new money.

When a SAFE has both, the investor gets the **better of the two** at conversion. SAFEs are simple to *sign* and deceptively complex to *stack*: several uncapped or high-cap SAFEs can dilute founders far more than expected when they all convert at once. Simplicity of paperwork is not simplicity of outcome.`,
      reframe: {
        analogy: `Pre-money and post-money are just a **variable before and after an assignment**. The raise is the statement \`value = value + cash\`: post-money is the value *after* the write, pre-money the value *before* it. Investor ownership is always computed against the **post-assignment** value, because that is the state of the object once the money is in.

A SAFE is a **promise to resolve later** — a deferred binding. You take the money now but leave the price *unresolved*, and it gets its final value at the next priced round when the actual valuation is known. The **cap** and **discount** are guard clauses on that deferred resolution: whichever gives the early investor the better price is the one that fires.`,
        breaks: `The assignment analogy makes valuation feel deterministic; it is anything but. Pre-money is not a *measured* quantity like a variable's value — it is a **negotiated claim**, closer to a bid than a fact, and two investors can rationally price the same company very differently. And a deferred binding in code resolves to exactly one value; **stacked SAFEs** resolve *together* and interact — multiple caps and discounts converting at the same priced round compound dilution in ways the founder rarely models when signing each one in isolation. The math per SAFE is clean; the *aggregate* across many SAFEs is where founders get surprised. Resolve them as a set, not one at a time.`,
      },
      workedExample: `**Meridian** raises **$500,000** on a SAFE, and separately we can sanity-check a priced framing.

**Priced-round framing first.** Suppose an investor puts in $500,000 at a **$2M pre-money** valuation.

$$\\text{post-money} = 2{,}000{,}000 + 500{,}000 = \\$2{,}500{,}000$$
$$\\text{investor ownership} = \\frac{500{,}000}{2{,}500{,}000} = 20\\%$$

Clean: post is pre plus raise, ownership is invested over post. Note the trap — dividing by the *pre-money* would give 25%, over-crediting the investor by a full 5 points. Always divide by post.

**Now the SAFE.** Meridian instead takes the $500,000 on a SAFE with a **$2M valuation cap** and a **20% discount**, deferring the price. A year later Meridian raises a priced Series A at a **$5M pre-money** valuation. How does the SAFE convert?

- **Via the cap:** the SAFE converts as if the valuation were $2M, not $5M. Effective ownership on the $500,000 is about $500,000 / (2M + new money) — the cap lets the early investor convert at the far lower $2M price, buying materially more shares.
- **Via the discount:** 20% off the $5M-round price converts as if the valuation were $4M.

The investor takes the **better of the two**, which here is clearly the **cap** ($2M beats $4M for the buyer). Because the company grew from a $2M-cap world to a $5M priced round, the SAFE holder is rewarded for early risk: their $500,000 buys roughly the shares that $500,000 would have bought at a $2M valuation — about **2.5× more shares** than the new Series A money gets per dollar. That extra slice is dilution the founders granted, in exchange for capital a year earlier when it was riskier. The arithmetic is simple; the *lesson* is that a cap set today prices risk you will feel at conversion.`,
      branch: {
        scenario: `Meridian took $500,000 on a SAFE with a **$2M cap** and a **20% discount**. The next priced round comes in at a **$5M pre-money** valuation. The founder needs to know which term governs the SAFE's conversion and why it matters.`,
        choices: [
          {
            label: 'The discount governs: 20% off $5M means it converts at $4M.',
            correct: false,
            consequence: `**Instructive miss.** The discount *is* one option — it would convert the SAFE at an effective $4M — but the SAFE holder gets the **better of cap and discount**, and the $2M cap beats the $4M discounted price for the buyer. When the round price rises well above the cap, the cap almost always wins. You would under-count the SAFE holder's slice by pricing off the discount.`,
          },
          {
            label: 'The cap governs: it converts as if the valuation were $2M, giving the SAFE holder a larger slice than the new money for the same dollars.',
            correct: true,
            consequence: `**Correct.** With a $5M round far above the $2M cap, the cap is the more favorable term, so the SAFE converts at the $2M price. The early investor's $500,000 therefore buys roughly 2.5× the shares per dollar that the Series A investors get — their reward for taking the risk a year earlier. The founder must model this as **real dilution granted at signing**, not as a footnote that surfaces only at conversion.`,
          },
          {
            label: 'Neither — the SAFE converts at the full $5M round price like everyone else.',
            correct: false,
            consequence: `**Instructive miss.** Then the cap and discount would be meaningless, and no early investor would accept a SAFE. The entire point of those terms is to price the early risk *below* the future round: the SAFE holder converts at the more favorable of cap or discount, here the $2M cap — never at the full round price.`,
          },
        ],
      },
      artifact: undefined,
      tutorHooks: [
        { label: 'Model my SAFE conversion', kind: 'ask', question: 'I am considering raising on a SAFE with a cap and discount. Given a raise amount and a plausible next-round valuation, show me how it converts and how much it dilutes my founders.' },
        { label: 'Pre vs post-money on my raise', kind: 'ask', question: 'For the amount I want to raise and the valuation I have in mind, compute post-money and the investor\'s ownership percentage, and show me the error if I had divided by pre-money instead.' },
        { label: 'Harder: stacked SAFEs', kind: 'harder', concept: 'multiple SAFEs with different caps converting at one priced round and the compounded founder dilution' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'An investor puts in $1M at a $4M pre-money valuation. What is their ownership percentage?',
          options: [
            '25% — invested divided by pre-money',
            '20% — invested divided by post-money ($5M)',
            '25% — invested divided by post-money',
            '20% — invested divided by pre-money',
          ],
          answer: 1,
          explain: 'Post-money = pre + raise = $4M + $1M = $5M. Ownership = invested / post-money = 1M / 5M = **20%**. Dividing by pre-money ($4M) gives an incorrect 25% and over-credits the investor by 5 points — the classic slip.',
        },
        {
          kind: 'mcq',
          prompt: 'A SAFE has a $3M cap and a 20% discount. The priced round comes in at a $10M pre-money valuation. How does the SAFE most likely convert?',
          options: [
            'At $8M — the 20% discount off the round price',
            'At $10M — the full round price, since caps only apply below the round',
            'At $3M — the cap, because it is far more favorable to the investor than the discount',
            'At $3M plus the 20% discount, i.e. $2.4M',
          ],
          answer: 2,
          explain: 'The SAFE holder gets the better of cap or discount. The discount gives an $8M effective price; the $3M cap is far lower and thus far more favorable to the investor, so the cap governs. You do not stack cap and discount — it is the better of the two, here the $3M cap.',
        },
        {
          kind: 'free',
          prompt: 'For a raise you are considering, pick an amount and a pre-money valuation, compute post-money and the investor\'s ownership. Then reframe it as a SAFE with a cap and discount and describe how it would convert at a plausible next round. Be explicit about which term wins.',
          rubric: 'Strong answer: (1) correctly computes post-money = pre + raise and ownership = invested / post-money (not pre); (2) sets a SAFE cap and discount and identifies, for a stated next-round valuation, which term is more favorable to the investor; (3) explains that the investor takes the better of the two, not both; (4) connects the conversion back to founder dilution rather than treating the SAFE as free or costless.',
        },
      ],
      commitSummary: 'concept only — you commit the capital decision in lesson 10.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '10.4',
      module: 10,
      title: 'What investors underwrite & the raise/bootstrap decision',
      estMinutes: 18,
      prerequisites: ['10.1', '10.2', '10.3'],
      artifactSlot: 'capital',
      concept: `An investor is not buying your product; they are **underwriting a claim about the future** — that this company can return their fund many times over. A raise, then, is a **proof obligation**: you are asserting a theorem ("$1 in becomes $10+ out") and the round is you presenting the proof. Sophisticated investors probe the same load-bearing lemmas:

- **A market big enough** that the outcome they need is even possible.
- **Unit economics that work, or a credible path to them** — because scaling broken economics only accelerates the loss (Module 5's scaling trap).
- **Evidence of traction** — retention, growth, or usage that turns your claim from assertion into demonstrated fact.
- **A team** they believe can execute the proof.

Here is the honest part. **Meridian's LTV:CAC is ~1.69× — thin, below the 3× band, and not yet a fundable metric.** A serious investor will see it immediately. That does not make Meridian un-raiseable, but it changes what the raise is *for*: money to **fix the ratio** (retention, CAC, pricing) is a defensible story; money to **scale the broken ratio** is the fatal one. Be honest about which you are pitching.

And the decision that frames the whole module: **when NOT to raise.** Do not raise if (a) your unit economics are broken and the money would just scale the loss; (b) you could reach your goal on revenue and simply prefer control; or (c) the dilution buys speed you do not actually need. Raising is not a milestone or a validation — it is taking on a permanent, high-coupling dependency (lesson 10.1). Sometimes the strongest move is to **not** take it, fix the unit first, and raise later from a position of strength — or never. This lesson ends with you making that call and committing it.`,
      reframe: {
        analogy: `A fundraise is a **proof obligation discharged in front of a skeptical reviewer**. Your pitch is the proof; the market-size, unit-economics, traction, and team claims are the **lemmas** the whole result rests on. A good investor is a hostile type-checker: they attack the weakest lemma first, and if it does not hold, the theorem does not compile no matter how polished the slides. Traction is the part of the proof that is **already executed and verified** — a passing test rather than an assertion — which is why it moves investors more than any narrative.`,
        breaks: `A mathematical proof is **timeless and complete**; a startup pitch is a claim about an **uncertain future** that no amount of rigor can fully discharge. You cannot *prove* the market will adopt you — you can only lower the reviewer's uncertainty with evidence, and some irreducible risk always remains. That is precisely why investors hold a **portfolio** and expect most bets to fail: they are underwriting probabilities, not verifying theorems. So do not over-index on making the pitch "airtight" — you cannot. Reduce the biggest uncertainty (here, the thin ratio) with real evidence, and accept that the reviewer is pricing risk, not demanding a QED.`,
      },
      workedExample: `**Meridian** sits at the decision. The numbers, carried from Module 5: CM **$31**, CAC **$250**, LTV **~$422**, **LTV:CAC ≈ 1.69×**, payback **~8 months**. A seed investor offers **$1.5M** at a **$6M pre-money** valuation.

**Post-money math** (lesson 10.3):

$$\\text{post-money} = 6{,}000{,}000 + 1{,}500{,}000 = \\$7{,}500{,}000$$
$$\\text{investor ownership} = \\frac{1{,}500{,}000}{7{,}500{,}000} = 20\\%$$

So the founders dilute ~20% (plus any option pool — lesson 10.2). The real question is not the price; it is **what the $1.5M is underwriting.**

- **The fundable version:** "$1.5M buys 18 months to lift retention and cut CAC, moving 1.69× toward 3×. Here is the specific experiment plan and the traction that says it will work." The money fixes the unit, *then* the company is ready to scale. That is a claim an investor can underwrite.
- **The fatal version:** "$1.5M to 10× acquisition and capture the market." At 1.69× this scales the loss — Module 5's trap — and a sharp investor either declines or funds you into a faster wall.

**The bootstrap alternative** is live and legitimate: keep 100% ownership, fix the ratio on current revenue, and raise later at a higher valuation from strength — or discover you never needed the round. The honest read: Meridian's metrics **need fixing before they are cleanly fundable**, so the defensible raise is explicitly a "fix-the-unit" raise, and bootstrapping-until-stronger is a genuine contender, not a consolation prize. That is the call you now commit.`,
      branch: {
        scenario: `Your own company's LTV:CAC is a thin ~1.7×, like Meridian's. A respected investor offers a clean $1.5M seed and says, on a call, "the metrics are a bit early but we love the team — use this to grow fast and the economics will follow." What do you commit to?`,
        choices: [
          {
            label: 'Take it and grow fast as suggested — a great investor\'s conviction derisks the thin economics.',
            correct: false,
            consequence: `**The seductive miss.** An investor's belief does not repair a 1.7× ratio; only retention, CAC, or pricing does. "Grow fast and economics will follow" is the scaling trap dressed as encouragement — you would be scaling a loss with a board now *expecting* the growth that burns you. Conviction is not a unit-economics fix, and "economics will follow" names no mechanism.`,
          },
          {
            label: 'Take it, but explicitly as a "fix-the-unit" raise — deploy it to move the ratio toward 3× before scaling, and set that expectation with the investor now.',
            correct: true,
            consequence: `**Correct.** The capital is fine; the *mandate* is what matters. Reframing the round as buying time to fix retention/CAC/pricing — and aligning the investor to that plan before signing — turns the money into fuel for a soon-to-be-working unit rather than accelerant on a broken one. You avoid the board-mandate mismatch from Module 5 by being honest that the metrics need fixing first. Just as valid would have been to bootstrap the fix and raise later from strength; both are defensible, and both start with "fix the unit."`,
          },
          {
            label: 'Decline all outside money on principle — real founders bootstrap.',
            correct: false,
            consequence: `**Overcorrection.** Bootstrapping is a legitimate, often powerful choice — but as *principle*, not analysis, it is just as unexamined as taking every check. If a fix-the-unit raise genuinely buys speed you need and you can align the mandate, it can be the right call. The discipline is to decide from your economics and your appetite for the coupling, not from an identity about what "real founders" do.`,
          },
        ],
      },
      artifact: {
        componentKey: 'form',
        prompt: `Commit your capital decision. Raise or bootstrap — and if raising, how much and why. Be honest about whether your unit economics are fundable yet.`,
        fields: [
          { key: 'decision', label: 'Raise or bootstrap?', type: 'select', options: ['raise', 'bootstrap'] },
          { key: 'askAmount', label: 'If raising, amount ($)', type: 'number' },
          { key: 'reasoning', label: 'Reasoning (what the money buys, why now / why not)', type: 'textarea' },
        ],
      },
      tutorHooks: [
        { label: 'Are my metrics fundable yet?', kind: 'ask', question: 'Given my saved unit economics, honestly assess whether an investor would underwrite my numbers today, which lemma is weakest, and whether I should pitch a "fix-the-unit" raise or bootstrap the fix first.' },
        { label: 'Pressure-test my raise/bootstrap call', kind: 'critique' },
        { label: 'Harder: size the fix-the-unit raise', kind: 'ask', question: 'Help me size a raise whose explicit job is to move my LTV:CAC toward 3×: what would the money buy, over what runway, and what dilution should I expect at a plausible valuation?' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'An investor tells a founder with a 1.7× LTV:CAC to "raise and grow fast, the economics will follow." The soundest response is:',
          options: [
            'Agree — investor conviction is strong evidence the economics will improve',
            'Reframe any raise as fixing the unit economics first; growing a thin ratio scales the loss',
            'Decline all funding, since bootstrapping is always superior',
            'Immediately scale acquisition to hit the growth the investor wants',
          ],
          answer: 1,
          explain: 'A thin ratio is fixed by retention, CAC, or pricing — not by conviction or volume. Scaling a 1.7× ratio multiplies the loss (Module 5\'s trap). A raise can be right, but only framed explicitly as buying time to move the ratio toward 3× first. Bootstrapping is legitimate but not "always superior."',
        },
        {
          kind: 'mcq',
          prompt: 'Which is the strongest reason NOT to raise?',
          options: [
            'Raising would dilute the founders at all',
            'The unit economics are broken and the money would mostly scale the loss',
            'The company has strong, growing revenue',
            'Investors are interested in the company',
          ],
          answer: 1,
          explain: 'The clearest "do not raise" case is broken unit economics: capital poured into a losing unit accelerates the loss rather than building value. Dilution alone is a cost to weigh, not a veto; strong revenue and investor interest are reasons the raise could go *well*, not reasons to avoid it.',
        },
        {
          kind: 'free',
          prompt: 'Make your call: raise or bootstrap? If raising, state an amount and — most importantly — exactly what the money underwrites (fixing the unit vs scaling it). Be explicit about whether your unit economics are fundable yet, and if not, how your plan accounts for that.',
          rubric: 'Strong answer: (1) states a clear raise-or-bootstrap decision; (2) if raising, gives a specific amount and what it buys, framed honestly as fixing the unit vs scaling a working one; (3) explicitly assesses whether the learner\'s own unit economics are fundable yet (referencing their ratio/payback) and avoids the "grow into it" fallacy without a named mechanism; (4) treats the raise as a high-coupling dependency and a proof obligation, not as validation or a milestone.',
        },
      ],
      commitSummary: 'your capital decision — raise or bootstrap, amount, and reasoning — written to **startup.capital**, closing the fundraising module.',
    },
  ],
}
