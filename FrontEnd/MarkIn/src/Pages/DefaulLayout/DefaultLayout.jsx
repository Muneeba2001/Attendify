import React from "react";
import Header from "../../Component/DashBoard/Header";
import SideBar from "../../Component/DashBoard/SideBar";

const DefaultLayout = (props) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <div className="flex-1 p-6">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
