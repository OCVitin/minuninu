import { Request, Response } from "express";
import AvaliacaoServices from "../services/AvaliacaoServices";

class AvaliacaoController {
  async getAllAvaliacoes(req: Request, res: Response) {
    try {
      const avaliacoes = await AvaliacaoServices.getAllAvaliacoes();
      res.status(200).json(avaliacoes);
    } catch (error) {
      res.status(500).json({ error: "Falha ao listar as avaliacoes" });
    }
  }

  async createAvaliacao(req: Request, res: Response) {
    try {
      const avaliacao = await AvaliacaoServices.criarAvaliacao(req.body);
      res.status(201).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: "Falha ao criar uma avaliacao" });
    }
  }

  async updateAvaliacao(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const avaliacao = await AvaliacaoServices.updateAvaliacao(Number(id), req.body);
      res.status(200).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: "Falha ao atualizar a avaliacao" });
    }
  }

  async deleteAvaliacao(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const avaliacao = await AvaliacaoServices.deleteAvaliacao(Number(id));
      res.status(200).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: "Falha ao deletar a avaliacao" });
    }
  }

  async getAvaliacaoById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const avaliacao = await AvaliacaoServices.getAvaliacaoById(Number(id));
      res.status(200).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: "Falha ao obter a avaliacao por ID" });
    }
  }
}

export default new AvaliacaoController();
