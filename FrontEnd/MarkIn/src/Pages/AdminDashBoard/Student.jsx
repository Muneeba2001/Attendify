import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const Student = () => {
    const [search, setSearch] = useState();
  return (
    
    <div className='bg-white rounded-md w-full' >
        <div className="heading p-5">
            <nav className='flex justify-between'>
                <h1 className='text-blue-900 font-bold text-2xl'>Current Student</h1>
                <input type="text" name="" id="" placeholder='Search' className='border-b-2 border-black'/>
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
  )
}

export default Student
