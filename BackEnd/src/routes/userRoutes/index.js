import { Router } from "express";
import registerController from "../../controller/Register/index.js";

const userRouter = Router();

userRouter.post("/Register", registerController.register);
userRouter.get("/employees", registerController.getAllUser);
userRouter.put("/employees/:id", registerController.update);
userRouter.delete("/employees/:id", registerController.delete);
userRouter.post("/Login", registerController.login);

export default userRouter;
