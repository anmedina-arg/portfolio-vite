import "./portfolio.css";
import Card from "../../components/cards/Card";
import { projects } from "../../mockData/projects";
import { Section } from "../../components/layout/section";

function Portfolio() {
  return (
    <section id="portfolio">
      <Section>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <h5>
          Some projects have a private repository, so you will be directed to my
          GitHub
        </h5>
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
    </section>
  );
}

export default Portfolio;
