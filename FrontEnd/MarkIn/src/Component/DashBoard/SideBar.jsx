import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaRegFileAlt,
  FaChartBar,
  FaUserGraduate,
  FaSignOutAlt,
  FaUserTie, // New icon for employee
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
        <NavLink to="/AdminDashBoard" title="Dashboard">
          <FaChartBar className={iconClasses} />
        </NavLink>

        {/* Attendance Sheet */}
        <NavLink
          to="/AdminDashBoard/Track/AttendanceSheet"
          title="Attendance Sheet"
        >
          <HiOutlineClipboardList className={iconClasses} />
        </NavLink>

        {/* Report */}
        <NavLink to="/AdminDashBoard/Analyze/Report" title="Report">
          <FaRegFileAlt className={iconClasses} />
        </NavLink>

        {/* Manage Student */}
        <NavLink to="/AdminDashBoard/Manage/Student" title="Student">
          <FaUserGraduate className={iconClasses} />
        </NavLink>

        {/* Manage Employee */}
        <NavLink to="/AdminDashBoard/Manage/Employee" title="Employee">
          <FaUserTie className={iconClasses} />{" "}
          {/* Updated to FaUserTie for Employee */}
        </NavLink>

        {/* Logout */}
        <button onClick={handleLogout} title="Logout">
          <FaSignOutAlt className={iconClasses} />
        </button>
      </nav>
    </div>
  );
};

export default SideBar;
