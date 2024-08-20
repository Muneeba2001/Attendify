import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { Button } from "@mui/material";

const AttendanceSheet = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [formValues, setFormValues] = useState({
    Subject: "",
    Section: "",
    Date: "",
  });

  useEffect(() => {
    if (formValues.Subject && formValues.Section && formValues.Date) {
      filterData(formValues);
    }
  }, [formValues]);

  const filterData = async (values) => {
    try {
      // Fetch data from the backend
      const response = await axios.get("http://localhost:3000/", {
        params: {
          Subject: values.Subject,
          Section: values.Section,
          Date: values.Date,
        },
      });
      console.log(response.data);

      // Update state with the fetched data
      setFilteredData((prevData) => [...prevData, ...response.data]);

      // Store the selected term in the backend
      await storeSelectedTerm(values);
    } catch (error) {
      console.error("Error fetching or storing attendance data:", error);
    }
  };

  const storeSelectedTerm = async (values) => {
    try {
      await axios.post("http://localhost:3000/attendancesheet", {
        Subject: values.Subject,
        Section: values.Section,
        Date: values.Date,
        Status: "Pending", // Set default status as "Pending" or "Present" based on your requirement
      });
    } catch (error) {
      console.error("Error storing selected term:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 p-8">
      <Formik
        initialValues={formValues}
        onSubmit={(values, { setSubmitting }) => {
          setFormValues(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6 rounded bg-white p-6 shadow">
            <div className="grid w-full grid-cols-4 gap-4">
              <div>
                <label
                  htmlFor="subject"
                  className="block font-medium text-gray-700"
                >
                  Subject
                </label>
                <Field
                  as="select"
                  name="Subject"
                  id="subject"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select Subject
                  </option>
                  <option value="Maths">Maths</option>
                  <option value="English">English</option>
                  <option value="Urdu">Urdu</option>
                </Field>
              </div>
              <div>
                <label
                  htmlFor="section"
                  className="block font-medium text-gray-700"
                >
                  Section
                </label>
                <Field
                  as="select"
                  name="Section"
                  id="section"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select Section
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </Field>
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block font-medium text-gray-700"
                >
                  Date
                </label>
                <Field
                  type="date"
                  name="Date"
                  id="date"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "rgb(96,80,220)", color: "white" }}
                  disabled={isSubmitting}
                >
                  Generate Sheet
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <div className="mt-8 w-full overflow-x-auto rounded bg-white p-8 shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Student Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Student ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {filteredData.map((student, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {student.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {student.studentId}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {student.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceSheet;
