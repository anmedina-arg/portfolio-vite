import TechLoop from './TechLoop';
import { techRows, type TechRow } from './data/techRows';
import type { Lang } from './hooks/useLang';

type Props = { row: TechRow['id']; lang: Lang };

// One marquee row used as a seam between sections: decoration for the page, not a section
// of its own. The row's label is kept for assistive tech (the first copy of the list is the
// readable one; see TechLoop).
const TechRibbon: React.FC<Props> = ({ row, lang }) => {
  const data = techRows.find((r) => r.id === row);
  if (!data) return null;
  return (
    <div className={`vb-ribbon is-${data.id}`}>
      <h3 className="vb-sr-only">{data.label[lang]}</h3>
      <div className="tl-window">
        <TechLoop
          className={data.dir === 'right' ? 'tl-track is-right' : 'tl-track'}
          items={data.items}
          render={(it) => (
            <span className="vb-tech-item">
              <it.icon aria-hidden="true" />
              {it.name}
            </span>
          )}
        />
      </div>
    </div>
  );
};

export default TechRibbon;
