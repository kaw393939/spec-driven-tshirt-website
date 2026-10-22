# Start here, agents

This is an educational T-shirt shop project. Help beginners understand decisions, keep work small, and leave links that another person can follow.

## 1. Check the current state

- Repository: `kaw393939/spec-driven-tshirt-website` (public).
- **Planning is pending approval. Do not implement the shop, install application dependencies, scaffold application code, or deploy an application before M0 passes.**
- Documentation, its GitHub Pages site, and the footer-only placeholder homepage are authorized before M0. They do not approve the shop.
- At this handoff, the full plan and Pages source are on `docs/1-planning-baseline`; [PR #12](https://github.com/kaw393939/spec-driven-tshirt-website/pull/12) proposes merging the plan into `main`. `main` has bootstrap/onboarding material. Verify branches, Pages settings, [approval issue #1](https://github.com/kaw393939/spec-driven-tshirt-website/issues/1), and milestones before relying on this snapshot.
- Start with `git status --short --branch`. Preserve other people's changes; do not reset, clean, force-push, or overwrite unrelated work.

If this clone is on `main` and the docs are absent, fetch the remote and read the planning branch or the [live hub](https://kaw393939.github.io/spec-driven-tshirt-website/docs/). Base documentation changes on the current Pages source branch. Do not merge PR #12 merely to get the files.

## 2. Read only what you need, in this order

1. `README.md` and `docs/README.md`: project and beginner reading path.
2. `docs/approval.md`: what is allowed and who approves it.
3. The assigned GitHub issue: goal, acceptance checks, priority, dependencies.
4. `docs/development-workflow.md` and `docs/traceability.md`: process and evidence.
5. Relevant specs in `specs/`, plus `docs/brand-strategy.md` for design/copy and `docs/testing-strategy.md` for checks.

Documents define intended behavior. Issues track work. PRs and test results show what actually happened. If they disagree, resolve the difference explicitly before implementation; never silently invent a requirement. Personas, brand and architecture remain proposals until approved.

## 3. Use one issue-focused branch

- Find an existing issue or create one with a clear goal, stable requirement/check IDs, and dependencies before editing.
- Use `docs/<issue>-<slug>`, `feat/<issue>-<slug>`, `fix/<issue>-<slug>`, or `test/<issue>-<slug>`.
- While M0 is pending, documentation PRs normally target `docs/1-planning-baseline`. A small onboarding-only PR may target `main`; it must not import or approve the planning baseline.
- After the plan is approved and merged, use `main` as the normal base and switch Pages to `main`. Verify the actual state instead of assuming this transition happened.
- Respect blocked tasks. Use the ordered backlog and milestone dependencies; work on one story at a time.

## 4. Make atomic, traceable commits

**One commit = one explainable change for one primary issue.** Code, its directly related tests, and its necessary docs may belong together. Split unrelated fixes, formatting, or features. Each commit should be safe to review or revert on its own.

Before committing, inspect the diff and stage specific files or hunks. Do not sweep another person's work into your commit. Run relevant checks; `git diff --cached --check` checks whitespace, not correctness.

Every non-bootstrap commit must reference its issue in the subject and name the affected requirement/check IDs and source document in the body. Example for future application work, after approval:

```text
feat(cart): reject invalid quantities (refs #8)

Requirements: US-03, AC-05
Spec: specs/functional.md#us-03--manage-a-cart
```

For process/documentation work, use its issue acceptance IDs, such as `PROCESS-01`, and the relevant document path. Record actual verification in the PR/issue; do not claim tests ran just because their IDs appear in a commit.

Keep IDs stable. Proposed behavior changes need spec review before coding. Use `refs #N` while work is in progress; use `Closes #N` only on a PR that fully satisfies the issue. GitHub automatic closing depends on the target branch, so verify the issue state after merging.

## 5. Close the traceability loop

For each completed requirement, provide clickable links from the issue/PR to:

- The spec section and requirement/acceptance IDs.
- The changed file paths and the actual commit SHA(s).
- The PR and its review/decision.
- The test IDs, exact test paths/titles and real results; or document/link checks for docs-only work.

Update `docs/traceability.md` in the same change when its mapping changes. Keep application rows unimplemented until code and evidence exist. Record final commit/build SHAs and results in the PR/issue after commit; do not create endless commits just to insert a file's own hash. Keep earlier evidence and distinguish it from current results.

Use `.github/PULL_REQUEST_TEMPLATE.md`. Before closing an issue, verify its checks, links and dependencies. Never treat a docs-only PR as implementation of an application story.

## 6. Verify and hand off honestly

- No application test suite exists at this handoff. After approval, follow the testing strategy: meaningful unit, integration and browser tests tied to acceptance criteria. Report unrun tests as unrun.
- For docs/site changes: validate front matter, relative links, stable IDs and whitespace; let Pages build; check the published pages and links. Check rendering/accessibility when tools are available and state any verification limits.
- Keep the homepage footer-only unless the user changes that requirement. Preserve the `/spec-driven-tshirt-website` base path and use existing Markdown as the docs source.
- M0 requires a human decision for the exact final reviewed SHA, recorded in issue #1, plus the checklist in `docs/approval.md`. Never invent approvals, research, product claims, reviews, tests or evidence.
- Branch protection and application CI are not configured at this handoff. These instructions and templates are review rules, not automatic enforcement. Verify/configure available controls before application work as described in the workflow.
- Write in plain language. Explain new terms, use T-shirt examples, and label AI asides. Keep secrets and personal data out of prompts, logs, fixtures and commits. Disclose material AI assistance in PRs.
- Final handoff: say what changed, link the issue/PR and live result, report checks and limitations, and name any remaining blocker. Leave the checkout clean or explain exactly what remains.
