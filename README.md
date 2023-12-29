# Minha Primeira API RESTful CRUD

Bem-vindo à minha primeira API RESTful CRUD! Este projeto permite realizar operações básicas (Create, Read, Update, Delete) em uma lista de produtos. Utilizamos os quatro métodos HTTP fundamentais e seguimos as melhores práticas para garantir que seja uma API RESTful.

## Paradigmas 
* Paradigma utilizado: Procedural

## Instalação e Configuração

## Tecnologias usadas:
* [Node.js](https://nodejs.org/en/download)
* [PostgreSQL](https://www.postgresql.org/download/) 

## Instale as dependências e bibliotecas:
* npm init -y
* npm install express sequelize pg nodemon dotenv


## Banco de dados:
* Crie um banco de dados chamado `Database` usando o PostgreSQL.
* Configure as variáveis de ambiente no arquivo `./config/.env`.
* Exemplo de configuração do PostgreSQL:
   - DB_HOST = localhost
   - DB_USER = user
   - DB_PASSWORD = password
   - DB_NAME = database
   - DB_PORT = 5432

## Testes:
* Os testes dos métodos HTTP da API foram feitos usando do software chamado [Postman](https://www.postman.com/downloads/)
* Teste todas as rotas para realizar os comandos CRUD da API.
* Dados iniciais para testes: Por padrão já se tem dados iniciais para os testes da API

## Rotas:
* `/read:` Retorna todos os dados do banco de dados no formato JSON.
* `/read/:id:` Retorna um dado específico pelo ID no formato JSON.
* `/create:` Cria um novo dado no formato JSON.
* `/update/:id:` Atualiza um dado existente no banco de dados usando JSON.
* `/delete/:id:` Deleta um dado existente no banco de dados usando o ID.

## Arquitetura MVC e módulos separados e organizados:
* `app.js:` Arquivo principal do projeto, lança o servidor HTTP na porta usando Express.
* `controlers/controller.js:` Controla as requisições, processa e retorna as respostas, além de gerenciar a lógica do CRUD usando Sequelize e o módulo de conexão com o Banco de dados.
* `db_connection/connection.js:` Faz a conexão com o banco de dados usando o Sequelize.
* `routes/rotas.js:` Define as rotas e os métodos HTTP usando Express.
* `models/modelo.js:` Responsável pela definição da tabela, colunas e tipos de dados usando o Sequelize.
