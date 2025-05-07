import React from "react";
import ForgetPassword from "../Pages/Employee/EmployeeProtoType/ForgetPassword"
import Home from "../Pages/View/Home";

  const AppRoutes = [
    // {
    //   path: "/student",
    //   element: <StudentRoutes />,
    // },
    // {
    //   path: "/employee",
    //   element: <EmployeeRoutes />,
    // },
    // {
    //   path: "/Admin",
    //   element: <AdminRoutes />,
    // },
  ];
  
  const PublicRoutes = [
    { path: "/", element: <Home/>  },
    // { path: "/", element: <Navigate to="/login" /> },
    // { path: "/login", element: <LoginPage /> },
    // { path: "/register", element: <Register /> },
    { path: "/forget-password", element: <ForgetPassword /> },
  ];
  

export { AppRoutes, PublicRoutes };
