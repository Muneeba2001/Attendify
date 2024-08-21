import React from "react";
import { Routes, Route } from "react-router-dom";

import DefaultLayout from "../../DefaulLayout/DefaultLayout";
import Manage from "../Manage/Manage";
import DashBoard from "../DashBoard";
import Employee from "../Manage/Employee";
import Student from "../Manage/Student";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Admin Dashboard Route */}
      <Route
        path="/AdminDashBoard"
        element={
          <DefaultLayout>
            <DashBoard />
          </DefaultLayout>
        }
      />

      {/* Manage Route Nested under Admin Dashboard */}
      <Route
        path="/AdminDashBoard/Manage"
        element={
          <DefaultLayout>
            <Manage />
          </DefaultLayout>
        }
      >
        {/* Nested Routes under Manage */}
        <Route path="Student" element={<Student />} />
        <Route path="Employee" element={<Employee />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
