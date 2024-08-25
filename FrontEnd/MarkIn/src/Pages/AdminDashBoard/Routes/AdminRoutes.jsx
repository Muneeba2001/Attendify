import React from "react";
import { Routes, Route } from "react-router-dom";

import DefaultLayout from "../../DefaulLayout/DefaultLayout";
import Manage from "../Manage/Manage";
import Employee from "../Manage/Employee";
import Student from "../Manage/Student";
import Track from "../Track";
import AttendanceSheet from "../../AdminProtoType/AttendanceSheet";
import Analyze from "../../AdminDashBoard/Analyze/Analyze";
import Report from "../Analyze/Report";


const AdminRoutes = () => {
  return (
    <Routes>
<<<<<<< HEAD
      {/* Admin Dashboard */}
      <Route
        path="/AdminDashBoard"
        element={
          <DefaultLayout>
            <AttendanceSheet />
          </DefaultLayout>
        }
      />

      {/* Manage Routes */}
      <Route
        path="/AdminDashBoard/Manage"
        element={
          <DefaultLayout>
            <Manage />
          </DefaultLayout>
        }
      >
        <Route path="Student" element={<Student />} />
        <Route path="Employee" element={<Employee />} />
      </Route>

      {/* Track Routes */}
      <Route
        path="/AdminDashBoard/Track"
        element={
          <DefaultLayout>
            <Track />
          </DefaultLayout>
        }
      >
        <Route path="AttendanceSheet" element={<AttendanceSheet />} />
      </Route>
=======
     <Route path="/AdminDashBoard" element = {<DefaultLayout><DashBoard/></DefaultLayout>}/>
     <Route path="/AdminDashBoard/Manage" element = {<DefaultLayout><Manage/></DefaultLayout>} >
     <Route path="Student" element = {<Student/>}/>
     <Route path="Employee" element = {<Employee/>} />
     </Route>
     <Route path="/AdminDashBoard/Track" element = {<DefaultLayout><Track/></DefaultLayout>}>
    <Route path="AttendanceSheet" element = {<AttendanceSheet/>} />
    </Route>
    <Route path="/AdminDashBoard/Analyze" element = {<DefaultLayout><Analyze/></DefaultLayout>}>
     <Route path="Report" element = {<Report/>}/>
    </Route>
   
>>>>>>> ce68278d35a9a8a313d67217c3408296a25e92de
    </Routes>
  );
};

export default AdminRoutes;
