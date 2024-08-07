const jwt = require("jsonwebtoken");

const generarJWT = (id) => {
  return new Promise((resolver, reject) => {
    jwt.sign(
      id,
      "mysecret",
      {
        expiresIn: 60 * 60,
      },
      (err, token) => {
        err ? reject(err) : resolver(token);
      }
    );
  });
};

module.exports = generarJWT;
