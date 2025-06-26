import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <h1>
        Hello, my name is <span>Kevin Fries</span>, and I like making websites!
      </h1>
      <h2>You can check out my work and projects below.</h2>
    </div>
  );
};

export default HeroSection;
