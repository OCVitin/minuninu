import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CriterioServices {
  async getAllCriterios() {
    return await prisma.criterio.findMany();
  }

  async criarCriterio(data: any) {
    try {
      const criterio = await prisma.criterio.create({
        data: {
          nome: data.nome,
          descricao: data.descricao,
        },
      });
      return criterio;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao criar critério");
    }
  }

  async updateCriterio(id: number, data: any) {
    try {
      const criterio = await prisma.criterio.update({
        where: { id: id },
        data: data,
      });
      return criterio;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao atualizar critério");
    }
  }

  async deleteCriterio(id: number) {
    try {
      const criterio = await prisma.criterio.delete({
        where: { id: id },
      });
      return criterio;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao deletar critério");
    }
  }

  async getCriterioById(id: number) {
    try {
      const criterio = await prisma.criterio.findUnique({
        where: { id: id },
      });
      return criterio;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao obter critério por ID");
    }
  }
}

export default new CriterioServices();
