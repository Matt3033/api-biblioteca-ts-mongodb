import { model, Schema } from 'mongoose';

const schema = new Schema({
    nome: { type: String, required: true },
    qtdLivros: { type: Number, required: true }
})

const GeneroModel = model('Genero', schema);

export default GeneroModel;