import React from "react";
import { useFormik } from "formik";
import registerSchema from "../schema/form";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Register = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div className="Register flex min-h-screen items-center justify-center bg-slate-200 p-6">
      <form
        onSubmit={handleSubmit}
        action=""
        className="container flex w-full max-w-md flex-col rounded-sm border border-gray-300 bg-white p-8 shadow-lg"
      >
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            Register
          </h2>

          <div className="relative mt-5">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={values.name}
              className={`w-full rounded-sm border p-3 pl-10 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                errors.name && touched.name
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="relative mt-5">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              className={`w-full rounded-sm border p-3 pl-10 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="relative mt-5">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              className={`w-full rounded-sm border p-3 pl-10 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                errors.password && touched.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="relative mt-5">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={values.confirm_password}
              className={`w-full rounded-sm border p-3 pl-10 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                errors.confirm_password && touched.confirm_password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="checkbox mt-5 flex gap-2 text-gray-600">
            <input type="checkbox" name="keep_signin" id="keep_signin" />
            <label htmlFor="keep_signin">Keep me signed in</label>
          </div>
          <div className="btn flex items-center justify-center">
            <button
              type="submit"
              className="mt-8 w-1/2 rounded-sm bg-black py-3 text-lg font-semibold text-white transition-transform duration-300 ease-in-out hover:scale-90 hover:bg-zinc-800"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
