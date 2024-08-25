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
    <div className="min-h-full w-80 bg-white shadow-lg flex flex-col">
      <nav className="flex flex-col flex-1 p-6 font-bold text-sky-900">
        <div className="mb-4 mt-2 text-gray-400">
          <NavLink className="text-sm" to="/AdminDashBoard/Track">
            TRACK
          </NavLink>
        </div>
        <div className="mb-2 flex items-center">
          <HiOutlineClipboardList className="mr-2 text-lg" />
          <NavLink
            to="/AdminDashBoard/Track/AttendanceSheet"
            className="block w-full rounded px-4 py-2 hover:bg-gray-100"
            activeClassName="bg-blue-50 text-blue-700"
          >
            Attendance Sheet
          </NavLink>
        </div>
        <div className="mb-4 mt-4 text-gray-400">
          <NavLink to="/AdminDashBoard/Analyze" className="text-sm">
            ANALYZE
          </NavLink>
        </div>
        <div className="mb-2 flex items-center">
          <FaChartBar className="mr-2 text-lg" />
          <NavLink
            to="/AdminDashBoard"
            className="block w-full rounded px-4 py-2 hover:bg-gray-100"
            activeClassName="bg-blue-50 text-blue-700"
          >
            Dashboard
          </NavLink>
        </div>
        <div className="mb-2 flex items-center">
          <FaRegFileAlt className="mr-2 text-lg" />
          <NavLink
            to="/AdminDashBoard/Analyze/Report"
            className="block w-full rounded px-4 py-2 hover:bg-gray-100"
            activeClassName="bg-blue-50 text-blue-700"
          >
            Report
          </NavLink>
        </div>
        <div className="mb-4 mt-4 text-gray-400">
          <NavLink to="/AdminDashBoard/Manage" className="text-sm">
            MANAGE
          </NavLink>
        </div>
        <div className="mb-2 flex items-center">
          <FaUserGraduate className="mr-2 text-lg" />
          <NavLink
            to="/AdminDashBoard/Manage/Student"
            className="block w-full rounded px-4 py-2 hover:bg-gray-100"
            activeClassName="bg-blue-50 text-blue-700"
          >
            Student
          </NavLink>
        </div>
        <div className="mb-2 flex items-center">
          <FaUserGraduate className="mr-2 text-lg" />
          <NavLink
            to="/AdminDashBoard/Manage/Employee"
            className="block w-full rounded px-4 py-2 hover:bg-gray-100"
            activeClassName="bg-blue-50 text-blue-700"
          >
            Employee
          </NavLink>
        </div>
        <div className="mb-4 mt-4 text-gray-400">
          <NavLink to="/AdminDashBoard/logout" className="text-sm">
            SESSION OUT
          </NavLink>
        </div>
        <div className=" mb-2 flex items-center">
          <FaSignOutAlt className="mr-2 text-lg" />
          <NavLink
            to="/logout"
            className="block w-full rounded px-4 py-2 hover:bg-gray-100"
            activeClassName="bg-blue-50 text-blue-700"
          >
            Logout
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
