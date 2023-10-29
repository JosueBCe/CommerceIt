import React from "react";
import { PageFooterHyperlink } from "./page-footer-hyperlink";
import logo from "../assets/images/logo.png"

export const PageFooter = () => {
  const resourceList = [
    {
      path: "https://auth0.com/why-auth0/",
      label: "Home",    
    },
    {
      path: "https://auth0.com/docs/get-started",
      label: "Cart",
    },
    {
      path: "https://auth0.com/blog/developers/",
      label: "Products",
    },
    {
      path: "https://auth0.com/contact-us",
      label: "Products",
    },
  ];

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          {/* <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>This sample application is brought to you by&nbsp;</span>
              <PageFooterHyperlink path="https://auth0.com/">
                Auth0
              </PageFooterHyperlink>
            </p>
           
          </div> */}
       {/*    <div className="page-footer-info__button">
            <a
              id="create-account-button"
              className="button button--secondary"
              href="https://auth0.com/signup"
              target="_blank"
              rel="noreferrer noopener"
            >
              Create Free Auth0 Account
            </a>
          </div> */}
          <div className="page-footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.path}
                className="page-footer-info__resource-list-item"
              >
                <PageFooterHyperlink path={resource.path}>
                  {resource.label}
                </PageFooterHyperlink>
              </div>
            ))}
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src={logo}
              alt="Auth0"
              width="20"
              height="22.22"
            />
            <PageFooterHyperlink path="https://auth0.com/">
              Commerce It Inc
            </PageFooterHyperlink>
          
          </div>
          <p className="item__description ">
              <PageFooterHyperlink path="https://auth0.com/docs/quickstarts/">
                <span>
                Best information about the company gies here but now lorem ipsum is
                </span>
              </PageFooterHyperlink>
            </p>
        </div>
      </div>
    </footer>
  );
};

