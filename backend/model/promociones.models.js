import { model } from "mongoose";
import { cliente } from "./clientes.models.js";
export const promociones = new model('promociones', cliente)