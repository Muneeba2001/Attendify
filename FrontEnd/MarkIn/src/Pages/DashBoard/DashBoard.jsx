import React from "react";
import Header from "../../Component/DashBoard/Header";
import SideBar from "../../Component/DashBoard/SideBar";
import Body from "../../Component/DashBoard/Body";

const DashBoard = (props) => {
  return (
    <div>
      <div className="bg-blue-300"></div>
      <Header />
      {props.children}
      <div className="class flex">
        <SideBar />
        <Body />
      </div>
    </div>
  );
};

export default DashBoard;
