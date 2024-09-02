import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const userSchema = new mongoose.Schema({
  id:{
    type: String,
    default: uuidv4, // Automatically generate a UUID for each new user
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
  checkIn : {
    type : Date,
    default : null
  },
  checkOut : {
    type : Date,
    default : null
  }
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
