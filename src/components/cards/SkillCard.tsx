import "./skillCard.css";
import { SkillsProps } from '../../mockData/skills';

type SkillCardProps = {
  skill: SkillsProps
}

const SkillCard: React.FC<SkillCardProps> = ({ skill: { icon, name } }) => {

  return (
    <article className="skillCardContainer">
      <div className="skillCardIcon">{icon}</div>
      <span>{name}</span>
    </article>
  );
};

export default SkillCard;
