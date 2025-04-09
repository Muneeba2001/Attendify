import React from 'react';
import { Form, Formik, Field } from 'formik';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-screen-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-lg">
          <div className="text flex flex-col justify-center items-center md:items-start">
            <h1 className="text-6xl text-gray-800  mb-2">Attendance</h1>
            <h1 className="text-6xl text-blue-800">for your business</h1>
          </div>
          <div className="forgetPasswordForm flex flex-col bg-white p-10 max-w-6xl">
            <Formik
              initialValues={{ email: '' }}
              onSubmit={(values) => {
                // handle form submission
                console.log(values);
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col">
                  <h1 className="text-6xl text-blue-900 mb-4">Forgot Password</h1>
                  <p className="text-gray-700 mb-4 font-bold">
                    Enter your email, and we'll send you a link to reset your password.
                  </p>
                  <div className="mb-4">
                    {/* <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label> */}
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    //   placeholder="Enter your email"
                    />
                  </div>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      backgroundColor: 'rgb(30 58 138)',
                      color: 'white',
                      marginBottom: '16px',
                      width: '20%'
                    }}
                  >
                    Submit
                  </Button>
                  <NavLink to="/UserAuth/Login" className="text-cyan-600 hover:underline">
                    Back to login
                  </NavLink>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
