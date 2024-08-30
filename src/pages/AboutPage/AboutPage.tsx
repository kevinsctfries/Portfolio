import "./aboutpage.css";

const AboutPage = () => {
  return (
    <div className="about">
      <section className="aboutSection">
        <span>about me</span>
        <p>
          My name is <span className="name">Kevin Fries</span>, and I'm a web
          developer.
        </p>
      </section>
      <section className="skillSection">
        <span>my skills</span>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Node</li>
          <li>Popular frameworks, such as React, Angular, and Vue</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
