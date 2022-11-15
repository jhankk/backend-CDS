const { response } = require("express");
const { connection } = require("../common/connection");


const find = (req, res = response) => {
  connection.query(
    `
        SELECT  ideas_favoritas.id_ideaFav, ideas_favoritas.id_idea, ideas_favoritas.correo_estudiante
        FROM ideas_favoritas
        INNER JOIN ideas ON
        ideas_favoritas.id_idea = ideas.id_idea 
        `,
    [],
    function (err, result, fields) {
      result.length == 0
        ? res.status(404).json({ response: process.env.DEFAULT })
        : res.json(result);
    }
  );
};

module.exports = 
{
    find
}