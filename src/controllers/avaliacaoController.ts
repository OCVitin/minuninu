import { Request, Response } from 'express';
import { AvaliacaoService } from '../services/avaliacaoService';

const avaliacaoService = new AvaliacaoService();

export class AvaliacaoController {
  public async getAllAvaliacoes(req: Request, res: Response) {
    try {
      const avaliacoes = await avaliacaoService.getAllAvaliacoes();
      return res.json(avaliacoes);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar avaliações' });
    }
  }

  public async getAvaliacaoById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const avaliacao = await avaliacaoService.getAvaliacaoById(parseInt(id, 10));
      if (avaliacao) {
        return res.json(avaliacao);
      } else {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar avaliação' });
    }
  }

  public async createAvaliacao(req: Request, res: Response) {
    const avaliacaoData = req.body;
    try {
      const avaliacao = await avaliacaoService.createAvaliacao(avaliacaoData);
      return res.json(avaliacao);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar avaliação' });
    }
  }

  public async deleteAvaliacao(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const avaliacao = await avaliacaoService.deleteAvaliacao(parseInt(id, 10));
      return res.json(avaliacao);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir avaliação' });
    }
  }

  public async updateAvaliacao(req: Request, res: Response) {
    const { id } = req.params;
    const avaliacaoData = req.body;
    try {
      const avaliacao = await avaliacaoService.updateAvaliacao(parseInt(id, 10), avaliacaoData);
      if (avaliacao) {
        return res.json(avaliacao);
      } else {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar avaliação' });
    }
  }

  public async getAvaliacaoByAlunoId(req: Request, res: Response) {
    const { idAluno } = req.params;
    try {
      const avaliacao = await avaliacaoService.getAvaliacaoByAlunoId(parseInt(idAluno, 10));
      if (avaliacao) {
        return res.json(avaliacao);
      } else {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar avaliação' });
    }
  }

  public async getAvaliacaoByProfId(req: Request, res: Response) {
    const { idProf } = req.params;
    try {
      const avaliacao = await avaliacaoService.getAvaliacaoByProfId(parseInt(idProf, 10));
      if (avaliacao) {
        return res.json(avaliacao);
      } else {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar avaliação' });
    }
  }
}