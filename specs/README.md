---
title: "The shop rules"
permalink: /specs/
---

# The shop rules

A spec tells us what to build. You can review the shopper experience without reading database tables or knowing a programming language.

## Start with behavior

- **[What the shop should do](functional.md):** browse → choose → cart → pretend checkout.
- **[What “works well” means](non-functional.md):** usable, safe, fast, and dependable.

## Then look under the hood

- **[How the pieces fit](architecture.md):** what the browser, server, and database each do.
- **[Data and request details](contracts.md):** the field names and messages future code will use. Optional on your first read.

> **Example · Make a rule testable** “The cart is good” is hard to check. “A quantity of zero shows an error and leaves the cart unchanged” gives us something we can try.
{: .callout .concept}

Labels such as **AC-05** are bookmarks for the team. They let us point to one exact rule in an issue or test. Keep them stable when editing. See the [glossary](../docs/learn.md) and [how we connect the work](../docs/traceability.md).

These rules are still proposals. [Review them before coding](../docs/approval.md).
