import { Request, Response } from "express";
import AlunoServices from "../services/AlunoServices";

class AlunoController {
  async getAllAlunos(req: Request, res: Response) {
    try {
      const alunos = await AlunoServices.getAllAlunos();
      res.status(200).json(alunos);
    } catch (error) {
      res.status(500).json({ error: "Falha ao listar os alunos" });
    }
  }

  async createAluno(req: Request, res: Response) {
    try {
      const aluno = await AlunoServices.criarAluno(req.body);
      res.status(201).json(aluno);
    } catch (error) {
      res.status(500).json({ error: "Falha ao criar um aluno" });
    }
  }

  async updateAluno(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const aluno = await AlunoServices.atualizarAluno(id, req.body);
      res.status(200).json(aluno);
    } catch (error) {
      res.status(500).json({ error: "Falha ao atualizar o aluno" });
    }
  }

  async deleteAluno(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const aluno = await AlunoServices.deletarAluno(id);
      res.status(200).json(aluno);
    } catch (error) {
      res.status(500).json({ error: "Falha ao deletar o aluno" });
    }
  }

  async getAlunoById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const aluno = await AlunoServices.getAlunoById(id);
      res.status(200).json(aluno);
    } catch (error) {
      res.status(500).json({ error: "Falha ao obter o aluno por ID" });
    }
  }
}

export default new AlunoController();
