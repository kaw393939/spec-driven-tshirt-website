---
title: "Testing strategy"
---

# Testing strategy

Status: proposed; QA-01 / #5. **All tests below are planned and unimplemented.** No application test runs or passing results are claimed.

## Layers and cases

| Test ID | Layer / acceptance | Essential cases |
| --- | --- | --- |
| U-01 / I-01 / E-01 | Unit filter policy / catalog DB+HTTP / browser; AC-01–02 | Active cards, same-variant AND filters, clear, empty, loading and retry |
| U-02 / I-02 / E-02 | Unit variant policy / detail+cart HTTP / browser; AC-03–04 | Size guide, nonexistent/inactive product, missing/zero-stock combination and valid add |
| U-03 / I-03 / E-03 | Unit quantity/money / persistent cart HTTP+DB / browser; AC-05–06 | Quantities 0,1,10,11,fraction; merge/remove; integer totals; expired vs retained cart; tampered prices, stale versions, changed-price acknowledgment, stock correction |
| U-04 / I-04 / E-04 | Unit validation/quote / transactional checkout / browser; AC-07–09 | Invalid contact/state/ZIP, empty/stale cart, explicit consent, zero-cost demo totals, success/decline, expired quote, price/stock race, rollback, identical retry, changed-key payload, unauthorized confirmation |
| Q-01 | Accessibility automated + manual; NFR-01 | Named controls, keyboard flow, screen-reader announcements, contrast, focus, 200% zoom and reflow |
| Q-02 | Security integration + review; NFR-02 | Forged prices, cross-session access, Origin rejection, injection strings, cookie flags, redaction, 10/minute boundary and recovery |
| Q-03 | Browser/layout/performance; NFR-03 | All three widths, three cold production-build runs and gzip JS measurement |
| Q-04 | Real DB concurrency/failure injection; NFR-04 | Two sessions buy last unit; concurrent identical/different-key retries; transaction rollback |
| Q-05 | CI + human review; NFR-05 | Module boundaries, typecheck/lint/audit, traceability completeness and release findings |

Unit tests target meaningful pure rules. Integration tests use isolated real PostgreSQL with migrations and deterministic fixtures; reset state per test and freeze time for quote/cart expiry. Mock the PaymentPort at the adapter boundary, not persistence or transaction behavior. E2E uses a running application, isolated seed and browser sessions. Include catalog failure recovery and checkout decline/retry journeys, not just success.

## Proposed tools and execution policy

After M0, choose pinned Vitest (unit/integration), Playwright (E2E), axe-core (automated accessibility) and Lighthouse (performance). These are proposals; no packages, configuration or workflows are installed during initialization.

On each future PR: typecheck/lint, affected unit/integration tests, and affected E2E smoke journeys. Before M2 acceptance: full suite, production-build performance check, manual accessibility review, dependency/security review and traceability audit. Run Chromium journeys plus Firefox/WebKit smoke checks for the four primary flows. Record real browser versions. Set meaningful coverage thresholds after the first module; no arbitrary percentage replaces boundary and failure testing.

## Evidence and acceptance

For each test ID, store test path and exact test title, command/tool version, environment/build SHA, result and CI/artifact URL in the issue/PR and traceability matrix. Manual evidence records reviewer, date, steps and findings. Redact personal information. A rerun needs new evidence; never equate planned test IDs with executed tests.

M0 validation is document review, link/identifier consistency and confirmation that no application scaffold exists. Application acceptance remains unverified until implementation and real tests exist.
