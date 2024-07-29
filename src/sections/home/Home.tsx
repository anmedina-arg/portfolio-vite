import "./home.css";
import { Section } from "../../components/layout/section";
import { Paragraph } from "../../components/commons/paragraph/paragraph";
import MyTitle from "../../components/titles/myTitle/MyTitle";
import MySubtitle from "../../components/titles/MySubtitle/MySubtitle";
import Billboard from "../../components/billboard/billboard";
import MainBackground from "../../components/backgrounds/mainBackground";
import { FaArrowDown } from "react-icons/fa";
import BorderGradientButton from "../../components/ui/buttons/borderGradientButton";

function Home() {
  return (
    <Section id="home">
      <MainBackground>
        <div className="homeLayout">
          <Billboard mainWord="frontend" neonWord="developer" />
          <div className="contentHome">
            <div className="contentTextHome">
              <div className="inlineText">
                <MyTitle color="default" label="Hola! Soy" />
                <MyTitle color="primary" label="Andrés Medina" weight="bold" />
              </div>
              <div className="inlineText">
                <Paragraph>Desarrollo <MySubtitle color="primary" label="aplicaciones y sitios web" weight="bold" /> que transforman tus ideas en realidades digitales, <MySubtitle color="primary" label="fusionando arte y tecnología" weight="bold" />, con una <MySubtitle color="primary" weight="bold" label="belleza estética" /> y una <MySubtitle color="primary" weight="bold" label="funcionalidad sólida y robusta" />.</Paragraph>
              </div>
              <BorderGradientButton label="contactame!" href="#contact" />
            </div>
            <div className="sideContentTextHome">
              <MySubtitle label="Visita mi portfolio" size="small" />
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
