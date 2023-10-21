import express from 'express';
import { AvaliacaoController } from '../controllers/avaliacaoController';

const router = express.Router();
const avaliacaoController = new AvaliacaoController();

router.get('/avaliacoes', avaliacaoController.getAllAvaliacoes);
router.get('/avaliacoes/:id', avaliacaoController.getAvaliacaoById);
router.post('/avaliacoes', avaliacaoController.createAvaliacao);
router.delete('/avaliacoes/:id', avaliacaoController.deleteAvaliacao);
router.put('/avaliacoes/:id', avaliacaoController.updateAvaliacao);

export default router;
