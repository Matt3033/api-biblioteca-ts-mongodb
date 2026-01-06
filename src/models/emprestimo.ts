import { model, Schema } from 'mongoose'

const schema = new Schema({
    usuarioId: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    livroId: { type: Schema.Types.ObjectId, ref: 'Livro', required: true },
    dataEmprestimo: { type: Date, required: true },
    dataDevolucao: { type: Date, required: true }
})

const Emprestimo = model('Emprestimo', schema);

export default Emprestimo;