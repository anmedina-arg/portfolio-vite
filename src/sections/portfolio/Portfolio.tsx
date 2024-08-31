import "./portfolio.css";
import { Section } from "../../components/layout/section";
import MySubtitle from "../../components/titles/MySubtitle/MySubtitle";
import SectionTitle from "../../components/titles/sectionTitle/sectionTitle";
import PortfolioWorks from "../../components/myWork/portfolio/portfolioWorks";
import PortfolioLabs from "../../components/myWork/labs/portfolioLabs";
import Tabs, { Tab } from "../../components/tabs/tabs";

const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio">
      <SectionTitle label="mis trabajos" />
      <hr style={{ marginBlock: "1rem", background: "transparent", border: "none" }}></hr>
      <MySubtitle label="Estos son algunos de mis trabajos más recientes" />
      <MySubtitle size="small" label="Algunos proyectos tienen su repositorio privado, por lo que seras redirigido a mi Github" color="default" />
      <hr style={{ marginBlock: "1rem", background: "transparent", border: "none" }}></hr>

      <Tabs>
        <Tab key="1" label="Freelance works" component={<PortfolioWorks />} />

        <Tab key="2" label="Labs Proyects" component={<PortfolioLabs />} />


      </Tabs>



    </Section>
  );
}

export default Portfolio;
