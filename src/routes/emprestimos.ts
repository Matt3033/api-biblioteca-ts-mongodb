import { Router } from 'express';
import EmprestimosControllers from '../controllers/emprestimos-controllers';

const router = Router();
const emprestimosControllers: EmprestimosControllers = new EmprestimosControllers();

router.post('/', emprestimosControllers.cadastrarEmprestimoController);

export default router;