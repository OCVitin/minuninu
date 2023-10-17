import { Router } from "express";
import AvaliacaoController from "../controllers/AvaliacaoController";

const AvaliacaoRouter = Router();

AvaliacaoRouter.get("/avaliacoes", AvaliacaoController.getAllAvaliacoes);
AvaliacaoRouter.post("/avaliacao", AvaliacaoController.createAvaliacao);
AvaliacaoRouter.put("/avaliacao/:id", AvaliacaoController.updateAvaliacao);
AvaliacaoRouter.delete("/avaliacao/:id", AvaliacaoController.deleteAvaliacao);
AvaliacaoRouter.get("/avaliacao/:id", AvaliacaoController.getAvaliacaoById);

export default AvaliacaoRouter;
