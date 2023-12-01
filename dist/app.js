"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const alunoRoutes_1 = __importDefault(require("./routes/alunoRoutes"));
const professorRoute_1 = __importDefault(require("./routes/professorRoute"));
const estandeRoute_1 = __importDefault(require("./routes/estandeRoute"));
const avaliacaoRoute_1 = __importDefault(require("./routes/avaliacaoRoute"));
const criterioRoute_1 = __importDefault(require("./routes/criterioRoute"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 3001;
app.use(express_1.default.json());
app.use('/', alunoRoutes_1.default);
app.use('/', professorRoute_1.default);
app.use('/', estandeRoute_1.default);
app.use('/', avaliacaoRoute_1.default);
app.use('/', criterioRoute_1.default);
app.use(express_1.default.static('public'));
app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
});
