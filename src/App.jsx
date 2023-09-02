import { useEffect, useState } from "react";
import { Hero, Navbar, Skills, Portfolio, Footer } from "./components";
import { paginate } from "./paginate";
import { projects as projectsData } from "./utils";
const App = () => {
  const data = paginate(projectsData);
  const [scroll, setScroll] = useState(0);
  const [page, setPage] = useState(0);
  const [projects, setProjects] = useState(data[0]);

  const handlePageChange = (index) => {
    setPage(index);
  };
  const handlePrev = () => {
    setPage((oldPage) => {
      return oldPage === 0 ? data.length - 1 : oldPage - 1;
    });
  };
  const handleNext = () => {
    setPage((oldPage) => {
      return oldPage === data.length - 1 ? 0 : oldPage + 1;
    });
  };
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    setProjects(data[page]);
  }, [page]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="app-container">
      <Navbar scroll={scroll} />
      <Hero />
      <Skills />
      <Portfolio
        projects={projects}
        data={data}
        handlePageChange={handlePageChange}
        page={page}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <Footer />
    </div>
  );
};

export default App;
