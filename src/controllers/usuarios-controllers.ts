import { Request, Response } from 'express';
import CadastrarUsuarioService from '../services/cadastrarUsuarioService';

export default class UsuariosControllers {

    public async criarUsuarioController(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;

            const cadastrarUsuarioService: CadastrarUsuarioService = new CadastrarUsuarioService();
            await cadastrarUsuarioService.execute(data);
            
            return res.status(200).send({ statusCode: 200, msg: 'Usuário cadastrado' });
        
        } catch (err: any) {
            return res.status(422).send({ statusCode: 422, msg: err.message });
        }
    }
}