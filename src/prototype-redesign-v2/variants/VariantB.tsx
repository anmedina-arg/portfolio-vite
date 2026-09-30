// PROTOTYPE — throwaway. Variant B: persistent split identity rail — left column stays
// fixed (identity + quick info + socials), right column scrolls through everything else.
// Content enriched per src/portfolio-contenido-variante-B.md (2026-09-28). Passes since:
// layout, clarify, bolder, colorize (all 2026-09-30) — see NOTES.md.
//
// Harden pass (2026-09-30): bilingual ES/EN. All copy comes from `c` (contentB.ts /
// contentB.en.ts, same shape); lists key by index so switching language updates text in
// place instead of remounting nodes (keeps GSAP reveal state intact). TODO notes render
// only in development, per the content brief.
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './VariantB.css';
import { reviews, contactDetails } from '../content';
import { contentB_es } from '../contentB';
import { contentB_en } from '../contentB.en';
import { useRailSpy } from '../useRailSpy';
import { useLang, type Lang } from '../useLang';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = { theme: string; toggleTheme: (e: React.ChangeEvent<HTMLInputElement>) => void };

// Order = DOM order of the main column (useRailSpy relies on it). Labels come from c.ui.nav.
const railNavIds = [
  'about',
  'portfolio',
  'experience',
  'tech',
  'recomendations',
  'contact',
] as const;

const emailContact = contactDetails.find((c) => c.href.startsWith('mailto:'));
// Email lives in the "Escribime" button; the plain rail links keep the rest.
const railLinks = contactDetails.filter((c) => c !== emailContact);

const workAnchor = (title: string) => `work-${title.toLowerCase()}`;

const SHOW_TODOS = import.meta.env.DEV;

// Recommendations are real people's words: never translated, always tagged with their language.
const REVIEWS_LANG: Lang = 'es';

const langOptions: { value: Lang; short: string; name: string }[] = [
  { value: 'es', short: 'ES', name: 'Español' },
  { value: 'en', short: 'EN', name: 'English' },
];

