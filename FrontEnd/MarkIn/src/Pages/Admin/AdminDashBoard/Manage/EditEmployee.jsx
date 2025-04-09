import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';

const EditEmployee = ({ employee, onClose, onUpdate }) => {
  const initialValues = {
    name: employee.name || '',
    email: employee.email || '',
    phone_number: employee.phone_number || ''
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.put(`http://localhost:3000/UpdateEmployee/${employee._id}`, {
        name: values.name,
        email: values.email,
        phone_number: values.phone_number
      });
      console.log("Update Response:", response.data); // Debug
      
    
        toast.success("Employee is updated successfully",{
            autoClose:800
        });
 
     
     onUpdate(response.data.Updation);
      onClose(); // Close the popup after submission

    } catch (error) {
      if (error.response) {
        console.error('Response error:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Request error:', error.request);
      } else {
        console.error('Axios setup error:', error.message);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg w-[500px]">
       <div className="selectedForm p-5 min-w-96">
       <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form>
            <h1 className='text-2xl mb-2'>Edit Employee</h1>
            <div className='m-2'> 
              <Field type="text" name="name" placeholder="Enter your name" className="w-full border border-gray-300 p-2" />
            </div>
            <div className="m-2">
              <Field type="email" name="email" placeholder="Enter your email" className="w-full border border-gray-300 p-2"  />
            </div>
            <div className="m-2"> 
              <Field type="text" name="phone_number" placeholder="Enter your phone number" className="w-full border border-gray-300 p-2" />
            </div>
            <div className='flex space-x-2 justify-end p-2'>
            <button type="submit" className='bg-blue-600 text-white w-24 h-10 rounded-md'>Submit</button>
            <button type="button" onClick={onClose} className='bg-red-700 text-white w-24 h-10 rounded-md'>Cancel</button>
            </div>
          </Form>
        </Formik>
       </div>
      </div>
    </div>
  );
};

export default EditEmployee;
