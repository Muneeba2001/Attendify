import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <nav className="relative z-10 flex justify-between items-center rounded-sm bg-[#1e1e1e] text-white p-2 pl-10 shadow-lg">
        <h1 className="text-2xl font-bold">
                 <NavLink to="/">Attendify</NavLink>
               </h1>
      </nav>
    </div>
  );
};

export default Header;
