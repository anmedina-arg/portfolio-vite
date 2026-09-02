// PROTOTYPE — throwaway. Variant B: persistent split identity rail — left column stays
// fixed (identity + quick info + socials), right column scrolls through everything else.
import { useState } from 'react';
import './VariantB.css';
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
} from '../content';

type Props = { theme: string; toggleTheme: (e: React.ChangeEvent<HTMLInputElement>) => void };

const TABS = ['Trabajo profesional', 'Labs', 'Proyectos personales'] as const;

const VariantB: React.FC<Props> = ({ theme, toggleTheme }) => {
  const [tab, setTab] = useState<(typeof TABS)[number]>('Trabajo profesional');

  return (
    <div className="vb">
      <aside className="vb-rail">
        <div>
          <h1>{profile.name}</h1>
          <p className="vb-role pr-accent-text">{profile.role}</p>
          <p className="vb-tagline">{profile.tagline}</p>
        </div>

        <dl className="vb-quickinfo">
          <div>
            <dt>Ubicación</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Idiomas</dt>
            <dd>{profile.languages}</dd>
          </div>
          <div>
            <dt>Disponibilidad</dt>
            <dd>{profile.availability}</dd>
          </div>
        </dl>

        <div className="vb-links">
          {contactDetails.map((c) => (
            <a key={c.title} href={c.href}>
              {c.title}
            </a>
          ))}
          <a href="/src/assets/CV_Andres_Medina_esp.pdf">Descargar CV</a>
        </div>

        <label className="va-theme-toggle vb-theme-toggle">
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
          {theme === 'dark' ? 'Oscuro' : 'Claro'}
        </label>
      </aside>

      <main className="vb-main">
        <section className="vb-section">
          <p className="vb-bio">{profile.bio}</p>
        </section>

        <section id="experience" className="vb-section">
          <h2>Experiencia</h2>
          <div className="vb-casestudy pr-card">
            <div className="vb-casestudy-head">
              <strong>{experience.caseStudy.role}</strong> — {experience.caseStudy.company}
              <span className="pr-pill">{experience.caseStudy.dates}</span>
            </div>
            <p>{experience.caseStudy.summary}</p>
          </div>
          <ul className="vb-timeline">
            {experience.timeline.map((e) => (
              <li key={e.role + e.company}>
                <strong>{e.role}</strong> — {e.company} <span className="pr-pill">{e.dates}</span>
                {e.note && <p>{e.note}</p>}
              </li>
            ))}
          </ul>
        </section>

        <section className="vb-section">
          <h2>Tecnologías</h2>
          <div className="vb-tags">
            {techStack.map((t) => (
              <span key={t} className="pr-pill">
                {t}
              </span>
            ))}
          </div>
          <h3>Uso activo de IA</h3>
          <div className="vb-tags">
            {aiStack.map((t) => (
              <span key={t} className="pr-pill pr-accent-text">
                {t}
              </span>
            ))}
          </div>
          <h3>Credenciales</h3>
          <ul className="vb-credentials">
            {credentials.map((c) => (
              <li key={c.name}>
                <a href={c.verifyUrl}>{c.name}</a> — {c.issuer} · {c.date}
              </li>
            ))}
          </ul>
        </section>

        <section id="portfolio" className="vb-section">
          <h2>Mis trabajos</h2>
          <div className="vb-tabs">
            {TABS.map((t) => (
              <button key={t} className={t === tab ? 'active' : ''} onClick={() => setTab(t)}>
                {t}
              </button>
            ))}
          </div>

          {tab === 'Trabajo profesional' && (
            <div className="vb-projects">
              {workProfessional.map((p) => (
                <a key={p.title} className="vb-project pr-card" href={p.demo} target="_blank" rel="noreferrer">
                  <img src={p.image} alt={p.title} />
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.description || 'Descripción pendiente.'}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
          {tab === 'Labs' && (
            <div className="vb-list">
              {workLabs.map((p) => (
                <a key={p.title} href={p.demo} target="_blank" rel="noreferrer">
                  {p.title}
                </a>
              ))}
              {workLabsMoreCount > 0 && <span className="va-more">+{workLabsMoreCount} más</span>}
            </div>
          )}
          {tab === 'Proyectos personales' && (
            <div className="vb-list">
              {workPersonal.map((p) => (
                <a key={p.title} href={p.demo} target="_blank" rel="noreferrer">
                  {p.title}
                </a>
              ))}
            </div>
          )}
        </section>

        <section id="recomendations" className="vb-section">
          <h2>Recomendaciones</h2>
          <div className="vb-reviews">
            {reviews.slice(0, 3).map((r) => (
              <div key={r.id} className="pr-card vb-review">
                <p>&ldquo;{r.review}&rdquo;</p>
                <strong>{r.name}</strong>
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="vb-footer">
          {contactDetails.map((c) => (
            <a key={c.title} href={c.href}>
              {c.title}
            </a>
          ))}
        </footer>
      </main>
    </div>
  );
};

export default VariantB;
