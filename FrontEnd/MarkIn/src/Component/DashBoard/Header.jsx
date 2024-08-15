import React from "react";
import { FaRegBell } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { HiMiniUserCircle } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <nav className="relative z-10 flex justify-between rounded-sm bg-white p-2 pl-10 shadow-lg">
        <h1 className="heading text-2xl font-bold text-blue-900">
          <NavLink to="/Home">Attendify</NavLink>
        </h1>
        <div className="icon relative mr-6 flex justify-around gap-8 p-2">
          <div className="relative">
            <FaRegBell className="cursor-pointer text-2xl" />
            <div className="absolute right-0 top-0 h-3 w-3 rounded-full bg-blue-800"></div>
          </div>
          <div className="relative">
            <LuMessageSquare className="cursor-pointer text-2xl" />
            <div className="absolute right-0 top-0 h-3 w-3 rounded-full bg-green-800"></div>
          </div>
          <div>
            <HiMiniUserCircle className="cursor-pointer text-2xl" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
