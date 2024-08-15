
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
// import Header from "../../Component/Header";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    e.preventDefault;
    const value = e.target.value;
    setSelected(value);
    if (value === 'teacher') {
      navigate('/UserAuth/Login'); // Redirect to teacher login page
    } else if (value === 'admin') {
      navigate('/UserAuth/AdminLogin'); // Redirect to admin login page
    }
  };

  return (
    <>
 
      <div className="container grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center items-start p-6 md:p-[100px] flex-wrap">
          <h1 className="text-4xl md:text-6xl text-gray-800">Attendance</h1>
          <h1 className="text-4xl md:text-6xl text-blue-900">for your business</h1>
          <p className="text-gray-600 mt-6 md:mt-8 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            eveniet cum doloremque, cumque sint expedita placeat magnam vero nulla
            iure corporis, amet a repellat nisi facere pariatur. Quaerat, nihil
            fugiat? Excepturi consequatur debitis nostr...
          </p>
        </div>

        {/* Right Column: Form */}
        <div className="flex justify-center items-center m-6 md:m-24">
          <div className="w-full max-w-md md:max-w-2xl bg-white p-6 md:p-10 rounded-sm shadow-md">
            <div className="links flex space-x-4 mb-4">
              {/* Links for Pages */}
              <div
                className={`flex items-center cursor-pointer ${selected === 'teacher' ? 'bg-blue-100' : ''}`}
                onClick={() => handleChange({ target: { value: 'teacher' } })}
              >
                <div className="outline outine-2 outline-blue-800 w-32 h-10 p-2 rounded-md">
                <input
                  type="radio"
                  value="teacher"
                  checked={selected === 'teacher'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <NavLink to="/UserAuth/Login" className="text-blue-800">
                  Teacher
                </NavLink>
                </div>
              </div>
              <div
                className={`flex items-center cursor-pointer ${selected === 'admin' ? 'bg-blue-100' : ''}`}
                onClick={() => handleChange({ target: { value: 'admin' } })}
              >
                <div className="outline outine-2 outline-blue-800 w-32 h-10 p-2 rounded-md">
                <input
                  type="radio"
                  value="admin"
                  checked={selected === 'admin'}
                  onChange={handleChange}
                  className="mr-2"
                 
                />
                <NavLink to="/UserAuth/AdminLogin" className="text-blue-800">
                  Admin
                </NavLink>
              </div>
                </div>
            </div>
            <Formik
              initialValues={{ username: "", password: "", rememberMe: false }}
              onSubmit={(values) => {
                console.log("Form is submitted", values);
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700 mb-2 md:mb-4"
                    >
                      Username
                    </label>
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      className="border p-2 w-full rounded-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-2 md:mb-4"
                    >
                      Password
                    </label>
                    <Field
                      id="password"
                      type="password"
                      name="password"
                      className="border p-2 w-full rounded-sm"
                    />
                  </div>

                  <div className="flex items-center">
                    <Field
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      className="mr-2"
                    />
                    <label
                      htmlFor="rememberMe"
                      className="text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "rgb(63, 81, 181)",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "4px",
                    }}
                  >
                    Sign in
                  </Button>

                  <div className="text-sm text-gray-700 mt-4">
                    {/* <p className="text-gray-600">Forget Password</p> */}
                    <NavLink to = "/UserAuth/AdminForgetPassword" className="text-gray-600" >Forget Password?</NavLink>
                  </div>

                  <div className="text-sm mt-2">
                    <p>
                      Don't have an account?{" "}
                      <NavLink to="/Register" className="text-cyan-500">
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
    </>
  );
};

export default AdminLogin;
