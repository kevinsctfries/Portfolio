import styles from "./ContactSection.module.scss";

const ContactSection = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>
      <span className={styles.email}>kevinsctfries@gmail.com</span>
      <div className={styles.links}>
        <a
          className={styles.button}
          href="https://www.linkedin.com/in/kevin-fries-097377302"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
        <a
          className={styles.button}
          href="https://github.com/kevinsctfries/"
          target="_blank"
          rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
