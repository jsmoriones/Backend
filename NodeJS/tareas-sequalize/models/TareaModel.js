let DataTypes = require("sequelize");
const sequelize = require("../config/database");

let Tarea = sequelize.define('Tarea', {
        titulo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamp:true,
        tableName: "tareas"
    }
)

module.exports = Tarea;