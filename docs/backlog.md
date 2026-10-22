---
title: "What we build first"
---

# What we build first

A **backlog** is our task list in priority order. Each GitHub issue is a place to discuss a task and record its checks.

## Our three checkpoints

1. **Agree on the plan (M0).** Review scope [#2](https://github.com/kaw393939/spec-driven-tshirt-website/issues/2), brand [#3](https://github.com/kaw393939/spec-driven-tshirt-website/issues/3), technology [#4](https://github.com/kaw393939/spec-driven-tshirt-website/issues/4), and tests [#5](https://github.com/kaw393939/spec-driven-tshirt-website/issues/5). Record approval in [#1](https://github.com/kaw393939/spec-driven-tshirt-website/issues/1).
2. **Find a shirt and use a cart (M1).** Browse [#6](https://github.com/kaw393939/spec-driven-tshirt-website/issues/6) → choose a size/color [#7](https://github.com/kaw393939/spec-driven-tshirt-website/issues/7) → manage the cart [#8](https://github.com/kaw393939/spec-driven-tshirt-website/issues/8).
3. **Try checkout and check the whole shop (M2).** Pretend order [#9](https://github.com/kaw393939/spec-driven-tshirt-website/issues/9), then release checks [#10](https://github.com/kaw393939/spec-driven-tshirt-website/issues/10). Quality checks also happen as we build each feature.

Accounts, reviews, and promotions stay in [the later list (#11)](https://github.com/kaw393939/spec-driven-tshirt-website/issues/11). Coding tasks are blocked until M0 approval.

> **New term · Dependency** Something that must happen first. We need a cart before we can check out. That’s why task #9 waits for #8.
{: .callout .concept}

The detailed list below keeps our original priorities and estimates. **P0** means first, **P1** means needed for this version, and **P2** means later. **Story points** compare effort; they are not hours or deadlines.

<details markdown="1">
<summary>Optional: priorities, estimates, and dependencies</summary>

| Rank | Item / issue | Epic | Priority / SP | Milestone | Dependencies | Acceptance source |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | [PLAN-01 #2](https://github.com/kaw393939/spec-driven-tshirt-website/issues/2) scope and backlog review | EP-01 | P0 / 2 | M0 | None | product-plan.md, this backlog |
| 2 | [BRAND-01 #3](https://github.com/kaw393939/spec-driven-tshirt-website/issues/3) brand review | EP-01 | P0 / 2 | M0 | #2 | brand-strategy.md |
| 3 | [TECH-01 #4](https://github.com/kaw393939/spec-driven-tshirt-website/issues/4) architecture review | EP-01 | P0 / 3 | M0 | #2 | architecture and contracts |
| 4 | [QA-01 #5](https://github.com/kaw393939/spec-driven-tshirt-website/issues/5) acceptance and test review | EP-01 | P0 / 2 | M0 | #2–#4 | functional, NFR, testing, traceability |
| 5 | [GATE-01 #1](https://github.com/kaw393939/spec-driven-tshirt-website/issues/1) human approval | EP-01 | P0 / 1 | M0 | #2–#5 | approval.md checklist |
| 6 | [US-01 #6](https://github.com/kaw393939/spec-driven-tshirt-website/issues/6) browse/filter | EP-02 | P1 / 3 | M1 | #1 | AC-01–02 |
| 7 | [US-02 #7](https://github.com/kaw393939/spec-driven-tshirt-website/issues/7) inspect/select | EP-02 | P1 / 3 | M1 | #1, #6 | AC-03–04 |
| 8 | [US-03 #8](https://github.com/kaw393939/spec-driven-tshirt-website/issues/8) persistent cart | EP-03 | P1 / 5 | M1 | #1, #7 | AC-05–06 |
| 9 | [US-04 #9](https://github.com/kaw393939/spec-driven-tshirt-website/issues/9) sandbox order | EP-03 | P1 / 8 | M2 | #1, #8 | AC-07–09 |
| 10 | [NFR #10](https://github.com/kaw393939/spec-driven-tshirt-website/issues/10) integrated release verification | EP-04 | P1 / 5 | M2 | #1, #6–#9 | NFR-01–05 |
| 11 | [US-05 #11](https://github.com/kaw393939/spec-driven-tshirt-website/issues/11) assess accounts/reviews/promotions | Future | P2 / unestimated | Unscheduled | #1, MVP accepted | Research/scope proposal only |

Quality requirements apply within every feature PR; #10 consolidates release evidence rather than deferring quality until the end. All application issues #6–#10 are blocked by #1. No sprint or due date is promised before approval and team capacity review.

M0 = documentation and specification approval. M1 = catalog/cart. M2 = sandbox checkout/release readiness. Completion order and dependencies take precedence over estimates.

</details>
