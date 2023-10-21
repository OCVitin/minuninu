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
exports.CriterioController = void 0;
const criterioService_1 = require("../services/criterioService");
const criterioService = new criterioService_1.CriterioService();
class CriterioController {
    getAllCriterios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const criterios = yield criterioService.getAllCriterios();
                return res.json(criterios);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar critérios' });
            }
        });
    }
    getCriterioById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const criterio = yield criterioService.getCriterioById(parseInt(id, 10));
                if (criterio) {
                    return res.json(criterio);
                }
                else {
                    return res.status(404).json({ error: 'Critério não encontrado' });
                }
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar critério' });
            }
        });
    }
    createCriterio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const criterioData = req.body;
            try {
                const criterio = yield criterioService.createCriterio(criterioData);
                return res.json(criterio);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao criar critério' });
            }
        });
    }
    deleteCriterio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const criterio = yield criterioService.deleteCriterio(parseInt(id, 10));
                return res.json(criterio);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao excluir critério' });
            }
        });
    }
    updateCriterio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const criterioData = req.body;
            try {
                const criterio = yield criterioService.updateCriterio(parseInt(id, 10), criterioData);
                if (criterio) {
                    return res.json(criterio);
                }
                else {
                    return res.status(404).json({ error: 'Critério não encontrado' });
                }
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao atualizar critério' });
            }
        });
    }
}
exports.CriterioController = CriterioController;
