import "./experience.css";

import MainBackground from "../../components/backgrounds/mainBackground";
import MySubtitle from "../../components/titles/MySubtitle/MySubtitle";
import Section from "../../components/layout/section";
import SectionTitle from "../../components/titles/sectionTitle/sectionTitle";
import SkillCard from "../../components/cards/SkillCard";

import { FRONTEND_SKIL, BACKEND_SKILL } from '../../mockData/skills'

const Experience: React.FC = () => {
  return (
    <Section id="experience">

      <SectionTitle label="Tecnologías" />
      <hr style={{ marginBlock: "1rem", background: "transparent", border: "none" }}></hr>
      <MySubtitle label="Con estas herramientas trabajo, ellas me ayudan a generar la magia..." />
      <hr style={{ marginBlock: "1rem", background: "transparent", border: "none" }}></hr>
      <hr style={{ marginBlock: "1rem", background: "transparent", border: "none" }}></hr>

      <div className="experienceContainer">
        <MainBackground>
          <div className="experienceFrontend">
            <MySubtitle size="small" label="Desarrollo frontend" />
            <hr style={{ marginBlock: "1rem" }}></hr>
            <div className="experienceContent">
              {FRONTEND_SKIL.map((skill) => {
                return <SkillCard skill={skill} key={skill.id} />;
              })}
            </div>
          </div>
        </MainBackground>

        <MainBackground>
          <div className="experienceBackend">
            <MySubtitle size="small" label="Desarrollo backend" />
            <hr style={{ marginBlock: "1rem" }}></hr>
            <div className="experienceContent">
              {BACKEND_SKILL.map((skill) => {
                return <SkillCard skill={skill} key={skill.id} />;
              })}
            </div>
          </div>
        </MainBackground>
      </div>

    </Section>
  );
}

export default Experience;
