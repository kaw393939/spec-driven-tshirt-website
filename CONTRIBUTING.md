# Contributing

New agent? Read [AGENTS.md](AGENTS.md) first. New teammate? Start with the [documentation hub](https://kaw393939.github.io/spec-driven-tshirt-website/docs/).

The shop is waiting for [plan approval](docs/approval.md). Documentation publishing is allowed; application implementation is not yet allowed.

1. Choose an issue and read its requirement IDs, checks, and dependencies.
2. Agree on the spec before implementing behavior.
3. Create an issue-focused branch from the correct base. Until M0 approval, the planning/Pages branch is `docs/1-planning-baseline`; small onboarding-only changes may target `main`.
4. Make atomic commits: one explainable change per primary issue. Put `refs #N` in the subject and requirement IDs plus the spec path in the body.
5. Open a PR with [the template](.github/PULL_REQUEST_TEMPLATE.md). Link the spec, code/files, actual commits and verification results; update [traceability](docs/traceability.md) where needed.
6. Review and merge only when the applicable checks are met. Application work and M0 approval need the human decisions described in the [workflow](docs/development-workflow.md).

Do not close an application issue with planning documents. Do not report planned tests as passed. See [atomic commit examples](docs/development-workflow.md#atomic-commits) and the agent guide for the full handoff checklist.
