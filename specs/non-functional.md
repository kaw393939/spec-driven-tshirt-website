---
title: "What \u201cworks well\u201d means"
---

# What “works well” means

These are quality checks for our browser-only demo. They are planned, not passed. Track the final review in [issue #27](https://github.com/kaw393939/spec-driven-tshirt-website/issues/27).

- **NFR-06 · Accessible:** finish the shopping journey with a keyboard, see focus, identify every control by its label, and understand errors/cart updates with a screen reader. Don’t use color alone. Check text contrast against WCAG AA guidance and reflow at 200% zoom. Use [MDN’s accessible HTML guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML). Record manual findings; this checklist alone is not a full WCAG conformance claim.
- **NFR-07 · Phone-friendly:** at 360px and 1280px widths, page content fits without horizontal page scrolling; controls remain usable and images stay within their containers. Record a screenshot at each width. Optimize images and check for missing/slow assets; a Lighthouse score is optional feedback, not a required target.
- **NFR-08 · Honest and predictable:** no backend, database, external checkout, tracking scripts, personal/payment fields, or shared-stock claims. JavaScript handles invalid quantities and both checkout scenarios without an uncaught error. Refresh starts fresh, as the spec states. Client-side data is editable and is not secure commerce infrastructure.
- **NFR-09 · Explainable:** keep HTML/CSS/JS responsibilities clear. Each completed story links its spec, issue, focused commit, PR and actual check results. Mark unrun checks honestly; include a peer question and the decision it led to.

> **Try it:** hand the page to a classmate. Can they choose a size, find the price, and explain what will happen when they click the order button?
{: .callout .concept}

[See CHECK-14–17](../docs/testing-strategy.md). The earlier server/security/performance requirements are retired, not silently relaxed; [history](../docs/changes.md).
