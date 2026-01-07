export default interface Usuario {
    id: string,
    nome: string,
    email: string,
    condicao: { suspenso: boolean, dias: number }
}