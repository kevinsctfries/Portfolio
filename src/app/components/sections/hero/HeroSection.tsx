"use client";

import { useEffect, useState } from "react";
import styles from "./HeroSection.module.scss";

const headerText = "Hello, my name is Kevin Fries";
const subText = "You can check out my work and projects below";

const HeroSection = () => {
  const [headerDisplayed, setHeaderDisplayed] = useState("");
  const [subDisplayed, setSubDisplayed] = useState("");
  const [isTypingHeader, setIsTypingHeader] = useState(true);

  useEffect(() => {
    let headerIndex = 0;
    const headerInterval = setInterval(() => {
      setHeaderDisplayed(headerText.slice(0, headerIndex));
      headerIndex++;
      if (headerIndex > headerText.length) {
        clearInterval(headerInterval);
        setIsTypingHeader(false);

        let subIndex = 0;
        const subInterval = setInterval(() => {
          setSubDisplayed(subText.slice(0, subIndex));
          subIndex++;
          if (subIndex > subText.length) clearInterval(subInterval);
        }, 30);
      }
    }, 30);

    return () => clearInterval(headerInterval);
  }, []);

  return (
    <div className={styles.hero}>
      <h1>
        <span className={styles.bracket}>&lt;</span>
        <span className={styles.tag}>h1</span>
        <span className={styles.bracket}>&gt;</span>
        {headerDisplayed}
        {isTypingHeader && <span className={styles.blinking} />}
        <span className={styles.bracket}>&lt;/</span>
        <span className={styles.tag}>h1</span>
        <span className={styles.bracket}>&gt;</span>
      </h1>

      <h2>
        <span className={styles.bracket}>&lt;</span>
        <span className={styles.tag}>h2</span>
        <span className={styles.bracket}>&gt;</span>
        {subDisplayed}
        {!isTypingHeader && <span className={styles.blinking} />}
        <span className={styles.bracket}>&lt;/</span>
        <span className={styles.tag}>h2</span>
        <span className={styles.bracket}>&gt;</span>
      </h2>
    </div>
  );
};

export default HeroSection;
