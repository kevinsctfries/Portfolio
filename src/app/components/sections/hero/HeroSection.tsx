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

  return (
    <div className={styles.hero}>
      <h1>
        <span>&lt;</span>
        <span className={styles.tag}>h1</span>
        <span>&gt;</span>
        {headerDisplayed}
        <span>&lt;/</span>
        <span className={styles.tag}>h1</span>
        <span>&gt;</span>
      </h1>
    </div>
  );
};

export default HeroSection;
