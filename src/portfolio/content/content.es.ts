// Spanish content (source of truth) and the `Content` type. Written from
// docs/content/portfolio-contenido-variante-B.md. English lives in content.en.ts.

import { projects } from '../data/legacyProjects';
// Imported (not a /src/... string href) so Vite fingerprints and ships the PDF in the
// production build — the old href 404ed after `vite build` (harden pass 2026-09-30).
import cvEsUrl from '../../assets/CV_Andres_Medina_esp.pdf';

export const profile = {
  name: 'Andrés Medina',
  role: 'Full Stack Developer',
  // Typed one after another before the page settles on `role` (TypedRole.tsx).
  roleCycle: ['Product Engineer', 'Primero la spec, después el código'],
  tagline: 'Construyo productos de punta a punta, del relevamiento con el cliente a producción.',
  location: 'Tucumán, Argentina · remoto',
  languages: 'Español (nativo) · Inglés (B2)',
  availability: 'Disponible para roles Full Stack o Product Engineer',
  bioParagraphs: [
    'Full Stack Developer. Hoy mantengo dos productos en producción: Chaskyapp, un SaaS multi-tenant de pedidos por WhatsApp que usan dos marcas reales, y Reforest, el sistema de gestión de producción que un equipo de laboratorio forestal usa todos los días.',
    'Antes del software fui ingeniero de procesos en Grupo Arcor durante 9 años, liderando la mejora continua de la planta. Esa forma de trabajar la aplico al desarrollo: primero la especificación, las decisiones documentadas y los resultados medidos. Trabajo con Claude Code bajo Spec-Driven Development.',
  ],
  cvTodo: 'TODO(Andrés): CV desactualizado — exportar el nuevo y reemplazar el PDF',
};

