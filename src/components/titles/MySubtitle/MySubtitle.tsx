import './mySubtitle.css';

type MySubtitleProps = {
  label: string;
  color?: 'default' | 'primary';
  size?: 'small' | 'medium' | 'large';
  weight?: 'medium' | 'bold';
};

export const MySubtitle = ({
  label,
  color = 'default',
  size = 'medium',
  weight = 'medium',
}: MySubtitleProps) => {
  return <h2 className={`myH2 ${color} ${size} ${weight}`}>{label}</h2>;
};

export default MySubtitle;
