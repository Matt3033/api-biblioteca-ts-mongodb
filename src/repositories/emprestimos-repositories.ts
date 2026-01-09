import Emprestimo from '../types/emprestimo';
import EmprestimoModel from '../models/emprestimo';

export default class EmprestimosRepositories {
    
    public async cadastrarEmprestimoRepository(data: Omit<Emprestimo, 'id'>) {
        try {
            await EmprestimoModel.create(data);
        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}