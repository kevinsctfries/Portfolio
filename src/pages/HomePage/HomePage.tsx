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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          inventore iste libero atque ducimus laboriosam. Vel reiciendis, totam
          nemo nesciunt, harum ut ipsa deserunt veniam est nobis eius quidem
          voluptas.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
          voluptate, fugiat sapiente aperiam quod fugit atque odio aliquam nisi
          autem illo similique repellendus corrupti! Harum nostrum enim libero a
          aliquid.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est minus
          perspiciatis illo odio, cupiditate reiciendis officia at fugit
          voluptates amet eveniet sint eum dolore facilis, aliquam inventore
          rem. Suscipit, velit.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
