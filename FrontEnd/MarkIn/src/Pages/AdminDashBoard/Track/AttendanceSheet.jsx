import { Button } from "@mui/material";
import { Field, Formik, Form } from "formik";
import React from "react";

const AttendanceSheet = () => {
  return (
    <>
      <div className="bg-white w-full p-4 rounded-lg shadow-md">
       <div className="attendanceSheet w-full flex space-x-6">
       <div className="heading p-2 flex justify-center" >
          <h1 className=" text-gray-400">All Employees</h1>
        </div>
      
        <div className="selection mb-4">
          <Formik
            initialValues={{ employee: '' }} // Initial value for the employee field
            onSubmit={(values) => {
              console.log('Form Values:', values); // Handle form submission here
            }}
          >
            {() => (
              <Form>
                <div className="FormSelection flex space-x-7">
                <div className="mb-4">
                  <Field as="select" name="employee" className="border p-2 rounded ">
                    <option value="">Select an employee</option>
                    {/* Replace these options with dynamic data */}
                    <option value="1">Employee 1</option>
                    <option value="2">Employee 2</option>
                    <option value="3">Employee 3</option>
                  </Field>
                </div>
                {/* <Button type="submit" variant="contained" sx={{backgroundColor:"blueviolet", color:"white", height:"40px",}}>Submit</Button> */}
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="CheckBtns flex space-x-5">
          <Button variant="contained" sx={{backgroundColor:"#5218fa", color:"white",height:"40px" }}>Check In</Button>
          <Button variant="contained" sx={{backgroundColor:"red", color:"white",height:"40px" }}>Check Out</Button>
        </div>
       </div>
      </div>
    </>
  );
};

export default AttendanceSheet;
