import "./projectspage.css";
import typeTwo from "../../assets/type2.png";

const ProjectsPage = () => {
  return (
    <div className="project-content">
      <h2>what I've worked on,</h2>
      <div className="project-item">
        <p>
          An isometric game engine developed in TypeScript and PixiJS, featuring
          multiplayer/online functionality!
        </p>
        <img src={typeTwo} alt="" className="projectImage" />
      </div>

      <div className="project-item">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quod
          in obcaecati et cumque! Illum autem eum natus, corrupti nisi
          laudantium doloribus necessitatibus sit, asperiores assumenda quia.
          Minima, quidem cumque.
        </p>
        <img src={typeTwo} alt="" className="projectImage" />
      </div>

      <div className="project-item">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          non sed, reiciendis quasi recusandae aliquam voluptate. Quia
          reiciendis consequuntur, ad laborum itaque, odit quae rem facilis
          mollitia praesentium, rerum accusamus.
        </p>
        <img src={typeTwo} alt="" className="projectImage" />
      </div>
    </div>
  );
};

export default ProjectsPage;
