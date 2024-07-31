/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../ui/buttons/Button";
import styles from "./card.module.css";

// TODO, correct types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({ project, skillArr }: any) => {
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
              {skillArr?.map((e: any, index: number) => {
                return <li key={index}>{e}</li>;
              })}
            </ul>
          </div>
          <div className={styles.portfolio__item_cta}>
            <Button text="Github" reference={github} target="_blank" />
            <Button text="Link" reference={demo} target="_blank" />
            {/* <a href={github} className="btn" target="_blank" rel="noreferrer">
              Github
            </a>

            <a href={demo} className="btn" target="_blank" rel="noreferrer">
              Link
            </a> */}
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
