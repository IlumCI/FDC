import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 14 — Macroeconomics for founders  (SEASON 2)
//
// Season 2 is "Building for Real". A real venture does not run in a vacuum: it
// runs inside a macro environment the founder does not control but must read.
// This module teaches the four dials that quietly move a startup's fate —
// interest rates (the price of money), inflation (the erosion of value), the
// business cycle (timing with lag), and capital markets (where the money comes
// from) — and connects each to the three things a founder actually feels:
// runway, customers' budgets, and fundraising odds. Every lesson is
// artifactSlot:null; the hands-on work happens through `blocks` (a real FRED
// pull, real-vs-nominal math, indicator sorting, a fundraising-timing scenario).
// Macro data is revised and regime-dependent — every worked number here is
// flagged illustrative, and learners are pointed at live primary sources.
// ===========================================================================

export const module14: Module = {
  id: 14,
  season: 2,
  title: 'Macroeconomics for founders',
  goal: 'Read the macro environment — rates, inflation, cycles, capital markets — and know how it moves your runway, your customers\' budgets, and your fundraising odds.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '14.1',
      module: 14,
      title: 'Interest rates & the price of money',
      estMinutes: 18,
      prerequisites: ['13.1'],
      artifactSlot: null,
      concept: `There is one macro variable that sits upstream of almost everything else in your business, and it is the **short-term interest rate** set by the central bank (in the US, the federal funds rate set by the FOMC). Treat it as the *global price of money* — the base cost of renting a dollar for a year. When that price moves, it re-prices everything denominated in future dollars, which is to say, everything.

The mechanism you must internalize is **discounting**. A dollar arriving in five years is worth less than a dollar today, and *how much* less is governed by the discount rate, which is anchored to interest rates. The present value of a future cash flow is

$$PV = \\frac{FV}{(1+r)^n}$$

Raise $r$ and every far-off dollar shrinks — and startups are almost pure *far-off dollars*. Their value lives in cash flows years away, so their valuations are the most rate-sensitive assets in the market. That is why a rate hike compresses growth-company valuations far more than it dents a mature, cash-throwing utility.

Rates ripple through three channels you feel directly. First, **venture funding**: higher risk-free rates raise the return LPs demand, so capital gets scarcer and pricier upstream of you. Second, **discount rates**: your own valuation and any DCF anyone runs on you fall as rates rise. Third, **customer spending**: your buyers' borrowing costs rise, budgets tighten, and long-payback purchases get deferred. Rates are not background noise. They are the single dial that moves your runway, your price, and your customers at once.`,
      reframe: {
        analogy: `The interest rate is the **clock frequency** of the whole economic machine, and money is a signal that attenuates as it propagates into the future. Discounting is exactly a low-pass filter: distant cash flows are high-frequency content that the rate attenuates before it reaches present value. Crank the rate up and the filter gets aggressive — anything far out in time is heavily damped, so only near-term, high-amplitude cash flows survive to the output. A startup's value is almost entirely in the far-out band, so it is precisely the signal the filter kills first. Cut rates and the filter relaxes; faint far-future promises suddenly ring through at full strength, and speculative valuations light up.`,
        breaks: `A real low-pass filter has a *fixed, known* cutoff; the discount rate is neither. It is set by a committee reacting to messy data, it can jump in steps (not smoothly), and it is *forward-looking* — markets price the rate they expect in a year, not today's, so present values move on **expectations** before the central bank acts at all. Worse, the "signal" itself is your own uncertain forecast, not a clean waveform: two founders discounting the same startup use different growth assumptions and get valuations that differ by multiples. So rates set the *filter*, but you are also guessing the *input*. The circuit metaphor gives you the transfer function; it does not hand you the signal.`,
      },
      workedExample: `**The 2021-to-2023 rate shock and growth valuations.** Through 2021 the US federal funds rate sat near zero, and the price of unprofitable, long-duration growth assets ran hot — the tech-heavy indices and countless private "2021-vintage" rounds were priced as if cheap money would last. Then, to fight inflation, the FOMC raised the target range from roughly 0% to over 5% across 2022–2023, the fastest tightening in decades (rate levels are public via the Fed and FRED, cited below). The re-pricing was brutal precisely where duration was longest: high-multiple, no-profit software names fell hardest, and late-stage private valuations that had been set in the zero-rate era were marked down or trapped as "down rounds" loomed.

Run the discounting intuition on illustrative numbers. Take a hypothetical $1,000,000 exit expected in 5 years. At an 8% discount rate its present value is about $681,000; push the rate to 15% and it falls to roughly $497,000 — a **27% haircut from the rate change alone**, with zero change to the business. (These figures are illustrative arithmetic, not a market quote.) The transferable lesson: when you hear "rates are up," translate it instantly into "the market is discounting my future dollars harder," and expect it to show up as lower valuations, pickier investors, and more cautious customers — all at once, and all before your fundamentals change.`,
      branch: {
        scenario: `You're modelling your own valuation to prep a raise. Your pitch leans almost entirely on a large profit pool you project **7 years out**. Overnight, the central bank signals rates will stay "higher for longer." A friend says "you're pre-revenue, macro rates have nothing to do with you." How should you think about it?`,
        choices: [
          {
            label: 'He\'s right — interest rates only matter to banks and people with loans, not to an early-stage startup with no debt.',
            correct: false,
            consequence: `**The most expensive misconception in this module.** You carry no debt, but your *value* is almost entirely far-future cash flow — the most rate-sensitive thing that exists. Higher-for-longer raises the discount rate applied to those year-7 profits, shrinking their present value the most, and simultaneously makes your investors' capital scarcer and their required returns higher. A no-debt, long-duration startup is *more* exposed to rates than a boring cash-generating business, not less.`,
          },
          {
            label: 'Rates re-price my future dollars: my valuation math, my investors\' cost of capital, and my customers\' budgets all tighten together — so I should shorten my payback story and raise on nearer-term proof.',
            correct: true,
            consequence: `**Correct.** You translated the headline into mechanism. Higher rates discount your year-7 pool harder (lower PV), raise the return your investors must clear (tougher terms, lower multiples), and squeeze customers' budgets (slower sales). The disciplined response is to de-risk *duration*: pull real proof forward, lead with nearer-term revenue and efficient growth, and stop pricing yourself as if it were still a zero-rate world.`,
          },
          {
            label: 'Rates are down to luck — just wait for them to fall again and raise then; nothing to do in the meantime.',
            correct: false,
            consequence: `**Passive and dangerous.** You cannot time the FOMC, and "wait for cheap money" can burn a year of runway you don't have. You can't move rates, but you *can* move your exposure to them: shorten your payback narrative, improve capital efficiency, and raise on proof that doesn't depend on a rate cut arriving. Read the tape, then adjust what you control — don't just sit in the rain waiting for weather.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Discounting, felt directly. You project a $1,000,000 outcome arriving in 5 years. Using PV = FV / (1 + r)^n with a discount rate of r = 0.15, what is the present value in dollars? (Compute 1,000,000 / 1.15^5.)',
          answer: 497177,
          tolerance: 3000,
          unit: '$',
          explain: 'PV = 1,000,000 / (1.15)^5 = 1,000,000 / 2.0114 = about $497,177. At an 8% rate the same $1,000,000 is worth about $681,000, so lifting the rate from 8% to 15% erases roughly $184k — a 27% haircut — with no change to the business. Long-duration cash flows are the most rate-sensitive thing you own, which is exactly why startup valuations move so violently when rates do. Figures are illustrative arithmetic.',
        },
        {
          kind: 'platformTask',
          title: 'Pull the real policy rate from FRED',
          body: 'Go to the primary source and read the current price of money for yourself. Open the Federal Funds Effective Rate series (FEDFUNDS) on FRED, note the most recent value, and record it. While you are there, glance at the last three years of the chart so you can see the 2022–2023 tightening with your own eyes. Then record the latest rate as a number (percent).',
          links: [
            { label: 'FRED — Federal Funds Effective Rate (FEDFUNDS)', url: 'https://fred.stlouisfed.org/series/FEDFUNDS' },
            { label: 'Federal Reserve — Economy at a Glance: Policy Rate', url: 'https://www.federalreserve.gov/economy-at-a-glance-policy-rate.htm' },
          ],
          steps: [
            'Open the FEDFUNDS series on FRED and find the latest observation (top of the page).',
            'Set the chart range to the last 3–5 years and observe the shape of the tightening/easing path.',
            'Note whether the rate is currently rising, falling, or holding — this is your macro "clock frequency" right now.',
            'Record the latest federal funds rate as a number (percent) below.',
          ],
          taskKey: '14.1#fedfunds',
          proofLabel: 'Latest federal funds effective rate (percent, e.g. 4.33)',
          proofKind: 'number',
        },
        {
          kind: 'resource',
          title: 'The price of money — primary sources',
          items: [
            { label: 'Federal Reserve — Monetary Policy & the FOMC', url: 'https://www.federalreserve.gov/monetarypolicy/fomc.htm', note: 'Who sets the rate, when they meet, and why. The FOMC decides the target range.' },
            { label: 'St. Louis Fed — How the Fed Implements Monetary Policy (plain English)', url: 'https://www.stlouisfed.org/in-plain-english/the-fed-implements-monetary-policy', note: 'The clearest short explainer of the tools behind the headline rate.' },
            { label: 'Aswath Damodaran — The Cost of Capital', url: 'https://pages.stern.nyu.edu/~adamodar/pdfiles/papers/costofcapital.pdf', note: 'How the risk-free rate feeds discount rates and valuation. Graduate-level, canonical.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Translate a rate move into my numbers', kind: 'ask', question: 'Given my projected exit or profit pool and roughly when it arrives, show me how much its present value changes if the discount rate moves from one level to another, and explain what that implies for my valuation and my raise.' },
        { label: 'How exposed is my model to rates?', kind: 'ask', question: 'Help me estimate the "duration" of my startup\'s value — how far out my cash flows are — and therefore how sensitive my valuation is to interest-rate changes, and what I could do to shorten that duration.' },
        { label: 'A harder rate-transmission case', kind: 'harder', concept: 'how central-bank rate changes propagate to venture funding and customer budgets with different lags, and why expectations move valuations before the rate itself changes' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why are early-stage startup valuations typically MORE sensitive to interest-rate changes than the valuations of mature, cash-generating companies?',
          options: [
            'Because startups usually carry more debt than mature companies',
            'Because a startup\'s value is concentrated in cash flows far in the future ("long duration"), and higher discount rates shrink far-future dollars the most',
            'Because central banks specifically target startups when they raise rates',
            'Because startups pay their employees in cash rather than equity',
          ],
          answer: 1,
          explain: 'Present value falls as the discount rate rises, and the effect compounds with time: PV = FV / (1+r)^n. A startup\'s value lives years out, so it is "long duration" and gets discounted hardest when rates rise — regardless of whether it holds any debt. Duration, not leverage, is the driver here.',
        },
        {
          kind: 'mcq',
          prompt: 'A founder hears the central bank has raised rates. Which set of effects should she expect to move TOGETHER as a result?',
          options: [
            'Her valuation rises, investors get cheaper capital, and customers spend more freely',
            'Her valuation falls, investors\' required returns rise (capital gets scarcer/pricier), and customers\' budgets tighten',
            'Nothing changes, because rates only affect banks',
            'Only her debt payments change; valuation and customers are unaffected',
          ],
          answer: 1,
          explain: 'One dial, three effects, all in the same direction: higher rates discount her future cash flows harder (lower valuation), raise the return LPs and VCs demand (scarcer, pricier capital), and raise her customers\' borrowing costs (tighter budgets, deferred purchases). Rates move runway, price, and demand at once.',
        },
        {
          kind: 'free',
          prompt: 'Explain, in your own words, the chain from a central-bank rate hike to your specific startup. Reference (1) discounting of your future cash flows, (2) the effect on your fundraising, and (3) the effect on your customers. Then state one concrete way you would make your business LESS exposed to rate risk.',
          rubric: 'Strong answer: (1) correctly links higher rates to a higher discount rate and lower present value of the startup\'s (long-duration) future cash flows; (2) explains that higher rates raise investors\' required returns and make venture capital scarcer/pricier, hurting fundraising odds and valuation; (3) notes customers\' budgets tighten as borrowing costs rise and long-payback purchases get deferred; (4) proposes a concrete de-risking move (shorten payback narrative, improve capital efficiency, pull real revenue proof forward, extend runway). Penalize the belief that a debt-free startup is unaffected by rates.',
        },
      ],
      commitSummary: 'no slot written — you now read the policy rate as the price of money and can translate any rate move into effects on your valuation, your raise, and your customers.',
    },

    // -----------------------------------------------------------------------
    {
      id: '14.2',
      module: 14,
      title: 'Inflation & real vs nominal',
      estMinutes: 16,
      prerequisites: ['14.1'],
      artifactSlot: null,
      concept: `Inflation is the slow leak in the measuring stick. Every dollar figure you track — runway, salary, price, revenue growth — is quoted in **nominal** terms, meaning "number of dollars," and inflation quietly changes what a dollar buys underneath those numbers. The discipline this lesson installs is to separate **nominal** (the headline number) from **real** (the number after stripping out inflation), and to index everything that matters to the real figure.

The conversion is simple. If $\\pi$ is the inflation rate over a period,

$$\\text{real} = \\frac{\\text{nominal}}{1+\\pi}$$

and for growth rates the clean rule of thumb is *real growth is approximately nominal growth minus inflation*. So 8% nominal revenue growth in a 5% inflation year is only about 3% real growth — you are running to stand still, and a naive dashboard hides it.

Two founder-specific bites. First, inflation **erodes runway**: your cash pile is fixed in nominal dollars, but the salaries, cloud bills, and rent it must cover creep up, so a "12-month runway" quietly becomes shorter in real terms as costs inflate. Second, inflation tests your **repricing power**: if your input costs rise 6% but you cannot raise prices without losing customers, the gap comes straight out of your margin. Businesses with pricing power pass inflation through; commodity businesses eat it. The strategic question inflation forces is therefore not "will costs rise?" — they will — but "can I reprice fast enough to keep my real margin intact?" Index your plans to real values, or inflation will quietly reprice your business without asking you.`,
      reframe: {
        analogy: `Nominal figures are **uncalibrated sensor readings**; inflation is sensor drift. Any experienced engineer knows a raw ADC count is meaningless until you subtract the baseline drift and convert to physical units. Reporting revenue growth in nominal dollars during an inflationary year is like logging a temperature rise without noticing your thermistor's reference voltage crept up — the instrument reads "hotter" partly because the ruler changed, not the world. Deflating by the price index is the calibration step: it converts drifting nominal readings back into stable real units so that when your dashboard says "up 3%," it means 3% more *stuff*, not 3% more *drifted dollars*.`,
        breaks: `Sensor drift is usually a single, measurable offset; inflation is **heterogeneous and personal**. The headline CPI is an average over a fixed basket, but *your* basket — senior-engineer salaries, GPU compute, SaaS tools, Bay Area rent — can inflate far faster or slower than the index. Calibrating everything to one national number can leave you badly miscalibrated for your actual cost structure. And unlike a passive sensor, your customers *react* to the calibration: raise prices to offset inflation and some churn, so the "correction" itself perturbs the system. Deflating by CPI is the right first move, but treat the national index as an approximate reference, then build your own cost-inflation gauge for the inputs that actually dominate your burn.`,
      },
      workedExample: `**The 2021–2023 inflation spike and the "index everything" lesson.** US headline CPI inflation, which had run near 2% for years, surged to a peak around 9% year-over-year in mid-2022 — the highest in four decades — before cooling as the Fed tightened (the CPI series is public via BLS and FRED, cited below). For founders this was a live drill in real-vs-nominal. Companies celebrating "20% revenue growth" discovered that with inflation near 8%, real growth was closer to 12%, and any flat-priced contract signed in 2021 was silently losing real value every month it ran.

Work an illustrative case. Suppose your revenue grew **8% nominal** over a year in which inflation was **5%**. The rule of thumb says real growth is about 8 − 5 = 3%; the exact figure is $(1.08 / 1.05) - 1 \\approx 2.86\\%$. Either way, nearly two-thirds of your headline growth was the measuring stick shrinking, not your business expanding. Now flip it to costs: a startup whose salary and compute bill inflated 6% while it held prices flat "to be nice to customers" handed that entire 6% to its margin. The transferable habits are concrete: quote your key metrics in real terms at least once a quarter, put **inflation-adjustment or index clauses** into multi-year contracts, and re-examine pricing on a schedule rather than treating a launch price as permanent. (All figures illustrative.)`,
      branch: {
        scenario: `Your main input costs (senior salaries, cloud compute) have risen about **6%** over the past year. Your annual contracts are up for renewal. A teammate argues: "Customers hate price increases — let's hold prices flat this year to keep everyone happy and revisit next year." Your gross margin is already tight. What's the disciplined call?`,
        choices: [
          {
            label: 'Hold prices flat — keeping customers happy is worth more than a few points of margin, and inflation is temporary.',
            correct: false,
            consequence: `**Eating inflation silently.** Holding prices flat while inputs rise 6% doesn\'t keep your economics flat — it transfers the entire 6% cost increase into a margin cut, on already-tight margins. "Inflation is temporary" is a bet, not a plan, and even temporary inflation compounds into your cost base. You haven\'t avoided a price increase; you\'ve just chosen to pay it yourself instead of testing whether customers would.`,
          },
          {
            label: 'Reprice deliberately — raise prices to protect real margin, communicate the value, and add an index/inflation clause so future renewals adjust automatically.',
            correct: true,
            consequence: `**Correct.** This is repricing power in action. You protect real margin by passing through cost inflation, you frame it around value (not apology), and — critically — you install an index clause so you\'re not re-fighting this battle every year. Some customers may push back; a modest, well-communicated increase from a product they rely on rarely causes the churn founders fear. Test your pricing power rather than assuming you have none.`,
          },
          {
            label: 'Raise prices by 40% across the board immediately to build in a big buffer against any future inflation.',
            correct: false,
            consequence: `**Overcorrection.** A sudden 40% jump, wildly above your ~6% cost inflation, isn\'t indexing — it\'s a shock that invites churn and signals panic. The goal is to keep *real* margin roughly whole by passing through actual cost inflation (plus a sensible value-based increase), and to automate future adjustments with an index clause. Reprice to reality, not to a worst-case fantasy that drives away the customers you need.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Real vs nominal, exactly. Your revenue grew 8% year-over-year in nominal terms, and inflation over the same year was 5%. What was your approximate REAL revenue growth rate, in percent? Compute (1.08 / 1.05 − 1) × 100.',
          answer: 2.86,
          tolerance: 0.3,
          unit: '%',
          explain: 'Real growth = (1 + nominal) / (1 + inflation) − 1 = 1.08/1.05 − 1 = 0.0286, i.e. about 2.86%. The quick rule of thumb "nominal minus inflation" gives 8 − 5 = 3%, close enough for a gut check. Either way, more than half of the headline 8% was the shrinking measuring stick, not real expansion. Always deflate before you celebrate. Figures illustrative.',
        },
        {
          kind: 'resource',
          title: 'Inflation — read the real series yourself',
          items: [
            { label: 'FRED — Consumer Price Index (CPIAUCSL)', url: 'https://fred.stlouisfed.org/series/CPIAUCSL', note: 'The headline US price index. Use the "Percent Change from Year Ago" view to read the inflation rate directly.' },
            { label: 'FRED — Core CPI, less food & energy (CPILFESL)', url: 'https://fred.stlouisfed.org/series/CPILFESL', note: 'Strips out the two most volatile components; central banks watch this for the underlying trend.' },
            { label: 'U.S. Bureau of Labor Statistics — Consumer Price Index', url: 'https://www.bls.gov/cpi/', note: 'The primary source: how the basket is built, and why your personal inflation may differ from the headline.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Deflate my metrics for me', kind: 'ask', question: 'Take my nominal revenue growth (and any other dollar metrics I give you) and an inflation rate, and show me the real figures — then tell me whether my "growth" is real expansion or mostly the measuring stick shrinking.' },
        { label: 'Do I have repricing power?', kind: 'ask', question: 'Help me assess my pricing power: given my customers, alternatives, and how essential my product is, how much of my input-cost inflation can I realistically pass through in a price increase, and how should I structure an index clause?' },
        { label: 'Stress-test my inflation assumptions', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Your dashboard shows 10% nominal revenue growth for the year. Inflation over the same year was 7%. What is the most accurate reading of your performance?',
          options: [
            'You grew 10% in real terms — inflation is the government\'s problem, not yours',
            'You grew about 3% in real terms; roughly 7 of the 10 points were the shrinking value of the dollar, not real expansion',
            'You grew 17% in real terms, because you add inflation to nominal growth',
            'Real and nominal growth are the same thing; the distinction doesn\'t matter for a startup',
          ],
          answer: 1,
          explain: 'Real growth is approximately nominal minus inflation: 10 − 7 ≈ 3% (exactly 1.10/1.07 − 1 ≈ 2.8%). Most of the headline was the measuring stick shrinking. Deflating nominal figures is the calibration step that tells you whether you actually delivered more, or just counted more drifted dollars.',
        },
        {
          kind: 'mcq',
          prompt: 'What does inflation primarily test about a business, and what distinguishes firms that come through it well?',
          options: [
            'It tests marketing budgets; winners spend more on ads',
            'It tests repricing power; firms that can pass rising input costs through to prices protect their real margin, while commodity businesses eat the cost',
            'It tests office location; winners move to cheaper cities',
            'It tests headcount; winners always cut staff during inflation',
          ],
          answer: 1,
          explain: 'Inflation raises input costs for everyone; the differentiator is whether you can raise prices without losing customers. Firms with genuine pricing power pass cost inflation through and hold real margin; those without it absorb the increase as a margin cut. Index clauses and scheduled pricing reviews operationalize that power.',
        },
        {
          kind: 'free',
          prompt: 'Pick two dollar figures central to your venture (e.g. runway and revenue, or price and a key cost) and explain how inflation affects each in REAL terms over a year. Then state one concrete "index everything" habit — a contract clause, a pricing cadence, or a real-terms metric — you will adopt.',
          rubric: 'Strong answer: (1) correctly converts at least one nominal figure to real using deflation or the nominal-minus-inflation rule of thumb, with a concrete number; (2) explains runway erosion (fixed nominal cash vs rising nominal costs) and/or repricing power (input costs vs ability to raise prices); (3) distinguishes real from nominal clearly rather than conflating them; (4) commits to a specific indexing habit (index/inflation clause in contracts, quarterly real-terms review, scheduled repricing). Penalize answers that treat nominal figures as if inflation-proof.',
        },
      ],
      commitSummary: 'no slot written — you now separate real from nominal by reflex, and will index your runway, prices, and contracts against the measuring stick instead of trusting it.',
    },

    // -----------------------------------------------------------------------
    {
      id: '14.3',
      module: 14,
      title: 'The business cycle & timing',
      estMinutes: 18,
      prerequisites: ['14.2'],
      artifactSlot: null,
      concept: `Economies do not grow in a straight line; they cycle — **expansion, peak, contraction, trough**, and back — and the whole thing behaves like a control loop with long, variable lags. That lag is the single most important thing for a founder to understand, because it means the macro news you read is always about the *past*, while your decisions land in the *future*. By the time a recession is officially declared (in the US, by the NBER, often months after it began), the trough may be near; by the time the boom feels unstoppable, the peak may be behind you.

This is a classic **feedback-with-delay** problem, and delayed feedback is what makes control loops oscillate. The central bank raises rates to cool an overheating economy, but the effect on hiring and investment arrives many months later — so the economy can still be slowing *after* the bank starts cutting again. You inherit that oscillation whether you like it or not.

Two strategic postures follow. **Procyclical** bets amplify the cycle: hire aggressively and spend freely in the boom, freeze in the bust — which feels natural and is usually wrong, because you buy talent and demand at their most expensive and abandon them at their cheapest. **Countercyclical** bets lean against it: build efficiency and hoard runway in the boom so you can hire cheap talent and win share when weaker competitors retreat in the bust. The founder's rule is not to *predict* the cycle — that is a fool's errand with those lags — but to know roughly where you are, and above all, **don't fight the macro tape**: don't plan a cash-burning land-grab into a tightening cycle, and don't hoard timidly through a genuine expansion.`,
      reframe: {
        analogy: `The business cycle is a **PID-controlled system with large transport delay**, and the central bank is the controller trying to hold the economy at a setpoint (stable prices, full employment). Any control engineer knows the failure mode instantly: when the feedback delay is long relative to the system's response time, aggressive control causes **oscillation and overshoot**. The controller sees an error, applies a big correction, but the effect doesn't arrive for months — so it over-applies, the system overshoots the other way, and it must correct back. That is precisely why economies boom and bust rather than gliding to equilibrium: the loop is stable in principle but rings because of the lag. Leading indicators are your attempt to estimate the system's *future* state so you don't steer purely by the delayed measurement.`,
        breaks: `In a real control loop the plant dynamics are stationary and knowable, so you can tune the controller and even add a predictor (a Smith predictor) to compensate the delay. The economy is **non-stationary and reflexive**: its "transfer function" shifts as technology, demographics, and expectations change, and the agents inside it *anticipate the controller* and act on the anticipation, which moves the system before the controller does. No fixed model holds. So the cycle metaphor rightly teaches "delay causes oscillation, estimate the future state" — but it wrongly implies the plant is knowable enough to control precisely. It isn't. That is exactly why the humble goal is to know roughly *where* you are and not fight the tape, not to predict the next turning point to the month.`,
      },
      workedExample: `**The yield-curve inversion as a leading indicator.** One of the most-watched recession signals is the spread between 10-year and 2-year US Treasury yields (FRED series T10Y2Y). Normally long rates exceed short rates; when the spread goes **negative** ("inverts"), markets are pricing a slowdown, and historically most sustained inversions have preceded a recession — but with a *long and variable lag*, often on the order of a year or more, and not without exceptions (the 2022–2024 inversion was the longest on record and, unusually, was not promptly followed by an NBER-dated recession). Treat this as a genuine but imperfect signal, not a clock.

Here is the founder's takeaway made concrete. The inversion is a **leading** indicator (it turns before the economy does); the unemployment rate and the official NBER recession declaration are **lagging** (they confirm what already happened). If you steer only by lagging data, you are the controller reacting to a months-old measurement — you'll hire into the top and freeze into the bottom. A founder who noticed persistent inversion and tightening financial conditions in 2022 and responded by extending runway and prioritizing efficiency was not predicting the future; they were reading a leading indicator and refusing to fight a tightening tape. The lesson is not "trade the yield curve." It is: know which of your signals lead and which lag, weight the leading ones when you plan, and size your bets to survive being wrong about timing. (Historical patterns described qualitatively; do not treat any single indicator as deterministic.)`,
      branch: {
        scenario: `Leading indicators are flashing caution: the yield curve has inverted, financing is tightening, and layoffs are starting at larger firms — but headline unemployment is still low and the official data still says "expansion." You have 16 months of runway and were about to triple your burn on an aggressive growth push. What's the disciplined move?`,
        choices: [
          {
            label: 'Full speed ahead — unemployment is still low and no recession has been declared, so the data says expansion. Triple the burn.',
            correct: false,
            consequence: `**Steering by the lagging gauge.** Low unemployment and "no declared recession" are *lagging* confirmations of the past; the inverted curve and tightening financing are *leading* signals of the future your burn will land in. Tripling burn into a tightening tape means you\'ll be raising your next round into the worst funding climate — exactly the procyclical trap. The data you\'re trusting is the rear-view mirror.`,
          },
          {
            label: 'Read the leading signals: extend runway, prioritize efficient growth now, and keep dry powder to hire cheap talent and win share if a downturn actually arrives.',
            correct: true,
            consequence: `**Correct.** You weighted the leading indicators over the lagging ones and chose a countercyclical posture: lengthen runway so you don\'t have to raise at the bottom, grow efficiently, and position to pounce when weaker competitors retreat and talent gets cheap. You didn\'t *predict* a recession — you sized your bets to survive being wrong about timing while staying ready to exploit a downturn.`,
          },
          {
            label: 'Panic: halt everything, lay off half the team, and stop all spending until the macro picture is completely clear.',
            correct: false,
            consequence: `**Overreacting to a signal that leads with a long, variable lag.** Leading indicators warn of *elevated risk*, not a certainty, and they can lead by a year or more (or occasionally not resolve into a recession at all). Slashing to the bone destroys the capability you\'ll need to win the recovery and may be premature by many months. The move is to extend runway and tilt toward efficiency while keeping optionality — not to detonate the company over a probabilistic signal.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'To steer with the cycle you must know which signals turn BEFORE the economy (leading) and which only confirm AFTER the fact (lagging). Sort each indicator. When you plan, weight the leading column and treat the lagging column as confirmation, not news.',
          buckets: ['Leading (turns before the economy)', 'Lagging (confirms after the fact)'],
          items: [
            { text: 'Yield-curve inversion (10-year minus 2-year Treasury spread)', bucket: 'Leading (turns before the economy)' },
            { text: 'New building permits and housing starts', bucket: 'Leading (turns before the economy)' },
            { text: 'Stock-market / equity prices', bucket: 'Leading (turns before the economy)' },
            { text: 'Initial jobless claims (new unemployment filings)', bucket: 'Leading (turns before the economy)' },
            { text: 'The unemployment rate', bucket: 'Lagging (confirms after the fact)' },
            { text: 'Reported core CPI inflation', bucket: 'Lagging (confirms after the fact)' },
            { text: 'The official NBER recession declaration', bucket: 'Lagging (confirms after the fact)' },
            { text: 'Reported corporate profits', bucket: 'Lagging (confirms after the fact)' },
          ],
          explain: 'Leading indicators (yield curve, permits, equities, initial claims) turn before the broad economy and are what you weight when planning a future-dated bet. Lagging indicators (unemployment rate, CPI, the NBER declaration, reported profits) confirm what already happened — useful for verification, dangerous as a steering wheel. Founders who plan by lagging data hire into the peak and freeze into the trough.',
        },
        {
          kind: 'rank',
          prompt: 'A tightening cycle is a feedback loop with delay. Put the stages of a classic rate-tightening cycle in causal order, first cause to final effect, so you can see why the lag makes it oscillate.',
          items: [
            'Inflation runs hot above the central bank\'s target',
            'The central bank raises interest rates to cool the economy',
            'The cost of capital rises and financial conditions tighten',
            'Business investment and hiring slow — but only after a lag of months',
            'Growth weakens and unemployment begins to rise',
            'The central bank pivots and starts cutting rates again',
          ],
          explain: 'Hot inflation triggers rate hikes, which raise the cost of capital and tighten financial conditions, which slow investment and hiring — but with a lag of many months — which finally weakens growth and lifts unemployment, prompting the bank to cut. That lag between action (hikes) and effect (slowdown) is exactly why the economy overshoots and oscillates rather than gliding to a soft landing. Reading where you are in this chain beats predicting its next turn.',
        },
      ],
      tutorHooks: [
        { label: 'Where are we in the cycle?', kind: 'ask', question: 'Walk me through the leading indicators I should check right now (yield curve, jobless claims, permits, financial conditions) and help me form a rough view of where we are in the business cycle — without pretending we can predict the exact turning point.' },
        { label: 'Procyclical or countercyclical for me?', kind: 'ask', question: 'Given my runway, burn, and market, help me decide whether to lean procyclical or countercyclical right now, and translate that into concrete moves on hiring, spend, and my next fundraise.' },
        { label: 'A harder timing case', kind: 'harder', concept: 'why leading indicators can flash a false signal (e.g. an inversion not followed by recession) and how to size bets to survive being wrong about cycle timing' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why does the "long and variable lag" between a central-bank action and its economic effect matter so much for a founder\'s decisions?',
          options: [
            'It doesn\'t — macro moves too slowly to affect a startup',
            'Because the macro data you read describes the past while your decisions land in the future, so steering by lagging confirmations makes you hire into peaks and freeze into troughs',
            'Because it means you can perfectly predict the next recession from the yield curve',
            'Because lags make interest rates irrelevant to timing',
          ],
          answer: 1,
          explain: 'The lag decouples the news from the moment your decision takes effect. Official confirmations (recession declared, unemployment up) are lagging, so acting on them means reacting to a months-old state — the classic procyclical error of expanding at the top and retreating at the bottom. Leading indicators are your imperfect estimate of the future state you\'ll actually operate in.',
        },
        {
          kind: 'mcq',
          prompt: 'What is a COUNTERCYCLICAL posture for a startup, and why is it often the disciplined choice?',
          options: [
            'Spend and hire hardest during booms and freeze during busts — following the crowd',
            'Build efficiency and hoard runway during booms so you can hire cheap talent and win share when weaker competitors retreat during busts',
            'Ignore the cycle entirely and keep burn constant no matter what',
            'Time the market by predicting the exact peak and trough',
          ],
          answer: 1,
          explain: 'Countercyclical means leaning against the cycle: accumulate strength (efficiency, runway) when everyone is euphoric and capital/talent are expensive, then deploy when they are cheap and rivals are retreating. Procyclical behavior — the natural, herd-following instinct — buys high and abandons low. Countercyclical does not require prediction, only knowing roughly where you are and not fighting the tape.',
        },
        {
          kind: 'free',
          prompt: 'Name two leading indicators and two lagging indicators, and explain why a founder should weight the leading ones when planning a future-dated bet (like a hiring spree or a raise). Then state, given your runway and market, whether you\'d lean procyclical or countercyclical right now and one concrete action that expresses it.',
          rubric: 'Strong answer: (1) correctly classifies two leading (e.g. yield-curve inversion, initial jobless claims, building permits, equity prices) and two lagging (e.g. unemployment rate, CPI, NBER declaration, reported profits) indicators; (2) explains that leading indicators estimate the future state a decision will land in, while lagging ones only confirm the past, so planning by lagging data causes procyclical mistakes; (3) takes a defensible procyclical/countercyclical stance tied to their actual runway/market; (4) names a concrete action (extend runway, tilt to efficiency, time a raise) and acknowledges timing uncertainty (size bets to survive being wrong). Penalize claims that the cycle can be predicted precisely.',
        },
      ],
      commitSummary: 'no slot written — you now treat the cycle as feedback-with-lag: weight leading indicators, refuse to fight the macro tape, and size bets to survive being wrong about timing.',
    },

    // -----------------------------------------------------------------------
    {
      id: '14.4',
      module: 14,
      title: 'Capital markets & where startup money comes from',
      estMinutes: 18,
      prerequisites: ['14.1', '14.3'],
      artifactSlot: null,
      concept: `The money you raise did not originate with your VC. It flows down a pipeline, and understanding the pipeline tells you why funding feels abundant some years and impossible in others. The chain is roughly: **LPs → VC funds → startups → exits → back to LPs**. Limited Partners — pension funds, endowments, sovereign wealth funds, insurers, wealthy families — allocate a slice of their capital to venture as one high-risk, high-return "asset class" among many. VCs raise funds *from* those LPs, deploy into startups, and are judged on the returns (via exits — acquisitions and IPOs) they send back. Every dollar in your round is really an LP's dollar, twice removed.

Macro tightens or loosens this funnel at the very top, and the effect cascades. When **rates rise**, two things happen to LPs. First, safe assets (Treasuries, bonds) suddenly pay a real return, so the *opportunity cost* of locking money in illiquid, risky venture funds jumps — venture has to clear a higher bar. Second, the **denominator effect**: when public stocks and bonds fall, venture becomes an oversized share of an LP's now-smaller portfolio, so they *stop* committing to new funds to rebalance. Both drain the top of the funnel, VCs raise smaller funds, deploy more slowly and pickily, and by the time it reaches you the round is smaller, the valuation lower, the diligence harsher, and the process longer.

The exit door matters too: venture returns depend on IPOs and acquisitions, and those windows slam shut when markets are volatile — no exits means no returns to LPs means less new fund formation. Reading the funding climate is therefore not vibes. It is reading rates, public-market health, and exit activity, and knowing they set the weather for your raise long before you walk into a partner meeting.`,
      reframe: {
        analogy: `Venture capital is a **power-delivery network**, and LPs are the upstream supply rail. Your startup is a leaf load at the far end; the VC fund is a local regulator that steps the supply down to you. Here is the systems insight: a leaf node cannot diagnose a brownout by staring at its own pins. When your round is suddenly hard to close, the fault usually isn't at your node — the supply rail sagged (LPs pulled back because rates rose and their portfolios fell) and the droop propagated all the way down. Reading capital markets is monitoring the *rail voltage*, not just your local load, so you understand whether the dimming is you or the whole network.`,
        breaks: `A power network is engineered for near-instant, uniform propagation; the capital "network" is **laggy, lumpy, and sentiment-driven**. Voltage on a bus tracks the source in microseconds, but LP pullbacks reach seed-stage startups with a lag of *quarters*, and unevenly — late-stage and hot sectors (whatever is fashionable) can stay flush while everything else browns out, or vice versa. And unlike electrons, the agents in this network *anticipate*: a rumor about LP sentiment moves valuations before any capital actually changes hands. So the metaphor rightly tells you "look upstream, not at your own pins" — but don't expect the clean, instantaneous, uniform propagation of a real grid. The funding climate is a weather system with fronts and micro-climates, not a circuit with a single rail voltage.`,
      },
      workedExample: `**The 2021 boom and the 2022–2023 reset in venture funding.** In 2021, with rates near zero and public tech valuations euphoric, the funnel was wide open: LPs poured into venture, US VC deal value hit record highs, rounds closed in days, and valuations detached from fundamentals. When the Fed raised rates hard through 2022, the funnel constricted from the top down exactly as the pipeline predicts: public tech fell (denominator effect kicked in), the IPO window essentially shut (few exits, so few returns back to LPs), LPs slowed new fund commitments, and by 2022–2023 startup fundraising had become dramatically harder — lower valuations, more down rounds, longer processes, and a flight to "efficient growth." The quarter-by-quarter figures are tracked in the PitchBook–NVCA Venture Monitor, cited below (consult it for the current numbers; treat any specific figure as time-stamped and revisable).

The founder's lesson is causal, not fatalistic. Nothing about individual startups' quality changed overnight in 2022; the *weather* changed, and it reached them through the LP → VC → startup pipeline with a lag. Two transferable moves follow. First, **read the climate before you raise**: check rates, public-market direction, and exit activity, and calibrate your timing, ask size, and valuation expectations to the actual regime rather than the last one. Second, **manage what you control**: in a tight climate, extend runway, raise a bit more than you think you need while you can, and optimize for efficient growth — because the same macro that shut the funnel is judging every founder who approaches it.`,
      branch: {
        scenario: `A fundraising-timing decision under a rate change. You have about 14 months of runway. Rates just jumped sharply, public tech is down 30%, and the IPO window has effectively closed. You have a term sheet in hand at a **flat** valuation to your last round — disappointing, but clean. Your instinct is to reject it and wait for a "fairer" price. What's the disciplined move?`,
        choices: [
          {
            label: 'Reject it and wait a couple of quarters for a higher valuation once the market "recovers."',
            correct: false,
            consequence: `**Fighting the tape.** The whole funnel just tightened from the top down — LPs pulled back, VCs turned cautious, exits closed — so waiting most likely means raising into a WORSE climate with less runway and more desperation. A clean flat round in a down market is often a good outcome, not an insult. You can't will the funding weather to improve on your schedule.`,
          },
          {
            label: 'Take the clean flat round now to extend runway well past the likely downturn, rather than gambling the next quarters on a market recovery.',
            correct: true,
            consequence: `**Correct.** In a tightening climate, certainty and runway beat holding out for a price the market may not offer again for years. A flat round with no ugly structure is a win when the funnel is closing. Money in the bank lets you operate from strength while competitors who held out for a "fair" price run out of road.`,
          },
          {
            label: 'Reject it and immediately switch to bootstrapping to profitability overnight at your current burn.',
            correct: false,
            consequence: `**Overcorrection into a different wall.** Flipping instantly to "default alive" is admirable in principle, but doing it overnight at your current burn — with no plan and a term sheet on the table — usually means panic cuts that break the company. Take the clean capital, THEN drive toward efficiency deliberately. Don't reject certain runway for an unplanned sprint to breakeven.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'scenario',
          title: 'You raised the flat round — now deploy it through the downturn',
          intro: 'You took the clean flat round from the branch decision. The macro tape is still against you: rates are high, public comps are down, and exits are frozen. Two sequential decisions determine whether that capital makes you antifragile or just delays the reckoning.',
          decisions: [
            {
              situation: 'The round has closed and the cash is in the bank. The climate is still tight and the next up round is far from guaranteed. How do you deploy the capital?',
              options: [
                {
                  label: 'Triple burn on an aggressive land-grab to grow into the next up round as fast as possible.',
                  correct: false,
                  outcome: 'Procyclical, into a closed funnel. Tripling burn assumes a friendly next round the current climate is unlikely to provide on your timeline. Burn fast while the window stays shut and you raise from weakness into weakness. The macro is telling you to buy time and efficiency, not to sprint toward a door that is bolted.',
                },
                {
                  label: 'Stretch the runway to 24+ months, prioritize efficient growth, and keep dry powder to hire cheap talent and take share as weaker rivals fold.',
                  correct: true,
                  outcome: 'Correct — countercyclical and climate-aware. Long runway means you never have to raise at the bottom; efficient growth improves the metrics your next round will be judged on; dry powder lets you exploit the downturn (cheap talent, retreating competitors) instead of being exploited by it. You converted certainty into optionality.',
                },
                {
                  label: 'Park all of it in Treasuries and freeze the business until the macro is unambiguously clear.',
                  correct: false,
                  outcome: 'Over-hoarding is its own failure. Earning yield on idle cash while the product stalls hands your market to competitors who kept building efficiently. Extend runway AND keep growing efficiently — the goal is to survive the downturn from a position that lets you attack, not to hibernate until the all-clear that never quite rings.',
                },
              ],
            },
            {
              situation: 'A quarter later a strong senior engineer — laid off by a larger rival that over-hired in the boom — is available at a reasonable rate, and would extend your core team meaningfully. Hiring them shortens your runway by about two months. Do you make the hire?',
              options: [
                {
                  label: 'No — in a downturn you freeze all hiring on principle, no exceptions.',
                  correct: false,
                  outcome: 'A blanket freeze is procyclical dressed up as prudence. Downturns are exactly when top talent becomes available cheaply because rivals over-hired at the peak. A rigid no-hiring rule makes you buy talent only when it is most expensive and abundant. The question is not "hire or freeze" but "does this specific hire strengthen the core within my runway?"',
                },
                {
                  label: 'Yes — this is the countercyclical opportunity the extended runway was for; a key hire at a good rate that still leaves ample runway strengthens the core.',
                  correct: true,
                  outcome: 'Correct. You raised extra runway precisely so you could act when others cannot. A high-quality hire at a favorable rate, with runway still comfortably long, is buying low — the countercyclical move that compounds during the recovery. You are spending your prepared strength on exactly the asset the downturn made cheap.',
                },
              ],
            },
          ],
        },
        {
          kind: 'resource',
          title: 'Read the funding climate for real',
          items: [
            { label: 'PitchBook–NVCA Venture Monitor (quarterly)', url: 'https://nvca.org/pitchbook-nvca-venture-monitor/', note: 'The canonical quarterly report on US VC deal value, fundraising, valuations, and exits. Read the latest before you plan a raise.' },
            { label: 'PitchBook — Venture Monitor reports hub', url: 'https://pitchbook.com/news/reports/vc/venture-monitor', note: 'Landing page for the current and past quarterly reports and their key charts.' },
            { label: 'Y Combinator Startup Library', url: 'https://www.ycombinator.com/library', note: 'Practical, stage-appropriate guidance on fundraising and how to raise in a tight market.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Read my funding climate', kind: 'ask', question: 'Help me assess the current venture funding climate for my stage and sector: what do rates, public-market direction, exit activity, and the latest Venture Monitor imply for my ask size, valuation expectations, and timing?' },
        { label: 'Should I raise now or wait?', kind: 'ask', question: 'Given my runway, burn, and traction, and the current macro/funding climate, help me reason through whether to raise now (and how much) or wait — including the risk that the funnel tightens further while I wait.' },
        { label: 'Explain the LP pullback to me', kind: 'harder', concept: 'the denominator effect and rising risk-free rates as the two mechanisms that make LPs stop committing to new VC funds, and how that cascades to seed-stage rounds with a lag' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Money in your startup round originates several steps upstream. What is the correct flow, and who ultimately supplies the capital?',
          options: [
            'VCs print the money themselves; startups just have to ask',
            'LPs (pensions, endowments, sovereign funds) commit to VC funds, which deploy into startups, whose exits return capital to the LPs — so every dollar is really an LP\'s dollar, twice removed',
            'Central banks give money directly to startups during expansions',
            'Startups fund VCs, who then fund LPs',
          ],
          answer: 1,
          explain: 'The pipeline runs LPs → VC funds → startups → exits → back to LPs. VCs are intermediaries deploying LP capital and are judged on the exits they return. Understanding this tells you why your round\'s availability depends on conditions far upstream of any individual partner meeting.',
        },
        {
          kind: 'mcq',
          prompt: 'When interest rates rise sharply and public markets fall, why does startup fundraising get harder even for strong companies — and through what two LP-level mechanisms?',
          options: [
            'Because VCs personally dislike founders during downturns; no real mechanism',
            'Because higher safe-asset returns raise venture\'s opportunity cost (higher bar to clear) AND the "denominator effect" makes venture an oversized portfolio share, so LPs stop committing to new funds — draining the top of the funnel with a lag',
            'Because startups suddenly become lower quality overnight when rates rise',
            'Because central banks forbid VCs from investing during high-rate periods',
          ],
          answer: 1,
          explain: 'Two forces hit LPs at once: rising risk-free rates make safe assets attractive, raising the return venture must beat; and the denominator effect (public holdings shrink, so illiquid venture becomes an oversized share) pushes LPs to pause new commitments to rebalance. Both drain fund formation upstream, and the constriction reaches your round with a lag — even if your company is excellent.',
        },
        {
          kind: 'free',
          prompt: 'Describe the LP → VC → startup pipeline in your own words, then explain how a rate hike tightens it from the top down. Finally, using the current funding climate as you understand it, state whether you would raise now or wait, and one concrete thing you\'d do to raise your odds regardless of the climate.',
          rubric: 'Strong answer: (1) correctly describes the pipeline (LPs supply capital to VC funds, which deploy into startups, whose exits return capital to LPs); (2) explains at least one mechanism by which higher rates tighten the funnel (opportunity cost of safe assets, denominator effect, or frozen exit windows reducing returns to LPs), and notes the effect reaches startups with a lag; (3) takes a defensible raise-now-or-wait position grounded in the actual climate (rates, public markets, exits, or the Venture Monitor); (4) names a concrete self-help move (extend runway, raise more while you can, optimize efficient growth, de-risk the pitch). Penalize answers that treat funding availability as purely about pitch quality and ignore the macro pipeline.',
        },
      ],
      commitSummary: 'no slot written — you now read the LP-to-startup pipeline and the macro that tightens it, so you time your raise to the funding climate instead of being surprised by it.',
    },
  ],
}
