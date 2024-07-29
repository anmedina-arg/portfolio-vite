import "./nav.css";
import { useScrollSpy } from "../../hooks/scrollSpy";
import { ItemsNavProps, itemsNav } from "./NavItems";
import Anchor from "../anchor/Anchor";
import { ReactElement } from "react";

type NavProps = {
  items: ItemsNavProps[]
}

function Nav({ items }: NavProps): ReactElement {
  const activeSection = useScrollSpy(items);

  console.log(activeSection)

  const hideNavBar = activeSection === 'home' ? 'hideNavBar' : ''

  return (
    <nav className={hideNavBar}>
      {
        itemsNav.map((item: ItemsNavProps) => (
          < Anchor
            href={item.path}
            key={item.title}
            title={item.title}
            icon={item.icon}
            className={activeSection === item.path.substring(1) ? 'active' : ''}
          />
        ))
      }
    </nav>
  );
}

export default Nav;