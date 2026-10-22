---
title: "Example: choose a size"
---

# Example: choose a size

This is a **worked spec**, not a finished feature. It uses [US-07 / AC-12–13](../specs/functional.md#us-07--choose-a-size), tracked in [issue #23](https://github.com/kaw393939/spec-driven-tshirt-website/issues/23).

## 1. A shopper’s need

“I want to know which sizes are available before adding the shirt.”

## 2. Our design decision

Use labeled size buttons and show the measurements nearby. For our example brand, an orderly layout supports a clear, practical voice. Another brand may make different visual choices, but the controls still need to be readable.

## 3. The rule

Do not select a size automatically. Only an available size can be added. If the shopper tries without a size, show “Choose a size first” and leave the cart unchanged.

## 4. Three checks

- **CHECK-03:** choose an available size, add it, and confirm the cart shows that size.
- **CHECK-04a:** try adding without a size; confirm the helpful message and unchanged cart.
- **CHECK-04b:** try a size marked unavailable; confirm it cannot be added.

> **A classmate asks:** “How will I know which size I picked?”
>
> **Our revision:** show the selected size in text and the control state. Don’t use color alone. This is a sample peer exchange, not evidence of a real student review.
{: .callout .concept}

## 5. After approval, ask AI for one change

“Read AGENTS.md and US-07. Implement only size selection for issue #23. Explain your plan, then show the change and check results.”

A future commit could be:

```text
feat: require an available size (refs #23)

Requirements: US-07, AC-12, AC-13
Spec: specs/functional.md#us-07--choose-a-size
```

## 6. Show the evidence

The issue and PR will link the spec, changed files, commit, and results for CHECK-03/04. Right now those code and result links are **not available: the feature is not built**.

**Your turn:** write the cart’s “remove item” rule using the same steps.
