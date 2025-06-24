"use client";

import "../styles/app.scss";
import "../styles/globals.scss";
import NavBar from "../components/navbar/NavBar";
import HomePage from "./Home/Home";
import ProjectsPage from "./Projects/Projects";
import ContactPage from "./Contact/Contact";
import SkillsPage from "./Skills/Skills";
import Background from "../components/background/Background";

const Home = () => {
  return (
    <div className="app">
      <Background />
      <NavBar />
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
    </div>
  );
};

export default Home;
