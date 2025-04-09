import React from "react";
import { Navigate } from "react-router-dom";
// Protected Route Wrapper
import ProtectedRoute from "./ProtectedRoutes";
import AdminRoutes from "./AdminRoutes";
import StudentRoutes from "./StudentRoutes";
import EmployeeRoutes from "./EmployeeRoutes";
import LoginPage from "../Pages/UserAuth/Login";
import Register from "../Pages/UserAuth/Register";
import ForgetPassword from "../Pages/Employee/EmployeeProtoType/ForgetPassword"

  const AppRoutes = [
    {
      path: "/student",
      element: <StudentRoutes />,
    },
    {
      path: "/employee",
      element: <EmployeeRoutes />,
    },
    {
      path: "/Admin",
      element: <AdminRoutes />,
    },
  ];
  
  const PublicRoutes = [
    { path: "/", element: <Navigate to="/login" /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <Register /> },
    { path: "/forget-password", element: <ForgetPassword /> },
  ];
  

export { AppRoutes, PublicRoutes };
