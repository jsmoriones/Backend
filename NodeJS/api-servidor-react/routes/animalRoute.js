import {Router} from "express";
const route = Router();
import { verifyToken, verifyAdmin } from "../middlewares/jwt.middleware.js";
import animalController from "../controllers/animalController.js";
import { upload } from "../middlewares/multerFile.js";
route.post("/animal", verifyToken, verifyAdmin, upload.single("file"), animalController.insert);
route.get("/animal", verifyToken, verifyAdmin, animalController.getAllAnimals);
route.get("/animal/species", verifyToken, verifyAdmin, animalController.getSpecies);
route.get("/animal/:id", verifyToken, verifyAdmin, animalController.getAnimaById);
route.put("/animal/:id", verifyToken, verifyAdmin, upload.single("file"), animalController.updateSpecie);
route.delete("/animal/:id", verifyToken, verifyAdmin, animalController.deleteAnimal);

export default route;