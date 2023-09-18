import { useAppContext } from "../context/AppProvider";
import { MdDarkMode } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";

const DarkModeToggler = () => {
  const { isDarkMode, handleLight, handleDark, toggleSidebar } =
    useAppContext();
  return (
    <div className="toggle-dark-container">
      <div className="toggle-dark">
        <button
          onClick={() => {
            handleLight();
            toggleSidebar();
          }}
          className={
            !isDarkMode
              ? "toggle-dark__btn toggle-dark--active"
              : "toggle-dark__btn"
          }
        >
          <BsLightbulb />
        </button>
        <button
          onClick={() => {
            handleDark();
            toggleSidebar();
          }}
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
  );
};

export default DarkModeToggler;
