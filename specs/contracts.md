---
title: "What JavaScript remembers"
---

# What JavaScript remembers

This is a small **data agreement**, not an API contract. Names below guide future JavaScript; no implementation is included now.

## One product

| Name | Meaning | Example |
| --- | --- | --- |
| `id` | A stable product label | `maker-tee` |
| `name` | The product name | `Maker Tee` |
| `priceCents` | Whole-number USD cents, shared by every size | `2000` means $20.00 |
| `sizes` | Allowed sizes and simulated availability | S available, M available, L unavailable, XL available |

The brand name, sizes, price, copy and images are student decisions documented before coding. The values above are fictional examples. Availability is local demo data, not shared inventory. No color selector or stock decrement is required.

## A little browser state

- `selectedSize`: starts empty; must match an available size.
- `cart`: a list of `{size, quantity}` items. One line per size; quantity is an integer 1–10.
- `scenario`: `success` or `problem`, explicitly labeled demo controls.
- `confirmation`: an in-memory snapshot of a successful cart and its total, with a clearly simulated reference.

Use the product’s `priceCents` to calculate totals. Don’t accept a price from a form input. This keeps calculations consistent; it is not a security boundary against browser editing.

**Line total = priceCents × quantity. Total = sum of line totals.** Demo shipping and tax are zero. Format the final cents as USD.

Validate additions/updates before changing state. An invalid action leaves the cart unchanged. Success copies the cart into confirmation, then empties the cart; a simulated problem keeps it. Refresh resets the cart and confirmation.

> **AI aside · No secret machinery.** You should be able to point to the variable that remembers a size and the function that changes a total. If my solution needs a database or server account, it is outside this assignment.
{: .callout .ai}

Local storage is optional future work. There are no session cookies, account records, REST endpoints, real order records, or cross-user stock guarantees. [Shop checks](functional.md).
