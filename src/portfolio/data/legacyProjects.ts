// Thumbnails and live links for the earlier client work shown under "Trabajos anteriores".
import Coolco from '../../assets/Coolco.webp';
import Kurve from '../../assets/kurve.webp';
import CABSA from '../../assets/cabsa.webp';

export type LegacyProject = {
  title: string;
  image: string;
  demo: string;
};

export const projects: LegacyProject[] = [
  { title: 'CABSA', image: CABSA, demo: 'https://www.cabsaintl.com/' },
  { title: 'Kurve', image: Kurve, demo: 'https://kurve.ai//' },
  { title: 'Coolco', image: Coolco, demo: 'https://www.coolco.io/' },
];
