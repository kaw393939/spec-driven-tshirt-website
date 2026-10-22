---
title: "What the shop should do"
---

# What the shop should do

**One T-shirt. Size choices. Pretend purchases.** All behavior below runs in browser JavaScript after the plan is approved. These features are not built yet.

Start with the reviewed [brand and visual decisions](../docs/brand-strategy.md), [two compositions](../docs/visual-design.md), and [persuasion annotations](../docs/persuasion.md). The page must express that chosen direction; its shopping controls support it. BR-04–05 and WEB-01–03 supplement these unchanged shopper checks.

An **acceptance criterion (AC)** is a check we can try. Each one links to a planned check in [how we check our work](../docs/testing-strategy.md).

## US-06 — Understand the product

“I want to know what this shirt is and why it fits me.” [Issue #22](https://github.com/kaw393939/spec-driven-tshirt-website/issues/22).

- **AC-10:** The page shows one product’s name, benefit, image with useful alternative text, USD price, composition/care, and size measurements. A classmate can find the price and explain the product.
- **AC-11:** Product information is present in HTML without JavaScript. Internal links work, the purchase link reaches the size controls, and demo delivery/return information is clearly labeled fictional. Brand choices follow the reviewed BR-01–03 plan.

## US-07 — Choose a size

“I want to choose an available size before adding the shirt.” [Issue #23](https://github.com/kaw393939/spec-driven-tshirt-website/issues/23).

- **AC-12:** No size is selected initially. Choosing an available size shows which one is selected in words/control state, not just color. Add to cart uses that exact size.
- **AC-13:** Adding with no size or a simulated unavailable size shows a helpful, associated text message and leaves the cart unchanged. Unavailable sizes are visibly labeled and cannot be added.

## US-08 — Manage the cart

“I want to change my choices and understand the total.” [Issue #24](https://github.com/kaw393939/spec-driven-tshirt-website/issues/24).

- **AC-14:** The cart shows size, quantity, unit price, and line total. Adding the same size merges its quantity; different sizes have separate lines. Quantities are whole numbers 1–10 per size. Reject zero, negatives, fractions, non-numbers, or totals above 10 without changing the cart.
- **AC-15:** Update and Remove actions work. Totals equal quantity × price, calculated in integer cents and formatted in USD. Demo shipping and tax are zero and labeled simulated.
- **AC-16:** Removing the last item shows an empty-cart message, a zero total, and a route back to the product. Refresh resets the in-memory cart; persistence is optional, not required.

## US-09 — Try a purchase

“I want to try checkout and understand that it is a demo.” [Issue #25](https://github.com/kaw393939/spec-driven-tshirt-website/issues/25).

- **AC-17:** Before ordering, show cart summary, total, and “Demo purchase — no payment or shipment.” The button says “Place demo order.” Do not request names, emails, addresses, or payment details. Empty cart cannot complete an order.
- **AC-18:** In the success scenario, one button action shows a demo reference, chosen sizes, quantities, and total; clears the cart; and repeats the demo notice. A subsequent click on the now-empty cart cannot create another confirmation. No cross-session duplicate-order guarantee is claimed.
- **AC-19:** A clearly labeled “Simulate a problem” control lets the reviewer try failure. That scenario shows a recoverable message and preserves the cart. Switching back to success allows retry. This is local simulation, not a payment gateway.

## US-10 — Find and share the page

“I want a useful search or shared-link description that matches the page.” [Issue #26](https://github.com/kaw393939/spec-driven-tshirt-website/issues/26).

- **AC-20:** Source HTML includes a descriptive title, meta description, one meaningful h1, natural product/audience wording, and a canonical URL matching the actual published page.
- **AC-21:** Open Graph title, description, type (`website`), URL, and image are present in HTML; page/image URLs are absolute HTTPS URLs and return successfully. The preview accurately represents the product. Actual previews depend on the sharing platform.
- **AC-22:** The spec includes one audience-fit channel, a sample promotional message, a working product-page link, and the manual interest check described in [the marketing plan](../docs/marketing.md). Actual posting, paid ads, and tracking are not required.

> **AI aside · Keep it small.** Ask me to implement one story and its checks. Don’t ask for the whole store in one prompt or one commit.
{: .callout .ai}

[Next: the task order](../docs/backlog.md). These new IDs replace the retired backend/catalog requirements; [see the scope change](../docs/changes.md).
