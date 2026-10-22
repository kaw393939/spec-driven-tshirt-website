/* Documentation learning aids only. No storefront, requests, or persistence. */
(() => {
  "use strict";
  const lab = document.querySelector("[data-brand-lab]");
  if (lab) {
    const stories = {
      explorer: { label: "Explorer / Independence", headline: "Take the long way.", copy: "A plain white tee. A little room for possibility.", meaning: "possibility" },
      creator: { label: "Creator / Expression", headline: "Make something of it.", copy: "A plain white tee. Your next starting point.", meaning: "experimentation" },
      everyperson: { label: "Everyperson / Belonging", headline: "A little more like you.", copy: "A plain white tee. An everyday place to belong.", meaning: "approachability" }
    };
    let archetype = "explorer";
    let composition = "modernist";
    const render = () => {
      const story = stories[archetype];
      lab.querySelector("[data-brand-sketch]").className = `brand-sketch ${archetype} ${composition}`;
      lab.querySelector("[data-brand-label]").textContent = story.label;
      lab.querySelector("[data-brand-headline]").textContent = story.headline;
      lab.querySelector("[data-brand-copy]").textContent = story.copy;
      const approach = composition === "modernist" ? "open space and a restrained hierarchy" : "layering, mixed type, and an offset composition";
      lab.querySelector("[data-brand-readout]").textContent = `${story.label.split(" /")[0]} + ${composition}-inspired: ${approach} explore ${story.meaning}. This is one possible interpretation, not a rule for this archetype.`;
      lab.querySelectorAll("[data-archetype]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.archetype === archetype)));
      lab.querySelectorAll("[data-composition]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.composition === composition)));
    };
    lab.querySelectorAll("[data-archetype]").forEach(button => button.addEventListener("click", () => { archetype = button.dataset.archetype; render(); }));
    lab.querySelectorAll("[data-composition]").forEach(button => button.addEventListener("click", () => { composition = button.dataset.composition; render(); }));
    lab.querySelector("[data-enhancement]").hidden = false;
  }
  const experiment = document.querySelector("[data-browser-demo]");
  if (experiment) {
    let changes = 0;
    const phrases = ["Hello, browser.", "Same file. New words.", "JavaScript changed the page.", "This state lives in this tab."];
    const render = () => {
      const phrase = phrases[changes % phrases.length];
      experiment.querySelector("[data-browser-headline]").textContent = phrase;
      experiment.querySelector("[data-browser-code]").textContent = `<p>${phrase}</p>`;
      experiment.querySelector("[data-browser-count]").textContent = `Changes in this tab: ${changes}. ${changes ? "The button sent no request." : "Initial state restored locally."}`;
    };
    experiment.querySelector("[data-browser-change]").addEventListener("click", () => { changes += 1; render(); });
    experiment.querySelector("[data-browser-reset]").addEventListener("click", () => { changes = 0; render(); });
    experiment.querySelector("[data-enhancement]").hidden = false;
  }
})();
