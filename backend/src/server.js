const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routers/general.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

app.listen(4000, () => {
  console.log("servidor ejecuntandose en el puerto 4000");
});
