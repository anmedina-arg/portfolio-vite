// Experience as parallel bars on a broken time axis (layout variant accepted 2026-10-06).
// 2013–2022 (Arcor) is squeezed into the left of the track so the software years get room;
// the break is drawn, not hidden. Overlapping contracts overlap on purpose: that is the
// truthful picture of independent work. Dates come from `start`/`end` in the content.
import type { ExperienceEntry } from './content/content.es';

const AXIS_START = 2013;
const BREAK_YEAR = 2022;
const AXIS_END = 2027;
const COMPRESSED_END = 18; // % of the track where the compressed 2013–2022 stretch ends
const EXPANDED_START = 20; // % where 2022 starts again, after the break gap
const PER_YEAR = (100 - EXPANDED_START) / (AXIS_END - BREAK_YEAR);

const position = (year: number) =>
  year <= BREAK_YEAR
    ? ((year - AXIS_START) / (BREAK_YEAR - AXIS_START)) * COMPRESSED_END
    : EXPANDED_START + (year - BREAK_YEAR) * PER_YEAR;

// Labelled years: the first year of the compressed stretch, then every year since the break.
const TICKS = [AXIS_START, 2022, 2023, 2024, 2025, 2026].map((year) => ({
  label: String(year),
  at: year === AXIS_START ? 0 : EXPANDED_START + (year - BREAK_YEAR) * PER_YEAR,
}));

const decimalYearNow = () => {
  const now = new Date();
  return Math.min(now.getFullYear() + now.getMonth() / 12, AXIS_END);
};

type Props = { entries: ExperienceEntry[]; todayLabel: string };

const ExperienceTimeline: React.FC<Props> = ({ entries, todayLabel }) => {
  const today = decimalYearNow();
  const lastIndex = entries.length - 1;

  const track = (entry: ExperienceEntry) => {
    const start = entry.start;
    const end = entry.end ?? today;
    // A bar that crosses the break is drawn as two segments with the gap between them.
    const segments =
      start < BREAK_YEAR && end > BREAK_YEAR
        ? [
            [position(start), COMPRESSED_END],
            [EXPANDED_START, position(end)],
          ]
        : [[position(start), position(end)]];
    return (
      <div className="vb-tl-track" aria-hidden="true">
        {TICKS.map((tick) => (
          <span key={tick.label} className="vb-tl-grid" style={{ left: `${tick.at}%` }} />
        ))}
        <span className="vb-tl-now" style={{ left: `${position(today)}%` }} />
        {segments.map(([from, to], i) => (
          <span
            key={i}
            className="vb-tl-line"
            style={{ left: `${from}%`, width: `${to - from}%` }}
          />
        ))}
        <span className="vb-tl-dot" style={{ left: `${position(start)}%` }} />
        <span className="vb-tl-dot is-end" style={{ left: `${position(end)}%` }} />
      </div>
    );
  };

  return (
    <ul className="vb-timeline">
      <li className="vb-tl-axis-item" aria-hidden="true">
        <div className="vb-tl-row vb-tl-axis">
          <span />
          <div className="vb-tl-ticks">
            {TICKS.map((tick) => (
              <span
                key={tick.label}
                className={tick.label === String(BREAK_YEAR) ? 'is-after-break' : undefined}
                style={{ left: `${tick.at}%` }}
              >
                {tick.label}
              </span>
            ))}
            <svg
              className="vb-tl-break"
              style={{ left: `${(COMPRESSED_END + EXPANDED_START) / 2}%` }}
              width="12"
              height="14"
              viewBox="0 0 12 14"
            >
              <path
                d="M3 13 6 1M7 13 10 1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <span className="vb-tl-today" style={{ left: `${position(today)}%` }}>
              {todayLabel}
            </span>
          </div>
        </div>
      </li>
      {entries.map((e, i) => (
        <li key={i} className={`vb-reveal${i === lastIndex ? ' is-past' : ''}`}>
          <div className="vb-tl-row">
            <div className="vb-tl-label">
              <strong>{e.role}</strong> — {e.company} <span className="pr-pill">{e.dates}</span>
              {e.note && <p className="vb-tl-note">{e.note}</p>}
            </div>
            {track(e)}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceTimeline;
