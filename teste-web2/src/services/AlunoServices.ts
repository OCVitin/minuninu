import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AlunoServices {
  async getAllAlunos() {
    return await prisma.aluno.findMany();
  }

  async getAlunoById(id: number) {
    return await prisma.aluno.findUnique({
      where: { id: id },
    });
  }

  async criarAluno(data: any) {
    try {
      const aluno = await prisma.aluno.create({
        data: {
          nome: data.nome,
          email: data.email,
          matricula: data.matricula, // Sua lógica para criar a matrícula única
          senha: data.senha,
        },
      });
      return aluno;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao criar aluno');
    }
  }

  async atualizarAluno(id: number, data: any) {
    try {
      const aluno = await prisma.aluno.update({
        where: { id: id },
        data: {
          nome: data.nome,
          email: data.email,
          matricula: data.matricula,
          senha: data.senha,
        },
      });
      return aluno;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao atualizar aluno');
    }
  }

  async deletarAluno(id: number) {
    try {
      const aluno = await prisma.aluno.delete({
        where: { id: id },
      });
      return aluno;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao deletar aluno');
    }
  }
}

export default new AlunoServices();
