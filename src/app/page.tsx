import ContactSection from "./components/sections/contact/ContactSection";
import HeroSection from "./components/sections/hero/HeroSection";
import ProjectSection from "./components/sections/projects/ProjectSection";
import SkillSection from "./components/sections/skills/SkillSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
}
