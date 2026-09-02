// PROTOTYPE — throwaway. Variant C: project-first magazine — work leads, bio/experience
// are compact secondary blocks. Inverts A/B's bio-led priority.
import { useState } from 'react';
import './VariantC.css';
import {
  profile,
  experience,
  techStack,
  aiStack,
  credentials,
  workProfessional,
  workPersonal,
  workLabs,
  workLabsMoreCount,
  reviews,
  contactDetails,
  itemsNav,
} from '../content';

type Props = { theme: string; toggleTheme: (e: React.ChangeEvent<HTMLInputElement>) => void };

const TABS = ['Trabajo profesional', 'Labs', 'Proyectos personales'] as const;

const VariantC: React.FC<Props> = ({ theme, toggleTheme }) => {
  const [tab, setTab] = useState<(typeof TABS)[number]>('Trabajo profesional');

  return (
    <div className="vc">
      <div className="vc-nav pr-container">
        <span>{profile.name}</span>
        <div className="vc-nav-links">
          {itemsNav.map((item) => (
            <a key={item.path} href={item.path}>
              {item.title}
            </a>
          ))}
        </div>
        <label className="va-theme-toggle">
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
          {theme === 'dark' ? 'Oscuro' : 'Claro'}
        </label>
      </div>

      <header className="vc-hero pr-container">
        <h1>
          {profile.name} <span className="pr-accent-text">— {profile.role}</span>
        </h1>
        <p>{profile.tagline}</p>
      </header>

      <section id="portfolio" className="vc-work">
        <div className="pr-container vc-work-head">
          <h2>Trabajo destacado</h2>
          <div className="vc-tabs">
            {TABS.map((t) => (
              <button key={t} className={t === tab ? 'active' : ''} onClick={() => setTab(t)}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {tab === 'Trabajo profesional' && (
          <div className="vc-grid pr-container">
            {workProfessional.map((p) => (
              <a key={p.title} className="vc-tile" href={p.demo} target="_blank" rel="noreferrer">
                <img src={p.image} alt={p.title} />
                <div className="vc-tile-caption">
                  <strong>{p.title}</strong>
                  <span>{p.skill.slice(0, 3).join(' · ')}</span>
                </div>
              </a>
            ))}
          </div>
        )}
        {tab === 'Labs' && (
          <div className="vc-list pr-container">
            {workLabs.map((p) => (
              <a key={p.title} href={p.demo} target="_blank" rel="noreferrer">
                {p.title}
              </a>
            ))}
            {workLabsMoreCount > 0 && <span className="va-more">+{workLabsMoreCount} más</span>}
          </div>
        )}
        {tab === 'Proyectos personales' && (
          <div className="vc-list pr-container">
            {workPersonal.map((p) => (
              <a key={p.title} href={p.demo} target="_blank" rel="noreferrer">
                {p.title}
              </a>
            ))}
          </div>
        )}
      </section>

      <section className="pr-container vc-band">
        <div>
          <h3>Sobre mí</h3>
          <p>{profile.bio}</p>
        </div>
        <dl>
          <div>
            <dt>Ubicación</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Disponibilidad</dt>
            <dd>{profile.availability}</dd>
          </div>
        </dl>
      </section>

      <section id="experience" className="pr-container vc-section">
        <h2>Experiencia</h2>
        <div className="vc-htimeline">
          <div className="vc-htimeline-item vc-htimeline-featured">
            <span className="pr-pill">{experience.caseStudy.dates}</span>
            <strong>
              {experience.caseStudy.role} — {experience.caseStudy.company}
            </strong>
            <p>{experience.caseStudy.summary}</p>
          </div>
          {experience.timeline.map((e) => (
            <div key={e.role + e.company} className="vc-htimeline-item">
              <span className="pr-pill">{e.dates}</span>
              <strong>
                {e.role} — {e.company}
              </strong>
            </div>
          ))}
        </div>
      </section>

      <section className="pr-container vc-section">
        <h2>Tecnologías</h2>
        <div className="vc-tags">
          {[...techStack, ...aiStack].map((t) => (
            <span key={t} className="pr-pill">
              {t}
            </span>
          ))}
        </div>
        <div className="vc-credentials">
          {credentials.map((c) => (
            <a key={c.name} href={c.verifyUrl} className="pr-pill pr-accent-text">
              {c.name}
            </a>
          ))}
        </div>
      </section>

      <section id="recomendations" className="pr-container vc-section">
        <h2>Recomendaciones</h2>
        <div className="vc-quotes">
          {reviews.slice(0, 3).map((r) => (
            <blockquote key={r.id}>
              &ldquo;{r.review}&rdquo;
              <cite>{r.name}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <footer id="contact" className="pr-container vc-footer">
        {contactDetails.map((c) => (
          <a key={c.title} href={c.href}>
            {c.title}
          </a>
        ))}
      </footer>
    </div>
  );
};

export default VariantC;
