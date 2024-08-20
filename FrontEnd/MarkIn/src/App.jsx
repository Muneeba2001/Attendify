import Login from "./Pages/TeacherProtoType/Login";
import { Route, Routes } from "react-router-dom";
import UserAuthPage from "./Pages/UserAuthPage";
import ForgetPassword from "./Pages/TeacherProtoType/ForgetPassword";
import DefaultLayout from "./Pages/DefaulLayout/DefaultLayout";
import DashBoard from "./Pages/AdminDashBoard/DashBoard";
import Register from "./Pages/Register";
import StudentLogin from "./Pages/StudentProtoType/student-login";
import StudentForgetPassword from "./Pages/StudentProtoType/StudentForgetPassword";
import AdminLogin from "./Pages/AdminProtoType/AdminLogin";
import AdminForgetPassword from "./Pages/AdminProtoType/AdminForgetPassword";
import AttendanceSheet from "./Pages/AdminProtoType/AttendanceSheet";
import Track from "./Pages/AdminDashBoard/Track";
import Analyze from "./Pages/AdminDashBoard/Analyze";
import Manage from "./Pages/AdminDashBoard/Manage/Manage";
import LoggingOut from "./Pages/AdminDashBoard/LoggingOut";
<<<<<<< HEAD
import Student from "./Pages/AdminDashBoard/Manage/Student";
import DashBoard from "./Pages/AdminDashBoard/DashBoard";
import AdminRoutes from "./Pages/AdminDashBoard/Routes/AdminRoutes";
=======
import Student from "./Pages/AdminDashBoard/Student";

//import DefaultLayout from "./DefaultLayout/DefaultLayout";
>>>>>>> ad50dbe89a2470098deb8409e01a03b7cd9eed57

function App() {
  return (
    <>
     <AdminRoutes />
      <Routes>
<<<<<<< HEAD
     
        {/* <Route path="/AdminDashBoard" element={<DashBoard/>} /> */}
        
         {/* Manage */}
         {/* <Route path="/AdminDashBoard/Manage" element = {<DefaultLayout><Manage/></DefaultLayout>}>
         </Route>
         <Route path = "/AdminDashBoard/Manage/Student" element = {<DefaultLayout><Student/></DefaultLayout>}/> */}
      
=======
        <Route path="/AdminDashBoard" element={<DashBoard />}>
         {/* Manage */}
         <Route path="Manage" element = {<Manage/>}>
        <Route path = "Student" element = {<DefaultLayout><Student/></DefaultLayout>}/>
         </Route>
>>>>>>> ad50dbe89a2470098deb8409e01a03b7cd9eed57
        {/* Track */}
         {/* Admin DashBoard */}
         <Route  path="Track" element = {<Track/>}/>
        
        </Route>
        <Route path="AttendanceSheet" element={<DefaultLayout><AttendanceSheet/></DefaultLayout>}/>
        <Route
          path="/UserAuth"
          element={
            // <DefaultLayout>
            <UserAuthPage />
            // </DefaultLayout>
          }
        >
          <Route path="Register" element={<Register />} />
          {/* TeacherLogin */}
          <Route path="Login" element={<Login />} />
          <Route path="ForgetPassword" element={<ForgetPassword />} />
          {/* StudentLogin */}
          <Route path="StudentLogin" element={<StudentLogin />} />
          <Route
            path="StudentForgetPassword"
            element={<StudentForgetPassword />}
          />
          {/* AdminLogin */}
          <Route path="AdminLogin" element={<AdminLogin />} />
          <Route path="AdminForgetPassword" element={<AdminForgetPassword />} />
        </Route>

        <Route path="/AdminDashBoard/Analyze" element={<Analyze />} />

        <Route path="/AdminDashBoard/LoggingOut" element={<LoggingOut />} />
      </Routes>
    </>
  );
}

export default App;