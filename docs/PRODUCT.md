# Product spec

Improve this as we go. This is the source of truth until it is replaced.

## How we work (the method we also teach)

We do **not** start from auth, Kubernetes, or a price. We start like a PM:

1. Hypothesis (business case)
2. Who it is for
3. What we assume we learned from tests
4. MVP we will actually ship
5. Experiments we will run on that MVP
6. Only then: more product, then tech depth

This website is the running example of that loop. **Product-led growth (PLG):** the product (free lessons) is the motion. Pricing is a later lesson and a later business decision — `$20/year` was a placeholder, not the answer.

## Dual audience

| Persona | They already know | They need |
|---|---|---|
| **PM without tech depth** | Strategy, stakeholders, “the roadmap” | How FE, APIs, data, identity, and hosting actually work, so they can talk to Engineering |
| **Tech person new to PM** | Code, systems | How PMs decide, prioritize, price, run experiments, and brief design |

One journey. Two entry points. Same case study: this app.

## Hypothesis (business case #1)

**Assumption:** Many PMs did not come from engineering, want to understand how tech works, and will follow an unstructured, cheap (or free) path if it is tied to a *real* product being built — not a slide deck. Separately, engineers who want to become (or partner with) PMs will follow the same path from the other direction.

**Offer:** Free PM lessons that aggregate how good PMs actually work (discovery, strategy, PLG, experiments), using this site as the specimen. Tech lessons come after the PM spine exists. Paid packaging is undecided; we will write the pricing lesson by building a real business case, not by picking `$20`.

**We pretend the discovery work is done** (Talking to Humans–style interviews, etc.) and that the insight is: “teach both sides through one live product, start with how PM begins, keep early lessons readable, keep the skeleton public.”

## v1 (this week’s MVP)

- Public home + Learn list (already scaffolded)
- **No auth, no payments**
- Learn renders markdown through Fumadocs (themeable later)
- First lessons are **free reading guides** (how to read, what to extract), not a video platform
- Lesson 1 is live: **How product management begins?** (`/learn/product/how-pm-begins`)
- Product lessons stay free (synthesized from public PM practice / books, not a paywall of other people’s chapters)

**Not in v1:** Stripe, login, Kafka, Kubernetes, Figma production files, Higgsfield.

## Home (v1 IA)

Teaching first, bio second. Minimal hero, then two track columns.

1. **Hero** — “Everything I know, you know now.” One line on the four disciplines working in tandem.
2. **Tracks** — two columns (reference: tier/pricing layout):
   - **Product management** — free; PM spine bullets; engineers and PM newcomers; CTA to lesson 1.
   - **Product engineering** — paid at cost only (not live); full-stack and platform curriculum; opens after PM spine.
3. **About** (`#about`) — two sentences max.

No duplicate lesson cards on home. Link to full catalog. Header: name, Learn, About.

## Tracks (packaging)

| Track | Audience | Price (intent) | Status |
|---|---|---|---|
| Product management | Engineers, PM fundamentals | Free | Live (PM spine) |
| Product engineering | PMs needing technical depth | Paid, cost-only (hosting) | After PM spine; no Stripe in v1 |

## Curriculum (brainstorm — PM spine first)

Early lessons = reading + a short “what we did on this site” note. **Read time** on each lesson page is computed from word count (250–150 wpm range), not hand-entered.

| # | Lesson | Est. | What they leave able to do | How this site is the example |
|---|---|---|---|---|
| 1 | How PM begins | 60m | Name the PM loop and the scoreboard | This document |
| 2 | The business objective | 60m | Full business case (market, persona, beachhead); Moore | Amazon books beachhead |
| 3 | Product strategy | 75m | Strategy = choices of *what we will not do* | Free PM spine before paid depth |
| 4 | Experiments | 75m | Hypothesis, metric, sample, ship/kill | Weekly MVP bets |
| 5 | From MVP to weekly scope | 45m | A week’s slice, not a year roadmap | Next code we actually write |
| 6 | Product leadership | 60m | Stakeholders, influence without authority | Room skills |
| 7 | Product-led growth | 75m | Free product as the loop; activation as the metric | Learn is the wedge |
| 8 | Pricing as a PM (business case) | 90m | Willingness to pay, packaging, unit economics | Price is TBD on purpose |
| 9 | Product sense, taste, and AI | 60m | Judgment when the model drafts first | Product sense over tool fluency |
| 10 | Product analytics and GTM | 60m | Funnels, cohorts, launch metrics | Measure the wedge, not pageviews |
| 11 | Briefing design: vision and branding | 60m | A one-page brand/vision a designer can use | Branding brainstorm below |
| 12 | Figma for PMs | 60m | File structure, components, what to comment on | We will do this when we design |

