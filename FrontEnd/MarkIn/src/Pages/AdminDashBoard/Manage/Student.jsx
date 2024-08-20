import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const Student = () => {
    const [search, setSearch] = useState();
  return (
    <div className='bg-white rounded-md w-full' >
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
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Student;
