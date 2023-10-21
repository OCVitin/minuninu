import express from 'express';
import { ProfessorController } from '../controllers/professorController';

const router = express.Router();
const professorController = new ProfessorController();

router.get('/professores', professorController.getAllProfessores);
router.get('/professores/:id', professorController.getProfessorById);
router.post('/professores', professorController.createProfessor);
router.delete('/professores/:id', professorController.deleteProfessor);
router.put('/professores/:id', professorController.updateProfessor);

export default router;
