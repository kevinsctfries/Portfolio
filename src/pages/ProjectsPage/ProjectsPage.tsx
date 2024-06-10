import "./projectspage.css";
import typeTwo from "../../assets/type2.png";
import typeTwoLogo from "../../assets/type2Logo.png";

const ProjectsPage = () => {
  return (
    <div className="projects">
      <span>what I'm working on,</span>
      <img src={typeTwoLogo} alt="" className="projectLogo" />
      <p>
        Currently, I'm working on an isometric MMO written in TypeScript and
        using PixiJS.
      </p>
      <img src={typeTwo} alt="" className="projectImage" />
      <p>
        Type2 is, at the moment, the project title for the game and is likely to
        change.
      </p>
    </div>
  );
};

export default ProjectsPage;
