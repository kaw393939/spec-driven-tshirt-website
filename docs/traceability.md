---
title: "Traceability matrix"
---

# Traceability matrix

Status: proposed. `—` means not yet implemented/executed, not missing evidence for a completed feature. Issues link from the [backlog](backlog.md); acceptance definitions live in [functional specs](../specs/functional.md) and [quality specs](../specs/non-functional.md).

| Requirement | AC / review | Issue | Planned tests / evidence | Implementation PR / commit | Execution result |
| --- | --- | --- | --- | --- | --- |
| PLAN-01 / EP-01 | Scope/persona/backlog approval | #2 | Human review | — | Pending |
| BRAND-01 / EP-01 | Brand and ethical claims approval | #3 | Human review | — | Pending |
| TECH-01 / ADR-001 | Architecture/contracts approval | #4 | Human review | — | Pending |
| QA-01 | Testability/traceability approval | #5 | Human review | — | Pending |
| GATE-01 | M0 checklist and exact-SHA approval | #1 | Approver record | — | Pending |
| US-01 / EP-02 | AC-01, AC-02 | #6 | U-01, I-01, E-01 | — | Not run |
| US-02 / EP-02 | AC-03, AC-04 | #7 | U-02, I-02, E-02 | — | Not run |
| US-03 / EP-03 | AC-05, AC-06 | #8 | U-03, I-03, E-03 | — | Not run |
| US-04 / EP-03 | AC-07, AC-08, AC-09 | #9 | U-04, I-04, E-04 | — | Not run |
| NFR-01 / EP-04 | Accessibility | #10 | Q-01 | — | Not run |
| NFR-02 / EP-04 | Security/privacy | #10 | Q-02 | — | Not run |
| NFR-03 / EP-04 | Layout/performance | #10 | Q-03 | — | Not run |
| NFR-04 / EP-04 | Transactions/retries | #10 | Q-04 | — | Not run |
| NFR-05 / EP-04 | Maintainability/traceability | #10 | Q-05 | — | Not run |
| US-05 | Deferred scope research | #11 | Future spec review | — | Deferred |

In each future implementation PR replace `—` with clickable PR/commit URLs, exact test paths/titles and evidence URLs; split rows when ACs have different evidence. Planning commits belong in review issues and the planning PR, not in the implementation column. Preserve superseded evidence/history and stable requirement IDs. A reviewer verifies both directions: each implementation change has a requirement; each completed AC has implementation and test evidence.

Documentation publishing: SITE-01–05 are tracked in [issue #13](https://github.com/kaw393939/spec-driven-tshirt-website/issues/13); this hosting exception does not satisfy application acceptance criteria or M0 approval.
