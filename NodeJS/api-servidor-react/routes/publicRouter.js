import { Router } from "express";
import path from "path";

const router = Router();

const __dirname = import.meta.dirname;
const publicpath = path.join(__dirname, "../public");

router.get("/login", (req, res) => {
    res.sendFile(publicpath + "/login.html");
});

router.get("/profile", (req, res) => {
    res.sendFile(publicpath + "/profile.html")
})

export default router;