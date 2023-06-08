const { Pool } = require("pg");

const getConnection = () => {
  const connectionString = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
  });
  console.log("Database connected Successfully");
  return connectionString;
};
module.exports = getConnection;