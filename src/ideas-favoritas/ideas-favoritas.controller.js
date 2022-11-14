const express = require("express");
const ideas_favoritas = express.Router();
const { check } = require("express-validator");
const { validate } = require("../common/validate.middleware");

ideas_favoritas.use(function timeLog(req, res, next) {
  next();
});

ideas_favoritas.get(
  "/ideas_favoritas",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //ideas_favoritasTomadaModel
);

ideas_favoritas.get(
  "/ideas_favoritas/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //ideas_favoritasTomadaModel
);

ideas_favoritas.post(
  "/ideas_favoritas",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //todasideas_favoritass
);

ideas_favoritas.put(
  "/ideas_favoritas/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //todasideas_favoritass
);

ideas_favoritas.delete(
  "/ideas_favoritas/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //todasideas_favoritass
);

module.exports = {
    ideas_favoritas
};
