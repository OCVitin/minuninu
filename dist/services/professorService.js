"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ProfessorService {
    getAllProfessores() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.professor.findMany();
        });
    }
    getProfessorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.professor.findUnique({
                where: { id },
            });
        });
    }
    getProfessorByMatricula(matricula) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.professor.findFirst({
                where: { matricula },
            });
        });
    }
    createProfessor(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.professor.create({
                data,
            });
        });
    }
    deleteProfessor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Exclua as avaliações relacionadas ao professor primeiro (se houver uma relação)
            yield prisma.avaliacao.deleteMany({
                where: {
                    idProf: id,
                },
            });
            // Em seguida, exclua o professor
            const professor = yield prisma.professor.delete({
                where: {
                    id,
                },
            });
            return professor;
        });
    }
    updateProfessor(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.professor.update({
                where: { id },
                data,
            });
        });
    }
}
exports.ProfessorService = ProfessorService;
