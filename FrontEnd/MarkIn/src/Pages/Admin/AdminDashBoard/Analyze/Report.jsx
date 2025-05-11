import { Button } from "@mui/material";
import { Field, Formik, Form } from "formik";
import { useState } from "react";
import React from "react";
import ReportBreadCrumb from "../../../../Component/BreadCrumbs/ReportBreadCrumb";
import DataTable from "../../../../Component/DataTable/DataTable";

const Report = () => {
  const [reportData, setReportData] = useState(null);

  const headers = [
    { key: "course", label: "Team" },
    { key: "section", label: "Designation" },
    { key: "month", label: "Month" },
    { key: "year", label: "Year" },
  ];

  const handleEdit = (row) => {
    console.log("Edit clicked:", row);
  };

  const handleDelete = (id) => {
    console.log("Delete clicked for ID:", id);
  };

  return (
    <>
      <div className="min-h-screen bg-[#121212] text-white p-6">
        <h1 className="mb-5 text-3xl font-bold">Report</h1>
        <ReportBreadCrumb />
     

      <Formik
        initialValues={{
          course: "",
          section: "",
          subject: "",
          month: "",
          year: "",
        }}
        onSubmit={(values) => {
          setReportData([values]); // wrap in array to fit DataTable structure
          console.log("The summary of the report is : ", values);
        }}
      >
        {({ handleSubmit }) => (
          <div className="Container flex w-full flex-col items-center justify-center">
            <div className="selectionForm flex min-h-[100px] items-center justify-center rounded-md bg-[#1e1e1e] p-2">
              <Form onSubmit={handleSubmit}>
                <div className="report">
                  <div className="selectionForm flex space-x-5 bg-[#1e1e1e]">
                    {/* Course */}
                    <Field
                      as="select"
                      name="course"
                      className="w-44 rounded border border-gray-300 p-2 bg-[#1e1e1e]"
                    >
                      <option value="" disabled>Select Team</option>
                      <option value="Marketing team">Marketing team</option>
                      <option value="Technical team">Technical team</option>
                      <option value="Development team">Development team</option>
                      <option value="Operations team">Operations team</option>
                      <option value="QA team">Quality Assurance team</option>
                    </Field>

                    {/* Section */}
                    <Field
                      as="select"
                      name="section"
                      className="w-44 rounded border border-gray-300 p-2 bg-[#1e1e1e]"
                    >
                      <option value="" disabled>Select Designation</option>
                      <option value="Computer systems manager">Computer systems manager</option>
                      <option value="Network architect">Network architect</option>
                      <option value="Systems analyst">Systems analyst</option>
                      <option value="IT coordinator">IT coordinator</option>
                      <option value="Network engineer">Network engineer</option>
                      <option value="System administrator">System administrator</option>
                    </Field>

                    {/* Month */}
                    <Field
                      as="select"
                      name="month"
                      className="w-44 rounded border border-gray-300 p-2 bg-[#1e1e1e]"
                    >
                      <option value="" disabled>Select Month</option>
                      {[
                        "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                      ].map((month) => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </Field>

                    {/* Year */}
                    <Field
                      as="select"
                      name="year"
                      className="w-44 rounded border border-gray-300 p-2 bg-[#1e1e1e]"
                    >
                      <option value="" disabled>Select Year</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </Field>

                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#00000", color: "white" }}
                      type="submit"
                      className="w-44"
                    >
                      Generate Report
                    </Button>
                  </div>
                </div>
              </Form>
            </div>

            {/* Use custom DataTable to show report */}
            <div className="w-full px-10 mt-8">
              {reportData && (
                <DataTable
                  headers={headers}
                  data={reportData}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              )}
            </div>
          </div>
        )}
      </Formik>
      </div>
    </>
  );
};

export default Report;
