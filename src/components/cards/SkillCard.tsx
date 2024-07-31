
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./skillCard.css";

const SkillCard = ({ skill }: any) => {
  const { id, icon, name } = skill;
  return (
    <article className="skillCardContainer" key={id}>
      <div className="skillCardIcon">
        {icon}
      </div>
      <span>{name}</span>
    </article>
  );
};

export default SkillCard;
