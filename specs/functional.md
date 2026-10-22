# Functional specification

Status: proposed. Common rules and terminology are in [contracts](contracts.md). All prices are integer cents in USD. Seed products and contact details are fictional.

## US-01 — Discover products

As Maya, I want to browse and filter tees so I can find a design in my size. Issue #6, EP-02.

- **AC-01:** Given active seeded products, when catalog loads, then each card shows name, image with meaningful alt text, and price formatted in USD; inactive products are omitted. Loading status is announced.
- **AC-02:** Given size and color filters, when both are selected, then results contain at least one in-stock variant matching both. Clearing restores all active products. No results shows a reset action; a failed request shows a retry action without erasing selections.

## US-02 — Choose a variant

As Jordan, I want accurate fit and variant information so I can select a suitable shirt. Issue #7, EP-02.

- **AC-03:** Given a product, when its detail opens, then artwork, name, USD price, composition, care, size measurements in inches and stock availability are available; unknown/inactive products show a recoverable not-found page.
- **AC-04:** Given a size/color selection, when adding to cart, then an explicit available variant and valid quantity are required. Missing selection, nonexistent combination and zero stock prevent adding and produce a text error associated with the control. The server independently rejects invalid additions.

## US-03 — Manage a cart

As Maya, I want to review and change my cart so I control my purchase. Issue #8, EP-03.

- **AC-05:** Given a cart, when adding/updating/removing a variant, then duplicate additions merge quantities; quantity must be an integer 1–10 per variant and no greater than stock. Reject invalid updates without changing existing state. A separate Remove action deletes the line. Empty cart provides a catalog link.
- **AC-06:** Given the same browser session token, when reloading or returning within seven days of the last successful cart mutation, then cart lines persist. After expiry, a new empty cart is returned. Every read/mutation revalidates server prices and stock; changed prices show old/new values and require acknowledgment before checkout. Unavailable/excess quantities remain visibly flagged for correction, and totals use current prices. No client-supplied price is trusted.

## US-04 — Place a sandbox order

As Jordan, I want to place a clearly identified demo order and see its result. Issue #9, EP-03.

- **AC-07:** Given a nonempty valid cart, when requesting a quote, then email, name, street, city, two-letter US state and five-digit ZIP are validated server-side, field errors are visible, and current subtotal, shipping, tax and total appear before explicit consent. Demo shipping/tax are zero and labeled simulated. Empty/stale/unacknowledged carts cannot submit.
- **AC-08:** Given consent to a current quote, when sandbox checkout succeeds, then exactly one confirmed demo order is stored and inventory decremented atomically. Success clears the purchased cart lines. Simulated decline, stock conflict or transaction failure creates no confirmed order, changes no inventory and preserves the cart with a recoverable error. Two buyers of the last unit cannot both succeed.
- **AC-09:** Given an order request retry, when the same cart and idempotency key/payload recur within 24 hours, then return the original result without duplicate order or decrement. A changed payload with the same key is rejected. Confirmation shows opaque reference, purchased items and total plus “Demo order — no payment charged or shipment created.” Another session cannot access the order.

Payment inputs are limited to a local sandbox scenario (success/decline); never collect card data. Abandoned carts do not reserve stock. Catalog and cart totals are informational until the confirmed quote is validated at submission.
