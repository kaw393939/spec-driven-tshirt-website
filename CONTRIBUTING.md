# Contributing

Read the [workflow](docs/development-workflow.md) and [approval gate](docs/approval.md) first. M0 permits documentation and planning only.

1. Select an issue and inspect its dependencies and requirement/AC IDs.
2. Review or change the specification before implementing behavior.
3. Create `docs/<issue>-<slug>` or, after approval, `feat/<issue>-<slug>` / `fix/<issue>-<slug>`.
4. Make atomic commits such as `docs: define cart criteria (refs #8)`.
5. Open a PR using the template; attach evidence and update traceability.
6. A human reviews correctness, accessibility, security, and AI-assisted output. Merge only when the applicable acceptance criteria are met.

Do not close an implementation issue with planning documents. No application test suite exists yet; report tests as planned, never passed.
