import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
// import { RiNextjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandVite } from "react-icons/tb";
import { SiStyledcomponents } from "react-icons/si";

export type TechnologyIconsToMapProps = Record<string, { icon: JSX.Element; color: string }>;

export const technologyIconsToMap: TechnologyIconsToMapProps = {
	HTML: { icon: <FaHtml5 />, color: '#e34c26' },
	CSS: { icon: <FaCss3Alt />, color: '#2965f1' },
	JS: { icon: <FaJsSquare />, color: '#f0db4f' },
	NextJS: { icon: <TbBrandNextjs />, color: '#000' },
	Typescript: { icon: <BiLogoTypescript />, color: '#007acc' },
	React: { icon: <FaReact />, color: '#61dbfb' },
	Vite: { icon: <TbBrandVite />, color: '#4fb8f0' }, // verificar color
	StyledComponents: { icon: <SiStyledcomponents />, color: '#4fb8f0' }, //verificar color
	// Agrega más tecnologías aquí
};