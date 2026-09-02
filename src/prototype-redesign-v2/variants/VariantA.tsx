// PROTOTYPE — throwaway. Variant A: editorial, single column, bio-led — closest to the
// estebanburgos.com.ar flow (Hero -> About -> Quick info -> Featured work -> tabs).
import { useState } from 'react';
import './VariantA.css';
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

const VariantA: React.FC<Props> = ({ theme, toggleTheme }) => {
  const [tab, setTab] = useState<(typeof TABS)[number]>('Trabajo profesional');

  return (
    <div className="va">
      <div className="va-nav pr-container">
        <span className="va-nav-name">{profile.name}</span>
        <div className="va-nav-links">
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

      <header className="va-hero pr-container">
        <h1>{profile.role}</h1>
        <p className="va-tagline pr-accent-text">{profile.tagline}</p>
        <div className="va-hero-ctas">
          <a className="va-btn va-btn-primary" href="#portfolio">
            Ver trabajo
          </a>
          <a className="va-btn" href="/src/assets/CV_Andres_Medina_esp.pdf">
            Descargar CV
          </a>
        </div>
      </header>

      <section className="pr-container va-about">
        <p>{profile.bio}</p>
      </section>

      <section className="pr-container va-quickinfo">
        <span>{profile.location}</span>
        <span>{profile.languages}</span>
        <span>{profile.availability}</span>
        {contactDetails.map((c) => (
          <a key={c.title} href={c.href}>
            {c.title}
          </a>
        ))}
      </section>

      <section id="experience" className="pr-container va-section">
        <h2>Experiencia</h2>
        <div className="va-casestudy pr-card">
          <div className="va-casestudy-head">
            <strong>{experience.caseStudy.role}</strong> — {experience.caseStudy.company}
            <span className="pr-pill">{experience.caseStudy.dates}</span>
          </div>
          <p>{experience.caseStudy.summary}</p>
        </div>
        <ul className="va-timeline">
          {experience.timeline.map((e) => (
            <li key={e.role + e.company}>
              <strong>{e.role}</strong> — {e.company} <span className="pr-pill">{e.dates}</span>
              {e.note && <p className="va-timeline-note">{e.note}</p>}
            </li>
          ))}
        </ul>
      </section>

      <section className="pr-container va-section">
        <h2>Tecnologías</h2>
        <div className="va-tags">
          {techStack.map((t) => (
            <span key={t} className="pr-pill">
              {t}
            </span>
          ))}
        </div>
        <h3 className="va-subhead">Uso activo de IA</h3>
        <div className="va-tags">
          {aiStack.map((t) => (
            <span key={t} className="pr-pill pr-accent-text">
              {t}
            </span>
          ))}
        </div>
        <h3 className="va-subhead">Credenciales</h3>
        <ul className="va-credentials">
          {credentials.map((c) => (
            <li key={c.name}>
              <a href={c.verifyUrl}>{c.name}</a> — {c.issuer} · {c.date}
            </li>
          ))}
        </ul>
      </section>

      <section id="portfolio" className="pr-container va-section">
        <h2>Mis trabajos</h2>
        <div className="va-tabs">
          {TABS.map((t) => (
            <button key={t} className={t === tab ? 'active' : ''} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>

        {tab === 'Trabajo profesional' && (
          <div className="va-projects">
            {workProfessional.map((p) => (
              <a key={p.title} className="va-project pr-card" href={p.demo} target="_blank" rel="noreferrer">
                <img src={p.image} alt={p.title} />
                <div>
                  <strong>{p.title}</strong>
                  <span className="pr-pill">destacado</span>
                  <p>{p.description || 'Descripción pendiente.'}</p>
                </div>
              </a>
            ))}
          </div>
        )}
        {tab === 'Labs' && (
          <div className="va-projects va-projects-compact">
            {workLabs.map((p) => (
              <a key={p.title} className="va-project pr-card" href={p.demo} target="_blank" rel="noreferrer">
                <strong>{p.title}</strong>
              </a>
            ))}
            {workLabsMoreCount > 0 && <span className="va-more">+{workLabsMoreCount} más</span>}
          </div>
        )}
        {tab === 'Proyectos personales' && (
          <div className="va-projects va-projects-compact">
            {workPersonal.map((p) => (
              <a key={p.title} className="va-project pr-card" href={p.demo} target="_blank" rel="noreferrer">
                <strong>{p.title}</strong>
              </a>
            ))}
          </div>
        )}
      </section>

      <section id="recomendations" className="pr-container va-section">
        <h2>Recomendaciones</h2>
        <div className="va-reviews">
          {reviews.slice(0, 3).map((r) => (
            <div key={r.id} className="pr-card va-review">
              <p>&ldquo;{r.review}&rdquo;</p>
              <strong>{r.name}</strong>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="pr-container va-footer">
        {contactDetails.map((c) => (
          <a key={c.title} href={c.href}>
            {c.title}
          </a>
        ))}
      </footer>
    </div>
  );
};

export default VariantA;
