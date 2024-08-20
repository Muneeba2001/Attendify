import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    Student_name: "",
    course: "",
    email: "",
    username: "",
    password: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  // Fetch all students when the component loads
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/student");
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleAddStudent = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/student",
        newStudent,
      );
      setStudents([...students, response.data.student]);
      setShowPopup(false);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  return (
    <div className="container bottom-10 flex items-center justify-center">
      <div className="w-full rounded-md bg-white">
        <div className="heading p-5">
          <nav className="flex justify-between">
            <h1 className="text-2xl font-bold text-blue-900">
              Current Students
            </h1>
            <button
              onClick={() => setShowPopup(true)}
              className="mt-5 w-32 rounded bg-blue-800 py-2 text-lg font-semibold text-white transition-transform duration-300 ease-in-out hover:scale-90 hover:bg-blue-800"
            >
              Add Student
            </button>
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
              <tr className="bg-gray-200">
                <th className="p-2">#</th>
                <th className="p-2">Student Name</th>
                <th className="p-2">Course</th>
                <th className="p-2">Email</th>
                <th className="p-2">Username</th>
                <th className="p-2">Password</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student._id}>
                  <td>{index + 1}</td>
                  <td>{student.Student_name}</td>
                  <td>{student.course}</td>
                  <td>{student.email}</td>
                  <td>{student.username}</td>
                  <td>{student.password}</td>
                  <td>
                    <div className="icons flex space-x-3">
                      <button>
                        <FaEdit
                          title="edit"
                          className="text-lg text-blue-700"
                        />
                      </button>
                      <button>
                        <FaTrash
                          title="delete"
                          className="text-lg text-red-900"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showPopup && (
        <div className="popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="popup-inner w-1/3 rounded bg-white p-5 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">Add New Student</h2>
            <input
              type="text"
              name="Student_name"
              placeholder="Student Name"
              onChange={handleInputChange}
              className="mb-2 w-full border p-2"
            />
            <input
              type="text"
              name="course"
              placeholder="Course"
              onChange={handleInputChange}
              className="mb-2 w-full border p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              className="mb-2 w-full border p-2"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleInputChange}
              className="mb-2 w-full border p-2"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              className="mb-2 w-full border p-2"
            />
            <div className="flex justify-end">
              <button
                onClick={handleAddStudent}
                className="mr-2 rounded bg-blue-800 px-4 py-2 text-white"
              >
                Save
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="rounded bg-gray-400 px-4 py-2 text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Student;
