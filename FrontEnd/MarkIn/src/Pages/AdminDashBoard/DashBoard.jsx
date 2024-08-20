import React from "react";
import { Outlet } from "react-router-dom";
import Body from "../../Component/DashBoard/Body";

const DashBoard = () => {
  return (
    <div className="flex flex-col h-screen">
      
      {/* <div className="flex flex-1 justify-center items-center">
        <Outlet />
        <Body/>
      </div> */}
      <Body/>
      <Outlet/>
    </div>
  );
};

export default DashBoard;
