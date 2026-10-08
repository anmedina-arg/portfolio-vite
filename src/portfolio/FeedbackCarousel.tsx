import { useCallback, useEffect, useRef, useState } from 'react';

export type Slide = { id: string; quote: string; author: string; context?: string };

type Props = {
  slides: Slide[];
  // Language of the quotes (they are never translated).
  quoteLang: string;
  label: string;
  roleDescription: string;
  prevLabel: string;
  nextLabel: string;
};

// A manual carousel: a scroll-snap track plus two buttons. It never autoplays and never loops
// (DESIGN.md: no auto-moving content). The track is a focusable region, so arrow keys work, and
// touch and trackpad scrolling are native. The next card is left peeking as the affordance.
const FeedbackCarousel: React.FC<Props> = ({
  slides,
  quoteLang,
  label,
  roleDescription,
  prevLabel,
  nextLabel,
}) => {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [update]);

  const go = (dir: 1 | -1) => {
    const el = trackRef.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: dir * (first.offsetWidth + gap), behavior: reduced ? 'auto' : 'smooth' });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    }
  };

  return (
    <div className="fb" role="region" aria-roledescription={roleDescription} aria-label={label}>
      <div className="fb-nav">
        <button type="button" className="fb-btn" onClick={() => go(-1)} disabled={!canPrev} aria-label={prevLabel}>
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
            <path
              d="M13 8H3.5M7.25 4.25 3.5 8l3.75 3.75"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button type="button" className="fb-btn" onClick={() => go(1)} disabled={!canNext} aria-label={nextLabel}>
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
            <path
              d="M3 8h9.5M8.75 4.25 12.5 8l-3.75 3.75"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <ul className="fb-track" ref={trackRef} tabIndex={0} onKeyDown={onKeyDown}>
        {slides.map((s, i) => (
          <li
            key={s.id}
            className="fb-slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${slides.length}`}
          >
            <figure className="fb-card">
              <blockquote lang={quoteLang}>&ldquo;{s.quote}&rdquo;</blockquote>
              <figcaption>
                <strong>{s.author}</strong>
                {s.context && <span>{s.context}</span>}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackCarousel;
