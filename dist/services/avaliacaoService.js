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
exports.AvaliacaoService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AvaliacaoService {
    getAllAvaliacoes() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.avaliacao.findMany();
        });
    }
    getAvaliacaoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.avaliacao.findUnique({
                where: { id },
            });
        });
    }
    getAvaliacaoByAlunoId(idAluno) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.avaliacao.findFirst({
                where: { idAluno },
            });
        });
    }
    getAvaliacaoByProfId(idProf) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.avaliacao.findFirst({
                where: { idProf },
            });
        });
    }
    createAvaliacao(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const avaliacao = yield prisma.avaliacao.findFirst({
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
            }
            else {
                return prisma.avaliacao.create({
                    data,
                });
            }
        });
    }
    deleteAvaliacao(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const avaliacao = yield prisma.avaliacao.delete({
                where: { id },
            });
            return avaliacao;
        });
    }
    updateAvaliacao(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.avaliacao.update({
                where: { id },
                data,
            });
        });
    }
}
exports.AvaliacaoService = AvaliacaoService;
