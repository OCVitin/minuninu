import { Request, Response } from "express";
import EstandeServices from "../services/EstandeServices";

class EstandeController {
  async getAllEstandes(req: Request, res: Response) {
    try {
      const estandes = await EstandeServices.getAllEstandes();
      res.status(200).json(estandes);
    } catch (error) {
      res.status(500).json({ error: "Falha ao listar os estandes" });
    }
  }

  async createEstande(req: Request, res: Response) {
    try {
      const estande = await EstandeServices.criarEstande(req.body);
      res.status(201).json(estande);
    } catch (error) {
      res.status(500).json({ error: "Falha ao criar um estande" });
    }
  }

  async updateEstande(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const estande = await EstandeServices.updateEstande(parseInt(id), req.body);
      res.status(200).json(estande);
    } catch (error) {
      res.status(500).json({ error: "Falha ao atualizar o estande" });
    }
  }

  async deleteEstande(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const estande = await EstandeServices.deleteEstande(parseInt(id));
      res.status(200).json(estande);
    } catch (error) {
      res.status(500).json({ error: "Falha ao deletar o estande" });
    }
  }

  async getEstandeById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const estande = await EstandeServices.getEstandeById(parseInt(id));
      res.status(200).json(estande);
    } catch (error) {
      res.status(500).json({ error: "Falha ao obter o estande por ID" });
    }
  }
}

export default new EstandeController();
