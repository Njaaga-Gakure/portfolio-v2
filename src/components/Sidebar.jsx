import { links } from "../utils";
import { useAppContext } from "../context/AppProvider";
import DarkModeToggler from "./DarkModeToggler";
const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useAppContext();
  return (
    <aside className={isSidebarOpen ? "sidebar sidebar--open" : "sidebar"}>
      <div className="logo">
        <h3 className="logo__text">Gakure</h3>
      </div>
      <ul className="sidebar__links">
        {links.map(({ id, link }) => {
          return (
            <li onClick={toggleSidebar} key={id} className="sidebar__link">
              <a href={`#${link}`}>{link}</a>
              <div className="link__underline"></div>
            </li>
          );
        })}
      </ul>
      <DarkModeToggler />
    </aside>
  );
};

export default Sidebar;
