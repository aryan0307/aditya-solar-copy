import React, { createContext, useState, useContext } from "react";

// Static build — no real auth. Admin routes redirect to login which
// shows a "not available" message. No API calls are made.
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user] = useState(null);
  const [loading] = useState(false);

  const login = async () => {
    throw new Error("Admin login is disabled in the static build.");
  };

  const logout = () => {};

  const value = {
    user,
    token: null,
    isAuthenticated: false,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
