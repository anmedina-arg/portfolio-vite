---
name: Andrés Medina — Portfolio
description: Split identity rail portfolio; an engineer's dossier of production evidence.
colors:
  sage-field: '#7c9885'
  sage-field-deep: '#56705f'
  sage-field-wash: 'rgb(90 117 99 / 0.08)'
  paper: '#faf9f6'
  paper-raised: '#ffffff'
  ink: '#1c1c1a'
  ink-muted: '#5c5c57'
  ink-faint: '#6b6b64'
  rule: '#e4e2db'
typography:
  display:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: '1.75rem'
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: '-0.01em'
  hero-name:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: 'clamp(3.25rem, 2rem + 6vw, 6rem)'
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: '-0.025em'
  headline:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: '1.3rem'
    fontWeight: 700
    letterSpacing: '-0.005em'
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: '0.95rem'
    fontWeight: 600
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: '1.05rem'
    fontWeight: 400
    lineHeight: 1.75
  body-small:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: '0.8rem'
    fontWeight: 400
    lineHeight: 1.6
  numeral:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: '1.1rem'
  quote-mark:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: '2.2rem'
    lineHeight: 1
  terminal:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    fontSize: '0.92em'
  label-micro:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: '0.7rem'
    fontWeight: 600
    letterSpacing: '0.08em'
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: '0.8rem'
    fontWeight: 600
    letterSpacing: '0.06em'
rounded:
  focus: '2px'
  xs: '4px'
  sm: '6px'
  md: '10px'
  full: '999px'
spacing:
  '1': '0.4rem'
  '2': '0.75rem'
  '3': '1.25rem'
  '4': '2rem'
  '5': '3.25rem'
components:
  card:
    backgroundColor: '{colors.paper-raised}'
    rounded: '{rounded.md}'
    padding: '{spacing.3}'
  pill:
    textColor: '{colors.ink-muted}'
    rounded: '{rounded.full}'
    padding: '0.3rem 0.8rem'
  pill-status:
    textColor: '{colors.sage-field-deep}'
    rounded: '{rounded.full}'
    padding: '0.3rem 0.8rem'
  nav-item:
    textColor: '{colors.ink-muted}'
    rounded: '{rounded.sm}'
    padding: '0.4rem 0.55rem'
  nav-item-active:
    backgroundColor: '{colors.sage-field-wash}'
    textColor: '{colors.sage-field-deep}'
    rounded: '{rounded.sm}'
    padding: '0.4rem 0.55rem'
  data-point:
    backgroundColor: '{colors.sage-field-wash}'
    rounded: '{rounded.sm}'
    padding: '0.55rem 0.7rem'
  identity-rail:
    width: 'clamp(18rem, 20vw, 21rem)'
---

# Design System: Andrés Medina — Portfolio

<!-- Source of truth today: src/portfolio/tokens.css (--pr-* tokens scoped to .pr-root) and src/portfolio/PortfolioPage.css (.vb-*, .tr-*). Variant B was chosen 2026-09-28 and promoted to the home route on `dev` 2026-10-05 (not on `main`/production yet); the legacy production styles were removed (src/styles/reset.css replaces them). Chart and typing logic: src/portfolio/ExperienceTimeline.tsx, src/portfolio/TypedRole.tsx. Updated 2026-10-06: fluid layout, hero, charted timeline, typed role line. -->

## Overview

**Creative North Star: "The Engineer's Dossier"**

The site reads like a well-kept technical dossier: a fixed rail on the left (preferences, quick facts, CV and contact, jump-nav) and, on the right, a hero that gives the name at full scale and the proof of what runs today, followed by filed evidence (numbered work, a charted timeline, credentials, recommendations). Every visual device earns its place by organising or proving something: numbers index the work, boxed data points hold facts, one sparkline draws a real measured improvement (88% → 93%), and one bar chart places the career on a real time axis. Decoration that proves nothing does not belong.

