const coneccion = require("../db/database");

const mostrarCountries = async (req, res) => {
  const conecction = await coneccion();
  const countries = await conecction.query("SELECT * FROM `paises`");
  res.json(countries[0]);
};

module.exports = mostrarCountries;
