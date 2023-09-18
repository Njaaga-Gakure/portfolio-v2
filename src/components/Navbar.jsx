import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useAppContext } from "../context/AppProvider";
import { links } from "../utils";
import DarkModeToggler from "./DarkModeToggler";

const Navbar = () => {
  const { scroll, toggleSidebar, isSidebarOpen } = useAppContext();
  return (
    <nav className={scroll > 0 ? "nav nav--sticky" : "nav"}>
      <div className="nav--center center-container">
        <div className="logo">
          <h3 className="logo__text">Gakure</h3>
        </div>
        <ul className="nav__links">
          {links.map(({ id, link }) => {
            return (
              <li key={id} className="nav__link">
                <a href={`#${link}`}>{link}</a>
              </li>
            );
          })}
        </ul>
        <button onClick={toggleSidebar} className="btn--toggle">
          {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <DarkModeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
