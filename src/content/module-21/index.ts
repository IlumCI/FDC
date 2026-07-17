import type { Module } from '../../lesson/types'

// ===========================================================================
// Module 21 — Managing people · Season 2 ("Building for Real")
//
// The moment a venture works, it stops being a solo engineering problem and
// becomes a people problem. This module teaches the humane, concrete craft of
// leading humans: hire against a written scorecard instead of vibes, run real
// 1:1s and give feedback that respects the person, motivate through autonomy /
// mastery / purpose rather than bribery, and — when it's genuinely time — part
// ways with dignity and within the law. Lesson 21.3 is the explicit sequel to
// Module 20's Dictator's Handbook: the ETHICAL inversion of "pay your coalition"
// — keeping your key people genuinely aligned via fair rewards and real
// ownership, never over-promises or fear. Every lesson is artifactSlot:null;
// the real-world work lands through the interactive blocks (a hiring scorecard,
// a real 1:1, a live retention audit). Nothing here is manipulative: the whole
// posture is that people are not components, and a company is only as durable
// as the trust of the people who could leave it.
// ===========================================================================

export const module21: Module = {
  id: 21,
  season: 2,
  title: 'Managing people',
  goal: 'Lead humans well: hire with a scorecard, run real 1:1s and feedback, motivate without bribery, and part ways with dignity — keeping your team (your "coalition") genuinely aligned.',
  lessons: [
    // -----------------------------------------------------------------------
    {
      id: '21.1',
      module: 21,
      title: 'Hiring: scorecards over vibes',
      estMinutes: 18,
      prerequisites: [],
      artifactSlot: null,
      concept: `The single most expensive decision a small team makes is who to let in. A wrong hire on a five-person team is not a 20% mistake — it consumes management attention, warps the culture, and often takes a quarter to unwind. Yet most first-time founders hire the way they'd never ship code: on a gut feeling after a nice conversation. "I liked them. They seemed sharp." That is a **vibe**, and vibes are where bias hides.

The discipline is to **define the job before you evaluate anyone for it.** Write a *scorecard* first: the role's **mission** (one sentence — why this seat exists), its **outcomes** (three to five measurable things this person must deliver in the first year), and the **competencies** (the how — the specific skills and behaviors the outcomes require). You commit to this standard *before* a single candidate walks in, so you are measuring people against the job, not against each other's charisma.

Then make the interview **structured**: the same job-relevant questions for every candidate, scored independently against a rubric, evidence written down before anyone compares notes. Structure is not bureaucracy — it is what stops the loudest voice, the shared alma mater, or the easy rapport from quietly deciding for you. Decades of research and Google's own re:Work program found unstructured "let's just chat" interviews barely predict performance, while structured ones do — and, notably, candidates experience them as *fairer*.

Hiring for a scorecard is humane, not cold. It gives every candidate the same honest test, and it protects the person you eventually hire from being set up to fail against expectations no one ever wrote down.`,
      reframe: {
        analogy: `Hiring on vibes is accepting a component into your system because the demo looked slick — no datasheet, no spec, no acceptance test. You'd never solder an unknown part into a board you care about on the strength of a good sales pitch. A **scorecard is the datasheet plus the acceptance test**: you write down the operating conditions the part must satisfy (the outcomes), the characteristics that matter (the competencies), and the pass/fail bench (the rubric) *before* you evaluate anything. A structured interview is running every candidate through the *same* test rig, so the measurement means something.`,
        breaks: `A component's behavior is fixed and fully specified; **a person is not a part.** A scorecard measures a snapshot, but people learn, grow, and perform differently under different managers and teams — so past evidence predicts, it doesn't determine. Worse, an *over-rigid* rubric can screen out exactly the non-traditional, high-slope people who'd have been your best hires, and a scorecard written with biased assumptions just launders that bias behind a spreadsheet. The datasheet reduces error; it does not turn a human being into a deterministic part, and treating it as if it does is its own failure mode.`,
      },
      workedExample: `**Google's re:Work and the "Who" scorecard method (real, cited).** Early Google was famous for hard brainteasers and free-form interviews — and when it later studied its own data, it found those practices had essentially *no* correlation with on-the-job performance. Google rebuilt hiring around **structured interviewing**: a defined set of job-relevant questions, standardized rubrics, independent scoring, and interviewer calibration. Its published re:Work guide reports that structured interviews are markedly more predictive of performance *and* that rejected candidates rated the experience about 35% more favorably — fairer, not just more accurate.

The complementary discipline comes from Geoff Smart and Randy Street's *Who: The A Method for Hiring*, which popularized the **scorecard**: a role blueprint of **mission** (why the seat exists), **outcomes** (the measurable results the person must deliver), and **competencies** (how the work must be done). The move that makes both work is the same: you decide what "great in this role" means *before* you meet anyone, then gather evidence against that fixed standard instead of drifting toward whoever you personally clicked with. The transferable lesson for your five-person team is not to copy Google's scale — it's that a one-page scorecard plus the same questions for everyone is the cheapest bias-reduction and mis-hire insurance you will ever buy. (See re:Work's structured-interviewing guide and ghSMART's summary of *Who*, both cited in the resources.)`,
      branch: {
        scenario: `A candidate for your first senior engineer role gave a warm, funny interview — the whole team "loved" them and wants an offer out today. But on the core technical outcome you wrote into the scorecard (can independently own and ship the payments service), the evidence was thin: they talked well but couldn't walk through a system they'd actually built end-to-end. What's the disciplined move?`,
        choices: [
          {
            label: 'Extend the offer now — culture fit is rare and skills can be taught; don\'t overthink it.',
            correct: false,
            consequence: `**The halo-effect miss.** "We clicked" is exactly the vibe your scorecard exists to check. You pre-committed that the reason this seat exists is to independently own a hard technical outcome, and the evidence for that outcome is weak. Likeability is real, but letting it override the one competency the role was defined around is hiring against your own standard — and it sets the person up to fail publicly at the thing you never verified they could do.`,
          },
          {
            label: 'Go back to the scorecard: the core outcome is why this seat exists and the evidence is weak — so it\'s a no (or you honestly redefine the role), not an offer driven by rapport.',
            correct: true,
            consequence: `**Correct.** The scorecard is the pre-committed standard; when charisma and evidence disagree, you trust the evidence about the outcome you defined. Either gather one more concrete work-sample to resolve the doubt, or decline — kindly and specifically. If you find the team actually needs a warm generalist more than a payments owner, that's a signal to *rewrite the role honestly*, not to quietly lower the bar because you enjoyed the conversation.`,
          },
          {
            label: 'Reject immediately — a charming candidate is a red flag for a salesperson, not an engineer.',
            correct: false,
            consequence: `**Over-correcting into a new bias.** Likeability is not disqualifying; the point was never "charisma is bad," it's "measure against the defined outcome, not against vibes in *either* direction." Rejecting a warm candidate *because* they're warm is the same error as hiring them because they're warm — you're letting an irrelevant trait decide. Resolve the actual open question: is the core technical outcome evidenced or not?`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'document',
          title: 'Write the scorecard before you interview anyone',
          body: 'Pick a role you actually need to fill (or your very next hire) and fill in the scorecard: the one-sentence mission, three to five measurable first-year outcomes, and the competencies those outcomes require. This is the standard you will score every candidate against — written down before rapport can bias you. Note: this template is educational, not legal or HR advice; follow your local employment law when you hire.',
          templateHref: '/templates/hiring-scorecard.md',
          docKey: '21.1#scorecard',
          docLabel: 'My hiring scorecard',
        },
        {
          kind: 'scenario',
          title: 'Run a real hiring debrief',
          intro: 'Four people interviewed the same candidate for your senior engineer role and walked out of the room with clashing gut reactions. How you run the debrief determines whether the decision reflects the evidence or just the loudest, most senior person in the room. Run it well.',
          decisions: [
            {
              situation: 'You gather the panel. How do you open the debrief?',
              options: [
                {
                  label: 'Have each interviewer submit their written score and specific evidence against the scorecard BEFORE any discussion, then compare.',
                  correct: true,
                  outcome: 'Right. Independent, written-first scoring stops anchoring and groupthink — nobody\'s vote is quietly bent toward whoever speaks first or ranks highest. You then discuss the *disagreements* where evidence conflicts, which is where the real signal is.',
                },
                {
                  label: 'Go around the room starting with the most senior engineer asking "so, what did everyone think?"',
                  correct: false,
                  outcome: 'This anchors the whole panel to the first (and most senior) opinion. Junior interviewers soften or flip their read to match, and you lose the independent evidence that makes a panel worth having. Order and status now decide the hire, not the candidate.',
                },
                {
                  label: 'Skip the debrief — as hiring manager you sat in on everything, so just make the call yourself.',
                  correct: false,
                  outcome: 'You threw away four independent data points and reintroduced single-person bias. The panel exists precisely so no one person\'s blind spot decides; collecting and reconciling their written evidence is the entire point.',
                },
              ],
            },
            {
              situation: 'One interviewer has a strong negative "gut feeling" but can\'t point to anything specific. What do you do with it?',
              options: [
                {
                  label: 'Ask them to tie it to a specific scorecard competency with a concrete example; if they genuinely can\'t, weight it low and gently check whether it\'s bias.',
                  correct: true,
                  outcome: 'Right. A gut feeling is a hypothesis, not a verdict. Sometimes it surfaces a real, hard-to-name signal — so you probe for the evidence. But an unexaminable "just didn\'t like them" is exactly how bias against people who look or sound different sneaks in, so it can\'t be allowed to silently veto.',
                },
                {
                  label: 'Treat the gut feeling as a veto — experienced people "just know."',
                  correct: false,
                  outcome: 'An unaccountable veto based on an unnamed feeling is how homogeneity and bias reproduce themselves. If the concern is real, it can be tied to a competency and an example; if it can\'t, it shouldn\'t override documented evidence.',
                },
                {
                  label: 'Dismiss it entirely and tell them only scored rubrics count.',
                  correct: false,
                  outcome: 'Too far the other way. Structure serves judgment, it doesn\'t replace it — a seasoned interviewer\'s unease can point at something the rubric missed. The move is to *investigate* it into concrete evidence, not to ignore a possibly-real signal.',
                },
              ],
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Draft a scorecard for my next role', kind: 'ask', question: 'Help me write a hiring scorecard for a role I need to fill: the one-sentence mission, 3-5 measurable first-year outcomes, and the competencies those outcomes require — and suggest 2-3 structured, job-relevant interview questions with what a strong vs weak answer looks like.' },
        { label: 'Where is bias hiding in my process?', kind: 'critique' },
        { label: 'Harder: a work-sample for a fuzzy role', kind: 'harder', concept: 'designing a fair, structured work-sample or take-home that evidences a hard-to-measure competency without unpaid over-work' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'Why write the scorecard (mission, outcomes, competencies) BEFORE you interview anyone?',
          options: [
            'Because HR requires a job description on file',
            'So you evaluate every candidate against a pre-committed, job-relevant standard instead of drifting toward whoever you personally clicked with',
            'To make the interview longer and more rigorous-looking',
            'Because a scorecard guarantees the hire will succeed',
          ],
          answer: 1,
          explain: 'Committing to the mission, outcomes, and competencies before meeting candidates fixes the standard so rapport, halo, and shared-background bias can\'t quietly redefine "great" mid-process. It doesn\'t guarantee success — people grow and change — but it turns hiring from a vibe into a measurement against the actual job.',
        },
        {
          kind: 'mcq',
          prompt: 'What specifically makes a structured interview reduce bias and predict performance better than an unstructured "let\'s just chat"?',
          options: [
            'It uses harder brainteasers to find the smartest people',
            'The same job-relevant questions for every candidate, scored independently against a rubric with written evidence',
            'It relies on the most senior interviewer\'s instinct',
            'It is longer, so interviewers gather more impressions',
          ],
          answer: 1,
          explain: 'Structure = uniform, job-relevant questions + a standardized rubric + independent, written-first scoring. That uniformity is what lets you actually compare candidates and stops anchoring and rapport from deciding. Google\'s re:Work found brainteasers and free-form chats barely predicted performance, while structured interviews did — and felt fairer to candidates.',
        },
        {
          kind: 'free',
          prompt: 'For a role you would realistically hire next, write the one-sentence mission and three measurable first-year outcomes. Then name one competency those outcomes require and one structured question you\'d ask every candidate to evidence it.',
          rubric: 'Strong answer: (1) states a crisp one-sentence mission (why the seat exists); (2) gives three OUTCOMES that are measurable/observable, not vague traits ("ship and own the billing service to <0.1% error" not "be a good engineer"); (3) names a competency the outcomes genuinely require; (4) proposes a job-relevant, behavioral/work-sample question asked of everyone, showing they grasp structure over vibes. Penalize personality-only criteria, "culture fit" with no evidence, or a question that invites halo/rapport.',
        },
      ],
      commitSummary: 'your first hiring scorecard is saved to "My venture" — a written, pre-committed standard so your next hire is a measurement against the job, not a vibe.',
    },

    // -----------------------------------------------------------------------
    {
      id: '21.2',
      module: 21,
      title: '1:1s, feedback & motivation',
      estMinutes: 20,
      prerequisites: ['21.1'],
      artifactSlot: null,
      concept: `Once people are on the team, most of your leverage is spent in three humble, recurring acts: the **1:1**, the **feedback**, and the daily work of **motivation**. Get these right and you rarely need heroics; get them wrong and no perk saves you.

**The 1:1 is your report's meeting, not yours.** Its job is two things at once: *support* (help them grow, clear their blockers, hear what's really going on) and lightweight *monitoring* (catch small problems while they're still small). The classic failure is turning it into a status update — you can get status from a doc. A good 1:1 is where the unsaid gets said: "what's harder than it should be?", "where's your head at?" Aim to listen far more than you talk.

**Feedback should be radically candid.** Kim Scott's framework names the two dials: **care personally** and **challenge directly**. Do both and it's *radical candor*. Care but never challenge and you get *ruinous empathy* — the warm silence that lets someone fail. Challenge without caring and you get *obnoxious aggression*. Most kind engineers err toward ruinous empathy, withholding the hard truth that would actually help.

**Motivation is mostly intrinsic.** Daniel Pink's synthesis of the research: for interesting work, the durable drivers are **autonomy** (control over how you work), **mastery** (getting visibly better at something that matters), and **purpose** (the work means something). Money matters — but mainly as a *floor*. Pay people fairly and the resentment goes away; it does not, by itself, make them care. Reaching for a bonus to fix a motivation problem often treats a symptom while the real cause — boredom, no ownership, no growth — goes unaddressed.`,
      reframe: {
        analogy: `1:1s are your **observability layer**. You don't SSH into production only when it's already on fire — you watch dashboards and traces continuously so you catch drift while it's cheap to fix. A weekly 1:1 is the low-latency channel that surfaces a small frustration, a brewing conflict, or a quiet disengagement *before* it pages you at 3am as a resignation. Skipping 1:1s "because things seem fine" is running blind and hoping the first alert you get isn't an outage.`,
        breaks: `People are not a service you *monitor*, and importing surveillance language is corrosive. A dashboard has no feelings about being watched; a person does — the fastest way to ruin a 1:1 is to make it feel like a status scrape or a check-up on their productivity. The meeting only works if it's genuinely *theirs*: a safe space where the most important things are often the ones they'd never put in a metric. And unlike a system, what you most need to know is usually unspoken and requires trust to surface — trust an observability stack never has to earn.`,
      },
      workedExample: `**Kim Scott, Sheryl Sandberg, and the birth of "radical candor" (real, cited).** Early in her career at Google, Kim Scott gave a presentation that went well — leadership was impressed. Afterward her boss, Sheryl Sandberg, walked her out and, instead of only praising her, said plainly that Scott had said "um" constantly, that it made her sound less intelligent than she was, and offered to get her a speaking coach. It stung — but *everyone else* had let it slide with vague praise (ruinous empathy), and only the direct, caring version actually helped Scott fix it. That combination — **caring personally while challenging directly** — became the core of her book *Radical Candor* (cited in the platform task).

Contrast the motivation side with Daniel Pink's *Drive*: reviewing decades of behavioral research, Pink argues that for non-routine, interesting work, dangling bigger "if-then" cash rewards often *doesn't* improve performance and can even crowd out the intrinsic drive that was already there. The durable levers are autonomy, mastery, and purpose — the reason engineers pour weekends into open-source projects that pay nothing. The practical, humane synthesis: run frequent 1:1s so you *notice* when someone's drive is fading, give feedback that is both kind and honest enough to matter, and fix motivation by restoring ownership, growth, and meaning — not by reaching first for the checkbook. (Both books are linked in the resources.)`,
      branch: {
        scenario: `Your strongest engineer has quietly checked out — shipping less, camera off, disengaged in 1:1s. An advisor shrugs: "She's your best. Just throw a $10,000 spot bonus at her and she'll snap out of it." Her pay is already fair and at market. What do you do?`,
        choices: [
          {
            label: 'Give the $10,000 bonus — money is the universal motivator, and she\'s worth it.',
            correct: false,
            consequence: `**Treating a symptom, and possibly making it worse.** Her pay is already fair, so cash isn't the missing variable — and reaching for an "if-then" bonus to fix disengagement can even crowd out whatever intrinsic drive remains, while teaching her that checking out is what gets rewarded. You still don't know *why* she's disengaged, which is the only thing that can actually fix it.`,
          },
          {
            label: 'Find the real cause in a 1:1 — is it autonomy, mastery, or purpose that\'s missing? — and address that: give her a meaty problem to own, a growth path, or a clearer line to why the work matters.',
            correct: true,
            consequence: `**Correct.** Disengagement in an already fairly-paid star is almost always an intrinsic-motivation problem: she's bored, boxed in, or has lost sight of the point. The 1:1 is where you diagnose which. The fix is usually ownership of something hard, a real chance to grow, or reconnecting her work to the mission — not a bribe that leaves the underlying cause untouched.`,
          },
          {
            label: 'Give it time — stars go through phases, she\'ll pull herself out of it.',
            correct: false,
            consequence: `**Silent neglect.** "She'll get over it" is how you find out she's disengaged the day she resigns — with an offer already signed. Your best people have the most options, so quiet disengagement is the highest-urgency signal you get. It obliges a caring, direct conversation now, not passive hope.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'categorize',
          prompt: 'Sort each lever into whether it draws on INTRINSIC motivation (autonomy / mastery / purpose — the work itself) or EXTRINSIC motivation (rewards and pressures outside the work). Fair pay is a floor that belongs in neither column as a "motivator" — but a spot bonus, a title, and fear are classic extrinsics.',
          buckets: ['Intrinsic', 'Extrinsic'],
          items: [
            { text: 'Owning a meaningful problem end-to-end, with real decision authority', bucket: 'Intrinsic' },
            { text: 'Getting visibly better at a hard, valued skill (mastery)', bucket: 'Intrinsic' },
            { text: 'Believing the work genuinely matters to users or a mission', bucket: 'Intrinsic' },
            { text: 'The absorbing pull of a genuinely interesting technical problem', bucket: 'Intrinsic' },
            { text: 'A one-time $5,000 cash spot bonus for shipping', bucket: 'Extrinsic' },
            { text: 'Fear of a bad performance review', bucket: 'Extrinsic' },
            { text: 'A more impressive job title', bucket: 'Extrinsic' },
            { text: 'A public leaderboard ranking everyone by tickets closed', bucket: 'Extrinsic' },
          ],
          explain: 'Autonomy, mastery, and purpose live inside the work itself — they\'re what make people pour discretionary energy into something. Bonuses, titles, fear, and leaderboards sit outside it. Extrinsics aren\'t evil (fair pay is essential, and a bonus can say "thank you"), but leaning on them to drive interesting work is fragile and can crowd out intrinsic drive. Note fair pay is a floor: its ABSENCE demotivates, but its presence alone doesn\'t make anyone care.',
        },
        {
          kind: 'scenario',
          title: 'Give a hard piece of feedback, well',
          intro: 'One of your strongest engineers has started leaving harsh, sarcastic code-review comments. Two junior devs are now afraid to open PRs. You need to give feedback — and how you do it decides whether you get a better teammate or a defensive, resentful one.',
          decisions: [
            {
              situation: 'When and where do you deliver it?',
              options: [
                {
                  label: 'Privately and soon — a 1:1 (or a quick dedicated chat) this week, with a specific recent example in hand.',
                  correct: true,
                  outcome: 'Right. Feedback is best private, timely, and specific. Private protects their dignity so they can actually hear it; soon means the example is fresh and real; a concrete instance ("in yesterday\'s PR review, this comment...") makes it about behavior, not character.',
                },
                {
                  label: 'In the next team meeting, so everyone hears the standard and the juniors feel defended.',
                  correct: false,
                  outcome: 'Public criticism is obnoxious aggression — it humiliates, triggers defensiveness, and makes the real message impossible to hear. You can reaffirm team norms publicly in the abstract, but personal feedback about one person\'s behavior is always delivered privately.',
                },
                {
                  label: 'Save it for the annual review so it\'s documented and you avoid an awkward conversation now.',
                  correct: false,
                  outcome: 'Waiting months is ruinous empathy dressed as process. The juniors keep suffering, the behavior calcifies, and "why didn\'t you tell me in March?" is a fair complaint. Timely beats tidy.',
                },
              ],
            },
            {
              situation: 'How do you frame the conversation itself?',
              options: [
                {
                  label: 'Care personally and challenge directly: name the specific behavior and its impact, assume good intent, then genuinely ask for their view and agree a change together.',
                  correct: true,
                  outcome: 'Right — this is radical candor. Specific behavior + concrete impact ("juniors are now afraid to post PRs") + real curiosity about their side keeps it honest without being an attack, and invites them into fixing it rather than defending themselves.',
                },
                {
                  label: 'Soften it into near-nothing: "you\'re doing great, maybe just try to be a bit nicer sometimes?"',
                  correct: false,
                  outcome: 'Ruinous empathy. So vague and cushioned that the message doesn\'t land, nothing changes, and you\'ve spent your courage without helping anyone. Caring means being clear enough that it actually helps.',
                },
                {
                  label: 'Lead with the verdict: "your reviews are toxic and you\'re hurting the team — knock it off."',
                  correct: false,
                  outcome: 'Obnoxious aggression, and a character label ("toxic") rather than a behavior. It puts them instantly on the defensive and models the exact harshness you\'re trying to reduce. Challenge the behavior directly, but do it while showing you\'re on their side.',
                },
              ],
            },
          ],
        },
        {
          kind: 'platformTask',
          title: 'Run a real 1:1 this week (or your best one yet)',
          body: 'Book a 30-minute 1:1 with a teammate, cofounder, contractor, or even a peer, and run it as THEIR meeting. Prepare two or three open questions ("what\'s harder than it should be?", "where\'s your head at?", "what would make next week better?"), then mostly listen — aim to talk far less than they do. Afterward, capture one thing you learned that you would not have known otherwise. If you have no direct reports yet, run it with a collaborator; the muscle is the same.',
          links: [
            { label: 'First Round Review — 6 must-reads for better 1:1s', url: 'https://review.firstround.com/managers-take-your-1-1s-to-the-next-level-with-these-6-must-reads/' },
            { label: 'Radical Candor (Kim Scott) — the book & framework', url: 'https://www.radicalcandor.com/the-book' },
            { label: 'Drive (Daniel Pink) — autonomy, mastery, purpose', url: 'https://www.danpink.com/books/drive/' },
          ],
          steps: [
            'Schedule 30 minutes and make clear it\'s their agenda, not a status update.',
            'Prepare 2-3 open questions and resolve to listen more than you speak.',
            'In the meeting, follow their threads; when in doubt, ask "say more about that."',
            'Close by agreeing one concrete follow-up you own.',
            'Record one thing you learned that you would not have known without the 1:1.',
          ],
          taskKey: '21.2#first-1on1',
          proofLabel: 'One thing you learned in the 1:1 that you wouldn\'t have known otherwise',
          proofKind: 'text',
        },
      ],
      tutorHooks: [
        { label: 'Plan a specific hard-feedback conversation', kind: 'ask', question: 'I need to give someone hard feedback. Help me script it in the radical-candor frame: the specific behavior, its concrete impact, how I open, the question I ask to hear their side, and the change we agree — kind but genuinely direct.' },
        { label: 'Diagnose a demotivated teammate', kind: 'ask', question: 'A teammate seems disengaged. Walk me through diagnosing whether the missing driver is autonomy, mastery, or purpose, and give me concrete, non-monetary moves for each — while checking that their pay is genuinely fair as a floor.' },
        { label: 'Critique my 1:1 style', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What is the primary purpose of a recurring 1:1, and whose meeting is it?',
          options: [
            'It is the manager\'s meeting, to collect status updates efficiently',
            'It is the report\'s meeting — to support their growth and surface issues early, listening more than you talk',
            'It is an optional catch-up to be skipped when things seem fine',
            'It is a performance-review checkpoint held quarterly',
          ],
          answer: 1,
          explain: 'A 1:1 is the report\'s meeting: a space for support (growth, blockers, what\'s really going on) plus lightweight early-warning monitoring. Turning it into a status scrape wastes it — you can get status from a doc. The value is in what gets said that a metric would never show, which is why you listen far more than you talk.',
        },
        {
          kind: 'mcq',
          prompt: 'In Kim Scott\'s framework, "ruinous empathy" is:',
          options: [
            'Challenging someone directly without caring about them personally',
            'Caring about someone personally but failing to challenge them directly — the warm silence that lets them fail',
            'Both caring and challenging at once',
            'Neither caring nor challenging — total disengagement',
          ],
          answer: 1,
          explain: 'Radical candor = care personally AND challenge directly. Ruinous empathy is caring but NOT challenging: the kind, cushioned non-feedback that spares a hard truth and thereby lets someone keep failing. It\'s the most common trap for kind managers — and withholding the honest, helpful thing is not actually kindness.',
        },
        {
          kind: 'free',
          prompt: 'Recall real feedback you once received (or gave) that was either ruinous empathy or obnoxious aggression. Rewrite it as radical candor: the specific behavior, its concrete impact, and how you\'d open the conversation. Separately, name one non-monetary way you could raise a teammate\'s intrinsic motivation via autonomy, mastery, or purpose.',
          rubric: 'Strong answer: (1) correctly classifies the original feedback as ruinous empathy (caring, not challenging) or obnoxious aggression (challenging, not caring); (2) rewrites it with a SPECIFIC behavior and its concrete impact, not a character label, and an opening that shows care; (3) names a concrete non-monetary motivation move tied explicitly to autonomy, mastery, or purpose (e.g., hand over ownership of X, a learning stretch, connect work to a user outcome); (4) shows they understand fair pay as a floor, not the motivator. Penalize vague "be nicer/be honest" with no specifics.',
        },
      ],
      commitSummary: 'you ran a real 1:1 and captured what you learned — the recurring, humane practice (listen, feedback that\'s both kind and direct, motivate intrinsically) that most of good management actually is.',
    },

    // -----------------------------------------------------------------------
    {
      id: '21.3',
      module: 21,
      title: 'Coalition loyalty done right (Dictator\'s Handbook II)',
      estMinutes: 18,
      prerequisites: ['21.2'],
      artifactSlot: null,
      concept: `Module 20 taught the descriptive machine: every organization runs on a **winning coalition** — the key people whose support you genuinely cannot lose — and the cynical Rule 4 was "pay your coalition *just enough* to keep them loyal, no more." This lesson is the **ethical inversion** of that rule. The knobs are the same; you turn them the other way.

The extractive founder squeezes: minimal grants, vague verbal promises, opacity about the money, loyalty enforced by making people feel replaceable. It buys short-term control and breeds long-term rot, because in a talent business your essentials can *walk* — and your best people have the most options.

Coalition loyalty done right rests on three honest moves:

- **Fair rewards, not squeezed ones.** Pay at market (the floor from lesson 21.2) *and* give **real ownership** — meaningful equity with standard vesting — so your key people are genuinely *inside* the coalition. Someone with real skin in the game and a fair deal has no rational reason to defect.
- **Transparency over the "treasure."** Control the money honestly: a clean cap table, a legible comp philosophy, no quiet diversion. GitLab runs an entire *public* compensation handbook; you don't need to broadcast salaries, but the principle — people can see the system is fair — is what earns durable trust.
- **Never over-promise.** A promised 2% that never gets papered is a debt that comes due as resentment. An honest 1% in writing, vesting on a real schedule, beats a fantasy you'll regret. Under-delivering on equity is how founders turn indispensable people into indispensable *and disgruntled* ones — the single worst quadrant to be in.

This is not charity. It is resilience: a coalition aligned by fairness and ownership doesn't quietly rot, and won't quietly oust you.`,
      reframe: {
        analogy: `Real ownership is **incentive alignment in a distributed system**: you design it so that each node optimizing *locally* also advances the *global* optimum, instead of every node hoarding its own cache while the cluster degrades. Equity with vesting is a **maturing bond** — its value accrues over the time horizon you need the person aligned to, so their self-interest and the company's long-term health point the same way. Get the alignment right and you don't have to police loyalty; the incentives do the work.`,
        breaks: `Bonds and schedulers have no feelings; people have **fairness instincts and long memories**. A scheme that is "mathematically optimal" but feels unfair, opaque, or stingy breeds resentment that no equilibrium model predicts — humans will burn value to punish a deal they find unjust. And you cannot actually *price* loyalty: over-financializing every relationship ("what's the minimum grant that retains them?") corrodes the intrinsic goodwill and trust that do the real retaining. The math tells you how to *align* incentives; it is silent on the trust that makes people want to stay when a competitor waves a bigger number.`,
      },
      workedExample: `**The standard vesting deal, and GitLab's transparent treasure (real, cited).** The near-universal Silicon Valley equity package — roughly **four-year vesting with a one-year cliff** — is itself the ethical inversion of Rule 4 made concrete: it gives a key hire *real* ownership (they truly own a growing stake) while aligning them to stay through the horizon that matters, and it protects the company from someone vesting a fortune and leaving in month two. Real reward *and* real alignment, written down, no squeezing and no fantasy.

For the transparency leg, GitLab is the cleanest public example: it operates a **fully public compensation handbook** — its pay philosophy, bands, and formula are on the open internet — which lets a globally distributed team of thousands trust that the "treasure" is allocated by a legible, consistent system rather than by who negotiates hardest or who's in the founder's inner circle (see the resource link).

Now the anti-pattern, equally real and endemic to startups: the **verbal equity promise**. "Don't worry, you're a founding engineer, we'll get you 2% — we'll paper it after the raise." Months pass, it never gets documented, the number quietly shrinks, and a once-loyal early employee becomes bitter and leaves with the roadmap in their head. Same lesson as *Extractive Erin* from Module 20: an essential who is both indispensable and disgruntled is the failure state. The fix is boring and honest — put a fair grant in writing, on a standard schedule, now.`,
      branch: {
        scenario: `Your first engineer — genuinely indispensable, joined for a verbal promise of "about 1.5%" a year ago — asks you to formalize it into a real agreement with vesting. Cash is tight and dilution stings. What do you do?`,
        choices: [
          {
            label: 'Stall: "Let\'s revisit right after the next round" — keep it a friendly verbal understanding for now.',
            correct: false,
            consequence: `**The classic trust-destroyer.** Every month you delay, the promise feels more like a bait-and-switch, and you\'re keeping your single most indispensable person in the worst possible state: essential AND insecure. This is exactly the over-promise-and-under-deliver pathology that turns loyal early employees bitter. "After the round" is how these promises quietly die.`,
          },
          {
            label: 'Paper it now: a fair grant in writing on standard four-year vesting with a one-year cliff, and be transparent about the math.',
            correct: true,
            consequence: `**Correct.** Real, documented ownership moves him firmly *inside* the coalition — aligned by skin in the game, not held by a fading promise. Standard vesting protects the company too (it aligns him to stay), and transparency about the number earns the trust that actually retains people. Honoring the deal you made is both the right thing and the durable thing.`,
          },
          {
            label: 'Offer a chunky one-time cash bonus instead of equity, to avoid dilution.',
            correct: false,
            consequence: `**Wrong instrument, and a quiet renege.** Cash rewards effort now; equity buys the long-term *alignment* that keeps an essential person from defecting over the years that matter — they solve different problems. Swapping equity for cash strips the retention mechanism, and quietly walking back the ownership you promised breaks the exact trust this lesson is about.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'numeric',
          prompt: 'Equity-alignment math. You grant a key engineer 1.2% of the company, which is currently valued at $20,000,000, on standard four-year vesting (48 months) with a one-year cliff. Ignoring future dilution and any change in valuation, what is the dollar value of the equity that has vested the moment she passes her one-year cliff (12 of 48 months)? Compute 0.012 x 20,000,000 x (12 / 48).',
          answer: 60000,
          tolerance: 0,
          unit: '$',
          explain: 'The full grant is 1.2% of $20,000,000 = $240,000. A one-year cliff means nothing vests until month 12, at which point 12/48 = 25% vests at once: 0.25 x $240,000 = $60,000. From then it typically vests monthly. The cliff protects the company from a quick-exit windfall; the four-year schedule aligns her to stay. Real numbers, in writing, beat a vague "about 1.5%" promise every time.',
        },
        {
          kind: 'rank',
          prompt: 'Assume a key person is ALREADY paid fairly and at market (pay is a floor, not a lever above it). Order these levers by their DURABLE power to keep that person genuinely aligned and loyal — strongest first.',
          items: [
            'Purpose — they believe the work genuinely matters',
            'Mastery & growth — expanding scope, real learning, a path that stretches them',
            'Autonomy & real ownership — decision authority plus meaningful, vested equity',
            'A trusted manager and honest 1:1s — feeling genuinely seen and supported',
            'An above-market one-time cash bonus',
            'Perks and swag — snacks, branded hoodies, a nicer chair',
          ],
          explain: 'Above a fair-pay floor, the durable retainers are intrinsic and ownership-based: belief in the work, room to grow and master, real autonomy and a genuine stake, and a manager they trust. Cash bonuses buy a short reprieve (and can crowd out intrinsic drive); perks are the weakest, easily matched by anyone. Note what is NOT on the list: underpaying poisons everything, so fair pay is the precondition — and over-promising future equity is a negative lever that breeds resentment when unmet.',
        },
      ],
      tutorHooks: [
        { label: 'Audit whether my key people are truly "inside"', kind: 'ask', question: 'Help me audit my key people: for each, is their pay fair, is their ownership real and IN WRITING with vesting, and is the treasure transparent to them? Flag anyone held only by a vague promise, and give me one concrete fix per person.' },
        { label: 'Design a fair, honest equity plan', kind: 'ask', question: 'Help me sketch a fair early-employee equity plan: rough grant ranges by role/seniority, standard vesting, and a simple transparent comp philosophy I can actually stand behind — avoiding both under-granting and over-promising.' },
        { label: 'Harder: retention when a competitor outbids you', kind: 'harder', concept: 'keeping a key person genuinely aligned when a competitor offers a materially higher cash package, without starting a bidding war or over-promising equity' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'What is the ethical inversion of the Dictator\'s-Handbook Rule 4, "pay your coalition just enough"?',
          options: [
            'Pay everyone identically regardless of role or contribution',
            'Align your key people fairly — market pay plus real, written ownership and transparency — rather than squeezing them to a minimum or holding them with vague promises',
            'Pay key people as little as legally possible and rely on culture',
            'Replace equity entirely with high salaries',
          ],
          answer: 1,
          explain: 'Same lever, opposite direction: instead of paying the theoretical minimum that prevents defection, you make key people genuinely secure — fair market pay as a floor, real vested ownership so they\'re inside the coalition, and transparency so they trust the system. That\'s loyalty through alignment, not through squeezing or fear.',
        },
        {
          kind: 'mcq',
          prompt: 'Why is an over-promised, undelivered 2% equity stake usually WORSE than an honest 1% grant put in writing?',
          options: [
            'Because 1% is mathematically larger than 2%',
            'Because the broken promise becomes a debt that comes due as resentment, leaving an essential person indispensable AND disgruntled — the worst quadrant',
            'Because verbal promises are always legally binding anyway',
            'Because employees prefer smaller numbers',
          ],
          answer: 1,
          explain: 'An honest, documented grant builds trust and puts the person genuinely inside the coalition. A promise that quietly shrinks or never gets papered corrodes trust and lands you with an indispensable-but-disgruntled key person — exactly the failure state (Extractive Erin) Module 20 warned about. Under-delivering on equity is how founders lose the people they can least afford to lose.',
        },
        {
          kind: 'free',
          prompt: 'For your real or planned venture, list your two or three most essential people (or roles). For each, state honestly: is their pay fair, is their ownership real and in writing with vesting, and is the "treasure" transparent to them? Name one specific person held more by a vague promise than by a real deal — and the concrete fix.',
          rubric: 'Strong answer: (1) identifies a MINIMAL set of genuinely essential people/roles, not everyone; (2) assesses each on the three honest moves — fair pay (floor), real written vested ownership, and transparency — rather than hand-waving "they\'re loyal"; (3) surfaces at least one person held by a promise or opacity rather than a real deal; (4) proposes a concrete, non-manipulative fix (paper the grant, standard vesting, open the comp logic) showing they grasp alignment-not-squeezing. Penalize answers that treat retention as bribery or over-promising.',
        },
      ],
      commitSummary: 'you audited your winning coalition through the ethical lens of Dictator\'s Handbook II — fair rewards, real written ownership, transparent treasure, no over-promises — the durable way to keep key people genuinely aligned.',
    },

    // -----------------------------------------------------------------------
    {
      id: '21.4',
      module: 21,
      title: 'Letting people go with dignity',
      estMinutes: 18,
      prerequisites: ['21.1', '21.2', '21.3'],
      artifactSlot: null,
      concept: `Sometimes, despite your best management, someone has to leave. Doing it *humanely* is the final and most revealing test of whether you actually lead people or merely employ them. This lesson is general guidance, not legal advice: **employment law varies enormously** — at-will versus statutory notice periods, mandatory consultation, protected classes, redundancy rules — so pair everything here with your local law and, where you can, real HR or legal counsel.

First, separate two very different situations. A **performance** exit is about *this person in this role*; a **layoff** is about the *company's economics or a role*, and is not the person's fault. Conflating them — dressing up a layoff as "performance," or firing for performance with no prior warning — is both unkind and often unlawful.

For performance, the humane sequence is: clear expectations up front, honest and timely feedback (lesson 21.2), then, if it's still not working, a **fair, time-boxed improvement plan** with real support and a genuine chance to succeed. If the final conversation is a *surprise*, you have already failed — the feedback should have come long before.

When it is genuinely time, protect two parties at once. Protect **the person**: privacy, a manager who delivers it themselves, preparation, brevity and clarity, severance and references where warranted, and no ambushes. And protect **the team**: as Ben Horowitz puts it, the people who *stay* care deeply about how you treat the people who leave. Do it with cruelty or cowardice and you keep the body but lose the trust of everyone watching. Dignity is not softness; it's how a team survives its hardest days intact.`,
      reframe: {
        analogy: `An ethical exit is a **graceful shutdown**, not a \`kill -9\`. When a service must come out of the cluster, you don't hard-kill it mid-request — you drain its connections, let in-flight work finish, migrate state, and hand off cleanly so the rest of the system stays healthy. Dignity in a departure is the same: notice where possible, a clean handover, honesty about why, and support out the door — so both the person and the team you keep come through stable rather than corrupted.`,
        breaks: `A process feels nothing when you terminate it; **a human being loses income, standing, and a piece of identity**, and grieves. "Graceful" for a person is not merely an orderly teardown — it's empathy, adequate notice, money, and the preservation of their reputation, none of which a \`SIGTERM\` handler models. And the whole systems framing carries a danger: the instant "for the health of the system" becomes a cold excuse to treat people as disposable, you've inverted the lesson. The point of the analogy is the *care* in the shutdown, never the disposability of the thing shut down.`,
      },
      workedExample: `**Airbnb's May 2020 layoff — a widely-cited model of dignity (real, cited).** When COVID collapsed travel and Airbnb's revenue forecast fell to less than half of the prior year, CEO Brian Chesky had to lay off about **1,900 people — roughly 25% of the company**. The *how* is why it's studied. His public letter (linked in the resources) did nearly everything right: he took clear responsibility and explained the honest economic reason (this was a company/role problem, not the people's fault); he gave **generous severance** (14 weeks base plus a week per year of tenure for US staff); he **extended healthcare**; he dropped the standard one-year equity cliff so departing employees **kept their vested equity**; and Airbnb built an **alumni talent directory** to actively help laid-off staff find new jobs. People losing their roles were treated as colleagues, not costs.

Contrast the all-too-common version: a surprise mass email at dawn, badge access cut before the meeting, no severance, managers hiding behind HR. It may be legal in an at-will jurisdiction, but it terrifies and embitters *everyone who remains*. Ben Horowitz's guidance in *The Hard Thing About Hard Things* echoes Airbnb's care with hard operational discipline: once the decision is made, move quickly rather than letting dread fester; **managers must lay off their own people**, not delegate it; and be visible and present afterward, because the survivors are watching to see whether you actually cared. Humane and rigorous are not opposites. (Both sources are in the resources.)`,
      branch: {
        scenario: `An engineer has been underperforming for months. Your records are thin, and honestly you never gave them clear, direct feedback or a real chance to fix it. A frustrated cofounder snaps: "We're at-will — just fire them Friday, no explanation needed, rip the band-aid off." What's the right move?`,
        choices: [
          {
            label: 'Fire them Friday with no feedback history and no process — at-will means you can, so keep it quick and clean.',
            correct: false,
            consequence: `**Unkind, and often unwise even where it's legal.** The person never got clear expectations or a genuine chance, so the final conversation would be a blindside — the sign you already failed as a manager. "At-will" varies by jurisdiction and doesn't erase protected-class and documentation risks, and the team will watch a colleague vanish with no due process and quietly update their own trust in you. Slow down.`,
          },
          {
            label: 'Pause: they were never given clear expectations or honest feedback. Start with a direct conversation and a fair, time-boxed improvement plan with real support — and if it still doesn\'t work, part ways respectfully with notice/severance, checking local law and HR.',
            correct: true,
            consequence: `**Correct — humane and lawful.** People deserve to know they're falling short and get a genuine chance to fix it before their livelihood is taken. A clear, supported, time-boxed plan is fair to them and builds the honest record you'd need anyway. If it fails, you exit them with dignity — privacy, notice, severance and references where warranted — and you verify local employment law rather than trusting a blanket "at-will."`,
          },
          {
            label: 'Quietly freeze them out — strip their projects and let them get the message and resign on their own.',
            correct: false,
            consequence: `**"Quiet firing" — the cowardly and often riskier path.** Engineering someone's misery until they quit is cruel, it denies them honesty and severance, and it corrodes the whole team's trust as they watch it happen. In many jurisdictions it's also *constructive dismissal*, exposing you to more legal risk than a clean, fair process would. If it's genuinely time, do the hard, respectful thing directly.`,
          },
        ],
      },
      artifact: undefined,
      blocks: [
        {
          kind: 'scenario',
          title: 'A termination handled with dignity (and within the law)',
          intro: 'A long-tenured team member has, after clear feedback and a fair, supported improvement plan, still not met the role\'s bar. The decision to part ways is genuinely made. Now the only question is HOW — for the person and for the team. General guidance only; follow your local employment law and involve HR/counsel.',
          decisions: [
            {
              situation: 'How do you deliver the news itself?',
              options: [
                {
                  label: 'A private meeting where you (their manager) deliver it yourself — prepared and brief, clear that the decision is final, with written details, severance and references where warranted, and an HR person present.',
                  correct: true,
                  outcome: 'Right. You deliver it yourself (never outsource it), privately, and prepared — Horowitz notes you script it because they\'ll remember it for years. Brief and clear respects them; the decision is already made, so it\'s not a debate. Written details, severance, references, and a witness make it both humane and clean.',
                },
                {
                  label: 'Send a termination email and have HR handle the conversation while you stay out of it.',
                  correct: false,
                  outcome: 'Hiding behind an email and HR is exactly the cowardice that tells the whole team you\'ll discard them impersonally too. Managers lay off their own people. Delegating the hardest moment forfeits the dignity — and the trust of everyone who remains.',
                },
                {
                  label: 'Open it up as a long discussion, re-litigating every past failure to justify the decision.',
                  correct: false,
                  outcome: 'The decision is made; turning the meeting into a debate or a prosecution is cruel and pointless. Respectful clarity means stating the decision and the support you\'re offering, not forcing them to argue for a job that\'s already gone.',
                },
              ],
            },
            {
              situation: 'Afterward, how do you handle the rest of the team?',
              options: [
                {
                  label: 'Tell the team promptly and honestly but respectfully — preserving the person\'s privacy, acknowledging it\'s hard, and being visibly present and available for their questions.',
                  correct: true,
                  outcome: 'Right. The survivors are watching. Honest-but-respectful communication (without airing private details), acknowledging the human weight of it, and staying present is how you keep the team\'s trust and stability through a hard day. Silence breeds fear and rumor.',
                },
                {
                  label: 'Say nothing and hope people don\'t notice or ask.',
                  correct: false,
                  outcome: 'A colleague vanishing with no word breeds exactly the anxiety and rumor you most need to avoid — everyone quietly wonders if they\'re next. Respectful transparency, not silence, is what steadies a team.',
                },
                {
                  label: 'Explain the decision by detailing the departed person\'s failures, so everyone understands it was justified.',
                  correct: false,
                  outcome: 'Badmouthing the person who left teaches everyone still there exactly how you\'ll talk about them once they\'re gone. Protect the departed person\'s dignity even in their absence; the team learns your character from it.',
                },
              ],
            },
          ],
        },
        {
          kind: 'resource',
          title: 'Managing, feedback, and humane exits — the real canon',
          items: [
            {
              label: 'High Output Management — Andrew Grove (Penguin Random House)',
              url: 'https://www.penguinrandomhouse.com/books/72467/high-output-management-by-andrew-s-grove-former-chairman-and-ceo-of-intel/',
              note: 'The Intel CEO\'s classic on managerial leverage, task-relevant feedback, and treating people\'s output as the manager\'s output.',
            },
            {
              label: 'The Making of a Manager — Julie Zhuo (author\'s book page)',
              url: 'https://www.juliezhuo.com/book/manager.html',
              note: 'A humane, practical field guide for new managers — feedback, hiring, difficult conversations, and building trust.',
            },
            {
              label: 'Airbnb — Brian Chesky\'s 2020 layoff message',
              url: 'https://news.airbnb.com/a-message-from-co-founder-and-ceo-brian-chesky/',
              note: 'The widely-praised model of a humane layoff: honesty, generous severance, kept equity, and active help finding new roles.',
            },
            {
              label: 'SHRM — writing and timing performance improvement plans',
              url: 'https://www.shrm.org/topics-tools/employment-law-compliance/pips-write-implement-time-precisely',
              note: 'Practical guidance on fair, documented PIPs. General guidance only — employment law varies by country and state; follow your local law and consult HR/counsel.',
            },
          ],
        },
      ],
      tutorHooks: [
        { label: 'Draft a humane performance-improvement plan', kind: 'ask', question: 'Help me draft a fair, time-boxed performance improvement plan for a struggling team member: clear expectations, measurable goals, the support I\'ll provide, check-in cadence, and honest stakes — humane and specific. Remind me what to verify against local employment law.' },
        { label: 'Prepare and script a respectful termination', kind: 'ask', question: 'Walk me through preparing a dignified termination conversation: what to say and not say, keeping it brief and final, severance and references, protecting the person\'s privacy, and how I communicate it to the rest of the team afterward.' },
        { label: 'Critique my exit plan for cruelty or cowardice', kind: 'critique' },
      ],
      quiz: [
        {
          kind: 'mcq',
          prompt: 'For a PERFORMANCE-based termination (not a layoff), what should already be true before the final conversation?',
          options: [
            'The company should be legally protected by an at-will clause, so no warning is needed',
            'The person should have had clear expectations, honest and timely feedback, and a fair chance to improve — so the outcome is not a surprise',
            'The decision should be kept secret from them until the last possible moment',
            'A large severance should make prior feedback unnecessary',
          ],
          answer: 1,
          explain: 'A performance exit that blindsides the person means their manager failed to give the feedback and fair chance owed to them earlier. Clear expectations, honest timely feedback (lesson 21.2), and a genuine, supported opportunity to improve should come first — so the final conversation confirms a known reality, not a shock. (And "at-will" varies by jurisdiction; it never replaces basic fairness or local law.)',
        },
        {
          kind: 'mcq',
          prompt: 'Why does treating departing people with dignity matter even when it\'s hard and costly?',
          options: [
            'It doesn\'t — once someone is leaving, how you treat them is irrelevant',
            'Because the people who STAY judge your character by how you treat those who leave; dignity protects the team\'s trust, the culture, your reputation, and reduces legal risk',
            'Only because the law strictly requires generous severance everywhere',
            'Because it guarantees the departing person will speak well of you',
          ],
          answer: 1,
          explain: 'As Horowitz puts it, the survivors care deeply how you treat their departing colleagues — a cruel or cowardly exit keeps the body but forfeits the trust of everyone watching. Dignity (honesty, notice, severance/references where warranted, privacy, presence) protects the team you keep, your culture and reputation, and typically your legal exposure too.',
        },
        {
          kind: 'free',
          prompt: 'Draft the humane, lawful sequence you would follow for a performance-based termination (or, if you prefer, how you\'d run a small layoff). Name at least two steps that protect the PERSON and two that protect the TEAM — and one thing you would check against your local employment law.',
          rubric: 'Strong answer: (1) sequences it correctly — clear expectations and honest feedback FIRST, then a fair time-boxed improvement plan (for performance) or an honest economic rationale (for layoffs), before any final step; (2) names concrete person-protecting steps (privacy, manager delivers it, notice, severance/references, no surprise); (3) names concrete team-protecting steps (honest-but-respectful communication, presence afterward, no badmouthing the departed); (4) identifies a real local-law item to verify (notice periods, consultation/redundancy rules, protected classes, final-pay timing) and treats the guidance as general, not legal advice. Penalize surprise firings, cruelty, or "quiet firing."',
        },
      ],
      commitSummary: 'you built a humane, lawful playbook for parting ways — separating performance from layoffs, protecting both the person and the team, and treating dignity as resilience rather than softness. (General guidance; always follow your local employment law.)',
    },
  ],
}
