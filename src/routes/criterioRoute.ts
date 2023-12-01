import express from 'express';
import { CriterioController } from '../controllers/criterioController';

const router = express.Router();
const criterioController = new CriterioController();

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

// Rota para buscar um critério por idAvaliacao
router.get('/criterios/avaliacao/:idAvaliacao', criterioController.getCriterioByAvaliacaoId);


export default router;