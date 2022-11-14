const { response } = require("express");
const { connection } = require("../common/connection");
require("dotenv").config();
const find = (req, res = response) => {
  //hacer query para buscar todos
  res.json([]);
};

const findOne = (req, res = response) => {
  connection.query(
    `
    SELECT ideas.nombre_idea, carrito.id_carrito, carrito.correo_estudiante, carrito.id_idea
    FROM carrito  
    INNER JOIN ideas ON carrito.id_idea = ideas.id_idea
    WHERE carrito.correo_estudiante = ? `,
    [req.params.email],
    function (err, result, fields) {
      return result.length === 0
        ? res.status(404).json({ response: process.env.DEFAULT })
        : res.json(result);
    }
  );
};

const create = (req, res = response) => {
  //hacer query para crear uno
};

const update = (req, res = response) => {
  //hacer query para actualizar uno
  res.json([]);
};

const remove = (req, res = response) => {
  //hacer query para remover uno
};

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
};
