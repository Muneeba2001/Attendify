import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const EmployeeSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  checkIn: {
    type: Date,
    default: null,
  },
  checkOut: {
    type: Date,
    default: null,
  },
  lastAttendanceDate: {
    type: String, 
    default: null,
  },
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema); 

export default EmployeeModel;
