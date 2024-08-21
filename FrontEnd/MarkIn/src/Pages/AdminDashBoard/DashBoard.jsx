import React from "react";
import { Outlet } from "react-router-dom";
import Body from "../../Component/DashBoard/Body";

const DashBoard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Body/>
      <Outlet/>
    </div>
  );
};

export default DashBoard;
