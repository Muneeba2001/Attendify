import express from "express";
import mongoose from "mongoose";
import appRouter from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(express.json());
 app.use(cors());
app.use(appRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/Attendance")
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error: ", err));

app.listen(3000, () => {
  console.log("Server Started on port 3000");
});
