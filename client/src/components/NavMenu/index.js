import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home Page</NavLink></li>
        <li><NavLink to="/users">users</NavLink></li>
        <li><NavLink to="/groups">groups</NavLink></li>
        <li><NavLink to="/tasks">tasks</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavMenu;
