// Technologies shown as three marquee rows, grouped by layer. Logos are Simple Icons marks
// (monochrome, drawn in currentColor); concepts and tools without a logo use a Tabler glyph.
// The AI row is limited to what the Anthropic Education credentials cover, plus SDD, which is
// the working method rather than a course.
import type { IconType } from 'react-icons';
import {
  SiCss3,
  SiExpo,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from 'react-icons/si';
import {
  TbBook,
  TbBox,
  TbBraces,
  TbFileText,
  TbPlug,
  TbSparkles,
  TbTerminal2,
  TbWebhook,
  TbHierarchy2,
} from 'react-icons/tb';
import type { Lang } from '../hooks/useLang';

export type TechItem = { name: string; icon: IconType };
export type TechRow = {
  id: 'ui' | 'back' | 'ai';
  label: Record<Lang, string>;
  // Marquee travel: 'left' scrolls toward the left edge; rows alternate.
  dir: 'left' | 'right';
  items: TechItem[];
};

export const techRows: TechRow[] = [
  {
    id: 'ui',
    label: { es: 'Interfaz', en: 'Interface' },
    dir: 'left',
    items: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'shadcn/ui', icon: SiShadcnui },
      { name: 'Zustand', icon: TbBox },
      { name: 'TanStack Query', icon: SiReactquery },
      { name: 'Zod', icon: SiZod },
    ],
  },
  {
    id: 'back',
    label: { es: 'Backend, datos y mobile', en: 'Backend, data & mobile' },
    dir: 'right',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'PHP', icon: SiPhp },
      { name: 'Laravel', icon: SiLaravel },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'React Native', icon: SiReact },
      { name: 'Expo', icon: SiExpo },
    ],
  },
  {
    id: 'ai',
    label: { es: 'Desarrollo con IA', en: 'AI-assisted development' },
    dir: 'left',
    items: [
      { name: 'Claude', icon: TbSparkles },
      { name: 'Claude Code', icon: TbTerminal2 },
      { name: 'Agent Skills', icon: TbBook },
      { name: 'Subagentes', icon: TbHierarchy2 },
      { name: 'Hooks', icon: TbWebhook },
      { name: 'MCP', icon: TbPlug },
      { name: 'Claude API', icon: TbBraces },
      { name: 'SDD', icon: TbFileText },
    ],
  },
];
