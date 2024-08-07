const jwt = require("jsonwebtoken");
const generarJWT = require("./generarJwt");
const coneccion = require("../db/database");

const validarJWT = async () => {
  try {
    const id = jwt.verify(token, "mysecret");
    const connection = await coneccion();
    const user = await connection.query(
      "SELECT * FROM `usuarios` WHERE id_user = ? LIMIT 1",
      id
    );
    if (!user) {
      return false;
    } else {
      return user[0];
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = validarJWT;
