import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/UserAuth/Register";
import UserAuthPage from "./Pages/UserAuth/UserAuthPage";
import ForgetPassword from "./Pages/TeacherProtoType/ForgetPassword";
import Login from "./Pages/UserAuth/Login";
import Register from "./Pages/UserAuth/Register";
import StudentLogin from "./Pages/StudentProtoType/student-login";
import StudentForgetPassword from "./Pages/StudentProtoType/StudentForgetPassword";
import AdminLogin from "./Pages/AdminProtoType/AdminLogin"
import AdminForgetPassword from "./Pages/AdminProtoType/AdminForgetPassword";
import AdminRoutes from "./Pages/AdminDashBoard/Routes/AdminRoutes";
import { ToastContainer } from "react-toastify";

// import LoggingOut from "./Pages/AdminDashBoard/AdminPage/LoggingOut";

function App() {
  return (
    <>
    <AdminRoutes/>
    <Routes>
      {/* User Authentication Routes */}
      <Route
        path="/UserAuth"
        element={
        
            <UserAuthPage />
         
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
        <Route path="AdminLogin" element={<AdminLogin/>} />
        <Route path="AdminForgetPassword" element={<AdminForgetPassword />} />
      </Route>


      {/* Additional Admin Routes */}
      {/* <Route path="/AdminDashBoard/Analyze" element={<Analyze />} /> */}
      {/* <Route path="/AdminDashBoard/LoggingOut" element={<LoggingOut />} /> */}
      
    </Routes>
    <ToastContainer position="top-right"/>
    </>
  );
}

export default App;
