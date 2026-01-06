import { Router } from 'express';
import GenerosControllers from '../controllers/generos-controllers';

const router = Router();
const generosControllers: GenerosControllers = new GenerosControllers();

router.get('/:id', generosControllers.buscarGeneroPorIdController);
router.post('/', generosControllers.criarGeneroController);

export default router;