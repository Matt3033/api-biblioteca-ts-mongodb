import Emprestimo from '../types/emprestimo';
import UsuariosRepositories from '../repositories/usuarios-repositories';
import LivrosRepositories from '../repositories/livros-repositories';
import EmprestimosRepositories from '../repositories/emprestimos-repositories';


export default class CadastrarEmprestimoService {
    
    public async execute(data: Omit<Emprestimo, 'id'>) {
        
        const repositoryUsuario: UsuariosRepositories = new UsuariosRepositories(); 
        const repositoryLivro: LivrosRepositories = new LivrosRepositories();
        const repositoryEmprestimos: EmprestimosRepositories = new EmprestimosRepositories();
        
        const usuario = await repositoryUsuario.buscarUsuarioPorIdRepository(data.usuarioId);
        if (!usuario) {
            throw new Error('Esse usuário não existe');
        }
        
        if (usuario.condicao.suspenso) {
            throw new Error(`Esse usuário está suspenso por ${usuario.condicao.dias} dias`)
        }

    
        const livro = await repositoryLivro.buscarLivroPorIdRepository(data.livroId);
        if (!livro) {
            throw new Error('Esse livro não existe');
        }

        if (livro.quantidade === 0 ) {
            throw new Error('Esse livro não está disponível');
        }

        await repositoryEmprestimos.cadastrarEmprestimoRepository(data);

    }
}