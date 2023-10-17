import { Router } from "express";
import CriterioController from "../controllers/CriterioController";

const CriterioRouter = Router();

CriterioRouter.get("/criterios", CriterioController.getAllCriterios);
CriterioRouter.post("/criterio", CriterioController.createCriterio);
CriterioRouter.put("/criterio/:id", CriterioController.updateCriterio);
CriterioRouter.delete("/criterio/:id", CriterioController.deleteCriterio);
CriterioRouter.get("/criterio/:id", CriterioController.getCriterioById);

export default CriterioRouter;
