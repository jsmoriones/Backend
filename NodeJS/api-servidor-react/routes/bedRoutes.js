import { getAll } from "../controllers/bedController";
import { Router } from "express";
const route = Router();

route.get("/api/users", getAll)

export default route;