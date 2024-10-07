import "./homepage.css";

const HomePage = () => {
  const frontEndSkills = [
    "HTML",
    "CSS, SASS, SCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Redux",
  ];

  const backEndSkills = ["MySQL", "MongoDB", "Express", "Node.js", "Redis"];

  const otherSkills = [
    "Version control systems, such as Git",
    "Experience with CI/CD pipelines",
  ];

  return (
    <div className="home-content">
      <div className="section">
        <h2>hello,</h2>
        <p>
          My name is <span className="name">Kevin Fries</span>, and I like
          making websites!
        </p>
      </div>
      <div className="section">
        <h2>my skills,</h2>
        <div className="skillsTable">
          <div className="skills">
            <h2>Front End</h2>
            <ul>
              {frontEndSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills">
            <h2>Back End</h2>
            <ul>
              {backEndSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="skills">
          <h2>Other Skills</h2>
          <ul>
            {otherSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="section">
        <h2>about me,</h2>
        <p>
          I am a web developer based in the Raleigh, NC area. Web development
          and backend services have been a hobby of mine for my whole life.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
