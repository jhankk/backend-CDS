const express = require("express");
const ideas_favoritas = express.Router();
const { check } = require("express-validator");
const { validate } = require("../common/validate.middleware");

ideas_favoritas.use(function timeLog(req, res, next) {
  next();
});

ideas_favoritas.get(
  "/",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //ideas_favoritasTomadaModel
);

ideas_favoritas.get(
  "/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //ideas_favoritasTomadaModel
);

ideas_favoritas.post(
  "/",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //todasideas_favoritass
);

ideas_favoritas.put(
  "/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //todasideas_favoritass
);

ideas_favoritas.delete(
  "/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //todasideas_favoritass
);

module.exports = {
    ideas_favoritas
};
