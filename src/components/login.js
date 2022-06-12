import React from "react";
import { AuthService, useAuth } from "gatsby-theme-auth0";

export default function Login () {
  const { isLoggedIn, profile } = useAuth();
  return (
    <div>
      {profile && <p>Hello {profile.name}</p>}
      {isLoggedIn ? (
        <button onClick={AuthService.logout}>Logout</button>
      ) : (
        <button onClick={AuthService.login}>Login</button>
      )}
    </div>
  );
};