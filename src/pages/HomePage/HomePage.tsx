import "./homepage.css";

const HomePage = () => {
  return (
    <div>
      <section className="section">
        <span>hello,</span>
        <p>
          My name is <span className="name">Kevin Fries</span>. I'm a web
          developer, and making websites that are simple and clean is my passion
        </p>
      </section>
      <section className="section">
        <span>my skills,</span>
        <div className="skillsTable">
          <section className="skills">
            <span>Front End</span>
            <ul>
              <li>HTML</li>
              <li>CSS, SASS, SCSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Angular</li>
              <li>Redux</li>
            </ul>
          </section>
          <section className="skills">
            <span>Back End</span>
            <ul>
              <li>SQL</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Node.js</li>
            </ul>
          </section>
        </div>
        <section className="skills">
          <span>Other Skills</span>
          <ul>
            <li>Version control systems, such as Git</li>
            <li>Experience with CI/CD pipelines</li>
          </ul>
        </section>
      </section>
      <section className="section">
        <span>about me,</span>
        <p>
          Like many other web developers, I discovered my passion for it on
          sites like Neopets and MySpace.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
