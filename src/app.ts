import express from 'express';
import dotenv from 'dotenv';
import ConexaoDB from './config/db';

import livros from './routes/livros';
import generos from './routes/generos';
import usuarios from './routes/usuarios';
import emprestimos from './routes/emprestimos';

dotenv.config();

const app = express();
const PORTA = process.env.PORTA || 8000;

app.use(express.json());

// Rotas da aplicação
app.use('/api/livros/', livros);
app.use('/api/generos/', generos);
app.use('/api/usuarios/', usuarios);
app.use('/api/emprestimos/', emprestimos);

app.listen(PORTA, async () => {

    const conexaoDB: ConexaoDB = new ConexaoDB();
    await conexaoDB.conexaoMongo();

    console.log(`Ouvindo em http://localhost:${PORTA}`);
})