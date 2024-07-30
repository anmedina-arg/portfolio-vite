import "./experience.css";
import SkillCard from "../../components/cards/SkillCard";
import { Section } from "../../components/layout/section";

import { FRONTEND_SKIL, BACKEND_SKILL } from '../../mockData/skills'
import MySubtitle from "../../components/titles/MySubtitle/MySubtitle";
import SectionTitle from "../../components/titles/sectionTitle/sectionTitle";
import MainBackground from "../../components/backgrounds/mainBackground";

function Experience() {
  return (
    <Section id="experience">
      <SectionTitle label="Tecnologías" />
      <hr style={{ marginBlock: "1rem", background: "transparent", border: "none" }}></hr>
      <MySubtitle label="Con estas herramientas trabajo, ellas me ayudan a generar la magia..." />
      <hr style={{ marginBlock: "1rem", background: "transparent", border: "none" }}></hr>
      <hr style={{ marginBlock: "1rem", background: "transparent", border: "none" }}></hr>
      <div className="experience__container">
        <MainBackground>
          <div className="experience__frontend">
            <MySubtitle size="small" color="primary" label="Desarrollo frontend" />
            <hr style={{ marginBlock: "1rem" }}></hr>
            <div className="experience__content">
              {FRONTEND_SKIL.map((skill) => {
                return <SkillCard skill={skill} />;
              })}
            </div>
          </div>
        </MainBackground>
        <MainBackground>
          <div className="experience__backend">
            <MySubtitle size="small" color="primary" label="Desarrollo backend" />
            <hr style={{ marginBlock: "1rem" }}></hr>
            <div className="experience__content">
              {BACKEND_SKILL.map((skill) => {
                return <SkillCard skill={skill} />;
              })}
            </div>
          </div>
        </MainBackground>
      </div>
    </Section>
  );
}

export default Experience;
