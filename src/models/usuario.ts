import { model, Schema } from 'mongoose';

const schema = new Schema({
    nome: { type: String },
    email: { type: String },
    condicao: { 
        suspenso: { type: Boolean }, 
        dias: { type: Number } 
    }
})

const UsuarioModel = model('Usuario', schema);

export default UsuarioModel;