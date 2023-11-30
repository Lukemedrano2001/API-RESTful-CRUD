const Produto = require('../models/modelo');


// Rota CREATE: Rota para criar um novo registro
exports.createProduto = async (request, response) => {
    try {
        console.log('Objeto request.body:', request.body);
        const { nome, codigo, quantidade, preco, disponibilidade } = request.body;

        console.log("Dados recebidos", nome, codigo, quantidade, preco, disponibilidade );

        const novo_produto = await Produto.create({
            nome,
            codigo,
            quantidade,
            preco,
            disponibilidade,
        });

        console.log("Produto criado:", novo_produto);
        response.json({ message: 'Registro criado com sucesso', produto: novo_produto });
    } catch (error) {
        console.error('Erro ao inserir registro:', error);
        console.log('Corpo da Requisição:', request.body);
        response.status(500).json({ error: 'Erro ao inserir registro' });
    }
};


// Rota GET All: Rota para ler todos os registros
exports.getAllProdutos = async (request, response) => {
    try {
        const produtos = await Produto.findAll();
        response.json(produtos);
    } catch (error) {
        console.error('Erro ao ler registros:', error);
        response.status(500).json({ error: 'Erro ao ler registros' });
    }
};


// Rota GET por id: Rota para ler um registro específico
exports.getProdutoById = async (request, response) => {
    try {
        const id = request.params.id;
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return response.status(404).json({ error: 'Registro não encontrado' });
        }
        response.json(produto);
    } catch (error) {
        console.error('Erro ao buscar o registro', error);
        response.status(500).json({ error: 'Erro ao buscar o registro' });
    }
};


// Rota UPDATE: Rota para atualizar um registro existente
exports.updateProduto = async (request, response) => {
    const id = request.params.id;
    const { nome, codigo, quantidade, preco, disponibilidade } = request.body;

    try {
        const produto_atualizar = await Produto.findByPk(id);
        if (!produto_atualizar) {
            response.status(404).json({ error: 'Registro não encontrado' });
            return;
        }

        await produto_atualizar.update({
            nome,
            codigo,
            quantidade,
            preco,
            disponibilidade,
        });
        response.json({ message: 'Registro atualizado com sucesso', produto: produto_atualizar });
    } catch (error) {
        console.error('Erro ao atualizar o registro', error);
        response.status(500).json({ error: 'Erro ao atualizar o registro' });
    }
};


// Rota DELETE: Rota para excluir um registro
exports.deleteProduto = async (request, response) => {
    const id = request.params.id;
    
    try {
        const produto_deletar = await Produto.findByPk(id);
        if (!produto_deletar) {
            return response.status(404).json({ error: 'Registro não encontrado' });
        }

        await produto_deletar.destroy();
        response.json({ message: 'Registro excluído com sucesso', produto: produto_deletar});
    } catch (error) {
        console.error('Erro ao deletar o registro', error);
        response.status(500).json({ error: 'Erro ao deletar o registro' });
    }
};