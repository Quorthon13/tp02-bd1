const { Pool } = require('pg');
const dbConfig = require('../config/db.config.js');

module.exports = () => (req, res, next) => {
  if (!req.dbconnection) {
    const pool = new Pool({
      user: dbConfig.HOST,
      host: dbConfig.USER,
      database: dbConfig.PASSWORD,
      password: dbConfig.DB,
      port: dbConfig.PORT,
    });

    pool
      .connect()
      .then(() => {
        console.log('Conectado com sucesso ao banco.');
        next();
      })
      .catch((err) => {
        console.log(err);
        next();
      });
  } else {
    next();
  }
};
