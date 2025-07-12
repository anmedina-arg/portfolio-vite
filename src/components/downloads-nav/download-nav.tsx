import CVENG from '../../assets/CV_Andres_Medina_eng.pdf';
import CVESP from '../../assets/CV_Andres_Medina_esp.pdf';
// import Button from "../ui/buttons/Button";
import DownloadButton from '../ui/buttons/DownloadButton';
import './download-nav.css';

function DownloadNav() {
  return (
    <div className="download_nav_container">
      <DownloadButton href={CVENG} text="Download CV" color="lightBlue" />
      <DownloadButton href={CVESP} text="Descargar CV" color="green" />
      <DownloadButton href="#contact" text="Let´s talk" color="pink" />
    </div>
  );
}

export default DownloadNav;
