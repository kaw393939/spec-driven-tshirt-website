---
title: "05 \u00b7 Write a spec someone can build"
step: 5
---

# Turn a design choice into an agreement.

**Your task:** take one part of your chosen composition and write what another person or AI needs to build it.

**Why:** “make it look creative” leaves the decision to the generator. A spec connects your intention to visible choices and behavior.

## Start with the design, not the cart

Finish the [brand brief](brand-strategy.md), [two directions and critique](visual-design.md), and [persuasion annotations](persuasion.md) first. Then choose one part of the page, such as the opening section.

Copy this into a [GitHub issue](https://github.com/kaw393939/spec-driven-tshirt-website/issues/new/choose):

```text
Audience and brand intention:
Chosen design/sketch link:
Archetype + visual/persuasion choice and reason:
What appears (copy, image, type, spacing, order):
What happens when someone interacts:
Three checks a classmate can try:
1.
2.
3.
Peer question:
My revision or reason for keeping the choice:
Spec section and stable requirement IDs:
```

[See an annotated example](example.md). A sketch can express visual intent; written checks clarify content, layout, and behavior. Use both.

> **Ask AI:** “Read my brief and sketch. What would you have to guess? Ask up to three questions. Do not write code yet.”
{: .callout .ai}

## Review together

A peer looks for one unclear decision. Update the shared spec, not just a private conversation. The instructor reviews the plan [before storefront coding](approval.md).

After approval, ask AI for one bounded change, inspect its diff, make an [atomic commit](development-workflow.md#atomic-commits), and attach actual check results. Keep the selected design visible as the reference.

**You’re done when:** someone can explain the brand intention, build this small part without guessing its key choices, and repeat your checks.

**Next:** [06 · See the server and browser at work →](browser-lab.md)
