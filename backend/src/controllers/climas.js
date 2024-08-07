const coneccion = require("./../db/database");
const validarJWT = require("../helpers/validarJWT");

const climasLocal = async (req, res) => {
  const token = req.headers.token;
  console.log(token);

  const usuario = await validarJWT(token);
  console.log(usuario);

  const conecction = await coneccion();
  const [searchUser] = await conecction.query(
    "SELECT * FROM `usuarios`WHERE id_user = ?",
    usuario.id_user
  );
  // const sql =
  //   "SELECT climas_por_provincia.id_provincia,nombre,tipo_de_climas,descripcón FROM climas_por_provincia INNER JOIN provincias ON climas_por_provincia.id_provincia = provincias.id_provincia INNER JOIN climas ON climas_por_provincia.id_climas = climas.id_climas WHERE climas_por_provincia.id_provincia = ?;";
  // const rows = await conecction.query(sql, usuario.id_provincia);
  // res.json(rows);
  res.json(searchUser);
};

module.exports = climasLocal;
