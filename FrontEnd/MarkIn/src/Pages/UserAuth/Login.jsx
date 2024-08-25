import { Formik, Form, Field } from "formik";
import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import LoginSchema from "../../schema/form/Login";
import { useNavigate, NavLink } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const LoginPage = () => { // Renamed component
  const navigate = useNavigate();

  const onSubmit = (values) => {
    axios
      .post("http://localhost:3000/Login", {
        email: values.email,
        password: values.password,
      })
      .then((result) => {
        console.log(result);
        navigate("/AdminDashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center p-6 md:p-[100px]">
          <h1 className="text-4xl text-gray-800 md:text-6xl">Attendance</h1>
          <h1 className="text-4xl text-blue-900 md:text-6xl">
            for your business
          </h1>
          <p className="mt-6 text-sm text-gray-600 md:mt-8 md:text-base">
            Efficient attendance management is crucial for maintaining
            productivity and accountability in any business. By accurately
            tracking employee presence, you can ensure streamlined operations
            and better decision-making.
          </p>
        </div>

        {/* Right Column: Form */}
        <div className="flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md rounded-sm bg-white p-6 shadow-md md:max-w-lg">
            <Formik
              validationSchema={LoginSchema}
              onSubmit={onSubmit}
              initialValues={initialValues}
            >
              {({ handleSubmit }) => (
                <Form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-sm border border-gray-300 p-2"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <Field
                      id="password"
                      type="password"
                      name="password"
                      className="w-full rounded-sm border border-gray-300 p-2"
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
                    fullWidth
                  >
                    Sign in
                  </Button>

                  <div className="mt-4 text-sm text-gray-700">
                    <NavLink
                      to="/UserAuth/ForgetPassword"
                      className="text-gray-600"
                    >
                      Forget Password?
                    </NavLink>
                  </div>

                  <div className="mt-2 text-sm">
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
    </div>
  );
};

export default LoginPage; // Updated export
