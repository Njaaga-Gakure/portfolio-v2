import { AiFillGithub } from "react-icons/ai";
import { MdRocketLaunch } from "react-icons/md";
const Project = ({ image, title, url }) => {
  return (
    <article className="project">
      <img src={image} alt={title} className="project__img" />
      <div className="project__body">
        <h5 className="project__title">{title}</h5>
        <hr />
        <div className="project__links">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="project__link"
          >
            <MdRocketLaunch />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="project__link"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
