import React from "react";

export const PageFooterHyperlink = ({ children, path }) => {
  // Custom Link behavior 
  return (
    <a
      className="page-footer__hyperlink"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
