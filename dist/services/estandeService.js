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
exports.EstandeService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class EstandeService {
    getAllEstandes() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.estande.findMany();
        });
    }
    getEstandeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.estande.findUnique({
                where: { id },
            });
        });
    }
    createEstande(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.estande.create({
                data,
            });
        });
    }
    deleteEstande(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Exclua as avaliações relacionadas ao estande primeiro (se houver uma relação)
            yield prisma.avaliacao.deleteMany({
                where: {
                    estandeId: id,
                },
            });
            // Em seguida, exclua o estande
            const estande = yield prisma.estande.delete({
                where: {
                    id,
                },
            });
            return estande;
        });
    }
    updateEstande(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.estande.update({
                where: { id },
                data,
            });
        });
    }
}
exports.EstandeService = EstandeService;
