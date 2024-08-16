import "./App.css";
import Login from "./Pages/TeacherProtoType/Login";
import { Route, Routes } from "react-router-dom";
import UserAuthPage from "./Pages/UserAuthPage";
import ForgetPassword from "./Pages/TeacherProtoType/ForgetPassword";
import DefaultLayout from "./Pages/DefaulLayout/DefaultLayout";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Register from "./Pages/Register";
import StudentLogin from "./Pages/StudentProtoType/student-login";
import StudentForgetPassword from "./Pages/StudentProtoType/StudentForgetPassword";
import AdminLogin from "./Pages/AdminProtoType/AdminLogin";
import AdminForgetPassword from "./Pages/AdminProtoType/AdminForgetPassword";
import AttendanceSheet from "./Pages/AdminProtoType/AttendanceSheet";


//import DefaultLayout from "./DefaultLayout/DefaultLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/DashBoard" element={<DashBoard />}></Route>
        <Route
          path="/UserAuth"
          element={
            <DefaultLayout>
              <UserAuthPage />
            </DefaultLayout>
          }
        >
          <Route path="Register" element={<Register />} />
          {/* TeacherLogin */}
          <Route path="Login" element={<Login />} />
          <Route path="ForgetPassword" element={<ForgetPassword />} />
          {/* StudentLogin */}
          <Route path="StudentLogin" element={<StudentLogin/>}/>
          <Route path="StudentForgetPassword" element = {<StudentForgetPassword/>} />
          {/* AdminLogin */}
          <Route path="AdminLogin" element = {<AdminLogin/>}/>
          <Route path="AdminForgetPassword" element = {<AdminForgetPassword/>} />
        </Route>
        <Route path="/AttendanceSheet" element={<DefaultLayout><AttendanceSheet/></DefaultLayout>}/>
      </Routes>
    </>
  );
}

export default App;
