import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="center-container hero--center">
        <h2 className="hero__tagline">
          Hi, I'm
          <span> Brian Gakure</span>
        </h2>
        <p className="hero__text">
          A passionate self-taught JavaScript developer adept at front-end using
          Reactjs. Eager to contribute to impactful projects and enhance
          professional skills. Open to opportunities from potential employers.
          Let's connect!
        </p>
        <div className="hero__links">
          <a href="#" className="hero__link">
            <AiFillGithub />
          </a>
          <a href="#" className="hero__link">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hero__link">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
