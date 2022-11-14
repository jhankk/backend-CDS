const express = require("express");
const app = express();
const cors = require("cors");
const { carrito } = require("./carrito/carrito.module");
const { idea } = require("./ideas/ideas.module");
const { ideas_favoritas } = require("./ideas-favoritas/ideas-favoritas.module");
const { ideas_tomadas } = require("./ideas-tomadas/ideas-tomadas.module");
require("dotenv").config();

app
  .use(cors())
  .use(express.json())
  .use("/carrito", carrito)
  .use("/ideas", idea)
  .use("/ideas-favoritas", ideas_favoritas)
  .use("/ideas-tomadas", ideas_tomadas);



const server = require("http").createServer(app);

const io = require("socket.io")(server);

module.exports = {
  server,
  io
};
