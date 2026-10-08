// Split layout: persistent identity rail on the left (identity + quick info + socials),
// the right column scrolls through everything else. Passes applied so far are logged in
// docs/redesign-log.md.
//
// Harden pass (2026-09-30): bilingual ES/EN. All copy comes from `c` (content/content.es.ts /
// content/content.en.ts, same shape); lists key by index so switching language updates text in
// place instead of remounting nodes (keeps GSAP reveal state intact). TODO notes render
// only in development, per the content brief.
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './PortfolioPage.css';
import { feedback } from './data/feedback';
import { contactDetails } from './data/contact';
import { contentEs } from './content/content.es';
import { contentEn } from './content/content.en';
import { useRailSpy } from './hooks/useRailSpy';
import { useLang, type Lang } from './hooks/useLang';
import ExperienceTimeline from './ExperienceTimeline';
import TypedRole from './TypedRole';
import ProductIcon from './ProductIcon';
import TechRibbon from './TechRibbon';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = { theme: string; toggleTheme: (e: React.ChangeEvent<HTMLInputElement>) => void };

// Order = DOM order of the main column (useRailSpy relies on it). Labels come from c.ui.nav.
const railNavIds = [
  'about',
  'portfolio',
  'experience',
  'credentials',
  'feedback',
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

// Wraps the figures in a sentence (88%, ~300, 13+) so results read first.
const emph = (s: string) =>
  s.split(/(~?\d[\d.,]*[+%]?)/).map((t, k) =>
    k % 2 ? (
      <strong key={k} className="hw-num">
        {t}
      </strong>
    ) : (
      t
    ),
  );

const PortfolioPage: React.FC<Props> = ({ theme, toggleTheme }) => {
  const mainRef = useRef<HTMLElement>(null);
  const accentPathRef = useRef<SVGPathElement>(null);

  const [lang, setLang] = useLang();
  const c = lang === 'en' ? contentEn : contentEs;
  const { ui } = c;
  // The featured project (the one made of products) has its own card; the others share one shape.
  const featuredWork = c.work.find((p) => p.products);
  const otherWork = c.work.filter((p) => !p.products);

  const activeSection = useRailSpy(railNavIds as unknown as string[]);

  const { metric } = c.howIWork.plant;

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
        // Harden (2026-10-05): opacity + y only. `autoAlpha` also set `visibility: hidden`,
        // which removed unrevealed links from the tab order, headings from screen-reader
        // navigation and text from Ctrl+F. Opacity keeps everything in the accessibility tree.
        // Elements already inside the fold are never hidden, and any failure in the setup
        // clears the inline styles so content can't stay stuck invisible.
        const revealTargets = gsap.utils.toArray<HTMLElement>('.vb-reveal', mainRef.current);
        const foldLine = window.innerHeight * 0.88;
        try {
          revealTargets
            .filter((el) => el.getBoundingClientRect().top > foldLine)
            .forEach((el) => {
              gsap.fromTo(
                el,
                { opacity: 0, y: 26 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  ease: 'power2.out',
                  clearProps: 'opacity,transform',
                  scrollTrigger: {
                    trigger: el,
                    start: 'top 88%',
                    toggleActions: 'play none none none',
                  },
                },
              );
            });
        } catch {
          gsap.set(revealTargets, { clearProps: 'opacity,transform' });
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
        {/* Hero: identity (name, role, tagline, availability) beside a line illustration, in the
            first viewport. On the split layout the rail hides its own identity block and this
            one shows; stacked, it is the other way round (CSS), so the name is never doubled. */}
        <section id="about" className="vb-section vb-hero">
          <div className="vb-hero-id">
            <h1 className="vb-hero-name">{c.profile.name}</h1>
            <span className="vb-hero-rule" aria-hidden="true" />
            <p className="vb-hero-role">
              <TypedRole
                texts={[...c.profile.roleCycle, c.profile.role]}
                cursor="underscore"
                prompt=">"
              />
            </p>
            <p className="vb-hero-tagline">{c.profile.tagline}</p>
            <p className="vb-hero-status">
              <span className="vb-now-dot" aria-hidden="true" />
              {c.profile.availability}
            </p>
          </div>
          <svg className="vb-hero-art" viewBox="0 0 480 400" aria-hidden="true" focusable="false">
            <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <g strokeWidth="1" style={{ stroke: "var(--pr-text-faint)" }}>
                <path d="M40 46h300M40 40v12M340 40v12" />
                <path d="M16 70v210M10 70h12M10 280h12" />
                <path d="M300 104h130M300 98v12M430 98v12" />
                <path d="M10 338h460" strokeDasharray="2 6" style={{ stroke: "var(--pr-border)" }} />
              </g>
              <g stroke="none" fontSize="11" style={{ fill: "var(--pr-text-faint)", fontFamily: "var(--pr-font-body)" }}>
                <text x="190" y="34" textAnchor="middle">web</text>
                <text x="365" y="92" textAnchor="middle">mobile</text>
              </g>
              <rect x="40" y="70" width="300" height="210" rx="10" style={{ fill: "var(--pr-bg-raised)" }} />
              <path d="M40 102h300" />
              <circle cx="62" cy="86" r="3.5" />
              <circle cx="78" cy="86" r="3.5" />
              <circle cx="94" cy="86" r="3.5" />
              <rect x="64" y="126" width="120" height="12" rx="3" style={{ fill: "var(--pr-accent-soft)" }} />
              <path d="M64 158h200M64 172h160M64 186h180" strokeWidth="5" style={{ stroke: "var(--pr-border)" }} />
              <rect x="64" y="208" width="76" height="52" rx="6" />
              <rect x="152" y="208" width="76" height="52" rx="6" />
              <rect x="240" y="208" width="76" height="52" rx="6" />
              <rect x="300" y="120" width="130" height="250" rx="20" style={{ fill: "var(--pr-bg)" }} />
              <path d="M346 136h38" />
              <path d="M320 168h56" strokeWidth="5" style={{ stroke: "var(--pr-border)" }} />
              <circle cx="410" cy="168" r="4" style={{ fill: "currentColor" }} stroke="none" />
              <circle cx="410" cy="168" r="9" style={{ stroke: "var(--pr-accent-soft)" }} strokeWidth="2" />
              <rect x="318" y="196" width="86" height="30" rx="10" style={{ fill: "var(--pr-bg-raised)" }} />
              <rect x="338" y="240" width="74" height="30" rx="10" style={{ fill: "var(--pr-accent-soft)" }} />
              <rect x="318" y="284" width="64" height="30" rx="10" style={{ fill: "var(--pr-bg-raised)" }} />
              <rect x="318" y="336" width="94" height="20" rx="10" />
            </g>
          </svg>
        </section>

        <TechRibbon row="ai" lang={lang} />

        <section id="portfolio" className="vb-section">
          <h2 className="vb-reveal">{ui.nav.portfolio}</h2>
          <div className="vb-work-list">
            {featuredWork && (
              <div
                id={workAnchor(featuredWork.title)}
                className="vb-work-card pr-card vb-reveal is-featured"
              >
                <div className="vb-work-main">
                  {featuredWork.brand && (
                    <span className="vb-work-logo" aria-hidden="true">
                      <img
                        className="vb-brand-logo on-dark"
                        src={featuredWork.brand.logoOnDark}
                        alt=""
                        width={480}
                        height={361}
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        className="vb-brand-logo on-light"
                        src={featuredWork.brand.logoOnLight}
                        alt=""
                        width={480}
                        height={361}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  )}
                  <div className="vb-work-head">
                    <strong>{featuredWork.title}</strong>
                    {featuredWork.status && (
                      <span className="pr-pill pr-accent-text">{featuredWork.status}</span>
                    )}
                  </div>
                  {featuredWork.subtitle && (
                    <p className="vb-work-subtitle">{featuredWork.subtitle}</p>
                  )}
                  <p className="vb-work-desc">{featuredWork.description}</p>
                  {featuredWork.highlights && (
                    <ul className="vb-bullets">
                      {featuredWork.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                  {SHOW_TODOS && featuredWork.todoNote && (
                    <p className="vb-todo">{featuredWork.todoNote}</p>
                  )}
                </div>
                <div className="vb-work-stage">
                  {featuredWork.image && (
                    <figure className="vb-work-shot">
                      <img
                        src={featuredWork.image}
                        alt={featuredWork.imageAlt ?? ''}
                        width={490}
                        height={610}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  )}
                  <ul className="vb-products">
                    {featuredWork.products?.map((pr) => (
                      <li
                        key={pr.id}
                        className={`vb-product${pr.id === 'customer' ? ' is-tied' : ''}`}
                      >
                        <span className="vb-product-icon">
                          <ProductIcon id={pr.id} />
                        </span>
                        <span>
                          <strong className="vb-product-name">{pr.name}</strong>
                          <span className="vb-product-fn">{pr.audience}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {otherWork.map((p) => {
              const rest = p.highlights?.slice(2);
              return (
                <div
                  key={p.title}
                  id={workAnchor(p.title)}
                  className="vb-work-card pr-card vb-reveal"
                >
                  <div className="vb-work-main">
                    <div className="vb-work-head">
                      <strong>{p.title}</strong>
                      {p.status && <span className="pr-pill pr-accent-text">{p.status}</span>}
                    </div>
                    {p.subtitle && <p className="vb-work-subtitle">{p.subtitle}</p>}
                    <p className="vb-work-desc">{p.description}</p>
                    {p.highlights && (
                      <ul className="vb-bullets">
                        {p.highlights.slice(0, 2).map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                    {rest && rest.length > 0 && (
                      <details className="vb-more">
                        <summary>{ui.moreDetail}</summary>
                        <ul className="vb-bullets">
                          {rest.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </details>
                    )}
                    {p.stack.length > 0 && (
                      <div className="vb-tags">
                        {p.stack.map((s) => (
                          <span key={s} className="pr-pill">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                    {SHOW_TODOS && p.todoNote && <p className="vb-todo">{p.todoNote}</p>}
                  </div>
                </div>
              );
            })}
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

        <TechRibbon row="back" lang={lang} />

        <section id="experience" className="vb-section">
          <h2 className="vb-reveal">{ui.nav.experience}</h2>
          <article className="hw" aria-labelledby="vb-how-title">
            <header className="hw-head">
              <h3 id="vb-how-title">{ui.howTitle}</h3>
              <p className="hw-thesis">{c.howIWork.thesis}</p>
            </header>
            <div className="hw-cols">
              <div className="hw-col">
                <p className="hw-label">
                  {c.howIWork.plant.label}
                  <span>{c.howIWork.plant.source}</span>
                </p>
                <p className="hw-lead">{emph(metric.caption)}</p>
                <ul className="hw-list">
                  {c.howIWork.plant.points.map((p, i) => (
                    <li key={i}>{emph(p)}</li>
                  ))}
                </ul>
              </div>
              <div className="hw-col">
                <p className="hw-label">
                  {c.howIWork.software.label}
                  <span>{c.howIWork.software.source}</span>
                </p>
                <p className="hw-lead">{emph(c.howIWork.software.points[0])}</p>
                <ul className="hw-list">
                  {c.howIWork.software.points.slice(1).map((p, i) => (
                    <li key={i}>{emph(p)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
          <ExperienceTimeline entries={c.experience} todayLabel={ui.todayLabel} />
        </section>

        <section id="credentials" className="vb-section">
          <h2 className="vb-reveal">{ui.nav.credentials}</h2>
          <ul className="vb-credentials">
            {c.credentials.map((cred) => (
              <li key={cred.verifyUrl}>
                <a className="vb-cert" href={cred.verifyUrl} target="_blank" rel="noreferrer">
                  <img src={cred.image} alt="" width={720} height={544} loading="lazy" decoding="async" />
                  <strong>
                    {cred.name}
                    <span className="vb-sr-only"> {ui.newTab}</span>
                  </strong>
                  <span className="vb-cert-meta">
                    {cred.issuer} ·{" "}
                    {new Date(`${cred.issued}T12:00:00`).toLocaleDateString(c.lang, {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="vb-cert-verify">{ui.verifyCert}</span>
                </a>
              </li>
            ))}
          </ul>
          <TechRibbon row="ui" lang={lang} />
        </section>

        <section id="feedback" className="vb-section">
          <h2 className="vb-reveal">{ui.nav.feedback}</h2>
          <p className="vb-feedback-lead">{ui.feedbackLead}</p>
          <ul className="vb-feedback">
            {feedback.map((f) => (
              <li key={f.id}>
                <figure className="vb-quote">
                  <blockquote lang={REVIEWS_LANG}>&ldquo;{f.quote}&rdquo;</blockquote>
                  <figcaption>{f.context[lang]}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
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

export default PortfolioPage;
