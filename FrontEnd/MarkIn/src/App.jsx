import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppRoutes, PublicRoutes } from "./Routes/AppRoutes";
import { AdminRoutes } from "./Routes/AdminRoutes";
import URLS from "./utilties/URL/URL";
import './index.css';  // Ensure this is present
import DefaultLayout from "./Pages/DefaulLayout/DefaultLayout";

function App() {
  // Assuming AdminRoutes is an array and not a function.
  const routes = AdminRoutes;

  return (
    <>
      <Routes>
        {/* Public Routes */}
        {PublicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {/* App Routes */}
        {AppRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {/* Admin Routes */}
        {routes.map(({ path, element: Element, layout }, index) => {
          if (layout) {
            return (
              <Route
                key={path + index}
                path={path}
                element={
                  <DefaultLayout>
                    <Element />
                  </DefaultLayout>
                }
              />
            );
          }
          return (
            <Route key={path + index} path={path} element={<Element />} />
          );
        })}
      </Routes>

      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
