# Contributing

Start with [AGENTS.md](AGENTS.md). Students begin with [the brand brief](docs/brand-strategy.md), [visual directions](docs/visual-design.md), and [persuasion](docs/persuasion.md), then [the spec activity](docs/activity.md).

The central work is branding a plain white T-shirt and explaining the design. The implementation is one product with sizes, HTML/CSS/JavaScript, and pretend checkout. No backend or real purchases. [M0 approval](docs/approval.md) is still required before storefront coding; docs publishing is allowed.

1. Choose an issue; read its spec/check IDs and dependencies.
2. Record a peer question and your decision; agree on the spec before code.
3. Use an issue-focused branch from the current planning branch (`docs/1-planning-baseline`), or `main` after approval. Small onboarding-only updates may target `main` now.
4. Make one focused change. Reference its issue in the commit subject, and IDs/spec path in the body.
5. Open a PR with links to the spec, files, commits, and actual [checks](docs/testing-strategy.md). Update [traceability](docs/traceability.md) as needed.
6. Review the diff and results before merging. Close only tasks whose checks are actually met.

No framework, backend setup, or automation is a prerequisite. Planned checks are not passing checks. Read [the small-change workflow](docs/development-workflow.md#atomic-commits) for examples.
