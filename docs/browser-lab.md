---
title: "06 \u00b7 The server sends. The browser runs."
step: 6
lab: true
---

# Where does the website happen?

**Your task:** explain how the designed page reaches the screen and how JavaScript changes it.

**Why:** the server delivers files. The browser interprets HTML/CSS and runs the JavaScript. You should be able to point to both parts.

<div class="request-diagram" aria-label="The server sends files to the browser">
  <div><span class="mini-label">ON THE WEB</span><strong>GitHub Pages</strong><p>Serves HTML, CSS, JavaScript and images when requested.</p></div>
  <span class="request-arrow" aria-hidden="true">→</span>
  <div><span class="mini-label">ON YOUR DEVICE</span><strong>Your browser</strong><p>Builds the page, applies styles, runs code and responds to events.</p></div>
</div>

## WEB-01 · Watch the files arrive

Open developer tools → **Network**, disable cache if available, then reload this page. Find the document, docs.css, studio.js, and any images requested on that page. Caching may change what you see. Pick a row and identify its URL, status, and type.

A script served by a web server still runs in your browser. It is not a backend just because it arrived over HTTP.

## WEB-02 · Make a local change

The small teaching experiment below changes text and memory in this tab. It is **not a storefront or order system**.

{% include browser-demo.html %}

Keep Network open and click the button. Compare before/after text in **Elements**. This button’s handler sends no request: it changes state and the DOM (the browser’s live page structure). Unrelated browser/background activity may still appear.

## WEB-03 · Reload and explain

Reload the page. The count and text return to their initial values because the lesson uses memory, not storage. This is the same reason our planned cart resets on refresh.

In a real store, a browser might send a REST request to an order API. Here we build **no order API**, and a local function is not a REST endpoint. GitHub Pages doesn’t receive orders or share cart stock.

> **AI aside · Ask me to show the boundary.** “Which file came from the server? Which function ran in the browser? Did this action make a request?” I should explain using the code and your observations.
{: .callout .ai}

**Hand in:** an annotated Network screenshot, a before/after DOM observation, and three sentences explaining served files, browser state, and reload. Track your own evidence in [issue #31](https://github.com/kaw393939/spec-driven-tshirt-website/issues/31). Final storefront evidence waits for its implementation and [M0 approval](approval.md).

[Read MDN’s client/server overview](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview). [Return to the studio path](README.md#studio-path).
