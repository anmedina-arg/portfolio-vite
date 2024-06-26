
/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./card.module.css";

const SkillCard = ({ skill }: any) => {
  // let { skill } = prop;
  const { id, icon, name, level } = skill;
  return (
    <article className={styles.experience__details} key={id}>
      {icon}
      <div>
        <h4>{name}</h4>
        <small className="text-light">{level}</small>
      </div>
    </article>
  );
};

export default SkillCard;
