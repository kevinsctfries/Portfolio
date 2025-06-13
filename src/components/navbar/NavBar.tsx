import { useEffect, useRef } from "react";
import "./navbar.scss";

const NavBar = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const { scrollHeight } = document.documentElement;
      const scrollPercentage = scrollY / (scrollHeight - innerHeight);
      const width = Math.min(100, 25 + scrollPercentage * 75);

      navRef.current?.style.setProperty("--nav-bg-width", `${width}%`);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const navHeight = navRef.current?.offsetHeight || 0;
      const y =
        section.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav ref={navRef}>
      <div className="initials">
        <span>KF</span>
      </div>
      <div className="nav-links">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("skills")}>My Skills</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
    </nav>
  );
};

export default NavBar;
