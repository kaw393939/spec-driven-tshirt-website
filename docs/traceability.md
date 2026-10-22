---
title: "Follow the evidence"
---

# Follow the evidence

**Can you show where this change came from?** Follow the spec to an issue, a focused commit, a PR, and a check result. That is traceability.

## Start with a creative decision

Audience → brand meaning → visual/copy choice → reviewed sketch/spec → issue → commit/PR → critique and repeatable check. For example, an expressive Creator composition affects the opening section in #22; a peer’s difficulty finding the price leads to a recorded visual revision.

BR-01–03 are defined in [brand](brand-strategy.md)/[persuasion](persuasion.md); BR-04–05 in [visual design](visual-design.md). WEB-01–03 are defined in [the browser lab](browser-lab.md) and tracked by [#31](https://github.com/kaw393939/spec-driven-tshirt-website/issues/31). No completed student work is claimed.

## A future example

[US-07 / AC-12–13](../specs/functional.md#us-07--choose-a-size) → [issue #23](https://github.com/kaw393939/spec-driven-tshirt-website/issues/23) → future size-selection commit and PR → CHECK-03/04 results.

The commit and results don’t exist yet. [The worked example](example.md) shows what to write without pretending the code is done.

## Current plan

| Rules | Issue | Planned checks | Code / results |
| --- | --- | --- | --- |
| BR-01–05 | [#21](https://github.com/kaw393939/spec-driven-tshirt-website/issues/21) | Brand brief, two directions, persuasion, critique/revision | Student decisions pending |
| US-06 / AC-10–11 | [#22](https://github.com/kaw393939/spec-driven-tshirt-website/issues/22) | CHECK-01–02 | Not built / not run |
| US-07 / AC-12–13 | [#23](https://github.com/kaw393939/spec-driven-tshirt-website/issues/23) | CHECK-03–04 | Not built / not run |
| US-08 / AC-14–16 | [#24](https://github.com/kaw393939/spec-driven-tshirt-website/issues/24) | CHECK-05–07 | Not built / not run |
| US-09 / AC-17–19 | [#25](https://github.com/kaw393939/spec-driven-tshirt-website/issues/25) | CHECK-08–10 | Not built / not run |
| US-10 / AC-20–22 | [#26](https://github.com/kaw393939/spec-driven-tshirt-website/issues/26) | CHECK-11–13 | Not built / not run |
| NFR-06–09 | [#27](https://github.com/kaw393939/spec-driven-tshirt-website/issues/27) | CHECK-14–17 | Not built / not run |
| WEB-01–03 | [#31](https://github.com/kaw393939/spec-driven-tshirt-website/issues/31) | Network/DOM/reload explanation | Student evidence pending |

[How to run these checks](testing-strategy.md). PLAN-01 (#2), BRAND-01 (#3), TECH-01 (#4), QA-01 (#5), and GATE-01 (#1) remain pending human review. ADR-002 is part of #4; RESET-01–05 are tracked in [#20](https://github.com/kaw393939/spec-driven-tshirt-website/issues/20).

## When work is finished

Replace “not built/not run” with links to the code/files, actual atomic commit, PR, and evidence in the same feature change. Split rows if checks have different results. Record final version hashes in the issue/PR after committing. Never fill a missing link with invented evidence.

> **AI aside · Follow my claim.** If I say “done,” ask me to show the rule, change, and repeatable result.
{: .callout .ai}

## A real documentation example

[Issue #15](https://github.com/kaw393939/spec-driven-tshirt-website/issues/15) → [PR #16](https://github.com/kaw393939/spec-driven-tshirt-website/pull/16) → [content commit](https://github.com/kaw393939/spec-driven-tshirt-website/commit/becf1653d79425e08d430c49356c06274fee1ed9) and [style commit](https://github.com/kaw393939/spec-driven-tshirt-website/commit/474db627c4d5ecc6144677bf278651f93b0249e3) → [Pages result](https://github.com/kaw393939/spec-driven-tshirt-website/actions/runs/39789989319).

Those checks verified the earlier docs, not shopping code. [Issue #17](https://github.com/kaw393939/spec-driven-tshirt-website/issues/17) records the agent/process guide. [What changed](changes.md) explains retired IDs. Use [the atomic commit workflow](development-workflow.md#atomic-commits) and [AGENTS.md](https://github.com/kaw393939/spec-driven-tshirt-website/blob/main/AGENTS.md).
