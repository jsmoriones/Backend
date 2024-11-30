let DataTypes = require("sequelize"),
  sequelize = require("../config/database");

let Usuario = sequelize.define("Usuario", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    permitido: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  },
  {
    timestamps:false,
    tableName: "usuario"
  }
);

module.exports = Usuario;