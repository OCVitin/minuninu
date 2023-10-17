import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

const AlunoRouter = Router();

AlunoRouter.get("/alunos", AlunoController.getAllAlunos);
AlunoRouter.post("/aluno", AlunoController.createAluno);
AlunoRouter.put("/aluno/:id", AlunoController.updateAluno);
AlunoRouter.delete("/aluno/:id", AlunoController.deleteAluno);
AlunoRouter.get("/aluno/:id", AlunoController.getAlunoById);

export default AlunoRouter;
