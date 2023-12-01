"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const professorController_1 = require("../controllers/professorController");
const router = express_1.default.Router();
const professorController = new professorController_1.ProfessorController();
// Rota para buscar todos os professores
router.get('/professores', professorController.getAllProfessores);
// Rota para buscar um professor por ID
router.get('/professores/:id', professorController.getProfessorById);
// Rota para criar um novo professor
router.post('/professores', professorController.createProfessor);
// Rota para excluir um professor por ID
router.delete('/professores/:id', professorController.deleteProfessor);
// Rota para atualizar um professor por ID
router.put('/professores/:id', professorController.updateProfessor);
// Rota para buscar um professor por matricula
router.get('/professores/matricula/:matricula', professorController.getProfessorByMatricula);
exports.default = router;
