import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeBreadCrumb from "../../../Component/BreadCrumbs/EmployeeBreadCrumb";
import EditEmployee from "./EditEmployee";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:3000/employees");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setShowEditPopup(true);
  };

  const handleClosePopup = () => {
    setShowEditPopup(false);
    setSelectedEmployee(null);
  };

  const handleEmployeeUpdate = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee._id === updatedEmployee._id ? updatedEmployee : employee
      )
    );
  };
  

  const handleDelete = async(id) => {
    const confirmation = window.confirm("Are you sure you want to delete this employee!");
    if(confirmation)
    {
      try {
        await axios.delete(`http://localhost:3000/DeleteEmployee/${id}`);
      //refresh so it updates the page
    
      fetchEmployees();
      toast.success("Employee data is successfully deleted",{
        autoClose:800
      })
      } catch (error) {
        console.log("Error while deleting the employee's data!")
      }
    }
  }
  

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-800">Employee</h1>
      <EmployeeBreadCrumb />
      <div className="container mx-auto mt-5 bg-white p-4 rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Employee List</h1>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-b px-4 py-2">#</th>
              <th className="border-b px-4 py-2">Name</th>
              <th className="border-b px-4 py-2">Email</th>
              <th className="border-b px-4 py-2">Phone Number</th>
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
                  <td className="border-b px-4 py-2">{employee.phone_number}</td>
                  <td className="border-b px-4 py-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleEditClick(employee)}
                    >
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
