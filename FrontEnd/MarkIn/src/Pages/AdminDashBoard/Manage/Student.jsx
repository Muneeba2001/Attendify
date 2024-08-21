import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import ManageBreadCrumb from "../../../Component/ManageBreadCrumb";
import { Button } from "@mui/material";


const Student = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
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
      setStudents(response.data.students);
    } catch (error) {
      console.log("Error fetching: ", error);
    }
  };

  const handleStudent = async () => {
    console.log("New student data:", newStudent);
    try {
      const response = await axios.post(
        "http://localhost:3000/student",
        newStudent,
      );

      setStudents([...students, response.data.students]);
      console.log("response data:", response.data.students);
      setpopupodel(false);
    } catch (error) {
      console.log("Error adding data: ", error);
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
    <div className="container mt-44">
      <h1 className='text-4xl text-blue-700 font-bold'>Student</h1>
      <nav className='flex justify-between'>
        <div>
          <ManageBreadCrumb/>
        </div>
        <div>
          <Button
          variant='contained'
          sx={{backgroundColor:'#2962ff',
            color: 'white'
          }}
          onClick={()=> {setSubjectModal (true)}}
          >
            Add Subject 
          </Button>
          {/* {subjectModal && <AddSubjectModal onClose = {()=> {setSubjectModal(false)}}/>} */}
        </div>
      </nav>
    </div>
    <br /> <br />
    <div className='bg-white rounded-md w-full' >
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
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='p-2'>#</th>
              <th className='p-2'>Student Name</th>
              <th className='p-2'>Course</th>
              <th className='p-2'>email</th>
              <th className='p-2'>username</th>
              <th className='p-2'>password</th>
              <th className='p-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows would go here */}
            <tr>
                <td>1</td>
                <td>Maryam</td>
                <td>BSCS</td>
                <td>maryams91101@gmail.com</td>
                <td>Maryam saba</td>
                <td>12345</td>
                <td>
                    <div className='icons flex space-x-3'>
                    <button><FaEdit title='edit' className='text-blue-700 text-lg'/></button>
                    <button>< FaTrash title='delete' className='text-red-900 text-lg'/></button>
                    </div>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Student;
