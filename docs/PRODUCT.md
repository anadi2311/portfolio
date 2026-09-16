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

**Assumption:** Many PMs did not come from engineering, want to understand how tech works, and will follow a free path if it is tied to a *real* product — not a slide deck. Separately, engineers who want PM craft will follow the same site from the other direction (pin two).

**Offer:** Free PM lessons as trust + portfolio showcase + free education. **Free tech lessons as the beachhead product wedge** for PMs who need stack literacy (reviews, timelines, MVPs/POCs, AI-era relevance). Paid packaging only if demand earns it (pricing lesson builds the case; do not invent `$20`). Dual purpose: if demand is thin, free teaching/showcase may continue — that is not fake PMF.

**We pretend the discovery work is done** (Talking to Humans–style interviews, etc.) and that the insight is: “teach both sides through one live product; free PM builds trust; free tech is the wedge; measure tech interest and waitlist.”

## MVP (prove the beachhead)

Order matters: demand signal before the free tech curriculum.

1. Public home + Learn; both tracks visible; one site
2. **About author** (`/about`) early — work, education, misc (music, posts) — portfolio trust
3. Free PM spine (enough published to prove craft)
4. **Tech-track entry + honest waitlist** (before first tech lesson exists)
5. Analytics: lesson start/finish, waitlist; tech starts once lessons ship
6. Outreach-ready URLs
7. **No auth, no Stripe**

**Not in MVP yet (enters when waitlist earns it):** first free tech lessons (1–3). Still MVP-scoped after demand — not a V1 dump.

**Not in MVP:** login, payments, certificates, cohorts, community-as-growth, full platform curriculum theater.

## V1 (after signal / keep building)

- First free tech lessons live (if not already shipped from waitlist signal)
- More PM spine + more free tech lessons
- Better instrumentation; waitlist follow-up / one-question WTP probe
- PLG loops measured (activation into free tech)

**Later (demand-gated):** paid tech packaging, login if needed, certificates/cohorts.

## Home (v1 IA)

1. **Hero** — “Everything I know, you know now.” One supporting line.
2. **Tracks** — two columns (PM free → lesson 1; eng → waitlist until free tech ships).

About lives only at `/about` (header/footer). No home teaser, no “All lessons” link on home — Learn is in the nav.

## Tracks (packaging)

| Track | Audience | Price (intent) | Status |
|---|---|---|---|
| Product management | PM craft; engineers as pin two | Free forever (v1) | Live (PM spine) |
| Product engineering | PMs needing technical depth (beachhead) | Free wedge later; paid depth if demand | **Waitlist first** in MVP; free lessons after signal; no Stripe until funded |

## About (`/about`)

Public author page (portfolio + trust for Learn):

- Work experience (Obol, Covalent, UBC CIC / AWS, …)
- Education (UBC MSc; undergrad)
- Misc: music, blog posts, articles (links as they exist)

## Curriculum (brainstorm — PM spine first)

Early lessons = reading + a short “what we did on this site” note. **Read time** on each lesson page is computed from word count (250–150 wpm range), not hand-entered.

| # | Lesson | Est. | What they leave able to do | How this site is the example |
|---|---|---|---|---|
| 1 | How PM begins | 60m | Name the PM loop and the scoreboard | This document |
| 2 | The business objective | 60m | Full business case (market, persona, beachhead); Moore | Amazon books beachhead |
| 3 | Product strategy | 75m | Strategy = choices of *what we will not do* | Tech-for-PMs beachhead; free PM as trust; free tech wedge |
| 4 | Experiments | 75m | Hypothesis, metric, sample, ship/kill | Weekly MVP bets |
| 5 | From MVP to weekly scope | 45m | A week’s slice, not a year roadmap | Next code we actually write |
| 6 | Product leadership | 75m | Leader job, empowered teams, staff/group, room skills | Dual scoreboard + waitlist before tech |
| 7 | Product-led growth | 60m | PLG vs sales-led; activation; free forever vs free-to-paid | Waitlist + free tech wedge; dual scoreboard |
| 8 | Product analytics and GTM | 75m | Stage-based analytics, Goodhart, tools by surface/scope | Measure waitlist/tech starts, not pageviews |
| 9 | Pricing as a PM (business case) | 75m | WTP, packaging, one-time vs sub; unit economics | $49 one-time tech depth · 10-year access specimen |
| 10 | Product sense, taste, and AI | 60m | Judgment when the model drafts first | Product sense over tool fluency |
| 11 | Vision, brand, and Figma for PMs | 90m | Brief, brand system, Figma nouns, AI prompts | Lab-notebook brief + Notion case + diagram follow-along |
| 12 | Specimen workbook: this site | 45m | Fill every this-site exercise in one place | Combined app specimen drills from L1–11 |

