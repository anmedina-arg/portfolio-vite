import React from "react";
import { technologyIconsToMap } from "../../mockData/technologies";

type RenderIconFromAListProps = {
	technologies: string[];
};

const RenderIconFromAList: React.FC<RenderIconFromAListProps> = ({ technologies }) => {
	return (
		<div className="technology-icons">
			{technologies.map((tech) =>
				technologyIconsToMap[tech] ? (
					<span key={tech} className="rendererIcon" style={{ color: technologyIconsToMap[tech].color }}>
						{technologyIconsToMap[tech].icon}
					</span>
				) : (
					<span key={tech} className="rendererIcon">
						{tech}
					</span>
				)
			)}
		</div>
	);
};

const MemoizedRenderIconFromAList = React.memo(RenderIconFromAList)

// Optimización con React.memo
export default MemoizedRenderIconFromAList;
