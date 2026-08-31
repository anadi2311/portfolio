# Projects

Tools and apps I have shipped as side projects. This portfolio repo itself is a **product + classroom** for amateur PMs (strategy, GTM, and the technical stack that makes them real). The items below are already public on GitHub.

## This repo — Portfolio / Learn

A live site that is both a PM portfolio and a directed course: frontend, APIs, auth, payments, analytics, then hosting from Vercel into Kubernetes. Spec: [docs/PRODUCT.md](docs/PRODUCT.md).

## Public GitHub projects

| Project | What it is | Repo |
|---|---|---|
| **pic-compressor** | Python CLI that compresses a folder of images down to a target size (KB). Built for visa/photo size limits. | [anadi2311/pic-compressor](https://github.com/anadi2311/pic-compressor) |
| **merge-pdf** | Python CLI to merge (and optionally compress) PDFs from a folder. Source documents stay local; the repo is code + template only. | [anadi2311/merge-pdf](https://github.com/anadi2311/merge-pdf) |
| **schengen-visa-appointment** | Playwright scanner that polls VFS Global for Schengen appointment slots. Config is an example file; real `config.json` is not published. | [anadi2311/schengen-visa-appointment](https://github.com/anadi2311/schengen-visa-appointment) |
| **icbc-bot** | Personal bot that checks ICBC road-test availability and can notify via Telegram. Secrets live in `.env` (see `.env.template`). | [anadi2311/icbc-bot](https://github.com/anadi2311/icbc-bot) |
| **wedding-quiz** | Real-time, Jackbox-style wedding trivia: host on a TV, guests on phones, Firebase sync. Ships a **sample questionnaire**; private questions stay in a gitignored `content.ts`. | [anadi2311/wedding-quiz](https://github.com/anadi2311/wedding-quiz) |

Each of those repos uses `.env.template` (or `config.example.json` / `content.example.ts`) so credentials and personal data are not in git.
