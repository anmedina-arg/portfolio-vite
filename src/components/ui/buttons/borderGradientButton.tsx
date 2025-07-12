import './borderGradientButton.css';

type BorderGradientButtonProps = {
  label: string;
  href: string;
};

const BorderGradientButton = ({ label, href }: BorderGradientButtonProps) => {
  return (
    <a className="borderGradientButton" href={href}>
      {label}
    </a>
  );
};

export default BorderGradientButton;
