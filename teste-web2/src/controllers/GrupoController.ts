import { Request, Response } from "express";
import GrupoServices from "../services/GrupoServices";

class GrupoController {
  async getAllGrupos(req: Request, res: Response) {
    try {
      const grupos = await GrupoServices.getAllGrupos();
      res.status(200).json(grupos);
    } catch (error) {
      res.status(500).json({ error: "Falha ao listar os grupos" });
    }
  }

  async createGrupo(req: Request, res: Response) {
    try {
      const grupo = await GrupoServices.criarGrupo(req.body);
      res.status(201).json(grupo);
    } catch (error) {
      res.status(500).json({ error: "Falha ao criar um grupo" });
    }
  }

  async updateGrupo(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const updatedGrupo = await GrupoServices.updateGrupo(parseInt(id), req.body);
      res.status(200).json(updatedGrupo);
    } catch (error) {
      res.status(500).json({ error: "Falha ao atualizar o grupo" });
    }
  }

  async deleteGrupo(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedGrupo = await GrupoServices.deleteGrupo(parseInt(id));
      res.status(200).json(deletedGrupo);
    } catch (error) {
      res.status(500).json({ error: "Falha ao deletar o grupo" });
    }
  }

  async getGrupoById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const grupo = await GrupoServices.getGrupoById(parseInt(id));
      res.status(200).json(grupo);
    } catch (error) {
      res.status(500).json({ error: "Falha ao obter o grupo por ID" });
    }
  }
}

export default new GrupoController();
