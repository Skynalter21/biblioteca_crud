import express from 'express';
import { getLivros, getLivroById, createLivro, updateLivro, deleteLivro } from '../controllers/livroController';

const router = express.Router();

router.get('/', getLivros);
router.get('/:id', getLivroById);
router.post('/', createLivro);
router.put('/:id', updateLivro);
router.delete('/:id', deleteLivro);

export default router;