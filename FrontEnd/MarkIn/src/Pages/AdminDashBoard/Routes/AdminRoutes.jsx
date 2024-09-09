import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import DefaultLayout from "../../DefaulLayout/DefaultLayout";
import Manage from "../Manage/Manage";
import Employee from "../Manage/Employee";
import Student from "../Manage/Student";
import DashBoard from "../AdminPage/DashBoard";
import Track from "../AdminPage/Track";

import Analyze from "../../AdminDashBoard/Analyze/Analyze";
import Report from "../Analyze/Report";
import AttendanceSheet from "../Track/AttendanceSheet";
import { Provider } from "react-redux";
import reduxStore from "../../Central Store/store";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Admin Dashboard
      <Route
        path="/AdminDashBoard"
        element={
          <DefaultLayout>
            <AttendanceSheet />
          </DefaultLayout>
        }
      />

      {/* Manage Routes */}
      {/* <Route
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
      {/* <Route
        path="/AdminDashBoard/Track"
        element={
          <DefaultLayout>
            <Track />
          </DefaultLayout>
        }
      >
        <Route path="AttendanceSheet" element={<AttendanceSheet />} />
      </Route>{" "} */}

      <Route
        path="/AdminDashBoard"
        element={
          <DefaultLayout>
            <Provider store = {reduxStore}>
            <DashBoard />
            </Provider>
          </DefaultLayout>
        }
      />
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
      <Route
        path="/AdminDashBoard/Track"
        element={
          <DefaultLayout>
            <Track />
          </DefaultLayout>
        }
      >
        <Route path="AttendanceSheet" element={<AttendanceSheet/>} />
      </Route>
      <Route
        path="/AdminDashBoard/Analyze"
        element={
          <DefaultLayout>
            <Analyze />
          </DefaultLayout>
        }
      >
        <Route path="Report" element={<Report />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
