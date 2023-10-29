import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { MobileNavBarTab } from "./mobile-nav-bar-tab";
import len_icon from "../../../assets/images/lan_icon.png";

export const MobileNavBarTabs = ({ handleClick }) => {
  // Mobile nav bar logic to direct the users to the different tabs 
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/profile"
        label="Profile"
        handleClick={handleClick}
      />
      {isAuthenticated && (
        <>
          <MobileNavBarTab
            path="/protected"
            label="Cart"
            handleClick={handleClick}
          />
          <MobileNavBarTab
            path="/admin"
            label="Admin"
            handleClick={handleClick}
          />
        </>
      )}
     {isAuthenticated && ( 
     <div className="mobile-nav-bar__brand" style={{ marginTop: 10}}>
        <img src={len_icon} alt="Language Icon"/>
        
          <>
          <p className="mobile-logo-text">{user.locale === "en"? "English/USA": "Spanish/Global"}</p>
          </>
        
      </div>)}
    </div>
  );
};
