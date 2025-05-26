import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaRegFileAlt,
  FaChartBar,
  FaUserGraduate,
  FaSignOutAlt,
  FaUserTie,
} from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";

const SideBar = () => {
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/UserAuth/Login");
  };

  const iconClasses = "text-gray-400 hover:text-white text-xl";

  return (
    <div className="flex min-h-full w-20 flex-col bg-[#1e1e1e] p-4 shadow-lg">
      <nav className="flex flex-col items-center space-y-8">

        {/* Dashboard */}
        <div className="relative group">
          <NavLink to="/AdminDashBoard">
            <FaChartBar className={iconClasses} />
          </NavLink>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Dashboard
          </span>
        </div>

        {/* Attendance Sheet */}
        <div className="relative group">
          <NavLink to="/AdminDashBoard/Track/AttendanceSheet">
            <HiOutlineClipboardList className={iconClasses} />
          </NavLink>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Attendance Sheet
          </span>
        </div>

        {/* Report */}
        <div className="relative group">
          <NavLink to="/AdminDashBoard/Analyze/Report">
            <FaRegFileAlt className={iconClasses} />
          </NavLink>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Report
          </span>
        </div>

        {/* Manage Student */}
        <div className="relative group">
          <NavLink to="/AdminDashBoard/Manage/Student">
            <FaUserGraduate className={iconClasses} />
          </NavLink>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Student
          </span>
        </div>

        {/* Manage Employee */}
        <div className="relative group">
          <NavLink to="/AdminDashBoard/Manage/Employee">
            <FaUserTie className={iconClasses} />
          </NavLink>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Employee
          </span>
        </div>

        {/* Logout */}
        <div className="relative group">
          <button onClick={handleLogout}>
            <FaSignOutAlt className={iconClasses} />
          </button>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Logout
          </span>
        </div>

      </nav>
    </div>
  );
};

export default SideBar;
