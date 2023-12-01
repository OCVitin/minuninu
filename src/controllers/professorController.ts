import { Request, Response } from 'express';
import { ProfessorService } from '../services/professorService';

const professorService = new ProfessorService();

export class ProfessorController {
  public async getAllProfessores(req: Request, res: Response) {
    try {
      const professores = await professorService.getAllProfessores();
      return res.json(professores);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar professores' });
    }
  }

  public async getProfessorById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const professor = await professorService.getProfessorById(parseInt(id, 10));
      if (professor) {
        return res.json(professor);
      } else {
        return res.status(404).json({ error: 'Professor não encontrado' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar professor' });
    }
  }

  public async createProfessor(req: Request, res: Response) {
    const professorData = req.body;
    try {
      const professor = await professorService.createProfessor(professorData);
      return res.json(professor);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar professor' });
    }
  }

  public async deleteProfessor(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const professor = await professorService.deleteProfessor(parseInt(id, 10));
      return res.json(professor);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir professor' });
    }
  }

  public async updateProfessor(req: Request, res: Response) {
    const { id } = req.params;
    const professorData = req.body;
    try {
      const professor = await professorService.updateProfessor(parseInt(id, 10), professorData);
      if (professor) {
        return res.json(professor);
      } else {
        return res.status(404).json({ error: 'Professor não encontrado' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar professor' });
    }
  }

  public async getProfessorByMatricula(req: Request, res: Response) {
    const { matricula } = req.params;
    try {
      const professor = await professorService.getProfessorByMatricula(matricula);
      if (professor) {
        return res.json(professor);
      } else {
        return res.status(404).json({ error: 'Professor não encontrado' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar professor' });
    }
  }
}