import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 25 — Finance II: real accounting, cap tables & running a raise
// (SEASON 2 — "Building for Real")
//
// Season 1 taught the mechanics of business finance on a disposable
// startup.json. This module makes the learner keep REAL books, model a REAL
// financial plan, understand their REAL cap table under a raise, and run an
// ACTUAL fundraise with real documents. Every lesson is artifactSlot:null; the
// real work is tracked through the interactive blocks (platformTask writes a
// real bookkeeping link and a real investor list; document blocks seed the
// financial-model, cap-table, and SAFE-terms templates into "My venture").
//
// EDUCATIONAL CONTENT ONLY — this module is not financial, accounting, tax, or
// legal advice. Cap tables, SAFEs, and term sheets have real legal and tax
// consequences; confirm anything real with a licensed accountant and a startup
// lawyer before you rely on it.
// ===========================================================================

export const module25: Module = {
  id: 25,
  season: 2,
  title: 'Finance II — real accounting, cap tables & running a raise',
  goal: 'Run real company finances: keep real books, model a real financial plan, understand your cap table under a raise, and run an actual fundraise with real documents.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '25.1',
      module: 25,
      title: 'Real bookkeeping & the numbers that run a company',
      estMinutes: 18,
      prerequisites: ['13.4'],
      artifactSlot: null,
      concept: `In Season 1 your "books" were a fantasy spreadsheet you could reset. From here they are the **source of truth** a bank, an investor, an acquirer, and a tax authority will one day inspect. Real bookkeeping is not paperwork you do to satisfy other people — it is the instrument panel that tells you, honestly and continuously, whether the aircraft is climbing or stalling.

**Cash vs. accrual.** Cash accounting records money when it moves; accrual records revenue when it is *earned* and expenses when they are *incurred*, regardless of when cash changes hands. If a customer prepays $12,000 for a year of service, cash accounting says you made $12,000 in January — a lie that will feel great and then wreck you in month seven when the cash is spent but the service is still owed. Accrual spreads that $12,000 as $1,000 of earned revenue each month and parks the rest as **deferred revenue**, a liability. Accrual is harder, and it is the only view that tells you whether the *business* — not just the bank balance — is actually working.

**Double-entry.** Every transaction hits two accounts and the books must balance: assets = liabilities + equity. You do not do this arithmetic by hand; real bookkeeping software (or a disciplined spreadsheet) enforces it. The point of setting it up *now*, while it's tiny, is that a clean set of books is nearly free to maintain and brutally expensive to reconstruct after eighteen months of receipts in a shoebox.

**The numbers a founder checks weekly.** Not the whole ledger — a small, fixed dashboard: **cash in the bank**, **net monthly burn** (cash out minus cash in), **runway** (cash ÷ burn), **revenue** (and whether it's recurring), and **AR/AP** (money owed to you vs. money you owe). These five, read every week, are the difference between steering and being surprised.`,
      reframe: {
        analogy: `Your books are the **logging and telemetry** of your company. You would never run a production service with no logs and no metrics, discovering outages only when a customer screams — you instrument first, so the system reports its own state continuously. Bookkeeping is that instrumentation for the business: every transaction is a structured log line, the financial statements are your dashboards, and the weekly review is watching the metrics. Accrual accounting is the difference between logging *when a request completes* (earned revenue) versus *when a TCP packet happens to arrive* (cash) — the former tells you what the system actually did.`,
        breaks: `Telemetry is passive: reading a metric never changes the system. Books are not neutral in the same way — the choices you make in *how* you record things (revenue recognition timing, what you capitalize vs. expense) actively shape the picture and can be used to flatter or mislead, which is why accounting has rules (GAAP) and auditors and telemetry mostly doesn't. And a dropped log line is a minor gap; a misstated set of books can be **fraud** with legal consequences. So treat your books with more care than a dashboard: the instrument is also a legal record, and someone is allowed to prosecute you for lying to it.`,
      },
      workedExample: `**Why "default alive or default dead" needs real books (Paul Graham, 2015).** Paul Graham observed that a founder should be able to answer one question instantly: *at your current growth and burn, do you become profitable before the money runs out?* He called this "default alive" vs. "default dead," and noted that a shocking number of founders he asked simply did not know — they had to go compute it, and often discovered they were default dead and hadn't noticed. (See the essay cited below; the framing is his.)

Here's the accrual arithmetic that answers it, using the seeded lean model. Suppose you have $50,000 in the bank, and this month you booked a $12,000 annual prepaid contract plus your normal $1,600 of monthly recurring revenue. **Cash accounting** cheers: cash went up by roughly $13,600 minus costs — you feel rich. **Accrual accounting** tells the truth: you *earned* $1,600 recurring + $1,000 (one-twelfth of the annual deal) = $2,600 of revenue; the other $11,000 is deferred revenue you still owe as service. Against $6,800 of fixed costs plus variable costs, you are still burning — your operating result is negative even though your bank balance jumped. The founder reading only the bank balance thinks they turned the corner; the founder reading accrual knows they are still default dead and acts with urgency. Same month, same money, opposite decisions — that gap is exactly what real books close.`,
      branch: {
        scenario: `You're four months in. You've been "keeping the books" as a habit of glancing at your business bank balance, which currently looks healthy because two customers prepaid annual plans last month. Your co-founder asks, "So are we default alive or default dead?" What do you actually do?`,
        choices: [
          {
            label: 'Point at the healthy bank balance — cash is up, so we\'re clearly fine. Keep going.',
            correct: false,
            consequence: `**Reading the wrong instrument.** The bank balance is inflated by prepaid annual cash you have not yet *earned* — that's deferred revenue, a liability, not profit. On an accrual view you may still be burning every month. "Cash is up" is exactly the signal that fools founders into thinking they turned a corner right before the prepaid cash runs out and the underlying burn reappears. You can't answer "default alive?" from a bank balance.`,
          },
          {
            label: 'Set up real double-entry bookkeeping (or a disciplined accrual spreadsheet), record revenue as earned and expenses as incurred, then compute burn and runway from that.',
            correct: true,
            consequence: `**Correct.** The question "default alive or dead?" is only answerable from accrual books: earned revenue vs. incurred cost gives you true monthly burn, and cash ÷ burn gives runway. Setting this up while the company is tiny costs an afternoon; reconstructing it later from a shoebox of receipts costs weeks and an accountant. Instrument now, read weekly, and you'll never be surprised by your own runway.`,
          },
          {
            label: 'Wait until tax season and let an accountant sort it all out then — bookkeeping is an end-of-year chore.',
            correct: false,
            consequence: `**Treating your instrument panel as paperwork.** Books filed once a year for the tax authority answer *their* question, not yours. You need to know your burn and runway *this week* to make decisions this week; a report you commission in twelve months cannot steer a company today. Deferring the books also makes them far more expensive and error-prone to build, because the context is gone. Keep them live.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each event by WHEN accrual accounting recognizes the revenue or expense. Accrual is about when value is earned or consumed — not when the cash moves.',
          buckets: ['Recognize now (earned / incurred this month)', 'Defer (cash moved, but not yet earned / consumed)'],
          items: [
            { text: 'You delivered one month of service on a monthly plan and were paid for it', bucket: 'Recognize now (earned / incurred this month)' },
            { text: 'You used one month of an office lease you pay for', bucket: 'Recognize now (earned / incurred this month)' },
            { text: 'A customer prepaid 12 months up front — this is month 1', bucket: 'Defer (cash moved, but not yet earned / consumed)' },
            { text: 'You paid a full year of software licenses in advance today', bucket: 'Defer (cash moved, but not yet earned / consumed)' },
            { text: 'You shipped work in June; the client will pay you in August', bucket: 'Recognize now (earned / incurred this month)' },
            { text: 'A customer paid a deposit for a feature you have not built yet', bucket: 'Defer (cash moved, but not yet earned / consumed)' },
          ],
          explain: 'Accrual recognizes revenue when EARNED and expense when INCURRED, independent of cash timing. Delivering a month of service (even if billed later) is earned now; prepaid annual cash is deferred revenue (a liability) released one month at a time; a prepaid annual expense is a prepaid asset consumed monthly. The gap between "cash moved" and "value earned" is exactly what accrual exists to show.',
        },
        {
          kind: 'numeric',
          prompt: 'A customer signs a 12-month contract on the 1st and pays the full $12,000 up front. Under accrual accounting, how much REVENUE do you recognize in that first month (in dollars)?',
          answer: 1000,
          tolerance: 0,
          unit: '$ this month',
          explain: 'Accrual spreads earned revenue over the period it is earned: 12,000 / 12 = $1,000 recognized this month. The remaining $11,000 sits on your balance sheet as deferred revenue (a liability) and is released $1,000 at a time as you deliver each month. Cash accounting would wrongly book the whole $12,000 as this month\'s revenue — the exact distortion that hides real burn.',
        },
        {
          kind: 'platformTask',
          title: 'Set up your real books today',
          body: 'Instrument the company. Create real bookkeeping using a tool that enforces double-entry, or a disciplined accrual spreadsheet if you truly must. Connect (or plan to connect) your business bank account, set up an income and an expense category, and record your first real (or expected) transaction. Then paste the link to your bookkeeping workspace (or shared spreadsheet). Do this while the company is tiny — it never gets cheaper. This writes the real bookkeeping home into "My venture".',
          links: [
            { label: 'Wave — free double-entry accounting & bookkeeping for small businesses', url: 'https://www.waveapps.com/accounting' },
            { label: 'QuickBooks Online — the industry-standard paid option', url: 'https://quickbooks.intuit.com/oa/accounting-software/' },
            { label: 'Google Sheets — a disciplined accrual spreadsheet if you must start manual', url: 'https://sheets.google.com/' },
          ],
          steps: [
            'Pick a tool: Wave (free) or QuickBooks (paid) enforce double-entry for you; a spreadsheet does not, so only choose it if you will be rigorous.',
            'Create your accounts/categories: at minimum one revenue category and 2–3 expense categories (software, contractors, fees).',
            'Connect or note your business bank account so transactions flow in (open a separate business account if you have not — never mix personal and business).',
            'Record your first transaction on an accrual basis (revenue when earned, expense when incurred).',
            'Paste the link to your bookkeeping workspace or shared spreadsheet below.',
          ],
          taskKey: '25.1#books',
          proofLabel: 'Link to your real bookkeeping workspace or shared accrual spreadsheet',
          proofKind: 'url',
          milestone: true,
        },
        {
          kind: 'document',
          title: 'Seed your lean financial model',
          body: 'A set of books tells you the past; a financial model tells you the future. Use the template to project customers, revenue, contribution margin, fixed costs, operating profit, and — most importantly — the ending CASH each month, so you can read your runway forward. Replace every assumption with YOUR real numbers and fill in the monthly formulas in your spreadsheet. Save it to your workspace.',
          templateHref: '/templates/financial-model.csv',
          docKey: '25.1#model',
          docLabel: 'My lean financial model',
        },
        {
          kind: 'rank',
          prompt: 'Put a monthly bookkeeping "close" in the order that produces trustworthy numbers. Founders skip straight to the dashboard; a real close earns the right to trust it.',
          items: [
            'Import/record every transaction for the month (income and expenses)',
            'Categorize each transaction and split personal vs. business cleanly',
            'Reconcile the books against your actual bank and card statements',
            'Apply accrual adjustments (release deferred revenue, expense prepaids)',
            'Generate the P&L, balance sheet, and cash statement for the month',
            'Update burn and runway on your weekly dashboard and decide what it means',
          ],
          explain: 'Record everything, then categorize, then RECONCILE against the bank (this is the step that catches errors and fraud), then make accrual adjustments so the statements are honest, then produce the statements, and only then read burn/runway and act. Reading a dashboard built on un-reconciled, cash-basis data is worse than reading nothing — it is confident and wrong.',
        },
        {
          kind: 'resource',
          title: 'Real bookkeeping & the "do I survive?" question',
          items: [
            { label: 'Paul Graham — "Default Alive or Default Dead?"', url: 'https://paulgraham.com/aord.html', note: 'The one question your books must be able to answer instantly. Source for the worked example.' },
            { label: 'Wave — free accounting software & guides', url: 'https://www.waveapps.com/accounting', note: 'Free double-entry bookkeeping; the help center explains cash vs. accrual in plain English.' },
            { label: 'QuickBooks — cash vs. accrual accounting explained', url: 'https://quickbooks.intuit.com/r/bookkeeping/cash-vs-accrual-accounting/', note: 'A clear primer on the two methods and when each is required.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Set up my chart of accounts', kind: 'ask', question: 'Given what my venture sells and how I get paid, help me design a minimal but real chart of accounts (revenue categories and expense categories) and tell me which transactions I should record on an accrual basis versus cash.' },
        { label: 'Am I default alive or default dead?', kind: 'ask', question: 'Walk me through computing whether I am default alive or default dead from real numbers: my current cash, my true monthly burn on an accrual basis, my growth rate, and whether I reach profitability before the cash runs out.' },
        { label: 'A harder revenue-recognition case', kind: 'harder', concept: 'recognizing revenue correctly for a mix of monthly subscriptions, annual prepaid contracts, and one-off setup fees under accrual accounting' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A SaaS customer prepays $24,000 for a full year on January 1. Under accrual accounting, what does your income statement show for January, and what happens to the rest?',
          options: [
            '$24,000 of revenue in January — the cash arrived, so it is earned',
            '$2,000 of revenue in January; the remaining $22,000 is deferred revenue (a liability) released $2,000 per month',
            '$0 of revenue until the contract ends in December, then $24,000 all at once',
            '$2,000 of revenue and $22,000 of profit in January',
          ],
          answer: 1,
          explain: 'Accrual recognizes revenue as it is EARNED: 24,000 / 12 = $2,000 in January. The unearned $22,000 is deferred revenue — a liability, because you still owe eleven months of service. It is released $2,000 at a time. Booking the full $24,000 up front (cash view) overstates January and hides the fact that you still owe most of the work.',
        },
        {
          kind: 'mcq',
          prompt: 'Which small, fixed set of numbers should a founder read EVERY week to know whether they are steering or about to be surprised?',
          options: [
            'Total lifetime revenue, number of employees, office square footage, and website visits',
            'Cash in the bank, net monthly burn, runway (cash ÷ burn), revenue (and whether it recurs), and AR/AP',
            'Only the business bank account balance — everything else is noise',
            'The full general ledger, line by line, every week',
          ],
          answer: 1,
          explain: 'The weekly founder dashboard is small and fixed: cash on hand, net burn, runway, revenue (and its recurring quality), and receivables vs. payables. These five answer "am I alive, for how long, and is it getting better?" The bank balance alone is misleading (deferred revenue), the full ledger is too much to read weekly, and vanity counts like headcount steer nothing.',
        },
        {
          kind: 'free',
          prompt: 'Describe how you set up your real books (the tool and why), then compute — from your real or best-estimate numbers — your net monthly burn on an accrual basis and your runway in months. Finally, state honestly whether you are default alive or default dead, and what that implies for your next decision.',
          rubric: 'Strong answer: (1) names a real bookkeeping approach (Wave/QuickBooks/disciplined spreadsheet) and why it fits, showing they understand double-entry/accrual; (2) computes net burn as accrual revenue minus incurred costs (NOT just change in bank balance) and runway as cash ÷ burn with concrete numbers; (3) correctly distinguishes earned revenue from deferred/prepaid cash; (4) reaches a defensible default-alive/dead verdict and names a decision it implies (cut burn, raise, grow faster). Penalize using the bank balance as if it were profit, or vague answers with no numbers.',
        },
      ],
      commitSummary: 'no slot written — your real books are now live in "My venture" (a bookkeeping link + a seeded financial model), so every later decision reads off true burn and runway instead of a flattering bank balance.',
    },

    // -----------------------------------------------------------------------
    {
      id: '25.2',
      module: 25,
      title: 'The cap table & dilution for real',
      estMinutes: 20,
      prerequisites: ['25.1'],
      artifactSlot: null,
      concept: `A **cap table** (capitalization table) is the ledger of who owns your company. Not the vibes of "we're 50/50" — the actual share counts that decide who gets what in a sale, who votes, and who controls the board. Getting this right early is one of the highest-leverage, lowest-effort things you will do, because cap-table mistakes are almost impossible to fix later without money and lawyers.

**Shares, not percentages.** The foundational shift for engineers: ownership is denominated in **share counts**, and percentages are *derived* by dividing your shares by the total. If two founders each hold 4,000,000 of 8,000,000 shares, each owns 50%. The moment new shares are issued, the total grows and everyone's percentage — computed from a fixed numerator over a growing denominator — falls. That is dilution, and it is not theft; it is arithmetic.

**Dilution.** When you raise money, you issue *new* shares to the investor. Your share count doesn't change; the denominator does. If a company with 8,000,000 shares issues 2,000,000 new shares to an investor, the total becomes 10,000,000 and a founder who held 4,000,000 goes from 50% to 40%. The right question is never "how do I avoid dilution?" (you can't, and shouldn't — you're trading ownership for fuel) but "**is the slice I give up buying enough growth that my smaller piece is worth more?**"

**Pre-money and post-money.** These two words govern every negotiation. **Pre-money valuation** is what the company is agreed to be worth *before* the new investment. **Post-money = pre-money + amount invested.** The investor's ownership is \`amount ÷ post-money\`. On a $8M pre-money, a $2M investment makes a $10M post-money and buys the investor 2 / 10 = 20%. Confusing pre- and post-money is the single most expensive vocabulary error founders make.

**The option pool.** To hire, you set aside unissued shares — an **option pool** — for future employees. Investors typically require the pool be created (or topped up) *in the pre-money*, which means the pool's dilution comes out of the **founders'** slice, not the new investor's. This "option pool shuffle" quietly costs founders more than they expect; you must model it explicitly.`,
      reframe: {
        analogy: `A cap table is **shares outstanding as the denominator of every ownership fraction**, and dilution is what happens when you increase that denominator. Think of it like fixed-point representation: your ownership isn't stored as the percentage "50%" — it's stored as the integer 4,000,000, and the percentage is recomputed as 4,000,000 / total every time the total changes. Issue new shares and you've changed the scale factor for everyone at once. Nobody's stored value (their share count) changed, yet everyone's rendered value (their percentage) did. Understanding that percentages are *derived, never stored* is the whole mental model.`,
        breaks: `The fixed-point analogy makes dilution feel purely mechanical and value-neutral — but shares are not just fractions of ownership, they carry **rights**: preferred shares can have liquidation preferences, anti-dilution protection, and votes that common shares don't. So two people with the "same" percentage can have wildly different economics and control, which no plain number system models. And unlike a scale factor you can freely re-choose, changing a real cap table means issuing or cancelling securities with legal and tax consequences (409A valuations, taxable events). The arithmetic is the easy half; the rights and the legal irreversibility are the half that actually bites.`,
      },
      workedExample: `**Surviving many rounds of dilution and keeping control (Facebook's 2012 IPO).** By the time Facebook went public, Mark Zuckerberg had raised through angel, Series A through E, and more — each round issuing new shares and diluting every prior holder, including him. At IPO he still held roughly **28%** of the company economically (widely reported around 28.2%), and — through a dual-class structure giving his shares extra votes — controlled a majority of the *voting* power despite owning well under half the economics. (Treat the exact figure as the widely-cited public number.)

Two lessons transfer directly. First, **dilution is not defeat**: Zuckerberg's percentage fell round after round, but because each round bought growth, ~28% of a ~$100B company was worth vastly more than 100% of the tiny 2004 company. You are optimizing the *value of your slice*, not its size. Second, **economics and control are separate dials**: he traded economic ownership for capital while engineering (via share class) to keep decision-making control. You almost certainly won't have dual-class shares as a first-timer, but the principle stands — track ownership percentage and board/voting control as two different things on your cap table, because an investor can take a big economic slice while you keep control, or a small slice while taking a board seat that controls you. Model both.`,
      branch: {
        scenario: `You're raising your first round. An investor offers $2M. In the same breath they say: "We want a $8M pre-money, and we'll need a 15% option pool created before we invest." You have 8,000,000 shares between two founders (50/50). The investor frames the pool as "just standard." What do you do?`,
        choices: [
          {
            label: 'Accept as stated — a $8M pre-money on $2M sounds like a clean 20% for them, and an option pool is standard, so it costs no one.',
            correct: false,
            consequence: '**You just absorbed the option-pool shuffle.** A pool created in the PRE-money dilutes the existing holders — you — not the new investor. So the investor gets their 20% clean, but the 15% pool comes entirely out of the founders\' slice on top of the 20%. Your effective dilution is much more than 20%. "Standard" is true, but standard is not free, and it is negotiable — where the pool sits (pre vs. post) and how big it is are both live terms.',
          },
          {
            label: 'Model it explicitly on the cap table — compute your ownership WITH the pool in the pre-money vs. post-money — then negotiate the pool size and placement from real numbers.',
            correct: true,
            consequence: '**Correct.** You don\'t reject the pool (you do need to hire) — you make it visible. Put the numbers on the cap table both ways and you\'ll see the pre-money pool comes out of your slice while a post-money pool would share the cost with the investor. Now you can negotiate the pool DOWN to what you\'ll actually grant before the next round, and negotiate its placement. Modeling turns a "standard" hand-wave into a specific, negotiable number.',
          },
          {
            label: 'Refuse any option pool — you don\'t want to dilute yourself, and employees can get shares later.',
            correct: false,
            consequence: '**Over-correcting into a different mistake.** You WILL need a pool to hire — refusing one now just means an even more painful top-up at the next round, and it signals to investors you don\'t understand how hiring works. The problem was never the pool\'s existence; it was accepting its size and placement without modeling the cost. Negotiate it, don\'t abolish it.',
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'document',
          title: 'Build your real cap table',
          body: 'Model who actually owns your company in share counts, not vibes. Use the template to enter each founder\'s shares, the option pool, and any investor. The template computes ownership % as holder shares ÷ total shares — so you can see every percentage move as you add rows. Fill it in for YOUR venture (real or planned) and save it. This is the ledger every future round edits.',
          templateHref: '/templates/cap-table.csv',
          docKey: '25.2#captable',
          docLabel: 'My cap table',
        },
        {
          kind: 'numeric',
          prompt: 'Your company has 8,000,000 shares outstanding. An investor puts in $2M at a $8M pre-money valuation. What percentage of the company does the investor own immediately after the round (post-money ownership, in %)?',
          answer: 20,
          tolerance: 0,
          unit: '%',
          explain: 'Post-money valuation = pre-money + investment = 8M + 2M = $10M. Investor ownership = amount / post-money = 2 / 10 = 20%. Equivalently: price per share = 8M / 8,000,000 = $1.00, so $2M buys 2,000,000 new shares; total becomes 10,000,000 and the investor holds 2,000,000 / 10,000,000 = 20%. Note it is amount ÷ POST-money, not ÷ pre-money.',
        },
        {
          kind: 'numeric',
          prompt: 'Same round: a founder held 4,000,000 of the original 8,000,000 shares (50%). After the investor\'s 2,000,000 new shares are issued (total now 10,000,000), what is that founder\'s ownership percentage?',
          answer: 40,
          tolerance: 0,
          unit: '%',
          explain: 'The founder\'s share count did NOT change (still 4,000,000); the denominator grew to 10,000,000. So ownership = 4,000,000 / 10,000,000 = 40%, down from 50%. That 10-point drop is dilution — the price of the fuel. The question is whether the $2M grows the company by enough that 40% of the new, larger company beats 50% of the old one.',
        },
        {
          kind: 'categorize',
          prompt: 'Classify each line on a startup cap table by the kind of security it is. The security TYPE — not just the share count — determines rights, price, and what happens in a sale.',
          buckets: ['Common stock', 'Preferred stock', 'Option pool (reserved)'],
          items: [
            { text: 'Founders\' shares, typically on a 4-year vest with a 1-year cliff', bucket: 'Common stock' },
            { text: 'Shares issued to a priced-round investor with a liquidation preference', bucket: 'Preferred stock' },
            { text: 'Shares set aside but not yet granted, reserved for future employees', bucket: 'Option pool (reserved)' },
            { text: 'Stock an early employee receives when they exercise a vested grant', bucket: 'Common stock' },
            { text: 'The security a VC takes so they get paid back first in a modest exit', bucket: 'Preferred stock' },
            { text: 'The unallocated bucket an investor asks you to top up before they invest', bucket: 'Option pool (reserved)' },
          ],
          explain: 'Founders and employees hold COMMON stock (last in line, plain voting). Priced-round investors take PREFERRED stock, which carries extra rights like a liquidation preference (paid back before common in a sale). The OPTION POOL is reserved-but-unissued shares for future hires; investors usually want it topped up in the pre-money, which dilutes founders. Same "shares," very different rights.',
        },
        {
          kind: 'scenario',
          title: 'The option pool shuffle, up close',
          intro: 'Two founders hold 8,000,000 shares (50/50). An investor will put in $2M at a $8M pre-money and wants a 20% option pool. Watch how the placement of the pool decides who pays for it.',
          decisions: [
            {
              situation: 'The investor says the 20% option pool should be created in the PRE-money (before their investment). Whose ownership does that pool dilute?',
              options: [
                { label: 'It dilutes the new investor, since it is their idea', correct: false, outcome: 'No — a pool in the pre-money is carved out of the company BEFORE the investor buys in, so it lowers the founders\' share of the pre-money. The investor still buys their clean 20% of the post-money on top. The founders bear essentially the entire cost of the pool.' },
                { label: 'It dilutes the existing holders — the founders — while the investor\'s 20% stays clean', correct: true, outcome: 'Correct. A pre-money pool comes out of the founders\' slice. Founders drop far more than the 20% they "expected," because they eat both the investor\'s 20% AND the 20% pool. This is the shuffle: it looks like a neutral housekeeping item and is actually founder dilution.' },
                { label: 'Nobody — reserved shares are not issued, so they cost no one anything', correct: false, outcome: 'No — reserving shares increases the fully-diluted share count that percentages are computed against, so it dilutes existing holders immediately in every negotiation, even before grants are made. That is the whole point of insisting it go in the pre-money.' },
              ],
            },
            {
              situation: 'You counter: "Let\'s size the pool to what we\'ll actually grant before the next round — 10%, not 20% — and revisit at the next raise." Is this a reasonable move?',
              options: [
                { label: 'Yes — right-size the pool to real near-term hiring needs; an oversized pre-money pool is just extra founder dilution banked for the investor\'s benefit', correct: true, outcome: 'Correct. The pool should cover grants until the next round, not a hypothetical org chart. A smaller, well-justified pool reduces the dilution you eat now; you can top it up later (when, ideally, the company is worth more and the top-up costs less ownership). This is a standard, credible negotiation.' },
                { label: 'No — you must accept whatever pool size the investor names or the deal is off', correct: false, outcome: 'No — pool size and placement are ordinary, negotiable terms. Investors expect a founder who models the cap table to push back with a hiring-plan-justified number. Accepting an inflated pool without question just gifts dilution.' },
                { label: 'No — you should propose a 40% pool to look ambitious about hiring', correct: false, outcome: 'No — a larger pool is MORE founder dilution now, not a flex. You size the pool to real grants through the next round; ambition about hiring is shown by the plan, not by pre-diluting yourself to impress anyone.' },
              ],
            },
          ],
        },
        {
          kind: 'resource',
          title: 'Cap tables, dilution & option pools (real tools and explainers)',
          items: [
            { label: 'Carta — cap table management (Launch tier is free for early startups)', url: 'https://carta.com/equity-management/cap-table/', note: 'The industry-standard cap-table software; Carta Launch is free for companies under ~25 stakeholders and small raises.' },
            { label: 'Y Combinator Startup Library', url: 'https://www.ycombinator.com/library', note: 'Search for equity, dilution, and cap-table talks — the canonical free explanations.' },
            { label: 'Carta Launch — free cap table for founders', url: 'https://carta.com/equity-management/launch/', note: 'Start your real cap table for free instead of maintaining a spreadsheet you\'ll outgrow.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Model my round\'s dilution', kind: 'ask', question: 'Given my current shares, a proposed pre-money valuation, an investment amount, and an option pool, walk me through the post-money cap table step by step: new shares issued, everyone\'s new ownership %, and how much of the dilution comes from the pool vs. the investor.' },
        { label: 'Pre-money vs. post-money, on my numbers', kind: 'ask', question: 'Help me translate a term like "$2M on a $8M pre-money with a 15% pool in the pre-money" into exactly what percentage the investor gets, what the pool costs me, and what my ending ownership is.' },
        { label: 'A harder multi-round dilution case', kind: 'harder', concept: 'stacking two consecutive priced rounds (each with its own pre-money and option-pool top-up) and computing founder ownership after both' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'An investor offers "$3M at a $9M pre-money." What is the post-money valuation, and what percentage does the investor own (ignoring any option pool)?',
          options: [
            'Post-money $9M; investor owns 3 / 9 = 33.3%',
            'Post-money $12M; investor owns 3 / 12 = 25%',
            'Post-money $6M; investor owns 50%',
            'Post-money $12M; investor owns 3 / 9 = 33.3%',
          ],
          answer: 1,
          explain: 'Post-money = pre-money + investment = 9M + 3M = $12M. Investor ownership = amount ÷ POST-money = 3 / 12 = 25%. The classic error is dividing by the pre-money (3 / 9 = 33%), which overstates their stake — pre- vs. post-money is the vocabulary that decides the number.',
        },
        {
          kind: 'mcq',
          prompt: 'Why does an investor typically insist the new option pool be created in the PRE-money valuation rather than the post-money?',
          options: [
            'Because it is a legal requirement for all financings',
            'Because a pre-money pool dilutes the existing founders, not the incoming investor — so the investor\'s ownership stays clean while founders absorb the pool',
            'Because pre-money pools are cheaper to administer',
            'Because it increases the founders\' ownership percentage',
          ],
          answer: 1,
          explain: 'A pool carved out of the pre-money reduces the founders\' share before the investor buys in, so the investor\'s target percentage is protected and the founders bear the pool\'s dilution. It is the "option pool shuffle." It is not a legal requirement — pool size and placement are negotiable, which is exactly why you model it and push back with a hiring-justified number.',
        },
        {
          kind: 'free',
          prompt: 'Using your own cap table, model a hypothetical first round: your current shares, a pre-money valuation, an investment amount, and an option pool placed in the pre-money. Report (1) the investor\'s post-money ownership, (2) your ending founder ownership, and (3) how much of your dilution came from the investor vs. the pool. Then state why the smaller slice can still be the better outcome.',
          rubric: 'Strong answer: (1) computes investor ownership as amount ÷ post-money (not ÷ pre-money); (2) correctly derives founder % as fixed founder shares ÷ grown total, showing dilution as denominator growth; (3) separates the dilution caused by the investor from the dilution caused by a pre-money pool (the shuffle), showing they understand the pool comes out of the founders\' slice; (4) articulates that you optimize the VALUE of your slice, not its size — a smaller % of a much larger company can be worth more. Penalize dividing by pre-money, treating dilution as theft, or ignoring the pool.',
        },
      ],
      commitSummary: 'no slot written — your real cap table now lives in "My venture," and you can model any round\'s dilution (investor share, option-pool shuffle, ending ownership) from actual share counts instead of guessing.',
    },

    // -----------------------------------------------------------------------
    {
      id: '25.3',
      module: 25,
      title: 'SAFEs, term sheets & valuations',
      estMinutes: 20,
      prerequisites: ['25.2'],
      artifactSlot: null,
      concept: `Most first rounds today are not priced equity rounds — they're **SAFEs**. A SAFE (Simple Agreement for Future Equity), created by Y Combinator in 2013 and revised to the **post-money** version in 2018, is a short standard document where an investor gives you cash *now* in exchange for equity *later*, when you raise a priced round. It defers the hard, expensive question — what is the company worth? — to a future round, while letting you take money today.

**The two levers: cap and discount.** A SAFE converts to shares in the next priced round, and two terms decide how many shares the investor gets. The **valuation cap** is the maximum company valuation at which their money converts — a lower cap means their dollars buy *more* shares (better for them). The **discount** gives them a percentage off the next round's price (e.g. 20% off). When both are present, the investor gets whichever is *better for them*. A post-money SAFE has a clean property: \`investor ownership ≈ amount ÷ post-money cap\`, locked in regardless of how the next round is priced.

**SAFEs stack — and stacking dilutes YOU.** Every SAFE you sign is a promise of future shares. Raise four SAFEs before your priced round and *all four* convert at once, diluting the founders (not the new priced investor) at conversion. Founders who raise "just one more small SAFE" repeatedly are often shocked at how little they own after they all convert. You must stack every outstanding SAFE together and model the total conversion *before* you sign the next one.

**Term sheets.** When you do raise a priced round, it starts with a **term sheet**: a short, mostly non-binding document summarizing the deal. It has two families of terms — **economic** (valuation, option pool, liquidation preference) and **control** (board seats, voting/protective provisions, pro-rata rights). First-timers over-focus on valuation and under-focus on control, which is backwards: a great valuation with a board that can fire you is a worse deal than a modest valuation where you keep control. Read every line; the standard is the NVCA model documents.`,
      reframe: {
        analogy: `A SAFE is a **promise to issue shares at a price computed later — a deferred, lazily-evaluated equity grant**. Like a lazy expression in code, it captures the *terms* now (cap, discount) but doesn't *evaluate* to an actual share count until it's forced — and the forcing event is the priced round. The valuation cap is a \`min()\` on the price the investor pays; the discount is a multiplier; when both are present the investor gets \`min(cap-price, discounted-price)\` — the cheaper of the two, i.e. the most shares. And because each SAFE is an unevaluated promise sitting in memory, raising several means several deferred grants that all force-evaluate at once when the round closes.`,
        breaks: `Lazy evaluation in code is free and order-independent — forcing a thunk doesn't change other thunks. SAFEs are worse than that in one crucial way: they **interact**. On a *post-money* SAFE, each new SAFE you add increases the total SAFE ownership and dilutes the *founders* to preserve the earlier SAFE holders' percentages — so the order and quantity you sign genuinely change your outcome, unlike independent thunks. And the "computed later" price isn't a pure function of inputs you control; it depends on a future negotiation with a future investor. So model the whole stack together (not one SAFE at a time), and remember the forcing event's price is set by people, not by your code.`,
      },
      workedExample: `**Why YC moved to the post-money SAFE (2018).** In the original 2013 (pre-money) SAFE, founders often couldn't tell how much of the company they'd actually sold until the priced round closed and all the SAFEs converted together — the interactions were confusing and founders repeatedly over-diluted themselves by accident. YC's fix was the **post-money SAFE**, whose defining feature is that the investor's ownership is measured *after* all the SAFE money is counted, giving a clean, predictable number the moment you sign: ownership ≈ amount ÷ post-money cap. (See YC's official documents and primer, cited below.)

Concretely: an investor puts in $500,000 on a **$5M post-money cap** SAFE. Their ownership locks at 500,000 ÷ 5,000,000 = **10%** — you know that immediately, before you've even found the priced-round investor. Now suppose you raise a *second* SAFE, $250,000 at the same $5M post-money cap — that's another 5%. The two SAFEs are 15% combined, and here's the sting the post-money design makes explicit: that entire 15% comes out of the *founders'* ownership when they convert, not out of the future priced investor (who negotiates their own fresh slice on top). The transferable discipline: before signing SAFE number two, add it to SAFE number one and read the *combined* founder dilution. The post-money SAFE didn't make dilution disappear — it made it *legible*, so you can no longer over-sell the company by accident.`,
      branch: {
        scenario: `You've raised $500k on SAFEs. A well-known angel offers another $250k, but only on a SAFE with a $3M post-money cap — a much lower cap than your existing $6M-cap SAFEs. They call it "a small check, don't overthink it." You need the cash. What do you do?`,
        choices: [
          {
            label: 'Take it — it\'s only $250k, and a lower cap just means a slightly better deal for a helpful angel. Small check, small impact.',
            correct: false,
            consequence: '**"Small check" hides the cap.** A LOWER cap means the money converts as if the company were worth only $3M, so $250k buys ~8.3% (250k / 3M) — nearly as much as a $500k check at a $6M cap. The dollar amount is small; the ownership it claims is not. Worse, if your earlier SAFEs have an MFN clause, this better term could ripple to them too. Always convert the cap into an ownership percentage before deciding.',
          },
          {
            label: 'Model the conversion: compute the % this SAFE claims at its cap, add it to your existing SAFE stack, and negotiate the cap (or the amount) from that real number.',
            correct: true,
            consequence: '**Correct.** You translate the cap into ownership: 250k / 3M ≈ 8.3%, stack it on your existing SAFEs, and see the true combined founder dilution. Now you can negotiate — ask for a cap closer to your existing round, or take less money at the low cap, or pass. You also check whether any existing SAFE\'s MFN clause would pull this better term through to earlier investors. Decision made on ownership, not on the size of the check.',
          },
          {
            label: 'Refuse all further SAFEs — stacking is dangerous, so raise nothing until a priced round.',
            correct: false,
            consequence: '**Over-correcting.** SAFEs aren\'t the enemy — un-modeled stacking is. If you genuinely need $250k of runway, refusing it on principle can starve the company before the priced round you\'re waiting for. The right move isn\'t "never stack," it\'s "model the stack and negotiate the terms." Reject the bad CAP, not the concept of raising.',
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'document',
          title: 'Fill in your SAFE terms worksheet',
          body: 'Before you ever sign a SAFE, understand it in plain English. Use the worksheet to nail down the amount, valuation cap, discount, post- vs. pre-money, MFN, and pro-rata for a real or contemplated SAFE — and do the ownership arithmetic. This is a learning worksheet, NOT a SAFE: use YC\'s official current document for anything real and have a lawyer review it. Fill it in and save it to your workspace.',
          templateHref: '/templates/safe-terms-worksheet.md',
          docKey: '25.3#safe',
          docLabel: 'My SAFE terms worksheet',
        },
        {
          kind: 'numeric',
          prompt: 'An investor puts $500,000 into your company on a post-money SAFE with a $5,000,000 post-money valuation cap. Approximately what percentage of the company will they own when it converts (in %)?',
          answer: 10,
          tolerance: 0,
          unit: '%',
          explain: 'The defining property of a POST-money SAFE: ownership ≈ amount ÷ post-money cap = 500,000 / 5,000,000 = 10%. You know this the moment you sign, before the priced round is even negotiated. That predictability is exactly why YC moved to the post-money SAFE in 2018 — the pre-money version left this number murky until conversion.',
        },
        {
          kind: 'numeric',
          prompt: 'A SAFE has a $5M valuation cap AND a 20% discount. Your next priced round is done at a $10M pre-money valuation. Under the CAP, the investor\'s $100,000 converts as if the company were worth $5M. What percentage does the $100,000 buy under the cap (in %)?',
          answer: 2,
          tolerance: 0,
          unit: '%',
          explain: 'Under the cap, conversion price reflects a $5M valuation, so $100,000 / $5,000,000 = 2%. Under the 20% discount path, the investor pays 80% of the $10M round price, effectively 100,000 / (10M x 0.8) = 100,000 / 8M = 1.25%. When a SAFE has both, the investor gets whichever is BETTER for them — here the cap (2% > 1.25%), so the cap applies. Always compute both and take the larger to see your true dilution.',
        },
        {
          kind: 'categorize',
          prompt: 'A term sheet mixes ECONOMIC terms (who gets how much money) with CONTROL terms (who gets to decide). First-timers obsess over the first column and get burned by the second. Sort each term.',
          buckets: ['Economic term', 'Control term'],
          items: [
            { text: 'Pre-money valuation', bucket: 'Economic term' },
            { text: 'Liquidation preference (e.g. 1x, paid before common in a sale)', bucket: 'Economic term' },
            { text: 'Option pool size and placement', bucket: 'Economic term' },
            { text: 'Board composition and who gets a board seat', bucket: 'Control term' },
            { text: 'Protective provisions (investor veto over certain decisions)', bucket: 'Control term' },
            { text: 'Voting thresholds required to approve a future sale', bucket: 'Control term' },
          ],
          explain: 'Economic terms (valuation, liquidation preference, option pool) decide who gets how much money. Control terms (board seats, protective provisions/vetoes, voting thresholds) decide who gets to make decisions — including whether you keep your job. A dazzling valuation paired with a board that can remove you is a worse deal than a modest valuation where you keep control. Read BOTH columns.',
        },
        {
          kind: 'scenario',
          title: 'Accept, counter, or walk: reading a term sheet',
          intro: 'A reputable fund offers a priced seed round. The headline valuation is strong, but two other terms give you pause. Decide term by term — this is exactly the negotiation you\'ll run for real.',
          decisions: [
            {
              situation: 'Term 1: The valuation is a generous $12M pre-money — above your target. But the term sheet also specifies a 2x liquidation preference (the investor gets 2x their money back before common holders see a cent). How do you respond?',
              options: [
                { label: 'Accept happily — the high valuation is what matters; the liquidation preference is just boilerplate', correct: false, outcome: 'No — a 2x liquidation preference is aggressive and can quietly erase your outcome in a modest exit. On a $20M sale after a $5M investment, the investor takes $10M off the top before anyone else. The high valuation can be a lure that distracts from a punishing preference. This is not boilerplate.' },
                { label: 'Counter to a standard 1x non-participating preference, keeping the valuation — trade the flashy headline term for the fair structural one', correct: true, outcome: 'Correct. A 1x non-participating preference is the market standard; 2x is a red flag you should push back on directly. Countering "we love the valuation, but we need a standard 1x non-participating preference" is exactly the right, credible move — it protects your and your employees\' economics in the outcomes that are most likely.' },
                { label: 'Walk away entirely — any liquidation preference is predatory', correct: false, outcome: 'No — a 1x non-participating preference is completely standard and reasonable; preferred investors take downside protection in exchange for their capital. The problem is the 2x MULTIPLE, not the existence of a preference. Walking over a negotiable term you could simply counter throws away a strong valuation for no reason.' },
              ],
            },
            {
              situation: 'Term 2: The term sheet gives the investor 2 of 3 board seats, handing them board control of your seed-stage company. The valuation is still great. What do you do?',
              options: [
                { label: 'Accept — you trust these investors, and the valuation is worth giving up the board', correct: false, outcome: 'No — at seed stage, handing investors board control is one of the most consequential mistakes a founder can make; trust today does not survive a downturn, a disagreement, or a partner change at the fund. Control is the term you should guard most fiercely, and no valuation compensates for losing the ability to run your own company.' },
                { label: 'Counter to a founder-majority or balanced board (e.g. 2 founders, 1 investor, or 2-1-independent) — control is the term you protect hardest at seed', correct: true, outcome: 'Correct. At seed, a founder-friendly board (founder majority, or a balanced 2 founders / 1 investor, or 2-1 plus a mutually-agreed independent) is standard and worth defending over almost any economic sweetener. This is the "control column" the lesson warned about: guard it harder than the valuation.' },
                { label: 'Give up the board but demand a higher valuation to compensate', correct: false, outcome: 'No — you cannot buy back control with valuation. A bigger number on a company you no longer control is a worse position, not a better one. The economic and control columns are not fungible; trading control for a higher headline is precisely the first-timer error this lesson exists to prevent.' },
              ],
            },
          ],
        },
        {
          kind: 'resource',
          title: 'SAFEs, term sheets & valuations (the real, canonical documents)',
          items: [
            { label: 'Y Combinator — official SAFE documents & user guide', url: 'https://www.ycombinator.com/documents', note: 'The current post-money SAFE forms (cap-only, discount-only, MFN) plus the primer explaining how they convert. Use these, not a copy.' },
            { label: 'NVCA — model legal documents (incl. model term sheet)', url: 'https://nvca.org/model-legal-documents/', note: 'The industry-standard model term sheet and priced-round documents your lawyer will work from.' },
            { label: 'Y Combinator Startup Library', url: 'https://www.ycombinator.com/library', note: 'Search for fundraising, SAFEs, and valuation talks to build intuition before you negotiate.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Convert my SAFE cap into ownership', kind: 'ask', question: 'Given a SAFE amount, a post-money valuation cap, and a discount, compute the investor\'s ownership under both the cap and the discount, tell me which one applies (whichever is better for them), and show my resulting dilution.' },
        { label: 'Stack all my SAFEs together', kind: 'ask', question: 'Help me model what happens when all my outstanding SAFEs convert at once in a priced round: list each SAFE\'s amount and cap, compute each one\'s ownership, and show my total founder dilution before I sign the next one.' },
        { label: 'Which term-sheet clauses should I fight?', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A post-money SAFE has a $4M valuation cap. An investor puts in $200,000. Roughly what ownership does that lock in, and why is "post-money" the reason you know it immediately?',
          options: [
            'About 5% (200k / 4M), knowable at signing because post-money ownership is measured after all SAFE money is counted',
            'About 5%, but you cannot know it until the priced round is negotiated',
            'About 20% (200k / 1M), knowable at signing',
            'It is impossible to estimate without the discount',
          ],
          answer: 0,
          explain: 'Post-money SAFE ownership ≈ amount ÷ post-money cap = 200,000 / 4,000,000 = 5%, and the defining feature of the post-money SAFE (YC, 2018) is that this number is fixed the moment you sign, because ownership is measured after all SAFE money is accounted for. The pre-money SAFE left this murky until conversion — which is exactly why YC replaced it.',
        },
        {
          kind: 'mcq',
          prompt: 'A term sheet offers a very high valuation but also gives investors 2 of 3 board seats. Why is this often a WORSE deal than a lower valuation with a founder-friendly board?',
          options: [
            'Because high valuations are always fake',
            'Because control terms (like board majority) can override economics — investors who control the board can decide the company\'s direction and even replace the founders, and no valuation compensates for losing control',
            'Because board seats are an economic term, not a control term',
            'Because a higher valuation always triggers more taxes',
          ],
          answer: 1,
          explain: 'Valuation is an economic term; board composition is a control term, and control terms can override economics. Investors with board control can steer the company and remove founders regardless of the headline valuation. First-timers over-index on valuation and under-index on control; the lesson is to guard the control column at least as hard as the economic one.',
        },
        {
          kind: 'free',
          prompt: 'For a real or contemplated SAFE, compute the investor\'s ownership from its cap (and, if it has a discount, which of the two applies). Then explain what happens to your founder ownership if you raise TWO such SAFEs before a priced round. Finally, name one term-sheet control provision you would defend even at the cost of a lower valuation, and why.',
          rubric: 'Strong answer: (1) computes SAFE ownership as amount ÷ post-money cap, and if a discount is present, correctly says the investor gets whichever of cap/discount is better for them; (2) shows understanding that stacking SAFEs sums their ownership and that the combined dilution falls on the FOUNDERS at conversion, not the future priced investor; (3) names a specific control term (board composition, protective provisions, voting thresholds) worth protecting over valuation and explains that control can override economics. Penalize dividing by the pre-money, ignoring stacking, or treating valuation as the only term that matters.',
        },
      ],
      commitSummary: 'no slot written — your SAFE terms worksheet is saved in "My venture," and you can now convert any cap/discount into real ownership, stack multiple SAFEs, and read a term sheet\'s control column, not just its valuation.',
    },

    // -----------------------------------------------------------------------
    {
      id: '25.4',
      module: 25,
      title: 'Running a real raise & the data room',
      estMinutes: 18,
      prerequisites: ['25.3'],
      artifactSlot: null,
      concept: `Raising money is a **process**, not an event — and like any process, it goes badly when run ad hoc and well when run deliberately. This lesson is the operational reality: how a raise actually flows, what makes a narrative fundable, what a data room is, and — most importantly — **when not to raise at all.**

**A raise is a sales funnel.** You are selling equity, and the mechanics mirror any sales process: build a target list, run a tight top-of-funnel, create *momentum* by talking to many investors in parallel (never one at a time), convert interest into a term sheet, then close. Two rules matter most. First, **raise in parallel, not in series** — sequential meetings let each investor take their time while your runway bleeds; parallel meetings create the competitive urgency that produces term sheets. Second, **set the amount by runway, not ego**: raise enough to hit the next meaningful milestone plus a buffer (commonly ~18 months), because each dollar is dilution and each raise is months of distraction.

**The fundable narrative.** Investors fund a *story with evidence*, compressed to one line: for whom, what painful problem, why now, why you, and the proof (traction, signal, unfair advantage). If you can't say it in a sentence, you can't sell it in a meeting. The narrative is not spin — it's the honest thesis from Module 13, sharpened until an investor can repeat it to their partners.

**The data room.** When an investor moves toward yes, they do *diligence*, and you hand them a **data room**: an organized folder of the real artifacts of the company — incorporation docs, the cap table, financials and your model, key contracts, and metrics. This is exactly why Lessons 25.1–25.3 came first: a founder with real books, a real cap table, and modeled SAFEs *has a data room already*; a founder without them scrambles for weeks and signals disorganization at the worst possible moment.

**When NOT to raise.** Venture money is not free money — it's the most expensive money there is, because you sell part of the company forever and commit to a growth path that must end in a large exit. Do not raise if: you can bootstrap to your goals, you haven't found real signal yet (you'll just buy time to be wrong), your business can't plausibly return a venture fund, or you simply don't want the obligations that come with it. "Should we raise?" is a real question with "no" as a legitimate, often superior, answer.`,
      reframe: {
        analogy: `Running a raise is **request batching under a deadline**. You never fire off dependent requests one at a time and block on each — you batch them and issue them in parallel, because latency is the enemy and the total wall-clock time is set by your slowest path, not your total work. A raise is the same: fire all your investor "requests" in parallel so their response times overlap, creating a tight window where offers arrive close together and can be compared. Serial fundraising is blocking on each request in turn while your runway (your timeout budget) counts down toward zero.`,
        breaks: `Network requests are stateless and identical; investors are neither. They *talk to each other*, they read signal off who else is in, and firing "too many" carelessly can create negative momentum (a market that's "seen the deal" and passed) in a way parallel HTTP calls never do. And unlike a request you can freely retry, a botched raise can taint your reputation for the next one — investors remember. So batch for parallelism and urgency, yes, but curate the target list and sequence outreach thoughtfully; the load-balancing intuition is right, the assumption of independent, memoryless, retryable requests is wrong.`,
      },
      workedExample: `**"How to Raise Money" and raising as little as you need (Paul Graham, 2013).** Paul Graham's essay on fundraising codified two ideas that still define good practice. First, **talk to investors in parallel and create momentum**: because investors are herd animals who fear missing out, a raise works when many conversations run at once and early commitments trigger later ones — the opposite of politely working down a list one meeting at a time. Second, **the point of fundraising is to get back to work**: raise the minimum that reaches your next real milestone, because fundraising is a distraction and every dollar is dilution. (The essay is cited below; the framing is his.)

Make it concrete with your own model. Suppose your net burn is about $50,000/month and you want ~18 months of runway to hit a milestone that justifies a strong next round. The naive founder raises "as much as we can get" — say $2M — celebrating the big number, and discovers they sold far more of the company than they needed to and now must deploy capital they didn't have a plan for. The disciplined founder computes 50,000 x 18 = **$900,000**, adds a modest buffer, targets roughly $1M–$1.2M, and sells the *minimum* slice required to reach the milestone. Same company, but the second founder keeps more ownership, runs a faster raise (smaller asks close quicker), and returns to building sooner. The transferable move: let the *milestone and the burn* set the number, run the process in parallel to create urgency, and treat every extra dollar raised as ownership you chose to sell.`,
      branch: {
        scenario: `You've decided to raise a seed round. You have real books, a real cap table, and a modeled SAFE stack (Lessons 25.1–25.3 done). Now you're choosing HOW to run the process. Which approach do you take?`,
        choices: [
          {
            label: 'Approach your single favorite investor first, give them an exclusive look, and only go to others if they pass — it\'s respectful and focused.',
            correct: false,
            consequence: '**Serial fundraising — the classic runway-killer.** A single exclusive conversation removes all urgency: the investor can take weeks while your runway bleeds, and with no competing offer you have zero leverage on terms. If they pass, you\'ve burned time and now start cold. Respectful sequencing feels nice and is strategically backwards — you\'ve blocked on one slow request instead of batching.',
          },
          {
            label: 'Build a curated target list, reach out to many suitable investors in a tight window so conversations run in PARALLEL, and let the resulting momentum drive toward comparable term sheets.',
            correct: true,
            consequence: '**Correct.** Parallel outreach compresses everyone\'s response time into the same window, creates competitive urgency (investors are herd animals), and gives you comparable offers to negotiate from. You raise faster, on better terms, and get back to building sooner. Because your books, cap table, and SAFE stack are already in order, your data room is ready the moment interest turns to diligence — no scramble.',
          },
          {
            label: 'Skip the process design and just raise the largest amount any investor will give you, as fast as possible — more money is always safer.',
            correct: false,
            consequence: '**"Raise as much as possible" ignores that money is the most expensive money there is.** Every extra dollar is permanent dilution and a bigger growth obligation. The disciplined move is to size the raise to your next milestone plus a buffer (often ~18 months of burn), not to maximize the check. Over-raising sells more of the company than you needed and commits you to deploying capital you have no plan for.',
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'platformTask',
          title: 'Write your one-line pitch and build a real investor list',
          body: 'Turn the abstract into a runnable process. First, write your fundable one-liner: for whom, what painful problem, why now, why you, and your proof — in a single sentence an investor could repeat to their partners. Then build a real, curated target list of 15–30 investors who actually fund companies like yours (right stage, right sector, right check size) — not famous names, RIGHT names. Record your one-liner and your list. This writes your raise plan into "My venture".',
          links: [
            { label: 'Y Combinator — "How to Raise Money" (Paul Graham): the canonical playbook — parallel outreach, momentum, raise only what you need', url: 'https://paulgraham.com/fr.html' },
            { label: 'Y Combinator Startup Library — fundraising: building a target list, the pitch, and running the process', url: 'https://www.ycombinator.com/library' },
          ],
          steps: [
            'Draft your one-liner: "[Product] helps [specific user] solve [painful problem] — proof: [traction/signal] — why us: [unfair advantage]." Cut until it\'s one sentence.',
            'List investors who fund YOUR stage, sector, and check size (angels/seed funds for a seed round) — aim for 15–30 realistic targets, not a wish list of famous names.',
            'For each, note the warmest intro path you have (mutual founder, portfolio company, prior contact) — cold is weaker than warm.',
            'Sequence outreach so the meetings cluster in a tight window (parallel, not serial) to create momentum.',
            'Record your one-liner and target-list summary below.',
          ],
          taskKey: '25.4#raise',
          proofLabel: 'Your one-line pitch + a summary of your curated investor target list',
          proofKind: 'text',
          milestone: true,
        },
        {
          kind: 'numeric',
          prompt: 'Your net monthly burn is $50,000 and you want 18 months of runway to reach your next milestone. Sizing the raise to runway (before any buffer), how much should you raise (in dollars)?',
          answer: 900000,
          tolerance: 0,
          unit: '$',
          explain: 'Size the raise to your milestone and burn: 50,000 x 18 = $900,000, then add a modest buffer (targeting roughly $1M–$1.2M). Raising to a number set by runway — not by "as much as we can get" — keeps more of the company, closes faster, and gets you back to building. Every extra dollar is permanent dilution and a larger growth obligation.',
        },
        {
          kind: 'rank',
          prompt: 'Put a well-run seed raise in order. Founders love to jump straight to pitching famous investors; a real process earns the meeting and closes clean.',
          items: [
            'Decide you should raise at all (milestone needs capital; venture path fits)',
            'Get your house in order: real books, cap table, financial model, data room',
            'Sharpen the one-line narrative and build a curated target investor list',
            'Run outreach in parallel — cluster first meetings in a tight window for momentum',
            'Convert interest into a term sheet and negotiate economics AND control',
            'Complete diligence from your ready data room and close with counsel',
          ],
          explain: 'First decide whether to raise at all. Then get the house in order (books, cap table, model, data room — which Lessons 25.1–25.3 already built). Then sharpen the narrative and target list, run parallel outreach for momentum, convert to a term sheet (negotiating economics AND control), and close from a data room that\'s already ready. Pitching before your house is in order is how you lose the deal during diligence.',
        },
        {
          kind: 'categorize',
          prompt: 'An investor moving toward "yes" will ask for your data room. Sort each item by whether it belongs in a seed-stage data room — the organized proof that you run a real company.',
          buckets: ['Belongs in the data room', 'Does NOT belong / not expected at seed'],
          items: [
            { text: 'Certificate of incorporation and founder agreements', bucket: 'Belongs in the data room' },
            { text: 'Your current cap table', bucket: 'Belongs in the data room' },
            { text: 'Financial statements and your financial model', bucket: 'Belongs in the data room' },
            { text: 'Key customer contracts and core metrics (traction)', bucket: 'Belongs in the data room' },
            { text: 'Your team\'s personal bank statements and private tax returns', bucket: 'Does NOT belong / not expected at seed' },
            { text: 'A fully audited 5-year financial history (you\'re 8 months old)', bucket: 'Does NOT belong / not expected at seed' },
          ],
          explain: 'A seed data room holds the real, organized artifacts of the COMPANY: incorporation and founder docs, the cap table, financials and model, key contracts, and metrics. It does NOT include founders\' personal financial records, and no one expects a years-long audited history from an 8-month-old startup. Notice: Lessons 25.1–25.3 already produced your books, model, and cap table — you have most of a data room built.',
        },
        {
          kind: 'scenario',
          title: 'When NOT to raise',
          intro: 'Venture money is the most expensive money there is — you sell part of the company forever and commit to a large-exit growth path. "No" is a legitimate answer. Decide each case.',
          decisions: [
            {
              situation: 'Your product is a profitable, growing tool that could reach a comfortable $2M/year on its own, but the market realistically caps out around $20M/year total. An investor offers a seed round. Should you take venture money?',
              options: [
                { label: 'Probably not — a business that tops out around $20M can\'t return a venture fund, and taking VC commits you to a growth path this market can\'t support', correct: true, outcome: 'Correct. Venture funds need companies that can become very large; a business capped around $20M is a great BOOTSTRAPPED outcome but a poor venture fit. Taking VC here commits you to a scale the market can\'t deliver, and misaligns you with investors who need a huge exit. Bootstrapping to a profitable $2M+ you fully own may be the better life.' },
                { label: 'Yes — always take money when offered; more capital is always better', correct: false, outcome: 'No — "always take the money" ignores that VC is the most expensive capital there is. Here it saddles a fundamentally mid-sized business with an obligation to become huge, which this market can\'t support. That mismatch ends badly for founder and investor alike. A profitable business you own outright can beat a diluted one chasing a scale it can\'t reach.' },
                { label: 'Yes — you need the validation that raising provides', correct: false, outcome: 'No — raising is not validation; customers paying you is validation, and you already have that (profitable and growing). Taking venture money for the ego signal, into a market that can\'t return the fund, trades a healthy owned business for an obligation you can\'t meet. Validation is the wrong reason to sell part of your company forever.' },
              ],
            },
            {
              situation: 'You have an idea you love but no real demand signal yet — no users, no evidence anyone will pay. An angel offers to fund you to "go build it and find out." Should you raise now?',
              options: [
                { label: 'No — raising before you have real signal just buys expensive time to be wrong; find signal first, then raise from a position of evidence', correct: true, outcome: 'Correct. Money doesn\'t create demand — it just lets you spend longer building something nobody may want, while diluting yourself at the lowest possible valuation. Get real signal first (Module 13\'s discipline); THEN a raise is fuel on a fire that exists, at a better valuation and with leverage. Raising to "find out" is the expensive way to learn a cheap lesson.' },
                { label: 'Yes — take the money so you can afford to build the full product and then look for demand', correct: false, outcome: 'No — this is solution-first funded by other people\'s money. You\'d be selling equity at your lowest-ever valuation to build something with no evidence of demand, converting a cheap experiment (a landing page, interviews) into an expensive, dilutive one. Signal first, capital second.' },
                { label: 'Yes — the angel\'s willingness to invest IS the demand signal', correct: false, outcome: 'No — an investor\'s interest is not customer demand; investors bet on many ideas and are often wrong. The signal that matters is prospective USERS showing they have the problem and will pay. Mistaking an angel\'s enthusiasm for market demand is exactly how well-funded companies build things nobody wants.' },
              ],
            },
          ],
        },
        {
          kind: 'resource',
          title: 'Running the raise & getting your house in order (real references)',
          items: [
            { label: 'Y Combinator — official SAFE documents & guide', url: 'https://www.ycombinator.com/documents', note: 'The instruments you\'ll actually use to close a seed raise; read the primer before you negotiate.' },
            { label: 'Paul Graham — "How to Raise Money"', url: 'https://paulgraham.com/fr.html', note: 'The canonical process playbook: parallel outreach, momentum, and raising only what you need. Source for the worked example.' },
            { label: 'Carta — cap table & equity management (free Launch tier)', url: 'https://carta.com/equity-management/cap-table/', note: 'Keep your cap table clean and investor-ready — a core data-room artifact.' },
            { label: 'Wave — free accounting for investor-ready financials', url: 'https://www.waveapps.com/accounting', note: 'Real books produce the financial statements your data room needs; get them in order before you raise.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Sharpen my one-line pitch', kind: 'ask', question: 'Help me compress my venture into one fundable sentence: for whom, what painful problem, why now, why me, and the strongest proof I have — then critique whether an investor could repeat it to their partners.' },
        { label: 'Size and structure my raise', kind: 'ask', question: 'Given my monthly burn and my next milestone, help me size the right raise (runway plus buffer), decide whether a SAFE or a priced round fits, and plan a parallel outreach process that creates momentum.' },
        { label: 'Should I raise at all?', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why should you approach investors in PARALLEL rather than one at a time, and how should you size the amount you raise?',
          options: [
            'Parallel outreach is just more efficient; size the raise to whatever the largest investor will give you',
            'Parallel outreach compresses responses into one window and creates competitive momentum and comparable offers; size the raise to your next milestone plus a buffer (often ~18 months of burn), because every dollar is dilution',
            'You should always go one at a time to be respectful; the amount doesn\'t matter',
            'Parallel outreach guarantees a higher valuation; raise as little as possible regardless of milestones',
          ],
          answer: 1,
          explain: 'Serial fundraising lets each investor take their time while your runway bleeds and gives you no leverage. Parallel outreach overlaps response times, creates urgency (investors are herd animals), and yields comparable term sheets. And you size the raise to the milestone-plus-buffer your burn implies — not to maximize the check — because every dollar is permanent dilution and a bigger growth obligation.',
        },
        {
          kind: 'mcq',
          prompt: 'Which situation is the CLEAREST case for NOT raising venture money?',
          options: [
            'You have real traction and a market that could plausibly support a very large company',
            'Your business is profitable and lovely but realistically tops out at a market too small to ever return a venture fund',
            'You have several term sheets and are negotiating control provisions',
            'You have 18 months of runway modeled and a clear next milestone',
          ],
          answer: 1,
          explain: 'Venture capital needs companies that can become very large; a business capped at a small market is a strong bootstrapped outcome but a poor venture fit, and taking VC commits you to a scale the market can\'t deliver. The other cases (real traction into a big market, negotiating term sheets, a clear milestone with runway) are all consistent with a sensible raise. "No" is a legitimate, often superior answer.',
        },
        {
          kind: 'free',
          prompt: 'First, make the honest call: SHOULD your venture raise venture money right now? Justify it against real criteria (signal, market size, bootstrap alternative, your goals). If yes, write your one-line fundable pitch, state how much you\'d raise and why (tie it to burn and a milestone), and name three real, appropriately-matched investors or investor types you\'d approach in parallel — and confirm your data room is ready.',
          rubric: 'Strong answer: (1) makes a defensible raise/don\'t-raise decision against REAL criteria (has demand signal, market big enough to return a fund, whether bootstrapping fits, founder goals) rather than assuming raising is the goal; (2) if raising, writes a crisp one-line pitch (who/problem/why-now/why-you/proof); (3) sizes the raise to burn x months-to-milestone plus buffer, not "as much as possible"; (4) names appropriately-matched investors (right stage/sector/check) and commits to parallel outreach; (5) confirms the data room artifacts (books, cap table, model) from earlier lessons are ready. Reward a well-argued "no." Penalize treating raising as automatic, over-raising, or a vague pitch.',
        },
      ],
      commitSummary: 'no slot written — your raise plan (a one-line pitch + a curated investor list) is saved in "My venture," and because your books, cap table, and SAFE model are already done, your data room is ready before an investor ever asks — plus you know when the right answer is not to raise at all.',
    },
  ],
}
