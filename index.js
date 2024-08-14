const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  return res
    .status(400)
    .send({ msg: `API prueba evaluacion 4 Diplomado DevOps` });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
