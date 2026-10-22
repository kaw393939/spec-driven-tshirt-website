---
title: "Worked example: meaning becomes a spec"
---

# From an idea to a checkable design.

This is a **fictional worked example**. It is not a required student brand, completed student work, or a finished storefront.

## 1 · Meaning

**Audience:** students who enjoy making things. **Archetype:** Creator. **Promise:** a white shirt as an everyday starting point for expression. Working headline: **“Make something of it.”** This is symbolic positioning, not a special fabric claim.

## 2 · Two directions, one brief

**A, modernist-inspired:** an aligned grid, restrained type, generous space, one large shirt image. The calm structure makes the blank starting point the focus.

**B, postmodernist-inspired:** layered “start here” text, mixed type, and a deliberately offset image. The experiment suggests making and play. Product facts stay the same.

We choose B for this example because we want experimentation to be visible. Another team can defend A or a combination.

## 3 · Persuasion

**Reciprocity:** a fit guide is available without signup. **Unity:** welcoming language speaks to people who enjoy making things. Neither invents popularity or claims everyone belongs to the same group.

## 4 · Critique and revision

A fictional peer says, “I notice the headline, but the price gets lost.” The revision keeps the expressive headline and moves the price to a predictable place beside the shirt. Actual students must record real critique.

## 5 · A small visual spec

**Intent:** playful expression with clear product information. **Reference:** the revised composition B.

- Use the exact headline above and the team’s documented type/color choices.
- Put the shirt image, price, and purchase link together; the purchase link leads to size controls.
- Preserve readable contrast and a logical heading order when the layout becomes one column on a phone.

**Try the checks:** compare the page with the sketch; ask a peer what personality they infer; locate price and size action at phone width. Record differences and revise the spec or implementation explicitly.

> **AI aside · A useful review has two questions.** “Does this match the agreed design?” and “Does the design communicate what we intended?” Passing one does not automatically answer the other.
{: .callout .ai}

## 6 · Connect design and behavior

The opening section belongs to [US-06 / AC-10–11, issue #22](../specs/functional.md#us-06--understand-the-product). Size selection then follows [US-07 / AC-12–13, issue #23](../specs/functional.md#us-07--choose-a-size): no size selected initially, only available sizes add, and errors leave the cart unchanged.

A **future** commit after approval could say:

```text
feat: express the reviewed Creator opening (refs #22)

Requirements: US-06, AC-10, AC-11, BR-02, BR-04, BR-05
Spec: specs/functional.md#us-06--understand-the-product
Design: link to the team’s reviewed composition in issue #21
```

Link the actual files/commit/PR/results after the work exists. None of this storefront implementation has been completed.

[Write your own spec →](activity.md)
