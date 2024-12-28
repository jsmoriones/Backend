import taskController from "../controllers/taskController.js";
import { Router } from "express";
import { verifyToken, verifyAdmin } from "../middlewares/jwt.middleware.js";
const route = Router();

route.post("/task", verifyToken, verifyAdmin, taskController.addTask);
route.get("/task", verifyToken, verifyAdmin, taskController.listAllTask);

export default route;