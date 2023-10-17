import { Router } from "express";
import ProfessorController from "../controllers/ProfessorController";

const ProfessorRouter = Router();

ProfessorRouter.get("/professores", ProfessorController.getAllProfessores);
ProfessorRouter.post("/professor", ProfessorController.createProfessor);
ProfessorRouter.put("/professor/:id", ProfessorController.updateProfessor);
ProfessorRouter.delete("/professor/:id", ProfessorController.deleteProfessor);
ProfessorRouter.get("/professor/:id", ProfessorController.getProfessorById);

export default ProfessorRouter;
