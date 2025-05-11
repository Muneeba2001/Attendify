import { Button } from "@mui/material";
import axios from "axios";
import { Field, Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import moment from "moment";
import DataTable from "../../../../Component/DataTable/DataTable";

const AttendanceSheet = () => {
  const [attendees, setAttendees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [employeeStatus, setEmployeeStatus] = useState({
    isCheckInEnable: true,
    isCheckOutEnable: false,
  });

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:3000/employees");
      setAttendees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  useEffect(() => {
    const employee = attendees.find((emp) => emp._id === selectedEmployee);
    if (employee) {
      const isCheckedIn = employee.checkIn && !employee.checkOut;
      setEmployeeStatus({
        isCheckInEnable: !isCheckedIn,
        isCheckOutEnable: isCheckedIn,
      });
    } else {
      setEmployeeStatus({
        isCheckInEnable: true,
        isCheckOutEnable: false,
      });
    }
  }, [selectedEmployee, attendees]);

  const handleCheckIn = async (id) => {
    if (!id) return;
    try {
      await axios.patch(`http://localhost:3000/EmployeeCheckIn/${id}`, {
        checkIn: moment().toISOString(),
      });
      fetchEmployees();
      setEmployeeStatus({ isCheckInEnable: false, isCheckOutEnable: true });
    } catch (error) {
      console.error("Error checking in:", error);
    }
  };

  const handleCheckOut = async (id) => {
    if (!id) return;
    try {
      await axios.patch(`http://localhost:3000/EmployeeCheckOut/${id}`, {
        checkOut: moment().toISOString(),
      });
      fetchEmployees();
      setEmployeeStatus({ isCheckInEnable: true, isCheckOutEnable: false });
    } catch (error) {
      console.error("Error checking out:", error);
    }
  };

  const columns = [
    { label: "Employee Name", key: "name" },
    { label: "Email", key: "email" },
    {
      label: "Check In",
      key: "checkIn",
      Cell: ({ value }) =>
        value
          ? moment(value).format("MMMM DD YYYY hh:mm A")
          : "Not Updated Yet",
    },
    {
      label: "Check Out",
      key: "checkOut",
      Cell: ({ value }) =>
        value
          ? moment(value).format("MMMM DD YYYY hh:mm A")
          : "Not Updated Yet",
    },
  ];

  const data = attendees.map((emp) => ({
    ...emp,
    checkIn: emp.checkIn,
    checkOut: emp.checkOut,
  }));

  return (
    <div className="dark min-h-screen bg-[#121212] p-4 text-white">
      <div className="mb-5 flex justify-end">
        <h1 className="text-lg font-medium text-gray-300">
          {moment().format("MMMM Do YYYY")}
        </h1>
      </div>

      <div className="mb-6 rounded-lg bg-[#1e1e1e] p-4 shadow-lg">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="text-xl font-semibold text-gray-400">All Employees</h2>
          <Formik initialValues={{ employee: "" }} onSubmit={() => {}}>
            {() => (
              <Form className="flex flex-col items-center gap-4 sm:flex-row">
                <Field
                  as="select"
                  name="employee"
                  className="rounded border border-gray-600 bg-gray-800 p-2 text-white"
                  value={selectedEmployee}
                  onChange={(e) => setSelectedEmployee(e.target.value)}
                >
                  <option value="">Select an employee</option>
                  {attendees.length > 0 ? (
                    attendees.map((emp) => (
                      <option key={emp._id} value={emp._id}>
                        {emp.name}
                      </option>
                    ))
                  ) : (
                    <option disabled>No employees found</option>
                  )}
                </Field>
                <div className="flex gap-3">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#5218fa",
                      color: "white",
                      height: "40px",
                    }}
                    onClick={() => handleCheckIn(selectedEmployee)}
                    disabled={!employeeStatus.isCheckInEnable}
                  >
                    Check In
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "red",
                      color: "white",
                      height: "40px",
                    }}
                    onClick={() => handleCheckOut(selectedEmployee)}
                    disabled={!employeeStatus.isCheckOutEnable}
                  >
                    Check Out
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="rounded-lg bg-[#1e1e1e] p-4 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-white">Attendance Sheet</h2>
        <DataTable headers={columns} data={data} />
      </div>
    </div>
  );
};

export default AttendanceSheet;
