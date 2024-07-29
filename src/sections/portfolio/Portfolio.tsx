import "./portfolio.css";
import Card from "../../components/cards/Card";
import { projects } from "../../mockData/projects";
import { Section } from "../../components/layout/section";
import MySubtitle from "../../components/titles/MySubtitle/MySubtitle";

function Portfolio() {
  return (
    <Section id="portfolio">
      <MySubtitle size="small" label="Recent Work" color="default" />
      <MySubtitle label="Portfolio" color="primary" />
      <MySubtitle size="small" label="Some projects have a private repository, so you will be directed to my
          GitHub" color="default" />
      <div className="portfolio__container">
        {projects.map((project) => {
          const { skill } = project;
          const skillArr = [];
          for (let i = 0; i < skill.length; i++) {
            skillArr.push(skill[i]);
          }
          return <Card project={project} skillArr={skillArr} />;
        })}
      </div>
    </Section>
  );
}

export default Portfolio;
