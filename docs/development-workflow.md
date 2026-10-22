---
title: "How we work with AI"
---

# How we work with AI

**Find the meaning → design → critique → specify → build → explain.** Keep the decisions somewhere your classmates can see them.

## One feature at a time

1. **Start with the brand/design.** Read [the brief](product-plan.md); create and critique two [visual directions](visual-design.md) before feature work.
2. **Write the need.** Open an issue with a spec link and checks. [Use this short activity](activity.md).
3. **Get a question.** A classmate finds one unclear part. Record their question and your decision in the issue; update the spec.
4. **Review before code.** Complete [M0 approval](approval.md). Later behavior changes also need agreement on the changed spec first.
5. **Ask AI for one change.** Name the issue and rule IDs. Ask it to explain the plan and stay within scope.
6. **Inspect and check.** Review the diff, try the checks, and say what actually happened.
7. **Open a PR.** Link the spec, issue, changed files, commits and results. Review it before merging; close the issue only when its checks are met.

> **AI aside · You don’t need to accept my first answer.** Ask “What did you assume?” or “Show me where this change meets the spec.” Put the final choice in the shared record.
{: .callout .ai}

## Atomic commits

**One commit = one explainable change you can undo on its own.** Its code, necessary docs, and directly related checks may belong together. Don’t mix a size-selector change with an unrelated redesign.

Future example, after approval:

```text
feat: require an available size (refs #23)

Requirements: US-07, AC-12, AC-13
Spec: specs/functional.md#us-07--choose-a-size
```

Inspect the diff and stage only the files/lines for that change. Each authored change commit references its primary issue, rule IDs, and spec path. Merge commits keep the PR link and issue reference. Use `refs #N` while working; `Closes #N` only when the PR fully meets the task. Check closure after merging, especially on a non-default branch.

## Keep the trail small and useful

**Spec → issue → commit and PR → result.** Put actual links in the issue/PR and update [traceability](traceability.md) when mappings change. Final hashes belong in the issue/PR after committing, not an endless series of self-referencing document edits.

A good handoff says: what changed, why, what was checked, what was not checked, and where to look. Disclose AI assistance. Don’t share secrets or personal information.

## Branches and the current review

Use `docs/<issue>-<name>` or, after approval, `feat/<issue>-<name>`. The full plan and live Pages source are currently `docs/1-planning-baseline`, pending PR #12. Small onboarding-only changes may target `main`. After M0 approval/merge, switch Pages and normal feature work to `main`; verify settings rather than assuming.

[AGENTS.md](https://github.com/kaw393939/spec-driven-tshirt-website/blob/main/AGENTS.md) gives new agents the standing instructions. These are team rules, not automatic enforcement. Application CI/branch protection are not configured. The instructor can add a lightweight PR-review rule; no automation setup is a student prerequisite.

**Learn more:** [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow).
