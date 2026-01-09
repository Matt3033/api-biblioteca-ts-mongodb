import { Request, Response } from 'express';
import CadastrarEmprestimoService from '../services/cadastrarEmprestimoService';

export default class EmprestimosControllers {
    
    public async cadastrarEmprestimoController(req: Request, res: Response): Promise<Response> {
        try {

            const data = req.body
            const cadastrarEmprestimoService: CadastrarEmprestimoService = new CadastrarEmprestimoService();
            await cadastrarEmprestimoService.execute(data);

            return res.send({ statusCode: 200, msg: 'Empréstimo registrado' });
        
        } catch (err: any) {
            return res.send({ statusCode: 422, msg: err.message });
        }    
    }
}