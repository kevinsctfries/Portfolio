import "./projectspage.css";
import typeTwo from "../../assets/type2.png";
import typeTwoLogo from "../../assets/type2Logo.png";

const ProjectsPage = () => {
  return (
    <div className="projects">
      <span>what I'm working on,</span>
      <img src={typeTwoLogo} alt="" className="projectLogo" />
      <p>
        Currently, I'm working on an isometric multiplayer written in TypeScript
        and using PixiJS.
      </p>
      <img src={typeTwo} alt="" className="projectImage" />
    </div>
  );
};

export default ProjectsPage;