const VariantB: React.FC<Props> = ({ theme, toggleTheme }) => {
  const mainRef = useRef<HTMLElement>(null);
  const accentPathRef = useRef<SVGPathElement>(null);
  const sparkPathRef = useRef<SVGPathElement>(null);
  const sparkDotRef = useRef<SVGCircleElement>(null);

  const [lang, setLang] = useLang();
  const c = lang === 'en' ? contentB_en : contentB_es;
  const { ui } = c;

  const activeSection = useRailSpy(railNavIds as unknown as string[]);

  const [bioLead, ...bioRest] = c.profile.bioParagraphs;

  // Slope chart geometry: honest two-point chart on an 80–100% scale (only the two
  // real measurements are drawn — no invented trajectory in between).
  const { metric } = c.howIWork.plant;
  const slopeY = (pct: number) => 96 - (pct - 80) * 3.6;
  const slope = { x1: 34, y1: slopeY(metric.from), x2: 196, y2: slopeY(metric.to) };

  const jumpTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Identity accent line — draws in once and stays (polish: the infinite idle drift
        // was auto-moving content with no pause control, WCAG 2.2.2).
        const accentPath = accentPathRef.current;
        if (accentPath) {
          const length = accentPath.getTotalLength();
          gsap.set(accentPath, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(accentPath, {
            strokeDashoffset: 0,
            duration: 1.3,
            delay: 0.15,
            ease: 'power2.out',
          });
        }

        // Scroll-triggered reveal, once: content no longer fades out again when a reader
        // scrolls back up to re-scan it (polish).
        const revealTargets = gsap.utils.toArray<HTMLElement>('.vb-reveal', mainRef.current);
        revealTargets.forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 26 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            },
          );
        });

        // "Cómo trabajo" slope (88% → 93%) — the line draws in, then the end point pops in.
        const sparkPath = sparkPathRef.current;
        if (sparkPath) {
          const sparkLength = sparkPath.getTotalLength();
          gsap.set(sparkPath, { strokeDasharray: sparkLength });
          const sparkline = gsap.timeline({
            scrollTrigger: {
              trigger: sparkPath,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
          sparkline.fromTo(
            sparkPath,
            { strokeDashoffset: sparkLength },
            { strokeDashoffset: 0, duration: 1.1, ease: 'power2.out' },
          );
          if (sparkDotRef.current) {
            sparkline.fromTo(
              sparkDotRef.current,
              { scale: 0, transformOrigin: 'center' },
              { scale: 1, duration: 0.35, ease: 'back.out(2)' },
              '-=0.15',
            );
          }
        }
      });

      return () => mm.revert();
    },
    { scope: mainRef },
  );

  return (
    <div className="vb">
      <a className="vb-skip" href="#main">
        {ui.skip}
      </a>
      <aside className="vb-rail">
        <div>
          {/* Preferences row, first in the rail: language (so a visitor who doesn't read
              Spanish finds it immediately) and theme, grouped instead of costing two rows. */}
          <div className="vb-prefs">
            <div className="vb-lang" role="group" aria-label={ui.langGroup}>
              {langOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className="vb-lang-option"
                  lang={opt.value}
                  aria-label={opt.name}
                  aria-pressed={lang === opt.value}
                  onClick={() => setLang(opt.value)}
                >
                  {opt.short}
                </button>
              ))}
            </div>
            {/* Label names the setting, the switch shows its state (was "Oscuro"/"Claro"). */}
            <label className="vb-theme-toggle">
              <input
                type="checkbox"
                role="switch"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              {ui.themeLabel}
            </label>
          </div>
          <div className="vb-identity">
            <h1>{c.profile.name}</h1>
            <p className="vb-role pr-accent-text">{c.profile.role}</p>
            <svg
              className="vb-accent-line"
              viewBox="0 0 160 16"
              width="160"
              height="16"
              aria-hidden="true"
              focusable="false"
            >
              <path
                ref={accentPathRef}
                d="M2 8 C 20 2, 36 14, 54 8 S 90 2, 108 8 S 144 14, 158 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="vb-tagline">{c.profile.tagline}</p>
        </div>

        {/* Availability leads and reads as a live status (same dot as the ledger). */}
        <dl className="vb-quickinfo">
          <div className="vb-quickinfo-status">
            <dt>{ui.availabilityLabel}</dt>
            <dd>
              <span className="vb-now-dot" aria-hidden="true" />
              {c.profile.availability}
            </dd>
          </div>
          <div>
            <dt>{ui.locationLabel}</dt>
            <dd>{c.profile.location}</dd>
          </div>
          <div>
            <dt>{ui.languagesLabel}</dt>
            <dd>{c.profile.languages}</dd>
          </div>
        </dl>

        <div className="vb-cta">
          <div className="vb-cta-buttons">
            <a className="vb-btn vb-btn-primary" href={c.cvUrl} download>
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">
                <path
                  d="M8 2.5v7.5M4.75 6.75 8 10l3.25-3.25M3 13.25h10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {ui.downloadCv}
            </a>
            {emailContact && (
              <a className="vb-btn vb-btn-secondary" href={emailContact.href}>
                {ui.writeMe}
              </a>
            )}
          </div>
          {SHOW_TODOS && <span className="vb-todo">{c.profile.cvTodo}</span>}
        </div>

        {/* A real <nav> element collides with the unscoped `nav {}` rule in
            src/components/nav/nav.css (position: fixed, pinned to viewport
            bottom-center) — known issue, see NOTES.md. Using a div with
            role="navigation" keeps the same semantics without the collision. */}
        <div className="vb-nav" role="navigation" aria-label={ui.navLabel}>
          {railNavIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`vb-nav-item${activeSection === id ? ' is-active' : ''}`}
              onClick={jumpTo(id)}
              aria-current={activeSection === id ? 'location' : undefined}
            >
              <span className="vb-nav-dot" aria-hidden="true" />
              {ui.nav[id]}
            </a>
          ))}
        </div>

        <div className="vb-links">
          {railLinks.map((link) => (
            <a key={link.title} href={link.href}>
              {link.title}
            </a>
          ))}
        </div>
      </aside>

      <main id="main" tabIndex={-1} className="vb-main" ref={mainRef}>
        {/* Claim → proof → origin: the first bio sentence names the two products,
            the ledger proves it within the first viewport, the Arcor paragraph follows. */}
        <section id="about" className="vb-section">
          <h2 className="vb-reveal">{ui.nav.about}</h2>
          <p className="vb-bio vb-reveal">{bioLead}</p>

          <div className="vb-now vb-reveal" role="group" aria-labelledby="vb-now-title">
            <p className="vb-now-title" id="vb-now-title">
              <span className="vb-now-dot" aria-hidden="true" />
              {ui.nowTitle}
            </p>
            <ul className="vb-now-list">
              {c.now.map((item) => (
                <li key={item.anchor}>
                  <a className="vb-now-row" href={`#${item.anchor}`} onClick={jumpTo(item.anchor)}>
                    <span className="vb-now-product">
                      <strong>{item.product}</strong>
                      <span className="vb-now-what">{item.what}</span>
                    </span>
                    <span className="vb-now-fact">
                      <strong>{item.fact}</strong>
                      <span className="vb-now-detail">{item.detail}</span>
                    </span>
                    <svg
                      className="vb-now-arrow"
                      viewBox="0 0 16 16"
                      width="14"
                      height="14"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M3 8h9.5M8.75 4.25 12.5 8l-3.75 3.75"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {bioRest.map((p, i) => (
            <p key={i} className="vb-bio vb-reveal">
              {p}
            </p>
          ))}
        </section>

        <section id="portfolio" className="vb-section">
          <h2 className="vb-reveal">{ui.nav.portfolio}</h2>
          <div className="vb-work-list">
            {c.work.map((p) => (
              <div
                key={p.title}
                id={workAnchor(p.title)}
                className="vb-work-card pr-card vb-reveal"
              >
                <div className="vb-work-head">
                  <strong>{p.title}</strong>
                  {p.status && <span className="pr-pill pr-accent-text">{p.status}</span>}
                </div>
                {p.subtitle && <p className="vb-work-subtitle">{p.subtitle}</p>}
                <p className="vb-work-desc">{p.description}</p>
                {p.highlights && (
                  <ul className="vb-bullets">
                    {p.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
                <div className="vb-tags">
                  {p.stack.map((s) => (
                    <span key={s} className="pr-pill">
                      {s}
                    </span>
                  ))}
                </div>
                {SHOW_TODOS && p.todoNote && <p className="vb-todo">{p.todoNote}</p>}
              </div>
            ))}
          </div>

          <h3 className="vb-work-subhead">{ui.legacySubhead}</h3>
          <div className="vb-projects">
            {c.legacy.map((p) => (
              <a
                key={p.title}
                className="vb-project pr-card vb-reveal"
                href={p.demo}
                target="_blank"
                rel="noreferrer"
              >
                {/* Decorative thumbnail: the title below already names the link. A
                    broken image hides itself instead of leaving a blank box. */}
                {p.image && (
                  <img
                    src={p.image}
                    alt=""
                    width={96}
                    height={64}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.hidden = true;
                    }}
                  />
                )}
                <div>
                  <strong>
                    {p.title}
                    <span className="vb-sr-only"> {ui.newTab}</span>
                  </strong>
                  <p>{p.description}</p>
                  <div className="vb-tags">
                    {p.stack.map((s) => (
                      <span key={s} className="pr-pill">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="experience" className="vb-section">
          <h2 className="vb-reveal">{ui.nav.experience}</h2>

          {/* "Cómo trabajo" (bolder pass 2026-09-30): the Arcor → software thread as one
              lifted folio, same vocabulary as the "En producción hoy" ledger. Replaces the
              case-study card and its side-tab border. */}
          <article className="vb-how vb-reveal" aria-labelledby="vb-how-title">
            <header className="vb-how-head">
              <h3 id="vb-how-title">{ui.howTitle}</h3>
              <p className="vb-how-thesis">{c.howIWork.thesis}</p>
            </header>
            <div className="vb-how-cols">
              <div className="vb-how-col">
                <p className="vb-how-label">
                  {c.howIWork.plant.label}
                  <span className="vb-how-source">{c.howIWork.plant.source}</span>
                </p>
                <figure className="vb-how-chart">
                  <svg
                    viewBox="0 0 230 124"
                    role="img"
                    aria-labelledby="vb-how-chart-caption"
                    focusable="false"
                  >
                    <line className="vb-how-axis" x1="34" y1="96" x2="196" y2="96" />
                    <line
                      className="vb-how-tick"
                      x1={slope.x1}
                      y1={slope.y1}
                      x2={slope.x1}
                      y2="96"
                    />
                    <line
                      className="vb-how-tick"
                      x1={slope.x2}
                      y1={slope.y2}
                      x2={slope.x2}
                      y2="96"
                    />
                    <path
                      ref={sparkPathRef}
                      className="vb-how-slope"
                      d={`M${slope.x1} ${slope.y1} L${slope.x2} ${slope.y2}`}
                    />
                    <circle className="vb-how-point is-from" cx={slope.x1} cy={slope.y1} r="4" />
                    <circle
                      ref={sparkDotRef}
                      className="vb-how-point"
                      cx={slope.x2}
                      cy={slope.y2}
                      r="5"
                    />
                    <text
                      className="vb-how-value is-from"
                      x={slope.x1}
                      y={slope.y1 - 12}
                      textAnchor="middle"
                    >
                      {metric.from}%
                    </text>
                    <text
                      className="vb-how-value"
                      x={slope.x2}
                      y={slope.y2 - 13}
                      textAnchor="middle"
                    >
                      {metric.to}%
                    </text>
                    <text className="vb-how-axis-label" x={slope.x1} y="116" textAnchor="middle">
                      {ui.chartBefore}
                    </text>
                    <text className="vb-how-axis-label" x={slope.x2} y="116" textAnchor="middle">
                      {ui.chartAfter}
                    </text>
                  </svg>
                  <figcaption id="vb-how-chart-caption">{metric.caption}</figcaption>
                </figure>
                <ul className="vb-bullets">
                  {c.howIWork.plant.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="vb-how-col">
                <p className="vb-how-label">
                  {c.howIWork.software.label}
                  <span className="vb-how-source">{c.howIWork.software.source}</span>
                </p>
                <ul className="vb-bullets vb-how-list">
                  {c.howIWork.software.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <ul className="vb-timeline">
            {c.experience.map((e, i) => (
              <li key={i} className="vb-reveal">
                <strong>{e.role}</strong> — {e.company} <span className="pr-pill">{e.dates}</span>
                {e.note && <p>{e.note}</p>}
              </li>
            ))}
          </ul>
        </section>

        <section id="tech" className="vb-section">
          <h2 className="vb-reveal">{ui.nav.tech}</h2>
          {c.tech.map((cat, i) => (
            <div key={i} className="vb-tech-group vb-reveal">
              <h3>{cat.label}</h3>
              <div className="vb-tags">
                {cat.items.map((t) => (
                  <span key={t} className="pr-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <h3>{ui.credentials}</h3>
          <ul className="vb-credentials">
            {c.credentials.map((cred) => (
              <li key={cred.name} className="vb-reveal">
                {/* No verification URL yet → plain text, not a dead link to the top of the page. */}
                {cred.verifyUrl && cred.verifyUrl !== '#' ? (
                  <a href={cred.verifyUrl}>{cred.name}</a>
                ) : (
                  <span className="vb-credential-name">{cred.name}</span>
                )}{' '}
                — {cred.issuer} · {cred.date}
              </li>
            ))}
          </ul>
        </section>

        <section id="recomendations" className="vb-section">
          <h2 className="vb-reveal">{ui.nav.recomendations}</h2>
          {lang !== REVIEWS_LANG && ui.reviewsNote && (
            <p className="vb-reviews-note">{ui.reviewsNote}</p>
          )}
          <div className="vb-reviews">
            {reviews.slice(0, 3).map((r) => (
              <div key={r.id} className="pr-card vb-review vb-reveal">
                <p lang={REVIEWS_LANG}>&ldquo;{r.review}&rdquo;</p>
                <strong>{r.name}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* Closing destination: restates availability (peak-end) and shows the address
            itself, so it can be copied when no mail client handles the mailto. */}
        <footer id="contact" className="vb-section vb-contact">
          <h2>{ui.nav.contact}</h2>
          <p className="vb-contact-lead">
            {c.profile.availability}.{' '}
            {emailContact && (
              <>
                {ui.writeMeAt}{' '}
                <a href={emailContact.href}>{emailContact.href.replace('mailto:', '')}</a>.
              </>
            )}
          </p>
          <div className="vb-footer">
            {railLinks.map((link) => (
              <a key={link.title} href={link.href}>
                {link.title}
              </a>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
};

export default VariantB;
