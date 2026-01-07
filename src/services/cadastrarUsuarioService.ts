import UsuarioModel from "../models/usuario";
import Usuario from "../types/usuario";
import UsuariosRepository from "../repositories/usuarios-repository";

export default class CadastrarUsuarioService {

    public async execute(data: Usuario): Promise<void> {

        const repositoryUsuario: UsuariosRepository = new UsuariosRepository(); 

        const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
        if (!regexEmail.test(data.email)) {
            throw new Error('O e-mail não é válido');
        }

        const usuario = await repositoryUsuario.buscarUsuarioPorAtributoRepository({ email: data.email });
        if (usuario) {
            throw new Error('Esse e-mail já está vinculado a uma conta');
        }

        const dataEnvio: Omit<Usuario, 'id'> = {
            nome: data.nome,
            email: data.email,
            condicao: { suspenso: false, dias: 0 }
        }

        await repositoryUsuario.cadastrarUsuarioRepository(dataEnvio);

    }
}