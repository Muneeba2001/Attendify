import React from "react";
import { Routes, Route } from "react-router-dom";

import DefaultLayout from "../../DefaulLayout/DefaultLayout";
import Manage from "../Manage/Manage";
import Employee from "../Manage/Employee";
import Student from "../Manage/Student";
import Track from "../Track";
import AttendanceSheet from "../../AdminProtoType/AttendanceSheet";

const AdminRoutes = () => {
  return (
    <Routes>
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
    </Routes>
  );
};

export default AdminRoutes;
