import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AvaliacaoServices {
  async getAllAvaliacoes() {
    return await prisma.avaliacao.findMany();
  }

  async criarAvaliacao(data: any) {
    const { alunoId, grupoId, professorId } = data;

    // Verificar se o aluno pertence ao grupo
    const aluno = await prisma.aluno.findUnique({ where: { id: alunoId }, include: { grupos: true } });
    if (aluno && aluno.grupos.some(grupo => grupo.id === grupoId)) {
      throw new Error("O aluno não pode avaliar o grupo ao qual pertence.");
    }

    // Verificar se o aluno ou professor já avaliou o grupo anteriormente
    const avaliacaoExistente = await prisma.avaliacao.findFirst({
      where: {
        alunoId: alunoId,
        grupoId: grupoId,
      },
    });
    if (avaliacaoExistente) {
      throw new Error("O aluno ou professor já avaliou este grupo.");
    }

    try {
      const avaliacao = await prisma.avaliacao.create({
        data: {
          aluno: { connect: { id: alunoId } },
          grupo: { connect: { id: grupoId } },
          professor: { connect: { id: professorId } },
          criterio: { connect: { id: data.criterioId } },
          nota: data.nota,
        },
      });
      return avaliacao;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao criar avaliação");
    }
  }

  async updateAvaliacao(id: number, data: any) {
    try {
      const avaliacao = await prisma.avaliacao.update({
        where: { id: id },
        data: data,
      });
      return avaliacao;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao atualizar avaliação");
    }
  }

  async deleteAvaliacao(id: number) {
    try {
      const avaliacao = await prisma.avaliacao.delete({
        where: { id: id },
      });
      return avaliacao;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao deletar avaliação");
    }
  }

  async getAvaliacaoById(id: number) {
    try {
      const avaliacao = await prisma.avaliacao.findUnique({
        where: { id: id },
      });
      return avaliacao;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao obter avaliação por ID");
    }
  }
}

export default new AvaliacaoServices();
