import React from "react";
import { Routes, Route } from "react-router-dom";

import Manage from "../../AdminDashBoard/Manage/Manage";
import DefaultLayout from "../../DefaulLayout/DefaultLayout";
import DashBoard from "../DashBoard";
import Employee from "../Manage/Employee";
import Student from "../Manage/Student";
import Track from "../Track";
import AttendanceSheet from "../../AdminProtoType/AttendanceSheet";

const AdminRoutes = () => {
  return (
    // <Routes>
    //   <Route
    //     path="/AdminDashBoard"
    //     element={
    //       <DefaultLayout>
    //         <DashBoard />
    //       </DefaultLayout>
    //     }
    //   >
    //     <Route path="Manage" element={<Manage />} />
    //   </Route>

    //   <Route
    //     path="/AdminDashBoard/Manage/Student"
    //     element={
    //       <DefaultLayout>
    //         <Student />
    //       </DefaultLayout>
    //     }
    //   />
    //   <Route
    //     path="/AdminDashBoard/Manage/Employee"
    //     element={
    //       <DefaultLayout>
    //         <Employee />
    //       </DefaultLayout>
    //     }
    //   />
    // </Routes>
    //     <Routes>
    //     {/* Admin Dashboard Route */}
    //     <Route path="/AdminDashBoard" element={<DefaultLayout />}>
    //       {/* Dashboard is the default route */}
    //       <Route index element={<DashBoard />} />

    //       {/* Manage Page nested under Admin Dashboard */}
    //       <Route path="Manage" element={<Manage />}>
    //         {/* Student Page nested under Manage */}
    //         <Route path="Student" element={<Student />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    <Routes>
     <Route path="/AdminDashBoard" element = {<DefaultLayout><DashBoard/></DefaultLayout>}/>
     <Route path="/AdminDashBoard/Manage" element = {<DefaultLayout><Manage/></DefaultLayout>} >
     <Route path="Student" element = {<Student/>}/>
     <Route path="Employee" element = {<Employee/>} />  </Route>
     <Route path="/AdminDashBoard/Track" element  = {<DefaultLayout><Track/></DefaultLayout>} >
      <Route path="AttendanceSheet" element = {<AttendanceSheet/>}/>
     </Route>
    
    </Routes>
  );
};

export default AdminRoutes;
