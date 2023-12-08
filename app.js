// Importação de módulos e bibliotecas
import express from 'express';
import sequelize from './db_connection/connection.js';
import routes from './rotas/routes.js';
import dados_produtos from './dados_iniciais/dados_produtos.js';

const app = express();

const port = 3000;


// Middleware para analisar dados JSON no corpo da solicitação
app.use(express.json());


// Middleware para analisar dados codificados em URL (de formulários, por exemplo)
app.use(express.urlencoded({ 
    extended: true 
}));


// Configurando o body-parser
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());


app.use('/', routes);


// Sincronização com o banco de dados
sequelize.sync()
    .then(async () => {
        console.log('Tabela Produtos sincronizada com sucesso com o banco de dados');

        await dados_produtos();

    })
    .catch((error) => {
        console.error('Erro ao sincronizar com a tabela Produtos:', error);
    });

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