Density is editorial and calm: a fluid content column that takes the space the rail leaves (capped only on ultra-wide screens) with reading measure set per paragraph (≤65ch), generous section spacing, small uppercase labels, a single desaturated accent used for marks rather than fills. Warmth comes from the serif headings and the off-white paper over the kept dotted-pattern background. Components are **firm and tactile**: they answer the pointer clearly (lift, shadow, accent border) instead of barely reacting.

Confirmed anti-references: the **neon/gamer portfolio** (the current production site: neon gradients, violets, Poppins, attention-grabbing effects) and the **corporate CV** (formal, grey, HR-document feel).

**Key Characteristics:**

- Split layout: sticky fluid rail (`clamp(18rem, 20vw, 21rem)`) + a fluid content column that opens with the hero.
- One accent (Sage Field), used as marks, rules, active states and status, never as large fills.
- Serif display for names and section heads; system sans for everything else; one typed terminal line in system monospace.
- Evidence drawn on real axes: the 88% → 93% slope and the 2013–today timeline share one grammar (open point = start, filled point = end).
- Numbered, boxed, dated evidence: `01`, `02`… on work cards, bordered data points, date pills.
- Light and dark themes with the same structure; flat paper everywhere with the production dot pattern as a soft texture.

## Colors

A restrained paper-and-ink palette with a single muted sage accent.

### Primary

- **Sage Field** (light `#7c9885`, dark `#8fae97`): Borders on hover, the recommendation quote mark, the checked toggle border. The softer voice of the accent.
- **Sage Field Deep** (light `#56705f`, dark `#a9c4b0`): The accent's working voice: role line, section-heading rule, "Cómo trabajo" slope chart and column labels, active nav item, status pills, link hover, focus outline, list markers, the sparkline and the rail accent line.
- **Sage Field Wash** (light `rgb(90 117 99 / 0.08)`, dark `rgb(169 196 176 / 0.1)`): Tinted backgrounds for the active nav item, nav hover, quick-info data points, timeline row hover, the checked toggle.

### Neutral

- **Paper** (light `#faf9f6`, dark `#15161a`): Page base, layered under the kept background pattern.
- **Paper Raised** (light `#ffffff`, dark `#1d1f24`): Cards and the toggle track.
- **Ink** (light `#1c1c1a`, dark `#ecece7`): Primary text and names.
- **Ink Muted** (light `#5c5c57`, dark `#a3a39c`): Bio, tagline, subtitles, bullets, pills, nav items at rest.
- **Ink Faint** (light `#6b6b64`, dark `#909089`): Uppercase labels, legacy work numbering, toggle knob at rest.
- **Rule** (light `#e4e2db`, dark `#2c2e34`): Every hairline: rail divider, section separators, card borders, pill borders, large work-card numerals.

**Paper everywhere, dots as texture.** `.pr-root` paints Paper (`background-color: var(--pr-bg)`) over the whole viewport — rail, column and gutter are one continuous surface (no sheet edge). The production dotted pattern survives only as a soft texture: a 1px dot every 28px at 6% of Ink (`--pr-dot`, light `rgb(28 28 26 / 0.06)`, dark `rgb(236 236 231 / 0.06)`). The production grey gradient was dropped on 2026-10-05 (Andrés chose this over keeping it: it ended abruptly where the 740px column ended). The 6% cap is a contrast budget, not a taste: Ink Faint on a dot pixel stays ≥4.5:1 (≈4.5:1 light, ≈4.9:1 dark) — raise it only after re-measuring.

**The AA Floor Rule.** Every text token clears 4.5:1 on Paper, Paper Raised _and_ Sage Field Wash, in both themes (measured minimum 4.62:1). Ink Faint and Sage Field Deep were darkened/lightened for this; new tokens must meet the same floor before use.

### Named Rules

**The One Voice Rule.** Sage Field is the only hue. No second accent, no gradients between hues; everything else is paper, ink and rule.

