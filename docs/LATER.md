# Later

Work we intend to do, not this week’s MVP. Do not pull an item into a lesson or a PR unless we say so.

Spec for what is in v1: [PRODUCT.md](PRODUCT.md).

## Content and agent

- **Cite sources in every lesson.** Books, Substack posts, and articles that a claim came from go in a References / Further reading list, named so a reader can find them. Do not quote chapters.
- **Import minimal UI skill.** [MengTo/skills](https://github.com/MengTo/skills) `web-design/landing-page` (or tailwindcss) for landing polish when we do a design pass. Keep pages minimal: one headline, one proof line, no filler sections.
- **Experiments lesson diagrams.** Shipped: `hypothesis-before-build`, `product-kata`, `opportunity-solution-tree`. Delete Temporary frames after commit if desired.

## Design (branding / Figma lessons)

Curriculum cards 8–9. Teach type the way a PM briefs a designer, using this site as the specimen.

- How to pick a font: job (reading vs display), script coverage, pair with a mono for code, load cost (weights, subsets).
- A short list of fonts that work for this kind of product, and why people reach for them.
- **Why we picked Poppins:** Indian Type Foundry; Latin and Devanagari in one family, so Hindi (and other Devanagari) copy can ship without a second display face. The site already loads `latin` + `devanagari` via `next/font`.
- Hindi translation of lessons / a Hindi track is a later product bet, not a v1 page. The font is the unblocker, not the translation itself.

## Design system (separate repo)

Pattern from work: a packages repo like **obol-packages**, not components living only inside this Next app.

- New repo: atoms, molecules, organisms (and whatever we actually ship). This site consumes it.
- **Storybook** in that repo: each piece in isolation, with states a PM can click (empty, loading, error, Hindi string that wraps).
- **Lesson for PMs:** why a shared kit exists (one change, many surfaces; design and eng share names; you stop screenshot-commenting the same button in five apps). How to use Storybook: find the component, check the states that match the job, write the ticket against that, not against a one-off mock.
- Do not start this until branding/Figma has something worth extracting. v1 stays in-repo.

## Tech rail

After the PM spine.

- **Why this stack:** Next.js (App Router) for the product shell; Fumadocs for Learn markdown we can restyle. Specimen, not a shopping list.
- Then: frontend, APIs, data, hosting, identity when paid exists.

## Product (undecided, still open)

See also the Open list in [PRODUCT.md](PRODUCT.md).

- Course name
- Engineering track price at cost (business case when Stripe exists)
- Hindi (or other language) editions
- **Lesson reactions (like / clap / heart).** v1 has no auth — we still want a lightweight signal that a lesson landed (and which lessons get skipped). Pick one affordance (heart, clap, or thumbs-up — not three); one tap per lesson per visitor unless we add accounts. Needs a small backend or edge store for counts (and optional per-lesson breakdown for the author). Tie to **auth** when login exists so reactions can persist across devices; until then, cookie or anonymous id is enough for “did this help?” not identity. Product lesson hook: reactions as a cheap experiment metric before you build a comment system.
