import "./projectspage.css";
import typeTwo from "../../assets/type2.png";
import ohNotation from "../../assets/ohnotation.png";

const ProjectsPage = () => {
  return (
    <div className="project-content">
      <h2>what I've worked on,</h2>

      <div className="project-item">
        <h2>Untitled Game</h2>
        <div className="text-and-image">
          <p>
            An isometric game engine developed in TypeScript and PixiJS,
            featuring multiplayer/online functionality!
          </p>
          <img src={typeTwo} alt="" className="projectImage" />
        </div>
      </div>

      <div className="project-item">
        <h2>Oh, Notation</h2>
        <div className="text-and-image">
          <p>
            Welcome to the Oh, Notation! This website is designed to provide an
            interactive and educational experience to help you understand and
            master Big O Notation, a critical concept in computer science for
            analyzing the efficiency of algorithms.
          </p>
          <img src={ohNotation} alt="" className="projectImage" />
        </div>
        <div className="project-links">
          <a href="https://github.com/kevinsctfries/ohnotation">GitHub</a>
          <a href="https://ohnotation.vercel.app/">Visit Site</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
