import { Router } from "express";
import { find, findOne, create, remove} from "./ideas-favoritas.service.js";
const ideas_favoritas = Router();

ideas_favoritas.use(function timeLog(req, res, next) {
  next();
});

ideas_favoritas.get(
  "/",
  find
  //ideas_favoritasTomadaModelALL
);

ideas_favoritas.get(
  "/:email",
  findOne
  //ideas_favoritasTomadaModel
);

ideas_favoritas.post(
  "/:email/:id_idea",
  create
  //todasideas_favoritass
);

ideas_favoritas.put(
  "/:id",
  find
  //todasideas_favoritass
);

ideas_favoritas.delete(
  "/:id_ideaFav",
  remove
  //todasideas_favoritass
);

export  {
    ideas_favoritas
};
