---
target: todo el sitio
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:C:\\Users\\cabez\\OneDrive\\Escritorio\\PROYECTOS\\_personal\\portfolio-vite\\src\\portfolio\\PortfolioPage.tsx"
target_fingerprint: "sha256:eca70ea1769e1d521237a58cd6eddd60940843bc1981b315e320dddb06c7e0f5"
target_path: "C:\\Users\\cabez\\OneDrive\\Escritorio\\PROYECTOS\\_personal\\portfolio-vite\\src\\portfolio\\PortfolioPage.tsx"
timestamp: 2026-10-06T12-29-31Z
slug: src-portfolio-portfoliopage-tsx
---
Method: dual-agent (A: design review - B: detector + browser evidence)

# Critique: todo el sitio (localhost:5173, src/portfolio)

Score 22/32 (heuristics 7 and 10 n/a). Acceptable, borderline Good.

Heuristics: 1=3, 2=3, 3=3, 4=3, 5=2, 6=3, 8=3, 9=2.

Design specificity: authored but half-finished (~70%). Strong: "En produccion hoy" ledger, honest 88->93 slope. Generic: tech pill soup, testimonial row, small legacy cards. Engineering discipline is told, not shown.

Detector: PortfolioPage.tsx clean. Browser: tiny-text 11.2px (TODO notes, dt labels) true; 4 low-contrast false positives (hidden tab froze transitions; settled min contrast 4.63:1 light / 4.64:1 dark); thin-border-wide-shadow on ledger and folio is intentional (Earned Lift); em-dash x21; clamp() font-size in .vb-bio off DESIGN.md ramp.

Priority issues:
- [P0] Stale CV is the primary CTA (clarify)
- [P1] Credentials unlinked, no product URLs/screenshots, recommendations weak (shape)
- [P1] Mobile: nav hidden under 860px, rail eats first screen, small tap targets (adapt)
- [P2] Fluid layout left blank halves: timeline text ~440px in ~1090px row, folio right column, Rapitrago card (layout)
- [P2] Rail overloaded (13 controls) and clipped on short laptops (distill)

Personas: Jordan, Sam, Casey, hiring manager abroad verifying claims. Contract dates overlap (Plug-Zone vs VRP/Aythen).
