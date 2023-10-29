import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import "./styles/styles.css";
import { ProductsProvider } from "./productContext";


const container = document.getElementById("root");
const root = createRoot(container);


// It includes the auth0 provider to secure the whole application 
// and will work with the guards to secure the private endpoints and
// information
 
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductsProvider>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
