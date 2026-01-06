import { Request, Response } from 'express';

import GenerosRepositories from '../repositories/generos-repositories';
import Genero from '../types/genero';

export default class GenerosControllers {

    public async criarGeneroController(req: Request, res: Response): Promise<Response> {
        try {
            const { nome } = req.body;
            
            if (nome === '') {
                return res.send({ statusCode: 422, msg: 'Preencha o nome corretamente' })
            }

            const dataEnvio: Omit<Genero, 'id'> = {
                nome,
                qtdLivros: 0
            }
            
            const repositoryGenero: GenerosRepositories = new GenerosRepositories();
            await repositoryGenero.criarGeneroRepository(dataEnvio);

            return res.send({ statusCode: 200, msg: 'Gênero cadastrado' });

        } catch (err: any) {
            return res.send({ statusCode: 422, msg: err.message });
        }
    }

    public async buscarGeneroPorIdController(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id;

            if (!id) {
                return res.send({ statusCode: 422, msg: 'O id está faltando' });
            }
            
            const repositoryGenero: GenerosRepositories = new GenerosRepositories();
            const genero = await repositoryGenero.buscarGeneroPorIdRepository(id);
        
            return res.send({ statusCode: 200, msg: genero });

        } catch (err: any) {
            return res.send({ statusCode: 422, msg: err.message });
        }
    }
}