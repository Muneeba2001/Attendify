import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeBreadCrumb from "../../../Component/BreadCrumbs/EmployeeBreadCrumb";
import EditEmployee from "./EditEmployee";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);

  useEffect(() => {
    fetchEmployees();
    handleDelete();
  }, []);

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setShowEditPopup(true);
  };

  const handleClosePopup = () => {
    setShowEditPopup(false);
    setSelectedEmployee(null);
  };

  // Update employee data in the list
  const handleEmployeeUpdate = (updatedEmployee) => {
    setEmployees((prevEmployees) => {
      // Create a new array with updated employee
      const updatedEmployees = prevEmployees.map(employee =>
        employee._id === updatedEmployee._id ? updatedEmployee : employee
      );

      console.log("Updated Employees Array:", updatedEmployees); // Debug
      return updatedEmployees;
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-800">Employee</h1>
      <EmployeeBreadCrumb />
      <div className="container mx-auto mt-5 bg-white p-4">
        <h1 className="mb-4 text-2xl font-bold">Employee List</h1>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-b px-4 py-2">#</th>
              <th className="border-b px-4 py-2">Name</th>
              <th className="border-b px-4 py-2">Email</th>
              <th className="border-b px-4 py-2">Phone Number</th>
              {/* <th className="border-b px-4 py-2">Password</th> */}
              <th className="border-b px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee, index) => (
                <tr key={employee._id}>
                  <td className="border-b px-4 py-2">{index + 1}</td>
                  <td className="border-b px-4 py-2">{employee.name}</td>
                  <td className="border-b px-4 py-2">{employee.email}</td>

                  <td className="border-b px-4 py-2">
                    <button className="text-blue-500 hover:underline" onClick={() => handleEditClick(employee)}>
                      Edit
                    </button> 
                    <button
                      className="ml-4 text-red-500 hover:underline"
                      onClick={() => handleDelete(employee._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border-b px-4 py-2 text-center">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {showEditPopup && selectedEmployee && (
          <EditEmployee
            employee={selectedEmployee}
            onClose={handleClosePopup}
            onUpdate={handleEmployeeUpdate}
          />
        )}
      </div>
    </>
  );
};

export default Employee;
