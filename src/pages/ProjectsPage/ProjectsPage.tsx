import "./projectspage.css";
import typeTwo from "../../assets/type2.png";

const ProjectsPage = () => {
  return (
    <div className="projects">
      <span>what I'm working on,</span>
      <p>
        Currently, I'm working on an isometric multiplayer written in TypeScript
        and using PixiJS!
      </p>
      <img src={typeTwo} alt="" className="projectImage" />
      <p>
        At the moment it's pretty basic, but I'm enjoying exploring the
        possibilities of what can be done within the browser. Enemies have basic
        pathing and can follow the player, and multiplayer is also functional.
      </p>
    </div>
  );
};

export default ProjectsPage;
