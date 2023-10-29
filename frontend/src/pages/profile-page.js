import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { PageLayout } from "../components/page-layout";

export const ProfilePage = () => {
  // In this page is displayed the user information 

  // When the user is authenticated, get the profile information and display it
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Profile Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              You can use the <strong>ID Token</strong> to get the profile
              information of an authenticated user.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={user.picture}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.email}</span>
              </div>
            </div>
            <div className="profile__details">
              <h3 className="content__title">User Information:</h3>
              <ul>
                {Object.entries(user).map(([key, value]) => (
                  key !== "picture" && key !== "locale" && key !== "updated_at" && key !== "sub" && key !== "email_verified" ? 
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li> : ""
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
