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
    
    public async buscarEmprestimosRepository() {
        try {
            const emprestimos = await EmprestimoModel.find();
            
            if (emprestimos.length === 0) {
                return false;
            }
            return emprestimos;

        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}