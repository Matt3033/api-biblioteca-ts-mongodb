import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbURI = String(process.env.DB_URI);

const dbConexao = async () => {
    try {
        mongoose.connect(dbURI);
        console.log('Conexão estabelecida');
    } catch (err: any) {
        console.log(err.message);
    }
}

export default dbConexao;