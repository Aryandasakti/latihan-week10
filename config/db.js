const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'rakaminweek10',
    password: 'Bimaaryanda123',
    port: 5432,
});

module.exports = pool;