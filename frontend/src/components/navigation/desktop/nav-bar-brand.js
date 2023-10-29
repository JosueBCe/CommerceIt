import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png"

export const NavBarBrand = () => {
  // Commerce it logo
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src={logo}          alt="Auth0 shield logo"
          width="122"
          height="36"
        />
      </NavLink>
    </div>
  );
};
