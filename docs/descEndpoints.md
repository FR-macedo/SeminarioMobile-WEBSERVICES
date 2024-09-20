# Descrição das rotas da API

### Criar Produto
### POST /api/products

Descrição: Cria um novo produto com os dados fornecidos no corpo da requisição.
Parâmetros: JSON com os detalhes do produto.
Resposta de Sucesso: 201 Created com o objeto do produto criado.
Erros: 400 Bad Request se houver erro nos dados.

### Listar Todos os Produtos
### GET /api/products

Descrição: Retorna uma lista de todos os produtos cadastrados.
Parâmetros: Nenhum.
Resposta de Sucesso: 200 OK com um array de produtos.
Erros: 500 Internal Server Error se ocorrer um problema na busca.

### Obter Produto por ID
### GET /api/products/

Descrição: Retorna os detalhes de um produto específico com base no ID.
Parâmetros: id do produto (path).
Resposta de Sucesso: 200 OK com o objeto do produto.
Erros: 404 Not Found se o produto não for encontrado, 500 Internal Server Error em caso de falha no servidor.

### Atualizar Produto por ID
### PUT /api/products/

Descrição: Atualiza os dados de um produto existente com base no ID.
Parâmetros: id do produto (path) e JSON com os campos a serem atualizados.
Resposta de Sucesso: 200 OK com o produto atualizado.
Erros: 404 Not Found se o produto não existir, 500 Internal Server Error em caso de erro na atualização.

### Excluir Produto por ID
### DELETE /api/products/

Descrição: Remove um produto com base no ID fornecido.
Parâmetros: id do produto (path).
Resposta de Sucesso: 204 No Content em caso de exclusão bem-sucedida.
Erros: 404 Not Found se o produto não for encontrado, 500 Internal Server Error em caso de falha.