import './downloadButon.css';

type DownloadButtonProps = {
  text?: string;
  href?: string;
  color: 'pink' | 'lightBlue' | 'green';
};

const DownloadButton = ({ text = 'hola', href, color }: DownloadButtonProps) => {
  return (
    <a className={`esfera ${color}`} href={href} key="buton" target="_blank" rel="noreferrer">
      {text}
    </a>
  );
};

export default DownloadButton;
