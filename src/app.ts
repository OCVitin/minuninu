import express from 'express';
import alunoRoutes from './routes/alunoRoutes';
import professorRoutes from './routes/professorRoute';
import estandeRoutes from './routes/estandeRoute';
import avaliacaoRoutes from './routes/avaliacaoRoute';
import criterioRoutes from './routes/criterioRoute';
import cors from 'cors';

const app = express();

app.use(cors());

const port = 3001;

app.use(express.json());

app.use('/', alunoRoutes);
app.use('/', professorRoutes);
app.use('/', estandeRoutes);
app.use('/', avaliacaoRoutes);
app.use('/', criterioRoutes);

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
