import { Request, Response } from "express";
import CriterioServices from "../services/CriterioServices";

class CriterioController {
  async getAllCriterios(req: Request, res: Response) {
    try {
      const criterios = await CriterioServices.getAllCriterios();
      res.status(200).json(criterios);
    } catch (error) {
      res.status(500).json({ error: "Falha ao listar os critérios" });
    }
  }

  async createCriterio(req: Request, res: Response) {
    try {
      const criterio = await CriterioServices.criarCriterio(req.body);
      res.status(201).json(criterio);
    } catch (error) {
      res.status(500).json({ error: "Falha ao criar um critério" });
    }
  }

  async updateCriterio(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    try {
      const criterio = await CriterioServices.updateCriterio(parseInt(id), data);
      res.status(200).json(criterio);
    } catch (error) {
      res.status(500).json({ error: "Falha ao atualizar o critério" });
    }
  }

  async deleteCriterio(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const criterio = await CriterioServices.deleteCriterio(parseInt(id));
      res.status(200).json(criterio);
    } catch (error) {
      res.status(500).json({ error: "Falha ao deletar o critério" });
    }
  }

  async getCriterioById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const criterio = await CriterioServices.getCriterioById(parseInt(id));
      res.status(200).json(criterio);
    } catch (error) {
      res.status(500).json({ error: "Falha ao obter o critério por ID" });
    }
  }
}

export default new CriterioController();
