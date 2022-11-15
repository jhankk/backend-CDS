const express = require("express");
const carrito = express.Router();
const { findOne, find, create, update, remove } = require("./carrito.service");

carrito.use((req, res, next) => {
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
  "/:email/:id_idea",
  create
);

carrito.put(
  "/:email",
  update
);

carrito.delete(
  "/:id_cart",
  remove
);

module.exports = {
  carrito
};
