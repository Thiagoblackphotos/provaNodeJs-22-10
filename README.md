# API de Gerenciamento de Clientes e Pedidos

Esta API foi desenvolvida para gerenciar clientes e pedidos de uma loja virtual. Os dados são armazenados em memória e a aplicação utiliza Node.js com Express.

## Funcionalidades

A API permite realizar as seguintes operações:
- Listar todos os clientes cadastrados.
- Buscar um cliente específico pelo seu ID.
- Listar todos os pedidos realizados por um cliente.
- Buscar clientes que residem em uma determinada cidade.
- Adicionar um novo pedido a um cliente existente.
- Atualizar as informações de um cliente (nome, idade, cidade).
- Remover um cliente do cadastro.

Caso um cliente não seja encontrado nas operações de atualização ou exclusão, a API retorna a mensagem "Id não existente".
