import { projects } from '../../../mockData/projects';
import Card from '../../cards/Card';
import './portfolioWorks.css';

const PortfolioWorks = () => {
  return (
    <div className="portfolioWorkContainer">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
};

export default PortfolioWorks;
