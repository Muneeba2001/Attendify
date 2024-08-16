import React from "react";
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import registerSchema from "../schema/form/Register";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  phone_number: "",
  password: "",
  confirm_password: "",
};

const Register = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    axios
      .post("http://localhost:3000/Register", {
        name: values.name,
        email: values.email,
        phone_number: values.phone_number,
        password: values.password,
        confirmPassword: values.confirm_password,
      })
      .then((result) => {
        console.log(result);
        navigate("/userAuth/Login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <>
          <div className="header w-full rounded-sm bg-white p-2 pl-10 text-2xl font-bold text-blue-900 shadow-lg">
            <NavLink to="/Home">Attendify</NavLink>
          </div>

          <div className="Register flex min-h-screen items-center justify-center bg-slate-100 p-10">
            <div className="container flex flex-col-reverse md:flex-row md:gap-x-20">
              <div className="flex flex-col justify-center text-center md:w-[45%] md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl">Attendance</h1>
                <h1 className="text-4xl text-blue-950 md:text-5xl lg:text-6xl">
                  for your business
                </h1>
                <p className="mt-10 text-sm text-gray-700">
                  Efficient attendance management is crucial for maintaining
                  productivity and accountability in any business. By accurately
                  tracking employee presence, you can ensure streamlined
                  operations and better decision-making.
                </p>
              </div>
              <Form className="flex w-1/2 flex-col rounded-sm border border-gray-300 bg-white p-8 shadow-lg md:w-[55%]">
                <div>
                  <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
                    Register
                  </h2>
                  <div className="relative mt-5">
                    <label>Full Name</label>
                    <Field
                      type="text"
                      name="name"
                      className={`w-full rounded-sm border p-2 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                        errors.name && touched.name
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>
                  <div className="relative mt-5">
                    <label>Email</label>
                    <Field
                      type="email"
                      name="email"
                      className={`w-full rounded-sm border p-2 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  <div className="relative mt-5">
                    <label>Phone Number</label>
                    <Field
                      type="number"
                      name="phone_number"
                      className={`w-full rounded-sm border p-2 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                        errors.phone_number && touched.phone_number
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <ErrorMessage
                      name="phone_number"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  <div className="relative mt-5">
                    <label>Password</label>
                    <Field
                      id="password"
                      type="password"
                      name="password"
                      className={`w-full rounded-sm border p-2 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                        errors.password && touched.password
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  <div className="relative mt-5">
                    <label>Confirm Password</label>
                    <Field
                      type="password"
                      name="confirm_password"
                      className={`w-full rounded-sm border p-2 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                        errors.confirm_password && touched.confirm_password
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <ErrorMessage
                      name="confirm_password"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>
                  <div className="checkbox mt-5 flex gap-2 text-gray-600">
                    <Field
                      type="checkbox"
                      name="keep_signin"
                      id="keep_signin"
                    />
                    <label htmlFor="keep_signin">Keep me signed in</label>
                  </div>
                  <div className="btn flex flex-col">
                    <button
                      type="submit"
                      className="mt-5 w-32 rounded bg-blue-800 py-2 text-lg font-semibold text-white transition-transform duration-300 ease-in-out hover:scale-90 hover:bg-blue-800"
                    >
                      Register
                    </button>
                    <p className="mt-4">
                      Already have an account?{" "}
                      <span className="cursor-pointer text-blue-700">
                        <NavLink to="/UserAuth/Login">Please LogIn</NavLink>
                      </span>
                    </p>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

export default Register;
