import { Button } from "@mui/material";
import { Field, Formik, Form } from "formik";
import { useState } from "react";
import React from "react";
import ReportBreadCrumb from "../../../Component/BreadCrumbs/ReportBreadCrumb";

const Report = () => {
  const [reportData, setReportData] = useState(null);
  const keys = ["course", "section", "subject", "month", "year"];

  return (
    <>
      <div>
        <h1 className="mb-5 text-3xl font-bold text-blue-800">
          Employee Report
        </h1>
        <ReportBreadCrumb />
      </div>
      <Formik
        initialValues={{
          course: "",
          section: "",
          subject: "",
          month: "",
          year: "",
        }}
        onSubmit={(values) => {
          setReportData(values);
          console.log("The summary of the report is : ", values);
        }}
      >
        {({ handleSubmit }) => (
          <div className="Container flex w-full flex-col items-center justify-center">
            <div className="selectionForm flex min-h-[100px] items-center justify-center rounded-md bg-white p-2">
              <Form onSubmit={handleSubmit}>
                <div className="report">
                  <div className="selectionForm flex space-x-5">
                    {/* Course */}
                    <Field
                      as="select"
                      name="course"
                      className="w-44 rounded border border-gray-300 p-2"
                    >
                      <option value="" disabled>
                        Select Team
                      </option>
                      <option value="BSCS">Marketing team</option>
                      <option value="BS Maths">Technical team</option>
                      <option value="BS Stats">Development team</option>
                      <option value="BS Stats">Operations team</option>
                      <option value="BS Stats">Quality Assurance team</option>
                    </Field>
                    {/* Section */}
                    <Field
                      as="select"
                      name="section"
                      className="w-44 rounded border border-gray-300 p-2"
                    >
                      <option value="" disabled>
                        Select Designation
                      </option>
                      <option value="A">Computer systems manager</option>
                      <option value="B">Network architect</option>
                      <option value="C">Systems analyst</option>
                      <option value="C">Systems analyst</option>
                      <option value="C">IT coordinator</option>
                      <option value="C">Network engineer</option>
                      <option value="C">System administrator</option>
                    </Field>
                    {/* Subject */}
                    {/* <Field as="select" name="subject" className=" p-2 border border-gray-300 rounded">
                      <option value="" disabled>Select Subject</option>
                      <option value="Calculus">Calculus</option>
                      <option value="DSA">DSA</option>
                      <option value="Statistics">Statistics</option>
                    </Field> */}
                    {/* Month */}
                    <Field
                      as="select"
                      name="month"
                      className="w-44 rounded border border-gray-300 p-2"
                    >
                      <option value="" disabled>
                        Select Month
                      </option>
                      <option value="Jan">January</option>
                      <option value="Feb">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="April">May</option>
                      <option value="April">June</option>
                      <option value="April">July</option>
                      <option value="April">August</option>
                      <option value="April">September</option>
                      <option value="April">Ocyober</option>
                      <option value="April">November</option>
                      <option value="April">December</option>
                    </Field>
                    {/* Year */}
                    <Field
                      as="select"
                      name="year"
                      className="w-44 rounded border border-gray-300 p-2"
                    >
                      <option value="" disabled>
                        Select Year
                      </option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </Field>

                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "blueviolet", color: "white" }}
                      type="submit"
                      className="w-44"
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
                <table className="mt-6 min-w-full rounded-md border border-gray-300 bg-white shadow-md">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border-b px-4 py-2 text-center">Report</th>
                      <th className="border-b px-4 py-2 text-center">
                        Summary
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {keys.map((key) => (
                      <tr key={key}>
                        {/* <td className="border-b px-4 py-2 font-bold">{key.charAt(0).toUpperCase() + key.slice(1)}</td> */}
                        <td className="p-2">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </td>
                        <td className="border-b px-4 py-2">
                          {reportData[key]}
                        </td>
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
