const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

module.exports = () => (req, res, next) => {
  if (!req.dbconnection) {
    const pool = new Pool({
      user: process.env.HOST,
      host: process.env.USER,
      database: process.env.PASSWORD,
      password: process.env.DB,
      port: process.env.PORT,
      schema: process.env.SCHEMA,
    });
    console.log(pool);
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
