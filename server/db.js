const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "art_gallery",
    host: "localhost",
    port: 5432,
    database: "art_gallery"
});

module.exports = pool;
