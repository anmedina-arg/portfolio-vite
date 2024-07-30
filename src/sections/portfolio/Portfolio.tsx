import "./portfolio.css";
import Card from "../../components/cards/Card";
import { projects } from "../../mockData/projects";
import { Section } from "../../components/layout/section";
import MySubtitle from "../../components/titles/MySubtitle/MySubtitle";
import SectionTitle from "../../components/titles/sectionTitle/sectionTitle";

function Portfolio() {
  return (
    <Section id="portfolio">
      <SectionTitle label="mis trabajos" />
      <hr style={{ marginBlock: "1rem", background: "transparent", border: "none" }}></hr>
      <MySubtitle label="Estos son algunos de mis trabajos más recientes" />
      <MySubtitle size="small" label="Algunos proyectos tienen su repositorio privado, por lo que seras redirigido a mi Github" color="default" />
      <hr style={{ marginBlock: "1rem", background: "transparent", border: "none" }}></hr>
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
