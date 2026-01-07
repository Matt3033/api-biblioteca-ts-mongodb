import { Router } from 'express';
import UsuariosControllers from '../controllers/usuarios-controllers';

const router = Router();
const usuariosControllers: UsuariosControllers = new UsuariosControllers();

router.post('/', usuariosControllers.criarUsuarioController);

export default router;