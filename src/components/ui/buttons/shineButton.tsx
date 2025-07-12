import './shineButton.css';

type ShineButtonProps = {
  label: string;
  href: string;
};

const ShineButton = ({ label, href }: ShineButtonProps) => {
  return (
    <>
      <a href={href} target="_blenk" className="ShineButton">
        {label}
        <svg viewBox="0 0 14 15" fill="none" width="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="#fff"
          ></path>
        </svg>
      </a>
    </>
  );
};

export default ShineButton;
