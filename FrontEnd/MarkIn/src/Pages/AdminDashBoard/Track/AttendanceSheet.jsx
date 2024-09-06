import { Button } from "@mui/material";
import axios from "axios";
import { Field, Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import moment from "moment";

const AttendanceSheet = () => {
  const [attendees, setAttendees] = useState([]); // 1. List of all employees
  const [selectedEmployee, setSelectedEmployee] = useState(''); // 2. ID of the selected employee
  const [employeeStatus, setEmployeeStatus] = useState({
    isCheckInEnable: true,
    isCheckOutEnable: false
  });

  // 3. Fetch employees from the server
  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:3000/employees');
      setAttendees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  useEffect(() => {
    fetchEmployees(); // Fetch data when component mounts
  }, []);

  useEffect(() => {
    // 4. Update button statuses based on selected employee
    const employee = attendees.find(emp => emp._id === selectedEmployee);
    if (employee) {
      const isCheckedIn = employee.checkIn && !employee.checkOut;
      setEmployeeStatus({
        isCheckInEnable: !isCheckedIn,
        isCheckOutEnable: isCheckedIn
      });
    } else {
      setEmployeeStatus({
        isCheckInEnable: true,
        isCheckOutEnable: false
      });
    }
  }, [selectedEmployee, attendees]);

  const handleCheckIn = async (id) => {
    if (!id) return;

    try {
      const response = await axios.patch(`http://localhost:3000/EmployeeCheckIn/${id}`, {
        checkIn: moment().toISOString()
      });
      console.log('Check In Response:', response.data);
      fetchEmployees(); // Refresh employee data
      setEmployeeStatus({
        isCheckInEnable: false,
        isCheckOutEnable: true
      });
    } catch (error) {
      console.error('Error checking in:', error);
    }
  };

  const handleCheckOut = async (id) => {
    if (!id) return;

    try {
      const response = await axios.patch(`http://localhost:3000/EmployeeCheckOut/${id}`, {
        checkOut: moment().toISOString()
      });
      console.log("Check Out Response:", response.data);
      fetchEmployees(); // Refresh employee data
      setEmployeeStatus({
        isCheckInEnable: true,
        isCheckOutEnable: false
      });
    } catch (error) {
      console.error('Error checking out:', error);
    }
  };

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
                      <Field
                        as="select"
                        name="employee"
                        className="border p-2 rounded"
                        value = {selectedEmployee}
                        onChange={(e) => {
                          const { value } = e.target;
                          setSelectedEmployee(value); // 5. Update selected employee
                        }}
                      >
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
                        onClick={() => handleCheckIn(selectedEmployee)}
                        disabled={!employeeStatus.isCheckInEnable} // 6. Enable/Disable Check In button
                      >
                        Check In
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "red", color: "white", height: "40px" }}
                        onClick={() => handleCheckOut(selectedEmployee)}
                        disabled={!employeeStatus.isCheckOutEnable} // 7. Enable/Disable Check Out button
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

      <div className="mt-4 bg-white rounded-md p-4 shadow-md">
        <h1 className="text-blue-800 p-4 text-3xl font-semibold">Attendance Sheet</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Employee Name</th>
              <th className="border p-2 text-left">Email</th>
              <th className="border p-2 text-left">Check In</th>
              <th className="border p-2 text-left">Check Out</th>
            </tr>
          </thead>
          <tbody>
            {attendees.length > 0 ? (
              attendees.map((employee) => (
                <tr key={employee._id}>
                  <td className="border p-2">{employee.name}</td>
                  <td className="border p-2">{employee.email}</td>
                  <td className="border p-2">{employee.checkIn ? moment(employee.checkIn).format('MMMM DD YYYY HH:mm a') : 'Not Updated Yet'}</td>
                  <td className="border p-2">{employee.checkOut ? moment(employee.checkOut).format('MMMM DD YYYY HH:mm a') : 'Not Updated Yet'}</td>
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

