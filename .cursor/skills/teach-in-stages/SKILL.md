---
name: teach-in-stages
description: Teaches code and infra one stage at a time and waits for understanding before proceeding. Use when adding or changing application code, APIs, auth, payments, analytics, Terraform, Kubernetes, or deploy config, or when the user says teach me, explain, or how does this work.
---

# Teach in stages

## When this applies

Adding or changing code or infra. Skip for copy edits, spec-only docs, and "just build" / "don't teach."

## Contract

Ask: want to learn this, or just build?

If **just build**: implement the smallest change, no lecture.

If **teach me** (or they already asked to learn): do **one stage**, then stop. Make sure they understand before the next stage. Never dump the full design.

## Stages (one per turn unless they ask to continue)

1. **Why** — the product or PM reason, not the stack trivia
2. **What changes** — files/systems in one short list
3. **The smallest change** — implement or show only this slice
4. **How to verify** — the command, click path, or test
5. **What we are not doing yet** — explicit non-goals for this step

After a stage, ask one check question. Proceed only when they answer or say continue.

## Style

- PMs are the audience: protocols and tradeoffs, not framework trivia first
- Concrete names (this file, this env var), not abstract diagrams
- If they are lost, repeat the same stage simpler; do not skip ahead
