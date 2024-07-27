import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const users = JSON.parse(localStorage.getItem("users")) || [];
  
  let isLoggedIn = false;

  users.forEach(user => {
    if (user.isLoggedIn) {
      isLoggedIn = true;
    }
  });

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
