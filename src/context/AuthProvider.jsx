// AuthProvider.jsx
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || ""
  );
  const [user, setUser] = useState();

  useEffect(() => {
    localStorage.setItem("accessToken", accessToken);
  }, [accessToken]);

  const login = (token) => {
    setAccessToken(token);
  };

  const logout = () => {
    setAccessToken("");
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
