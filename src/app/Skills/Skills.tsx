import "./skills.scss";
import {
  languageSkills,
  frontEndSkills,
  backEndSkills,
  otherSkills,
} from "./skillsList";

type Skill = {
  name: string;
  img: string;
};

const SkillsPage = () => {
  const renderSkillCards = (skills: Skill[]) =>
    skills.map((skill, index) => (
      <div className="skill-card" key={index}>
        <img src={skill.img} alt={skill.name} />
        <span>{skill.name}</span>
      </div>
    ));

  return (
    <div className="skills-page section">
      <div className="skills-category">
        <h3 className="highlight-blue">Languages</h3>
        <div className="skills-grid">{renderSkillCards(languageSkills)}</div>
      </div>
      <div className="skills-category">
        <h3 className="highlight-blue">Front-end Skills</h3>
        <div className="skills-grid">{renderSkillCards(frontEndSkills)}</div>
      </div>
      <div className="skills-category">
        <h3 className="highlight-blue">Back-end Skills</h3>
        <div className="skills-grid">{renderSkillCards(backEndSkills)}</div>
      </div>
      <div className="skills-category">
        <h3 className="highlight-blue">Other Skills</h3>
        <div className="skills-grid">{renderSkillCards(otherSkills)}</div>
      </div>
    </div>
  );
};

export default SkillsPage;
