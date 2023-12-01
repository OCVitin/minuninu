"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const avaliacaoController_1 = require("../controllers/avaliacaoController");
const router = express_1.default.Router();
const avaliacaoController = new avaliacaoController_1.AvaliacaoController();
// Rota para buscar todas as avaliações
router.get('/avaliacoes', avaliacaoController.getAllAvaliacoes);
// Rota para buscar uma avaliação por id
router.get('/avaliacoes/:id', avaliacaoController.getAvaliacaoById);
// Rota para criar uma nova avaliação
router.post('/avaliacoes', avaliacaoController.createAvaliacao);
// Rota para excluir uma avaliação por ID
router.delete('/avaliacoes/:id', avaliacaoController.deleteAvaliacao);
// Rota para atualizar uma avaliação por ID
router.put('/avaliacoes/:id', avaliacaoController.updateAvaliacao);
// Rota para buscar uma avaliação por idAluno
router.get('/avaliacoes/aluno/:idAluno', avaliacaoController.getAvaliacaoByAlunoId);
// Rota para buscar uma avaliação por idProf
router.get('/avaliacoes/prof/:idProf', avaliacaoController.getAvaliacaoByProfId);
exports.default = router;
