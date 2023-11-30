# Minha Primeira API RESTful CRUD

Bem-vindo à minha primeira API RESTful CRUD! Este projeto permite realizar operações básicas (Create, Read, Update, Delete) em uma lista de produtos, usando os 4 métodos HTTP básicos e usando das dicas para que seja uma API RESTful


## Instalação e Configuração

1. **Clone o repositório:**
    `bash:`
    `Comando para clonar o repositório:` git clone https://github.com/Lukemedrano2001/API-RESTful-CRUD.git


2. **Instale as dependências e bibliotecas:**
    `- Para iniciar o projeto e colocar as dependências no package.json:` npm init -y
    `- Dependências do projeto:`- npm install express sequelize body-parser pg nodemon dotenv


3. **Banco de dados:**
    `Banco de dados:` Crie um banco de dados chamado `Database` usando o PostgreSQL.
    `Variáveis de ambiente:` Configure as variáveis de ambiente no arquivo `./config/.env`.
    `Exemplo de configuração do PostgreSQL:`
        + DB_HOST = localhost
        + DB_USER = user
        + DB_PASSWORD = password
        + DB_NAME = database
        + DB_PORT = 5432


4. **Testes:**
    `Dados e testes na API CRUD:` Teste todas as rotas para realizar os comandos CRUD da API.
    `Dados iniciais para testes:` Por padrão já se tem dados iniciais para o primeiro teste da API


5.**Rotas:**
    `/read:` Retorna todos os dados do banco de dados no formato JSON.
    `/read/:id:` Retorna um dado específico pelo ID no formato JSON.
    /create: Cria um novo dado no formato JSON.
    `/update/:id:` Atualiza um dado existente no banco de dados usando JSON.
    `/delete/:id:` Deleta um dado existente no banco de dados usando o ID.


6.**Arquitetura MVC e módulos separados e organizados:**
    `app.js:` Arquivo principal do projeto, lança o servidor HTTP na porta usando Express.
    `controlers/controller.js:` Controla as requisições, processa e retorna as respostas, além de gerenciar a lógica do CRUD usando Sequelize e o módulo de conexão com o banco de dados.
    `db_connection/connection.js:` Faz a conexão com o banco de dados usando Sequelize.
    `routes/rotas.js:` Define as rotas e métodos HTTP usando Express.
    `models/modelo.js:` Responsável pela definição da tabela, colunas e tipos de dados usando Sequelize.


1. **Contribuição:**
    `Fork e Pull Request:` Sinta-se à vontade para abrir problemas ou enviar pull requests.


8. **Licença**
    `MIT License:` Este projeto está licenciado sob a MIT License.


9.**Contato:**
    `E-mail:` guilhermemedrano2001@gmail.com
    `nickname:` Lukemedrano2001
