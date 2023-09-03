import Project from "./Project";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Title from "./Title";

const Portfolio = ({
  projects,
  data,
  handlePageChange,
  page,
  handlePrev,
  handleNext,
}) => {
  return (
    <section className="portfolio" id="portfolio">
      <div>
        <Title name="portfolio" />
        <div className="center-container portfolio--center">
          {projects.map((project) => {
            return <Project key={project.id} {...project} />;
          })}
        </div>
        <div className="btn-container">
          <div className="center-container">
            <button onClick={handlePrev} className="prev-btn">
              <BsChevronLeft />
            </button>
            {data.map((_, index) => {
              return (
                <button
                  onClick={() => handlePageChange(index)}
                  key={index}
                  className={
                    page === index ? "page-btn page-btn--active" : "page-btn"
                  }
                >
                  {index + 1}
                </button>
              );
            })}
            <button onClick={handleNext} className="next-btn">
              <BsChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
