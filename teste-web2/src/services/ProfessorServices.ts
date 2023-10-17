import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProfessorServices {
  async getAllProfessores() {
    return await prisma.professor.findMany();
  }

  async criarProfessor(data: any) {
    try {
      const professor = await prisma.professor.create({
        data: {
          nome: data.nome,
          email: data.email,
          matricula: data.matricula,
          senha: data.senha,
        },
      });
      return professor;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao criar professor');
    }
  }

  async updateProfessor(id: number, data: any) {
    try {
      const updatedProfessor = await prisma.professor.update({
        where: { id: id },
        data: data,
      });
      return updatedProfessor;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao atualizar professor');
    }
  }

  async deleteProfessor(id: number) {
    try {
      const deletedProfessor = await prisma.professor.delete({
        where: { id: id },
      });
      return deletedProfessor;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao deletar professor');
    }
  }

  async getProfessorById(id: number) {
    try {
      const professor = await prisma.professor.findUnique({
        where: { id: id },
      });
      return professor;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao obter professor por ID');
    }
  }
}

export default new ProfessorServices();
