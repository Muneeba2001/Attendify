import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./Pages/DefaulLayout/DefaultLayout";
import UserAuthPage from "./Pages/UserAuth/UserAuthPage";
import ForgetPassword from "./Pages/TeacherProtoType/ForgetPassword";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import StudentLogin from "./Pages/StudentProtoType/student-login";
import StudentForgetPassword from "./Pages/StudentProtoType/StudentForgetPassword";
import AdminLogin from "./Pages/AdminProtoType/AdminLogin";
import AdminForgetPassword from "./Pages/AdminProtoType/AdminForgetPassword";
import Analyze from "./Pages/AdminDashBoard/Analyze/Analyze";

import LoggingOut from "./Pages/AdminDashBoard/AdminPage/LoggingOut";
import AdminRoutes from "./Pages/AdminDashBoard/Routes/AdminRoutes";

function App() {
  return (
    <Routes>
      {/* User Authentication Routes */}
      <Route
        path="/UserAuth"
        element={
          <DefaultLayout>
            <UserAuthPage />
          </DefaultLayout>
        }
      >
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="ForgetPassword" element={<ForgetPassword />} />
        <Route path="StudentLogin" element={<StudentLogin />} />
        <Route
          path="StudentForgetPassword"
          element={<StudentForgetPassword />}
        />
        <Route path="AdminLogin" element={<AdminLogin />} />
        <Route path="AdminForgetPassword" element={<AdminForgetPassword />} />
      </Route>

      {/* Admin Dashboard Routes */}
      <Route path="/*" element={<AdminRoutes />} />

      {/* Additional Admin Routes */}
      <Route path="/AdminDashBoard/Analyze" element={<Analyze />} />
      <Route path="/AdminDashBoard/LoggingOut" element={<LoggingOut />} />
    </Routes>
  );
}

export default App;
