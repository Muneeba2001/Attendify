import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppRoutes, PublicRoutes } from "./Routes/AppRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {PublicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {/* App Routes */}
        {AppRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>

      <ToastContainer position="top-right" />
    </Router>
  );
}

export default App;
