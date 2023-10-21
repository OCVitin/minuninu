import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CriterioService {
  public async getAllCriterios() {
    return prisma.criterio.findMany();
  }

  public async getCriterioById(id: number) {
    return prisma.criterio.findUnique({
      where: { id },
    });
  }

  public async createCriterio(data: { nome: string; descricao: string; avaliacaoId: number }) {
    return prisma.criterio.create({
      data,
    });
  }

  public async deleteCriterio(id: number) {
    const criterio = await prisma.criterio.delete({
      where: { id },
    });

    return criterio;
  }

  public async updateCriterio(id: number, data: { nome?: string; descricao?: string; avaliacaoId?: number }) {
    return prisma.criterio.update({
      where: { id },
      data,
    });
  }
}
