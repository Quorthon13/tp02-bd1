const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

module.exports = () => (req, res, next) => {
  if (!req.dbconnection) {
    const pool = new Pool({
      host: process.env.HOST,
      port: process.env.PORT,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB,
      schema: process.env.SCHEMA,
    });
    pool
      .connect()
      .then(() => {
        console.log('pool => conectado');
        req.dbconnection = pool;
        next();
      })
      .catch((err) => {
        console.error('connection error', err.stack);
        next(err);
      });

    res.on('finish', () => {
      console.info('pool => devolvendo conexão para o pool');
      req.dbconnection.end();
      req.dbconnection = null;
    });
  } else {
    next();
  }
};
