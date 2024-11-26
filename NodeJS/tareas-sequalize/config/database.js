let Sequelize = require("sequelize");
require("dotenv").config();
let sequelize = new Sequelize(
    process.env.BD_DATABASE,
    process.env.BD_USER,
    process.env.BD_PASS,
    {
        host: process.env.BD_HOST,
        dialect: 'mysql',
        logging: console.log //mostrar consultas sql
    }
);

module.exports = sequelize;