import React from "react";
import { FaRegBell } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { HiMiniUserCircle } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="relative z-10 flex justify-between items-center rounded-sm bg-[#1e1e1e] text-white p-2 pl-10 shadow-lg">
        <h1 className="text-2xl font-bold">
          <NavLink to="/Home">Attendify</NavLink>
        </h1>

        <div className="flex items-center gap-6 mr-6">
          {/* 🔍 Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="w-64 h-10 rounded-md border border-gray-600 bg-[#0f0f0f] px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />

          {/* 🔔 Bell Icon */}
          <div className="relative text-gray-300">
            <FaRegBell className="cursor-pointer text-2xl" />
            <div className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-blue-600"></div>
          </div>

          {/* 💬 Message Icon */}
          <div className="relative text-gray-300">
            <LuMessageSquare className="cursor-pointer text-2xl" />
            <div className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-green-600"></div>
          </div>

          {/* 👤 User Icon */}
          <div className="text-gray-300">
            <HiMiniUserCircle className="cursor-pointer text-2xl" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
