---
title: "Connecting the dots"
---

# Connecting the dots

**Traceability** means we can follow a requirement through the work. It helps us answer “Why did we build this?” and “How do we know it works?”

## One example

Shop rule **AC-05** says shoppers can change their cart. That rule points to [issue #8](https://github.com/kaw393939/spec-driven-tshirt-website/issues/8). Later, its pull request will link to the code change and the tests **U-03, I-03, and E-03**.

**Rule → issue → pull request and commit → test result.**

> **AI aside · Follow the links.** If I say a feature is done, you should be able to find the requirement, the change, and a real test result. If one is missing, ask me for it.
{: .callout .ai}

We haven’t built the shop yet. Dashes below mean “not implemented”; “not run” means exactly that. Keep requirement IDs stable and add real links as work is completed.

<details markdown="1">
<summary>Optional: full requirement-to-test checklist</summary>

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

</details>
