# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: **recruiters and hiring managers** evaluating Andrés Medina for a remote **Full Stack Developer or Product Engineer** role, including companies abroad. They skim fast, decide in minutes whether he is worth an interview, and look for real production work, seniority signals, and a CV to forward.

Secondary: **prospective freelance/consulting clients** deciding whether to hire him to build a product end to end. They look for delivered products with real users and evidence he can run the whole cycle (discovery → production).

When a decision has to favour one audience, it favours the recruiter.

## Product Purpose

A curated personal site that communicates Andrés's track record and current work. It is not a blog and not a product. Success = a recruiter (or client) leaves with enough conviction to contact him or download his CV.

## Positioning

A Full Stack Developer who builds products end to end, from the client discovery to production, and who today **maintains two products in production with real users** (Chaskyapp, Reforest). Before software he spent 9 years as a process engineer at Grupo Arcor leading continuous improvement, and he brings that discipline to development: specification first, documented decisions, measured results — working with Claude Code under Spec-Driven Development.

He is **actively available** for Full Stack / Product Engineer roles; the site says so plainly.

## Operating Context

- Visitors usually arrive from LinkedIn, a job application, or a direct link, often on desktop during screening, also on mobile.
- Recruiters forward the CV PDF and verify claims (credentials link to public verification pages).
- Clients want to see the product itself: live links or screenshots, stack, and scope of his role.

## Capabilities and Constraints

- Codebase: Vite + React 18 + TypeScript, GSAP. No contact form (the old EmailJS/Formik form was removed 2026-10-05): contact is the visible email address (mailto) plus LinkedIn/GitHub. Light/dark theme.
- Redesign in progress: **Variant B (split rail — fixed rail left, content right)** is the chosen layout (`src/portfolio/`, decided 2026-09-28). Promoted to the home route on `dev` (2026-10-05); not on `main`/production yet. Since 2026-10-06 the layout is **fluid** (the content column takes the space the rail leaves; grids are `auto-fit`) and the identity (name, typed role line, availability) lives in a **hero** at the top of the content column, with the rail keeping nav, quick facts and CV/contact.
- Architecture: a single feature folder `src/portfolio/` (ADR 0001 + 0002); Storybook removed.
- **Bilingual: Spanish + English**, with a language switcher. English copy exists for every section (`content.en.ts`); recommendations stay in their original Spanish, tagged as such. No native-speaker review of the English is recorded in the repo.
- Sections: Hero (name, typed role line, availability, "En producción hoy" ledger; nav label "Sobre mí"), Mis trabajos (only "Trabajo profesional"; Labs and Proyectos personales removed as junior signal — a future "Open source" tab is allowed), Experiencia ("Cómo trabajo" folio with Arcor as the one full case study, plus the career drawn as parallel bars on a broken time axis), Tecnologías (a ledger of three marquee rows with logos: interface; backend, data and mobile; AI-assisted development, the last limited to what the Anthropic credentials cover plus SDD; a deliberate, bounded exception to the no-looping-content rule, with no evidence matrix since 2026-10-07), Credenciales, Recomendaciones, Contacto.
- Domain terminology lives in `CONTEXT.md`.

## Brand Commitments

- Voice: technical but casual, first person, no empty corporate jargon.
- Editorial restraint and level of polish referenced from estebanburgos.com.ar (direction, not a template).
- Background: the production dotted pattern is kept as a soft texture on a flat paper surface; the production grey gradient was dropped on 2026-10-05 (Andrés's decision — it cut off where the content column ended).

## Evidence on Hand

Real content source of truth: `docs/content/portfolio-contenido-variante-B.md` and `src/portfolio/content/content.es.ts`.

- Products in production: Chaskyapp (multi-tenant SaaS, live with Market del Cevil since Mar 2026 and Yo Heladerías since Aug 2026), Reforest (used daily by 10 people; 4 roles + RLS; 48+ SQL migrations). In development: **Rapitrago** (client Cumbre-tech), which Andrés ranks as his most important project by business, technologies, learning, dedicated work and scope. It is four products he works on: the customer app (Pedí), the store app (Vendé), the driver app (Repartí) and the admin panel. It is featured first, shown through the customer app's capture and the four products, with Rapitrago's logo and orange as a contained exception. **No technology of the client's stack is shown on the site** (Andrés, 2026-10-06: it is the client's, and a stack choice can read as a success or a failure); each product is described by its function. It is about to go to production, so its status pill shows no lifecycle state. The logo and the capture come from rapitrago.com's public site; Andrés confirmed (2026-10-06) that he may use them, and approved the one-line description of each product.
- Earlier client work: CABSA, Kurve, Coolco (2022–2023).
- Experience timeline including Desafío Latam teaching (~240 students, 4 cohorts) and Arcor metrics (line efficiency 88% → 93%; line start-up to 80%; performance review system for ~300 people).
- 5 Anthropic Education credentials (May–Sep 2026): Claude Code 101, Claude Code in Action, Building with the Claude API, Introduction to Model Context Protocol, Introduction to Agent Skills. Each links to its public Skilljar verification page and shows the certificate image.
- Existing recommendations.

Open / must not be fabricated:

- New CV PDF (current one is outdated).
- Public URLs or screenshots for Chaskyapp; anonymized, client-approved screenshots for Reforest.
- Newer recommendations (Satori, Market del Cevil, Desafío Latam, Plug-Zone).
- A native-speaker review of the English copy.
- Phase dates for the Plug-Zone contract (frontend → backend → infrastructure → NetIQ connectors and workflows): the timeline shows it as one bar until real dates exist.

## Product Principles

1. **Production proof over lists of skills.** Real products with real users lead; stack grids support.
2. **Recruiter-scannable first.** Role, availability, current work and CV reachable within the first viewport and seconds of reading.
3. **Curated, not exhaustive.** Remove anything that signals junior (course exercises, bootcamp as experience).
4. **Verifiable claims only.** Every metric, credential and client is real and, where possible, linkable; gaps stay visible TODOs, never invented.
5. **Engineering discipline as differentiator.** The Arcor → specification/ADRs/measured results thread is the story no neighbouring portfolio can copy.
