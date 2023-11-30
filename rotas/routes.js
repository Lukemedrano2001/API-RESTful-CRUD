const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');


router.post('/create', controller.createProduto);
router.get('/read', controller.getAllProdutos);
router.get('/read/:id', controller.getProdutoById);
router.put('/update/:id', controller.updateProduto);
router.delete('/delete/:id', controller.deleteProduto);


module.exports = router;