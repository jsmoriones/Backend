let DataTypes = require("sequelize"),
  sequelize = require("../config/database");

let Evento = sequelize.define("Evento", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha_hora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lugar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    capacidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  },
  {
    timestamps:false,
    tableName: "evento"
  }
);

module.exports = Evento;