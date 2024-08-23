import React, { useEffect, useState } from "react";
import axios from "axios";

import EmployeeBreadCrumb from "../../../Component/EmployeeBreadCrumb";

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee data from the server
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:3000/employees");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <>
      <EmployeeBreadCrumb />
      <div className="container mx-auto mt-52 p-4">
        <h1 className="mb-4 text-2xl font-bold">Employee List</h1>
        <table className="min-w-full border border-gray-200 bg-white">
          <thead>
            <tr className="w-full bg-gray-200">
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
                    <button className="text-blue-500 hover:underline">
                      Edit
                    </button>
                    <button className="ml-4 text-red-500 hover:underline">
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
