import NavBar from "./components/navbar/NavBar";
import ContactSection from "./components/sections/contact/ContactSection";
import HeroSection from "./components/sections/hero/HeroSection";
import ProjectSection from "./components/sections/projects/ProjectSection";
import SkillSection from "./components/sections/skills/SkillSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <section id="home">
          <HeroSection />
        </section>
        <NavBar />
        <section id="skills">
          <SkillSection />
        </section>
        <section id="projects">
          <ProjectSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
