// A project's architecture as a diagram: the backend as a hub, the apps that consume it as
// the branches. Plain text and lines (no boxes inside the card): the connectors are drawn
// in CSS and hidden from assistive tech, while the names and details stay real text in a list.
import type { WorkSystem } from './content/content.es';

type Props = { system: WorkSystem };

const SystemDiagram: React.FC<Props> = ({ system }) => (
  <figure className="vb-system">
    <div className="vb-system-map">
      <div className="vb-system-backend">
        <strong>{system.backend.name}</strong>
        <span>{system.backend.detail}</span>
      </div>
      <ul className="vb-system-apps">
        {system.apps.map((app, i) => (
          <li key={i}>
            <strong>{app.name}</strong>
            <span>{app.detail}</span>
          </li>
        ))}
      </ul>
    </div>
    <figcaption>{system.caption}</figcaption>
  </figure>
);

export default SystemDiagram;
