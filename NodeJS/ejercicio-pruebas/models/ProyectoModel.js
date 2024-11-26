const conn = require("../config/database");

class Proyecto {
    async obtenerProyectos(){
        let [rows] = await conn.query("SELECT * FROM proyecto");
        return rows;
    }
    async agregarProyecto(data){
        const {nombre, descripcion} = data;
        let [result] = await conn.query("INSERT INTO proyecto(nombre, descripcion) VALUES (?, ?)", [nombre, descripcion]);

        return {id: result.insertId, ...data};
    }
    async actualizarProyecto(id, data){
        const {nombre, descripcion} = data;
        let [result] = await conn.query("UPDATE proyecto SET nombre = ?, descripcion = ? WHERE id = ?", [nombre, descripcion, id]);

        return {id: result.insertId, ...data};
    }
    async eliminarProyecto(id){
        const [result] = await conn.query("DELETE FROM proyecto WHERE id = ?", [id]);
        return result;
    }
}

module.exports = Proyecto;