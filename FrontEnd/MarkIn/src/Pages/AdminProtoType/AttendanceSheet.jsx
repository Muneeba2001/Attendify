import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@mui/material';

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
      {/* selection */}
      <Formik
        initialValues={{ subject: '', section: '', date: '' }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Form values:', values); // Debugging
          filterData(values);
          setSubmitting(false); // Stop submitting
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="subject">Subject</label>
            <Field as="select" name="subject" id="subject">
              <option value="" disabled>
                Select Subject
              </option>
              <option value="Maths">Maths</option>
              <option value="English">English</option>
              <option value="Urdu">Urdu</option>
            </Field>

            <label htmlFor="section">Section</label>
            <Field as="select" name="section" id="section">
              <option value="" disabled>
                Select Section
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </Field>

            <label htmlFor="date">Date</label>
            <Field type="date" name="date" id="date" />

            <Button
              type="submit"
              variant="contained"
            //   rgb(96,80,220)
            // rgb(82,24,250)
              sx={{ backgroundColor: 'rgb(96,80,220)', color: 'white' }}
              disabled={isSubmitting}
            >
              Generate Sheet
            </Button>
          </Form>
        )}
      </Formik>

      {/* display */}
      {filteredData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Section</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.subject}</td>
                <td>{student.section}</td>
                <td>{student.date}</td>
                <td>{student.status}</td>
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
