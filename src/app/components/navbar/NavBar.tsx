import Link from "next/link";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <div>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <Link href="/blog">Blog</Link>
      </nav>
    </div>
  );
};

export default NavBar;
