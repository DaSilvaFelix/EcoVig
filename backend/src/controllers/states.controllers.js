const coneccion = require("../db/database");

const mostrarStates = async (req, res) => {
  const { id } = req.params;
  const conecction = await coneccion();
  const states = await conecction.query(
    "SELECT * FROM `provincias` WHERE `id_pais`= ?;",
    [id]
  );
  res.json(states[0]);
};

module.exports = mostrarStates;
