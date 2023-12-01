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
exports.AlunoController = void 0;
const alunoService_1 = require("../services/alunoService");
const alunoService = new alunoService_1.AlunoService();
class AlunoController {
    getAllAlunos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alunos = yield alunoService.getAllAlunos();
                return res.json(alunos);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar alunos' });
            }
        });
    }
    getAlunoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const aluno = yield alunoService.getAlunoById(parseInt(id, 10));
                if (aluno) {
                    return res.json(aluno);
                }
                else {
                    return res.status(404).json({ error: 'Aluno não encontrado' });
                }
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar aluno' });
            }
        });
    }
    createAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alunoData = req.body;
            try {
                const aluno = yield alunoService.createAluno(alunoData);
                return res.json(aluno);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao criar aluno' });
            }
        });
    }
    deleteAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const aluno = yield alunoService.deleteAluno(parseInt(id, 10));
                return res.json(aluno);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao excluir aluno' });
            }
        });
    }
    updateAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const alunoData = req.body;
            try {
                const aluno = yield alunoService.updateAluno(parseInt(id, 10), alunoData);
                if (aluno) {
                    return res.json(aluno);
                }
                else {
                    return res.status(404).json({ error: 'Aluno não encontrado' });
                }
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao atualizar aluno' });
            }
        });
    }
    getAlunoByMatricula(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { matricula } = req.params;
            try {
                const aluno = yield alunoService.getAlunoByMatricula(matricula);
                if (aluno) {
                    return res.json(aluno);
                }
                else {
                    return res.status(404).json({ error: 'Aluno não encontrado' });
                }
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar aluno' });
            }
        });
    }
}
exports.AlunoController = AlunoController;
