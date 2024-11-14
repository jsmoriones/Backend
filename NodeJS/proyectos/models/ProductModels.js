const conn = require("../config/database");

class Products {
    async traerProductos(){
        let [rows] = await conn.query("SELECT * FROM productos");
        return rows;
    }
    async agregarProducto(data){
        const {nombre, precio, descripcion} = data;
        let [result] = await conn.query(`INSERT INTO productos(nombre, precio, descripcion) VALUES (?, ?, ?)`, [nombre, precio, descripcion]);
        return {...data, id: result.insertId};
    }
    async actualizarProducto(id, data){
        const {nombre, precio, descripcion} = data;
        let [result] = await conn.query(`UPDATE productos SET nombre=?, precio=?, descripcion=? WHERE id = ?`, [nombre, precio, descripcion, id]);
        return {...data, id: result.insertId};
    }
    async eliminarProducto(id){
        const [result] = await conn.query(`DELETE FROM productos WHERE id = ?`, [id]);
        return result;
    }
}

module.exports = Products;