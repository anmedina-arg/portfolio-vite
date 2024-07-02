import "./experience.css";
import SkillCard from "../../components/cards/SkillCard";
import { Section } from "../../components/layout/section";

import { FRONTEND_SKIL, BACKEND_SKILL } from '../../mockData/skills'

function Experience() {
  return (
    <section id="experience">
      <Section>
        <h5>What Skills I have</h5>
        <h2>My experience</h2>
        <div className="experience__container">
          <div className="experience__frontend">
            <h3>Frontend development</h3>
            <div className="experience__container">
              {FRONTEND_SKIL.map((skill) => {
                return <SkillCard skill={skill} />;
              })}
            </div>
          </div>
          <div className="experience__backend">
            <h3>Backend development</h3>
            <div className="experience__container">
              {BACKEND_SKILL.map((skill) => {
                return <SkillCard skill={skill} />;
              })}
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}

export default Experience;
