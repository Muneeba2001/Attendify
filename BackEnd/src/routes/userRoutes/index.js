import { Router } from "express";
import registerController from "../../controller/Register/index.js";

const userRouter = Router();

userRouter.post("/Register", registerController.register);
userRouter.get("/employees", registerController.getAllUser);
userRouter.post("/Login", registerController.login);

export default userRouter;
