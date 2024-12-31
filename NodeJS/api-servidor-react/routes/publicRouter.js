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

router.get("/admin", (req, res) => {
    res.sendFile(publicpath + "/admin.html")
})

router.get("/admin/crear-usuario", (req, res) => {
    res.sendFile(publicpath + "/adminRegister.html")
})

router.get("/tasks", (req, res) => {
    res.sendFile(publicpath + "/tasks.html")
})

router.get("/animals", (req, res) => {
    res.sendFile(publicpath + "/animals.html")
})

export default router;
