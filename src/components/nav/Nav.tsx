import "./nav.css";
import { useScrollSpy } from "../../hooks/scrollSpy";
import { ItemsNavProps, itemsNav } from "./NavItems";
import Anchor from "../anchor/Anchor";

type NavProps = {
  items: ItemsNavProps[]
}

function Nav({ items }: NavProps) {
  const activeSection = useScrollSpy(items);

  return (
    <nav>
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