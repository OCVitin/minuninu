import express from 'express';
import { CriterioController } from '../controllers/criterioController';

const router = express.Router();
const criterioController = new CriterioController();

router.get('/criterios', criterioController.getAllCriterios);
router.get('/criterios/:id', criterioController.getCriterioById);
router.post('/criterios', criterioController.createCriterio);
router.delete('/criterios/:id', criterioController.deleteCriterio);
router.put('/criterios/:id', criterioController.updateCriterio);

export default router;
