const Proyecto = require("../models/ProyectoModel"),
    ProyectoController = new Proyecto();

const obtenerProyectos = (async (req, res) => {
    try {
        const result = await ProyectoController.obtenerProyectos();
        res.json(result);
    } catch (error) {
        res.json({err: "Hay un error al traer los productos " + error});
    }
});

const agregarProyecto = (async (req, res) => {
    try {
        let result = await ProyectoController.agregarProyecto(req.body);
        res.json(result);
    } catch (error) {
        res.json({err: "Hay un error al agregar el producto " + error});
    }
});

const actualizarProyecto = (async (req, res) => {
    try {
        let result = await ProyectoController.actualizarProyecto(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.json({err: "Hay un error al actualizar el producto " + error});
    }
});

const eliminarProyecto = (async (req, res) => {
    try {
        let result = await ProyectoController.eliminarProyecto(req.params.id);
        if(result){
            res.json({msg: "Se elimino el Proyecto"})
        }
    } catch (error) {
        res.json({err: "Hay un error al eiminar el producto " + error});
    }
})

module.exports = {
    obtenerProyectos,
    agregarProyecto,
    actualizarProyecto,
    eliminarProyecto
}