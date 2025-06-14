import { useEffect, useRef } from "react";
import "./navbar.scss";

const NavBar = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current;
      const navLinks = nav?.querySelector<HTMLElement>(".nav-links");

      if (!nav || !navLinks) return;

      const navWidth = nav.offsetWidth;
      const navLinksWidth = navLinks.offsetWidth;

      const { scrollY, innerHeight } = window;
      const { scrollHeight } = document.documentElement;

      const min = (navLinksWidth / navWidth) * 100;
      const max = ((navWidth - 4 * 16) / navWidth) * 100;
      const percent =
        min + (scrollY / (scrollHeight - innerHeight)) * (max - min);
      const width = Math.min(max, Math.max(min, percent));

      nav.style.setProperty("--nav-bg-width", `${width}%`);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
