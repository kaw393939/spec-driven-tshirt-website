# Spec-Driven T-Shirt Website

An educational e-commerce project demonstrating AI-assisted, specification-driven development and Agile delivery.

**Status: planning proposed; human approval pending. No application has been implemented.**

Start with the [documentation index](docs/README.md), [specifications](specs/README.md), and [approval checklist](docs/approval.md).

## First milestone: approve before coding

The repository owner/instructor must approve the planning PR and record the reviewed commit SHA in [approval issue #1](https://github.com/kaw393939/spec-driven-tshirt-website/issues/1). Merge the approved planning PR and complete M0 before starting application code. All brand and technology choices below are proposals.

## Documentation website

[Project homepage](https://kaw393939.github.io/spec-driven-tshirt-website/) · [Browse documentation](https://kaw393939.github.io/spec-driven-tshirt-website/docs/)

GitHub Pages renders the same Markdown in `docs/` and `specs/`. The homepage contains only a footer link to documentation. Publishing these proposals does not approve them or authorize application coding.

Pages currently publishes the `docs/1-planning-baseline` branch from `/` so the unapproved baseline can be reviewed. After M0 approval and merge, change the Pages publishing branch to `main` in repository Settings → Pages.

## Proposed MVP

Threadform: expressive T-shirts for creative students and early-career makers. Browse products, select size/color, manage a cart, and complete a clearly labeled sandbox checkout. No real payments or fulfillment.

## Repository map

| Path | Purpose |
| --- | --- |
| `docs/` | Personas, epics, backlog, brand, workflow, testing, approval and traceability |
| `specs/` | Functional and quality requirements, architecture, data/API contracts |
| `.github/` | Issue and PR templates |
| `AGENTS.md` | Guardrails for AI-assisted contributions |

Application and test directories are planned in [architecture](specs/architecture.md); scaffolding waits for approval. There are no application dependencies, install commands, or runnable application tests yet.

## Collaboration

Use an issue → specification → feature branch → atomic commits → reviewed PR → acceptance evidence. New agents start with [AGENTS.md](AGENTS.md); contributors should read [CONTRIBUTING](CONTRIBUTING.md). Documents define intended behavior; GitHub Issues track delivery and review. Never treat an AI-generated draft as approved.

[Issues](https://github.com/kaw393939/spec-driven-tshirt-website/issues) · [Milestones](https://github.com/kaw393939/spec-driven-tshirt-website/milestones)
