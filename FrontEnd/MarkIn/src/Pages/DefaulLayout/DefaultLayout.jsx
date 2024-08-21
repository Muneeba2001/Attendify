import React from "react";
import Header from "../../Component/DashBoard/Header";
import SideBar from "../../Component/DashBoard/SideBar";

const DefaultLayout = (props) => {
  return (
    <div className="relative min-h-screen flex flex-col  ">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <div className="w-full  flex justify-center items-center ">
          <div className="w-full flex justify-center items-center">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
