import React from "react";

export const PageLoader = () => {
  // Loader when the page is loading 
  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

  return (
    <div className="loader">
      <img src={loadingImg} alt="Loading..." />
    </div>
  );
};
