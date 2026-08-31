# Product spec (v1)

Improve this as we go. This is the source of truth until it is replaced.

## Audience

Amateur PMs who want technical knowledge. Not a course for engineers, and not a generic “how to be a PM” MBA track.

They should leave able to:

- Do the PM job: strategy, prioritization, GTM, experimentation
- Ship the product: frontend, APIs, databases, auth
- Host it: Vercel first, then real platform engineering (Kubernetes, Helm, Ansible)
- Measure it: product/GTM metrics from events, not from slides

## Thesis

The site is the case study. Every PM idea (a bet, a GTM motion, an experiment) is tied to something running in this repo: a page, an API, a deploy, or a metric.

Two rails, one journey:

| Rail | What they learn | Where it lives in this product |
|---|---|---|
| **PM craft** | Strategy, prioritization, GTM, experiments, pricing | How we choose what to build, how we package $20/year, how we read activation/retention |
| **Technical craft** | FE, backend (API + DB), identity, hosting, data | The actual Next.js app, Postgres, later Kafka → ClickHouse → an open-source dashboard |

A lesson is never “Kafka in the abstract.” It is “here is the GTM funnel we care about, here is the event, here is where it lands, here is the chart.”

## North-star analytics (later, not v1)

Product and GTM metrics should eventually flow like this:

**App events → stream (Kafka) → warehouse (ClickHouse, with explicit models) → open-source dashboard**

That stack is the teaching lab for growth, activation, retention, and GTM — not a bolt-on “analytics vendor” forever. PostHog (or similar) is allowed as a **temporary** Phase 3 shortcut so we can teach funnels before we operate Kafka/ClickHouse.

## v1 scope (Phase 1)

- Public portfolio shell
- Learn shell
- Passwordless (or magic-link) auth
- Two free lessons in MDX (one PM, one technical — see below)
- Postgres for users and lesson progress
- One boring deploy + custom domain when we get there

**Not in v1:** Stripe, crypto, PostHog, Kafka, ClickHouse, SAML, SCIM, MFA, Kubernetes, Helm, Ansible, cloud terminal, Higgsfield videos.

## Curriculum map (full course)

Order is how a beginner PM should meet the stack: decide → UI → API → data → identity → monetize → measure → host simply → host for real → stream events.

| # | Title | Access | Rail | Teaches |
|---|---|---|---|---|
| 1 | How this site is structured | Free | Both | Repo map; what “full stack” means for a PM |
| 2 | Strategy and prioritization on a real backlog | Free | PM | Why v1 is small; how we say no to Kafka/kube today |
| 3 | Frontend: the Learn UI | Paid | Tech | Pages, state, what a PM is looking at in the DOM |
| 4 | Backend: APIs and Postgres | Paid | Tech | Request/response, tables, why the API exists |
| 5 | Auth and the user lifecycle | Paid | Tech | Passwordless, session vs identity vs authorization |
| 6 | GTM and packaging the $20/year plan | Paid | PM | Positioning, free vs paid, pricing (fill in Anadi’s numbers) |
| 7 | Entitlements: who can see a paid lesson | Paid | Both | RBAC vs entitlement; Stripe later wires this |
| 8 | Experiments: what we would A/B and why | Paid | PM | Hypothesis, metric, what we would instrument |
| 9 | Events, activation, funnels | Paid | Both | Event taxonomy this app will emit |
| 10 | Deploy on Vercel | Paid | Tech | Domain, serverless, env vars, what “prod” means |
| 11 | Platform engineering: Kubernetes, Helm, Ansible | Paid | Tech | Same app, “grown-up” hosting; tradeoffs vs Vercel |
| 12 | Streaming to ClickHouse (Kafka) | Paid | Tech | Why a stream; models for GTM metrics |
| 13 | GTM dashboard (open source) | Paid | Both | Charts PMs actually use; wired to ClickHouse |
| 14 | Identity depth (OIDC, then SAML/SCIM) | Paid | Tech | Standards a PM sets with Engineering |
| 15 | AI-native building (Cursor, Figma, Higgsfield) | Paid | Both | How this repo was built; skills and rules |

Lessons 1–2 ship with Phase 1. The rest are stubs until their phase.

## Gating

- Free lessons: anyone
- Paid lessons: logged-in user with active yearly entitlement
- Account required for paid, even if we later add crypto

## Phases after v1

2. Stripe $20/year + entitlements  
3. Event taxonomy + a temporary analytics tool (funnels before Kafka)  
4. Identity depth (SSO, MFA, then SAML/SCIM)  
5. Vercel production + domain  
6. Platform engineering track (Kubernetes, Helm, Ansible)  
7. Kafka → ClickHouse models → OSS dashboard  
8. Videos, quizzes, optional cloud terminal  

## Open

- Pricing metrics and unit economics (not provided yet)
- Visual design (Figma later)
- Which IdP/library for passwordless (decide at first auth stage)
- Which OSS dashboard (e.g. Metabase/Grafana) — decide when ClickHouse exists
