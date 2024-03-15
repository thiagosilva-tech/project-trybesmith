# Projeto Trybe Smith

O projeto é uma plataforma online onde usuários podem cadastrar e vender produtos artesanais. Os usuários podem se cadastrar, criar produtos, listar produtos disponíveis para venda e realizar login para acessar suas contas.

## Tecnologias Utilizadas

- **Node.js**: para o backend
- **Express.js**: para o roteamento
- **Sequelize**: como ORM para interação com o MySQL
- **MySQL**: como banco de dados
- **JWT**: para autenticação
- **Bcrypt**: para criptografia de senhas

## Requisitos do Projeto

1. **Endpoint para cadastro de produtos**:
  - Permite o cadastro de produtos na plataforma, associando-os a um usuário existente.
  - Testes cobrindo no mínimo 30% das camadas Service e Controller.
2. **Endpoint para listagem de produtos**:
  - Permite a listagem de todos os produtos cadastrados na plataforma.
  - Testes cobrindo no mínimo 50% das camadas Service e Controller.
3. **Endpoint para listar todos os usuários e seus respectivos produtos**:
  - Retorna uma lista de todos os usuários cadastrados, juntamente com os IDs de seus produtos.
  - Requer uma combinação de lógica dos modelos de usuário e produto.
  - Testes cobrindo no mínimo 60% das camadas Service e Controller.
4. **Endpoint para login de usuários**:
  - Permite que os usuários façam login na plataforma, gerando um token JWT para autenticação subsequente.
  - Testes cobrindo no mínimo 70% das camadas Service e Controller.
  - Realiza validações como a presença de campos obrigatórios, validade de credenciais e encriptação de senhas.
5. **Validações dos produtos**:
  - Realiza validações durante o cadastro de produtos, como a obrigatoriedade de campos, tipos de dados e existência de usuário associado.
  - Testes cobrindo no mínimo 80% das camadas Service e Controller.

## Conclusão

O projeto é uma aplicação robusta que permite aos usuários cadastrar, listar e vender produtos artesanais de forma segura e eficiente. Com uma arquitetura bem estruturada e testes abrangentes, o projeto garante a qualidade e confiabilidade das funcionalidades oferecidas aos usuários.
