import multer from "multer";
import path from "path";
import SharpMulter from "sharp-multer";

//configuracion de multer para la subida de archivos
/*const storage = multer.diskStorage({
    destination: "files/",
    filename: (req, file, cb) => {
        console.log(file)
        const sufijoParaNombreDeImagenes = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + sufijoParaNombreDeImagenes + ext);
    }
});*/

const storage = SharpMulter({
    destination: (req, file, callback) => callback(null, "public/img/files"),

    imageOptions: {
        fileFormat: "jpg",
        quality: 80,
        resize: { width: 1100, height: 825, resizeMode: "contain" },
    },
    filename: (og_filename, options) => {
        const sufijoParaNombreDeImagenes = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const ext = options.fileFormat;
        const unionImage = "file-"+sufijoParaNombreDeImagenes + "." + ext; 
        return unionImage;
    }
})

export const upload = multer({ storage });