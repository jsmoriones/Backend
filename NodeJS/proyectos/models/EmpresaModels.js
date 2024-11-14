const conn = require("../config/database");

class Empresa {
    async traerEmpresas(){
        let [rows] = await conn.query("SELECT * FROM empresa");
        return rows;
    }
    async agregarEmpresa(data){
        const {nombre, direccion, telefono, nit} = data;
        let [result] = await conn.query(`INSERT INTO empresa(nombre, direccion, telefono, nit) VALUES (?, ?, ?, ?)`, [ nombre, direccion, telefono, nit ]);
        return {...data, id: result.insertId};
    }
    async actualizarEmpresa(id, data){
        const {nombre, direccion, telefono, nit} = data;
        let [result] = await conn.query(`UPDATE empresa SET nombre = ?, direccion = ?, telefono = ?, nit = ? WHERE id = ?`, [nombre, direccion, telefono, nit, id]);
        return {...data, id: result.insertId};
    }
    async eliminarEmpresa(id){
        let [result] = await conn.query(`DELETE FROM empresa WHERE id = ?`, [id]);
        return result;
    }
}

module.exports = Empresa;