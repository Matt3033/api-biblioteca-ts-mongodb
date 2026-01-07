import { model, Schema } from 'mongoose';

const schema = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    condicao: { type: { suspenso: { type: Boolean, required: true }, dias: { type: Number, required: true } }, required: true, _id: false }
})

const UsuarioModel = model('Usuario', schema);

export default UsuarioModel;