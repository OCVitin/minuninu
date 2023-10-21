import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ProfessorService {
  public async getAllProfessores() {
    return prisma.professor.findMany();
  }

  public async getProfessorById(id: number) {
    return prisma.professor.findUnique({
      where: { id },
    });
  }

  public async createProfessor(data: { nome: string; matricula: string; area: string }) {
    return prisma.professor.create({
      data,
    });
  }

  public async deleteProfessor(id: number) {
    // Exclua as avaliações relacionadas ao professor primeiro (se houver uma relação)
    await prisma.avaliacao.deleteMany({
      where: {
        idProf: id,
      },
    });

    // Em seguida, exclua o professor
    const professor = await prisma.professor.delete({
      where: {
        id,
      },
    });

    return professor;
  }

  public async updateProfessor(id: number, data: { nome?: string; matricula?: string; area?: string }) {
    return prisma.professor.update({
      where: { id },
      data,
    });
  }
}
