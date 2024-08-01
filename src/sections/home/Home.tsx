import "./home.css";

import { FaArrowDown } from "react-icons/fa";

import Billboard from "../../components/billboard/billboard";
import BorderGradientButton from "../../components/ui/buttons/borderGradientButton";
import MainBackground from "../../components/backgrounds/mainBackground";
import MyTitle from "../../components/titles/myTitle/MyTitle";
import Paragraph from "../../components/commons/paragraph/paragraph";
import Section from "../../components/layout/section";
import SwitchTheme from "../../components/switchTheme/switchTheme";

const Home: React.FC = () => {
  return (
    <Section id="home">
      <SwitchTheme />
      <MainBackground>
        <div className="homeLayout">
          <Billboard mainWord="frontend" neonWord="developer" />
          <div className="contentHome">
            <div className="contentTextHome">
              <hr style={{ marginBlock: "1rem" }}></hr>
              <div className="inlineText">
                <MyTitle label="Hola! Soy" />
                <MyTitle label="Andrés Medina" weight="bold" />
              </div>
              <div className="inlineText">
                <Paragraph>Desarrollo <b>aplicaciones y sitios web</b> que transforman tus ideas en realidades digitales, <b>fusionando arte y tecnología</b>, con una <b>belleza estética</b> y una <b>funcionalidad sólida y robusta</b>.</Paragraph>
              </div>
              <BorderGradientButton label="contactame!" href="#contact" />
            </div>
            <div className="sideContentTextHome">
              <a href="#experience" className="contentIconHome">
                <FaArrowDown />
              </a>
            </div>
          </div>
        </div>
      </MainBackground>
    </Section>
  );
}

export default Home;
