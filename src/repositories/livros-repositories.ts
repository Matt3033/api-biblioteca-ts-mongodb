import LivroModel from '../models/livro';
import Livro from '../types/livro';

export default class LivrosRepositories {

    public async cadastrarLivroRepository(data: Omit<Livro, 'id'>): Promise<void> {
        try {
            await LivroModel.create(data);
        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    public async buscarLivroPorIdRepository(id: string): Promise<boolean | Livro | void > {
        try {
            const livro = await LivroModel.findById(id);

            if (!livro) {
                return false;
            }

            return {
                id: String(livro?._id),
                titulo: livro?.titulo,
                autor: livro?.autor,
                descricao: livro?.descricao,
                dataLancamento: livro?.dataLancamento,
                quantidade: livro?.quantidade,
                img: livro?.img,
                generoId: String(livro?.generoId),
                emprestado: livro?.emprestado
            }

        } catch (err: any) {
            throw new Error(err.message);
        }
    }
} 