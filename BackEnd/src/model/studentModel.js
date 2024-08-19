import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  Student_name: {
    type: String,
    require: true,
  },
  course: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const studentModel = mongoose.model("student", studentSchema);
export default studentModel;