// "En producción hoy" ledger in the first viewport — every fact restates what the
// Chaskyapp/Reforest cards below already say (no new claims). `anchor` = work card id.
export const now = [
  {
    product: 'Chaskyapp',
    what: 'Pedidos por WhatsApp para comercios',
    fact: '2 marcas en producción',
    detail: 'Market del Cevil · Yo Heladerías',
    anchor: 'work-chaskyapp',
  },
  {
    product: 'Reforest',
    what: 'Gestión de producción y laboratorio forestal',
    fact: '10 personas lo usan a diario',
    detail: 'Único desarrollador',
    anchor: 'work-reforest',
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  dates: string;
  // Decimal years (2023.5 = mid-2023) that place the entry on the timeline chart; `end: null`
  // means ongoing. Not shown as text: `dates` is the displayed (and translated) string.
  start: number;
  end: number | null;
  note?: string;
};

// Most recent first, Arcor last (per doc) — Arcor keeps the case-study treatment.
export const experience: ExperienceEntry[] = [
  {
    role: 'Freelance Full Stack Developer',
    company: 'Independiente',
    dates: 'ene. 2023 — actualidad',
    start: 2023,
    end: null,
    note: 'Construyo y mantengo Chaskyapp y Reforest, ambos en producción; desarrollo Rapitrago para Cumbre-tech. Antes: sitios para CABSA, Kurve y Coolco.',
  },
  {
    role: 'Docente Desarrollador Fullstack JavaScript',
    company: 'Desafío Latam',
    dates: 'abr. 2024 — actualidad',
    start: 2024.25,
    end: null,
    note: '4 generaciones, ~240 estudiantes de toda LATAM (entre 30 y 120 por generación). HTML, CSS, JavaScript, React, Node, Express y PostgreSQL. Di la masterclass "Micro diseño para desarrolladores web".',
  },
  {
    role: 'Contractor',
    company: 'Plug-Zone',
    dates: 'nov. 2023 — ene. 2026',
    start: 2023.83,
    end: 2026,
    note: 'Empecé en el frontend de una app de logística y facturación integrada con SAP, y amplié el rol por iniciativa propia a backend, arquitectura y DevOps. Me formé como implementador IAM (NetIQ Identity Manager).',
  },
  {
    role: 'Fullstack Developer',
    company: 'Virtual Remote Partner',
    dates: 'sep. 2023 — dic. 2023',
    start: 2023.67,
    end: 2024,
  },
  {
    role: 'Fullstack Developer',
    company: 'Aythen',
    dates: 'sep. 2023 — nov. 2023',
    start: 2023.67,
    end: 2023.92,
  },
  {
    role: 'Frontend Developer & Mentor técnico',
    company: 'DIUM',
    dates: 'jul. 2022 — sep. 2023',
    start: 2022.5,
    end: 2023.67,
    note: 'Lideré la adopción de Next.js, Tailwind y Storybook.',
  },
  {
    role: 'Fullstack Developer',
    company: 'Totono (GetDeli)',
    dates: 'sep. 2022 — abr. 2023',
    start: 2022.67,
    end: 2023.33,
  },
  {
    role: 'Process Engineer',
    company: 'Grupo Arcor',
    dates: 'may. 2013 — may. 2022 · 9 años',
    start: 2013.33,
    end: 2022.33,
    note: 'Referente de mejora continua de la planta (TPM).',
  },
];

// "Cómo trabajo" block (bolder pass 2026-09-30) — replaces the Arcor case-study card.
// No new claims: the thesis is the bio's own sentence, the plant column is the former
// Arcor bullets, the software column restates facts from the Chaskyapp/Reforest cards.
export const howIWork = {
  thesis: 'Primero la especificación, las decisiones documentadas y los resultados medidos.',
  plant: {
    label: 'En planta',
    source: 'Grupo Arcor · 2013–2022',
    metric: {
      from: 88,
      to: 93,
      caption: 'Subí la eficiencia de una línea de producción del 88% al 93%.',
    },
    points: [
      'Referente de mejora continua de la planta (pilar de mejora enfocada, TPM): coordiné todos los equipos de mejora y lideré equipos de ~10 personas.',
      'Puse en marcha una línea completa trasladada desde otra planta y la dejé funcionando al 80% de eficiencia.',
      'Implementé el sistema de evaluación de desempeño para ~300 personas del pilar de producción.',
    ],
  },
  software: {
    label: 'En software',
    source: 'Hoy',
    points: [
      'Spec-Driven Development con Claude Code.',
      '13+ decisiones de arquitectura documentadas en ADRs (Chaskyapp).',
      '48+ migraciones SQL versionadas (Reforest).',
      'Verificación contra la base real en cada cambio de esquema (Chaskyapp).',
    ],
  },
};

export type WorkItem = {
  title: string;
  status?: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  stack: string[];
  todoNote?: string;
  image?: string;
  demo?: string;
};

const legacyProject = (title: string) => projects.find((p) => p.title === title);

// Current products first, older work after (per doc).
export const professionalWork: WorkItem[] = [
  {
    title: 'Chaskyapp',
    status: 'SaaS multi-tenant · En producción',
    subtitle: 'Pedidos por WhatsApp para comercios, con catálogo y panel de gestión',
    description:
      'Plataforma que construí y mantengo de punta a punta: catálogo mobile-first con carrito y recomendaciones, y un panel de administración de pedidos, stock, ventas y reportes. En producción con Market del Cevil (desde marzo de 2026) y Yo Heladerías (desde agosto de 2026).',
    highlights: [
      'Modelo de suscripción por módulos con feature flags independientes entre sí',
      'Una PWA instalable por tienda, con manifest dinámico',
      'Guard de autorización único para las rutas de administración',
      '13+ decisiones de arquitectura documentadas en ADRs',
      'Flujo con agentes: glosario de dominio, issues listos para el agente y verificación contra la base real en cada cambio de esquema',
    ],
    stack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Supabase',
      'Zustand',
      'TanStack Query',
      'Tailwind',
      'Zod',
    ],
    todoNote: 'TODO(Andrés): ¿se pueden mostrar las URLs públicas de las tiendas? Si no, capturas.',
  },
  {
    title: 'Reforest',
    status: 'Sistema de gestión · En producción',
    subtitle: 'Gestión de producción y laboratorio para una empresa forestal',
    description:
      'Soy el único desarrollador del sistema que usan a diario 10 personas, entre operarios de laboratorio y mandos medios, en una empresa que opera en Argentina y países limítrofes. Cubre trazabilidad de material genético, ensayos de laboratorio, consumo de stock, recetas y planificación de proyectos de reforestación.',
    highlights: [
      'Control de acceso con 4 roles, verificado en el servidor antes de cada mutación y respaldado por Row Level Security',
      '48+ migraciones SQL versionadas',
      'Relevamiento, análisis de negocio y manual funcional para el cliente',
    ],
    stack: ['Next.js', 'React 19', 'Supabase', 'shadcn/ui', 'TanStack Table', 'Zod'],
    todoNote:
      'Sistema privado del cliente. TODO(Andrés): capturas anonimizadas, con permiso del cliente.',
  },
  {
    title: 'Rapitrago',
    status: 'App mobile + backend · En desarrollo',
    subtitle: 'Plataforma de delivery de bebidas (cliente: Cumbre-tech)',
    description:
      'Trabajo en la app para clientes (React Native / Expo) y en el panel de administración y backend (Laravel).',
    stack: ['React Native', 'Expo', 'Expo Router', 'Zustand', 'Laravel 11', 'PHP'],
  },
];

