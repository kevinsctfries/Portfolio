"use client";

import { useEffect, useState } from "react";
import styles from "./HeroSection.module.scss";

const headerText = "Hello, my name is Kevin";

const HeroSection = () => {
  const [headerDisplayed, setHeaderDisplayed] = useState("");

  useEffect(() => {
    let headerIndex = 0;

    const typeHeader = () => {
      if (headerIndex <= headerText.length) {
        setHeaderDisplayed(headerText.slice(0, headerIndex));
        headerIndex++;
        setTimeout(typeHeader, 40);
      }
    };

    typeHeader();
  }, []);

  const scrollToSkills = () => {
    const target = document.getElementById("skills");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.hero}>
      <div className={styles.bracket}>
        <span>&lt;</span>
        <span className={styles.tag}>h1</span>
        <span>&gt;</span>
      </div>
      <h1>{headerDisplayed}</h1>
      <div className={styles.bracket}>
        <span>&lt;/</span>
        <span className={styles.tag}>h1</span>
        <span>&gt;</span>
      </div>
      <button
        type="button"
        aria-label="Scroll down"
        title="Scroll Down"
        className={styles.scrollButton}
        onClick={scrollToSkills}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.chevronIcon}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  );
};

export default HeroSection;
