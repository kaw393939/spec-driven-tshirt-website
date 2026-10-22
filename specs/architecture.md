---
title: "How the pieces fit"
---

# How the pieces fit

**ADR-002 · Proposed decision: use HTML, CSS, and plain JavaScript on GitHub Pages.** No framework, backend, database, application API, or package installation is needed for this assignment.

## Three jobs

- **HTML:** product information, headings, links, labels, controls, and search/sharing metadata.
- **CSS:** brand appearance, layout, responsive behavior, and visible focus.
- **JavaScript:** selected size, cart quantities/totals, and the pretend-order result.

GitHub Pages serves those files. The browser displays them and runs JavaScript. No order is sent to a server.

> **Connect to class · Servers and REST** The browser still requests HTML, CSS, scripts, and images over HTTP. In a real store, an API might also provide product data and accept orders. Here we discuss that idea; we do not build an API or pretend local JavaScript is a REST service.
{: .callout .concept}

## A small planned structure

```text
index.html         # product page, after approval
assets/styles.css  # shop styling, after approval
assets/app.js      # shop behavior, after approval
assets/images/     # product and sharing images, after approval
```

These storefront files do not exist yet. The current index.html remains the footer-only placeholder, and assets/docs.css belongs to the documentation site. Keep docs assets separate from future shop assets.

Begin with functions for `addItem`, `setQuantity`, `removeItem`, `calculateTotal`, and `renderCart`. Test the money/quantity rules independently, then connect buttons and the page. Split JavaScript files only when it makes the code easier to explain.

**Tradeoff:** browser memory is simple, but refresh resets it and visitors can edit the data. That is appropriate for a labeled classroom simulation. Optional browser persistence needs a separate spec and safe handling of missing/corrupt data; no personal data should be stored.

See [the data notes](contracts.md). ADR-001 and the former server architecture are [retired](../docs/changes.md).
