---
title: "What we build first"
---

# What we build first

A **backlog** is the work in order. **P0** means decide/review first; **P1** means part of this version. We don’t need story-point estimates for this introductory assignment.

## M0 · Agree on the plan

Write [your first spec](activity.md), complete [brand choices #21](https://github.com/kaw393939/spec-driven-tshirt-website/issues/21), and review scope #2, brand #3, technology #4, and checks #5. The owner/instructor records approval in [#1](https://github.com/kaw393939/spec-driven-tshirt-website/issues/1) for the exact reviewed version before coding.

## After approval: one small feature at a time

| Order | Task | Waits for | Checks |
| --- | --- | --- | --- |
| 1 | [#22: one product page](https://github.com/kaw393939/spec-driven-tshirt-website/issues/22) · US-06 | M0 | AC-10–11 |
| 2 | [#23: size selection](https://github.com/kaw393939/spec-driven-tshirt-website/issues/23) · US-07 | #22 | AC-12–13 |
| 3 | [#24: cart](https://github.com/kaw393939/spec-driven-tshirt-website/issues/24) · US-08 | #23 | AC-14–16 |
| 4 | [#25: pretend purchase](https://github.com/kaw393939/spec-driven-tshirt-website/issues/25) · US-09 | #24 | AC-17–19 |
| 5 | [#26: discovery and promotion](https://github.com/kaw393939/spec-driven-tshirt-website/issues/26) · US-10 | #22, brand #21 | AC-20–22 |
| 6 | [#27: check the whole demo](https://github.com/kaw393939/spec-driven-tshirt-website/issues/27) | #22–#26 | NFR-06–09 |

Plan marketing before coding; its final page checks can run once the product page exists. Quality checks happen with every feature, then together at the end.

M1 covers the product page, sizes, and cart (#22–#24). M2 covers pretend checkout, discovery, and final checks (#25–#27). All storefront tasks are P1 and blocked by #1; no dates or effort estimates are promised.

EP-05 is brand/spec decisions; EP-06 is shopping behavior; EP-07 is discovery and checking. The earlier catalog/backend tasks #6–#11 are **superseded, not completed**; [see history](changes.md).
