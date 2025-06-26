"use client";

import Link from "next/link";
import styles from "./NavBar.module.scss";
import { useEffect, useState } from "react";

const sections = ["home", "skills", "projects", "contact"];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = 80;
      const currentSection = [...sections].reverse().find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        return el.getBoundingClientRect().top <= scrollOffset;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className={styles.navbar}>
      <nav>
        <div className={styles.links}>
          {sections.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? styles.active : ""}>
              {id.charAt(0).toUpperCase() + id.slice(1) + ".tsx"}
            </a>
          ))}
        </div>
        <div className={styles.spacer} />
        <Link className={styles.blog} href="/blog">
          Blog
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
