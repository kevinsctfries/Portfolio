import "./navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/projects">projects</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </header>
  );
};

export default NavBar;
