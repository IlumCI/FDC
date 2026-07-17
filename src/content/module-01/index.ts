import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 1 — Microeconomics for people who optimize things
//
// Reframes the core of price theory as optimization and control theory: markets
// as equilibrium-seeking systems, profit maximization as a first-order
// condition, elasticity as sensitivity analysis, and incentives/competition as
// objective functions and adversarial agents. Uses Meridian's canonical numbers
// throughout. The final lesson writes startup.market via the reusable form
// artifact; earlier lessons are concept-only.
// ===========================================================================

export const module1: Module = {
  id: 1,
  title: 'Microeconomics for people who optimize things',
  goal: 'Understand supply/demand, marginal thinking, elasticity, and incentives as optimization and control theory.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '1.1',
      module: 1,
      title: 'Supply & demand as an equilibrium-seeking system',
      estMinutes: 14,
      prerequisites: [],
      artifactSlot: null,
      concept: `A market has two curves. **Demand** $Q_d(p)$ slopes down: as price rises, buyers want less. **Supply** $Q_s(p)$ slopes up: as price rises, sellers offer more. The **equilibrium price** $p^*$ is where they meet:

$$Q_d(p^*) = Q_s(p^*)$$

Nobody sets $p^*$ centrally. The market *searches* for it. Define excess demand as the error signal

$$E(p) = Q_d(p) - Q_s(p).$$

- $E(p) > 0$ — a **shortage**: buyers outnumber goods, so price is bid **up**.
- $E(p) < 0$ — a **surplus**: goods sit unsold, so price is cut **down**.
- $E(p) = 0$ — the market **clears**.

Price adjusts in the direction that shrinks the error, $\\frac{dp}{dt} = k\\,E(p)$ for some responsiveness $k$. Because demand falls and supply rises in $p$, $E$ is monotonically decreasing, so this loop converges: raise price when short, cut when long, stop when $E = 0$. That is the entire mechanism. Prices are not values assigned from above; they are the fixed point a distributed system settles into while continuously correcting its own imbalance.`,
      reframe: {
        analogy: `This is **gradient descent** on a scalar loss. Treat the squared imbalance $L(p) = \\tfrac{1}{2}E(p)^2$ as your loss surface. Every real transaction is a step: shortages push price uphill in $p$, surpluses push it downhill, and the update $\\frac{dp}{dt} = k\\,E(p)$ is exactly a step proportional to the negative gradient toward $E = 0$. The "learning rate" $k$ is how twitchy the market is — how fast prices react to imbalance. Equilibrium is the fixed point where the gradient vanishes and updates stop. Shortages and surpluses aren't failures of the market; they are the **error signal that drives the controller**, the same way a training loss is the signal that moves weights.`,
        breaks: `Gradient descent optimizes *your* chosen objective; the market optimizes *nobody's*. $p^*$ minimizes imbalance, not welfare — it can clear at a price that starves people who can't pay, and the loop won't care. The surface also **moves under you**: tastes, incomes, and rival prices shift both curves mid-descent, so you're chasing a non-stationary target, not converging on a fixed minimum. And the learning rate isn't well-behaved — too high a $k$ (thin, jumpy markets) overshoots and oscillates instead of settling, exactly like a divergent step size. Convergence is a tendency, not a guarantee.`,
      },
      workedExample: `**Meridian** sells CI-insights seats. Roughly, monthly demand and the seats they'll staff to support look like:

$$Q_d(p) = 400 - 5p \\qquad Q_s(p) = 40 + 3p$$

Set them equal to find where the market clears:

$$400 - 5p = 40 + 3p \\;\\Rightarrow\\; 360 = 8p \\;\\Rightarrow\\; p^* = \\$45,\\quad Q^* = 175.$$

Now suppose Meridian anchors at its headline **$40**. Excess demand is $E(40) = (400 - 200) - (40 + 120) = 200 - 160 = +40$: a **shortage** of 40 seats. The error signal is positive, so the market pressure is *upward* — buyers are queueing, waitlists form, and Meridian has room to lift price toward $45 without losing the marginal buyer. Push instead to $50: $E(50) = 150 - 190 = -40$, a **surplus** — empty capacity, discount pressure downward. The clearing price sits between, at the zero of $E$. Note this says nothing yet about *profit*; $45$ clears the market, but the profit-maximizing price is a different question we hit in 1.2.`,
      branch: {
        scenario: `A popular framework Meridian integrates with goes viral, and suddenly far more small teams want CI insights at every price — demand jumps to $Q_d(p) = 520 - 5p$ while supply is unchanged at $Q_s(p) = 40 + 3p$. Meridian's founder keeps the price pinned at the old $45. What actually happens?`,
        choices: [
          {
            label: 'Nothing changes — $45 was the equilibrium, so it stays the equilibrium.',
            correct: false,
            consequence: `**Instructive miss.** $45 was equilibrium for the *old* demand curve. The curve moved, so the fixed point moved with it. At $45 now, $Q_d = 520 - 225 = 295$ but $Q_s = 175$ — a shortage of **120 seats**. Pinning price doesn't freeze equilibrium; it just guarantees you're sitting away from it, with a persistent error signal (waitlists, frustrated buyers) you're choosing not to act on.`,
          },
          {
            label: 'A shortage opens up at $45; the new clearing price is higher, around $60.',
            correct: true,
            consequence: `**Correct.** Solve $520 - 5p = 40 + 3p \\Rightarrow 480 = 8p \\Rightarrow p^* = \\$60$, $Q^* = 220$. Holding price at $45 leaves excess demand of 120 seats — real, observable pressure. Meridian can ride it up toward $60, or deliberately hold price low to grab share and let the shortage express as a waitlist. Either is defensible, but only if the founder *sees* the error signal instead of assuming a stale equilibrium still holds.`,
          },
          {
            label: 'The surplus means Meridian should cut price to move the extra inventory.',
            correct: false,
            consequence: `**Instructive miss — sign error.** A demand *increase* creates a **shortage** at the old price, not a surplus: more buyers chasing the same supply. Excess demand is positive ($+120$), so the pressure is upward. Cutting price would deepen the shortage. Always check the sign of $E(p) = Q_d - Q_s$ before deciding which way to move.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Sketch supply & demand for my market', kind: 'ask', question: 'Given my domain and pricing, sketch plausible demand and supply relationships, estimate my clearing price, and tell me whether my current price implies a shortage or surplus.' },
        { label: 'Harder equilibrium example', kind: 'harder', concept: 'market clearing with a shifting demand curve and a supply constraint' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A market has $Q_d(p) = 300 - 4p$ and $Q_s(p) = 60 + 2p$. What is the equilibrium price?',
          options: ['$40', '$60', '$30', '$50'],
          answer: 0,
          explain: 'Set $300 - 4p = 60 + 2p \\Rightarrow 240 = 6p \\Rightarrow p = 40$. At $40, both curves give $Q = 140$, so excess demand is zero and the market clears.',
        },
        {
          kind: 'mcq',
          prompt: 'At some price, excess demand $E(p) = Q_d(p) - Q_s(p)$ is negative. This means:',
          options: [
            'A shortage — price faces upward pressure',
            'A surplus — unsold goods push price downward',
            'The market has already cleared',
            'Demand must be upward-sloping',
          ],
          answer: 1,
          explain: 'Negative excess demand means supply exceeds demand: a **surplus**. Unsold units create downward pressure on price, moving it toward the zero of $E$. A shortage is the positive-$E$ case.',
        },
      ],
      commitSummary: 'concept only — you write your market model in lesson 1.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '1.2',
      module: 1,
      title: 'Marginal cost / marginal revenue as derivatives',
      estMinutes: 16,
      prerequisites: ['1.1'],
      artifactSlot: null,
      concept: `Profit is a function of quantity, $\\pi(q) = R(q) - C(q)$, where $R$ is revenue and $C$ is total cost. To maximize it, do what you'd do to any smooth objective: take the derivative and set it to zero.

$$\\frac{d\\pi}{dq} = \\frac{dR}{dq} - \\frac{dC}{dq} = 0 \\;\\Rightarrow\\; \\underbrace{\\frac{dR}{dq}}_{\\text{MR}} = \\underbrace{\\frac{dC}{dq}}_{\\text{MC}}$$

**Marginal revenue (MR)** is the revenue from one more unit; **marginal cost (MC)** is the cost of one more unit. The optimum is exactly where they meet: **MR = MC**.

The logic is pure greedy search. If $\\text{MR} > \\text{MC}$, the next unit adds more than it costs — take it, $\\pi$ still climbing. If $\\text{MR} < \\text{MC}$, the last unit lost money — pull back. You stop only where the marginal contribution is zero. The second-order condition $\\frac{d^2\\pi}{dq^2} < 0$ confirms it's a maximum (a peak), not a minimum.

A subtlety that trips engineers: for a price-setter facing a downward-sloping demand curve, selling one more unit requires *lowering price on all units*, so $\\text{MR} < \\text{price}$. MR isn't the sticker price; it's the true derivative of total revenue.`,
      reframe: {
        analogy: `MR = MC is a **first-order optimality condition** — $\\nabla \\pi = 0$ in one dimension. You already trust this: to maximize any smooth objective you walk until the gradient is zero and the curvature is negative. Profit maximization is that exact procedure with $q$ as the parameter. MC and MR are the two partial contributions to the gradient; their difference *is* the gradient. Producing until $\\text{MR} = \\text{MC}$ is gradient ascent on $\\pi(q)$ that halts at the stationary point where one more step buys nothing.`,
        breaks: `The smooth-derivative picture assumes continuity and a single interior peak. Real cost curves are **step functions** — the 41st customer might force a new hire, so MC jumps discontinuously and $\\frac{d\\pi}{dq}$ isn't defined at the step; you compare finite differences, not a clean derivative. Profit can also be **non-concave** (multiple local peaks from tiered pricing or capacity cliffs), so a zero-gradient point may be a local max or even a saddle — the second-order check matters. And $q$ is often lumpy (you sell whole seats), so the true optimum is the best *integer* neighbor of the continuous solution, not the calculus answer verbatim.`,
      },
      workedExample: `**Meridian**: price **$40/seat**, variable cost **$9/seat**, so contribution margin **$31**. If Meridian were a pure price-taker with flat MC, MR would be the constant $40 and MC the constant $9 — MR always exceeds MC, so the naive rule says "sell every seat you can." That's the flat-margin world.

Now make it realistic with a downward-sloping demand curve, $p(q) = 55 - 0.1q$. Then revenue is $R(q) = p(q)\\,q = 55q - 0.1q^2$, so

$$\\text{MR} = \\frac{dR}{dq} = 55 - 0.2q.$$

Marginal cost is the variable cost, $\\text{MC} = 9$. Set MR = MC:

$$55 - 0.2q = 9 \\;\\Rightarrow\\; 0.2q = 46 \\;\\Rightarrow\\; q^* = 230\\ \\text{seats}.$$

Price to charge: $p(230) = 55 - 23 = \\$32$. Check profit is peaking, not bottoming: $\\frac{d^2\\pi}{dq^2} = -0.2 < 0$, a maximum. Notice MR ($9$ at the optimum) is far below the $32$ sticker price — because each extra seat also shaves price on the inframarginal ones. Selling past 230 (chasing volume at $40+$) would push MR below MC and *destroy* profit even though each seat still "makes margin" on paper.`,
      branch: {
        scenario: `Meridian's founder looks at the flat-margin view — "$40 in, $9 out, every seat makes $31" — and concludes the right move is always to sell one more seat, at any discount above $9. A big prospect asks for 60 seats at $12 each. Take it?`,
        choices: [
          {
            label: 'Yes — $12 > $9 variable cost, so every one of those seats still adds margin.',
            correct: false,
            consequence: `**Instructive miss.** "$12 beats $9" is true per seat in isolation, but MR ≠ price once you sell more. To place 60 seats at $12 you likely drop toward that price for comparable buyers, cutting revenue on seats you'd have sold near $32–$40. The relevant test is **MR vs MC on the whole book**, not sticker-vs-variable on one deal. Greedy on the wrong quantity overshoots the peak.`,
          },
          {
            label: 'Not automatically — compare marginal revenue (net of price erosion) against MC, not price against variable cost.',
            correct: true,
            consequence: `**Correct.** The decision rule is MR = MC, and MR already accounts for the price you give up on other units. A deeply discounted bulk deal is fine only if it doesn't cannibalize higher-price demand and its true marginal revenue still clears MC. Sometimes yes (isolated segment, no cannibalization); often no. The point is you *compute the derivative of total revenue*, not eyeball one seat's margin.`,
          },
          {
            label: 'Never discount below the $40 list price — it cheapens the product.',
            correct: false,
            consequence: `**Instructive miss — opposite error.** A rigid price floor ignores the optimization entirely. If a segment's MR at a lower price still exceeds MC and doesn't erode your core book, refusing it leaves profit on the table. The answer isn't "always sell more" or "never discount" — it's "produce/sell until MR = MC," which sometimes means a targeted lower price.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Find my profit-maximizing quantity', kind: 'ask', question: 'Given my price, variable cost, and a plausible demand slope for my market, derive my marginal revenue, set MR = MC, and tell me my optimal quantity and price.' },
        { label: 'Harder MR = MC example', kind: 'harder', concept: 'profit maximization with a nonlinear demand curve and a step in marginal cost' },
        { label: 'Critique my reasoning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A firm faces $\\text{MR}(q) = 50 - 0.4q$ and constant $\\text{MC} = 10$. The profit-maximizing quantity is:',
          options: ['100 units', '125 units', '150 units', '40 units'],
          answer: 0,
          explain: 'Set MR = MC: $50 - 0.4q = 10 \\Rightarrow 0.4q = 40 \\Rightarrow q = 100$. That is where the profit gradient $\\text{MR} - \\text{MC}$ hits zero; past it, MR falls below MC and profit declines.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR product, write down a plausible demand relationship $p(q)$, derive marginal revenue, and find where MR = MC using your variable cost. What quantity and price does it imply, and why is MR below your sticker price there?',
          rubric: 'Strong answer: (1) states a downward-sloping $p(q)$ for the learner\'s market; (2) forms $R(q) = p(q)q$ and differentiates to get MR correctly; (3) sets MR equal to their actual variable cost / MC and solves for q and p; (4) explains that MR < price because selling one more unit lowers price on inframarginal units, and ideally notes the second-order (peak) check.',
        },
      ],
      commitSummary: 'concept only — the market model gets persisted in lesson 1.4.',
    },

    // -----------------------------------------------------------------------
    {
      id: '1.3',
      module: 1,
      title: 'Elasticity as sensitivity analysis',
      estMinutes: 15,
      prerequisites: ['1.2'],
      artifactSlot: null,
      concept: `**Price elasticity of demand** measures how sensitive quantity is to price. It's a normalized derivative — the % change in quantity per % change in price:

$$\\varepsilon = \\frac{\\%\\,\\Delta Q}{\\%\\,\\Delta p} = \\frac{\\partial Q}{\\partial p}\\cdot\\frac{p}{Q}.$$

Because demand slopes down, $\\varepsilon$ is negative; people usually quote $|\\varepsilon|$.

- $|\\varepsilon| > 1$ — **elastic**: quantity reacts *more* than proportionally. Buyers are price-sensitive; a price hike loses so much volume that **revenue falls**.
- $|\\varepsilon| < 1$ — **inelastic**: quantity barely moves. A price hike **raises revenue** because you lose few buyers.
- $|\\varepsilon| = 1$ — **unit elastic**: revenue is stationary in price (the revenue-maximizing point).

Why the units matter: a raw slope $\\frac{\\partial Q}{\\partial p}$ depends on whether you measure seats or thousands-of-seats, dollars or cents. Elasticity is **dimensionless** — it strips units by multiplying by $p/Q$, so a $-1.8$ means the same thing for oil, seats, or coffee. That's exactly why analysts reach for it: it's a scale-free sensitivity you can compare across wildly different systems. Elasticity also connects straight back to 1.2: $\\text{MR} = p\\left(1 + \\frac{1}{\\varepsilon}\\right)$, so pricing power lives entirely in how inelastic your demand is.`,
      reframe: {
        analogy: `Elasticity is the **sensitivity analysis** you already run on any model: perturb an input by a little, see how much the output moves, and *normalize* so the number is unit-free. It's the condition number of demand — a local $\\frac{\\partial \\log Q}{\\partial \\log p}$ that tells you how much the system amplifies a nudge on price. High $|\\varepsilon|$ is an ill-conditioned, twitchy response (small price nudge, big volume swing); low $|\\varepsilon|$ is a stiff, well-damped one. Same instinct as checking $\\frac{\\partial \\text{output}}{\\partial \\text{param}}$ to know which knob actually matters.`,
        breaks: `A gradient is **local**; elasticity is too, and people forget it. The $-1.8$ you measured at $40 does *not* hold at $80 — it varies along the curve (on a straight-line demand, elasticity runs from $\\infty$ at the top to $0$ at the bottom). Extrapolating one elasticity across a big price move is like trusting a first-order Taylor term far from the expansion point. It's also **noisy and confounded**: real elasticity estimates are entangled with seasonality, competitor moves, and quality perception, so the "derivative" you fit from data is an approximation with error bars, not a clean partial. Treat it as a local reading that needs re-measuring, not a constant.`,
      },
      workedExample: `**Meridian** at **$40/seat** currently serves a base of seats. Suppose an A/B test shows that raising price to **$44** (a $+10\\%$ move) drops quantity by $15\\%$. Then

$$|\\varepsilon| = \\frac{15\\%}{10\\%} = 1.5 \\quad(\\text{elastic}).$$

Buyers are price-sensitive, so revenue *falls* from the hike: revenue scales like $1.10 \\times 0.85 = 0.935$, a **6.5% drop**. Raising price here is a losing move — the volume bleed dominates. Contrast a hypothetical inelastic segment (mission-critical enterprise, $|\\varepsilon| = 0.4$): a $+10\\%$ price move loses only $4\\%$ of volume, so revenue scales $1.10 \\times 0.96 = 1.056$, a **5.6% gain** — raise away.

Tie it to MR: with $\\varepsilon = -1.5$, $\\text{MR} = 40\\left(1 + \\frac{1}{-1.5}\\right) = 40(1 - 0.667) = \\$13.3 > \\$9$ MC — so at $40 Meridian is still below its profit-maximizing quantity and has room to *lower* price and sell more, consistent with the $q^* = 230,\\ p = \\$32$ optimum from 1.2. Elasticity, MR, and the optimal price are three views of the same demand curve. The practical upshot for Meridian's pricing (Module 6): find where your buyers sit on the elastic/inelastic line before you touch price.`,
      branch: {
        scenario: `Meridian's founder measures $|\\varepsilon| = 1.6$ for their broad small-team segment and, wanting more revenue, decides to *raise* price 20%. A teammate objects. Who's right, and what should Meridian do instead?`,
        choices: [
          {
            label: 'The founder is right — higher price always means higher revenue per seat, so revenue goes up.',
            correct: false,
            consequence: `**Instructive miss.** With $|\\varepsilon| = 1.6 > 1$, demand is **elastic**: a 20% price hike loses more than 20% of quantity (roughly $1.20 \\times (1 - 0.32) \\approx 0.82$ of revenue — a ~18% *drop*). "Higher price per seat" is exactly the inframarginal trap from 1.2; the volume you shed dominates. Elastic demand punishes price hikes.`,
          },
          {
            label: 'The teammate is right — demand is elastic, so a hike loses revenue; if anything, test a small price cut.',
            correct: true,
            consequence: `**Correct.** Elastic ($|\\varepsilon| > 1$) means revenue moves *opposite* to price: raising price sheds too much volume. Since MR still exceeds MC at $40 (from 1.2's optimum near $32), the profit-relevant direction here is *down*, not up — a small cut can raise both volume and profit. And elasticity is local: Meridian should re-measure near any new price rather than extrapolate the $1.6$ across a big move.`,
          },
          {
            label: 'It doesn\'t matter — just pick whichever price feels premium; elasticity is academic.',
            correct: false,
            consequence: `**Instructive miss.** Elasticity is the single most decision-relevant number for a pricing move: it tells you the *sign* of the revenue response before you commit. Ignoring it and pricing on vibes is how founders raise price into elastic demand and watch revenue fall. The whole point of measuring $\\varepsilon$ is to not guess.`,
          },
        ],
      },
      tutorHooks: [
        { label: 'Estimate my price elasticity', kind: 'ask', question: 'Given my market and buyer type, estimate whether my demand is likely elastic or inelastic, what a plausible |ε| might be, and how I could measure it with an experiment.' },
        { label: 'Harder elasticity example', kind: 'harder', concept: 'elasticity varying along a linear demand curve and its link to MR and revenue maximization' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A 10% price increase causes a 4% drop in quantity sold. Demand is:',
          options: [
            'Elastic; revenue falls when you raise price',
            'Inelastic; revenue rises when you raise price',
            'Unit elastic; revenue is unchanged',
            'Perfectly elastic; all buyers leave',
          ],
          answer: 1,
          explain: '$|\\varepsilon| = 4\\%/10\\% = 0.4 < 1$, so demand is **inelastic**. Quantity barely reacts, so a price hike raises revenue: $1.10 \\times 0.96 = 1.056$, a 5.6% gain.',
        },
        {
          kind: 'free',
          prompt: 'Estimate the price elasticity of demand for YOUR product at your current price, explain whether you\'re elastic or inelastic, and say what that implies for whether you should raise, hold, or cut price. Why can\'t you assume that same elasticity holds at a very different price?',
          rubric: 'Strong answer: (1) gives a concrete |ε| estimate (or a defensible range) for the learner\'s product with reasoning about buyer type; (2) classifies elastic vs inelastic correctly and states the revenue implication of a price move; (3) draws the right pricing direction from it; (4) recognizes elasticity is LOCAL — it varies along the demand curve, so a single estimate can\'t be extrapolated across large price changes.',
        },
      ],
      commitSummary: 'concept only — you assemble and persist your market memo next.',
    },

    // -----------------------------------------------------------------------
    {
      id: '1.4',
      module: 1,
      title: 'Incentives, externalities & competition as adversarial agents',
      estMinutes: 18,
      prerequisites: ['1.1', '1.2', '1.3'],
      artifactSlot: 'market',
      concept: `The last three lessons treated the market as one equilibrium-seeking system. Now zoom into the **agents** inside it, each running its own optimizer.

**Incentives are objective functions.** Every actor — buyer, seller, employee, competitor — maximizes something. Predict behavior by asking *what function is this agent actually optimizing?*, not what you wish it optimized. A sales rep paid on bookings maximizes bookings, not retention; if those diverge, the incentive wins. Misaligned incentives are a **reward-hacking** problem: the agent optimizes the metric you wrote, not the outcome you meant.

**Externalities are unhandled side effects.** A transaction's cost or benefit that lands on a third party who isn't in the price. Pollution is a negative externality (cost dumped on outsiders); a vaccine or an open-source library is a positive one (benefit others free-ride on). The market's objective function simply *doesn't include* these terms, so it under-prices harm and under-produces good — a global optimum for the private objective that's wrong for the system.

**Competitors are adversarial agents.** Your rivals optimize *against* your objective. Model markets game-theoretically: each player's best response depends on what the others do. A **Nash equilibrium** is a joint strategy where no one can unilaterally improve — the fixed point of mutual best-responses. The classic trap is the **prisoner's dilemma**: two firms both cutting price is individually rational for each yet worse for both than holding — a stable equilibrium that's collectively bad.`,
      reframe: {
        analogy: `This is **multi-agent adversarial optimization**, and you've seen every piece. Incentives are **loss functions**: point them at a proxy metric and agents will **reward-hack** it — Goodhart's law is reward hacking with a suit on. Externalities are **unhandled side effects / unpriced dependencies**: state mutated outside the function's declared interface, so the caller's cost model is wrong and the "correct" local result corrupts global state. Competition is a **minimax game**: your rival is an adversary maximizing their payoff, which partly means minimizing yours, and the Nash equilibrium is the fixed point where every agent is already playing its best response — the stable configuration a system of mutual best-responders settles into, exactly like an adversarial training loop reaching a saddle.`,
        breaks: `Real agents aren't the clean optimizers the model assumes. They're **boundedly rational** — limited information, cognitive shortcuts, plain mistakes — so they don't reliably reach the Nash equilibrium your minimax math predicts; they satisfice, misjudge rivals, and act on emotion. Payoffs are also **not fixed or fully known**: business is a *repeated* game where reputation, trust, and the shadow of future rounds let players sustain cooperation that one-shot prisoner's-dilemma logic says is impossible. And unlike a training adversary, competitors can change the game itself — new entrants, regulation, a pivot — so the payoff matrix you optimized against isn't stationary. Use game theory to find the *pressures*, not to predict exact moves.`,
      },
      workedExample: `**Meridian** meets all three forces at once. **Incentives:** Meridian ties a rep's bonus purely to new bookings. The rep starts closing 60-seat deals at $12 (the 1.2 trap) — great for *bookings*, terrible for *contribution margin* and retention. The objective function got what it rewarded, not what the founder wanted; the fix is to reward *net* margin or retained revenue, aligning the proxy with the goal.

**Externalities:** Meridian's CI insights quietly cut wasted compute across its customers' pipelines — a *positive* externality those teams' cloud bills capture but Meridian doesn't get paid for. Under-priced good: real value created, none of it in Meridian's $40. (A negative example: aggressive email-based growth that trains a whole segment to distrust dev-tool outreach — a cost dumped on every future vendor.)

**Competition as adversary:** a rival launches at **$30/seat**. Model it as a game. If Meridian matches to $30, both firms sit in a low-price Nash equilibrium — margins compressed for everyone, the prisoner's dilemma's bad-but-stable corner. If Meridian instead *differentiates* (deeper insights, better onboarding) it changes its own payoff row and can hold $40 for buyers who value the difference — refusing the race to the bottom by leaving the one-dimensional price game. The lesson from 1.1–1.3 still binds: whether matching pays depends on your **elasticity** and where **MR = MC** lands after the rival moves the demand curve.`,
      branch: {
        scenario: `A well-funded competitor undercuts Meridian at **$25/seat** — below Meridian's $40 but still above the $9 variable cost — explicitly to grab share. Meridian's founder feels cornered. What's the soundest response?`,
        choices: [
          {
            label: 'Match at $25 immediately — you can\'t let them win on price, and $25 still beats the $9 cost.',
            correct: false,
            consequence: `**Instructive miss — you walked into the prisoner's dilemma.** Matching drops both firms into the low-price Nash equilibrium: individually "rational," collectively value-destroying, and it compresses the $31 margin that funds everything downstream. "$25 > $9" ignores MR (1.2) and elasticity (1.3): if your core buyers are relatively inelastic and value differentiation, you're torching margin to defend against buyers you might not lose. Reacting to the adversary's move on *their* chosen axis (price) is usually the trap.`,
          },
          {
            label: 'Change the game: differentiate on value for your less-price-sensitive segment and hold price, matching only where elasticity truly forces it.',
            correct: true,
            consequence: `**Correct.** The winning move in an adversarial game is often to *change your payoff structure*, not mirror the opponent's. Segment by elasticity: inelastic, value-driven buyers (deep insights, reliability, onboarding) will hold at $40 — differentiation moves you off the one-dimensional price axis where a funded rival wins by burning cash. Meet the price only in the genuinely elastic slice where MR after the demand shift still clears MC. You've used all of 1.1–1.3: equilibrium thinking, MR = MC, and elasticity, plus game theory to refuse the dilemma.`,
          },
          {
            label: 'Ignore it entirely — competitors are noise, just keep optimizing your own numbers.',
            correct: false,
            consequence: `**Instructive miss — opposite error.** A competitor is an **adversarial agent** actively reshaping your demand curve; pretending they're noise means optimizing MR = MC against a demand curve that no longer exists. You don't have to *match* them, but you must *model* them: re-estimate demand and elasticity after their move, then decide. Blindly holding is as naive as blindly matching.`,
          },
        ],
      },
      artifact: {
        componentKey: 'form',
        prompt: `Write a short market-forces memo for YOUR domain: what drives demand, where the incentives point, and how sensitive buyers are to price.`,
        fields: [
          { key: 'demandDrivers', label: 'What drives demand in your market?', type: 'textarea', placeholder: 'The 2-3 forces that make buyers want this now' },
          { key: 'incentiveMap', label: 'Where do the incentives point (buyers, competitors, you)?', type: 'textarea' },
          { key: 'elasticityNote', label: 'Price sensitivity — elastic or inelastic, and why?', type: 'text' },
        ],
      },
      tutorHooks: [
        { label: 'Map the incentives in my market', kind: 'ask', question: 'For my domain, lay out what each agent (buyers, my competitors, my own team) is actually optimizing, and flag where those objective functions diverge from what I want.' },
        { label: 'Find my externalities', kind: 'ask', question: 'What positive or negative externalities does my product create that aren\'t reflected in my price, and what could I do about them?' },
        { label: 'Harder game-theory example', kind: 'harder', concept: 'competitive response as a repeated game where reputation sustains cooperation the one-shot Nash equilibrium forbids' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A support team is paid a bonus purely for closing tickets fast. Tickets close quickly but customers keep coming back with the same unresolved problem. This is best described as:',
          options: [
            'A positive externality',
            'Reward hacking — the agent optimizes the proxy metric, not the intended outcome',
            'A Nash equilibrium both sides prefer',
            'Perfectly elastic demand',
          ],
          answer: 1,
          explain: 'The incentive rewarded *speed of closing*, so the team optimizes that proxy rather than actual resolution — classic reward hacking / Goodhart\'s law. The fix is to reward the intended outcome (resolution / retention), not the proxy.',
        },
        {
          kind: 'free',
          prompt: 'For YOUR business, identify (1) one incentive that could get "reward-hacked" if you measured the wrong thing, (2) one externality — positive or negative — your product creates that isn\'t in your price, and (3) one competitor and what changing your own "payoff" (differentiating) rather than matching their price would look like. Reference your saved market memo.',
          rubric: 'Strong answer: (1) names a concrete proxy metric that would diverge from the intended outcome for the learner\'s actual business, and the aligned fix; (2) identifies a plausible positive OR negative externality specific to their product and why it\'s outside the price; (3) treats a real competitor as an adversarial agent and describes a differentiation / game-changing move rather than pure price-matching, ideally tying back to their elasticity from lesson 1.3.',
        },
      ],
      commitSummary: 'your market-forces memo — demand drivers, incentive map, and price sensitivity — written to **startup.market**, informing pricing and positioning in later modules.',
    },
  ],
}
