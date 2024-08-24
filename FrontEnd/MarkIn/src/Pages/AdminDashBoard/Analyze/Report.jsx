import { Button } from '@mui/material';
import { Field, Formik, Form } from 'formik';
import { useState } from 'react';
import React from 'react';
import ReportBreadCrumb from '../../../Component/ReportBreadCrumb';


const Report = () => {
  const [reportData, setReportData] = useState(null);
  const keys = ['course', 'section', 'subject', 'month', 'year'];

  return (
    <>
     <div>
      <ReportBreadCrumb />
     </div>
      <Formik
        initialValues={{
          course: '',
          section: '',
          subject: '',
          month: '',
          year: '',
        }}
        onSubmit={(values) => {
          setReportData(values);
          console.log("The summary of the report is : ", values);
        }}
      >
        {({ handleSubmit }) => (
          <div className='Container flex flex-col justify-center items-center w-full'>
            <div className="selectionForm p-2 bg-white min-h-[100px] rounded-md flex justify-center items-center">
              <Form onSubmit={handleSubmit}>
                <div className="report ">
                  <div className="selectionForm w-full flex space-x-5">
                    {/* Course */}
                    <Field as="select" name="course" className=" p-2 border border-gray-300 rounded">
                      <option value="" disabled>Select Course</option>
                      <option value="BSCS">BSCS</option>
                      <option value="BS Maths">BS Maths</option>
                      <option value="BS Stats">BS Stats</option>
                    </Field>
                    {/* Section */}
                    <Field as="select" name="section" className=" p-2 border border-gray-300 rounded">
                      <option value="" disabled>Select Section</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                    </Field>
                    {/* Subject */}
                    <Field as="select" name="subject" className=" p-2 border border-gray-300 rounded">
                      <option value="" disabled>Select Subject</option>
                      <option value="Calculus">Calculus</option>
                      <option value="DSA">DSA</option>
                      <option value="Statistics">Statistics</option>
                    </Field>
                    {/* Month */}
                    <Field as="select" name="month" className=" p-2 border border-gray-300 rounded">
                      <option value="" disabled>Select Month</option>
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                    </Field>
                    {/* Year */}
                    <Field as="select" name="year" className=" p-2 border border-gray-300 rounded">
                      <option value="" disabled>Select Year</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </Field>

                    <Button
                      variant='contained'
                      sx={{ backgroundColor: "blueviolet", color: 'white' }}
                      type="submit"
                      
                    >
                      Generate Report
                    </Button>
                  </div>
                </div>
              </Form>
            </div>

            {/* Display the generated report in a table */}
            <div className="tableData w-full">
              {reportData && (
                <table className="min-w-full border border-gray-300 bg-white rounded-md shadow-md mt-6">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border-b px-4 py-2 text-center">Report</th>
                      <th className="border-b px-4 py-2 text-center">Summary</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    {keys.map((key) => (
                      <tr key={key}>
                        {/* <td className="border-b px-4 py-2 font-bold">{key.charAt(0).toUpperCase() + key.slice(1)}</td> */}
                        <td className='p-2'>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                        <td className="border-b px-4 py-2">{reportData[key]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Report;
