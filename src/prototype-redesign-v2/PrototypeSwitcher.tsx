// PROTOTYPE — throwaway. Floating bottom bar to flip between redesign variants.
import { useEffect } from 'react';
import './PrototypeSwitcher.css';

const VARIANTS = [
  { key: 'A', label: 'Editorial' },
  { key: 'B', label: 'Split identity' },
  { key: 'C', label: 'Project-first' },
];

type Props = {
  current: string;
  onChange: (variant: string) => void;
};

const PrototypeSwitcher: React.FC<Props> = ({ current, onChange }) => {
  const index = VARIANTS.findIndex((v) => v.key === current);

  const cycle = (dir: 1 | -1) => {
    const next = VARIANTS[(index + dir + VARIANTS.length) % VARIANTS.length];
    onChange(next.key);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA'].includes(target.tagName) || target.isContentEditable) return;
      if (e.key === 'ArrowLeft') cycle(-1);
      if (e.key === 'ArrowRight') cycle(1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  const currentLabel = VARIANTS[index]?.label ?? '';

  return (
    <div className="pr-switcher">
      <button aria-label="Variante anterior" onClick={() => cycle(-1)}>
        ←
      </button>
      <span>
        {current} — {currentLabel}
      </span>
      <button aria-label="Variante siguiente" onClick={() => cycle(1)}>
        →
      </button>
    </div>
  );
};

export default PrototypeSwitcher;
