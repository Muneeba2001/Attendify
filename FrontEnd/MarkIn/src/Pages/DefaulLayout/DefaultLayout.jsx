import React from "react";
import Header from "../../Component/DashBoard/Header";
import SideBar from "../../Component/DashBoard/SideBar";

const DefaultLayout = (props) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <div className="flex flex-1 justify-center items-center">
          <div className="bg-red-500 w-[70%] relative top-[-250px]">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
