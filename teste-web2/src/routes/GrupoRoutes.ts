import { Router } from "express";
import GrupoController from "../controllers/GrupoController";

const GrupoRouter = Router();

GrupoRouter.get("/grupos", GrupoController.getAllGrupos);
GrupoRouter.post("/grupo", GrupoController.createGrupo);
GrupoRouter.put("/grupo/:id", GrupoController.updateGrupo);
GrupoRouter.delete("/grupo/:id", GrupoController.deleteGrupo);
GrupoRouter.get("/grupo/:id", GrupoController.getGrupoById);

export default GrupoRouter;
