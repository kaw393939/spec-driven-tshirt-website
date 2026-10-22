# Product plan

Status: proposed. Owner/approver: repository owner or designated instructor.

## Purpose and boundaries

Teach specification-driven development by delivering a coherent, accessible T-shirt shopping journey and a reviewable engineering history. Documentation quality and reproducible acceptance evidence are learning outcomes alongside a functioning demo.

MVP: guest catalog, size/color filtering, product detail and size guide, variant inventory, persistent cart, sandbox checkout and confirmation. USD only, US demo addresses, seeded fictional catalog, no real money, shipping, tax collection or customer data. Use synthetic details in the demo. Display this limitation throughout checkout.

Excluded: real payment providers, fulfillment, admin portal, customer accounts, reviews, coupons, personalization, analytics tracking, internationalization and production deployment. Any expansion needs a reviewed spec change.

## Personas (hypotheses; not interview findings)

| Persona | Goal / context | Friction | Design response |
| --- | --- | --- | --- |
| Maya, creative student, 20 | Express identity on a phone within a clear budget | Unclear fit, hidden costs, heavy pages | Measurements, visible total, responsive catalog |
| Jordan, early-career maker, 28 | Quickly find a wearable graphic and correct size | Inconsistent variants and stock | Combined filters, explicit size/color availability |
| Alex, keyboard and screen-reader shopper, 24 | Independently compare and order | Unlabeled controls, lost focus, silent updates | Semantic forms, focus management and announcements |
| Instructor/reviewer | Evaluate reasoning and acceptance evidence | Untraceable AI output and vague requirements | Approval record, issue/AC/test links and PR review |

Validate shopping assumptions with three representative usability sessions after M0; record findings without claiming statistical significance. Revise specs before changing scope.

## Epics

| ID | Outcome | Stories / issue |
| --- | --- | --- |
| EP-01 | Approved and traceable plan | PLAN-01, BRAND-01, TECH-01, QA-01; #2–#5; gated by #1 |
| EP-02 | Find and choose a suitable T-shirt | US-01 / #6; US-02 / #7 |
| EP-03 | Confidently complete a demo purchase | US-03 / #8; US-04 / #9 |
| EP-04 | Verifiable quality and learning | NFR-01–05 / #10 |

Epics are planning groupings; create dedicated epic tracker issues if multiple teams later need rollups.

## Success measures

All MVP ACs pass with linked evidence; all four guest journeys work at mobile and desktop sizes; no unresolved critical/high security or accessibility findings; every implemented requirement links to an issue, PR, commit and test evidence. Conversion targets await research and are not fabricated.
