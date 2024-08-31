import "./card.css";

import { ProjectProps } from '../../mockData/projects';

import MemoizedRenderIconFromAList from "../renderIconFromAList/renderIconFromAList";
import ShineButton from "../ui/buttons/shineButton";

export type CardProps = {
  project: ProjectProps
}

const Card: React.FC<CardProps> = ({ project: { image, title, github, demo, skill } }) => {

  return (
    <>
      <article className="cardContainer">
        <div className="interior">
          <div className="content">
            <img
              className="cardImage"
              src={image}
              alt="imagen de proyecto"
            />
            <MemoizedRenderIconFromAList technologies={skill} />
            <h3>{title}</h3>
            {/* <ul>
              {skill?.map((skill) => <li key={skill}>{skill}</li>)}
            </ul> */}
          </div>
          <div className="portfolioItemCta">
            <ShineButton label="Github" href={github} />
            <ShineButton label="Link" href={demo} />
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
