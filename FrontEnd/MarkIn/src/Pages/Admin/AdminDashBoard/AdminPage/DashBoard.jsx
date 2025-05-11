import React from "react";
import Body from "../../../../Component/DashBoard/Body";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="flex flex-1 justify-center items-start bg-[#1e1e1e] w-full m-0 p-0">
      <div className="flex flex-1">
        <Outlet />
        <Body />
      </div>
    </div>
  );
};

export default DashBoard;
