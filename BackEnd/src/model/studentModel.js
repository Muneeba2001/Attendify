import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  StudentID: {
    type: String,
    unique: true,
  },
  Student_name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  checkIn: {
    type: Date,
    default: null,
  },
  lastAttendanceDate: {
    type: String,
    default: null,
  },
});

const studentModel = mongoose.model("Student", studentSchema);
export default studentModel;
