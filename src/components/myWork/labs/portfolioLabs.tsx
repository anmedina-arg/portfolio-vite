import { labsProjects } from "../../../mockData/labsProjects";
import './portfolioLabs.css';
import LineCard from "../../cards/lineCard";
import MainBackground from "../../backgrounds/mainBackground";

const PortfolioLabs = () => {
	return (
		<div className="portfolioLabsContainer">
			{labsProjects.map((project) => (
				<MainBackground>
					<LineCard key={project.id} project={project} />
				</MainBackground>
			))}
		</div>
	)
};

export default PortfolioLabs;