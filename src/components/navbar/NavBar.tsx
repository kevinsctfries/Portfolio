import { IconButton } from "@mui/material";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Get the current dark mode preference from localStorage
    const mode = localStorage.getItem("darkMode");
    return mode === "enabled"; // Check if dark mode is enabled
  });

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Store the new preference in localStorage
    localStorage.setItem("darkMode", newDarkMode ? "enabled" : "disabled");

    // Get the root element for CSS variable updates
    const root = document.documentElement;

    if (newDarkMode) {
      // Apply dark mode theme dynamically
      root.style.setProperty("--primary-page-bg", "#191919");
      root.style.setProperty("--alt-page-bg", "rgba(25, 25, 25, 0.5)");
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--border-color", "#fffef8");
    } else {
      // Apply light mode theme dynamically
      root.style.setProperty("--primary-page-bg", "#fffef8");
      root.style.setProperty("--alt-page-bg", "#fffef8");
      root.style.setProperty("--text-color", "black");
      root.style.setProperty("--border-color", "black");
    }
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
        size={"small"}
        id="darkmodeBtn"
        onClick={toggleDarkMode}>
        {darkMode ? <LightModeOutlinedIcon /> : <NightlightOutlinedIcon />}
      </IconButton>
    </header>
  );
};

export default NavBar;
