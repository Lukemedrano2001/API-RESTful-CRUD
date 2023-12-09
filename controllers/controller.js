import Produto from '../models/produto.js';


// Rota CREATE: Rota para criar um novo registro
// INSERT INTO Table (coluna1, coluna2, ...) VALUES (valor1, valor2, ...)
export const createProduto = async (request, response) => {
    try {
        console.log('Objeto request.body:', request.body);
        const { codigo_produto, nome, quantidade, preco_unitario, disponibilidade } = request.body;

        console.log('Dados recebidos', codigo_produto, nome, quantidade, preco_unitario, disponibilidade );

        const novo_produto = await Produto.create({
            codigo_produto,
            nome,
            quantidade,
            preco_unitario,
            disponibilidade,
        });

        console.log("Produto criado:", novo_produto);
        response.status(201).json({ message: 'Registro criado com sucesso', produto: novo_produto });
    } catch (error) {
        console.log('Corpo da Requisição:', request.body);
        response.status(400).json({ error: 'Erro ao inserir registro' });
    }
};


// Rota GET All: Rota para ler todos os registros
// SELECT * FROM Table
export const getAllProdutos = async (request, response) => {
    try {
        const produtos = await Produto.findAll();
        response.status(200).json(produtos);
    } catch (error) {
        response.status(500).json({ error: 'Erro ao ler registros' });
    }
};


// Rota GET por id: Rota para ler um registro específico
// SELECT * FROM Table WHERE id = ?
export const getProdutoById = async (request, response) => {
    try {
        const id = request.params.id;
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return response.status(404).json({ message: 'Registro não encontrado' });
        }
        response.status(200).json(produto);
    } catch (error) {
        response.status(500).json({ error: 'Erro ao buscar o registro' });
    }
};


// Rota UPDATE: Rota para atualizar um registro existente
// UPDATE Table SET coluna1 = valor1, coluna2 = valor2, ... WHERE id = ?
export const updateProduto = async (request, response) => {
    const id = request.params.id;
    const { codigo_produto, nome, quantidade, preco_unitario, disponibilidade } = request.body;

    try {
        const produto_atualizar = await Produto.findByPk(id);
        if (!produto_atualizar) {
            response.status(404).json({ error: 'Registro não encontrado' });
            return;
        }

        await produto_atualizar.update({
            codigo_produto,
            nome,
            quantidade,
            preco_unitario,
            disponibilidade,
        });
        response.status(200).json({ message: 'Registro atualizado com sucesso', produto: produto_atualizar });
    } catch (error) {
        console.log('Corpo da Requisição:', request.body);
        response.status(500).json({ error: 'Erro ao atualizar o registro' });
    }
};


// Rota DELETE: Rota para excluir um registro
// DELETE FROM Table WHERE id = ?
export const deleteProduto = async (request, response) => {
    const id = request.params.id;
    
    try {
        const produto_deletar = await Produto.findByPk(id);
        if (!produto_deletar) {
            return response.status(404).json({ error: 'Registro não encontrado' });
        }

        await produto_deletar.destroy();
        response.status(200).json({ message: 'Registro excluído com sucesso', produto: produto_deletar});
    } catch (error) {
        response.status(500).json({ error: 'Erro ao deletar o registro' });
    }
};
