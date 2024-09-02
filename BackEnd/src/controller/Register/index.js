import userModel from "../../model/userModel.js";
import { hash, compare } from "bcrypt";

const registerController = {
  // Register a new user
  register: async (req, res) => {
    try {
      const { name, email, password, phone_number } = req.body;

      // Normalize email to lowercase
      const normalizedEmail = email.toLowerCase();

      // Check if the user already exists
      const userCheck = await userModel.findOne({ email: normalizedEmail });
      if (userCheck) {
        return res.status(409).json({ message: "User already exists!" });
      }

      // Hash the password before saving
      const hashedPassword = await hash(password, 10);

      // Create a new user with hashed password
      const userRegister = await userModel.create({
        name,
        email: normalizedEmail,
        phone_number,
        password: hashedPassword,
      });

      res.status(201).json({ message: "User registered successfully", userRegister });
    } catch (error) {
      console.error("Error in registration:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Get all registered users
  getAllUser: async (req, res) => {
    try {
      const employees = await userModel.find();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update registered users
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body;

      const users = await userModel.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
      });

      if (!users) {
        return res.status(404).json({ message: "User not found." });
      }

      res.status(200).json({ message: "User updated successfully", users });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },

  // Delete registered user
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const users = await userModel.findByIdAndDelete(id);

      if (!users) {
        return res.status(404).json({ message: "User not found." });
      }

      res.status(200).json({ message: "User deleted successfully", users });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },

  // User login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Normalize email to lowercase
      const normalizedEmail = email.toLowerCase();

      // Find the user by email
      const userCheck = await userModel.findOne({ email: normalizedEmail });

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
