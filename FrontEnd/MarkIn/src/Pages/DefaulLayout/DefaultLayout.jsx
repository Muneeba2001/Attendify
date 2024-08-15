import React from "react";
import Header from "../../Component/DashBoard/Header";
import SideBar from "../../Component/DashBoard/SideBar";

const DefaultLayout = (props) => {
  return (
    <div>
      <div className="bg-blue-300"></div>

      {props.children}
    </div>
  );
};

export default DefaultLayout;
