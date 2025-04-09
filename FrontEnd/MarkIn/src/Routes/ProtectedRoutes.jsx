import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Mock authentication function (replace this with actual authentication logic)
const getUserRole = () => {
  return localStorage.getItem("userRole"); // Assuming role is stored in localStorage
};

const isAuthenticated = () => {
  return !!localStorage.getItem("authToken"); // Assuming token is stored in localStorage
};

const ProtectedRoute = ({ role, children }) => {
  const user = JSON.parse(localStorage.getItem("user")); // Fetch user from local storage or state
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (user.role !== role) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default ProtectedRoute;
