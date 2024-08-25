import React from "react";
import Employee_list from "../../Component/Admin/Employee_list/Employee_list";
import SideBar from "../../Component/DashBoard/SideBar";
import Header from "../../Component/DashBoard/Header";

const AttendanceSheet = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <div className="class flex w-full justify-normal">
        <SideBar />
        <Employee_list />
      </div>
    </div>
  );
};

export default AttendanceSheet;
