import userModel from "../../model/userModel.js";
import { hash, compare } from "bcrypt";

const registerController = {
  // Register a new user
  register: async (req, res) => {
    try {
      const { name, email, password, phone_number } = req.body;

      console.log(req.body);

      // Check if the user already exist
      const userCheck = await userModel.findOne({ email });
      if (userCheck) {
        return res.status(409).json({ message: "User already exists!" });
      }

      // Hash the password before saving
      const hashedPassword = await hash(password, 10);

      // Create a new user with hashed password
      const userRegister = await userModel.create({
        name,
        email,
        phone_number,
        password: hashedPassword,
      });
      await userRegister.save();
      res
        .status(201)
        .json({ message: "User registered successfully", userRegister });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // User login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("body:", req.body);

      // Find the user by email
      const userCheck = await userModel.findOne({ email });

      console.log("UserCheck", userCheck);
      if (!userCheck) {
        return res.status(404).json({ message: "Invalid Credentials!" });
      }

      // Compare the provided password with the stored hashed password
      const isPasswordMatch = await compare(password, userCheck.password);

      if (!isPasswordMatch) {
        return res.status(404).json({ message: "Invalid Credentials!" });
      }

      const data = {
        id: userCheck._id,
        email: userCheck.email,
        // Do not send the password back in the response
      };

      res.status(200).json({ message: "Login successful", data });
    } catch (error) {
      console.error("Error in login:", error);
      if (!res.headersSent) {
        return res.status(500).json({ message: "Internal Server Error!" });
      }
    }
  },
};

export default registerController;
