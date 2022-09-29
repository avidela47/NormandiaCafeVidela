import { origenDropdown } from "./NavItem"
import './Dropdown.scss'

export function Dropdown({ handler, dropdown }) {
  return (
    <>
      <ul className={dropdown ? "origen-submenu" : "origen-submenu clicked"}>
        {origenDropdown.map((item) => {
          return (

            <li key={item.id} onClick={() => handler(item)}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

