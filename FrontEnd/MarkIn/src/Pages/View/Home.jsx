import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Footer from "../../Component/DashBoard/Footer";
import FeatureCards from "../../Component/Cards/FeatureCards";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setOpenModal(true); // Open role selection modal
  };

  const handleRoleSelection = (role) => {
    setOpenModal(false);
    const isLoggedIn = localStorage.getItem("token");

    if (isLoggedIn) {
      // Redirect to dashboard based on role
      if (role === "student") {
        navigate("/student/login");
      } else if (role === "employee") {
        navigate("/employee/login");
      }
    } else {
      // Redirect to login page based on role
      if (role === "student") {
        navigate("/student/login");
      } else if (role === "employee") {
        navigate("/employee/login");
      }
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="relative h-screen w-full">
        <div className="relative z-20">
           <div className="">
                <nav className="relative z-10 flex justify-between items-center rounded-sm bg-white  text-blue-800 p-2 pl-10 shadow-lg">
                  <h1 className="text-2xl font-bold">
                           <NavLink to="/">Attendify</NavLink>
                         </h1>
                </nav>
              </div>
        </div>

        <img
          src="assets/fitness.jpg"
          alt="Main Display"
          className="absolute left-0 top-0 z-0 h-full w-full object-cover"
        />

        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black bg-opacity-50" />

        <div className="relative z-20 flex flex-col p-32 text-white">
          <h1 className="text-6xl font-bold">Welcome to Our Site</h1>
          <p className="my-2 w-1/2 text-lg">
            A comprehensive platform designed to simplify and streamline the
            process of tracking attendance. Whether you're managing students,
            employees, or team members, this system offers an intuitive
            interface for recording daily attendance, monitoring absences, and
            generating insightful reports. With real-time analytics, role-based
            access, and secure data handling, our system ensures accurate
            record-keeping and improved accountability. Make attendance
            management effortless, organized, and efficient — all in one place.
          </p>
          <Button
            onClick={handleGetStarted}
            variant="contained"
            sx={{
              backgroundColor: "rgb(63, 81, 181)",
              color: "white",
              padding: "10px 20px",
              width: "150px",
              borderRadius: "4px",
            }}
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="w-full max-w-md scale-100 transform rounded-2xl bg-white p-8 shadow-2xl transition-all duration-300">
            <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
              Select Your Role
            </h2>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleRoleSelection("student")}
                className="w-full rounded-full bg-indigo-600 px-6 py-3 text-white shadow-md transition duration-200 hover:bg-indigo-700"
              >
                I'm a Student
              </button>

              <button
                onClick={() => handleRoleSelection("employee")}
                className="w-full rounded-full bg-blue-600 px-6 py-3 text-white shadow-md transition duration-200 hover:bg-blue-700"
              >
                I'm an Employee
              </button>
            </div>

            <button
              onClick={() => setOpenModal(false)}
              className="mt-6 w-full text-sm text-gray-500 transition hover:text-red-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <FeatureCards />
      <Footer />
    </div>
  );
};

export default Home;
