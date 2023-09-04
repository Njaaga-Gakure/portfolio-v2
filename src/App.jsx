import { Hero, Navbar, Skills, Portfolio, Footer, Contact } from "./components";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
