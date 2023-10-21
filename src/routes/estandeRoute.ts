import express from 'express';
import { EstandeController } from '../controllers/estandeController';

const router = express.Router();
const estandeController = new EstandeController();

router.get('/estandes', estandeController.getAllEstandes);
router.get('/estandes/:id', estandeController.getEstandeById);
router.post('/estandes', estandeController.createEstande);
router.delete('/estandes/:id', estandeController.deleteEstande);
router.put('/estandes/:id', estandeController.updateEstande);

export default router;
