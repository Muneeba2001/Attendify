import attendanceRouter from "./Attendance-Sheet/index.js";
import studentrouter from "./student/index.js";
import userRouter from "./userRoutes/index.js";

const appRouter = [userRouter, attendanceRouter, studentrouter];

export default appRouter;
