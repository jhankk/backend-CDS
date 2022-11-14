const express = require("express");
const carrito = express.Router();
const { check } = require("express-validator");
const { validate } = require("../common/validate.middleware");

carrito.use(function timeLog(req, res, next) {
  next();
});

carrito.get(
  "/carrito",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  /* ideaTomadaModel */
);

carrito.get(
  "/carrito/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  /* ideaTomadaModel */
);

carrito.post(
  "/carrito",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  /* todasIdeas */
);

carrito.put(
  "/carrito/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  /* todasIdeas */
);

carrito.delete(
  "/carrito/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  /* todasIdeas */
);

module.exports = {
  carrito
};
