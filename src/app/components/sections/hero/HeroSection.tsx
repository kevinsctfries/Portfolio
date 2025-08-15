"use client";

import Typewriter from "typewriter-effect";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const scrollToSkills = () => {
    const target = document.getElementById("skills");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.hero}>
      <div>
        <div className={styles.bracket}>
          <span>&lt;</span>
          <span className={styles.tag}>h1</span>
          <span>&gt;</span>
        </div>
        <h1 aria-hidden="true" className={styles.staticText}>
          Hi, my name is Kevin,
        </h1>
        <h1>
          <Typewriter
            options={{ loop: true, cursorClassName: "cursor" }}
            onInit={typewriter => {
              typewriter
                .changeDelay(20)
                .typeString("Hi, my name is Kevin,")
                .pauseFor(1000)
                .deleteAll(10)
                .typeString("Welcome to my Portfolio.")
                .pauseFor(1000)
                .deleteAll(10)
                .typeString("Check out my stuff below!")
                .pauseFor(1000)
                .deleteAll(10)
                .start();
            }}
          />
        </h1>
        <div className={styles.bracket}>
          <span>&lt;/</span>
          <span className={styles.tag}>h1</span>
          <span>&gt;</span>
        </div>
      </div>
      <div>
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
    </div>
  );
};

export default HeroSection;
