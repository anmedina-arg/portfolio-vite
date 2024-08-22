import "./card.css";

import { ProjectProps } from '../../mockData/projects';

import Button from "../ui/buttons/Button";
import MemoizedRenderIconFromAList from "../renderIconFromAList/renderIconFromAList";

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
            <h3>{title}</h3>
            <MemoizedRenderIconFromAList technologies={skill} />
            <ul>
              {skill?.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
          <div className="portfolioItemCta">
            <Button text="Github" reference={github} target="_blank" />
            <Button text="Link" reference={demo} target="_blank" />
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
