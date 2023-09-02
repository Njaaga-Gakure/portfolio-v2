import Skill from "./Skill";
import {
  skillsUsingData as usingSkills,
  skillsLearningData as learningSkills,
} from "../utils";

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="center-container skills--center">
        <div className="skills">
          <span className="skills__title">skills using :</span>
          <div className="skills__list">
            {usingSkills.map((skill) => {
              return <Skill key={skill.id} {...skill} />;
            })}
          </div>
        </div>
        <div className="skills">
          <span className="skills__title">skills learning :</span>
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
