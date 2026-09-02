# Prototype status — redesign v2

PROTOTYPE — throwaway. Not final, not folded into production.

## Question this answers

What should the professional redesign look like? Reference: estebanburgos.com.ar
(direction, not a template — see CONTEXT.md for what to adopt/avoid).

Previous attempt (`prototype/portfolio-redesign` branch, `src/prototype-redesign/`,
now abandoned) built 3 variants in isolation without a concrete reference — none
convinced. This round fixed that by grounding each variant in real content and a
real reference site.

## Current status (2026-09-02)

- **Variant B (split identity rail) is the leading direction** — confirmed by
  Andrés on first pass, but explicitly **not final**: "aun considero que faltan
  muchas pasadas más para llegar al diseño que tengo pensado."
- **Keep the production background**: the dotted-pattern + linear-gradient body
  background from `src/index.css` (`--bg-pattern`, `--bg-linear-gradient`,
  `--bg-blend-mode`, already theme-aware) is intentionally preserved in
  `tokens.css` instead of a flat color — Andrés wants that texture kept even as
  layout/typography change.
- Variants A and C are still in the codebase for comparison but are not the
  current direction.

## Known issue hit while building this

`src/components/nav/nav.css` has an unscoped bare `nav {}` selector
(`position: fixed`) that collides with any real `<nav>` element — this broke
variants A/C's top nav until worked around locally (rendered as `<div>` instead
of `<nav>`). Not fixed at the source; still pending as part of the cleanup
already agreed in `docs/adr/0001-feature-colocated-architecture.md` / CONTEXT.md.

## Next steps (whoever picks this up)

Keep refining Variant B specifically per Andrés's next round of feedback.
Don't regenerate from scratch — adjust `variants/VariantB.tsx` /
`variants/VariantB.css` directly. Run via `npm run dev`, visit
`?variant=B` (switcher bar also cycles A/C for comparison).

## To do when a variant actually wins

Per the prototype skill: capture the answer (which variant, why) in a commit or
issue, fold the winner into the real feature-colocated structure from
ADR-0001, then move this whole folder + the `?variant=` gate in `App.tsx` onto
a throwaway branch — out of `dev`/`main`.
