# Quality specification

Status: proposed; issue #10. Each requirement applies to relevant feature PRs.

| ID | Acceptance requirement | Verification |
| --- | --- | --- |
| NFR-01 Accessibility | Target WCAG 2.2 AA across catalog, detail, cart and checkout. Keyboard-only completion, visible/unobscured focus, named controls, error associations and announced cart updates. No unresolved A/AA failures in reviewed journeys. | Q-01: automated accessibility scan plus manual keyboard, zoom/reflow, contrast and screen-reader checks; automation alone is insufficient. |
| NFR-02 Security/privacy | Server validates inputs/prices/ownership; cookie is HttpOnly, Secure on HTTPS and SameSite=Lax; validate Origin on mutations. No credentials, card data or real customer data in repo/logs. Checkout limited to 10 submissions/minute/session (429 thereafter). Unauthorized order access returns 404. | Q-02: negative integration tests for forged prices, cross-session access, cross-origin mutations, injection strings, limiter boundary, and secret/log review. |
| NFR-03 Responsive performance | Core flows at 360px, 768px and 1440px without horizontal overflow. On a documented production build, seeded catalog of 12 products: median of 3 cold mobile Lighthouse runs has LCP ≤2.5s and CLS ≤0.1; initial catalog JS ≤200 KiB gzip. | Q-03: save tool/browser versions, throttling settings, machine/build and raw reports. Budget miss requires remediation or explicit spec change. |
| NFR-04 Reliability | Transaction rollback preserves order/inventory consistency; no overselling under two concurrent last-unit purchases; 24-hour retry window creates at most one order per key/cart. User-visible errors offer recovery. | Q-04: concurrent and failure-injection integration tests against isolated PostgreSQL. |
| NFR-05 Maintainability/traceability | Module boundaries respected; every completed AC/NFR links to issue, PR, implementation commit and evidence. No unresolved critical/high security findings; dependency findings reviewed for each release. | Q-05: human architecture/traceability review plus typecheck, lint, dependency audit and required test results. |

The accessibility target refers to [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/). This is a planned verification scope, not a present conformance claim. No availability SLA is promised for an educational local demo.
