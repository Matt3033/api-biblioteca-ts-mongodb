import { Request, Response } from 'express';
import Livro from '../types/livro';
import LivrosRepositories from '../repositories/livros-repositories';

export default class LivrosControllers {

    public async cadastrarLivrosController(req: Request, res: Response): Promise<Response> {
        try {

            const {
                titulo,
                autor,
                descricao,
                dataLancamento,
                quantidade,
                img,
                generoId
            } = req.body;

            if (
                titulo === '' ||
                autor === '' ||
                descricao === '' ||
                dataLancamento === '' ||
                quantidade === '' ||
                img === '' ||
                generoId === ''
            ) {
                return res.send({ statusCode: 422, msg: 'Preencha todos os dados corretamente' });
            }

            const dataEnvio: Omit<Livro, 'id'> = {
                ...req.body,
                emprestado: false
            }

            const repositoryLivro: LivrosRepositories = new LivrosRepositories();
            await repositoryLivro.cadastrarLivroRepository(dataEnvio);

            return res.send({ statusCode: 200, msg: 'Livro cadastrado' });

        } catch (err: any) {
            return res.send({ statusCode: 422, msg: err.message });
        }
    }

    public async buscarLivroPorIdController(req: Request, res: Response): Promise<Response> {
        try {

            const id = req.params.id;

            if (!id) {
                return res.send({ statusCode: 422, msg: 'O id está faltando' });
            }

            const repositoryLivro: LivrosRepositories = new LivrosRepositories();
            const livro = await repositoryLivro.buscarLivroPorIdRepository(id);

            return res.send({ statusCode: 200, msg: livro });

        } catch (err: any) {
            return res.send({ statusCode: 422, msg: err.message });
        }
    }
}