export const legacyWork: WorkItem[] = [
  {
    title: 'CABSA',
    description: 'Sitio progresivo con blog, maquetado desde Figma.',
    stack: ['Next.js', 'TypeScript'],
    image: legacyProject('CABSA')?.image,
    demo: legacyProject('CABSA')?.demo,
  },
  {
    title: 'Kurve',
    description: 'Sitio institucional completo, responsive, desde diseño en Figma.',
    stack: ['Next.js', 'TypeScript'],
    image: legacyProject('Kurve')?.image,
    demo: legacyProject('Kurve')?.demo,
  },
  {
    title: 'Coolco',
    description: 'Landing con rutas para venta de tickets y NFTs.',
    stack: ['Next.js', 'TypeScript', 'CSS Modules'],
    image: legacyProject('Coolco')?.image,
    demo: legacyProject('Coolco')?.demo,
  },
];

export const techCategories = [
  {
    label: 'Frontend',
    items: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Tailwind',
      'shadcn/ui',
      'Zustand',
      'TanStack Query',
      'Zod',
    ],
  },
  { label: 'Mobile', items: ['React Native', 'Expo'] },
  {
    label: 'Backend y datos',
    items: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Prisma', 'Laravel'],
  },
  {
    label: 'Desarrollo con IA',
    items: ['Claude Code', 'Spec-Driven Development', 'Agent Skills', 'MCP'],
  },
];

// 4 credentials now (doc: "Introduction to Model Context Protocol" was missing before).
export const credentials = [
  { name: 'Claude Code in Action', issuer: 'Anthropic Academy', date: '2026', verifyUrl: '#' },
  {
    name: 'Building with the Claude API',
    issuer: 'Anthropic Academy',
    date: '2026',
    verifyUrl: '#',
  },
  {
    name: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic Academy',
    date: '2026',
    verifyUrl: '#',
  },
  {
    name: 'Introduction to Agent Skills',
    issuer: 'Anthropic Academy',
    date: '2026',
    verifyUrl: '#',
  },
];

// ---------- i18n (harden pass 2026-09-30) ----------
// Interface strings (everything that is not content data). English lives in
// content.en.ts with the same shape — TypeScript enforces parity via Content.
export const uiEs = {
  skip: 'Saltar al contenido',
  langGroup: 'Idioma',
  navLabel: 'Secciones del portfolio',
  nav: {
    about: 'Sobre mí',
    portfolio: 'Mis trabajos',
    experience: 'Experiencia',
    tech: 'Tecnologías',
    recomendations: 'Recomendaciones',
    contact: 'Contacto',
  },
  availabilityLabel: 'Disponibilidad',
  locationLabel: 'Ubicación',
  languagesLabel: 'Idiomas',
  downloadCv: 'Descargar CV',
  writeMe: 'Escribime',
  themeLabel: 'Modo oscuro',
  nowTitle: 'En producción hoy',
  legacySubhead: 'Trabajos anteriores (2022–2023)',
  newTab: '(abre en una pestaña nueva)',
  moreDetail: 'Ver detalle',
  todayLabel: 'Hoy',
  howTitle: 'Cómo trabajo',
  chartBefore: 'Antes',
  chartAfter: 'Después',
  credentials: 'Credenciales',
  // Shown only when the recommendations are in a different language than the page.
  reviewsNote: '',
  writeMeAt: 'Escribime a',
};

export const contentEs = {
  lang: 'es' as 'es' | 'en',
  cvUrl: cvEsUrl,
  ui: uiEs,
  profile: profile,
  now: now,
  experience: experience,
  howIWork: howIWork,
  work: professionalWork,
  legacy: legacyWork,
  tech: techCategories,
  credentials: credentials,
};

export type Content = typeof contentEs;
