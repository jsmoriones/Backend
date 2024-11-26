let TareaService = require("../services/TareaService")

const obtenerTareas = (async (req, res) => {
    try {
        let tareas = await TareaService.obtenerT();
        res.json({tareas});
    } catch (error) {
        res.json({error})
    }
});

const agregarTarea = (async (req, res) => {
    try {
        let tareaCreada = await TareaService.agregarT(req.body);
        res.json({tareaCreada});
    } catch (error) {
        res.json({error})
    }
})

const actualizarTarea = (async (req, res) => {
    /*try {
        let tareaActualizada = await TareaService.actualizarT(req.params.id, req.body); //devuelve un 1 cuando es correcto
        res.json(tareaActualizada);
    } catch (error) {
        res.json({error})
    }*/
    try {
        let tareaActualizada = await TareaService.actualizarT(req.params.id, req.body);

        console.log("controller ", tareaActualizada)
        if(tareaActualizada == 0){
            return res.json({mensaje: "tarea no encontrada o no actualizada"})
        }else{
            return res.json({mensaje: "tarea actualizada"});
        }
    } catch (error) {
        console.log("error al actualizar la tarea")
        res.json({mensaje: "error al actualizar la tarea"})
    }
});

const eliminarTarea = (async (req, res) => {
    try {
        let tareaEliminada = await TareaService.eliminarT(req.params.id);
        res.json(tareaEliminada);
    } catch (error) {
        res.json({error})
    }
});

const buscarTarea = (async (req, res) => {
    try {
        let tarea = await TareaService.obtenerUnaT(req.params.id);
        if(!tarea){
            throw new Error("Tarea No encontrada")
        }else{
            res.json(tarea);
        }
    } catch (error) {
        res.json({err: error.message})
    }
})

module.exports = {
    obtenerTareas,
    agregarTarea,
    actualizarTarea,
    eliminarTarea,
    buscarTarea
}