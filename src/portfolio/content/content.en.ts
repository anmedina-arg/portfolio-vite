// English content (harden pass 2026-09-30).
// DRAFT TRANSLATION pending Andrés's review: a faithful translation of the Spanish
// content in content.es.ts — no new claims. Proper names (companies, products, the
// masterclass title) stay as they are. Stack, images and links are reused from the
// Spanish data by index, so only the words live here. `Content` enforces the shape.
//
// Feedback quotes are NOT translated on purpose: they are other people's words, so
// they render in their original Spanish (marked lang="es") with `ui.feedbackLead`.
import cvEnUrl from '../../assets/CV_Andres_Medina_eng.pdf';
import {
  contentEs,
  experience,
  legacyWork,
  professionalWork,
  type Content,
} from './content.es';

const withText = <T>(base: T[], texts: Partial<T>[]): T[] =>
  base.map((item, i) => ({ ...item, ...texts[i] }));

export const contentEn: Content = {
  lang: 'en',
  cvUrl: cvEnUrl,
  ui: {
    skip: 'Skip to content',
    langGroup: 'Language',
    navLabel: 'Portfolio sections',
    nav: {
      about: 'About',
      portfolio: 'Work',
      experience: 'Experience',
      credentials: 'Credentials',
      feedback: 'Feedback',
      contact: 'Contact',
    },
    availabilityLabel: 'Availability',
    locationLabel: 'Location',
    languagesLabel: 'Languages',
    downloadCv: 'Download CV',
    writeMe: 'Email me',
    themeLabel: 'Dark mode',
    nowTitle: 'In production today',
    legacySubhead: 'Earlier work (2022–2023)',
    newTab: '(opens in a new tab)',
    moreDetail: 'Show more',
    todayLabel: 'Today',
    howTitle: 'How I work',
    chartBefore: 'Before',
    chartAfter: 'After',
    credentials: 'Credentials',
    verifyCert: 'Verify certificate',
    feedbackLead:
      'Four observation reports of my classes at Desafío Latam (2024–2026, two cohorts). Verbatim excerpts, in their original Spanish.',
    writeMeAt: 'Write to me at',
  },
  profile: {
    ...contentEs.profile,
    tagline: 'I build products end to end, from client discovery to production.',
    location: 'Tucumán, Argentina · remote (UTC−3)',
    languages: 'Spanish (native) · English (B2)',
    availability: 'Available for Full Stack or Product Engineer roles',
    roleCycle: ['Product Engineer', 'Spec first, code later'],
    bioParagraphs: [
      'Full Stack Developer. I currently maintain two products in production: Chaskyapp, a multi-tenant SaaS for WhatsApp ordering used by two real brands, and Reforest, the production management system a forestry lab team uses every day.',
      "Before software, I spent 9 years as a process engineer at Grupo Arcor, leading the plant's continuous improvement. I bring that way of working to development: specification first, documented decisions and measured results. I work with Claude Code using Spec-Driven Development.",
    ],
  },
  now: withText(contentEs.now, [
    { what: 'WhatsApp ordering for retailers', fact: '2 brands in production' },
    {
      what: 'Production and lab management for forestry',
      fact: '10 people use it daily',
      detail: 'Sole developer',
    },
  ]),
  experience: withText(experience, [
    {
      company: 'Independent',
      dates: 'Jan 2023 — present',
      note: 'I develop Rapitrago for Cumbre-tech (a Laravel backend and three mobile apps); I build and maintain Chaskyapp and Reforest, both in production. Before that: websites for CABSA, Kurve and Coolco.',
    },
    {
      role: 'Full Stack JavaScript Instructor',
      dates: 'Apr 2024 — present',
      note: '4 cohorts, ~240 students across Latin America (30 to 120 per cohort). HTML, CSS, JavaScript, React, Node, Express and PostgreSQL. Gave the masterclass "Micro diseño para desarrolladores web" (micro design for web developers).',
    },
    {
      dates: 'Nov 2023 — Jan 2026',
      note: 'I started on the frontend of a logistics and invoicing app integrated with SAP, and on my own initiative expanded the role to backend, architecture and DevOps. Trained as an IAM implementer (NetIQ Identity Manager).',
    },
    { dates: 'Sep 2023 — Dec 2023' },
    { dates: 'Sep 2023 — Nov 2023' },
    {
      role: 'Frontend Developer & Technical Mentor',
      dates: 'Jul 2022 — Sep 2023',
      note: 'Led the adoption of Next.js, Tailwind and Storybook.',
    },
    { dates: 'Sep 2022 — Apr 2023' },
    {
      dates: 'May 2013 — May 2022 · 9 years',
      note: 'Continuous improvement lead for the plant (TPM).',
    },
  ]),
  howIWork: {
    thesis: 'Specification first, documented decisions and measured results.',
    plant: {
      ...contentEs.howIWork.plant,
      label: 'On the plant floor',
      metric: {
        ...contentEs.howIWork.plant.metric,
        caption: "Raised a production line's efficiency from 88% to 93%.",
      },
      points: [
        'Continuous improvement lead for the plant (focused improvement pillar, TPM): coordinated every improvement team and led teams of ~10 people.',
        'Commissioned a complete line relocated from another plant and got it running at 80% efficiency.',
        'Implemented the performance review system for ~300 people in the production pillar.',
      ],
    },
    software: {
      label: 'In software',
      source: 'Today',
      points: [
        'Spec-Driven Development with Claude Code.',
        '13+ architecture decisions documented as ADRs (Chaskyapp).',
        '48+ versioned SQL migrations (Reforest).',
        'Verification against the real database on every schema change (Chaskyapp).',
      ],
    },
  },
  work: withText(professionalWork, [
    {
      status: 'Four products',
      subtitle: 'Beverage delivery platform (client: Cumbre-tech)',
      description:
        'A complete platform: the app where people order, the one for stores, the one for drivers, and the panel that runs it all. I work on all four products.',
      highlights: [
        'Four connected products, each built for a different kind of user',
        'Live order tracking and a cart that spans several stores',
      ],
      imageAlt:
        'Rapitrago customer app: home with categories, open stores and live delivery tracking.',
      products: [
        {
          id: 'customer',
          name: 'Pedí',
          audience:
            'App for people ordering: a catalog from several stores and live order tracking',
        },
        { id: 'store', name: 'Vendé', audience: 'App for stores: orders, catalog and stock' },
        {
          id: 'driver',
          name: 'Repartí',
          audience: 'App for drivers: they receive and deliver the orders',
        },
        {
          id: 'admin',
          name: 'Admin panel',
          audience: 'Where the whole platform is managed',
        },
      ],
    },
    {
      status: 'Multi-tenant SaaS · In production',
      subtitle: 'WhatsApp ordering for retailers, with a catalog and a management dashboard',
      description:
        'A platform I built and maintain end to end: a mobile-first catalog with cart and recommendations, and an admin dashboard for orders, stock, sales and reports. In production with Market del Cevil (since March 2026) and Yo Heladerías (since August 2026).',
      highlights: [
        'Module-based subscription model with independent feature flags',
        'One installable PWA per store, with a dynamic manifest',
        'A single authorization guard for all admin routes',
        '13+ architecture decisions documented as ADRs',
        'Agent workflow: domain glossary, agent-ready issues and verification against the real database on every schema change',
      ],
      imageAlt:
        "Chaskyapp: the product's landing page on a computer and Market del Cevil's catalog on a phone.",
    },
    {
      status: 'Management system · In production',
      subtitle: 'Production and lab management for a forestry company',
      description:
        "I'm the sole developer of the system 10 people use daily, from lab operators to middle managers, at a company operating in Argentina and neighboring countries. It covers genetic material traceability, lab trials, stock consumption, recipes and reforestation project planning.",
      highlights: [
        'Access control with 4 roles, verified on the server before every mutation and backed by Row Level Security',
        '48+ versioned SQL migrations',
        'Requirements gathering, business analysis and a functional manual for the client',
      ],
    },
  ]),
  legacy: withText(legacyWork, [
    { description: 'Progressive website with a blog, built from Figma designs.' },
    { description: 'Complete, responsive corporate website built from Figma designs.' },
    { description: 'Landing page with routes for ticket and NFT sales.' },
  ]),
  credentials: contentEs.credentials,
};
