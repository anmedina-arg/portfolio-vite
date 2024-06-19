/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./button.module.css";

const Button = ({ reference, text, primary }: any) => {
  return (
    <a
      className={`${styles.boton} ${primary ? styles.primary : ""}`}
      href={reference}
      key="buton"
    >
      {text}
    </a>
  );
};

export default Button;
