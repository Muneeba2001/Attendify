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
      const payload = req.body;
      console.log(req.body);
      const students = new studentModel({
        Student_name: payload.Student_name,
        course: payload.course,

        email: payload.email,
        username: payload.username,
        password: payload.password,
      });
      await students.save();
      res.status(200).json({ message: "Students:", students });
    } catch (error) {
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
