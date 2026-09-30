// PROTOTYPE — throwaway. Variant B won (2026-09-28) — see NOTES.md. A and C were
// removed; this now always renders B, still gated behind ?variant= in App.tsx while
// refinement continues, ahead of folding it into the real feature-colocated structure.
import './tokens.css';
import { useTheme } from '../hooks/useThems';
import VariantB from './variants/VariantB';

const ProfessionalRedesign: React.FC = () => {
  const [theme, toggleTheme] = useTheme('dark');

  return (
    <div className="pr-root">
      <VariantB theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default ProfessionalRedesign;
