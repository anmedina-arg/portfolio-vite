import styles from "./card.module.css";

const Card = ({ project, skillArr }) => {
  const { id, image, title, github, demo } = project; //falta description
  return (
    <>
      <article className={styles.card__container} key={id}>
        <div className={styles.interior}>
          <div className={styles.content}>
            <img
              className={styles.card__image}
              src={image}
              alt="imagen de proyecto"
            />
            <h3>{title}</h3>
            {/* <p>{ description}</p> */}
            <ul>
              {skillArr?.map((e, index) => {
                return <li key={index}>{e}</li>;
              })}
            </ul>
          </div>
          <div className={styles.portfolio__item_cta}>
            <a href={github} className="btn" target="_blank" rel="noreferrer">
              Github
            </a>

            <a href={demo} className="btn" target="_blank" rel="noreferrer">
              Link
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
