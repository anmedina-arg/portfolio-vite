import './nav.css';
import { ReactElement } from 'react';
import { useScrollSpy } from '../../hooks/scrollSpy';
import { ItemsNavProps, itemsNav } from '../../mockData/navItems.tsx';
import Anchor from '../anchor/Anchor';

type NavProps = {
  items: ItemsNavProps[];
};

function Nav({ items }: NavProps): ReactElement {
  const activeSection = useScrollSpy(items);

  const hideNavBar = activeSection === 'home' ? 'hideNavBar' : '';

  return (
    <nav className={hideNavBar}>
      {itemsNav.map((item: ItemsNavProps) => (
        <Anchor
          href={item.path}
          key={item.title}
          title={item.title}
          icon={item.icon}
          className={activeSection === item.path.substring(1) ? 'active' : ''}
        />
      ))}
    </nav>
  );
}

export default Nav;
