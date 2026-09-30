---
target: src/prototype-redesign-v2/variants/VariantB.tsx
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 3
target_identity: "file:C:\\Users\\cabez\\OneDrive\\Escritorio\\PROYECTOS\\_personal\\portfolio-vite\\src\\prototype-redesign-v2\\variants\\VariantB.tsx"
target_fingerprint: "sha256:569bd49771ea5a7550a19612c6b7390b64b6f79ab8adf7e0f63ab8ec834b4e2d"
target_path: "C:\\Users\\cabez\\OneDrive\\Escritorio\\PROYECTOS\\_personal\\portfolio-vite\\src\\prototype-redesign-v2\\variants\\VariantB.tsx"
timestamp: 2026-09-30T02-29-36Z
slug: src-prototype-redesign-v2-variants-variantb-tsx
closed: true
---
Method: dual-agent (A: design review · B: detector + browser)

# Critique — Variant B (src/prototype-redesign-v2/variants/VariantB.tsx)

## Heuristics (20/32; 7 and 10 n/a)
1 Visibility 2 — scroll-spy marks Experiencia at load; Sobre mí/Contacto never active.
2 Real world 3 — html lang="en" on Spanish copy; no English.
3 Control 3 — no way back to nav on mobile.
4 Consistency 2 — work-card <p> at browser default size; case-study padding overridden to 0; links look like text.
5 Error prevention 2 — credentials href="#"; CV path /src/assets/...pdf breaks in prod build.
6 Recognition 3 — CV is a plain link among four.
7 n/a (portfolio). 8 Aesthetic 3 — wide empty right area; dotted grid under text in light mode.
9 Error recovery 2 — mailto only; dead # links. 10 n/a.

## Design specificity
Partly specific: generic structure, specific content. Dossier idea is styling, not composition. Arcor→SDD thread buried.
Detector: VariantB.tsx alone clean; directory: side-tab (VariantB.css:296, false positive — documented case-study tab), 3x design-system-font-size (0.65/1.1/2.2rem — documentation gap), 1x radius 2px focus (false positive).
Browser overlay (dark): 13 — low-contrast 6 (Ink Faint #75756f fails AA on all dark bgs = real; accent role line = FP; tagline borderline 4.48:1), undersized text 4 (dt 10.4px, todo 11.2px), line-length 4 (.vb-reveal p 101–114ch, real), body transition all 0.4s from src/index.css (real, legacy).

## Priority issues
- [P0] Production proof buried, no primary action — reorder (Bio → Mis trabajos → Experiencia → ...), "Now" strip, CV + Escribime button pair, availability as status pill. layout + clarify.
- [P1] Arcor case study broken (`.vb-timeline > li.vb-casestudy {padding:0}` specificity), unlabeled sparkline, placed last. polish + bolder.
- [P1] No English; lang="en" wrong. harden + adapt.
- [P1] Contrast/legibility of labels (Ink Faint, 0.65rem, Rule-colored counters ~1.2:1, grid behind text in light mode, no max-width on paragraphs). audit + colorize.
- [P2] Junior signals / unverifiable claims: bootcamp-peer recommendations, # credentials, legacy work has thumbnails but flagship doesn't. distill.

## Persona red flags
Recruiter: no products in first viewport; CV beside TODO; 2–3 month 2023 stints expanded; no years summary.
English hiring manager: all Spanish; no UTC-3; local jargon.
Freelance client: no screenshots/links for current products; Chaskyapp card leads with internals; mailto only.
Keyboard/SR: no skip link (11 rail stops); bio without heading; toggle announced "on"; aria-current should be "location"; legacy project links maybe empty name.

## Minor
Infinite yoyo accent line; reveal reverses on scroll-up; hover on non-interactive data boxes; mobile rail ≈ full screen; footer Contacto duplicates rail; "Github"→"GitHub"; body transition all.

## Questions
1. Why is the first screen a bio paragraph, not "2 products in production" + CV button?
2. Is Arcor a timeline line or the thesis of the page?
3. What would a recruiter miss without the 21-pill tech wall and bootcamp recommendations?
