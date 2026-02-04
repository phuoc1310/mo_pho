// config/database.js
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'admin',
  database: 'mo_pho',
  port: 5432,
});

pool
  .connect()
  .then(() => console.log('PostgreSQL connected'))
  .catch(err => console.error('DB connection error', err));

module.exports = pool;
