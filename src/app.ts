import express from 'express';
import dotenv from 'dotenv';
import dbConexao from './config/db';

import livros from './routes/livros';
import generos from './routes/generos';
import usuarios from './routes/usuarios';

dotenv.config();

const app = express();
const PORTA = process.env.PORTA || 8000;

app.use(express.json());

// Rotas da aplicação
app.use('/api/livros/', livros);
app.use('/api/generos/', generos);
app.use('/api/usuarios/', usuarios);

app.listen(PORTA, async () => {

    await dbConexao();

    console.log(`Ouvindo em http://localhost:${PORTA}`);
})