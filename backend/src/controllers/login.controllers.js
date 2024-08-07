const coneccion = require("../db/database");
const generarToken = require("../helpers/generarJwt");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { Email, contraseña } = req.body;
    const conecction = await coneccion();
    const [usuario] = await conecction.query(
      "SELECT * FROM `usuarios` WHERE Email = ? LIMIT 1",
      [Email]
    );
    if (!usuario[0]) {
      res.json({ msg: "usuario no existente" });
    }
    const contraseñaValida = bcrypt.compareSync(
      contraseña,
      usuario[0].contraseña
    );

    if (!contraseñaValida) {
      return res.status(401).json({ msg: "contraseña incorrecta" });
    }

    const token = await generarToken({ id: usuario[0].id_user });

    return res.json({
      msg: "usuario logueado correctamente",
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = login;
