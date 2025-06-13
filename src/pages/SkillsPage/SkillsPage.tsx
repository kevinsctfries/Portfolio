import "./skillspage.scss";

type Skill = {
  name: string;
};

const SkillsPage = () => {
  const frontEndSkills: Skill[] = [
    { name: "HTML" },
    { name: "CSS, SCSS, Tailwind" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Angular" },
    { name: "Redux" },
  ];

  const backEndSkills: Skill[] = [
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "Express" },
    { name: "Node.js" },
    { name: "Redis" },
    { name: "Python" },
  ];

  const otherSkills: Skill[] = [
    { name: "Git" },
    { name: "CI/CD Pipelines" },
    { name: "Jira" },
    { name: "TensorFlow" },
    { name: "Pytorch" },
    { name: "Docker" },
  ];

  const renderSkillCards = (skills: Skill[]) =>
    skills.map((skill, index) => (
      <div className="skill-card" key={index}>
        <img src="/public/logo.jpeg" alt={skill.name} />
        <span>{skill.name}</span>
      </div>
    ));

  return (
    <div className="skills-page section">
      <div className="skills-category">
        <h3>Frontend Skills</h3>
        <div className="skills-grid">{renderSkillCards(frontEndSkills)}</div>
      </div>

      <div className="skills-category">
        <h3>Backend Skills</h3>
        <div className="skills-grid">{renderSkillCards(backEndSkills)}</div>
      </div>

      <div className="skills-category">
        <h3>Other Skills</h3>
        <div className="skills-grid">{renderSkillCards(otherSkills)}</div>
      </div>
    </div>
  );
};

export default SkillsPage;
