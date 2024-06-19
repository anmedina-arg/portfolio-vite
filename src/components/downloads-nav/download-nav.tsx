import React from "react";
import CVENG from "../../assets/CV_Andres_Medina_eng.pdf";
import CVESP from "../../assets/CV_Andres_Medina_esp.pdf";
import Button from "../ui/buttons/Button";
import "./download-nav.css";

function DownloadNav() {
  return (
    <div className="download_nav_container">
      <Button reference={CVENG} text="Download CV" />
      <Button reference={CVESP} text="Descargar CV" />
      <Button primary reference="#contact" text="Let´s talk" />
    </div>
  );
}

export default DownloadNav;
