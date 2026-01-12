import GeneroModel from '../models/genero';
import Genero from '../types/genero';

export default class GenerosRepositories {

    public async criarGeneroRepository(data: Omit<Genero, 'id'>): Promise<void> {
        try {
            await GeneroModel.create(data);
        } catch (err: any) {
            throw new Error(err.message);
        }

    }

    public async buscarGeneroPorIdRepository(id: string): Promise<false | Genero | void> {
        try {
            const genero = await GeneroModel.findById(id);

            if (!genero) {
                return false;
            }
            return { id: String(genero._id), nome: genero.nome, qtdLivros: genero.qtdLivros };
            
        } catch (err: any) {
            throw new Error(err.message);
        }

    }

}