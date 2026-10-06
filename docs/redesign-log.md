# Prototype status — redesign v2

PROTOTYPE — throwaway. **Decided: Variant B, no longer being compared against
alternatives.** Still not folded into production — see "Next steps" below.

## Question this answers

What should the professional redesign look like? Reference: estebanburgos.com.ar
(direction, not a template — see CONTEXT.md for what to adopt/avoid).

Previous attempt (`prototype/portfolio-redesign` branch, `src/prototype-redesign/`,
now abandoned) built 3 variants in isolation without a concrete reference — none
convinced. This round fixed that by grounding each variant in real content and a
real reference site.

## Decision (2026-09-28)

**Variant B (split identity rail) won.** Andrés: "vamos a trabajar solo con la
variante B y ese va a ser mi portfolio." Variants A and C were deleted —
their code is preserved in git history on `dev` at commit `f51c934` if ever
needed for reference (`git show f51c934:src/prototype-redesign-v2/variants/VariantA.tsx`,
same for `VariantC.tsx`/`.css` and the old `PrototypeSwitcher`).

`ProfessionalRedesign.tsx` no longer branches on `?variant=` value or renders
a switcher — it always renders `VariantB`. `content.ts` was trimmed to only
what B still needs (`contactDetails`, `reviews`); everything else lives in
`contentB.ts`.

- **Keep the production background**: the dotted-pattern + linear-gradient body
  background from `src/index.css` (`--bg-pattern`, `--bg-linear-gradient`,
  `--bg-blend-mode`, already theme-aware) is intentionally preserved in
  `tokens.css` instead of a flat color.

## Known issue hit while building this

`src/components/nav/nav.css` has an unscoped bare `nav {}` selector
(`position: fixed`) that collides with any real `<nav>` element. Variant B's
identity rail is an `<aside>`, not a `<nav>`, so it never hit this — it only
affected the now-deleted A/C. Still pending as its own fix, part of the
cleanup already agreed in `docs/adr/0001-feature-colocated-architecture.md` /
CONTEXT.md.

## Content update (2026-09-28)

Variant B's content was enriched per `src/portfolio-contenido-variante-B.md`
(Andrés's own brief) — new bio, real Experience timeline (Plug-Zone end date
now known: nov. 2023 – ene. 2026; Arcor kept as the featured case study but
moved to its correct chronological position, last), current products
(Chaskyapp, Reforest, Rapitrago) replacing the old "Descripción pendiente"
placeholders, categorized Tecnologías, and a 4th credential added. Labs and
Proyectos personales tabs were dropped per that brief (junior signal).

Two `TODO(Andrés)` items are rendered as visible dashed-border notes in the
page itself (CV PDF still the old one; Chaskyapp/Reforest links need
confirmation) — not silently invented.

Verified visually in-browser after both this content update and the A/C
cleanup: no console errors, `tsc`/`eslint` clean.

## Visual refinement pass (2026-09-28)

First refinement pass on B's visual execution, per Andrés's ask to bring the
typography/spacing/card polish closer to estebanburgos.com.ar (reference for
level of polish and editorial restraint, not a template — layout/structure
untouched, still the same split identity rail). Reviewed the reference site
live (hero, empresas/clientes strip, "Sobre mí" quote block, data-point grid,
numbered project cards with browser-chrome mockups, stats row) before
touching any code.

Changes, all in `tokens.css` and `variants/VariantB.css` — **no JSX/content
changes**, everything below is CSS-only so it couldn't touch copy:

- `tokens.css`: added a type scale (`--pr-text-xs`..`--pr-text-xl`), a spacing
  scale (`--pr-space-1`..`--pr-space-5`), shadow/radius/easing tokens, an
  `--pr-accent-soft` tint for hover/quick-info backgrounds, and a
  `--pr-text-faint` step between muted and border for label hierarchy. Added
  `:focus-visible` outlines (were relying on browser default before) and hover
  transitions on `.pr-pill`/`.pr-card`.
- Quick info (Ubicación/Idiomas/Disponibilidad) now renders as bordered,
  tinted boxes echoing the reference's data-point grid, instead of a plain
  definition list.
- Section headings (`h2`) get a short accent dash before the text (decorative
  `::before`, no new copy) instead of plain serif text — a restrained nod to
  the reference's "—— SECCIÓN" label pattern.
