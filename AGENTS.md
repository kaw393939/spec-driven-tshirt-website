# Start here, agents

This is an intro web-development class project. Students know basic Git, brand archetypes, Cialdini, modernism/postmodernism, and conceptual web servers/REST. Help them make decisions they can explain, not just receive a generated website.

## Five standing rules

1. Read the relevant spec and issue before changing anything.
2. Ask about unclear requirements; do not silently choose the student’s audience or brand.
3. Explain the plan and work on one small feature at a time.
4. Link the spec, issue, atomic commit, PR, and actual check result.
5. Say what you checked and what you could not check. Never invent evidence or approval.

## Scope and current state

- **One product with sizes. HTML, CSS, and plain JavaScript. GitHub Pages. All shopping is simulated in the browser.**
- No backend, database, framework, application API, real payments, accounts, tracking, personal-data fields, catalog, filters, or color variants. Browser cart persistence is optional future work, not required.
- **Planning is pending M0 approval. Do not implement/scaffold the storefront or install application packages before M0 passes.** Documentation publishing and the footer-only homepage are authorized.
- Full plan and Pages source are currently `docs/1-planning-baseline`, pending [PR #12](https://github.com/kaw393939/spec-driven-tshirt-website/pull/12). `main` has onboarding material. Verify actual branches/Pages and [approval issue #1](https://github.com/kaw393939/spec-driven-tshirt-website/issues/1) before acting on this snapshot.
- Run `git status --short --branch` first. Preserve others’ work. Never reset, clean, force-push or overwrite unrelated changes.

If docs are absent on `main`, fetch/read the planning branch or [live hub](https://kaw393939.github.io/spec-driven-tshirt-website/docs/). Do not merge the unapproved baseline merely to obtain files.

## Read in this order

1. README.md; docs/README.md; docs/activity.md and docs/example.md for the student experience.
2. docs/approval.md, then the assigned issue and its dependencies.
3. Relevant specs; docs/brand-strategy.md and docs/marketing.md for design/copy decisions.
4. docs/development-workflow.md, docs/testing-strategy.md, docs/traceability.md.
5. docs/changes.md if an old issue/ID refers to a catalog or backend. US-01–05, AC-01–09, NFR-01–05, ADR-001 and old automated-test IDs are retired; never reuse them. Active stories are US-06–10, with AC-10–22 and CHECK-01–17.

Docs define the agreement. Issues hold decisions/progress; PRs/checks show delivery. Resolve conflicts explicitly. Threadform/Creator is an example, not a required student brand. Do not mistake a fictional peer exchange for actual review evidence.

## Work visibly and atomically

- Find/create an issue first. Record goal, spec section, stable rule/check IDs, dependencies, and one peer question/decision where appropriate. Put shared decisions in the spec/issue, not only a private AI conversation.
- Use `docs/<issue>-<name>` or, after approval, `feat/`, `fix/`, `test/`. Documentation PRs target the current planning/Pages branch; onboarding-only updates may target `main` without importing the baseline.
- After M0 approval and merge, switch Pages and normal feature bases to `main`. Verify rather than assume. Respect blocked tasks.
- **One authored change commit = one explainable change for one primary issue.** Include directly related docs/checks with code when coherent; split unrelated cleanup. Inspect the diff and stage specific files/hunks.
- Reference the issue in the subject and IDs/spec path in the body. Future example (only after approval):

```text
feat: require an available size (refs #23)

Requirements: US-07, AC-12, AC-13
Spec: specs/functional.md#us-07--choose-a-size
```

- For docs/process work, use its issue’s check IDs (for example RESET-01). Merge commits preserve the PR link and primary issue. `refs #N` means ongoing; `Closes #N` is only for a fully satisfied task. Verify closure on non-default branches.
- Use the PR template: spec link → issue → changed files and actual commit URLs → PR → check evidence. Update docs/traceability.md when mappings change. Record final hashes in issue/PR after committing; don’t repeatedly edit a file to add its own hash.

## Verify, then hand off

- No storefront code or tests exist yet. Start with repeatable manual CHECK cases; introduce small JS unit assertions and integration/browser checks as teaching progresses. No database, package test harness, or coverage target is required. A docs build is not a storefront test.
- Docs changes: check front matter, links, IDs, whitespace, successful Pages build and live content. Inspect rendering/accessibility when tools allow; name verification limits.
- Keep the root homepage footer-only until the user changes that requirement. Preserve `/spec-driven-tshirt-website` paths. Existing assets/docs.css styles docs, not the future shop.
- M0 needs a human decision for the exact final reviewed SHA in #1, plus docs/approval.md’s checklist. Student/peer feedback alone is not instructor approval. Later behavior changes need spec review before coding.
- Branch protection/application CI are not configured; these are instructions and review checks, not automatic enforcement. Automation is not a student prerequisite.
- Use short activities, plain language and concrete T-shirt examples. Let students explain brand, persuasion and visual choices. Keep claims honest; label demo content; never collect real payment/personal data or claim shared inventory/security from client-side checks.
- Disclose material AI help. Final handoff links issue/PR/live result, summarizes checks/limits, and names remaining decisions/blockers. Leave a clean checkout or explain remaining changes.
