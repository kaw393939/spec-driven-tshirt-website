# Prioritized product backlog

Status: proposed. Ordered by rank; P0 is the approval foundation, P1 the MVP, P2 deferred. Story points (SP) are relative estimates to revisit with the team, not day commitments. All issues are open at initialization.

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
