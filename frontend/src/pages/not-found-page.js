import React from "react";
import { PageLayout } from "../components/page-layout";

export const NotFoundPage = () => {
  // If a page is not found for the url specified, show this page
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Not Found
        </h1>
      </div>
    </PageLayout>
  );
};
