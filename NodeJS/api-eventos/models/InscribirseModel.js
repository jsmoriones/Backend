let DataTypes = require("sequelize"),
  sequelize = require("../config/database");
const Evento = require("./EventoModel");
const Usuario = require("./UsuarioModel")

let Inscribirse = sequelize.define("Inscribirse", {
    idEvento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Evento,
        key: "id"
      }
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Usuario,
        key: "id"
      }
    },
    fechaInscripcion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cancelado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      default: false
    }
  },
  {
    timestamps:false,
    tableName: "inscribirse"
  }
);

Inscribirse.belongsTo(Evento, { foreignKey: "idEvento" });
Inscribirse.belongsTo(Usuario, { foreignKey: "idUsuario" });

module.exports = Inscribirse;