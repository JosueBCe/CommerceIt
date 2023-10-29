import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarTab = ({ path, label }) => {
  // Single navigation tab component with jsx logic 
  return (
    <NavLink
      to={path}
      end
      className={({ isActive }) =>
        "nav-bar__tab " + (isActive ? "nav-bar__tab--active" : "")
      }
    >
      {label}
    </NavLink>
  );
};
