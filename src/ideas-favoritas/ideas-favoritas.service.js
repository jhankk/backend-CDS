import { response } from "express";
import { connection } from "../common/connection.js";
import "dotenv/config.js";

const find = (req, res = response) => {
  connection.query(
    `SELECT  ideas_favoritas.id_ideaFav, ideas_favoritas.id_idea, ideas_favoritas.correo_estudiante
    FROM ideas_favoritas
    INNER JOIN ideas ON
    ideas_favoritas.id_idea = ideas.id_idea 
        `,
    [],
    function (err, result, fields) {
      return result.length == 0
        ? res.status(404).json({ response: process.env.DEFAULT })
        : res.json(result);
    }
  );
};

const findOne = (req, res = response) => {
  connection.query(
    `SELECT  ideas_favoritas.id_ideaFav, ideas_favoritas.id_idea, ideas_favoritas.correo_estudiante
    FROM ideas_favoritas
    INNER JOIN ideas ON
    ideas_favoritas.id_idea = ideas.id_idea 
    WHERE ideas_favoritas.correo_estudiante = ?
    `,
    [req.params.email],
    function (err, result, fields) {
      return result.length == 0
        ? res.status(404).json({ response: process.env.DEFAULT })
        : res.json(result);
    }
  );
};

const create = (req, res = response) => {
  connection.query(
    `INSERT INTO ideas_favoritas  (correo_estudiante, id_idea)
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
    `DELETE FROM ideas_favoritas
    WHERE id_ideaFav = ? `,
    [req.params.id_ideaFav],
    function (err, result, fields) {
      err ? res.json(err) : res.json(result);
    }
  );
};

export { find, findOne, create, update, remove };
