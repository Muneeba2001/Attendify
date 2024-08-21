import React from "react";
import Header from "../../Component/DashBoard/Header";
import SideBar from "../../Component/DashBoard/SideBar";

const DefaultLayout = (props) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <div className="flex flex-1 justify-center items-center w-full ">
          <div className="w-full p-4 mt-20 m-10 relative top-[-250px]">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
