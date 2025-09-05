# Sistema de Controle de Estoque

---

Este projeto é um **Sistema de Controle de Estoque** completo, desenvolvido com um **backend em Spring Boot** e um **frontend em React**. Ele permite o gerenciamento de produtos e a visualização do estoque através de uma interface web intuitiva e responsiva.

## Tecnologias Utilizadas

### Backend

* **Spring Boot:** Framework Java para construção da API REST.
* **MySQL / H2:** Banco de dados relacional. Pode ser configurado para persistência com MySQL ou para uso em memória com H2.
* **JPA/Hibernate:** ORM (Object-Relational Mapping) para facilitar a comunicação com o banco de dados.
* **Swagger:** Ferramenta para documentação automática da API REST, facilitando o entendimento dos endpoints.

### Frontend

* **React:** Biblioteca JavaScript para construção da interface de usuário (UI).
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática, garantindo maior robustez ao código.
* **Axios:** Cliente HTTP para realizar requisições à API.
* **Tailwind CSS:** Framework CSS para estilização rápida e responsiva.

---

## Como Iniciar o Projeto

Para rodar o projeto, você precisará de duas janelas de terminal: uma para o backend e outra para o frontend.

### 1. Backend (Spring Boot)

1.  Abra o projeto no seu editor de código (VS Code, Spring Tool Suite, etc.).
2.  Certifique-se de que o **MySQL** está em execução ou, alternativamente, use o **H2 in-memory** para um ambiente rápido de desenvolvimento.
3.  Execute a classe principal `ControleDeEstoqueApplication.java` ou utilize o Maven:
    ```bash
    mvn spring-boot:run
    ```
4.  A API estará disponível em: [http://localhost:8080](http://localhost:8080)
5.  A documentação da API (Swagger UI) pode ser acessada em: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
6.  Caso esteja usando o H2 Console (In-Memory), os detalhes de acesso são:
    * **URL:** `http://localhost:8080/h2-console`
    * **JDBC URL:** `jdbc:h2:mem:estoquedb`
    * **User:** `sa`
    * **Password:** `password`

### 2. Frontend (React)

1.  Navegue até a pasta do frontend no terminal:
    ```bash
    cd frontend
    ```
2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```
3.  Inicie a aplicação:
    ```bash
    npm start
    ```
4.  Acesse a aplicação no seu navegador: [http://localhost:3000](http://localhost:3000)

---

## Funcionalidades

* **Visualizar Produtos:** Exibe uma lista de todos os produtos cadastrados no estoque.
* **Adicionar Produtos:** Permite o cadastro de novos produtos através de um formulário simples, que inclui nome, preço e quantidade. A tabela de produtos é atualizada automaticamente após o cadastro.

---

## Contato & Contribuições

Sinta-se à vontade para contribuir com o projeto!

* **Problemas e Dúvidas:** Abra uma **issue** para reportar bugs ou fazer perguntas.
* **Melhorias:** Envie um **pull request** com suas sugestões e melhorias.
