import { Router } from "express";
import attendanceController from "../../controller/Attendance-Sheet/index.js";

const attendanceRouter = Router();
attendanceRouter.get("/attendacesheet", attendanceController.getAll);
attendanceRouter.post("/update-attendacesheet", attendanceController.update);

export default attendanceRouter;
