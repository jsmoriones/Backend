import express from "express";
const router = express.Router();
import Canciones from "../models/cancionesModel.js";

/* Metodo de Crear */
router.post("/", async (req, res) => {
    try {
        //creo la instancia de la cancion con el model
        const nuevaCancion = new Canciones(req.body);

        //guardo en mongo la nueva cancion
        const cancionGuardada = await nuevaCancion.save();

        //envio la data si todo esta bien
        res.status(201).json({ok: true, data: cancionGuardada});
    } catch (error) {
        res.status(400).json({ok: false, error: error.message});
    }
});

/** Metodo de Listar */
router.get("/", async(req, res) => {
    try {
        //Utilizo el metodo find de mongoose para traer todos los registros
        const canciones = await Canciones.find();
        //devuelvo con status 200 las datos listados
        res.status(200).json({ok: true, data: canciones});
    } catch (error) {
        res.status(500).json({ok: false, error: error.message});
    }
});

/** Obtener cancion por ID */
router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;

        //Uso el metodo de buscar por id de mongoose para extraer solo el registro con el mismo id que traigo de req.params
        const cancion = await Canciones.findById(id);

        //Si no existe le retorno un mensaje de no encontrado
        if(!cancion){
            return res.status(404).json({ok: false, error: "Cancion no encontrada :("});
        }

        //si todo bien devuelvo la data
        res.status(200).json({ok: true, data: cancion});
    } catch (error) {
        res.status(500).json({ok: false, error: error.message})
    }
});

/** Actualizar una cancion  */
router.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;

        //buscamos primero la cancion por el id y la actualizamos, hacemos uso de el metodo findByIdAndUpdate de mongoose
        const cancionActualizada = await Canciones.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        /** Si no enucentro la cancion, devuelvo el estatus 404 con mensaje no encontrado */
        if(!cancionActualizada){
            return res.status(404).json({ok: false, error: "Cancion no encontrada"});
        }

        /** Si todo esta bien, devuelvo la data */
        res.status(200).json({ok: true, data: cancionActualizada});
    } catch (error) {
        res.status(400).json({ok: false, error: error.message});
    }
})

/** Metodo para eliminar una cancion por id */
router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        //Hago uso del metodo findByIdAndDelete, este busca por id y elimina el registro que le paso por id
        const cancionEliminada = await Canciones.findByIdAndDelete(id);

        //si no existe la cancion devolvemos el status 404 con el mensaje no contrado
        if(!cancionEliminada){
            return res.status(404).json({ok: false, error: "Cancion no encontrada"});
        }

        //si existe la cancion devolvemos el mensaje de eliminado
        res.status(200).json({message: "Cancion eliminada correctamente"});
    } catch (error) {
        res.status(500).json({ok: false, error: error.message});
    }
})

export default router;