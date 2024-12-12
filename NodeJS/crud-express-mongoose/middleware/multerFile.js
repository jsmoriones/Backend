import multer from "multer";
import path from "path";

//configuracion de multer para la subida de archivos
const storage = multer.diskStorage({
    destination: "files/",
    filename: (req, file, cb) => {
        const sufijoParaNombreDeImagenes = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + sufijoParaNombreDeImagenes + ext);
    }
});
export const upload = multer({ storage });