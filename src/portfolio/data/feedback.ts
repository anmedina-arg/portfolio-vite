import type { Lang } from '../hooks/useLang';
import { reviews } from './recomendations';

export type FeedbackItem = {
  id: string;
  // Always the original wording (Spanish): these are other people's words, never translated.
  quote: string;
  author: string | Record<Lang, string>;
  context?: Record<Lang, string>;
};

const academic: Record<Lang, string> = {
  es: 'Facilitación académica · Desafío Latam',
  en: 'Academic facilitation · Desafío Latam',
};

// Verbatim excerpts from the "Informe de acompañamiento" reports Desafío Latam wrote after
// observing Andrés's classes, newest first. Every report also lists areas to improve; only
// the strengths are quoted, and the section says so (`ui.feedbackNote`). The reviewers are
// not named on purpose, and the reports' personal data and session recordings stay out.
const observations: FeedbackItem[] = [
  {
    id: 'adl-g99-2026-03',
    quote:
      'La sesión se caracterizó por un clima de interacción y una sólida base teórica proporcionada por el facilitador, quien demostró un profundo conocimiento en seguridad (SQL injection) y conceptos de Node.js.',
    author: academic,
    context: {
      es: 'Informe de acompañamiento · Docente, Full Stack JavaScript G99 · mar. 2026',
      en: 'Observation report · Instructor, Full Stack JavaScript G99 · Mar 2026',
    },
  },
  {
    id: 'adl-g99-2025-07',
    quote:
      'Andrés en esta sesión se destacó por su dominio técnico, claridad pedagógica y una notable capacidad para motivar a los estudiantes conectando el aprendizaje con el mundo profesional.',
    author: academic,
    context: {
      es: 'Informe de acompañamiento · Docente, Full Stack JavaScript G99 · jul. 2025',
      en: 'Observation report · Instructor, Full Stack JavaScript G99 · Jul 2025',
    },
  },
  {
    id: 'adl-g90-2025-02',
    quote:
      'Andrés llevó a cabo una sesión con una secuencia didáctica estructurada, asegurándose de que cada parte de la tutoría se desarrollara correctamente. Destacó por su habilidad para gestionar la frustración de los estudiantes, brindándoles apoyo y contención en momentos clave, lo que favoreció un ambiente de aprendizaje positivo.',
    author: academic,
    context: {
      es: 'Informe de acompañamiento · Tutoría de sesión, Full Stack JavaScript G90 · feb. 2025',
      en: 'Observation report · Session tutor, Full Stack JavaScript G90 · Feb 2025',
    },
  },
  {
    id: 'adl-g90-2024-11',
    quote:
      'Su estructura ordenada y claridad en las explicaciones son fortalezas clave que facilitan el aprendizaje de los estudiantes.',
    author: academic,
    context: {
      es: 'Informe de acompañamiento · Tutoría de sesión, Full Stack JavaScript G90 · nov. 2024',
      en: 'Observation report · Session tutor, Full Stack JavaScript G90 · Nov 2024',
    },
  },
];

// Observations first (outside evaluators, newest first), then the peers' words.
export const feedback: FeedbackItem[] = [
  ...observations,
  ...reviews.slice(0, 3).map((r) => ({ id: `peer-${r.id}`, quote: r.review, author: r.name })),
];
