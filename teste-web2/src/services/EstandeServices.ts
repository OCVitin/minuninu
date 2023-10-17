import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class EstandeServices {
  async getAllEstandes() {
    return await prisma.estande.findMany();
  }

  async criarEstande(data: any) {
    try {
      const estande = await prisma.estande.create({
        data: {
          nome: data.nome,
          descricao: data.descricao,
          imagem: data.imagem,
        },
      });
      return estande;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao criar estande");
    }
  }

  async updateEstande(id: number, data: any) {
    try {
      const estande = await prisma.estande.update({
        where: { id: id },
        data: data,
      });
      return estande;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao atualizar estande");
    }
  }

  async deleteEstande(id: number) {
    try {
      const estande = await prisma.estande.delete({
        where: { id: id },
      });
      return estande;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao deletar estande");
    }
  }

  async getEstandeById(id: number) {
    try {
      const estande = await prisma.estande.findUnique({
        where: { id: id },
      });
      return estande;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao obter estande por ID");
    }
  }
}

export default new EstandeServices();
