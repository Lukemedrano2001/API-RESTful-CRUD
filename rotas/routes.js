import express from 'express';
const router = express.Router();
import { createProduto, getAllProdutos, getProdutoById, updateProduto, deleteProduto } from '../controllers/controller.js';


router.post('/create/produto', createProduto);
router.get('/read/produtos', getAllProdutos);
router.get('/read/produto/:id', getProdutoById);
router.put('/update/produto/:id', updateProduto);
router.delete('/delete/produto/:id', deleteProduto);


export default router;