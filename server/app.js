const path = require("path");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 8001;

app.get("/api/products", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "data", "products.json"));
});

/*
  Olá recrutador :) sei que não é o correto servir arquivos
  direto da aplicação node, o certo seria usar um proxy reverso,
  ou um S3 para entregar esses arquivos, mas por motivos de praticidade
  decidi por usar o método express.static nesse desafio.
*/
app.use("/static", express.static(path.join(__dirname, "public", "static")));

app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});
