import React from "react";

import { NavLink } from "react-router-dom";

const Body = () => {
  return (
    // min-h-screen px-2 -> container
    <div className="container">
      <div className="heading px-10 py-4">
        <h1 className="text-2xl font-bold text-blue-700">Dashboard</h1>
        <div className="cursor-pointer text-gray-500">
          <NavLink to="/Home">
            <span>Home / </span>
          </NavLink>
          <span className="text-neutral-800">Dashboard</span>
        </div>
      </div>

      <div className="grid w-5/6 grid-cols-4 gap-x-10">
        {/* First Row */}
        <div className="card-container mx-10">
          <div className="card m-0 h-40 w-52 rounded-sm border bg-white shadow-lg">
            <div className="p-5">
              <span className="text-2xl font-medium text-blue-700">
                Present
              </span>
              <span> | Today</span>
              <div className="circle-description flex">
                <div className="circle my-2 h-16 w-16 rounded-full bg-slate-300"></div>
                <div className="description flex flex-col px-1 py-3">
                  <h1 className="text-2xl font-medium text-blue-700">145</h1>
                  <div className="span flex">
                    <span>12%</span>
                    <span>increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container mx-10">
          <div className="card m-0 h-40 w-52 rounded-sm border bg-white shadow-lg">
            <div className="p-5">
              <span className="text-2xl font-medium text-blue-700">
                Present
              </span>
              <span> | Today</span>
              <div className="circle-description flex">
                <div className="circle my-2 h-16 w-16 rounded-full bg-slate-300"></div>
                <div className="description flex flex-col px-1 py-3">
                  <h1 className="text-2xl font-medium text-blue-700">145</h1>
                  <div className="span flex">
                    <span>12%</span>
                    <span>increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container mx-10">
          <div className="card m-0 h-40 w-52 rounded-sm border bg-white shadow-lg">
            <div className="p-5">
              <span className="text-2xl font-medium text-blue-700">
                Present
              </span>
              <span> | Today</span>
              <div className="circle-description flex">
                <div className="circle my-2 h-16 w-16 rounded-full bg-slate-300"></div>
                <div className="description flex flex-col px-1 py-3">
                  <h1 className="text-2xl font-medium text-blue-700">145</h1>
                  <div className="span flex">
                    <span>12%</span>
                    <span>increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container row-span-2 mx-10">
          <div className="card m-0 h-96 w-80 rounded-sm border bg-white shadow-lg">
            <div className="p-5">
              <span className="text-2xl font-medium text-blue-700">
                Present
              </span>
              <span> | Today</span>
              <div className="circle-description flex">
                <div className="circle my-2 h-16 w-16 rounded-full bg-slate-300"></div>
                <div className="description flex flex-col px-1 py-3">
                  <h1 className="text-2xl font-medium text-blue-700">145</h1>
                  <div className="span flex">
                    <span>12%</span>
                    <span>increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="card-container col-span-3 mx-10 my-5 w-full">
          <div className="card m-0 h-80 rounded-sm border bg-white shadow-lg">
            <div className="p-5">
              <span className="text-2xl font-medium text-blue-700">Absent</span>
              <span> | Today</span>
              <div className="circle-description flex">
                <div className="circle my-2 h-16 w-16 rounded-full bg-slate-300"></div>
                <div className="description flex flex-col px-1 py-3">
                  <h1 className="text-2xl font-medium text-blue-700">145</h1>
                  <div className="span flex">
                    <span>12%</span>
                    <span>increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
