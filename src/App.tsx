import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
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
