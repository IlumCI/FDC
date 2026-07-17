import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 15 — Deep market & customer research with real data  (SEASON 2)
//
// Season 1 taught the SHAPE of market sizing and customer discovery on a
// disposable startup.json. Season 2 makes it real: the learner now pulls
// actual datasets (Census, Statista), runs actual interviews (The Mom Test),
// and reads actual demand (Google Trends, reviews, communities) to build a
// market number they could defend to an investor without flinching. Every
// lesson is artifactSlot:null; the real evidence is captured through the
// interactive `blocks` (platformTask writes findings into "My venture").
// ===========================================================================

export const module15: Module = {
  id: 15,
  season: 2,
  title: 'Deep market & customer research with real data',
  goal: 'Replace guesses with evidence: use real datasets, real interviews, and real competitive intel to size a market you can defend to an investor.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '15.1',
      module: 15,
      title: 'Primary vs secondary research',
      estMinutes: 16,
      prerequisites: ['13.4'],
      artifactSlot: null,
      concept: `Every claim you make about your market traces back to one of two kinds of evidence, and confusing them is how founders end up confidently wrong.

**Primary research** is data you instrument yourself: interviews you run, a survey you field, a landing page you A/B test, a user you watch attempt a task. You control the question, the population, and the conditions, so you know exactly what the number means — but you pay for every data point in your own time, and a small, biased sample can mislead you badly.

**Secondary research** is data someone else already collected: a Statista report, US Census tables, an analyst's market estimate, a competitor's pricing page. It is fast, cheap, and often huge — but you did not control how it was measured. The definitions, the population, and the time period are someone else's, and sometimes the someone else was selling something.

The discipline is not "primary good, secondary bad." It is knowing **when each is trustworthy**. Secondary data is trustworthy for framing and orders of magnitude, and only as far as you understand its methodology; the moment a decision hinges on it, read the fine print or stop trusting it. Primary data is trustworthy for *your specific question* — but only if your sample actually represents the people you'll sell to. The competent researcher uses cheap secondary data to frame the question, then spends primary-research effort exactly where a wrong answer would be expensive. Start cheap; instrument where it counts.`,
      reframe: {
        analogy: `Secondary research is reading a **datasheet**; primary research is **putting the part on your own bench and measuring it**. The datasheet is fast and authoritative — typical Vce(sat), gain, thermal resistance — and for framing a design it's exactly right. But every datasheet number was measured under *the manufacturer's* conditions (often a balmy 25 C, a specific test jig), and your circuit runs at 85 C in a different topology. When a decision actually depends on the number, you stop trusting the datasheet and measure the part where it will really live. Same with a market report: trustworthy for orders of magnitude, dangerous the moment you bet on its exact figure without knowing the test conditions.`,
        breaks: `A datasheet is produced by an engineer who mostly wants you to succeed and specifies test conditions honestly; a market report or a competitor's "60% of teams struggle with X" is often produced by someone who **profits if you believe it**, and rarely publishes its methodology at all. So the failure mode is worse than a temperature mismatch — it can be motivated distortion. And primary measurement has its own trap the datasheet analogy hides: your bench instrument can be *biased*, not just noisy. Mail ten million survey ballots to the wrong population and a huge sample gives you a huge, confident, wrong answer. Big N does not rescue a bad sample frame.`,
      },
      workedExample: `**The Literary Digest poll of 1936 — primary research, done at scale, catastrophically wrong.** For decades The Literary Digest had correctly predicted US presidential elections by mailing out enormous straw-poll ballots. In 1936 it mailed about 10 million ballots and tallied roughly 2.4 million returns — a sample almost unimaginably large — and confidently predicted Alf Landon would beat Franklin Roosevelt. Roosevelt won 46 of 48 states. Meanwhile George Gallup, using a far smaller but deliberately representative sample of a few thousand, called it correctly.

What went wrong was not the size of the instrument but its **sample frame**. The Digest drew its addresses from telephone directories, automobile registrations, and its own subscriber list — disproportionately wealthy Americans in the depths of the Depression, a group that leaned Landon. The magnitude of the sample gave the result a false authority; the bias baked into *who got a ballot* made ten million responses no better than a rumor. The transferable lesson for your venture research is exact: when you instrument reality yourself, the first question is never "how many responses did I get?" It is "does the population I sampled actually look like the customers I intend to sell to?" A biased frame with a huge N is the most dangerous data you can own, because it feels like proof.`,
      branch: {
        scenario: `You need to size a niche B2B market and confirm the problem is real before building. You have $2,000 that could buy a polished analyst report with a headline market number, and you have two free weeks. What's the disciplined sequence?`,
        choices: [
          {
            label: 'Buy the analyst report and use its headline market number as your official market size — it\'s from professionals, so it\'s authoritative.',
            correct: false,
            consequence: `**Over-trusting the datasheet.** A purchased report is fine for framing, but its headline number was built on someone else's definitions, geography, and time period — and often on assumptions the vendor benefits from you accepting. Treating it as gospel means you're betting your plan on test conditions you never read. Use it to frame the order of magnitude, then verify with your own arithmetic and your own customers before you stake anything on it.`,
          },
          {
            label: 'Skip secondary sources entirely and spend both weeks doing your own interviews and a survey — only data you collect can be trusted.',
            correct: false,
            consequence: `**Throwing away free framing.** Primary research is where you should spend effort — but starting from zero context means you reinvent baselines (how many firms exist, typical spend) that public data hands you for free in an afternoon. You'll also design worse interview questions without knowing the landscape. Instrument reality, yes, but frame the question with cheap secondary data first so your expensive primary effort lands where it matters.`,
          },
          {
            label: 'Use free secondary data (Census, public reports) to frame the size and definitions, then spend your two weeks on primary research — interviews and a survey — aimed exactly at the claim your plan depends on.',
            correct: true,
            consequence: `**Correct — triangulation.** Cheap secondary data sets the order of magnitude and the vocabulary; your own primary research then tests the one claim a wrong answer would be expensive on (do these specific buyers have this problem and will they pay?). You spend money and time where they buy the most certainty, and you can defend every number by saying exactly how it was measured.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each research activity into primary (you instrument reality yourself) or secondary (you read data someone else already collected). Getting this reflex right is what lets you say, for any number in your deck, exactly how it was measured.',
          buckets: ['Primary research', 'Secondary research'],
          items: [
            { text: 'Interviewing 15 prospective customers yourself about their last purchase', bucket: 'Primary research' },
            { text: 'Fielding your own survey through Google Forms', bucket: 'Primary research' },
            { text: 'Watching a user attempt the core task and timing where they get stuck', bucket: 'Primary research' },
            { text: 'Running an A/B test on your own landing page', bucket: 'Primary research' },
            { text: 'A Statista industry-size report', bucket: 'Secondary research' },
            { text: 'US Census County Business Patterns tables', bucket: 'Secondary research' },
            { text: 'A competitor\'s published pricing page', bucket: 'Secondary research' },
            { text: 'Reading the reviews customers left for a rival on G2', bucket: 'Secondary research' },
          ],
          explain: 'Primary = you control the question, population, and conditions (interviews, surveys, usability sessions, your own A/B tests). Secondary = existing data collected by others for their own purposes (analyst reports, Census tables, competitor pages, third-party reviews). Neither is inherently better; you just must always know which one a number is, because that tells you how far to trust it.',
        },
        {
          kind: 'resource',
          title: 'Your Season 2 research shelf (real, canonical sources)',
          items: [
            { label: 'US Census — County Business Patterns', url: 'https://www.census.gov/programs-surveys/cbp.html', note: 'Free, authoritative counts of US establishments, employment, and payroll by industry (NAICS). The backbone of a defensible bottom-up size.' },
            { label: 'Statista', url: 'https://www.statista.com/', note: 'Broad secondary market statistics. Great for framing; always click through to the underlying source and note the year and definition.' },
            { label: 'The Mom Test — Rob Fitzpatrick', url: 'https://www.momtestbook.com/', note: 'The canonical guide to primary customer research: how to talk to people so you get facts, not flattery. You\'ll use this heavily in 15.3.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Which data should I trust for this claim?', kind: 'ask', question: 'Here is a specific claim my plan depends on. Help me decide whether I should rely on secondary data or run primary research to support it, what the cheapest trustworthy source is, and what methodology questions I must ask before believing any number I find.' },
        { label: 'Design my research sequence', kind: 'ask', question: 'For my venture, lay out the cheapest-first research sequence: which free secondary sources to check to frame the market, then exactly which primary research (interviews, survey, usability) to spend my limited time on and why.' },
        { label: 'Critique my sources for bias', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why did The Literary Digest\'s 1936 prediction fail despite a sample of over two million responses?',
          options: [
            'The sample was too small to be statistically valid',
            'Its sample frame (phone owners, car owners, subscribers) was biased toward wealthier voters, so a huge N still misrepresented the electorate',
            'They used secondary data instead of primary data',
            'Election polling is inherently impossible to do accurately',
          ],
          answer: 1,
          explain: 'The instrument was primary and enormous, but the population it sampled was skewed toward affluence during the Depression. A biased sample frame is not fixed by size — a large N just makes a wrong answer feel authoritative. For your own research, "does this sample look like my future customers?" beats "how many responses did I get?"',
        },
        {
          kind: 'mcq',
          prompt: 'What is the correct role of a purchased analyst market report in your research?',
          options: [
            'It is authoritative, so its headline number becomes your official market size',
            'It is useless because you didn\'t collect it yourself',
            'It is good for framing the order of magnitude and vocabulary, but you must know its methodology before betting a decision on any specific figure',
            'It should replace the need to talk to customers',
          ],
          answer: 2,
          explain: 'Secondary data is like a datasheet: trustworthy for framing and orders of magnitude, but every figure was measured under someone else\'s definitions, geography, and time period — sometimes by a party who profits from you believing it. Use it to frame, then verify anything load-bearing with your own arithmetic and customers.',
        },
        {
          kind: 'free',
          prompt: 'For your venture, name one claim your plan depends on. State whether you\'ll support it with secondary data, primary research, or both — and justify the choice. If secondary, name the source and one methodology question you must answer before trusting it; if primary, describe your sample and how you\'ll keep its frame from being biased.',
          rubric: 'Strong answer: (1) states a specific, load-bearing claim (market size, willingness to pay, problem frequency) rather than a vague topic; (2) correctly classifies the evidence needed as primary and/or secondary and justifies it by how expensive a wrong answer would be; (3) for secondary, names a real source and a concrete methodology question (definition, year, who funded it); (4) for primary, describes a sample and shows awareness of sample-frame bias (the Literary Digest lesson). Penalize answers that treat any single source as automatically authoritative.',
        },
      ],
      commitSummary: 'no slot written — this lesson gives you the reflex to classify every future number as primary or secondary and to know exactly how far to trust it.',
    },

    // -----------------------------------------------------------------------
    {
      id: '15.2',
      module: 15,
      title: 'Bottom-up market sizing with real numbers',
      estMinutes: 20,
      prerequisites: ['15.1'],
      artifactSlot: null,
      concept: `There are two ways to size a market, and one of them is a red flag.

**Top-down** starts from a giant number and takes a slice: "the global logistics market is $500 billion; if we capture just 1%, that's $5 billion." It is fast, it is impressive on a slide, and experienced investors have learned to distrust it on sight — because the "1%" is arbitrary, the giant number was measured by someone else under unknown definitions, and nothing in the arithmetic connects to a single real customer. "We only need 1%" is a phrase that has never once explained *how* you'd get the 1%.

**Bottom-up** builds the number from units you can actually count: how many customers of a specific type exist, what fraction you can realistically reach and win, and what each pays. Number of establishments x adoption x price. Every factor is a number you can source, challenge, and defend. The output is usually far smaller than the top-down fantasy — and far more credible, because an investor can interrogate each input instead of an arbitrary slice.

The reason bottom-up wins is not modesty; it is **falsifiability**. A top-down estimate can't be wrong in any useful way, so it teaches you nothing. A bottom-up model exposes exactly which assumption is doing the work — usually adoption rate or price — so you know precisely what to go validate next. Sizing is not a vanity exercise for the deck; it is the arithmetic that tells you whether the business can be big enough to matter, and which single number to test first. Show the arithmetic, source every factor, and let the small honest number beat the big fake one.`,
      reframe: {
        analogy: `Bottom-up sizing is a **bottom-up energy or mass estimate** in engineering. You don't estimate a satellite's mass by saying "spacecraft are roughly two tonnes, ours is probably 1%." You build a mass budget line by line — this bracket, that battery, this harness — because only a summed budget of real components can be checked, challenged, and closed. Each line has a source and an error bar; the total inherits them honestly. A top-down market number is the equivalent of writing down a mass with no budget behind it: a number with no traceability, impossible to defend in a review and impossible to improve, because you can't see which line is wrong.`,
        breaks: `A mass budget sums components that are *known and finite* — the bill of materials exists. A market's components are **estimated and moving**: how many buyers exist is knowable, but your adoption rate is a genuine guess and your price may change. So bottom-up sizing is not precise the way a mass budget is; its virtue is that it makes every guess *explicit and separately testable*, not that it's exact. And there's a second gap: a bottom-up model built purely on today's customers can *undercount* a market that a new product expands — the very mistake made against Uber. Bottom-up keeps you honest about the present; it can't fully see markets you'd create.`,
      },
      workedExample: `**Uber's market size: Gurley vs Damodaran, 2014.** Valuation professor Aswath Damodaran published a widely-read analysis pegging Uber's total addressable market at the existing global taxi-and-car-service market — roughly $100 billion — and assuming Uber might capture about 10%, arriving at a company worth around $6 billion. Classic top-down: start from a big existing number, take a plausible-sounding slice.

Investor Bill Gurley responded with "How to Miss By a Mile" (cited below), and the rebuttal is a masterclass in why the *method* matters more than the arithmetic. Gurley argued the top-down frame was anchored on the wrong denominator: it assumed the world of transportation stays fixed, when a dramatically cheaper and more convenient option *expands* the market — pulling in trips people currently make by car ownership, public transit, or not at all. He built his estimate up from cities, trips, and new use cases rather than slicing a static pie. History was kinder to the bottom-up, market-expanding view: US ride-hail volume grew far beyond the taxi baseline the top-down number assumed.

The transferable lessons cut both ways. First, a top-down "X% of a big market" invites exactly the objection Damodaran's frame drew — it hides which assumption is load-bearing. Second, and subtler: a naive bottom-up count of *today's* customers can under-size a market your product will grow. The fix is not to abandon bottom-up; it is to build from countable units *and* state explicitly any expansion you're betting on, so a reader can challenge each piece.`,
      branch: {
        scenario: `An investor asks, "How big is this?" You have 60 seconds. Three answers are on your tongue. Which do you give?`,
        choices: [
          {
            label: '"It\'s a $50 billion market and we only need to capture 1% to build a huge business."',
            correct: false,
            consequence: `**The top-down smell.** Every experienced investor has heard "we only need 1%" a thousand times and it signals you haven't done the work. The 1% is arbitrary, the $50B is someone else's number, and nothing connects to a real customer you could name. You've told them the market exists; you've said nothing about whether *you* can win any of it.`,
          },
          {
            label: '"There are about 130,000 US practices of this type; we can realistically reach roughly 20% and charge $1,200 a year, so our serviceable market is about $31 million a year — and the assumption I most need to prove is the adoption rate."',
            correct: true,
            consequence: `**Correct — bottom-up and defensible.** You built the number from countable units (establishments x adoption x price), sourced the count from real data, and — crucially — named the single assumption doing the most work so the investor can interrogate it with you. A smaller, traceable number beats a huge arbitrary one every time, because it proves you understand the actual path to revenue.`,
          },
          {
            label: '"Gartner says this category will be worth $80 billion by 2030, so the opportunity is enormous."',
            correct: false,
            consequence: `**Borrowed authority, no arithmetic.** Citing a big third-party forecast tells the investor the category is real but nothing about your reachable revenue, your price, or your path. It's secondary data used as a substitute for thinking. They'll ask the next question — "so how many customers can *you* get, and at what price?" — and you'll have nothing. Do that arithmetic before you walk in.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Build a bottom-up serviceable market. You sell scheduling software to independent US dental practices. US Census County Business Patterns lists roughly 130,000 dental-office establishments. You estimate you can realistically reach and win about 20% of them, at $1,200 per practice per year. What is your serviceable market, in dollars per year? Compute 130,000 x 0.20 x 1,200.',
          answer: 31200000,
          tolerance: 100000,
          unit: '$/year',
          explain: 'Reachable practices = 130,000 x 0.20 = 26,000. Revenue each = $1,200/year. Serviceable market = 26,000 x 1,200 = $31,200,000/year (about $31M). Notice every factor is a number you can source and defend: the establishment count comes from Census, the 20% and the price are your explicit, testable assumptions. The adoption rate is almost always the softest input — so that is the first thing you go validate.',
        },
        {
          kind: 'platformTask',
          title: 'Pull a real number and build your bottom-up size',
          body: 'Size YOUR market from countable units, not a top-down slice. Find the real count of your target customers from a public source, choose an honest reachable-fraction and a price, and multiply. If you can, sanity-check your price assumption by asking a few real prospects (a two-question Google Form works). Then record the arithmetic and, critically, name the single assumption most likely to be wrong. Spend 30-45 minutes.',
          links: [
            { label: 'US Census — Census Business Builder (count firms by industry & geography)', url: 'https://www.census.gov/data/data-tools/cbb.html' },
            { label: 'US Census — County Business Patterns (establishment counts by NAICS)', url: 'https://www.census.gov/programs-surveys/cbp.html' },
            { label: 'Statista — industry-size statistics for framing', url: 'https://www.statista.com/' },
            { label: 'Google Forms — field a quick price/willingness question', url: 'https://www.google.com/forms/about/' },
          ],
          steps: [
            'Find the real count of your target customer type from a public source (Census Business Builder or County Business Patterns for US firms; an industry body otherwise). Write the number and the source.',
            'Choose a defensible reachable fraction (who you can realistically market to and win) and a price. State them as assumptions, not facts.',
            'Multiply: count x reachable fraction x price = your serviceable market per year. Show the arithmetic.',
            'Name the ONE assumption most likely to be wrong (usually adoption or price) and how you would test it cheaply.',
            'Record your number, your sources, and that key assumption below.',
          ],
          taskKey: '15.2#sizing',
          proofLabel: 'Your bottom-up serviceable market: the arithmetic, the sourced count, and the assumption you most need to prove',
          proofKind: 'text',
        },
        {
          kind: 'resource',
          title: 'Bottom-up sizing done right (real references)',
          items: [
            { label: 'Bill Gurley — "How to Miss By a Mile" (Uber market size)', url: 'https://abovethecrowd.com/2014/07/11/how-to-miss-by-a-mile-an-alternative-look-at-ubers-potential-market-size/', note: 'The definitive essay on why a static top-down slice mis-sizes a market a new product will expand. Source for the worked example.' },
            { label: 'US Census — County Business Patterns', url: 'https://www.census.gov/programs-surveys/cbp.html', note: 'Where the "how many firms of type X exist" number actually comes from, by NAICS code and geography.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Build my bottom-up model with me', kind: 'ask', question: 'Walk me through a bottom-up market size for my venture: help me find the real count of target customers, choose a defensible reachable fraction and price, do the arithmetic, and identify which single assumption is doing the most work.' },
        { label: 'Where do I find the unit count?', kind: 'ask', question: 'For my specific target customer, tell me exactly which public dataset or industry source gives a credible count of how many exist (Census NAICS code, an industry association, etc.) and how to look it up.' },
        { label: 'A harder sizing case', kind: 'harder', concept: 'sizing a market your product will expand, where a naive bottom-up count of today\'s customers under-sizes the real opportunity (the Uber problem)' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why do experienced investors distrust a "the market is $50B and we only need 1%" pitch?',
          options: [
            'Because 1% is too ambitious a target',
            'Because the slice is arbitrary and the arithmetic connects to no real customer, so it can\'t be wrong in any useful way and proves nothing about your path to revenue',
            'Because $50 billion is not a large enough market',
            'Because top-down numbers are always mathematically incorrect',
          ],
          answer: 1,
          explain: 'The "1%" is unjustified and the big number is someone else\'s; nothing in the estimate connects to a customer you could name or a price they\'d pay. Because it can\'t be interrogated input-by-input, it teaches nobody anything. A bottom-up number is smaller but defensible, and it exposes exactly which assumption to test first.',
        },
        {
          kind: 'mcq',
          prompt: 'In a bottom-up size like "130,000 firms x 20% reachable x $1,200," which input is usually the softest and therefore the first to validate?',
          options: [
            'The count of firms, because public data is unreliable',
            'The price, because prices never change',
            'The reachable/adoption fraction, because it\'s your least-grounded assumption about how many you can actually win',
            'None — all three are equally certain once written down',
          ],
          answer: 2,
          explain: 'The firm count usually comes from solid public data, and price you can test with prospects, but the reachable/adoption fraction is typically a genuine guess about how many customers you can actually market to and win. That is the assumption doing the most work in the model, so it is the one to go prove (or disprove) first.',
        },
        {
          kind: 'free',
          prompt: 'Present your bottom-up serviceable market for your venture as an investor-ready line: the sourced count of target customers, your reachable fraction, your price, and the resulting annual number. Then state which single assumption you most need to validate and the cheapest way you\'d test it.',
          rubric: 'Strong answer: (1) shows real arithmetic (count x reachable fraction x price) with a concrete result, not a top-down "X% of a big number"; (2) sources the customer count from a named real dataset or industry source; (3) states the reachable fraction and price as explicit, challengeable assumptions; (4) identifies the load-bearing assumption (usually adoption or price) and a cheap validation. Penalize top-down slices, unsourced counts, or a number with no stated path to reaching it.',
        },
      ],
      commitSummary: 'your bottom-up serviceable market — the arithmetic, the sourced count, and the key assumption — is captured in "My venture." A number you can defend, not a slice you hope for.',
    },

    // -----------------------------------------------------------------------
    {
      id: '15.3',
      module: 15,
      title: 'Customer discovery interviews for real',
      estMinutes: 20,
      prerequisites: ['15.1'],
      artifactSlot: null,
      concept: `In Season 1 you practiced the idea of talking to customers. Now you run real interviews with real people, and the failure mode is specific and universal: **people lie to be nice.** Not maliciously — socially. Ask "would you use a tool that does X?" and a kind human says "sure, sounds useful," because agreeing is polite and free. You walk away with a false positive that costs you a year.

The discipline, codified in *The Mom Test* (Rob Fitzpatrick, cited below), is to make it **impossible to get a useless compliment.** You do this by never pitching and never asking about the future or their opinions. Instead you ask about their **past behavior and specific facts**: "Walk me through the last time you dealt with this. What did you do? What did it cost you? What have you already tried? What did you pay for it?" People can flatter your idea for free, but their past actions and their wallet don't lie.

Then comes the part engineers under-invest in: **coding the transcripts.** An interview is raw data, not a conclusion. Afterward you separate **signal** — specific past facts, real spending, concrete commitments, emotional intensity about a real problem — from **noise** — compliments, generic agreement, hypotheticals, and feature requests untethered from any pain they've actually felt. You tag statements, count how many independent people gave the same signal, and only then update your beliefs.

The goal is not to hear "yes." It is to learn the truth cheaply enough that a "no" is a gift.`,
      reframe: {
        analogy: `A leading question is a **low-impedance probe loading the node you're trying to measure.** When you pitch your idea and ask "isn't that great?", your probe injects the very signal you're reading back — the interviewee's answer is mostly *your* enthusiasm reflected, not the true state of their world. The Mom Test is a **high-impedance probe**: by asking only about past behavior and facts, you draw almost no current from the node, so you observe the circuit as it actually is when you're not touching it. Good customer discovery, like good measurement, disturbs the system as little as possible.`,
        breaks: `The observer-effect analogy assumes a *neutral* interviewee who is merely perturbed by your probe. Real humans are worse: they have an **active drive to please you** — a bias with intent, not just loading. So unlike a circuit, you can't fix it by gentleness alone (a soft "would you like this?" still gets a lie); you must change *what* you ask, not just how lightly. And there's a second break: a perfect probe can't measure a node that doesn't exist. Interview beautifully about a problem people don't actually have, and you'll still get clean, honest, useless data — "no, I've never dealt with that." Technique protects you from false positives; it can't manufacture a real problem to find.`,
      },
      workedExample: `**The Mom Test's founding example — the cookbook app.** Rob Fitzpatrick opens the book with a scenario every founder recognizes. Imagine asking your mother, "Would you buy an app that helps you cook?" Of course she says yes — she loves you and wants to be supportive. You've learned nothing except that your mom is nice. The question was worthless because it asked about a hypothetical future purchase and invited a compliment.

Now ask instead about her actual life: "How do you cook these days? When was the last time you bought a cookbook or a cooking app? Do you use it? What did you pay?" Suddenly you might learn she owns three cookbooks she never opens, cooks the same five meals from memory, and last downloaded a recipe app that she deleted in a week. That is real, unflattering, decision-grade data — and it quietly tells you the cooking-app market is harder than her polite "yes" suggested.

The pattern generalizes to every interview you'll run. The bad version asks about the *future* ("would you," "do you think you'd") and about *your idea*, which manufactures agreement. The good version asks about the *past* and about *their behavior and money*, which manufactures facts. Fitzpatrick's rule of thumb: you're doing it right when the conversation is about *their* life, not *your* idea — and when you sometimes hear things you didn't want to hear. If every interview "goes great," you're pitching, not learning. (See The Mom Test and Steve Blank's customer-development work, both cited below.)`,
      branch: {
        scenario: `You've got 30 minutes with a perfect prospective customer. You're excited about your solution and want to know if they'd buy it. What do you actually do in the interview?`,
        choices: [
          {
            label: 'Describe your product enthusiastically and ask, "Would you use something like this? Would you pay $40 a month for it?"',
            correct: false,
            consequence: `**Manufacturing a false positive.** You pitched, then asked about a hypothetical future purchase — the two things guaranteed to produce a polite "yeah, I\'d probably use that." It feels amazing and means nothing. A month later they don\'t sign up and you\'re baffled. You measured your own enthusiasm reflected back, not their real behavior.`,
          },
          {
            label: 'Don\'t mention your idea at all yet. Ask them to walk you through the last time they faced this problem: what they did, what it cost them, what they\'ve already tried, and what they\'ve paid to solve it.',
            correct: true,
            consequence: `**Correct — the Mom Test.** By anchoring on their specific past behavior and real spending, you get facts they can't politely fake. You learn whether the problem is frequent and painful enough that they\'ve already spent time or money on it — the single best predictor that they\'ll pay you. You can show your solution later; first you extract the truth while it\'s uncontaminated by your pitch.`,
          },
          {
            label: 'Hand them a list of your planned features and ask them to rate each one\'s importance from 1 to 10.',
            correct: false,
            consequence: `**Clean-looking noise.** Feature ratings are hypotheticals dressed up as data — people rate everything moderately important because saying "10" is free and commits them to nothing. You get a tidy spreadsheet that predicts no purchasing behavior. Ask what they actually did and paid for last time, not how they\'d score a wishlist they\'ve never had to fund.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'platformTask',
          title: 'Run 3 real customer interviews (this is the milestone)',
          body: 'Find and interview THREE real people who plausibly have your problem — not friends, not family, not fellow founders. Use The Mom Test discipline: do not pitch, do not ask about the future. Ask about the last time they faced the problem, what they did, what it cost, what they\'ve tried, and what they\'ve paid. Take notes on their exact words. Afterward, code each transcript: separate signal (specific past facts, real spending, strong emotion, concrete commitments) from noise (compliments, hypotheticals, generic agreement). Then record what you learned that you did NOT already believe. This is the module\'s milestone — it is worth doing properly.',
          links: [
            { label: 'The Mom Test — how to ask so you get facts, not flattery', url: 'https://www.momtestbook.com/' },
            { label: 'Steve Blank — customer development ("get out of the building")', url: 'https://steveblank.com/' },
            { label: 'Reddit — find communities where your customers already gather', url: 'https://www.reddit.com/' },
          ],
          steps: [
            'Identify 3 real people who plausibly have the problem; reach them via a relevant community, your network\'s extended reach, or a cold ask. Avoid friends and family.',
            'In each interview, ask only about their past and their behavior: "Tell me about the last time this happened. What did you do? What did it cost you? What have you tried? What did you pay?"',
            'Never pitch and never ask "would you use this?" Let the conversation be about their life, not your idea.',
            'Right after each call, code your notes: mark each statement as signal (a specific past fact, real spend, strong emotion, a commitment) or noise (a compliment, a hypothetical, generic agreement).',
            'Write the one thing across the three interviews that most changed your mind — especially anything you did NOT want to hear.',
          ],
          taskKey: '15.3#interviews',
          proofLabel: 'What 3 real interviews taught you that you did not already believe (with the strongest signal you coded)',
          proofKind: 'text',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'Customer discovery, done for real (canonical)',
          items: [
            { label: 'The Mom Test — Rob Fitzpatrick', url: 'https://www.momtestbook.com/', note: 'Short, tactical, and the single best book on interviewing customers without leading them. Read it before your interviews.' },
            { label: 'Steve Blank — the Customer Development method', url: 'https://steveblank.com/', note: 'Origin of "get out of the building" and the discipline of testing your beliefs against real customers before building.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Turn my pitch into Mom Test questions', kind: 'ask', question: 'Here is what I want to learn from my customers. Rewrite my interview questions so none of them pitch my idea or ask about the future — only about their past behavior, what they\'ve tried, and what they\'ve paid.' },
        { label: 'Code my interview notes', kind: 'ask', question: 'Here are my raw notes from a customer interview. Help me code them: separate genuine signal (specific past facts, real spending, strong emotion, commitments) from noise (compliments, hypotheticals, generic agreement), and tell me what I can and cannot conclude.' },
        { label: 'Critique my interview technique', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why is "Would you use a tool that does X?" a bad customer-discovery question?',
          options: [
            'It\'s too long and confuses interviewees',
            'It asks about a hypothetical future and invites a free, polite compliment, producing a false positive rather than a fact about real behavior',
            'It reveals your idea, which competitors could steal',
            'It should be asked by email, not in person',
          ],
          answer: 1,
          explain: 'The question asks about the future and about your idea — the two things that manufacture agreement. People say "sure, sounds useful" because it costs them nothing. The Mom Test fix is to ask about their specific past behavior and real spending, which they can\'t politely fake: what they actually did and paid last time predicts what they\'ll do next.',
        },
        {
          kind: 'mcq',
          prompt: 'When coding interview transcripts, which of these counts as genuine SIGNAL rather than noise?',
          options: [
            '"That sounds like a great idea, you should build it."',
            '"I\'d definitely pay for something like that someday."',
            '"Last quarter I paid a contractor $3,000 to do this by hand because nothing existed."',
            '"Feature Y would be nice to have, I guess."',
          ],
          answer: 2,
          explain: 'A specific past action backed by real money ("I paid $3,000 last quarter to solve this") is behavior under load — the strongest evidence a problem is real and fundable. The others are a compliment, a hypothetical future purchase, and a lukewarm feature opinion: all free to say, all noise. Weight facts and spending; discount flattery and hypotheticals.',
        },
        {
          kind: 'free',
          prompt: 'Report your 3 real interviews. For each, give the single strongest piece of signal you coded (a specific past fact, real spend, or commitment) and separate it from any noise you initially found tempting. Then state the one belief these interviews changed — ideally something you did not want to hear.',
          rubric: 'Strong answer: (1) references THREE real interviews with actual people (not friends/family) and concrete details; (2) cites specific past-behavior or spending signal rather than compliments or hypotheticals, showing they coded transcripts; (3) explicitly distinguishes signal from tempting noise (a "that\'s a great idea" they correctly discounted); (4) names a genuine belief update, bonus for intellectual honesty about disconfirming evidence. Penalize answers that report only positive reactions or clearly used leading questions.',
        },
      ],
      commitSummary: 'the truth from 3 real interviews — coded into signal, not flattery — is captured in "My venture." This is the milestone that separates founders from people with a pitch.',
    },

    // -----------------------------------------------------------------------
    {
      id: '15.4',
      module: 15,
      title: 'Competitive & demand intelligence',
      estMinutes: 18,
      prerequisites: ['15.2', '15.3'],
      artifactSlot: null,
      concept: `Your competitors and their unhappy customers have already run experiments you can read for free. Competitive and demand intelligence is the discipline of reverse-engineering those experiments instead of rerunning them at your own expense.

**Read the competitors as data, not threats.** A rival's pricing page tells you what the market will bear; its changelog tells you what it's betting on; its job listings tell you where it's investing. Most valuable of all, its **reviews** — on G2, Capterra, app stores — are a public, dated log of exactly where it fails its customers. The one-star and three-star reviews are a specification for your wedge, written by the people you want to sell to.

**Read demand directly.** Search interest (Google Trends) shows you whether a problem is rising, seasonal, or fading, and which words real people use for it. Communities — subreddits, forums, Discords — are running complaint logs where the same pain surfaces again and again in the customers' own language. Traffic and technology tools (SimilarWeb, BuiltWith) reveal how big rivals actually are and what they're built on.

The traps are two, and opposite. First, **cargo-culting**: copying a competitor's feature list assumes they validated it — but they may be failing, and you'd be inheriting their mistakes with confidence. Second, **over-reading one noisy channel**: concluding "no demand" from a single weak ad test, or "huge demand" from one viral thread. The move is triangulation: reverse-engineer several competitors, cross-check search trends against community complaints against real reviews, and look for a pain that shows up independently in multiple places. Convergent evidence from cheap public sources is how you find the gap the incumbents left open.`,
      reframe: {
        analogy: `Reading competitors and their reviews is **reverse-engineering a shipped product.** You don't design a chip in a vacuum; you buy the incumbent, decap it, trace the die, and read exactly which trade-offs they made and where they cut corners. Their product is a frozen record of thousands of decisions and constraints — and their customers' complaints are the failure reports from the field. Competitive intelligence is decapping the market leader: you learn more from where they compromised and who they annoyed than you ever could from a blank sheet, and you spend none of the years they spent learning it.`,
        breaks: `Reverse-engineering silicon assumes the incumbent was *competent and successful* — the die you're tracing actually shipped and worked. A market competitor might be **failing**, so copying their choices inherits their mistakes, not their wisdom (the cargo-cult trap). You have to judge *whether* a competitor validated a decision before you learn from it, a judgment the chip analogy skips. And a decapped chip is a complete, static artifact; market demand signals are **partial and moving** — a search trend is a noisy proxy, a review sample is self-selected toward the angry, one community isn't the market. So triangulate several sources over time rather than trusting any single teardown as ground truth.`,
      },
      workedExample: `**Zoom, built by reading WebEx's unhappy customers.** Before founding Zoom, Eric Yuan was a VP of Engineering at WebEx (acquired by Cisco), where he spent years close to the product and, by his own widely-reported account, close to its customers' frustrations — laggy video, clunky joining, calls that dropped, an experience people tolerated rather than loved. He reportedly noticed he was unhappy every time he talked to customers, because they were unhappy. That steady stream of complaint was a specification.

Yuan didn't out-feature WebEx; he attacked the exact pains its own customers voiced. Zoom's obsessive early focus — a call that just works, one-click join, reliable video even on weak connections — reads like a point-by-point response to the incumbent's worst reviews. The demand was already visible in the market's dissatisfaction; Yuan's insight was to treat that dissatisfaction as the product brief.

The transferable move is not "have worked at your competitor." It's that the intelligence Yuan got from inside is now largely *public*: the one- and three-star reviews on G2 and Capterra, the recurring gripes in user communities, the workarounds people share. You can assemble a version of Yuan's insight in a week by reading where the incumbents fail their own customers — then, exactly like Zoom, build your wedge at the point of maximum, repeated, real complaint. Reverse-engineer the incumbent's failures; don't copy its feature list.`,
      branch: {
        scenario: `A well-funded incumbent dominates the space you're eyeing. You need to decide where to attack. Which approach gives you the best intelligence?`,
        choices: [
          {
            label: 'Copy their feature list as closely as you can — they\'re winning, so they must have validated all of it.',
            correct: false,
            consequence: `**Cargo-culting the incumbent.** Copying assumes every choice they made was validated and correct — but incumbents carry legacy mistakes, bloat, and features nobody uses, and a well-funded company can look like it\'s winning while its customers quietly hate it. Inherit their roadmap and you inherit their compromises with none of their distribution. Read where they FAIL, not what they shipped.`,
          },
          {
            label: 'Reverse-engineer them as data: mine their one- and three-star reviews, cross-check the recurring complaints against search trends and community threads, and build your wedge where multiple sources independently show real, repeated pain.',
            correct: true,
            consequence: `**Correct — triangulated demand intelligence.** The incumbent\'s bad reviews are a public specification of where it fails its own customers; cross-checking that against search interest and community complaints tells you which pain is real, frequent, and unaddressed. Convergent evidence from several cheap public sources is exactly how you find the gap the incumbent left open — the Zoom-reading-WebEx move.`,
          },
          {
            label: 'Run one small ad campaign at your idea; if click-through is low, conclude there\'s no demand and drop it.',
            correct: false,
            consequence: `**Over-reading one noisy channel.** A single weak ad test conflates a dozen things — the copy, the audience, the offer, the channel — so low CTR tells you almost nothing about real demand. Meanwhile the incumbent\'s reviews, search trends, and community complaints are sitting right there as durable, triangulable signal. Don\'t kill an idea on one noisy sample when convergent public evidence is free.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'rank',
          prompt: 'Order a demand-and-competitive intelligence investigation into a sane sequence. Founders love to jump straight to conclusions; put these steps in the order that builds triangulated evidence before you decide anything.',
          items: [
            'List the real competitors and substitutes customers actually use today',
            'Read their one- and three-star reviews to find recurring, specific complaints',
            'Check search trends for the problem\'s direction, seasonality, and the words people use',
            'Scan the communities where customers gather for the same pains in their own language',
            'Triangulate: find the pain that shows up independently across reviews, trends, and communities',
            'Define your wedge at the point of maximum convergent, repeated, real complaint',
          ],
          explain: 'Start by naming who you\'re really competing with (including substitutes), then mine their reviews for where they fail. Cross-check that against search trends and community complaints. Only after a pain shows up independently in multiple sources do you trust it — and that convergent point is where you aim. Jumping to a wedge before triangulating means betting on a single noisy signal.',
        },
        {
          kind: 'platformTask',
          title: 'Reverse-engineer a competitor and read real demand',
          body: 'Pick your strongest real competitor (or the dominant substitute) and mine it as data. Read its reviews for recurring complaints, check search interest for your problem, and scan a community where your customers gather. Your goal: find one pain that shows up INDEPENDENTLY in at least two of these sources — that convergence is your wedge. Record the competitor, the specific recurring complaint (quote it), and the corroborating signal from a second source. Spend 30-45 minutes.',
          links: [
            { label: 'G2 — business software reviews (mine 1- and 3-star)', url: 'https://www.g2.com/' },
            { label: 'Capterra — software reviews and comparisons', url: 'https://www.capterra.com/' },
            { label: 'Google Trends — search interest, direction, and seasonality', url: 'https://trends.google.com/trends/explore' },
            { label: 'SimilarWeb — estimate a competitor\'s real traffic and scale', url: 'https://www.similarweb.com/' },
            { label: 'Reddit — communities where your customers complain in their own words', url: 'https://www.reddit.com/' },
          ],
          steps: [
            'Name your strongest real competitor or substitute — the thing customers use today.',
            'Read its one- and three-star reviews on G2 or Capterra; note the complaint that recurs most, and quote one reviewer verbatim.',
            'Check Google Trends for your problem\'s search terms: rising, flat, or seasonal? Which words do people use?',
            'Scan one community (a relevant subreddit or forum) for the same pain in customers\' own language.',
            'Find one pain that appears independently in at least two sources; record it, the competitor, and the corroborating evidence as your candidate wedge.',
          ],
          taskKey: '15.4#demand',
          proofLabel: 'Your triangulated wedge: the competitor, the recurring complaint (quoted), and the second source that corroborates it',
          proofKind: 'text',
        },
      ],
      tutorHooks: [
        { label: 'Map my competitive landscape', kind: 'ask', question: 'Help me map who I\'m really competing with for my venture — including substitutes and "do nothing" — and tell me exactly which reviews, search terms, and communities to mine for each to find where they fail their customers.' },
        { label: 'Find my wedge from the evidence', kind: 'ask', question: 'Here are the complaints, search trends, and community threads I gathered. Help me triangulate them into the single pain that shows up independently across sources, and turn that into a defensible wedge against the incumbent.' },
        { label: 'A harder competitive-intel case', kind: 'harder', concept: 'reading demand for a problem that is real but quiet — where search volume is low because customers don\'t yet have words for it, so reviews and communities matter more than trends' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What is the single richest source of intelligence about where an incumbent competitor fails its customers?',
          options: [
            'Its marketing homepage and press releases',
            'Its one- and three-star reviews on sites like G2 and Capterra — a public, dated log of specific customer pain',
            'The number of employees it lists on LinkedIn',
            'Its logo and brand design',
          ],
          answer: 1,
          explain: 'Critical reviews are a public specification of where the incumbent fails its own customers, written by the exact people you want to sell to. That is how Eric Yuan\'s inside knowledge of WebEx\'s frustrations is now available to anyone: read the recurring complaints and build your wedge at the point of maximum, repeated, real pain.',
        },
        {
          kind: 'mcq',
          prompt: 'What is the "cargo-cult" trap in competitive intelligence?',
          options: [
            'Reading too many reviews and getting overwhelmed',
            'Copying a competitor\'s feature list on the assumption they validated it, when they may be failing and you\'d inherit their mistakes',
            'Using free tools instead of paid market reports',
            'Talking to customers instead of analysts',
          ],
          answer: 1,
          explain: 'Copying an incumbent\'s choices assumes each was validated and correct — but incumbents carry legacy bloat and unused features, and can look successful while their customers quietly hate the product. Reverse-engineer where they FAIL (their reviews and complaints), don\'t clone what they shipped. And triangulate several sources rather than trusting any single teardown.',
        },
        {
          kind: 'free',
          prompt: 'From your competitive and demand research, present your candidate wedge. Name the real competitor or substitute, quote the most recurring complaint you found in its reviews, and give one independent source (search trends or a community) that corroborates the same pain. Explain why this convergence — not a single signal — makes the wedge credible.',
          rubric: 'Strong answer: (1) names a real, specific competitor or substitute (including "do nothing" if apt); (2) cites a concrete recurring complaint, ideally quoted from actual reviews, rather than a generic weakness; (3) corroborates with at least one INDEPENDENT source (Trends direction, a community thread, a second competitor\'s reviews), demonstrating triangulation; (4) explains why convergent evidence beats a single noisy channel and avoids the cargo-cult trap. Penalize wedges based on one source or on copying the incumbent\'s feature list.',
        },
      ],
      commitSummary: 'your triangulated wedge — where the incumbent fails, corroborated across independent public sources — is captured in "My venture." You\'ve read the market\'s free experiments instead of paying to rerun them.',
    },
  ],
}
