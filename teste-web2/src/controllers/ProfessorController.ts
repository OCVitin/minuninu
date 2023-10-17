import { Request, Response } from "express";
import ProfessorServices from "../services/ProfessorServices";

class ProfessorController {
  async getAllProfessores(req: Request, res: Response) {
    try {
      const professores = await ProfessorServices.getAllProfessores();
      res.status(200).json(professores);
    } catch (error) {
      res.status(500).json({ error: "Falha ao listar os professores" });
    }
  }

  async createProfessor(req: Request, res: Response) {
    try {
      const professor = await ProfessorServices.criarProfessor(req.body);
      res.status(201).json(professor);
    } catch (error) {
      res.status(500).json({ error: "Falha ao criar um professor" });
    }
  }

  async updateProfessor(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      const updatedProfessor = await ProfessorServices.updateProfessor(id, req.body);
      res.status(200).json(updatedProfessor);
    } catch (error) {
      res.status(500).json({ error: "Falha ao atualizar o professor" });
    }
  }

  async deleteProfessor(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      const deletedProfessor = await ProfessorServices.deleteProfessor(id);
      res.status(200).json(deletedProfessor);
    } catch (error) {
      res.status(500).json({ error: "Falha ao deletar o professor" });
    }
  }

  async getProfessorById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      const professor = await ProfessorServices.getProfessorById(id);
      res.status(200).json(professor);
    } catch (error) {
      res.status(500).json({ error: "Falha ao obter o professor por ID" });
    }
  }
}

export default new ProfessorController();
