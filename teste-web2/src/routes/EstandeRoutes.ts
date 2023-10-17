import { Router } from "express";
import EstandeController from "../controllers/EstandeController";

const EstandeRouter = Router();

EstandeRouter.get("/estandes", EstandeController.getAllEstandes);
EstandeRouter.post("/estande", EstandeController.createEstande);
EstandeRouter.put("/estande/:id", EstandeController.updateEstande);
EstandeRouter.delete("/estande/:id", EstandeController.deleteEstande);
EstandeRouter.get("/estande/:id", EstandeController.getEstandeById);

export default EstandeRouter;
