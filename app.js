// Importação de módulos e bibliotecas
const express = require('express');
const body_parser = require('body-parser');
const sequelize = require('./db_connection/connection');
const routes = require('./rotas/routes');
const Produto = require('./models/modelo');


const app = express();
const port = 3000;


// Configurando o body-parser
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));


app.use('/', routes);


// Sincronização com o banco de dados
sequelize.sync()
    .then(async () => {
        console.log('Tabela Produtos sincronizada com sucesso com o banco de dados');

        const produtos_count = await Produto.count();

        if(produtos_count === 0){
            // Dados iniciais
            return Produto.bulkCreate([
                { nome: 'Produto1', codigo: 1234, quantidade: 10, preco: 20.5, disponibilidade: true },
                { nome: 'Produto2', codigo: 5678, quantidade: 5, preco: 15.0, disponibilidade: false },
                // Adicione mais produtos conforme necessário
            ]);
        } else {
            console.log('Tabela Produtos já contém dados. Não foram adicionados dados iniciais.');
        }

    })
    .catch((error) => {
        console.error('Erro ao sincronizar com a tabela Produtos:', error);
    });

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });