import { model, Schema } from 'mongoose';

const schema = new Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    descricao: { type: String, required: true },
    dataLancamento: { type: Date, required: true },
    emprestado: { type: Boolean, required: true },
    quantidade: { type: Number, required: true },
    img: { type: String, required: true },
    generoId: { type: Schema.Types.ObjectId, ref: 'Genero', required: true }
})

const LivroModel = model('Livro', schema);

export default LivroModel;
