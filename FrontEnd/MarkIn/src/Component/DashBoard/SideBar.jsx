import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaRegFileAlt,
  FaChartBar,
  FaUserGraduate,
  FaSignOutAlt,
} from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";

const SideBar = () => {
  return (
    <div className="container h-screen w-80 bg-white shadow-lg">
      <div className="sidebar flex flex-col items-start p-6">
        <nav className="flex w-full flex-col justify-between font-bold text-sky-900">
          <div className="mb-4 mt-2 text-gray-400">
            {/* <h3 className="text-sm">TRACK</h3> */}
            <NavLink className="text-sm" to="/AdminDasBoard/Track">
              TRACK
            </NavLink>
          </div>
          <div className="mb-2 flex w-full items-center">
            <HiOutlineClipboardList className="mr-0 text-lg" />
            <NavLink
              to="/AttendanceSheet"
              className="block rounded px-4 py-2 hover:bg-gray-100"
              activeclassname="bg-blue-50 text-blue-700"
            >
              Attendance Sheet
            </NavLink>
          </div>
          <div className="mb-4 mt-4 text-gray-400">
            {/* <h3 className="text-sm">ANALYZE</h3> */}
            <NavLink to="/AdminDashBoard/Analyze" className="text-sm">
              ANALYZE
            </NavLink>
          </div>
          <div className="mb-2 flex w-full items-center">
            <FaChartBar className="mr-0 text-lg" />
            <NavLink
              to="/AdminDashBoard"
              className="block rounded px-4 py-2 hover:bg-gray-100"
              activeclassname="bg-blue-50 text-blue-700"
            >
              Dashboard
            </NavLink>
          </div>
          <div className="mb-2 flex w-full items-center">
            <FaRegFileAlt className="mr-0 text-lg" />
            <NavLink
              to="/report"
              className="block rounded px-4 py-2 hover:bg-gray-100"
              activeclassname="bg-blue-50 text-blue-700"
            >
              Report
            </NavLink>
          </div>
          <div className="mb-4 mt-4 text-gray-400">
            {/* <h3 className="text-sm">MANAGE</h3> */}
            <NavLink to="/AdminDashBoard/Manage" className="text-sm">
              MANAGE
            </NavLink>
          </div>
          <div className="mb-2 flex w-full items-center">
            <FaUserGraduate className="mr-0 text-lg" />
            <NavLink
              to="/AdminDashBoard/Manage/Student"
              className="block rounded px-4 py-2 hover:bg-gray-100"
              activeclassname="bg-blue-50 text-blue-700"
            >
              Student
            </NavLink>
          </div>
          <div className="mb-2 flex w-full items-center">
            <FaUserGraduate className="mr-0 text-lg" />
            <NavLink
              to="/AdminDashBoard/Manage/Employee"
              className="block rounded px-4 py-2 hover:bg-gray-100"
              activeclassname="bg-blue-50 text-blue-700"
            >
              Employee
            </NavLink>
          </div>
          <div className="mb-4 mt-4 text-gray-400">
            {/* <h3 className="text-sm">LOGGING OUT</h3> */}
            <NavLink to="/AdminDashBoard/LoggingOut" className="text-sm">
              LOGGING OUT
            </NavLink>
          </div>

          <div className="mb-2 flex w-full items-center">
            <FaSignOutAlt className="mr-0 text-lg" />
            <NavLink
              to="/logout"
              className="block rounded px-4 py-2 hover:bg-gray-100"
              activeclassname="bg-blue-50 text-blue-700"
            >
              Logout
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
