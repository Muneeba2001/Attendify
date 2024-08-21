import { v4 as uuidv4 } from "uuid";
import studentModel from "../../model/studentModel.js";

const studentController = {
  getAll: async (req, res) => {
    try {
      const students = await studentModel.find();
      res.status(200).json({ message: "Students: ", students });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error: ", error });
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      //   console.log(req.params);
      const student = await studentModel.findById(id);
      if (!student) {
        res.status(404).json({ message: "Student not found. " });
      }
      res.status(200).json({ message: "Student: ", student });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },
  create: async (req, res) => {
    try {
      const { Student_name, course, email, username, password } = req.body;
      const studentID = uuidv4();
      // Create a new student document
      const students = new studentModel({
        StudentID: studentID,
        Student_name,
        course,
        email,
        username,
        password,
      });

      // Attempt to save the student document to the database
      const data = await students.save();

      console.log("Data:", data); // This will only log if save is successful

      // Send success response
      res
        .status(200)
        .json({ message: "Student created successfully", student: data });
    //   if (students) {
    //     res.status(200).json({ message: "Student exist" });
    //   }
    } catch (error) {
      console.error("Error saving student:", error); // Log the actual error
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },

  update: async (req, res) => {
    try {
      let { id } = req.params;
      //   console.log(req.params);
      const payload = req.body;
      //   console.log(req.body);
      const student = await studentModel.findByIdAndUpdate(id, payload, {
        new: true,
        runvalidator: true,
      });
      if (!student) {
        res.status(404).json({ message: "Student not found. " });
      }
      res.status(200).json({ message: "Student: ", student });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await studentModel.findByIdAndDelete(id);
      if (!student) {
        res.status(404).json({ message: "Student not found. " });
      }
      res.status(200).json({ message: "Student: ", student });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },
};
export default studentController;
