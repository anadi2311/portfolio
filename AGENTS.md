# Portfolio

Live product that is also a classroom for amateur PMs: PM craft (strategy, prioritization, GTM, experiments) plus technical craft (FE, APIs, databases, identity, Vercel then Kubernetes/Helm/Ansible, later Kafka → ClickHouse → an OSS GTM dashboard). AI-native building (Cursor, Figma, Higgsfield) is a cross-cutting track.

## Product

- **Portfolio** — public. Who Anadi is and the architecture of this site.
- **Learn (free)** — public directed lessons.
- **Learn (paid)** — $20/year. Requires login and an active entitlement. Stripe first; crypto later.

Spec: [docs/PRODUCT.md](docs/PRODUCT.md)

## Stack (v1)

Next.js (App Router), TypeScript, Tailwind, MDX lessons, Postgres, passwordless auth, Stripe Billing. Temporary analytics before Kafka/ClickHouse. No Kubernetes/Helm/Ansible/Kafka in v1.

## Agent

- Rules: `.cursor/rules/` (always-on teaching and skill/rule suggestions)
- Skill: `.cursor/skills/teach-in-stages/` when adding code or infra
- Improve in small phases. Do not boil the ocean (SAML, SCIM, kube, crypto, cloud terminal are later).
