import Produto from '../models/produto.js';


const dados_produtos_iniciais = [
    { codigo_produto: 123, nome: "Produto ABC", preco_unitario: 19.99, quantidade: 10 },
    { codigo_produto: 456, nome: "Produto DEF", preco_unitario: 39.99, quantidade: 20 },
    { codigo_produto: 789, nome: "Produto GHJ", preco_unitario: 59.99, quantidade: 30 },
    { codigo_produto: 321, nome: "Produto KLM", preco_unitario: 79.99, quantidade: 40 }
];


async function dados_produtos() {
    const produtos = await Produto.findAll();
    if (produtos.length === 0) {
        await Produto.bulkCreate(dados_produtos_iniciais);
    } else {
        console.log('Tabela Produtos já contém dados. Não foram adicionados dados iniciais.');
    }
}


export default dados_produtos;