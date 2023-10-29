import React from "react";

export const FooterBanner = () => {
  // Banner image with CTA button 
  return (
    <div className="hero-banner footer-banner__image">
      <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://developer.auth0.com/resources/code-samples/spa/react/basic-authentication"
        className="button button--secondary"
      >
       Contact Us!
      </a>
      <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://developer.auth0.com/resources/code-samples/spa/react/basic-authentication"
        className="button button--secondary"
        style={{ backgroundColor: "#00AACF" }}
      >
       Shop Now!  
      </a>
    </div>
  );
};
