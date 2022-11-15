const { response } = require("express");
const { connection } = require("../common/connection");
require("dotenv").config();
const find = (req, res = response) => {
  //hacer query para buscar todos
  connection.query(
    `
    SELECT ideas.nombre_idea, carrito.id_carrito, carrito.correo_estudiante, carrito.id_idea
    FROM carrito  
    INNER JOIN ideas ON carrito.id_idea = ideas.id_idea
   `,
    [],
    function (err, result, fields) {
      result.length == 0
        ? res.status(404).json({ response: process.env.DEFAULT })
        : res.json(result);
    }
  );
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
      result.length == 0
        ? res.status(404).json({ response: process.env.DEFAULT })
        : res.json(result);
    }
  );
};

const create = (req, res = response) => {
  connection.query(
    `
  INSERT INTO carrito  
  (correo_estudiante, id_idea)
  values (?,?)`,
    [req.params.email, req.params.id_idea],
    function (err, result, fields) {
      err ? res.json(err) : res.json(result);
    }
  );
};

const update = (req, res = response) => {
  //hacer query para actualizar uno
  res.json([]);
};

const remove = (req, res = response) => {
  connection.query(
    `
  DELETE FROM carrito 
  WHERE id_carrito = ?`,
    [req.params.id_cart],
    function (err, result, fields) {
      err ? res.json(err) : res.json(result);
    }
  );
};

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
};
