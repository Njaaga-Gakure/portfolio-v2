import { AiOutlineMenu } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";

const Navbar = ({ scroll, handleDark, handleLight, isDarkMode }) => {
  return (
    <nav className={scroll > 0 ? "nav nav--sticky" : "nav"}>
      <div className="nav--center center-container">
        <div className="logo">
          <h3 className="logo__text">Gakure</h3>
        </div>
        <ul className="nav__links">
          <li className="nav__link">
            <a href="#home">home</a>
          </li>
          <li className="nav__link">
            <a href="#skills">skills</a>
          </li>
          <li className="nav__link">
            <a href="#portfolio">portfolio</a>
          </li>
          <li className="nav__link">
            <a href="#contact">contact</a>
          </li>
        </ul>
        <button className="btn--toggle">
          <AiOutlineMenu />
        </button>
        <div className="toggle-dark">
          <button
            onClick={handleLight}
            className={
              !isDarkMode
                ? "toggle-dark__btn toggle-dark--active"
                : "toggle-dark__btn"
            }
          >
            <BsLightbulb />
          </button>
          <button
            onClick={handleDark}
            className={
              isDarkMode
                ? "toggle-dark__btn toggle-dark--active"
                : "toggle-dark__btn"
            }
          >
            <MdDarkMode />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
