import { Router } from "express";
import { find } from "../carrito/carrito.service.js";
const ideas_tomadas = Router();



ideas_tomadas.use(function timeLog(req, res, next) {
  next();
});

ideas_tomadas.get(
  "/",find

  //ideas_tomadasTomadaModel
);

ideas_tomadas.get(
  "/:id",find
 
  //ideas_tomadasTomadaModel
);

ideas_tomadas.post(
  "/",find
 
  //todasideas_tomadass
);

ideas_tomadas.put(
  "/:id",find

  //todasideas_tomadass
);

ideas_tomadas.delete(
  "/:id",find
  
  //todasideas_tomadass
);

export  {
    ideas_tomadas
};
