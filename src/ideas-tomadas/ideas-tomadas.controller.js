const express = require("express");
const ideas_tomadas = express.Router();
const { check } = require("express-validator");
const { validate } = require("../common/validate.middleware");

ideas_tomadas.use(function timeLog(req, res, next) {
  next();
});

ideas_tomadas.get(
  "/",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //ideas_tomadasTomadaModel
);

ideas_tomadas.get(
  "/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //ideas_tomadasTomadaModel
);

ideas_tomadas.post(
  "/",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //todasideas_tomadass
);

ideas_tomadas.put(
  "/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //todasideas_tomadass
);

ideas_tomadas.delete(
  "/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //todasideas_tomadass
);

module.exports = {
    ideas_tomadas
};
