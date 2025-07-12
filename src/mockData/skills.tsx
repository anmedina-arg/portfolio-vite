import {
  SiJavascript,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiStyledcomponents,
  SiPrisma,
  SiMongodb,
  SiReactquery,
} from 'react-icons/si';
import { TbBrandVite } from 'react-icons/tb';
import { BsFillPatchCheckFill } from 'react-icons/bs';

export type SkillsProps = {
  id: string;
  name: string;
  level: string;
  icon: React.ReactElement;
};

export const FRONTEND_SKIL: SkillsProps[] = [
  {
    id: 'FES1',
    name: 'NextJS',
    level: 'Intermediate',
    icon: <SiNextdotjs />,
  },
  {
    id: 'FES2',
    name: 'Vite',
    level: 'Intermediate',
    icon: <TbBrandVite />,
  },
  {
    id: 'FES3',
    name: 'React query',
    level: 'Intermediate',
    icon: <SiReactquery />,
  },
  {
    id: 'FES4',
    name: 'React',
    level: 'Intermediate',
    icon: <SiReact />,
  },
  {
    id: 'FES5',
    name: 'Typescript',
    level: 'Intermediate',
    icon: <SiTypescript />,
  },
  {
    id: 'FES6',
    name: 'Javascript',
    level: 'Intermediate',
    icon: <SiJavascript />,
  },
  {
    id: 'FES7',
    name: 'Tailwind',
    level: 'Intermediate',
    icon: <SiTailwindcss />,
  },
  {
    id: 'FES8',
    name: 'Styled component',
    level: 'Intermediate',
    icon: <SiStyledcomponents />,
  },
  {
    id: 'FES9',
    name: 'CSS',
    level: 'Intermediate',
    icon: <SiCss3 />,
  },
  {
    id: 'FES10',
    name: 'HTML',
    level: 'Intermediate',
    icon: <SiHtml5 />,
  },
];

export const BACKEND_SKILL: SkillsProps[] = [
  {
    id: 'BES1',
    name: 'Javascript',
    level: 'Intermediate',
    icon: <SiJavascript />,
  },
  {
    id: 'BES2',
    name: 'Typescript',
    level: 'Intermediate',
    icon: <SiTypescript />,
  },
  {
    id: 'BES3',
    name: 'Node',
    level: 'Intermediate',
    icon: <SiNodedotjs />,
  },
  {
    id: 'BES4',
    name: 'SQL',
    level: 'Intermediate',
    icon: <SiPostgresql />,
  },
  {
    id: 'BES5',
    name: 'MongoDB',
    level: 'Beginner',
    icon: <SiMongodb />,
  },
  {
    id: 'BES6',
    name: 'Prisma',
    level: 'Beginner',
    icon: <SiPrisma />,
  },
  {
    id: 'BES7',
    name: 'Express',
    level: 'Intermediate',
    icon: <BsFillPatchCheckFill />,
  },
];
