import express from 'express';

import alunoRoutes from './routes/alunoRoutes';
import professorRoutes from './routes/professorRoute';
import estandeRoutes from './routes/estandeRoute';
import avaliacaoRoutes from './routes/avaliacaoRoute';
import criterioRoutes from './routes/criterioRoute';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/alunos', alunoRoutes);
app.use('/professores', professorRoutes);
app.use('/estandes', estandeRoutes);
app.use('/avaliacoes', avaliacaoRoutes);
app.use('/criterios', criterioRoutes);

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});

