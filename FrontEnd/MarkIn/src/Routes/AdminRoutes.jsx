import React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../Pages/DefaulLayout/DefaultLayout";
import Manage from "../Pages/Admin/AdminDashBoard/Manage/Manage";
import Employee from "../Pages/Admin/AdminDashBoard/Manage/Employee/Employee";
import Student from "../Pages/Admin/AdminDashBoard/Manage/Student";
import Track from "../Pages/Admin/AdminDashBoard/Track/AttendanceSheet";
import Analyze from "../Pages/Admin/AdminDashBoard/Analyze/Analyze";
import Report from "../Pages/Admin/AdminDashBoard/Analyze/Report";
import AttendanceSheet from "../Pages/Admin/AdminDashBoard/Track/AttendanceSheet";
import DashBoard from "../Pages/Admin/AdminDashBoard/AdminPage/DashBoard";
import URLS from "../utilties/URL/URL";

// const AdminRoutes = () => {
//   return (
//     // <>
//     //   {/* Admin Dashboard */}
//     //   <DefaultLayout path="/AdminDashBoard" element={<DashBoard />} />

//     //   {/* Manage Routes */}
//     //   <DefaultLayout path="/AdminDashBoard/Manage" element={<Manage />} />
//     //   <Route path="/AdminDashBoard/Manage/Student" element={<Student />} />
//     //   <Route path="/AdminDashBoard/Manage/Employee" element={<Employee />} />

//     //   {/* Track Routes */}
//     //   <DefaultLayout path="/AdminDashBoard/Track" element={<Track />} />
//     //   <Route
//     //     path="/AdminDashBoard/Track/AttendanceSheet"
//     //     element={<AttendanceSheet />}
//     //   />

//     //   {/* Analyze Routes */}
//     //   <DefaultLayout path="/AdminDashBoard/Analyze" element={<Analyze />} />
//     //   <Route path="/AdminDashBoard/Analyze/Report" element={<Report />} />
//     // </>
//   );
// };

// export default AdminRoutes;
export const AdminRoutes = [{
  path : URLS.ADMIN.Dashboard,
  element : DashBoard,
  layout : true
},
{
  path : URLS.ADMIN.Manage,
  element: Manage,
  layout:true
},
{path: URLS.ADMIN.Manage_Student,
  element:Student,
  layout:true
},{
  path : URLS.ADMIN.Manage_Employee,
  element: Employee,
  layout:true
},
{path : URLS.ADMIN.Tracking,
  element : Track,
  layout:true
},
{path : URLS.ADMIN.Tracking_AttendanceSheet,
  element:AttendanceSheet,
  layout:true,
},
{path: URLS.ADMIN.Analyze,
  element:Analyze,
  layout:true,
  
},
{path: URLS.ADMIN.Analyze_Reports,
  element:Report,
  layout:true
}
]
