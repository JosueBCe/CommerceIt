import React from "react";
import { NavLink } from "react-router-dom";

export const GridImageBanner = () => {
  // Custom image displaying call to action button 
  return (
    <div className="grid-image-banner">

      <h1 className="auth0-feature__headline">Home and outdoor</h1>
      <NavLink
      to={"products"}
        className="button button--secondary"
        style={{marginTop: 120}}
      >
       Look product
      </NavLink>
    </div>
  ); 
};
