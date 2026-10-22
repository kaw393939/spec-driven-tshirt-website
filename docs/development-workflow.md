---
title: "How we work"
---

# How we work

We’ll work in small steps, check each other’s changes, and improve the plan as we learn. That is how we’ll practice **Agile**.

## One task, from idea to done

1. **Describe the need.** Create a GitHub **issue**: a task with a goal and a checklist.
2. **Agree on the rule.** Write or update the spec before coding. First, finish [our plan review](approval.md).
3. **Make a branch.** A branch is a separate place to work. Example: `feat/8-cart`.
4. **Save small changes.** A **commit** is a named checkpoint. Example: `feat: let shoppers remove a shirt (refs #8)`.
5. **Check the result.** Run the relevant tests and explain what passed or failed.
6. **Open a pull request (PR).** Ask someone to review the changes before merging them into the shared branch.
7. **Close the loop.** Link the spec, issue, commit, and test results. Close the task when its checks are met.

> **AI aside · You’re still the reviewer.** Ask me to explain a change, challenge an assumption, or show test evidence. An AI-written answer is a draft, not proof that the work is correct.
{: .callout .ai}

## Atomic commits

**One commit is one small change you can explain and undo on its own.** Its code, directly related tests, and necessary docs can travel together. A separate feature or unrelated cleanup belongs in another commit.

Every non-bootstrap commit links to its primary issue. Put requirement IDs and the source document in the body. Here is a **future example**, after coding is approved:

```text
feat(cart): reject invalid quantities (refs #8)

Requirements: US-03, AC-05
Spec: specs/functional.md#us-03--manage-a-cart
```

Before committing, inspect the diff and stage only your files or selected lines. `git diff --cached --check` finds whitespace problems; it does not prove the feature works.

> **AI aside · Ask what belongs together.** If I mix a cart fix, a color redesign, and a README rewrite into one commit, ask me to split it. You should be able to see why each change exists.
{: .callout .ai}

## Leave a trail someone can follow

In the issue and PR, link the **spec section → issue → changed files and commit URLs → PR → real check results**. Update [connecting the dots](traceability.md) when the mapping changes. The PR template has a small table for this.

Record actual test commands, test IDs, results and the checked version. For docs-only work, record document and link checks. Add final commit/build links in the PR or issue after committing; a file does not need to record its own hash.

Use `refs #N` for ongoing work. Use `Closes #N` only when the whole task is done; verify closure because GitHub handles automatic closing differently for non-default target branches.

**Starting as a new agent?** Read [the root AGENTS.md](https://github.com/kaw393939/spec-driven-tshirt-website/blob/main/AGENTS.md). It explains the reading order, branch choice, approval rules and handoff checklist. The full plan is currently on `docs/1-planning-baseline`, pending PR #12; verify this state before starting.

## Keep the rhythm simple

After plan approval, try one-week work cycles: choose a small goal, share progress and blockers, show what works, and discuss what to improve. Work on one story at a time. Review the [task list](backlog.md) each week.

**Ready to start:** the requirement is clear, its checks are written, and its dependencies are finished.

**Done:** the agreed checks pass, someone reviews the PR, and docs and links are updated. Document reviews need human feedback; application tasks need actual test results.

## A few practical rules

Use `docs/`, `feat/`, `fix/`, or `test/` plus the issue number for branches. Labels show planning/feature/quality, priority, and blocked/review status. Don’t start blocked tasks. Keep passwords and personal information out of commits and AI prompts; explain material AI help in PRs.

GitHub Pages publishes these docs automatically. Human approval is currently a team rule; branch protection and application test automation are not configured. Before the first code PR, check available repository controls and set up PR review, no force pushes, and required checks when they exist. Record unavailable controls honestly. A solo owner records signoff in issue #1.

**Learn more:** [GitHub’s guide to branches, commits, and pull requests](https://docs.github.com/en/get-started/using-github/github-flow).
