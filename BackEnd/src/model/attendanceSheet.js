import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";
import Students from "./studentModel.js";
const attendanceSchema = new mongoose.Schema(
  {
    AttendanceID: {
      type: Number,
      require: true,
      unique: true,
    },
    Student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Students",
      require: true,
    },
    Subject: {
      type: String,
      require: true,
    },
    Date: {
      type: Date,
      require: true,
    },
    Status: {
      type: String,
      enum: ["Present", "Absent"],
      require: true,
    },
  },
  {
    timestamps: true,
  }
);


attendanceSchema.plugin(AutoIncrement(mongoose), { inc_field: "AttendanceID" });
const attendanceModel = mongoose.model("Sheet", attendanceSchema);
export default attendanceModel;