- Work cards (`Mis trabajos`) and legacy project rows now show a
  CSS-`counter()`-generated index number (01, 02, 03…), same idea as the
  reference's numbered project list, without adding any data or JSX.
- Arcor case-study card gets a left accent border + hover lift to read as the
  clearly-featured entry; other timeline rows get a subtle tinted hover.
- Theme toggle checkbox restyled as a proper switch (still the same
  `<input type="checkbox">`, purely CSS) instead of a bare native checkbox.
- Added hover states across the board: rail links (underline-on-hover),
  footer links, credentials links, legacy project cards (image
  grayscale-to-color + slide), review cards (lift), work cards (lift + border
  accent).
- Reviews get a large decorative quote glyph (CSS content, not text).
- Removed dead CSS (`.vb-tabs`, `.vb-list`) left over from the deleted
  Labs/Proyectos personales tabs.
- Added `prefers-reduced-motion` override and `overflow-y: auto` on the rail
  for safety on short viewports.

Verified: `npx tsc --noEmit` and `npx eslint src/prototype-redesign-v2 --ext
ts,tsx` both clean. Re-screenshotted `?variant=B` in light and dark after the
change, no console errors on reload.

## Interaction/motion pass (2026-09-28)

Andrés's verdict on the visual-refinement pass above: "lo veo muy parecido a
la version anterior... todavía lo veo bastante básico." He named three things
estebanburgos.com.ar has that were missing: illustration/animation, real
scroll/interaction transitions (not just hover color changes), and "some kind
of interaction" on the sidebar. Re-reviewed the reference live before touching
code — confirmed: its rail nav highlights the active item with a tinted pill +
small dot as you scroll; its avatar/stat numbers fade/stagger in on scroll;
its project cards are numbered browser-chrome mockups (already had an
equivalent via the numbered-card pass). This round goes past CSS-only tokens
into actual JSX/logic changes in `VariantB.tsx`, as the brief anticipated.

Changes:

- **Rail jump-nav with scroll-spy highlighting.** Added a small in-page nav in
  the rail (Sobre mí / Experiencia / Tecnologías / Mis trabajos /
  Recomendaciones / Contacto) driven by a new `useRailSpy` hook
  (`src/prototype-redesign-v2/useRailSpy.ts`) — adapted from
  `src/hooks/scrollSpy.ts`'s `useScrollSpy` (same "which section's midpoint
  crosses the viewport center" algorithm), simplified to plain string ids
  instead of `ItemsNavProps` so it doesn't pull in the real site's
  icon-heavy nav item type. The active item gets a tinted pill background + a
  filled accent dot, echoing the reference's sidebar treatment. Clicking an
  item smooth-scrolls to the section (`scrollIntoView`, instant if
  `prefers-reduced-motion: reduce`). Added `id="about"` to the bio section and
  `id="tech"` to the Tecnologías section so all six nav targets exist
  (Experiencia/Mis trabajos/Recomendaciones/Contacto already had ids).
  **Gotcha hit and worked around:** a real `<nav>` element collides with the
  unscoped `nav {}` rule in `src/components/nav/nav.css` (`position: fixed`,
  pinned to viewport bottom-center — the known issue logged above, which
  previously only mattered for A/C since the rail is an `<aside>`). Used
  `<div role="navigation">` instead of `<nav>` to get the same semantics
  without the collision — did not touch `nav.css` itself, still out of scope.
- **GSAP + ScrollTrigger reveal animations.** Registered `ScrollTrigger` and
  `@gsap/react`'s `useGSAP` (both already dependencies, unused elsewhere in
  the codebase beyond a bare `gsap.to` example) and added a fade+rise-in
  (`autoAlpha` + `y`, 0.7s, `power2.out`) triggered per-element as it enters
  the viewport (`start: 'top 88%'`, `toggleActions: 'play none none
reverse'`) — applied to bio paragraphs, the h2 section headings, each
  Experience timeline entry (including the Arcor case-study card), each
  Tecnologías category group and credential row, each work card, each legacy
  project card, and each review card. Entirely gated behind
  `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`, so under
  reduced motion none of this runs at all and content just renders at full
  opacity — extends (via JS, not CSS) the reduced-motion override already in
  place from the last pass.
