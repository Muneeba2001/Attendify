import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PublicRoutes } from "./Routes/AppRoutes";
import { AdminRoutes } from "./Routes/AdminRoutes";
import { StudentRoutes } from "./Routes/StudentRoutes";
import { EmployeeRoutes } from "./Routes/EmployeeRoutes";
import URLS from "./utilties/URL/URL";
import "./index.css";
import DefaultLayout from "./Pages/DefaulLayout/DefaultLayout";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        {PublicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {/* App Routes
        {AppRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))} */}

        {/* Admin Routes */}
        {AdminRoutes.map(({ path, element: Element, layout }, index) => {
          return layout ? (
            <Route
              key={path + index}
              path={path}
              element={
                <DefaultLayout>
                  <Element />
                </DefaultLayout>
              }
            />
          ) : (
            <Route key={path + index} path={path} element={<Element />} />
          );
        })}

        {/* Student Routes */}
        {StudentRoutes.map(({ path, element: Element, layout }, index) => (
          <Route
            key={path + index}
            path={path}
            element={
              layout ? (
                  <Element />
              ) : (
                <Element />
              )
            }
          />
        ))}

        {/* Employee Routes */}
        {EmployeeRoutes.map(({ path, element: Element, layout }, index) => (
          <Route
            key={path + index}
            path={path}
            element={
              layout ? (
                  <Element />
              ) : (
                <Element />
              )
            }
          />
        ))}
      </Routes>

      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
