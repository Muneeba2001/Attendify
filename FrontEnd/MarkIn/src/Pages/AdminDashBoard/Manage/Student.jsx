import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import ManageBreadCrumb from "../../../Component/ManageBreadCrumb";
import { Button } from "@mui/material";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    _id: "",
    Student_name: "",
    course: "",
    email: "",
    username: "",
    password: "",
  });
  const [popupodel, setpopupodel] = useState(false);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await axios.get("http://localhost:3000/student");
      if (response.data.students) {
        setStudents(response.data.students);
      } else {
        setStudents([]);
      }
    } catch (error) {
      console.log("Error fetching: ", error);
    }
  };

  const handleStudent = async () => {
    console.log("New student data:", newStudent);
    try {
      let response;
      if (newStudent._id) {
        response = await handleEdit(newStudent._id);
      } else {
        response = await axios.post(
          "http://localhost:3000/student",
          newStudent,
        );
        setStudents([...students, response.data.students]);
        console.log("response data:", response.data.students);
      }
      setNewStudent({
        _id: "",
        Student_name: "",
        course: "",
        email: "",
        username: "",
        password: "",
      });
      setpopupodel(false);
    } catch (error) {
      console.log("Error adding data: ", error);
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await axios.put(
        ` http://localhost:3000/student/${id}`,
        newStudent,
      );
      setStudents(
        students.map((students) =>
          students._id === id ? response.data.students : students,
        ),
      );
      setNewStudent({
        _id: "",
        Student_name: "",
        course: "",
        email: "",
        username: "",
        password: "",
      });
      setpopupodel(false);
    } catch (error) {
      console.log("Error in editing: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/student/${id}`);
      setStudents(students.filter((student) => student._id !== id));
    } catch (error) {
      console.log("Error in deleting: ", error);
    }
  };

  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const onClose = () => {
    setpopupodel(false);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-4xl font-bold text-blue-700">Student</h1>
        <nav className="flex justify-between">
          <div>
            <ManageBreadCrumb />
          </div>
          <div>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#2962ff", color: "white" }}
              onClick={() => {
                setpopupodel(true);
              }}
            >
              Add Student
            </Button>
          </div>
        </nav>
      </div>
      <br /> <br />
      <div className="mt-0 w-full rounded-md bg-white">
        <div className="heading p-5">
          <nav className="flex justify-between">
            <h1 className="text-2xl font-bold text-blue-900">
              Current Student
            </h1>
            <input
              type="text"
              placeholder="Search"
              className="border-b-2 border-black"
            />
          </nav>
        </div>
        <div className="table w-full p-4">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="w-full bg-gray-200">
                <th className="border-b px-4 py-2">#</th>
                <th className="border-b px-4 py-2">Student Name</th>
                <th className="border-b px-4 py-2">Course</th>
                <th className="border-b px-4 py-2">Email</th>
                <th className="border-b px-4 py-2">Username</th>
                <th className="border-b px-4 py-2">Password</th>
                <th className="border-b px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {students && students.length > 0 ? (
                students.map((student, index) => (
                  <tr key={index}>
                    <td className="border-b px-4 py-2">{index + 1}</td>
                    <td className="border-b px-4 py-2">
                      {student.Student_name}
                    </td>
                    <td className="border-b px-4 py-2">{student.course}</td>
                    <td className="border-b px-4 py-2">{student.email}</td>
                    <td className="border-b px-4 py-2">{student.username}</td>
                    <td className="border-b px-4 py-2">{student.password}</td>
                    <td>
                      <div className="icons flex space-x-3">
                        <button>
                          <FaEdit
                            title="edit"
                            onClick={() => {
                              setNewStudent(student);
                              setpopupodel(true);
                            }}
                            className="text-lg text-blue-700"
                          />
                        </button>
                        <button>
                          <FaTrash
                            title="delete"
                            onClick={() => handleDelete(student._id)}
                            className="text-lg text-red-900"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : students.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-4 text-center">
                    Loading students...
                  </td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="7" className="p-4 text-center">
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {popupodel && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-96 rounded-lg bg-white p-6 shadow-lg">
              <div className="heading flex items-center justify-between">
                <h2 className="mb-6 text-xl font-semibold text-blue-900">
                  Add New Student
                </h2>
                <Button
                  onClick={onClose}
                  sx={{ minWidth: "auto", padding: "8px" }}
                  className="absolute -top-3 right-3 text-gray-600 hover:text-gray-900"
                >
                  <FaTimes title="Close" />
                </Button>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Student Name"
                  name="Student_name"
                  onChange={handleInputChange}
                  value={newStudent.Student_name}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Course"
                  name="course"
                  onChange={handleInputChange}
                  value={newStudent.course}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleInputChange}
                  value={newStudent.email}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={newStudent.username}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={newStudent.password}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
                <div className="mt-4 flex justify-end space-x-3">
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#3393ff", color: "white" }}
                    onClick={handleStudent}
                  >
                    Add
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#ff3342", color: "white" }}
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Student;
