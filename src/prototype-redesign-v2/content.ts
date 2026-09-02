// PROTOTYPE — throwaway. Adapts real site data + draft-only Experience/credentials
// content (gathered during the 2026-09 grilling session) for the 3 redesign variants.
// Draft items are marked explicitly — they are NOT final copy.

import { projects } from '../mockData/projects';
import { labsProjects } from '../mockData/labsProjects';
import { reviews } from '../mockData/recomendations';
import { contactDetails } from '../mockData/contact';
import { itemsNav } from '../mockData/navItems';

export { contactDetails, itemsNav };

export const profile = {
  name: 'Andrés Medina',
  role: 'Full Stack Developer',
  tagline: 'Ingeniero Industrial devenido en developer. Uso IA a diario, no solo la menciono.',
  bio: 'Full Stack Developer con foco en frontend, con base en Ingeniería Industrial. Los últimos años combino freelance con docencia, y llevo el uso de IA (Claude Code, MCP) como parte activa de mi flujo de trabajo, no como buzzword.',
  location: 'Tucumán, Argentina',
  languages: 'Español (nativo) · Inglés (B2)',
  availability: 'Selectivo — abierto a la oportunidad correcta',
};

// DRAFT — real facts gathered this session (Arcor, Desafío Latam) mixed with CV data.
// Plug-Zone end date still unconfirmed; exact final copy is implementation work, not this prototype's concern.
export const experience = {
  caseStudy: {
    role: 'Process Engineer',
    company: 'Grupo Arcor',
    dates: 'may. 2013 — may. 2022 · 9 años',
    summary:
      'Lideré equipos de mejora continua aplicando la metodología TPM de 7 pasos, organicé turnos de producción con Just In Time, y llevé adelante análisis estadístico de procesos. Implementé el sistema de evaluación de desempeño para ~300 personas del pilar de producción.',
  },
  timeline: [
    {
      role: 'Docente Desarrollador Fullstack JavaScript',
      company: 'Desafío Latam',
      dates: 'abr. 2024 — actualidad',
      note: 'Remoto · Enseño HTML/CSS/JS/React/Node/Express/PostgreSQL a estudiantes de toda LATAM.',
    },
    {
      role: 'Frontend Developer',
      company: 'Plug-Zone',
      dates: 'nov. 2023 — (fecha de cierre a confirmar)',
    },
    { role: 'Freelance Frontend Developer', company: 'Independiente', dates: 'ene. 2023 — actualidad' },
    { role: 'Fullstack Developer', company: 'Virtual Remote Partner', dates: 'sep. 2023 — dic. 2023' },
    { role: 'Fullstack Developer', company: 'Aythen', dates: 'sep. 2023 — nov. 2023' },
    { role: 'Frontend Developer & Mentor técnico', company: 'DIUM', dates: 'jul. 2022 — sep. 2023' },
    { role: 'Fullstack Developer', company: 'Totono (GetDeli)', dates: 'sep. 2022 — abr. 2023' },
    { role: 'Full Stack Web Developer', company: 'Henry Bootcamp', dates: 'may. 2022 — jul. 2022' },
  ],
};

export const techStack = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Prisma',
  'Git / GitHub',
];

export const aiStack = ['Claude Code', 'MCP', 'Cursor'];

// DRAFT — placeholder credential names pending confirmation; layout-only, not final copy.
export const credentials = [
  { name: 'Introduction to Agent Skills', issuer: 'Anthropic Academy', date: '2026', verifyUrl: '#' },
  { name: 'Claude Code in Action', issuer: 'Anthropic Academy', date: '2026', verifyUrl: '#' },
  { name: 'Building with the Claude API', issuer: 'Anthropic Academy', date: '2026', verifyUrl: '#' },
];

const byTitle = (titles: string[]) =>
  projects.filter((p) => titles.includes(p.title));

export const workProfessional = byTitle(['CABSA', 'Kurve', 'Coolco']);
export const workPersonal = byTitle([
  'Memory card game',
  'tic tac toe',
  'Sudoku',
  'buscador de peliculas',
  'to do app',
]);
export const workLabs = [
  ...byTitle(['PI - Countries Henry']),
  ...labsProjects.slice(0, 6),
];
export const workLabsMoreCount = labsProjects.length - 6;

export { reviews };
