import { Formik, Form, Field } from "formik";
import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import LoginSchema from "../../../schema/form/Login";
import { useNavigate, NavLink } from "react-router-dom";
import Header from "../../../Component/Header";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const EmployeeLogin = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const result = await axios.post("http://localhost:3000/Login", {
        email: values.email,
        password: values.password,
      });
      toast.success("Login successful!", { autoClose: 1500 });
      setTimeout(() => {
        navigate("/AdminDashboard");
      }, 2000);
    } catch (err) {
      toast.error("Login failed. Please try again.");
      console.log(err);
    }
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen">
      <Header />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 py-8 text-white gap-8">
        {/* Left Column: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left p-6 md:p-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Attendance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400">
            for your business
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-xl mx-auto md:mx-0">
            Efficient attendance management is crucial for maintaining
            productivity and accountability in any business. By accurately
            tracking employee presence, you can ensure streamlined operations
            and better decision-making.
          </p>
        </div>

        {/* Right Column: Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-sm bg-[#1e1e1e] p-6 shadow-md">
            <Formik
              validationSchema={LoginSchema}
              onSubmit={onSubmit}
              initialValues={initialValues}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                      Username
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-sm border border-gray-600 bg-[#1e1e1e] p-2 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-300">
                      Password
                    </label>
                    <Field
                      id="password"
                      type="password"
                      name="password"
                      className="w-full rounded-sm border border-gray-600 bg-[#1e1e1e] p-2 text-white"
                    />
                  </div>

                  <div className="flex items-center">
                    <Field
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      className="mr-2"
                    />
                    <label htmlFor="rememberMe" className="text-sm text-gray-300">
                      Remember me
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#3f51b5",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "4px",
                      "&:hover": {
                        backgroundColor: "#303f9f"
                      }
                    }}
                    fullWidth
                  >
                    Sign in
                  </Button>

                  <div className="mt-4 text-sm text-gray-300">
                    <NavLink to="/UserAuth/ForgetPassword" className="text-blue-400 hover:underline">
                      Forget Password?
                    </NavLink>
                  </div>

                  <div className="mt-2 text-sm text-gray-300">
                    <p>
                      Don't have an account?{" "}
                      <NavLink to="/UserAuth/Register" className="text-cyan-400 hover:underline">
                        Register Here
                      </NavLink>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;
