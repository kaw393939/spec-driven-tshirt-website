---
title: "Instructor notes"
---

# Instructor notes

The student entry point is [Today’s activity](activity.md), not the full documentation library. Students need basic Git and the vocabulary from class; no backend knowledge or package setup is assumed.

## A repeatable teaching loop

Model one small feature using [the worked example](example.md). Then students write a need, justify a brand/design choice, exchange one peer question, revise the spec, and—after approval—ask AI for one change. Review the diff together and try the checks.

Keep the learner responsible for decisions. AI may offer alternatives and questions, but shouldn’t silently choose their audience, archetype or visual direction.

## Look for three pieces of evidence

1. **A choice:** can the student connect a visible design/copy decision to audience, archetype, persuasion or visual vocabulary?
2. **A revision:** can they show a peer question or AI assumption they addressed?
3. **A check:** can someone follow the spec/issue/commit/PR links and repeat the stated result?

A polished generated page alone doesn’t show this understanding. Full prompt transcripts aren’t required; record decisions, relevant AI assistance, and evidence instead.

## Teach AGENTS.md through use

Ask students what every new AI helper should know. Start with five rules: read the spec/issue, ask about ambiguity, keep to one feature, link the change, and report real checks. Compare their suggestions with [our guide](https://github.com/kaw393939/spec-driven-tshirt-website/blob/main/AGENTS.md). These instructions guide behavior; they do not enforce correctness.

No sprint ceremony, story-point exercise, backend transaction tests, or automated E2E setup is required. Manual repeatable checks come first; introduce small JS assertions and browser tools when they serve the lesson.

Course-wide M0 is still pending. A peer’s agreement is useful feedback and does not substitute for instructor approval. Team arrangement and grading weights remain instructor choices.
