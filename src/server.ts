import express from 'express';
import bodyParser from 'body-parser';
import livroRoutes from './routes/livroRoutes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/livros', livroRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});