let clientes = [
    { id: 1, nome: "João", idade: 30, cidade: "São Paulo", pedidos: [{ codigo: "P1", produto: "Camiseta", quantidade: 2 }] },
    { id: 2, nome: "Maria", idade: 25, cidade: "Rio de Janeiro", pedidos: [] }
];

module.exports = {
    listar: () => clientes,
    buscarPorId: (id) => clientes.find(c => c.id === Number(id)),
    buscarPorCidade: (cidade) => clientes.filter(c => c.cidade.toLowerCase() === cidade.toLowerCase()),
    atualizar: (id, dados) => {
        const c = clientes.find(c => c.id === Number(id));
        if (!c) return null;
        Object.assign(c, dados);
        return c;
    },
    deletar: (id) => {
        const i = clientes.findIndex(c => c.id === Number(id));
        if (i === -1) return null;
        return clientes.splice(i, 1);
    },
    adicionarPedido: (id, pedido) => {
        const c = clientes.find(c => c.id === Number(id));
        if (!c) return null;
        c.pedidos.push(pedido);
        return pedido;
    }
};