# Portfolio

Live product that is also a classroom for two audiences: PMs who need technical depth, and technical people who need PM craft. Method: hypothesis → experiments → MVP. PLG: free product lessons first. Auth and paid packaging come later.

Spec: [docs/PRODUCT.md](docs/PRODUCT.md). Later work: [docs/LATER.md](docs/LATER.md). Do not pull later items unless asked.

## Product

- **Portfolio** — public. Who Anadi is.
- **Learn** — public directed lessons. PM spine is free. Tech rail follows. No login in v1.

## Stack (v1)

Next.js (App Router), TypeScript, Tailwind. Learn is Fumadocs (MDX in `content/lessons/`). No auth, no Stripe, no Kubernetes.

## Agent

Cursor skills, rules, and MCP config live in `.cursor/` on your machine only (gitignored). This repo ships the site and lessons, not the authoring playbook.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
