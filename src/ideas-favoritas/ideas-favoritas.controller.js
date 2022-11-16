import { Router } from "express";
import { find } from "../carrito/carrito.service.js";
const ideas_favoritas = Router();



ideas_favoritas.use(function timeLog(req, res, next) {

});

ideas_favoritas.get(
  "/",
  find
  //ideas_favoritasTomadaModel
);

ideas_favoritas.get(
  "/:id",
  find
  //ideas_favoritasTomadaModel
);

ideas_favoritas.post(
  "/",
  find
  //todasideas_favoritass
);

ideas_favoritas.put(
  "/:id",
  find
  //todasideas_favoritass
);

ideas_favoritas.delete(
  "/:id",
  find
  //todasideas_favoritass
);

export  {
    ideas_favoritas
};
