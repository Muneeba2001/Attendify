import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../../../Component/BreadCrumbs/BreadCrumbs";
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
        employee._id === updatedEmployee._id ? updatedEmployee : employee,
      ),
    );
  };

  const handleDelete = async (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this employee!",
    );
    if (confirmation) {
      try {
        await axios.delete(`http://localhost:3000/DeleteEmployee/${id}`);
        fetchEmployees();
        toast.success("Employee data is successfully deleted", {
          autoClose: 800,
        });
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
    <div className="min-h-screen bg-[#121212] p-6 text-white">
      <h1 className="my-2 text-3xl font-bold">Employee</h1>

      <Breadcrumb
        basePath="/AdminDashBoard"
        labelMap={{ manage: "Manage", student: "Employee" }}
      />

      <div className="container mx-auto mt-5 rounded-lg bg-[#1e1e1e] p-4 shadow-md">
        <div className="mt-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold dark:text-white">
            Employee List
          </h2>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddEmployee}
            className="dark:invert"
          >
            Add Employee
          </Button>
        </div>

        <div className="dark:text-gray-200">
          <DataTable
            headers={headers}
            data={employees}
            onEdit={handleEditClick}
            onDelete={handleDelete}
          />
        </div>

        {showEditPopup && selectedEmployee && (
          <EditEmployee
            employee={selectedEmployee}
            onClose={handleClosePopup}
            onUpdate={handleEmployeeUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default Employee;
