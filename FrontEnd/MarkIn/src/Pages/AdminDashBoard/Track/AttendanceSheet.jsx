import { Button } from "@mui/material";
import axios from "axios";
import { Field, Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import moment from "moment";

const AttendanceSheet = () => {
  const [attendees, setAttendees] = useState([]);
  const [isCheckInEnable, setIsCheckInEnable] = useState(true);
  const [isCheckOutEnable, setIsCheckOutEnable] = useState(false);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:3000/employees');
      setAttendees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleCheckIn = async (id) => {
    if (!id) return;
    
    try {
      const response = await axios.patch(`http://localhost:3000/EmployeeCheckIn/${id}`, {
        checkIn: moment().toISOString()
      });
      console.log('Check In Response:', response.data);
      fetchEmployees();
      setIsCheckInEnable(false);
      setIsCheckOutEnable(true);
    } catch (error) {
      console.error('Error checking in:', error);
    }
  };

  const handleCheckOut = async (id) => {
    if(!id) return;
    
    try {
      const response = await axios.patch(`http://localhost:3000/EmployeeCheckOut/${id}`, {
        checkOut: moment().toISOString()
      });
      console.log("Check Out Response:", response.data);
      fetchEmployees();
      setIsCheckInEnable(true);
      setIsCheckOutEnable(false);
    } catch (error) {
      console.error('Error checking out:', error);
    }
  }

  return (
    <>
      <div className="time flex justify-end mb-5 mt-5">
        <h1 className="text-gray-600">{moment().format('MMMM Do YYYY ')}</h1>
      </div>
      <div className="bg-white w-full p-4 rounded-lg shadow-md">
        <div className="attendanceSheet w-full flex space-x-6">
          <div className="heading p-2 flex justify-center">
            <h1 className="text-gray-400">All Employees</h1>
          </div>

          <div className="selection mb-4">
            <Formik
              initialValues={{ employee: '' }}
              onSubmit={(values) => {
                console.log('Form Values:', values);
              }}
            >
              {({ values }) => (
                <Form>
                  <div className="FormSelection flex space-x-7">
                    <div className="mb-4">
                      <Field as="select" name="employee" className="border p-2 rounded">
                        <option value="">Select an employee</option>
                        {attendees.length > 0 ? (
                          attendees.map((employee) => (
                            <option key={employee._id} value={employee._id}>
                              {employee.name}
                            </option>
                          ))
                        ) : (
                          <option>Not found in database</option>
                        )}
                      </Field>
                    </div>
                    <div className="CheckBtns flex space-x-5">
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "#5218fa", color: "white", height: "40px" }}
                        onClick={() => handleCheckIn(values.employee)}
                        disabled={!isCheckInEnable} // Enable/Disable logic for Check In
                      >
                        Check In
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "red", color: "white", height: "40px" }}
                        onClick={() => handleCheckOut(values.employee)}
                        disabled={!isCheckOutEnable} // Enable/Disable logic for Check Out
                      >
                        Check Out
                      </Button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-gray-400">Attendance Sheet</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Employee Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Check In</th>
              <th className="border p-2">Check Out</th>
            </tr>
          </thead>
          <tbody>
            {attendees.length > 0 ? (
              attendees.map((employee) => (
                <tr key={employee._id}>
                  <td className="border p-2">{employee.name}</td>
                  <td className="border p-2">{employee.email}</td>
                  <td className="border p-2">{employee.checkIn ? moment(employee.checkIn).format(' HH:mm a') : 'Not Updated Yet'}</td>
                  <td className="border p-2">{employee.checkOut ? moment(employee.checkOut).format(' HH:mm a') : 'Not Updated Yet'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border p-2 text-center">No data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AttendanceSheet;
