import React from "react";
import Body from "../../Component/DashBoard/Body";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="">
      {/* <div className="flex flex-1 justify-center items-center">
        <Outlet />
        <Body/>
      </div> */}
      <Body />
      <Outlet />
    </div>
  );
};

export default DashBoard;
