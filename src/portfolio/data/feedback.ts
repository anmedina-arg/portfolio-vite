import type { Lang } from '../hooks/useLang';

export type FeedbackItem = {
  id: string;
  // Always the original wording (Spanish): these are other people's words, never translated.
  quote: string;
  context: Record<Lang, string>;
};

// Verbatim excerpts from the "Informe de acompañamiento" reports Desafío Latam wrote after
// observing Andrés's classes. Only the two that speak to his profile (connecting learning to
// the professional world, and supporting people through frustration) are shown. Every report
// also lists areas to improve; only strengths are quoted. The reviewers are not named on
// purpose, and the reports' personal data and session recordings stay out.
export const feedback: FeedbackItem[] = [
  {
    id: 'adl-g99-2025-07',
    quote:
      'Andrés en esta sesión se destacó por su dominio técnico, claridad pedagógica y una notable capacidad para motivar a los estudiantes conectando el aprendizaje con el mundo profesional.',
    context: {
      es: 'Informe de acompañamiento · Docente, Full Stack JavaScript G99 · jul. 2025',
      en: 'Observation report · Instructor, Full Stack JavaScript G99 · Jul 2025',
    },
  },
  {
    id: 'adl-g90-2025-02',
    quote:
      'Destacó por su habilidad para gestionar la frustración de los estudiantes, brindándoles apoyo y contención en momentos clave, lo que favoreció un ambiente de aprendizaje positivo.',
    context: {
      es: 'Informe de acompañamiento · Tutoría de sesión, Full Stack JavaScript G90 · feb. 2025',
      en: 'Observation report · Session tutor, Full Stack JavaScript G90 · Feb 2025',
    },
  },
];
