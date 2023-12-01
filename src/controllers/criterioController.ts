import { Request, Response } from 'express';
import { CriterioService } from '../services/criterioService';

const criterioService = new CriterioService();

export class CriterioController {
  public async getAllCriterios(req: Request, res: Response) {
    try {
      const criterios = await criterioService.getAllCriterios();
      return res.json(criterios);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar critérios' });
    }
  }

  public async getCriterioById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const criterio = await criterioService.getCriterioById(parseInt(id, 10));
      if (criterio) {
        return res.json(criterio);
      } else {
        return res.status(404).json({ error: 'Critério não encontrado' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar critério' });
    }
  }

  public async createCriterio(req: Request, res: Response) {
    const criterioData = req.body;
    try {
      const criterio = await criterioService.createCriterio(criterioData);
      return res.json(criterio);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar critério' });
    }
  }

  public async deleteCriterio(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const criterio = await criterioService.deleteCriterio(parseInt(id, 10));
      return res.json(criterio);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir critério' });
    }
  }

  public async updateCriterio(req: Request, res: Response) {
    const { id } = req.params;
    const criterioData = req.body;
    try {
      const criterio = await criterioService.updateCriterio(parseInt(id, 10), criterioData);
      if (criterio) {
        return res.json(criterio);
      } else {
        return res.status(404).json({ error: 'Critério não encontrado' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar critério' });
    }
  }

  public async getCriterioByAvaliacaoId(req: Request, res: Response) {
    const { idAvaliacao } = req.params;
    try {
      const criterios = await criterioService.getCriterioByAvaliacaoId(parseInt(idAvaliacao, 10));
      if (criterios) {
        return res.json(criterios);
      } else {
        return res.status(404).json({ error: 'Critérios não encontrados' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar critérios' });
    }
  }
}