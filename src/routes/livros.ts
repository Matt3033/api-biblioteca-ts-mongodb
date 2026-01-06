import { Router } from 'express';
import LivrosControllers from '../controllers/livros-controllers';

const router = Router();
const livrosControllers = new LivrosControllers();

router.get('/:id', livrosControllers.buscarLivroPorIdController);
router.post('/', livrosControllers.cadastrarLivrosController);


export default router;

