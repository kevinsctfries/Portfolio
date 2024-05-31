import "./navbar.css";
import { NavLink } from "react-router-dom";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { IconButton } from "@mui/material";
import "../darkmode/darkmode";
import { useState } from "react";

const NavBar = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <header>
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/projects">projects</NavLink>
      <NavLink to="/contact">contact</NavLink>
      <IconButton
        disableRipple={true}
        size={"small"}
        id="darkmodeBtn"
        onClick={() => setClicked((prev) => !prev)}
      >
        {clicked ? <LightModeOutlinedIcon /> : <NightlightOutlinedIcon />}
      </IconButton>
    </header>
  );
};

export default NavBar;
