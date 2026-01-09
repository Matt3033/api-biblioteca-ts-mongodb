export default interface Emprestimo {
    id: string,
    usuarioId: string,
    livroId: string,
    dataEmprestimo: Date,
    dataDevolucao: Date
}