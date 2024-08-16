import { Router } from "express";
import registerController from "../../controller/Register/index.js";

const userRouter = Router();

userRouter.post("/Register", registerController.register);
userRouter.post("/Login", registerController.login);

export default userRouter;
