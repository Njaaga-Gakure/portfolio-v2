import {
  Hero,
  Navbar,
  Skills,
  Portfolio,
  Footer,
  Contact,
  Sidebar,
} from "./components";

const App = () => {
  return (
    <div>
      <Sidebar />
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
