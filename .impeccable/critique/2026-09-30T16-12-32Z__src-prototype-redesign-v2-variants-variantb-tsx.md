---
target: src/prototype-redesign-v2/variants/VariantB.tsx
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\cabez\\OneDrive\\Escritorio\\PROYECTOS\\_personal\\portfolio-vite\\src\\prototype-redesign-v2\\variants\\VariantB.tsx"
target_fingerprint: "sha256:0b7b02ffd40a16e64c16daae90f5c5e311f051ea3d25046cf02da173270f9082"
target_path: "C:\\Users\\cabez\\OneDrive\\Escritorio\\PROYECTOS\\_personal\\portfolio-vite\\src\\prototype-redesign-v2\\variants\\VariantB.tsx"
timestamp: 2026-09-30T16-12-32Z
slug: src-prototype-redesign-v2-variants-variantb-tsx
---
Method: dual-agent (A: design review · B: detector + browser)

# Critique — Variant B, run 2 (after layout, clarify, bolder, colorize, harden, adapt, polish)

## Heuristics (23/32; 7 and 10 n/a) — previous run 20/32
1 Visibility 3 (was 2) — scroll-spy fixed; CV button gives no format/size/date.
2 Real world 3 — lang synced, EN version; no years-of-experience figure.
3 Control 2 (was 3) — theme always loads dark (no persistence, ignores OS); mobile has no nav/back-to-top on a ~7300px page.
4 Consistency 3 (was 2) — legacy work has thumbnails+links, flagships none; two "01–03" sequences.
5 Error prevention 3 (was 2) — CV ships in prod; no # links; outdated 2024 CV served silently.
6 Recognition 3.
7 n/a. 8 Aesthetic 3 — evidence text small/dense; 380px empty gutter at 1440.
9 Error recovery 3 (was 2) — visible copyable email.
10 n/a.

## Design specificity
~60/40 specific: ledger, honest slope chart, plant/software folio, numbered evidence are product-specific; the split-rail frame, tech pill wall, recommendation cards and rail tagline are category-generic. Arcor → software thread sits ~2150px down.
Detector: CLI 0 findings (was 5). Browser overlay 6 (was 13): skip-link low-contrast (FP, off-screen until focus / hidden-tab artifact), vb-todo tiny-text (FP, dev-only, label-micro floor), thin-border-wide-shadow on .vb-now/.vb-how (intended Earned Lift), all-caps-body on .vb-how-label (borderline real, 41 chars), layout-transition on body (FP, computed transition is bg/color only).

## Previous priority issues
- [P0] proof buried / no primary action — resolved on desktop; mobile ledger still below fold.
- [P1] Arcor case study broken — resolved ("Cómo trabajo").
- [P1] no English / wrong lang — resolved.
- [P1] contrast/labels — resolved (min 4.62:1 both themes).
- [P2] junior signals — deferred by user.

## Priority issues (new)
- [P1] GSAP reveal uses autoAlpha → visibility:hidden until scrolled: unrevealed links unreachable by Tab (ledger rows, legacy project links), headings missing from SR heading nav, Ctrl+F can't find text, content stuck invisible if ScrollTrigger fails. Fix: animate opacity/y only (or reveal on focusin). harden.
- [P1] Evidence weight inverted: Chaskyapp/Reforest have no link/screenshot; 2022 sites (incl. NFT landing) have thumbnails + live links. layout → distill.
- [P2] Differentiator buried, generic tagline, no seniority line, role line "Full Stack Developer" vs availability "Full Stack or Product Engineer". clarify.
- [P2] Junior signals persist: bootcamp recommendations (Spanish in EN), short overlapping 2022–23 stints at full weight, "Introduction to…" credentials. distill.
- [P2] Mobile fold (ledger y≈880 in prod) and evidence at 12.8px / legacy 11.2px. adapt + typeset.

## Persona red flags
Recruiter: generic tab title; no years; no stack keywords in first viewport; short stints read as churn; CV silently 2024 with hashed filename.
Hiring manager abroad: 2024 English CV; Spanish-italic quotes; untranslated document title; dev-only Spanish TODO leaks into EN (profile spreads contentB_es.profile incl. cvTodo).
Freelance client: no product visuals/URLs; only clickable work is 2022 marketing sites; no process/engagement info; bare mailto.
Keyboard/SR: autoAlpha hides links/headings; lang options aria-label "Español" vs visible "ES" (2.5.3); very long ledger-row names; chart caption announced twice.

## Minor
Accent squiggle is decoration; two numbering systems; ES location lacks UTC−3; no prefers-color-scheme; CV download has no filename; contact doesn't repeat CV action.

## Questions
1. Why does the first line under the name say what every developer says, if Arcor → software is the uncopyable story?
2. What would a recruiter lose/gain if Recomendaciones, Trabajos anteriores and the short stints disappeared?
3. What is the smallest honest visual of something shipped to production?
