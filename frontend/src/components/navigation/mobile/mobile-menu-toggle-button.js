import React from "react";

export const MobileMenuToggleButton = ({ icon, handleClick }) => {
  // Toggle button JSX
  return (
    <span
      className="mobile-nav-bar__toggle material-icons"
      id="mobile-menu-toggle-button"
      onClick={handleClick}
    >
      {icon}
    </span>
  );
};
