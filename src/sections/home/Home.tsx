import "./home.css";
import { Section } from "../../components/layout/section";
import { Paragraph } from "../../components/commons/paragraph/paragraph";
import MyTitle from "../../components/titles/myTitle/MyTitle";
import MySubtitle from "../../components/titles/MySubtitle/MySubtitle";
import Billboard from "../../components/billboard/billboard";
import MainBackground from "../../components/backgrounds/mainBackground";
import { FaArrowDown } from "react-icons/fa";
import BorderGradientButton from "../../components/ui/buttons/borderGradientButton";
import SwitchTheme from "../../components/switchTheme/switchTheme";

function Home() {
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
                <Paragraph>Desarrollo <MySubtitle label="aplicaciones y sitios web" weight="bold" /> que transforman tus ideas en realidades digitales, <MySubtitle label="fusionando arte y tecnología" weight="bold" />, con una <MySubtitle weight="bold" label="belleza estética" /> y una <MySubtitle weight="bold" label="funcionalidad sólida y robusta" />.</Paragraph>
              </div>
              <BorderGradientButton label="contactame!" href="#contact" />
            </div>
            <div className="sideContentTextHome">
              {/* <MySubtitle label="Visita mi portfolio" size="small" /> */}
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
