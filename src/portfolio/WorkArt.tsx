import { useId } from 'react';

type Props = {
  // Captures shown inside the frames: the product's landing on the laptop, a store's catalog on the phone.
  desktop: string;
  mobile: string;
  label: string;
};

// Same drawing language as the hero illustration (hairline strokes in the accent, labelled
// dimension lines, a laptop window and a phone overlapping it), with real captures on the
// screens. The frames take the theme's colours; the captures are the product as it is.
const WorkArt: React.FC<Props> = ({ desktop, mobile, label }) => {
  const uid = useId().replace(/:/g, '');
  const win = `${uid}-win`;
  const phone = `${uid}-phone`;
  return (
    <svg className="vb-work-art" viewBox="12 0 400 334" role="img" aria-label={label}>
      <defs>
        <clipPath id={win}>
          <path d="M20 66H340V234a10 10 0 0 1-10 10H30a10 10 0 0 1-10-10Z" />
        </clipPath>
        <clipPath id={phone}>
          <rect x="274" y="98" width="124" height="224" rx="17" />
        </clipPath>
      </defs>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <g strokeWidth="1" style={{ stroke: 'var(--pr-text-faint)' }}>
          <path d="M20 20h320M20 14v12M340 14v12" />
          <path d="M268 78h136M268 72v12M404 72v12" />
        </g>
        <g stroke="none" fontSize="11" style={{ fill: 'var(--pr-text-faint)', fontFamily: 'var(--pr-font-body)' }}>
          <text x="180" y="10" textAnchor="middle">web</text>
          <text x="374" y="64" textAnchor="middle">mobile</text>
        </g>
        <rect x="20" y="34" width="320" height="210" rx="10" style={{ fill: 'var(--pr-bg-raised)' }} />
        <image
          href={desktop}
          x="20"
          y="66"
          width="320"
          height="200"
          preserveAspectRatio="xMidYMin slice"
          clipPath={`url(#${win})`}
        />
        <path d="M20 66h320" />
        <circle cx="42" cy="50" r="3.5" />
        <circle cx="58" cy="50" r="3.5" />
        <circle cx="74" cy="50" r="3.5" />
        <rect x="268" y="92" width="136" height="236" rx="22" style={{ fill: 'var(--pr-bg)' }} />
        <image
          href={mobile}
          x="274"
          y="98"
          width="124"
          height="268"
          preserveAspectRatio="xMidYMin slice"
          clipPath={`url(#${phone})`}
        />
        <rect x="268" y="92" width="136" height="236" rx="22" />
      </g>
    </svg>
  );
};

export default WorkArt;
