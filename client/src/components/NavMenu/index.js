import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/users">users</NavLink>
        <NavLink to="/groups">groups</NavLink>
        <NavLink to="/tasks">tasks</NavLink>
      </ul>
    </nav>
  );
};

export default NavMenu;
