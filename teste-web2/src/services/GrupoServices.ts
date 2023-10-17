import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class GrupoServices {
  async getAllGrupos() {
    return await prisma.grupo.findMany();
  }

  async criarGrupo(data: any) {
    try {
      if (!data.alunos || data.alunos.length === 0) {
        throw new Error('Um grupo deve ter pelo menos um aluno.');
      }
  
      const alunos = await Promise.all(
        data.alunos.map(async (alunoMatricula: string) => {
          const aluno = await prisma.aluno.findUnique({
            where: {
              matricula: alunoMatricula,
            },
          });
          if (!aluno) {
            throw new Error(`Aluno com a matrícula ${alunoMatricula} não encontrado.`);
          }
          return aluno;
        })
      );
  
      const grupo = await prisma.grupo.create({
        data: {
          nome: data.nome,
          descricao: data.descricao,
          estandeId: data.estandeId,
          alunos: {
            connect: alunos.map((aluno) => ({ id: aluno.id })),
          },
        },
      });
      return grupo;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao criar grupo');
    }
  }

  async updateGrupo(id: number, data: any) {
    try {
      const grupo = await prisma.grupo.update({
        where: { id: id },
        data: {
          nome: data.nome,
          descricao: data.descricao,
          estande: { connect: { id: data.estandeId } },
        },
      });
      return grupo;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao atualizar grupo');
    }
  }

  async deleteGrupo(id: number) {
    try {
      const grupo = await prisma.grupo.delete({
        where: { id: id },
      });
      return grupo;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao deletar grupo');
    }
  }

  async getGrupoById(id: number) {
    try {
      const grupo = await prisma.grupo.findUnique({
        where: { id: id },
      });
      return grupo;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao obter grupo por ID');
    }
  }
}

export default new GrupoServices();
