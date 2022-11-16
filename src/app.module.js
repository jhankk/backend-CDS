import express, { json } from "express";
const app = express();
import cors from "cors";
import { carrito } from "./carrito/carrito.module.js";
import { idea } from "./ideas/ideas.module.js";
import { ideas_favoritas } from "./ideas-favoritas/ideas-favoritas.module.js";
import { ideas_tomadas } from "./ideas-tomadas/ideas-tomadas.module.js";
import "dotenv/config.js";

app
  .use(cors())
  .use(json())
  .use("/carrito", carrito)
  .use("/ideas", idea)
  .use("/ideas-favoritas", ideas_favoritas)
  .use("/ideas-tomadas", ideas_tomadas);


export  {
  app,
};
