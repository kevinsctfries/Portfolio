import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./features/Home/Home";
import ProjectsPage from "./features/Projects/Projects";
import ContactPage from "./features/Contact/Contact";
import SkillsPage from "./features/Skills/Skills";
import Background from "./components/background/Background";
import Blog from "./pages/BlogPage/Blog";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isBlog = location.pathname === "/blog";

  return (
    <div className="app">
      <Background />
      <NavBar />

      {isBlog ? (
        <Blog />
      ) : (
        <>
          <section id="home">
            <HomePage />
          </section>
          <section id="skills">
            <SkillsPage />
          </section>
          <section id="projects">
            <ProjectsPage />
          </section>
          <section id="contact">
            <ContactPage />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
