import styles from "./card.module.css";

const SkillCard = ({ skill }) => {
  // let { skill } = prop;
  let { id, icon, name, level } = skill;
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