PM spine totals ~10+ hours (planned). Lessons live under `content/lessons/product/` and `content/lessons/engineering/`.

### Product management (12 lessons)

| # | Slug | Title |
|---|---|---|
| 1 | `product/how-pm-begins` | How product management begins? |
| 2 | `product/business-objective` | The business objective |
| 3 | `product/product-strategy` | Product strategy: what you will not do |
| 4 | `product/experiments` | Experiments: hypothesis, metric, ship or kill |
| 5 | `product/mvp-weekly-scope` | From MVP to weekly scope |
| 6 | `product/product-leadership` | Product leadership and stakeholders |
| 7 | `product/product-led-growth` | Product-led growth vs sales-led |
| 8 | `product/product-analytics-gtm` | Product analytics and go-to-market |
| 9 | `product/pricing-business-case` | Pricing as a business case |
| 10 | `product/product-sense-and-ai` | Product sense, taste, and AI |
| 11 | `product/design-vision-branding` | Briefing design: vision and branding |
| 12 | `product/figma-for-pms` | Figma for PMs: files and front-end lingo |

### Product engineering (12 lessons, paid later)

| # | Slug | Title |
|---|---|---|
| 1 | `engineering/why-this-stack` | Why we picked this stack |
| 2 | `engineering/frontend` | Frontend: how apps are built |
| 3 | `engineering/apis` | APIs and how services talk |
| 4 | `engineering/auth-identity` | Auth, SSL/TLS, and identity |
| 5 | `engineering/data-and-databases` | Data and databases |
| 6 | `engineering/platform-gcp` | Platform engineering: deploy on GCP |
| 7 | `engineering/docker` | Docker and containers |
| 8 | `engineering/kubernetes-networking` | Kubernetes and VPC networking |
| 9 | `engineering/kafka` | Kafka for event streams |
| 10 | `engineering/clickhouse-analytics` | ClickHouse for product analytics |
| 11 | `engineering/terraform` | Terraform and infrastructure as code |
| 12 | `engineering/helm-git-cicd` | Helm, Git, and CI/CD |

**Then** the tech rail (still taught on this site): how the page is a frontend, what an API is, what a database is, then hosting, then identity when paid exists. Include **why we picked this stack** (Next.js, Fumadocs) as a specimen, not a shopping list. Auth is a *later* tech lesson, not the start.

## Branding vision (PM brief, not pixels yet)

PMs do not pick hex codes first. They write the vision designers execute.

**Working name:** TBD (site can stay “Anadi / Learn” until we name the course).

**Feeling:** a lab notebook, not a bootcamp landing page. Serious, calm, two-way (PM and eng). Not purple “AI SaaS,” not corporate navy deck.

**Principles to brief a designer (or Figma later):**

1. **Specimen, not school** — you are looking at the product you are learning
2. **Two audiences, one UI** — no “PM track / Eng track” split in the chrome; the lesson says who it is for
3. **Readable first** — type and spacing over illustration
4. **Open pieces, then tweak** — how real product design often starts (Fumadocs, a typeface), which we will show in the Figma lesson

Type on the site is **Poppins** (Latin + Devanagari). Color system and a component kit wait for Figma. Font choice, Hindi, and a later **obol-packages-style** component repo + Storybook (taught to PMs) live in [LATER.md](LATER.md).

## Open

Decisions still unset. Scheduled work is in [LATER.md](LATER.md).

- Course name
- Price (business case, not a guess)
- Exact reading list order for lesson 2
- Visual system in Figma
- Lesson reactions (like / clap / heart) — see [LATER.md](LATER.md)
