import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 27 — Marketing II: brand, content & PR at scale  (SEASON 2)
//
// Season 1 taught the scrappy first channel: one message, one audience, one
// loop. This module is about the marketing ENGINE — the compounding system a
// venture runs once it has real traction. Four assets that accrue value:
// a brand (accumulated trust), a content machine (a compounding library),
// an owned audience (a list/community you control), and earned press plus a
// narrative that survives a crisis. Every lesson is artifactSlot:null; the
// real work is tracked through interactive blocks (a platformTask publishes a
// real piece of content and stands up a distribution channel).
// ===========================================================================

export const module27: Module = {
  id: 27,
  season: 2,
  title: 'Marketing II — brand, content & PR at scale',
  goal: 'Build a marketing engine that compounds: a coherent brand, a content machine, community, and PR — beyond the scrappy first channel.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '27.1',
      module: 27,
      title: 'Brand as accumulated trust (a system, not a logo)',
      estMinutes: 16,
      prerequisites: ['13.4'],
      artifactSlot: null,
      concept: `Engineers hear "brand" and picture a logo, a font, a color. That is the *skin*. The real thing is **accumulated trust**: the sum of every promise you made and kept, remembered by the market so it no longer has to re-evaluate you from scratch. A strong brand is a shortcut that lives in other people's heads — when your name appears, a prediction fires ("this will be good / safe / worth the price") before anyone reads a word. That prediction is an asset you spent years funding.

Two engines drive marketing, and confusing them wastes fortunes:

- **Performance marketing** buys attention you can attribute *today*: an ad click, a signup, a tracked conversion. It is measurable, fast, and rented — the moment you stop paying, it stops.
- **Brand marketing** builds the prediction that makes every future performance dollar cheaper: lower cost to acquire, higher price you can charge, more forgiveness when you slip. It is slow, hard to attribute, and owned.

The trap is that performance is legible and brand is not, so under-confident founders pour everything into the measurable half and starve the compounding half. But brand is what lets you *stop* out-spending competitors on ads. It is built by **consistency over time**: the same promise, kept, expressed the same way, across every touchpoint, for longer than feels reasonable. Consistency is not a design nicety — it is how a scattered set of experiences resolves into a single, trusted prediction.`,
      reframe: {
        analogy: `A brand is a **root certificate in a trust chain**. When your browser meets a site it has never seen, it does not re-derive trust from nothing — it checks whether the certificate chains up to a root it *already* trusts, and if so it skips the interrogation and proceeds. A brand does exactly this for a company: a customer meeting your new product doesn't re-evaluate you from zero, they check whether your name chains up to the trust they already hold, and if it does, the sale, the click, the benefit of the doubt all get faster and cheaper. Consistency is what keeps the chain valid — every kept promise re-signs the certificate; every touchpoint that matches the promise extends the chain of trust to a new surface.`,
        breaks: `A root certificate's trust is **binary, instant, and centrally revocable** — one flag and every browser distrusts you at once. Brand trust is none of those. It is *graded* (people trust you for some things and not others), *slow to build and slow to decay* (a single bad release rarely revokes you the way a compromised CA is revoked — reputation has momentum in both directions), and *distributed* across millions of minds with no central authority to update. So the analogy flatters the speed of collapse: brands usually erode through accumulated small betrayals, not one clean revocation. And unlike a certificate — which is pure verification — a brand also carries *emotion and meaning* a checksum never will. Trust is the load-bearing part; the feeling is the part no PKI models.`,
      },
      workedExample: `**Patagonia's "Don't Buy This Jacket" (Black Friday, 25 November 2011).** Patagonia ran a full-page ad in The New York Times showing one of its own fleeces under the headline "Don't Buy This Jacket," with a breakdown of the water, carbon, and waste the garment cost the planet — an explicit plea to consume less, part of its Common Threads / Worn Wear initiative. A retailer telling customers *not* to buy its product on the biggest shopping day of the year only works if it is true to a promise the brand has kept for decades. Because it was, the ad read as integrity rather than a stunt, and reporting on the campaign notes sales rose in the period that followed (widely cited around 30%; treat the exact figure as illustrative).

The transferable lesson is not "run a clever anti-ad." It is that Patagonia could make a costly, counterintuitive claim and be *believed* only because it had spent years funding the certificate: repairs, environmental activism, durable products, refusing to chase fast fashion. That accumulated trust is what let a single $57,000 ad generate an estimated tens of millions in earned attention — brand converting into performance the way a warm cache converts into speed. A company with the same ad and no trust behind it would have been called hypocritical. Your brand is not what you say in the ad; it is whether the market's stored prediction lets them believe you. (Source: Patagonia Stories, cited below.)`,
      branch: {
        scenario: `You run a bootstrapped B2B SaaS with modest but real traction. Your board pushes for growth, and you have budget for exactly one bet this quarter. Three proposals land on your desk. Which do you back?`,
        choices: [
          {
            label: 'Pour the entire budget into paid ads with tight ROAS tracking — only spend where you can attribute a dollar in to a dollar out.',
            correct: false,
            consequence: `**The legibility trap.** Attribution is seductive because it's measurable, but pure performance spend is *rented* — the day you stop, the traffic stops, and you've built nothing that makes next quarter cheaper. You'll also hit rising costs as you saturate the audience, with no brand to lower them. Performance is necessary, but a plan with *only* the measurable half starves the compounding half and leaves you renting attention forever.`,
          },
          {
            label: 'Fund a consistent brand system — a sharp, repeated promise expressed identically across site, product, docs, and support — while keeping a smaller, disciplined performance budget running.',
            correct: true,
            consequence: `**Correct.** This funds the compounding asset without abandoning the measurable one. A consistent promise, kept and repeated across every touchpoint, is what lowers your future cost to acquire, lifts the price you can charge, and buys forgiveness when you slip. You keep enough performance spend to harvest demand *now*, but you're finally building the trust certificate that makes all of it cheaper later. Brand and performance are complements, not rivals.`,
          },
          {
            label: 'Commission a beautiful new logo and a full visual rebrand — a premium look will signal quality and fix the brand.',
            correct: false,
            consequence: `**Mistaking the skin for the system.** A logo is the *expression* of a brand, not the brand — the trust lives in promises kept over time, not in the typography. A gorgeous rebrand over an inconsistent, unproven experience is a fresh certificate that chains up to nothing. Spend on the consistent promise and the kept experience first; restyle later, once there's real trust for the design to express.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each activity by which engine it primarily belongs to. The point is not that one is good and one is bad — you need both — but that founders systematically underfund the brand column because it is harder to measure.',
          buckets: ['Brand (compounding, owned)', 'Performance (attributable, rented)'],
          items: [
            { text: 'A Google Search ad you pay per click', bucket: 'Performance (attributable, rented)' },
            { text: 'A consistent product voice and promise repeated across site, docs, and support', bucket: 'Brand (compounding, owned)' },
            { text: 'A retargeting campaign optimized to a tracked cost-per-signup', bucket: 'Performance (attributable, rented)' },
            { text: 'A long-running point of view you become known for in your category', bucket: 'Brand (compounding, owned)' },
            { text: 'Keeping every shipped promise so reviews and word-of-mouth stay warm', bucket: 'Brand (compounding, owned)' },
            { text: 'A limited-time discount code driving conversions this week', bucket: 'Performance (attributable, rented)' },
            { text: 'A recognizable, unchanging visual and naming system across every touchpoint', bucket: 'Brand (compounding, owned)' },
            { text: 'An affiliate payout per closed sale', bucket: 'Performance (attributable, rented)' },
          ],
          explain: 'Performance activities buy attribution you can see today and stop the moment you stop paying — they are rented. Brand activities (a consistent promise kept over time, a durable point of view, an unchanging identity) compound and lower the cost of all future performance. The discipline is to fund BOTH, and to resist starving the brand column just because its return is slow and hard to attribute.',
        },
      ],
      tutorHooks: [
        { label: 'State my brand promise in one line', kind: 'ask', question: 'Help me write my brand promise as a single sentence a customer would recognize: what I reliably deliver, to whom, and what makes it credible given what I have actually shipped so far. Then show me three touchpoints where I am currently NOT keeping it consistently.' },
        { label: 'Am I over-indexed on performance?', kind: 'ask', question: 'Given how I currently spend my marketing time and money, help me estimate my split between brand-building (compounding) and performance (rented) work, and whether I am starving the compounding half. Suggest one concrete brand investment I could start this quarter.' },
        { label: 'Critique my brand-vs-logo thinking', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Which statement best captures the difference between brand and performance marketing?',
          options: [
            'Brand marketing is for big companies; performance marketing is for startups',
            'Performance buys attributable attention that stops when you stop paying; brand builds compounding trust that makes future performance cheaper but is slow and hard to attribute',
            'Brand marketing means the logo and colors; performance marketing means the ads',
            'They are the same thing measured on different time scales',
          ],
          answer: 1,
          explain: 'Performance is measurable, fast, and rented — the traffic ends when the spend ends. Brand is the accumulated, owned trust that lowers your future cost to acquire, raises the price you can charge, and buys forgiveness. Both are needed; the common error is starving the slow, compounding brand half because only the performance half is easy to attribute.',
        },
        {
          kind: 'mcq',
          prompt: 'In the "root certificate" analogy, what does CONSISTENCY over time correspond to, and where does the analogy break?',
          options: [
            'Consistency is the logo; the analogy breaks because certificates have no logo',
            'Consistency is what keeps the trust chain valid by re-signing the certificate with each kept promise; the analogy breaks because brand trust is graded, slow to decay, and emotional, not binary and instantly revocable',
            'Consistency is the ad budget; the analogy breaks because certificates are free',
            'Consistency is the number of customers; the analogy breaks because certificates have no users',
          ],
          answer: 1,
          explain: 'Each kept promise re-signs the certificate and extends the trust chain to new touchpoints. But a real root cert is binary, instant, and centrally revocable, whereas brand trust is graded (trusted for some things), slow to build and slow to decay (reputation has momentum), distributed with no central authority, and carries emotion a checksum never will.',
        },
        {
          kind: 'free',
          prompt: 'For your venture, write your brand promise in one sentence, then name (1) one specific way you keep it consistently today, (2) one touchpoint where you are inconsistent and it costs you trust, and (3) one brand investment you would make this quarter INSTEAD of more performance spend — and why it compounds.',
          rubric: 'Strong answer: (1) states a concrete, recognizable brand promise (what is reliably delivered, to whom) rather than a slogan; (2) gives a real, specific consistency the venture already maintains; (3) names an honest inconsistency and explains the trust cost; (4) proposes a brand investment that plausibly COMPOUNDS (a durable point of view, a consistent voice/identity, keeping a shipped promise) and articulates why it lowers future performance cost. Penalize answers that equate brand with the logo, or that cannot distinguish compounding brand work from rented performance work.',
        },
      ],
      commitSummary: 'no slot written — you now hold brand as accumulated trust (a system of promises kept), and can tell the compounding brand engine apart from the rented performance one.',
    },

    // -----------------------------------------------------------------------
    {
      id: '27.2',
      module: 27,
      title: 'The content machine',
      estMinutes: 20,
      prerequisites: ['27.1'],
      artifactSlot: null,
      concept: `A single good post is a spark. A **content machine** is a fire that feeds itself. The difference is not talent — it is treating content as a **compounding asset** produced by a **repeatable pipeline**, rather than heroic one-off bursts that stop the week you get busy.

**Content compounds like few marketing assets do.** A performance ad is consumed the instant it runs; a well-made article, video, or tool keeps working for years, and the best pieces earn *more* traffic over time as they accumulate links and search authority. HubSpot's own analysis found that a small fraction of "compounding" posts generate an outsized share of blog traffic — one such post can, over time, deliver as much as several ordinary posts combined. That is the whole game: build a library of assets whose marginal cost of serving is near zero and whose value climbs.

**The machine is a pipeline, not inspiration.** A durable content operation has stages that run every cycle regardless of mood: (1) **research** demand and keywords — write to questions people already ask; (2) **produce** the piece; (3) **optimize** it for search and clarity; (4) **publish**; (5) **distribute** it across the channels where your audience already is; (6) **repurpose** one asset into many formats; and (7) **measure and historically re-optimize** — updating old winners is often higher-ROI than writing new ones.

**Distribution is half the job.** "Publish and pray" wastes the produce step. Every piece needs a *default* distribution path — a newsletter, a community, a social channel, a syndication — so the asset reaches humans on day one and then earns search traffic for years after. Production without distribution is a machine with no drive shaft.`,
      reframe: {
        analogy: `A content machine is a **build system with a persistent cache**. Each published asset is a compiled artifact that gets cached and served to every future visitor at near-zero marginal cost — write once, serve millions of times, exactly like a memoized function that pays the compute cost on the first call and returns instantly forever after. Performance advertising is the opposite: an *uncached* call that recomputes from scratch and bills you every single time. SEO is the build system's indexer slowly discovering and ranking your artifacts so the right query returns the right cached result. Distribution is warming the cache on publish so it isn't cold on day one.`,
        breaks: `A real build cache is **deterministic and permanent** — the artifact stays valid until an input changes, and lookups are exact. Content is neither. Assets **decay**: facts go stale, links rot, and the "index" (the search algorithm and the audience's taste) *changes underneath you*, silently invalidating cache entries you never touched. That is why "historical re-optimization" exists — you must re-compile old artifacts to keep them valid, work a hermetic build never demands. And matching is *fuzzy and competitive*, not an exact key lookup: a hundred other people cached an answer to the same query, and ranking is a contest, not a hash hit. So treat content as a cache that **rots and must be tended**, not one you fill and forget.`,
      },
      workedExample: `**HubSpot's compounding blog posts.** HubSpot analyzed its own blog and found that roughly 10% of posts were "compounding" — pieces whose organic traffic *grows* month over month long after publication — and that this small minority generated on the order of 38% of the blog's total traffic, so that one compounding post produced about as much traffic as several ordinary posts combined (see the HubSpot analysis cited below). Crucially, HubSpot didn't just keep writing new posts; it ran "historical optimization," systematically updating and re-publishing old winners, and reported large organic-traffic gains from that maintenance alone.

Read this as a machine, not a lucky streak. HubSpot's advantage was never a single viral article; it was an *industrialized pipeline* — research demand, produce to it, optimize, publish, distribute, and then measure and re-optimize the assets that compound. The counterintuitive punchline for a technical founder is that the highest-leverage content work is often *not writing more* — it is identifying the handful of assets already compounding and re-compiling them so they keep ranking, plus building distribution so each new asset warms its cache on day one. The transferable move: pick a narrow set of questions your buyers actually search, produce genuinely useful answers, and commit to a boring, repeatable cadence with distribution built in — the compounding does the rest.`,
      branch: {
        scenario: `You're a solo technical founder. You wrote one deep tutorial that unexpectedly brought in signups for months. Energized, you're deciding how to run content from here. Which approach builds a machine rather than a lottery?`,
        choices: [
          {
            label: 'Chase virality: brainstorm big swing-for-the-fences ideas and publish only when you have something you think could blow up.',
            correct: false,
            consequence: `**Betting on lightning.** Virality is unrepeatable and unschedulable — a strategy that only works when you feel inspired is not a machine, it's a lottery ticket. Worse, swing-for-the-fences pieces rarely match real search demand, so even the hits don't compound in the index. The one tutorial that worked probably answered a question people already ask; that is a *repeatable* pattern, not a viral fluke.`,
          },
          {
            label: 'Stand up a boring, repeatable pipeline: mine the questions your buyers actually search, produce a useful answer on a fixed cadence, always distribute it, and periodically re-optimize the winners.',
            correct: true,
            consequence: `**Correct.** This is the build-system-with-a-cache in action: write to real demand so the index eventually serves your artifacts, ship on a cadence you can sustain when busy, warm the cache with distribution on day one, and re-compile old winners so they don't rot. A modest, consistent pipeline compounds into a library; heroic bursts do not. Boring and repeatable beats brilliant and sporadic.`,
          },
          {
            label: 'Outsource ten cheap SEO articles a week stuffed with keywords to flood the index as fast as possible.',
            correct: false,
            consequence: `**Filling the cache with garbage.** Thin, keyword-stuffed content increasingly gets devalued (and can drag down the whole domain), and it keeps no promise to the reader — it's brand damage disguised as volume. The machine compounds on *genuinely useful* assets that earn links and repeat visits, not on quantity. Ten worthless posts age into ten liabilities you must later prune.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'rank',
          prompt: 'Order the stages of a single pass through the content machine, from what must happen first to what closes the loop. Founders love to jump straight to "produce"; put the pipeline in the order that makes each asset compound.',
          items: [
            'Research demand: find the specific questions and keywords your buyers already search for',
            'Produce the piece that genuinely answers that demand',
            'Optimize it for search and clarity before it ships',
            'Publish it to a home you own',
            'Distribute it on day one to the channels where your audience already is',
            'Repurpose the one asset into several formats and surfaces',
            'Measure results and historically re-optimize the winners so they keep ranking',
          ],
          explain: 'Demand research comes first — writing to questions people already ask is what lets the search index eventually serve your work. Then produce, optimize, and publish to a property you own. Distribution warms the cache on day one; repurposing multiplies one unit of work; and measuring plus re-optimizing the winners is often the highest-ROI stage of all, because compounding assets rot and must be re-compiled.',
        },
        {
          kind: 'platformTask',
          title: 'Publish one real piece and stand up a distribution channel',
          body: 'This is the milestone: move from theory to a machine with one real cycle. Produce ONE genuinely useful piece of content that answers a specific question your buyers search for, publish it to a home you own, and set up at least one standing distribution channel (a newsletter, a community post, or a social account) so the piece reaches humans on day one and future pieces have a default path out. Use the tools below to find real demand and to publish. Then paste the public URL of what you shipped.',
          links: [
            { label: 'Google Trends — validate that people search for your topic', url: 'https://trends.google.com/trends/' },
            { label: 'Ahrefs — free Beginner\'s Guide to SEO (7 chapters)', url: 'https://ahrefs.com/seo' },
            { label: 'beehiiv — stand up a newsletter as your distribution channel', url: 'https://www.beehiiv.com/' },
          ],
          steps: [
            'Pick ONE specific question your buyers actually type into a search box; confirm real interest on Google Trends.',
            'Write a genuinely useful answer — the piece you wish existed when you had the problem.',
            'Publish it to a property you own (your site, blog, or a platform you control).',
            'Stand up one distribution channel (newsletter, community, or social) and share the piece there on day one.',
            'Paste the public URL of the published piece as your proof.',
          ],
          taskKey: '27.2#publish',
          proofLabel: 'Public URL of the piece you published',
          proofKind: 'url',
          milestone: true,
        },
        {
          kind: 'resource',
          title: 'Content & SEO — real, canonical tools',
          items: [
            { label: 'HubSpot — Compounding posts generate 38% of blog traffic', url: 'https://blog.hubspot.com/marketing/hubspot-blog-compounding-posts', note: 'The source study for compounding content and historical optimization.' },
            { label: 'Ahrefs — SEO: The Complete Guide for Beginners', url: 'https://ahrefs.com/seo', note: 'Free, rigorous grounding in keyword research, on-page SEO, and links.' },
            { label: 'Google Trends', url: 'https://trends.google.com/trends/', note: 'Free demand validation — is interest in your topic rising, flat, or seasonal?' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Design my content pipeline', kind: 'ask', question: 'Help me design a repeatable content pipeline I can actually sustain solo: a realistic cadence, the specific buyer questions to write to first, one default distribution channel, and a simple rule for when to write new pieces vs re-optimize old ones.' },
        { label: 'Find my compounding topics', kind: 'ask', question: 'Given my product and buyer, list 10 specific, low-competition questions people already search that I could answer as compounding content, and how I would validate demand for each cheaply.' },
        { label: 'A harder distribution case', kind: 'harder', concept: 'building a content distribution flywheel when your audience is fragmented across several small niche channels and no single one is large' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why is content described as a COMPOUNDING asset, unlike a performance ad?',
          options: [
            'Because content is always cheaper to make than ads',
            'Because a good asset keeps working for years at near-zero marginal cost and the best pieces earn MORE traffic over time, while an ad is consumed the instant it runs and must be re-paid every time',
            'Because content never needs to be updated once published',
            'Because search engines pay you for publishing',
          ],
          answer: 1,
          explain: 'A well-made piece is like a cached, memoized artifact: pay the cost once, serve it to future visitors at near-zero marginal cost, and watch the best pieces accrue links and authority so they grow. A performance ad is an uncached call — recomputed and re-billed on every impression. That asymmetry is why a content library compounds and an ad spend does not.',
        },
        {
          kind: 'mcq',
          prompt: 'The build-system-with-a-cache analogy breaks in one important way. Which is it?',
          options: [
            'Content is deterministic and permanent, so it never needs re-optimizing',
            'Content assets decay and the ranking index changes underneath you, so cached entries silently invalidate and must be re-compiled (historical re-optimization) — unlike a hermetic build cache',
            'Content lookups are exact-match, so there is never competition for a query',
            'Distribution is unnecessary because the cache is always warm',
          ],
          answer: 1,
          explain: 'A real build cache is deterministic and permanent; content is not. Facts go stale, links rot, and the search algorithm and audience taste shift, invalidating entries you never touched — which is why re-optimizing old winners is core work. And matching is fuzzy and competitive (many people answer the same query), not an exact hash hit.',
        },
        {
          kind: 'free',
          prompt: 'Describe the content machine you will actually run. Name (1) the specific buyer question your first compounding piece answers and how you know there is demand, (2) your realistic production cadence, (3) your default distribution channel, and (4) your rule for when you will re-optimize old pieces instead of writing new ones.',
          rubric: 'Strong answer: (1) names a SPECIFIC searched question (not a vague topic) with a real demand signal (Trends, existing search volume, community threads); (2) states a cadence the founder can sustain when busy; (3) names one concrete standing distribution channel so pieces are not published-and-prayed; (4) articulates a re-optimization trigger, showing they understand content decays and that maintaining winners is often higher-ROI than new production. Penalize "go viral" strategies, publish-and-pray with no distribution, or treating content as one-off bursts rather than a pipeline.',
        },
      ],
      commitSummary: 'your first real content asset and a standing distribution channel are live in "My venture" — the first cycle of a pipeline that compounds, not a one-off burst.',
    },

    // -----------------------------------------------------------------------
    {
      id: '27.3',
      module: 27,
      title: 'Community & owned audience',
      estMinutes: 18,
      prerequisites: ['27.2'],
      artifactSlot: null,
      concept: `There are two kinds of audience, and the distinction decides how much of your future you control.

**Rented audience** lives on someone else's platform: your followers on a social network, your ranking in a search engine, your reach inside an algorithm. It can be large and free to start, but you do not own the connection — the platform sits between you and your people and can change the terms, throttle your reach, or vanish overnight. Founders who built entire businesses on a single algorithm have watched a ranking change erase them in a day. Rented reach is real, but it is *revocable*.

**Owned audience** is a direct line you control: an email list, a phone/SMS list, a community you host, a membership. No intermediary can throttle it or take it away. It is slower and harder to grow — nobody's algorithm is handing you free reach — but every subscriber is an asset that stays yours across platform shifts, algorithm changes, and even a pivot. The strategic move of this lesson is to *use* rented reach to *convert* strangers into owned audience: turn a viral moment into email subscribers, turn a community member into a direct relationship.

**The 1,000 True Fans idea (Kevin Kelly).** You do not need to be famous to make a living; you need roughly a thousand "true fans" — people who will buy essentially anything you produce — where each contributes enough per year that a thousand of them clears your income target. It reframes the goal from *maximize reach* to *deepen a modest, owned audience*. A thousand people who trust you and hear from you directly is worth more than a million rented, throttleable followers. The whole point of community and an owned list is to build, keep, and serve exactly those true fans.`,
      reframe: {
        analogy: `A rented audience is **building on a third-party API you don't control**; an owned audience is **your own database and servers**. When your reach lives inside a social platform's feed, you are calling an API whose rate limits, pricing, and terms of service the vendor can change without warning — and they *will*, the moment their incentives diverge from yours (pay-to-reach, deprecated endpoints, a ranking change that quietly zeroes your traffic). An email list is a table in a database *you* own: you can query it any time, it doesn't get rate-limited by a vendor's mood, and it survives you migrating everything else. Using rented reach to grow an owned list is the classic move of caching a volatile upstream into storage you control before the upstream cuts you off.`,
        breaks: `"Owned" oversells your sovereignty. Your email list still depends on **deliverability infrastructure you don't own** — Gmail, Outlook, and Apple decide whether your message lands in the inbox or the spam folder, which is its own rate limit imposed by an intermediary. So it's less "your own servers" and more "your own database behind someone else's firewall." And a row in a table is not the same as *attention*: 10,000 dead addresses that never open are a database with no live connections. Owning the list is necessary but not sufficient — you still have to earn the open, the read, and the trust every single send, which no amount of ownership guarantees.`,
      },
      workedExample: `**Kevin Kelly's "1,000 True Fans" (2008).** Kelly, founding executive editor of Wired, argued that a creator does not need mass fame to sustain a living — they need on the order of a thousand *true* fans, defined as people who will buy anything you produce and travel to see you. His arithmetic is deliberately simple: if you can cultivate roughly 1,000 true fans who each spend about $100 per year with you, that is roughly $100,000 a year — a living — from an audience small enough to know by name. The essay became one of the most influential pieces of the creator economy and is worth reading in full (cited below).

The load-bearing insight for a founder is the *direction of the strategy*. The mass-market instinct is to maximize reach and hope a tiny percentage converts; Kelly inverts it — build a *direct, owned* relationship with a modest number of people who genuinely value what you do, and serve them so well they buy repeatedly. That is precisely why an email list or a community beats a big rented following: you can actually reach your true fans (no algorithm in the way), you can serve them directly, and each one is worth far more than a throttleable follower. The transferable move: stop optimizing for vanity reach and start converting your rented audience into an owned one, then deepen it — a thousand people who trust you and hear from you directly can carry a business.`,
      branch: {
        scenario: `One of your posts unexpectedly goes big on a social platform — tens of thousands of views in a day, and your follower count is spiking. You have a few hours before the wave passes. What's the highest-leverage move?`,
        choices: [
          {
            label: 'Ride it for reach: post more of the same all day to maximize followers while the algorithm is favoring you.',
            correct: false,
            consequence: `**Renting harder.** More followers on a platform you don't control is more *rented* audience — reach the vendor can throttle or reprice tomorrow. You're pouring a rare burst of attention into a container with a hole in the bottom. Followers feel like ownership but aren't; when the algorithm shifts, that spike evaporates and leaves you nothing durable.`,
          },
          {
            label: 'Convert the wave into owned audience: add a clear, low-friction call to join your email list or community, so a slice of the strangers become a direct relationship you keep.',
            correct: true,
            consequence: `**Correct.** A viral moment is rented reach at its peak — the single best time to convert it into something you own. Point the wave at an email list or community so even a few percent become subscribers you can reach directly forever, regardless of what the algorithm does next. You've cached a volatile upstream into storage you control before it cuts you off. That's how a spike becomes an asset instead of a memory.`,
          },
          {
            label: 'Do nothing special — enjoy the numbers; a big following IS the audience you need.',
            correct: false,
            consequence: `**Confusing reach with ownership.** A large following is revocable reach, not an owned audience — it sits behind an algorithm that can throttle it at will, and it says nothing about who actually values what you do. The 1,000 True Fans idea is the opposite bet: a modest, owned, direct relationship beats a big rented one. Letting the wave pass unconverted wastes the rarest resource you'll get all quarter.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'The 1,000 True Fans arithmetic, applied to you. Suppose you want to clear $75,000 a year from your true fans, and a realistic true fan spends a net $100 with you per year. How many true fans do you need? Compute 75,000 / 100.',
          answer: 750,
          tolerance: 0,
          unit: 'true fans',
          explain: 'Fans needed = 75,000 / 100 = 750. The striking part is the scale: a living does not require a mass audience — 750 people who genuinely value you and hear from you DIRECTLY can carry it. That is why an owned, direct relationship with a modest audience beats a large, throttleable following. Raise the per-fan value (higher-priced or repeat purchases) and the required audience shrinks further.',
        },
        {
          kind: 'resource',
          title: 'Owned audience — real newsletter & community tools',
          items: [
            { label: 'Kevin Kelly — 1,000 True Fans (full essay)', url: 'https://kk.org/thetechnium/1000-true-fans/', note: 'The canonical argument for a modest, owned, direct audience over mass reach.' },
            { label: 'beehiiv', url: 'https://www.beehiiv.com/', note: 'Newsletter platform built for growth, referrals, and analytics — an owned email audience.' },
            { label: 'Substack', url: 'https://substack.com/', note: 'Writer-first newsletter platform with built-in discovery and comments.' },
            { label: 'Kit (formerly ConvertKit)', url: 'https://kit.com/', note: 'Email + automation + landing pages when your list becomes a business hub.' },
            { label: 'Circle', url: 'https://circle.so/', note: 'Host an owned community (spaces, events, membership) instead of renting a platform\'s group.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Design my owned-audience funnel', kind: 'ask', question: 'Help me design a concrete path that converts my rented reach (where my audience currently is) into an owned email list or community: the offer/lead magnet, the call to action, and the first few things I would send so subscribers stay engaged rather than dead.' },
        { label: 'What would my true fans pay for?', kind: 'ask', question: 'Given what my venture does, help me define who my "true fans" actually are, estimate a realistic net annual value per fan, and back out how many I need for my income target — then suggest what higher-value offer would shrink that number.' },
        { label: 'Critique my rented-vs-owned mix', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What most fundamentally distinguishes an OWNED audience from a RENTED one?',
          options: [
            'An owned audience is always larger than a rented one',
            'An owned audience is a direct connection you control (an email list, a community) that survives platform and algorithm changes, whereas rented reach sits behind an intermediary that can throttle, reprice, or remove it',
            'A rented audience costs money and an owned audience is free',
            'An owned audience is measured in followers and a rented one in subscribers',
          ],
          answer: 1,
          explain: 'Ownership is about control of the connection, not size. An email list or hosted community is a direct line no intermediary can throttle — it persists across algorithm changes and even a pivot. A social following is rented reach: real but revocable, sitting behind a platform whose terms can change overnight. The strategy is to use rented reach to grow owned audience.',
        },
        {
          kind: 'mcq',
          prompt: 'The "your own database vs a third-party API" analogy for owned vs rented audience breaks in what way?',
          options: [
            'Databases are actually slower than APIs, so owned audiences are worse',
            'Your email list still depends on deliverability infrastructure (Gmail, Outlook, Apple) you do not own, and a row in the table is not the same as attention — you still must earn the open every send',
            'APIs never change their terms, so rented audiences are perfectly safe',
            'You cannot query an email list the way you query a database',
          ],
          answer: 1,
          explain: 'Owning the list oversells your sovereignty in two ways: deliverability is still gated by inbox providers you do not control (a rate limit by another name), and an address that never opens is a dead connection. Ownership is necessary but not sufficient — you must still earn the open, the read, and the trust on every send.',
        },
        {
          kind: 'free',
          prompt: 'Apply the 1,000 True Fans lens to your venture. Define who your true fans are, estimate a realistic net annual value per fan and how many you would need to hit an income target, then describe the specific mechanism you will use to convert your current rented reach into an owned audience.',
          rubric: 'Strong answer: (1) defines "true fans" concretely for this venture (who they are and why they buy repeatedly), not just "customers"; (2) gives a realistic per-fan annual value and does the arithmetic to a target audience size; (3) specifies a concrete conversion mechanism (a lead magnet + email list, a hosted community, an SMS list) that moves people from rented reach to owned; (4) shows awareness that an owned list still requires earning engagement (deliverability, live attention), not just collecting addresses. Penalize "maximize followers" thinking or conflating a big rented following with an owned audience.',
        },
      ],
      commitSummary: 'no slot written — you now hold the rented-vs-owned distinction and the 1,000 True Fans math, and have a mechanism to convert reach into an audience you actually control.',
    },

    // -----------------------------------------------------------------------
    {
      id: '27.4',
      module: 27,
      title: 'PR & positioning at scale',
      estMinutes: 18,
      prerequisites: ['27.3'],
      artifactSlot: null,
      concept: `Advertising is what you say about yourself; **PR is what others say about you** — and third-party credibility carries a weight self-promotion never can. But earned press is not a favor you request; it is a *trade*. Journalists need stories their readers care about, and you get coverage only when your news genuinely serves *their* audience, not yours. The most common founder failure is pitching what's exciting to *you* (we shipped a feature, we raised a round) instead of what's interesting to *their readers* (a surprising data point, a trend, a genuinely novel angle). Original data you create — a survey, an analysis, a benchmark — is one of the most reliable ways to earn coverage, because it hands reporters a story they can't get elsewhere.

**Positioning is the frame the story lives in.** Positioning is the context you choose for your product — the category, the alternative you're compared against, the "instead of what?" A product with no chosen frame gets framed *for* it by customers and competitors, usually badly. Deliberate positioning is what makes your narrative legible: it tells the market what you are, who you're for, and why you're different, so both your press and your customers "get it" in one sentence.

**A narrative is the through-line** that connects your positioning, your press, and your brand into one coherent story you repeat everywhere. At scale, PR is running that narrative consistently across many surfaces.

**Then there is crisis.** Sooner or later something breaks — an outage, a breach, a bad actor, a mistake. A crisis is a trust event, and the reflex to minimize, deny, or go silent is almost always wrong. The durable pattern is speed, candor, ownership, and visible corrective action: get ahead of it, tell the truth, take responsibility even when it's costly, and show what you're changing. Trust lost slowly can be lost *all at once* in a crisis — or, handled with integrity, a crisis can *deepen* it.`,
      reframe: {
        analogy: `Handling a crisis is running **incident response with a public, blameless postmortem**. The engineering discipline is already exactly right: when production breaks, you don't hide it — you page the right people fast, post a status update while you still lack full information, communicate transparently as you learn, own the failure without blaming users, ship the fix, and publish a postmortem describing the root cause and what you're changing so it can't recur. A reputation crisis wants the identical protocol: acknowledge fast, tell the truth early even when incomplete, take ownership, act visibly to fix it, and close with the concrete changes that prevent a repeat. Silence and spin in a crisis are the equivalent of a company that hides an outage and edits the logs — the cover-up destroys more trust than the incident.`,
        breaks: `A production incident has a **discoverable root cause and a deterministic fix** — patch the bug and the system is objectively healthy again. Trust has neither. There is often no single root cause, no patch that provably restores the prior state, and the "system" is millions of human perceptions that update slowly, unevenly, and emotionally — some people never fully re-trust you no matter how clean the postmortem. Worse, the audience isn't neutral like a monitoring dashboard: media incentives, competitors, and outrage dynamics can *amplify* a small incident far beyond its technical severity. So keep the incident-response *protocol*, but drop the engineer's assumption that a correct fix mechanically restores the metric. Rebuilding trust is slow, non-deterministic, and part emotional labor — nothing a rollback covers.`,
      },
      workedExample: `**Johnson & Johnson and the Tylenol crisis (1982).** After cyanide-laced Extra-Strength Tylenol capsules killed seven people in the Chicago area, J&J faced a catastrophe it had not caused. Tylenol was about a third of the company's profit growth and outsold the next four painkillers combined. Against the advice of some business advisors and even the FBI — who noted the tampering appeared local — J&J recalled roughly 31 million bottles nationwide at a cost estimated over $100 million, reasoning that no level of consumer risk was acceptable. It went fully transparent: national warnings, a consumer hotline, a media line, and CEO James Burke personally briefing network news. Within weeks it relaunched in triple-sealed, tamper-evident packaging, an industry first, and reporting notes it recovered the bulk of its market share within roughly a year (see the case study cited below).

The reason this is the canonical crisis case is that J&J ran the incident-response protocol perfectly on a *trust* incident: it moved fast, told the truth while facts were still emerging, took ownership of consumer safety even though it was the victim, acted visibly (recall + hotline + new packaging), and closed with a durable structural fix. The counterfactual — deny, delay, quietly recall only Chicago to protect the quarter — would have treated a trust event as a PR expense and likely destroyed the brand. The transferable move for you is not "spend $100 million." It is the protocol: when a trust event hits, get ahead of it, be candid, own it beyond the strict minimum, and show the concrete change — because in a crisis, trust that took years to accumulate can be lost in days, or, handled with integrity, be deepened.`,
      branch: {
        scenario: `It's 9 p.m. A security researcher emails that a bug in your product exposed some customer data. You don't yet know the full scope. Support is quiet — no customer has noticed. Your instinct is to fix it silently overnight and never mention it. What do you do?`,
        choices: [
          {
            label: 'Patch it quietly overnight and say nothing — no customer noticed, so there\'s no reason to alarm anyone or invite bad press.',
            correct: false,
            consequence: `**The cover-up that becomes the story.** Silence on a data-exposure event is the incident-response anti-pattern: hide the outage, edit the logs. If it surfaces later — and breaches usually do, via the researcher, a regulator, or a leak — the concealment becomes a far bigger trust violation than the bug, and in many jurisdictions non-disclosure is also illegal. You'd be trading a manageable incident for a reputational and legal catastrophe.`,
          },
          {
            label: 'Run the incident-response protocol: contain and assess scope, then promptly and honestly notify affected customers with what you know, what you\'re doing, and the concrete fix — even while some facts are still emerging.',
            correct: true,
            consequence: `**Correct.** This is the blameless-postmortem protocol applied to a trust event: acknowledge fast, tell the truth even before you have every detail, own it, act visibly, and close with the structural fix. Proactive, candid disclosure is what preserves (and can even deepen) trust — and it's typically what breach-notification law requires. Getting ahead of it on your terms beats being exposed on someone else's.`,
          },
          {
            label: 'Wait until you have a complete forensic report — weeks from now — then decide whether it\'s serious enough to disclose.',
            correct: false,
            consequence: `**Right instinct to investigate, fatal delay.** Full forensics matter, but sitting silent for weeks on a known data exposure repeats the cover-up failure and usually blows legal notification deadlines. The protocol is to communicate *while* facts emerge — an honest "here's what we know now, more to follow" — not to withhold everything until certainty. Speed and candor first; completeness follows in updates.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'scenario',
          title: 'Two PR decisions: earning press, then surviving a crisis',
          intro: 'PR at scale is two disciplines: manufacturing stories worth covering, and protecting trust when something breaks. Make the call in each.',
          decisions: [
            {
              situation: 'You want press for your small analytics startup, but "we exist and shipped a feature" isn\'t a story any reporter will run. What earns coverage?',
              options: [
                { label: 'Email TechCrunch repeatedly asking them to cover your feature launch.', correct: false, outcome: 'Pitching your feature is pitching what excites YOU, not what serves the reporter\'s readers — and repeated cold asks get you ignored or blocked. Press is a trade: you must hand them a story their audience cares about, which a routine feature is not.' },
                { label: 'Run an original survey or analysis of your anonymized data that reveals a surprising, newsworthy trend in your industry, and offer reporters the exclusive.', correct: true, outcome: 'Original data is one of the most reliable ways to earn coverage: it gives reporters a story they can\'t get anywhere else and serves their readers directly. You\'re trading genuine news for coverage instead of begging for a favor — and the data asset earns links for years.' },
                { label: 'Buy a sponsored-content placement and call it press.', correct: false, outcome: 'Paid placement is advertising, not earned media — it carries none of the third-party credibility that makes PR valuable, and readers discount it. It can have a role, but it is not the earned coverage that others-say-it trust is built on.' },
              ],
            },
            {
              situation: 'Coverage worked — but now a real outage takes your service down for hours during a customer\'s peak. Angry posts are spreading. What\'s the response?',
              options: [
                { label: 'Stay quiet until it\'s fully resolved so you don\'t draw more attention to the problem.', correct: false, outcome: 'Silence during a visible outage reads as either incompetence or concealment, and it cedes the narrative to the angriest voices. The incident-response protocol is to acknowledge fast and communicate while you work, not to go dark and hope it blows over.' },
                { label: 'Post a prompt, honest status update owning the problem, communicate updates as you learn, and follow with a public postmortem and the concrete fix.', correct: true, outcome: 'This is blameless incident response applied to trust: acknowledge fast, be candid while facts emerge, own it, and close with a structural fix. Handled this way, a crisis can actually deepen trust — customers see exactly how you behave when things go wrong.' },
                { label: 'Blame the cloud provider publicly and downplay the impact to customers.', correct: false, outcome: 'Deflecting blame and minimizing the impact is the spin anti-pattern — customers experienced the downtime regardless of whose infrastructure failed, and shifting blame reads as evasion. Ownership, not scapegoating, is what preserves trust; you can explain the cause without disowning responsibility.' },
              ],
            },
          ],
        },
        {
          kind: 'resource',
          title: 'PR, positioning & brand — real resources (verify before you rely)',
          items: [
            { label: 'First Round Review — How new startups can win at PR', url: 'https://review.firstround.com/how-new-startups-can-win-at-pr-advice-from-a-20-year-comms-career/', note: 'Practical, founder-level PR strategy from a 20-year comms career.' },
            { label: 'HARO / Featured — Help a Reporter Out', url: 'https://www.helpareporter.com/', note: 'Free service connecting expert sources to journalists\' queries — a real path to earned coverage.' },
            { label: 'April Dunford — Obviously Awesome (positioning)', url: 'https://www.aprildunford.com/books', note: 'The standard playbook for B2B product positioning — choosing the frame your story lives in.' },
            { label: 'Patagonia Stories — "Don\'t Buy This Jacket"', url: 'https://www.patagonia.com/stories/planet/activism/dont-buy-this-jacket-black-friday-and-the-new-york-times/story-18615.html', note: 'A brand promise kept over decades made a costly, counterintuitive claim believable.' },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Find my newsworthy angle', kind: 'ask', question: 'Help me turn my venture into a story a reporter would actually run: brainstorm angles that serve THEIR readers (original data I could publish, a surprising trend, a contrarian take), not my feature list, and draft a one-paragraph pitch for the strongest one.' },
        { label: 'Sharpen my positioning', kind: 'ask', question: 'Help me sharpen my positioning using the "instead of what?" frame: my category, the alternative customers compare me to, my key differentiator, and the one-sentence narrative that makes both press and customers instantly get what I am and who I am for.' },
        { label: 'Pressure-test my crisis plan', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why does earned press carry weight that advertising does not, and what most reliably earns it?',
          options: [
            'Press is cheaper than advertising, so it must be better',
            'Press is third-party credibility (others vouching for you), and it is earned by offering reporters a story that serves THEIR readers — such as original data — not by pitching what excites you',
            'Press guarantees more traffic than any ad',
            'Press is earned mainly by emailing large outlets often enough',
          ],
          answer: 1,
          explain: 'Advertising is what you say about yourself; press is what others say about you, and that third-party credibility is the source of its weight. It is a trade, not a favor: you earn it by handing journalists a story their audience genuinely cares about — original data, a surprising trend, a novel angle — rather than pitching your feature launch or cold-emailing outlets repeatedly.',
        },
        {
          kind: 'mcq',
          prompt: 'The "incident response with a blameless postmortem" analogy for crisis handling breaks in which key way?',
          options: [
            'A crisis has no fix at all, so the protocol is useless',
            'Trust has no single discoverable root cause and no deterministic fix that provably restores the prior state; perceptions update slowly and emotionally, and hostile amplification can exceed the technical severity — unlike a production bug you can patch',
            'You should never communicate during a crisis, unlike an outage',
            'Postmortems are only for engineers and never apply to companies',
          ],
          answer: 1,
          explain: 'The protocol transfers — acknowledge fast, be candid, own it, act visibly, publish the fix. What breaks is the engineer\'s assumption that a correct fix mechanically restores the metric: trust has no single root cause, no patch that provably reverts perceptions, and an audience that is emotional and can be amplified by media and competitors far beyond the incident\'s technical severity. Rebuilding it is slow, non-deterministic, and part emotional labor.',
        },
        {
          kind: 'free',
          prompt: 'Two parts. (1) Write the one-sentence positioning + newsworthy angle you would pitch for your venture: your frame ("instead of what?") and the story that would serve a reporter\'s readers. (2) Sketch your crisis protocol for a plausible trust event in your business — the first three things you would do and the structural fix you would commit to.',
          rubric: 'Strong answer: (1) states clear positioning (category + alternative + differentiator) AND a genuinely newsworthy angle that serves a reporter\'s audience (original data, trend, contrarian take) rather than a feature announcement; (2) names a realistic trust event and applies the incident-response protocol — acknowledge fast, tell the truth while facts emerge, own it, act visibly, close with a structural fix — showing they understand trust recovery is slow and non-deterministic, not a mechanical patch. Penalize self-centered pitches ("cover my launch"), silence/spin instincts, or crisis plans that minimize or deflect blame.',
        },
      ],
      commitSummary: 'no slot written — you can now earn press as a trade (a story that serves their readers), choose the positioning frame your narrative lives in, and run a crisis like a blameless incident response.',
    },
  ],
}
