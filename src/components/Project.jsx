import { AiFillGithub } from "react-icons/ai";
import { MdRocketLaunch } from "react-icons/md";
import { useAppContext } from "../context/AppProvider";
const Project = ({ image, title, url }) => {
  const { isDarkMode } = useAppContext();
  return (
    <article className={isDarkMode ? "project project--dark" : "project"}>
      <img src={image} alt={title} className="project__img" />
      <div className="project__body">
        <h5
          className={
            isDarkMode
              ? "project__title project__title--dark"
              : "project__title"
          }
        >
          {title}
        </h5>
        <hr />
        <div className="project__links">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={
              isDarkMode ? "project__link project__link--dark" : "project__link"
            }
          >
            <MdRocketLaunch />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className={
              isDarkMode ? "project__link project__link--dark" : "project__link"
            }
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
