import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@mui/material';
import TrackBreadCrumb from '../../../Component/BreadCrumbs/TrackBreadCrumb';
import DataTable from '../../../components/DataTable'; // Update path as needed

// Mock data representing students and their attendance
const studentData = [
  { name: 'Ali', subject: 'Maths', section: 'A', date: '2024-08-10', status: 'Present' },
  { name: 'Sara', subject: 'Maths', section: 'A', date: '2024-08-10', status: 'Absent' },
  { name: 'Ahmed', subject: 'English', section: 'B', date: '2024-08-10', status: 'Present' },
  { name: 'Fatima', subject: 'Urdu', section: 'C', date: '2024-08-11', status: 'Present' },
];

const AttendanceSheet = () => {
  const [filteredData, setFilteredData] = useState([]);

  const filterData = (values) => {
    const formattedDate = values.date;
    const filtered = studentData.filter(
      (student) =>
        student.subject === values.subject &&
        student.section === values.section &&
        student.date === formattedDate
    );
    setFilteredData(filtered);
  };

  // Headers for DataTable
  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'subject', label: 'Subject' },
    { key: 'section', label: 'Section' },
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <>
      <TrackBreadCrumb />
      <div className="container bg-[#1e1e1e] text-white p-6 space-y-4 w-full">
        <Formik
          initialValues={{ subject: '', section: '', date: '' }}
          onSubmit={(values, { setSubmitting }) => {
            filterData(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-wrap gap-4 items-center">
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

              <Field
                type="date"
                name="date"
                id="date"
                className="ml-2 border border-gray-400 rounded-md px-2 py-1 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />

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

        {/* Render DataTable */}
        {filteredData.length > 0 ? (
          <DataTable
            headers={headers}
            data={filteredData}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        ) : (
          <p className="text-white mt-4">No data available for the selected criteria.</p>
        )}
      </div>
    </>
  );
};

export default AttendanceSheet;
