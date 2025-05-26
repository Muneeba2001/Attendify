import React from "react";
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import registerSchema from "../../../schema/form/Register";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../../Component/Header";

const initialValues = {
  name: "",
  email: "",
  phone_number: "",
  password: "",
  confirm_password: "",
};

const EmployeeRegister = () => {
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
        toast.success("Register Successfully", {
          autoClose: 800,
        });
        setTimeout(() => {
          navigate("/AdminDashBoard");
        }, 800);
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
        <div className="bg-[#0f0f0f] min-h-screen">
          <Header />

          <div className="Register flex min-h-screen items-center justify-center bg-[#0f0f0f] text-white px-4 py-10">
            <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-10">
              {/* Left Text Section */}
              <div className="flex flex-col justify-center text-center w-full lg:w-[45%] lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl">Attendance</h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-500 dark:text-blue-300">
                  for your business
                </h1>
                <p className="mt-6 text-sm text-white">
                  Efficient attendance management is crucial for maintaining
                  productivity and accountability in any business. By accurately
                  tracking employee presence, you can ensure streamlined
                  operations and better decision-making.
                </p>
              </div>

              {/* Right Register Form */}
              <Form className="flex w-full flex-col rounded-sm border border-[#1e1e1e] bg-[#1e1e1e] dark:bg-gray-900 p-6 sm:p-8 shadow-lg lg:w-[55%]">
                <h2 className="mb-8 text-center text-2xl font-bold text-white">
                  Register
                </h2>

                {["name", "email", "phone_number", "password", "confirm_password"].map((fieldName, index) => {
                  const labels = {
                    name: "Full Name",
                    email: "Email",
                    phone_number: "Phone Number",
                    password: "Password",
                    confirm_password: "Confirm Password",
                  };
                  return (
                    <div key={index} className="relative mt-4">
                      <label className="text-white">{labels[fieldName]}</label>
                      <Field
                        type={
                          fieldName.includes("password")
                            ? "password"
                            : fieldName === "phone_number"
                            ? "number"
                            : "text"
                        }
                        name={fieldName}
                        className={`w-full rounded-sm border p-2 text-lg bg-[#0f0f0f] text-white dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                          errors[fieldName] && touched[fieldName]
                            ? "border-red-500"
                            : "border-[#0f0f0f]"
                        }`}
                      />
                      <ErrorMessage
                        name={fieldName}
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                  );
                })}

                {/* <div className="checkbox mt-4 flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Field type="checkbox" name="keep_signin" id="keep_signin" />
                  <label htmlFor="keep_signin">Keep me signed in</label>
                </div> */}

                <div className="btn mt-6 flex flex-col items-center">
                  <button
                    type="submit"
                    className="w-full rounded bg-blue-800 py-2 text-lg font-semibold text-white transition-transform duration-300 hover:scale-95 hover:bg-blue-900"
                  >
                    Register
                  </button>
                  {/* <p className="mt-4 text-gray-700 dark:text-gray-300">
                    Already have an account?{" "}
                    <NavLink
                      to="/UserAuth/Login"
                      className="text-blue-700 dark:text-blue-400 hover:underline"
                    >
                      Please LogIn
                    </NavLink>
                  </p> */}
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default EmployeeRegister;
