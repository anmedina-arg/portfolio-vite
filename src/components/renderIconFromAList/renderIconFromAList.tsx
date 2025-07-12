import React from 'react';
import { technologyIconsToMap } from '../../mockData/technologies';
import './renderIconFromAList.css';

type RenderIconFromAListProps = {
  technologies: string[];
  withoutBackground?: boolean;
};

const RenderIconFromAList: React.FC<RenderIconFromAListProps> = ({
  technologies,
  withoutBackground,
}) => {
  return (
    <div className="technologyIcons">
      {technologies.map((tech) =>
        technologyIconsToMap[tech] ? (
          <span
            key={tech}
            className={`rendererIcon ${withoutBackground ? 'withoutBackground' : ''}`}
          >
            {technologyIconsToMap[tech]}
          </span>
        ) : (
          <span key={tech} className="rendererTextByIcon">
            {tech}
          </span>
        ),
      )}
    </div>
  );
};

const MemoizedRenderIconFromAList = React.memo(RenderIconFromAList);

// Optimización con React.memo
export default MemoizedRenderIconFromAList;
