import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AlunoService {
  public async getAllAlunos() {
    return prisma.aluno.findMany();
  }

  public async getAlunoById(id: number) {
    return prisma.aluno.findUnique({
      where: { id },
    });
  }

  public async createAluno(
    data: { 
      nome:       string; 
      matricula:  string; 
      curso:      string; 
      estandeId:  number 
    }) {
    return prisma.aluno.create({
      data,
    });
  }

  public async deleteAluno(id: number) {
    // Exclua as avaliações relacionadas ao aluno primeiro (se houver uma relação)
    await prisma.avaliacao.deleteMany({
      where: {
        idAluno: id,
      },
    });

    // Em seguida, exclua o aluno
    const aluno = await prisma.aluno.delete({
      where: {
        id,
      },
    });

    return aluno;
  }

  public async updateAluno(id: number, 
    data: { 
      nome?:      string; 
      matricula?: string; 
      curso?:     string; 
      estandeId?: number 
    }) {
    return prisma.aluno.update({
      where: { id },
      data,
    });
  }
}