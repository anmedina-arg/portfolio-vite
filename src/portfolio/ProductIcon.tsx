// Simple line icons for the products of a project (customer app, store app, driver app,
// admin panel). Drawn here on purpose, in the site's own stroke weight: only the client's
// logo and one capture are taken from the client's public site.
import type { WorkProduct } from './content/content.es';

const paths: Record<WorkProduct['id'], string> = {
  customer: 'M6 8h12l-1 11H7L6 8Z M9 8V6a3 3 0 0 1 6 0v2',
  store: 'M4 9.5 5.6 5h12.8L20 9.5M4 9.5V19h16V9.5M4 9.5h16M9.5 19v-4.5h5V19',
  driver:
    'M12 20.5s6-5.2 6-9.7a6 6 0 1 0-12 0c0 4.5 6 9.7 6 9.7Z M12 13.2a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z',
  admin: 'M4 4.5h7v7H4Z M13 4.5h7v4h-7Z M13 10.5h7v9h-7Z M4 13.5h7v6H4Z',
};

type Props = { id: WorkProduct['id']; size?: number };

const ProductIcon: React.FC<Props> = ({ id, size = 22 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d={paths[id]} />
  </svg>
);

export default ProductIcon;