**The Mark, Not Fill Rule.** The accent appears as lines, dots, text, markers and 8–10% washes, never as a solid block behind content.

## Typography

**Display Font:** Georgia (with 'Times New Roman', serif)
**Body Font:** System UI sans (-apple-system, Segoe UI, Roboto, Helvetica, Arial)
**Terminal Font:** System monospace (ui-monospace, SFMono-Regular, Menlo, Consolas), the typed role line only

**Character:** A bookish serif for the name and section heads against a neutral, native sans for reading and data: a dossier title page over typed notes.

### Hierarchy

- **Hero name** (700, `clamp(3.25rem, 2rem + 6vw, 6rem)`, 1.02, -0.025em): The name in the hero on the split layout; the page's one display-size moment (6rem is the ceiling).
- **Display** (700, 1.75rem, 1.15): The name in the stacked (mobile) rail. Only one name is visible at a time.
- **Headline** (700, 1.3rem): Section headings (`h2`), always preceded by a 1.35rem × 2px Sage Field Deep rule.
- **Title** (600, 0.95rem): Role line, work-card heads, ledger product names, timeline role names.
- **Body** (400, 1.05rem, 1.75): The bio. Max 62ch.
- **Body small** (400, 0.8rem, 1.6): Tagline, timeline, bullets, credentials, recommendations (1.65, italic), footer. Most secondary content lives here.
- **Label** (600, 0.8rem, 0.06em, uppercase): Sub-headings (`h3`) and work sub-heads, in Ink Faint. Quick-info terms go smaller (0.65rem, 0.08em).

Decorative serif glyphs have their own steps: **numeral** (1.1rem, work-card counters) and **quote-mark** (2.2rem, recommendations). **Label micro** (0.7rem, 0.08em, uppercase) is the floor for data-point terms and panel headers — nothing smaller (11px floor).

Scale tokens: xs 0.7rem · sm 0.8rem · base 0.95rem · md 1.05rem · lg 1.3rem · xl 1.75rem (hand-tuned, ~1.25 ratio).

### Named Rules

**The Serif Is a Signature Rule.** Georgia is reserved for the name, section headings, and numerals (work counters, quote mark, timeline years). Body, UI and data are always sans.

**The Typed Input Exception.** One line leaves the sans: the hero's typed role line uses the system monospace stack (`ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`, no download) because it imitates terminal input. Nothing else on the page is monospace.

**The Quiet Label Rule.** Structure is labelled with small uppercase Ink Faint text, never with bigger or bolder headings.

## Layout

