const express = require("express");
const idea = express.Router();
const { check } = require("express-validator");
const { validate } = require("../common/validate.middleware");

idea.use(function timeLog(req, res, next) {
  next();
});

idea.get(
  "/",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //ideaTomadaModel
);

idea.get(
  "/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //ideaTomadaModel
);

idea.post(
  "/",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //todasIdeas
);

idea.put(
  "/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //todasIdeas
);

idea.delete(
  "/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  /* todasIdeas */
);

module.exports = {
    idea
};
