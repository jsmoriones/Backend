const mysql = require("mysql2/promise");

const conn = mysql.createPool({
    host: process.env.BD_HOST,
    database: process.env.BD_DATABASE,
    password: process.env.BD_PASS,
    port: process.env.BD_PORT,
    user: process.env.BD_USER,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = conn;