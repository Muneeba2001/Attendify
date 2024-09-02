import { Router } from "express";
import registerController from "../../controller/UserAuthentication/index.js";

const userRouter = Router();

userRouter.post("/Register", registerController.register);
userRouter.get("/employees", registerController.getAllUser);
userRouter.put("/UpdateEmployee/:id", registerController.updateUser);
userRouter.delete("/DeleteEmployee/:id", registerController.deleteUser);
userRouter.post("/Login", registerController.login);
userRouter.patch("/EmployeeCheckIn/:id",registerController.CheckIn);
userRouter.patch("/EmployeeCheckOut/:id",registerController.CheckOut);

export default userRouter;
