---
title: "How we check our work"
---

# How we check our work

**All storefront checks are planned, not run.** The documentation site is live; the shop is not built.

Start with “do this → expect that.” Record the browser, checked commit, action, result, and a screenshot or output link in the issue/PR. A classmate should be able to repeat it.

| Check | Try this | Rule / issue |
| --- | --- | --- |
| CHECK-01 | Find product benefit, price, image description and size guide. | AC-10 / #22 |
| CHECK-02 | Disable JS; read product information and follow the purchase link. Check brand plan. | AC-11 / #22 |
| CHECK-03 | Select an available size and add it; confirm that exact size. | AC-12 / #23 |
| CHECK-04 | Try missing and unavailable sizes; read the error and confirm unchanged cart. | AC-13 / #23 |
| CHECK-05 | Add same/different sizes; try 0, -1, 1.5, text, 1, 10 and 11 as quantities. | AC-14 / #24 |
| CHECK-06 | Change quantities/remove a line; independently calculate cents and totals. | AC-15 / #24 |
| CHECK-07 | Remove the last item, then refresh; check empty state and reset behavior. | AC-16 / #24 |
| CHECK-08 | Read checkout notice and summary; verify no personal/payment fields; try empty cart. | AC-17 / #25 |
| CHECK-09 | Complete success, inspect confirmation, then try another order on empty cart. | AC-18 / #25 |
| CHECK-10 | Simulate a problem, check preserved cart, then retry successfully. | AC-19 / #25 |
| CHECK-11 | Inspect page-source title/description/h1/canonical and audience wording. | AC-20 / #26 |
| CHECK-12 | Inspect sharing tags and request their absolute page/image URLs. | AC-21 / #26 |
| CHECK-13 | Follow sample promotion to product; record a classmate’s find-price/action result. | AC-22 / #26 |
| CHECK-14 | Keyboard, screen reader, focus, labels, contrast and 200% zoom. | NFR-06 / #27 |
| CHECK-15 | Inspect at 360px and 1280px; record screenshots and asset problems. | NFR-07 / #27 |
| CHECK-16 | Inspect network requests for no backend/tracking; check console and both scenarios. | NFR-08 / #27 |
| CHECK-17 | Follow a spec to its issue, files, atomic commit, PR, result and peer decision. | NFR-09 / #27 |

## Three kinds of test, using this project

**Unit:** test the quantity validator or cents calculation in isolation. **Integration:** connect size controls, cart functions, and the displayed total. **End-to-end:** use a browser to complete the whole pretend purchase, including a problem and retry.

Start with these manual checks. As JavaScript is introduced, add small automated assertions for quantity and total rules; browser automation is optional. No database, framework test harness, or coverage percentage is required. Each feature’s checks run before its PR closes, and #27 repeats the whole journey for final review.

> **AI aside · A checklist isn’t evidence.** Ask me to show the actual result and the version I checked. If I couldn’t run something, I must say so.
{: .callout .ai}

For docs-only changes, check Markdown links, front matter, IDs, Pages build, and published content. Never report those as passing storefront tests.
