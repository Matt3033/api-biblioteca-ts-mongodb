import Emprestimo from '../types/emprestimo';
import EmprestimoModel from '../models/emprestimo';

export default class EmprestimosRepositories {

    public async cadastrarEmprestimoRepository(data: Omit<Emprestimo, 'id'>): Promise<void> {
        try {
            await EmprestimoModel.create(data);
        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    public async buscarEmprestimosRepository(): Promise<false | Emprestimo[] | void> {
        try {
            const emprestimos = await EmprestimoModel.find();

            if (emprestimos.length === 0) {
                return false;
            }

            const emprestimosResposta: Emprestimo[] = emprestimos.map(item => (
                {
                    id: String(item._id),
                    usuarioId: String(item.usuarioId),
                    livroId: String(item.livroId),
                    dataEmprestimo: item.dataEmprestimo,
                    dataDevolucao: item.dataDevolucao
                }
            ))

            return emprestimosResposta;

        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}