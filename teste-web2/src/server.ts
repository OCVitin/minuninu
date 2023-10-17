import express from "express";
import * as dotenv from "dotenv";

import AlunoRouter from "./routes/AlunoRoutes";
import GrupoRouter from "./routes/GrupoRoutes";
import EstandeRouter from "./routes/EstandeRoutes";
import AvaliacaoRouter from "./routes/AvaliacaoRoutes";
import ProfessorRouter from "./routes/ProfessorRoutes";
import CriterioRouter from "./routes/CriterioRoutes";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/alunos", AlunoRouter);
app.use("/api/grupos", GrupoRouter);
app.use("/api/estandes", EstandeRouter);
app.use("/api/avaliacoes", AvaliacaoRouter);
app.use("/api/professores", ProfessorRouter);
app.use("/api/criterios", CriterioRouter);

const PORT = process.env.PORT || 3000;

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
} else {
  console.log("Fail to load environment");
}
app.get("/", (req, res) => {
  res.send("Hello World!");
});
