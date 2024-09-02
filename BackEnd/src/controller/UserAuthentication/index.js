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
  getAllUser: async (req, res) => {
    try {
      const employees = await userModel.find();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateUser : async(req,res) => {
    try {
      const id = req.params.id;
      const updateData = req.body;
      //Update Data
      //findIdAndUpdate is an atomic method to update data, new:true means it return the updated data
      const employees = await userModel.findByIdAndUpdate(id,updateData,{new:true});
      if(!employees)
      {
        return res.status(404).json({Warning : `Employee is not found`});
      }
      
      res.status(200).json({Success: `Employee updated successfully`, Updation : employees});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteUser : async(req,res) => {
    try {
      const {id} = req.params;
      // const deleteUser = req.body;
      const DeleteUser = await userModel.findByIdAndDelete(id);
      if(!DeleteUser) {
        return res.status(404).json({Warning : "Data not found"})
      }
      res.status(200).json({Success: "Employee is deleted!", Deletion : DeleteUser})
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // User login
  // login: async (req, res) => {
  //   try {
  //     const { email, password } = req.body;
  //     console.log("body:", req.body);

  //     // Find the user by email
  //     const userCheck = await userModel.findOne({ email });

  //     console.log("UserCheck", userCheck);
  //     if (!userCheck) {
  //       return res.status(404).json({ message: "Invalid Credentials!" });
  //     }

  //     // Compare the provided password with the stored hashed password
  //     const isPasswordMatch = await compare(password, userCheck.password);

  //     if (!isPasswordMatch) {
  //       return res.status(404).json({ message: "Invalid Credentials!" });
  //     }

  //      // Update loginTime to the current date and time
  //   userCheck.loginTime = new Date();

  //   // Save the updated user info
  //   await userCheck.save(); 

  //     const data = {
  //       id: userCheck._id,
  //       email: userCheck.email,
  //       loginTime : userCheck.loginTime,
  //       // Do not send the password back in the response
  //     };

  //     res.status(200).json({ message: "Login successful", data });
  //   } catch (error) {
  //     console.error("Error in login:", error);
  //     if (!res.headersSent) {
  //       return res.status(500).json({ message: "Internal Server Error!" });
  //     }
  //   }
  // },
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
  
      // Update loginTime to the current date and time
      // userCheck.loginTime = new Date();
  
      // Save the updated user info
      await userCheck.save();
  
      const data = {
        id: userCheck._id,
        email: userCheck.email,
        // loginTime: userCheck.loginTime, // Include loginTime in the response if needed
      };
  
      res.status(200).json({ message: "Login successful", data });
    } catch (error) {
      console.error("Error in login:", error);
      if (!res.headersSent) {
        return res.status(500).json({ message: "Internal Server Error!" });
      }
    }
  },
  CheckIn: async (req, res) => {
    try {
      const { id } = req.params;
      const { checkIn } = req.body;
  
      // Update the employee's check-in time
      const employeeCheckIn = await userModel.findByIdAndUpdate(
        id,
        { checkIn: checkIn }, // Make sure this matches the field name in your schema
        { new: true }
      );
  
      if (!employeeCheckIn) {
        return res.status(404).json({ Warning: "Not Found!" });
      }
  
      res.status(200).json({ Success: "Employee is successfully Checked In", employeeCheckIn });
    } catch (error) {
      console.error(error); // Added error logging for debugging
      res.status(500).json({ Error: "Internal server Error" });
    }
  },

  CheckOut : async (req,res)=> {
    try {
      const {id} = req.params;
      const {checkOut} = req.body;
      const EmployeeCheckOut = await userModel.findByIdAndUpdate(id,
        {checkOut : new Date(checkOut)},
        {new:true}
      )
      if(!EmployeeCheckOut)
      {
        return res.status(404).json({Warning:"Internal server Error"})
      }
      res.status(200).json({Success: "Employee is checkedOut", EmployeeCheckOut});
      
    } catch (error) {
      console.error(error); // Added error logging for debugging
      res.status(500).json({ Error: "Internal server Error" });
    }
  }
  
  
};

export default registerController;
