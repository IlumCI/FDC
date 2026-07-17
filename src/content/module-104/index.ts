import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 104 — Earned revenue & financial sustainability (BONUS, nonprofit path)
//
// A curated Season 1 bonus module for the NON-PROFIT path, slotting in after
// module 6. Nonprofits still need durable money. This module reframes funding
// as an engineering problem: single-funder dependency is a single point of
// failure; a diversified mix is redundancy; reserves are a buffer / circuit
// breaker; and growth must be matched to reliable revenue or it cascades into
// collapse. Prose-only (no artifact slots) — every lesson uses artifactSlot: null.
// ===========================================================================

export const module104: Module = {
  id: 104,
  season: 1,
  bonus: true,
  paths: ['nonprofit'],
  insertAfter: 6,
  title: 'Earned revenue & financial sustainability',
  goal: 'Nonprofits still need durable money. Build a diversified, resilient funding mix — earned income, fees, and social enterprise — instead of depending on a single grant.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '104.1',
      module: 104,
      title: 'Revenue diversification as fault tolerance',
      estMinutes: 14,
      prerequisites: [],
      artifactSlot: null,
      concept: `Every nonprofit runs on money, and where that money comes from is an architecture decision — usually an accidental one. The most common failure mode in the sector is **funder concentration**: one grant, one government contract, or one major donor supplies most of the budget. That single source is a **single point of failure**. The day it lapses — a foundation changes strategy, a contract is not renewed, a champion retires — a large fraction of your revenue disappears at once, and programs that took years to build unwind in a quarter.

**Diversification** is the fix, and it is not about chasing every dollar. It is about making sure no single source is load-bearing enough that its loss is fatal. A useful rule of thumb: if any one funder is more than roughly a third to a half of your budget, you have concentration risk worth actively managing. A resilient mix spreads revenue across categories that fail *independently* — grants, individual donors, earned income, government contracts, events — so that losing any one is a manageable dip, not a collapse.

The goal is not maximum revenue; it is **survivable** revenue. A smaller, diversified budget will outlast a larger one balanced on a single beam. This module builds that resilient mix deliberately: earned income (104.2), reserves as a buffer (104.3), and growth matched to durable revenue (104.4). It starts here, with the discipline of never letting one funder become your whole story.`,
      reframe: {
        analogy: `Think of your funding as a **distributed system**. A service that runs on one server has a single point of failure: that box goes down, the service goes down. Serious systems add **redundancy** — replicas across independent machines, racks, and availability zones — so any one failure is absorbed and the system keeps serving. A diversified funding mix is exactly this: **N+1 redundancy** for revenue. No single funder is the one server everything depends on, so the loss of any one degrades you gracefully instead of taking you offline.`,
        breaks: `Real redundancy assumes **independent** failures, and funding sources are often correlated. A recession can shrink foundation endowments, government budgets, and individual giving *at the same time* — like replicas that all share one power feed, so a single outage still takes them all down. True resilience means diversifying across sources that fail for *different* reasons, not just adding more of the same. And redundancy has a cost: every funder is a relationship to maintain, with its own reporting and compliance overhead. Past a point, another small funder adds more operational load than resilience.`,
      },
      workedExample: `**Mozilla** — the nonprofit-owned maker of the Firefox browser — is a cautionary study in concentration. For years the overwhelming majority of Mozilla's revenue has come from a single kind of deal: royalty payments from the search engine set as Firefox's default, historically Google (figures vary by year and are illustrative, but the search-royalty share has often been reported around **80–90%** of total revenue).

By any product measure Mozilla is a success. But financially it runs on one beam. If that search deal were not renewed — a live risk, since it depends on one partner and on regulators who scrutinize such arrangements — a mission-critical organization would lose most of its revenue overnight. Mozilla knows this, which is why it has spent years trying to build independent earned income (subscription products like a VPN) to reduce the dependency. The lesson is not that the Google deal was a mistake — it funded enormous public good — but that **even a thriving organization with one dominant funder is one decision away from crisis**. Concentration is a risk you carry whether or not you have chosen to notice it.`,
      branch: {
        scenario: `Your youth-services nonprofit gets **70%** of its budget from a single multi-year state contract, now up for renewal in eight months under a new administration that has signaled budget cuts. The contract has always renewed before. Your executive director wants to focus staff energy on delivering the current programs well and trust that a strong track record wins the renewal. What is the most prudent move?`,
        choices: [
          {
            label: 'Trust the track record — it has always renewed, so plan as if it will again.',
            correct: false,
            consequence: `**Instructive miss.** You are betting the organization's survival on a single point of failure you do not control. A new administration with signaled cuts is exactly the kind of independent shock that concentration turns fatal. Past renewals are not a guarantee; they are the reason you stopped noticing the risk. Deliver well *and* build a fallback.`,
          },
          {
            label: 'Deliver the current programs well AND immediately start diversifying revenue and modeling a partial or delayed renewal.',
            correct: true,
            consequence: `**Correct.** You cannot control the funder's decision, so you shrink the blast radius. Start building independent revenue now, model a 30–50% cut scenario, decide in advance which core programs you protect, and begin a reserve. Redundancy is something you engineer *before* the outage, not during it.`,
          },
          {
            label: 'Preemptively cut programs now to brace for the worst.',
            correct: false,
            consequence: `**Instructive miss — overcautious.** Cutting healthy programs before you know the outcome inflicts the exact harm you are trying to avoid, and can weaken the very track record that supports renewal. The move is to hedge and diversify, not to self-inflict the failure you fear.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Your annual budget is $1,200,000. Your largest single funder provides $780,000 of it. What percentage of your budget depends on that one funder? Compute (780,000 / 1,200,000) x 100.',
          answer: 65,
          tolerance: 0.5,
          unit: '%',
          explain: '780,000 / 1,200,000 = 0.65, so 65% — well past the roughly one-third-to-half danger line. Losing this funder would erase nearly two-thirds of your revenue at once: a classic single point of failure. The rest of the module is about engineering redundancy around exactly this kind of number.',
        },
        {
          kind: 'categorize',
          prompt: 'Sort each funding situation by how resilient it actually is. Remember: resilience comes from sources that fail INDEPENDENTLY, not just from having many funders.',
          buckets: ['Resilient (diversified)', 'Fragile (concentrated)'],
          items: [
            { text: 'Largest funder is 18% of revenue, spread across grants, individual donors, and earned fees', bucket: 'Resilient (diversified)' },
            { text: 'Five funders, but all are family foundations that co-invest and follow each other', bucket: 'Fragile (concentrated)' },
            { text: 'Revenue split across a government contract, individual donors, and an earned-income service', bucket: 'Resilient (diversified)' },
            { text: '85% of revenue from one renewing government grant', bucket: 'Fragile (concentrated)' },
            { text: 'Two large donors who are close friends and give together each year', bucket: 'Fragile (concentrated)' },
            { text: 'Earned income covers core costs, with grants funding growth on top', bucket: 'Resilient (diversified)' },
          ],
          explain: 'Resilience is about independence, not head count. Five correlated foundations or two friend-donors fail together — they are one point of failure wearing a disguise. Spreading revenue across categories that fail for different reasons (a contract, individual giving, earned income) is what actually buys redundancy.',
        },
      ],
      tutorHooks: [
        { label: 'Map my funder concentration', kind: 'ask', question: 'Given my organization\'s revenue sources, estimate the share from my single largest funder, flag any sources that are secretly correlated (and so fail together), and tell me where my concentration risk really is.' },
        { label: 'Harder: correlated funding sources', kind: 'harder', concept: 'assessing revenue resilience when nominally separate funders are actually correlated' },
        { label: 'Critique my diversification reasoning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A nonprofit\'s largest funder provides 60% of its budget. In systems terms, this is best described as:',
          options: ['Healthy redundancy', 'A single point of failure', 'Graceful degradation', 'A well-sized buffer'],
          answer: 1,
          explain: 'When one source carries the majority of revenue, its loss takes the whole organization down — the definition of a single point of failure. Redundancy would mean no single source is load-bearing enough to be fatal.',
        },
        {
          kind: 'mcq',
          prompt: 'Which funding mix is genuinely the most resilient?',
          options: [
            'One large foundation grant covering 80% of the budget',
            'Five foundations that always co-invest together',
            'Revenue split across a government contract, individual donors, and earned income',
            'A single generous major donor who has given for ten years',
          ],
          answer: 2,
          explain: 'Resilience comes from independence. The five co-investing foundations fail together, and a single long-time donor is still one point of failure. Splitting across categories that fail for different reasons is real redundancy.',
        },
        {
          kind: 'free',
          prompt: 'Look at your own (or a chosen) nonprofit\'s revenue. Estimate the share from your single largest funder, name the most likely way that source could disappear, and describe one concrete step to reduce that concentration this year.',
          rubric: 'A strong answer: (1) gives a concrete percentage for the largest funder; (2) names a plausible, specific failure mode (contract non-renewal, strategy change, donor departure) rather than a vague worry; (3) proposes one actionable diversification step (launch earned income, grow individual giving, add an independent grant) that reduces the concentration rather than just adding correlated risk; (4) shows understanding that survivable revenue beats maximal revenue.',
        },
      ],
      commitSummary: 'concept only — you diagnose concentration here; you start building the redundant, earned pieces of the mix in 104.2.',
    },

    // -----------------------------------------------------------------------
    {
      id: '104.2',
      module: 104,
      title: 'Earned income & the social enterprise',
      estMinutes: 16,
      prerequisites: ['104.1'],
      artifactSlot: null,
      concept: `**Earned income** is revenue a nonprofit generates by selling something — a product, a service, a fee, a ticket — rather than receiving it as a gift or grant. It is the most under-used source in the sector, and often the most powerful, for one structural reason: it is usually **unrestricted and repeatable**. A grant is someone else's money spent on someone else's priorities, for a fixed term; a dollar you earn is yours, to spend where the mission needs it, again next month.

A **social enterprise** goes one step further: the earning activity *is* the mission, or directly advances it. When a job-training nonprofit runs a business that employs and trains the people it serves, the revenue and the impact are the same activity — the earning is not a distraction from the work, it *is* the work.

The discipline is telling **aligned** earned income from a **distraction**. Aligned earning draws on assets you already have — expertise, a community, a facility, a trained workforce — and its success and your mission move together. A distraction is a money-making scheme grafted on because it looks lucrative, competing with the mission for the same scarce staff attention and often losing money once you count the true cost. The question is never just "will this make money?" It is "does earning this money advance the mission, or compete with it?"`,
      reframe: {
        analogy: `Mission-aligned earned income is a **regenerative subsystem** — a process that does the useful work *and* generates the resources to keep running, like a cogeneration plant that captures its own waste heat to power the next cycle. The output feeds back as fuel. A misaligned side business is the opposite: a **competing workload** on the same processor. Every hour of staff attention it takes is an hour stolen from the mission-critical thread — a **priority inversion**, where the money-making job starves the job that actually matters, and the system thrashes between the two.`,
        breaks: `The analogy oversells self-sufficiency. Very few nonprofits can fund their whole mission from earned income — the people or causes they serve often *cannot* pay full cost, which is precisely why they are a nonprofit and not a business. Earned income is usually a *component* of the mix, not a perpetual-motion machine. And "aligned" is a spectrum, not a switch: a modestly off-mission activity that reliably throws off unrestricted cash can be worth running *because* it subsidizes the core — a deliberate cross-subsidy, not a thrash. The test is whether you *chose* the trade knowingly, not whether the activity is perfectly on-mission.`,
      },
      workedExample: `**Goodwill Industries** is one of the largest social enterprises in the world. It collects donated goods and sells them through thrift retail, and the revenue funds — and directly creates — its mission: job training and employment for people facing barriers to work. Across its network Goodwill generates billions of dollars a year in retail earned income (figures are illustrative and vary by year and affiliate). The selling is not a side hustle bolted onto a charity; the stores *are* the program — they employ and train the very people the mission exists to serve.

Contrast the structure with **Aravind Eye Care** in India, which charges paying patients for eye surgery and uses the margin to deliver the same surgery free or near-free to those who cannot pay — a deliberate **cross-subsidy** where earned income and mission reinforce each other. Both show the pattern: the strongest earned income is not a detour from the work but a different face of it. When earning and impact are the same motion, revenue growth *is* mission growth — the rare case where scaling the business scales the good.`,
      branch: {
        scenario: `Your literacy nonprofit has two earned-income ideas and staff bandwidth for one. **(A)** Sell your staff's proven curriculum and teacher-training workshops to school districts for a fee — the thing you are already expert at. **(B)** Open a coffee cart in your lobby because a board member says cafes have great margins. Which do you pursue, and why?`,
        choices: [
          {
            label: 'A — monetize the curriculum and training you already deliver.',
            correct: true,
            consequence: `**Correct.** Aligned earned income draws on an asset you already own. Every workshop sold both earns unrestricted, repeatable revenue and spreads literacy — earning and mission move together. It is a regenerative subsystem, feeding the work while it funds it.`,
          },
          {
            label: 'B — chase the high-margin coffee cart for the cash.',
            correct: false,
            consequence: `**Instructive miss.** A cafe shares nothing with your mission and competes with it for the same scarce staff attention. You would be running an unfamiliar food business against skilled operators, and once you count true costs — staff time, equipment, spoilage — the "great margin" usually evaporates. This is the priority inversion the reframe warns about.`,
          },
          {
            label: 'Neither — earned income compromises a mission-driven nonprofit.',
            correct: false,
            consequence: `**Instructive miss.** Earned income is not a compromise; unrestricted, repeatable revenue is often what *protects* the mission from funder whiplash. Refusing to earn keeps you dependent on exactly the single-funder fragility you diagnosed in 104.1.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'rank',
          prompt: 'Rank these revenue types from MOST to LEAST reliable-and-unrestricted for funding your core operating costs. (Reliable = repeatable and within your control; unrestricted = you decide how to spend it.)',
          items: [
            'Recurring earned income from a mission-aligned service you control',
            'A broad base of many small recurring individual donors',
            'A multi-year government contract with reporting strings attached',
            'An annual restricted program grant you must reapply for each year',
            'A one-time restricted grant tied to a specific project',
            'A single large gift a major donor may or may not repeat',
          ],
          explain: 'Earned income you control tops the list: repeatable and unrestricted. A broad donor base is diversified and unrestricted but less within your control. A multi-year contract is reliable but restricted. Restricted, reapply-annually grants are weaker on both axes; a one-time project grant is not repeatable; and a single unpredictable major gift, though unrestricted, is the least reliable — a point of failure. The exact middle ordering is a judgment call, but the two ends are firm: control plus flexibility wins.',
        },
      ],
      tutorHooks: [
        { label: 'Find my aligned earned-income assets', kind: 'ask', question: 'Given my mission and the assets I already have (expertise, community, facility, workforce), suggest two or three earned-income or social-enterprise ideas where the earning would advance the mission rather than compete with it.' },
        { label: 'Harder: an earned-income idea\'s true cost', kind: 'harder', concept: 'evaluating whether an earned-income idea nets positive once fully-loaded staff time and opportunity cost are counted' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Compared with a typical restricted project grant, mission-aligned earned income is usually:',
          options: [
            'More restricted and less repeatable',
            'Unrestricted and repeatable',
            'Available only to for-profit companies',
            'Guaranteed to fully fund the mission',
          ],
          answer: 1,
          explain: 'A dollar you earn is yours to direct and tends to recur, unlike a restricted grant that is time-bound and earmarked. That flexibility and repeatability are why earned income strengthens the mix — though it rarely funds the whole mission on its own.',
        },
        {
          kind: 'mcq',
          prompt: 'The best test of whether an earned-income idea is aligned or a distraction is:',
          options: [
            'Whether its profit margin looks high',
            'Whether a board member suggested it',
            'Whether earning the money advances the mission or competes with it for scarce attention',
            'Whether other nonprofits are already doing it',
          ],
          answer: 2,
          explain: 'Alignment, not headline margin, is the test. Aligned earning uses assets you already have and moves the mission forward; a distraction competes with the mission for staff attention and often loses money once true costs are counted.',
        },
        {
          kind: 'free',
          prompt: 'Propose one earned-income or social-enterprise idea for your organization that draws on an asset you already have. Explain how success in that activity also advances the mission, and name the true cost (especially staff attention) you would have to cover.',
          rubric: 'A strong answer: (1) names a specific existing asset (expertise, community, facility, trained workforce) the idea builds on; (2) shows how the earning and the mission move together (regenerative, not a distraction); (3) honestly accounts for the true cost, including fully-loaded staff time and opportunity cost, not just gross revenue; (4) avoids proposing an unrelated high-margin scheme that would cause priority inversion.',
        },
      ],
      commitSummary: 'concept only — you identify aligned earned income here; next you build the reserve that protects it through the gaps.',
    },

    // -----------------------------------------------------------------------
    {
      id: '104.3',
      module: 104,
      title: 'Reserves & runway for nonprofits',
      estMinutes: 15,
      prerequisites: ['104.2'],
      artifactSlot: null,
      concept: `**Operating reserves** are unrestricted funds a nonprofit sets aside to cover expenses when revenue is disrupted. **Runway** is how long they last:

$$\\text{months of runway} = \\frac{\\text{operating reserves}}{\\text{monthly operating expenses}}$$

A widely cited sector benchmark is **three to six months** of expenses in reserve; many strong organizations aim higher. The purpose is simple: when a grant is late, a contract lapses, or an emergency hits, reserves let you keep serving and make calm decisions instead of panicked ones — laying off staff, cancelling programs, or accepting bad terms because you need cash this week.

Reserves are often misunderstood as **hoarding**, by boards, funders, and even staff who feel every dollar should go "to the mission now." This is a category error. A reserve is not idle wealth; it is **insurance that the mission keeps running** through the inevitable gaps. An organization with zero reserve is not more mission-focused — it is one late payment away from harming the people it serves. Prudence and mission are the same thing here.

The discipline is to treat a target reserve as a real budget line you fund deliberately, a little each year, in good times — not something you scramble for in a crisis, when it is already too late to build.`,
      reframe: {
        analogy: `A reserve is a **buffer** — and a **circuit breaker**. Every robust system facing bursty, unreliable input puts a buffer between the input and the work: a queue absorbing traffic spikes, a capacitor smoothing a noisy supply, a UPS carrying the load across an outage. Funding arrives in lumps and sometimes not at all; the reserve is the capacitor that keeps the mission powered through the ripple. It is also a **circuit breaker**: when revenue drops, the reserve trips in to carry operations for a defined window, stopping a funding gap from cascading into layoffs that break programs that lose clients that shrink future funding — a runaway failure. The breaker holds the line long enough to respond deliberately.`,
        breaks: `A buffer only survives a **transient** shock. If revenue falls and *stays* down, reserves merely delay the reckoning — they buy time to fix the underlying deficit, not a substitute for fixing it. Draining a reserve to fund a permanent gap is spending your circuit breaker to power a short. There is also a real tension: capital sitting in reserve is not funding programs today, and some funders unfairly penalize healthy reserves as "too much overhead." The answer is not zero reserve; it is a *right-sized* one — enough to absorb realistic shocks, not so much that you are stockpiling against imaginary ones.`,
      },
      workedExample: `**The Jane Addams Hull House Association** — heir to the famous Chicago settlement house founded by Jane Addams in 1889 — abruptly shut down in **2012** after more than a century of service, laying off staff and ending programs for thousands of families with only days of notice. A major factor, widely reported, was that the organization had grown dependent on government contracts and grants while holding almost **no operating reserve** (details here are illustrative of the pattern). When cash flow tightened and payments lagged, there was no buffer to carry operations, and a 122-year-old institution collapsed in weeks.

Run the arithmetic the board did not have room to run. Suppose an organization spends **$400,000** a month. A three-month reserve is **$1,200,000**; a six-month reserve is **$2,400,000**. That is the difference between a late grant being a manageable inconvenience and being an extinction event. Hull House shows the asymmetry starkly: decades of good work, undone not by a bad mission but by a missing buffer. The reserve you build quietly in good years is what lets the mission survive the year that goes wrong.`,
      branch: {
        scenario: `Your board is split. Revenue is healthy this year and you have a modest surplus. One faction wants to pour every available dollar into expanding programs now — "that's what donors gave for." Another wants to divert part of the surplus into building the three-month operating reserve you currently lack. A vocal donor grumbles that reserves are "money not helping anyone." What do you advocate?`,
        choices: [
          {
            label: 'Fund the reserve deliberately now, while you can, and expand programs at a pace the reserve can protect.',
            correct: true,
            consequence: `**Correct.** You build the buffer in good times because a crisis is exactly when you cannot. A three-month reserve is insurance the mission survives the next gap; expanding with zero buffer is running a critical system with no UPS. Fund the reserve as a real budget line and grow at a pace it can carry.`,
          },
          {
            label: 'Spend it all on programs now — reserves are money not helping anyone.',
            correct: false,
            consequence: `**Instructive miss.** The reserve *is* helping: it guarantees the programs keep running through the inevitable disruption. Zero reserve is not more mission-focused; it is one late payment from harming the people you serve — the Hull House outcome exactly.`,
          },
          {
            label: 'Stockpile as large a reserve as possible before spending anything on programs.',
            correct: false,
            consequence: `**Instructive miss — over-correction.** Hoarding starves the mission today and rightly frustrates donors. The goal is a *right-sized* buffer — a few months, funded steadily — not maximizing idle capital against imaginary shocks.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'numeric',
          prompt: 'You hold $900,000 in unrestricted operating reserves and spend $300,000 per month. How many months of runway does that give you? Compute 900,000 / 300,000.',
          answer: 3,
          tolerance: 0,
          unit: 'months',
          explain: 'Runway = reserves / monthly expenses = 900,000 / 300,000 = 3 months — the low end of the 3-6 month benchmark. Enough to survive a late grant or a short gap and make calm decisions, but a prolonged disruption would still force hard cuts. A buffer buys time; it does not fix a permanent deficit.',
        },
      ],
      tutorHooks: [
        { label: 'Compute my reserve target and runway', kind: 'ask', question: 'Help me estimate my monthly operating expenses, then set a right-sized reserve target in months and dollars for my specific risks, and tell me how many months of runway I have today.' },
        { label: 'Critique my reserve reasoning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'An organization spends $200,000/month and holds $600,000 in unrestricted reserves. Its runway is:',
          options: ['3 months', '6 months', '12 months', 'Cannot be determined'],
          answer: 0,
          explain: 'Runway = reserves / monthly expenses = 600,000 / 200,000 = 3 months. That is the low end of the 3-6 month benchmark: a real buffer, but only against a short, transient disruption.',
        },
        {
          kind: 'mcq',
          prompt: 'The best rebuttal to a donor who calls operating reserves "hoarding" is:',
          options: [
            'Reserves earn interest the nonprofit gets to keep',
            'A reserve is insurance that the mission keeps running through funding gaps, protecting the people served',
            'Every nonprofit is legally required to hold six months of reserves',
            'Reserves make the organization look bigger to funders',
          ],
          answer: 1,
          explain: 'A right-sized reserve is not idle wealth; it is a buffer that keeps programs running when revenue is disrupted. Zero reserve is not more mission-focused — it leaves the people served one late payment from harm.',
        },
        {
          kind: 'free',
          prompt: 'Estimate your organization\'s monthly operating expenses and state a reserve target in months and dollars. Explain why that number — not zero, not a giant stockpile — is right-sized for your specific risks, and how you would fund it over time.',
          rubric: 'A strong answer: (1) gives a concrete monthly-expense figure and computes a dollar reserve target from a stated number of months; (2) justifies the months chosen against the organization\'s actual risk profile (funder concentration, payment lag, revenue volatility) rather than quoting a benchmark blindly; (3) rejects both zero reserve and excessive hoarding; (4) names a realistic funding mechanism (a budget line funded a little each year in good times), showing reserves are engineered before a crisis, not scrambled for during one.',
        },
      ],
      commitSummary: 'concept only — with a buffer in place, the last lesson makes sure your growth never outruns the revenue that has to sustain it.',
    },

    // -----------------------------------------------------------------------
    {
      id: '104.4',
      module: 104,
      title: 'Sustainability vs growth',
      estMinutes: 17,
      prerequisites: ['104.1', '104.2', '104.3'],
      artifactSlot: null,
      concept: `Ambition is not the enemy; **ambition financed by one-time money** is. The most seductive way for a nonprofit to destroy itself is to scale programs — hire staff, open sites, take on clients — on the strength of a large **one-off or time-limited grant**, and then face the **cliff** when it ends. The people served, the staff hired, and the commitments made are all *recurring*; the money that started them was not. When the grant expires, you are carrying a permanently larger cost base on revenue that has vanished.

The discipline is to match the *durability* of your ambition to the *durability* of your revenue. **Recurring** revenue — earned income, a stable donor base, renewing contracts — can safely fund recurring programs. **One-time** revenue should fund **one-time** things: capacity that pays for itself, a pilot you can stop cleanly, an asset, a reserve. Using a windfall to launch permanent obligations is borrowing against a future that may not arrive.

This does not mean never grow. It means grow at the pace your *reliable* revenue can sustain, and treat one-off money as a bridge only when you can name the recurring revenue it bridges *to*. Sustainability is not the opposite of ambition. It is what lets ambition compound instead of collapse — the difference between a system that scales gracefully and one that grows until it fails all at once.`,
      reframe: {
        analogy: `Scaling on a one-off grant is **provisioning for a traffic spike as if it were steady-state load**. A surge of temporary capacity — money, in this case — tempts you to autoscale up permanent infrastructure: hire the staff, sign the leases. But when the spike passes, the load you provisioned for is gone and you are left over-provisioned, paying for capacity with no revenue to feed it. Sustainable growth means sizing your committed footprint to your **sustained** load — the revenue that reliably recurs — and treating bursts as bursts: use them for work that finishes, not for standing capacity you cannot afterwards afford.`,
        breaks: `Some growth is legitimately **front-loaded**, and refusing all one-time money would be its own mistake. Capacity investments — a new facility, a fundraising system, a one-time push to reach self-sustaining scale — are exactly what windfalls *should* buy, because they lower future cost or raise future recurring revenue. The distinction is whether the one-off money creates a **permanent obligation** or a **self-liquidating** one. "Scale on a grant" is dangerous when it commits you to recurring costs with no recurring revenue behind them; it is prudent when you can point to the durable revenue the investment unlocks. Name that revenue, or do not make the commitment.`,
      },
      workedExample: `A common and well-documented pattern: a nonprofit wins a large **two-year government or foundation grant**, uses it to double program staff and open new sites, and delivers real impact — until the grant ends and there is no renewal. This is the **grant cliff**, and the sector is littered with organizations that hit it. Programs that families came to depend on are cut, experienced staff are laid off, and the mission contracts hard — not because the work was bad, but because *recurring* commitments were built on *non-recurring* money.

Put numbers to it. Suppose a **$1,000,000** two-year grant funds ten new staff at a fully-loaded **$100,000** each. For two years the programs thrive. In year three the grant is gone but the ten roles, the clients, and the expectations remain — a permanent **$1,000,000-a-year** hole opened by temporary money. The organizations that scale *durably* do the opposite: they use one-off grants to build fundraising capacity, launch earned income, or seed a reserve — things that either pay for themselves or can stop cleanly — and grow permanent programs only as fast as recurring revenue can carry them. Illustrative, but the trap is entirely real.`,
      branch: {
        scenario: `A national foundation offers your $2,000,000-budget nonprofit a **$1,500,000 one-time grant**, to be spent over 18 months, explicitly to "scale your flagship program fast." It would let you triple the program's staff and clients. There is no commitment to renew. What is the wisest response?`,
        choices: [
          {
            label: 'Accept, but aim it mostly at durable capacity — earned income, a donor pipeline, a reserve — and grow permanent staff only to the level your recurring revenue can sustain past the grant.',
            correct: true,
            consequence: `**Correct.** You convert one-time money into things that either recur or stop cleanly, sizing permanent obligations to your sustained load. That is scaling gracefully instead of provisioning for a spike that will pass. Where you do add program capacity, keep it in a form you can taper.`,
          },
          {
            label: 'Accept and triple permanent program staff now — impact now matters most, worry about renewal later.',
            correct: false,
            consequence: `**The grant cliff, exactly.** In 18 months you carry a tripled, permanent cost base on revenue that has vanished, and you cut deeper than you grew — harming the very clients you added. Recurring commitments on non-recurring money is the classic fatal move.`,
          },
          {
            label: 'Decline it — one-time money is too dangerous to touch.',
            correct: false,
            consequence: `**Instructive miss — over-correction.** A windfall is not the enemy; committing it to permanent obligations is. Declining capital you could safely spend on self-liquidating capacity leaves durable growth on the table. Take it, and aim it at what recurs or ends cleanly.`,
          },
        ],
      },
      blocks: [
        {
          kind: 'scenario',
          title: 'The two-year grant: three forks',
          intro: 'You have accepted a $1,000,000 two-year grant to grow a tutoring program. Walk the key decisions with sustainability in mind — match every commitment to the durability of the money behind it.',
          decisions: [
            {
              situation: 'How do you staff the expansion?',
              options: [
                { label: 'Hire ten permanent full-time employees immediately', correct: false, outcome: 'Permanent roles funded by temporary money — this builds the exact cliff you will fall off in year three.' },
                { label: 'Use fixed-term and part-time capacity sized to the grant window, converting roles to permanent only as recurring revenue appears', correct: true, outcome: 'Right. You match the durability of the commitment to the durability of the money, keeping the option to scale down cleanly.' },
              ],
            },
            {
              situation: 'Part of the grant is discretionary. Where does it go?',
              options: [
                { label: 'Into more direct program delivery, to maximize clients served right now', correct: false, outcome: 'Tempting, but it deepens the recurring cost base without building anything that outlasts the grant.' },
                { label: 'Into building earned income and a donor pipeline that will still generate revenue after the grant ends', correct: true, outcome: 'Right. You use one-time money to manufacture recurring money — the bridge to sustainability.' },
              ],
            },
            {
              situation: 'Month 20: you learn the grant will not renew. What now?',
              options: [
                { label: 'Wait and panic-cut in month 24 when the cash actually stops', correct: false, outcome: 'Cascading failure — abrupt cuts harm clients and staff and damage your reputation with other funders.' },
                { label: 'Because commitments were sized to recurring revenue and a pipeline exists, taper gracefully to a sustainable level', correct: true, outcome: 'Right. Graceful degradation instead of collapse — the whole point of matching growth to durable revenue.' },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Stress-test my growth plan for a cliff', kind: 'ask', question: 'Here is a growth move I am considering and the revenue that would fund it. Tell me whether that revenue is recurring or one-time, whether the commitment it creates is permanent or self-liquidating, and where a grant cliff might be hiding.' },
        { label: 'Harder: matching growth to recurring revenue', kind: 'harder', concept: 'restructuring an ambitious growth plan so permanent commitments are backed only by recurring revenue' },
        { label: 'Critique my sustainability reasoning', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'A nonprofit doubles permanent staff using a two-year grant with no renewal commitment. The core risk is:',
          options: [
            'The grant is too small to matter',
            'A grant cliff — recurring costs built on non-recurring revenue',
            'Holding too much operating reserve',
            'Earned income crowding out donations',
          ],
          answer: 1,
          explain: 'Permanent staff are a recurring cost; a one-time grant is not recurring revenue. When it ends, the cost base remains and the money is gone — the grant cliff.',
        },
        {
          kind: 'mcq',
          prompt: 'One-time windfall money is most safely spent on:',
          options: [
            'Permanent new program staff',
            'Self-liquidating or capacity investments that recur or can stop cleanly, such as building earned income or seeding a reserve',
            'Recurring rent on a larger office',
            'Long-term client commitments with no exit',
          ],
          answer: 1,
          explain: 'One-time money should fund one-time or self-liquidating things — capacity that pays for itself or that you can stop cleanly. Committing it to permanent obligations with no recurring revenue behind them builds a cliff.',
        },
        {
          kind: 'free',
          prompt: 'Describe a growth move your organization is considering. Classify the revenue that would fund it as recurring or one-time, and state whether the commitment it creates is permanent or self-liquidating. If they mismatch, describe how you would restructure the plan to avoid a cliff.',
          rubric: 'A strong answer: (1) names a specific growth move; (2) correctly classifies its funding as recurring vs one-time and its commitment as permanent vs self-liquidating; (3) if there is a mismatch (permanent commitment on one-time money), proposes a concrete restructure — fixed-term staffing, building recurring revenue first, or redirecting the windfall to capacity — rather than just growing anyway; (4) shows understanding that sustainable growth means sizing permanent footprint to sustained, reliable revenue.',
        },
      ],
      commitSummary: 'concept only — this closes the module: a diversified mix, aligned earned income, a reserve buffer, and growth matched to revenue that actually recurs.',
    },
  ],
}
