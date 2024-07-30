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
  SiReactquery
} from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { BsFillPatchCheckFill } from "react-icons/bs";

export type SkillsProps = {
  id: string,
  name: string,
  level: string,
  icon: React.ReactElement
}

export const FRONTEND_SKIL: SkillsProps[] = [
  {
    id: "FES4",
    name: "NextJS",
    level: "Intermediate",
    icon: <SiNextdotjs />,
  },
  {
    id: "FES4",
    name: "Vite",
    level: "Intermediate",
    icon: <TbBrandVite />,
  },
  {
    id: "FES4",
    name: "React query",
    level: "Intermediate",
    icon: <SiReactquery />,
  },
  {
    id: "FES4",
    name: "React",
    level: "Intermediate",
    icon: <SiReact />,
  },
  {
    id: "FES3",
    name: "Typescript",
    level: "Intermediate",
    icon: <SiTypescript />,
  },
  {
    id: "FES3",
    name: "Javascript",
    level: "Intermediate",
    icon: <SiJavascript />,
  },
  {
    id: "FES2",
    name: "Tailwind",
    level: "Intermediate",
    icon: <SiTailwindcss />,
  },
  {
    id: "FES2",
    name: "Styled component",
    level: "Intermediate",
    icon: <SiStyledcomponents />,
  },
  {
    id: "FES2",
    name: "CSS",
    level: "Intermediate",
    icon: <SiCss3 />,
  },
  {
    id: "FES1",
    name: "HTML",
    level: "Intermediate",
    icon: <SiHtml5 />,
  },
];

export const BACKEND_SKILL = [
  {
    id: "FES3",
    name: "Javascript",
    level: "Intermediate",
    icon: <SiJavascript />,
  },
  {
    id: "FES3",
    name: "Typescript",
    level: "Intermediate",
    icon: <SiTypescript />,
  },
  {
    id: "BES1",
    name: "Node",
    level: "Intermediate",
    icon: <SiNodedotjs />,
  },
  {
    id: "BES2",
    name: "SQL",
    level: "Intermediate",
    icon: <SiPostgresql />,
  },
  {
    id: "BES2",
    name: "MongoDB",
    level: "Beginner",
    icon: <SiMongodb />,
  },
  {
    id: "BES2",
    name: "Prisma",
    level: "Beginner",
    icon: <SiPrisma />,
  },
  {
    id: "BES3",
    name: "Express",
    level: "Intermediate",
    icon: <BsFillPatchCheckFill />,
  },
];