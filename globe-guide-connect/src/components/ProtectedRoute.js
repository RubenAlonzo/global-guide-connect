import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = Object.keys(localStorage).some((key) => {
    const user = localStorage.getItem(key);
    if (user) {
      const userData = JSON.parse(user);
      return userData.isLoggedIn === true;
    }
    return false;
  });

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
