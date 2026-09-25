# Later

Work we intend to do, not this week’s MVP. Do not pull an item into a lesson or a PR unless we say so.

Spec for what is in v1: [PRODUCT.md](PRODUCT.md).

## Content and agent

- **Cite sources in every lesson.** Books, Substack posts, and articles that a claim came from go in a References / Further reading list, named so a reader can find them. Do not quote chapters.
- **Import minimal UI skill.** [MengTo/skills](https://github.com/MengTo/skills) `web-design/landing-page` (or tailwindcss) for landing polish when we do a design pass. Keep pages minimal: one headline, one proof line, no filler sections.
- **Experiments lesson diagrams.** Shipped: `hypothesis-before-build`, `product-kata`, `opportunity-solution-tree`. Delete Temporary frames after commit if desired.
- **AI evals for PMs.** Add a PM-facing section or lesson explaining why probabilistic AI features need repeatable evaluations before launch and after model, prompt, tool, or data changes. Define evaluation sets, expected answers, scoring rubrics, human review, model-as-judge, offline evals, online experiments, regression tests, hallucination checks, safety checks, latency, and cost. Show how a PM turns the customer promise into test cases and release thresholds, then connects eval scores to product outcomes rather than treating model accuracy as the final metric. Use a worked feature example and cite the relevant Lenny's Newsletter sources instead of attributing the idea to Lenny in general.

## Blogs (first posts)

`/blogs` is Coming soon. First real posts when we pull this:

- **First blog: Blender → WebGL → Three.js interactive site.** Build diary: author a simple scene in **Blender**, export **glTF**, load with **Three.js** (or React Three Fiber) on **WebGL**, one real interaction (orbit, hover, or scroll-linked camera), still/video fallback for phones and `prefers-reduced-motion`. Measure real asset weights and Lighthouse vs the order-of-magnitude **cost bands** already in `engineering/frontend` (What landings cost to run). This post is the build diary, not a second FE lesson.

## Design (branding / Figma lessons)

Curriculum cards 8–9. Teach type the way a PM briefs a designer, using this site as the specimen.

- How to pick a font: job (reading vs display), script coverage, pair with a mono for code, load cost (weights, subsets).
- A short list of fonts that work for this kind of product, and why people reach for them.
- **Why we picked Poppins:** Indian Type Foundry; Latin and Devanagari in one family, so Hindi (and other Devanagari) copy can ship without a second display face. The site already loads `latin` + `devanagari` via `next/font`.
- Hindi translation of lessons / a Hindi track is a later product bet, not a v1 page. The font is the unblocker, not the translation itself.

## Design system (separate repo)

Pattern from work: a packages repo like **obol-packages**, not components living only inside this Next app.

- New repo: atoms, molecules, organisms (and whatever we actually ship). This site consumes it.
- **Storybook** in that repo: each piece in isolation, with states a PM can click (empty, loading, error, Hindi string that wraps). Literacy for why a kit exists and how to ticket against Storybook states ships in `engineering/frontend`; this item is the separate packages repo + live Storybook, not another lesson.
- Do not start this until branding/Figma has something worth extracting. v1 stays in-repo.

## Tech rail

After the PM spine. Teach each box on the lesson that owns it. Do not dump the whole path into lesson 4.

- **The stack for the app (lesson 4).** Shipped at `engineering/why-this-stack`: what a stack is; Rails, JS/MERN/Next, Django/FastAPI, Spring Boot, Go, Rust; counterfactual table; specimen is this Next+Fumadocs site for teach+MVP+one author. Keep slug.
- **Frontend (lesson 5).** Shipped at `engineering/frontend`: browser layers, flow→UX→UI, React literacy, repo walk + solo start, atomic design + Storybook, Figma/AI, craft/motion pipeline, **landing cost bands** (CSS vs Lottie vs Rive vs WebGL), experiential patterns, cinematic home specimen. Keep slug. Storybook kit in a separate packages repo stays deferred below. Blender→Three.js **build diary with measured weights** stays in **Blogs** above.
- Then: data, hosting, identity when paid exists. APIs already published.
- **Ticket to live site (streamline).** PM ticket with acceptance → feature branch → **Vercel** (or similar) preview URL, or QA on a **dev** environment after merge → programmer tests plus acceptance on that preview/dev → merge to **main** as a **release** → CI builds an image to **GHCR** → **Terraform** for GCP land (cluster, IPs, IAM) and **Argo CD** to sync the new image onto the cluster → **GKE** rolls pods → DNS hits the load balancer → the public site is the new release. Write real unit, integration, and E2E tests for this app later so the lesson is not slides. Map: tests + branch/PR/GHCR/Argo live in `helm-git-cicd`; images in Docker; GKE rollouts in Kubernetes; Terraform in Terraform; domain in platform.
- **Tests to define when that lesson is written (`helm-git-cicd`).** Unit: one function, no network. Integration: two pieces together (often a real DB). E2E: a browser clicks the real flow. Acceptance: the PM’s ticket (“highlight saves and shows on the account page”). Programmers own the first three. The PM checks acceptance on preview/dev. Not owned by `engineering/frontend`.
- **Edge routing (Kubernetes / platform, not APIs as the home).** Three different jobs people confuse:
  - **GKE Ingress** (or Gateway API): Google’s front door. An Ingress object provisions a Cloud HTTP(S) Load Balancer in front of pods. Default for one public website on GKE.
  - **Traefik:** an ingress controller / reverse proxy you operate. Same host+path → service idea; portable across Docker and other clouds; you run it.
  - **Istio:** a service mesh between services (mTLS, canaries, retries, telemetry). For many services talking to each other. Lab-only for a single Learn Deployment unless we say it is a mesh specimen.
  Internet → GKE Ingress *or* Traefik → website pods. Istio is mostly east-west. Do not install a mesh to impress a recruiter who knows GKE.
- **Ports.** A process listens on a number (80/443 on the balancer, a container port on the pod). Teach with routing, not as a separate religion.
- **Deploy on Cloudflare (and own a domain).** Owned by `platform-gcp` (and DNS notes in the ticket-to-live path). Lesson or specimen walkthrough once the site is ready to leave localhost: why Cloudflare (or similar edge host) matters for a public product (global CDN, HTTPS, DNS in one place); how to deploy this Next app there; how DNS works at a PM level (what an A record vs a **CNAME** does); buying or pointing a custom domain so `yourname.com` resolves to the deploy. Include failure modes (SSL pending, wrong CNAME target, apex vs `www`). Vercel preview can still be the cheap QA URL even if production is GKE as a specimen.

## Product (undecided, still open)

See also the Open list in [PRODUCT.md](PRODUCT.md).

- Course name
- Engineering track price at cost (business case when Stripe exists)
- Hindi (or other language) editions
- **Lesson reactions (like / clap / heart).** Current MVP has no auth. We still want a lightweight signal that a lesson landed (and which lessons get skipped). Pick one affordance (heart, clap, or thumbs-up — not three); one tap per lesson per visitor unless we add accounts. Needs a small backend or edge store for counts (and optional per-lesson breakdown for the author). Tie to **auth** when login exists so reactions can persist across devices; until then, cookie or anonymous id is enough for “did this help?” not identity. Product lesson hook: reactions as a cheap experiment metric before you build a comment system.
- **Login and lesson highlights (V1 candidate, not this week).** Job: keep notes while reading a lesson and find them later, grouped by lesson. Reading stays free. Bookmarking is the thing that needs an account.

  **Logged in.** On lesson body text only (not nav, quizzes, or diagrams), the reader can select a passage and save a highlight, with an optional note. Highlights persist. An account page lists them grouped by lesson, in lesson order (document position, not recency), each row showing the lesson title, the nearest heading, and a jump link back to the passage.

  **Logged out.** The same select-to-highlight control is visible so the feature is discoverable. The first save opens a modal: log in to keep this highlight, or dismiss and keep reading for free. Do not paywall the lesson. Do not trap the reader in the modal.

  **How login works (teaching specimen).** Magic link or similar: email in, proof of inbox, session cookie. Auth lesson on the eng rail uses this flow. Store is relational (`users`, `highlights`: user, lesson slug, heading id, text range, optional note). ClickHouse / dashboards are not required to ship this.

  **Do not.** Turn the whole page into a highlighter cursor (breaks links, copy, quizzes). Default-on highlight mode everywhere. Mongo or a vector store for this job. Kafka. Building auth before the remaining tech lessons exist.

  **Hypothesis to test when we pull this:** logged-in highlights raise return visits or lesson finish rate, not merely account creates.
