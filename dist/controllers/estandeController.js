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
exports.EstandeController = void 0;
const estandeService_1 = require("../services/estandeService");
const estandeService = new estandeService_1.EstandeService();
class EstandeController {
    getAllEstandes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estandes = yield estandeService.getAllEstandes();
                return res.json(estandes);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar estandes' });
            }
        });
    }
    getEstandeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const estande = yield estandeService.getEstandeById(parseInt(id, 10));
                if (estande) {
                    return res.json(estande);
                }
                else {
                    return res.status(404).json({ error: 'Estande não encontrado' });
                }
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar estande' });
            }
        });
    }
    createEstande(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const estandeData = req.body;
            try {
                const estande = yield estandeService.createEstande(estandeData);
                return res.json(estande);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao criar estande' });
            }
        });
    }
    deleteEstande(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const estande = yield estandeService.deleteEstande(parseInt(id, 10));
                return res.json(estande);
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao excluir estande' });
            }
        });
    }
    updateEstande(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const estandeData = req.body;
            try {
                const estande = yield estandeService.updateEstande(parseInt(id, 10), estandeData);
                if (estande) {
                    return res.json(estande);
                }
                else {
                    return res.status(404).json({ error: 'Estande não encontrado' });
                }
            }
            catch (error) {
                return res.status(500).json({ error: 'Erro ao atualizar estande' });
            }
        });
    }
}
exports.EstandeController = EstandeController;
