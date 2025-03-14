import "./projectspage.css";
import typeTwo from "../../assets/type2.png";
import ohNotation from "../../assets/ohnotation.png";
import uNetOne from "../../assets/unet1.png";
import uNetTwo from "../../assets/unet2.png";

const ProjectsPage = () => {
  return (
    <>
      <div className="projects-container">
        <h1>what I've worked on</h1>

        <div className="project-item">
          <h2>Untitled Game</h2>
          <div className="project-content">
            <p>
              An isometric game engine developed in TypeScript and PixiJS,
              featuring multiplayer/online functionality!
            </p>
            <img
              src={typeTwo}
              alt="Untitled Game Screenshot"
              className="project-image"
            />
          </div>
        </div>

        <div className="project-item">
          <h2>Oh, Notation</h2>
          <div className="project-content">
            <p>
              Welcome to Oh, Notation! This website provides an interactive and
              educational experience to help you understand and master Big O
              Notation, a critical concept in computer science for analyzing the
              efficiency of algorithms.
            </p>
            <img
              src={ohNotation}
              alt="Oh, Notation Screenshot"
              className="project-image"
            />
          </div>
          <div className="project-links">
            <a
              href="https://github.com/kevinsctfries/ohnotation"
              className="project-link button-effect"
              aria-label="View source code">
              GitHub
            </a>
            <a
              href="https://ohnotation.vercel.app/"
              className="project-link button-effect"
              aria-label="Visit site">
              Visit Site
            </a>
          </div>
        </div>

        <div className="project-item">
          <h2>UNet</h2>
          <div className="project-content">
            <p>
              Welcome to UNet! UNet is a clone of Reddit made from scratch using
              TypeScript and Tailwind for the Front End, and Express.js and
              MySQL for the Back End.
            </p>
            <img
              src={uNetOne}
              alt="Oh, Notation Screenshot"
              className="project-image"
            />
          </div>
          <p>
            With JWT authentication and Google OAuth integration, users can
            easily create accounts and log in.
          </p>
          <div className="project-content">
            <p>
              With the ability to create make "Unions," users are able to create
              posts and upload images to their favorite Unions.
            </p>
            <img
              src={uNetTwo}
              alt="Oh, Notation Screenshot"
              className="project-image"
            />
          </div>
          <p>
            Cloudinary integration allows for image optimization and secure
            upload handling, and also allows support for profile pictures and
            cover images for both users and Unions.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/kevinsctfries/UNet"
              className="project-link button-effect"
              aria-label="View source code">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
