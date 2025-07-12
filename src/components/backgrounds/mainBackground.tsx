import { ReactElement } from 'react';
import './mainBackground.css';

type MainBackgroundProps = {
  children: ReactElement | ReactElement[];
};

const MainBackground = ({ children }: MainBackgroundProps) => {
  return <div className="mainBackground">{children}</div>;
};

export default MainBackground;
