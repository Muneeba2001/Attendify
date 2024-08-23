import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@mui/material';
import TrackBreadCrumb from '../../Component/TrackBreadCrumb';

// Mock data representing students and their attendance
const studentData = [
  { name: 'Ali', subject: 'Maths', section: 'A', date: '2024-08-10', status: 'Present' },
  { name: 'Sara', subject: 'Maths', section: 'A', date: '2024-08-10', status: 'Absent' },
  { name: 'Ahmed', subject: 'English', section: 'B', date: '2024-08-10', status: 'Present' },
  { name: 'Fatima', subject: 'Urdu', section: 'C', date: '2024-08-11', status: 'Present' },
  // Add more students as needed
];

const AttendanceSheet = () => {
  const [filteredData, setFilteredData] = useState([]);

  const filterData = (values) => {
    console.log('Filtering with values:', values); // Debugging
    // Ensure date format matches between form input and mock data
    const formattedDate = values.date;

    console.log('Formatted date:', formattedDate); // Debugging
    const filtered = studentData.filter(
      (student) =>
        student.subject === values.subject &&
        student.section === values.section &&
        student.date === formattedDate
    );

    console.log('Filtered data:', filtered); // Debugging
    setFilteredData(filtered);
  };

  return (
    <>
    <TrackBreadCrumb />
      {/* selection */}
      <div className="container bg-white p-6  space-y-4 w-full">
        <Formik
          initialValues={{ subject: '', section: '', date: '' }}
          onSubmit={(values, { setSubmitting }) => {
            console.log('Form values:', values); // Debugging
            filterData(values);
            setSubmitting(false); // Stop submitting
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col">
               
                <Field
                  as="select"
                  name="subject"
                  id="subject"
                  className="ml-2 border border-gray-400 rounded-md px-2 py-1 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select Subject
                  </option>
                  <option value="Maths">Maths</option>
                  <option value="English">English</option>
                  <option value="Urdu">Urdu</option>
                </Field>
              </div>

              <div className="flex flex-col">
              
                <Field
                  as="select"
                  name="section"
                  id="section"
                  className="ml-2 border border-gray-400 rounded-md px-2 py-1 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select Section
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </Field>
              </div>

              <div className="flex flex-col">
              
                <Field
                  type="date"
                  name="date"
                  id="date"
                  className="ml-2 border border-gray-400 rounded-md px-2 py-1 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: 'rgb(96,80,220)', color: 'white' }}
                disabled={isSubmitting}
                className="self-start"
              >
                Generate Sheet
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* display */}
      {filteredData.length > 0 ? (
        <table className="w-full mt-6 border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Subject</th>
              <th className="border border-gray-300 p-2">Section</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((student, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{student.name}</td>
                <td className="border border-gray-300 p-2">{student.subject}</td>
                <td className="border border-gray-300 p-2">{student.section}</td>
                <td className="border border-gray-300 p-2">{student.date}</td>
                <td className="border border-gray-300 p-2">{student.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available for the selected criteria.</p>
      )}
    </>
  );
};

export default AttendanceSheet;
