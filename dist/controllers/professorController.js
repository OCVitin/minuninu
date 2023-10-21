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
exports.ProfessorController = void 0;
const professorService_1 = require("../services/professorService");
const professorService = new professorService_1.ProfessorService();
class ProfessorController {
    getAllProfessores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const professores = yield professorService.getAllProfessores();
                return res.json(professores);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar professores' });
            }
        });
    }
    getProfessorById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const professor = yield professorService.getProfessorById(parseInt(id, 10));
                if (professor) {
                    return res.json(professor);
                }
                else {
                    return res.status(404).json({ error: 'Professor não encontrado' });
                }
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar professor' });
            }
        });
    }
    createProfessor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorData = req.body;
            try {
                const professor = yield professorService.createProfessor(professorData);
                return res.json(professor);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao criar professor' });
            }
        });
    }
    deleteProfessor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const professor = yield professorService.deleteProfessor(parseInt(id, 10));
                return res.json(professor);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao excluir professor' });
            }
        });
    }
    updateProfessor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const professorData = req.body;
            try {
                const professor = yield professorService.updateProfessor(parseInt(id, 10), professorData);
                if (professor) {
                    return res.json(professor);
                }
                else {
                    return res.status(404).json({ error: 'Professor não encontrado' });
                }
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao atualizar professor' });
            }
        });
    }
}
exports.ProfessorController = ProfessorController;
