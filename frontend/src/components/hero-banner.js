import React from "react";

export const HeroBanner = () => {
  // Hero image with the banner and link to buy new products 
  return (
    <div className="hero-banner hero-banner--main-image">
      <div>
        <h1 className="hero-banner__headline">Latest trending!</h1>
        <h2 className="hero-banner__description">
          <strong>Electronic items</strong>.
        </h2>
      </div>
      <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://developer.auth0.com/resources/code-samples/spa/react/basic-authentication"
        className="button button--secondary"
      >
        Buy Now!
      </a>
    </div>
  );
};
