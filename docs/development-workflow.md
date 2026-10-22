# Development workflow

Status: proposed. Issues #1–#5 track review of this planning baseline.

## Specification-first cycle

1. Clarify persona, problem and scope; create an issue linked to requirement IDs.
2. Write observable Given/When/Then criteria and test cases; review the specification.
3. Pass M0 before any application work. Later behavior changes also need spec review before coding.
4. Create `feat/<issue>-<slug>` (or `docs/`, `fix/`, `test/`). Make atomic commits, e.g. `feat: validate cart quantities (refs #8)`.
5. Implement only approved behavior; run relevant unit/integration tests and journey checks.
6. Open a PR with issue, AC, spec, test and AI-assistance evidence. Update traceability in the same PR.
7. Human review; fix findings; merge with issue references preserved. Close issues only after acceptance evidence is complete.

Bootstrap exception: GitHub's generated initial README commit precedes issue creation. Subsequent planning commits reference #1–#5 and arrive through a planning branch/PR.

## Agile cadence and statuses

Proposed one-week iterations after M0: planning and dependency review; short daily progress/blocker updates; end-of-week demo and retrospective. Refine the ordered backlog weekly. Do not start blocked work. Keep one active story per contributor.

Use open issue + labels to indicate backlog (`status:blocked` where applicable), active work via assignee and linked PR, `status:review` for review, and closed only after acceptance. Label families: `type:planning/feature/quality`, `priority:P0/P1/P2`; `epic` is reserved for future tracker issues. Milestones describe outcomes rather than invented deadlines.

## Definition of ready

Approved requirement and testable ACs; issue/priority/dependencies; manageable estimate; no unresolved blocking decision; tests and fixtures planned; M0 passed for code.

## Definition of done

Approved scope met; relevant tests/checks pass; accessibility/security considerations verified; human PR review completed; documentation/traceability updated; commit and test evidence linked; no secrets or misleading claims. For planning, done means accepted documents and recorded human review, not application tests.

## AI and repository controls

AI can draft specs, suggest cases and assist implementation after approval. Humans verify output, assumptions and sources. PRs disclose material AI assistance and verification. Never copy secrets or personal records into prompts.

M0 is a procedural gate, not an installed CI control. No branch protection or Actions workflows are configured in this setup. Before first code PR, assess repository plan support and configure main-branch PR review, no force pushes, and required checks once checks exist; document any unavailable controls. Do not claim enforcement until configured. A solo owner unable to self-approve records explicit signoff in #1; independent review is preferred when available.
