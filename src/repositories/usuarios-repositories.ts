import Usuario from '../types/usuario';
import UsuarioModel from '../models/usuario';

export default class UsuariosRepositories {

    public async cadastrarUsuarioRepository(data: Omit<Usuario, 'id'>): Promise<void> {
        try {
            await UsuarioModel.create(data);
        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    public async buscarUsuarioPorAtributoRepository(data: Object): Promise<false | void | Usuario[]> {
        try {
            const usuarios = await UsuarioModel.find(data);

            if (usuarios.length === 0) {
                return false;
            }

            const usuariosResposta: Usuario[] = usuarios.map(item => {
                return {
                    id: String(item._id),
                    nome: item.nome,
                    email: item.email,
                    condicao: item.condicao
                };
            })

            return usuariosResposta;

        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    public async buscarUsuarioPorIdRepository(id: string) {
        try {
            const usuario = await UsuarioModel.findById(id);
            
            if (!usuario) {
                return false;
            }
            return usuario;

        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}