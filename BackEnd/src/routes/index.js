import { Router } from "express";
import registerController from "../controller/Register/index.js";

const appRouter = Router();

appRouter.post("/Register", registerController.register);
appRouter.post("/Login", registerController.login);

export default appRouter;
