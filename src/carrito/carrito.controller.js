import { Router } from "express";
const carrito = Router();
import { findOne, find, create, update, remove } from "./carrito.service.js";

carrito.use((req, res, next) => {
  next();
});

carrito.get(
  "/",
  find
);

carrito.get(
  "/:email",
  findOne
);

carrito.post(
  "/:email/:id_idea",
  create
);

carrito.put(
  "/:email",
  update
);

carrito.delete(
  "/:id_cart",
  remove
);

export  {
  carrito
};
