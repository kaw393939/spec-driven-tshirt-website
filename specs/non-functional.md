---
title: "What \u201cworks well\u201d means"
---

# What “works well” means

A feature can technically work and still be frustrating to use. These **quality requirements** describe how well the shop should work. Their short label is **NFR**.

- **NFR-01 · Accessible:** people can shop using a keyboard or screen reader.
- **NFR-02 · Safe:** the server checks prices and requests, protects orders, and avoids leaking private data.
- **NFR-03 · Usable on phones:** pages fit small screens and load within our agreed speed limits.
- **NFR-04 · Dependable:** failures don’t corrupt orders, and two buyers can’t both get the last shirt.
- **NFR-05 · Understandable:** code has clear responsibilities, and finished work links back to its rules and tests.

> **Example · A real check** Try the checkout without a mouse. Can you reach every field, see where focus is, and understand an error? That’s more useful than saying “make it accessible.”
{: .callout .concept}

[Start with W3C’s accessibility guide](https://www.w3.org/WAI/fundamentals/accessibility-intro/). The detailed checklist below retains our exact targets, including WCAG 2.2 AA, performance limits, and security checks. We have not met or tested them yet.

<details markdown="1">
<summary>Optional: measurable quality targets and checks</summary>

| ID | Acceptance requirement | Verification |
| --- | --- | --- |
| NFR-01 Accessibility | Target WCAG 2.2 AA across catalog, detail, cart and checkout. Keyboard-only completion, visible/unobscured focus, named controls, error associations and announced cart updates. No unresolved A/AA failures in reviewed journeys. | Q-01: automated accessibility scan plus manual keyboard, zoom/reflow, contrast and screen-reader checks; automation alone is insufficient. |
| NFR-02 Security/privacy | Server validates inputs/prices/ownership; cookie is HttpOnly, Secure on HTTPS and SameSite=Lax; validate Origin on mutations. No credentials, card data or real customer data in repo/logs. Checkout limited to 10 submissions/minute/session (429 thereafter). Unauthorized order access returns 404. | Q-02: negative integration tests for forged prices, cross-session access, cross-origin mutations, injection strings, limiter boundary, and secret/log review. |
| NFR-03 Responsive performance | Core flows at 360px, 768px and 1440px without horizontal overflow. On a documented production build, seeded catalog of 12 products: median of 3 cold mobile Lighthouse runs has LCP ≤2.5s and CLS ≤0.1; initial catalog JS ≤200 KiB gzip. | Q-03: save tool/browser versions, throttling settings, machine/build and raw reports. Budget miss requires remediation or explicit spec change. |
| NFR-04 Reliability | Transaction rollback preserves order/inventory consistency; no overselling under two concurrent last-unit purchases; 24-hour retry window creates at most one order per key/cart. User-visible errors offer recovery. | Q-04: concurrent and failure-injection integration tests against isolated PostgreSQL. |
| NFR-05 Maintainability/traceability | Module boundaries respected; every completed AC/NFR links to issue, PR, implementation commit and evidence. No unresolved critical/high security findings; dependency findings reviewed for each release. | Q-05: human architecture/traceability review plus typecheck, lint, dependency audit and required test results. |

The accessibility target refers to [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/). This is a planned verification scope, not a present conformance claim. No availability SLA is promised for an educational local demo.

</details>
