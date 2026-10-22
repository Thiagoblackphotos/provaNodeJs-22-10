const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/userController');

router.get('/', ctrl.listar);
router.get('/cidade/:cidade', ctrl.buscarPorCidade);
router.get('/:id', ctrl.buscarPorId);
router.get('/:id/pedidos', ctrl.listarPedidos);
router.post('/:id/pedidos', ctrl.adicionarPedido);
router.put('/:id', ctrl.atualizar);
router.delete('/:id', ctrl.deletar);

module.exports = router;