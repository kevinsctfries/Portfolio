import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./features/Home/Home";
import ProjectsPage from "./features/Projects/Projects";
import ContactPage from "./features/Contact/Contact";
import SkillsPage from "./features/Skills/Skills";
import Background from "./components/background/Background";

function App() {
  return (
    <div className="app">
      <Background />
      <NavBar />
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
    </div>
  );
}

export default App;
