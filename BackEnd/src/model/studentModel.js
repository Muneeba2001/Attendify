import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    StudentID: {
      type: String,
      require: true,
      unique: true,
    },
    StudentName: {
      type: String,
      require: true,
    },
    Section: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const studentModel = mongoose.model("Students", studentSchema);
export default studentModel;
