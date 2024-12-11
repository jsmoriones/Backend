import usersController from "../controllers/usersController.js";
const { getAll, login, register, getUserWithUid, profile, updateRoleUser, updateInfoUser, deleteUser } = usersController
import { Router } from "express";
import { verifyToken, verifyAdmin } from "../middlewares/jwt.middleware.js";
const route = Router();

route.get("/users", getAll)
route.post("/register", register)
route.post("/login", login)
route.get("/user/:id", getUserWithUid)
route.get("/profile", verifyToken, profile)

//Administrator
route.get("/", verifyToken, verifyAdmin, getAll);
route.put("/update-rol-user/:id", verifyToken, verifyAdmin, updateRoleUser)
route.put("/update-info-user/:id", verifyToken, verifyAdmin, updateInfoUser)
route.delete("/delete-user/:id", verifyToken, verifyAdmin, deleteUser)


export default route;