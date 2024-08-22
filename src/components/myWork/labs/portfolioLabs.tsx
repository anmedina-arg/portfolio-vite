import { labsProjects } from "../../../mockData/labsProjects";
import './portfolioLabs.css';

const PortfolioLabs = () => {
	return (
		<div className="portfolioLabsContainer">
			{labsProjects.map((project) => <CardLine key={project.id} label={project.title} link={project.demo} />)}
		</div>
	)
};

export default PortfolioLabs;

type CardLineProps = {
	label: string,
	link: string
}

const CardLine: React.FC<CardLineProps> = ({ label, link }) => {
	return (
		<div>
			<span>{label}</span>
			<a href={link} target="_blank">ver</a>
		</div>
	)
}