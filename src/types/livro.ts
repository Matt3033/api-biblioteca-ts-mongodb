export default interface Livro {
    id: string,
    titulo: string,
    autor: string,
    descricao: string,
    dataLancamento: Date,
    quantidade: number,
    img: string,
    generoId: string,
    emprestado: boolean
}