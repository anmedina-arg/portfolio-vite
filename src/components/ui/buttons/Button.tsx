/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './button.module.css';

const Button = ({ reference, text, primary, target }: any) => {
  return (
    <a
      className={`${styles.boton} ${primary ? styles.primary : ''}`}
      href={reference}
      key="buton"
      target={target}
    >
      {text}
    </a>
  );
};

export default Button;
