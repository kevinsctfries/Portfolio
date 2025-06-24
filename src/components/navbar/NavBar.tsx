import { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

      if (width >= max) {
        nav.classList.add("at-100");
      } else {
        nav.classList.remove("at-100");
      }
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
      setIsOpen(false);
    }
  };

  // prevents the user from scrolling while nav menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav ref={navRef}>
      <div className="nav-links">
        <button className="button" onClick={() => scrollToSection("home")}>
          Home
        </button>
        <button className="button" onClick={() => scrollToSection("skills")}>
          My Skills
        </button>
        <button className="button" onClick={() => scrollToSection("projects")}>
          Projects
        </button>
        <button className="button" onClick={() => scrollToSection("contact")}>
          Contact
        </button>
        <Link className="button" href="/blog" onClick={() => setIsOpen(false)}>
          Blog
        </Link>
      </div>

      {/* nav menu for smaller devices */}
      <button
        className="burger"
        aria-label="Open Menu"
        onClick={() => setIsOpen(open => !open)}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="open-icon">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      <div className={`dropdown-nav ${isOpen ? "open" : ""}`}>
        <div className={`dropdown-nav ${isOpen ? "open" : ""}`}>
          <button className="button" onClick={() => scrollToSection("home")}>
            Home
          </button>
          <button className="button" onClick={() => scrollToSection("skills")}>
            My Skills
          </button>
          <button
            className="button"
            onClick={() => scrollToSection("projects")}>
            Projects
          </button>
          <button className="button" onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </div>
      </div>

      <span className="you-made-it">You made it to the end! :)</span>
    </nav>
  );
};

export default NavBar;
