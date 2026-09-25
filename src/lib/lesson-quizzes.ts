export type QuizOption = {
  id: string;
  label: string;
};

export type LessonQuiz = {
  lessonHeading: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  successMessage: string;
  nextLessonHref: string;
  nextLessonLabel: string;
  readAgainHref: string;
  readAgainHint: string;
};

export const LESSON_QUIZZES: Record<string, LessonQuiz> = {
  "product/how-pm-begins": {
    lessonHeading: "Lesson 1 · How product management begins?",
    question: "What is the job of a product manager?",
    options: [
      {
        id: "job",
        label: "Doing whatever it takes to make a product successful",
      },
      {
        id: "prd",
        label: "Writing PRDs and grooming the backlog",
      },
      {
        id: "features",
        label: "Shipping the most features each sprint",
      },
      {
        id: "standups",
        label: "Running standups and sprint ceremonies",
      },
    ],
    correctOptionId: "job",
    successMessage: "Great — you are ready for Lesson 2.",
    nextLessonHref: "/learn/product/business-objective",
    nextLessonLabel: "Lesson 2 · The business objective",
    readAgainHref: "/learn/product/how-pm-begins#lesson-top",
    readAgainHint:
      "Re-read the opening of this lesson — the job is named in the first paragraphs, before “How PM work starts.”",
  },
  "product/business-objective": {
    lessonHeading: "Lesson 2 · The business objective",
    question:
      "What belongs in a one-page business case before you invent a feature list?",
    options: [
      {
        id: "case",
        label:
          "Diagnosis, beachhead, job, bet, metric, guardrails, and what you will learn in ~90 days",
      },
      {
        id: "stack",
        label: "The stack, login plan, and price — those unlock the objective",
      },
      {
        id: "roadmap",
        label: "A twelve-quarter roadmap of features",
      },
      {
        id: "okr-only",
        label: "OKRs alone, with no diagnosis or beachhead",
      },
    ],
    correctOptionId: "case",
    successMessage: "Great — you are ready for Lesson 3.",
    nextLessonHref: "/learn/product/product-strategy",
    nextLessonLabel: "Lesson 3 · Product strategy",
    readAgainHref: "/learn/product/business-objective#lesson-top",
    readAgainHint:
      "Re-read the one-page case shape — objective links diagnosis to beachhead and a metric.",
  },
  "product/product-strategy": {
    lessonHeading: "Lesson 3 · Product strategy",
    question: "What makes a product strategy real?",
    options: [
      {
        id: "refuse",
        label:
          "Clear choices of where to play, how to win, and what you will refuse for now",
      },
      {
        id: "vision",
        label: "A vision poster with no refusals",
      },
      {
        id: "features",
        label: "A prioritized feature backlog called strategy",
      },
      {
        id: "compete",
        label: "Matching every competitor feature",
      },
    ],
    correctOptionId: "refuse",
    successMessage: "Great — you are ready for Lesson 4.",
    nextLessonHref: "/learn/product/experiments",
    nextLessonLabel: "Lesson 4 · Experiments",
    readAgainHref: "/learn/product/product-strategy#lesson-top",
    readAgainHint:
      "Re-read play / win / refuse — strategy is the no list doing work.",
  },
  "product/experiments": {
    lessonHeading: "Lesson 4 · Experiments",
    question: "What must an experiment card include before you spend eng time?",
    options: [
      {
        id: "card",
        label:
          "A falsifiable belief, an eligible sample and denominator, baseline and guardrail thresholds, and the cheapest test that can kill it",
      },
      {
        id: "build",
        label: "A full build plan so the experiment feels real",
      },
      {
        id: "ab",
        label: "An A/B test even when traffic is too thin to read",
      },
      {
        id: "hope",
        label: "Optimism and a launch date",
      },
    ],
    correctOptionId: "card",
    successMessage: "Great — you are ready for Lesson 5.",
    nextLessonHref: "/learn/product/mvp-weekly-scope",
    nextLessonLabel: "Lesson 5 · From MVP to weekly scope",
    readAgainHref: "/learn/product/experiments#lesson-top",
    readAgainHint:
      "Re-read “Write the counting rule.” Define who is eligible, what counts, the denominator, baseline, threshold, and guardrail.",
  },
  "product/mvp-weekly-scope": {
    lessonHeading: "Lesson 5 · From MVP to weekly scope",
    question: "What belongs in Now after a hypothesis passes?",
    options: [
      {
        id: "slice",
        label:
          "A thin vertical slice that can move the scoreboard this week — not the whole dream roadmap",
      },
      {
        id: "v1",
        label: "Everything on the wish list, labeled MVP",
      },
      {
        id: "later",
        label: "Login, Stripe, and certificates before demand clears them",
      },
      {
        id: "tickets",
        label: "A ticket dump with no outcome or done rule",
      },
    ],
    correctOptionId: "slice",
    successMessage: "Great — you are ready for Lesson 6.",
    nextLessonHref: "/learn/product/product-leadership",
    nextLessonLabel: "Lesson 6 · Product leadership",
    readAgainHref: "/learn/product/mvp-weekly-scope#lesson-top",
    readAgainHint:
      "Re-read Now / Next / Later and the one-page slice — MVP is learning scope, not crappy v1.",
  },
  "product/product-leadership": {
    lessonHeading: "Lesson 6 · Product leadership and stakeholders",
    question: "What does an empowered product team need from its leader?",
    options: [
      {
        id: "intent",
        label:
          "Clear intent: outcome, constraints, appetite, and scoreboard — then trust on the how",
      },
      {
        id: "tickets",
        label: "A prioritized ticket list and daily direction on every solution",
      },
      {
        id: "freedom",
        label: "Full freedom with no vision, beachhead, or refusals",
      },
      {
        id: "meetings",
        label: "More status meetings so everyone stays aligned",
      },
    ],
    correctOptionId: "intent",
    successMessage: "Great — you are ready for Lesson 7.",
    nextLessonHref: "/learn/product/product-led-growth",
    nextLessonLabel: "Lesson 7 · Product-led growth",
    readAgainHref: "/learn/product/product-leadership#lesson-top",
    readAgainHint:
      "Re-read “Empowered team: turn the ship” — clarity and competence before control; leader-leader, not a ticket bottleneck.",
  },
  "product/product-led-growth": {
    lessonHeading: "Lesson 7 · Product-led growth vs sales-led",
    question: "What should you measure first in a product-led motion?",
    options: [
      {
        id: "activation",
        label:
          "Activation: the beachhead reaches the promised value in the product",
      },
      {
        id: "signups",
        label: "Signup count and homepage traffic",
      },
      {
        id: "pipeline",
        label: "SDR pipeline and win rate",
      },
      {
        id: "paywall",
        label: "How fast you can put a paywall in front of free users",
      },
    ],
    correctOptionId: "activation",
    successMessage: "Great — you are ready for Lesson 8.",
    nextLessonHref: "/learn/product/product-analytics-gtm",
    nextLessonLabel: "Lesson 8 · Product analytics and GTM",
    readAgainHref: "/learn/product/product-led-growth#lesson-top",
    readAgainHint:
      "Re-read “Activation is the first metric” — signup is not success; define the first value behavior.",
  },
  "product/product-analytics-gtm": {
    lessonHeading: "Lesson 8 · Product analytics and go-to-market",
    question:
      "A new onboarding flow launches in February. How should you check whether four-week retention improved?",
    options: [
      {
        id: "cohort",
        label:
          "Compare January and February activation cohorts after each group has had the same four weeks to return",
      },
      {
        id: "blended",
        label:
          "Average every old and new customer together so the sample is as large as possible",
      },
      {
        id: "early",
        label:
          "Read February retention after one week because the dashboard already has data",
      },
      {
        id: "signups",
        label: "Use signup growth because more acquired users imply retention",
      },
    ],
    correctOptionId: "cohort",
    successMessage: "Great — you are ready for Lesson 9.",
    nextLessonHref: "/learn/product/pricing-business-case",
    nextLessonLabel: "Lesson 9 · Pricing as a business case",
    readAgainHref: "/learn/product/product-analytics-gtm#lesson-top",
    readAgainHint:
      "Re-read “Read customers who started together.” Compare cohorts after equal opportunities to return.",
  },
  "product/pricing-business-case": {
    lessonHeading: "Lesson 9 · Pricing as a business case",
    question:
      "A customer contributes $24 per month after variable costs, and CAC is $120. What is CAC payback?",
    options: [
      {
        id: "five",
        label: "5 months, calculated as $120 divided by $24",
      },
      {
        id: "point-two",
        label: "0.2 months, calculated as $24 divided by $120",
      },
      {
        id: "revenue",
        label:
          "4 months, calculated with revenue while ignoring the cost to serve the customer",
      },
      {
        id: "ratio",
        label:
          "It is the same as LTV:CAC, so the answer is a ratio rather than time",
      },
    ],
    correctOptionId: "five",
    successMessage: "Great — you are ready for Lesson 10.",
    nextLessonHref: "/learn/product/product-sense-and-ai",
    nextLessonLabel: "Lesson 10 · Product sense, taste, and AI",
    readAgainHref: "/learn/product/pricing-business-case#lesson-top",
    readAgainHint:
      "Re-read “When acquisition starts.” Payback is acquisition cost divided by contribution per period.",
  },
  "product/product-sense-and-ai": {
    lessonHeading: "Lesson 10 · Product sense, taste, and AI",
    question:
      "When AI drafts options and a rationale for a product decision, what is the PM's job?",
    options: [
      {
        id: "approve",
        label: "Approve the model's recommendation so the team can move faster",
      },
      {
        id: "own",
        label:
          "Form a view, improve on the draft, and own the decision with evidence the model did not invent",
      },
      {
        id: "prompt",
        label: "Prompt first, then decide whatever the model returns",
      },
      {
        id: "skip",
        label: "Skip users and trust fluent summaries as the scoreboard",
      },
    ],
    correctOptionId: "own",
    successMessage: "Great — you are ready for Lesson 11.",
    nextLessonHref: "/learn/product/design-vision-branding",
    nextLessonLabel: "Lesson 11 · Vision, brand, and Figma",
    readAgainHref: "/learn/product/product-sense-and-ai#lesson-top",
    readAgainHint:
      "Re-read “Do not rubber-stamp the model” and the scoreboard table for AI bets.",
  },
  "product/design-vision-branding": {
    lessonHeading: "Lesson 11 · Vision, brand, and Figma",
    question:
      "You need a designer (or an AI model) to execute a product UI. What should you hand them first?",
    options: [
      {
        id: "hex",
        label: "A hex code and 'make it modern'",
      },
      {
        id: "brief",
        label:
          "A one-page brief (beachhead, job, feeling, refusals, constraints, scoreboard), then tokens and Figma nouns",
      },
      {
        id: "vibe",
        label: "Only a vibe prompt: 'make it Notion-like'",
      },
      {
        id: "pixels",
        label: "Pixel notes on every padding before the structure exists",
      },
    ],
    correctOptionId: "brief",
    successMessage: "Great — continue to the specimen workbook.",
    nextLessonHref: "/learn/product/specimen-workbook",
    nextLessonLabel: "Specimen workbook · this site",
    readAgainHref: "/learn/product/design-vision-branding#lesson-top",
    readAgainHint:
      "Re-read “The job is the brief, not the hex” and the brand stack diagram.",
  },
  "engineering/engineering-with-ai": {
    lessonHeading: "Eng 1 · Engineering with AI",
    question:
      "What separates agentic engineering from vibe coding when shipping production software?",
    options: [
      {
        id: "agentic",
        label:
          "Specs, diff review, and verification checks the agent can run; you still own correctness and security",
      },
      {
        id: "vibe",
        label: "Prompt loosely, skip the diff, and merge when it looks done",
      },
      {
        id: "syntax",
        label: "Typing every line by hand so AI never touches the repo",
      },
      {
        id: "tools",
        label: "Installing every AI coding tool without changing how you review",
      },
    ],
    correctOptionId: "agentic",
    successMessage: "Great. Next is data structures and algorithms.",
    nextLessonHref: "/learn/engineering/cs-fundamentals",
    nextLessonLabel: "Eng 2 · Data structures and algorithms",
    readAgainHref: "/learn/engineering/engineering-with-ai#lesson-top",
    readAgainHint:
      "Re-read “Vibe coding vs agentic engineering” and the verification playbook.",
  },
  "engineering/cs-fundamentals": {
    lessonHeading: "Eng 2 · Data structures and algorithms",
    question:
      "A PM hears that a feature is 'too slow.' What should they pin down first?",
    options: [
      {
        id: "n",
        label:
          "What n / load is, which outcome moves (conversion, trust, cost), a latency bar (prefer p95), and eng appetite",
      },
      {
        id: "hash",
        label: "Which hash map implementation language to require",
      },
      {
        id: "faster",
        label: "Only 'make it faster' with no metric or scale",
      },
      {
        id: "leetcode",
        label: "A mandate to solve 200 LeetCode problems before shipping",
      },
    ],
    correctOptionId: "n",
    successMessage: "Great. Next is system design (replication, caches, queues at product scale).",
    nextLessonHref: "/learn/engineering/system-design",
    nextLessonLabel: "Eng 3 · System design",
    readAgainHref: "/learn/engineering/cs-fundamentals#lesson-top",
    readAgainHint:
      "Re-read how complexity lands on the scoreboard, the pattern table, and the briefing script.",
  },
  "engineering/system-design": {
    lessonHeading: "Eng 3 · System design",
    question:
      "In a design review, which brief lets eng choose between a cache, a replica, and a queue?",
    options: [
      {
        id: "load",
        label:
          "Load parameters, p95, freshness, degrade behavior, architecture style, SLO, and appetite",
      },
      {
        id: "brand",
        label: "A preferred vendor for each box on the whiteboard",
      },
      {
        id: "scale",
        label: "'Build it to scale' with no numbers attached",
      },
      {
        id: "later",
        label: "Skip failure behaviour and decide it during the incident",
      },
    ],
    correctOptionId: "load",
    successMessage: "Great. Next is the stack for the app.",
    nextLessonHref: "/learn/engineering/why-this-stack",
    nextLessonLabel: "Eng 4 · The stack for the app",
    readAgainHref: "/learn/engineering/system-design#lesson-top",
    readAgainHint:
      "Re-read load parameters, architecture styles, SLOs, and the design-review script.",
  },
  "engineering/why-this-stack": {
    lessonHeading: "Eng 4 · The stack for the app",
    question:
      "A PM hears eng debate Rails vs Go vs Next for a new product. What should decide the stack?",
    options: [
      {
        id: "jobs",
        label:
          "The user job, team size, what must be correct vs what must ship, and what the team can maintain",
      },
      {
        id: "hackernews",
        label: "Whatever language ranked highest on Hacker News this month",
      },
      {
        id: "mern",
        label: "Always MERN, including Mongo, because it is a complete acronym",
      },
      {
        id: "rust",
        label: "Rust for every MVP so the resume looks strong",
      },
    ],
    correctOptionId: "jobs",
    successMessage: "Great. Next is frontend.",
    nextLessonHref: "/learn/engineering/frontend",
    nextLessonLabel: "Eng 5 · Frontend",
    readAgainHref: "/learn/engineering/why-this-stack#lesson-top",
    readAgainHint:
      "Re-read how to choose, the stack families, and the specimen for this Learn site.",
  },
  "engineering/frontend": {
    lessonHeading: "Eng 5 · Frontend",
    question:
      "This site’s cinematic home uses a client component, breakpoints, and a GSAP cuboid. Which review question matches how it was built?",
    options: [
      {
        id: "accept",
        label:
          "What is the first-viewport job, which widths change nav and pathways, what runs only in the browser, and what happens under reduced motion?",
      },
      {
        id: "webgl",
        label: "Start in Three.js so the brand feels premium from day one",
      },
      {
        id: "screenshot",
        label:
          "Paste a screenshot into an AI tool and ship the output as the design system",
      },
      {
        id: "pixels",
        label:
          "Comment only on pixel spacing and leave empty, loading, and error states to QA",
      },
    ],
    correctOptionId: "accept",
    successMessage: "Great. Next is APIs.",
    nextLessonHref: "/learn/engineering/apis",
    nextLessonLabel: "Eng 6 · APIs",
    readAgainHref: "/learn/engineering/frontend#lesson-top",
    readAgainHint:
      "Re-read the cinematic home specimen: layers, breakpoints, client state, and the cuboid.",
  },
  "engineering/apis": {
    lessonHeading: "Eng 6 · APIs",
    question:
      "In an API review, which brief lets eng choose between REST, gRPC, GraphQL, and webhooks?",
    options: [
      {
        id: "caller",
        label:
          "Who the caller is, payload and p95 appetite, what a retry must not do, and whether this is pull or push",
      },
      {
        id: "grpc",
        label: "Pick gRPC because it is faster and more modern",
      },
      {
        id: "endpoints",
        label: "The number of endpoints on the wiki",
      },
      {
        id: "json",
        label: "Always JSON in the browser, for every internal call too",
      },
    ],
    correctOptionId: "caller",
    successMessage: "Great. Next is auth and identity.",
    nextLessonHref: "/learn/engineering/auth-identity",
    nextLessonLabel: "Eng 7 · Auth and identity",
    readAgainHref: "/learn/engineering/apis#lesson-top",
    readAgainHint:
      "Re-read who the caller is, the four styles, and the API-review questions.",
  },
};

export function getLessonQuiz(slug: string): LessonQuiz | undefined {
  return LESSON_QUIZZES[slug];
}
