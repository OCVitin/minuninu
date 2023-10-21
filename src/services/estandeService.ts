import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class EstandeService {
  public async getAllEstandes() {
    return prisma.estande.findMany();
  }

  public async getEstandeById(id: number) {
    return prisma.estande.findUnique({
      where: { id },
    });
  }

  public async createEstande(data: { nomeGrupo: string }) {
    return prisma.estande.create({
      data,
    });
  }

  public async deleteEstande(id: number) {
    // Exclua as avaliações relacionadas ao estande primeiro (se houver uma relação)
    await prisma.avaliacao.deleteMany({
      where: {
        estandeId: id,
      },
    });

    // Em seguida, exclua o estande
    const estande = await prisma.estande.delete({
      where: {
        id,
      },
    });

    return estande;
  }

  public async updateEstande(id: number, data: { nomeGrupo?: string }) {
    return prisma.estande.update({
      where: { id },
      data,
    });
  }
}