const router = require("express").Router();
const mostrarCountries = require("../controllers/countries.controllers");
const mostrarStates = require("../controllers/states.controllers");
const register = require("../controllers/register");
const login = require("../controllers/login.controllers");
const climasLocal = require("../controllers/climas");

router.get("/", (req, res) => {
  res.send("servidor en la red");
});
router.get("/countries", mostrarCountries);
router.get("/states/:id", mostrarStates);
router.post("/register", register);
router.post("/login", login);
router.post("/climas", climasLocal);

module.exports = router;