- **Two decorative illustrative elements**, both aria-hidden SVGs (no new
  copy):
  - An accent squiggle line under the name/role in the identity block, drawn
    in via `stroke-dashoffset` on mount, then a very slow (5s) idle horizontal
    drift — a restrained graphic touch near the identity block, per Andrés's
    specific example.
  - A small efficiency sparkline (88% → 93%, the number already stated in the
    existing Arcor bullet — the SVG doesn't add the text, just illustrates it)
    inside the Arcor case-study card, drawing in with its own ScrollTrigger
    when the card enters the viewport, with the endpoint marker popping in
    right after — per Andrés's other specific example ("an animated element
    tied to the Arcor case-study card").

Verified in-browser at `?variant=B`, both themes: nav highlighting tracks
scroll position correctly, clicking a nav item smooth-scrolls to the right
section, reveal animations fire once and don't re-fire oddly on scroll-up
(toggleActions handles that), the accent line and sparkline both draw in as
expected, theme toggle still works, no console errors or GSAP/ScrollTrigger
warnings on load or during scroll. `npx tsc --noEmit` and `npx eslint
src/prototype-redesign-v2 --ext ts,tsx` both clean.

## Next steps (whoever picks this up)

Andrés said more refinement passes are still expected on B itself (layout
details, not a redesign of the direction) — bring specifics and adjust
`variants/VariantB.tsx`/`.css` directly, still via `npm run dev` + `?variant=B`.

Whenever B is considered actually done (no more passes planned): fold it into
the real feature-colocated structure from ADR-0001, remove the `?variant=`
gate from `App.tsx`, and delete this whole folder from `dev`/`main` — per the
prototype skill, capture that final answer in a commit message when it happens.

## Layout pass (2026-09-30)

From the `/impeccable critique` P0 (production proof buried, no primary action):

- Main column reordered: Bio → Mis trabajos → Experiencia → Tecnologías/Credenciales →
  Recomendaciones → Contacto (rail jump-nav order matches; `useRailSpy` relies on DOM order).
- Bio split around a new "En producción hoy" ledger (`nowB` in `contentB.ts`): claim → proof →
  origin. Facts restate the Chaskyapp/Reforest cards (no new claims); rows jump to the cards.
- Rail: quick info moved up, then a "Descargar CV" (ink-filled) + "Escribime" (outlined)
  button pair; Email left the plain link list (it's the Escribime mailto). CV path unchanged
  (still `/src/assets/...`, breaks in prod build — pending for `harden`).
- `useRailSpy`: last section whose top crossed 30% of the viewport, last id at page bottom.
  Fixes "Experiencia" marked on load and "Sobre mí"/"Contacto" never activating.
- Mobile (≤860px): jump-nav hidden (no sticky rail), quick info packs two-up; ledger rows
  wrap the fact under the product at ≤520px.

## Clarify pass (2026-09-30)

- "Sobre mí" h2 added (bio had no heading; nav label reused for consistent terms).
- Disponibilidad moved first in quick info, rendered as live status (ledger dot + accent).
- Freelance timeline note rewritten to stand alone (no "ver 'Mis trabajos'"): same facts.
- Theme toggle: static "Modo oscuro" label + role="switch" (was the state, "Oscuro"/"Claro").
- Legacy project thumbnails: alt="" (title already names the link) + sr-only "abre en una
  pestaña nueva".
- Contacto is now a closing section: h2, restated availability, visible copyable email,
  LinkedIn/GitHub.
- "Github" → "GitHub" in src/mockData/contact.tsx (also fixes the production site label).

## Decision pending implementation (2026-09-30)

Andrés: the Arcor case study's 3px sage left border ("tabbed file") gets **replaced** in the
`bolder` pass (detector flags it as side-tab). When that lands, update DESIGN.md too — its
Shapes/Components sections still describe the tabbed border as the case-study signature.

## Bolder pass — "Cómo trabajo" (2026-09-30)

Resolves the pending side-tab decision above. The Arcor case-study card (3px sage left
border, padding bug from `.vb-timeline > li.vb-casestudy { padding: 0 }`, unlabeled
decorative sparkline, placed last) is replaced by a "Cómo trabajo" folio opening
Experiencia: same construction as the "En producción hoy" ledger (lifted at rest, header
row, hairline columns). Columns _En planta_ (Arcor bullets) / _En software_ (facts already
in the work cards). The sparkline became an honest two-point slope chart (88% → 93%,
80–100% scale, labeled, captioned, role="img"); its GSAP draw-in now sets strokeDasharray
(it never actually drew before). No new claims: thesis = the bio's own sentence.
Arcor stays in the timeline as a compact chronological row. `featured`/`bullets` removed
from ExperienceEntryB. DESIGN.md + .impeccable/design.json updated to match.

## Colorize pass (2026-09-30)

Restrained strategy kept (one accent, paper + ink); fixes are contrast and surfaces:

- Tokens: Ink Faint #8b8b83→#6b6b64 (light), #75756f→#909089 (dark); Sage Field Deep
  #5a7563→#56705f (light). All text now ≥4.5:1 on paper, raised and wash, both themes —
  measured in-browser: 0 failures / 184 text nodes, minimum 4.62:1.
- Rail + main column are opaque paper; the dotted production background survives only
  in the right gutter (main column reads as a sheet with a right hairline). Mobile: full paper.
- Quick-info labels 0.65rem→0.7rem (11.2px); work-card numerals Rule→Ink Faint (~1.2:1 before);
  work-card description got its own size (was browser default); `.vb-main p` max 65ch.
- Skip link ("Saltar al contenido", first focus stop) → `main#main`; aria-current="location".
- Measurement note: the test browser keeps its tab "hidden", which freezes CSS transitions
  at t=0 — contrast must be measured after `document.getAnimations().forEach(a => a.finish())`.

## Harden pass — bilingual + production fixes (2026-09-30)

- **ES/EN.** `useLang` (URL `?lang=` → localStorage → browser language → es) keeps
  `<html lang>` in sync. Copy lives in `contentB.ts` (`contentB_es`, `uiEs`) and
  `contentB.en.ts` (`contentB_en`, typed as `ContentB`, so a missing English string is a
  type error). English is a **draft translation pending Andrés's review** — no new claims;
  one addition: "(UTC−3)" in the English location line for recruiters abroad.
- **Recommendations are never translated** (other people's words): rendered with
  `lang="es"` plus "Original quotes, in Spanish." in English mode.
- **CV link fixed for production:** PDFs are imported as assets (`cvUrl` per language:
  `_esp.pdf` / `_eng.pdf`); verified in a `vite build` that both ship. Previously
  `/src/assets/...` 404ed after build. Both PDFs are still the 2024 versions (TODO stands).
- Credentials without a verification URL render as text, not `href="#"`.
- TODO notes render only in development (`import.meta.env.DEV`), as the content brief asked.
- Broken legacy thumbnails hide themselves (`onError`).
- Lists key by index so switching language updates nodes in place (GSAP state kept).
- Rail: language switch + theme toggle share one "preferences" row at the top (a row each
  overflowed a 945px viewport; a corner placement overlapped the name at desktop width).

## Adapt pass — touch targets + English on mobile (2026-09-30)

- Two tiers: WCAG 2.5.8 floor (24px) for everyone — "Dark mode" label (19px) and
  LinkedIn/GitHub links (21px) failed it before; `pointer: coarse` gets 44px for language
  options, buttons, nav items, theme toggle and text links (underline moves to
  text-decoration so it stays under the words). Mouse keeps the dense dossier sizing.
- `hover: none`: hover lifts disabled (they stuck after a tap); `:active` wash / press instead.
- Touch + sticky rail (≥861px): quick info two-up and social links in a row.
- Verified (Chromium, iframe viewports; coarse/hover:none blocks force-enabled via CSSOM
  since pointer type can't be emulated from the tool — no physical device tested):
  English at 320/360px no horizontal overflow; 0 targets under 24px (mouse) / 44px (touch)
  at 360 and 1024px; landscape 844×390 fine.
- **Open (structural, not a target-size issue):** the sticky rail is taller than short
  viewports — ~101px internal overflow at 1280×800 with a mouse, ~180px on a 1024×768 touch
  tablet (production, no TODO note). Identity, availability and the CTA stay in view; the
  jump-nav falls into the rail's own scroll. Needs a height-based decision (e.g. compact
  rail under ~900px tall).

## Polish pass — final (2026-09-30)

- Motion: rail accent line draws once and stays (the infinite drift violated WCAG 2.2.2);
  scroll reveals and the "Cómo trabajo" chart play once (no fade-out on scroll-up).
- Legacy thumbnails: `loading="lazy"`, `decoding="async"`, intrinsic 96×64 (no layout shift).
- `src/index.css` body transition `all 400ms` → `background-color, color` only
  (**touches the production site too**; it only affects the theme-switch fade).
- Short viewports (≥861px wide, ≤900px tall): rail spacing steps down one notch. Rail
  overflow in production: 0 at 1280×800 / 1366×768 / 1440×900 (was ~101px at 1280×800);
  52px on a 1024×768 touch tablet (was ~180px).
- DESIGN.md scale now documents rounded.focus 2px, rounded.xs 4px, and type steps
  numeral / quote-mark / label-micro → detector: 0 findings.
- Removed orphan `.pr-container`; Prettier applied to the prototype files.
- Verified: no console errors, tsc/eslint clean, `vite build` ships both CV PDFs.

## Next steps (agreed 2026-09-30, after critique run 2)

Critique trend: 20/32 → 23/32 (snapshots in `.impeccable/critique/`; the latest one holds
the full findings). Andrés's decisions for the next round:

- **Scope: only the two P1s.** Order: accessibility first, then evidence, then polish.
- **Junior signals stay as they are** for now (bootcamp recommendations, short 2022–23
  stints, "Introduction to…" credentials) — revisit when new recommendations/URLs exist.

1. `/impeccable harden src/prototype-redesign-v2/variants/VariantB.tsx` — **P1 a11y**: GSAP
   reveals use `autoAlpha` → `visibility: hidden` until scrolled into view, so unrevealed
   links (ledger rows, CABSA/Kurve/Coolco) are unreachable by Tab, headings are missing from
   screen-reader heading nav and Ctrl+F can't find text. Animate opacity/y only; show
   whatever is above the fold on load; content must stay visible if ScrollTrigger fails.
2. `/impeccable layout` — **P1 evidence weight**: flagships (Chaskyapp, Reforest) have no
   visual/link while 2022 sites have thumbnails + live links. Doable now: demote "Trabajos
   anteriores" visually (no deletion). Needs Andrés: Chaskyapp public store URLs or
   screenshots; anonymized Reforest screenshots with client permission.
3. `/impeccable polish` — final pass (desktop + mobile, ES + EN).

Still pending from Andrés (unchanged): review the English draft in `contentB.en.ts`; export
new CV PDFs (same filenames in `src/assets/`); credential verification URLs; new
work-context recommendations.

## Background: paper everywhere (2026-10-05)

Andrés noticed a seam: dark paper under the content, then the grey gradient + dots where
the column ended (rail 320px + main max 740px ≈ 1060px, the rest of a wide screen showed
the production background). Cause: the colorize pass put opaque paper on rail/main only.
Decision (option 2 of 3): extend the paper over the whole viewport and keep the dots only
as a soft texture.

- `.pr-root`: `background-color: var(--pr-bg)` + 1px dot every 28px at 6% (`--pr-dot`).
  Production gradient (`--bg-linear-gradient`) no longer used by the prototype.
- `.vb-rail` / `.vb-main`: opaque backgrounds and the main column's right hairline removed
  (the rail keeps its own right divider).
- 6% is a contrast budget: Ink Faint on a dot pixel ≈4.5:1 light / ≈4.9:1 dark (computed;
  re-measure before raising). PRODUCT.md brand commitment and DESIGN.md updated.
- Not covered: `body` still carries the production gradient behind `.pr-root`; it can only
  show on overscroll bounce.
- Visual check: done by Andrés 2026-10-05 (approved). Earlier: tsc/eslint/
  detector are clean but the render was not inspected.

## Plan to production (agreed 2026-10-05)

Goal: ship Variant B as the real site. State on 2026-10-05: prototype only renders behind
`?variant=` (`src/App.tsx`); `index.html` still has `lang="en"`, title "Portfolio - AMedina",
Vite favicon, no meta description / Open Graph; deploy target not yet confirmed (no
`vercel.json` / `netlify.toml` in the repo).

**Phase 0 — close pending (done).** Background change visually approved and committed (`d8b0f54`).

**Phase 1 — content (Andrés; blocks Phase 2.2 and the launch of those items).**
- New CV PDFs ES + EN, same filenames in `src/assets/`.
- Chaskyapp: public store URLs, or 2–3 screenshots (PNG/WebP, width >= 1200px).
- Reforest: 2–3 anonymized screenshots + the client's written OK.
- Verification URL for each of the 4 Anthropic credentials (`verifyUrl: '#'` today).
- Review the English draft in `contentB.en.ts`.
- Optional, second batch: new recommendations (Satori, Market del Cevil, Desafío Latam, Plug-Zone).
- Rule: a missing item ships without that element (no link / no screenshot) instead of an
  empty slot. Reforest screenshots and new recommendations may go in a second batch.

**Phase 2 — code (Claude).**
1. `/impeccable harden` — remove `autoAlpha` from reveals. **Done 2026-10-05** (see below).
2. `/impeccable layout` — demote "Trabajos anteriores", give Chaskyapp/Reforest visuals + links
   (when Phase 1 material arrives). Make link/screenshot optional in the data so the card
   degrades cleanly without them.
3. `/impeccable polish` — final pass (desktop + mobile, ES + EN).

**Phase 3 — integration (Claude; independent of Phase 1).**
1. Make B the default home in `App.tsx`; drop the `?variant` gate.
2. Delete the old home (`sections/`, `components/nav`, old `mockData`, etc.) and Storybook per
   ADR 0001 — separate commit so it can be reverted alone.
3. Move `prototype-redesign-v2/` to its final feature-colocated location; rename `VariantB`
   and `ProfessionalRedesign` to real names; drop the throwaway markers in comments.
4. Remove the dev-only TODO rendering (`SHOW_TODOS`) once the content exists; add
   `vite-*.log` to `.gitignore`.

**Phase 4 — launch readiness.**
- `index.html`: dynamic `lang` (follow the active language), real title + description, Open
  Graph image, own favicon.
- Contact form: EmailJS keys as env vars in the deploy; test one real send.
- `npm run build` + `preview`; Lighthouse (performance, a11y, SEO); real-phone check; ES + EN;
  CV downloads work.
- Deploy a preview URL before touching the domain.

**Phase 5 — release.** PR `dev → main`, review on the preview, merge, verify on the real
domain; rollback = revert the merge. Then `/impeccable critique` (target > 23/32) and the
second content batch.

**Decisions (Andrés, 2026-10-05):** host is Vercel (project `portfolio-e8ai`, team scope
`anmedinaargs-projects`; the Vercel MCP got 403 on that scope, so the production branch was
verified by Andrés 2026-10-05 via Project Settings > Environments: Production tracks `main`, Preview = every other branch, so `dev` never touches production; Production domain `portfolio-andres-medina-arg.vercel.app` +2). Deploy of `dev` failed because the project Node version was `20.x` (discontinued) — set it to `24.x` in Project Settings (Andrés' action). Launch with the **complete
content** (not a partial launch), so Phase 1 blocks the release. Until then, pushes to `dev`
only expose the redesign behind `?variant=B`; the real home stays the old site.

### Harden pass (2026-10-05) — P1 a11y reveals

- `VariantB.tsx` reveals now animate `opacity` + `y` only (no `visibility`), so every link,
  heading and text stays in the tab order / accessibility tree / Ctrl+F while waiting to
  reveal.
- Only elements below the fold (`top > 88%` of the viewport at setup) get a reveal; whatever
  is already visible on load is never hidden.
- `clearProps` after the tween; a `try/catch` around the setup clears inline styles if
  anything throws, and `mm.revert()` still restores everything on cleanup. With reduced
  motion nothing is animated at all (unchanged).
- Not covered: a late ScrollTrigger failure after setup (e.g. the library never fires)
  would leave below-fold items at opacity 0 — they remain accessible but visually faint.

## Integration (2026-10-05) — Variant B becomes the site

Done on `dev` (production tracks `main`, untouched). Two commits: Storybook removal, then
promotion + old-site removal.

- `src/prototype-redesign-v2/` → `src/portfolio/` (`Portfolio.tsx` = theme + `.pr-root`,
  `PortfolioPage.tsx/.css` = the former VariantB, `tokens.css`, `content/content.{es,en}.ts`,
  `data/`, `hooks/`). `App.tsx` renders `<Portfolio />` at `/`; the `?variant=` gate is gone.
  The `vb-` / `pr-` CSS class prefixes were kept on purpose (DESIGN.md names them).
- Identifiers lost their `B` suffix (`contentB_es` → `contentEs`, `ContentB` → `Content`, …).
- Removed: old sections/components/mockData/hooks, Storybook, 13 unused course-exercise
  images, deps `formik`, `yup`, `@emailjs/browser`, `swiper`, `swipe`. Bundle JS 528 kB →
  290 kB (gzip 186 → 103 kB), CSS 52 → 20 kB.
- Global styles replaced by `src/styles/reset.css`. Fixed regressions the old `index.css` was
  causing on the new site: `user-select: none` on everything (email/text could not be
  selected or copied), hidden scrollbars, `scroll-behavior: smooth` ignoring reduced motion,
  and two unused Google Font imports.
- Docs moved: `NOTES.md` → `docs/redesign-log.md`; content brief → `docs/content/`.
- Still open for this phase: `index.html` (lang, title, description, OG, favicon), theme
  persistence, the `SHOW_TODOS` dev notes (remove when the content exists).

## Session 2026-10-06 — critique, fluid layout, hero, charted timeline, typed role

Done on `dev` (not committed at the time of writing). Impeccable critique snapshot:
`.impeccable/critique/2026-10-06T12-29-31Z__src-portfolio-portfoliopage-tsx.md` (22/32 over
8 heuristics, 7 and 10 n/a).

**Critique findings still open:** P0 stale CV as the primary button; P1 credentials have no
verification URLs and the recommendations are weak for a recruiter; P1 mobile has no nav and
the rail eats the first screen, tap targets under 24px (`summary`, email link, theme switch);
P2 rail is overloaded and clipped on short laptops.

**Layout made fluid (Andrés: "el sitio no aprovecha bien el ancho").** Rail
`clamp(18rem, 20vw, 21rem)`; main column no longer capped at 740px (`max-width: 88rem`,
padding `clamp`); repeated content on `auto-fit` grids (work 26rem, earlier work 22rem,
recommendations 20rem, tech 16rem); ledger and timeline use container queries. Work cards show
two highlights and a native `<details>` "Ver detalle" for the rest (`ui.moreDetail`).
Fixed the ledger header hairline that `.vb-main p { max-width }` cut short (needed a
two-class selector).

**Timeline drawn as a chart (`ExperienceTimeline.tsx`).** Generated with `/impeccable generate`
(layout). Round 1 was rejected: the axis stopped at 2025, grouping by start year hid 2025–2026
and made 2023 look crowded. Round 2, variant 1 accepted: parallel bars, broken axis (2013–2022
squeezed to 18%), every year to 2026 plus a "Hoy" marker. The "Independiente" lane variant was
discarded. `ExperienceEntry` gained `start`/`end` (decimal years, `null` = ongoing).
Per Andrés, Plug-Zone, Virtual Remote Partner and Aythen were contractor engagements, not
employment (see CONTEXT.md, "Contractor").

**Hero (generate, bolder).** Variant 1 (name leads) accepted with density 0.8 and the loud name
scale. The name is the single `h1` in the hero on the split layout; the rail's identity block,
tagline and availability box are hidden ≥861px and shown again when stacked (the hero's identity
is hidden ≤860px), so one name is visible at a time. The long "Sobre mí" paragraphs are no longer
rendered (still in `content.*.ts`). `id="about"` now sits on the hero for the scroll-spy.

**Typed role line (`TypedRole.tsx`).** Andrés's idea: roles that swap, in the manner of a CLI
(letters appear one at a time, erased with backspace). Variant 2 accepted (`>` prompt, system
monospace, underscore caret). Sequence: Product Engineer → "Spec first, code later" → the real
role; plays once (~4.6s), no loop; reduced motion shows the final role. Texts in
`profile.roleCycle` (ES/EN) + `profile.role`. The monospace stack is a registered detector
exception (`design-system-font`, `.impeccable/config.json`) and a documented exception in
DESIGN.md. A marquee was not built (auto-moving content without a pause control, WCAG 2.2.2);
an illustration was not built yet (candidate: Chaskyapp architecture diagram with real facts).

**Docs updated:** DESIGN.md (fluid layout, hero, typed line, timeline, new rules), PRODUCT.md,
CONTEXT.md, `.impeccable/design.json`.
