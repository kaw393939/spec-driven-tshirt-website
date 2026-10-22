---
title: "The shop rules"
permalink: /specs/
---

# The shop rules

These are the proposed rules for **one product with sizes**. The browser handles the shopping simulation; there is no backend.

- [What should happen?](functional.md) — five small shopper stories with checks.
- [What should work well?](non-functional.md) — keyboard, phone, privacy, and predictable behavior.
- [How do the pieces fit?](architecture.md) — HTML, CSS, JavaScript, and GitHub Pages.
- [What does JavaScript remember?](contracts.md) — a small reference for product and cart data.

> **A spec is a shared agreement.** “The cart is good” is vague. “Removing the last item shows an empty-cart message and a zero total” gives everyone the same result to check.
{: .callout .concept}

Start with [the worked example](../docs/example.md). Labels like AC-12 are bookmarks that connect the spec to an issue, commit, and check. [Earlier backend IDs are retired](../docs/changes.md); don’t reuse them.

Coding waits for [approval](../docs/approval.md).
