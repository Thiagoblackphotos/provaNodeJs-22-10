const model = require('../models/userModel');

exports.listar = (req, res) => res.json(model.listar());

exports.buscarPorId = (req, res) => {
    const c = model.buscarPorId(req.params.id);
    c ? res.json(c) : res.status(404).json({ message: "Cliente não encontrado" });
};

exports.buscarPorCidade = (req, res) => res.json(model.buscarPorCidade(req.params.cidade));

exports.listarPedidos = (req, res) => {
    const c = model.buscarPorId(req.params.id);
    c ? res.json(c.pedidos) : res.status(404).json({ message: "Cliente não encontrado" });
};

exports.adicionarPedido = (req, res) => {
    const p = model.adicionarPedido(req.params.id, req.body);
    p ? res.status(201).json(p) : res.status(404).json({ message: "Id não existente" });
};

exports.atualizar = (req, res) => {
    const c = model.atualizar(req.params.id, req.body);
    c ? res.json(c) : res.status(404).json({ message: "Id não existente" });
};

exports.deletar = (req, res) => {
    const r = model.deletar(req.params.id);
    r ? res.json({ message: "Cliente removido" }) : res.status(404).json({ message: "Id não existente" });
};