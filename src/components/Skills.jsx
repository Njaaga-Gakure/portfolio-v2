import Skill from "./Skill";
import {
  skillsUsingData as usingSkills,
  skillsLearningData as learningSkills,
} from "../utils";
import Title from "./Title";
import { useAppContext } from "../context/AppProvider";

const Skills = () => {
  const { isDarkMode } = useAppContext();
  return (
    <section
      id="skills"
      className={isDarkMode ? "skills-container bg--dark" : "skills-container"}
    >
      <Title name="skills" />
      <div className="center-container skills--center">
        <div className="skills">
          <span
            className={
              isDarkMode ? "skills__title--dark skills__title" : "skills__title"
            }
          >
            skills using :
          </span>
          <div className="skills__list">
            {usingSkills.map((skill) => {
              return <Skill key={skill.id} {...skill} />;
            })}
          </div>
        </div>
        <div className="skills">
          <span
            className={
              isDarkMode ? "skills__title--dark skills__title" : "skills__title"
            }
          >
            skills learning :
          </span>
          <div className="skills__list">
            {learningSkills.map((skill) => {
              return <Skill key={skill.id} {...skill} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