- **Split rail (≥861px):** `flex` row. Rail: `clamp(18rem, 20vw, 21rem)`, `position: sticky; top: 0; height: 100vh`, scrolls internally, right hairline border, stacked blocks (preferences → quick info → CV/Email → jump-nav → links) separated by hairlines. Its identity block, tagline and availability box are hidden here: the hero states them. Main column: `flex: 1`, `max-width: 88rem` (a ceiling for ultra-wide screens only), padding `2rem clamp(1.5rem, 4vw, 4rem) 7rem`.
- **Stacked (≤860px):** rail becomes a static header block with a bottom hairline and shows its identity block again; the hero then shows only the ledger (`display: none` on the hero's identity, so there is always exactly one `h1`). Main padding 1.25rem sides, 4rem bottom.
- **Fluid grids, no fixed column counts:** repeated content uses `repeat(auto-fit, minmax(min(100%, X), 1fr))`: work cards 26rem (an odd last card spans the row), earlier work 22rem, recommendations 20rem, tech groups 16rem. Components in columns of unknown width use container queries (ledger 30rem, timeline 42rem), never viewport guesses. Fixed pixel widths are limits (`clamp`, `minmax`, `max-width`), not the layout.
- **Rhythm:** spacing scale 0.4 / 0.75 / 1.25 / 2 / 3.25rem. Sections separated by 3.25rem; in-section groups by 1.25rem; tight inline gaps 0.5–0.6rem.
- **Jump-nav** is a scroll-spy (`useRailSpy`) marking the section in view.

## Elevation & Depth

Mostly flat with hairlines, with permission for selective layering. Cards sit on Paper Raised with a near-invisible resting shadow; interaction lifts them. Layered presence at rest is allowed for pieces that deserve emphasis — today exactly three: the "En producción hoy" ledger (hero), the featured work card (Rapitrago) and the "Cómo trabajo" folio (Experiencia) — but depth stays soft and neutral, never glowing or coloured.

### Shadow Vocabulary

- **Resting** (`box-shadow: 0 1px 2px rgb(28 28 26 / 0.04)`; dark `0 1px 2px rgb(0 0 0 / 0.3)`): All cards at rest.
- **Lifted** (`box-shadow: 0 14px 32px -18px rgb(28 28 26 / 0.28)`; dark `0 16px 36px -18px rgb(0 0 0 / 0.6)`): Hovered work cards and recommendations, paired with `translateY(-2px)`. Also the allowed resting elevation for an emphasised piece.

### Named Rules

**The Earned Lift Rule.** Elevation signals either interaction or importance. A piece may rest lifted only if it is the most important thing in its section.

## Shapes

Gently rounded rectangles: 2px only for focus-outline corners, 4px (xs) only for an element nested inside a 2px-padded 6px group (the language switch options), 6px for small interactive and data elements (nav items, data points, thumbnails, TODO notes), 10px for cards, fully round for pills, the toggle and nav dots. Every container is fully bordered: no one-sided accent borders (the former 3px case-study "tab" was removed 2026-09-30). Hairlines (1px Rule) do most of the structural work — including the internal header rows and column dividers of the ledger and folio; dashed lines appear only on the visible TODO note and the chart's value ticks.

## Components

Firm and tactile: every interactive element gives a clear, immediate answer (colour shift + lift or underline) in 200ms `cubic-bezier(0.4, 0, 0.2, 1)`.

### Pills (chips)

- **Style:** Transparent, 1px Rule border, full radius, 0.8rem Ink Muted text, 0.3rem × 0.8rem padding.
- **Uses:** Dates in the timeline, tech stack tags, and the **status pill** ("En producción" etc.) in Sage Field Deep text.

### Cards / Containers

- **Corner Style:** 10px.
- **Background:** Paper Raised.
- **Shadow Strategy:** Resting at rest; Lifted + `translateY(-2px)` on hover (see Elevation).
- **Border:** 1px Rule; turns Sage Field on hover for work cards and legacy projects.
- **Internal Padding:** 1.25rem.
- **Work grid and disclosure:** work cards sit in a fluid two-column grid; each shows two highlight bullets and the rest sits behind a native `<details>` "Ver detalle" in Sage Field Deep (underline on hover). The fully visible content is the claim; the detail is one click away.
- **Featured work card:** hierarchy among projects is spatial, not labelled. The project with the most scope (Rapitrago: a backend plus three apps) is the one whose data carries a `system`: it leads the list, spans the whole row, shows all its highlights, uses the 1.3rem head, rests lifted (Earned Lift Rule) and sits beside its architecture diagram. The other cards keep two columns. Chosen by Andrés, 2026-10-06: by business, technologies, learning, dedicated work and scope it outweighs the other two. Layout: text and the product shot on top (a work item's optional `image`, cut out with transparency so a client's gradient never leaks into the one-hue palette; `drop-shadow`, 15rem wide), the system diagram as a hairline-separated band below; it stacks to one column under 44rem of the list's own width.
- **Variants:** _Work card_ (large serif decimal-leading-zero counter top-right in Rule colour), _legacy project row_ (thumbnail 96×64, 15% greyscale until hover, small serif counter, slides `translateX(2px)`), _recommendation_ (serif “ quote mark in Sage Field at 60% opacity, italic body).

### Proof Panels (signature): ledger and folio

The page's two evidence blocks share one construction: Paper Raised, 1px Rule border, 10px radius, Lifted at rest, a header row separated by a hairline, content in hairline-divided rows or columns.

- **"En producción hoy" ledger** (hero): label row with a Sage Field Deep status dot, then one row per product — name + one-line purpose left, the fact in Sage Field Deep (tabular numerals) + detail right, an authored arrow. Rows link to the work cards; hover = Wash + arrow nudges 3px.
- **"Cómo trabajo" folio** (opens Experiencia): serif h3 + the thesis sentence in the header; two columns, _En planta_ (Grupo Arcor) and _En software_ (hoy), with uppercase Sage Field Deep column labels and the source in Ink Muted. The plant column carries an honest two-point slope chart — only the two real measurements (88% → 93%) on an 80–100% scale, open "before" point, filled "after" point, serif value labels, "Antes / Después" axis, caption = the factual sentence (`role="img"` labelled by it). Line draws in on scroll (reduced-motion gated). Columns stack under 640px.

### Credentials gallery

Credentials are shown as the certificates themselves: an auto-fit grid (13rem minimum, five across on wide screens) of the certificate image (1px Rule border, 6px radius, resting shadow), the course name (600), issuer and month, and a "Verificar certificado" link in Sage Field Deep. The whole item is one link to the public verification page; the image is decorative because the text names it. Hover lifts the image 2px with the accent border (pointer devices only). The certificates bring their own colours (blue, olive, sage): they are artifacts, not site decoration, so they are exempt from the One Voice Rule.

### System diagram

A project's architecture, drawn with the timeline chart's grammar and no boxes inside the card: the backend as the hub (filled Sage Field Deep point), a 2px bracket, and one open point per app that consumes it, each a real text row (name + stack). Lines are decoration (CSS); the names stay readable text in a list; a caption states the relation ("Un backend y tres apps que lo consumen."). Under 30rem of its own width the hub connects downward into the bracket. Data lives in `WorkItem.system`; only facts true of the real system go in it.

### Hero (signature)

The page opens on the name at full scale (Hero name, Ink), a 3.5rem × 2px Sage Field Deep rule (the section-heading rule turned up), the role line in Sage Field Deep (1.3rem, 600), the tagline in Ink Muted (≤34ch), a live availability line with the status dot, and below it the "En producción hoy" ledger (max 56rem). One display moment, everything else quiet around it. The name is the page's single `h1` (see Layout for how the rail hides its own copy).

### Typed role line

The role line types itself like terminal input: a `>` prompt in Ink Faint, system monospace (see The Typed Input Exception), an underscore caret in Sage Field Deep. It types "Product Engineer", erases it key by key (backspace), types the motto ("Spec first, code later" / "Primero la spec, después el código"), erases it, and rests on the real role. **It plays once (~4.6s) and never loops**; the caret is solid while typing, blinks three times, then goes. Screen readers get all three texts once (visually hidden copy); reduced motion shows the final role immediately with no caret. The texts live in `content.*.ts` as `profile.roleCycle` plus `profile.role`.

### Experience timeline (parallel bars)

Experience is drawn as parallel bars on a real time axis, one lane per role: a 2px Sage Field Deep line, an open point at the start and a filled point at the end (the slope chart's grammar), Arcor in Ink Faint because the accent marks software work. Overlapping contracts overlap on the page, which is the truthful picture of independent work. The axis is **broken on purpose**: 2013–2022 is squeezed into the left 18% with a drawn break mark, and 2022 to today gets the rest, labelled every year through 2026 with an accent "Hoy"/"Today" marker and hairline. Dates come from `start`/`end` in the content (decimal years, `null` = ongoing), "today" from the clock. Under 42rem of its own width each row stacks (label above bar). Notes stay visible under each role.

### Navigation (rail jump-nav)

- Vertical list between hairlines, 0.8rem, each item a 5px dot + label.
- **Rest:** Ink Muted, Rule dot. **Hover:** Ink text + Wash background. **Active (scroll-spy):** Sage Field Deep text, 600 weight, Wash background, dot in Sage Field Deep scaled 1.6×.

### Data Points (quick info)

Bordered 6px boxes on Sage Field Wash holding a tiny uppercase Ink Faint term and a 500-weight value (Ubicación, Idiomas, Disponibilidad). Border turns Sage Field on hover.

### Links

Rail, footer and credential links: no underline at rest (credentials keep a Rule underline), Sage Field Deep text + matching 1px bottom border on hover.

### Preferences Row (language + theme)

First row of the rail (since 2026-09-30). Left: **language switch**, a segmented ES | EN group (1px Rule border, 6px radius, 2px inner padding, Paper Raised; options 0.8rem 600 with 0.06em tracking, Ink Muted; pressed = Wash background + Sage Field Deep text, `aria-pressed`, each option carries its own `lang`). Right: the theme toggle below. Wraps on narrow widths.

### Theme Toggle

Custom switch over a native checkbox: 2.1rem × 1.15rem track, round knob in Ink Faint; checked = Sage Field border, Wash track, knob slides and turns Sage Field Deep.

### TODO Note

Development-only visible placeholder: dashed Rule border, 6px radius, 0.7rem italic Sage Field Deep text. Marks missing real data instead of inventing it.

## Do's and Don'ts

### Do:

- **Do** give the page one authored motion moment (the typed role line) and let everything else stay still or respond to the pointer; gate it behind `prefers-reduced-motion`.
- **Do** keep claims readable without interaction and put detail behind `<details>`, not behind hover.

- **Do** keep a single accent (Sage Field family) and use it as marks: rules, dots, borders, text, 8–10% washes.
- **Do** reserve Georgia for the name, section headings and numerals; everything else in the system sans.
- **Do** give interactive elements a clear, tactile response: lift (`translateY(-2px)` + Lifted shadow) and/or accent border/underline, 200ms standard ease.
- **Do** number and box evidence (work counters, data points, date pills) so the page reads as a filed dossier.
- **Do** keep the page one continuous paper surface with the dot texture at ≤6% alpha, and support both themes with the same tokens.
- **Do** gate GSAP motion behind `prefers-reduced-motion: no-preference` and zero out CSS transitions under reduced motion; keep `:focus-visible` outlines (2px Sage Field Deep, 2px offset).

### Don't:

- **Don't** loop or auto-scroll content (marquees, idle drifts, endless rotators): it fails WCAG 2.2.2 and the dossier tone. A motion sequence plays once and settles on the true state.
- **Don't** draw a time axis that stops before the present or hides recent years: it makes live work read as stale. The timeline labels every year to 2026 and marks "Hoy".
- **Don't** set a width in pixels as the layout: use `clamp`, `minmax`, `auto-fit` and container queries; pixels are limits.
- **Don't** make a second monospace moment: the typed role line is the one exception to "sans for everything else".

- **Don't** reintroduce the grey side-vignette gradient or any surface edge in the page background; a visible seam where the content ends was the reason it was dropped.
- **Don't** drift toward the neon/gamer look of the current production site: no neon gradients, violets, Poppins/Oswald, glow shadows, or flashy effects.
- **Don't** drift toward a corporate CV: no grey formality, no dense document tables, no stiff HR tone.
- **Don't** add a second accent colour or fill large areas with the accent.
- **Don't** add decoration that proves nothing; every illustrative element must organise or evidence real content (like the 88% → 93% slope chart, which plots only the two real measurements).
- **Don't** put a thick coloured border on one side of a card or row; emphasis comes from elevation, structure and the accent as a mark.
- **Don't** make hovers so faint they read as broken; components here are firm, not whisper-quiet.