PM spine totals ~10+ hours (planned). Lessons live under `content/lessons/product/` and `content/lessons/engineering/`.

### Product management (12 items: 11 lessons + workbook)

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
| 11 | `product/design-vision-branding` | Vision, brand, and Figma for PMs |
| 12 | `product/specimen-workbook` | Specimen workbook: this site |

### Product engineering (AI workflow → CS → system design → stack)

| # | Slug | Title |
|---|---|---|
| 1 | `engineering/engineering-with-ai` | Engineering with AI: how to stay relevant |
| 2 | `engineering/cs-fundamentals` | Data structures and algorithms, with product stakes |
| 3 | `engineering/system-design` | System design: reliability, scale, and how pieces fit |
| 4 | `engineering/why-this-stack` | Why we picked this stack |
| 5 | `engineering/frontend` | Frontend: how apps are built |
| 6 | `engineering/apis` | APIs and how services talk |
| 7 | `engineering/auth-identity` | Auth, SSL/TLS, and identity |
| 8 | `engineering/data-and-databases` | Data and databases |
| 9 | `engineering/platform-gcp` | Platform engineering: deploy on GCP |
| 10 | `engineering/docker` | Docker and containers |
| 11 | `engineering/kubernetes-networking` | Kubernetes and VPC networking |
| 12 | `engineering/kafka` | Kafka for event streams |
| 13 | `engineering/clickhouse-analytics` | ClickHouse for product analytics |
| 14 | `engineering/terraform` | Terraform and infrastructure as code |
| 15 | `engineering/helm-git-cicd` | Helm, Git, and CI/CD |

**Then** the tech rail: engineer with AI, data structures and algorithms tied to outcomes, system design (Kleppmann's reliability / scalability / maintainability), then why this stack (Next.js, Fumadocs), frontend, APIs, data, hosting. Auth is later when packaging needs it.

## Branding vision (PM brief, not pixels yet)

PMs do not pick hex codes first. They write the vision designers execute.

**Working name:** TBD (site can stay “Anadi / Learn” until we name the course).

**Feeling:** a lab notebook, not a bootcamp landing page. Serious, calm, two-way (PM and eng). Not purple “AI SaaS,” not corporate navy deck.

**Principles to brief a designer (or Figma later):**

1. **Specimen, not school** — you are looking at the product you are learning
2. **Two audiences, one UI** — no “PM track / Eng track” split in the chrome; the lesson says who it is for
3. **Readable first** — type and spacing over illustration
4. **Open pieces, then tweak** — how real product design often starts (Fumadocs, a typeface); Lesson 11 covers how that shows up in Figma

Type on the site is **Poppins** (Latin + Devanagari). Lesson 11 teaches the brand/Figma literacy; a later **obol-packages-style** component repo + Storybook (taught to PMs) lives in [LATER.md](LATER.md).

## Open

Decisions still unset. Scheduled work is in [LATER.md](LATER.md).

- Course name
- Price (business case, not a guess)
- Exact reading list order for lesson 2
- Visual system in Figma
- Lesson reactions (like / clap / heart) — see [LATER.md](LATER.md)
