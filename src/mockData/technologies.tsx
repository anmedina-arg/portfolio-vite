import DeviconCss3 from '../components/iconos/DeviconCss3';
import DeviconHtml5 from '../components/iconos/DeviconHtml5';
import LogosJavascript from '../components/iconos/LogosJavascript';
import LogosNextjsIcon from '../components/iconos/LogosNextjsIcon';
import LogosReact from '../components/iconos/LogosReact';
import LogosRedux from '../components/iconos/LogosRedux';
import LogosTailwindcssIcon from '../components/iconos/LogosTailwindcssIcon';
import LogosVitejs from '../components/iconos/LogosVitejs';
import VscodeIconsFileTypeStyled from '../components/iconos/VscodeIconsFileTypeStyled';
import DeviconTypescript from '../components/iconos/DeviconTypescript';
import DeviconPostgresql from '../components/iconos/DeviconPostgresql';

export type TechnologyIconsToMapProps = Record<string, JSX.Element>;

export const technologyIconsToMap: TechnologyIconsToMapProps = {
  CSS: <DeviconCss3 />,
  HTML: <DeviconHtml5 />,
  Javascript: <LogosJavascript />,
  NextJS: <LogosNextjsIcon />,
  React: <LogosReact />,
  Redux: <LogosRedux />,
  Vite: <LogosVitejs />,
  StyledComponents: <VscodeIconsFileTypeStyled />,
  Tailwind: <LogosTailwindcssIcon />,
  Typescript: <DeviconTypescript />,
  Postgres: <DeviconPostgresql />,
  // Agrega más tecnologías aquí
};

export type ValidSkills = keyof typeof technologyIconsToMap;
