import React from "react";
import Header from "../../../Component/Header";
import { Button } from "@mui/material";
import Footer from "../../../Component/DashBoard/Footer";
import FeatureCards from "../../../Component/Cards/FeatureCards";

const Home = () => {
  return (
    <div className="w-full bg-white">
    <div className="relative h-screen w-full">
      {/* Header with z-10 so it stays above the image */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Background image */}
      <img
        src="assets/fitness.jpg"
        alt="Main Display"
        className="absolute left-0 top-0 h-full w-full object-cover z-0"
      />

      {/* Transparent curved overlay using inline styles */}
      <div 
        className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50 z-10"
      />

      {/* Overlay content */}
      <div className="relative z-20 flex flex-col p-32 text-white">
        <h1 className="text-6xl font-bold">Welcome to Our Site</h1>
        <p className="my-2 w-1/2 text-lg">
          A comprehensive platform designed to simplify and streamline the
          process of tracking attendance. Whether you're managing students,
          employees, or team members, this system offers an intuitive interface
          for recording daily attendance, monitoring absences, and generating
          insightful reports. With real-time analytics, role-based access, and
          secure data handling, our system ensures accurate record-keeping and
          improved accountability. Make attendance management effortless,
          organized, and efficient — all in one place.
        </p>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "rgb(63, 81, 181)",
            color: "white",
            padding: "10px 20px",
            width: "130px",
            borderRadius: "4px",
          }}
        >
          Start with
        </Button>
      </div>
      </div>
      <FeatureCards/>
      <Footer/>
    </div>
  );
};

export default Home;