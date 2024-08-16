import attendanceRouter from "./Attendance-Sheet/index.js";
import userRouter from "./userRoutes/index.js";

const appRouter = [userRouter, attendanceRouter];

export default appRouter;
