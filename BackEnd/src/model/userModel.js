import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
