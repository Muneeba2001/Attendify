// pages/Student.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import ManageBreadCrumb from "../../../../Component/BreadCrumbs/ManageBreadCrumb";
import { Button } from "@mui/material";
import PopupForm from "../../../../Component/PopupModal/PopupForm";
import DataTable from "../../../../Component/DataTable/DataTable";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [studentData, setStudentData] = useState({
    _id: "",
    Student_name: "",
    course: "",
    email: "",
    username: "",
    password: "",
  });

  const studentFields = [
    { name: "Student_name", placeholder: "Student Name" },
    { name: "course", placeholder: "Course" },
    { name: "email", placeholder: "Email", type: "email" },
    { name: "username", placeholder: "Username" },
    { name: "password", placeholder: "Password", type: "password" },
  ];

  const tableHeaders = [
    { key: "Student_name", label: "Student Name" },
    { key: "course", label: "Course" },
    { key: "email", label: "Email" },
    { key: "username", label: "Username" },
    { key: "password", label: "Password" },
  ];

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:3000/student");
      setStudents(res.data.students || []);
    } catch (error) {
      console.error("Error fetching students", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (studentData._id) {
        const res = await axios.put(
          `http://localhost:3000/student/${studentData._id}`,
          studentData
        );
        setStudents((prev) =>
          prev.map((s) => (s._id === studentData._id ? res.data : s))
        );
      } else {
        const res = await axios.post("http://localhost:3000/student", studentData);
        setStudents([...students, res.data.student]);
      }
      setPopupOpen(false);
      setStudentData({
        _id: "",
        Student_name: "",
        course: "",
        email: "",
        username: "",
        password: "",
      });
    } catch (error) {
      console.error("Error saving student", error);
    }
  };

  const handleEdit = (student) => {
    setStudentData(student);
    setPopupOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/student/${id}`);
      setStudents(students.filter((s) => s._id !== id));
    } catch (error) {
      console.error("Error deleting student", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-blue-700">Students</h1>
      <ManageBreadCrumb />
      <div className="container mx-auto mt-5 bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mt-4">
      <h2 className="text-2xl font-bold">Student List</h2>
        <Button
          variant="contained"
          onClick={() => setPopupOpen(true)}
          sx={{ backgroundColor: "#2962ff" }}
        >
          Add Student
        </Button>
      </div>

      <DataTable
        headers={tableHeaders}
        data={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <PopupForm
        title="Student Form"
        isOpen={popupOpen}
        fields={studentFields}
        values={studentData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClose={() => setPopupOpen(false)}
      />
    </div>
    </div>
  );
};

export default Student;
