import './myTitle.css';

type MyTitleProps = {
  label: string;
  color?: 'default' | 'primary';
  weight?: 'medium' | 'bold';
};

export const MyTitle = ({ label, color = 'default', weight }: MyTitleProps) => {
  return <h1 className={`myH1 ${color} ${weight}`}> {label}</h1>;
};

export default MyTitle;
