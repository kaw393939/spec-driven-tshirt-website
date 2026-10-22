---
title: "Proposed data and API contracts"
---

# Proposed data and API contracts

Status: proposed; #4. REST-style JSON under `/api`; same-origin guest sessions. Handlers translate domain errors into consistent responses.

## Data model

| Entity | Fields / invariants |
| --- | --- |
| Product | UUID id; unique slug; name; description; composition; care; size-guide measurements; image URL/alt; active flag; nonnegative priceCents; currency fixed USD |
| Variant | UUID id; productId FK; unique SKU and (productId,size,color); size enum XS/S/M/L/XL/XXL; color slug/label; integer stock ≥0; version |
| Cart | UUID id; hash of opaque session token; expiresAt; version; unique lines by variantId with quantity 1–10; last-seen unit price for change notices |
| Quote | Opaque id; cartId/version; immutable current lines/prices; subtotal/shipping/tax/total cents; normalized shipping/contact; expiresAt = creation + 10 minutes |
| Order | Opaque UUID reference; owning cart/session; confirmed status; immutable SKU/name/size/color/unit-price/quantity snapshots; totals; synthetic contact/address; createdAt |
| CheckoutAttempt | Unique (cartId,idempotencyKey); request hash; result/order reference; createdAt; retained 24 hours minimum |

Money: subtotal = sum(quantity × current product priceCents); demo shippingCents = taxCents = 0; total = subtotal. No floating point money. Seed fixture includes available/unavailable variants, a price change and a last-unit race case. Product price applies to all its variants in MVP.

Cookie holds only a cryptographically random token; server stores its hash. Reading an expired cart establishes a new empty cart. Cart expiry extends only on successful mutation. Confirmation must match the owning token, including when the purchased cart is empty. Purge expired carts/quotes and demo orders/contact data after seven days; retain minimal non-personal retry records through the 24-hour guarantee.

## Endpoints

| Method / path | Input | Success |
| --- | --- | --- |
| GET `/api/products?size=M&color=ink` | Optional allowed size/color filters | 200 `{items:[productSummary]}`; matching same in-stock variant |
| GET `/api/products/:slug` | Product slug | 200 `{product,variants,sizeGuide}` |
| GET `/api/cart` | Session cookie; create if absent/expired | 200 `{cartId,version,lines,totals,warnings,expiresAt}` |
| POST `/api/cart/items` | `{variantId,quantity,cartVersion}` | 200 updated cart, merged quantities |
| PATCH `/api/cart/items/:variantId` | `{quantity,cartVersion}` | 200 updated cart |
| DELETE `/api/cart/items/:variantId` | `{cartVersion}` | 200 updated cart |
| POST `/api/checkout/quote` | `{cartVersion,acknowledgedPrices,contact,shipping}` | 201 quote including disclaimer and expiry |
| POST `/api/checkout/orders` | `{quoteId,consent:true,scenario:"success" or "decline"}` plus `Idempotency-Key` header | 201 new confirmation or 200 identical retry |
| GET `/api/orders/:reference` | Owning session cookie | 200 confirmation snapshot |

`acknowledgedPrices` maps variant IDs to the current unit prices explicitly accepted in the displayed cart; server compares, never trusts, these values. Quote binds cart version, lines, prices and contact/address. Submission rejects expired quotes, changed cart, prices or stock and requires a fresh quote/consent. It never silently changes an approved total.

## Errors, retries and concurrency

Errors: `{error:{code,message,fieldErrors?,requestId}}`; 400 malformed JSON/filter, 404 unknown product/order or wrong owner, 409 stale version/price/quote/stock or reused key with changed payload, 422 invalid quantity/fields/consent or simulated decline, 429 rate limited (Retry-After), 500 unexpected failure with no sensitive details. Cross-origin mutations return 403. All errors are user-readable; do not expose SQL or stack traces.

Checkout looks up an existing attempt before quote/cart validity checks, so an identical retry after cart clearing returns its prior result. Key scope is cart + caller session; request hash includes quote, consent and scenario. Atomically serialize attempts using the unique key; concurrent duplicates wait for/reuse one result. A changed request with the same key is always 409 within retention.

In one transaction: lock cart and affected variants in stable ID order, revalidate quote/version/prices, conditionally decrement sufficient stock, create immutable order and successful attempt result, clear purchased lines, increment cart version, then commit. Roll back all mutations on failure. Store a terminal decline result without inventory/order changes; unexpected rolled-back failures may be retried safely. Concurrent requests with different keys cannot purchase the same cart twice because quote/cart version is checked under lock.

Validation: trim text; email ≤254 chars with basic address syntax; name/street/city nonempty ≤120 chars each; state one of 50 states or DC; ZIP exactly five digits. Accept synthetic US addresses only. SQL is parameterized, output escaped, mutating requests check Origin. No client-submitted totals or raw payment credentials are accepted.
