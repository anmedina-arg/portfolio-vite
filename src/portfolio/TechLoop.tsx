import type { TechItem } from './data/techRows';

type Props = {
  items: TechItem[];
  className?: string;
  // Renders one item; the loop calls it once per copy.
  render: (item: TechItem) => React.ReactNode;
};

// Four equal copies of the list; the CSS slides the track by half its width (two copies), so
// the loop is seamless even on an ultra-wide column where a short row would otherwise leave a
// gap. Only the first copy is exposed to assistive tech, and the rest are dropped when motion
// is reduced, so the row reads once, as a plain wrapped list.
const COPIES = [0, 1, 2, 3];

const TechLoop: React.FC<Props> = ({ items, className, render }) => (
  <div className={className}>
    {COPIES.map((copy) => (
      <ul
        key={copy}
        className={copy === 0 ? 'tl-list' : 'tl-list tl-copy'}
        aria-hidden={copy === 0 ? undefined : true}
      >
        {items.map((it) => (
          <li key={it.name} className="tl-item">
            {render(it)}
          </li>
        ))}
      </ul>
    ))}
  </div>
);

export default TechLoop;
