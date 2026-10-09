// Portfolio entry: owns the theme and the `.pr-root` surface (tokens.css), renders the page.
import './tokens.css';
import { useTheme } from './hooks/useTheme';
import PortfolioPage from './PortfolioPage';

const ProfessionalRedesign: React.FC = () => {
  const [theme, toggleTheme] = useTheme('dark');

  return (
    <div className="pr-root">
      <PortfolioPage theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default ProfessionalRedesign;
