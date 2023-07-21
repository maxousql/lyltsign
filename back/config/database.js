/* Crée un pool de connexions à une base de données MySQL à l'aide du package "mysql". */
const { createPool } = require("mysql");

const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: process.env.DB_CO_LIMIT
});

module.exports = pool;