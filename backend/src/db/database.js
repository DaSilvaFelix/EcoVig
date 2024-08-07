const mysql = require("mysql2/promise");

const coneccion = async () => {
  return await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecovig",
  });
};

module.exports = coneccion;
