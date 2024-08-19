import { Router } from "express";
import attendanceController from "../../controller/Attendance-Sheet/index.js";

const attendanceRouter = Router();
attendanceRouter.get("/attendancesheet", attendanceController.getAll);
attendanceRouter.post("/attendancesheet", attendanceController.update);

export default attendanceRouter;
