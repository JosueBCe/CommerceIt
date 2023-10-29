import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs = () => {
  // It displays the options of the links if the user is authenticated 
  const { isAuthenticated } = useAuth0();
  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/profile" label="Profile" />
      {isAuthenticated && (
        <>
          <NavBarTab path="/protected" label="Cart" />
          <NavBarTab path="/admin" label="Admin" />
        </>
      )}
    </div>
  );
};
