import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export default class ConexaoDB {
    
    private dbURI = String(process.env.DB_URI);

    public async conexaoMongo() {
        try {
            mongoose.connect(this.dbURI);
            console.log('Conexão estabelecida');
        } catch (err: any) {
            console.log(err.message);
        }
    }
}
