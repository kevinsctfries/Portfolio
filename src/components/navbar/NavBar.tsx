import "./navbar.css";
import { NavLink } from "react-router-dom";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const mode = localStorage.getItem("darkMode");
    return mode === "enabled";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
      localStorage.setItem("darkMode", "enabled");
      console.log("enabled");
    } else {
      document.body.classList.remove("darkmode");
      localStorage.setItem("darkMode", "disabled");
      console.log("disabled");
    }
  }, [darkMode]);

  return (
    <header>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/projects">PROJECTS</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
      <IconButton
        disableRipple={true}
        size={"small"}
        id="darkmodeBtn"
        onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? <LightModeOutlinedIcon /> : <NightlightOutlinedIcon />}
      </IconButton>
    </header>
  );
};

export default NavBar;
