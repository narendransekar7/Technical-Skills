// src/authConfig.js
export const msalConfig = {
  auth: {
    clientId: "aaddf4ef-368e-4c34-9ae8-2ff8178705af", // Replace with Azure AD client ID
    authority: "https://login.microsoftonline.com/ffa5386b-41e5-4fe1-a806-fae98382f107", // Replace with Azure AD tenant ID
    redirectUri: "http://localhost:3000", // Redirect URL after login
  },
  cache: {
    cacheLocation: "localStorage", // Recommended for persisting token cache
    storeAuthStateInCookie: true,
  },
};

export const loginRequest = {
  scopes: ["openid", "profile", "api://aaddf4ef-368e-4c34-9ae8-2ff8178705af"], // Add your API scope here
};
