let TareaService = require("../services/TareaService"),
    tareaService = new TareaService();

const obtenerTareas = (async (req, res) => {
    try {
        let tareas = await tareaService.obtenerT();
        res.json({tareas});
    } catch (error) {
        res.json({error})
    }
});

const agregarTarea = (async (req, res) => {
    try {
        res.json({msg: "Hola Mundo, desde el metodo POST de TareaController"});
    } catch (error) {
        res.json({error})
    }
})

const actualizarTarea = (async (req, res) => {
    try {
        res.json({msg: "Hola Mundo, desde el metodo PUT de TareaController"});
    } catch (error) {
        res.json({error})
    }
});

const eliminarTarea = (async (req, res) => {
    try {
        res.json({msg: "Hola Mundo, desde el metodo DELETE de TareaController"});
    } catch (error) {
        res.json({error})
    }
});

const buscarTarea = (async (req, res) => {
    try {
        res.json({msg: "Hola Mundo, desde el metodo GET para buscar de TareaController"});
    } catch (error) {
        res.json({error})
    }
})

module.exports = {
    obtenerTareas,
    agregarTarea,
    actualizarTarea,
    eliminarTarea,
    buscarTarea
}