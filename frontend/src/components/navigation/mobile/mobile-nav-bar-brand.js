import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";


export const MobileNavBarBrand = ({ handleClick }) => {
  // Logo component that displays the commerce it logo and name 
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <img
          className="mobile-nav-bar__logo"
          src={logo}
          alt="Commerce It logo"
          width="30"
          height="100"
        />
      </NavLink>
      <NavLink to="/">
    <p className="mobile-logo-text">Commerce It</p>
    </NavLink>
    </div>
  );
};
