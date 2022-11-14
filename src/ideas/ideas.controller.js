const express = require("express");
const idea = express.Router();
const { check } = require("express-validator");
const { validate } = require("../common/validate.middleware");

idea.use(function timeLog(req, res, next) {
  next();
});

idea.get(
  "/idea",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //ideaTomadaModel
);

idea.get(
  "/idea/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //ideaTomadaModel
);

idea.post(
  "/idea",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //todasIdeas
);

idea.put(
  "/idea/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  //todasIdeas
);

idea.delete(
  "/idea/:id",
  [check("correo", "El correo es obligatorio").isEmail(), validate],
  /* todasIdeas */
);

module.exports = {
    idea
};
