import { callExternalApi } from "./external-api.service";


// Service to call the external commerce it API
// with a public, private and admin-level access endpoints 
// (the auth0 token is provided to get the necessary information)

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;
export const getPublicResource = async () => {
  // Get all products
  const config = {
    url: `${apiServerUrl}/api/products`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const getProtectedResource = async (token) => {
  // Get items stored in the client cart 
  const config = {
    url: `${apiServerUrl}/api/cart`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  };
  const { data, error } = await callExternalApi({ config });
  return {
    data: data || null,
    error,
  };
};

export const getAdminResource = async (token) => {
  // Get all the users stored in the database (admin only)
  const config = {
    url: `${apiServerUrl}/api/users`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};
