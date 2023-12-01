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
exports.AvaliacaoController = void 0;
const avaliacaoService_1 = require("../services/avaliacaoService");
const avaliacaoService = new avaliacaoService_1.AvaliacaoService();
class AvaliacaoController {
    getAllAvaliacoes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const avaliacoes = yield avaliacaoService.getAllAvaliacoes();
                return res.json(avaliacoes);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar avaliações' });
            }
        });
    }
    getAvaliacaoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const avaliacao = yield avaliacaoService.getAvaliacaoById(parseInt(id, 10));
                if (avaliacao) {
                    return res.json(avaliacao);
                }
                else {
                    return res.status(404).json({ error: 'Avaliação não encontrada' });
                }
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar avaliação' });
            }
        });
    }
    createAvaliacao(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const avaliacaoData = req.body;
            try {
                const avaliacao = yield avaliacaoService.createAvaliacao(avaliacaoData);
                return res.json(avaliacao);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao criar avaliação' });
            }
        });
    }
    deleteAvaliacao(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const avaliacao = yield avaliacaoService.deleteAvaliacao(parseInt(id, 10));
                return res.json(avaliacao);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao excluir avaliação' });
            }
        });
    }
    updateAvaliacao(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const avaliacaoData = req.body;
            try {
                const avaliacao = yield avaliacaoService.updateAvaliacao(parseInt(id, 10), avaliacaoData);
                if (avaliacao) {
                    return res.json(avaliacao);
                }
                else {
                    return res.status(404).json({ error: 'Avaliação não encontrada' });
                }
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao atualizar avaliação' });
            }
        });
    }
    getAvaliacaoByAlunoId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAluno } = req.params;
            try {
                const avaliacao = yield avaliacaoService.getAvaliacaoByAlunoId(parseInt(idAluno, 10));
                if (avaliacao) {
                    return res.json(avaliacao);
                }
                else {
                    return res.status(404).json({ error: 'Avaliação não encontrada' });
                }
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar avaliação' });
            }
        });
    }
    getAvaliacaoByProfId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProf } = req.params;
            try {
                const avaliacao = yield avaliacaoService.getAvaliacaoByProfId(parseInt(idProf, 10));
                if (avaliacao) {
                    return res.json(avaliacao);
                }
                else {
                    return res.status(404).json({ error: 'Avaliação não encontrada' });
                }
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar avaliação' });
            }
        });
    }
}
exports.AvaliacaoController = AvaliacaoController;
