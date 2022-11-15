const express = require("express");
const ideas_favoritas = express.Router();
const { check } = require("express-validator");
const { validate } = require("../common/validate.middleware");

ideas_favoritas.use(function timeLog(req, res, next) {
  next();
});

ideas_favoritas.get(
  "/",
  //ideas_favoritasTomadaModel
);

ideas_favoritas.get(
  "/:id",
  //ideas_favoritasTomadaModel
);

ideas_favoritas.post(
  "/",
  //todasideas_favoritass
);

ideas_favoritas.put(
  "/:id",
  //todasideas_favoritass
);

ideas_favoritas.delete(
  "/:id",
  //todasideas_favoritass
);

module.exports = {
    ideas_favoritas
};
