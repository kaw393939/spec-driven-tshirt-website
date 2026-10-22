---
title: "How the pieces fit"
---

# How the pieces fit

We propose **one application and one database**. Keep the project small enough to understand, with clear parts inside it.

1. **Browser:** shows shirts, forms, and the cart.
2. **Server:** checks requests, prices, and stock. The browser cannot decide what a shirt costs.
3. **Database:** remembers products, carts, and orders.

## Give each part one job

**Catalog** finds shirts. **Cart** manages selections. **Checkout** checks the order. **Orders** remembers what was bought. A **sandbox payment adapter** pretends a payment succeeded or failed, without contacting a payment company.

Proposed tools: TypeScript for code, Next.js/React for pages and requests, and PostgreSQL for stored data. Versions and dependencies will be chosen after approval; nothing is installed yet.

> **New term · Modular monolith** One application with separate sections inside it. Think of one shop with a display area, a basket, and a checkout desk.
{: .callout .concept}

> **AI aside · Simpler has a purpose.** I could suggest lots of services and tools. For this class, we want to understand one complete shopping trip before adding more moving parts.
{: .callout .ai}

Our first architecture decision, **ADR-001**, is still pending. [MDN’s client/server overview](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview) is a useful next read. The optional notes explain the proposed code boundaries, alternatives, and risks.

<details markdown="1">
<summary>Optional: architecture decision and implementation notes</summary>

## Decision and tradeoffs

Propose a TypeScript modular monolith: Next.js/React presentation and HTTP handlers, application services, domain policies, and PostgreSQL repositories behind interfaces. One application and one database keep student setup and transactions understandable. Choose and pin supported runtime/framework versions after M0; no dependencies are installed now.

Alternative: a separate SPA/API increases deployment and contract overhead for this scope. An external commerce platform hides learning objectives. Local static storage cannot demonstrate concurrent inventory and order transactions. Revisit the decision if independent deployment or real fulfillment becomes necessary.

## Boundaries and patterns

| Module | Responsibility | Pattern |
| --- | --- | --- |
| Catalog | Product/variant reads, matching and availability | Repository for persistence; query service |
| Cart | Session-bound lines, expiry, server totals and validation | Application service + pure pricing/quantity policies |
| Checkout | Quote validation, idempotency, order/inventory transaction | Application service orchestrates transaction/unit of work |
| Orders | Immutable line snapshots and session-scoped confirmation | Repository and ownership policy |
| Sandbox | Local deterministic success/decline simulation | PaymentPort adapter; no external provider or card fields |
| UI | Pages, semantic forms and interaction state | Composition of reusable view components |

UI calls application services through handlers; services depend on domain policies and repository/payment interfaces. Infrastructure implements these interfaces. Keep SQL, cookies and framework request types out of domain rules. Inject dependencies at application composition. No microservices, message queue, event bus or generalized abstraction framework.

Browser → HTTP handler (validation/session/Origin) → application service → domain policy → repository → PostgreSQL. PaymentPort returns a deterministic local result before a short database transaction. Stock and quote are rechecked inside that transaction before order creation. No network payment side effects exist in this MVP.

## Planned structure (create after approval)

```text
src/
  app/                      # routes and thin request handlers
  modules/
    catalog/{domain,application,infrastructure}/
    cart/{domain,application,infrastructure}/
    checkout/{domain,application,infrastructure}/
    orders/{domain,application,infrastructure}/
  shared/{ui,validation}/
tests/{unit,integration,e2e}/
db/{migrations,seeds}/
```

No source, tests or database directories are scaffolded during M0. Small shared utilities require actual cross-module use; avoid a shared business-logic dumping ground.

## Operational boundary and risks

After approval: local development/test PostgreSQL, deterministic synthetic seed, separate test database, environment-based secrets ignored by Git, structured logs with request IDs and redacted contact/session data. No deployment in this initialization. Sandbox demo contact data expires after seven days; carts expire after seven days of inactivity; an explicit scheduled cleanup task is required before shared demo hosting.

Risks: scope creep → exclusions/change control; inventory races → conditional updates and transaction tests; hallucinated requirements → human signoff; premature abstraction → small module interfaces; brand assumptions → usability review; real commerce mistaken for demo → persistent checkout disclaimer.

</details>
