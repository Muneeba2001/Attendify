import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Button } from '@mui/material'
const AddSubjectModal = ({onClose}) => {
  return (
   <>
   {/* create pop up modal -> in order to get data at spot */}
   <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
    <div className="formBody bg-white h-96 w-96 relative rounded-md">
    <div className="crossButton  absolute top-2 right-2">
        {/* onClick={onClose} */}
        <Button onClick={onClose} >
        <FaTimes title='Close' className='' />
        </Button>
    </div>
    <div className="ModalForm  max-w-lg mt-10">
       <form action="" className=' flex flex-col p-2 m-2 space-x-4 space-y-4  '>
         {/* for Student name */}
        <input type="text" name="" id="" placeholder='enter your student name' className='h-5'/>
        {/* for course */}
        <input type="text" name="" id=""  placeholder='enter you course' />
         {/* username name */}
         <input type="text" name="" id="" placeholder='enter your username' />
        {/* for email */}
        <input type="email" name="" id=""  placeholder='enter your email'/>
        {/* for password */}
        <input type="password" name="" id="" placeholder='enter your password' />
       <div className="formButtons flex justify-end space-x-5">
       <Button variant='contained'
        sx={{backgroundColor:"blue", color: "white"}}>ADD</Button>
           <Button variant='contained'
        sx={{backgroundColor:"red", color: 'white'}}>CANCEL</Button>
       </div>
       </form>
    </div>
   </div>
   </div>
   </>
  )
}

export default AddSubjectModal
