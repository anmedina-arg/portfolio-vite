// PROTOTYPE — throwaway. Three structurally different redesign variants on the real
// homepage route, gated by ?variant=A|B|C. No variant param => normal site (see App.tsx).
import { useState } from 'react';
import './tokens.css';
import PrototypeSwitcher from './PrototypeSwitcher';
import { useTheme } from '../hooks/useThems';
import VariantA from './variants/VariantA';
import VariantB from './variants/VariantB';
import VariantC from './variants/VariantC';

const getVariantFromUrl = () => new URLSearchParams(window.location.search).get('variant') ?? 'A';

const ProfessionalRedesign: React.FC = () => {
  const [variant, setVariant] = useState(getVariantFromUrl());
  const [theme, toggleTheme] = useTheme('dark');

  const setVariantAndUrl = (next: string) => {
    setVariant(next);
    const url = new URL(window.location.href);
    url.searchParams.set('variant', next);
    window.history.replaceState({}, '', url);
  };

  const themeProps = { theme, toggleTheme };

  return (
    <div className="pr-root">
      {variant === 'A' && <VariantA {...themeProps} />}
      {variant === 'B' && <VariantB {...themeProps} />}
      {variant === 'C' && <VariantC {...themeProps} />}
      <PrototypeSwitcher current={variant} onChange={setVariantAndUrl} />
    </div>
  );
};

export default ProfessionalRedesign;
