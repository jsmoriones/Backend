const conn = require("../config/database");

class Proveedor {
    async traerProveedores(){
        let [rows] = await conn.query("SELECT * FROM proveedor");
        return rows;
    }
    async agregarProveedor(data){
        const {nombre, direccion, telefono} = data;
        let [result] = await conn.query("INSERT INTO proveedor(nombre, direccion, telefono) VALUES (?, ?, ?)", [nombre, direccion, telefono]);
        return {...data, id: result.insertId};
    }
    async actualizarProveedor(id, data){
        const {nombre, direccion, telefono} = data;
        let [result] = await conn.query(`UPDATE proveedor SET nombre = ?, direccion = ?, telefono = ? WHERE id = ?`, [nombre, direccion, telefono, id]);
        return {...data, id: result.insertId};
    }
    async eliminarProveedor(id){
        const [result] = await conn.query(`DELETE FROM proveedor WHERE id = ?`, [id]);
        return result;
    }
}

module.exports = Proveedor;