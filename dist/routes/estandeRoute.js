"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const estandeController_1 = require("../controllers/estandeController");
const router = express_1.default.Router();
const estandeController = new estandeController_1.EstandeController();
// Rota para buscar todos os estandes
router.get('/estandes', estandeController.getAllEstandes);
// Rota para buscar um estande por ID
router.get('/estandes/:id', estandeController.getEstandeById);
// Rota para criar um novo estande
router.post('/estandes', estandeController.createEstande);
// Rota para excluir um estande por ID
router.delete('/estandes/:id', estandeController.deleteEstande);
// Rota para atualizar um estande por ID
router.put('/estandes/:id', estandeController.updateEstande);
exports.default = router;
