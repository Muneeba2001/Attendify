import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Import this
import EmployeeBreadCrumb from "../../../../../Component/BreadCrumbs/EmployeeBreadCrumb";
import EditEmployee from "./EditEmployee";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import DataTable from "../../../../../Component/DataTable/DataTable";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const navigate = useNavigate(); 

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

  const handleDelete = async (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this employee!");
    if (confirmation) {
      try {
        await axios.delete(`http://localhost:3000/DeleteEmployee/${id}`);
        fetchEmployees();
        toast.success("Employee data is successfully deleted", { autoClose: 800 });
      } catch (error) {
        console.log("Error while deleting the employee's data!");
      }
    }
  };

  const headers = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phone_number", label: "Phone Number" },
  ];

  const handleAddEmployee = () => {
    navigate("/employee/register");
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-800 my-2">Employee</h1>
      <EmployeeBreadCrumb />
      <div className="container mx-auto mt-5 bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Employee List</h2>
          <Button variant="contained" color="primary" onClick={handleAddEmployee}>
            Add Employee
          </Button>
        </div>

        <DataTable
          headers={headers}
          data={employees}
          onEdit={handleEditClick}
          onDelete={handleDelete}
        />

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
