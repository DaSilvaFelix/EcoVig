const coneccion = require("../db/database");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const {
    Nombre_Apellido,
    Email,
    Fecha_Nacimiento,
    id_pais,
    id_provincia,
    contraseña,
  } = req.body;
  const hardPassword = bcrypt.hashSync(contraseña, 10);
  const conecction = await coneccion();
  await conecction.query(
    "INSERT INTO `usuarios`(`Nombre_Apellido`, `Email`, `Fecha_Nacimiento`, `id_pais`, `id_provincia`, `contraseña`) VALUES (?,?,?,?,?,?)",
    [
      Nombre_Apellido,
      Email,
      Fecha_Nacimiento,
      id_pais,
      id_provincia,
      hardPassword,
    ]
  );
  res.json({
    msg: "registrado correctamente",
  });
};

module.exports = register;
