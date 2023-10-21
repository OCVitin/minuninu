"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const criterioController_1 = require("../controllers/criterioController");
const router = express_1.default.Router();
const criterioController = new criterioController_1.CriterioController();
// Rota para buscar todos os critérios
router.get('/criterios', criterioController.getAllCriterios);
// Rota para buscar um critério por ID
router.get('/criterios/:id', criterioController.getCriterioById);
// Rota para criar um novo critério
router.post('/criterios', criterioController.createCriterio);
// Rota para excluir um critério por ID
router.delete('/criterios/:id', criterioController.deleteCriterio);
// Rota para atualizar um critério por ID
router.put('/criterios/:id', criterioController.updateCriterio);
exports.default = router;
