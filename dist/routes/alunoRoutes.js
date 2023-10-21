"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const alunoController_1 = require("../controllers/alunoController");
const router = express_1.default.Router();
const alunoController = new alunoController_1.AlunoController();
// Rota para buscar todos os alunos
router.get('/alunos', alunoController.getAllAlunos);
// Rota para buscar um aluno por ID
router.get('/alunos/:id', alunoController.getAlunoById);
// Rota para criar um novo aluno
router.post('/alunos', alunoController.createAluno);
// Rota para excluir um aluno por ID
router.delete('/alunos/:id', alunoController.deleteAluno);
// Rota para atualizar um aluno por ID
router.put('/alunos/:id', alunoController.updateAluno);
exports.default = router;
