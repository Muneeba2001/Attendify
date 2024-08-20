import { Router } from "express";
import studentController from "../../controller/student/index.js";
const studentrouter = Router();

studentrouter.post("/student", studentController.create);
studentrouter.get("/student", studentController.getAll);
studentrouter.get("/student/:id", studentController.getSingle);
studentrouter.put("/student/:id", studentController.update);
studentrouter.delete("/student/:id", studentController.delete);

export default studentrouter;
