const express = require("express");
const carrito = express.Router();
const { findOne, find, create, update, remove } = require("./carrito.service");

carrito.use(function timeLog(req, res, next) {
  next();
});

carrito.get(
  "/",
  find
);

carrito.get(
  "/:email",
  findOne
);

carrito.post(
  "/",
  create
);

carrito.put(
  "/:email",
  update
);

carrito.delete(
  "/:email",
  remove
);

module.exports = {
  carrito
};
