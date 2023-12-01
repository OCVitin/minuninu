import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AvaliacaoService {
  public async getAllAvaliacoes() {
    return prisma.avaliacao.findMany();
  }

  public async getAvaliacaoById(id: number) {
    return prisma.avaliacao.findUnique({
      where: { id },
    });
  }

  public async createAvaliacao(data: { 
    idAluno?: number; 
    idProf?: number; 
    estandeId: number;
  }) {
    const avaliacao = await prisma.avaliacao.findFirst({
      where: {
        idAluno: data.idAluno,
        idProf: data.idProf,
        estandeId: data.estandeId,
      },
    });
  
    if (avaliacao) {
      return prisma.avaliacao.update({
        where: {
          id: avaliacao.id,
        },
        data,
      });
    } else {
      return prisma.avaliacao.create({
        data,
      });
    }
  }
  

  public async deleteAvaliacao(id: number) {
    const avaliacao = await prisma.avaliacao.delete({
      where: { id },
    });

    return avaliacao;
  }

  public async updateAvaliacao(id: number, 
    data: { 
      idAluno?:   number; 
      idProf?:    number; 
      estandeId?: number 
    }) {
    return prisma.avaliacao.update({
      where: { id },
      data,
    });
  }
}