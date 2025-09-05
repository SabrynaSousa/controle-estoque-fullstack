Sistema de Controle de Estoque








Sistema completo de controle de estoque, com backend em Spring Boot e frontend em React, que permite gerenciar produtos e visualizar o estoque através de uma interface web.

Tecnologias Utilizadas
Camada	Tecnologia	Descrição
Backend	Spring Boot	Framework Java para API REST
Backend	MySQL / H2	Banco de dados relacional (persistente ou in-memory)
Backend	JPA/Hibernate	ORM para comunicação com o banco
Backend	Swagger	Documentação automática da API REST
Frontend	React	Construção da interface de usuário
Frontend	TypeScript	Tipagem estática para JavaScript
Frontend	Axios	Cliente HTTP para requisições à API
Frontend	Tailwind CSS	Estilização rápida e responsiva
Como Iniciar o Projeto

Você precisará de duas janelas de terminal, uma para o backend e outra para o frontend.

1. Backend (Spring Boot)

Abra o projeto no editor de código (VS Code, Spring Tool Suite, etc.).

Certifique-se de que o MySQL está rodando ou use o H2 in-memory.

Execute a classe principal ControleDeEstoqueApplication.java ou use Maven:

mvn spring-boot:run


A API estará disponível em: http://localhost:8080

Documentação Swagger: http://localhost:8080/swagger-ui.html

H2 Console (In-Memory)

URL: http://localhost:8080/h2-console

JDBC URL: jdbc:h2:mem:estoquedb

User: sa

Password: password



2. Frontend (React)

Navegue até a pasta do frontend:

cd frontend


Instale as dependências:

npm install


Inicie a aplicação:

npm start


Acesse no navegador: http://localhost:3000

Funcionalidades        

Visualizar Produtos: Lista todos os produtos do estoque.

Adicionar Produtos: Formulário para cadastrar nome, preço e quantidade de novos produtos. A tabela atualiza automaticamente.




Contato & Contribuições  

Abra uma issue para problemas ou dúvidas.

Envie um pull request para melhorias.
