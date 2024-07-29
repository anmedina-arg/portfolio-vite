import "./experience.css";
import SkillCard from "../../components/cards/SkillCard";
import { Section } from "../../components/layout/section";

import { FRONTEND_SKIL, BACKEND_SKILL } from '../../mockData/skills'
import MySubtitle from "../../components/titles/MySubtitle/MySubtitle";

function Experience() {
  return (
    <Section id="experience">
      <MySubtitle size="small" label="What Skills I have" color="default" />
      <MySubtitle label="My experience" color="primary" />
      <div className="experience__container">
        <div className="experience__frontend">
          <MySubtitle size="small" color="primary" label="Frontend development" />
          <div className="experience__container">
            {FRONTEND_SKIL.map((skill) => {
              return <SkillCard skill={skill} />;
            })}
          </div>
        </div>
        <div className="experience__backend">
          <MySubtitle size="small" color="primary" label="Backend development" />
          <div className="experience__container">
            {BACKEND_SKILL.map((skill) => {
              return <SkillCard skill={skill} />;
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Experience;
