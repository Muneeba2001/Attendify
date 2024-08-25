import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeBreadCrumb from "../../../Component/BreadCrumbs/EmployeeBreadCrumb";

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
    handleDelete();
  }, []);

  // Fetch employee data from the server
  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:3000/employees");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  // Update employee details
  // const handleUpdate = async (id, name, email, phone_number) => {
  //   const updatedDetails = {
  //     name, // Replace with actual data
  //     email, // Replace with actual data
  //     phone_number, // Replace with actual data
  //   };
  //   try {
  //     await axios.put(`http://localhost:3000/employees/${id}`, updatedDetails);
  //     fetchEmployees(); // Refresh the employee list after update
  //   } catch (error) {
  //     console.error("Error updating employee:", error);
  //   }
  // };

  // Delete an employee
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/employees/${id}`);
      fetchEmployees(); // Refresh the employee list after deletion
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <>
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
                    {employee.phone_number}
                  </td>
                  {/* <td className="border-b px-4 py-2">{employee.password}</td> */}
                  <td className="border-b px-4 py-2">
                    {/* <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleUpdate(employee._id)}
                    >
                      Edit
                    </button> */}
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
      </div>
    </>
  );
};

export default Employee;
