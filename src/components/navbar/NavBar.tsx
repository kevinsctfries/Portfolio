import { IconButton } from "@mui/material";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useState, useEffect } from "react";
import { NavLink as NavLinkType } from "react-router-dom";
import "./navbar.css";

const NavLink = NavLinkType as React.ComponentType<{
  to: string;
  children: React.ReactNode;
  className?: string;
}>;

const NavBar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("darkMode") === "enabled";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
      document.body.classList.remove("lightmode");
    } else {
      document.body.classList.add("lightmode");
      document.body.classList.remove("darkmode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode ? "enabled" : "disabled");
  };

  return (
    <header>
      <div className="nav-links">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
      <IconButton
        disableRipple={true}
        size="small"
        id="darkmodeBtn"
        onClick={toggleDarkMode}
        className={darkMode ? "darkBtn" : "lightBtn"}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
        {darkMode ? <NightlightOutlinedIcon /> : <LightModeOutlinedIcon />}
      </IconButton>
    </header>
  );
};

export default NavBar;
